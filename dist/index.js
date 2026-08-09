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
import { CallToolRequestSchema, ErrorCode, ListToolsRequestSchema, McpError, ListResourcesRequestSchema, ReadResourceRequestSchema, ListPromptsRequestSchema, GetPromptRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
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
import { PathManager } from "./utils/PathManager.js";
import { SteamWorkshopClient } from "./workshop/SteamWorkshopClient.js";
import { SteamCmdDownloader } from "./workshop/SteamCmdDownloader.js";
import { validateEnvConfig } from "./utils/config.js";
import { toMcpError } from "./utils/mcpErrors.js";
import { ALL_TOOLS, ToolRegistry } from "./tools/index.js";
import logger from "./utils/logger.js";
import { ModWorkspaceManager } from "./utils/ModWorkspaceManager.js";
// Read the server version from package.json (audit minor: was hardcoded '1.1.0')
const __dirname = dirname(fileURLToPath(import.meta.url));
const SERVER_VERSION = JSON.parse(readFileSync(resolve(__dirname, "..", "package.json"), "utf-8"))
    .version || "1.1.0";
const server = new Server({
    name: "pz-mcp-server",
    version: SERVER_VERSION,
}, {
    capabilities: {
        tools: {},
        resources: {},
        prompts: {},
    },
});
// Workshop item ids with a download in flight (dedupe concurrent calls).
const activeWorkshopDownloads = new Set();
// Tool registry — built once, driven by the definitions in src/tools/.
const registry = new ToolRegistry(ALL_TOOLS);
// Shared per-call context, populated by initializeServer.
let ctx;
// Initialize core components
let dbManager;
let knowledgeBaseManager;
let workspaceManager;
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
        // Initialize knowledge base manager
        knowledgeBaseManager = new KnowledgeBaseManager();
        await knowledgeBaseManager.initialize();
        // Initialize Steam Workshop metadata client (keyless) + SteamCMD downloader
        const workshopClient = new SteamWorkshopClient();
        const steamCmdDownloader = new SteamCmdDownloader();
        // Initialize workspace manager with configurable roots from env
        const workspaceRoots = process.env.PZ_MCP_WORKSPACE_ROOTS
            ? process.env.PZ_MCP_WORKSPACE_ROOTS.split(",").map((s) => s.trim())
            : [process.cwd()];
        workspaceManager = new ModWorkspaceManager({
            workspaceRoots,
            defaultTemplate: "B42",
            strictPaths: true,
        });
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
            workspaceManager,
            activeWorkshopDownloads,
        };
        logger.info("🎮 Project Zomboid MCP Server initialized successfully");
    }
    catch (error) {
        logger.error("❌ Failed to initialize server: %s", error instanceof Error ? error.message : String(error));
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
    const uri = request.params.uri;
    const match = uri.match(/^knowledge:\/\/([^/?#]+)(?:\/.*)?$/);
    if (!match) {
        throw new McpError(ErrorCode.InvalidRequest, `Unknown resource URI: ${uri}`);
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
                description: "Guides you through generating a Project Zomboid item script using generate_script",
                arguments: [
                    {
                        name: "itemName",
                        description: "Name of the item to generate (e.g. WoodenBat, IronAxe)",
                        required: true,
                    },
                    {
                        name: "category",
                        description: "Item category: Weapon, Clothing, Food, Tool, Literature, etc.",
                        required: false,
                    },
                ],
            },
            {
                name: "analyze-mod",
                description: "Guides you through analyzing a Project Zomboid mod directory using analyze_mod",
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
                description: "Guides you through searching vanilla Project Zomboid content using search_vanilla",
                arguments: [
                    {
                        name: "query",
                        description: "Search query string",
                        required: true,
                    },
                    {
                        name: "type",
                        description: "Content type filter: item, recipe, sound, vehicle, or all",
                        required: false,
                    },
                ],
            },
            {
                name: "validate-script",
                description: "Guides you through validating a Project Zomboid script using validate_script",
                arguments: [
                    {
                        name: "scriptType",
                        description: "Script type: item, recipe, evolvedrecipe, fixing, sound, or vehicle",
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
        return (await tool.handler(parsed, ctx));
    }
    catch (error) {
        throw toMcpError(error);
    }
});
// Start the server
async function main() {
    // Graceful shutdown handlers
    const shutdown = async (signal) => {
        logger.info(`Received ${signal}, shutting down...`);
        try {
            await dbManager?.close?.();
        }
        catch {
            // ignore close errors during shutdown
        }
        try {
            await knowledgeBaseManager?.close?.();
        }
        catch {
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
const isMain = process.argv[1] !== undefined &&
    import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
    main().catch((error) => {
        logger.error("💥 Server failed to start: %s", error instanceof Error ? error.message : String(error));
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map