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

/** detect_pz_paths — no arguments; reports everything the smart detection found. */
export const DetectPzPathsSchema = z.object({});

export const InstallModSchema = z.object({
  source: z
    .string()
    .min(1)
    .max(4096)
    .describe(
      "Path to a .zip archive or a mod folder to install (absolute path)",
    ),
  targetDir: z
    .string()
    .min(1)
    .max(4096)
    .optional()
    .describe(
      "Destination mods directory (default: auto-detected <home>/Zomboid/mods, overridable with PZ_MODS_DIR)",
    ),
  overwrite: z
    .boolean()
    .default(false)
    .describe(
      "Replace an already-installed mod with the same id or folder name (default false — conflicts are skipped and reported)",
    ),
  dryRun: z
    .boolean()
    .default(false)
    .describe(
      "Preview which mods would be installed and where — no disk changes",
    ),
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
      "Path to the knowledge base docs directory (defaults to PZ_MCP_KB_PATH env or the repository's knowledge-base/ folder)",
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
  expandNode: z
    .string()
    .max(1000)
    .optional()
    .describe(
      "Grow the graph in place: return only the one-hop neighborhood around this node id (already present in a previous result) so clients merge a delta instead of re-walking from the seed",
    ),
  target: z
    .string()
    .max(1000)
    .optional()
    .describe(
      "Find the shortest crafting path from seed to this item/recipe id — the reply carries the ordered node ids in `path`",
    ),
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
  dryRun: z
    .boolean()
    .default(false)
    .describe(
      "Preview the download — resolve the item, verify it is a Project Zomboid item, and report the target path — without invoking SteamCMD or touching disk",
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

// ---------------------------------------------------------------------------
// Mod Generator (beginner-friendly mod creation)
// ---------------------------------------------------------------------------

/** Shared name regex: a folder name directly under the workspace root. */
const ModgenProjectName = z
  .string()
  .min(1)
  .max(120)
  .regex(/^[A-Za-z0-9_.-]+$/);

export const ModgenTemplatesSchema = z.object({});

export const ModgenGenerateSchema = z.object({
  template: z
    .enum(["simple_item", "melee_weapon", "food", "tool", "clothing"])
    .describe("Which beginner template to build on"),
  name: ModgenProjectName.describe(
    "Project folder name (single path segment, no slashes)",
  ),
  modId: z
    .string()
    .min(1)
    .max(256)
    .regex(/^[A-Za-z0-9_-]+$/)
    .describe("Unique mod id used in mod.info (alphanumeric + _ or -)"),
  modName: z
    .string()
    .min(1)
    .max(256)
    .describe("Human-readable mod name shown in the game's mod list"),
  author: z.string().max(256).optional().describe("Mod author"),
  description: z.string().max(2000).optional().describe("Mod description"),
  itemName: z
    .string()
    .min(1)
    .max(64)
    .regex(/^[A-Za-z0-9_]+$/)
    .describe(
      "Internal item id (the script block name — letters, digits, underscores)",
    ),
  displayName: z
    .string()
    .min(1)
    .max(256)
    .optional()
    .describe(
      "In-game item name shown to players (defaults to itemName) — written into the Build 42 ItemName translation file",
    ),
  icon: z
    .string()
    .max(128)
    .optional()
    .describe(
      "Item icon: a vanilla texture name to reuse (defaults per template), or any custom name — a generated placeholder texture is then shipped in 42/media/textures/",
    ),
  module: z
    .string()
    .max(64)
    .regex(/^[A-Za-z0-9_]+$/, "Module names are alphanumeric (letters, digits, underscores)")
    .default("Base")
    .describe("Script module (default Base — item id is then just itemName)"),
  stats: z
    .record(z.union([z.number(), z.string(), z.boolean()]))
    .optional()
    .describe(
      "Stat overrides keyed by property name — these are pinned and kept as-is",
    ),
  autoStats: z
    .boolean()
    .default(true)
    .describe(
      "Auto-balance unpinned stats from real vanilla game data (default true)",
    ),
  randomize: z
    .boolean()
    .default(false)
    .describe(
      "Roll auto stats randomly inside the vanilla-derived range instead of the median",
    ),
  dryRun: z
    .boolean()
    .default(false)
    .describe("Preview the blueprint and script — no project is created"),
});

export const ModgenListSchema = z.object({});

export const ModgenBlueprintSchema = z.object({
  project: ModgenProjectName.describe(
    "Project name to reopen (must contain a modgen.blueprint.json)",
  ),
});

export const ModgenRegenerateSchema = z.object({
  project: ModgenProjectName.describe("Project name to regenerate"),
  modName: z.string().min(1).max(256).optional().describe("New mod name"),
  author: z.string().max(256).optional().describe("New author"),
  description: z
    .string()
    .max(2000)
    .optional()
    .describe("New description (empty string clears it)"),
  itemName: z
    .string()
    .min(1)
    .max(64)
    .regex(/^[A-Za-z0-9_]+$/)
    .optional()
    .describe("New item id"),
  displayName: z
    .string()
    .min(1)
    .max(256)
    .optional()
    .describe("New in-game item name (written into the ItemName translation file)"),
  icon: z
    .string()
    .max(128)
    .optional()
    .describe("New icon (vanilla texture to reuse, or a custom name — a generated placeholder texture is then shipped)"),
  module: z
    .string()
    .max(64)
    .regex(/^[A-Za-z0-9_]+$/, "Module names are alphanumeric (letters, digits, underscores)")
    .optional()
    .describe("New script module"),
  stats: z
    .record(
      z.union([z.number(), z.string(), z.boolean(), z.null()]),
    )
    .optional()
    .describe(
      "Stat patch keyed by property name; a null value resets that stat back to auto",
    ),
  randomize: z
    .array(z.string().max(64))
    .max(100)
    .optional()
    .describe("Stat keys to re-roll inside the vanilla-derived range"),
});

// ---------------------------------------------------------------------------
// Mod Workspace / Project Manager
// ---------------------------------------------------------------------------

/** Workspace-relative paths are strictly confined to the configured roots. */
export const WorkspaceProjectSchema = z.object({
  project: z
    .string()
    .min(1)
    .max(120)
    .regex(/^[A-Za-z0-9_.-]+$/)
    .describe(
      "Project name — a folder directly under the workspace root (no slashes, no '..')",
    ),
});

export const WorkspaceListSchema = z.object({});

export const WorkspaceCreateSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(120)
    .regex(/^[A-Za-z0-9_.-]+$/)
    .describe("Project folder name (single path segment, no slashes)"),
  modId: z
    .string()
    .min(1)
    .max(256)
    .regex(/^[A-Za-z0-9_-]+$/)
    .describe("Unique mod id used in mod.info (alphanumeric + _ or -)"),
  modName: z
    .string()
    .max(256)
    .optional()
    .describe("Human-readable display name (defaults to modId)"),
  author: z.string().max(256).optional().describe("Mod author"),
  description: z.string().max(2000).optional().describe("Mod description"),
  version: z
    .string()
    .max(64)
    .optional()
    .describe("Mod version written to mod.info (default 1.0)"),
  buildVersion: z
    .string()
    .max(64)
    .optional()
    .describe("Numeric Build-42 version folder, e.g. 42 or 42.20 (default 42)"),
  template: z
    .enum(["minimal", "full"])
    .default("full")
    .describe(
      "minimal = mod.info + poster + scripts dir; full adds lua/sound/textures/maps and a sample server script",
    ),
  requires: z
    .array(z.string().max(256))
    .max(50)
    .optional()
    .describe("Other mod ids this mod requires (mod.info require=)"),
  sampleItem: z
    .boolean()
    .default(false)
    .describe(
      "Also generate a starter item script via generate_script and place it in media/scripts",
    ),
  includePoster: z
    .boolean()
    .default(true)
    .describe("Write a poster.png placeholder (default true)"),
  overwrite: z
    .boolean()
    .default(false)
    .describe(
      "If the project folder already exists, only add missing scaffold files — existing files are never modified",
    ),
  dryRun: z
    .boolean()
    .default(false)
    .describe("Preview the scaffold — no disk changes"),
});

export const WorkspaceInspectSchema = WorkspaceProjectSchema.extend({
  checkDependencies: z
    .boolean()
    .default(true)
    .describe(
      "Resolve mod.info require= ids against known mods and report missing ones (default true)",
    ),
  includeFileList: z
    .boolean()
    .default(false)
    .describe("Include the full recursive file list in the result"),
});

/**
 * Tool name → input schema. Imported by admin/bridge.mjs so the dashboard can
 * (1) normalize every tools/list reply into proper JSON Schema from the live
 * schemas, and (2) pre-validate tools/call arguments before relaying them.
 */
export const TOOL_SCHEMAS = {
  detect_pz_paths: DetectPzPathsSchema,
  install_mod: InstallModSchema,
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
  workspace_list: WorkspaceListSchema,
  workspace_create: WorkspaceCreateSchema,
  workspace_inspect: WorkspaceInspectSchema,
  modgen_templates: ModgenTemplatesSchema,
  modgen_generate: ModgenGenerateSchema,
  modgen_list: ModgenListSchema,
  modgen_blueprint: ModgenBlueprintSchema,
  modgen_regenerate: ModgenRegenerateSchema,
};
