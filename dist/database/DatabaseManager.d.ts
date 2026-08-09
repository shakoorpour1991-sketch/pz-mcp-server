import { BlockType } from "../utils/blockTypes.js";
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
export declare const SCHEMA_VERSION = 2;
/**
 * Candidate spellings of an id that all resolve to the same underlying
 * recipe/item reference (recipe-chain review: naming tolerance). The parser
 * stores vanilla items bare ("Flour2") and mod items qualified
 * ("ModName.Item"), while recipe blocks reference ingredients/results in
 * whatever form the script used ("Base.Flour2", "Flour2", "base:flour2").
 * Reference lookups try every form so the chain graph resolves regardless of
 * which spelling the caller (or the script) used.
 */
export declare function referenceCandidates(raw: string): string[];
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
    icon?: string | undefined;
    calories?: number | undefined;
}
export interface SearchOptions {
    type?: string;
    category?: string;
    tags?: string;
    metalValueMin?: number;
    metalValueMax?: number;
    attachmentType?: string;
    minWeight?: number;
    maxWeight?: number;
    minCalories?: number;
    maxCalories?: number;
    limit?: number;
}
export interface GameRecipe {
    id: string;
    name: string;
    module: string;
    category?: string;
    time?: number;
    skill?: string;
    skillLevel?: number;
    result?: string;
    resultCount?: number;
    properties: Record<string, any>;
    filePath: string;
}
export type RecipeIngredientRole = "ingredient" | "tool" | "output";
export type RecipeRefType = "item" | "tag" | "mapper";
export interface RecipeIngredient {
    recipeId: string;
    ref: string;
    refType: RecipeRefType;
    count: number;
    role: RecipeIngredientRole;
    sortOrder: number;
}
export interface RecipeSearchOptions {
    query?: string;
    category?: string;
    skill?: string;
    minSkillLevel?: number;
    maxSkillLevel?: number;
    ingredient?: string;
    tool?: string;
    result?: string;
    limit?: number;
}
export interface RecipeSearchResult {
    id: string;
    name: string;
    module: string;
    category?: string;
    time?: number;
    skill?: string;
    skillLevel?: number;
    result?: string;
    resultCount?: number;
    ingredients: Array<{
        ref: string;
        refType: RecipeRefType;
        count: number;
        role: RecipeIngredientRole;
    }>;
    properties: Record<string, any>;
}
export declare class DatabaseManager {
    private db;
    private dbPath;
    private inTransaction;
    /** Set when createTables dropped + recreated an old-shaped items_fts. */
    private ftsTableWasRecreated;
    constructor(dbPath?: string);
    initialize(): Promise<void>;
    /** Read the stored schema version (0 for a brand-new/never-migrated DB). */
    private schemaVersion;
    /**
     * Numbered, version-gated migrations (audit: explicit schema versioning).
     * Each block upgrades one schema version; the PRAGMA is bumped afterwards
     * so a downgraded binary never re-runs a completed migration. The DB is a
     * disposable cache (rebuilt by parse_game_files), so migrations stay
     * additive — this framework exists for safe column/shape evolution, not
     * long-lived user state.
     */
    private migrateSchema;
    private createTables;
    private createIndexes;
    insertItem(item: GameItem): Promise<void>;
    insertItems(items: GameItem[]): Promise<void>;
    /**
     * Upsert structured recipe rows (one per craftRecipe block). The recipe
     * remains an items row (type='recipe') too — this is the queryable mirror.
     */
    insertRecipes(recipes: GameRecipe[]): Promise<void>;
    /**
     * Replace a recipe's ingredient/tool/output rows (delete-then-insert keeps
     * re-parses idempotent without needing a unique index on (recipe_id, ref, role)).
     */
    insertRecipeIngredients(entries: RecipeIngredient[]): Promise<void>;
    /**
     * Search the structured recipe tables. Filters: free-text query (name/id),
     * category, skill requirement (name + optional level bounds), and ref-based
     * filters for ingredient / tool / result rows. Every column is table-
     * qualified (recipe_ingredients has no 'type'/'name' columns, but keeping
     * the join unambiguous is the house rule from the searchContent fix).
     */
    searchRecipes(options?: RecipeSearchOptions): Promise<RecipeSearchResult[]>;
    searchContent(query: string, options?: SearchOptions): Promise<GameItem[]>;
    private rowToItem;
    upsertMod(mod: {
        id: string;
        name: string;
        author?: string | undefined;
        version?: string | undefined;
        description?: string | undefined;
        path?: string | undefined;
    }): Promise<void>;
    modExists(id: string): Promise<boolean>;
    getItemById(id: string): Promise<GameItem | null>;
    /**
     * Items whose properties.Type matches exactly (e.g. "Weapon", "Armor",
     * "Ammo") — the precise baseline query for ModAnalyzer balance analysis.
     * Replaces an FTS keyword search + in-memory filter, which could both miss
     * and over-match (mod-analyzer review: exact Type baseline).
     */
    getItemsByPropertyType(propertyType: string, limit?: number): Promise<GameItem[]>;
    /**
     * Items whose internal name matches exactly (blockInfo.name). Used by
     * ModAnalyzer conflict detection: mod items are stored module-qualified
     * ("ClashMod.ClashItem") while vanilla Base items are bare ("ClashItem"),
     * so id-based collision checks would never match vanilla — the name is the
     * stable identity across modules (mod-analyzer review).
     */
    getItemsByName(name: string, limit?: number): Promise<Array<{
        id: string;
        module: string;
        type: string;
    }>>;
    getItemsByType(type: string): Promise<GameItem[]>;
    getStats(): Promise<Record<string, number>>;
    addReference(itemId: string, referenceId: string, referenceType: string, context?: string): Promise<void>;
    /**
     * Run `fn` inside a single SQLite transaction (freebuff M2). Used to batch
     * per-file reference extraction into one commit instead of thousands of
     * single-row autocommit inserts.
     */
    transaction<T>(fn: () => Promise<T>): Promise<T>;
    /**
     * Where does a reference actually live? (freebuff N-series: check_references
     * completeness.) Distinguishes 'defined' (an items row exists) from
     * 'referenced' (only appears in the references table — sprite/model refs and
     * dangling refs alike) so tool callers can spot mod-vs-vanilla gaps.
     */
    describeReference(referenceId: string): Promise<{
        defined: boolean;
        itemType?: string;
        referenceTypes: string[];
        referenceCount: number;
    }>;
    /**
     * Items produced by more than one recipe (duplicate crafting paths — the
     * recipe-conflict signal for RecipeAnalyzer.detectConflicts, freebuff N3).
     */
    findDuplicateRecipeOutputs(limit: number): Promise<Array<{
        item: string;
        recipeCount: number;
    }>>;
    /**
     * All references declared BY an item/recipe row (what it points to).
     * Recipe ingredient refs use context 'ingredient'; results/outputs use
     * context 'result' | 'output' (freebuff N3 recipe-chain graph).
     */
    getReferencesFrom(itemId: string): Promise<Array<{
        referenceId: string;
        type: string;
        context: string;
    }>>;
    /**
     * Tolerant getReferencesTo — matches against every candidate spelling of
     * `referenceId` (bare / qualified / tag form) in one IN query, so recipes
     * that reference "Base.Flour2" are found when the caller passes "Flour2"
     * (and vice versa). Used for recipe-chain graph expansion so the graph
     * resolves regardless of the naming form the script used (recipe-chain
     * review: naming tolerance). Replaces the exact-match getReferencesTo.
     */
    getReferencesToAny(referenceId: string): Promise<Array<{
        itemId: string;
        type: string;
        context: string;
    }>>;
    /**
     * Structured recipe mirror row for one recipe id — used by the recipe chain
     * to enrich recipe nodes with category / time / skill metadata (rich
     * inspector, recipe-chain roadmap). Returns null when the id has no recipes
     * mirror row (e.g. legacy B41 recipe item rows parsed before mirroring).
     */
    getRecipeById(id: string): Promise<{
        id: string;
        name: string;
        module: string;
        category?: string;
        time?: number;
        skill?: string;
        skillLevel?: number;
        result?: string;
        resultCount?: number;
    } | null>;
    /**
     * Tag-output conflicts: tags multiple recipes claim to output. Tag refs live
     * only in recipe_ingredients (never the references table), so the exact-item
     * duplicate query cannot see them — this is the low-severity complement
     * (recipe-chain roadmap: conflict severity).
     */
    findDuplicateTagOutputs(limit: number): Promise<Array<{
        tag: string;
        recipeCount: number;
    }>>;
    /**
     * Recipe ids that declare `ref` as an output (role='output'). Used to list
     * the producers of a tag conflict — refs are exact spellings (tags have no
     * module-qualified variants).
     */
    getRecipesByOutputRef(ref: string): Promise<Array<string>>;
    /**
     * Every recipe_ingredients mirror row in one pass (recipe, ref, ref_type,
     * role, count). The recipe-chain analyzer loads the whole mirror once per
     * walk so bracket/tag ingredient edges — which never reach the references
     * table — resolve for the graph (chain-graph fix: consumers/offspring for
     * every item, not just directly-referenced ones).
     */
    getRecipeIngredientIndex(): Promise<Array<{
        recipeId: string;
        ref: string;
        refType: string;
        role: string;
        count: number;
    }>>;
    /**
     * Lean id + tags rows for every item (the tags column is a JSON array
     * string). Loaded once per chain walk: builds the canonical-spelling set
     * and the tag→items bridge used to resolve `tags[base:flour]` recipe
     * inputs to the items that actually carry the tag.
     */
    getGraphItems(): Promise<Array<{
        id: string;
        tags: string[] | null;
    }>>;
    /**
     * Cheap fingerprint of the graph tables (COUNT + MAX(rowid) per table, one
     * query). RecipeAnalyzer caches its in-memory walk index and only rebuilds
     * it when this stamp changes — a re-parse or a newly parsed mod bumps a
     * rowid/count, so the per-call full-table loads only happen when the data
     * actually changed (reviewer: index caching).
     */
    getGraphStamp(): Promise<string>;
    /**
     * The graph-relevant references rows (item-type ingredient/result/output
     * edges) in one pass — the legacy supplement to the recipe_ingredients
     * mirror for the recipe-chain walk. Sprite/sound/model rows are excluded
     * (they are never recipe edges).
     */
    getReferenceEdges(): Promise<Array<{
        itemId: string;
        referenceId: string;
        context: string;
    }>>;
    /**
     * Batched getReferencesTo — one IN query for many reference ids (audit D2,
     * kills the N+1 in RecipeAnalyzer.detectConflicts). Every requested id is
     * present in the returned Map (empty array when it has no rows).
     */
    getReferencesToMany(referenceIds: string[]): Promise<Map<string, Array<{
        itemId: string;
        type: string;
        context: string;
    }>>>;
    checkReference(referenceId: string, referenceType?: string): Promise<boolean>;
    getSimilarItems(query: string, limit?: number): Promise<string[]>;
    clearDatabase(): Promise<void>;
    private prepareFTSQuery;
    close(): void;
}
//# sourceMappingURL=DatabaseManager.d.ts.map