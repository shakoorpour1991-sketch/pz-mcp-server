/**
 * Mod Generator manager — beginner-friendly, data-driven Project Zomboid mod
 * creation on top of the existing infrastructure.
 *
 * Reuses (never duplicates):
 *  - DatabaseManager vanilla item data for realistic auto-stats,
 *  - ValidationEngine for script syntax parsing,
 *  - B42Validator for Build 42 semantic checks (the final authority on
 *    whether the generated item is B42-correct),
 *  - the workspace tools' inspectProject (ModAnalyzer) for folder validation,
 *  - WorkspaceManager for rooted, atomic file operations and scaffolding.
 *
 * The artifact of a generation is a complete, ready-to-ship mod folder in the
 * workspace plus an editable `modgen.blueprint.json` — reopen the blueprint,
 * change stats/content, and regenerate.
 *
 * Build 42 correctness: items are emitted with `ItemType = base:*` (never the
 * legacy `Type = ...`), display names go into the ItemName translation file,
 * and assets (poster + custom icon placeholder) are really generated.
 */
import { isAbsolute } from "node:path";
import type { DatabaseManager, GameItem } from "../database/DatabaseManager.js";
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
import { B42Validator } from "./b42Validator.js";
import {
  buildItemScript,
  buildItemTranslation,
  ITEM_NAME_TRANSLATION_PATH,
  safeIconFileName,
} from "./b42Script.js";
import { makeIconPng, makePosterPng } from "./assets.js";
import { inspectProject } from "../tools/workspace.js";

// ---------------------------------------------------------------------------
// Blueprint shape (the editable, reopenable config of a generated mod)
// ---------------------------------------------------------------------------

interface ModgenRange {
  min: number;
  max: number;
  median: number;
  p25: number;
  p75: number;
  count: number;
}

interface ModgenStatsSource {
  kind: "vanilla" | "defaults";
  label: string;
  sampleCount: number;
  ranges: Record<string, ModgenRange>;
  /** Game version the vanilla data was parsed from (PZ_GAME_VERSION env). */
  gameVersion?: string;
  /** Distinct game files the samples were drawn from (provenance). */
  sourceFiles?: number;
}

interface ModgenModInfo {
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

interface ModgenScriptDiagnostic {
  /** Source file, when the script was read from disk. */
  file?: string;
  line: number;
  column?: number;
  code: string;
  severity: "error" | "warning" | "info";
  message: string;
  suggestion?: string;
  /** ZedScripts-layer provenance ("ORIGINAL_ZEDSCRIPT"/"dev_functionality"). */
  provenance?: string;
  property?: string;
  value?: string;
  expected?: string;
}

interface ModgenValidation {
  scriptValid: boolean;
  projectValid: boolean;
  ready: boolean;
  scriptWarnings: string[];
  /**
   * Structured script diagnostics (ValidationEngine errors + warnings,
   * including the ZedScripts knowledge layer) — file/line/column/code/
   * severity/message/suggestion per finding, so generated mods surface
   * *why* they are (not) ready instead of a bare pass/fail bit.
   */
  scriptDiagnostics: ModgenScriptDiagnostic[];
  /** Relative path of the generated script inside the project (dry runs: unset). */
  scriptFile?: string;
  /** ZedScripts knowledge-layer provenance, when the layer produced findings. */
  zedScripts?: {
    diagnostics: number;
    source: string;
    commit: string;
    datasetVersion: string;
  };
  projectErrors: string[];
  projectWarnings: string[];
  /** Build 42 semantic check results (the generator's final authority). */
  b42Errors: string[];
  b42Warnings: string[];
  b42Info: string[];
  dataChecked: boolean;
  note?: string;
}

interface ModgenGenerateResult {
  project: string;
  /** Absolute path of the project folder on disk. */
  absPath: string;
  dryRun: boolean;
  blueprint: ModgenBlueprint;
  script: string;
  files: string[];
  validation?: ModgenValidation;
}

interface ModgenListEntry {
  project: string;
  template: ModgenTemplateId;
  templateLabel: string;
  modName: string;
  itemName: string;
  updatedAt: string;
}

interface ModgenGenerateArgs {
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

interface ModgenRegenerateArgs {
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

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/").toLowerCase();
}

export class ModGenManager {
  private readonly b42: B42Validator;
  /** Cached detected game install root (provenance filter). */
  private gameRootCache: string | null | undefined;
  /** Cached set of icon names used by vanilla items (invalidated on reparse). */
  private iconCache: { at: number; set: Set<string> } | null = null;

  constructor(
    private readonly db: DatabaseManager,
    private readonly validator: ValidationEngine,
    private readonly workspaceManager: WorkspaceManager,
  ) {
    this.b42 = new B42Validator(db);
  }

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
      itemType: t.itemType,
      defaultIcon: t.defaultIcon,
      iconSuggestions: t.iconSuggestions,
      maturity: t.maturity,
      maturityNote: t.maturityNote,
      color: t.color,
      fields: t.fields,
      defaults: t.defaultStats,
      kbRefs: t.kbRefs,
      vanilla: null as null | {
        sampleCount: number;
        label: string;
        sourceFiles?: number;
        gameVersion?: string;
        ranges: Record<string, ModgenRange>;
      },
    }));
  }

  /** Vanilla-derived stat ranges per auto field (null when no data parsed). */
  async vanillaFor(
    templateId: ModgenTemplateId,
    ctx: ToolContext,
  ): Promise<{
    sampleCount: number;
    label: string;
    sourceFiles?: number;
    gameVersion?: string;
    ranges: Record<string, ModgenRange>;
  } | null> {
    const tpl = getModgenTemplate(templateId);
    if (!tpl) return null;
    return this.vanillaRanges(tpl, ctx);
  }

  /** Detect the game install root once (used to keep the baseline vanilla-only). */
  private async gameRoot(ctx: ToolContext): Promise<string | null> {
    if (this.gameRootCache !== undefined) return this.gameRootCache;
    try {
      this.gameRootCache =
        (await ctx.pathManager?.detectProjectZomboidPath?.()) ?? null;
    } catch {
      this.gameRootCache = null;
    }
    return this.gameRootCache;
  }

  /**
   * Vanilla baselines. Samples are restricted to the game install when one is
   * detected (mods/workshop parses that land in the same DB are excluded),
   * so `kind: "vanilla"` is honest provenance (review item #10).
   */
  private async vanillaRanges(
    tpl: ModgenTemplate,
    ctx: ToolContext,
  ): Promise<{
    sampleCount: number;
    label: string;
    sourceFiles?: number;
    gameVersion?: string;
    ranges: Record<string, ModgenRange>;
  } | null> {
    const totals = await this.db.getStats().catch(() => ({ total: 0 }));
    if (!totals.total) return null;
    const gameRoot = await this.gameRoot(ctx);
    const gameRootNorm = gameRoot ? normalizePath(gameRoot) : null;

    // Build 42 spelling only (ItemType="base:weapon") — the legacy B41
    // `Type` property no longer exists in parsed data, so there is no
    // fallback query to union (B41 data audit).
    const b = tpl.baseline;
    const seen = new Set<string>();
    const refs: GameItem[] = [];
    {
      const rows = await this.db
        .getItemsByPropertyType(b.propertyType, 800, b.propertyKey)
        .catch(() => []);
      for (const row of rows) {
        if (seen.has(row.id)) continue;
        seen.add(row.id);
        // Vanilla-only guard: keep relative/unknown paths and game-install
        // files; drop absolute paths that live outside the game install
        // (those are mod/workshop parses, not vanilla).
        if (row.filePath) {
          if (isAbsolute(row.filePath) && gameRootNorm) {
            if (!normalizePath(row.filePath).startsWith(gameRootNorm)) continue;
          } else if (isAbsolute(row.filePath) && !gameRootNorm) {
            // No install detected — nothing to filter against, keep it.
          }
        }
        if (tpl.baseline.filter && !tpl.baseline.filter(row.properties))
          continue;
        refs.push(row);
      }
    }
    // A zero-sample baseline (no matching vanilla items) is "no data" — the
    // caller must fall back to defaults rather than label stats as vanilla.
    if (refs.length === 0) return null;

    const sourceFiles = new Set(
      refs
        .map((r) => r.filePath)
        .filter((p): p is string => Boolean(p))
        .map(normalizePath),
    );
    const gameVersion = process.env.PZ_GAME_VERSION;

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
    return {
      sampleCount: refs.length,
      label: tpl.baseline.label,
      sourceFiles: sourceFiles.size,
      ...(gameVersion ? { gameVersion } : {}),
      ranges,
    };
  }

  /** Icon names used by vanilla items — cached, invalidated when the DB re-parses. */
  private async vanillaIcons(ctx: ToolContext): Promise<Set<string>> {
    const totals = await ctx.dbManager.getStats().catch(() => ({ total: 0 }));
    if (this.iconCache && this.iconCache.at === totals.total) {
      return this.iconCache.set;
    }
    const items = await ctx.dbManager.getItemsByType("item");
    const set = new Set<string>();
    for (const i of items) {
      const v = i.properties?.Icon;
      if (typeof v === "string" && v) set.add(v);
    }
    this.iconCache = { at: totals.total, set };
    return set;
  }

  /**
   * An icon needs a generated texture only when it is neither the template's
   * verified default nor a name used by vanilla items (with an empty DB every
   * non-default icon gets a real placeholder so the texture always resolves).
   */
  private async iconIsCustom(
    tpl: ModgenTemplate,
    icon: string,
    ctx: ToolContext,
  ): Promise<boolean> {
    if (icon === tpl.defaultIcon) return false;
    const icons = await this.vanillaIcons(ctx);
    return !icons.has(icon);
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
    useVanilla: boolean,
    ctx: ToolContext,
  ): Promise<{ stats: Record<string, any>; source: ModgenStatsSource }> {
    const vanilla = useVanilla ? await this.vanillaRanges(tpl, ctx) : null;
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
          if (
            field.auto &&
            random &&
            field.min !== undefined &&
            field.max !== undefined
          ) {
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

    // Pinned user values override everything (never clamped — validation is
    // the referee for out-of-range values).
    for (const [key, value] of Object.entries(pinned)) {
      if (value === null || value === undefined || value === "") continue;
      stats[key] = value;
    }

    const source: ModgenStatsSource =
      useVanilla && vanilla
        ? {
            kind: "vanilla",
            label: vanilla.label,
            sampleCount: vanilla.sampleCount,
            ranges: vanilla.ranges,
            ...(vanilla.gameVersion
              ? { gameVersion: vanilla.gameVersion }
              : {}),
            ...(vanilla.sourceFiles
              ? { sourceFiles: vanilla.sourceFiles }
              : {}),
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
      ctx,
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

    const script = buildItemScript(tpl, blueprint);
    const iconIsCustom = await this.iconIsCustom(tpl, icon, ctx);

    // Build 42 semantic validation BEFORE anything is written — a generated
    // mod that fails B42 checks never reaches the disk (review items #1/#2).
    const b42 = await this.b42.validate(
      tpl,
      {
        ...stats,
        ItemType: tpl.itemType,
        DisplayCategory: tpl.displayCategory,
        Icon: icon,
      },
      { itemName: args.itemName, module, icon },
    );
    if (b42.errors.length > 0 && args.dryRun !== true) {
      throw new Error(
        `Build 42 validation failed:\n- ${b42.errors.join("\n- ")}`,
      );
    }

    const plan = this.planFiles({
      modId: args.modId,
      icon,
      iconIsCustom,
    });

    if (args.dryRun === true) {
      const validation = await this.validateFolder(
        ctx,
        null,
        script,
        null,
        source,
        b42,
      );
      return {
        project: args.name,
        absPath: this.workspaceManager.resolve(args.name).abs,
        dryRun: true,
        blueprint,
        script,
        files: plan,
        validation,
      };
    }

    // Real scaffold (B42 layout + mod.info + workshop.txt; the poster is
    // generated by us, so the 1×1 placeholder is not used).
    await this.workspaceManager.createProject(args.name, {
      modId: args.modId,
      modName: args.modName,
      version: blueprint.mod.version,
      template: "minimal",
      buildVersion: "42",
      sampleItemScript: script,
      includePoster: false,
      ...(args.author !== undefined && args.author !== ""
        ? { author: args.author }
        : {}),
      ...(args.description !== undefined && args.description !== ""
        ? { description: args.description }
        : {}),
    });

    // Complete the folder: generated poster, blueprint, README, translation.
    await this.writeAssets(args.name, tpl, blueprint, iconIsCustom);
    await this.writeBlueprint(args.name, blueprint);
    await this.writeReadme(args.name, blueprint);
    await this.writeTranslation(args.name, blueprint);

    const validation = await this.validateFolder(
      ctx,
      args.name,
      script,
      `42/media/scripts/${args.modId}${SCRIPT_SUFFIX}`,
      source,
      b42,
    );

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

  /**
   * The exact file plan a generation produces — dry runs report precisely what
   * a real generation will write (review item #16: dry-run parity).
   */
  private planFiles(opts: {
    modId: string;
    icon: string;
    iconIsCustom: boolean;
  }): string[] {
    const plan = [
      "mod.info",
      "workshop.txt",
      "poster.png",
      "common/media/.gitkeep",
      `42/media/scripts/${opts.modId}${SCRIPT_SUFFIX}`,
      "42/media/scripts/.gitkeep",
      ITEM_NAME_TRANSLATION_PATH,
    ];
    if (opts.iconIsCustom) {
      const file = safeIconFileName(opts.icon);
      if (file) plan.push(`42/media/textures/${file}`);
    }
    plan.push(README_FILE, BLUEPRINT_FILE);
    return plan;
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

  /**
   * Re-roll and/or patch a saved blueprint, then rewrite the whole folder.
   *
   * The rewrite is staged: the new script is built and Build 42-validated
   * first; if validation fails, nothing on disk is touched. Only after that
   * are all artifacts rewritten (each write is atomic) — the mod can never be
   * left half-updated by a failed validation (review items #7/#8).
   */
  async regenerate(
    ctx: ToolContext,
    args: ModgenRegenerateArgs,
  ): Promise<ModgenGenerateResult> {
    const blueprint = await this.loadBlueprint(ctx, args.project);
    const tpl = getModgenTemplate(blueprint.template);
    if (!tpl) throw new Error(`Unknown template: ${blueprint.template}`);

    // Capture the previous icon so a custom → vanilla (or renamed) switch can
    // remove the now-stale generated texture (review fix: stale icon files).
    const oldIcon = blueprint.mod.icon;
    const oldIconCustom = await this.iconIsCustom(tpl, oldIcon, ctx);

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
      const vanilla = await this.vanillaRanges(tpl, ctx);
      const fresh = await this.deriveStats(tpl, {}, true, true, ctx);
      for (const key of args.randomize) {
        const field = tpl.fields.find((f) => f.key === key);
        if (!field || field.kind !== "number") continue;
        if (vanilla?.ranges[key]) {
          const r = vanilla.ranges[key];
          const lo = Math.min(r.p25, r.p75);
          const hi = Math.max(r.p25, r.p75);
          stats[key] = roundToStep(
            clamp(
              lo + Math.random() * Math.max(0, hi - lo),
              field.min ?? lo,
              field.max ?? hi,
            ),
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
    const auto = await this.deriveStats(tpl, {}, false, true, ctx);
    for (const field of tpl.fields) {
      if (!field.auto) continue;
      if (
        stats[field.key] === undefined &&
        auto.stats[field.key] !== undefined
      ) {
        stats[field.key] = auto.stats[field.key];
      }
    }
    // Prune stat keys the template no longer declares (old blueprints that
    // carry pre-refactor properties) — keeps blueprints canonical and silences
    // property-set warnings.
    for (const key of Object.keys(stats)) {
      if (!tpl.fields.some((f) => f.key === key)) delete stats[key];
    }

    // Review item #7: the stats source is ALWAYS recomputed on regenerate —
    // if the vanilla DB has been parsed since generation, the blueprint (and
    // the README rendered from it) now truthfully reports where stats came
    // from, with fresh sample counts and ranges.
    blueprint.statsSource = auto.source;
    blueprint.mod = mod;
    blueprint.stats = stats;
    blueprint.updatedAt = isoNow();

    const script = buildItemScript(tpl, blueprint);
    const iconIsCustom = await this.iconIsCustom(tpl, mod.icon, ctx);
    const b42 = await this.b42.validate(
      tpl,
      {
        ...stats,
        ItemType: tpl.itemType,
        DisplayCategory: tpl.displayCategory,
        Icon: mod.icon,
      },
      { itemName: mod.itemName, module: mod.module, icon: mod.icon },
    );
    if (b42.errors.length > 0) {
      throw new Error(
        `Build 42 validation failed — nothing was written:\n- ${b42.errors.join("\n- ")}`,
      );
    }

    // Staged rewrite of every generated artifact (all idempotent, overwrite).
    await this.writeModInfo(args.project, blueprint);
    await this.workspaceManager.writeFile(
      `${args.project}/42/media/scripts/${mod.id}${SCRIPT_SUFFIX}`,
      script,
      { overwrite: true },
    );
    await this.writeAssets(args.project, tpl, blueprint, iconIsCustom);
    // Icon switched away from a generated texture? Remove the stale file so
    // the shipped mod never carries dead assets.
    if (oldIconCustom && oldIcon !== mod.icon) {
      const oldFile = safeIconFileName(oldIcon);
      if (oldFile) {
        try {
          await this.workspaceManager.delete(
            `${args.project}/42/media/textures/${oldFile}`,
            { force: true },
          );
        } catch {
          // already gone — fine
        }
      }
    }
    await this.writeBlueprint(args.project, blueprint);
    await this.writeReadme(args.project, blueprint);
    await this.writeTranslation(args.project, blueprint);

    const validation = await this.validateFolder(
      ctx,
      args.project,
      script,
      `42/media/scripts/${mod.id}${SCRIPT_SUFFIX}`,
      blueprint.statsSource,
      b42,
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

  /** Build 42 ItemName translation file (module.itemId → display name). */
  private async writeTranslation(
    project: string,
    blueprint: ModgenBlueprint,
  ): Promise<void> {
    await this.workspaceManager.writeFile(
      `${project}/${ITEM_NAME_TRANSLATION_PATH}`,
      buildItemTranslation(blueprint),
      { overwrite: true },
    );
  }

  /** Generated assets: real poster always; placeholder icon for custom icons. */
  private async writeAssets(
    project: string,
    tpl: ModgenTemplate,
    blueprint: ModgenBlueprint,
    iconIsCustom: boolean,
  ): Promise<void> {
    await this.workspaceManager.writeFile(
      `${project}/poster.png`,
      makePosterPng(tpl.color),
      { overwrite: true },
    );
    if (iconIsCustom) {
      const file = safeIconFileName(blueprint.mod.icon);
      if (file) {
        await this.workspaceManager.writeFile(
          `${project}/42/media/textures/${file}`,
          makeIconPng(tpl.color),
          { overwrite: true },
        );
      }
    }
  }

  private async writeReadme(
    project: string,
    blueprint: ModgenBlueprint,
  ): Promise<void> {
    const tpl = getModgenTemplate(blueprint.template);
    const m = blueprint.mod;
    const labelFor = (key: string): string =>
      tpl?.fields.find((f) => f.key === key)?.label ?? key;

    const src = blueprint.statsSource;
    const statRows = Object.entries(blueprint.stats)
      .map(([key, value]) => {
        const samples =
          src.kind === "vanilla"
            ? ` (${src.ranges[key]?.count ?? "?"} vanilla samples)`
            : "";
        return `| ${labelFor(key)} | \`${key}\` | ${String(value)}${samples} |`;
      })
      .join("\n");

    const kbSection = tpl?.kbRefs.length
      ? `\n## Learn more\n\n${tpl.kbRefs
          .map((r) => `- [${r.label}](${r.path})`)
          .join("\n")}\n`
      : "";

    const sourceLine =
      src.kind === "vanilla"
        ? `Auto-balanced against **${src.sampleCount}** ${src.label}${
            src.sourceFiles ? ` from ${src.sourceFiles} vanilla files` : ""
          }${src.gameVersion ? ` (game ${src.gameVersion})` : ""}.`
        : "Stats are sensible defaults — parse the vanilla game data (parse_game_files) and regenerate to get data-driven balanced stats.";

    const iconLine =
      blueprint.mod.icon === tpl?.defaultIcon
        ? `- **Icon**: \`${m.icon}\` (vanilla texture, reused)`
        : `- **Icon**: \`${m.icon}\`${
            src.kind === "vanilla"
              ? " (vanilla texture if it exists, otherwise a generated placeholder)"
              : " (a generated placeholder texture is included)"
          }`;

    const readme = `# ${m.modName}

${m.description ? `${m.description}\n\n` : ""}${sourceLine}

## What's inside

\`\`\`
${m.name}/
├── mod.info                # metadata the game launcher reads
├── workshop.txt            # Steam Workshop title/description
├── poster.png              # generated preview image shown in the mod list
├── README.md               # this file
├── modgen.blueprint.json   # editable blueprint — reopen & regenerate
├── common/media/           # Build 42 shared assets (mandatory folder)
└── 42/
    ├── media/
    │   ├── scripts/
    │   │   └── ${m.id}${SCRIPT_SUFFIX}   # the item script
    │   └── lua/shared/Translate/EN/
    │       └── ItemName.json            # the item's display name
    └── (textures/ItemX.png when a custom icon is generated)
\`\`\`

## The item

- **Item id**: \`${m.itemName}\` (module \`${m.module}\`)
- **Display name**: ${m.displayName} (via the ItemName translation file)
${iconLine}
- **Build 42 class**: \`${tpl?.itemType ?? "?"}\`

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
3. Run \`modgen_regenerate\` — the script, stats table, translation and
   validation are all rewritten from the blueprint, so the mod never drifts
   out of sync.
${kbSection}
---
*Generated by the pz-mcp-server Mod Generator — ${blueprint.updatedAt.slice(0, 10)}.*
`;
    await this.workspaceManager.writeFile(`${project}/${README_FILE}`, readme, {
      overwrite: true,
    });
  }

  /**
   * Combined validation for a generated mod:
   *  - script syntax (ValidationEngine),
   *  - Build 42 semantics (B42Validator — the authority),
   *  - folder structure (workspace inspectProject; a thrown inspection is a
   *    FAILURE, never a pass — review item #9).
   */
  private async validateFolder(
    ctx: ToolContext,
    project: string | null,
    script: string,
    scriptFile: string | null,
    _source: ModgenStatsSource,
    b42: Awaited<ReturnType<B42Validator["validate"]>>,
  ): Promise<ModgenValidation> {
    const scriptVal = await this.validator.validateScript(
      script,
      "item",
      false,
    );
    // The generic validator only catalogs a subset of PZ properties —
    // UNKNOWN_PROPERTY noise is B42Validator's domain, and INVALID_REFERENCE
    // for Icon/WeaponSprite is expected (icons are vanilla-reused or a
    // generated texture, verified by the B42 checks).
    const scriptWarnings = scriptVal.warnings
      .filter((w) => w.code !== "UNKNOWN_PROPERTY")
      .filter(
        (w) =>
          !(
            w.code === "INVALID_REFERENCE" &&
            /Icon|WeaponSprite/.test(w.message)
          ),
      )
      .map((w) => w.message);

    // Full structured diagnostics (errors + warnings, zedScripts layer
    // included) so modgen output explains WHY the script is or isn't ready.
    const scriptDiagnostics: ModgenScriptDiagnostic[] = [
      ...scriptVal.errors,
      ...scriptVal.warnings,
    ].map((d) => {
      const entry: ModgenScriptDiagnostic = {
        line: d.line,
        code: d.code,
        severity: d.severity,
        message: d.message,
      };
      if (d.file !== undefined) entry.file = d.file;
      if (d.column !== undefined) entry.column = d.column;
      if (d.suggestion !== undefined) entry.suggestion = d.suggestion;
      if (d.provenance !== undefined) entry.provenance = d.provenance;
      if (d.property !== undefined) entry.property = d.property;
      if (d.value !== undefined) entry.value = d.value;
      if (d.expected !== undefined) entry.expected = d.expected;
      return entry;
    });

    let insp: Awaited<ReturnType<typeof inspectProject>> | null = null;
    let inspectError: string | null = null;
    if (project) {
      try {
        insp = await inspectProject(ctx, project, {
          checkDependencies: false,
          includeFileList: false,
        });
      } catch (error) {
        inspectError = error instanceof Error ? error.message : String(error);
      }
    }

    const projectErrors = (insp?.validation.errors ?? []).map(
      (e: any) => `${e.file ?? e.code}: ${e.message}`,
    );
    const projectWarnings = (insp?.validation.warnings ?? []).map(
      (w: any) => `${w.file ?? w.code}: ${w.message}`,
    );
    if (inspectError) projectErrors.push(`inspection failed: ${inspectError}`);

    const scriptValid = scriptVal.isValid;
    // A folder inspection that THROWS is a validation failure, not a pass.
    const projectValid = project
      ? insp !== null && insp.validation.valid
      : true;
    const ready = scriptValid && projectValid && b42.errors.length === 0;

    const validation: ModgenValidation = {
      scriptValid,
      projectValid,
      ready,
      scriptWarnings,
      scriptDiagnostics,
      ...(scriptFile !== null ? { scriptFile } : {}),
      ...(scriptVal.zedScripts !== undefined
        ? { zedScripts: scriptVal.zedScripts }
        : {}),
      projectErrors,
      projectWarnings,
      b42Errors: b42.errors,
      b42Warnings: b42.warnings,
      b42Info: b42.info,
      dataChecked: b42.dataChecked,
      ...(project === null
        ? {
            note: "Dry run — script + Build 42 checks only; folder inspection happens after generation.",
          }
        : {}),
    };
    return validation;
  }
}
