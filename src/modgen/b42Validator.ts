/**
 * Build 42 semantic validator for generated mods.
 *
 * The generic ValidationEngine knows a small B41-era property subset and can
 * therefore neither confirm a mod is Build 42-correct nor catch legacy shapes
 * (like `Type = Weapon`). This validator is the generator's final authority:
 * it checks the item class, the property set, required properties, registry
 * values and cross-property constraints — statically AND against the actual
 * parsed vanilla database when it is available (review item: "validation
 * gives a false sense of correctness").
 */

import type { DatabaseManager } from "../database/DatabaseManager.js";
import type { ModgenTemplate } from "./templates.js";

/** BloodLocation values documented for Build 42 clothing (API docs 42.20). */
export const BLOOD_LOCATIONS = new Set([
  "Apron",
  "Bag",
  "Foot_L",
  "Foot_R",
  "ForeArm_L",
  "ForeArm_R",
  "FullHelmet",
  "Groin",
  "Hand_L",
  "Hand_R",
  "Hands",
  "Head",
  "Jacket",
  "JumperNoSleeves",
  "Jumper",
  "LongJacket",
  "LowerArms",
  "LowerBody",
  "LowerLeg_L",
  "LowerLeg_R",
  "LowerLegs",
  "Neck",
  "ShirtLongSleeves",
  "ShirtNoSleeves",
  "Shirt",
  "Shoes",
  "ShortsShort",
  "Trousers",
  "UpperArm_L",
  "UpperArm_R",
  "UpperArms",
  "UpperBody",
  "UpperLeg_L",
  "UpperLeg_R",
  "UpperLegs",
]);

export interface B42Result {
  errors: string[];
  warnings: string[];
  info: string[];
  /** True when the parsed vanilla DB was available for the data checks. */
  dataChecked: boolean;
}

export class B42Validator {
  constructor(private readonly db: DatabaseManager) {}

  /**
   * Validate the generated item. `stats` must be the full emitted property
   * set (template fields + ItemType + DisplayCategory), i.e. exactly what
   * buildItemScript will write.
   */
  async validate(
    tpl: ModgenTemplate,
    stats: Record<string, any>,
    mod: { itemName: string; module: string; icon: string },
  ): Promise<B42Result> {
    const errors: string[] = [];
    const warnings: string[] = [];
    const info: string[] = [];

    const allowed = new Set<string>([
      ...tpl.fields.map((f) => f.key),
      "ItemType",
      "DisplayCategory",
      "Icon",
      ...(tpl.emitWeaponSprite ? ["WeaponSprite"] : []),
      ...(tpl.extraProps ?? []),
    ]);

    // ---- 1. Item class (the P0 review item) --------------------------------
    if (stats.ItemType === undefined) {
      errors.push(
        `Missing ItemType — Build 42 items must declare their item class, e.g. ItemType = ${tpl.itemType}.`,
      );
    } else if (stats.ItemType !== tpl.itemType) {
      errors.push(
        `ItemType must be ${tpl.itemType} for the ${tpl.label} template (got "${stats.ItemType}").`,
      );
    }
    if ("Type" in stats) {
      errors.push(
        `Legacy "Type" property found — Build 42 uses ItemType = base:* instead.`,
      );
    }

    // ---- 2. Property-set discipline (no accidental template inheritance) --
    for (const key of Object.keys(stats)) {
      if (!allowed.has(key)) {
        warnings.push(
          `Property "${key}" is not part of the ${tpl.label} template and may be ignored by the game.`,
        );
      }
    }

    // ---- 3. Required properties --------------------------------------------
    for (const r of tpl.requiredProps) {
      if (stats[r] === undefined || stats[r] === null || stats[r] === "") {
        errors.push(`Required property "${r}" is missing.`);
      }
    }

    // ---- 4. Cross-property constraints --------------------------------------
    if (
      typeof stats.MinDamage === "number" &&
      typeof stats.MaxDamage === "number" &&
      stats.MinDamage > stats.MaxDamage
    ) {
      errors.push("MinDamage cannot be greater than MaxDamage.");
    }
    if (
      typeof stats.ConditionLowerChanceOneIn === "number" &&
      stats.ConditionLowerChanceOneIn < 1
    ) {
      errors.push("ConditionLowerChanceOneIn must be at least 1.");
    }
    if (
      tpl.id === "food" &&
      typeof stats.DaysFresh === "number" &&
      typeof stats.DaysTotallyRotten === "number" &&
      stats.DaysFresh > stats.DaysTotallyRotten
    ) {
      warnings.push("DaysFresh is greater than DaysTotallyRotten.");
    }

    // ---- 5. Clothing-specific semantics -------------------------------------
    if (tpl.id === "clothing") {
      const body = stats.BodyLocation;
      if (body && typeof body === "string" && !body.startsWith("base:")) {
        errors.push(
          `BodyLocation must be a Build 42 registry value like "base:tshirt" (got "${body}").`,
        );
      }
      if (!stats.ClothingItem) {
        errors.push(
          "ClothingItem is required — it binds the item to an outfit definition.",
        );
      }
      if (
        stats.BloodLocation &&
        !BLOOD_LOCATIONS.has(String(stats.BloodLocation))
      ) {
        warnings.push(
          `BloodLocation "${stats.BloodLocation}" is not a known Build 42 value (e.g. Shirt, UpperBody, Jacket, Trousers).`,
        );
      }
    }

    // ---- 6. Data-grounded checks against the parsed vanilla DB --------------
    // Mirror the balancing baseline exactly (Build 42 ItemType spelling,
    // template filter, dedupe) so registry-value checks never false-positive
    // on values that exist but fell outside an unfiltered capped query (e.g.
    // an uncommon-but-valid BodyLocation beyond the cap).
    let dataChecked = false;
    try {
      const seen = new Set<string>();
      const rows: Array<{ properties: Record<string, any> }> = [];
      const batch = await this.db
        .getItemsByPropertyType(
          tpl.baseline.propertyType,
          2000,
          tpl.baseline.propertyKey,
        )
        .catch(() => []);
      for (const row of batch) {
        if (seen.has(row.id)) continue;
        seen.add(row.id);
        if (tpl.baseline.filter && !tpl.baseline.filter(row.properties)) {
          continue;
        }
        rows.push(row);
      }
      if (rows.length > 0) {
        dataChecked = true;
        this.dataChecks(tpl, stats, mod, rows, errors, warnings, info);
      }
    } catch {
      // DB unavailable → static checks only
    }

    return { errors, warnings, info, dataChecked };
  }

  private dataChecks(
    tpl: ModgenTemplate,
    stats: Record<string, any>,
    mod: { icon: string },
    rows: Array<{ properties: Record<string, any> }>,
    errors: string[],
    warnings: string[],
    info: string[],
  ): void {
    const has = (k: string) => rows.some((r) => r.properties[k] !== undefined);
    const values = (k: string): Set<string> =>
      new Set(
        rows
          .map((r) => r.properties[k])
          .filter((v): v is string => typeof v === "string" && v !== ""),
      );

    // Registry / enum value membership — values must exist on vanilla items.
    if (tpl.id === "clothing" && typeof stats.BodyLocation === "string") {
      const bodies = values("BodyLocation");
      if (!bodies.has(stats.BodyLocation)) {
        errors.push(
          `BodyLocation "${stats.BodyLocation}" was not found on any vanilla base:clothing item.`,
        );
      }
    }
    if (typeof stats.SubCategory === "string") {
      const subs = values("SubCategory");
      if (!subs.has(stats.SubCategory)) {
        errors.push(
          `SubCategory "${stats.SubCategory}" is not used by vanilla ${tpl.itemType} items (${[...subs].join(", ")}).`,
        );
      }
    }
    if (typeof stats.DisplayCategory === "string") {
      const cats = values("DisplayCategory");
      if (!cats.has(stats.DisplayCategory)) {
        warnings.push(
          `DisplayCategory "${stats.DisplayCategory}" was not seen on vanilla ${tpl.itemType} items.`,
        );
      }
    }
    if (
      typeof stats.FabricType === "string" &&
      !FABRICS.has(stats.FabricType)
    ) {
      warnings.push(`FabricType "${stats.FabricType}" is not a known fabric.`);
    }

    // Every emitted numeric/boolean property must actually exist on some
    // vanilla item of this class — catches legacy properties the game would
    // silently ignore (e.g. Type, UseWhileEquipped on tools).
    for (const field of tpl.fields) {
      if (field.kind !== "number" && field.kind !== "bool") continue;
      if (stats[field.key] === undefined) continue;
      if (!has(field.key)) {
        warnings.push(
          `"${field.key}" is not used by any vanilla ${tpl.itemType} item — the game may ignore it.`,
        );
      }
    }

    // Icon resolution: known vanilla icon vs generated placeholder.
    const icons = values("Icon");
    if (icons.has(mod.icon)) {
      info.push(`Icon "${mod.icon}" reuses a vanilla texture.`);
    } else {
      info.push(
        `Icon "${mod.icon}" is custom — the generator ships a placeholder texture in 42/media/textures/.`,
      );
    }
  }
}

/** FabricType values seen on vanilla Build 42 clothing + common extras. */
const FABRICS = new Set([
  "Cotton",
  "Denim",
  "Leather",
  "Wool",
  "Kevlar",
  "Polyester",
  "Nylon",
  "Silk",
  "Spandex",
  "Fur",
  "Burlap",
  "GarbageBag",
  "Canvas",
  "Lace",
  "Ripstop",
  "Vinyl",
]);
