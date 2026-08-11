/**
 * Mod Workspace tools — a first-class project manager for PZ mod development.
 *
 * The workspace_* family wraps the rooted, safety-first WorkspaceManager and
 * layers existing mod semantics on top: mod.info metadata comes from
 * ProjectZomboidParser.parseModInfo, structure/issues/dependencies from
 * ModAnalyzer.analyzeMod, starter scripts from ScriptGenerator. Every path is
 * workspace-relative and strictly confined to the configured workspace root
 * (PZ_MCP_WORKSPACE_DIR, default <dataDir>/workspaces).
 */
import { existsSync } from "fs";
import { z } from "zod";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import {
  WorkspaceCreateSchema,
  WorkspaceInspectSchema,
  WorkspaceListSchema,
} from "../schemas.js";
import type { McpTool, ToolContext } from "./registry.js";
import {
  WorkspaceError,
  type CreateProjectOptions,
  type ProjectFileEntry,
  type WorkspaceManager,
} from "../workspace/WorkspaceManager.js";
import {
  formatWorkspaceCreated,
  formatWorkspaceInspect,
  formatWorkspaceProjects,
} from "../utils/formatters.js";

// ---------------------------------------------------------------------------
// Shared result shapes
// ---------------------------------------------------------------------------

interface WorkspaceInspectResult {
  project: string;
  path: string;
  modId?: string;
  modName?: string;
  version?: string;
  description?: string;
  supportedBuilds: string[];
  dependencies: { listed: string[]; missing: string[] };
  incompatible: string[];
  contentTypes: string[];
  files: {
    scriptCount: number;
    luaCount: number;
    assetCount: number;
    list?: ProjectFileEntry[];
  };
  validation: {
    valid: boolean;
    hasModInfo: boolean;
    hasCorrectStructure: boolean;
    hasCommonFolder: boolean;
    missingFiles: string[];
    unexpectedFiles: string[];
    errors: unknown[];
    warnings: unknown[];
    info: unknown[];
  };
  recommendations: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Absolute path of a project folder (WorkspaceError flows to the dispatcher's
 * single error mapper — see utils/mcpErrors.ts). */
function resolveProjectAbs(
  workspaceManager: WorkspaceManager,
  project: string,
): string {
  const { abs } = workspaceManager.resolve(project);
  return abs;
}

/**
 * Full structured inspection: metadata + structure + dependencies + content
 * types + validation errors/warnings. Delegates the heavy lifting to the
 * existing ModAnalyzer so results stay consistent with analyze_mod.
 */
export async function inspectProject(
  ctx: ToolContext,
  project: string,
  options: { checkDependencies: boolean; includeFileList: boolean },
): Promise<WorkspaceInspectResult> {
  const abs = resolveProjectAbs(ctx.workspaceManager, project);
  if (!existsSync(abs)) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Workspace NOT_FOUND: project does not exist: ${project}`,
    );
  }
  const analysis = await ctx.analyzer.analyzeMod(abs, {
    checkBalance: false,
    checkCompatibility: options.checkDependencies,
    checkPerformance: false,
  });
  const issues = analysis.issues;
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");
  const info = issues.filter((i) => i.severity === "info");
  const contentTypes = await ctx.workspaceManager.detectContentTypes(abs);
  const list = options.includeFileList
    ? await ctx.workspaceManager.listFiles(project, {})
    : undefined;

  const result: WorkspaceInspectResult = {
    project,
    path: abs,
    supportedBuilds: analysis.structure.buildVersions,
    dependencies: {
      listed: analysis.modInfo?.require ?? [],
      missing: analysis.compatibility?.missingDependencies ?? [],
    },
    incompatible: analysis.modInfo?.incompatible ?? [],
    contentTypes,
    files: {
      scriptCount: analysis.structure.scriptCount,
      luaCount: analysis.structure.luaCount,
      assetCount: analysis.structure.assetCount,
      ...(list !== undefined ? { list } : {}),
    },
    validation: {
      valid: errors.length === 0,
      hasModInfo: analysis.structure.hasModInfo,
      hasCorrectStructure: analysis.structure.hasCorrectStructure,
      hasCommonFolder: analysis.structure.hasCommonFolder,
      missingFiles: analysis.structure.missingFiles,
      unexpectedFiles: analysis.structure.unexpectedFiles,
      errors,
      warnings,
      info,
    },
    recommendations: analysis.recommendations,
  };
  if (analysis.modInfo?.id !== undefined) result.modId = analysis.modInfo.id;
  if (analysis.modInfo?.name !== undefined)
    result.modName = analysis.modInfo.name;
  if (analysis.modInfo?.version !== undefined)
    result.version = analysis.modInfo.version;
  if (analysis.modInfo?.description !== undefined)
    result.description = analysis.modInfo.description;
  return result;
}

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------

export const workspaceTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "workspace_list",
    description:
      "List the mod projects in the configured workspace (PZ_MCP_WORKSPACE_DIR, default <data>/workspaces). Each entry shows the project folder, whether it has a valid mod.info, and its absolute path — the cheap first call before workspace_inspect. No arguments. Example: {} → workspace_create scaffolds a new Build-42 project, workspace_inspect gives the full structured report.",
    inputSchema: WorkspaceListSchema,
    handler: async (_args, ctx) => {
      const projects = await ctx.workspaceManager.listProjects();
      return {
        content: [{ type: "text", text: formatWorkspaceProjects(projects) }],
        // structuredContent must be a record (MCP contract) — wrap the array.
        structuredContent: structuredClone({ projects }),
      };
    },
  },
  {
    name: "workspace_create",
    description:
      "Scaffold a new Build-42 Project Zomboid mod project (mod.info, workshop.txt, poster, common/ + versioned media/ tree). Existing files are never modified; dryRun previews the scaffold",
    inputSchema: WorkspaceCreateSchema,
    handler: async (args, ctx) => {
      const options: CreateProjectOptions = {
        modId: args.modId,
        version: args.version,
        buildVersion: args.buildVersion,
        template: args.template,
        requires: args.requires,
        includePoster: args.includePoster,
        overwrite: args.overwrite,
        dryRun: args.dryRun,
      };
      if (args.modName !== undefined) options.modName = args.modName;
      if (args.author !== undefined) options.author = args.author;
      if (args.description !== undefined)
        options.description = args.description;
      if (args.sampleItem) {
        try {
          options.sampleItemScript = await ctx.generator.generateScript(
            "item",
            `${args.modId}_StarterKit`,
            {
              DisplayName: args.modName || args.modId,
              Type: "Misc",
              Weight: 0.5,
              Icon: "BeefJerky",
              Category: "Junk",
            },
            "Base",
            { includeComments: true },
          );
        } catch (error) {
          throw new WorkspaceError(
            "IO",
            `Failed to generate sample item script: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }
      const result = await ctx.workspaceManager.createProject(
        args.name,
        options,
      );
      return {
        content: [{ type: "text", text: formatWorkspaceCreated(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_inspect",
    description:
      "Full structured inspection of a mod project: metadata, supported builds, dependencies, content types, file counts, and validation errors/warnings (reuses the same analysis engine as analyze_mod)",
    inputSchema: WorkspaceInspectSchema,
    handler: async (args, ctx) => {
      const result = await inspectProject(ctx, args.project, {
        checkDependencies: args.checkDependencies,
        includeFileList: args.includeFileList,
      });
      return {
        content: [{ type: "text", text: formatWorkspaceInspect(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
];
