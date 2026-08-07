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
 */
import { DatabaseManager } from "../database/DatabaseManager.js";

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
}

export interface ChainResult {
  seed: string;
  seedKind: "recipe" | "item" | "unknown";
  nodes: ChainNode[];
  maxDepth: number;
  /** True when the depth limit cut off edges that would have expanded further. */
  truncated: boolean;
}

export interface RecipeConflict {
  /** The item id produced by more than one recipe. */
  item: string;
  /** The recipes (ids) that all claim to produce it. */
  recipes: Array<{ id: string; context: string }>;
}

export interface ConflictResult {
  conflicts: RecipeConflict[];
  totalRecipes: number;
}

const RESULT_CONTEXTS = new Set(["result", "output"]);

export class RecipeAnalyzer {
  constructor(private db: DatabaseManager) {}

  /**
   * Walk the recipe graph from `seed` (an item or recipe id) up to maxDepth.
   * direction: 'upstream' = what makes the seed / its ingredients;
   * 'downstream' = what the seed makes / what consumes it; 'both' = all edges.
   */
  async analyzeChain(
    seed: string,
    direction: "upstream" | "downstream" | "both" = "both",
    maxDepth: number = 3,
  ): Promise<ChainResult> {
    const item = await this.db.getItemById(seed);
    const seedKind: ChainNode["kind"] = item
      ? item.type === "recipe"
        ? "recipe"
        : "item"
      : "unknown";

    const nodes: ChainNode[] = [];
    const visited = new Set<string>();
    const queue: Array<{ id: string; kind: ChainNode["kind"]; depth: number }> =
      [{ id: seed, kind: seedKind, depth: 0 }];
    visited.add(seed);
    let truncated = false;

    while (queue.length > 0) {
      const { id, kind, depth } = queue.shift()!;
      const node: ChainNode = {
        id,
        kind,
        name: id,
        ingredients: [],
        results: [],
        producedBy: [],
        consumedBy: [],
      };

      const info = await this.db.getItemById(id);
      if (info) {
        node.name = info.displayName || info.name;
        node.itemType = info.type;
      }

      if (kind === "recipe") {
        const refs = await this.db.getReferencesFrom(id);
        for (const ref of refs) {
          if (ref.type !== "item") continue;
          if (ref.context === "ingredient") {
            node.ingredients.push({ id: ref.referenceId });
          } else if (RESULT_CONTEXTS.has(ref.context)) {
            node.results.push({ id: ref.referenceId });
          }
        }
        // Edge expansion at this node happens below via the refs lists.
      } else if (kind === "item") {
        const incoming = await this.db.getReferencesTo(id);
        for (const ref of incoming) {
          if (ref.type !== "item") continue;
          if (RESULT_CONTEXTS.has(ref.context)) {
            node.producedBy.push(ref.itemId);
          } else if (ref.context === "ingredient") {
            node.consumedBy.push(ref.itemId);
          }
        }
      }

      nodes.push(node);

      if (depth >= maxDepth) {
        truncated = true;
        continue;
      }

      // Expand neighbors along the requested direction(s).
      const neighbors: Array<{ id: string; kind: ChainNode["kind"] }> = [];

      if (kind === "recipe") {
        if (direction !== "downstream") {
          // Upstream of a recipe: for each ingredient, who produces it?
          for (const ing of node.ingredients) {
            const producers = await this.db.getReferencesTo(ing.id);
            for (const p of producers) {
              if (
                p.type === "item" &&
                RESULT_CONTEXTS.has(p.context) &&
                !visited.has(p.itemId)
              ) {
                neighbors.push({ id: p.itemId, kind: "recipe" });
                visited.add(p.itemId);
              }
            }
            if (!visited.has(ing.id)) {
              neighbors.push({ id: ing.id, kind: "item" });
              visited.add(ing.id);
            }
          }
        }
        if (direction !== "upstream") {
          // Downstream of a recipe: what consumes its results?
          for (const res of node.results) {
            const consumers = await this.db.getReferencesTo(res.id);
            for (const c of consumers) {
              if (
                c.type === "item" &&
                c.context === "ingredient" &&
                !visited.has(c.itemId)
              ) {
                neighbors.push({ id: c.itemId, kind: "recipe" });
                visited.add(c.itemId);
              }
            }
            if (!visited.has(res.id)) {
              neighbors.push({ id: res.id, kind: "item" });
              visited.add(res.id);
            }
          }
        }
      } else if (kind === "item") {
        if (direction !== "downstream") {
          for (const pid of node.producedBy) {
            if (!visited.has(pid)) {
              neighbors.push({ id: pid, kind: "recipe" });
              visited.add(pid);
            }
          }
        }
        if (direction !== "upstream") {
          for (const cid of node.consumedBy) {
            if (!visited.has(cid)) {
              neighbors.push({ id: cid, kind: "recipe" });
              visited.add(cid);
            }
          }
        }
      }

      for (const n of neighbors) {
        queue.push({ ...n, depth: depth + 1 });
      }
    }

    return { seed, seedKind, nodes, maxDepth, truncated };
  }

  /**
   * Find items produced by more than one recipe — a recipe conflict: the game
   * cannot know which crafting path to prefer, and one of the recipes may be
   * silently ignored (or produce unexpected results).
   */
  async detectConflicts(limit: number = 50): Promise<ConflictResult> {
    // Recipe count comes from the stats helper; duplicate outputs from the
    // dedicated DatabaseManager query (the raw SQL lives next to the schema).
    const stats = await this.db.getStats();
    const totalRecipes = stats.recipe ?? 0;

    const rows = await this.db.findDuplicateRecipeOutputs(limit);

    const conflicts: RecipeConflict[] = [];
    for (const row of rows) {
      const producers = await this.db.getReferencesTo(row.item);
      const recipes = producers
        .filter((p) => p.type === "item" && RESULT_CONTEXTS.has(p.context))
        .map((p) => ({ id: p.itemId, context: p.context }));
      conflicts.push({ item: row.item, recipes });
    }

    return { conflicts, totalRecipes };
  }
}
