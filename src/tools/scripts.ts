/**
 * Script tools: generate, validate, check references, and export scripts.
 */
import type { z } from "zod";
import { join } from "path";
import { mkdir, writeFile, rename, rm, readFile } from "fs/promises";
import { randomUUID } from "crypto";
import {
  GenerateScriptSchema,
  ValidateScriptSchema,
  CheckReferencesSchema,
  ExportModScriptSchema,
} from "../schemas.js";
import type { GenerationOptions } from "../generators/ScriptGenerator.js";
import type { ScriptValidationOptions } from "../validation/ValidationEngine.js";
import type { McpTool } from "./registry.js";
import {
  formatReferenceResults,
  formatValidationResults,
} from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";

export const scriptTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "generate_script",
    description:
      "Generate a complete Project Zomboid script block (item, recipe, fixing, sound, evolvedrecipe, vehicle) from structured properties. Pass type, name, properties, and an optional module (default Base); balance: vanilla/powerful/weak scales the stats from vanilla game data, includeComments adds guidance. The reply carries the ready-to-paste script plus a structured copy. Example: {type: item, name: IronAxe, properties: {DisplayName: Iron Axe, Weight: 2, MaxDamage: 5}}. Pair with validate_script to check the result and export_mod_script to write it into a mod.",
    inputSchema: GenerateScriptSchema,
    handler: async (args, ctx) => {
      const { type, name, properties, module, balance, includeComments } = args;
      // Build options conditionally (exactOptionalPropertyTypes: absent, not undefined)
      const generationOptions: GenerationOptions = {};
      if (balance !== undefined) generationOptions.balance = balance;
      if (includeComments !== undefined)
        generationOptions.includeComments = includeComments;
      const script = await ctx.generator.generateScript(
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
    },
  },
  {
    name: "validate_script",
    description:
      "Validate Project Zomboid script syntax, structure and references with detailed error reporting — includes the ZedScripts knowledge-layer diagnostics (unknown parameters, wrong values/types, deprecations, required parameters, missing commas, malformed blocks, craftRecipe input/output issues) to catch AI-generated code that looks plausible but is invalid. Set zedScripts=false to skip the Build 42 knowledge layer when validating a legacy B41-only codebase. Pass filePath to validate a script on disk (diagnostics are then file-scoped and include the absolute path)",
    inputSchema: ValidateScriptSchema,
    handler: async (args, ctx) => {
      const { content, filePath, type, strict, zedScripts } = args;
      let script = content;
      if (filePath !== undefined) {
        let safePath: string;
        try {
          safePath = ctx.pathManager.validateInputPath(filePath, "file");
        } catch (err) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid filePath: ${(err as Error).message}`,
          );
        }
        script = await readFile(safePath, "utf-8");
      }
      const options: ScriptValidationOptions = {};
      if (filePath !== undefined) options.filePath = filePath;
      if (zedScripts !== undefined) options.zedScripts = zedScripts;
      const validation = await ctx.validator.validateScript(
        script ?? "",
        type,
        strict,
        options,
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
    },
  },
  {
    name: "check_references",
    description:
      "Check a list of Project Zomboid references (item, sound, or sprite ids) against the parsed game database. Each reference is classified defined / referenced-only / missing, with Did-you-mean suggestions for typos. Use it after generate_script or export_mod_script to catch references that don't resolve — the exact anti-hallucination gate for AI-generated scripts. Example: {references: [Base.Nails, Base.Nailz], type: item}.",
    inputSchema: CheckReferencesSchema,
    handler: async (args, ctx) => {
      const { references, type } = args;
      const results = await ctx.validator.checkReferences(references, type);

      return {
        content: [
          {
            type: "text",
            text: formatReferenceResults(results),
          },
        ],
        structuredContent: { results: structuredClone(results) },
      };
    },
  },
  {
    name: "export_mod_script",
    description:
      "Generate a script and (optionally) write it into a mod's media/scripts folder (overwrites an existing file of the same name). Dry-run by default — no disk changes unless dryRun=false",
    inputSchema: ExportModScriptSchema,
    handler: async (args, ctx) => {
      const {
        modPath,
        type,
        name,
        properties,
        module,
        balance,
        includeComments,
        dryRun,
      } = args;
      let safePath: string;
      try {
        safePath = ctx.pathManager.validateInputPath(modPath, "dir");
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
      const script = await ctx.generator.generateScript(
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
        const verdict = await ctx.pathManager.isAncestorWritable(scriptsDir);
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
      // Atomic write (temp + rename): a crash or failed write can never leave
      // a truncated half-file in the mod's scripts folder (same guarantee the
      // workspace_* tools provide). The random suffix keeps interleaved calls
      // for the same script name from racing on one temp path.
      const tmpPath = join(
        scriptsDir,
        `.${safeName}.txt.tmp-${process.pid}-${randomUUID()}`,
      );
      try {
        await writeFile(tmpPath, script, "utf-8");
        await rename(tmpPath, targetPath);
      } catch (err) {
        await rm(tmpPath, { force: true }).catch(() => {});
        throw err;
      }
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
    },
  },
];
