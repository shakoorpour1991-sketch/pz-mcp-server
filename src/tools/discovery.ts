/**
 * Discovery tools: search vanilla content and structured recipes.
 */
import type { z } from "zod";
import { SearchVanillaSchema, SearchRecipesSchema } from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatRecipeSearchResults,
  formatSearchResults,
  formatAiContext,
  formatItemRelations,
} from "../utils/formatters.js";
import { gameVersion } from "../utils/config.js";

export const discoveryTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "search_vanilla",
    description:
      "Search vanilla Project Zomboid content (items, recipes, sounds, vehicles) with intelligent matching and filters (category, weight, calories, tags, type)",
    inputSchema: SearchVanillaSchema,
    handler: async (args, ctx) => {
      const {
        query,
        id,
        type,
        category,
        module,
        scriptPath,
        tags,
        metalValueMin,
        metalValueMax,
        attachmentType,
        minWeight,
        maxWeight,
        minCalories,
        maxCalories,
        properties,
        usedInRecipe,
        producedByRecipe,
        sprite,
        sound,
        includeRelations,
        format,
        limit,
      } = args;
      const build = gameVersion();
      const searchOptions: {
        type?: string;
        category?: string;
        module?: string;
        scriptPath?: string;
        tags?: string;
        metalValueMin?: number;
        metalValueMax?: number;
        attachmentType?: string;
        minWeight?: number;
        maxWeight?: number;
        minCalories?: number;
        maxCalories?: number;
        properties?: Array<{
          key: string;
          min?: number;
          max?: number;
          eq?: string | number | boolean;
        }>;
        usedInRecipe?: boolean;
        producedByRecipe?: boolean;
        sprite?: string;
        sound?: string;
        limit?: number;
      } = {};
      if (type !== undefined && type !== "all") searchOptions.type = type;
      if (category !== undefined) searchOptions.category = category;
      if (module !== undefined) searchOptions.module = module;
      if (scriptPath !== undefined) searchOptions.scriptPath = scriptPath;
      if (tags !== undefined) searchOptions.tags = tags;
      if (metalValueMin !== undefined)
        searchOptions.metalValueMin = metalValueMin;
      if (metalValueMax !== undefined)
        searchOptions.metalValueMax = metalValueMax;
      if (attachmentType !== undefined)
        searchOptions.attachmentType = attachmentType;
      if (minWeight !== undefined) searchOptions.minWeight = minWeight;
      if (maxWeight !== undefined) searchOptions.maxWeight = maxWeight;
      if (minCalories !== undefined) searchOptions.minCalories = minCalories;
      if (maxCalories !== undefined) searchOptions.maxCalories = maxCalories;
      if (properties !== undefined) searchOptions.properties = properties;
      if (usedInRecipe !== undefined) searchOptions.usedInRecipe = usedInRecipe;
      if (producedByRecipe !== undefined)
        searchOptions.producedByRecipe = producedByRecipe;
      if (sprite !== undefined) searchOptions.sprite = sprite;
      if (sound !== undefined) searchOptions.sound = sound;
      if (limit !== undefined) searchOptions.limit = limit;

      // Feature 5: exact canonical lookup (id fast path with fuzzy fallback).
      let exactItem: Awaited<ReturnType<typeof ctx.dbManager.lookupItem>> | null =
        null;
      if (id !== undefined) {
        exactItem = await ctx.dbManager.lookupItem(id);
        if (!exactItem.item) {
          return {
            content: [
              {
                type: "text",
                text: `No vanilla item found for id "${id}". Try a text query instead, or check the id spelling.`,
              },
            ],
            structuredContent: { id, count: 0, results: [] },
          };
        }
      }

      let results: Awaited<ReturnType<typeof ctx.dbManager.searchContent>> =
        exactItem
          ? exactItem.item
            ? [exactItem.item]
            : []
          : await ctx.dbManager.searchContent(query ?? "", searchOptions);

      // Feature 2: typo-tolerant fallback — when a text query matches nothing,
      // resolve it as an id/name and surface the canonical match + confidence.
      let resolvedMatch: {
        item: Awaited<ReturnType<typeof ctx.dbManager.lookupItem>>;
      } | null = null;
      if (
        !exactItem &&
        results.length === 0 &&
        query &&
        query.trim().length > 0
      ) {
        const lookup = await ctx.dbManager.lookupItem(query);
        if (lookup.item) {
          resolvedMatch = { item: lookup };
          results = [lookup.item];
        }
      }

      // Feature 4: relationship traversal on the primary result.
      let relations: any = null;
      let kbDocs: any[] = [];
      if (includeRelations && results.length > 0) {
        const primary = results[0]!;
        relations = await ctx.dbManager.getItemRelations(primary.id);
        try {
          const kb = await ctx.knowledgeBaseManager.search(primary.name, {
            limit: 3,
          });
          // Link at the file level (docTopic/docTitle) — search hits are
          // section chunks; the doc id is what resources/knowledge:// expose.
          kbDocs = kb.map((d) => ({
            topic: d.docTopic,
            title: d.docTitle,
          }));
        } catch {
          kbDocs = []; // KB not indexed — relations still work without docs
        }
      }

      const enriched = results.map((r, i) => ({
        id: r.id,
        name: r.name,
        displayName: r.displayName,
        type: r.type,
        module: r.module,
        category: r.category,
        weight: r.weight,
        calories: r.calories,
        tags: r.tags,
        properties: r.properties,
        provenance: {
          source: r.module === "Base" ? "vanilla" : "mod",
          build,
          path: r.filePath || null,
          confidence: confidenceFor(i, exactItem, resolvedMatch),
        },
      }));

      const summary =
        exactItem && exactItem.match && exactItem.item
          ? `Resolved "${id}" → ${exactItem.item.id} (${exactItem.match.method}, confidence ${Math.round(exactItem.match.confidence * 100)}%)`
          : resolvedMatch && resolvedMatch.item.match && resolvedMatch.item.item
            ? `No text matches — resolved "${query}" → ${resolvedMatch.item.item.id} (${resolvedMatch.item.match.method}, confidence ${Math.round(resolvedMatch.item.match.confidence * 100)}%)`
            : `Found ${results.length} results for "${query ?? ""}"`;

      let text = `${summary}\n\n`;
      if (format === "ai") {
        text += formatAiContext(enriched, build);
      } else {
        text += formatSearchResults(enriched);
      }
      if (relations && results.length > 0) {
        text += `\n\n${formatItemRelations(results[0]!.id, relations, kbDocs)}`;
      }

      const structured: any = {
        count: results.length,
        query: query ?? "",
        id: id ?? undefined,
        build,
        results: enriched,
      };
      if (resolvedMatch && resolvedMatch.item.match) {
        structured.resolved = {
          input: query,
          canonicalId: resolvedMatch.item.item?.id,
          method: resolvedMatch.item.match.method,
          confidence: resolvedMatch.item.match.confidence,
        };
      }
      if (relations && results.length > 0) {
        structured.relations = { item: results[0]!.id, ...relations };
        structured.kbDocs = kbDocs;
      }
      return { content: [{ type: "text", text }], structuredContent: structured };

      // Confidence per result: exact lookup → verified; typo-resolved → the
      // fuzzy confidence; everything else → keyword match.
      function confidenceFor(
        i: number,
        exact: Awaited<ReturnType<typeof ctx.dbManager.lookupItem>> | null,
        resolved: {
          item: Awaited<ReturnType<typeof ctx.dbManager.lookupItem>>;
        } | null,
      ): string {
        if (i === 0) {
          if (exact?.match) return "verified";
          if (resolved?.item.match) return "resolved";
        }
        return "keyword";
      }
    },
  },
  {
    name: "search_recipes",
    description:
      "Search structured craft recipes by ingredient, tool, skill requirement, category, or result",
    inputSchema: SearchRecipesSchema,
    handler: async (args, ctx) => {
      const {
        query,
        category,
        skill,
        minSkillLevel,
        maxSkillLevel,
        ingredient,
        tool,
        result,
        limit,
      } = args;
      const recipeOptions: {
        query?: string;
        category?: string;
        skill?: string;
        minSkillLevel?: number;
        maxSkillLevel?: number;
        ingredient?: string;
        tool?: string;
        result?: string;
        limit?: number;
      } = {};
      if (query !== undefined) recipeOptions.query = query;
      if (category !== undefined) recipeOptions.category = category;
      if (skill !== undefined) recipeOptions.skill = skill;
      if (minSkillLevel !== undefined)
        recipeOptions.minSkillLevel = minSkillLevel;
      if (maxSkillLevel !== undefined)
        recipeOptions.maxSkillLevel = maxSkillLevel;
      if (ingredient !== undefined) recipeOptions.ingredient = ingredient;
      if (tool !== undefined) recipeOptions.tool = tool;
      if (result !== undefined) recipeOptions.result = result;
      if (limit !== undefined) recipeOptions.limit = limit;
      const recipes = await ctx.dbManager.searchRecipes(recipeOptions);

      return {
        content: [
          {
            type: "text",
            text: formatRecipeSearchResults(recipes),
          },
        ],
        structuredContent: {
          count: recipes.length,
          recipes: structuredClone(recipes),
        },
      };
    },
  },
];
