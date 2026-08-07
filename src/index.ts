#!/usr/bin/env node

/**
 * Project Zomboid MCP Server
 * A comprehensive MCP server for Project Zomboid mod development
 * Author: MiniMax Agent
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { pathToFileURL, fileURLToPath } from "url";
import { readFileSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { DatabaseManager } from "./database/DatabaseManager.js";
import { ProjectZomboidParser } from "./parsers/ProjectZomboidParser.js";
import { ModAnalyzer } from "./analyzers/ModAnalyzer.js";
import { RecipeAnalyzer } from "./analyzers/RecipeAnalyzer.js";
import {
  ScriptGenerator,
  GenerationOptions,
} from "./generators/ScriptGenerator.js";
import { ValidationEngine } from "./validation/ValidationEngine.js";
import { KnowledgeBaseManager } from "./knowledge/KnowledgeBaseManager.js";
import { PathManager } from "./utils/PathManager.js";
import {
  SteamWorkshopClient,
  parseWorkshopInput,
} from "./workshop/SteamWorkshopClient.js";
import { SteamCmdDownloader } from "./workshop/SteamCmdDownloader.js";
import { knowledgeBasePath } from "./utils/config.js";
import { BLOCK_TYPES, SEARCH_TYPES } from "./utils/blockTypes.js";
import logger from "./utils/logger.js";

// Read the server version from package.json (audit minor: was hardcoded '1.1.0')
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERVER_VERSION =
  JSON.parse(readFileSync(resolve(__dirname, "..", "package.json"), "utf-8"))
    .version || "1.1.0";

const server = new Server(
  {
    name: "pz-mcp-server",
    version: SERVER_VERSION,
  },
  {
    capabilities: {
      tools: {},
      resources: {},
      prompts: {},
    },
  },
);

// Initialize core components
let dbManager: DatabaseManager;
let parser: ProjectZomboidParser;
let analyzer: ModAnalyzer;
let generator: ScriptGenerator;
let validator: ValidationEngine;
let pathManager: PathManager;
let knowledgeBaseManager: KnowledgeBaseManager;
let recipeAnalyzer: RecipeAnalyzer;
let workshopClient: SteamWorkshopClient;
let steamCmdDownloader: SteamCmdDownloader;

async function initializeServer() {
  try {
    // Initialize path manager for PZ installation detection
    pathManager = new PathManager();

    // Initialize database
    dbManager = new DatabaseManager();
    await dbManager.initialize();

    // Initialize parser with database
    parser = new ProjectZomboidParser(dbManager);

    // Initialize other components
    analyzer = new ModAnalyzer(dbManager, parser);
    generator = new ScriptGenerator(dbManager);
    validator = new ValidationEngine(dbManager);
    recipeAnalyzer = new RecipeAnalyzer(dbManager);

    // Initialize knowledge base manager
    knowledgeBaseManager = new KnowledgeBaseManager();
    await knowledgeBaseManager.initialize();

    // Initialize Steam Workshop metadata client (keyless) + SteamCMD downloader
    workshopClient = new SteamWorkshopClient();
    steamCmdDownloader = new SteamCmdDownloader();

    logger.info("🎮 Project Zomboid MCP Server initialized successfully");
  } catch (error) {
    logger.error(
      "❌ Failed to initialize server: %s",
      error instanceof Error ? error.message : String(error),
    );
    process.exit(1);
  }
}

// Schema definitions for tool inputs
const SearchVanillaSchema = z.object({
  query: z.string().describe("Search query for vanilla game content"),
  type: z.enum(SEARCH_TYPES).optional().describe("Filter by content type"),
  category: z.string().optional().describe("Filter by item category"),
  tags: z
    .string()
    .optional()
    .describe("Filter by tags (comma-separated, matches if ANY tag present)"),
  metalValueMin: z.number().optional().describe("Minimum metal value"),
  metalValueMax: z.number().optional().describe("Maximum metal value"),
  attachmentType: z.string().optional().describe("Filter by attachment type"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(20)
    .describe("Maximum number of results"),
});

const GenerateScriptSchema = z.object({
  type: z.enum(BLOCK_TYPES).describe("Type of script to generate"),
  name: z.string().describe("Name of the item/recipe/etc to generate"),
  properties: z
    .record(z.any())
    .describe("Properties and specifications for the generated content"),
  module: z.string().default("Base").describe("Module name to use"),
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

const ValidateScriptSchema = z.object({
  content: z.string().describe("Script content to validate"),
  type: z.enum(BLOCK_TYPES).optional().describe("Expected script type"),
  strict: z.boolean().default(false).describe("Enable strict validation mode"),
});

const CheckReferencesSchema = z.object({
  references: z.array(z.string()).describe("List of references to validate"),
  type: z
    .enum(["item", "sound", "sprite", "all"])
    .default("all")
    .describe("Type of references to check"),
});

const AnalyzeModSchema = z.object({
  modPath: z.string().describe("Path to mod directory"),
  checkBalance: z.boolean().default(true).describe("Perform balance analysis"),
  checkCompatibility: z
    .boolean()
    .default(true)
    .describe("Check compatibility with vanilla"),
});

const ParseGameFilesSchema = z.object({
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

const IndexKnowledgeBaseSchema = z.object({
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

const AnalyzeRecipeChainSchema = z.object({
  seed: z.string().describe("Item or recipe id to start the chain from"),
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

const DetectRecipeConflictsSchema = z.object({
  limit: z
    .number()
    .min(1)
    .max(200)
    .default(50)
    .describe("Maximum number of conflicts to report"),
});

const ExportModScriptSchema = z.object({
  modPath: z
    .string()
    .describe("Path to the mod directory to write the script into"),
  type: z.enum(BLOCK_TYPES).describe("Type of script to generate"),
  name: z
    .string()
    .describe(
      "Name of the item/recipe/etc (also used for the output filename)",
    ),
  properties: z
    .record(z.any())
    .default({})
    .describe("Properties and specifications for the generated content"),
  module: z.string().default("Base").describe("Module name to use"),
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

const SearchKnowledgeBaseSchema = z.object({
  query: z.string().describe("Search query for knowledge base content"),
  topic: z
    .string()
    .optional()
    .describe("Filter by exact topic (filename without .md)"),
  limit: z
    .number()
    .min(1)
    .max(100)
    .default(10)
    .describe("Maximum number of results"),
});

const WorkshopSearchSchema = z.object({
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

const WorkshopGetDetailsSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(300)
    .describe(
      "Workshop item id or URL, e.g. 2696145877 or https://steamcommunity.com/sharedfiles/filedetails/?id=2696145877",
    ),
});

const WorkshopDownloadSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(300)
    .describe(
      "Workshop item id or URL to download via SteamCMD (verified to be a Project Zomboid item first)",
    ),
});

// 'path' param removed — the KB path is fixed at startup (PZ_MCP_KB_PATH env or default)
const ListKnowledgeTopicsSchema = z.object({});

// Tool definitions
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_vanilla",
        description:
          "Search vanilla Project Zomboid content (items, recipes, sounds, vehicles) with intelligent matching",
        inputSchema: SearchVanillaSchema,
      },
      {
        name: "generate_script",
        description:
          "Generate balanced Project Zomboid scripts using templates and game data patterns",
        inputSchema: GenerateScriptSchema,
      },
      {
        name: "validate_script",
        description:
          "Validate Project Zomboid script syntax and references with detailed error reporting",
        inputSchema: ValidateScriptSchema,
      },
      {
        name: "check_references",
        description:
          "Validate item, sound, and sprite references against game database",
        inputSchema: CheckReferencesSchema,
      },
      {
        name: "analyze_mod",
        description:
          "Comprehensive analysis of mod directory including balance, compatibility, and structure validation",
        inputSchema: AnalyzeModSchema,
      },
      {
        name: "parse_game_files",
        description:
          "Parse and index Project Zomboid game files to populate the database",
        inputSchema: ParseGameFilesSchema,
      },
      {
        name: "index_knowledge_base",
        description:
          "Index markdown knowledge base docs (title, source, content) into a searchable FTS database",
        inputSchema: IndexKnowledgeBaseSchema,
      },
      {
        name: "search_knowledge_base",
        description:
          "Search knowledge base docs with relevance ranking and topic filter",
        inputSchema: SearchKnowledgeBaseSchema,
      },
      {
        name: "list_knowledge_topics",
        description: "List all indexed knowledge base topics with stats",
        inputSchema: ListKnowledgeTopicsSchema,
      },
      {
        name: "analyze_recipe_chain",
        description:
          "Walk the recipe dependency graph from an item or recipe: what it is made from, what it makes, and what consumes it",
        inputSchema: AnalyzeRecipeChainSchema,
      },
      {
        name: "detect_recipe_conflicts",
        description:
          "Find items produced by more than one recipe (duplicate crafting paths that can break recipe resolution)",
        inputSchema: DetectRecipeConflictsSchema,
      },
      {
        name: "export_mod_script",
        description:
          "Generate a script and (optionally) write it into a mod's media/scripts folder (overwrites an existing file of the same name). Dry-run by default — no disk changes unless dryRun=false",
        inputSchema: ExportModScriptSchema,
      },
      {
        name: "workshop_search",
        description:
          "Browse the Project Zomboid Steam Workshop (AppID 108600) by text. Best-effort: uses the public community browse page (keyless). Paste a workshop URL/id with workshop_get_details for guaranteed resolution",
        inputSchema: WorkshopSearchSchema,
      },
      {
        name: "workshop_get_details",
        description:
          "Resolve full metadata for a Project Zomboid workshop item from its id or steamcommunity URL (Steam Web API, keyless, 24h cache)",
        inputSchema: WorkshopGetDetailsSchema,
      },
      {
        name: "workshop_download",
        description:
          "Download a Project Zomboid workshop item via SteamCMD into the workshop workspace dir (PZ_WORKSHOP_DIR or <Steam>/steamapps/workshop/content/108600). Verifies the item belongs to Project Zomboid first. Requires steamcmd (STEAMCMD_PATH or common locations)",
        inputSchema: WorkshopDownloadSchema,
      },
    ],
  };
});

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const topics = await knowledgeBaseManager.listTopics();
  return {
    resources: topics.map((t) => ({
      uri: `knowledge://${encodeURIComponent(t.topic)}`,
      name: t.topic,
      description: `${t.title} (${t.lines} lines, ${t.words} words)`,
      mimeType: "text/markdown",
      size: t.chars,
    })),
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri as string;
  const match = uri.match(/^knowledge:\/\/([^/?#]+)(?:\/.*)?$/);
  if (!match) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Unknown resource URI: ${uri}`,
    );
  }
  const topic = decodeURIComponent(match[1]);
  const doc = await knowledgeBaseManager.getTopic(topic);
  if (!doc) {
    throw new McpError(ErrorCode.InvalidRequest, `Topic not found: ${topic}`);
  }
  return {
    contents: [
      {
        uri: `knowledge://${encodeURIComponent(topic)}`,
        mimeType: "text/markdown",
        text: doc.content,
      },
    ],
  };
});

server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [
      {
        name: "create-item",
        description:
          "Guides you through generating a Project Zomboid item script using generate_script",
        arguments: [
          {
            name: "itemName",
            description:
              "Name of the item to generate (e.g. WoodenBat, IronAxe)",
            required: true,
          },
          {
            name: "category",
            description:
              "Item category: Weapon, Clothing, Food, Tool, Literature, etc.",
            required: false,
          },
        ],
      },
      {
        name: "analyze-mod",
        description:
          "Guides you through analyzing a Project Zomboid mod directory using analyze_mod",
        arguments: [
          {
            name: "modPath",
            description: "Absolute path to the mod directory",
            required: true,
          },
        ],
      },
      {
        name: "search-game",
        description:
          "Guides you through searching vanilla Project Zomboid content using search_vanilla",
        arguments: [
          {
            name: "query",
            description: "Search query string",
            required: true,
          },
          {
            name: "type",
            description:
              "Content type filter: item, recipe, sound, vehicle, or all",
            required: false,
          },
        ],
      },
      {
        name: "validate-script",
        description:
          "Guides you through validating a Project Zomboid script using validate_script",
        arguments: [
          {
            name: "scriptType",
            description:
              "Script type: item, recipe, evolvedrecipe, fixing, sound, or vehicle",
            required: false,
          },
        ],
      },
    ],
  };
});

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const { name, arguments: args } = request.params ?? {};

  switch (name) {
    case "create-item": {
      const itemName = args?.itemName ?? "";
      const category = args?.category ?? "";
      return {
        description: `Generate a Project Zomboid item script for "${itemName}"`,
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Generate a Project Zomboid item script for "${itemName || "<itemName>"}"${category ? ` in category "${category}"` : ""}.\n\nUse the generate_script tool with type="item", name="${itemName || "<itemName>"}", and the appropriate properties (DisplayName, Type, Weight, etc.). Module should be "Base".`,
            },
          },
        ],
      };
    }

    case "analyze-mod": {
      const modPath = args?.modPath ?? "";
      return {
        description: `Analyze a Project Zomboid mod at "${modPath}"`,
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Analyze the mod at "${modPath || "<modPath>"}" for Project Zomboid.\n\nUse the analyze_mod tool with the provided modPath. Enable checkBalance and checkCompatibility.`,
            },
          },
        ],
      };
    }

    case "search-game": {
      const query = args?.query ?? "";
      const type = args?.type ?? "all";
      return {
        description: `Search vanilla PZ content for "${query}"`,
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Search Project Zomboid vanilla content for "${query || "<query>"}" with type filter "${type}".\n\nUse the search_vanilla tool.`,
            },
          },
        ],
      };
    }

    case "validate-script": {
      const scriptType = args?.scriptType ?? "";
      return {
        description: `Validate a Project Zomboid ${scriptType || "<type>"} script`,
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Validate a Project Zomboid${scriptType ? ` ${scriptType}` : ""} script.\n\nUse the validate_script tool with the script content and type="${scriptType || "item"}".`,
            },
          },
        ],
      };
    }

    default:
      throw new McpError(ErrorCode.InvalidRequest, `Unknown prompt: ${name}`);
  }
});

// Tool handlers
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    switch (name) {
      case "search_vanilla": {
        const {
          query,
          type,
          category,
          tags,
          metalValueMin,
          metalValueMax,
          attachmentType,
          limit,
        } = SearchVanillaSchema.parse(args);
        const searchOptions: {
          type?: string;
          category?: string;
          tags?: string;
          metalValueMin?: number;
          metalValueMax?: number;
          attachmentType?: string;
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
        if (limit !== undefined) searchOptions.limit = limit;
        const results = await dbManager.searchContent(query, searchOptions);

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
              properties: r.properties,
            })),
          },
        };
      }

      case "generate_script": {
        const { type, name, properties, module, balance, includeComments } =
          GenerateScriptSchema.parse(args);
        // Build options conditionally (exactOptionalPropertyTypes: absent, not undefined)
        const generationOptions: GenerationOptions = {};
        if (balance !== undefined) generationOptions.balance = balance;
        if (includeComments !== undefined)
          generationOptions.includeComments = includeComments;
        const script = await generator.generateScript(
          type,
          name,
          properties,
          module,
          generationOptions,
        );

        return {
          content: [
            {
              type: "text",
              text: `Generated ${type} script for "${name}":\n\n\`\`\`\n${script}\n\`\`\``,
            },
          ],
          structuredContent: { type, name, module, script },
        };
      }

      case "validate_script": {
        const { content, type, strict } = ValidateScriptSchema.parse(args);
        const validation = await validator.validateScript(
          content,
          type,
          strict,
        );

        return {
          content: [
            {
              type: "text",
              text: formatValidationResults(validation),
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(validation)),
        };
      }

      case "check_references": {
        const { references, type } = CheckReferencesSchema.parse(args);
        const results = await validator.checkReferences(references, type);

        return {
          content: [
            {
              type: "text",
              text: formatReferenceResults(results),
            },
          ],
          structuredContent: { results: JSON.parse(JSON.stringify(results)) },
        };
      }

      case "analyze_mod": {
        const { modPath, checkBalance, checkCompatibility } =
          AnalyzeModSchema.parse(args);
        let safePath: string;
        try {
          safePath = pathManager.validateInputPath(modPath, "dir");
        } catch (err) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid modPath: ${(err as Error).message}`,
          );
        }
        const analysis = await analyzer.analyzeMod(safePath, {
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
          structuredContent: JSON.parse(JSON.stringify(analysis)),
        };
      }

      case "parse_game_files": {
        const { gamePath, forceReparse } = ParseGameFilesSchema.parse(args);
        let detectedPath: string | null;
        if (gamePath) {
          try {
            detectedPath = pathManager.validateInputPath(gamePath, "dir");
          } catch (err) {
            throw new McpError(
              ErrorCode.InvalidParams,
              `Invalid gamePath: ${(err as Error).message}`,
            );
          }
        } else {
          detectedPath = await pathManager.detectProjectZomboidPath();
        }

        if (!detectedPath) {
          throw new McpError(
            ErrorCode.InvalidParams,
            "Could not detect Project Zomboid installation. Please provide the game path manually.",
          );
        }

        const results = await parser.parseGameFiles(detectedPath, forceReparse);

        return {
          content: [
            {
              type: "text",
              text: `Successfully parsed Project Zomboid files from: ${detectedPath}\n\n${formatParseResults(results)}`,
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(results)),
        };
      }

      case "index_knowledge_base": {
        const { path: kbPath, overwrite } =
          IndexKnowledgeBaseSchema.parse(args);
        const rawPath = kbPath || knowledgeBasePath();
        // Same traversal/existence guard as analyze_mod/parse_game_files
        // (freebuff review §5 security gap: was existsSync-only).
        let resolvedPath: string;
        try {
          resolvedPath = pathManager.validateInputPath(rawPath, "dir");
        } catch (err) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid knowledge base path: ${(err as Error).message}`,
          );
        }
        const result = await knowledgeBaseManager.indexDirectory(resolvedPath, {
          overwrite,
        });
        return {
          content: [
            {
              type: "text",
              text: `Successfully indexed knowledge base from: ${resolvedPath}\n\n${formatKbIndexResults(result)}`,
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(result)),
        };
      }

      case "search_knowledge_base": {
        const { query, topic, limit } = SearchKnowledgeBaseSchema.parse(args);
        const results = await knowledgeBaseManager.search(
          query,
          topic ? { topic, limit } : { limit },
        );
        return {
          content: [
            {
              type: "text",
              text: formatKbSearchResults(query, results),
            },
          ],
          structuredContent: {
            query,
            results: JSON.parse(JSON.stringify(results)),
          },
        };
      }

      case "list_knowledge_topics": {
        const topics = await knowledgeBaseManager.listTopics();
        return {
          content: [
            {
              type: "text",
              text: formatKbTopics(topics),
            },
          ],
          structuredContent: { topics: JSON.parse(JSON.stringify(topics)) },
        };
      }

      case "analyze_recipe_chain": {
        const { seed, direction, maxDepth } =
          AnalyzeRecipeChainSchema.parse(args);
        const chain = await recipeAnalyzer.analyzeChain(
          seed,
          direction,
          maxDepth,
        );
        return {
          content: [
            {
              type: "text",
              text: formatRecipeChain(chain),
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(chain)),
        };
      }

      case "detect_recipe_conflicts": {
        const { limit } = DetectRecipeConflictsSchema.parse(args);
        const conflictResult = await recipeAnalyzer.detectConflicts(limit);
        return {
          content: [
            {
              type: "text",
              text: formatRecipeConflicts(conflictResult),
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(conflictResult)),
        };
      }

      case "export_mod_script": {
        const {
          modPath,
          type,
          name,
          properties,
          module,
          balance,
          includeComments,
          dryRun,
        } = ExportModScriptSchema.parse(args);
        let safePath: string;
        try {
          safePath = pathManager.validateInputPath(modPath, "dir");
        } catch (err) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid modPath: ${(err as Error).message}`,
          );
        }
        const generationOptions: GenerationOptions = {};
        if (balance !== undefined) generationOptions.balance = balance;
        if (includeComments !== undefined)
          generationOptions.includeComments = includeComments;
        const script = await generator.generateScript(
          type,
          name,
          properties,
          module,
          generationOptions,
        );

        // The filename derives from the (sanitized) script name and is written
        // only under <modPath>/media/scripts — no traversal is possible.
        const safeName = name
          .replace(/[^A-Za-z0-9_.-]+/g, "_")
          .replace(/^\.+/, "");
        if (!safeName) {
          throw new McpError(
            ErrorCode.InvalidParams,
            "Script name must contain at least one valid character",
          );
        }
        const scriptsDir = join(safePath, "media", "scripts");
        const targetPath = join(scriptsDir, `${safeName}.txt`);

        if (dryRun) {
          return {
            content: [
              {
                type: "text",
                text: `🟡 Dry run — no files were written.\n\nWould write to: ${targetPath}\n\n\`\`\`\n${script}\n\`\`\``,
              },
            ],
            structuredContent: { dryRun: true, filePath: targetPath, script },
          };
        }

        await mkdir(scriptsDir, { recursive: true });
        await writeFile(targetPath, script, "utf-8");
        return {
          content: [
            {
              type: "text",
              text: `✅ Wrote ${type} script to: ${targetPath}\n\n\`\`\`\n${script}\n\`\`\``,
            },
          ],
          structuredContent: {
            dryRun: false,
            filePath: targetPath,
            bytes: Buffer.byteLength(script, "utf-8"),
            script,
          },
        };
      }

      case "workshop_search": {
        const { query, limit } = WorkshopSearchSchema.parse(args);
        const items = await workshopClient.search(query, limit);
        return {
          content: [
            {
              type: "text",
              text: formatWorkshopSearchResults(query, items),
            },
          ],
          structuredContent: { query, count: items.length, items },
        };
      }

      case "workshop_get_details": {
        const { id } = WorkshopGetDetailsSchema.parse(args);
        const details = await workshopClient.getDetails(id);
        const isPz = details.appId === "108600";
        return {
          content: [
            {
              type: "text",
              text: formatWorkshopDetails(details, isPz),
            },
          ],
          structuredContent: {
            id: details.id,
            isProjectZomboid: isPz,
            details: JSON.parse(JSON.stringify(details)),
          },
        };
      }

      case "workshop_download": {
        const { id } = WorkshopDownloadSchema.parse(args);
        const resolvedId = parseWorkshopInput(id);
        // Confirm the item is a Project Zomboid workshop item before touching disk.
        const details = await workshopClient.getDetails(resolvedId);
        const isPz = details.appId === "108600";
        if (!isPz) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Item ${resolvedId} belongs to app ${details.appId || "unknown"}, not Project Zomboid (108600). Refusing to download.`,
          );
        }
        const result = await steamCmdDownloader.download(resolvedId, (phase) =>
          logger.info({ workshopId: resolvedId }, "workshop_download: %s", phase),
        );
        return {
          content: [
            {
              type: "text",
              text: formatWorkshopDownload(result),
            },
          ],
          structuredContent: JSON.parse(JSON.stringify(result)),
        };
      }

      default:
        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new McpError(
        ErrorCode.InvalidParams,
        `Invalid parameters: ${error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")}`,
      );
    }

    if (error instanceof McpError) {
      throw error;
    }

    throw new McpError(
      ErrorCode.InternalError,
      `Tool execution failed: ${error}`,
    );
  }
});

// Utility functions for formatting output
function formatSearchResults(results: any[]): string {
  return results
    .map((result) => {
      const type = result.type || "unknown";
      const name = result.name || result.id;
      const description = result.displayName || result.description || "";

      let output = `**${name}** (${type})`;
      if (description) output += ` - ${description}`;

      if (result.properties) {
        const props = Object.entries(result.properties)
          .filter(([, value]) => value !== null && value !== undefined)
          .slice(0, 5) // Limit to first 5 properties
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ");
        if (props) output += `\n  Properties: ${props}`;
      }

      return output;
    })
    .join("\n\n");
}

function formatValidationResults(validation: any): string {
  let output = `## Validation Results\n\n`;

  if (validation.isValid) {
    output += `✅ **Valid** - Script passed all validation checks\n\n`;
  } else {
    output += `❌ **Invalid** - Found ${validation.errors.length} error(s)\n\n`;
  }

  if (validation.errors.length > 0) {
    output += `### Errors:\n`;
    validation.errors.forEach((error: any, index: number) => {
      output += `${index + 1}. **Line ${error.line || "unknown"}**: ${error.message}\n`;
      if (error.suggestion) {
        output += `   💡 Suggestion: ${error.suggestion}\n`;
      }
    });
    output += "\n";
  }

  if (validation.warnings.length > 0) {
    output += `### Warnings:\n`;
    validation.warnings.forEach((warning: any, index: number) => {
      output += `${index + 1}. **Line ${warning.line || "unknown"}**: ${warning.message}\n`;
    });
    output += "\n";
  }

  if (validation.suggestions.length > 0) {
    output += `### Suggestions:\n`;
    validation.suggestions.forEach((suggestion: any, index: number) => {
      output += `${index + 1}. ${suggestion}\n`;
    });
  }

  return output;
}

function formatReferenceResults(results: any): string {
  let output = `## Reference Validation Results\n\n`;

  const valid = results.filter((r: any) => r.isValid);
  const invalid = results.filter((r: any) => !r.isValid);

  output += `✅ Valid: ${valid.length} | ❌ Invalid: ${invalid.length}\n\n`;

  // Completeness summary (freebuff N-series): where each reference actually
  // lives — defined as an item, referenced-only, or missing everywhere.
  const definedCount = results.filter(
    (r: any) => r.detail === "defined",
  ).length;
  const referencedCount = results.filter(
    (r: any) => r.detail === "referenced",
  ).length;
  const missingCount = results.filter(
    (r: any) => r.detail === "missing",
  ).length;
  if (results.some((r: any) => r.detail !== undefined)) {
    output += `📊 Defined: ${definedCount} | Referenced-only: ${referencedCount} | Missing: ${missingCount}\n\n`;
  }

  if (invalid.length > 0) {
    output += `### Invalid References:\n`;
    invalid.forEach((ref: any) => {
      output += `- **${ref.reference}** (${ref.type}): ${ref.error}\n`;
      if (ref.detail === "referenced") {
        output += `  ⚠️ Referenced by ${ref.referenceCount ?? 0} item(s)/recipe(s) but no ${ref.itemType ? `'${ref.itemType}' ` : ""}row defines it\n`;
      }
      if (ref.suggestions && ref.suggestions.length > 0) {
        output += `  💡 Did you mean: ${ref.suggestions.slice(0, 3).join(", ")}?\n`;
      }
    });
    output += "\n";
  }

  if (valid.length > 0) {
    output += `### Valid References:\n`;
    valid.forEach((ref: any) => {
      output += `- **${ref.reference}** (${ref.type}) ✅`;
      if (ref.detail === "referenced") {
        output += ` (referenced-only, ${ref.referenceCount ?? 0} ref(s))`;
      } else if (ref.detail === "defined" && ref.itemType) {
        output += ` (${ref.itemType} row)`;
      }
      output += `\n`;
    });
  }

  return output;
}

function formatRecipeChain(chain: any): string {
  let output = `## Recipe Chain: ${chain.seed}\n\n`;
  output += `- **Seed kind**: ${chain.seedKind}\n`;
  output += `- **Depth**: ${chain.maxDepth}${chain.truncated ? " (truncated)" : ""}\n`;
  output += `- **Nodes**: ${chain.nodes.length}\n\n`;

  for (const node of chain.nodes) {
    const icon =
      node.kind === "recipe" ? "🔧" : node.kind === "item" ? "📦" : "❓";
    output += `${icon} **${node.id}** (${node.kind}${node.itemType ? `, ${node.itemType}` : ""})\n`;
    if (node.ingredients.length > 0) {
      output += `  ⬆️ consumes: ${node.ingredients.map((i: any) => i.id).join(", ")}\n`;
    }
    if (node.results.length > 0) {
      output += `  ⬇️ produces: ${node.results.map((r: any) => r.id).join(", ")}\n`;
    }
    if (node.producedBy.length > 0) {
      output += `  ⬆️ made by: ${node.producedBy.join(", ")}\n`;
    }
    if (node.consumedBy.length > 0) {
      output += `  ⬇️ used by: ${node.consumedBy.join(", ")}\n`;
    }
    output += "\n";
  }

  return output;
}

function formatRecipeConflicts(result: any): string {
  let output = `## Recipe Conflict Detection\n\n`;
  output += `- **Recipes in DB**: ${result.totalRecipes}\n`;
  output += `- **Conflicts found**: ${result.conflicts.length}\n\n`;

  if (result.conflicts.length === 0) {
    output += `✅ No items are produced by more than one recipe.\n`;
    return output;
  }

  result.conflicts.forEach((conflict: any, index: number) => {
    output += `${index + 1}. ⚠️ **${conflict.item}** is produced by ${conflict.recipes.length} recipes:\n`;
    conflict.recipes.forEach((r: any) => {
      output += `   - ${r.id} (${r.context})\n`;
    });
  });

  return output;
}

function formatModAnalysis(analysis: any): string {
  let output = `# Mod Analysis Report\n\n`;

  output += `**Mod Name**: ${analysis.modName || "Unknown"}\n`;
  output += `**Path**: ${analysis.modPath}\n`;
  output += `**Analysis Date**: ${new Date().toISOString()}\n\n`;

  // Structure validation
  output += `## Structure Validation\n`;
  output += `- **mod.info**: ${analysis.structure.hasModInfo ? "✅ Found" : "❌ Missing"}\n`;
  output += `- **Scripts**: ${analysis.structure.scriptCount} file(s) found\n`;
  output += `- **Lua Files**: ${analysis.structure.luaCount} file(s) found\n`;
  output += `- **Assets**: ${analysis.structure.assetCount} file(s) found\n\n`;

  // Issues
  if (analysis.issues && analysis.issues.length > 0) {
    output += `## Issues Found\n`;
    analysis.issues.forEach((issue: any, index: number) => {
      const icon =
        issue.severity === "error"
          ? "❌"
          : issue.severity === "warning"
            ? "⚠️"
            : "ℹ️";
      output += `${index + 1}. ${icon} **${issue.file}**: ${issue.message}\n`;
    });
    output += "\n";
  }

  // Balance analysis
  if (analysis.balance) {
    output += `## Balance Analysis\n`;
    output += `- **Items Analyzed**: ${analysis.balance.itemCount}\n`;
    output += `- **Balance Score**: ${analysis.balance.score}/100\n`;
    if (analysis.balance.recommendations.length > 0) {
      output += `- **Recommendations**:\n`;
      analysis.balance.recommendations.forEach((rec: string) => {
        output += `  - ${rec}\n`;
      });
    }
  }

  return output;
}

function formatParseResults(results: any): string {
  let output = `## Parse Results\n\n`;

  output += `- **Items**: ${results.itemCount} parsed\n`;
  output += `- **Recipes**: ${results.recipeCount} parsed\n`;
  output += `- **Sounds**: ${results.soundCount} parsed\n`;
  output += `- **Vehicles**: ${results.vehicleCount} parsed\n`;
  output += `- **Files Processed**: ${results.filesProcessed}\n`;
  output += `- **Parse Time**: ${results.parseTime}ms\n\n`;

  if (results.errors && results.errors.length > 0) {
    output += `### Parse Errors:\n`;
    results.errors.forEach((error: any, index: number) => {
      output += `${index + 1}. **${error.file}**: ${error.message}\n`;
    });
  }

  return output;
}

function formatKbIndexResults(result: {
  topics: number;
  files: number;
  chars: number;
  skipped: number;
  removed: number;
  errors: Array<{ file: string; message: string }>;
}): string {
  let output = `## Knowledge Base Index Results\n\n`;
  output += `- **Topics**: ${result.topics} indexed\n`;
  output += `- **Files**: ${result.files} found\n`;
  output += `- **Characters**: ${result.chars}\n`;
  if (result.skipped > 0) {
    output += `- **Skipped (unchanged)**: ${result.skipped}\n`;
  }
  if (result.removed > 0) {
    output += `- **Removed (deleted files)**: ${result.removed}\n`;
  }
  output += `\n`;

  if (result.errors && result.errors.length > 0) {
    output += `### Errors:\n`;
    result.errors.forEach((error, index) => {
      output += `${index + 1}. **${error.file}**: ${error.message}\n`;
    });
  }

  return output;
}

function formatKbSearchResults(
  query: string,
  results: Array<{
    topic: string;
    title: string;
    snippet: string;
    score: number;
  }>,
): string {
  if (results.length === 0) {
    return `Found 0 results for "${query}" in knowledge base.\n`;
  }

  let output = `Found ${results.length} results for "${query}":\n\n`;
  results.forEach((r) => {
    output += `**${r.topic}** (${r.title})\n`;
    output += `  Score: ${r.score}\n`;
    output += `  ${r.snippet.replace(/\n/g, "\n  ")}\n\n`;
  });

  return output;
}

function formatKbTopics(
  topics: Array<{
    topic: string;
    title: string;
    lines: number;
    words: number;
    chars: number;
  }>,
): string {
  if (topics.length === 0) {
    return `No knowledge base topics indexed. Run index_knowledge_base first.\n`;
  }

  let output = `## Knowledge Base Topics (${topics.length})\n\n`;
  topics.forEach((t) => {
    output += `- **${t.topic}**: ${t.title} (${t.lines} lines, ${t.words} words, ${t.chars} chars)\n`;
  });

  return output;
}

function formatWorkshopSearchResults(
  query: string,
  items: Array<{
    id: string;
    title: string;
    author: string;
    url: string;
    shortDescription: string;
    tags: string[];
    subscribers: number;
  }>,
): string {
  if (items.length === 0) {
    return `Found 0 workshop items for "${query}".\n`;
  }
  let output = `Found ${items.length} workshop items for "${query}":\n\n`;
  items.forEach((it, i) => {
    output += `${i + 1}. **${it.title}** — by ${it.author} · id \`${it.id}\`\n`;
    output += `   🔗 ${it.url}\n`;
    if (it.subscribers > 0) output += `   👥 ${it.subscribers.toLocaleString()} subscribers\n`;
    if (it.tags.length > 0) output += `   🏷️ ${it.tags.join(", ")}\n`;
    if (it.shortDescription) {
      output += `   ${it.shortDescription.slice(0, 160)}\n`;
    }
    output += `\n`;
  });
  output += `Run workshop_get_details with an id to fetch full metadata, then workshop_download (M2) to fetch and analyze the mod.`;
  return output;
}

function formatWorkshopDetails(
  details: {
    id: string;
    title: string;
    url: string;
    appId: string;
    fileSize: number;
    subscribers: number;
    views: number;
    votesUp: number;
    votesDown: number;
    tags: string[];
    description: string;
    timeUpdated: number;
  },
  isPz: boolean,
): string {
  let output = `## Workshop Item: ${details.title}\n\n`;
  if (!isPz) {
    output += `⚠️ **Warning**: this item's consumer app is \`${details.appId || "unknown"}\`, not Project Zomboid (108600).\n\n`;
  }
  output += `- **Id**: \`${details.id}\``;
  if (isPz) output += ` ✅ Project Zomboid`;
  output += `\n`;
  output += `- **Link**: ${details.url}\n`;
  output += `- **File size**: ${formatBytes(details.fileSize)}\n`;
  output += `- **Subscribers**: ${details.subscribers.toLocaleString()}\n`;
  output += `- **Views**: ${details.views.toLocaleString()}\n`;
  output += `- **Rating**: 👍 ${details.votesUp.toLocaleString()} / 👎 ${details.votesDown.toLocaleString()}\n`;
  if (details.tags.length > 0) {
    output += `- **Tags**: ${details.tags.join(", ")}\n`;
  }
  output += `- **Last updated**: ${new Date(details.timeUpdated * 1000).toISOString().slice(0, 10)}\n`;
  if (details.description) {
    output += `\n### Description\n${details.description.slice(0, 600)}\n`;
  }
  return output;
}

function formatWorkshopDownload(result: {
  id: string;
  downloadedPath: string;
  bytes: number;
  elapsedMs: number;
  attempts: number;
  note?: string;
}): string {
  let output = `## Workshop Download: ${result.id}\n\n`;
  output += `✅ Downloaded to: \`${result.downloadedPath}\`\n`;
  output += `- **Size**: ${formatBytes(result.bytes)}\n`;
  output += `- **Elapsed**: ${(result.elapsedMs / 1000).toFixed(1)}s\n`;
  output += `- **SteamCMD attempts**: ${result.attempts}\n`;
  if (result.note) output += `- **Note**: ${result.note}\n`;
  output += `\nNext: run parse_game_files / analyze_mod / check_references on ${result.downloadedPath} to dissect the mod.`;
  return output;
}

function formatBytes(n: number): string {
  if (n <= 0) return "unknown";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = n;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

// Start the server
async function main() {
  await initializeServer();

  const transport = new StdioServerTransport();
  await server.connect(transport);

  logger.info("🚀 Project Zomboid MCP Server running");
}

// Entry guard: compare as file URLs so Windows paths (backslashes) match too
const isMain =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
  main().catch((error) => {
    logger.error(
      "💥 Server failed to start: %s",
      error instanceof Error ? error.message : String(error),
    );
    process.exit(1);
  });
}
