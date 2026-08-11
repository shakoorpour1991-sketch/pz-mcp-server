import { DatabaseSync } from "node:sqlite";
import { join, dirname, relative, sep } from "path";
import { mkdirSync } from "fs";
import { readFile, stat, readdir, access } from "fs/promises";
import logger from "../utils/logger.js";
import { knowledgeDbPath } from "../utils/config.js";
import { sanitizeFtsTerms } from "../utils/fts.js";
import { parseKbDoc, type KbDocType } from "./kbChunker.js";

/**
 * KB schema version. v1 (legacy) stored one full-copy row per file in
 * knowledge_docs + a full-copy knowledge_fts; v2 stores file metadata only in
 * knowledge_docs, per-section chunks in knowledge_chunks, and an external-
 * content FTS index over the chunks (porter-stemmed, prefix-matched). v3 adds
 * an additive `bodyless` column to knowledge_chunks (tagged bare-signature /
 * empty-section chunks so ranking can downweight them) — no re-index needed
 * for existing v2 databases. The KB DB is a disposable cache, so the v1 → v2
 * migration is a clean drop + recreate: index tools repopulate.
 */
const KB_SCHEMA_VERSION = 3;

export class KnowledgeBaseManager {
  private db!: DatabaseSync;
  private dbPath: string;
  private readonly skipDirs: string[];
  private readonly skipFiles: string[];

  constructor(
    dataDir?: string,
    options?: { skipDirs?: string[]; skipFiles?: string[] },
  ) {
    // Directories/files skipped by collectMdFiles (qwen audit G5: were
    // hard-coded to ["wiki", "AdvancedGenerators"] + "README.md").
    // `javadocs` is excluded from the generic KB walk: the shipped distilled
    // JavaDocs markdown lives at knowledge-base/javadocs/ and is indexed by
    // the dedicated index_javadocs tool (which defaults to it), keeping the
    // two tools' responsibilities distinct and index_knowledge_base's default
    // scope unchanged (~200 docs, not ~4,900).
    this.skipDirs = options?.skipDirs ?? ["AdvancedGenerators", "javadocs"];
    this.skipFiles = options?.skipFiles ?? ["README.md"];
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
    this.ensureSchema();
  }

  private schemaVersion(): number {
    const row = this.db.prepare("PRAGMA user_version").get() as {
      user_version: number;
    };
    return row.user_version;
  }

  /**
   * Create the v3 schema (docs metadata + chunks + external-content FTS +
   * bodyless flag). Legacy v1 tables (full-copy knowledge_docs/knowledge_fts)
   * are dropped on migration — the KB is a disposable cache and the chunk
   * representation is incompatible with the old rows. v2 → v3 is additive
   * (ALTER TABLE ADD COLUMN), so existing v2 indexes survive without a
   * re-index.
   */
  private ensureSchema(): void {
    const version = this.schemaVersion();
    const hasLegacy =
      (
        this.db
          .prepare(
            "SELECT name FROM sqlite_master WHERE type='table' AND name IN ('knowledge_docs','knowledge_fts')",
          )
          .all() as unknown as Array<{ name: string }>
      ).length > 0;
    // v1, or an unversioned DB that already carries legacy v1 tables (the
    // legacy test fixture never sets user_version), → clean drop + recreate:
    // the KB is a disposable cache and the chunk representation is
    // incompatible with the old rows. A brand-new DB (version 0, no tables)
    // takes the same path — the drops are no-ops. Only log when a legacy v1
    // table was actually present and is being replaced.
    if (version < 2) {
      this.db.exec("DROP TABLE IF EXISTS knowledge_chunks_fts");
      this.db.exec("DROP TABLE IF EXISTS knowledge_chunks");
      this.db.exec("DROP TABLE IF EXISTS knowledge_docs");
      this.db.exec("DROP TABLE IF EXISTS knowledge_fts");
      if (hasLegacy) {
        logger.info(
          "Knowledge base schema migrated to v%d (chunked, external-content FTS) — re-run index_knowledge_base / index_javadocs to repopulate",
          KB_SCHEMA_VERSION,
        );
      }
    }

    // One row per FILE: metadata + precomputed stats only (no content — it
    // lives in knowledge_chunks). Column order matters: the first seven
    // columns must mirror the FTS column order positionally (external-content
    // alignment), so title/source/doc_type/tags come before heading/seq.
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_docs (
        topic TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        source TEXT,
        doc_type TEXT NOT NULL,
        tags TEXT,
        meta TEXT,
        lines INTEGER NOT NULL DEFAULT 0,
        words INTEGER NOT NULL DEFAULT 0,
        chars INTEGER NOT NULL DEFAULT 0,
        mtime TEXT,
        file_path TEXT
      )
    `);

    // One row per section/member chunk.
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_chunks (
        rowid INTEGER PRIMARY KEY AUTOINCREMENT,
        chunk_topic TEXT NOT NULL UNIQUE,
        doc_topic TEXT NOT NULL,
        title TEXT NOT NULL,
        source TEXT,
        doc_type TEXT NOT NULL,
        tags TEXT,
        content TEXT NOT NULL,
        heading TEXT,
        heading_level INTEGER,
        seq INTEGER NOT NULL,
        bodyless INTEGER NOT NULL DEFAULT 0
      )
    `);
    this.db.exec(`
      CREATE INDEX IF NOT EXISTS idx_knowledge_chunks_doc
        ON knowledge_chunks (doc_topic)
    `);

    // External-content FTS over the chunks: the index stores only the term →
    // rowid map (no text copy), roughly halving DB size vs the v1 full-copy
    // table. `porter unicode61` stems ("reload" matches "reloads").
    this.db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_chunks_fts USING fts5(
        chunk_topic,
        doc_topic,
        title,
        source,
        doc_type,
        tags,
        content,
        content='knowledge_chunks',
        content_rowid='rowid',
        tokenize='porter unicode61'
      )
    `);

    // Triggers keep the FTS index in sync (same pattern as items_fts).
    this.db.exec(`
      DROP TRIGGER IF EXISTS knowledge_chunks_ai;
      CREATE TRIGGER knowledge_chunks_ai AFTER INSERT ON knowledge_chunks BEGIN
        INSERT INTO knowledge_chunks_fts(rowid, chunk_topic, doc_topic, title, source, doc_type, tags, content)
        VALUES (new.rowid, new.chunk_topic, new.doc_topic, new.title, new.source, new.doc_type, new.tags, new.content);
      END
    `);
    this.db.exec(`
      DROP TRIGGER IF EXISTS knowledge_chunks_ad;
      CREATE TRIGGER knowledge_chunks_ad AFTER DELETE ON knowledge_chunks BEGIN
        INSERT INTO knowledge_chunks_fts(knowledge_chunks_fts, rowid, chunk_topic, doc_topic, title, source, doc_type, tags, content)
        VALUES ('delete', old.rowid, old.chunk_topic, old.doc_topic, old.title, old.source, old.doc_type, old.tags, old.content);
      END
    `);
    this.db.exec(`
      DROP TRIGGER IF EXISTS knowledge_chunks_au;
      CREATE TRIGGER knowledge_chunks_au AFTER UPDATE ON knowledge_chunks BEGIN
        INSERT INTO knowledge_chunks_fts(knowledge_chunks_fts, rowid, chunk_topic, doc_topic, title, source, doc_type, tags, content)
        VALUES ('delete', old.rowid, old.chunk_topic, old.doc_topic, old.title, old.source, old.doc_type, old.tags, old.content);
        INSERT INTO knowledge_chunks_fts(rowid, chunk_topic, doc_topic, title, source, doc_type, tags, content)
        VALUES (new.rowid, new.chunk_topic, new.doc_topic, new.title, new.source, new.doc_type, new.tags, new.content);
      END
    `);

    // v2 → v3: additive bodyless column. Only a true v2 DB needs the ALTER —
    // fresh (v0) and legacy-v1 DBs already recreated the table with the
    // column above. Existing v2 rows default to 0 (not bodyless) until
    // re-indexed, which is a safe conservative default.
    if (version === 2) {
      this.db.exec(
        "ALTER TABLE knowledge_chunks ADD COLUMN bodyless INTEGER NOT NULL DEFAULT 0",
      );
      logger.info(
        "Knowledge base schema migrated to v3 (bodyless chunk flag) — bodyless javadocs signatures are downweighted in mixed search",
      );
    }

    this.db.exec(`PRAGMA user_version = ${KB_SCHEMA_VERSION}`);
  }

  async indexDirectory(
    dirPath: string,
    opts?: { overwrite?: boolean; topicPrefix?: string },
  ): Promise<{
    topics: number;
    files: number;
    chars: number;
    chunks: number;
    skipped: number;
    removed: number;
    errors: Array<{ file: string; message: string }>;
  }> {
    // overwrite=true (default): full re-index of every file.
    // overwrite=false: mtime-based incremental sync (freebuff N5) — files
    // whose mtime is unchanged are skipped, changed files are re-indexed, and
    // topics whose source file disappeared are pruned.
    // topicPrefix: prepended to the topic (e.g. index_javadocs → 'javadocs')
    // so docs from a flat directory still carry their namespace (KB v2).
    const overwrite = opts?.overwrite ?? true;
    const topicPrefix = opts?.topicPrefix?.replace(/[/\\]+$/, "") ?? "";
    const files = await this.collectMdFiles(dirPath);
    let topics = 0;
    let totalChars = 0;
    let totalChunks = 0;
    let skipped = 0;
    let removed = 0;
    const errors: Array<{ file: string; message: string }> = [];

    const selectDocStmt = this.db.prepare(
      "SELECT topic, mtime FROM knowledge_docs WHERE topic = ?",
    );
    const deleteChunksStmt = this.db.prepare(
      "DELETE FROM knowledge_chunks WHERE doc_topic = ?",
    );
    const deleteDocStmt = this.db.prepare(
      "DELETE FROM knowledge_docs WHERE topic = ?",
    );
    const insertDocStmt = this.db.prepare(`
      INSERT OR REPLACE INTO knowledge_docs
        (topic, title, source, doc_type, tags, meta, lines, words, chars, mtime, file_path)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const insertChunkStmt = this.db.prepare(`
      INSERT INTO knowledge_chunks
        (chunk_topic, doc_topic, title, source, doc_type, tags, content, heading, heading_level, seq, bodyless)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    // One transaction for the whole pass. Per-file SAVEPOINTs keep a single
    // bad file from rolling back the rest while preserving all-or-nothing
    // semantics per file.
    this.db.exec("BEGIN");
    try {
      for (const filePath of files) {
        try {
          // mtime is the change signal for incremental sync (N5). The skip
          // check runs BEFORE readFile/parse so an unchanged pass over ~4,700
          // javadocs never reads or chunks anything.
          const mtime = String((await stat(filePath)).mtimeMs);
          const relPath = relative(dirPath, filePath).split(sep).join("/");
          const bareTopic = relPath.replace(/\.md$/i, "");
          const docTopic =
            topicPrefix.length > 0 ? `${topicPrefix}/${bareTopic}` : bareTopic;

          if (!overwrite) {
            // Incremental: skip only when the stored mtime matches the file's.
            const existing = selectDocStmt.get(docTopic) as unknown as
              { topic: string; mtime: string | null } | undefined;
            if (existing && existing.mtime === mtime) {
              skipped++;
              continue;
            }
          }

          const rawContent = await readFile(filePath, "utf-8");
          const parsed = parseKbDoc(rawContent, relPath);

          // Stats are computed at index time (KB v2 #9) so listTopics never
          // reads content — the assembled chunk text is the stored body.
          const content = parsed.chunks.map((c) => c.content).join("\n\n");
          const lines = content.split("\n").length;
          const words = content.trim() ? content.trim().split(/\s+/).length : 0;
          const chars = content.length;

          this.db.exec("SAVEPOINT idx_file");
          try {
            // Chunk deletes cascade to the FTS index via triggers.
            deleteChunksStmt.run(docTopic);
            deleteDocStmt.run(docTopic);
            insertDocStmt.run(
              docTopic,
              parsed.title,
              parsed.source || null,
              parsed.docType,
              JSON.stringify(parsed.tags),
              JSON.stringify(parsed.meta),
              lines,
              words,
              chars,
              mtime,
              filePath,
            );
            for (const chunk of parsed.chunks) {
              // The chunker computed ids against the unprefixed doc topic;
              // rebase the `#slug` onto the final (possibly prefixed) topic.
              const slug = chunk.chunkTopic.slice(
                chunk.chunkTopic.indexOf("#"),
              );
              insertChunkStmt.run(
                `${docTopic}${slug}`,
                docTopic,
                chunk.title,
                parsed.source || null,
                parsed.docType,
                JSON.stringify(parsed.tags),
                chunk.content,
                chunk.heading,
                chunk.headingLevel,
                chunk.seq,
                chunk.bodyless ? 1 : 0,
              );
            }
            this.db.exec("RELEASE idx_file");
          } catch (e) {
            this.db.exec("ROLLBACK TO idx_file");
            this.db.exec("RELEASE idx_file");
            throw e;
          }

          topics++;
          totalChars += chars;
          totalChunks += parsed.chunks.length;
        } catch (err: any) {
          errors.push({ file: filePath, message: err.message || String(err) });
          logger.error(err, "Failed to index file: %s", filePath);
        }
      }
      this.db.exec("COMMIT");
    } catch (err) {
      this.db.exec("ROLLBACK");
      throw err;
    }

    // Incremental sync: prune topics whose source file has disappeared from
    // this docs tree (N5). Rows without a file_path (pre-migration) are left
    // alone; topics tracked with a file_path that no longer exists are
    // removed together with their chunks (FTS follows via triggers).
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
          !(await this.pathExists(doc.file_path))
        ) {
          this.db.exec("BEGIN");
          try {
            deleteChunksStmt.run(doc.topic);
            deleteDocStmt.run(doc.topic);
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
      chunks: totalChunks,
      skipped,
      removed,
      errors,
    };
  }

  async search(
    query: string,
    opts?: {
      topic?: string;
      limit?: number;
      /** Single-select doc type (alias for a one-element `types`). */
      type?: KbDocType;
      /** Multi-select doc types (e.g. ["research", "wiki"] — prose only). */
      types?: KbDocType[];
      package?: string;
      /** Return full chunk bodies inline (search + read in one call). */
      includeContent?: boolean;
      /** Total char budget for includeContent bodies across results. */
      maxContent?: number;
    },
  ): Promise<
    Array<{
      /** Chunk id (`docTopic#slug`) — the exact unit to read. */
      topic: string;
      /** Parent file-level topic (e.g. `wiki/Java`). */
      docTopic: string;
      docTitle: string;
      /** Chunk title (member signature or section heading). */
      title: string;
      section?: string;
      snippet: string;
      score: number;
      /** Portable doc type (wiki/api-docs/javadocs/...). */
      type: KbDocType;
      source: string;
      package?: string;
      /** Source file path — machine-specific, for provenance only. */
      path?: string;
      /** Read-cost estimate (chars/words) — lets agents budget context. */
      chars: number;
      words: number;
      /** Full chunk body, when includeContent was requested (budget-capped). */
      content?: string;
      /** True when the inline body was truncated by the maxContent budget. */
      contentTruncated?: boolean;
    }>
  > {
    const sanitized = this.sanitizeFtsQuery(query);
    if (sanitized.length === 0) {
      return [];
    }

    const limit = Math.min(opts?.limit ?? 10, 100);
    const includeContent = opts?.includeContent ?? false;
    const maxContent = Math.min(Math.max(opts?.maxContent ?? 8_000, 1), 20_000);

    // Finding 4 — prefix overmatch: the last term used to always become a
    // prefix, so "cooking" matched "cookie"/"cookwareLoot". Porter stemming
    // already makes exact tokens match every inflection (cooking/cooked/… all
    // stem to "cook"), so prefix expansion is now a *fallback*: run the plain
    // query first and only re-run with the last term prefix-expanded when it
    // returns nothing (preserving search-as-you-type for partial identifiers
    // like "getPlay" → getPlayer). Short last terms (< 3 chars) never expand.
    const lastTerm = sanitized[sanitized.length - 1];
    const plainFts = sanitized.map((t) => `"${t}"`).join(" ");
    const prefixFts =
      lastTerm.length >= 3
        ? `${plainFts.slice(0, -(lastTerm.length + 2))}"${lastTerm}"*`
        : plainFts;

    // Finding 1 — type-aware defaults: 96.8% of chunks are javadocs and 73%
    // of those are bodyless constants, so a flat bm25 ranking floods natural-
    // language queries with constants. A mixed search (no explicit type or
    // package filter) ranks prose docs (wiki/research/api-docs/mods-analysis)
    // first when the query reads like natural language, and javadocs first
    // when it looks like an identifier (camelCase/dotted/snake/digits). An
    // explicit filter always uses pure bm25 rank.
    const typeFilter = opts?.types?.length
      ? opts.types
      : opts?.type
        ? [opts.type]
        : [];
    const explicitTypeFilter =
      typeFilter.length > 0 || (opts?.package ?? "").length > 0;
    const identifierLike = this.looksLikeIdentifier(query);

    // Finding 6 — bm25 column weights: chunk_topic (member id slugs), title
    // (signatures/headings) and tags carry the identifier signal and should
    // outweigh the long content body (content 1.0 vs topic 5.0).
    const B = "bm25(knowledge_chunks_fts, 5.0, 1.0, 3.0, 1.0, 1.0, 2.0, 1.0)";
    // Finding 9 — bodyless downweight: in natural-language mixed searches a
    // bare-signature chunk gets a rank penalty so prose with the same term
    // density outranks it (identifier searches and explicit filters keep pure
    // rank — a bodyless constant IS the answer for "BLACKSMITH_ANVIL").
    const rankExpr =
      !explicitTypeFilter && !identifierLike
        ? `${B} + CASE WHEN c.bodyless = 1 THEN 8.0 ELSE 0 END`
        : B;
    const typeOrd = explicitTypeFilter
      ? null
      : identifierLike
        ? "CASE WHEN f.doc_type = 'javadocs' THEN 0 ELSE 1 END"
        : "CASE WHEN f.doc_type = 'javadocs' THEN 1 ELSE 0 END";

    interface SearchRow {
      chunk_topic: string;
      doc_topic: string;
      chunk_title: string;
      source: string | null;
      doc_type: string;
      heading: string | null;
      content: string;
      bodyless: number;
      doc_title: string;
      meta: string | null;
      file_path: string | null;
      rank: number;
    }
    const run = (ftsQuery: string): SearchRow[] => {
      let sql = `
        SELECT f.chunk_topic, f.doc_topic, f.title AS chunk_title, f.source,
               f.doc_type, c.heading, c.content, c.bodyless,
               d.title AS doc_title, d.meta, d.file_path,
               ${rankExpr} AS rank
        FROM knowledge_chunks_fts f
        JOIN knowledge_chunks c ON c.rowid = f.rowid
        JOIN knowledge_docs d ON d.topic = f.doc_topic
        WHERE knowledge_chunks_fts MATCH ?
      `;
      const params: any[] = [ftsQuery];

      if (opts?.topic) {
        sql += " AND f.doc_topic = ?";
        params.push(opts.topic);
      }
      if (typeFilter.length > 0) {
        sql += ` AND f.doc_type IN (${typeFilter.map(() => "?").join(",")})`;
        params.push(...typeFilter);
      }
      if (opts?.package) {
        sql += " AND json_extract(d.meta, '$.package') = ?";
        params.push(opts.package);
      }

      sql += typeOrd
        ? ` ORDER BY ${typeOrd} ASC, rank ASC LIMIT ?`
        : " ORDER BY rank ASC LIMIT ?";
      params.push(limit);
      return this.db.prepare(sql).all(...params) as unknown as SearchRow[];
    };

    let rows = run(plainFts);
    if (rows.length === 0 && prefixFts !== plainFts) {
      rows = run(prefixFts);
    }

    // Finding 2 — inline content: fill results in order until the total
    // budget is spent; the first overflow is truncated, later results omit
    // content (the caller gets search + read for the top hits in one call).
    let budget = includeContent ? maxContent : 0;

    return rows.map((row) => {
      const snippet = this.buildSnippet(row.content, sanitized);
      const score = Math.round(-row.rank * 1000) / 1000;
      let meta: Record<string, string> = {};
      if (row.meta) {
        try {
          meta = JSON.parse(row.meta);
        } catch {
          meta = {};
        }
      }
      // Finding 3 — size metadata: chars/words computed in memory (no extra
      // query) so an agent can budget context before reading.
      const chars = row.content.length;
      const words = row.content.trim()
        ? row.content.trim().split(/\s+/).length
        : 0;
      let content: string | undefined;
      let contentTruncated: boolean | undefined;
      if (includeContent && budget > 0) {
        if (row.content.length <= budget) {
          content = row.content;
        } else {
          content = `${row.content.slice(0, budget).trimEnd()}…`;
          contentTruncated = true;
        }
        budget = Math.max(0, budget - row.content.length);
      }
      const result: {
        topic: string;
        docTopic: string;
        docTitle: string;
        title: string;
        section?: string;
        snippet: string;
        score: number;
        type: KbDocType;
        source: string;
        package?: string;
        path?: string;
        chars: number;
        words: number;
        content?: string;
        contentTruncated?: boolean;
      } = {
        topic: row.chunk_topic,
        docTopic: row.doc_topic,
        docTitle: row.doc_title,
        title: row.chunk_title,
        snippet,
        score,
        type: row.doc_type as KbDocType,
        source: row.source ?? "",
        chars,
        words,
      };
      if (row.heading !== null) result.section = row.heading;
      if (meta.package) result.package = meta.package;
      if (row.file_path !== null) result.path = row.file_path;
      if (content !== undefined) result.content = content;
      if (contentTruncated !== undefined)
        result.contentTruncated = contentTruncated;
      return result;
    });
  }

  /**
   * Heuristic: does the query look like an identifier (method name, class
   * name, constant, dotted id) rather than natural-language prose? Used by
   * search's type-aware defaults — identifier queries rank javadocs first.
   * Kept deliberately conservative: plain capitalized prose ("Farming",
   * "Blacksmithing") and standalone numbers ("anvil 42") stay
   * natural-language so prose docs rank first, while camelCase transitions
   * (getPlayer), ALL_CAPS constants (ANVIL_WEIGHT), dotted names
   * (Base.Hammer, zombie.iso.IsoObject — but NOT a version like "42.20"),
   * snake_case, and letter-digit adjacency (b42, getPlayer2) all fire.
   */
  private looksLikeIdentifier(query: string): boolean {
    const q = query.trim();
    if (q.length === 0) return false;
    return (
      /[a-z][A-Z]/.test(q) || // camelCase / PascalCase transition
      /[A-Z]{2,}/.test(q) || // ALL_CAPS constants / acronyms
      /[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(q) || // dotted ids, not "42.20"
      /_/.test(q) || // snake_case
      /[a-zA-Z]\d|\d[a-zA-Z]/.test(q) // letter-digit adjacency: b42
    );
  }

  async listTopics(): Promise<
    Array<{
      topic: string;
      title: string;
      docType: KbDocType;
      lines: number;
      words: number;
      chars: number;
    }>
  > {
    // Stats are stored columns now — no content is read (KB v2 #9).
    const rows = this.db
      .prepare(
        "SELECT topic, title, doc_type, lines, words, chars FROM knowledge_docs ORDER BY topic ASC",
      )
      .all() as unknown as Array<{
      topic: string;
      title: string;
      doc_type: string;
      lines: number;
      words: number;
      chars: number;
    }>;

    return rows.map((row) => ({
      topic: row.topic,
      title: row.title,
      docType: row.doc_type as KbDocType,
      lines: row.lines,
      words: row.words,
      chars: row.chars,
    }));
  }

  /**
   * Read a doc or one section of it. `topic` may be:
   *  - a doc topic (`wiki/Java`) → full content assembled from its chunks;
   *  - a chunk topic (`wiki/Java#sections`, `javadocs/...AStar#search`)
   *    → exactly that section/member chunk (KB v2 #10).
   */
  async getTopic(topic: string): Promise<{
    topic: string;
    docTopic: string;
    title: string;
    section?: string;
    content: string;
    lines: number;
    words: number;
    chars: number;
  } | null> {
    const hashIdx = topic.indexOf("#");
    const docTopic = hashIdx === -1 ? topic : topic.slice(0, hashIdx);
    const section = hashIdx === -1 ? "" : topic.slice(hashIdx + 1);

    if (section.length > 0) {
      // Exact chunk read.
      const chunk = this.db
        .prepare(
          "SELECT chunk_topic, doc_topic, heading, title, content FROM knowledge_chunks WHERE chunk_topic = ?",
        )
        .get(topic) as unknown as
        | {
            chunk_topic: string;
            doc_topic: string;
            heading: string | null;
            title: string;
            content: string;
          }
        | undefined;
      if (!chunk) return null;
      const lines = chunk.content.split("\n").length;
      const words = chunk.content.trim()
        ? chunk.content.trim().split(/\s+/).length
        : 0;
      const chars = chunk.content.length;
      const result: {
        topic: string;
        docTopic: string;
        title: string;
        section?: string;
        content: string;
        lines: number;
        words: number;
        chars: number;
      } = {
        topic: chunk.chunk_topic,
        docTopic: chunk.doc_topic,
        title: chunk.title,
        content: chunk.content,
        lines,
        words,
        chars,
      };
      if (chunk.heading !== null) result.section = chunk.heading;
      return result;
    }

    const doc = this.db
      .prepare(
        "SELECT topic, title, lines, words, chars FROM knowledge_docs WHERE topic = ?",
      )
      .get(docTopic) as unknown as
      | {
          topic: string;
          title: string;
          lines: number;
          words: number;
          chars: number;
        }
      | undefined;
    if (!doc) return null;

    const chunks = this.db
      .prepare(
        "SELECT content FROM knowledge_chunks WHERE doc_topic = ? ORDER BY seq ASC",
      )
      .all(docTopic) as unknown as Array<{ content: string }>;
    return {
      topic: doc.topic,
      docTopic: doc.topic,
      title: doc.title,
      content: chunks.map((c) => c.content).join("\n\n"),
      lines: doc.lines,
      words: doc.words,
      chars: doc.chars,
    };
  }

  /**
   * Resolve a section by friendly name instead of a slugged chunk id
   * (`get_knowledge_section`). `topic` may be a doc topic (`wiki/Java`) or a
   * full chunk id (`wiki/Java#section-one`); `section` is matched
   * case-insensitively against the chunk heading, member name (javadocs
   * signatures), or chunk slug. Returns the best match plus the available
   * section headings (for a helpful no-match error); null when the doc itself
   * does not exist.
   */
  async getSection(
    topic: string,
    section?: string,
  ): Promise<{
    match: {
      topic: string;
      docTopic: string;
      title: string;
      section?: string;
      content: string;
      lines: number;
      words: number;
      chars: number;
    } | null;
    docTopic: string;
    /** Distinct available headings in document order (first 50). */
    sections: string[];
  } | null> {
    const hashIdx = topic.indexOf("#");
    const docTopic = hashIdx === -1 ? topic : topic.slice(0, hashIdx);
    const inlineSection = hashIdx === -1 ? "" : topic.slice(hashIdx + 1);
    // A chunk id in the topic (`doc#section`) names the exact chunk and wins
    // over the separate section param — matching the tool's documented
    // contract ("omitted when topic already carries a #section").
    const want = (inlineSection || section?.trim() || "").trim();

    const rows = this.db
      .prepare(
        "SELECT chunk_topic, doc_topic, heading, title, content, seq FROM knowledge_chunks WHERE doc_topic = ? ORDER BY seq ASC",
      )
      .all(docTopic) as unknown as Array<{
      chunk_topic: string;
      doc_topic: string;
      heading: string | null;
      title: string;
      content: string;
      seq: number;
    }>;
    if (rows.length === 0) {
      // Distinguish a missing doc from a doc that chunked to zero rows
      // (e.g. frontmatter-only file): missing → null ("Doc not found");
      // present → the no-match shape so the caller lists "(none)" instead.
      const doc = this.db
        .prepare("SELECT topic FROM knowledge_docs WHERE topic = ?")
        .get(docTopic);
      if (!doc) return null;
      return { match: null, docTopic, sections: [] };
    }

    const sections: string[] = [];
    const seen = new Set<string>();
    for (const r of rows) {
      const heading = (r.heading ?? "").trim();
      if (heading.length > 0 && !seen.has(heading)) {
        seen.add(heading);
        sections.push(heading);
      }
    }

    let best: (typeof rows)[number] | null = null;
    if (want.length > 0) {
      best = this.pickSection(rows, want);
    }

    let match: {
      topic: string;
      docTopic: string;
      title: string;
      section?: string;
      content: string;
      lines: number;
      words: number;
      chars: number;
    } | null = null;
    if (best) {
      const lines = best.content.split("\n").length;
      const words = best.content.trim()
        ? best.content.trim().split(/\s+/).length
        : 0;
      const chars = best.content.length;
      const result: {
        topic: string;
        docTopic: string;
        title: string;
        section?: string;
        content: string;
        lines: number;
        words: number;
        chars: number;
      } = {
        topic: best.chunk_topic,
        docTopic: best.doc_topic,
        title: best.title,
        content: best.content,
        lines,
        words,
        chars,
      };
      if (best.heading !== null) result.section = best.heading;
      match = result;
    }

    return { match, docTopic, sections: sections.slice(0, 50) };
  }

  /**
   * Best matching chunk for a section name: exact heading/slug → slug/heading
   * prefix → heading substring (case-insensitive). Returns null when nothing
   * matches. Shared by getSection and getSections so both resolve names
   * identically.
   */
  private pickSection(
    rows: Array<{
      chunk_topic: string;
      doc_topic: string;
      heading: string | null;
      title: string;
      content: string;
      seq: number;
    }>,
    want: string,
  ): (typeof rows)[number] | null {
    const wantLower = want.toLowerCase();
    let best: (typeof rows)[number] | null = null;
    let bestScore = Number.POSITIVE_INFINITY;
    for (const r of rows) {
      const heading = (r.heading ?? "").trim();
      const headingLower = heading.toLowerCase();
      const slug = r.chunk_topic.slice(r.chunk_topic.indexOf("#") + 1);
      let score = -1;
      if (headingLower === wantLower || slug === wantLower) {
        score = 0; // exact heading or slug
      } else if (
        slug.startsWith(wantLower) ||
        headingLower.startsWith(wantLower)
      ) {
        // Slug prefix precisely targets javadocs members: the member slug
        // encodes the name (`getPlayer(int)` → `getplayer-int`), so
        // `getPlayer` outranks any body/description line that merely
        // contains the word (score 2 via includes below).
        score = 1;
      } else if (headingLower.includes(wantLower)) {
        score = 2;
      }
      if (score !== -1 && (best === null || score < bestScore)) {
        best = r;
        bestScore = score;
      }
    }
    return best;
  }

  /**
   * Batch variant of getSection: resolve several section/member names in one
   * call (e.g. a handful of javadocs methods for one class page). Each entry
   * is matched with the same scoring; a miss yields null in results (no
   * throw), and the reply carries the doc's available sections for
   * self-healing. Returns null when the doc does not exist.
   */
  async getSections(
    topic: string,
    sections: string[],
  ): Promise<{
    docTopic: string;
    sections: string[];
    results: Array<{
      topic: string;
      docTopic: string;
      title: string;
      section?: string;
      content: string;
      lines: number;
      words: number;
      chars: number;
    } | null>;
  } | null> {
    const docTopic = topic.split("#")[0];
    const rows = this.db
      .prepare(
        "SELECT chunk_topic, doc_topic, heading, title, content, seq FROM knowledge_chunks WHERE doc_topic = ? ORDER BY seq ASC",
      )
      .all(docTopic) as unknown as Array<{
      chunk_topic: string;
      doc_topic: string;
      heading: string | null;
      title: string;
      content: string;
      seq: number;
    }>;
    if (rows.length === 0) {
      const doc = this.db
        .prepare("SELECT topic FROM knowledge_docs WHERE topic = ?")
        .get(docTopic);
      if (!doc) return null;
      return { docTopic, sections: [], results: [] };
    }

    const available: string[] = [];
    const seen = new Set<string>();
    for (const r of rows) {
      const heading = (r.heading ?? "").trim();
      if (heading.length > 0 && !seen.has(heading)) {
        seen.add(heading);
        available.push(heading);
      }
    }

    const results = sections.map((want) => {
      const wantTrimmed = (want ?? "").trim();
      if (wantTrimmed.length === 0) return null;
      const best = this.pickSection(rows, wantTrimmed);
      if (!best) return null;
      const lines = best.content.split("\n").length;
      const words = best.content.trim()
        ? best.content.trim().split(/\s+/).length
        : 0;
      const chars = best.content.length;
      const result: {
        topic: string;
        docTopic: string;
        title: string;
        section?: string;
        content: string;
        lines: number;
        words: number;
        chars: number;
      } = {
        topic: best.chunk_topic,
        docTopic: best.doc_topic,
        title: best.title,
        content: best.content,
        lines,
        words,
        chars,
      };
      if (best.heading !== null) result.section = best.heading;
      return result;
    });

    return { docTopic, sections: available.slice(0, 50), results };
  }

  close(): void {
    // Idempotent: a second close (e.g. a test cleanup finally after an
    // explicit close) must not throw on an already-closed handle. Nulling
    // the field makes later close() calls no-ops and releases the file
    // handle on Windows so temp dirs can be removed.
    if (this.db) {
      this.db.close();
      this.db = undefined as unknown as DatabaseSync;
    }
  }

  private async pathExists(filePath: string): Promise<boolean> {
    try {
      await access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private async collectMdFiles(dirPath: string): Promise<string[]> {
    const results: string[] = [];
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);
      if (entry.isDirectory()) {
        if (this.skipDirs.includes(entry.name)) {
          continue;
        }
        results.push(...(await this.collectMdFiles(fullPath)));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        if (this.skipFiles.includes(entry.name)) {
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

  /**
   * Line-window snippet (KB v2 #8): the line containing the best match plus
   * one line of context on each side, table rows collapsed, capped at ~400
   * chars — an agent can judge relevance without opening the doc.
   */
  private buildSnippet(content: string, terms: string[]): string {
    const lower = content.toLowerCase();
    let idx = -1;
    for (const term of terms) {
      const i = lower.indexOf(term.toLowerCase());
      if (i !== -1 && (idx === -1 || i < idx)) idx = i;
    }

    const lines = content.split("\n");
    let snippet: string;
    if (idx === -1) {
      snippet = lines.slice(0, 4).join(" ");
    } else {
      let lineIdx = 0;
      let pos = 0;
      while (lineIdx < lines.length && pos + lines[lineIdx].length + 1 <= idx) {
        pos += lines[lineIdx].length + 1;
        lineIdx++;
      }
      const start = Math.max(0, lineIdx - 1);
      const end = Math.min(lines.length, lineIdx + 2);
      snippet = lines
        .slice(start, end)
        .map((l) => this.collapseTableLine(l))
        .join(" ");
    }

    snippet = snippet.replace(/\s+/g, " ").trim();
    if (snippet.length > 400) {
      snippet = `${snippet.slice(0, 397).trimEnd()}…`;
    }
    return snippet;
  }

  private collapseTableLine(line: string): string {
    const trimmed = line.trim();
    if (trimmed.startsWith("|")) {
      return trimmed
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim())
        .filter((c) => c.length > 0)
        .join(" · ");
    }
    return trimmed;
  }
}
