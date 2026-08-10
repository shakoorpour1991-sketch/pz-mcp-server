/**
 * Mod Generator tools (modgen_*) — beginner-friendly, data-driven mod
 * creation. Thin adapters over ModGenManager, which reuses the existing
 * ScriptGenerator, vanilla database, ValidationEngine and workspace.
 *
 * Flow: modgen_templates (pick a template) → modgen_generate (creates a
 * complete ready-to-ship mod folder + editable blueprint) → modgen_blueprint /
 * modgen_list (reopen) → modgen_regenerate (change stats/content, rewrite).
 */
import { z } from "zod";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import {
  ModgenBlueprintSchema,
  ModgenGenerateSchema,
  ModgenListSchema,
  ModgenRegenerateSchema,
  ModgenTemplatesSchema,
} from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatModgenBlueprint,
  formatModgenGenerate,
  formatModgenList,
  formatModgenTemplates,
} from "../utils/formatters.js";

export const modgenTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "modgen_templates",
    description:
      "List the Mod Generator templates (Simple Item, Melee Weapon, Food, Tool, Clothing) with every editable stat field, its range and hint, plus the vanilla-data sample each template auto-balances against",
    inputSchema: ModgenTemplatesSchema,
    handler: async (_args, ctx) => {
      const templates = ctx.modGenManager.listTemplates();
      // Enrich each template with the live vanilla baseline (null when the
      // game data hasn't been parsed yet).
      for (const t of templates) {
        const vanilla = await ctx.modGenManager.vanillaFor(
          t.id as Parameters<typeof ctx.modGenManager.vanillaFor>[0],
        );
        t.vanilla = vanilla;
      }
      return {
        content: [{ type: "text", text: formatModgenTemplates(templates) }],
        structuredContent: structuredClone({ templates }),
      };
    },
  },
  {
    name: "modgen_generate",
    description:
      "Generate a complete, ready-to-ship Project Zomboid mod folder from a template: mod.info, workshop.txt, poster, B42 media tree, item script, README and an editable blueprint. Unpinned stats are auto-balanced from real vanilla game data (or sensible defaults when the DB isn't parsed); pass stats to pin values, randomize to roll inside the vanilla range, dryRun to preview without creating anything",
    inputSchema: ModgenGenerateSchema,
    handler: async (args, ctx) => {
      const result = await ctx.modGenManager.generate(ctx, args);
      return {
        content: [{ type: "text", text: formatModgenGenerate(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "modgen_list",
    description:
      "List every mod previously generated with the Mod Generator (projects carrying a modgen.blueprint.json) with template, item and last-updated time",
    inputSchema: ModgenListSchema,
    handler: async (_args, ctx) => {
      const projects = await ctx.modGenManager.list(ctx);
      return {
        content: [{ type: "text", text: formatModgenList(projects) }],
        structuredContent: structuredClone({ projects }),
      };
    },
  },
  {
    name: "modgen_blueprint",
    description:
      "Reopen a generated mod's editable blueprint (stats, metadata, stats source) so its content can be reviewed or changed before regenerating",
    inputSchema: ModgenBlueprintSchema,
    handler: async (args, ctx) => {
      let blueprint;
      try {
        blueprint = await ctx.modGenManager.loadBlueprint(ctx, args.project);
      } catch (error) {
        throw new McpError(
          ErrorCode.InvalidRequest,
          `Not a Mod Generator project (no valid modgen.blueprint.json): ${args.project} — ${error instanceof Error ? error.message : String(error)}`,
        );
      }
      return {
        content: [
          {
            type: "text",
            text: formatModgenBlueprint(blueprint, args.project),
          },
        ],
        structuredContent: structuredClone(blueprint),
      };
    },
  },
  {
    name: "modgen_regenerate",
    description:
      "Rewrite a generated mod from its blueprint after editing: patch any stat (null resets it to auto), re-roll individual stats with randomize, or change the item/mod metadata — the script, mod.info, README and validation are all regenerated atomically",
    inputSchema: ModgenRegenerateSchema,
    handler: async (args, ctx) => {
      const result = await ctx.modGenManager.regenerate(ctx, args);
      return {
        content: [{ type: "text", text: formatModgenGenerate(result) }],
        structuredContent: structuredClone(result),
      };
    },
  },
];
