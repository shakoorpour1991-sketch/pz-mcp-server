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
import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
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
import {
  SearchVanillaSchema,
  SearchRecipesSchema,
  GenerateScriptSchema,
  ValidateScriptSchema,
  CheckReferencesSchema,
  AnalyzeModSchema,
  ParseGameFilesSchema,
  IndexKnowledgeBaseSchema,
  AnalyzeRecipeChainSchema,
  DetectRecipeConflictsSchema,
  ExportModScriptSchema,
  SearchKnowledgeBaseSchema,
  WorkshopSearchSchema,
  WorkshopGetDetailsSchema,
  WorkshopDownloadSchema,
  WorkshopAnalyzeSchema,
  ListKnowledgeTopicsSchema,
} from "./schemas.js";
import logger from "./utils/logger.js";
import {
  formatKbIndexResults,
  formatKbSearchResults,
  formatKbTopics,
  formatModAnalysis,
  formatParseResults,
  formatRecipeChain,
  formatRecipeConflicts,
  formatRecipeSearchResults,
  formatReferenceResults,
  formatSearchResults,
  formatValidationResults,
  formatWorkshopDetails,
  formatWorkshopDownload,
  formatWorkshopModReport,
  formatWorkshopSearchResults,
} from "./utils/formatters.js";

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

// Tool definitions
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_vanilla",
        description:
          "Search vanilla Project Zomboid content (items, recipes, sounds, vehicles) with intelligent matching and filters (category, weight, calories, tags, type)",
        inputSchema: SearchVanillaSchema,
      },
      {
        name: "search_recipes",
        description:
          "Search structured craft recipes by ingredient, tool, skill requirement, category, or result",
        inputSchema: SearchRecipesSchema,
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
      {
        name: "workshop_analyze",
        description:
          "Fetch & Analyze a Project Zomboid workshop item: download via SteamCMD, parse its scripts into the DB, run analyze_mod + reference checks, and return a full Mod Report (what it adds, quality score, issues, recommendations)",
        inputSchema: WorkshopAnalyzeSchema,
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
          minWeight,
          maxWeight,
          minCalories,
          maxCalories,
          limit,
        } = SearchVanillaSchema.parse(args);
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
              weight: r.weight,
              calories: r.calories,
              properties: r.properties,
            })),
          },
        };
      }

      case "search_recipes": {
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
        } = SearchRecipesSchema.parse(args);
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
        const recipes = await dbManager.searchRecipes(recipeOptions);

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
          structuredContent: structuredClone(validation),
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
          structuredContent: { results: structuredClone(results) },
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
          structuredContent: structuredClone(analysis),
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
          structuredContent: structuredClone(results),
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
          structuredContent: structuredClone(result),
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
            results: structuredClone(results),
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
          structuredContent: { topics: structuredClone(topics) },
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
          structuredContent: structuredClone(chain),
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
          structuredContent: structuredClone(conflictResult),
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
          // Expect-two-verdict: warn early if the destination isn't writable so
          // a later dryRun=false write doesn't fail silently (audit D6).
          const verdict = await pathManager.isAncestorWritable(scriptsDir);
          const warning = verdict.writable
            ? ""
            : `\n\n⚠️ Warning: destination is not writable (dryRun=false will fail): ${verdict.error || "unknown error"}`;
          return {
            content: [
              {
                type: "text",
                text: `🟡 Dry run — no files were written.\n\nWould write to: ${targetPath}\n\n\`\`\`\n${script}\n\`\`\`${warning}`,
              },
            ],
            structuredContent: {
              dryRun: true,
              filePath: targetPath,
              script,
              writable: verdict.writable,
            },
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
        const { id, forceRefresh } = WorkshopGetDetailsSchema.parse(args);
        const details = await workshopClient.getDetails(id, {
          forceRefresh,
        });
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
            details: structuredClone(details),
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
        const result = await steamCmdDownloader.download(
          resolvedId,
          (phase) =>
            logger.info(
              { workshopId: resolvedId },
              "workshop_download: %s",
              phase,
            ),
          { expectedBytes: details.fileSize },
        );
        return {
          content: [
            {
              type: "text",
              text: formatWorkshopDownload(result),
            },
          ],
          structuredContent: structuredClone(result),
        };
      }

      case "workshop_analyze": {
        const { id } = WorkshopAnalyzeSchema.parse(args);
        const resolvedId = parseWorkshopInput(id);
        // Confirm the item is a Project Zomboid workshop item before touching disk.
        const details = await workshopClient.getDetails(resolvedId);
        const isPz = details.appId === "108600";
        if (!isPz) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Item ${resolvedId} belongs to app ${details.appId || "unknown"}, not Project Zomboid (108600). Refusing to analyze.`,
          );
        }
        const onPhase = (phase: string) =>
          logger.info(
            { workshopId: resolvedId },
            "workshop_analyze: %s",
            phase,
          );

        const dl = await steamCmdDownloader.download(resolvedId, onPhase, {
          expectedBytes: details.fileSize,
        });
        onPhase("parsing mod scripts");
        // Audit M5: analyze workshop mods in a throwaway DB so third-party rows
        // never pollute the vanilla game DB.
        const tmpDbDir = mkdtempSync(join(tmpdir(), "pz-workshop-"));
        const wsDb = new DatabaseManager(join(tmpDbDir, "workshop.db"));
        await wsDb.initialize();
        let report;
        try {
          const wsParser = new ProjectZomboidParser(wsDb);
          const wsAnalyzer = new ModAnalyzer(wsDb, wsParser);
          const parseResults = await wsParser.parseModDirectory(
            dl.downloadedPath,
          );
          onPhase("running analysis suite");
          const analysis = await wsAnalyzer.analyzeMod(dl.downloadedPath, {
            checkBalance: true,
            checkCompatibility: true,
          });
          report = {
            modId: resolvedId,
            title: details.title,
            url: details.url,
            fileSize: details.fileSize,
            subscribers: details.subscribers,
            downloadedPath: dl.downloadedPath,
            downloadBytes: dl.bytes,
            parse: parseResults,
            analysis,
          };
        } finally {
          wsDb.close();
          rmSync(tmpDbDir, { recursive: true, force: true });
        }
        onPhase("running analysis suite");

        return {
          content: [
            {
              type: "text",
              text: formatWorkshopModReport(report),
            },
          ],
          structuredContent: structuredClone(report),
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

// Start the server
async function main() {
  // Graceful shutdown handlers
  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}, shutting down...`);
    try {
      await dbManager?.close?.();
    } catch {
      // ignore close errors during shutdown
    }
    try {
      await knowledgeBaseManager?.close?.();
    } catch {
      // ignore close errors during shutdown
    }
    process.exit(0);
  };
  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));

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
