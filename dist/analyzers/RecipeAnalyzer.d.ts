/**
 * Recipe-chain and conflict analysis (freebuff N3).
 *
 * Builds a dependency graph from the "references" table, which the parser
 * populates during parse_game_files:
 *   - a recipe (items row with type='recipe') declares ingredient refs
 *     (reference_type='item', context='ingredient') and result/output refs
 *     (context='result' | 'output');
 *   - an item row can be produced by recipes (context result/output) and
 *     consumed by recipes (context ingredient).
 *
 * analyzeChain walks that graph in either direction from a seed id, and
 * detectConflicts finds items produced by more than one recipe (duplicate
 * crafting paths that can break recipe resolution in-game).
 *
 * Roadmap (recipe-chain review): nodes carry rich payloads (item stats,
 * recipe metadata/tools), the walk flags crafting cycles (A→B→A), an
 * expandNode mode returns a one-hop delta for in-place growth, and a target
 * mode returns the shortest crafting path between two items.
 */
import { DatabaseManager } from "../database/DatabaseManager.js";
/**
 * Safety cap on chain-graph nodes: a dense 'both' walk at maxDepth 10 can fan
 * out to thousands of nodes — stop at the cap and flag truncation instead of
 * hanging the tool reply (recipe-chain review).
 */
export declare const CHAIN_MAX_NODES = 500;
export interface ChainNode {
    id: string;
    kind: "recipe" | "item" | "unknown";
    name: string;
    /** items.type when the node resolves to an item row. */
    itemType?: string;
    /** For recipes: ingredient item ids (reference context 'ingredient').
     * `tag: true` marks an entry resolved from a `tags[base:flour]` input —
     * any item carrying that tag is a valid substitute. */
    ingredients: Array<{
        id: string;
        count?: number;
        tag?: boolean;
    }>;
    /** For recipes: result/output item ids (context 'result' | 'output'). */
    results: Array<{
        id: string;
        count?: number;
    }>;
    /** Recipe ids that produce this item (context result/output). */
    producedBy: string[];
    /** Recipe ids that consume this item as an ingredient. */
    consumedBy: string[];
    /**
     * Item stats (rich inspector): curated top-level columns from the items
     * row — Type, category, weight, calories, hunger, thirst, tags.
     */
    props?: Record<string, any>;
    /**
     * Recipe metadata (rich inspector): category/time/skill from the recipes
     * mirror + tool refs (recipe_ingredients role='tool').
     */
    meta?: {
        category?: string;
        time?: number;
        skill?: string;
        skillLevel?: number;
        tools?: Array<{
            id: string;
            count?: number;
        }>;
    };
    /** True when a recipe produces one of its own ingredients (A→B→A loop). */
    cycle?: boolean;
}
export interface ChainResult {
    seed: string;
    seedKind: "recipe" | "item" | "unknown";
    nodes: ChainNode[];
    maxDepth: number;
    /** True when the depth limit cut off edges that would have expanded further. */
    truncated: boolean;
    /** Crafting loops found during the walk: recipes producing their own input. */
    cycles?: Array<{
        recipe: string;
        item: string;
    }>;
    /** expandNode mode: the id that was expanded (result is a one-hop delta). */
    expandedNode?: string;
    /** Path mode: ordered node ids from seed to target (empty when not found). */
    path?: string[];
    /** Path mode: whether a path to target exists in the walked graph. */
    pathFound?: boolean;
}
export interface RecipeConflict {
    /** The item id produced by more than one recipe. */
    item: string;
    /** The recipes (ids) that all claim to produce it. */
    recipes: Array<{
        id: string;
        context: string;
    }>;
    /** 'exact': same concrete item id; 'tag': a shared tag output; 'mapper':
     * a `mapper:X` virtual output (resolved per recipe in-game). */
    kind: "exact" | "tag" | "mapper";
    /** 'high': exact duplicate output (breaks recipe resolution); 'low': tag
     * or mapper multi-path the game tolerates. */
    severity: "high" | "low";
}
export interface ConflictResult {
    conflicts: RecipeConflict[];
    totalRecipes: number;
}
export declare class RecipeAnalyzer {
    private db;
    constructor(db: DatabaseManager);
    /** The per-walk graph index (built once per analyzeChain call). */
    private idx;
    /**
     * Cross-call index cache (reviewer: index caching). The walk index loads
     * the full mirror + items + references tables; rebuilding it on every call
     * wastes 10–20ms on unchanged data. Keyed on the DB graph stamp — a
     * re-parse or newly parsed mod changes the stamp and the next call rebuilds.
     */
    private indexCache;
    /**
     * Resolve `id` to its canonical items row (the id as stored in the DB).
     * Tries every candidate spelling — bare, "Base."-qualified and "base:"-tag —
     * so "Base.Flour2", "Flour2" and "base:flour2" all land on the same row
     * (recipe-chain review: naming tolerance).
     */
    private resolveItem;
    /**
     * Per-walk memoization (reviewer: N+1 cut). The same ids repeat across
     * dozens of nodes — shared ingredients, common tools — so resolveItem's up
     * to 3 getItemById lookups would otherwise fire thousands of times per
     * walk. `itemCache` caches the canonical spelling + item row; `nodeCache`
     * caches fully built ChainNodes (keys `id::kind`).
     */
    private itemCache;
    private nodeCache;
    private clearCaches;
    /**
     * Reuse the cached walk index while the graph tables are unchanged, else
     * rebuild it (see buildWalkIndex). This is the only per-call cost of the
     * graph index — the full-table loads are skipped on every call whose DB
     * stamp matches the last build.
     */
    private cachedWalkIndex;
    /**
     * Load the mirror + items + references edges once and index them in memory
     * (see WalkGraphIndex). Canonical ids resolve through the candidate
     * spellings so "Base.Plank", "Plank" and "base:plank" all land on the same
     * stored item row; tags stay as written (matched exactly against item tags).
     */
    private buildWalkIndex;
    /** Recipes that produce `id` (mirror outputs ∪ references result/output). */
    private producersOf;
    /**
     * Recipes that consume `id` (mirror item-ingestors ∪ references ingredients
     * ∪ any recipe whose `tags[base:...]` input matches one of the item's tags).
     */
    private consumersOf;
    private cachedResolveItem;
    private cachedCanonicalItemId;
    private cachedBuildNode;
    /**
     * Build one chain node with its full edge payload (ingredients/results for
     * recipes; producedBy/consumedBy for items) plus the rich-inspector extras:
     * item stats (props) and recipe metadata/tools (meta), and the cycle flag
     * when a recipe produces one of its own ingredients.
     */
    private buildNode;
    /**
     * Walk the recipe graph from `seed` (an item or recipe id) up to maxDepth.
     * direction: 'upstream' = what makes the seed / its ingredients;
     * 'downstream' = what the seed makes / what consumes it; 'both' = all edges.
     * The seed and every reference resolve through their candidate spellings
     * (bare / "Base."-qualified / "base:"-tag) so the graph builds regardless of
     * the naming form the caller or the script used (recipe-chain review).
     *
     * Options:
     *   - expandNode: return only the one-hop delta around that node (in-place
     *     growth — the client merges it into an existing graph instead of
     *     re-walking from the seed);
     *   - target: return the shortest crafting path from seed to target
     *     (seed→…→target node ids in `path`, plus the walked nodes for context).
     */
    analyzeChain(seed: string, direction?: "upstream" | "downstream" | "both", maxDepth?: number, options?: {
        expandNode?: string;
        target?: string;
    }): Promise<ChainResult>;
    /** The shared BFS walk — see analyzeChain for mode dispatch. */
    private walk;
    /**
     * BFS shortest path over the collected graph (undirected item↔recipe link
     * graph). Returns ordered node ids from start to target, or null.
     */
    private shortestPath;
    /**
     * Find items produced by more than one recipe — a recipe conflict: the game
     * cannot know which crafting path to prefer, and one of the recipes may be
     * silently ignored (or produce unexpected results).
     *
     * Conflicts are ranked (recipe-chain roadmap #7): 'exact' duplicates — the
     * same concrete item id from multiple recipes — are high severity (real
     * breakage risk, one recipe silently wins). 'tag' and 'mapper' multi-path —
     * shared tag / mapper:X virtual outputs — are low severity (the game
     * resolves them per recipe and tolerates the overlap).
     */
    detectConflicts(limit?: number): Promise<ConflictResult>;
}
//# sourceMappingURL=RecipeAnalyzer.d.ts.map