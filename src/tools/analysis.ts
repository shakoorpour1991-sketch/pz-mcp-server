/**
 * Analysis tools: mod analysis, recipe-chain walking, and conflict detection.
 */
import type { z } from "zod";
import {
  AnalyzeModSchema,
  AnalyzeRecipeChainSchema,
  DetectRecipeConflictsSchema,
} from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatModAnalysis,
  formatRecipeChain,
  formatRecipeConflicts,
} from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";

export const analysisTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "analyze_mod",
    description:
      "Full analysis of a mod directory: structure validation (mod.info present, scripts/lua/assets counted), balance analysis of its items against vanilla ranges, and compatibility checks (missing dependencies, conflicting items). Pass the mod's absolute path; every issue carries file + severity + a fix suggestion. Example: {modPath: C:/mods/MyMod, checkBalance: true}. For workspace-rooted projects, workspace_inspect reuses the same engine with a lighter report.",
    inputSchema: AnalyzeModSchema,
    handler: async (args, ctx) => {
      const { modPath, checkBalance, checkCompatibility } = args;
      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }
      const analysis = await ctx.analyzer.analyzeMod(safePath, {
        checkBalance,
        checkCompatibility,
      });

      return {
        content: [
          {
            type: "text",
            text: formatModAnalysis(analysis),
          },
        ],
        structuredContent: structuredClone(analysis),
      };
    },
  },
  {
    name: "analyze_recipe_chain",
    description:
      "Walk the recipe dependency graph from an item or recipe: what it is made from, what it makes, and what consumes it",
    inputSchema: AnalyzeRecipeChainSchema,
    handler: async (args, ctx) => {
      const { seed, direction, maxDepth, expandNode, target } = args;
      // Build options conditionally (exactOptionalPropertyTypes: absent,
      // not undefined) — expandNode/target are optional modes.
      const chainOptions: { expandNode?: string; target?: string } = {};
      if (expandNode !== undefined) chainOptions.expandNode = expandNode;
      if (target !== undefined) chainOptions.target = target;
      const chain = await ctx.recipeAnalyzer.analyzeChain(
        seed,
        direction,
        maxDepth,
        chainOptions,
      );
      return {
        content: [
          {
            type: "text",
            text: formatRecipeChain(chain),
          },
        ],
        structuredContent: structuredClone(chain),
      };
    },
  },
  {
    name: "detect_recipe_conflicts",
    description:
      "Scan the parsed recipe database for items produced by more than one recipe — duplicate crafting paths that can break recipe resolution. Each conflict lists the competing recipes with their context and a severity rating (high/low); tag multi-path conflicts the game tolerates are marked as low. No arguments required beyond an optional limit. Example: {limit: 50}. Run after parse_game_files to vet a new recipe pack.",
    inputSchema: DetectRecipeConflictsSchema,
    handler: async (args, ctx) => {
      const { limit } = args;
      const conflictResult = await ctx.recipeAnalyzer.detectConflicts(limit);
      return {
        content: [
          {
            type: "text",
            text: formatRecipeConflicts(conflictResult),
          },
        ],
        structuredContent: structuredClone(conflictResult),
      };
    },
  },
];
