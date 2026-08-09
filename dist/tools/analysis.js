import { AnalyzeModSchema, AnalyzeRecipeChainSchema, DetectRecipeConflictsSchema, } from "../schemas.js";
import { formatModAnalysis, formatRecipeChain, formatRecipeConflicts, } from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
export const analysisTools = [
    {
        name: "analyze_mod",
        description: "Comprehensive analysis of mod directory including balance, compatibility, and structure validation",
        inputSchema: AnalyzeModSchema,
        handler: async (args, ctx) => {
            const { modPath, checkBalance, checkCompatibility } = args;
            let safePath;
            try {
                safePath = ctx.pathManager.validateInputPath(modPath, "dir");
            }
            catch (err) {
                throw new McpError(ErrorCode.InvalidParams, `Invalid modPath: ${err.message}`);
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
        description: "Walk the recipe dependency graph from an item or recipe: what it is made from, what it makes, and what consumes it",
        inputSchema: AnalyzeRecipeChainSchema,
        handler: async (args, ctx) => {
            const { seed, direction, maxDepth, expandNode, target } = args;
            // Build options conditionally (exactOptionalPropertyTypes: absent,
            // not undefined) — expandNode/target are optional modes.
            const chainOptions = {};
            if (expandNode !== undefined)
                chainOptions.expandNode = expandNode;
            if (target !== undefined)
                chainOptions.target = target;
            const chain = await ctx.recipeAnalyzer.analyzeChain(seed, direction, maxDepth, chainOptions);
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
        description: "Find items produced by more than one recipe (duplicate crafting paths that can break recipe resolution)",
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
//# sourceMappingURL=analysis.js.map