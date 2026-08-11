#!/usr/bin/env node

/**
 * Project Zomboid MCP Server
 * A comprehensive MCP server for Project Zomboid mod development
 *
 * Composition layer only (audit: split oversized entrypoint). All tool
 * definitions live in src/tools/* (see src/tools/index.ts); this file wires
 * the components together, registers the MCP resources/prompts, and
 * dispatches tool calls through the typed registry.
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
import { pathToFileURL, fileURLToPath } from "url";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { DatabaseManager } from "./database/DatabaseManager.js";
import { ProjectZomboidParser } from "./parsers/ProjectZomboidParser.js";
import { ModAnalyzer } from "./analyzers/ModAnalyzer.js";
import { RecipeAnalyzer } from "./analyzers/RecipeAnalyzer.js";
import { ScriptGenerator } from "./generators/ScriptGenerator.js";
import { ValidationEngine } from "./validation/ValidationEngine.js";
import { KnowledgeBaseManager } from "./knowledge/KnowledgeBaseManager.js";
import { EmbeddingManager } from "./knowledge/EmbeddingManager.js";
import { PathManager } from "./utils/PathManager.js";
import { SteamWorkshopClient } from "./workshop/SteamWorkshopClient.js";
import { SteamCmdDownloader } from "./workshop/SteamCmdDownloader.js";
import { WorkspaceManager } from "./workspace/WorkspaceManager.js";
import { ModInstaller } from "./modinstall/ModInstaller.js";
import { ModGenManager } from "./modgen/ModGenManager.js";
import { validateEnvConfig, workspaceRoot } from "./utils/config.js";
import { toMcpError } from "./utils/mcpErrors.js";
import { ALL_TOOLS, ToolRegistry } from "./tools/index.js";
import type { ServerResult } from "@modelcontextprotocol/sdk/types.js";
import type { ToolContext } from "./tools/index.js";
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

// Workshop item ids with a download in flight (dedupe concurrent calls).
const activeWorkshopDownloads = new Set<string>();

// Tool registry — built once, driven by the definitions in src/tools/.
const registry = new ToolRegistry(ALL_TOOLS);

// Shared per-call context, populated by initializeServer.
let ctx: ToolContext;

// Initialize core components
let dbManager: DatabaseManager;
let knowledgeBaseManager: KnowledgeBaseManager;

async function initializeServer() {
  try {
    // Fail fast on invalid environment configuration before anything binds
    // (audit: configuration validated at startup).
    validateEnvConfig();

    // Initialize path manager for PZ installation detection
    const pathManager = new PathManager();

    // Initialize database
    dbManager = new DatabaseManager();
    await dbManager.initialize();

    // Initialize parser with database
    const parser = new ProjectZomboidParser(dbManager);

    // Initialize other components
    const analyzer = new ModAnalyzer(dbManager, parser);
    const generator = new ScriptGenerator(dbManager);
    const validator = new ValidationEngine(dbManager);
    const recipeAnalyzer = new RecipeAnalyzer(dbManager);

    // Initialize knowledge base manager + Phase 5 semantic engine (opt-in —
    // the model is never touched at boot; embed_knowledge loads it lazily).
    const embeddingManager = new EmbeddingManager();
    knowledgeBaseManager = new KnowledgeBaseManager(undefined, {
      embeddingManager,
    });
    await knowledgeBaseManager.initialize();

    // Initialize Steam Workshop metadata client (keyless) + SteamCMD downloader
    const workshopClient = new SteamWorkshopClient();
    const steamCmdDownloader = new SteamCmdDownloader();

    // Mod workspace: rooted + safety-first project manager (workspace_* tools).
    // All file operations are strictly confined to this root.
    const workspaceManager = new WorkspaceManager([workspaceRoot()]);
    await workspaceManager.ensureRoots();

    // Smart mod installer (detect_pz_paths / install_mod).
    const modInstaller = new ModInstaller(pathManager);

    // Beginner-friendly mod generator (modgen_*) — emits Build 42 item
    // scripts (ItemType = base:*), reuses the validator, vanilla DB and the
    // rooted workspace above.
    const modGenManager = new ModGenManager(
      dbManager,
      validator,
      workspaceManager,
    );

    ctx = {
      dbManager,
      parser,
      analyzer,
      generator,
      validator,
      recipeAnalyzer,
      knowledgeBaseManager,
      pathManager,
      workshopClient,
      steamCmdDownloader,
      activeWorkshopDownloads,
      workspaceManager,
      modInstaller,
      modGenManager,
      embeddingManager,
    };

    logger.info("🎮 Project Zomboid MCP Server initialized successfully");
  } catch (error) {
    logger.error(
      "❌ Failed to initialize server: %s",
      error instanceof Error ? error.message : String(error),
    );
    process.exit(1);
  }
}

// Tool definitions — sourced from the typed registry (single source of truth
// for name/description/schema; handlers live with their definitions).
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: registry.list().map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
    })),
  };
});

// One page of knowledge:// resources. 200 keeps the handshake payload small
// (the full 4,895-topic list was ~805KB JSON, 96% javadocs class pages).
const RESOURCE_PAGE_SIZE = 200;
// Whole-doc resource reads above this many chars are truncated with a section
// pointer — a 190KB javadocs class page (~47k tokens) must never land in an
// agent's context unannounced (KB audit finding 5).
const MAX_RESOURCE_READ_CHARS = 25_000;

server.setRequestHandler(ListResourcesRequestSchema, async (request) => {
  const cursorRaw = request.params?.cursor;
  const offset = cursorRaw ? Math.max(0, parseInt(cursorRaw, 10) || 0) : 0;
  const topics = await knowledgeBaseManager.listTopics({
    limit: RESOURCE_PAGE_SIZE,
    offset,
    // Prose docs first so a client resource-browser shows the modder-relevant
    // docs before the 4,600 javadocs class pages (audit finding 4).
    proseFirst: true,
  });
  const total = await knowledgeBaseManager.countTopics();
  const nextCursor =
    offset + topics.length < total
      ? String(offset + RESOURCE_PAGE_SIZE)
      : undefined;
  return {
    resources: topics.map((t) => ({
      uri: `knowledge://${encodeURIComponent(t.topic)}`,
      name: t.topic,
      description: `${t.title} (${t.docType}, ${t.lines} lines, ${t.words} words)`,
      mimeType: "text/markdown",
      size: t.chars,
    })),
    nextCursor,
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri as string;
  // Topics are path-prefixed (wiki/Java) and may name a section (…AStar#search),
  // so the whole segment after knowledge:// is percent-encoded and decoded
  // before the '#' fragment is split off (KB v2 resource reads).
  const match = uri.match(/^knowledge:\/\/(.+)$/);
  if (!match) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Unknown resource URI: ${uri}`,
    );
  }
  let topic: string;
  try {
    topic = decodeURIComponent(match[1]);
  } catch {
    // Malformed percent-escapes (e.g. knowledge://%zz) are not valid topics.
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Malformed resource URI: ${uri}`,
    );
  }
  const doc = await knowledgeBaseManager.getTopic(topic);
  if (!doc) {
    throw new McpError(ErrorCode.InvalidRequest, `Topic not found: ${topic}`);
  }
  // Finding 5 — size cap: a giant doc (some javadocs class pages are ~190KB)
  // is truncated to the head plus a pointer to its real sections, so the
  // resource surface can never blow an agent's context. get_knowledge_section
  // and knowledge://topic#section remain the exact-read escape hatches.
  let text = doc.content;
  if (doc.chars > MAX_RESOURCE_READ_CHARS) {
    const sections = await knowledgeBaseManager.sectionNames(doc.docTopic, 12);
    const sectionList = sections.length
      ? sections.slice(0, 8).join("; ")
      : "(none listed)";
    text =
      `${doc.content.slice(0, MAX_RESOURCE_READ_CHARS).trimEnd()}…\n\n` +
      `[truncated: this doc is ${doc.chars} chars (~${Math.round(doc.chars / 4)} tokens). ` +
      `Read a section instead — get_knowledge_section(topic: "${doc.docTopic}", section: "<name>") ` +
      `or knowledge://${encodeURIComponent(doc.docTopic)}#<section>. ` +
      `Available sections: ${sectionList}]`;
  }
  return {
    contents: [
      {
        uri: `knowledge://${encodeURIComponent(topic)}`,
        mimeType: "text/markdown",
        text,
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
              text: `Search Project Zomboid vanilla content for "${query || "<query>"}" with type filter "${type}".\n\nUse search_vanilla with the query, or use id="ExactName" for a fast canonical lookup with typo resolution.\n\nStructured filters: type, category, module, scriptPath, tags, weight, calories, metalValue, attachmentType, properties (e.g. [{key:MaxDamage, min:5}]), usedInRecipe, producedByRecipe, sprite, sound.\n\nUse format="ai" to get compact context blocks designed to reduce hallucination. Use includeRelations=true for the full knowledge-graph view (recipes, sounds, sprites, siblings).`,
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

// Tool dispatch — schema validation + handler via the registry, with
// standardized error mapping (see utils/mcpErrors.ts).
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const tool = registry.get(name);
  if (!tool) {
    throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
  }
  // ctx is populated by initializeServer() before server.connect(), so a tool
  // call can never reach here before initialization — guard anyway so an
  // uninitialized read is impossible rather than merely unlikely.
  if (!ctx) {
    throw new McpError(ErrorCode.InternalError, "Server is not initialized");
  }
  try {
    const parsed = tool.inputSchema.parse(args);
    // Widened once at the boundary: handlers return the natural McpToolResult
    // shape; the SDK requires structuredContent to be a plain record.
    return (await tool.handler(parsed, ctx)) as unknown as ServerResult;
  } catch (error) {
    throw toMcpError(error);
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
