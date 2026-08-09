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
import {
  DatabaseManager,
  GameItem,
  referenceCandidates,
} from "../database/DatabaseManager.js";

/**
 * Safety cap on chain-graph nodes: a dense 'both' walk at maxDepth 10 can fan
 * out to thousands of nodes — stop at the cap and flag truncation instead of
 * hanging the tool reply (recipe-chain review).
 */
export const CHAIN_MAX_NODES = 500;

export interface ChainNode {
  id: string;
  kind: "recipe" | "item" | "unknown";
  name: string;
  /** items.type when the node resolves to an item row. */
  itemType?: string;
  /** For recipes: ingredient item ids (reference context 'ingredient').
   * `tag: true` marks an entry resolved from a `tags[base:flour]` input —
   * any item carrying that tag is a valid substitute. */
  ingredients: Array<{ id: string; count?: number; tag?: boolean }>;
  /** For recipes: result/output item ids (context 'result' | 'output'). */
  results: Array<{ id: string; count?: number }>;
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
    tools?: Array<{ id: string; count?: number }>;
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
  cycles?: Array<{ recipe: string; item: string }>;
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
  recipes: Array<{ id: string; context: string }>;
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

const RESULT_CONTEXTS = new Set(["result", "output"]);

/**
 * Per-walk graph index (chain-graph fix: consumers for every item). The
 * recipe_ingredients mirror is the authoritative edge store — it captures
 * B42 bracket alternatives (`item 1 [Base.Plank;...]`) and tag inputs
 * (`item 1 tags[base:plank]`) that the references table never receives — so
 * one batch load of the mirror + items + references edges powers every
 * node/edge lookup in a walk, in memory, instead of per-node SQL.
 *
 * Maps are keyed by canonical items.id (resolved through candidate
 * spellings: bare / "Base."-qualified / "base:"-tag), or by the raw tag for
 * tag refs — matching the node ids the walk emits.
 */
interface WalkGraphIndex {
  /** item id → recipes that OUTPUT it (mirror role='output', ref_type='item'). */
  producers: Map<string, Set<string>>;
  /** item id → recipes that ingest it directly (mirror role='ingredient', ref_type='item'). */
  ingestors: Map<string, Set<string>>;
  /** tag → recipes that ingest `tags[tag]` (mirror role='ingredient', ref_type='tag'). */
  tagIngestors: Map<string, Set<string>>;
  /** item id → recipes producing it via the legacy references table. */
  refProducers: Map<string, Set<string>>;
  /** item id → recipes consuming it via the legacy references table. */
  refConsumers: Map<string, Set<string>>;
  /** recipe id → ingredient entries (tag-resolved entries carry tag: true). */
  ingredientsByRecipe: Map<
    string,
    Array<{ id: string; count: number; tag?: boolean }>
  >;
  /** recipe id → output entries. */
  outputsByRecipe: Map<string, Array<{ id: string; count: number }>>;
  /** recipe id → tool entries (mirror role='tool'). */
  toolsByRecipe: Map<string, Array<{ id: string; count: number }>>;
  /** item id → its tag set. */
  itemTags: Map<string, Set<string>>;
  /** tag → item ids carrying it (the tag→item resolution bridge). */
  tagToItems: Map<string, string[]>;
}

export class RecipeAnalyzer {
  constructor(private db: DatabaseManager) {}

  /** The per-walk graph index (built once per analyzeChain call). */
  private idx: WalkGraphIndex | null = null;

  /**
   * Cross-call index cache (reviewer: index caching). The walk index loads
   * the full mirror + items + references tables; rebuilding it on every call
   * wastes 10–20ms on unchanged data. Keyed on the DB graph stamp — a
   * re-parse or newly parsed mod changes the stamp and the next call rebuilds.
   */
  private indexCache: { stamp: string; idx: WalkGraphIndex } | null = null;

  /**
   * Resolve `id` to its canonical items row (the id as stored in the DB).
   * Tries every candidate spelling — bare, "Base."-qualified and "base:"-tag —
   * so "Base.Flour2", "Flour2" and "base:flour2" all land on the same row
   * (recipe-chain review: naming tolerance).
   */
  private async resolveItem(
    id: string,
  ): Promise<{ id: string; info: GameItem } | null> {
    for (const cand of referenceCandidates(id)) {
      const info = await this.db.getItemById(cand);
      if (info) return { id: cand, info };
    }
    return null;
  }

  /**
   * Per-walk memoization (reviewer: N+1 cut). The same ids repeat across
   * dozens of nodes — shared ingredients, common tools — so resolveItem's up
   * to 3 getItemById lookups would otherwise fire thousands of times per
   * walk. `itemCache` caches the canonical spelling + item row; `nodeCache`
   * caches fully built ChainNodes (keys `id::kind`).
   */
  private itemCache = new Map<string, { id: string; info: GameItem } | null>();
  private nodeCache = new Map<string, ChainNode>();

  private clearCaches() {
    this.itemCache.clear();
    this.nodeCache.clear();
    this.idx = null;
  }

  /**
   * Reuse the cached walk index while the graph tables are unchanged, else
   * rebuild it (see buildWalkIndex). This is the only per-call cost of the
   * graph index — the full-table loads are skipped on every call whose DB
   * stamp matches the last build.
   */
  private async cachedWalkIndex(): Promise<WalkGraphIndex> {
    const stamp = await this.db.getGraphStamp();
    if (this.indexCache && this.indexCache.stamp === stamp) {
      return this.indexCache.idx;
    }
    const idx = await this.buildWalkIndex(this.db);
    this.indexCache = { stamp, idx };
    return idx;
  }

  /**
   * Load the mirror + items + references edges once and index them in memory
   * (see WalkGraphIndex). Canonical ids resolve through the candidate
   * spellings so "Base.Plank", "Plank" and "base:plank" all land on the same
   * stored item row; tags stay as written (matched exactly against item tags).
   */
  private async buildWalkIndex(db: DatabaseManager): Promise<WalkGraphIndex> {
    const [mirrorRows, itemRows, refEdges] = await Promise.all([
      db.getRecipeIngredientIndex(),
      db.getGraphItems(),
      db.getReferenceEdges(),
    ]);

    const itemIds = new Set<string>();
    const itemTags = new Map<string, Set<string>>();
    const tagToItems = new Map<string, string[]>();
    for (const r of itemRows) {
      itemIds.add(r.id);
      if (r.tags && r.tags.length > 0) {
        itemTags.set(r.id, new Set(r.tags));
        for (const t of r.tags) {
          const arr = tagToItems.get(t) ?? [];
          arr.push(r.id);
          tagToItems.set(t, arr);
        }
      }
    }
    const canonical = (ref: string): string => {
      for (const cand of referenceCandidates(ref)) {
        if (itemIds.has(cand)) return cand;
      }
      return ref;
    };

    const idx: WalkGraphIndex = {
      producers: new Map(),
      ingestors: new Map(),
      tagIngestors: new Map(),
      refProducers: new Map(),
      refConsumers: new Map(),
      ingredientsByRecipe: new Map(),
      outputsByRecipe: new Map(),
      toolsByRecipe: new Map(),
      itemTags,
      tagToItems,
    };
    const addTo = (map: Map<string, Set<string>>, key: string, val: string) => {
      if (!key) return;
      let set = map.get(key);
      if (!set) {
        set = new Set();
        map.set(key, set);
      }
      set.add(val);
    };
    const addList = <T>(map: Map<string, T[]>, key: string, entry: T) => {
      if (!key) return;
      const arr = map.get(key) ?? [];
      arr.push(entry);
      map.set(key, arr);
    };

    for (const row of mirrorRows) {
      if (row.role === "ingredient") {
        if (row.refType === "item") {
          const cid = canonical(row.ref);
          addTo(idx.ingestors, cid, row.recipeId);
          addList(idx.ingredientsByRecipe, row.recipeId, {
            id: cid,
            count: row.count,
          });
        } else if (row.refType === "tag") {
          addTo(idx.tagIngestors, row.ref, row.recipeId);
          // `tags[base:flour]` = any item carrying the tag is a valid input.
          for (const itemId of tagToItems.get(row.ref) ?? []) {
            addList(idx.ingredientsByRecipe, row.recipeId, {
              id: itemId,
              count: row.count,
              tag: true,
            });
          }
        }
      } else if (row.role === "output" && row.refType === "item") {
        const cid = canonical(row.ref);
        addTo(idx.producers, cid, row.recipeId);
        addList(idx.outputsByRecipe, row.recipeId, {
          id: cid,
          count: row.count,
        });
      } else if (row.role === "tool") {
        addList(idx.toolsByRecipe, row.recipeId, {
          id: row.ref,
          count: row.count,
        });
      }
    }

    // Legacy supplement: recipes parsed before the mirror (or legacy blocks)
    // still declare edges in the references table only.
    for (const e of refEdges) {
      const cid = canonical(e.referenceId);
      if (e.context === "ingredient") {
        addTo(idx.refConsumers, cid, e.itemId);
      } else if (RESULT_CONTEXTS.has(e.context)) {
        addTo(idx.refProducers, cid, e.itemId);
      }
    }
    return idx;
  }

  /** Recipes that produce `id` (mirror outputs ∪ references result/output). */
  private producersOf(id: string): Set<string> {
    const idx = this.idx;
    if (!idx) return new Set();
    const out = new Set(idx.producers.get(id) ?? []);
    for (const p of idx.refProducers.get(id) ?? []) out.add(p);
    return out;
  }

  /**
   * Recipes that consume `id` (mirror item-ingestors ∪ references ingredients
   * ∪ any recipe whose `tags[base:...]` input matches one of the item's tags).
   */
  private consumersOf(id: string): Set<string> {
    const idx = this.idx;
    if (!idx) return new Set();
    const out = new Set(idx.ingestors.get(id) ?? []);
    for (const c of idx.refConsumers.get(id) ?? []) out.add(c);
    for (const t of idx.itemTags.get(id) ?? []) {
      for (const c of idx.tagIngestors.get(t) ?? []) out.add(c);
    }
    return out;
  }

  private async cachedResolveItem(id: string) {
    if (this.itemCache.has(id)) return this.itemCache.get(id) ?? null;
    const res = await this.resolveItem(id);
    this.itemCache.set(id, res);
    return res;
  }

  private async cachedCanonicalItemId(id: string): Promise<string> {
    const res = await this.cachedResolveItem(id);
    return res ? res.id : id;
  }

  private async cachedBuildNode(
    id: string,
    kind: ChainNode["kind"],
  ): Promise<ChainNode> {
    const key = `${id}::${kind}`;
    const hit = this.nodeCache.get(key);
    if (hit) return hit;
    const node = await this.buildNode(id, kind);
    this.nodeCache.set(key, node);
    return node;
  }

  /**
   * Build one chain node with its full edge payload (ingredients/results for
   * recipes; producedBy/consumedBy for items) plus the rich-inspector extras:
   * item stats (props) and recipe metadata/tools (meta), and the cycle flag
   * when a recipe produces one of its own ingredients.
   */
  private async buildNode(
    id: string,
    kind: ChainNode["kind"],
  ): Promise<ChainNode> {
    const node: ChainNode = {
      id,
      kind,
      name: id,
      ingredients: [],
      results: [],
      producedBy: [],
      consumedBy: [],
    };

    const info = (await this.cachedResolveItem(id))?.info;
    if (info) {
      node.name = info.displayName || info.name;
      node.itemType = info.type;
      // Rich item stats — the curated columns the admin inspector shows
      // (recipe-chain roadmap #1: rich inspector).
      const props: Record<string, any> = {};
      if (info.properties?.Type) props.Type = info.properties.Type;
      if (info.category) props.category = info.category;
      if (typeof info.weight === "number") props.weight = info.weight;
      if (typeof info.calories === "number") props.calories = info.calories;
      if (typeof info.hunger_change === "number")
        props.hunger = info.hunger_change;
      if (typeof info.thirst_change === "number")
        props.thirst = info.thirst_change;
      if (info.tags?.length) props.tags = info.tags;
      if (Object.keys(props).length > 0) node.props = props;
    }

    if (kind === "recipe") {
      // Mirror rows first: authoritative for B42 (bracket alternatives + tag
      // inputs never reach the references table). Tag refs resolve to the
      // items that carry the tag — the chain-graph consumers fix.
      const ingMap = new Map<
        string,
        { id: string; count?: number; tag?: boolean }
      >();
      const addIng = (id: string, count?: number, tag?: boolean) => {
        const existing = ingMap.get(id);
        if (existing) {
          // Prefer the direct item requirement over a tag-resolved substitute:
          // a recipe listing the same item both ways must render the direct
          // one, not whichever row happened to sort first (reviewer finding).
          if (tag && !existing.tag) return; // direct entry already wins
          if (!tag && existing.tag) {
            ingMap.set(id, count === undefined ? { id } : { id, count });
          }
          return;
        }
        // Built conditionally: exactOptionalPropertyTypes forbids assigning
        // undefined to an optional property.
        const entry: { id: string; count?: number; tag?: boolean } = { id };
        if (count !== undefined) entry.count = count;
        if (tag) entry.tag = true;
        ingMap.set(id, entry);
      };
      const resMap = new Map<string, { id: string; count?: number }>();
      const addRes = (id: string, count?: number) => {
        if (resMap.has(id)) return;
        resMap.set(id, count === undefined ? { id } : { id, count });
      };
      for (const ing of this.idx?.ingredientsByRecipe.get(id) ?? []) {
        addIng(ing.id, ing.count, ing.tag);
      }
      for (const out of this.idx?.outputsByRecipe.get(id) ?? []) {
        addRes(out.id, out.count);
      }
      // Legacy supplement: recipes with edges only in the references table.
      const refs = await this.db.getReferencesFrom(id);
      for (const ref of refs) {
        if (ref.type !== "item") continue;
        const canonical = await this.cachedCanonicalItemId(ref.referenceId);
        if (ref.context === "ingredient") {
          addIng(canonical);
        } else if (RESULT_CONTEXTS.has(ref.context)) {
          addRes(canonical);
        }
      }
      node.ingredients = [...ingMap.values()];
      node.results = [...resMap.values()];

      // Tool refs from the mirror (role='tool' rows).
      const tools: Array<{ id: string; count?: number }> = (
        this.idx?.toolsByRecipe.get(id) ?? []
      ).map((t) => (t.count > 0 ? { id: t.id, count: t.count } : { id: t.id }));

      // Recipe metadata from the structured recipes mirror (category/time/skill)
      // — the rich inspector's recipe section (recipe-chain roadmap #1).
      const meta = await this.db.getRecipeById(id);
      if (meta) {
        const out: NonNullable<ChainNode["meta"]> = {};
        if (meta.category) out.category = meta.category;
        if (meta.time !== undefined) out.time = meta.time;
        if (meta.skill) out.skill = meta.skill;
        if (meta.skillLevel !== undefined) out.skillLevel = meta.skillLevel;
        if (tools.length > 0) out.tools = tools;
        node.meta = out;
      }

      // Cycle: a recipe that produces one of its own ingredients (A→B→A).
      const resultIds = new Set(node.results.map((r) => r.id));
      if (node.ingredients.some((i) => resultIds.has(i.id))) {
        node.cycle = true;
      }
    } else if (kind === "item") {
      node.producedBy = [...this.producersOf(id)].sort();
      node.consumedBy = [...this.consumersOf(id)].sort();
    }

    return node;
  }

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
  async analyzeChain(
    seed: string,
    direction: "upstream" | "downstream" | "both" = "both",
    maxDepth: number = 3,
    options: { expandNode?: string; target?: string } = {},
  ): Promise<ChainResult> {
    // One walk = one set of memo caches + one in-memory graph index; shared
    // ids hit the cache instead of re-querying the DB per node (reviewer:
    // N+1). The index is the mirror + references + item-tag edge store.
    this.clearCaches();
    this.idx = await this.cachedWalkIndex();
    const seedRes = await this.resolveItem(seed);
    const seedId = seedRes ? seedRes.id : seed;
    const seedKind: ChainNode["kind"] = seedRes
      ? seedRes.info.type === "recipe"
        ? "recipe"
        : "item"
      : "unknown";

    // Expand mode: one-hop neighborhood of the requested node only. The walk
    // is rooted at the expand target with maxDepth 1, and the result keeps the
    // original seed for client identity (recipe-chain roadmap #2).
    if (options.expandNode) {
      const expandRes = await this.resolveItem(options.expandNode);
      const expandId = expandRes ? expandRes.id : options.expandNode;
      const expandKind: ChainNode["kind"] = expandRes
        ? expandRes.info.type === "recipe"
          ? "recipe"
          : "item"
        : "unknown";
      const delta = await this.walk(expandId, expandKind, direction, 1);
      return {
        ...delta,
        seed: seedId,
        seedKind,
        expandedNode: expandId,
      };
    }

    // Path mode: BFS from seed toward target over the walked graph.
    if (options.target) {
      const targetRes = await this.resolveItem(options.target);
      const targetId = targetRes ? targetRes.id : options.target;
      const walked = await this.walk(seedId, seedKind, "both", maxDepth);
      const path = this.shortestPath(walked.nodes, seedId, targetId);
      if (!path) {
        return { ...walked, path: [], pathFound: false };
      }
      // Rebuild the path nodes with full edge payloads so the client can
      // render just the pipeline and highlight it.
      // Every path id came from walked.nodes, so the buildNode fallback can
      // never fire — guard with a kind-preserving build anyway (reviewer:
      // the old fallback hardcoded "item" and would mislabel a recipe).
      const byId = new Map(walked.nodes.map((n) => [n.id, n]));
      const pathNodes: ChainNode[] = [];
      for (const nid of path) {
        const existing = byId.get(nid);
        if (existing) {
          pathNodes.push(existing);
        } else {
          const kind: ChainNode["kind"] =
            (await this.resolveItem(nid))?.info.type === "recipe"
              ? "recipe"
              : "item";
          pathNodes.push(await this.buildNode(nid, kind));
        }
      }
      return {
        ...walked,
        nodes: pathNodes,
        path,
        pathFound: true,
        truncated: false,
      };
    }

    return this.walk(seedId, seedKind, direction, maxDepth);
  }

  /** The shared BFS walk — see analyzeChain for mode dispatch. */
  private async walk(
    seedId: string,
    seedKind: ChainNode["kind"],
    direction: "upstream" | "downstream" | "both",
    maxDepth: number,
  ): Promise<ChainResult> {
    const nodes: ChainNode[] = [];
    const cycles: Array<{ recipe: string; item: string }> = [];
    const visited = new Set<string>();
    const queue: Array<{ id: string; kind: ChainNode["kind"]; depth: number }> =
      [{ id: seedId, kind: seedKind, depth: 0 }];
    visited.add(`${seedId}::${seedKind}`);
    let truncated = false;
    let head = 0;

    while (head < queue.length) {
      if (nodes.length >= CHAIN_MAX_NODES) {
        truncated = true;
        break;
      }

      const { id, kind, depth } = queue[head++];
      const node = await this.cachedBuildNode(id, kind);
      if (node.cycle && kind === "recipe") {
        const loopItem = node.ingredients.find((i) =>
          node.results.some((r) => r.id === i.id),
        );
        if (loopItem) cycles.push({ recipe: id, item: loopItem.id });
      }
      nodes.push(node);

      // Depth limit check — mark truncated only if the boundary node still has
      // edges leading to UNVISITED nodes (edges to already-visited nodes would
      // not expand anything, so they are not "cut").
      if (depth >= maxDepth) {
        let hasCutEdges = false;
        if (kind === "recipe") {
          if (direction !== "downstream") {
            for (const ing of node.ingredients) {
              if (!visited.has(`${ing.id}::item`)) {
                hasCutEdges = true;
                break;
              }
            }
          }
          if (!hasCutEdges && direction !== "upstream") {
            for (const res of node.results) {
              if (!visited.has(`${res.id}::item`)) {
                hasCutEdges = true;
                break;
              }
            }
          }
        } else if (kind === "item") {
          if (direction !== "downstream") {
            for (const pid of node.producedBy) {
              if (!visited.has(`${pid}::recipe`)) {
                hasCutEdges = true;
                break;
              }
            }
          }
          if (!hasCutEdges && direction !== "upstream") {
            for (const cid of node.consumedBy) {
              if (!visited.has(`${cid}::recipe`)) {
                hasCutEdges = true;
                break;
              }
            }
          }
        }
        if (hasCutEdges) truncated = true;
        continue;
      }

      // Expand neighbors along the requested direction(s).
      const neighbors: Array<{ id: string; kind: ChainNode["kind"] }> = [];

      if (kind === "recipe") {
        if (direction !== "downstream") {
          // Upstream of a recipe: for each ingredient, who produces it?
          for (const ing of node.ingredients) {
            for (const pid of this.producersOf(ing.id)) {
              const key = `${pid}::recipe`;
              if (!visited.has(key)) {
                neighbors.push({ id: pid, kind: "recipe" });
                visited.add(key);
              }
            }
            const keyItem = `${ing.id}::item`;
            if (!visited.has(keyItem)) {
              neighbors.push({ id: ing.id, kind: "item" });
              visited.add(keyItem);
            }
          }
        }
        if (direction !== "upstream") {
          // Downstream of a recipe: what consumes its results?
          for (const res of node.results) {
            for (const cid of this.consumersOf(res.id)) {
              const key = `${cid}::recipe`;
              if (!visited.has(key)) {
                neighbors.push({ id: cid, kind: "recipe" });
                visited.add(key);
              }
            }
            const keyItem = `${res.id}::item`;
            if (!visited.has(keyItem)) {
              neighbors.push({ id: res.id, kind: "item" });
              visited.add(keyItem);
            }
          }
        }
      } else if (kind === "item") {
        if (direction !== "downstream") {
          for (const pid of node.producedBy) {
            const key = `${pid}::recipe`;
            if (!visited.has(key)) {
              neighbors.push({ id: pid, kind: "recipe" });
              visited.add(key);
            }
          }
        }
        if (direction !== "upstream") {
          for (const cid of node.consumedBy) {
            const key = `${cid}::recipe`;
            if (!visited.has(key)) {
              neighbors.push({ id: cid, kind: "recipe" });
              visited.add(key);
            }
          }
        }
      }

      for (const n of neighbors) {
        queue.push({ ...n, depth: depth + 1 });
      }
    }

    const result: ChainResult = {
      seed: seedId,
      seedKind,
      nodes,
      maxDepth,
      truncated,
    };
    if (cycles.length > 0) result.cycles = cycles;
    return result;
  }

  /**
   * BFS shortest path over the collected graph (undirected item↔recipe link
   * graph). Returns ordered node ids from start to target, or null.
   */
  private shortestPath(
    nodes: ChainNode[],
    startId: string,
    targetId: string,
  ): string[] | null {
    if (startId === targetId) return [startId];
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const adj = (id: string): string[] => {
      const n = byId.get(id);
      if (!n) return [];
      if (n.kind === "recipe") {
        return [
          ...n.ingredients.map((i) => i.id),
          ...n.results.map((r) => r.id),
        ];
      }
      return [...n.producedBy, ...n.consumedBy];
    };
    const visited = new Set([startId]);
    const queue: string[] = [startId];
    const parent = new Map<string, string>();
    while (queue.length > 0) {
      const cur = queue.shift() as string;
      if (cur === targetId) {
        const path = [cur];
        let p = parent.get(cur);
        while (p !== undefined) {
          path.push(p);
          p = parent.get(p);
        }
        return path.reverse();
      }
      for (const nb of adj(cur)) {
        if (visited.has(nb) || !byId.has(nb)) continue;
        visited.add(nb);
        parent.set(nb, cur);
        queue.push(nb);
      }
    }
    return null;
  }

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
  async detectConflicts(limit: number = 50): Promise<ConflictResult> {
    // Recipe count comes from the stats helper; duplicate outputs from the
    // dedicated DatabaseManager queries (the raw SQL lives next to the schema).
    const stats = await this.db.getStats();
    const totalRecipes = stats.recipe ?? 0;

    const [exactRows, tagRows] = await Promise.all([
      this.db.findDuplicateRecipeOutputs(limit),
      this.db.findDuplicateTagOutputs(limit),
    ]);

    const conflicts: RecipeConflict[] = [];
    const seenItems = new Set<string>();

    // Exact duplicates: same concrete item id, high severity. Batch the
    // per-conflict producer lookups into one IN query (audit D2).
    if (exactRows.length > 0) {
      const itemIds = exactRows.map((row) => row.item);
      const refsMap = await this.db.getReferencesToMany(itemIds);
      for (const row of exactRows) {
        const refs = refsMap.get(row.item) ?? [];
        // Dedupe by producer id: one recipe can claim the item through both a
        // 'result' and an 'output' context — it is still a single producer.
        const recipes: Array<{ id: string; context: string }> = [];
        const seen = new Set<string>();
        for (const p of refs) {
          if (
            p.type === "item" &&
            RESULT_CONTEXTS.has(p.context) &&
            !seen.has(p.itemId)
          ) {
            seen.add(p.itemId);
            recipes.push({ id: p.itemId, context: p.context });
          }
        }
        // Severity ranking (roadmap #7): only outputs that resolve to a real
        // item row are HIGH (real breakage — one recipe silently wins).
        // Virtual outputs — `mapper:X` refs and tag-form outputs with no items
        // row — are LOW: the game maps them per recipe and tolerates overlap.
        const concrete = await this.resolveItem(row.item);
        const isMapper = row.item.startsWith("mapper:");
        seenItems.add(row.item);
        conflicts.push({
          item: row.item,
          recipes,
          kind: isMapper ? "mapper" : concrete ? "exact" : "tag",
          severity: concrete ? "high" : "low",
        });
      }
    }

    // Tag multi-path: shared tag outputs, low severity (game tolerates).
    for (const row of tagRows) {
      if (seenItems.has(row.tag)) continue; // exact duplicate wins the ranking
      const producers = await this.db.getRecipesByOutputRef(row.tag);
      const recipes = producers.map((id) => ({ id, context: "output" }));
      seenItems.add(row.tag);
      conflicts.push({ item: row.tag, recipes, kind: "tag", severity: "low" });
    }

    return { conflicts, totalRecipes };
  }
}
