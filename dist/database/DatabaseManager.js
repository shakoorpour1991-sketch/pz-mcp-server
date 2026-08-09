import { DatabaseSync } from "node:sqlite";
import { join } from "path";
import { mkdirSync } from "fs";
import logger from "../utils/logger.js";
import { databasePath } from "../utils/config.js";
import { sanitizeFtsTerms } from "../utils/fts.js";
/**
 * Current database schema version, stored in `PRAGMA user_version`.
 *
 * v1 → v2: item search columns (properties_text, tags, metal_value, weight,
 * condition_max, attachment_type, run_speed_modifier, hunger_change,
 * thirst_change, icon, calories) and the plain-text properties_text FTS
 * mirror. Older databases (user_version 0) are migrated in migrateSchema;
 * the items_fts virtual table shape is repaired in createTables before the
 * FTS triggers are recreated.
 */
export const SCHEMA_VERSION = 2;
/**
 * Candidate spellings of an id that all resolve to the same underlying
 * recipe/item reference (recipe-chain review: naming tolerance). The parser
 * stores vanilla items bare ("Flour2") and mod items qualified
 * ("ModName.Item"), while recipe blocks reference ingredients/results in
 * whatever form the script used ("Base.Flour2", "Flour2", "base:flour2").
 * Reference lookups try every form so the chain graph resolves regardless of
 * which spelling the caller (or the script) used.
 */
export function referenceCandidates(raw) {
    const s = String(raw);
    const out = [s];
    const bare = s.replace(/^[A-Za-z]+[.:]/, "");
    if (bare && bare !== s)
        out.push(bare);
    if (bare && !bare.startsWith("Base.") && !bare.includes(":")) {
        out.push(`Base.${bare}`);
    }
    if (bare)
        out.push(`base:${bare.toLowerCase()}`);
    return [...new Set(out)];
}
/** Shared item column list (freebuff L3) — keeps the SQL in sync. */
const ITEM_SELECT_COLUMNS = "id, name, display_name, type, module, category, properties, raw_content, file_path, tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier, hunger_change, thirst_change, icon, calories";
/**
 * Flatten item properties into plain, searchable text for the FTS mirror
 * (audit A6). The raw JSON string contains syntax noise ({, }, ", :)
 * that the FTS tokenizer indexes, skewing ranking. Nested objects become
 * dotted keys; arrays are comma-joined; scalars are `key=value` lines.
 */
function propertiesToPlainText(props) {
    const parts = [];
    const walk = (prefix, value) => {
        if (value === null || value === undefined)
            return;
        if (Array.isArray(value)) {
            if (value.length > 0)
                parts.push(`${prefix}=${value.join(",")}`);
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
export class DatabaseManager {
    db;
    dbPath;
    inTransaction = false;
    /** Set when createTables dropped + recreated an old-shaped items_fts. */
    ftsTableWasRecreated = false;
    constructor(dbPath) {
        this.dbPath = dbPath || databasePath();
        // Ensure directory exists
        const dbDir = join(this.dbPath, "..");
        mkdirSync(dbDir, { recursive: true });
    }
    async initialize() {
        this.db = new DatabaseSync(this.dbPath);
        // Enable WAL mode for better concurrency
        this.db.exec("PRAGMA journal_mode = WAL");
        // Enforce the FOREIGN KEY declared on "references".item_id (freebuff M6)
        this.db.exec("PRAGMA foreign_keys = ON");
        // Wait up to 5s for a lock instead of failing instantly on a concurrent
        // reader/writer (the dashboard bridge and the server share the DB).
        this.db.exec("PRAGMA busy_timeout = 5000");
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
                .get();
            if (row.item_count !== row.fts_count ||
                row.item_max_rowid !== row.fts_max_rowid) {
                this.db.exec(`INSERT INTO items_fts(items_fts) VALUES('rebuild')`);
                logger.info(`FTS index rebuilt (items=${row.item_count}/${row.item_max_rowid}, fts=${row.fts_count}/${row.fts_max_rowid})`);
            }
        }
        catch (err) {
            logger.warn(`FTS health check skipped: ${err instanceof Error ? err.message : String(err)}`);
        }
    }
    /** Read the stored schema version (0 for a brand-new/never-migrated DB). */
    schemaVersion() {
        const row = this.db.prepare("PRAGMA user_version").get();
        return row.user_version;
    }
    /**
     * Numbered, version-gated migrations (audit: explicit schema versioning).
     * Each block upgrades one schema version; the PRAGMA is bumped afterwards
     * so a downgraded binary never re-runs a completed migration. The DB is a
     * disposable cache (rebuilt by parse_game_files), so migrations stay
     * additive — this framework exists for safe column/shape evolution, not
     * long-lived user state.
     */
    async migrateSchema() {
        const current = this.schemaVersion();
        if (current >= SCHEMA_VERSION)
            return;
        if (current < 2) {
            // v1 → v2: item search columns. Column presence is still double-checked
            // (ALTER TABLE ADD COLUMN fails if the column exists) so brand-new DBs,
            // which already have the full schema from createTables, skip the ALTERs.
            const existing = this.db
                .prepare("PRAGMA table_info(items)")
                .all();
            const existingColumns = new Set(existing.map((c) => c.name));
            const newColumns = [
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
                { name: "icon", sql: "ALTER TABLE items ADD COLUMN icon TEXT" },
                {
                    name: "calories",
                    sql: "ALTER TABLE items ADD COLUMN calories REAL",
                },
            ];
            for (const col of newColumns) {
                if (!existingColumns.has(col.name)) {
                    this.db.exec(col.sql);
                }
            }
            // A v1 DB's items_fts was dropped + recreated in createTables (it had
            // no plain-text properties_text mirror). Rebuild the fresh index from
            // the content table so pre-existing rows are searchable again. Only
            // when the shape actually changed — healthy DBs skip this rebuild
            // (freebuff L1: no rebuild on every healthy boot).
            if (this.ftsTableWasRecreated) {
                this.db.exec(`INSERT INTO items_fts(items_fts) VALUES('rebuild')`);
            }
        }
        this.db.exec(`PRAGMA user_version = ${SCHEMA_VERSION}`);
        logger.info(`Database schema migrated to v${SCHEMA_VERSION}`);
    }
    async createTables() {
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
        // Full-text search table using FTS5.
        // Pre-v2 databases have an items_fts without the plain-text
        // properties_text mirror; the FTS triggers below reference that column,
        // so the table must be repaired BEFORE they are (re)created or the
        // CREATE TRIGGER would fail on an old-shaped table.
        if (this.schemaVersion() < SCHEMA_VERSION) {
            const ftsColumns = this.db
                .prepare("PRAGMA table_info(items_fts)")
                .all();
            if (ftsColumns.length > 0 &&
                !ftsColumns.some((c) => c.name === "properties_text")) {
                this.db.exec("DROP TABLE items_fts");
                this.ftsTableWasRecreated = true;
            }
        }
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
        // Structured recipe table: one row per craftRecipe with its category,
        // skill requirement, craft time and primary result (freebuff deeper
        // indexing). The recipes also remain items rows (type='recipe') so the
        // existing search/reference/chain features keep working unchanged.
        this.db.exec(`
      CREATE TABLE IF NOT EXISTS recipes (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        module TEXT NOT NULL,
        category TEXT,
        time REAL,
        skill TEXT,
        skill_level INTEGER,
        result TEXT,
        result_count INTEGER,
        properties TEXT,
        file_path TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
        // Recipe ingredients/tools/outputs: structured rows powering search_recipes.
        // ref is an item id (Base.Nails) or tag (base:nails); ref_type and role
        // disambiguate which kind of reference each row is.
        this.db.exec(`
      CREATE TABLE IF NOT EXISTS recipe_ingredients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id TEXT NOT NULL,
        ref TEXT NOT NULL,
        ref_type TEXT NOT NULL,
        count INTEGER NOT NULL DEFAULT 1,
        role TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0,
        FOREIGN KEY (recipe_id) REFERENCES recipes (id) ON DELETE CASCADE
      )
    `);
    }
    async createIndexes() {
        // Audit M5: INSERT OR IGNORE only ignores with a uniqueness constraint;
        // dedupe must run before the index so pre-existing duplicates don't fail creation.
        this.db.exec(`DELETE FROM "references" WHERE id NOT IN (SELECT MIN(id) FROM "references" GROUP BY item_id, reference_id, reference_type, context)`);
        this.db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS idx_references_unique ON "references" (item_id, reference_id, reference_type, context)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_items_type ON items (type)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_items_module ON items (module)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_items_category ON items (category)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_references_item ON "references" (item_id)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_references_ref ON "references" (reference_id)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_references_type ON "references" (reference_type)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipes_category ON recipes (category)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipes_skill ON recipes (skill)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipes_skill_level ON recipes (skill_level)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipe_ingredients_recipe ON recipe_ingredients (recipe_id)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipe_ingredients_ref ON recipe_ingredients (ref)`);
        this.db.exec(`CREATE INDEX IF NOT EXISTS idx_recipe_ingredients_role ON recipe_ingredients (role)`);
    }
    async insertItem(item) {
        const stmt = this.db.prepare(`
      INSERT INTO items 
      (id, name, display_name, type, module, category, properties, properties_text, raw_content, file_path,
       tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier,
       hunger_change, thirst_change, icon, calories)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        thirst_change = excluded.thirst_change,
        icon = excluded.icon,
        calories = excluded.calories
    `);
        stmt.run(item.id, item.name, item.displayName ?? null, item.type, item.module, item.category ?? null, JSON.stringify(item.properties), propertiesToPlainText(item.properties), item.rawContent, item.filePath, item.tags ? JSON.stringify(item.tags) : null, item.metal_value ?? null, item.weight ?? null, item.condition_max ?? null, item.attachment_type ?? null, item.run_speed_modifier ?? null, item.hunger_change ?? null, item.thirst_change ?? null, item.icon ?? null, item.calories ?? null);
    }
    async insertItems(items) {
        const stmt = this.db.prepare(`
      INSERT INTO items 
      (id, name, display_name, type, module, category, properties, properties_text, raw_content, file_path,
       tags, metal_value, weight, condition_max, attachment_type, run_speed_modifier,
       hunger_change, thirst_change, icon, calories)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        thirst_change = excluded.thirst_change,
        icon = excluded.icon,
        calories = excluded.calories
    `);
        this.db.exec("BEGIN");
        try {
            for (const item of items) {
                stmt.run(item.id, item.name, item.displayName ?? null, item.type, item.module, item.category ?? null, JSON.stringify(item.properties), propertiesToPlainText(item.properties), item.rawContent, item.filePath, item.tags ? JSON.stringify(item.tags) : null, item.metal_value ?? null, item.weight ?? null, item.condition_max ?? null, item.attachment_type ?? null, item.run_speed_modifier ?? null, item.hunger_change ?? null, item.thirst_change ?? null, item.icon ?? null, item.calories ?? null);
            }
            this.db.exec("COMMIT");
        }
        catch (e) {
            this.db.exec("ROLLBACK");
            throw e;
        }
    }
    /**
     * Upsert structured recipe rows (one per craftRecipe block). The recipe
     * remains an items row (type='recipe') too — this is the queryable mirror.
     */
    async insertRecipes(recipes) {
        if (recipes.length === 0)
            return;
        const stmt = this.db.prepare(`
      INSERT INTO recipes (id, name, module, category, time, skill, skill_level, result, result_count, properties, file_path)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        module = excluded.module,
        category = excluded.category,
        time = excluded.time,
        skill = excluded.skill,
        skill_level = excluded.skill_level,
        result = excluded.result,
        result_count = excluded.result_count,
        properties = excluded.properties,
        file_path = excluded.file_path
    `);
        this.db.exec("BEGIN");
        try {
            for (const r of recipes) {
                stmt.run(r.id, r.name, r.module, r.category ?? null, r.time ?? null, r.skill ?? null, r.skillLevel ?? null, r.result ?? null, r.resultCount ?? null, JSON.stringify(r.properties), r.filePath);
            }
            this.db.exec("COMMIT");
        }
        catch (e) {
            this.db.exec("ROLLBACK");
            throw e;
        }
    }
    /**
     * Replace a recipe's ingredient/tool/output rows (delete-then-insert keeps
     * re-parses idempotent without needing a unique index on (recipe_id, ref, role)).
     */
    async insertRecipeIngredients(entries) {
        if (entries.length === 0)
            return;
        const recipeIds = [...new Set(entries.map((e) => e.recipeId))];
        const deleteStmt = this.db.prepare("DELETE FROM recipe_ingredients WHERE recipe_id = ?");
        const insertStmt = this.db.prepare(`
      INSERT INTO recipe_ingredients (recipe_id, ref, ref_type, count, role, sort_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
        this.db.exec("BEGIN");
        try {
            for (const rid of recipeIds) {
                deleteStmt.run(rid);
            }
            for (const e of entries) {
                insertStmt.run(e.recipeId, e.ref, e.refType, e.count, e.role, e.sortOrder);
            }
            this.db.exec("COMMIT");
        }
        catch (err) {
            this.db.exec("ROLLBACK");
            throw err;
        }
    }
    /**
     * Search the structured recipe tables. Filters: free-text query (name/id),
     * category, skill requirement (name + optional level bounds), and ref-based
     * filters for ingredient / tool / result rows. Every column is table-
     * qualified (recipe_ingredients has no 'type'/'name' columns, but keeping
     * the join unambiguous is the house rule from the searchContent fix).
     */
    async searchRecipes(options = {}) {
        const params = [];
        const clauses = [];
        // Free-text: name or id substring (LIKE wildcards escaped, audit M7)
        if (options.query && options.query.trim()) {
            const escaped = options.query.trim().replace(/[\\%_]/g, "\\$&");
            const like = `%${escaped}%`;
            clauses.push("(r.name LIKE ? ESCAPE '\\' OR r.id LIKE ? ESCAPE '\\')");
            params.push(like, like);
        }
        if (options.category) {
            clauses.push("r.category = ?");
            params.push(options.category);
        }
        // Skill requirement filter: match name case-insensitively, apply level bounds
        if (options.skill) {
            clauses.push("LOWER(r.skill) = LOWER(?)");
            params.push(options.skill);
        }
        if (options.minSkillLevel !== undefined) {
            clauses.push("r.skill_level >= ?");
            params.push(options.minSkillLevel);
        }
        if (options.maxSkillLevel !== undefined) {
            clauses.push("r.skill_level <= ?");
            params.push(options.maxSkillLevel);
        }
        // Ref filters: expand a bare "Nails" to also try the "Base.Nails" item
        // form and the "base:nails" tag form so callers don't need to guess.
        const refCandidates = (raw) => {
            const trimmed = raw.trim();
            const out = [trimmed];
            if (trimmed && !trimmed.startsWith("Base.") && !trimmed.includes(":")) {
                out.push(`Base.${trimmed}`, `base:${trimmed.toLowerCase()}`);
            }
            return out;
        };
        if (options.ingredient) {
            const cands = refCandidates(options.ingredient);
            clauses.push(`EXISTS (SELECT 1 FROM recipe_ingredients ri WHERE ri.recipe_id = r.id AND ri.role = 'ingredient' AND ri.ref IN (${cands.map(() => "?").join(",")}))`);
            params.push(...cands);
        }
        if (options.tool) {
            const cands = refCandidates(options.tool);
            clauses.push(`EXISTS (SELECT 1 FROM recipe_ingredients ri WHERE ri.recipe_id = r.id AND ri.role = 'tool' AND ri.ref IN (${cands.map(() => "?").join(",")}))`);
            params.push(...cands);
        }
        if (options.result) {
            const cands = refCandidates(options.result);
            clauses.push(`EXISTS (SELECT 1 FROM recipe_ingredients ri WHERE ri.recipe_id = r.id AND ri.role = 'output' AND ri.ref IN (${cands.map(() => "?").join(",")}))`);
            params.push(...cands);
        }
        const limit = options.limit ?? 20;
        const where = clauses.length > 0 ? `WHERE ${clauses.join(" AND ")}` : "";
        const rows = this.db
            .prepare(`SELECT r.id, r.name, r.module, r.category, r.time, r.skill, r.skill_level,
                r.result, r.result_count, r.properties
         FROM recipes r
         ${where}
         ORDER BY r.name ASC
         LIMIT ?`)
            .all(...params, limit);
        if (rows.length === 0)
            return [];
        // Batch-load all ingredients for the matched recipes in one IN query.
        const recipeIds = rows.map((r) => r.id);
        const placeholders = recipeIds.map(() => "?").join(",");
        const ingRows = this.db
            .prepare(`SELECT recipe_id, ref, ref_type, count, role
         FROM recipe_ingredients
         WHERE recipe_id IN (${placeholders})
         ORDER BY sort_order ASC`)
            .all(...recipeIds);
        const byRecipe = new Map();
        for (const ing of ingRows) {
            const arr = byRecipe.get(ing.recipe_id) ?? [];
            arr.push({
                ref: ing.ref,
                refType: ing.ref_type,
                count: ing.count,
                role: ing.role,
            });
            byRecipe.set(ing.recipe_id, arr);
        }
        return rows.map((r) => {
            const result = {
                id: r.id,
                name: r.name,
                module: r.module,
                ingredients: byRecipe.get(r.id) ?? [],
                properties: JSON.parse(r.properties ?? "{}"),
            };
            // Built conditionally: exactOptionalPropertyTypes forbids assigning
            // undefined to an optional property.
            if (r.category !== null)
                result.category = r.category;
            if (r.time !== null)
                result.time = r.time;
            if (r.skill !== null)
                result.skill = r.skill;
            if (r.skill_level !== null)
                result.skillLevel = r.skill_level;
            if (r.result !== null)
                result.result = r.result;
            if (r.result_count !== null)
                result.resultCount = r.result_count;
            return result;
        });
    }
    async searchContent(query, options = {}) {
        let sql = "";
        const params = [];
        if (query.trim() === "") {
            // Return all items with optional filtering
            sql = `SELECT ${ITEM_SELECT_COLUMNS} FROM items WHERE 1=1`;
        }
        else {
            // Use FTS5 for search
            sql = `
        SELECT items.id, items.name, items.display_name, items.type, items.module, 
               items.category, items.properties, items.raw_content, items.file_path,
               items.tags, items.metal_value, items.weight, items.condition_max,
               items.attachment_type, items.run_speed_modifier, items.hunger_change,
               items.thirst_change, items.icon, items.calories, items_fts.rank
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
        // Add weight bounds filter (fully qualified like every filter below — the
        // FTS join makes bare column names ambiguous, freebuff deeper indexing)
        if (options.minWeight !== undefined) {
            sql += " AND items.weight >= ?";
            params.push(options.minWeight);
        }
        if (options.maxWeight !== undefined) {
            sql += " AND items.weight <= ?";
            params.push(options.maxWeight);
        }
        // Add calories bounds filter (e.g. "food over 500 calories")
        if (options.minCalories !== undefined) {
            sql += " AND items.calories >= ?";
            params.push(options.minCalories);
        }
        if (options.maxCalories !== undefined) {
            sql += " AND items.calories <= ?";
            params.push(options.maxCalories);
        }
        // Add ordering and limit
        // FTS5 bm25 rank is NEGATIVE for matches (more negative = more relevant),
        // so ASC puts best matches first; DESC would invert it (audit finding).
        if (query.trim() !== "") {
            sql += " ORDER BY rank ASC";
        }
        else {
            sql += " ORDER BY name ASC";
        }
        if (options.limit) {
            sql += " LIMIT ?";
            params.push(options.limit);
        }
        const rows = this.db.prepare(sql).all(...params);
        return rows.map((row) => this.rowToItem(row));
    }
    rowToItem(row) {
        const item = {
            id: row.id,
            name: row.name,
            type: row.type,
            module: row.module,
            properties: JSON.parse(row.properties ?? "{}"),
            rawContent: row.raw_content ?? "",
            filePath: row.file_path ?? "",
        };
        if (row.display_name !== null)
            item.displayName = row.display_name;
        if (row.category !== null)
            item.category = row.category;
        if (row.tags !== null)
            item.tags = JSON.parse(row.tags);
        if (row.metal_value !== null)
            item.metal_value = row.metal_value;
        if (row.weight !== null)
            item.weight = row.weight;
        if (row.condition_max !== null)
            item.condition_max = row.condition_max;
        if (row.attachment_type !== null)
            item.attachment_type = row.attachment_type;
        if (row.run_speed_modifier !== null)
            item.run_speed_modifier = row.run_speed_modifier;
        if (row.hunger_change !== null)
            item.hunger_change = row.hunger_change;
        if (row.thirst_change !== null)
            item.thirst_change = row.thirst_change;
        if (row.icon !== null)
            item.icon = row.icon;
        if (row.calories !== null)
            item.calories = row.calories;
        return item;
    }
    async upsertMod(mod) {
        // Audit M4: the mods table was schema-only (dead). analyzeMod now records
        // the analyzed mod so mod.info require= lists can resolve against mod IDs.
        this.db
            .prepare(`INSERT INTO mods (id, name, author, version, description, path) VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET
           name = excluded.name,
           author = excluded.author,
           version = excluded.version,
           description = excluded.description,
           path = excluded.path`)
            .run(mod.id, mod.name, mod.author || null, mod.version || null, mod.description || null, mod.path || null);
    }
    async modExists(id) {
        const row = this.db
            .prepare(`SELECT COUNT(*) as count FROM mods WHERE id = ?`)
            .get(id);
        return row.count > 0;
    }
    async getItemById(id) {
        const row = this.db
            .prepare(`
      SELECT ${ITEM_SELECT_COLUMNS}
      FROM items
      WHERE id = ?
    `)
            .get(id);
        if (!row)
            return null;
        return this.rowToItem(row);
    }
    /**
     * Items whose properties.Type matches exactly (e.g. "Weapon", "Armor",
     * "Ammo") — the precise baseline query for ModAnalyzer balance analysis.
     * Replaces an FTS keyword search + in-memory filter, which could both miss
     * and over-match (mod-analyzer review: exact Type baseline).
     */
    async getItemsByPropertyType(propertyType, limit = 1000) {
        const rows = this.db
            .prepare(`
      SELECT ${ITEM_SELECT_COLUMNS}
      FROM items
      WHERE type = 'item' AND json_extract(properties, '$.Type') = ?
      ORDER BY name ASC
      LIMIT ?
    `)
            .all(propertyType, limit);
        return rows.map((row) => this.rowToItem(row));
    }
    /**
     * Items whose internal name matches exactly (blockInfo.name). Used by
     * ModAnalyzer conflict detection: mod items are stored module-qualified
     * ("ClashMod.ClashItem") while vanilla Base items are bare ("ClashItem"),
     * so id-based collision checks would never match vanilla — the name is the
     * stable identity across modules (mod-analyzer review).
     */
    async getItemsByName(name, limit = 10) {
        const rows = this.db
            .prepare(`SELECT id, module, type FROM items WHERE name = ? LIMIT ?`)
            .all(name, limit);
        return rows;
    }
    async getItemsByType(type) {
        const rows = this.db
            .prepare(`
      SELECT ${ITEM_SELECT_COLUMNS}
      FROM items
      WHERE type = ?
      ORDER BY name ASC
    `)
            .all(type);
        return rows.map((row) => this.rowToItem(row));
    }
    async getStats() {
        const stats = {};
        // Count by type
        const typeRows = this.db
            .prepare(`
      SELECT type, COUNT(*) as count
      FROM items
      GROUP BY type
    `)
            .all();
        for (const row of typeRows) {
            stats[row.type] = row.count;
        }
        // Total count
        const totalRow = this.db
            .prepare("SELECT COUNT(*) as count FROM items")
            .get();
        stats.total = totalRow.count;
        return stats;
    }
    async addReference(itemId, referenceId, referenceType, context) {
        this.db
            .prepare(`
      INSERT OR IGNORE INTO "references" (item_id, reference_id, reference_type, context)
      VALUES (?, ?, ?, ?)
    `)
            .run(itemId, referenceId, referenceType, context ?? null);
    }
    /**
     * Run `fn` inside a single SQLite transaction (freebuff M2). Used to batch
     * per-file reference extraction into one commit instead of thousands of
     * single-row autocommit inserts.
     */
    async transaction(fn) {
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
        }
        catch (e) {
            this.db.exec("ROLLBACK");
            throw e;
        }
        finally {
            this.inTransaction = false;
        }
    }
    /**
     * Where does a reference actually live? (freebuff N-series: check_references
     * completeness.) Distinguishes 'defined' (an items row exists) from
     * 'referenced' (only appears in the references table — sprite/model refs and
     * dangling refs alike) so tool callers can spot mod-vs-vanilla gaps.
     */
    async describeReference(referenceId) {
        const itemRow = this.db
            .prepare("SELECT type FROM items WHERE id = ?")
            .get(referenceId);
        const typeRows = this.db
            .prepare('SELECT DISTINCT reference_type FROM "references" WHERE reference_id = ?')
            .all(referenceId);
        const countRow = this.db
            .prepare('SELECT COUNT(*) as c FROM "references" WHERE reference_id = ?')
            .get(referenceId);
        // Built conditionally: exactOptionalPropertyTypes forbids assigning
        // undefined to an optional property.
        const result = {
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
    async findDuplicateRecipeOutputs(limit) {
        const rows = this.db
            .prepare(`SELECT reference_id AS item, COUNT(DISTINCT item_id) AS recipe_count
         FROM "references"
         WHERE reference_type = 'item' AND context IN ('result', 'output')
         GROUP BY reference_id
         HAVING COUNT(DISTINCT item_id) > 1
         ORDER BY recipe_count DESC, item ASC
         LIMIT ?`)
            .all(limit);
        return rows.map((r) => ({ item: r.item, recipeCount: r.recipe_count }));
    }
    /**
     * All references declared BY an item/recipe row (what it points to).
     * Recipe ingredient refs use context 'ingredient'; results/outputs use
     * context 'result' | 'output' (freebuff N3 recipe-chain graph).
     */
    async getReferencesFrom(itemId) {
        const rows = this.db
            .prepare('SELECT reference_id, reference_type, context FROM "references" WHERE item_id = ?')
            .all(itemId);
        return rows.map((r) => ({
            referenceId: r.reference_id,
            type: r.reference_type,
            context: r.context,
        }));
    }
    /**
     * Tolerant getReferencesTo — matches against every candidate spelling of
     * `referenceId` (bare / qualified / tag form) in one IN query, so recipes
     * that reference "Base.Flour2" are found when the caller passes "Flour2"
     * (and vice versa). Used for recipe-chain graph expansion so the graph
     * resolves regardless of the naming form the script used (recipe-chain
     * review: naming tolerance). Replaces the exact-match getReferencesTo.
     */
    async getReferencesToAny(referenceId) {
        const cands = referenceCandidates(referenceId);
        const placeholders = cands.map(() => "?").join(",");
        const rows = this.db
            .prepare(`SELECT item_id, reference_type, context FROM "references" WHERE reference_id IN (${placeholders})`)
            .all(...cands);
        return rows.map((r) => ({
            itemId: r.item_id,
            type: r.reference_type,
            context: r.context,
        }));
    }
    /**
     * Structured recipe mirror row for one recipe id — used by the recipe chain
     * to enrich recipe nodes with category / time / skill metadata (rich
     * inspector, recipe-chain roadmap). Returns null when the id has no recipes
     * mirror row (e.g. legacy B41 recipe item rows parsed before mirroring).
     */
    async getRecipeById(id) {
        const row = this.db
            .prepare("SELECT id, name, module, category, time, skill, skill_level, result, result_count FROM recipes WHERE id = ?")
            .get(id);
        if (!row)
            return null;
        const out = { id: row.id, name: row.name, module: row.module };
        if (row.category)
            out.category = row.category;
        if (row.time !== null)
            out.time = row.time;
        if (row.skill)
            out.skill = row.skill;
        if (row.skill_level !== null)
            out.skillLevel = row.skill_level;
        if (row.result)
            out.result = row.result;
        if (row.result_count !== null)
            out.resultCount = row.result_count;
        return out;
    }
    /**
     * Tag-output conflicts: tags multiple recipes claim to output. Tag refs live
     * only in recipe_ingredients (never the references table), so the exact-item
     * duplicate query cannot see them — this is the low-severity complement
     * (recipe-chain roadmap: conflict severity).
     */
    async findDuplicateTagOutputs(limit) {
        const rows = this.db
            .prepare(`SELECT ref AS tag, COUNT(DISTINCT recipe_id) AS recipe_count
         FROM recipe_ingredients
         WHERE role = 'output' AND ref_type = 'tag'
         GROUP BY ref
         HAVING COUNT(DISTINCT recipe_id) > 1
         ORDER BY recipe_count DESC, tag ASC
         LIMIT ?`)
            .all(limit);
        return rows.map((r) => ({ tag: r.tag, recipeCount: r.recipe_count }));
    }
    /**
     * Recipe ids that declare `ref` as an output (role='output'). Used to list
     * the producers of a tag conflict — refs are exact spellings (tags have no
     * module-qualified variants).
     */
    async getRecipesByOutputRef(ref) {
        const rows = this.db
            .prepare("SELECT recipe_id FROM recipe_ingredients WHERE role = 'output' AND ref = ?")
            .all(ref);
        return rows.map((r) => r.recipe_id);
    }
    /**
     * Every recipe_ingredients mirror row in one pass (recipe, ref, ref_type,
     * role, count). The recipe-chain analyzer loads the whole mirror once per
     * walk so bracket/tag ingredient edges — which never reach the references
     * table — resolve for the graph (chain-graph fix: consumers/offspring for
     * every item, not just directly-referenced ones).
     */
    async getRecipeIngredientIndex() {
        const rows = this.db
            .prepare("SELECT recipe_id, ref, ref_type, role, count FROM recipe_ingredients ORDER BY recipe_id, sort_order")
            .all();
        return rows.map((r) => ({
            recipeId: r.recipe_id,
            ref: r.ref,
            refType: r.ref_type,
            role: r.role,
            count: r.count,
        }));
    }
    /**
     * Lean id + tags rows for every item (the tags column is a JSON array
     * string). Loaded once per chain walk: builds the canonical-spelling set
     * and the tag→items bridge used to resolve `tags[base:flour]` recipe
     * inputs to the items that actually carry the tag.
     */
    async getGraphItems() {
        const rows = this.db
            .prepare("SELECT id, tags FROM items")
            .all();
        return rows.map((r) => {
            let tags = null;
            if (r.tags) {
                try {
                    tags = JSON.parse(r.tags);
                }
                catch {
                    tags = null;
                }
            }
            return { id: r.id, tags };
        });
    }
    /**
     * Cheap fingerprint of the graph tables (COUNT + MAX(rowid) per table, one
     * query). RecipeAnalyzer caches its in-memory walk index and only rebuilds
     * it when this stamp changes — a re-parse or a newly parsed mod bumps a
     * rowid/count, so the per-call full-table loads only happen when the data
     * actually changed (reviewer: index caching).
     */
    async getGraphStamp() {
        const row = this.db
            .prepare(`SELECT
          (SELECT COUNT(*) FROM items) || ':' || (SELECT IFNULL(MAX(rowid),0) FROM items) || '|' ||
          (SELECT COUNT(*) FROM recipe_ingredients) || ':' || (SELECT IFNULL(MAX(rowid),0) FROM recipe_ingredients) || '|' ||
          (SELECT COUNT(*) FROM "references") || ':' || (SELECT IFNULL(MAX(rowid),0) FROM "references") AS stamp`)
            .get();
        return row.stamp;
    }
    /**
     * The graph-relevant references rows (item-type ingredient/result/output
     * edges) in one pass — the legacy supplement to the recipe_ingredients
     * mirror for the recipe-chain walk. Sprite/sound/model rows are excluded
     * (they are never recipe edges).
     */
    async getReferenceEdges() {
        const rows = this.db
            .prepare("SELECT item_id, reference_id, context FROM \"references\" WHERE reference_type = 'item' AND context IN ('ingredient', 'result', 'output')")
            .all();
        return rows.map((r) => ({
            itemId: r.item_id,
            referenceId: r.reference_id,
            context: r.context,
        }));
    }
    /**
     * Batched getReferencesTo — one IN query for many reference ids (audit D2,
     * kills the N+1 in RecipeAnalyzer.detectConflicts). Every requested id is
     * present in the returned Map (empty array when it has no rows).
     */
    async getReferencesToMany(referenceIds) {
        const map = new Map();
        if (referenceIds.length === 0) {
            return map;
        }
        for (const id of referenceIds) {
            map.set(id, []);
        }
        const placeholders = referenceIds.map(() => "?").join(",");
        const rows = this.db
            .prepare(`SELECT reference_id, item_id, reference_type, context FROM "references" WHERE reference_id IN (${placeholders})`)
            .all(...referenceIds);
        for (const r of rows) {
            map.get(r.reference_id)?.push({
                itemId: r.item_id,
                type: r.reference_type,
                context: r.context,
            });
        }
        return map;
    }
    async checkReference(referenceId, referenceType) {
        // Sprites are never rows in `items` — items.type only holds the six block
        // types (item/recipe/sound/vehicle/evolvedrecipe/fixing). Sprite
        // references (Icon, WeaponSprite, ...) live exclusively in the
        // "references" table with reference_type='sprite', populated by
        // extractReferences. Filtering items by type='sprite' therefore always
        // missed (freebuff review C1).
        if (referenceType === "sprite") {
            const refRow = this.db
                .prepare(`SELECT COUNT(*) as count FROM "references" WHERE reference_id = ? AND reference_type = 'sprite'`)
                .get(referenceId);
            return refRow.count > 0;
        }
        let sql = "SELECT COUNT(*) as count FROM items WHERE id = ?";
        const params = [referenceId];
        if (referenceType && referenceType !== "all") {
            sql += " AND type = ?";
            params.push(referenceType);
        }
        const row = this.db.prepare(sql).get(...params);
        if (row.count > 0) {
            return true;
        }
        // 'all' (no type filter): fall back to the references table so sprite/
        // model references that are not item rows still resolve.
        if (!referenceType || referenceType === "all") {
            const refRow = this.db
                .prepare(`SELECT COUNT(*) as count FROM "references" WHERE reference_id = ?`)
                .get(referenceId);
            return refRow.count > 0;
        }
        return false;
    }
    async getSimilarItems(query, limit = 5) {
        // Escape LIKE wildcards so user input matches literally (audit M7).
        const escapeLike = (q) => q.replace(/[\\%_]/g, "\\$&");
        const escapedQuery = escapeLike(query);
        const rows = this.db
            .prepare(`
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
    `)
            .all(`%${escapedQuery}%`, `%${escapedQuery}%`, query, `${escapedQuery}%`, `${escapedQuery}%`, limit);
        return rows.map((row) => row.name);
    }
    async clearDatabase() {
        // FK is enforced (freebuff M6): children must be deleted before parents,
        // otherwise DELETE FROM items throws FOREIGN KEY constraint failed.
        this.db.exec('DELETE FROM "references"');
        this.db.exec("DELETE FROM recipe_ingredients");
        this.db.exec("DELETE FROM recipes");
        this.db.exec("DELETE FROM mods");
        this.db.exec("DELETE FROM items");
    }
    prepareFTSQuery(query) {
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
        // Prefix matching (search-as-you-type): each sanitized term gets a
        // trailing `*` so partial input like "flo" matches Flour2/Cornflour2
        // instead of only exact tokens. Terms are sanitized (no spaces, quotes
        // or special chars), so bare `term*` is safe FTS5 syntax — and quoted
        // prefixes ("flo*") do NOT match in this FTS5 build, only unquoted ones.
        // Terms that still carry FTS punctuation (e.g. dots in "Base.Burger") are
        // quoted instead so the MATCH never errors; quoted terms match the exact
        // token sequence. Multi-term input becomes an implicit AND.
        const prefixTerms = terms.map((term) => /^[\p{L}\p{N}_]+$/u.test(term) ? `${term}*` : `"${term}"`);
        return prefixTerms.join(" ");
    }
    close() {
        if (this.db) {
            this.db.close();
        }
    }
}
//# sourceMappingURL=DatabaseManager.js.map