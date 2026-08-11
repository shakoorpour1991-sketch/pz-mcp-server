import { DatabaseSync } from "node:sqlite";
import { join, dirname, relative, sep } from "path";
import { mkdirSync } from "fs";
import { readFile, stat, readdir, access } from "fs/promises";
import logger from "../utils/logger.js";
import { embeddingBatchSize, knowledgeDbPath } from "../utils/config.js";
import { sanitizeFtsTerms } from "../utils/fts.js";
import { parseKbDoc, type KbDocType } from "./kbChunker.js";
import {
  EmbeddingManager,
  SemanticNotIndexedError,
  cosineSimilarity,
  hybridBlend,
  SEMANTIC_TOP_K,
} from "./EmbeddingManager.js";

/**
 * KB schema version. v1 (legacy) stored one full-copy row per file in
 * knowledge_docs + a full-copy knowledge_fts; v2 stores file metadata only in
 * knowledge_docs, per-section chunks in knowledge_chunks, and an external-
 * content FTS index over the chunks. v3 added the `bodyless` column to
 * knowledge_chunks (bare-signature / stubby-member chunks downweighted in
 * mixed ranking). v4 switches the FTS tokenizer from `porter unicode61` to
 * plain `unicode61` — porter's step-1c y→i stemming silently broke trailing-y
 * prefix fallbacks ("getPlay" → getPlayer) — and adds the per-doc `tabley`
 * flag (table-heavy docs downweighted in mixed searches). The tokenizer is a
 * table attribute, so v4 drops + recreates the FTS virtual table and REQUIRES
 * re-running the index tools once (the KB is a disposable cache — the v1 → v2
 * migration was already a clean drop + recreate on the same principle).
 * v5 is purely additive (Phase 5 embeddings): the knowledge_chunk_vectors
 * table (Float32Array BLOBs) is created without touching existing rows — no
 * re-index needed, vectors are backfilled on demand via embed_knowledge.
 */
const KB_SCHEMA_VERSION = 5;

/** Row shape shared by the FTS path and the hybrid merge (metadata fetch). */
interface ChunkMetaRow {
  chunk_topic: string;
  doc_topic: string;
  chunk_title: string;
  source: string | null;
  doc_type: string;
  heading: string | null;
  content: string;
  doc_title: string;
  meta: string | null;
  file_path: string | null;
}

/** FTS search row: ChunkMetaRow plus the ranking signals used by search(). */
interface SearchRow extends ChunkMetaRow {
  bodyless: number;
  tabley: number;
  rank: number;
}

/** One decorated search result (the shape search()/mergeHybrid() return). */
interface KbSearchResult {
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
}

/** embed_knowledge result (model/dims/vectors/counters + dry-run flag). */
interface EmbedKnowledgeResult {
  model: string;
  dims: number;
  total: number;
  vectors: number;
  embedded: number;
  skipped: number;
  modelChanged: boolean;
  dryRun: boolean;
  durationMs: number;
}

export class KnowledgeBaseManager {
  private db!: DatabaseSync;
  private dbPath: string;
  private readonly skipDirs: string[];
  private readonly skipFiles: string[];

  private embeddingManager: EmbeddingManager | undefined;

  constructor(
    dataDir?: string,
    options?: {
      skipDirs?: string[];
      skipFiles?: string[];
      /** Phase 5 semantic search engine — opt-in, wired at server startup. */
      embeddingManager?: EmbeddingManager;
    },
  ) {
    this.embeddingManager = options?.embeddingManager;
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
   * Create the v4 schema (docs metadata + chunks + external-content FTS +
   * bodyless + tabley flags). Legacy v1 tables (full-copy
   * knowledge_docs/knowledge_fts) are dropped on migration — the KB is a
   * disposable cache and the chunk representation is incompatible with the
   * old rows. v2 → v4 / v3 → v4 are additive column ALTERs plus an FTS
   * recreation (the tokenizer is a table attribute and changed in v4), so a
   * migrated v2/v3 DB must re-run the index tools once to rebuild the index.
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
    // `tabley` flags docs whose raw body is mostly table rows (downweighted
    // in mixed searches, KB audit finding).
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
        tabley INTEGER NOT NULL DEFAULT 0,
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

    // Phase 5 embeddings (v5, additive): one row per embedded chunk, vector
    // stored as a Float32Array BLOB. FK is declared but NOT enforced (node:
    // sqlite keeps foreign_keys off and re-indexing deletes chunks directly),
    // so embedKnowledge prunes orphan vectors on every run.
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_chunk_vectors (
        chunk_topic TEXT PRIMARY KEY REFERENCES knowledge_chunks(chunk_topic) ON DELETE CASCADE,
        doc_topic   TEXT NOT NULL,
        model       TEXT NOT NULL,
        dims        INTEGER NOT NULL,
        vector      BLOB NOT NULL,
        updated_at  TEXT NOT NULL
      )
    `);
    this.db.exec(`
      CREATE INDEX IF NOT EXISTS idx_kcv_doc
        ON knowledge_chunk_vectors (doc_topic)
    `);

    this.createFts();

    // v2 → v4 / v3 → v4: additive columns + FTS recreation (tokenizer
    // change). Fresh (v0) and legacy-v1 DBs already recreated the tables
    // with every column above, so only true v2/v3 DBs enter this branch.
    if (version >= 2 && version < 4) {
      if (version < 3 && !this.hasColumn("knowledge_chunks", "bodyless")) {
        this.db.exec(
          "ALTER TABLE knowledge_chunks ADD COLUMN bodyless INTEGER NOT NULL DEFAULT 0",
        );
      }
      if (!this.hasColumn("knowledge_docs", "tabley")) {
        this.db.exec(
          "ALTER TABLE knowledge_docs ADD COLUMN tabley INTEGER NOT NULL DEFAULT 0",
        );
      }
      // v4: the tokenizer is a table attribute — drop + recreate so the new
      // unicode61 index applies. Existing chunk rows survive; the FTS index
      // is empty until the index tools re-run (same disposable-cache pattern
      // as the v1 → v2 migration).
      this.db.exec("DROP TABLE IF EXISTS knowledge_chunks_fts");
      this.createFts();
      logger.info(
        "Knowledge base schema migrated to v%d (unicode61 tokenizer + tabley flag) — re-run index_knowledge_base / index_javadocs to rebuild the search index",
        KB_SCHEMA_VERSION,
      );
    }

    // v4 → v5: purely additive (semantic vector table) — existing rows are
    // untouched; vectors are backfilled on demand via embed_knowledge.
    if (version >= 4 && version < 5) {
      logger.info(
        "Knowledge base schema migrated to v%d (semantic vector table) — run embed_knowledge to backfill vectors",
        KB_SCHEMA_VERSION,
      );
    }

    this.db.exec(`PRAGMA user_version = ${KB_SCHEMA_VERSION}`);
  }

  /**
   * External-content FTS over the chunks: the index stores only the term →
   * rowid map (no text copy), roughly halving DB size vs the v1 full-copy
   * table. `unicode61` (case-folding + diacritics, NO porter) — stemming is
   * done at QUERY time via the suffix-expansion fallback in search(), because
   * porter's step-1c y→i stem silently broke trailing-y prefix fallbacks
   * ("getPlay" → getPlayer) while the docs promised them.
   */
  private createFts(): void {
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
        tokenize='unicode61'
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
  }

  private hasColumn(table: string, column: string): boolean {
    const cols = this.db
      .prepare(`PRAGMA table_info(${table})`)
      .all() as unknown as Array<{ name: string }>;
    return cols.some((c) => c.name === column);
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
        (topic, title, source, doc_type, tags, meta, lines, words, chars, tabley, mtime, file_path)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
              parsed.tabley ? 1 : 0,
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
      /**
       * Cap results per doc (default 3; 0 disables) so one giant doc can't
       * flood the top-N. Ignored when a single `topic` is filtered — there is
       * only one doc by construction.
       */
      maxResultsPerDoc?: number;
      /**
       * Phase 5 hybrid search: embed the query and blend semantic (cosine)
       * hits with the keyword results (0.7·bm25 + 0.3·cosine). Requires the
       * vectors to be indexed — run embed_knowledge first. Off by default:
       * without it the pipeline is byte-identical to the FTS-only search.
       */
      semantic?: boolean;
    },
  ): Promise<KbSearchResult[]> {
    const sanitized = this.sanitizeFtsQuery(query);
    if (sanitized.length === 0) {
      return [];
    }

    const limit = Math.min(opts?.limit ?? 10, 100);
    const includeContent = opts?.includeContent ?? false;
    const maxContent = Math.min(Math.max(opts?.maxContent ?? 8_000, 1), 20_000);
    const semantic = opts?.semantic ?? false;
    // Finding 3 — per-doc cap: one giant doc can no longer flood the top-N
    // (applied both inside the FTS window and again over the hybrid merge).
    // Disabled when a single topic is filtered.
    const maxPerDoc = opts?.topic
      ? 0
      : Math.min(Math.max(opts?.maxResultsPerDoc ?? 3, 0), 20);

    // Finding 4 — prefix overmatch: the last term used to always become a
    // prefix, so "cooking" matched "cookie"/"cookwareLoot". Prefix expansion
    // is therefore a *fallback*: run the plain exact query first and only
    // re-run when it returns nothing.
    //
    // Finding 2 — the porter tokenizer silently broke trailing-y prefix
    // fallbacks ("getPlay" → 0 results while the docs promised getPlayer). The
    // index now uses plain unicode61 (no porter), and inflection coverage is
    // restored at QUERY time: the fallback re-run OR-expands each term to its
    // prefix + common inflections (reload* catches reloads/reloading;
    // plays/played/playing explicit; y-ending terms get ies/ied variants).
    const plainFts = sanitized.map((t) => `"${t}"`).join(" ");
    const expandedFts = this.buildExpandedFts(sanitized);

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
    // Finding 9 — bodyless downweight: in natural-language mixed searches a
    // bare-signature chunk gets a rank penalty so prose with the same term
    // density outranks it (identifier searches and explicit filters keep pure
    // rank — a bodyless constant IS the answer for "BLACKSMITH_ANVIL").
    // Table-heavy docs (loot-table dumps, procedural distributions) get a
    // smaller penalty so one giant table doc can't monopolize a top-N either.
    const rankExpr =
      !explicitTypeFilter && !identifierLike
        ? `${B} + CASE WHEN c.bodyless = 1 THEN 8.0 ELSE 0 END + CASE WHEN d.tabley = 1 THEN 6.0 ELSE 0 END`
        : B;
    const typeOrd = explicitTypeFilter
      ? null
      : identifierLike
        ? "CASE WHEN f.doc_type = 'javadocs' THEN 0 ELSE 1 END"
        : "CASE WHEN f.doc_type = 'javadocs' THEN 1 ELSE 0 END";

    const run = (ftsQuery: string, outLimit: number): SearchRow[] => {
      // The window ORDER BY runs outside the FTS FROM clause, so bm25() (which
      // needs the FTS table in scope) cannot be used inside it — the rank is
      // therefore materialized as a plain column in the innermost subquery and
      // the window only orders by that column. The outer query re-sorts and
      // applies the limit.
      const outerOrdExpr = typeOrd
        ? typeOrd.replace(/f\.doc_type/g, "doc_type")
        : null;
      const winOrdExpr = outerOrdExpr ?? "0";
      const rnCap = maxPerDoc > 0 ? maxPerDoc : 1_000_000;
      let sql = `
        SELECT * FROM (
          SELECT *,
                 ROW_NUMBER() OVER (
                   PARTITION BY doc_topic
                   ORDER BY ${winOrdExpr} ASC, rank ASC
                 ) AS rn
          FROM (
            SELECT f.chunk_topic, f.doc_topic, f.title AS chunk_title, f.source,
                   f.doc_type, c.heading, c.content, c.bodyless,
                   d.title AS doc_title, d.meta, d.file_path, d.tabley,
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

      sql += `
          )
        )
        WHERE rn <= ?
      `;
      params.push(rnCap);
      sql += outerOrdExpr
        ? ` ORDER BY ${outerOrdExpr} ASC, rank ASC LIMIT ?`
        : " ORDER BY rank ASC LIMIT ?";
      params.push(outLimit);
      return this.db.prepare(sql).all(...params) as unknown as SearchRow[];
    };

    // Hybrid mode fetches more FTS candidates than the final limit so the
    // semantic merge has real keyword signal to blend against.
    const ftsLimit = semantic ? Math.max(limit, SEMANTIC_TOP_K) : limit;
    let rows = run(plainFts, ftsLimit);
    if (rows.length === 0 && expandedFts !== plainFts) {
      rows = run(expandedFts, ftsLimit);
    }

    if (semantic) {
      // Phase 5 hybrid: cosine scan → top-K, merged with the FTS top-K and
      // re-ranked by 0.7·bm25 + 0.3·cosine. No keyword hit → the semantic
      // hits are still returned (conceptual recall booster).
      // exactOptionalPropertyTypes: only set the optional filter keys when
      // they are actually defined.
      const semanticOpts: {
        topic?: string;
        typeFilter: KbDocType[];
        package?: string;
        topK: number;
      } = { typeFilter, topK: SEMANTIC_TOP_K };
      if (opts?.topic !== undefined) semanticOpts.topic = opts.topic;
      if (opts?.package !== undefined) semanticOpts.package = opts.package;
      const semanticHits = await this.semanticScan(query, semanticOpts);
      return this.mergeHybrid(rows, semanticHits, {
        limit,
        maxPerDoc,
        sanitized,
        budget: { remaining: includeContent ? maxContent : 0 },
      });
    }

    // Finding 2 — inline content: fill results in order until the total
    // budget is spent; the first overflow is truncated, later results omit
    // content (the caller gets search + read for the top hits in one call).
    const budget = { remaining: includeContent ? maxContent : 0 };
    return rows.map((row) =>
      this.decorateChunk(row, Math.round(-row.rank * 1000) / 1000, {
        sanitized,
        budget,
      }),
    );
  }

  /**
   * Phase 5 — embed_knowledge: backfill semantic vectors for every chunk that
   * does not have one (or whose model changed). Incremental by nature: only
   * new/changed chunks are embedded, the model downloads at most once into
   * <data>/models/ (and NOT at all for dryRun or when everything is already
   * embedded), and chunk text embedded = title + content.
   */
  async embedKnowledge(
    opts: {
      model?: string;
      batchSize?: number;
      /** Cap on chunks embedded this run (smoke tests / incremental chunks). */
      limit?: number;
      /** Preview pending work — no model download, no embedding, no writes. */
      dryRun?: boolean;
    } = {},
  ): Promise<EmbedKnowledgeResult> {
    const em = this.embeddingManager;
    if (!em) {
      throw new SemanticNotIndexedError(
        "embed_knowledge is unavailable: this server was not started with an embedding engine.",
      );
    }
    const dryRun = opts.dryRun ?? false;
    const targetModel = opts.model ?? em.modelName;
    const batchSize = Math.min(
      Math.max(opts.batchSize ?? embeddingBatchSize(), 1),
      512,
    );

    // Orphan vectors (chunks re-indexed away since the last embed) never block
    // the incremental backfill and never surface in search (the semantic scan
    // joins knowledge_chunks), so prune them here — cheap, once per run. A
    // dryRun NEVER writes: no prune, no model-change wipe, no embed.
    if (!dryRun) {
      this.db.exec(`
        DELETE FROM knowledge_chunk_vectors
        WHERE NOT EXISTS (
          SELECT 1 FROM knowledge_chunks c WHERE c.chunk_topic = knowledge_chunk_vectors.chunk_topic
        )
      `);
    }

    const total = (
      this.db.prepare("SELECT COUNT(*) AS n FROM knowledge_chunks").get() as {
        n: number;
      }
    ).n;
    const stored = this.db
      .prepare("SELECT MAX(model) AS model FROM knowledge_chunk_vectors")
      .get() as { model: string | null };
    const modelChanged = stored.model !== null && stored.model !== targetModel;
    if (modelChanged && !dryRun) {
      // A different model produces a different vector space — clean re-embed.
      this.db.exec("DELETE FROM knowledge_chunk_vectors");
    }

    // Pending = chunks that WOULD be embedded: every chunk when the model
    // changed (clean re-embed — a dryRun previews this without deleting),
    // otherwise only chunks without a vector for the target model.
    const pendingRows = this.db
      .prepare(
        modelChanged
          ? `SELECT chunk_topic FROM knowledge_chunks ORDER BY rowid ASC`
          : `SELECT c.chunk_topic FROM knowledge_chunks c
             LEFT JOIN knowledge_chunk_vectors v ON v.chunk_topic = c.chunk_topic
             WHERE v.chunk_topic IS NULL
             ORDER BY c.rowid ASC`,
      )
      .all() as unknown as Array<{ chunk_topic: string }>;
    let pending = pendingRows.map((r) => r.chunk_topic);
    if (opts.limit && opts.limit > 0) {
      pending = pending.slice(0, opts.limit);
    }
    const skipped = Math.max(0, total - pending.length);
    const vectorsBefore = (
      this.db
        .prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors")
        .get() as {
        n: number;
      }
    ).n;

    if (dryRun || pending.length === 0) {
      return {
        model: targetModel,
        dims: em.dims,
        total,
        vectors: vectorsBefore,
        embedded: 0,
        skipped,
        modelChanged,
        dryRun,
        durationMs: 0,
      };
    }

    await em.ensureModel();
    const dims = em.dims; // accurate post-load (config hidden_size, else default)
    const t0 = Date.now();
    const now = new Date().toISOString();
    const insert = this.db.prepare(`
      INSERT OR REPLACE INTO knowledge_chunk_vectors
        (chunk_topic, doc_topic, model, dims, vector, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    let embedded = 0;
    this.db.exec("BEGIN");
    try {
      for (let i = 0; i < pending.length; i += batchSize) {
        const batch = pending.slice(i, i + batchSize);
        const placeholders = batch.map(() => "?").join(",");
        const chunkRows = this.db
          .prepare(
            `SELECT chunk_topic, doc_topic, title, content FROM knowledge_chunks WHERE chunk_topic IN (${placeholders})`,
          )
          .all(...batch) as unknown as Array<{
          chunk_topic: string;
          doc_topic: string;
          title: string;
          content: string;
        }>;
        // Chunk text embedded = title + content (signature + body) so method
        // overloads stay distinct.
        const texts = chunkRows.map((r) => `${r.title}\n${r.content}`);
        const vectors = await em.embedTexts(texts);
        for (let j = 0; j < chunkRows.length; j++) {
          const vec = vectors[j];
          insert.run(
            chunkRows[j].chunk_topic,
            chunkRows[j].doc_topic,
            targetModel,
            dims,
            Buffer.from(vec.buffer, vec.byteOffset, vec.byteLength),
            now,
          );
          embedded++;
        }
      }
      this.db.exec("COMMIT");
    } catch (err) {
      this.db.exec("ROLLBACK");
      throw err;
    }
    const vectorsAfter = (
      this.db
        .prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors")
        .get() as {
        n: number;
      }
    ).n;
    logger.info(
      "embed_knowledge: embedded %d/%d chunks with %s (%d dims) in %dms",
      embedded,
      total,
      targetModel,
      dims,
      Date.now() - t0,
    );
    return {
      model: targetModel,
      dims,
      total,
      vectors: vectorsAfter,
      embedded,
      skipped,
      modelChanged,
      dryRun: false,
      durationMs: Date.now() - t0,
    };
  }

  /**
   * Phase 5 — semantic half of the hybrid search: embed the query, brute-force
   * cosine-scan the vector table with typed arrays, return the top-K. Fails
   * with a friendly SemanticNotIndexedError (never a crash, never a silent
   * FTS-only fallback) when no vectors exist or the stored model differs from
   * the current one.
   */
  private async semanticScan(
    query: string,
    opts: {
      topic?: string;
      typeFilter: KbDocType[];
      package?: string;
      topK: number;
    },
  ): Promise<Array<{ chunkTopic: string; cosine: number }>> {
    const em = this.embeddingManager;
    if (!em) {
      throw new SemanticNotIndexedError(
        "Semantic search is unavailable: the knowledge base was not started with an embedding engine.",
      );
    }
    const count = (
      this.db
        .prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors")
        .get() as { n: number }
    ).n;
    if (count === 0) {
      throw new SemanticNotIndexedError(
        "No semantic vectors indexed yet. Run embed_knowledge first to embed the knowledge base, then retry with semantic: true.",
      );
    }
    const stored = this.db
      .prepare("SELECT DISTINCT model FROM knowledge_chunk_vectors")
      .all() as unknown as Array<{ model: string }>;
    const storedModel = stored[0]?.model;
    if (storedModel && storedModel !== em.modelName) {
      throw new SemanticNotIndexedError(
        `The knowledge base vectors were embedded with model "${storedModel}", but the current embedding model is "${em.modelName}". Re-run embed_knowledge to re-embed with the current model.`,
      );
    }

    // Query path is STRICTLY local-only: downloads happen only via
    // embed_knowledge, so a deleted model cache fails loudly here instead of
    // silently re-downloading mid-search (the re-run of embed_knowledge is
    // the recovery — it reloads the model without re-embedding).
    if (!em.isModelCached()) {
      throw new SemanticNotIndexedError(
        `The embedding model cache (${em.modelName} under <data>/models/) is missing. Run embed_knowledge once to re-download the model, then retry with semantic: true.`,
      );
    }
    await em.ensureModel(false);
    const [queryVec] = await em.embedTexts([query]);

    let sql = `
      SELECT v.chunk_topic, v.vector
      FROM knowledge_chunk_vectors v
      JOIN knowledge_chunks c ON c.chunk_topic = v.chunk_topic
      JOIN knowledge_docs d ON d.topic = v.doc_topic
    `;
    const where: string[] = [];
    const params: any[] = [];
    if (opts.topic) {
      where.push("v.doc_topic = ?");
      params.push(opts.topic);
    }
    if (opts.typeFilter.length > 0) {
      where.push(`c.doc_type IN (${opts.typeFilter.map(() => "?").join(",")})`);
      params.push(...opts.typeFilter);
    }
    if (opts.package) {
      where.push("json_extract(d.meta, '$.package') = ?");
      params.push(opts.package);
    }
    if (where.length > 0) sql += ` WHERE ${where.join(" AND ")}`;
    const rows = this.db.prepare(sql).all(...params) as unknown as Array<{
      chunk_topic: string;
      vector: Uint8Array;
    }>;
    const dims = queryVec.length;
    const scored: Array<{ chunkTopic: string; cosine: number }> = [];
    for (const row of rows) {
      const u8 =
        row.vector instanceof Uint8Array
          ? row.vector
          : new Uint8Array(row.vector as any);
      const vec = new Float32Array(
        u8.buffer,
        u8.byteOffset,
        Math.min(dims, u8.byteLength / 4),
      );
      scored.push({
        chunkTopic: row.chunk_topic,
        cosine: cosineSimilarity(queryVec, vec),
      });
    }
    scored.sort((a, b) => b.cosine - a.cosine);
    return scored.slice(0, opts.topK);
  }

  /**
   * Phase 5 — merge the FTS top-K and the semantic top-K into one ranked list:
   * bm25 min-max normalized to [0,1] over the FTS candidates, blended with
   * cosine as 0.7·bm25 + 0.3·cosine (a chunk absent from one path contributes
   * 0 there). Per-doc cap + limit applied over the merged list; decoration is
   * the same decorateChunk the FTS path uses.
   */
  private mergeHybrid(
    ftsRows: SearchRow[],
    semanticHits: Array<{ chunkTopic: string; cosine: number }>,
    opts: {
      limit: number;
      maxPerDoc: number;
      sanitized: string[];
      budget: { remaining: number };
    },
  ): KbSearchResult[] {
    // bm25 rank is more-negative-is-better, so the FTS signal is -rank.
    let minB = Number.POSITIVE_INFINITY;
    let maxB = Number.NEGATIVE_INFINITY;
    for (const r of ftsRows) {
      const s = -r.rank;
      if (s < minB) minB = s;
      if (s > maxB) maxB = s;
    }
    const range = maxB - minB || 1;
    const ftsScore = new Map<string, number>();
    for (const r of ftsRows)
      ftsScore.set(r.chunk_topic, (-r.rank - minB) / range);
    const cosineScore = new Map(
      semanticHits.map((h) => [h.chunkTopic, h.cosine]),
    );
    const union = [...new Set([...ftsScore.keys(), ...cosineScore.keys()])];
    if (union.length === 0) return [];

    // One metadata fetch for the merged candidates — same columns as the FTS
    // path so decoration is identical.
    const placeholders = union.map(() => "?").join(",");
    const metaRows = this.db
      .prepare(
        `
        SELECT c.chunk_topic, c.doc_topic, c.title AS chunk_title, c.source,
               c.doc_type, c.heading, c.content,
               d.title AS doc_title, d.meta, d.file_path
        FROM knowledge_chunks c
        JOIN knowledge_docs d ON d.topic = c.doc_topic
        WHERE c.chunk_topic IN (${placeholders})
      `,
      )
      .all(...union) as unknown as ChunkMetaRow[];
    const metaByTopic = new Map(metaRows.map((r) => [r.chunk_topic, r]));

    const scored = union
      .map((topic) => {
        const meta = metaByTopic.get(topic);
        if (!meta) return null;
        return {
          meta,
          blend: hybridBlend(ftsScore.get(topic), cosineScore.get(topic)),
        };
      })
      .filter((x): x is { meta: ChunkMetaRow; blend: number } => x !== null);
    scored.sort((a, b) => b.blend - a.blend);

    // Per-doc cap over the merged list (same default as the FTS path).
    const perDoc = new Map<string, number>();
    const capped = scored.filter(({ meta }) => {
      if (opts.maxPerDoc <= 0) return true;
      const n = (perDoc.get(meta.doc_topic) ?? 0) + 1;
      if (n > opts.maxPerDoc) return false;
      perDoc.set(meta.doc_topic, n);
      return true;
    });

    return capped.slice(0, opts.limit).map(({ meta, blend }) =>
      this.decorateChunk(meta, Math.round(blend * 1000) / 1000, {
        sanitized: opts.sanitized,
        budget: opts.budget,
      }),
    );
  }

  /**
   * Shared result decoration (Finding 2/3): snippet, chars/words read-cost
   * metadata, budget-capped inline content, and the portable type/package/
   * path/section fields. Used by both the FTS-only path and the hybrid merge.
   */
  private decorateChunk(
    row: ChunkMetaRow,
    score: number,
    opts: { sanitized: string[]; budget: { remaining: number } },
  ): KbSearchResult {
    const snippet = this.buildSnippet(row.content, opts.sanitized);
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
    if (opts.budget.remaining > 0) {
      if (row.content.length <= opts.budget.remaining) {
        content = row.content;
      } else {
        content = `${row.content.slice(0, opts.budget.remaining).trimEnd()}…`;
        contentTruncated = true;
      }
      opts.budget.remaining = Math.max(
        0,
        opts.budget.remaining - row.content.length,
      );
    }
    const result: KbSearchResult = {
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

  async listTopics(opts?: {
    types?: KbDocType[];
    /** Topic path-prefix filter (e.g. "wiki" or "javadocs/zombie.iso"). */
    prefix?: string;
    /** Max rows (0 / undefined = no limit). */
    limit?: number;
    /** Rows to skip — pairs with limit for pagination. */
    offset?: number;
    /** Order non-javadocs first (resources/list) instead of topic ASC. */
    proseFirst?: boolean;
  }): Promise<
    Array<{
      topic: string;
      title: string;
      docType: KbDocType;
      lines: number;
      words: number;
      chars: number;
    }>
  > {
    // Stats are stored columns now — no content is read (KB v2 #9). Filters
    // stay SQL-side so a 5,000-topic list is never materialized just to be
    // filtered in JS.
    const where: string[] = [];
    const params: any[] = [];
    if (opts?.types?.length) {
      where.push(`doc_type IN (${opts.types.map(() => "?").join(",")})`);
      params.push(...opts.types);
    }
    if (opts?.prefix) {
      where.push("topic LIKE ?");
      params.push(`${opts.prefix}%`);
    }
    const order = opts?.proseFirst
      ? "ORDER BY (doc_type = 'javadocs') ASC, topic ASC"
      : "ORDER BY topic ASC";
    let sql =
      "SELECT topic, title, doc_type, lines, words, chars FROM knowledge_docs";
    if (where.length > 0) sql += ` WHERE ${where.join(" AND ")}`;
    sql += ` ${order}`;
    if (opts?.limit && opts.limit > 0) {
      sql += " LIMIT ?";
      params.push(opts.limit);
      if (opts.offset && opts.offset > 0) {
        sql += " OFFSET ?";
        params.push(opts.offset);
      }
    }
    const rows = this.db.prepare(sql).all(...params) as unknown as Array<{
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
   * Total number of docs matching the listTopics filters — resources/list
   * uses it to compute the nextCursor without loading any rows.
   */
  async countTopics(opts?: {
    types?: KbDocType[];
    prefix?: string;
  }): Promise<number> {
    const where: string[] = [];
    const params: any[] = [];
    if (opts?.types?.length) {
      where.push(`doc_type IN (${opts.types.map(() => "?").join(",")})`);
      params.push(...opts.types);
    }
    if (opts?.prefix) {
      where.push("topic LIKE ?");
      params.push(`${opts.prefix}%`);
    }
    const row = this.db
      .prepare(
        `SELECT COUNT(*) AS n FROM knowledge_docs${where.length > 0 ? ` WHERE ${where.join(" AND ")}` : ""}`,
      )
      .get(...params) as unknown as { n: number };
    return row.n;
  }

  /**
   * Distinct section headings of a doc, in document order (used by the
   * resources/read size cap to point the caller at real sections).
   */
  async sectionNames(docTopic: string, max = 20): Promise<string[]> {
    const rows = this.db
      .prepare(
        "SELECT heading FROM knowledge_chunks WHERE doc_topic = ? AND heading IS NOT NULL ORDER BY seq ASC",
      )
      .all(docTopic) as unknown as Array<{ heading: string }>;
    const seen = new Set<string>();
    const out: string[] = [];
    for (const r of rows) {
      const h = r.heading.trim();
      if (h.length > 0 && !seen.has(h)) {
        seen.add(h);
        out.push(h);
        if (out.length >= max) break;
      }
    }
    return out;
  }

  /**
   * Suffix-expansion fallback query (KB audit finding 2). The FTS index is
   * plain unicode61 (no porter — porter's y→i stem broke trailing-y prefix
   * fallbacks), so inflection coverage lives here: each term becomes an OR
   * group of the exact token, its prefix, and common inflections. Only used
   * when the plain exact query returns nothing, so common queries never pay
   * the "cooking" → "cookie" noise tax. Short terms (< 3 chars) stay exact.
   */
  private buildExpandedFts(terms: string[]): string {
    const groups = terms.map((t) => {
      const variants = [`"${t}"`];
      if (t.length >= 3) {
        variants.push(`${t}*`, `${t}s`, `${t}es`, `${t}ed`, `${t}ing`);
        if (t.endsWith("y")) {
          const base = t.slice(0, -1);
          variants.push(`${base}ies`, `${base}ied`);
        }
      }
      return `(${variants.join(" OR ")})`;
    });
    // Explicit AND between groups: FTS5 does NOT allow implicit AND between
    // parenthesized expressions (`(a OR b) (c OR d)` is a syntax error), even
    // though it works for bare phrases. Verified against node:sqlite.
    return groups.join(" AND ");
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
