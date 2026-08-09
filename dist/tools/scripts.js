import { join } from "path";
import { mkdir, writeFile } from "fs/promises";
import { GenerateScriptSchema, ValidateScriptSchema, CheckReferencesSchema, ExportModScriptSchema, } from "../schemas.js";
import { formatReferenceResults, formatValidationResults, } from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
export const scriptTools = [
    {
        name: "generate_script",
        description: "Generate balanced Project Zomboid scripts using templates and game data patterns",
        inputSchema: GenerateScriptSchema,
        handler: async (args, ctx) => {
            const { type, name, properties, module, balance, includeComments } = args;
            // Build options conditionally (exactOptionalPropertyTypes: absent, not undefined)
            const generationOptions = {};
            if (balance !== undefined)
                generationOptions.balance = balance;
            if (includeComments !== undefined)
                generationOptions.includeComments = includeComments;
            const script = await ctx.generator.generateScript(type, name, properties, module, generationOptions);
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
        description: "Validate Project Zomboid script syntax and references with detailed error reporting",
        inputSchema: ValidateScriptSchema,
        handler: async (args, ctx) => {
            const { content, type, strict } = args;
            const validation = await ctx.validator.validateScript(content, type, strict);
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
        description: "Validate item, sound, and sprite references against game database",
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
        description: "Generate a script and (optionally) write it into a mod's media/scripts folder (overwrites an existing file of the same name). Dry-run by default — no disk changes unless dryRun=false",
        inputSchema: ExportModScriptSchema,
        handler: async (args, ctx) => {
            const { modPath, type, name, properties, module, balance, includeComments, dryRun, } = args;
            let safePath;
            try {
                safePath = ctx.pathManager.validateInputPath(modPath, "dir");
            }
            catch (err) {
                throw new McpError(ErrorCode.InvalidParams, `Invalid modPath: ${err.message}`);
            }
            const generationOptions = {};
            if (balance !== undefined)
                generationOptions.balance = balance;
            if (includeComments !== undefined)
                generationOptions.includeComments = includeComments;
            const script = await ctx.generator.generateScript(type, name, properties, module, generationOptions);
            // The filename derives from the (sanitized) script name and is written
            // only under <modPath>/media/scripts — no traversal is possible.
            const safeName = name
                .replace(/[^A-Za-z0-9_.-]+/g, "_")
                .replace(/^\.+/, "");
            if (!safeName) {
                throw new McpError(ErrorCode.InvalidParams, "Script name must contain at least one valid character");
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
        },
    },
];
//# sourceMappingURL=scripts.js.map