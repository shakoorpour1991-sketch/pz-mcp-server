/**
 * Game-path detection + mod installer tools.
 *
 * detect_pz_paths — smart, cross-platform detection of the Project Zomboid
 * game install, user-data dir, mods dir and Steam workshop dir (Steam
 * registry + libraryfolders.vdf + common paths + <home>/Zomboid, on Windows /
 * Linux / macOS).
 *
 * install_mod — "super smart" installer: accepts a .zip archive or a mod
 * folder (AI clients pass a local path; the Control Deck uploads drag&drop /
 * browsed files to the bridge first), finds every mod inside (packs, B42
 * versioned folders, flat zips), detects conflicts by folder name AND mod.info
 * id, and copies into the mods dir — never overwriting unless asked.
 */
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import type { z } from "zod";
import { DetectPzPathsSchema, InstallModSchema } from "../schemas.js";
import { formatDetectPaths, formatInstallResult } from "../utils/formatters.js";
import { ModInstallError } from "../modinstall/ModInstaller.js";
import type { McpTool } from "./registry.js";

function toInstallMcpError(error: unknown): McpError {
  if (error instanceof ModInstallError) {
    const code =
      error.code === "invalid-source" ||
      error.code === "source-inside-target" ||
      error.code === "invalid-zip"
        ? ErrorCode.InvalidParams
        : error.code === "target-not-writable"
          ? ErrorCode.InternalError
          : ErrorCode.InvalidRequest;
    return new McpError(code, error.message);
  }
  return new McpError(
    ErrorCode.InternalError,
    `Mod install failed: ${error instanceof Error ? error.message : String(error)}`,
  );
}

export const installerTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "detect_pz_paths",
    description:
      "Smart cross-platform detection of Project Zomboid paths: game install (env → Steam registry → Steam libraryfolders.vdf → common paths), user-data dir, mods dir (<home>/Zomboid/mods, PZ_MODS_DIR override) and Steam Workshop dir (AppID 108600)",
    inputSchema: DetectPzPathsSchema,
    handler: async (_args, ctx) => {
      const result = await ctx.pathManager.detectAllPaths();
      return {
        content: [{ type: "text", text: formatDetectPaths(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "install_mod",
    description:
      "Install a Project Zomboid mod into the mods directory from a .zip archive or a mod folder. Detects every mod inside (single mods, B42 versioned folders, multi-mod packs, flat zips), refuses unsafe archives, detects conflicts by folder name and mod.info id, and never overwrites unless overwrite:true. dryRun previews the plan with no disk changes",
    inputSchema: InstallModSchema,
    handler: async (args, ctx) => {
      // Source: absolute path to a zip or a mod folder (existence-checked).
      let sourcePath: string;
      try {
        sourcePath = ctx.pathManager.validateInputPath(args.source, "file");
      } catch (error) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid source: ${error instanceof Error ? error.message : String(error)}`,
        );
      }

      // Target: explicit (may not exist yet — the installer creates it and
      // validates absolute/traversal-free paths itself) or the detected mods
      // dir (PZ_MODS_DIR or <home>/Zomboid/mods, also created on install).
      let result;
      try {
        result = await ctx.modInstaller.install(sourcePath, {
          ...(args.targetDir !== undefined
            ? { targetDir: args.targetDir }
            : {}),
          overwrite: args.overwrite,
          dryRun: args.dryRun,
        });
      } catch (error) {
        throw toInstallMcpError(error);
      }

      return {
        content: [{ type: "text", text: formatInstallResult(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
];
