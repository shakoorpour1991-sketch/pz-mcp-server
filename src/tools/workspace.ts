/**
 * Workspace tools: PZ mod workspace management via MCP.
 * 
 * Tools for creating, inspecting, and managing Project Zomboid mod projects.
 */

import type { z } from "zod";
import type { McpTool } from "./registry.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import {
  CreateModSchema,
  InspectModSchema,
  ListModFilesSchema,
  ReadModFileSchema,
  WriteModFileSchema,
  DeleteModFileSchema,
  RenameModFileSchema,
  ValidateModSchema,
  GetModDependenciesSchema,
  GetProjectStatusSchema,
} from "../schemas.js";
import { formatModStructure, formatValidationResult, formatProjectStatus } from "../utils/formatters.js";

export const workspaceTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "workspace_create_mod",
    description:
      "Create a new Project Zomboid mod project with proper B42/B41 structure including mod.info, directory layout, and placeholder files",
    inputSchema: CreateModSchema,
    handler: async (args, ctx) => {
      const {
        name,
        id,
        author,
        description,
        version,
        template,
        targetDir,
        createLuaFolder,
        createSoundFolder,
        createTexturesFolder,
      } = args;

      // Validate target directory
      let safeTargetDir: string;
      try {
        safeTargetDir = ctx.pathManager.validateInputPath(targetDir, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid targetDir: ${(err as Error).message}`,
        );
      }

      const result = await ctx.workspaceManager.createMod(
        {
          name,
          id: id || name.replace(/\s+/g, "_"),
          author,
          description,
          version,
          template,
          createLuaFolder,
          createSoundFolder,
          createTexturesFolder,
        },
        safeTargetDir,
      );

      if (!result.success) {
        throw new McpError(ErrorCode.InternalError, result.error || "Failed to create mod");
      }

      return {
        content: [
          {
            type: "text",
            text: `Successfully created mod '${name}' at ${result.path}\n\nStructure:\n- mod.info (metadata)\n- common/media/scripts/ (B42 structure)\n- README.md`,
          },
        ],
        structuredContent: {
          success: true,
          modPath: result.path,
          name,
          id: id || name.replace(/\s+/g, "_"),
        },
      };
    },
  },
  {
    name: "workspace_inspect_mod",
    description:
      "Inspect a mod's structure, returning detailed information about files, metadata, build versions, and content types",
    inputSchema: InspectModSchema,
    handler: async (args, ctx) => {
      const { modPath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const structure = await ctx.workspaceManager.inspectMod(safePath);

      return {
        content: [
          {
            type: "text",
            text: formatModStructure(structure),
          },
        ],
        structuredContent: structuredClone(structure),
      };
    },
  },
  {
    name: "workspace_list_files",
    description:
      "List all files in a mod directory with optional filtering by type (script, lua, asset, etc.) or pattern",
    inputSchema: ListModFilesSchema,
    handler: async (args, ctx) => {
      const { modPath, type, pattern } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const files = await ctx.workspaceManager.listFiles(safePath, {
        type: type !== "all" ? type : undefined,
        pattern: pattern || undefined,
      });

      const fileList = files
        .map((f) => `${f.relativePath} (${f.type}, ${(f.size / 1024).toFixed(2)} KB)`)
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text: `Found ${files.length} files in mod:\n\n${fileList || "(no files found)"}`,
          },
        ],
        structuredContent: {
          count: files.length,
          files: files.map((f) => ({
            path: f.relativePath,
            type: f.type,
            size: f.size,
            modified: f.modified.toISOString(),
          })),
        },
      };
    },
  },
  {
    name: "workspace_read_file",
    description:
      "Read the contents of a file from a mod directory. Path must be relative to mod root.",
    inputSchema: ReadModFileSchema,
    handler: async (args, ctx) => {
      const { modPath, filePath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const result = await ctx.workspaceManager.readFile(safePath, filePath);

      if (!result.success || !result.content) {
        throw new McpError(ErrorCode.InternalError, result.error || "Failed to read file");
      }

      return {
        content: [
          {
            type: "text",
            text: `Contents of ${filePath}:\n\n${result.content}`,
          },
        ],
        structuredContent: {
          success: true,
          path: result.path,
          content: result.content,
        },
      };
    },
  },
  {
    name: "workspace_write_file",
    description:
      "Write/create a file in a mod directory. Requires explicit overwrite flag for existing files. Creates backup if requested.",
    inputSchema: WriteModFileSchema,
    handler: async (args, ctx) => {
      const { modPath, filePath, content, overwrite, createBackup } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const result = await ctx.workspaceManager.writeFile(safePath, filePath, content, {
        overwrite,
        createBackup,
      });

      if (!result.success) {
        throw new McpError(ErrorCode.InternalError, result.error || "Failed to write file");
      }

      const backupMsg = result.backupPath ? `\nBackup created at: ${result.backupPath}` : "";

      return {
        content: [
          {
            type: "text",
            text: `Successfully wrote ${filePath}${backupMsg}`,
          },
        ],
        structuredContent: {
          success: true,
          path: result.path,
          backupPath: result.backupPath,
        },
      };
    },
  },
  {
    name: "workspace_delete_file",
    description:
      "Delete a file from a mod directory. Protects critical files like mod.info. Optional backup creation.",
    inputSchema: DeleteModFileSchema,
    handler: async (args, ctx) => {
      const { modPath, filePath, createBackup } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const result = await ctx.workspaceManager.deleteFile(safePath, filePath, {
        createBackup,
      });

      if (!result.success) {
        throw new McpError(ErrorCode.InternalError, result.error || "Failed to delete file");
      }

      const backupMsg = result.backupPath ? `\nBackup created at: ${result.backupPath}` : "";

      return {
        content: [
          {
            type: "text",
            text: `Successfully deleted ${filePath}${backupMsg}`,
          },
        ],
        structuredContent: {
          success: true,
          path: result.path,
          backupPath: result.backupPath,
        },
      };
    },
  },
  {
    name: "workspace_rename_file",
    description:
      "Rename/move a file within a mod directory. Both paths must be relative to mod root.",
    inputSchema: RenameModFileSchema,
    handler: async (args, ctx) => {
      const { modPath, oldPath, newPath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const result = await ctx.workspaceManager.renameFile(safePath, oldPath, newPath);

      if (!result.success) {
        throw new McpError(ErrorCode.InternalError, result.error || "Failed to rename file");
      }

      return {
        content: [
          {
            type: "text",
            text: `Successfully renamed ${oldPath} to ${newPath}`,
          },
        ],
        structuredContent: {
          success: true,
          oldPath,
          newPath: result.path,
        },
      };
    },
  },
  {
    name: "workspace_validate_mod",
    description:
      "Validate a mod's structure, checking for required files, proper metadata, and common issues",
    inputSchema: ValidateModSchema,
    handler: async (args, ctx) => {
      const { modPath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const validation = await ctx.workspaceManager.validateMod(safePath);

      return {
        content: [
          {
            type: "text",
            text: formatValidationResult(validation),
          },
        ],
        structuredContent: structuredClone(validation),
      };
    },
  },
  {
    name: "workspace_get_dependencies",
    description:
      "Extract and report mod dependencies from mod.info (require and incompatible lists)",
    inputSchema: GetModDependenciesSchema,
    handler: async (args, ctx) => {
      const { modPath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const dependencies = await ctx.workspaceManager.getDependencies(safePath);

      const requiredDeps = dependencies.filter((d) => d.required && !d.incompatible);
      const incompatibleMods = dependencies.filter((d) => d.incompatible);

      const lines: string[] = [];
      
      if (requiredDeps.length > 0) {
        lines.push("Required Dependencies:");
        for (const dep of requiredDeps) {
          lines.push(`  - ${dep.modId}`);
        }
        lines.push("");
      }

      if (incompatibleMods.length > 0) {
        lines.push("Incompatible Mods:");
        for (const dep of incompatibleMods) {
          lines.push(`  - ${dep.modId}`);
        }
        lines.push("");
      }

      if (dependencies.length === 0) {
        lines.push("No dependencies declared.");
      }

      return {
        content: [
          {
            type: "text",
            text: lines.join("\n"),
          },
        ],
        structuredContent: {
          count: dependencies.length,
          dependencies,
        },
      };
    },
  },
  {
    name: "workspace_get_status",
    description:
      "Get comprehensive project status including metadata, structure, validation, dependencies, and issues",
    inputSchema: GetProjectStatusSchema,
    handler: async (args, ctx) => {
      const { modPath } = args;

      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid modPath: ${(err as Error).message}`,
        );
      }

      const status = await ctx.workspaceManager.getProjectStatus(safePath);

      return {
        content: [
          {
            type: "text",
            text: formatProjectStatus(status),
          },
        ],
        structuredContent: structuredClone(status),
      };
    },
  },
];
