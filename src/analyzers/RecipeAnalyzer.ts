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
  /** For recipes: ingredient item ids (reference context 'ingredient'). */
  ingredients: Array<{ id: string; count?: number }>;
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

export class RecipeAnalyzer {
  constructor(private db: DatabaseManager) {}

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
      const refs = await this.db.getReferencesFrom(id);
      // Count labels + tools come from the recipe_ingredients mirror (the
      // references table has no count column); keyed by the exact written
      // spelling.
      const refCounts = await this.db.getRecipeRefCounts(id);
      const counts = new Map<string, number>();
      const tools: Array<{ id: string; count?: number }> = [];
      for (const r of refCounts) {
        if (r.role === "ingredient" || r.role === "output") {
          counts.set(r.ref, r.count);
        } else if (r.role === "tool") {
          tools.push(
            r.count > 0 ? { id: r.ref, count: r.count } : { id: r.ref },
          );
        }
      }
      const addRef = (
        arr: Array<{ id: string; count?: number }>,
        writtenId: string,
        canonicalId: string,
      ) => {
        if (arr.some((x) => x.id === canonicalId)) return;
        // Built conditionally: exactOptionalPropertyTypes forbids pushing
        // count: undefined onto an optional property.
        const count = counts.get(writtenId);
        arr.push(
          count === undefined
            ? { id: canonicalId }
            : { id: canonicalId, count },
        );
      };
      for (const ref of refs) {
        if (ref.type !== "item") continue;
        const canonical = await this.cachedCanonicalItemId(ref.referenceId);
        if (ref.context === "ingredient") {
          addRef(node.ingredients, ref.referenceId, canonical);
        } else if (RESULT_CONTEXTS.has(ref.context)) {
          addRef(node.results, ref.referenceId, canonical);
        }
      }

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
      const incoming = await this.db.getReferencesToAny(id);
      for (const ref of incoming) {
        if (ref.type !== "item") continue;
        if (RESULT_CONTEXTS.has(ref.context)) {
          if (!node.producedBy.includes(ref.itemId)) {
            node.producedBy.push(ref.itemId);
          }
        } else if (ref.context === "ingredient") {
          if (!node.consumedBy.includes(ref.itemId)) {
            node.consumedBy.push(ref.itemId);
          }
        }
      }
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
    // One walk = one set of memo caches; shared ids hit the cache instead of
    // re-querying the DB per node (reviewer: N+1).
    this.clearCaches();
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
            const producers = await this.db.getReferencesToAny(ing.id);
            for (const p of producers) {
              if (p.type === "item" && RESULT_CONTEXTS.has(p.context)) {
                const key = `${p.itemId}::recipe`;
                if (!visited.has(key)) {
                  neighbors.push({ id: p.itemId, kind: "recipe" });
                  visited.add(key);
                }
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
            const consumers = await this.db.getReferencesToAny(res.id);
            for (const c of consumers) {
              if (c.type === "item" && c.context === "ingredient") {
                const key = `${c.itemId}::recipe`;
                if (!visited.has(key)) {
                  neighbors.push({ id: c.itemId, kind: "recipe" });
                  visited.add(key);
                }
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
