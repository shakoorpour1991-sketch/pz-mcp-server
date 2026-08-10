/**
 * ZedScripts knowledge layer (port of the ZedScripts / pz-scripts-data dataset).
 *
 * The VS Code extension https://github.com/PZ-Wiki-Modding/ZedScripts keeps its
 * machine-readable Project Zomboid scripts knowledge — every block type, every
 * parameter with its type / allowed values / defaults / required flags /
 * deprecations / dependent parameters, plus ID and parent/child rules — in the
 * `pz-scripts-data` dataset it bundles. We vendor that dataset verbatim in
 * `./zedData/` (see scripts/port_zed_scripts_data.mjs + SOURCE.json for exact
 * provenance) and expose it here as a typed, normalized lookup table so the
 * validation engine can consume it mechanically instead of hand-coding rules.
 *
 * The data is Build 42 focused. Where it conflicts with this server's own
 * Build 42.20-verified checks (e.g. `item` requires `ItemType`), the verified
 * checks win; the data only *adds* diagnostics that do not contradict them.
 */
import { readFileSync } from "fs";

/** The value types pz-scripts-data uses for parameter typing. */
export const ZED_VALUE_TYPES = {
  STRING: "string",
  INT: "integer",
  FLOAT: "float",
  BOOLEAN: "boolean",
  ARRAY: "array",
  OBJECT: "object",
  BLOCK: "block",
  CALLBACK: "callback",
  TRANSLATION: "translation",
} as const;

export interface ZedArrayType {
  separator: string;
  type: "string" | "integer" | "float" | "boolean";
}

export interface ZedObjectType {
  keyValueSeparator: string;
  keyType: "string" | "integer" | "float" | "boolean";
  valueType: "string" | "integer" | "float" | "boolean";
  pairsSeparator: string;
}

export interface ZedBlockType {
  name: string;
  fullType?: boolean;
  noAutoImport?: boolean;
}

export interface ZedTranslationType {
  keyPattern?: string;
  sourceFile?: string;
}

export interface ZedParameterTypeInfo {
  main: string;
  array?: ZedArrayType;
  object?: ZedObjectType;
  block?: ZedBlockType;
  translation?: ZedTranslationType;
  callback?: unknown;
}

export interface ZedDeprecatedInfo {
  replacedBy?: string;
  description?: string;
  version?: string;
}

export interface ZedNeedsInfo {
  name?: string;
  values?: Array<string | number | boolean>;
  valueToType?: Record<string, string>;
  /** needs that only apply when the block sits under these parent blocks. */
  parents?: string[];
}

/** One parameter of a script block, normalized to canonical property names. */
export interface ZedParameter {
  /** Canonical property name as written in scripts (e.g. "ItemType"). */
  name: string;
  /** Lookup key (lowercase) from the dataset. */
  key: string;
  type?: ZedParameterTypeInfo;
  required?: boolean;
  canBeEmpty?: boolean;
  allowedDuplicate?: boolean;
  default?: Array<string | number | boolean>;
  /** Allowed values (normalized to strings for comparison). */
  values?: string[];
  deprecated?: ZedDeprecatedInfo;
  needs?: ZedNeedsInfo[];
  /** Item classes (without the `base:` prefix) this parameter applies to. */
  itemTypes?: string[];
  /**
   * The dataset's "_ANY" sentinel (e.g. `colors`): every property name is
   * accepted for this block (name is `_ANY`, flag `anyName: true`).
   */
  anyName?: boolean;
}

export interface ZedIdInfo {
  optional?: string[];
  parentsWithout?: string[];
  values?: string[];
  canHaveSpace?: boolean;
  asType?: boolean;
  forbidden?: string[];
}

export interface ZedBlockData {
  name: string;
  /** Lowercase lookup key from the dataset. */
  key: string;
  parameters: Map<string, ZedParameter>;
  parents: string[];
  needsChildren?: string[];
  id?: ZedIdInfo;
  variantOf?: string;
  isRoot?: boolean;
  noComma?: boolean;
  description?: string;
}

export interface ZedScriptsSourceInfo {
  source: string;
  dataset: string;
  vendoredBy: string;
  vendoredAt: string;
  commit: string;
  commitShort: string;
}

export interface ZedScriptsKnowledge {
  blocks: Map<string, ZedBlockData>;
  source: ZedScriptsSourceInfo;
}

interface RawParameter {
  name?: string;
  type?: {
    main?: string;
    array?: ZedArrayType;
    object?: ZedObjectType;
    block?: ZedBlockType;
    translation?: ZedTranslationType;
    callback?: unknown;
  };
  required?: boolean;
  canBeEmpty?: boolean;
  allowedDuplicate?: boolean;
  default?: string | number | boolean | Array<string | number | boolean>;
  values?: Array<string | number | boolean>;
  deprecated?: ZedDeprecatedInfo;
  needs?: ZedNeedsInfo[];
  itemTypes?: string[];
  anyName?: boolean;
}

interface RawBlock {
  name?: string;
  description?: string;
  parents?: string[];
  needsChildren?: string[];
  ID?: ZedIdInfo;
  parameters?: Record<string, RawParameter>;
  variantOf?: string;
  isRoot?: boolean;
  noComma?: boolean;
}

let cached: ZedScriptsKnowledge | null = null;

function loadJson(file: string): unknown {
  return JSON.parse(
    readFileSync(new URL(`./zedData/${file}`, import.meta.url), "utf-8"),
  );
}

function normalizeParameter(key: string, raw: RawParameter): ZedParameter {
  const param: ZedParameter = {
    name: raw.name || key,
    key,
  };
  const type = raw.type;
  if (type && typeof type.main === "string" && type.main) {
    param.type = {
      main: type.main,
    };
    if (type.array) param.type.array = type.array;
    if (type.object) param.type.object = type.object;
    if (type.block) param.type.block = type.block;
    if (type.translation) param.type.translation = type.translation;
  }
  if (raw.required === true) param.required = true;
  if (raw.canBeEmpty === true) param.canBeEmpty = true;
  if (raw.allowedDuplicate === true) param.allowedDuplicate = true;
  if (raw.default !== undefined) {
    param.default = Array.isArray(raw.default)
      ? raw.default
      : [raw.default as string | number | boolean];
  }
  if (raw.values !== undefined) {
    param.values = raw.values.map((v) => String(v));
  }
  if (raw.deprecated !== undefined) param.deprecated = raw.deprecated;
  if (raw.needs !== undefined && raw.needs.length > 0) param.needs = raw.needs;
  if (raw.itemTypes !== undefined && raw.itemTypes.length > 0) {
    param.itemTypes = raw.itemTypes;
  }
  if (raw.anyName === true) param.anyName = true;
  return param;
}

/**
 * Does this block accept any property name? True when the dataset carries the
 * "_ANY" sentinel (e.g. `colors` inside xui skins, where every color key is
 * valid). Unknown-parameter checks are then skipped for the block.
 */
export function allowsAnyParameter(block: ZedBlockData): boolean {
  for (const param of block.parameters.values()) {
    if (param.anyName === true || param.name === "_ANY") return true;
  }
  return false;
}

function normalizeBlock(key: string, raw: RawBlock): ZedBlockData {
  const block: ZedBlockData = {
    name: raw.name || key,
    key,
    parents: raw.parents ?? [],
    parameters: new Map(),
  };
  if (raw.needsChildren !== undefined) block.needsChildren = raw.needsChildren;
  if (raw.ID !== undefined) block.id = raw.ID;
  if (raw.variantOf !== undefined) block.variantOf = raw.variantOf;
  if (raw.isRoot === true) block.isRoot = true;
  if (raw.noComma === true) block.noComma = true;
  if (raw.description !== undefined) block.description = raw.description;
  for (const [paramKey, paramRaw] of Object.entries(raw.parameters ?? {})) {
    block.parameters.set(paramKey, normalizeParameter(paramKey, paramRaw));
  }
  return block;
}

/**
 * Lazily load and normalize the vendored dataset. Memoized — the JSON is
 * read once per process.
 */
export function getZedScriptsKnowledge(): ZedScriptsKnowledge {
  if (cached) return cached;
  const raw = loadJson("scriptsBlocks.json") as Record<string, RawBlock>;
  const blocks = new Map<string, ZedBlockData>();
  for (const [key, rawBlock] of Object.entries(raw)) {
    blocks.set(key, normalizeBlock(key, rawBlock));
  }
  const source = loadJson("SOURCE.json") as ZedScriptsSourceInfo;
  cached = { blocks, source };
  return cached;
}

let lowerKeyIndex: Map<string, string> | null = null;

function buildLowerKeyIndex(
  knowledge: ZedScriptsKnowledge,
): Map<string, string> {
  const index = new Map<string, string>();
  for (const key of knowledge.blocks.keys()) {
    index.set(key.toLowerCase(), key);
  }
  return index;
}

/**
 * Block-type → dataset entry (case-insensitive, multi-token aware).
 *
 * The scanner normalizes B42 `craftRecipe` / `craftrecipe` to type `recipe`;
 * the dataset only knows the Build 42 spelling `craftRecipe`, so those map
 * onto it. Multi-token keys (e.g. `component FluidContainer`) resolve as a
 * whole; unknown `component X` variants fall back to the generic `component`
 * entry so its `asType` ID check can suggest the valid variant names.
 * Legacy B41 `recipe` blocks (rawType `recipe`) are intentionally NOT
 * mapped: they predate the dataset's Build 42 knowledge and keep the
 * server's existing lenient handling.
 */
export function getZedBlock(rawType: string): ZedBlockData | null {
  const knowledge = getZedScriptsKnowledge();
  if (rawType === "craftRecipe" || rawType === "craftrecipe") {
    return knowledge.blocks.get("craftRecipe") ?? null;
  }
  if (lowerKeyIndex === null) {
    lowerKeyIndex = buildLowerKeyIndex(knowledge);
  }
  const key = lowerKeyIndex.get(rawType.toLowerCase());
  if (key !== undefined) {
    return knowledge.blocks.get(key) ?? null;
  }
  if (rawType.toLowerCase().startsWith("component ")) {
    return knowledge.blocks.get("component") ?? null;
  }
  return null;
}

/**
 * Dataset block keywords the deep scanner should recognize as headers.
 *
 * Section containers and module plumbing are excluded: `module` has its own
 * scanner handling, `imports` has no ID/parameters, and `inputs`/`outputs`
 * stay inside their recipe's content so the dedicated craftRecipe section
 * validation (inputs.ts port) keeps working.
 */
const DEEP_SCAN_EXCLUDED = new Set([
  "module",
  "mods",
  "imports",
  "inputs",
  "outputs",
  "_COMPONENT_BLOCK",
]);

let datasetKeywordsCache: string[] | null = null;

/**
 * All dataset block keywords suitable for deep scanning (memoized — the
 * set is stable per process, which also keeps the scanner's regex cache hot).
 */
export function getDatasetBlockKeywords(): string[] {
  if (datasetKeywordsCache) return datasetKeywordsCache;
  const knowledge = getZedScriptsKnowledge();
  datasetKeywordsCache = [...knowledge.blocks.keys()].filter(
    (key) => !DEEP_SCAN_EXCLUDED.has(key),
  );
  return datasetKeywordsCache;
}

/**
 * Case-insensitive parameter lookup: the dataset keys parameters by lowercase
 * key but scripts write canonical names (`MaxDamage` vs `maxdamage`).
 */
export function getZedParameter(
  block: ZedBlockData,
  propertyName: string,
): ZedParameter | null {
  if (!propertyName) return null;
  const lower = propertyName.toLowerCase();
  const param = block.parameters.get(lower);
  if (param) return param;
  // Fallback: canonical-name scan (covers keys that are not a pure lowercase
  // of the written name, e.g. dataset `ISBaseComponentPanel`-style keys).
  for (const param of block.parameters.values()) {
    if (param.name.toLowerCase() === lower) return param;
  }
  return null;
}

/**
 * All known script-block keywords: dataset keys ∪ scanner keywords.
 * Normalized to lowercase — the dataset stores mixed-case keys
 * (e.g. "craftRecipe", "component ContextMenuConfig") while header scanning
 * compares case-insensitively.
 */
let knownBlockNamesCache: Set<string> | null = null;

/**
 * All known script-block keywords: dataset keys ∪ scanner keywords ∪
 * vanilla-verified extras. Normalized to lowercase — the dataset stores
 * mixed-case keys (e.g. "craftRecipe", "component ContextMenuConfig") while
 * header scanning compares case-insensitively. Memoized per process.
 */
export function getKnownBlockNames(): Set<string> {
  if (knownBlockNamesCache) return knownBlockNamesCache;
  const knowledge = getZedScriptsKnowledge();
  const names = new Set<string>();
  for (const key of knowledge.blocks.keys()) {
    names.add(key.toLowerCase());
  }
  // Scanner-recognized keywords that may not be dataset entries.
  for (const keyword of [
    "module",
    "mod",
    "event",
    "bodylocation",
    "creature",
    "outputs",
    "inputs",
  ]) {
    names.add(keyword);
  }
  // Block keywords verified against the real game tree that the dataset does
  // not model at all (e.g. `xuiConfig` in xui/xui_config.txt) — the game
  // loads them, so they must never be flagged as unknown blocks.
  for (const keyword of getVanillaVerified().blockKeywords) {
    names.add(keyword.toLowerCase());
  }
  knownBlockNamesCache = names;
  return names;
}

/**
 * Vanilla-verified extensions (zedData/vanillaVerified.json, regenerated by
 * scripts/_extract_vanilla_verified.mjs from a real game install): block
 * keywords and parameters observed in the vanilla script tree that the
 * vendored pz-scripts-data dataset does not model. The game files are the
 * newest verified Build 42 documentation, so these are accepted rather than
 * flagged as unknown — "verified game data wins" conflict resolution.
 */
export interface VanillaVerifiedData {
  source: {
    generatedBy: string;
    gameInstall: string;
    gameVersion: string;
    scannedFiles: number;
    note: string;
  };
  /** Block keywords seen in vanilla that the dataset does not model. */
  blockKeywords: string[];
  /**
   * Extra parameters per dataset block key (canonical spelling, e.g.
   * "component SpriteConfig") verified against the vanilla tree.
   */
  extraParameters: Record<string, string[]>;
}

let vanillaVerifiedCache: VanillaVerifiedData | null = null;

/** Lazily load the vanilla-verified extensions (memoized per process). */
export function getVanillaVerified(): VanillaVerifiedData {
  if (vanillaVerifiedCache) return vanillaVerifiedCache;
  vanillaVerifiedCache = loadJson(
    "vanillaVerified.json",
  ) as VanillaVerifiedData;
  return vanillaVerifiedCache;
}

/**
 * Extra parameters verified against the real game tree for a dataset block
 * key. Case-insensitive — matches the knowledge layer's multi-token lookup
 * (a script writing `component spriteconfig` resolves to the same entry).
 */
export function getVanillaVerifiedParameters(blockKey: string): string[] {
  const data = getVanillaVerified();
  const direct = data.extraParameters[blockKey];
  if (direct) return direct;
  const lower = blockKey.toLowerCase();
  for (const [key, params] of Object.entries(data.extraParameters)) {
    if (key.toLowerCase() === lower) return params;
  }
  return [];
}
