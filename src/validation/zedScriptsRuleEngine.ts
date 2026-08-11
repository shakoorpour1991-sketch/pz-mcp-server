/**
 * ZedScripts rule engine — deterministic Project Zomboid script diagnostics.
 *
 * A faithful port of the validation logic in the ZedScripts VS Code extension
 * (https://github.com/PZ-Wiki-Modding/ZedScripts) — its diagnostic catalog
 * (DiagnosticType.ts) and parameter/block checkers (scriptsBlocksParameter.ts,
 * scriptsBlocks.ts, scriptsBlocksProperties.ts) — driven by the vendored
 * pz-scripts-data dataset (see zedScriptsKnowledge.ts). Nothing here asks an
 * LLM to judge code: every rule is grounded in the dataset's machine-readable
 * knowledge (allowed parameters, types, values, required flags, deprecations,
 * dependent parameters, ID rules) plus the ported lexical checks (commas,
 * block keywords, craftRecipe input/output shapes).
 *
 * Design rules:
 *  - Deterministic and offline: no game-DB lookups (the existing
 *    ValidationEngine already owns reference/DB checks; check_references is
 *    the dedicated reference tool).
 *  - Reuses the shared block scanner (single source of truth for block
 *    boundaries), so this layer can never drift from the parser/validator.
 *  - Version-aware: knowledge is tagged with its upstream dataset commit
 *    (SOURCe metadata in zedScriptsKnowledge.ts). Legacy B41 `recipe` blocks
 *    are intentionally left to the existing lenient checks (the dataset is
 *    Build 42 focused); B42 `craftRecipe` blocks get the full knowledge.
 *  - Severities: errors only for facts the dataset states (wrong value, wrong
 *    type, missing required parameter, malformed item reference); warnings for
 *    unknown parameters/deprecations/formatting (plausible-but-suspicious).
 */
import {
  countBraces,
  scanScriptBlocks,
  stripLineComments,
  type ScanBlock,
} from "../utils/scriptScanner.js";
import { matchPropertyLine } from "../utils/scriptSyntax.js";
import {
  allowsAnyParameter,
  getDatasetBlockKeywords,
  getKnownBlockNames,
  getVanillaVerifiedParameters,
  getZedBlock,
  getZedParameter,
  ZED_VALUE_TYPES as VT,
  type ZedBlockData,
  type ZedParameter,
  type ZedParameterTypeInfo,
} from "./zedScriptsKnowledge.js";

type ZedDiagnosticSeverity = "error" | "warning" | "info";

/**
 * Diagnostic provenance — distinguishes the checks we ported verbatim from
 * the ZedScripts extension (ORIGINAL_ZEDSCRIPT) from the extensions this
 * server adds on top (dev_functionality: deep-scan hierarchy checks, …).
 */
type ZedProvenance = "ORIGINAL_ZEDSCRIPT" | "dev_functionality";

/** One structured diagnostic produced by the ZedScripts layer. */
export interface ZedDiagnostic {
  /** ZedScripts diagnostic id (e.g. "UNKNOWN_PARAMETER"). */
  code: string;
  severity: ZedDiagnosticSeverity;
  /** Source file, when the content was read from disk. */
  file?: string;
  /** 1-based line in the validated content. */
  line: number;
  /** 0-based column when known. */
  column?: number;
  message: string;
  /** The offending property / block keyword. */
  property?: string;
  /** The offending value, when a value is at fault. */
  value?: string;
  /** What the value should have been. */
  expected?: string;
  /** Actionable correction. */
  /**
   * Whether this check is a verbatim port of the ZedScripts extension
   * (ORIGINAL_ZEDSCRIPT) or a server extension (dev_functionality).
   */
  provenance?: ZedProvenance;
  suggestion?: string;
  /** Always "zedscripts" so callers can distinguish knowledge-layer findings. */
  source: "zedscripts";
}

interface ZedScriptsDiagnosticsOptions {
  /** File the content came from — attached to every diagnostic. */
  filePath?: string;
}

/**
 * Server-verified parameters the dataset omits (conflict resolution).
 *
 * The pz-scripts-data dataset is the primary knowledge source, but a handful
 * of parameters this server has independently verified against Build 42.20
 * (present in its own fixture corpus / generator output / KB docs) are missing
 * from it. They are allowlisted per block so the dataset's unknown-parameter
 * check never false-positives on them:
 *  - evolvedrecipe `Ingredients` / `Time` — used by vanilla Build 42 evolved
 *    recipes (BaseItem + Ingredients + ResultItem) and by this server's
 *    generate_script evolvedrecipe output and fixture corpus.
 */
/**
 * Server-verified required-parameter exceptions (conflict resolution).
 *
 * The dataset marks these parameters required, but the parsed Build 42.20
 * vanilla files omit them — verified against the real game install, so the
 * verified game data wins and the check is skipped:
 *  - character_trait_definition `UIDescription` — ~140 vanilla traits ship
 *    without it (it defaults server-side);
 *  - component CraftRecipe `tags` — vanilla entity craft recipes define
 *    recipes via category/time/inputs without any tags.
 */
const REQUIRED_PARAMETER_EXCEPTIONS: Record<string, string[]> = {
  character_trait_definition: ["UIDescription"],
  "component CraftRecipe": ["tags"],
};

/**
 * Server-verified parent exceptions (conflict resolution).
 *
 * The dataset's `parents` lists are extended where the parsed 42.20 vanilla
 * files contradict them (the game still loads the scripts):
 *  - `passenger` — vanilla vehicle *templates* contain passenger blocks even
 *    though the dataset only lists `vehicle` as a parent.
 */
const PARENT_EXCEPTIONS: Record<string, string[]> = {
  passenger: ["template"],
};

// ---------------------------------------------------------------------------
// Diagnostic catalog (ported from ZedScripts DiagnosticType / DiagnosticMetadata)
// ---------------------------------------------------------------------------

type MsgParams = Record<string, string>;

function fmt(template: string, params: MsgParams): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in params ? params[key] : `{${key}}`,
  );
}

const MESSAGES: Record<string, string> = {
  NOT_VALID_BLOCK: "'{scriptBlock}' is an unknown script block.",
  MISSING_ID: "'{scriptBlock}' block is missing an ID.",
  HAS_ID: "'{scriptBlock}' block cannot have an ID.",
  INVALID_ID:
    "'{scriptBlock}' block has an invalid ID '{id}'. Valid IDs are: {validIDs}.",
  ID_CANNOT_CONTAIN_SPACES:
    "ID '{id}' of '{scriptBlock}' block cannot contain spaces.",
  MISSING_CHILD_BLOCK:
    "'{scriptBlock}' block must have child blocks: {childBlocks}. This might be intentional for soft overrides of an existing block.",
  WRONG_PARENT:
    "'{scriptBlock}' block cannot appear inside '{actualParent}'. Allowed parents are: {parents}.",
  MISSING_PARENT:
    "'{scriptBlock}' block must be declared inside one of: {parents}.",
  UNKNOWN_PARAMETER:
    "'{parameter}' is an unknown parameter for '{scriptBlock}' block.",
  MISSING_PARAMETER:
    "'{scriptBlock}' block is missing required parameter(s): {parameters}.",
  DUPLICATE_PARAMETER:
    "'{parameter}' is defined multiple times in '{scriptBlock}' block.",
  MISSING_VALUE: "Missing a value.",
  WRONG_VALUE:
    "'{value}' is not a valid value for parameter '{parameter}'. Valid values are: {validValues}.",
  WRONG_VALUES:
    "Invalid values for parameter '{parameter}' ({invalidValues}). Valid values are: {validValues}.",
  DEPRECATED_PARAMETER: "This parameter is deprecated. {description}",
  DEPRECATED_PARAMETER_REPLACEMENT:
    "This parameter is deprecated and replaced by '{replacement}'. {description}",
  DEPRECATED_PARAMETER_VERSION:
    "This parameter is deprecated since version '{version}'. {description}",
  DEPRECATED_PARAMETER_REPLACEMENT_VERSION:
    "This parameter is deprecated since version '{version}' and replaced by '{replacement}'. {description}",
  INVALID_TYPE_FOR_VALUE:
    "Type '{type}' of '{parameter}' is invalid for value '{value}'. Expected type is '{expectedType}'.",
  INVALID_TYPE_FOR_VALUES_OBJECT:
    "Values {invalidTypeValues} of '{parameter}' don't have a valid type. Expected types are '{keyType}' for keys and '{valueType}' for values, with '{keyValueSeparator}' as separator.",
  INVALID_OBJECT_FORMAT:
    "Values {values} for parameter '{parameter}' do not follow the expected 'key{keyValueSeparator}value' format.",
  NO_BLOCK_REF:
    "No block reference found in value '{value}' for parameter '{parameter}'. Something might be wrong with the value.",
  CANNOT_PROVIDE_MODULE:
    "Referencing a block cannot be done with the full type ('module.block') for '{parameter}'. Make sure the value only contains the ID of the block to reference. This usually means the game defaults to a 'Base' module.",
  INVALID_AMOUNT: "'{amount}' is not a valid amount for '{type}'.",
  INTEGER_AMOUNT: "'{amount}' should be an integer for '{type}'.",
  DUPLICATE_PROPERTY: "'{property}' is provided multiple times.",
  MISSING_ONEOF_PROPERTY:
    "'{type}' is missing at least one of the following properties: {properties}.",
  NO_DOTS_ITEM: "An item type (ID) cannot have dots '.' in its name. ({value})",
  MISSING_MODULE:
    "The provided item type (ID) is missing its module part: 'module.type'. ({value})",
  ALL_WITH_OTHERS:
    "'*' was provided along with other item types. '*' must be used alone.",
  SPACES_IN_ITEM:
    "An item full type (module and ID) cannot contain spaces. ({value})",
  INVALID_VALUE:
    "'{value}' is not a valid value for '{property}'. Valid values are: {validValues}.",
  MISSING_COMMA: "Missing comma.",
  INVALID_COMMA: "Invalid comma.",
};

/**
 * Severity mapping (ported from ZedScripts severity usage):
 *  - Error: facts the dataset states (wrong value/type, missing required,
 *    malformed refs, invalid ID/amounts).
 *  - Warning: plausible-but-suspicious (unknown parameter, deprecated,
 *    formatting, missing commas, legacy-style issues).
 */
const SEVERITIES: Record<string, ZedDiagnosticSeverity> = {
  NOT_VALID_BLOCK: "warning",
  MISSING_ID: "error",
  HAS_ID: "warning",
  INVALID_ID: "error",
  ID_CANNOT_CONTAIN_SPACES: "warning",
  MISSING_CHILD_BLOCK: "warning",
  WRONG_PARENT: "warning",
  MISSING_PARENT: "warning",
  UNKNOWN_PARAMETER: "warning",
  MISSING_PARAMETER: "error",
  DUPLICATE_PARAMETER: "warning",
  MISSING_VALUE: "warning",
  WRONG_VALUE: "error",
  WRONG_VALUES: "error",
  DEPRECATED_PARAMETER: "warning",
  DEPRECATED_PARAMETER_REPLACEMENT: "warning",
  DEPRECATED_PARAMETER_VERSION: "warning",
  DEPRECATED_PARAMETER_REPLACEMENT_VERSION: "warning",
  INVALID_TYPE_FOR_VALUE: "error",
  INVALID_TYPE_FOR_VALUES_OBJECT: "error",
  INVALID_OBJECT_FORMAT: "error",
  NO_BLOCK_REF: "warning",
  CANNOT_PROVIDE_MODULE: "error",
  INVALID_AMOUNT: "error",
  INTEGER_AMOUNT: "warning",
  DUPLICATE_PROPERTY: "warning",
  MISSING_ONEOF_PROPERTY: "error",
  NO_DOTS_ITEM: "error",
  MISSING_MODULE: "warning",
  ALL_WITH_OTHERS: "error",
  SPACES_IN_ITEM: "error",
  INVALID_VALUE: "error",
  MISSING_COMMA: "warning",
  INVALID_COMMA: "warning",
};

// Catalog note — MISSING_ONEOF_PROPERTY is a faithful port of the upstream
// DiagnosticType.ts entry but is deliberately NOT emitted: the dataset's
// `oneOf` markers are JSON-schema style input-entry requirements (already
// covered by the craftRecipe inputs/outputs port), not block-level "one of
// these parameters" groups. It stays in the catalog so the port remains
// traceable to the upstream file.

function formatList(values: Array<string | number | boolean>): string {
  return values.map((v) => `'${String(v)}'`).join(", ");
}

// ---------------------------------------------------------------------------
// Small helpers (ported from ZedScripts scriptsBlocksParameter.ts)
// ---------------------------------------------------------------------------

/**
 * Port of ZedScripts `tryTypeOfValue`: infer the type of a raw script value
 * against an expected type. Booleans are only booleans when the expected type
 * asks for one; numbers are ints unless a float is expected.
 */
function tryTypeOfValue(value: string, expectedType: string): string {
  const v = value.trim();
  if (expectedType === VT.STRING) return VT.STRING;
  if (expectedType === VT.BLOCK) return VT.BLOCK;
  if (expectedType === VT.CALLBACK) return VT.CALLBACK;
  if (expectedType === VT.TRANSLATION) return VT.TRANSLATION;
  const lower = v.toLowerCase();
  if (lower === "true" || lower === "false") return VT.BOOLEAN;
  if (v !== "" && !isNaN(Number(v))) {
    if (v.includes(".")) {
      // Integral floats ("30.0") satisfy integer-typed parameters — the game
      // coerces them, and B41-style writers use them habitually.
      if (expectedType === VT.INT && Number.isInteger(Number(v))) return VT.INT;
      return VT.FLOAT;
    }
    if (expectedType === VT.FLOAT) return VT.FLOAT;
    return VT.INT;
  }
  return VT.STRING;
}

/** Split a raw value into the list of values used for allowed-value checks. */
function splitValueList(raw: string, param: ZedParameter): string[] {
  if (param.type?.main === VT.ARRAY && param.type.array) {
    return raw
      .split(param.type.array.separator)
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
  }
  if (param.type?.main === VT.OBJECT && param.type.object) {
    return raw
      .split(param.type.object.pairsSeparator)
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
  }
  const trimmed = raw.trim();
  return trimmed === "" ? [] : [trimmed];
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return dp[a.length][b.length];
}

/** Nearest known names within `maxDist` edits, up to `limit`. */
function closestNames(
  candidate: string,
  known: string[],
  maxDist = 2,
  limit = 3,
): string[] {
  const scored = known
    .map((name) => ({
      name,
      dist: levenshtein(candidate.toLowerCase(), name.toLowerCase()),
    }))
    .filter((s) => s.dist > 0 && s.dist <= maxDist)
    .sort((x, y) => x.dist - y.dist);
  return scored.slice(0, limit).map((s) => s.name);
}

// ---------------------------------------------------------------------------
// Diagnostics collector
// ---------------------------------------------------------------------------

/**
 * Diagnostic codes that are this server's extensions, not ZedScripts ports.
 * Everything else is a faithful port of the extension's checks and is tagged
 * ORIGINAL_ZEDSCRIPT. Add new dev extensions here so the provenance stays
 * honest.
 */
const DEV_FUNCTIONALITY_CODES = new Set<string>([
  // Hierarchy checks over the deep-scanned block tree (nested blocks with a
  // parent field) — the ZedScripts extension has no equivalent diagnostics.
  "WRONG_PARENT",
  "MISSING_PARENT",
]);

class Collector {
  readonly diagnostics: ZedDiagnostic[] = [];

  constructor(private readonly filePath?: string) {}

  add(d: Omit<ZedDiagnostic, "source">): void {
    const diag: ZedDiagnostic = {
      ...d,
      source: "zedscripts",
      provenance: DEV_FUNCTIONALITY_CODES.has(d.code)
        ? ("dev_functionality" as const)
        : ("ORIGINAL_ZEDSCRIPT" as const),
    };
    if (this.filePath !== undefined) diag.file = this.filePath;
    this.diagnostics.push(diag);
  }
}

// ---------------------------------------------------------------------------
// Main entry
// ---------------------------------------------------------------------------

/**
 * Run the ZedScripts diagnostic layer over script content.
 *
 * Returns structured diagnostics (file/line/column/code/severity/message/
 * property/value/expected/suggestion) that the ValidationEngine merges into
 * its existing result — this is an extension of the existing validator, not a
 * parallel one.
 */
export function runZedScriptsDiagnostics(
  content: string,
  options: ZedScriptsDiagnosticsOptions = {},
): ZedDiagnostic[] {
  const collector = new Collector(options.filePath);
  // Deep scan: every dataset block keyword is recognized at any brace depth
  // (multi-token variants included) and each block carries its `parent`, so
  // nested blocks (components inside items/entities, clips inside sounds,
  // parts inside vehicles, ...) are validated against their own knowledge
  // instead of leaking their lines into the enclosing block. The parser and
  // the legacy flat path are untouched — this is opt-in.
  const blocks = scanScriptBlocks(content, "Base", {
    nested: true,
    keywords: getDatasetBlockKeywords(),
  });

  for (const block of blocks) {
    validateBlockContext(block, collector);
    validateBlockHeader(block, blocks, collector);
    validateBlockParameters(block, collector);
    // Case-insensitive: the deep scanner matches keywords in any case.
    if (block.rawType.toLowerCase() === "craftrecipe") {
      validateCraftRecipeSections(block, collector);
    }
  }

  validateModuleLevelHeaders(content, collector);
  return collector.diagnostics;
}

// ---------------------------------------------------------------------------
// Block-level checks (ported from ZedScripts scriptsBlocks.ts validateID)
// ---------------------------------------------------------------------------

/**
 * Resolve the block that effectively encloses `block`: its `parent` rawType,
 * "module" for top-level blocks inside a module, or undefined at the file
 * root. The `components` container is transparent — its children are
 * component blocks whose dataset parents name the containing item/entity.
 */
function effectiveParent(block: ScanBlock): string | "module" | undefined {
  if (block.parent === "components") return "entity";
  return block.parent;
}

/**
 * Hierarchy checks (ported WRONG_PARENT / MISSING_PARENT): a block may only
 * appear where the dataset's `parents` list allows it. Facts are emitted as
 * warnings — a wrong parent rarely breaks parsing, but it is exactly the
 * kind of plausible-looking AI mistake this layer exists to catch.
 */
function validateBlockContext(block: ScanBlock, out: Collector): void {
  const blockData = getZedBlock(block.rawType);
  if (!blockData) return;
  const extra = PARENT_EXCEPTIONS[blockData.key] ?? [];
  const parents = [...(blockData.parents ?? []), ...extra].map((p) =>
    p.toLowerCase(),
  );
  if (parents.length === 0) return;
  const allowedList = formatList([...(blockData.parents ?? []), ...extra]);

  const actual = effectiveParent(block);
  if (actual === "module") {
    if (!parents.includes("module")) {
      out.add({
        code: "WRONG_PARENT",
        severity: SEVERITIES.WRONG_PARENT,
        line: block.startLine,
        message: fmt(MESSAGES.WRONG_PARENT, {
          scriptBlock: block.rawType,
          actualParent: "a module",
          parents: allowedList,
        }),
        value: block.rawType,
        expected: allowedList,
        suggestion: `Move the ${block.rawType} block inside one of: ${allowedList}.`,
      });
    }
    return;
  }
  if (actual === undefined) {
    // File root: only ROOT-* constructs (alias/blend/layers) live there.
    if (!parents.some((p) => p.startsWith("root-"))) {
      out.add({
        code: "MISSING_PARENT",
        severity: SEVERITIES.MISSING_PARENT,
        line: block.startLine,
        message: fmt(MESSAGES.MISSING_PARENT, {
          scriptBlock: block.rawType,
          parents: allowedList,
        }),
        value: block.rawType,
        expected: allowedList,
        suggestion: `The ${block.rawType} block must be declared inside one of: ${allowedList}.`,
      });
    }
    return;
  }
  if (!parents.includes(actual.toLowerCase())) {
    out.add({
      code: "WRONG_PARENT",
      severity: SEVERITIES.WRONG_PARENT,
      line: block.startLine,
      message: fmt(MESSAGES.WRONG_PARENT, {
        scriptBlock: block.rawType,
        actualParent: actual,
        parents: allowedList,
      }),
      value: actual,
      expected: allowedList,
      suggestion: `Move the ${block.rawType} block inside one of: ${allowedList}.`,
    });
  }
}

/** Does the block contain a `name { ... }` section (inputs/outputs/etc.)? */
function blockHasSection(block: ScanBlock, sectionName: string): boolean {
  // Block-comment state is threaded across lines (mirroring the shared
  // scanner and validateBlockParameters) so a section header inside a
  // multi-line /* ... */ comment can never satisfy the requirement.
  let inBlockComment = false;
  for (const line of block.content.slice(1)) {
    const { code, inBlockComment: newState } = stripLineComments(
      line,
      inBlockComment,
    );
    inBlockComment = newState;
    const stripped = code.trim();
    if (stripped === sectionName || stripped.startsWith(`${sectionName} {`)) {
      return true;
    }
  }
  return false;
}

/** Does `block` have a scanned child block of the given rawType? */
function blockHasChild(
  block: ScanBlock,
  allBlocks: ScanBlock[],
  childType: string,
): boolean {
  return allBlocks.some(
    (b) =>
      b.parent !== undefined &&
      b.parent.toLowerCase() === block.rawType.toLowerCase() &&
      b.rawType.toLowerCase() === childType.toLowerCase(),
  );
}

function validateBlockHeader(
  block: ScanBlock,
  allBlocks: ScanBlock[],
  out: Collector,
): void {
  const blockData = getZedBlock(block.rawType);
  if (!blockData) return;

  // `template vehicle <Name>` headers carry a type qualifier before the ID
  // (verified against the 42.20 vanilla vehicle scripts) — drop it so the ID
  // rules apply to the actual name. Only the FIRST token is the qualifier;
  // the rest is the (possibly multi-word) template name, kept whole — the
  // old code kept only the last token, so `template vehicle My Van` was
  // checked as `Van`.
  let id = block.name;
  if (block.rawType.toLowerCase() === "template" && id.includes(" ")) {
    const tokens = id.split(/\s+/).filter((t) => t !== "");
    id = tokens.length > 1 ? tokens.slice(1).join(" ") : id;
  }
  const parent = effectiveParent(block);
  const parentName = parent === undefined ? "" : String(parent);

  // ID rules (ported validateID): the dataset describes whether a block has
  // an ID and what it may look like. Context-sensitive rules:
  //  - parentsWithout: inside those parents the block is ID-less (the parent
  //    provides the identity), so a name is a HAS_ID mistake;
  //  - optional: the ID may be omitted under those parents (nothing to flag).
  // (`ID.forbidden` is documented in the dataset but deliberately NOT
  // enforced — see the note in the values branch below.)
  if (blockData.id) {
    const noIdHere =
      (blockData.id.parentsWithout ?? []).length > 0 &&
      parentName !== "" &&
      blockData.id.parentsWithout!.some(
        (p) => p.toLowerCase() === parentName.toLowerCase(),
      );
    if (noIdHere) {
      if (id !== "") {
        out.add({
          code: "HAS_ID",
          severity: SEVERITIES.HAS_ID,
          line: block.startLine,
          message: fmt(MESSAGES.HAS_ID, { scriptBlock: block.rawType }),
          value: id,
          suggestion: `The ${block.rawType} block inside '${parentName}' must not have an ID — remove '${id}'.`,
        });
      }
    } else {
      // Default is no spaces; only blocks that explicitly allow them
      // (fixing/evolvedrecipe/character_trait_definition) pass through.
      const hasSpaceIssue = !blockData.id.canHaveSpace && id.includes(" ");
      if (hasSpaceIssue) {
        out.add({
          code: "ID_CANNOT_CONTAIN_SPACES",
          severity: SEVERITIES.ID_CANNOT_CONTAIN_SPACES,
          line: block.startLine,
          message: fmt(MESSAGES.ID_CANNOT_CONTAIN_SPACES, {
            scriptBlock: block.rawType,
            id,
          }),
          value: id,
          suggestion: "Remove spaces from the block ID (use a single token).",
        });
      }
      // A spaced ID already got its (more specific) diagnostic above — the
      // values check would just double-report the same header with a less
      // useful message ("not in valid IDs" instead of "cannot contain
      // spaces"), so it short-circuits here.
      if (
        !hasSpaceIssue &&
        blockData.id.values &&
        !blockData.id.values.includes(id)
      ) {
        const suggestions = closestNames(id, blockData.id.values);
        out.add({
          code: "INVALID_ID",
          severity: SEVERITIES.INVALID_ID,
          line: block.startLine,
          message: fmt(MESSAGES.INVALID_ID, {
            scriptBlock: block.rawType,
            id,
            validIDs: formatList(blockData.id.values),
          }),
          value: id,
          expected: blockData.id.values.join(" / "),
          suggestion:
            suggestions.length > 0
              ? `Use one of: ${formatList(blockData.id.values)} (did you mean: ${suggestions.join(", ")}?)`
              : `Use one of: ${formatList(blockData.id.values)}.`,
        });
      }
      // Note: `ID.forbidden` exists in the dataset (e.g. xuiSkin forbids
      // 'default') but ZedScripts never implements it, and the real game
      // scripts use `xuiSkin default` everywhere — so it is deliberately
      // NOT enforced here (enforcing it would flag every vanilla XUI skin).
    }
  } else if (id) {
    // No ID data — this block type takes no ID.
    out.add({
      code: "HAS_ID",
      severity: SEVERITIES.HAS_ID,
      line: block.startLine,
      message: fmt(MESSAGES.HAS_ID, { scriptBlock: block.rawType }),
      value: id,
    });
  }

  // needsChildren (ported validateChildren) — craftRecipe requires an inputs
  // section, component variants require their face/contextEntry children;
  // flagged as a hint-level warning (soft overrides are legal). Nested
  // children are found both in the raw content (inputs/outputs stay there)
  // and among the scanned child blocks (face/contextEntry are keywords).
  if (blockData.needsChildren && blockData.needsChildren.length > 0) {
    for (const needed of blockData.needsChildren) {
      const present =
        blockHasSection(block, needed) ||
        blockHasChild(block, allBlocks, needed);
      if (!present) {
        out.add({
          code: "MISSING_CHILD_BLOCK",
          severity: SEVERITIES.MISSING_CHILD_BLOCK,
          line: block.startLine,
          message: fmt(MESSAGES.MISSING_CHILD_BLOCK, {
            scriptBlock: block.rawType,
            childBlocks: formatList(blockData.needsChildren),
          }),
          expected: needed,
          suggestion: `Add a '${needed}' { ... } section to the ${block.rawType} block.`,
        });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Parameter checks (ported from ZedScripts scriptsBlocksParameter.ts validate)
// ---------------------------------------------------------------------------

/** Separator style per block raw type (matches the parser's own convention). */
function separatorFor(rawType: string): "=" | ":" | "[:=]" {
  // Case-insensitive: the deep scanner matches keywords in any case.
  switch (rawType.toLowerCase()) {
    case "recipe":
      return "[:=]";
    case "evolvedrecipe":
    case "fixing":
      return ":";
    default:
      return "=";
  }
}

interface ParsedProperty {
  key: string;
  rawValue: string;
  hasComma: boolean;
  line: number;
  column: number;
}

function validateBlockParameters(block: ScanBlock, out: Collector): void {
  const blockData = getZedBlock(block.rawType);
  // Blocks the dataset models with zero parameters are unmodeled — guessing
  // their property names/values would false-positive on valid scripts (e.g.
  // vehicle `template`/`table` blocks, the `components` container, `lua`
  // hooks), so no parameter-level checks are emitted for them.
  if (blockData && blockData.parameters.size === 0) return;
  const separator = separatorFor(block.rawType);

  const parsed: ParsedProperty[] = [];
  const seen = new Map<string, number>(); // lowercase key → index of first occurrence

  let inBlockComment = false;
  for (let i = 1; i < block.content.length; i++) {
    const rawLine = block.content[i];
    const { code, inBlockComment: newState } = stripLineComments(
      rawLine,
      inBlockComment,
    );
    inBlockComment = newState;
    const line = code.trim();
    if (!line) continue;

    const lineNumber = block.startLine + i;

    // Missing-value property lines ("Key = ,") don't match the value regex.
    const emptyMatch = line.match(/^([A-Za-z_]\w*)\s*[:=]\s*,?\s*$/);
    if (emptyMatch) {
      const param = blockData
        ? getZedParameter(blockData, emptyMatch[1])
        : null;
      if (param && !param.canBeEmpty) {
        out.add({
          code: "MISSING_VALUE",
          severity: SEVERITIES.MISSING_VALUE,
          line: lineNumber,
          column: line.indexOf(emptyMatch[1]),
          message: fmt(MESSAGES.MISSING_VALUE, { parameter: emptyMatch[1] }),
          property: emptyMatch[1],
          suggestion: `Provide a value for '${emptyMatch[1]}' (e.g. ${emptyMatch[1]} = <value>,).`,
        });
      }
      continue;
    }

    // Double-comma property lines ("ItemType = base:weapon,,") can never
    // match the property regex — they were silently dropped before. Flag
    // them with the ported INVALID_COMMA instead (ZedScripts parity). Only
    // TRAILING double commas are checked: list values legitimately contain
    // single commas mid-value ("Base.A, Base.B,"), and a quoted string can
    // contain ",," — a trailing ",," is the only unambiguous double comma.
    if (/,,\s*$/.test(line)) {
      const propName = line.split(/[:=]/)[0].trim();
      out.add({
        code: "INVALID_COMMA",
        severity: SEVERITIES.INVALID_COMMA,
        line: lineNumber,
        column: line.indexOf(",,"),
        message: fmt(MESSAGES.INVALID_COMMA, {}),
        property: propName,
        suggestion: `Double commas are invalid — use a single trailing comma: '${line.replace(/,+$/, ",")}'.`,
      });
      continue;
    }

    const match = matchPropertyLine(line, separator);
    if (!match) continue;

    const hasComma = /,\s*$/.test(line);
    const column = line.indexOf(match.key);
    parsed.push({
      key: match.key,
      rawValue: match.value,
      hasComma,
      line: lineNumber,
      column,
    });

    const lowerKey = match.key.toLowerCase();
    if (!seen.has(lowerKey)) {
      seen.set(lowerKey, parsed.length - 1);
    }
  }

  for (const prop of parsed) {
    validateParameter(block, blockData, prop, out);
  }

  // Required parameters (ported MISSING_PARAMETER) — driven by the dataset's
  // `required` flag. The existing engine already enforces `item`'s required
  // ItemType (MISSING_PROPERTY), so it is not duplicated here.
  if (blockData) {
    for (const param of blockData.parameters.values()) {
      if (param.required !== true) continue;
      if (blockData.key === "item" && param.key === "itemtype") continue;
      const exempt =
        REQUIRED_PARAMETER_EXCEPTIONS[blockData.key]?.some(
          (n) => n.toLowerCase() === param.name.toLowerCase(),
        ) ?? false;
      if (exempt) continue;
      if (blockParameterValue(block, param.name) !== undefined) continue;
      out.add({
        code: "MISSING_PARAMETER",
        severity: SEVERITIES.MISSING_PARAMETER,
        line: block.startLine,
        message: fmt(MESSAGES.MISSING_PARAMETER, {
          scriptBlock: block.rawType,
          parameters: formatList([param.name]),
        }),
        property: param.name,
        expected: `${param.name} = <value>`,
        suggestion: `Add the required parameter '${param.name}' (e.g. ${param.name} = <value>,) to the ${block.rawType} block.`,
      });
    }
  }

  // Duplicate parameters (ported: DUPLICATE_PARAMETER) — only the later
  // occurrences are flagged, so N duplicates yield N-1 diagnostics.
  for (let idx = 0; idx < parsed.length; idx++) {
    const prop = parsed[idx];
    const lowerKey = prop.key.toLowerCase();
    const firstIndex = seen.get(lowerKey);
    if (
      firstIndex !== undefined &&
      idx > firstIndex &&
      !isAllowedDuplicate(blockData, prop.key)
    ) {
      out.add({
        code: "DUPLICATE_PARAMETER",
        severity: SEVERITIES.DUPLICATE_PARAMETER,
        line: prop.line,
        column: prop.column,
        message: fmt(MESSAGES.DUPLICATE_PARAMETER, {
          parameter: prop.key,
          scriptBlock: block.rawType,
        }),
        property: prop.key,
        suggestion: `Keep only one '${prop.key}' definition in the ${block.rawType} block.`,
      });
    }
  }
}

function isAllowedDuplicate(
  blockData: ZedBlockData | null,
  key: string,
): boolean {
  if (!blockData) return true; // legacy blocks: no knowledge → no duplicate rule
  const param = getZedParameter(blockData, key);
  return param?.allowedDuplicate === true;
}

function validateParameter(
  block: ScanBlock,
  blockData: ZedBlockData | null,
  prop: ParsedProperty,
  out: Collector,
): void {
  // Unknown parameter (ported UNKNOWN_PARAMETER, Hint → warning). Blocks
  // whose dataset entry carries the "_ANY" sentinel accept any property name.
  if (!blockData) return;
  if (allowsAnyParameter(blockData)) return;
  const extraKnown = getVanillaVerifiedParameters(blockData.key);
  const param =
    getZedParameter(blockData, prop.key) ??
    (extraKnown.some((n) => n.toLowerCase() === prop.key.toLowerCase())
      ? ({ name: prop.key, key: prop.key.toLowerCase() } as ZedParameter)
      : null);
  if (!param) {
    // Suggest from dataset parameters AND vanilla-verified extras, so a typo
    // of a verified parameter (e.g. `dontNeedFram`) still gets a hint.
    const validNames = [
      ...[...blockData.parameters.values()].map((p) => p.name),
      ...extraKnown,
    ];
    const suggestions = closestNames(prop.key, validNames);
    out.add({
      code: "UNKNOWN_PARAMETER",
      severity: SEVERITIES.UNKNOWN_PARAMETER,
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES.UNKNOWN_PARAMETER, {
        parameter: prop.key,
        scriptBlock: block.rawType,
      }),
      property: prop.key,
      suggestion:
        suggestions.length > 0
          ? `Did you mean: ${suggestions.join(", ")}? Otherwise remove it — the game ignores unknown parameters.`
          : "Remove it — the game ignores unknown parameters.",
    });
    return;
  }

  // Deprecated (ported getDeprecatedInformation).
  if (param.deprecated) {
    const depr = param.deprecated;
    const description = depr.description || "";
    const params: MsgParams = { description };
    let code = "DEPRECATED_PARAMETER";
    if (depr.replacedBy && depr.version) {
      code = "DEPRECATED_PARAMETER_REPLACEMENT_VERSION";
      params.replacement = depr.replacedBy;
      params.version = depr.version;
    } else if (depr.replacedBy) {
      code = "DEPRECATED_PARAMETER_REPLACEMENT";
      params.replacement = depr.replacedBy;
    } else if (depr.version) {
      code = "DEPRECATED_PARAMETER_VERSION";
      params.version = depr.version;
    }
    out.add({
      code,
      severity: SEVERITIES[code],
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES[code], params).trim(),
      property: prop.key,
      suggestion: depr.replacedBy
        ? `Replace deprecated parameter '${prop.key}' with '${depr.replacedBy}'.`
        : "Remove this deprecated parameter.",
    });
  }

  // Missing value.
  if (prop.rawValue.trim() === "" && !param.canBeEmpty) {
    out.add({
      code: "MISSING_VALUE",
      severity: SEVERITIES.MISSING_VALUE,
      line: prop.line,
      column: prop.column + prop.key.length + 1,
      message: fmt(MESSAGES.MISSING_VALUE, { parameter: prop.key }),
      property: prop.key,
      suggestion: `Provide a value for '${prop.key}'.`,
    });
  }

  // Allowed values (ported getForbiddenValues + WRONG_VALUE(S)).
  if (param.values && param.values.length > 0 && prop.rawValue.trim() !== "") {
    const forbidden = splitValueList(prop.rawValue, param).filter(
      (v) =>
        !param.values!.some(
          (allowed) => String(allowed).toLowerCase() === v.toLowerCase(),
        ),
    );
    if (forbidden.length > 0) {
      // ZedScripts distinguishes a single wrong value (WRONG_VALUE) from
      // several (WRONG_VALUES). Scalar parameters yield at most one
      // forbidden value; array/object params are split into a list.
      const isScalar =
        param.type?.main !== VT.ARRAY && param.type?.main !== VT.OBJECT;
      const code = isScalar ? "WRONG_VALUE" : "WRONG_VALUES";
      out.add({
        code,
        severity: SEVERITIES[code],
        line: prop.line,
        column: prop.column,
        message: isScalar
          ? fmt(MESSAGES.WRONG_VALUE, {
              value: forbidden[0],
              parameter: prop.key,
              validValues: formatList(param.values),
            })
          : fmt(MESSAGES.WRONG_VALUES, {
              parameter: prop.key,
              invalidValues: formatList(forbidden),
              validValues: formatList(param.values),
            }),
        property: prop.key,
        value: forbidden.join(", "),
        expected: param.values.join(" / "),
        suggestion: `Use one of: ${formatList(param.values)}.`,
      });
    }
  }

  // Comma (ported MISSING_COMMA / INVALID_COMMA). Only when the block data
  // expects commas (noComma is a root-file concept; all script blocks comma).
  if (!blockData.noComma && !prop.hasComma) {
    out.add({
      code: "MISSING_COMMA",
      severity: SEVERITIES.MISSING_COMMA,
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES.MISSING_COMMA, {}),
      property: prop.key,
      suggestion: `Add a trailing comma: '${prop.key} = ${prop.rawValue},'`,
    });
  }

  // Type checks (ported INVALID_TYPE_FOR_VALUE / OBJECT rules).
  if (param.type && prop.rawValue.trim() !== "") {
    validateParameterType(block, param, prop, out);
  }

  // Dependent-parameter (`needs`) rules are intentionally NOT enforced. The
  // parsed 42.20 vanilla files routinely violate them in both directions
  // (drainables mix nutrition params with `base:drainable`, `ConsolidateOption`
  // appears without `cantBeConsolided`, `Packaged` on drainables) and the
  // game loads those scripts fine. Per "verified game data wins" they would
  // be wrong advice, so they are dropped; the `needs` metadata stays in the
  // data model for future tooling.
}

function validateParameterType(
  block: ScanBlock,
  param: ZedParameter,
  prop: ParsedProperty,
  out: Collector,
): void {
  const type = param.type as ZedParameterTypeInfo;
  const raw = prop.rawValue.trim();

  if (type.main === VT.ARRAY) {
    // Array element types are intentionally not enforced (ZedScripts does not
    // either) — only the value-list check above applies.
    return;
  }

  if (type.main === VT.OBJECT && type.object) {
    const obj = type.object;
    const pairs = raw
      .split(obj.pairsSeparator)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    const invalidFormat = pairs.filter(
      (p) => !p.includes(obj.keyValueSeparator),
    );
    if (invalidFormat.length > 0) {
      out.add({
        code: "INVALID_OBJECT_FORMAT",
        severity: SEVERITIES.INVALID_OBJECT_FORMAT,
        line: prop.line,
        column: prop.column,
        message: fmt(MESSAGES.INVALID_OBJECT_FORMAT, {
          parameter: prop.key,
          values: formatList(invalidFormat),
          keyValueSeparator: obj.keyValueSeparator,
        }),
        property: prop.key,
        value: invalidFormat.join(", "),
        expected: `key${obj.keyValueSeparator}value`,
        suggestion: `Use 'key${obj.keyValueSeparator}value' pairs separated by '${obj.pairsSeparator}' (e.g. ${obj.keyType}${obj.keyValueSeparator}${obj.valueType}).`,
      });
      return;
    }
    // Strip surrounding quotes from key/value before type-checking, so quoted
    // object literals ("autolearnall = \"Carpentry:1\"") do not false-positive.
    const unquote = (s: string) => s.replace(/^["']|["']$/g, "");
    const invalidTypes = pairs.filter((pair) => {
      const [key, value] = pair
        .split(obj.keyValueSeparator)
        .map((v) => unquote(v.trim()));
      const keyType = tryTypeOfValue(key, obj.keyType);
      const valueType = tryTypeOfValue(value, obj.valueType);
      return keyType !== obj.keyType || valueType !== obj.valueType;
    });
    if (invalidTypes.length > 0) {
      out.add({
        code: "INVALID_TYPE_FOR_VALUES_OBJECT",
        severity: SEVERITIES.INVALID_TYPE_FOR_VALUES_OBJECT,
        line: prop.line,
        column: prop.column,
        message: fmt(MESSAGES.INVALID_TYPE_FOR_VALUES_OBJECT, {
          parameter: prop.key,
          invalidTypeValues: formatList(invalidTypes),
          keyType: obj.keyType,
          valueType: obj.valueType,
          keyValueSeparator: obj.keyValueSeparator,
        }),
        property: prop.key,
        value: invalidTypes.join(", "),
        expected: `${obj.keyType}${obj.keyValueSeparator}${obj.valueType}`,
      });
    }
    return;
  }

  if (type.main === VT.BLOCK && type.block) {
    validateBlockReference(param, type, prop, out);
    return;
  }

  const actualType = tryTypeOfValue(raw, type.main);
  if (actualType !== type.main) {
    out.add({
      code: "INVALID_TYPE_FOR_VALUE",
      severity: SEVERITIES.INVALID_TYPE_FOR_VALUE,
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES.INVALID_TYPE_FOR_VALUE, {
        parameter: prop.key,
        scriptBlock: block.rawType,
        value: raw,
        expectedType: type.main,
        type: actualType,
      }),
      property: prop.key,
      value: raw,
      expected: type.main,
      suggestion: `'${prop.key}' expects a ${type.main} value, got '${raw}'.`,
    });
  }
}

/**
 * Block-reference value shape checks (ported NO_BLOCK_REF / CANNOT_PROVIDE_MODULE).
 * Existence checks are intentionally offline here — the existing
 * ValidationEngine / check_references tool owns game-DB lookups.
 */
function validateBlockReference(
  _param: ZedParameter,
  type: ZedParameterTypeInfo,
  prop: ParsedProperty,
  out: Collector,
): void {
  const raw = prop.rawValue.trim();
  if (raw.toLowerCase() === "null") return; // sound-block bypass (ZedScripts parity)
  const blockType = type.block as { name: string; fullType?: boolean };

  const parts = raw.split(".");
  if (parts.length === 0 || parts.length > 2) {
    out.add({
      code: "NO_BLOCK_REF",
      severity: SEVERITIES.NO_BLOCK_REF,
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES.NO_BLOCK_REF, {
        parameter: prop.key,
        value: raw,
      }),
      property: prop.key,
      value: raw,
      suggestion: `'${prop.key}' expects a reference to a '${blockType.name}' block (module.id or id).`,
    });
    return;
  }
  if (parts.length === 2 && !blockType.fullType) {
    out.add({
      code: "CANNOT_PROVIDE_MODULE",
      severity: SEVERITIES.CANNOT_PROVIDE_MODULE,
      line: prop.line,
      column: prop.column,
      message: fmt(MESSAGES.CANNOT_PROVIDE_MODULE, { parameter: prop.key }),
      property: prop.key,
      value: raw,
      expected: "id (no module prefix)",
      suggestion: `Use only the block ID for '${prop.key}' (the game defaults to Base): '${parts[1]}'.`,
    });
  }
}

function blockParameterValue(
  block: ScanBlock,
  name: string,
): string | undefined {
  const lower = name.toLowerCase();
  // Block-comment state is threaded across lines (matching the threaded
  // parse in validateBlockParameters) so a required parameter whose line
  // sits inside a multi-line /* ... */ comment is NOT mistaken for a real
  // definition — otherwise a commented-out `tags = …` would silently skip
  // MISSING_PARAMETER.
  let inBlockComment = false;
  for (const line of block.content.slice(1)) {
    const { code, inBlockComment: newState } = stripLineComments(
      line,
      inBlockComment,
    );
    inBlockComment = newState;
    const match = matchPropertyLine(code.trim(), separatorFor(block.rawType));
    if (match && match.key.toLowerCase() === lower) {
      return match.value.trim();
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// craftRecipe inputs / outputs (ported from inputs.ts + scriptsBlocksProperties.ts)
// ---------------------------------------------------------------------------

const INPUT_LINE_RE =
  /^(item|[+-]*fluid)\s*(\d+(?:\.\d*)?|\.\d)\s+(.*?)(,?)\s*$/;

// Fallback: an item/fluid line whose amount is malformed ("item -1 Base.X",
// "item x Base.Y") — the primary regex cannot match these, so they would
// otherwise be silently skipped.
const INPUT_LINE_BAD_AMOUNT_RE =
  /^(item|[+-]*fluid)\s+([^\s\]]+)\s+(.*?)(,?)\s*$/;

const SUB_PROPERTY_REGS: Array<[string, RegExp]> = [
  ["tags", /tags\[/g],
  ["flags", /flags\[/g],
  ["mappers", /mappers\[/g],
  ["categories", /categories\[/g],
  ["mode", /mode:/g],
  ["overlayMapper", /overlayMapper/g],
];

function validateCraftRecipeSections(block: ScanBlock, out: Collector): void {
  const sections = extractSections(block);
  for (const [sectionName, lines] of Object.entries(sections)) {
    for (const entry of lines) {
      const stripped = stripLineComments(entry.line, false).code.trim();
      if (!stripped) continue;
      // Double commas ("item 1 Base.X,,") — ported INVALID_COMMA. Without
      // this, the input regex parses the extra comma into the item list and
      // emits a confusing INVALID_VALUE ("item lists use ';'") instead.
      if (stripped.includes(",,")) {
        out.add({
          code: "INVALID_COMMA",
          severity: SEVERITIES.INVALID_COMMA,
          line: entry.lineNumber,
          column: stripped.indexOf(",,"),
          message: fmt(MESSAGES.INVALID_COMMA, {}),
          suggestion: `Double commas are invalid — use a single trailing comma: '${stripped.replace(/,+$/g, ",")}'.`,
        });
        continue;
      }
      const match = stripped.match(INPUT_LINE_RE);
      const badAmountMatch = match
        ? null
        : stripped.match(INPUT_LINE_BAD_AMOUNT_RE);
      const lineNumber = entry.lineNumber;

      if (!match && badAmountMatch) {
        // Malformed amount — INVALID_AMOUNT is reachable for lines the primary
        // regex cannot parse (negative or non-numeric amounts).
        const [, name, amount, , comma] = badAmountMatch;
        out.add({
          code: "INVALID_AMOUNT",
          severity: SEVERITIES.INVALID_AMOUNT,
          line: lineNumber,
          message: fmt(MESSAGES.INVALID_AMOUNT, { amount, type: name }),
          value: amount,
          expected: "a non-negative number",
          suggestion: `Use a non-negative number for the '${name}' amount (e.g. ${name} 1 …).`,
        });
        if (!comma) {
          out.add({
            code: "MISSING_COMMA",
            severity: SEVERITIES.MISSING_COMMA,
            line: lineNumber,
            message: fmt(MESSAGES.MISSING_COMMA, {}),
            suggestion: `Add a trailing comma: '${stripped},'`,
          });
        }
        continue;
      }
      if (!match) continue;
      const [, name, amount, valuesPart, comma] = match;

      validateInputAmount(name, amount, lineNumber, out);

      if (!comma) {
        out.add({
          code: "MISSING_COMMA",
          severity: SEVERITIES.MISSING_COMMA,
          line: lineNumber,
          message: fmt(MESSAGES.MISSING_COMMA, {}),
          suggestion: `Add a trailing comma: '${stripped},'`,
        });
      }

      // Duplicate sub-properties on the same line (ported DUPLICATE_PROPERTY) —
      // each property kind (tags/flags/mappers/categories/mode/overlayMapper)
      // is counted independently.
      for (const [propName, propRe] of SUB_PROPERTY_REGS) {
        propRe.lastIndex = 0;
        const count = (stripped.match(propRe) ?? []).length;
        if (count > 1) {
          out.add({
            code: "DUPLICATE_PROPERTY",
            severity: SEVERITIES.DUPLICATE_PROPERTY,
            line: lineNumber,
            message: fmt(MESSAGES.DUPLICATE_PROPERTY, {
              property: propName,
            }),
            property: propName,
            suggestion: `Each input/output item line may define '${propName}' only once.`,
          });
        }
      }

      if (name === "item") {
        validateInputItemValues(valuesPart, sectionName, lineNumber, out);
      }
    }
  }
}

function validateInputAmount(
  name: string,
  amount: string,
  line: number,
  out: Collector,
): void {
  const num = parseFloat(amount);
  if (isNaN(num) || num < 0) {
    out.add({
      code: "INVALID_AMOUNT",
      severity: SEVERITIES.INVALID_AMOUNT,
      line,
      message: fmt(MESSAGES.INVALID_AMOUNT, { amount, type: name }),
      value: amount,
      expected: "a non-negative number",
      suggestion: `Use a non-negative number for the '${name}' amount.`,
    });
    // Fluid amounts (`-fluid 0.2 categories[Water] …`) are liters and may be
    // decimal — the vanilla tree ships them (e.g. coffeemaker recipes), so
    // only item amounts must be whole numbers.
  } else if (!Number.isInteger(num) && !/fluid/i.test(name)) {
    out.add({
      code: "INTEGER_AMOUNT",
      severity: SEVERITIES.INTEGER_AMOUNT,
      line,
      message: fmt(MESSAGES.INTEGER_AMOUNT, { amount, type: name }),
      value: amount,
      expected: "an integer",
      suggestion: `Item amounts must be whole numbers: '${Math.round(num)}'.`,
    });
  }
}

/**
 * Ported item-entry checks (NO_DOTS_ITEM / MISSING_MODULE / ALL_WITH_OTHERS /
 * SPACES_IN_ITEM / MISSING_VALUE) for `item N <values>` lines.
 *
 * Only the item list itself is inspected — `tags[...]` / `flags[...]` /
 * `mode:` etc. are sub-properties and never parsed as items (avoids the false
 * positives a naive bracket regex would produce).
 */
function validateInputItemValues(
  valuesPart: string,
  sectionName: string,
  line: number,
  out: Collector,
): void {
  const trimmed = valuesPart.trim();
  if (trimmed === "") {
    out.add({
      code: "MISSING_VALUE",
      severity: SEVERITIES.MISSING_VALUE,
      line,
      message: fmt(MESSAGES.MISSING_VALUE, {}),
      suggestion: `Provide at least one item type for the '${sectionName}' entry.`,
    });
    return;
  }

  let entries: string[] = [];
  const bracket = trimmed.match(/^\[(.+?)\]/);
  if (bracket) {
    entries = bracket[1]
      .split(";")
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
  } else {
    const firstToken = trimmed.match(/^([^\s\]]+)/)?.[1] ?? "";
    // Tag/filter-only inputs ("tags[base:spatula] mode:keep",
    // "mapper:fiberTypes") have no item.
    if (
      /^(tags|flags|mappers|categories)\[/.test(firstToken) ||
      /^(mapper|overlayMapper):/.test(firstToken)
    ) {
      return;
    }
    if (firstToken === "") return;
    entries = [firstToken];
  }

  if (entries.length === 0) {
    out.add({
      code: "MISSING_VALUE",
      severity: SEVERITIES.MISSING_VALUE,
      line,
      message: fmt(MESSAGES.MISSING_VALUE, {}),
      suggestion: `Provide at least one item type in the '${sectionName}' entry.`,
    });
    return;
  }

  for (const item of entries) {
    // Commas inside an item list mean the author used the wrong separator —
    // flag it with the actionable ';' message instead of a confusing
    // dots-in-ID error.
    if (item.includes(",")) {
      out.add({
        code: "INVALID_VALUE",
        severity: SEVERITIES.INVALID_VALUE,
        line,
        message: fmt(MESSAGES.INVALID_VALUE, {
          value: item,
          property: "item list",
          validValues: "module.id entries separated by ';'",
        }),
        value: item,
        expected: "module.id",
        suggestion:
          "Item lists use ';' as the separator (e.g. [Base.A;Base.B]) — commas are not valid.",
      });
      continue;
    }
    if (item === "*") {
      if (entries.length > 1) {
        out.add({
          code: "ALL_WITH_OTHERS",
          severity: SEVERITIES.ALL_WITH_OTHERS,
          line,
          message: fmt(MESSAGES.ALL_WITH_OTHERS, {}),
          value: item,
          suggestion: "Use '*' alone, without other item types.",
        });
      }
      continue;
    }
    if (item === "") {
      out.add({
        code: "MISSING_VALUE",
        severity: SEVERITIES.MISSING_VALUE,
        line,
        message: fmt(MESSAGES.MISSING_VALUE, {}),
        value: item,
        suggestion: "Remove the empty entry from the item list.",
      });
      continue;
    }
    if (item.includes(" ")) {
      out.add({
        code: "SPACES_IN_ITEM",
        severity: SEVERITIES.SPACES_IN_ITEM,
        line,
        message: fmt(MESSAGES.SPACES_IN_ITEM, { value: item }),
        value: item,
        expected: "module.id",
        suggestion: `Item types cannot contain spaces: '${item.replace(/\s+/g, "")}'.`,
      });
    }
    const parts = item.split(".");
    if (parts.length > 2) {
      out.add({
        code: "NO_DOTS_ITEM",
        severity: SEVERITIES.NO_DOTS_ITEM,
        line,
        message: fmt(MESSAGES.NO_DOTS_ITEM, { value: item }),
        value: item,
        expected: "module.id",
        suggestion: "An item ID cannot contain dots — use 'Module.ID'.",
      });
    } else if (parts.length === 1) {
      out.add({
        code: "MISSING_MODULE",
        severity: SEVERITIES.MISSING_MODULE,
        line,
        message: fmt(MESSAGES.MISSING_MODULE, { value: item }),
        value: item,
        expected: "module.id",
        suggestion: `Qualify the item with its module: 'Base.${item}'.`,
      });
    }
  }
}

interface SectionLine {
  line: string;
  lineNumber: number;
}

/** Extract `inputs { ... }` / `outputs { ... }` regions from a recipe block. */
function extractSections(block: ScanBlock): Record<string, SectionLine[]> {
  const sections: Record<string, SectionLine[]> = {};
  let current: string | null = null;
  let depth = 0;
  // Block-comment state is threaded across lines (mirroring the shared
  // scanner) so a multi-line /* ... */ comment inside a section can never
  // corrupt brace/depth tracking.
  let inBlockComment = false;

  for (let i = 1; i < block.content.length; i++) {
    const rawLine = block.content[i];
    const { code, inBlockComment: newState } = stripLineComments(
      rawLine,
      inBlockComment,
    );
    inBlockComment = newState;
    const trimmed = code.trim();
    if (!trimmed) continue;

    const lineNumber = block.startLine + i;
    const { open, close } = countBraces(trimmed);

    if (current === null) {
      const header = trimmed.match(/^(inputs|outputs)(?:\s*\{)?(.*)$/);
      if (header) {
        current = header[1];
        sections[current] = [];
        depth = open - close;
        // Body on the same line as the header ("inputs { item 1 X, }").
        let body = header[2].trim();
        if (body.endsWith("}")) body = body.slice(0, -1).trim();
        if (body) sections[current].push({ line: body, lineNumber });
        // "inputs { ... }" fully on one line is already closed; "inputs"
        // alone waits for its "{" on the next line; "inputs {" stays open.
        if (open > 0 && depth <= 0) {
          current = null;
          depth = 0;
        }
        continue;
      }
    } else if (current) {
      sections[current].push({ line: trimmed, lineNumber });
      depth += open - close;
      if (depth <= 0 && close > 0) {
        current = null;
        depth = 0;
      }
    }
  }
  return sections;
}

// ---------------------------------------------------------------------------
// Module-level unknown-block detection (ported NOT_VALID_BLOCK)
// ---------------------------------------------------------------------------

/**
 * Detect block keywords the dataset does not know (typos like `itme Foo`).
 * Conservative: only lines at module scope that have the exact shape of a
 * block header (no `=`, `:`, `,`, `;`, `[` or `]`) are candidates, so inner
 * property/ingredient lines can never be flagged.
 */
function validateModuleLevelHeaders(content: string, out: Collector): void {
  const known = getKnownBlockNames();
  const lines = content.split("\n");
  let depth = 0;
  let inBlockComment = false;
  const headerRe = /^([A-Za-z_][A-Za-z0-9_]*)\s*(\S.*)?$/;

  for (let i = 0; i < lines.length; i++) {
    const { code, inBlockComment: newState } = stripLineComments(
      lines[i],
      inBlockComment,
    );
    inBlockComment = newState;
    const line = code.trim();
    if (!line) continue;

    // Module-level candidates: inside the module's braces but outside any
    // child block, shaped like a header, and free of property/ingredient
    // punctuation.
    if (depth === 1) {
      const m = line.match(headerRe);
      if (m && !/[=:,[\];{}]/.test(line) && !known.has(m[1].toLowerCase())) {
        const suggestions = closestNames(m[1], [...known], 2, 3);
        out.add({
          code: "NOT_VALID_BLOCK",
          severity: SEVERITIES.NOT_VALID_BLOCK,
          line: i + 1,
          message: fmt(MESSAGES.NOT_VALID_BLOCK, { scriptBlock: m[1] }),
          property: m[1],
          suggestion:
            suggestions.length > 0
              ? `Unknown script block keyword '${m[1]}'. Did you mean: ${suggestions.join(", ")}?`
              : `Unknown script block keyword '${m[1]}' — check the spelling.`,
        });
      }
    }

    const { open, close } = countBraces(line);
    depth += open - close;
    if (depth < 0) depth = 0;
  }
}
