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
import { readdir } from "fs/promises";
import { join } from "path";
import { z } from "zod";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import {
  WorkspaceCreateSchema,
  WorkspaceDeleteFileSchema,
  WorkspaceInspectSchema,
  WorkspaceListFilesSchema,
  WorkspaceListSchema,
  WorkspacePatchFileSchema,
  WorkspaceReadFileSchema,
  WorkspaceRenameFileSchema,
  WorkspaceStatusSchema,
  WorkspaceValidateSchema,
  WorkspaceWriteFileSchema,
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
  formatWorkspaceFileDelete,
  formatWorkspaceFileList,
  formatWorkspaceFilePatch,
  formatWorkspaceFileRead,
  formatWorkspaceFileRename,
  formatWorkspaceFileWrite,
  formatWorkspaceInspect,
  formatWorkspaceProjects,
  formatWorkspaceStatus,
  formatWorkspaceValidate,
} from "../utils/formatters.js";

// ---------------------------------------------------------------------------
// Shared result shapes
// ---------------------------------------------------------------------------

export interface WorkspaceInspectResult {
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

export interface WorkspaceStatusResult {
  project: string;
  path: string;
  modId?: string;
  modName?: string;
  version?: string;
  description?: string;
  supportedBuilds: string[];
  fileCount: number;
  scriptCount: number;
  luaCount: number;
  contentTypes: string[];
  hasModInfo: boolean;
  ok: boolean;
}

export interface WorkspaceValidateResult {
  project: string;
  path: string;
  valid: boolean;
  modId?: string;
  modName?: string;
  version?: string;
  supportedBuilds: string[];
  dependencies: { listed: string[]; missing: string[] };
  errors: Array<{ code: string; message: string; path?: string }>;
  warnings: Array<{ code: string; message: string; path?: string }>;
  info: Array<{ code: string; message: string; path?: string }>;
}

// ---------------------------------------------------------------------------
// Helpers (exported so unit tests can drive them with a mocked context)
// ---------------------------------------------------------------------------

/** Absolute path of a project folder (WorkspaceError flows to the dispatcher's
 * single error mapper — see utils/mcpErrors.ts). */
export function resolveProjectAbs(
  workspaceManager: WorkspaceManager,
  project: string,
): string {
  const { abs } = workspaceManager.resolve(project);
  return abs;
}

/** First mod.info candidate: root or a numeric version folder at the root. */
export async function findModInfoPath(
  abs: string,
): Promise<string | undefined> {
  const candidates = [join(abs, "mod.info"), join(abs, "42", "mod.info")];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  try {
    const entries = await readdir(abs, { withFileTypes: true });
    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        /^\d+(\.\d+)*$/.test(entry.name) &&
        existsSync(join(abs, entry.name, "mod.info"))
      ) {
        return join(abs, entry.name, "mod.info");
      }
    }
  } catch {
    // unreadable project root — fall through
  }
  return undefined;
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

/**
 * Lightweight project status: metadata + counts + content types. Fast — does
 * not parse scripts or run balance/compatibility analysis.
 */
export async function statusProject(
  ctx: ToolContext,
  project: string,
): Promise<WorkspaceStatusResult> {
  const abs = resolveProjectAbs(ctx.workspaceManager, project);
  if (!existsSync(abs)) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Workspace NOT_FOUND: project does not exist: ${project}`,
    );
  }
  const modInfoPath = await findModInfoPath(abs);
  const modInfo = modInfoPath
    ? ctx.parser.parseModInfo(modInfoPath)
    : undefined;

  const files = await ctx.workspaceManager.listFiles(project, {});
  let scriptCount = 0;
  let luaCount = 0;
  for (const f of files) {
    if (f.type !== "file") continue;
    if (/\/scripts\/.+\.txt$/.test(f.path)) scriptCount++;
    else if (/\/lua\/.+\.lua$/.test(f.path)) luaCount++;
  }
  const contentTypes = await ctx.workspaceManager.detectContentTypes(abs);
  const hasModInfo = modInfoPath !== undefined;
  const hasContent = scriptCount > 0 || luaCount > 0;

  const builds = new Set<string>();
  for (const f of files) {
    const segment = f.path.split("/")[1]; // <project>/<build>/…
    if (segment !== undefined && /^\d+(\.\d+)*$/.test(segment)) {
      builds.add(segment);
    }
  }

  const result: WorkspaceStatusResult = {
    project,
    path: abs,
    supportedBuilds: [...builds],
    fileCount: files.filter((f) => f.type === "file").length,
    scriptCount,
    luaCount,
    contentTypes,
    hasModInfo,
    ok: hasModInfo && hasContent,
  };
  if (modInfo?.id !== undefined) result.modId = modInfo.id;
  if (modInfo?.name !== undefined) result.modName = modInfo.name;
  if (modInfo?.version !== undefined) result.version = modInfo.version;
  if (modInfo?.description !== undefined)
    result.description = modInfo.description;
  return result;
}

/**
 * Structure + metadata validation without the full analysis pass: mod.info
 * presence/well-formedness (including duplicate keys and required fields),
 * B42 layout requirements (common/, version folder, content), and dependency
 * resolution against known mods in the DB.
 */
export async function validateProject(
  ctx: ToolContext,
  project: string,
): Promise<WorkspaceValidateResult> {
  const abs = resolveProjectAbs(ctx.workspaceManager, project);
  if (!existsSync(abs)) {
    throw new McpError(
      ErrorCode.InvalidRequest,
      `Workspace NOT_FOUND: project does not exist: ${project}`,
    );
  }
  const errors: WorkspaceValidateResult["errors"] = [];
  const warnings: WorkspaceValidateResult["warnings"] = [];
  const info: WorkspaceValidateResult["info"] = [];

  const modInfoPath = await findModInfoPath(abs);
  let modId: string | undefined;
  let modName: string | undefined;
  let version: string | undefined;
  const modInfo = modInfoPath
    ? ctx.parser.parseModInfo(modInfoPath)
    : undefined;

  if (!modInfoPath) {
    errors.push({
      code: "MISSING_MOD_INFO",
      message: "No mod.info found (checked project root and version folders)",
    });
  } else {
    // modInfoPath is set ⇒ modInfo was parsed; the alias narrows it for TS.
    const parsed = modInfo!;
    if (parsed.id !== undefined) modId = parsed.id;
    if (parsed.name !== undefined) modName = parsed.name;
    if (parsed.version !== undefined) version = parsed.version;

    if (!modId) {
      errors.push({
        code: "MISSING_MOD_ID",
        message: "mod.info is missing the required id= field",
      });
    }
    if (!modName) {
      errors.push({
        code: "MISSING_MOD_NAME",
        message: "mod.info is missing the required name= field",
      });
    }

    // Malformed metadata: duplicate keys are a real source of load errors.
    try {
      const relModInfo = modInfoPath.slice(abs.length + 1).replace(/\\/g, "/");
      const raw = await ctx.workspaceManager.readFile(
        `${project}/${relModInfo}`,
      );
      const seen = new Map<string, number>();
      for (const line of raw.content.split("\n")) {
        const m = /^(\w+)\s*=/.exec(line.trim());
        if (m)
          seen.set(m[1].toLowerCase(), (seen.get(m[1].toLowerCase()) ?? 0) + 1);
      }
      for (const [key, count] of seen) {
        if (count > 1) {
          errors.push({
            code: "DUPLICATE_KEY",
            message: `mod.info defines '${key}' ${count} times — only the last is used`,
          });
        }
      }
    } catch {
      // unreadable mod.info — parseModInfo already surfaced the metadata
    }
  }

  // B42 layout requirements.
  const hasCommon = existsSync(join(abs, "common"));
  if (!hasCommon) {
    errors.push({
      code: "MISSING_COMMON_DIR",
      message: "Build 42 requires a common/ folder (mandatory, even if empty)",
    });
  }
  let entries: Array<{ name: string; isDir: boolean }> = [];
  try {
    entries = (await readdir(abs, { withFileTypes: true })).map((e) => ({
      name: e.name,
      isDir: e.isDirectory(),
    }));
  } catch {
    // unreadable root
  }
  const versionDirs = entries
    .filter((e) => e.isDir && /^\d+(\.\d+)*$/.test(e.name))
    .map((e) => e.name);
  if (versionDirs.length === 0) {
    errors.push({
      code: "MISSING_VERSION_DIR",
      message:
        "No Build-42 version folder (e.g. 42/) found at the project root",
    });
  }

  const contentTypes = await ctx.workspaceManager.detectContentTypes(abs);
  const hasContent =
    contentTypes.includes("scripts") || contentTypes.includes("lua");
  if (!hasContent) {
    warnings.push({
      code: "NO_CONTENT",
      message: "No scripts/ or lua/ content found under any media/ folder",
    });
  }
  if (modInfoPath && !existsSync(join(abs, "poster.png"))) {
    warnings.push({
      code: "MISSING_POSTER",
      message:
        "poster.png not found at the project root (shown in the mod list)",
    });
  }
  info.push({
    code: "CONTENT_TYPES",
    message: `Detected: ${contentTypes.join(", ") || "none"}`,
  });

  // Dependencies: resolve require= ids against known mods in the DB.
  const listed = modInfo?.require ?? [];
  const missing: string[] = [];
  for (const dep of listed) {
    const known = await ctx.dbManager.modExists(dep).catch(() => false);
    if (!known) missing.push(dep);
  }

  return {
    project,
    path: abs,
    valid: errors.length === 0,
    supportedBuilds: versionDirs,
    dependencies: { listed, missing },
    errors,
    warnings,
    info,
    ...(modId !== undefined ? { modId } : {}),
    ...(modName !== undefined ? { modName } : {}),
    ...(version !== undefined ? { version } : {}),
  };
}

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------

export const workspaceTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "workspace_list",
    description:
      "List mod projects in the workspace (PZ_MCP_WORKSPACE_DIR, default <data>/workspaces) with their mod.info presence",
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
  {
    name: "workspace_status",
    description:
      "Fast project status: metadata, file/script/lua counts, content types, and a single ok/needs-work verdict (no script parsing)",
    inputSchema: WorkspaceStatusSchema,
    handler: async (args, ctx) => {
      const result = await statusProject(ctx, args.project);
      return {
        content: [{ type: "text", text: formatWorkspaceStatus(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_validate",
    description:
      "Validate a mod project's structure and metadata: mod.info presence/well-formedness (missing id/name, duplicate keys), B42 layout (common/, version folder, content), and dependency resolution",
    inputSchema: WorkspaceValidateSchema,
    handler: async (args, ctx) => {
      const result = await validateProject(ctx, args.project);
      return {
        content: [{ type: "text", text: formatWorkspaceValidate(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_list_files",
    description:
      "Recursively list files and directories inside a project (workspace-relative, root-confined)",
    inputSchema: WorkspaceListFilesSchema,
    handler: async (args, ctx) => {
      const rel = args.path ? `${args.project}/${args.path}` : args.project;
      const entries = await ctx.workspaceManager.listFiles(rel, {
        recursive: args.recursive,
        maxDepth: args.maxDepth,
        maxEntries: args.maxEntries,
      });
      return {
        content: [
          { type: "text", text: formatWorkspaceFileList(entries, rel) },
        ],
        // structuredContent must be a record (MCP contract) — wrap the array.
        structuredContent: structuredClone({ path: rel, entries }),
      };
    },
  },
  {
    name: "workspace_read_file",
    description:
      "Read a text file from a project (workspace-relative path, root-confined)",
    inputSchema: WorkspaceReadFileSchema,
    handler: async (args, ctx) => {
      const result = await ctx.workspaceManager.readFile(
        `${args.project}/${args.path}`,
      );
      return {
        content: [{ type: "text", text: formatWorkspaceFileRead(result) }],
        structuredContent: structuredClone({
          path: result.path,
          size: result.size,
          content: result.content,
        }),
      };
    },
  },
  {
    name: "workspace_write_file",
    description:
      "Write or create a file in a project (atomic temp+rename; refuses to overwrite unless overwrite:true; dryRun previews)",
    inputSchema: WorkspaceWriteFileSchema,
    handler: async (args, ctx) => {
      const result = await ctx.workspaceManager.writeFile(
        `${args.project}/${args.path}`,
        args.content,
        { overwrite: args.overwrite, dryRun: args.dryRun },
      );
      return {
        content: [{ type: "text", text: formatWorkspaceFileWrite(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_patch_file",
    description:
      "Safely patch a project file with context-matched replacements — every patch must match or nothing is written (atomic)",
    inputSchema: WorkspacePatchFileSchema,
    handler: async (args, ctx) => {
      const result = await ctx.workspaceManager.patchFile(
        `${args.project}/${args.path}`,
        args.patches,
      );
      return {
        content: [{ type: "text", text: formatWorkspaceFilePatch(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_delete_file",
    description:
      "Delete a file or directory inside a project — requires force:true (explicit intent) and recursive:true for non-empty dirs; dryRun previews by default",
    inputSchema: WorkspaceDeleteFileSchema,
    handler: async (args, ctx) => {
      const result = await ctx.workspaceManager.delete(
        `${args.project}/${args.path}`,
        { force: args.force, recursive: args.recursive, dryRun: args.dryRun },
      );
      return {
        content: [{ type: "text", text: formatWorkspaceFileDelete(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "workspace_rename_file",
    description:
      "Rename or move a file/dir inside a project (root-confined; target must not exist unless overwrite:true)",
    inputSchema: WorkspaceRenameFileSchema,
    handler: async (args, ctx) => {
      const result = await ctx.workspaceManager.rename(
        `${args.project}/${args.from}`,
        `${args.project}/${args.to}`,
        { overwrite: args.overwrite },
      );
      return {
        content: [{ type: "text", text: formatWorkspaceFileRename(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
];
