import { DatabaseSync } from "node:sqlite";
import { join } from "path";
import { mkdirSync } from "fs";
import logger from "../utils/logger.js";
import { databasePath } from "../utils/config.js";
import { sanitizeFtsTerms } from "../utils/fts.js";
import { BlockType } from "../utils/blockTypes.js";

/** Shared item column list (freebuff L3) — keeps the SQL in sync. */
const ITEM_SELECT_COLUMNS =
  "id, name, display_name, type, module, category, properties, raw_content, file_path, tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier, hunger_change, thirst_change";

/**
 * Flatten item properties into plain, searchable text for the FTS mirror
 * (audit A6). The raw JSON string contains syntax noise ({, }, ", :)
 * that the FTS tokenizer indexes, skewing ranking. Nested objects become
 * dotted keys; arrays are comma-joined; scalars are `key=value` lines.
 */
function propertiesToPlainText(props: Record<string, any>): string {
  const parts: string[] = [];
  const walk = (prefix: string, value: any): void => {
    if (value === null || value === undefined) return;
    if (Array.isArray(value)) {
      if (value.length > 0) parts.push(`${prefix}=${value.join(",")}`);
      return;
    }
    if (typeof value === "object") {
      for (const [k, v] of Object.entries(value)) {
        walk(prefix ? `${prefix}.${k}` : k, v);
      }
      return;
    }
    parts.push(`${prefix}=${String(value)}`);
  };
  walk("", props);
  return parts.join("\n");
}

export interface GameItem {
  id: string;
  name: string;
  displayName?: string;
  type: BlockType;
  module: string;
  category?: string;
  properties: Record<string, any>;
  rawContent: string;
  filePath: string;
  tags?: string[] | undefined;
  metal_value?: number | undefined;
  weight?: number | undefined;
  condition_max?: number | undefined;
  attachment_type?: string | undefined;
  run_speed_modifier?: number | undefined;
  hunger_change?: number | undefined;
  thirst_change?: number | undefined;
}

export interface SearchOptions {
  type?: string;
  category?: string;
  tags?: string;
  metalValueMin?: number;
  metalValueMax?: number;
  attachmentType?: string;
  limit?: number;
}

interface ItemRow {
  id: string;
  name: string;
  display_name: string | null;
  type: string;
  module: string;
  category: string | null;
  properties: string | null;
  raw_content: string | null;
  file_path: string | null;
  tags: string | null;
  metal_value: number | null;
  weight: number | null;
  condition_max: number | null;
  attachment_type: string | null;
  run_speed_modifier: number | null;
  hunger_change: number | null;
  thirst_change: number | null;
  rank?: number;
}

export class DatabaseManager {
  private db!: DatabaseSync;
  private dbPath: string;
  private inTransaction = false;

  constructor(dbPath?: string) {
    this.dbPath = dbPath || databasePath();

    // Ensure directory exists
    const dbDir = join(this.dbPath, "..");
    mkdirSync(dbDir, { recursive: true });
  }

  async initialize(): Promise<void> {
    this.db = new DatabaseSync(this.dbPath);

    // Enable WAL mode for better concurrency
    this.db.exec("PRAGMA journal_mode = WAL");
    // Enforce the FOREIGN KEY declared on "references".item_id (freebuff M6)
    this.db.exec("PRAGMA foreign_keys = ON");

    await this.createTables();
    await this.createIndexes();
    await this.migrateSchema();

    // Heal a stale FTS index only when it has actually drifted: older DBs
    // (INSERT OR REPLACE era) left items_fts entries pointing at rows that no
    // longer exist ("missing row N from content table" on MATCH). Two cheap
    // signals — row-count mismatch AND max(rowid) mismatch. The rowid check
    // catches churn that preserves the row count (INSERT OR REPLACE deletes +
    // re-inserts shift rowids without changing COUNT) — the full rebuild is
    // skipped on every healthy boot (freebuff L1).
    try {
      // Single atomic statement: SQLite reads one statement in a snapshot,
      // so the four signals cannot race a concurrent writer (audit D3b).
      const row = this.db
        .prepare(`
      SELECT
        (SELECT COUNT(*) FROM items) AS item_count,
        (SELECT COUNT(*) FROM items_fts) AS fts_count,
        (SELECT IFNULL(MAX(rowid), 0) FROM items) AS item_max_rowid,
        (SELECT IFNULL(MAX(rowid), 0) FROM items_fts) AS fts_max_rowid
    `)
        .get() as {
        item_count: number;
        fts_count: number;
        item_max_rowid: number;
        fts_max_rowid: number;
      };
      if (
        row.item_count !== row.fts_count ||
        row.item_max_rowid !== row.fts_max_rowid
      ) {
        this.db.exec(`INSERT INTO items_fts(items_fts) VALUES('rebuild')`);
        logger.info(
          `FTS index rebuilt (items=${row.item_count}/${row.item_max_rowid}, fts=${row.fts_count}/${row.fts_max_rowid})`,
        );
      }
    } catch (err) {
      logger.warn(
        `FTS health check skipped: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  private async migrateSchema(): Promise<void> {
    const existing = this.db
      .prepare("PRAGMA table_info(items)")
      .all() as Array<{ name: string }>;
    const existingColumns = new Set(existing.map((c) => c.name));

    const newColumns: Array<{ name: string; sql: string }> = [
      {
        name: "properties_text",
        sql: "ALTER TABLE items ADD COLUMN properties_text TEXT",
      },
      { name: "tags", sql: "ALTER TABLE items ADD COLUMN tags TEXT" },
      {
        name: "metal_value",
        sql: "ALTER TABLE items ADD COLUMN metal_value REAL",
      },
      { name: "weight", sql: "ALTER TABLE items ADD COLUMN weight REAL" },
      {
        name: "condition_max",
        sql: "ALTER TABLE items ADD COLUMN condition_max INTEGER",
      },
      {
        name: "attachment_type",
        sql: "ALTER TABLE items ADD COLUMN attachment_type TEXT",
      },
      {
        name: "run_speed_modifier",
        sql: "ALTER TABLE items ADD COLUMN run_speed_modifier REAL",
      },
      {
        name: "hunger_change",
        sql: "ALTER TABLE items ADD COLUMN hunger_change REAL",
      },
      {
        name: "thirst_change",
        sql: "ALTER TABLE items ADD COLUMN thirst_change REAL",
      },
    ];

    for (const col of newColumns) {
      if (!existingColumns.has(col.name)) {
        this.db.exec(col.sql);
      }
    }
  }

  private async createTables(): Promise<void> {
    // Main items table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS items (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        display_name TEXT,
        type TEXT NOT NULL,
        module TEXT NOT NULL,
        category TEXT,
        properties TEXT, -- JSON string
        properties_text TEXT, -- mirror of properties for FTS5 external-content mapping
        raw_content TEXT,
        file_path TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Full-text search table using FTS5
    this.db.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS items_fts USING fts5(
        id,
        name,
        display_name,
        type,
        module,
        category,
        properties_text,
        content=items,
        content_rowid=rowid
      )
    `);

    // Triggers to keep FTS table in sync.
    // NOTE: recreated unconditionally (DROP + CREATE) so existing DBs upgrade
    // to the plain-text mirror; CREATE IF NOT EXISTS would keep stale triggers
    // that fed raw JSON (new.properties) into the FTS properties_text column.
    this.db.exec(`
      DROP TRIGGER IF EXISTS items_ai;
      CREATE TRIGGER items_ai AFTER INSERT ON items BEGIN
        INSERT INTO items_fts(rowid, id, name, display_name, type, module, category, properties_text)
        VALUES (new.rowid, new.id, new.name, new.display_name, new.type, new.module, new.category, new.properties_text);
      END
    `);

    this.db.exec(`
      DROP TRIGGER IF EXISTS items_ad;
      CREATE TRIGGER items_ad AFTER DELETE ON items BEGIN
        INSERT INTO items_fts(items_fts, rowid, id, name, display_name, type, module, category, properties_text)
        VALUES ('delete', old.rowid, old.id, old.name, old.display_name, old.type, old.module, old.category, old.properties_text);
      END
    `);

    this.db.exec(`
      DROP TRIGGER IF EXISTS items_au;
      CREATE TRIGGER items_au AFTER UPDATE ON items BEGIN
        INSERT INTO items_fts(items_fts, rowid, id, name, display_name, type, module, category, properties_text)
        VALUES ('delete', old.rowid, old.id, old.name, old.display_name, old.type, old.module, old.category, old.properties_text);
        INSERT INTO items_fts(rowid, id, name, display_name, type, module, category, properties_text)
        VALUES (new.rowid, new.id, new.name, new.display_name, new.type, new.module, new.category, new.properties_text);
      END
    `);

    // References table for tracking item dependencies
    // NOTE: 'references' is a SQLite keyword (FOREIGN KEY ... REFERENCES),
    // so the table name is always double-quoted in SQL.
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS "references" (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_id TEXT NOT NULL,
        reference_id TEXT NOT NULL,
        reference_type TEXT NOT NULL, -- 'item', 'sound', 'sprite', 'model'
        context TEXT, -- where the reference appears (property name, recipe ingredient, etc.)
        FOREIGN KEY (item_id) REFERENCES items (id)
      )
    `);

    // Mod metadata table
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS mods (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        author TEXT,
        version TEXT,
        description TEXT,
        path TEXT,
        last_analyzed DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  private async createIndexes(): Promise<void> {
    // Audit M5: INSERT OR IGNORE only ignores with a uniqueness constraint;
    // dedupe must run before the index so pre-existing duplicates don't fail creation.
    this.db.exec(
      `DELETE FROM "references" WHERE id NOT IN (SELECT MIN(id) FROM "references" GROUP BY item_id, reference_id, reference_type, context)`,
    );
    this.db.exec(
      `CREATE UNIQUE INDEX IF NOT EXISTS idx_references_unique ON "references" (item_id, reference_id, reference_type, context)`,
    );

    this.db.exec(`CREATE INDEX IF NOT EXISTS idx_items_type ON items (type)`);
    this.db.exec(
      `CREATE INDEX IF NOT EXISTS idx_items_module ON items (module)`,
    );
    this.db.exec(
      `CREATE INDEX IF NOT EXISTS idx_items_category ON items (category)`,
    );
    this.db.exec(
      `CREATE INDEX IF NOT EXISTS idx_references_item ON "references" (item_id)`,
    );
    this.db.exec(
      `CREATE INDEX IF NOT EXISTS idx_references_ref ON "references" (reference_id)`,
    );
    this.db.exec(
      `CREATE INDEX IF NOT EXISTS idx_references_type ON "references" (reference_type)`,
    );
  }

  async insertItem(item: GameItem): Promise<void> {
    const stmt = this.db.prepare(`
      INSERT INTO items 
      (id, name, display_name, type, module, category, properties, properties_text, raw_content, file_path,
       tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier,
       hunger_change, thirst_change)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        display_name = excluded.display_name,
        type = excluded.type,
        module = excluded.module,
        category = excluded.category,
        properties = excluded.properties,
        properties_text = excluded.properties_text,
        raw_content = excluded.raw_content,
        file_path = excluded.file_path,
        tags = excluded.tags,
        metal_value = excluded.metal_value,
        weight = excluded.weight,
        condition_max = excluded.condition_max,
        attachment_type = excluded.attachment_type,
        run_speed_modifier = excluded.run_speed_modifier,
        hunger_change = excluded.hunger_change,
        thirst_change = excluded.thirst_change
    `);

    stmt.run(
      item.id,
      item.name,
      item.displayName ?? null,
      item.type,
      item.module,
      item.category ?? null,
      JSON.stringify(item.properties),
      propertiesToPlainText(item.properties),
      item.rawContent,
      item.filePath,
      item.tags ? JSON.stringify(item.tags) : null,
      item.metal_value ?? null,
      item.weight ?? null,
      item.condition_max ?? null,
      item.attachment_type ?? null,
      item.run_speed_modifier ?? null,
      item.hunger_change ?? null,
      item.thirst_change ?? null,
    );
  }

  async insertItems(items: GameItem[]): Promise<void> {
    const stmt = this.db.prepare(`
      INSERT INTO items 
      (id, name, display_name, type, module, category, properties, properties_text, raw_content, file_path,
       tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier,
       hunger_change, thirst_change)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        display_name = excluded.display_name,
        type = excluded.type,
        module = excluded.module,
        category = excluded.category,
        properties = excluded.properties,
        properties_text = excluded.properties_text,
        raw_content = excluded.raw_content,
        file_path = excluded.file_path,
        tags = excluded.tags,
        metal_value = excluded.metal_value,
        weight = excluded.weight,
        condition_max = excluded.condition_max,
        attachment_type = excluded.attachment_type,
        run_speed_modifier = excluded.run_speed_modifier,
        hunger_change = excluded.hunger_change,
        thirst_change = excluded.thirst_change
    `);

    this.db.exec("BEGIN");
    try {
      for (const item of items) {
        stmt.run(
          item.id,
          item.name,
          item.displayName ?? null,
          item.type,
          item.module,
          item.category ?? null,
          JSON.stringify(item.properties),
          propertiesToPlainText(item.properties),
          item.rawContent,
          item.filePath,
          item.tags ? JSON.stringify(item.tags) : null,
          item.metal_value ?? null,
          item.weight ?? null,
          item.condition_max ?? null,
          item.attachment_type ?? null,
          item.run_speed_modifier ?? null,
          item.hunger_change ?? null,
          item.thirst_change ?? null,
        );
      }
      this.db.exec("COMMIT");
    } catch (e) {
      this.db.exec("ROLLBACK");
      throw e;
    }
  }

  async searchContent(
    query: string,
    options: SearchOptions = {},
  ): Promise<GameItem[]> {
    let sql = "";
    const params: any[] = [];

    if (query.trim() === "") {
      // Return all items with optional filtering
      sql = `SELECT ${ITEM_SELECT_COLUMNS} FROM items WHERE 1=1`;
    } else {
      // Use FTS5 for search
      sql = `
        SELECT items.id, items.name, items.display_name, items.type, items.module, 
               items.category, items.properties, items.raw_content, items.file_path,
               items.tags, items.metal_value, items.weight, items.condition_max,
               items.attachment_type, items.run_speed_modifier, items.hunger_change,
               items.thirst_change, items_fts.rank
        FROM items_fts
        JOIN items ON items.rowid = items_fts.rowid
        WHERE items_fts MATCH ?
      `;
      params.push(this.prepareFTSQuery(query));
    }

    // Add type filter (qualified — the FTS join makes bare 'type' ambiguous)
    if (options.type && options.type !== "all") {
      sql += " AND items.type = ?";
      params.push(options.type);
    }

    // Add category filter
    if (options.category) {
      sql += " AND items.category = ?";
      params.push(options.category);
    }

    // Add tags filter (comma-separated, matches if ANY tag present)
    if (options.tags) {
      const tagList = options.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
      if (tagList.length > 0) {
        const tagConditions = tagList
          .map(() => "json_each.value = ?")
          .join(" OR ");
        sql += ` AND (SELECT COUNT(*) FROM json_each(items.tags) WHERE ${tagConditions}) > 0`;
        for (const tag of tagList) {
          params.push(tag);
        }
      }
    }

    // Add metalValueMin/Max filter
    if (options.metalValueMin !== undefined) {
      sql += " AND items.metal_value >= ?";
      params.push(options.metalValueMin);
    }
    if (options.metalValueMax !== undefined) {
      sql += " AND items.metal_value <= ?";
      params.push(options.metalValueMax);
    }

    // Add attachmentType filter
    if (options.attachmentType) {
      sql += " AND items.attachment_type = ?";
      params.push(options.attachmentType);
    }

    // Add ordering and limit
    // FTS5 bm25 rank is NEGATIVE for matches (more negative = more relevant),
    // so ASC puts best matches first; DESC would invert it (audit finding).
    if (query.trim() !== "") {
      sql += " ORDER BY rank ASC";
    } else {
      sql += " ORDER BY name ASC";
    }

    if (options.limit) {
      sql += " LIMIT ?";
      params.push(options.limit);
    }

    const rows = this.db.prepare(sql).all(...params) as unknown as ItemRow[];

    return rows.map((row) => this.rowToItem(row));
  }

  private rowToItem(row: ItemRow): GameItem {
    const item: GameItem = {
      id: row.id,
      name: row.name,
      type: row.type as GameItem["type"],
      module: row.module,
      properties: JSON.parse(row.properties ?? "{}"),
      rawContent: row.raw_content ?? "",
      filePath: row.file_path ?? "",
    };
    if (row.display_name !== null) item.displayName = row.display_name;
    if (row.category !== null) item.category = row.category;
    if (row.tags !== null) item.tags = JSON.parse(row.tags);
    if (row.metal_value !== null) item.metal_value = row.metal_value;
    if (row.weight !== null) item.weight = row.weight;
    if (row.condition_max !== null) item.condition_max = row.condition_max;
    if (row.attachment_type !== null)
      item.attachment_type = row.attachment_type;
    if (row.run_speed_modifier !== null)
      item.run_speed_modifier = row.run_speed_modifier;
    if (row.hunger_change !== null) item.hunger_change = row.hunger_change;
    if (row.thirst_change !== null) item.thirst_change = row.thirst_change;
    return item;
  }

  async upsertMod(mod: {
    id: string;
    name: string;
    author?: string | undefined;
    version?: string | undefined;
    description?: string | undefined;
    path?: string | undefined;
  }): Promise<void> {
    // Audit M4: the mods table was schema-only (dead). analyzeMod now records
    // the analyzed mod so mod.info require= lists can resolve against mod IDs.
    this.db
      .prepare(
        `INSERT INTO mods (id, name, author, version, description, path) VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET
           name = excluded.name,
           author = excluded.author,
           version = excluded.version,
           description = excluded.description,
           path = excluded.path`,
      )
      .run(
        mod.id,
        mod.name,
        mod.author || null,
        mod.version || null,
        mod.description || null,
        mod.path || null,
      );
  }

  async modExists(id: string): Promise<boolean> {
    const row = this.db
      .prepare(`SELECT COUNT(*) as count FROM mods WHERE id = ?`)
      .get(id) as unknown as { count: number };
    return row.count > 0;
  }

  async getItemById(id: string): Promise<GameItem | null> {
    const row = this.db
      .prepare(
        `
      SELECT ${ITEM_SELECT_COLUMNS}
      FROM items
      WHERE id = ?
    `,
      )
      .get(id) as unknown as ItemRow | undefined;

    if (!row) return null;

    return this.rowToItem(row);
  }

  async getItemsByType(type: string): Promise<GameItem[]> {
    const rows = this.db
      .prepare(
        `
      SELECT ${ITEM_SELECT_COLUMNS}
      FROM items
      WHERE type = ?
      ORDER BY name ASC
    `,
      )
      .all(type) as unknown as ItemRow[];

    return rows.map((row) => this.rowToItem(row));
  }

  async getStats(): Promise<Record<string, number>> {
    const stats: Record<string, number> = {};

    // Count by type
    const typeRows = this.db
      .prepare(
        `
      SELECT type, COUNT(*) as count
      FROM items
      GROUP BY type
    `,
      )
      .all() as unknown as Array<{ type: string; count: number }>;

    for (const row of typeRows) {
      stats[row.type] = row.count;
    }

    // Total count
    const totalRow = this.db
      .prepare("SELECT COUNT(*) as count FROM items")
      .get() as unknown as { count: number };
    stats.total = totalRow.count;

    return stats;
  }

  async addReference(
    itemId: string,
    referenceId: string,
    referenceType: string,
    context?: string,
  ): Promise<void> {
    this.db
      .prepare(
        `
      INSERT OR IGNORE INTO "references" (item_id, reference_id, reference_type, context)
      VALUES (?, ?, ?, ?)
    `,
      )
      .run(itemId, referenceId, referenceType, context ?? null);
  }

  /**
   * Run `fn` inside a single SQLite transaction (freebuff M2). Used to batch
   * per-file reference extraction into one commit instead of thousands of
   * single-row autocommit inserts.
   */
  async transaction<T>(fn: () => Promise<T>): Promise<T> {
    if (this.inTransaction) {
      // Nested call – reuse the outer transaction (SQLite has no nesting).
      return fn();
    }

    this.inTransaction = true;
    this.db.exec("BEGIN");
    try {
      const result = await fn();
      this.db.exec("COMMIT");
      return result;
    } catch (e) {
      this.db.exec("ROLLBACK");
      throw e;
    } finally {
      this.inTransaction = false;
    }
  }

  /**
   * Where does a reference actually live? (freebuff N-series: check_references
   * completeness.) Distinguishes 'defined' (an items row exists) from
   * 'referenced' (only appears in the references table — sprite/model refs and
   * dangling refs alike) so tool callers can spot mod-vs-vanilla gaps.
   */
  async describeReference(referenceId: string): Promise<{
    defined: boolean;
    itemType?: string;
    referenceTypes: string[];
    referenceCount: number;
  }> {
    const itemRow = this.db
      .prepare("SELECT type FROM items WHERE id = ?")
      .get(referenceId) as unknown as { type: string } | undefined;
    const typeRows = this.db
      .prepare(
        'SELECT DISTINCT reference_type FROM "references" WHERE reference_id = ?',
      )
      .all(referenceId) as unknown as Array<{ reference_type: string }>;
    const countRow = this.db
      .prepare('SELECT COUNT(*) as c FROM "references" WHERE reference_id = ?')
      .get(referenceId) as unknown as { c: number };
    // Built conditionally: exactOptionalPropertyTypes forbids assigning
    // undefined to an optional property.
    const result: {
      defined: boolean;
      itemType?: string;
      referenceTypes: string[];
      referenceCount: number;
    } = {
      defined: itemRow !== undefined,
      referenceTypes: typeRows.map((r) => r.reference_type),
      referenceCount: countRow.c,
    };
    if (itemRow) {
      result.itemType = itemRow.type;
    }
    return result;
  }

  /**
   * Items produced by more than one recipe (duplicate crafting paths — the
   * recipe-conflict signal for RecipeAnalyzer.detectConflicts, freebuff N3).
   */
  async findDuplicateRecipeOutputs(
    limit: number,
  ): Promise<Array<{ item: string; recipeCount: number }>> {
    const rows = this.db
      .prepare(
        `SELECT reference_id AS item, COUNT(DISTINCT item_id) AS recipe_count
         FROM "references"
         WHERE reference_type = 'item' AND context IN ('result', 'output')
         GROUP BY reference_id
         HAVING COUNT(DISTINCT item_id) > 1
         ORDER BY recipe_count DESC, item ASC
         LIMIT ?`,
      )
      .all(limit) as unknown as Array<{ item: string; recipe_count: number }>;
    return rows.map((r) => ({ item: r.item, recipeCount: r.recipe_count }));
  }

  /**
   * All references declared BY an item/recipe row (what it points to).
   * Recipe ingredient refs use context 'ingredient'; results/outputs use
   * context 'result' | 'output' (freebuff N3 recipe-chain graph).
   */
  async getReferencesFrom(
    itemId: string,
  ): Promise<Array<{ referenceId: string; type: string; context: string }>> {
    const rows = this.db
      .prepare(
        'SELECT reference_id, reference_type, context FROM "references" WHERE item_id = ?',
      )
      .all(itemId) as unknown as Array<{
      reference_id: string;
      reference_type: string;
      context: string;
    }>;
    return rows.map((r) => ({
      referenceId: r.reference_id,
      type: r.reference_type,
      context: r.context,
    }));
  }

  /**
   * All item/recipe rows that reference a given id (what points to it).
   * Used to walk the recipe graph in both directions.
   */
  async getReferencesTo(
    referenceId: string,
  ): Promise<Array<{ itemId: string; type: string; context: string }>> {
    const rows = this.db
      .prepare(
        'SELECT item_id, reference_type, context FROM "references" WHERE reference_id = ?',
      )
      .all(referenceId) as unknown as Array<{
      item_id: string;
      reference_type: string;
      context: string;
    }>;
    return rows.map((r) => ({
      itemId: r.item_id,
      type: r.reference_type,
      context: r.context,
    }));
  }

  /**
   * Batched getReferencesTo — one IN query for many reference ids (audit D2,
   * kills the N+1 in RecipeAnalyzer.detectConflicts). Every requested id is
   * present in the returned Map (empty array when it has no rows).
   */
  async getReferencesToMany(
    referenceIds: string[],
  ): Promise<Map<string, Array<{ itemId: string; type: string; context: string }>>> {
    const map = new Map<
      string,
      Array<{ itemId: string; type: string; context: string }>
    >();
    if (referenceIds.length === 0) {
      return map;
    }
    for (const id of referenceIds) {
      map.set(id, []);
    }

    const placeholders = referenceIds.map(() => "?").join(",");
    const rows = this.db
      .prepare(
        `SELECT reference_id, item_id, reference_type, context FROM "references" WHERE reference_id IN (${placeholders})`,
      )
      .all(...referenceIds) as unknown as Array<{
      reference_id: string;
      item_id: string;
      reference_type: string;
      context: string;
    }>;

    for (const r of rows) {
      map.get(r.reference_id)?.push({
        itemId: r.item_id,
        type: r.reference_type,
        context: r.context,
      });
    }
    return map;
  }

  async checkReference(
    referenceId: string,
    referenceType?: string,
  ): Promise<boolean> {
    // Sprites are never rows in `items` — items.type only holds the six block
    // types (item/recipe/sound/vehicle/evolvedrecipe/fixing). Sprite
    // references (Icon, WeaponSprite, ...) live exclusively in the
    // "references" table with reference_type='sprite', populated by
    // extractReferences. Filtering items by type='sprite' therefore always
    // missed (freebuff review C1).
    if (referenceType === "sprite") {
      const refRow = this.db
        .prepare(
          `SELECT COUNT(*) as count FROM "references" WHERE reference_id = ? AND reference_type = 'sprite'`,
        )
        .get(referenceId) as unknown as { count: number };
      return refRow.count > 0;
    }

    let sql = "SELECT COUNT(*) as count FROM items WHERE id = ?";
    const params = [referenceId];

    if (referenceType && referenceType !== "all") {
      sql += " AND type = ?";
      params.push(referenceType);
    }

    const row = this.db.prepare(sql).get(...params) as unknown as {
      count: number;
    };
    if (row.count > 0) {
      return true;
    }

    // 'all' (no type filter): fall back to the references table so sprite/
    // model references that are not item rows still resolve.
    if (!referenceType || referenceType === "all") {
      const refRow = this.db
        .prepare(
          `SELECT COUNT(*) as count FROM "references" WHERE reference_id = ?`,
        )
        .get(referenceId) as unknown as { count: number };
      return refRow.count > 0;
    }

    return false;
  }

  async getSimilarItems(query: string, limit: number = 5): Promise<string[]> {
    // Escape LIKE wildcards so user input matches literally (audit M7).
    const escapeLike = (q: string): string => q.replace(/[\\%_]/g, "\\$&");
    const escapedQuery = escapeLike(query);

    const rows = this.db
      .prepare(
        `
      SELECT name
      FROM items
      WHERE name LIKE ? ESCAPE '\\' OR display_name LIKE ? ESCAPE '\\'
      ORDER BY 
        CASE 
          WHEN name = ? THEN 1
          WHEN name LIKE ? ESCAPE '\\' THEN 2
          WHEN display_name LIKE ? ESCAPE '\\' THEN 3
          ELSE 4
        END,
        name ASC
      LIMIT ?
    `,
      )
      .all(
        `%${escapedQuery}%`,
        `%${escapedQuery}%`,
        query,
        `${escapedQuery}%`,
        `${escapedQuery}%`,
        limit,
      ) as unknown as Array<{ name: string }>;

    return rows.map((row) => row.name);
  }

  async clearDatabase(): Promise<void> {
    // FK is enforced (freebuff M6): children must be deleted before parents,
    // otherwise DELETE FROM items throws FOREIGN KEY constraint failed.
    this.db.exec('DELETE FROM "references"');
    this.db.exec("DELETE FROM mods");
    this.db.exec("DELETE FROM items");
  }

  private prepareFTSQuery(query: string): string {
    // FTS5 query sanitization: never pass user input through unmodified.
    // FTS5 MATCH strings are their own query language — raw input containing
    // operators, quotes, or special characters can cause syntax errors,
    // operator injection, or expensive scans. Term extraction is shared with
    // the KB manager (freebuff L3); the query shape is built here.
    const terms = sanitizeFtsTerms(query);

    if (terms.length === 0) {
      // Nothing searchable — return a match-nothing query
      return '""';
    }

    const quotedTerms = terms.map((term) => `"${term}"`);
    const phraseQuery = `"${terms.join(" ")}"`;
    const termQueries = quotedTerms.join(" ");

    return `${phraseQuery} OR (${termQueries})`;
  }

  close(): void {
    if (this.db) {
      this.db.close();
    }
  }
}
