/**
 * Discovery tools: search vanilla content and structured recipes.
 */
import type { z } from "zod";
import { SearchVanillaSchema, SearchRecipesSchema } from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatRecipeSearchResults,
  formatSearchResults,
} from "../utils/formatters.js";

export const discoveryTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "search_vanilla",
    description:
      "Search vanilla Project Zomboid content (items, recipes, sounds, vehicles) with intelligent matching and filters (category, weight, calories, tags, type)",
    inputSchema: SearchVanillaSchema,
    handler: async (args, ctx) => {
      const {
        query,
        type,
        category,
        tags,
        metalValueMin,
        metalValueMax,
        attachmentType,
        minWeight,
        maxWeight,
        minCalories,
        maxCalories,
        limit,
      } = args;
      const searchOptions: {
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
      } = {};
      if (type !== undefined && type !== "all") searchOptions.type = type;
      if (category !== undefined) searchOptions.category = category;
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
      if (limit !== undefined) searchOptions.limit = limit;
      const results = await ctx.dbManager.searchContent(query, searchOptions);

      return {
        content: [
          {
            type: "text",
            text: `Found ${results.length} results for "${query}":\n\n${formatSearchResults(results)}`,
          },
        ],
        structuredContent: {
          query,
          count: results.length,
          results: results.map((r) => ({
            id: r.id,
            name: r.name,
            displayName: r.displayName,
            type: r.type,
            module: r.module,
            category: r.category,
            weight: r.weight,
            calories: r.calories,
            properties: r.properties,
          })),
        },
      };
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
