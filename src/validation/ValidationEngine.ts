import { DatabaseManager } from "../database/DatabaseManager.js";
import { matchPropertyLine, parseScriptValue } from "../utils/scriptSyntax.js";
import {
  scanScriptBlocks,
  stripLineComments,
  countBraces,
} from "../utils/scriptScanner.js";
import { BlockType } from "../utils/blockTypes.js";
import {
  runZedScriptsDiagnostics,
  type ZedDiagnostic,
} from "./zedScriptsRuleEngine.js";
import { getZedScriptsKnowledge } from "./zedScriptsKnowledge.js";

interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  suggestions: string[];
  score: number; // 0-100 quality score
  /**
   * ZedScripts knowledge-layer summary (set when the layer produced
   * diagnostics): source metadata so findings stay traceable to their
   * upstream dataset revision (version-aware integration).
   */
  zedScripts?: {
    diagnostics: number;
    source: string;
    commit: string;
    datasetVersion: string;
  };
}

interface ValidationError {
  line: number;
  column?: number;
  message: string;
  severity: "error" | "warning" | "info";
  code: string;
  suggestion?: string;
  /** Source file, when the script was read from disk. */
  file?: string;
  /** Diagnostic source marker: "zedscripts" for knowledge-layer findings. */
  source?: string;
  /**
   * ZedScripts-layer provenance: "ORIGINAL_ZEDSCRIPT" = verbatim port of the
   * extension's check; "dev_functionality" = this server's extension (deep
   * scan / hierarchy checks). Absent for the server's own core checks.
   */
  provenance?: string;
  /** The offending property / block keyword (ZedScripts layer). */
  property?: string;
  /** The offending value (ZedScripts layer). */
  value?: string;
  /** What the value should have been (ZedScripts layer). */
  expected?: string;
}

/** Options for validateScript: file provenance + ZedScripts knowledge layer. */
export interface ScriptValidationOptions {
  /** File the content came from — attached to diagnostics (file-scoped). */
  filePath?: string;
  /**
   * Run the ZedScripts knowledge-layer diagnostics (unknown parameters,
   * wrong values/types, deprecations, required params, commas, IDs, ...).
   * Default true — this is the deterministic diagnostic layer for
   * AI-generated code.
   */
  zedScripts?: boolean;
}

interface ValidationWarning extends ValidationError {
  severity: "warning";
}

interface ReferenceValidationResult {
  reference: string;
  type: string;
  isValid: boolean;
  error?: string;
  suggestions: string[];
  /**
   * Completeness detail (freebuff N-series): where the reference actually
   * lives. 'defined' = an items row exists; 'referenced' = only appears in
   * the references table (sprite/model refs, or a dangling reference);
   * 'missing' = nowhere.
   */
  detail?: "defined" | "referenced" | "missing";
  /** Block type of the items row when the reference is defined as an item. */
  itemType?: string;
  /** How many items/recipes reference this id. */
  referenceCount?: number;
}

interface PropertyValidator {
  type: "number" | "boolean" | "enum" | "string" | "reference";
  min?: number;
  max?: number;
  values?: string[];
  referenceType?: string;
}

export class ValidationEngine {
  private db: DatabaseManager;

  // Define required properties for different block types. Keyed by the shared
  // BLOCK_TYPES union (freebuff review refactor #5) so a new block type can
  // never silently pass through the validator without a required-property set.
  private readonly requiredProperties: Record<BlockType, string[]> = {
    // Build 42 items require ItemType (base:*) — the legacy B41 `Type`
    // property was removed (zero items in the 42.20 vanilla DB have it) and
    // DisplayName is optional (names come from the ItemName translation
    // file). Enforced in validateBlockCommon (item required-check below).
    item: [],
    recipe: ["Result"],
    fixing: ["Require", "Fixer"],
    sound: ["category"],
    // B42 vehicle scripts have no "template" property and the generator's
    // vehicle output does not emit one, so it must not be required (F7).
    vehicle: [],
    // Evolved recipes must identify a base item; "BaseItem" (what the
    // generator emits) or legacy "ResultItem" both satisfy it — enforced in
    // validateEvolvedRecipeBlock (F8).
    evolvedrecipe: [],
  };

  // Define valid property types and ranges
  private readonly propertyValidators: Record<string, PropertyValidator> = {
    // Numeric properties with ranges
    Weight: { type: "number", min: 0, max: 1000 },
    MaxDamage: { type: "number", min: 0, max: 100 },
    MinDamage: { type: "number", min: 0, max: 100 },
    ConditionMax: { type: "number", min: 1, max: 100 },
    SwingTime: { type: "number", min: 0.1, max: 10 },
    Time: { type: "number", min: 1, max: 10000 },

    // Boolean properties
    KnockBackOnNoDeath: { type: "boolean" },
    IsCookable: { type: "boolean" },

    // Build 42 item class (replaced the legacy B41 `Type` property — no item
    // in the 42.20 vanilla DB has a `Type` property anymore). Left open so
    // any `base:*` value parses; the B42 generator's semantic validator is
    // the authority on which classes actually exist.
    ItemType: { type: "string" },
    // Build 42 weapon damage type (Swinging / Stab / Spear / Firearm) —
    // replaced the B41-era `DamageCategory` discriminator.
    SubCategory: { type: "string" },
    DisplayCategory: {
      type: "enum",
      values: [
        "Weapon",
        "Food",
        "Medical",
        "Literature",
        "Tool",
        "Clothing",
        "Container",
        "Electronics",
        "Survival",
        // Real Build 42 categories (verified against the 42.20 vanilla DB).
        "Junk",
        "Material",
        "Memento",
        "Household",
        "Cooking",
        "Gardening",
        "Sports",
        "Camping",
        "Fishing",
        "VehicleMaintenance",
        "WaterContainer",
        "FirstAid",
        "Ammo",
        "Accessory",
        "AnimalPart",
        "Entertainment",
        "Instrument",
        "Trapping",
        "LightSource",
        "FireSource",
        "Explosives",
        "Bag",
        "Bandage",
        "Generic",
        "Wound",
        "ZedDmg",
        "BrokenWeapon",
        "ProtectiveGear",
        "Security",
        "Paint",
        "Furniture",
        "Communications",
        "HouseholdWeapon",
        "JunkWeapon",
        "ToolWeapon",
        "CookingWeapon",
        "FishingWeapon",
        "GardeningWeapon",
        "FirstAidWeapon",
        "MaterialWeapon",
        "SportsWeapon",
        "VehicleMaintenanceWeapon",
        "WeaponCrafted",
        "WeaponImprovised",
        "AnimalPartWeapon",
      ],
    },
    Categories: { type: "string" }, // Can be multiple values separated by ;

    // Item references
    Icon: { type: "reference", referenceType: "sprite" },
    WeaponSprite: { type: "reference", referenceType: "sprite" },
    AttachmentType: { type: "reference", referenceType: "item" },

    // Sound references
    SwingSound: { type: "reference", referenceType: "sound" },
    HitSound: { type: "reference", referenceType: "sound" },
    BreakSound: { type: "reference", referenceType: "sound" },
  };

  constructor(db: DatabaseManager) {
    this.db = db;
  }

  async validateScript(
    content: string,
    expectedType?: string,
    strict: boolean = false,
    options: ScriptValidationOptions = {},
  ): Promise<ValidationResult> {
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      suggestions: [],
      score: 100,
    };

    try {
      const blocks = this.parseScriptBlocks(content);

      for (const block of blocks) {
        await this.validateBlock(block, result, strict);
      }

      // Additional validations
      this.validateModuleStructure(content, result);
      this.validateSyntax(content, result);

      // Type consistency check
      if (expectedType) {
        this.validateTypeConsistency(blocks, expectedType, result);
      }

      // ZedScripts knowledge layer (deterministic diagnostics for
      // AI-generated scripts): unknown/missing/duplicate parameters, wrong
      // values and types, deprecations, missing commas, ID rules, unknown
      // block keywords and craftRecipe input/output shapes. This extends the
      // existing validator with the vendored ZedScripts/pz-scripts-data
      // knowledge instead of duplicating validation logic.
      if (options.zedScripts !== false) {
        const zedOptions =
          options.filePath !== undefined ? { filePath: options.filePath } : {};
        const zedDiagnostics = runZedScriptsDiagnostics(content, zedOptions);
        let zedCount = 0;
        for (const diag of zedDiagnostics) {
          const entry = this.toValidationError(diag);
          if (diag.severity === "error") {
            result.errors.push(entry as ValidationError);
          } else {
            result.warnings.push(entry as ValidationWarning);
          }
          zedCount++;
        }
        if (zedCount > 0) {
          const knowledge = getZedScriptsKnowledge();
          result.zedScripts = {
            diagnostics: zedCount,
            source: knowledge.source.source,
            commit: knowledge.source.commitShort,
            datasetVersion: knowledge.source.commit,
          };
        }
      }

      // Calculate final validity and score
      result.isValid = result.errors.length === 0;
      result.score = this.calculateQualityScore(result);
    } catch (error) {
      result.errors.push({
        line: 0,
        message: `Parse error: ${error instanceof Error ? error.message : String(error)}`,
        severity: "error",
        code: "PARSE_ERROR",
      });
      result.isValid = false;
      result.score = 0;
    }

    return result;
  }

  async checkReferences(
    references: string[],
    type: string = "all",
  ): Promise<ReferenceValidationResult[]> {
    const results: ReferenceValidationResult[] = [];

    // Batch path for large reference lists (check_references N+1): two DB
    // queries — one existence set, one completeness-detail map — instead of
    // ~4 prepared queries per reference. Small arrays keep the per-item path
    // so tests (and any caller with a hand-rolled DB stub) keep the simple
    // per-reference contract. getSimilarItems stays per-reference and runs
    // only for missing ids, which are usually a small fraction of the batch.
    const canBatch =
      references.length >= 8 &&
      typeof (this.db as unknown as { checkReferencesBatch?: unknown })
        .checkReferencesBatch === "function" &&
      typeof (this.db as unknown as { describeReferencesBatch?: unknown })
        .describeReferencesBatch === "function";
    let foundSet: Set<string> | null = null;
    let detailMap: Map<
      string,
      {
        defined: boolean;
        itemType?: string;
        referenceTypes: string[];
        referenceCount: number;
      }
    > | null = null;
    if (canBatch) {
      const batched = this.db as unknown as {
        checkReferencesBatch(refs: string[], t?: string): Promise<Set<string>>;
        describeReferencesBatch(refs: string[]): Promise<
          Map<
            string,
            {
              defined: boolean;
              itemType?: string;
              referenceTypes: string[];
              referenceCount: number;
            }
          >
        >;
      };
      foundSet = await batched.checkReferencesBatch(references, type);
      detailMap = await batched.describeReferencesBatch(references);
    }

    for (const reference of references) {
      const result: ReferenceValidationResult = {
        reference,
        type,
        isValid: false,
        suggestions: [],
      };

      try {
        // Check if reference exists in database
        const exists = canBatch
          ? (foundSet as Set<string>).has(reference)
          : await this.db.checkReference(
              reference,
              type === "all" ? undefined : type,
            );

        if (exists) {
          result.isValid = true;
        } else {
          result.error = `Reference '${reference}' not found`;

          // Get similar references for suggestions
          const suggestions = await this.db.getSimilarItems(reference, 5);
          result.suggestions = suggestions;
        }

        // Completeness detail: is this reference defined as an item, only
        // referenced elsewhere, or missing entirely (freebuff N-series)?
        const detail = canBatch
          ? ((
              detailMap as Map<
                string,
                {
                  defined: boolean;
                  itemType?: string;
                  referenceTypes: string[];
                  referenceCount: number;
                }
              >
            ).get(reference) ?? {
              defined: false,
              referenceTypes: [],
              referenceCount: 0,
            })
          : await this.db.describeReference(reference);
        result.detail = detail.defined
          ? "defined"
          : detail.referenceCount > 0
            ? "referenced"
            : "missing";
        // exactOptionalPropertyTypes: only assign when present.
        if (detail.itemType !== undefined) {
          result.itemType = detail.itemType;
        }
        result.referenceCount = detail.referenceCount;
      } catch (error) {
        result.error = `Validation error: ${error instanceof Error ? error.message : String(error)}`;
      }

      results.push(result);
    }

    return results;
  }

  /** Adopt a ZedScripts-layer diagnostic into the ValidationError shape. */
  private toValidationError(diag: ZedDiagnostic): ValidationError {
    const entry: ValidationError = {
      line: diag.line,
      message: diag.message,
      severity:
        diag.severity === "error" ? ("error" as const) : ("warning" as const),
      code: diag.code,
      source: "zedscripts",
    };
    if (diag.column !== undefined) entry.column = diag.column;
    if (diag.file !== undefined) entry.file = diag.file;
    if (diag.provenance !== undefined) entry.provenance = diag.provenance;
    if (diag.property !== undefined) entry.property = diag.property;
    if (diag.value !== undefined) entry.value = diag.value;
    if (diag.expected !== undefined) entry.expected = diag.expected;
    if (diag.suggestion !== undefined) entry.suggestion = diag.suggestion;
    return entry;
  }

  private parseScriptBlocks(content: string): Array<{
    type: string;
    name: string;
    properties: Record<string, any>;
    startLine: number;
    endLine: number;
    rawContent: string;
  }> {
    // Shared scanner (freebuff M1): identical block boundaries to the
    // game-file parser, so the two consumers can never drift apart again.
    // Blocks are normalized (craftRecipe → recipe) and ingredient lines are
    // never mistaken for block headers. Property lines are parsed here — the
    // header line (index 0) is skipped.
    return scanScriptBlocks(content).map((block) => {
      const properties: Record<string, any> = {};
      for (let i = 1; i < block.content.length; i++) {
        this.parseProperty(block.content[i], properties, block.type);
      }
      return {
        type: block.type,
        name: block.name,
        properties,
        startLine: block.startLine,
        endLine: block.endLine,
        rawContent: block.rawContent,
      };
    });
  }

  private parseProperty(
    line: string,
    properties: Record<string, any>,
    blockType: string,
  ): void {
    if (blockType === "fixing") {
      // Special handling for fixing blocks
      if (line.includes("Require :")) {
        const requireMatch = line.match(/Require\s*:\s*([^,]+),?\s*$/);
        if (requireMatch) {
          properties.Require = requireMatch[1].trim();
        }
        return;
      } else if (line.includes("Fixer :")) {
        const fixerMatch = line.match(/Fixer\s*:\s*([^,]+),?\s*$/);
        if (fixerMatch) {
          if (!properties.Fixer) properties.Fixer = [];
          properties.Fixer.push(fixerMatch[1].trim());
        }
        return;
      }
      return;
    }

    // Shared "key = value," / "key:value," matching (F10). Recipes accept
    // both separators: legacy B41 uses "property:value,", B42 craftRecipe
    // uses "property = value," (F6).
    let match: { key: string; value: string } | null = null;
    if (
      blockType === "item" ||
      blockType === "sound" ||
      blockType === "vehicle"
    ) {
      // Use "property = value," format
      match = matchPropertyLine(line, "=");
    } else if (blockType === "recipe") {
      match = matchPropertyLine(line, "[:=]");
    } else if (blockType === "evolvedrecipe") {
      // Use "property:value," format
      match = matchPropertyLine(line, ":");
    }

    if (match) {
      properties[match.key] = this.parseValue(match.value);
    }
  }

  private parseValue(value: string): any {
    // Shared with the game-file parser so values are typed identically (F10).
    return parseScriptValue(value);
  }

  private async validateBlock(
    block: any,
    result: ValidationResult,
    strict: boolean,
  ): Promise<void> {
    // Check required properties
    const required =
      this.requiredProperties[
        block.type as keyof typeof this.requiredProperties
      ];
    // Build 42 items: ItemType = base:* is required; the legacy B41 `Type`
    // property no longer exists and does not satisfy the requirement.
    // DisplayName is optional because names come from ItemName translations.
    if (block.type === "item") {
      if (!block.properties.ItemType) {
        result.errors.push({
          line: block.startLine,
          message:
            "Missing required property: ItemType (Build 42, e.g. ItemType = base:normal)",
          severity: "error",
          code: "MISSING_PROPERTY",
          suggestion: `Add "ItemType = base:normal," to the item block`,
        });
      }
    } else if (required) {
      for (const prop of required) {
        if (!block.properties[prop]) {
          // B42 craftRecipe blocks declare their result in an "outputs"
          // sub-block instead of a "Result" property (F5/F9).
          if (
            block.type === "recipe" &&
            prop === "Result" &&
            /\boutputs\b/.test(block.rawContent || "")
          ) {
            continue;
          }
          result.errors.push({
            line: block.startLine,
            message: `Missing required property: ${prop}`,
            severity: "error",
            code: "MISSING_PROPERTY",
            suggestion: `Add "${prop} = <value>," to the ${block.type} block`,
          });
        }
      }
    }

    // Validate individual properties
    for (const [key, value] of Object.entries(block.properties)) {
      await this.validateProperty(key, value, block, result, strict);
    }

    // Type-specific validations
    await this.validateBlockSpecific(block, result, strict);
  }

  private async validateProperty(
    key: string,
    value: any,
    block: any,
    result: ValidationResult,
    strict: boolean,
  ): Promise<void> {
    const validator =
      this.propertyValidators[key as keyof typeof this.propertyValidators];
    if (!validator) {
      if (strict) {
        result.warnings.push({
          line: block.startLine,
          message: `Unknown property: ${key}`,
          severity: "warning",
          code: "UNKNOWN_PROPERTY",
        });
      }
      return;
    }

    // Type validation
    if (validator.type === "number") {
      if (typeof value !== "number") {
        result.errors.push({
          line: block.startLine,
          message: `Property ${key} must be a number, got ${typeof value}`,
          severity: "error",
          code: "INVALID_TYPE",
        });
        return;
      }

      // Range validation
      if (validator.min !== undefined && value < validator.min) {
        result.errors.push({
          line: block.startLine,
          message: `Property ${key} value ${value} is below minimum ${validator.min}`,
          severity: "error",
          code: "VALUE_OUT_OF_RANGE",
        });
      }

      if (validator.max !== undefined && value > validator.max) {
        result.errors.push({
          line: block.startLine,
          message: `Property ${key} value ${value} is above maximum ${validator.max}`,
          severity: "error",
          code: "VALUE_OUT_OF_RANGE",
        });
      }
    }

    if (validator.type === "boolean") {
      if (typeof value !== "boolean") {
        result.errors.push({
          line: block.startLine,
          message: `Property ${key} must be TRUE or FALSE, got ${value}`,
          severity: "error",
          code: "INVALID_TYPE",
        });
      }
    }

    if (validator.type === "enum") {
      if (!validator.values?.includes(String(value))) {
        result.errors.push({
          line: block.startLine,
          message: `Property ${key} has invalid value "${value}". Valid values: ${validator.values?.join(", ")}`,
          severity: "error",
          code: "INVALID_ENUM_VALUE",
        });
      }
    }

    // Reference validation
    if (validator.type === "reference") {
      const referenceResults = await this.checkReferences(
        [String(value)],
        validator.referenceType,
      );
      const refResult = referenceResults[0];

      if (!refResult.isValid) {
        const warning: ValidationWarning = {
          line: block.startLine,
          message: `Reference "${value}" not found in game database`,
          severity: "warning",
          code: "INVALID_REFERENCE",
        };
        if (refResult.suggestions.length > 0) {
          warning.suggestion = `Did you mean: ${refResult.suggestions[0]}?`;
        }
        result.warnings.push(warning);
      }
    }
  }

  private async validateBlockSpecific(
    block: any,
    result: ValidationResult,
    _strict: boolean,
  ): Promise<void> {
    switch (block.type) {
      case "item":
        this.validateItemBlock(block, result);
        break;
      case "recipe":
        await this.validateRecipeBlock(block, result);
        break;
      case "fixing":
        this.validateFixingBlock(block, result);
        break;
      case "sound":
        this.validateSoundBlock(block, result);
        break;
      case "evolvedrecipe":
        this.validateEvolvedRecipeBlock(block, result);
        break;
    }
  }

  private validateItemBlock(block: any, result: ValidationResult): void {
    // Weapon-specific validations (Build 42 spelling)
    if (block.properties.ItemType === "base:weapon") {
      if (!block.properties.MaxDamage && !block.properties.MinDamage) {
        result.warnings.push({
          line: block.startLine,
          message:
            "Weapon items should have damage properties (MaxDamage, MinDamage)",
          severity: "warning",
          code: "MISSING_WEAPON_STATS",
        });
      }

      if (!block.properties.Categories) {
        result.warnings.push({
          line: block.startLine,
          message:
            "Weapon items should specify Categories (e.g., SmallBlade, LongBlade, Blunt)",
          severity: "warning",
          code: "MISSING_WEAPON_CATEGORY",
        });
      }
    }

    // Food-specific validations (Build 42 spelling)
    if (block.properties.ItemType === "base:food") {
      if (!block.properties.HungerChange && !block.properties.Calories) {
        result.warnings.push({
          line: block.startLine,
          message:
            "Food items should have nutrition properties (HungerChange, Calories)",
          severity: "warning",
          code: "MISSING_FOOD_STATS",
        });
      }
    }

    // Balance warnings
    if (block.properties.Weight && block.properties.Weight > 50) {
      result.warnings.push({
        line: block.startLine,
        message: `Item weight ${block.properties.Weight} seems very high for normal gameplay`,
        severity: "warning",
        code: "BALANCE_WARNING",
      });
    }
  }

  private async validateRecipeBlock(
    block: any,
    result: ValidationResult,
  ): Promise<void> {
    // Check if result item exists or is defined
    if (block.properties.Result) {
      const resultCheck = await this.checkReferences(
        [block.properties.Result],
        "item",
      );
      if (!resultCheck[0].isValid) {
        result.warnings.push({
          line: block.startLine,
          message: `Recipe result "${block.properties.Result}" not found in game database`,
          severity: "warning",
          code: "UNKNOWN_RESULT_ITEM",
        });
      }
    }

    // Validate recipe time
    if (block.properties.Time && block.properties.Time > 1000) {
      result.warnings.push({
        line: block.startLine,
        message: `Recipe time ${block.properties.Time} seems very long (over 16 minutes)`,
        severity: "warning",
        code: "BALANCE_WARNING",
      });
    }
  }

  private validateFixingBlock(block: any, result: ValidationResult): void {
    if (!block.properties.Require) {
      result.errors.push({
        line: block.startLine,
        message: "Fixing block must specify a required item to repair",
        severity: "error",
        code: "MISSING_REQUIRED_ITEM",
      });
    }

    if (!block.properties.Fixer || block.properties.Fixer.length === 0) {
      result.errors.push({
        line: block.startLine,
        message: "Fixing block must specify at least one fixer option",
        severity: "error",
        code: "MISSING_FIXER",
      });
    }
  }

  private validateSoundBlock(block: any, result: ValidationResult): void {
    if (!block.properties.category) {
      result.errors.push({
        line: block.startLine,
        message: "Sound block must specify a category",
        severity: "error",
        code: "MISSING_SOUND_CATEGORY",
      });
    }
  }

  private validateEvolvedRecipeBlock(
    block: any,
    result: ValidationResult,
  ): void {
    // B42 evolved recipes identify the base item via "BaseItem"; legacy
    // scripts used "ResultItem". Either satisfies the requirement (F8).
    if (!block.properties.BaseItem && !block.properties.ResultItem) {
      result.errors.push({
        line: block.startLine,
        message: "Evolved recipe must specify BaseItem (or legacy ResultItem)",
        severity: "error",
        code: "MISSING_BASE_ITEM",
        suggestion: 'Add "BaseItem: <Module.Item>," to the evolvedrecipe block',
      });
    }
  }

  private validateModuleStructure(
    content: string,
    result: ValidationResult,
  ): void {
    if (!content.includes("module ")) {
      result.warnings.push({
        line: 1,
        message:
          'Script should be wrapped in a module block (e.g., "module Base { ... }")',
        severity: "warning",
        code: "MISSING_MODULE",
      });
    }
  }

  private validateSyntax(content: string, result: ValidationResult): void {
    const lines = content.split("\n");
    let braceLevel = 0;
    let inBlockComment = false;

    for (let i = 0; i < lines.length; i++) {
      const lineNumber = i + 1;
      const { code, inBlockComment: newState } = stripLineComments(
        lines[i],
        inBlockComment,
      );
      inBlockComment = newState;
      const line = code.trim();
      if (!line) continue;

      const { open: openBraces, close: closeBraces } = countBraces(line);
      braceLevel += openBraces - closeBraces;

      if (braceLevel < 0) {
        result.errors.push({
          line: lineNumber,
          message: 'Unexpected closing brace "}"',
          severity: "error",
          code: "SYNTAX_ERROR",
        });
        braceLevel = 0;
      }
    }

    // Check if braces are balanced
    if (braceLevel > 0) {
      result.errors.push({
        line: lines.length,
        message: `Missing ${braceLevel} closing brace(s) "}"`,
        severity: "error",
        code: "SYNTAX_ERROR",
      });
    }
  }

  private validateTypeConsistency(
    blocks: any[],
    expectedType: string,
    result: ValidationResult,
  ): void {
    for (const block of blocks) {
      if (block.type !== expectedType) {
        result.warnings.push({
          line: block.startLine,
          message: `Expected ${expectedType} block but found ${block.type}`,
          severity: "warning",
          code: "TYPE_MISMATCH",
        });
      }
    }
  }

  private calculateQualityScore(result: ValidationResult): number {
    let score = 100;

    // Deduct points for errors and warnings
    score -= result.errors.length * 10;
    score -= result.warnings.length * 5;

    // Ensure score doesn't go below 0
    return Math.max(0, score);
  }
}
