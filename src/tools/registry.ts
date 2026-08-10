/**
 * Typed tool registry (audit: data-driven tool registration).
 *
 * Each tool is a single object pairing its name, description, input schema,
 * and handler — no more parallel arrays + switch dispatch. index.ts remains
 * responsible for composition: it builds the context once at startup, lists
 * tools from the registry, and dispatches calls through it.
 */
import type { z } from "zod";
import type { DatabaseManager } from "../database/DatabaseManager.js";
import type { ProjectZomboidParser } from "../parsers/ProjectZomboidParser.js";
import type { ModAnalyzer } from "../analyzers/ModAnalyzer.js";
import type { RecipeAnalyzer } from "../analyzers/RecipeAnalyzer.js";
import type { ScriptGenerator } from "../generators/ScriptGenerator.js";
import type { ValidationEngine } from "../validation/ValidationEngine.js";
import type { KnowledgeBaseManager } from "../knowledge/KnowledgeBaseManager.js";
import type { PathManager } from "../utils/PathManager.js";
import type { SteamWorkshopClient } from "../workshop/SteamWorkshopClient.js";
import type { SteamCmdDownloader } from "../workshop/SteamCmdDownloader.js";
import type { WorkspaceManager } from "../workspace/WorkspaceManager.js";
import type { ModInstaller } from "../modinstall/ModInstaller.js";
import type { ModGenManager } from "../modgen/ModGenManager.js";

/**
 * Everything a tool handler may need. Populated once at server startup and
 * passed per-call, so handlers stay free of module-level globals and are
 * unit-testable with mocks.
 */
export interface ToolContext {
  dbManager: DatabaseManager;
  parser: ProjectZomboidParser;
  analyzer: ModAnalyzer;
  generator: ScriptGenerator;
  validator: ValidationEngine;
  recipeAnalyzer: RecipeAnalyzer;
  knowledgeBaseManager: KnowledgeBaseManager;
  pathManager: PathManager;
  workshopClient: SteamWorkshopClient;
  steamCmdDownloader: SteamCmdDownloader;
  /** Workshop ids with a download in flight (dedupe concurrent calls). */
  activeWorkshopDownloads: Set<string>;
  /** Rooted, safety-first mod workspace (workspace_* tools). */
  workspaceManager: WorkspaceManager;
  /** Smart mod installer (detect_pz_paths / install_mod). */
  modInstaller: ModInstaller;
  /** Beginner-friendly mod generator (modgen_*). */
  modGenManager: ModGenManager;
}

/**
 * The MCP tool-call result shape (content + optional structured payload).
 * Handlers return this natural shape; the dispatcher widens it to the SDK's
 * ServerResult (which requires structuredContent to be a plain record, a
 * constraint the concrete domain interfaces cannot satisfy).
 */
export interface McpToolResult {
  content: Array<{ type: "text"; text: string }>;
  structuredContent?: unknown;
}

/**
 * One tool definition. `S` is the input schema; the handler receives the
 * already-parsed output of `S.parse(args)`.
 */
export interface McpTool<S extends z.ZodTypeAny> {
  name: string;
  description: string;
  inputSchema: S;
  handler: (args: z.infer<S>, ctx: ToolContext) => Promise<McpToolResult>;
}

/** Name → tool definition for the whole process. */
export class ToolRegistry {
  private readonly byName = new Map<string, McpTool<z.ZodTypeAny>>();

  constructor(tools: McpTool<z.ZodTypeAny>[]) {
    for (const tool of tools) {
      this.byName.set(tool.name, tool);
    }
  }

  get(name: string): McpTool<z.ZodTypeAny> | undefined {
    return this.byName.get(name);
  }

  list(): McpTool<z.ZodTypeAny>[] {
    return [...this.byName.values()];
  }
}
