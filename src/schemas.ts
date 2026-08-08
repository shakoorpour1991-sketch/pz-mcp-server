import { z } from "zod";
import { BLOCK_TYPES, SEARCH_TYPES } from "./utils/blockTypes.js";

// Schema definitions for tool inputs
export const SearchVanillaSchema = z.object({
  query: z.string().max(1000).describe("Search query for vanilla game content"),
  type: z.enum(SEARCH_TYPES).optional().describe("Filter by content type"),
  category: z.string().max(256).optional().describe("Filter by item category"),
  tags: z
    .string()
    .max(256)
    .optional()
    .describe("Filter by tags (comma-separated, matches if ANY tag present)"),
  metalValueMin: z.number().optional().describe("Minimum metal value"),
  metalValueMax: z.number().optional().describe("Maximum metal value"),
  attachmentType: z
    .string()
    .max(256)
    .optional()
    .describe("Filter by attachment type"),
  minWeight: z.number().min(0).optional().describe("Minimum Weight (kg)"),
  maxWeight: z.number().min(0).optional().describe("Maximum Weight (kg)"),
  minCalories: z
    .number()
    .min(0)
    .optional()
    .describe("Minimum Calories (food items)"),
  maxCalories: z
    .number()
    .min(0)
    .optional()
    .describe("Maximum Calories (food items)"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(20)
    .describe("Maximum number of results"),
});

export const SearchRecipesSchema = z.object({
  query: z
    .string()
    .max(1000)
    .optional()
    .describe("Free-text search on recipe name or id"),
  category: z
    .string()
    .max(256)
    .optional()
    .describe("Filter by recipe category (e.g. Carpentry, Cooking, Repair)"),
  skill: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Filter by required skill (e.g. Woodwork, Blacksmith, Carpentry)",
    ),
  minSkillLevel: z
    .number()
    .min(0)
    .optional()
    .describe("Minimum required skill level"),
  maxSkillLevel: z
    .number()
    .min(0)
    .optional()
    .describe("Maximum required skill level"),
  ingredient: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Recipes using this item or tag as an ingredient (accepts Base.Nails, Nails, or base:nails)",
    ),
  tool: z
    .string()
    .max(256)
    .optional()
    .describe("Recipes requiring this item or tag as a tool (mode:keep input)"),
  result: z
    .string()
    .max(256)
    .optional()
    .describe("Recipes producing this item"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(20)
    .describe("Maximum number of results"),
});

export const GenerateScriptSchema = z.object({
  type: z.enum(BLOCK_TYPES).describe("Type of script to generate"),
  name: z.string().max(256).describe("Name of the item/recipe/etc to generate"),
  properties: z
    .record(z.any())
    .refine((v) => Object.keys(v).length <= 200, {
      message: "too many properties",
    })
    .describe("Properties and specifications for the generated content"),
  module: z.string().max(256).default("Base").describe("Module name to use"),
  balance: z
    .enum(["vanilla", "powerful", "weak", "custom"])
    .optional()
    .describe(
      "Balance mode: vanilla (default), powerful, weak, or custom (no adjustments)",
    ),
  includeComments: z
    .boolean()
    .optional()
    .describe("Include explanatory comments in the generated script"),
});

export const ValidateScriptSchema = z.object({
  content: z.string().max(1_000_000).describe("Script content to validate"),
  type: z.enum(BLOCK_TYPES).optional().describe("Expected script type"),
  strict: z.boolean().default(false).describe("Enable strict validation mode"),
});

export const CheckReferencesSchema = z.object({
  references: z
    .array(z.string().max(512))
    .max(5000)
    .describe("List of references to validate"),
  type: z
    .enum(["item", "sound", "sprite", "all"])
    .default("all")
    .describe("Type of references to check"),
});

export const AnalyzeModSchema = z.object({
  modPath: z.string().max(4096).describe("Path to mod directory"),
  checkBalance: z.boolean().default(true).describe("Perform balance analysis"),
  checkCompatibility: z
    .boolean()
    .default(true)
    .describe("Check compatibility with vanilla"),
});

export const ParseGameFilesSchema = z.object({
  gamePath: z
    .string()
    .optional()
    .describe(
      "Path to Project Zomboid installation (auto-detected if not provided)",
    ),
  forceReparse: z
    .boolean()
    .default(false)
    .describe("Force re-parsing even if data exists"),
});

export const IndexKnowledgeBaseSchema = z.object({
  path: z
    .string()
    .optional()
    .describe(
      "Path to the knowledge base docs directory (defaults to PZ_MCP_KB_PATH env or D:\\PZ-Modding\\Documentation)",
    ),
  overwrite: z
    .boolean()
    .default(true)
    .describe(
      "Full re-index. Set to false for an mtime-based incremental sync (unchanged docs skipped, changed docs updated, deleted docs pruned)",
    ),
});

export const AnalyzeRecipeChainSchema = z.object({
  seed: z
    .string()
    .max(1000)
    .describe("Item or recipe id to start the chain from"),
  direction: z
    .enum(["upstream", "downstream", "both"])
    .default("both")
    .describe(
      "Which edges to follow: what makes it (upstream), what it makes / consumes it (downstream), or both",
    ),
  maxDepth: z
    .number()
    .min(1)
    .max(10)
    .default(3)
    .describe("Maximum chain depth to traverse"),
});

export const DetectRecipeConflictsSchema = z.object({
  limit: z
    .number()
    .min(1)
    .max(200)
    .default(50)
    .describe("Maximum number of conflicts to report"),
});

export const ExportModScriptSchema = z.object({
  modPath: z
    .string()
    .max(4096)
    .describe("Path to the mod directory to write the script into"),
  type: z.enum(BLOCK_TYPES).describe("Type of script to generate"),
  name: z
    .string()
    .max(256)
    .describe(
      "Name of the item/recipe/etc (also used for the output filename)",
    ),
  properties: z
    .record(z.any())
    .refine((v) => Object.keys(v).length <= 200, {
      message: "too many properties",
    })
    .default({})
    .describe("Properties and specifications for the generated content"),
  module: z.string().max(256).default("Base").describe("Module name to use"),
  balance: z
    .enum(["vanilla", "powerful", "weak", "custom"])
    .optional()
    .describe(
      "Balance mode: vanilla (default), powerful, weak, or custom (no adjustments)",
    ),
  includeComments: z
    .boolean()
    .optional()
    .describe("Include explanatory comments in the generated script"),
  dryRun: z
    .boolean()
    .default(true)
    .describe(
      "Preview the target file only — no disk changes. Set to false to actually write",
    ),
});

export const SearchKnowledgeBaseSchema = z.object({
  query: z
    .string()
    .max(1000)
    .describe("Search query for knowledge base content"),
  topic: z
    .string()
    .max(256)
    .optional()
    .describe("Filter by exact topic (filename without .md)"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(10)
    .describe("Maximum number of results"),
});

export const WorkshopSearchSchema = z.object({
  query: z
    .string()
    .min(1)
    .max(120)
    .describe("Workshop search text (browse the Project Zomboid workshop)"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(20)
    .describe("Maximum number of results (default 20)"),
});

export const WorkshopGetDetailsSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(300)
    .describe(
      "Workshop item id or URL, e.g. 2696145877 or https://steamcommunity.com/sharedfiles/filedetails/?id=2696145877",
    ),
  forceRefresh: z
    .boolean()
    .default(false)
    .describe("Bypass the 24h metadata cache and re-fetch from Steam"),
});

export const WorkshopDownloadSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(300)
    .describe(
      "Workshop item id or URL to download via SteamCMD (verified to be a Project Zomboid item first)",
    ),
});

export const WorkshopAnalyzeSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(300)
    .describe(
      "Workshop item id or URL — downloads it (SteamCMD), parses its scripts into the DB, and runs the full analysis suite, returning a Mod Report",
    ),
});

// 'path' param removed — the KB path is fixed at startup (PZ_MCP_KB_PATH env or default)
export const ListKnowledgeTopicsSchema = z.object({});

/**
 * Tool name → input schema. Imported by admin/bridge.mjs so the dashboard can
 * (1) normalize every tools/list reply into proper JSON Schema from the live
 * schemas, and (2) pre-validate tools/call arguments before relaying them.
 */
export const TOOL_SCHEMAS = {
  search_vanilla: SearchVanillaSchema,
  search_recipes: SearchRecipesSchema,
  generate_script: GenerateScriptSchema,
  validate_script: ValidateScriptSchema,
  check_references: CheckReferencesSchema,
  analyze_mod: AnalyzeModSchema,
  parse_game_files: ParseGameFilesSchema,
  index_knowledge_base: IndexKnowledgeBaseSchema,
  analyze_recipe_chain: AnalyzeRecipeChainSchema,
  detect_recipe_conflicts: DetectRecipeConflictsSchema,
  export_mod_script: ExportModScriptSchema,
  search_knowledge_base: SearchKnowledgeBaseSchema,
  workshop_search: WorkshopSearchSchema,
  workshop_get_details: WorkshopGetDetailsSchema,
  workshop_download: WorkshopDownloadSchema,
  workshop_analyze: WorkshopAnalyzeSchema,
  list_knowledge_topics: ListKnowledgeTopicsSchema,
};
