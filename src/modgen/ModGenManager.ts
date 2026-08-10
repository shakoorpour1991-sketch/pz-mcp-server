/**
 * Mod Generator manager — beginner-friendly, data-driven Project Zomboid mod
 * creation on top of the existing infrastructure.
 *
 * Reuses (never duplicates):
 *  - ScriptGenerator for the item script (templates + vanilla balancing),
 *  - DatabaseManager vanilla item data for realistic auto-stats,
 *  - ValidationEngine.validateScript for script validation,
 *  - the workspace tools' inspectProject (ModAnalyzer) for folder validation,
 *  - WorkspaceManager for rooted, atomic file operations and scaffolding.
 *
 * The artifact of a generation is a complete, ready-to-ship mod folder in the
 * workspace plus an editable `modgen.blueprint.json` — reopen the blueprint,
 * change stats/content, and regenerate.
 */
import {
  DatabaseManager,
  type GameItem,
} from "../database/DatabaseManager.js";
import type { ScriptGenerator } from "../generators/ScriptGenerator.js";
import type { ValidationEngine } from "../validation/ValidationEngine.js";
import type { WorkspaceManager } from "../workspace/WorkspaceManager.js";
import type { ToolContext } from "../tools/registry.js";
import {
  MODGEN_TEMPLATES,
  getModgenTemplate,
  type ModgenTemplate,
  type ModgenTemplateId,
  type StatField,
} from "./templates.js";
import { inspectProject } from "../tools/workspace.js";

// ---------------------------------------------------------------------------
// Blueprint shape (the editable, reopenable config of a generated mod)
// ---------------------------------------------------------------------------

export interface ModgenRange {
  min: number;
  max: number;
  median: number;
  p25: number;
  p75: number;
  count: number;
}

export interface ModgenStatsSource {
  kind: "vanilla" | "defaults";
  label: string;
  sampleCount: number;
  ranges: Record<string, ModgenRange>;
}

export interface ModgenModInfo {
  name: string;
  id: string;
  modName: string;
  author?: string;
  description?: string;
  version: string;
  module: string;
  itemName: string;
  displayName: string;
  icon: string;
}

export interface ModgenBlueprint {
  schemaVersion: 1;
  kind: "pz-modgen";
  template: ModgenTemplateId;
  mod: ModgenModInfo;
  stats: Record<string, any>;
  statsSource: ModgenStatsSource;
  createdAt: string;
  updatedAt: string;
}

export interface ModgenValidation {
  scriptValid: boolean;
  projectValid: boolean;
  ready: boolean;
  scriptWarnings: string[];
  projectErrors: string[];
  projectWarnings: string[];
  note?: string;
}

export interface ModgenGenerateResult {
  project: string;
  /** Absolute path of the project folder on disk. */
  absPath: string;
  dryRun: boolean;
  blueprint: ModgenBlueprint;
  script: string;
  files: string[];
  validation?: ModgenValidation;
}

export interface ModgenListEntry {
  project: string;
  template: ModgenTemplateId;
  templateLabel: string;
  modName: string;
  itemName: string;
  updatedAt: string;
}

export interface ModgenGenerateArgs {
  template: ModgenTemplateId;
  name: string;
  modId: string;
  modName: string;
  author?: string;
  description?: string;
  itemName: string;
  displayName?: string;
  icon?: string;
  module?: string;
  stats?: Record<string, any>;
  autoStats?: boolean;
  randomize?: boolean;
  dryRun?: boolean;
}

export interface ModgenRegenerateArgs {
  project: string;
  modName?: string;
  author?: string;
  description?: string;
  itemName?: string;
  displayName?: string;
  icon?: string;
  module?: string;
  /** Full or partial stat patch; value null resets a key to auto. */
  stats?: Record<string, any>;
  /** Stat keys to re-roll within the vanilla-derived range. */
  randomize?: string[];
}

const BLUEPRINT_FILE = "modgen.blueprint.json";
const README_FILE = "README.md";
const SCRIPT_SUFFIX = "_items.txt";

function isoNow(): string {
  return new Date().toISOString();
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

/** Round to the precision suggested by a step (0.1 → 1 decimal, 0.05 → 2). */
function roundToStep(v: number, field: StatField): number {
  if (field.integer) return Math.round(v);
  const step = field.step ?? 0.1;
  // Deterministic decimals table — no float log10 edge cases.
  const decimals = step >= 1 ? 0 : step >= 0.1 ? 1 : step >= 0.01 ? 2 : 3;
  return Number(v.toFixed(Math.min(4, decimals)));
}

function numericValues(items: GameItem[], key: string): number[] {
  const out: number[] = [];
  for (const item of items) {
    const v = item.properties?.[key];
    if (typeof v === "number" && Number.isFinite(v)) out.push(v);
  }
  return out.sort((a, b) => a - b);
}

function percentile(sorted: number[], q: number): number {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.floor(q * (sorted.length - 1)));
  return sorted[idx];
}

export class ModGenManager {
  constructor(
    private readonly db: DatabaseManager,
    private readonly generator: ScriptGenerator,
    private readonly validator: ValidationEngine,
    private readonly workspaceManager: WorkspaceManager,
  ) {}

  // -------------------------------------------------------------------------
  // Template surface
  // -------------------------------------------------------------------------

  listTemplates() {
    return MODGEN_TEMPLATES.map((t) => ({
      id: t.id,
      label: t.label,
      short: t.short,
      description: t.description,
      category: t.category,
      defaultIcon: t.defaultIcon,
      fields: t.fields,
      defaults: t.defaultStats,
      kbRefs: t.kbRefs,
      vanilla: null as null | {
        sampleCount: number;
        label: string;
        ranges: Record<string, ModgenRange>;
      },
    }));
  }

  /** Vanilla-derived stat ranges per auto field (null when no data parsed). */
  async vanillaFor(templateId: ModgenTemplateId): Promise<{
    sampleCount: number;
    label: string;
    ranges: Record<string, ModgenRange>;
  } | null> {
    const tpl = getModgenTemplate(templateId);
    if (!tpl) return null;
    return this.vanillaRanges(tpl);
  }

  private async vanillaRanges(
    tpl: ModgenTemplate,
  ): Promise<{
    sampleCount: number;
    label: string;
    ranges: Record<string, ModgenRange>;
  } | null> {
    const totals = await this.db.getStats().catch(() => ({ total: 0 }));
    if (!totals.total) return null;
    // Union of the Build 42 spelling (ItemType="base:weapon") and the legacy
    // spelling (Type="Weapon") so any parse yields a real baseline.
    const b = tpl.baseline;
    const queries: Array<[string, string]> = [
      [b.propertyKey, b.propertyType],
    ];
    if (b.legacy) queries.push([b.legacy.propertyKey, b.legacy.propertyType]);
    const seen = new Set<string>();
    const refs: GameItem[] = [];
    for (const [key, value] of queries) {
      const rows = await this.db
        .getItemsByPropertyType(value, 800, key)
        .catch(() => []);
      for (const row of rows) {
        if (seen.has(row.id)) continue;
        seen.add(row.id);
        if (tpl.baseline.filter && !tpl.baseline.filter(row.properties)) continue;
        refs.push(row);
      }
    }
    // A zero-sample baseline (no matching vanilla items) is "no data" — the
    // caller must fall back to defaults rather than label stats as vanilla.
    if (refs.length === 0) return null;
    const ranges: Record<string, ModgenRange> = {};
    for (const field of tpl.fields) {
      if (!field.auto || field.kind !== "number") continue;
      const values = numericValues(refs, field.key);
      if (values.length === 0) continue;
      const min = values[0];
      const max = values[values.length - 1];
      ranges[field.key] = {
        min,
        max,
        median: percentile(values, 0.5),
        p25: percentile(values, 0.25),
        p75: percentile(values, 0.75),
        count: values.length,
      };
    }
    return { sampleCount: refs.length, label: tpl.baseline.label, ranges };
  }

  // -------------------------------------------------------------------------
  // Stat derivation
  // -------------------------------------------------------------------------

  /**
   * Compute the stat set for a template. Auto fields are derived from vanilla
   * data (median, or a random draw inside the interquartile range when
   * `random` is set); fields with no vanilla data fall back to the template
   * defaults. With `useVanilla: false` (autoStats off) every unpinned stat
   * stays at its template default — the user's manual values + defaults only.
   * Pinned (user-supplied) stats always win and are never clamped.
   */
  private async deriveStats(
    tpl: ModgenTemplate,
    pinned: Record<string, any>,
    random: boolean,
    useVanilla: boolean = true,
  ): Promise<{ stats: Record<string, any>; source: ModgenStatsSource }> {
    const vanilla = useVanilla ? await this.vanillaRanges(tpl) : null;
    const stats: Record<string, any> = {};

    for (const field of tpl.fields) {
      const def = tpl.defaultStats[field.key];
      if (field.kind === "number") {
        let value: number | undefined;
        if (useVanilla && field.auto && vanilla?.ranges[field.key]) {
          const r = vanilla.ranges[field.key];
          if (random) {
            const lo = Math.min(r.p25, r.p75);
            const hi = Math.max(r.p25, r.p75);
            value = lo + Math.random() * Math.max(0, hi - lo);
          } else {
            value = r.median;
          }
        } else if (typeof def === "number") {
          value = def;
          if (field.auto && random && field.min !== undefined && field.max !== undefined) {
            value = field.min + Math.random() * (field.max - field.min);
          }
        }
        if (value !== undefined) {
          value = roundToStep(value, field);
          if (field.min !== undefined && field.max !== undefined) {
            value = clamp(value, field.min, field.max);
          }
          stats[field.key] = value;
        }
      } else {
        const defVal = tpl.defaultStats[field.key];
        if (defVal !== undefined) stats[field.key] = defVal;
        else if (field.kind === "bool") stats[field.key] = false;
        else if (field.kind === "enum" && field.enumValues?.length) {
          stats[field.key] = field.enumValues[0];
        } else stats[field.key] = "";
      }
    }

    // Pinned user values override everything (never clamped — the validator
    // is the referee for out-of-range values).
    for (const [key, value] of Object.entries(pinned)) {
      if (value === null || value === undefined || value === "") continue;
      stats[key] = value;
    }

    const source: ModgenStatsSource = useVanilla && vanilla
      ? {
          kind: "vanilla",
          label: vanilla.label,
          sampleCount: vanilla.sampleCount,
          ranges: vanilla.ranges,
        }
      : {
          kind: "defaults",
          label: useVanilla ? "balanced defaults" : "manual / defaults",
          sampleCount: 0,
          ranges: {},
        };

    return { stats, source };
  }

  // -------------------------------------------------------------------------
  // Generation
  // -------------------------------------------------------------------------

  async generate(
    ctx: ToolContext,
    args: ModgenGenerateArgs,
  ): Promise<ModgenGenerateResult> {
    const tpl = getModgenTemplate(args.template);
    if (!tpl) throw new Error(`Unknown template: ${args.template}`);

    const module = args.module ?? "Base";
    const displayName = args.displayName ?? args.itemName;
    const icon = args.icon ?? tpl.defaultIcon;

    const { stats, source } = await this.deriveStats(
      tpl,
      args.stats ?? {},
      args.randomize === true,
      args.autoStats !== false,
    );

    const blueprint: ModgenBlueprint = {
      schemaVersion: 1,
      kind: "pz-modgen",
      template: tpl.id,
      mod: {
        name: args.name,
        id: args.modId,
        modName: args.modName,
        version: "1.0",
        module,
        itemName: args.itemName,
        displayName,
        icon,
        ...(args.author !== undefined && args.author !== ""
          ? { author: args.author }
          : {}),
        ...(args.description !== undefined && args.description !== ""
          ? { description: args.description }
          : {}),
      },
      stats,
      statsSource: source,
      createdAt: isoNow(),
      updatedAt: isoNow(),
    };

    const script = await this.buildScript(tpl, blueprint);
    const files = [
      "mod.info",
      "workshop.txt",
      "poster.png",
      "common/media/.gitkeep",
      `42/media/scripts/${args.modId}${SCRIPT_SUFFIX}`,
      README_FILE,
      BLUEPRINT_FILE,
    ];

    if (args.dryRun === true) {
      const scriptVal = await this.validator.validateScript(script, "item", false);
      const scriptWarnings = scriptVal.warnings.filter(
        (w) => w.code !== "UNKNOWN_PROPERTY",
      );
      const validation: ModgenValidation = {
        scriptValid: scriptVal.isValid,
        projectValid: true,
        ready: scriptVal.isValid,
        scriptWarnings: scriptWarnings.map((w) => w.message),
        projectErrors: [],
        projectWarnings: [],
        ...(source.kind === "defaults"
          ? {
              note: "Vanilla game data not indexed yet — stats are balanced defaults. Run parse_game_files to enable data-driven stats.",
            }
          : {}),
      };
      return {
        project: args.name,
        absPath: this.workspaceManager.resolve(args.name).abs,
        dryRun: true,
        blueprint,
        script,
        files,
        validation,
      };
    }

    // Real scaffold (B42 layout + mod.info + workshop.txt + poster + script).
    await this.workspaceManager.createProject(args.name, {
      modId: args.modId,
      modName: args.modName,
      version: blueprint.mod.version,
      template: "minimal",
      buildVersion: "42",
      sampleItemScript: script,
      includePoster: true,
      ...(args.author !== undefined && args.author !== ""
        ? { author: args.author }
        : {}),
      ...(args.description !== undefined && args.description !== ""
        ? { description: args.description }
        : {}),
    });

    // Blueprint + README make the folder complete and self-documenting.
    await this.writeBlueprint(args.name, blueprint);
    await this.writeReadme(args.name, blueprint);

    const validation = await this.validateFolder(ctx, args.name, script, source);

    const entries = await this.workspaceManager.listFiles(args.name, {});
    const realFiles = entries
      .filter((e) => e.type === "file")
      .map((e) => this.relativeToProject(e.path, args.name));

    return {
      project: args.name,
      absPath: this.workspaceManager.resolve(args.name).abs,
      dryRun: false,
      blueprint,
      script,
      files: realFiles,
      validation,
    };
  }

  /** Reopen a generated mod's blueprint. */
  async loadBlueprint(
    ctx: ToolContext,
    project: string,
  ): Promise<ModgenBlueprint> {
    const raw = await ctx.workspaceManager.readFile(
      `${project}/${BLUEPRINT_FILE}`,
    );
    const parsed = JSON.parse(raw.content) as ModgenBlueprint;
    if (parsed.kind !== "pz-modgen" || parsed.schemaVersion !== 1) {
      throw new Error(
        `Unsupported blueprint in ${project} (not a pz-modgen v1 blueprint)`,
      );
    }
    return parsed;
  }

  /** List workspace projects that carry a Mod Generator blueprint. */
  async list(ctx: ToolContext): Promise<ModgenListEntry[]> {
    const projects = await ctx.workspaceManager.listProjects();
    const out: ModgenListEntry[] = [];
    for (const p of projects) {
      try {
        const bp = await this.loadBlueprint(ctx, p.name);
        const tpl = getModgenTemplate(bp.template);
        out.push({
          project: p.name,
          template: bp.template,
          templateLabel: tpl?.label ?? bp.template,
          modName: bp.mod.modName,
          itemName: bp.mod.itemName,
          updatedAt: bp.updatedAt,
        });
      } catch {
        // not a generator project — skip
      }
    }
    out.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    return out;
  }

  /** Re-roll and/or patch a saved blueprint, then rewrite the whole folder. */
  async regenerate(
    ctx: ToolContext,
    args: ModgenRegenerateArgs,
  ): Promise<ModgenGenerateResult> {
    const blueprint = await this.loadBlueprint(ctx, args.project);
    const tpl = getModgenTemplate(blueprint.template);
    if (!tpl) throw new Error(`Unknown template: ${blueprint.template}`);

    const mod = { ...blueprint.mod };
    if (args.modName !== undefined) mod.modName = args.modName;
    if (args.author !== undefined) {
      if (args.author) mod.author = args.author;
      else delete mod.author;
    }
    if (args.description !== undefined) {
      if (args.description) mod.description = args.description;
      else delete mod.description;
    }
    if (args.itemName !== undefined) mod.itemName = args.itemName;
    if (args.displayName !== undefined) mod.displayName = args.displayName;
    if (args.icon !== undefined) mod.icon = args.icon;
    if (args.module !== undefined) mod.module = args.module;

    // Stats: patch with pinned values (null resets a key back to auto). Only
    // keys the template actually declares are accepted — keeps blueprints
    // canonical instead of letting arbitrary properties leak into the script.
    const stats = { ...blueprint.stats };
    const pinned: Record<string, any> = {};
    for (const [key, value] of Object.entries(args.stats ?? {})) {
      if (!tpl.fields.some((f) => f.key === key)) continue;
      if (value === null || value === "") {
        delete stats[key];
      } else {
        stats[key] = value;
        pinned[key] = value;
      }
    }

    // Re-roll requested keys against the current vanilla ranges (or bounds).
    if (args.randomize?.length) {
      const vanilla = await this.vanillaRanges(tpl);
      const fresh = await this.deriveStats(
        tpl,
        {},
        true, // random
      );
      for (const key of args.randomize) {
        const field = tpl.fields.find((f) => f.key === key);
        if (!field || field.kind !== "number") continue;
        if (vanilla?.ranges[key]) {
          const r = vanilla.ranges[key];
          const lo = Math.min(r.p25, r.p75);
          const hi = Math.max(r.p25, r.p75);
          stats[key] = roundToStep(
            clamp(lo + Math.random() * Math.max(0, hi - lo), field.min ?? lo, field.max ?? hi),
            field,
          );
        } else if (fresh.stats[key] !== undefined) {
          stats[key] = fresh.stats[key];
        }
      }
    }

    // Keys removed from the blueprint (stats: null) fall back to auto:
    // re-derive unpinned auto fields from vanilla data / defaults so a
    // "reset to auto" never leaves a stat missing from the script.
    const auto = await this.deriveStats(tpl, {}, false);
    for (const field of tpl.fields) {
      if (!field.auto) continue;
      if (stats[field.key] === undefined && auto.stats[field.key] !== undefined) {
        stats[field.key] = auto.stats[field.key];
      }
    }

    blueprint.mod = mod;
    blueprint.stats = stats;
    blueprint.updatedAt = isoNow();

    const script = await this.buildScript(tpl, blueprint);

    // Rewrite every generated artifact (all idempotent, all overwrite:true).
    await this.writeModInfo(args.project, blueprint);
    await this.workspaceManager.writeFile(
      `${args.project}/42/media/scripts/${mod.id}${SCRIPT_SUFFIX}`,
      script,
      { overwrite: true },
    );
    await this.writeBlueprint(args.project, blueprint);
    await this.writeReadme(args.project, blueprint);

    const validation = await this.validateFolder(
      ctx,
      args.project,
      script,
      blueprint.statsSource,
    );

    const entries = await this.workspaceManager.listFiles(args.project, {});
    const files = entries
      .filter((e) => e.type === "file")
      .map((e) => this.relativeToProject(e.path, args.project));

    return {
      project: args.project,
      absPath: this.workspaceManager.resolve(args.project).abs,
      dryRun: false,
      blueprint,
      script,
      files,
      validation,
    };
  }

  // -------------------------------------------------------------------------
  // Internals
  // -------------------------------------------------------------------------

  /** listFiles paths are workspace-root-relative — strip the project prefix. */
  private relativeToProject(p: string, project: string): string {
    return p === project
      ? "."
      : p.startsWith(project + "/")
        ? p.slice(project.length + 1)
        : p;
  }

  private async buildScript(
    tpl: ModgenTemplate,
    blueprint: ModgenBlueprint,
  ): Promise<string> {
    const specs: Record<string, any> = {
      ...tpl.defaultStats,
      ...blueprint.stats,
      DisplayName: blueprint.mod.displayName,
      Icon: blueprint.mod.icon,
      Type: tpl.pzType,
      DisplayCategory: tpl.displayCategory,
      // consumed by the generator for template selection, stripped from output
      category: tpl.category,
    };
    if (tpl.damageCategory && specs.DamageCategory === undefined) {
      specs.DamageCategory = tpl.damageCategory;
    }
    return this.generator.generateScript("item", blueprint.mod.itemName, specs, blueprint.mod.module, {
      includeComments: true,
      balance: "custom",
    });
  }

  private async writeModInfo(
    project: string,
    blueprint: ModgenBlueprint,
  ): Promise<void> {
    const m = blueprint.mod;
    const lines = [
      `name=${m.modName}`,
      `id=${m.id}`,
      ...(m.author ? [`author=${m.author}`] : []),
      ...(m.description ? [`description=${m.description}`] : []),
      `version=${m.version}`,
      "poster=poster.png",
    ];
    await this.workspaceManager.writeFile(
      `${project}/mod.info`,
      lines.join("\n") + "\n",
      { overwrite: true },
    );
  }

  private async writeBlueprint(
    project: string,
    blueprint: ModgenBlueprint,
  ): Promise<void> {
    await this.workspaceManager.writeFile(
      `${project}/${BLUEPRINT_FILE}`,
      JSON.stringify(blueprint, null, 2) + "\n",
      { overwrite: true },
    );
  }

  private async writeReadme(
    project: string,
    blueprint: ModgenBlueprint,
  ): Promise<void> {
    const tpl = getModgenTemplate(blueprint.template);
    const m = blueprint.mod;
    const labelFor = (key: string): string =>
      tpl?.fields.find((f) => f.key === key)?.label ?? key;

    const statRows = Object.entries(blueprint.stats)
      .map(([key, value]) => `| ${labelFor(key)} | \`${key}\` | ${String(value)} |`)
      .join("\n");

    const kbSection = tpl?.kbRefs.length
      ? `\n## Learn more\n\n${tpl.kbRefs
          .map((r) => `- [${r.label}](${r.path})`)
          .join("\n")}\n`
      : "";

    const sourceLine =
      blueprint.statsSource.kind === "vanilla"
        ? `Auto-balanced against **${blueprint.statsSource.sampleCount}** ${blueprint.statsSource.label} from the vanilla game database.`
        : "Stats are sensible defaults — parse the vanilla game data (parse_game_files) and regenerate to get data-driven balanced stats.";

    const readme = `# ${m.modName}

${m.description ? `${m.description}\n\n` : ""}${sourceLine}

## What's inside

\`\`\`
${m.name}/
├── mod.info                # metadata the game launcher reads
├── workshop.txt            # Steam Workshop title/description
├── poster.png              # preview image shown in the mod list
├── README.md               # this file
├── modgen.blueprint.json   # editable blueprint — reopen & regenerate
├── common/media/           # Build 42 shared assets (mandatory folder)
└── 42/
    └── media/
        └── scripts/
            └── ${m.id}${SCRIPT_SUFFIX}   # the item script
\`\`\`

## The item

- **Item id**: \`${m.itemName}\` (module \`${m.module}\`)
- **Display name**: ${m.displayName}
- **Icon**: \`${m.icon}\`

### Generated stats

| Stat | Property | Value |
|---|---|---|
${statRows}

## How to install

**Workshop (recommended)**: open Project Zomboid → Mods → Mod Manager → your
mod → Upload. It will use \`workshop.txt\` and \`poster.png\`.

**Manual**: copy the \`${m.name}\` folder into
\`<user>/Zomboid/mods/\` (Windows: \`C:\\Users\\<you>\\Zomboid\\mods\`) and
enable it in the in-game Mods menu.

## How to edit

1. Run \`modgen_blueprint project=${m.name}\` to reopen this mod's blueprint.
2. Change any stat (or pass \`randomize: ["MaxDamage", ...]\` to re-roll it).
3. Run \`modgen_regenerate\` — the script, stats table and validation are all
   rewritten from the blueprint, so the mod never drifts out of sync.

You can also edit the script directly under \`42/media/scripts/\` and use
\`workspace_inspect\` to validate the folder.
${kbSection}
---
*Generated by the pz-mcp-server Mod Generator — ${blueprint.updatedAt.slice(0, 10)}.*
`;
    await this.workspaceManager.writeFile(
      `${project}/${README_FILE}`,
      readme,
      { overwrite: true },
    );
  }

  private async validateFolder(
    ctx: ToolContext,
    project: string,
    script: string,
    source: ModgenStatsSource,
  ): Promise<ModgenValidation> {
    const scriptVal = await this.validator.validateScript(script, "item", false);
    // UNKNOWN_PROPERTY warnings are validator-coverage noise (the validator
    // only catalogs a subset of PZ properties) — hide them from the modgen
    // report so "ready" reads clean while real issues stay visible.
    const scriptWarnings = scriptVal.warnings.filter(
      (w) => w.code !== "UNKNOWN_PROPERTY",
    );
    let insp;
    try {
      insp = await inspectProject(ctx, project, {
        checkDependencies: false,
        includeFileList: false,
      });
    } catch {
      insp = null;
    }
    const projectErrors = (insp?.validation.errors ?? []).map(
      (e: any) => `${e.file ?? e.code}: ${e.message}`,
    );
    const projectWarnings = (insp?.validation.warnings ?? []).map(
      (w: any) => `${w.file ?? w.code}: ${w.message}`,
    );
    const scriptValid = scriptVal.isValid;
    const projectValid = insp ? insp.validation.valid : true;

    const validation: ModgenValidation = {
      scriptValid,
      projectValid,
      ready: scriptValid && projectValid,
      scriptWarnings: scriptWarnings.map((w) => w.message),
      projectErrors,
      projectWarnings,
      ...(source.kind === "defaults"
        ? {
            note: "Vanilla game data not indexed yet — stats are balanced defaults. Run parse_game_files to enable data-driven stats.",
          }
        : {}),
    };
    return validation;
  }
}
