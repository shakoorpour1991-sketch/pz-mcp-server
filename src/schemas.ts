import { z } from "zod";
import { BLOCK_TYPES, SEARCH_TYPES } from "./utils/blockTypes.js";
import { KB_DOC_TYPES } from "./knowledge/kbChunker.js";

// Schema definitions for tool inputs
export const SearchVanillaSchema = z.object({
  query: z
    .string()
    .max(1000)
    .optional()
    .describe(
      "FTS search query for vanilla game content — prefix-matched for autocomplete. Optional when id or other filters are provided.",
    ),
  id: z
    .string()
    .max(1000)
    .optional()
    .describe(
      "Exact canonical id lookup (e.g. Base.Hammer). Resolves typos (Hamer → Base.Hammer) with confidence. Much faster than text search for known identifiers.",
    ),
  type: z.enum(SEARCH_TYPES).optional().describe("Filter by content type"),
  category: z.string().max(256).optional().describe("Filter by item category"),
  module: z
    .string()
    .max(256)
    .optional()
    .describe("Filter by exact module name (e.g. Base)"),
  scriptPath: z
    .string()
    .max(512)
    .optional()
    .describe(
      "Filter by script file path (substring match, e.g. recipes/cooking)",
    ),
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
  minWeight: z.number().min(0).optional().describe("Minimum weight"),
  maxWeight: z.number().min(0).optional().describe("Maximum weight"),
  minCalories: z.number().min(0).optional().describe("Minimum calories"),
  maxCalories: z.number().min(0).optional().describe("Maximum calories"),
  properties: z
    .array(
      z.object({
        key: z
          .string()
          .max(128)
          .describe("Property name (e.g. MaxDamage, Weight, ItemType)"),
        eq: z
          .union([z.string(), z.number(), z.boolean()])
          .optional()
          .describe("Exact property value (e.g. base:weapon for ItemType)"),
        min: z.number().optional().describe("Numeric lower bound (inclusive)"),
        max: z.number().optional().describe("Numeric upper bound (inclusive)"),
      }),
    )
    .max(20)
    .optional()
    .describe(
      "Structured property constraints — ANDed together. E.g. [{key: MaxDamage, min: 5}, {key: Weight, max: 2}] finds melee weapons with MaxDamage > 5 and Weight < 2",
    ),
  usedInRecipe: z
    .boolean()
    .optional()
    .describe(
      "If true, only items that appear as recipe ingredients (also considers tag inputs and bracket alternatives)",
    ),
  producedByRecipe: z
    .boolean()
    .optional()
    .describe(
      "If true, only items that are produced by recipes as results/outputs",
    ),
  sprite: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Filter by sprite reference (items that reference this sprite name, e.g. WeaponSprite, Icon)",
    ),
  sound: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Filter by sound reference (items that reference this sound name, e.g. BreakSound, HitSound)",
    ),
  includeRelations: z
    .boolean()
    .default(false)
    .optional()
    .describe(
      "If true, the first result carries a full relationship graph: recipes using it, recipes producing it, sounds/sprites/models it references, sibling scripts, and knowledge base documentation links",
    ),
  format: z
    .enum(["text", "ai"])
    .default("text")
    .optional()
    .describe(
      "'text' (default): human-readable list. 'ai': compact deterministic context blocks with explicit instructions to use exact identifiers, designed for feeding into another AI to reduce hallucination",
    ),
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

export const ValidateScriptSchema = z
  .object({
    content: z
      .string()
      .max(1_000_000)
      .optional()
      .describe(
        "Script content to validate (required unless filePath is provided)",
      ),
    filePath: z
      .string()
      .max(4096)
      .optional()
      .describe(
        "Absolute path to a .txt script file to validate — read from disk (content is ignored when filePath is provided); every diagnostic is then scoped to this file",
      ),
    type: z.enum(BLOCK_TYPES).optional().describe("Expected script type"),
    strict: z
      .boolean()
      .default(false)
      .describe("Enable strict validation mode"),
    zedScripts: z
      .boolean()
      .default(true)
      .optional()
      .describe(
        "Run the ZedScripts Build 42 knowledge-layer diagnostics (unknown parameters, wrong values/types, deprecations, required parameters, missing/duplicate commas, block-ID rules, craftRecipe input/output shapes). Default true. Set false to validate a legacy B41-only codebase without the Build 42 knowledge layer.",
      ),
  })
  .refine((v) => v.content !== undefined || v.filePath !== undefined, {
    message: "Either content or filePath is required",
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

export const IndexJavadocsSchema = z.object({
  path: z
    .string()
    .min(1)
    .max(4096)
    .optional()
    .describe(
      "Path to JavaDocs to index. Two modes:\n" +
        "1. A directory of .md files (the distilled markdown format, one file per API type) — defaults to the repo-shipped knowledge-base/javadocs/\n" +
        "2. A raw generated JavaDoc HTML tree (package folders + *.html class pages) — the pipeline re-ingests from HTML, generates markdown, then indexes\n" +
        "\nWhen omitted, the repo-shipped distilled JavaDocs (knowledge-base/javadocs/, ~4,700 types from the Unofficial PZ JavaDocs 42.20.0) are indexed directly, so index_javadocs works on any machine with zero arguments.\n" +
        "Override with PZ_MCP_JAVADOCS_PATH env var (for the shipped markdown dir) or pass an explicit path here.",
    ),
  source: z
    .string()
    .min(1)
    .max(4096)
    .optional()
    .describe(
      "Alias for path — accepts a raw generated JavaDoc HTML tree for re-ingestion. When neither path nor source is provided, the repo-shipped distilled JavaDocs are indexed directly.",
    ),
  output: z
    .string()
    .max(4096)
    .optional()
    .describe(
      "Directory for the generated per-type markdown docs (default: PZ_MCP_JAVADOCS_KB_DIR env or <data>/javadocs-kb); only used when re-ingesting from HTML (source or path points to a raw HTML tree). The output is then indexed into the knowledge base.",
    ),
  overwrite: z
    .boolean()
    .default(true)
    .describe(
      "Full re-index of the docs into the KB. Set to false for an mtime-based incremental sync (unchanged docs skipped)",
    ),
});

export const SearchKnowledgeBaseSchema = z.object({
  query: z
    .string()
    .max(1000)
    .describe(
      'Search query for knowledge base content. Stemmed + prefix-matched ("reload" finds reloads/reloading; "getPlay" finds getPlayer/getPlayers). Natural-language queries rank prose docs (wiki/research/api-docs) first; javadocs are ranked first for identifier-like queries (camelCase, dotted names).',
    ),
  topic: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Filter by exact doc topic — the path-prefixed topic id (e.g. wiki/Java, javadocs/zombie.iso.IsoObject, api-docs/scripts/items).",
    ),
  type: z
    .enum(KB_DOC_TYPES)
    .optional()
    .describe(
      "Filter by a single doc type: wiki, api-docs, javadocs, mods-analysis, or research. Alias for a one-element types array.",
    ),
  types: z
    .array(z.enum(KB_DOC_TYPES))
    .max(KB_DOC_TYPES.length)
    .optional()
    .describe(
      'Filter by one or more doc types (multi-select). E.g. types: ["research", "wiki"] searches prose docs only. Overrides type when both are set. Disables the default javadocs/prose reordering — results ranked purely by bm25.',
    ),
  package: z
    .string()
    .max(256)
    .optional()
    .describe(
      "Filter by Java package (javadocs only, e.g. zombie.iso or zombie.characters).",
    ),
  includeContent: z
    .boolean()
    .default(false)
    .optional()
    .describe(
      "Return each result's full chunk body inline (search + read in one call), capped by maxContent. Avoids N+1 round trips per interesting result.",
    ),
  maxContent: z
    .number()
    .min(1)
    .max(20000)
    .default(8000)
    .optional()
    .describe(
      "Total character budget for inline chunk bodies across all results (default 8000, max 20000). Results are filled in rank order until the budget is spent.",
    ),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(10)
    .describe("Maximum number of results"),
});

export const GetKnowledgeSectionSchema = z.object({
  topic: z
    .string()
    .min(1)
    .max(256)
    .describe(
      "Doc topic (path-prefixed id, e.g. wiki/Java, javadocs/zombie.iso.IsoGameCharacter) or a full chunk id (wiki/Java#section-one) to read that section directly.",
    ),
  section: z
    .string()
    .max(512)
    .optional()
    .describe(
      "Section to read: a heading, member name, or chunk slug (e.g. 'Section One', 'getPlayer', 'public static void Load()'). Matched case-insensitively; omitted when topic already carries a #section.",
    ),
  sections: z
    .array(z.string().min(1).max(512))
    .max(50)
    .optional()
    .describe(
      "Batch mode: read several sections/members in one call (e.g. a handful of javadocs methods from one class). Each entry is matched like `section`; a miss yields null in that result entry instead of an error. The reply lists the doc's available sections. Ignored when topic already carries a #section.",
    ),
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
    .regex(
      /^[A-Za-z0-9_]+$/,
      "Module names are alphanumeric (letters, digits, underscores)",
    )
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
    .describe(
      "New in-game item name (written into the ItemName translation file)",
    ),
  icon: z
    .string()
    .max(128)
    .optional()
    .describe(
      "New icon (vanilla texture to reuse, or a custom name — a generated placeholder texture is then shipped)",
    ),
  module: z
    .string()
    .max(64)
    .regex(
      /^[A-Za-z0-9_]+$/,
      "Module names are alphanumeric (letters, digits, underscores)",
    )
    .optional()
    .describe("New script module"),
  stats: z
    .record(z.union([z.number(), z.string(), z.boolean(), z.null()]))
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
  index_javadocs: IndexJavadocsSchema,
  analyze_recipe_chain: AnalyzeRecipeChainSchema,
  detect_recipe_conflicts: DetectRecipeConflictsSchema,
  export_mod_script: ExportModScriptSchema,
  search_knowledge_base: SearchKnowledgeBaseSchema,
  get_knowledge_section: GetKnowledgeSectionSchema,
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
