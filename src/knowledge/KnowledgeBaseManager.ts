import { DatabaseSync } from "node:sqlite";
import { join, dirname, sep } from "path";
import { readdirSync, readFileSync, mkdirSync, statSync, existsSync } from "fs";
import logger from "../utils/logger.js";
import { knowledgeDbPath } from "../utils/config.js";
import { sanitizeFtsTerms } from "../utils/fts.js";

export class KnowledgeBaseManager {
  private db!: DatabaseSync;
  private dbPath: string;

  constructor(dataDir?: string) {
    if (dataDir) {
      this.dbPath = join(dataDir, "pz_knowledge.db");
      mkdirSync(dataDir, { recursive: true });
    } else {
      // Default: PZ_MCP_DATA_DIR/data/pz_knowledge.db (freebuff M4)
      this.dbPath = knowledgeDbPath();
      mkdirSync(dirname(this.dbPath), { recursive: true });
    }
  }

  async initialize(): Promise<void> {
    this.db = new DatabaseSync(this.dbPath);
    this.db.exec("PRAGMA journal_mode = WAL");

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_docs (
        topic TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        source TEXT,
        content TEXT NOT NULL,
        mtime TEXT,
        file_path TEXT
      )
    `);

    // Migration for pre-N5 databases: add the incremental-indexing columns
    // (mtime for change detection, file_path so deleted files can be pruned).
    const cols = this.db
      .prepare("PRAGMA table_info(knowledge_docs)")
      .all() as Array<{ name: string }>;
    const colNames = new Set(cols.map((c) => c.name));
    if (!colNames.has("mtime")) {
      this.db.exec("ALTER TABLE knowledge_docs ADD COLUMN mtime TEXT");
    }
    if (!colNames.has("file_path")) {
      this.db.exec("ALTER TABLE knowledge_docs ADD COLUMN file_path TEXT");
    }

    this.db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
        topic, title, source, content, tokenize='unicode61'
      )
    `);
  }

  async indexDirectory(
    dirPath: string,
    opts?: { overwrite?: boolean },
  ): Promise<{
    topics: number;
    files: number;
    chars: number;
    skipped: number;
    removed: number;
    errors: Array<{ file: string; message: string }>;
  }> {
    // overwrite=true (default): full re-index of every file.
    // overwrite=false: mtime-based incremental sync (freebuff N5) — files
    // whose mtime is unchanged are skipped, changed files are re-indexed, and
    // topics whose source file disappeared are pruned. The old behavior was a
    // crude "skip existing topics entirely"; mtime diffing is what makes the
    // incremental mode actually useful.
    const overwrite = opts?.overwrite ?? true;
    const files = this.collectMdFiles(dirPath);
    let topics = 0;
    let totalChars = 0;
    let skipped = 0;
    let removed = 0;
    const errors: Array<{ file: string; message: string }> = [];

    const deleteFtsStmt = this.db.prepare(`
      DELETE FROM knowledge_fts WHERE rowid IN (
        SELECT rowid FROM knowledge_docs WHERE topic = ?
      )
    `);

    const insertDocStmt = this.db.prepare(`
      INSERT OR REPLACE INTO knowledge_docs (topic, title, source, content, mtime, file_path)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const insertFtsStmt = this.db.prepare(`
      INSERT INTO knowledge_fts(rowid, topic, title, source, content)
      VALUES (last_insert_rowid(), ?, ?, ?, ?)
    `);

    for (const filePath of files) {
      try {
        // mtime is the change signal for incremental sync (N5).
        const mtime = String(statSync(filePath).mtimeMs);
        const rawContent = readFileSync(filePath, "utf-8");
        // Strip any YAML frontmatter block: its title/source keys are used
        // as metadata below, and it must not be indexed as body text.
        const { meta, body } = this.parseFrontmatter(rawContent);
        const content = body;
        const filename = filePath.split(/[/\\]/).pop() || "";
        const topic = filename.replace(/\.md$/, "");

        if (!overwrite) {
          // Incremental: skip only when the stored mtime matches the file's.
          const existing = this.db
            .prepare("SELECT topic, mtime FROM knowledge_docs WHERE topic = ?")
            .get(topic) as unknown as
            { topic: string; mtime: string | null } | undefined;
          if (existing && existing.mtime === mtime) {
            skipped++;
            continue;
          }
        }

        const lines = content.split("\n");
        // Title priority: frontmatter `title`, then first H1, then filename.
        const fmTitle = meta.title?.trim() || "";
        let title: string;
        if (fmTitle.length > 0) {
          title = fmTitle;
        } else {
          title = filename;
          for (const line of lines) {
            if (line.startsWith("# ")) {
              title = line.slice(2).trim();
              break;
            }
          }
        }

        // Source priority: frontmatter `source`, then `> Source:` blockquote.
        const fmSource = meta.source?.trim() || "";
        let source: string;
        if (fmSource.length > 0) {
          source = fmSource;
        } else {
          source = "";
          for (const line of lines) {
            if (line.startsWith("> Source:")) {
              source = line.slice("> Source:".length).trim();
              break;
            }
          }
        }

        this.db.exec("BEGIN");
        try {
          deleteFtsStmt.run(topic);
          insertDocStmt.run(topic, title, source, content, mtime, filePath);
          insertFtsStmt.run(topic, title, source, content);
          this.db.exec("COMMIT");
        } catch (e) {
          this.db.exec("ROLLBACK");
          throw e;
        }

        topics++;
        totalChars += content.length;
      } catch (err: any) {
        errors.push({ file: filePath, message: err.message || String(err) });
        logger.error(err, "Failed to index file: %s", filePath);
      }
    }

    // Incremental sync: prune topics whose source file has disappeared from
    // this docs tree (N5). Rows without a file_path (pre-migration) are left
    // alone; topics tracked with a file_path that no longer exists are removed
    // together with their FTS rows.
    if (!overwrite) {
      // Separator-terminated prefix so a sibling dir (e.g. /tmp/kb2) can never
      // match a tree rooted at /tmp/kb (code-review follow-up).
      const dirPrefix = dirPath.endsWith(sep) ? dirPath : `${dirPath}${sep}`;
      const docs = this.db
        .prepare("SELECT topic, file_path FROM knowledge_docs")
        .all() as unknown as Array<{ topic: string; file_path: string | null }>;
      for (const doc of docs) {
        if (
          doc.file_path &&
          doc.file_path.startsWith(dirPrefix) &&
          !existsSync(doc.file_path)
        ) {
          this.db.exec("BEGIN");
          try {
            deleteFtsStmt.run(doc.topic);
            this.db
              .prepare("DELETE FROM knowledge_docs WHERE topic = ?")
              .run(doc.topic);
            this.db.exec("COMMIT");
            removed++;
          } catch (e) {
            this.db.exec("ROLLBACK");
            throw e;
          }
        }
      }
    }

    return {
      topics,
      files: files.length,
      chars: totalChars,
      skipped,
      removed,
      errors,
    };
  }

  async search(
    query: string,
    opts?: { topic?: string; limit?: number },
  ): Promise<
    Array<{ topic: string; title: string; snippet: string; score: number }>
  > {
    const sanitized = this.sanitizeFtsQuery(query);
    if (sanitized.length === 0) {
      return [];
    }

    const limit = Math.min(opts?.limit ?? 10, 100);
    const ftsQuery = sanitized.map((t) => `"${t}"`).join(" ");

    // FTS5: bm25() is a scalar ranking function taking the table name.
    // It returns more-negative = more relevant; ASC surfaces best matches.
    let sql = `
      SELECT k.topic, k.title, k.content, bm25(knowledge_fts) AS rank
      FROM knowledge_fts
      JOIN knowledge_docs k ON k.rowid = knowledge_fts.rowid
      WHERE knowledge_fts MATCH ?
    `;
    const params: any[] = [ftsQuery];

    if (opts?.topic) {
      sql += " AND k.topic = ?";
      params.push(opts.topic);
    }

    sql += " ORDER BY rank ASC LIMIT ?";
    params.push(limit);

    const rows = this.db.prepare(sql).all(...params) as Array<{
      topic: string;
      title: string;
      content: string;
      rank: number;
    }>;

    const firstTerm = sanitized[0]?.toLowerCase() || "";

    return rows.map((row) => {
      const snippet = this.buildSnippet(row.content, firstTerm);
      const score = Math.round(-row.rank * 1000) / 1000;
      return {
        topic: row.topic,
        title: row.title,
        snippet,
        score,
      };
    });
  }

  async listTopics(): Promise<
    Array<{
      topic: string;
      title: string;
      lines: number;
      words: number;
      chars: number;
    }>
  > {
    const rows = this.db
      .prepare(
        "SELECT topic, title, content FROM knowledge_docs ORDER BY topic ASC",
      )
      .all() as Array<{ topic: string; title: string; content: string }>;

    return rows.map((row) => {
      const lines = row.content.split("\n").length;
      const words = row.content.trim()
        ? row.content.trim().split(/\s+/).length
        : 0;
      const chars = row.content.length;
      return {
        topic: row.topic,
        title: row.title,
        lines,
        words,
        chars,
      };
    });
  }

  async getTopic(topic: string): Promise<{
    topic: string;
    title: string;
    content: string;
    lines: number;
    words: number;
    chars: number;
  } | null> {
    const row = this.db
      .prepare(
        "SELECT topic, title, content FROM knowledge_docs WHERE topic = ?",
      )
      .get(topic) as unknown as
      { topic: string; title: string; content: string } | undefined;

    if (!row) return null;

    const lines = row.content.split("\n").length;
    const words = row.content.trim()
      ? row.content.trim().split(/\s+/).length
      : 0;
    const chars = row.content.length;
    return {
      topic: row.topic,
      title: row.title,
      content: row.content,
      lines,
      words,
      chars,
    };
  }

  close(): void {
    if (this.db) {
      this.db.close();
    }
  }

  private collectMdFiles(dirPath: string): string[] {
    const results: string[] = [];
    const entries = readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "wiki" || entry.name === "AdvancedGenerators") {
          continue;
        }
        results.push(...this.collectMdFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        if (entry.name === "README.md") {
          continue;
        }
        results.push(fullPath);
      }
    }

    return results;
  }

  private sanitizeFtsQuery(query: string): string[] {
    // Shared with DatabaseManager (freebuff L3)
    return sanitizeFtsTerms(query);
  }

  private buildSnippet(content: string, firstTerm: string): string {
    if (firstTerm) {
      const idx = content.toLowerCase().indexOf(firstTerm.toLowerCase());
      if (idx !== -1) {
        const end = Math.min(content.length, idx + 200);
        return content.slice(idx, end);
      }
    }
    return content.slice(0, 200);
  }

  /**
   * Parse a leading YAML frontmatter block (`---` ... `---`) into a
   * key/value map and return the remaining body. No-op (meta empty, body
   * unchanged) when the file has no frontmatter or an unterminated opener.
   * Keys are lower-cased; quoted values are stripped. Dependency-free.
   */
  private parseFrontmatter(content: string): {
    meta: Record<string, string>;
    body: string;
  } {
    const lines = content.split("\n");
    if (lines[0]?.trim() !== "---") {
      return { meta: {}, body: content };
    }
    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") {
        endIndex = i;
        break;
      }
    }
    if (endIndex === -1) {
      // Opening '---' without a closing delimiter is not frontmatter.
      return { meta: {}, body: content };
    }
    const meta: Record<string, string> = {};
    for (let i = 1; i < endIndex; i++) {
      const colonIndex = lines[i].indexOf(":");
      if (colonIndex === -1) {
        continue;
      }
      const key = lines[i].slice(0, colonIndex).trim().toLowerCase();
      let value = lines[i].slice(colonIndex + 1).trim();
      if (
        value.length >= 2 &&
        ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'")))
      ) {
        value = value.slice(1, -1);
      }
      if (key.length > 0) {
        meta[key] = value;
      }
    }
    return { meta, body: lines.slice(endIndex + 1).join("\n") };
  }
}
