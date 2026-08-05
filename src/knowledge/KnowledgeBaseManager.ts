import { DatabaseSync } from 'node:sqlite';
import { join } from 'path';
import { readdirSync, readFileSync, mkdirSync } from 'fs';
import logger from '../utils/logger.js';

export class KnowledgeBaseManager {
  private db!: DatabaseSync;
  private dbPath: string;

  constructor(dataDir?: string) {
    const dir = dataDir || join(process.cwd(), 'data');
    this.dbPath = join(dir, 'pz_knowledge.db');
    mkdirSync(dir, { recursive: true });
  }

  async initialize(): Promise<void> {
    this.db = new DatabaseSync(this.dbPath);
    this.db.exec('PRAGMA journal_mode = WAL');

    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_docs (
        topic TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        source TEXT,
        content TEXT NOT NULL
      )
    `);

    this.db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
        topic, title, source, content, tokenize='unicode61'
      )
    `);
  }

  async indexDirectory(
    dirPath: string,
    opts?: { overwrite?: boolean }
  ): Promise<{
    topics: number;
    files: number;
    chars: number;
    errors: Array<{ file: string; message: string }>;
  }> {
    const overwrite = opts?.overwrite ?? true;
    const files = this.collectMdFiles(dirPath);
    let topics = 0;
    let totalChars = 0;
    const errors: Array<{ file: string; message: string }> = [];

    const deleteFtsStmt = this.db.prepare(`
      DELETE FROM knowledge_fts WHERE rowid IN (
        SELECT rowid FROM knowledge_docs WHERE topic = ?
      )
    `);

    const insertDocStmt = this.db.prepare(`
      INSERT OR REPLACE INTO knowledge_docs (topic, title, source, content)
      VALUES (?, ?, ?, ?)
    `);

    const insertFtsStmt = this.db.prepare(`
      INSERT INTO knowledge_fts(rowid, topic, title, source, content)
      VALUES (last_insert_rowid(), ?, ?, ?, ?)
    `);

    for (const filePath of files) {
      try {
        const content = readFileSync(filePath, 'utf-8');
        const filename = filePath.split(/[/\\]/).pop() || '';
        const topic = filename.replace(/\.md$/, '');

        if (!overwrite) {
          const existing = this.db
            .prepare('SELECT topic FROM knowledge_docs WHERE topic = ?')
            .get(topic) as unknown as { topic: string } | undefined;
          if (existing) {
            continue;
          }
        }

        const lines = content.split('\n');
        let title = filename;
        for (const line of lines) {
          if (line.startsWith('# ')) {
            title = line.slice(2).trim();
            break;
          }
        }

        let source = '';
        for (const line of lines) {
          if (line.startsWith('> Source:')) {
            source = line.slice('> Source:'.length).trim();
            break;
          }
        }

        this.db.exec('BEGIN');
        try {
          deleteFtsStmt.run(topic);
          insertDocStmt.run(topic, title, source, content);
          insertFtsStmt.run(topic, title, source, content);
          this.db.exec('COMMIT');
        } catch (e) {
          this.db.exec('ROLLBACK');
          throw e;
        }

        topics++;
        totalChars += content.length;
      } catch (err: any) {
        errors.push({ file: filePath, message: err.message || String(err) });
        logger.error(err, 'Failed to index file: %s', filePath);
      }
    }

    return { topics, files: files.length, chars: totalChars, errors };
  }

  async search(
    query: string,
    opts?: { topic?: string; limit?: number }
  ): Promise<Array<{ topic: string; title: string; snippet: string; score: number }>> {
    const sanitized = this.sanitizeFtsQuery(query);
    if (sanitized.length === 0) {
      return [];
    }

    const limit = Math.min(opts?.limit ?? 10, 100);
    const ftsQuery = sanitized.map((t) => `"${t}"`).join(' ');

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
      sql += ' AND k.topic = ?';
      params.push(opts.topic);
    }

    sql += ' ORDER BY rank ASC LIMIT ?';
    params.push(limit);

    const rows = this.db
      .prepare(sql)
      .all(...params) as Array<{
        topic: string;
        title: string;
        content: string;
        rank: number;
      }>;

    const firstTerm = sanitized[0]?.toLowerCase() || '';

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
    Array<{ topic: string; title: string; lines: number; words: number; chars: number }>
  > {
    const rows = this.db
      .prepare(
        'SELECT topic, title, content FROM knowledge_docs ORDER BY topic ASC'
      )
      .all() as Array<{ topic: string; title: string; content: string }>;

    return rows.map((row) => {
      const lines = row.content.split('\n').length;
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

  async getTopic(
    topic: string
  ): Promise<{ topic: string; title: string; content: string; lines: number; words: number; chars: number } | null> {
    const row = this.db
      .prepare('SELECT topic, title, content FROM knowledge_docs WHERE topic = ?')
      .get(topic) as unknown as { topic: string; title: string; content: string } | undefined;

    if (!row) return null;

    const lines = row.content.split('\n').length;
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
        if (entry.name === 'wiki' || entry.name === 'AdvancedGenerators') {
          continue;
        }
        results.push(...this.collectMdFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        if (entry.name === 'README.md') {
          continue;
        }
        results.push(fullPath);
      }
    }

    return results;
  }

  private sanitizeFtsQuery(query: string): string[] {
    const terms = query
      .replace(/["*:^+\-(){}[\]!~;]/g, ' ')
      .split(/\s+/)
      .filter(
        (term) => term.length > 0 && !/^(AND|OR|NOT|NEAR)$/i.test(term)
      );
    return terms;
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
}