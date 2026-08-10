/**
 * Mod Generator templates — the five beginner-friendly starting points.
 *
 * Each template describes:
 *  - how its script is produced (the existing ScriptGenerator's item template
 *    is reused via `category`; the generator merges these stats over it),
 *  - every editable stat field (label, type, range, unit, plain-language hint,
 *    group) so the deck can render a form and clients can validate input,
 *  - a vanilla baseline query (DatabaseManager.getItemsByPropertyType + an
 *    optional in-memory filter) used to derive realistic balanced stats from
 *    real game data when the DB has been parsed,
 *  - sane fallback defaults for machines where vanilla data isn't indexed yet,
 *  - knowledge-base references surfaced as "learn more" hints.
 *
 * Ranges mirror the ValidationEngine's property validators (see
 * src/validation/ValidationEngine.ts) so generated scripts always validate.
 */

export type ModgenTemplateId =
  | "simple_item"
  | "melee_weapon"
  | "food"
  | "tool"
  | "clothing";

export type StatFieldKind = "number" | "bool" | "enum" | "string";

export interface StatField {
  /** The Project Zomboid script property this field maps to. */
  key: string;
  /** Beginner-friendly label shown in the UI. */
  label: string;
  kind: StatFieldKind;
  /** Numeric bounds (used for clamping + local randomize when no vanilla data). */
  min?: number;
  max?: number;
  step?: number;
  /** Integer-valued (no decimals). */
  integer?: boolean;
  unit?: string;
  /** Plain-language explanation of what the stat does in-game. */
  hint: string;
  /** Values for enum fields. */
  enumValues?: string[];
  /** Visual grouping in the form ("Basics", "Damage", "Durability", …). */
  group: string;
  /** Auto-balance candidate: the server derives this from vanilla data. */
  auto?: boolean;
}

export interface ModgenTemplate {
  id: ModgenTemplateId;
  /** Short display label ("Melee Weapon"). */
  label: string;
  /** One-liner shown on the template card. */
  short: string;
  /** Longer description for the build screen. */
  description: string;
  /** ScriptGenerator category — selects the item template + balances. */
  category: "Misc" | "Weapon" | "Food" | "Tool" | "Clothing";
  /** Validator-accepted Type value for the generated item. */
  pzType: "Normal" | "Weapon" | "Food" | "Clothing";
  /** Default DisplayCategory (validator enum). */
  displayCategory: string;
  /** Default DamageCategory for weapons (validator enum). */
  damageCategory?: "Slash" | "Stab" | "Blunt" | "Burn" | "Bite";
  /** Default sprite reference for the Icon property. */
  defaultIcon: string;
  /**
   * Vanilla baseline: getItemsByPropertyType(propertyType, …, propertyKey)
   * then the filter. The filter narrows the big buckets (e.g. ItemType
   * base:normal holds tools AND miscellaneous junk) so auto-stats come from
   * comparable items.
   *
   * Build 42.20 parses items with `ItemType` (lowercase tag values like
   * "base:weapon"); older parses use `Type` ("Weapon"). `legacy` is queried
   * too and the results are unioned so either dataset works.
   */
  baseline: {
    /** Property name to match (B42: "ItemType"). */
    propertyKey: string;
    /** Value to match (B42: "base:weapon"; legacy: "Weapon"). */
    propertyType: string;
    /** Pre-B42 spelling (Type=Weapon) — queried in addition. */
    legacy?: { propertyKey: string; propertyType: string };
    label: string;
    filter?: (p: Record<string, any>) => boolean;
  };
  /** Fallback defaults used when the DB has no vanilla data to derive from. */
  defaultStats: Record<string, any>;
  /** Editable fields, grouped and ordered. */
  fields: StatField[];
  /** Knowledge-base docs referenced for deeper reading. */
  kbRefs: Array<{ label: string; path: string }>;
}

const str = (p: Record<string, any>, key: string): string =>
  String(p[key] ?? "");
const categoriesInclude = (p: Record<string, any>, cat: string): boolean =>
  str(p, "Categories")
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .some((s) => s.toLowerCase() === cat.toLowerCase());

export const MODGEN_TEMPLATES: ModgenTemplate[] = [
  {
    id: "simple_item",
    label: "Simple Item",
    short: "A collectible or utility item that stacks in your inventory.",
    description:
      "The classic starting point: a non-equippable item (junk, a unique collectible, a crafting material) with weight, durability and a metal value.",
    category: "Misc",
    pzType: "Normal",
    displayCategory: "Misc",
    defaultIcon: "Pen",
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:normal",
      legacy: { propertyKey: "Type", propertyType: "Normal" },
      label: "miscellaneous items",
      filter: (p) => ["Misc", "Junk"].includes(str(p, "DisplayCategory")),
    },
    defaultStats: {
      Weight: 0.5,
      ConditionMax: 10,
      ConditionLowerChanceOneIn: 40,
      MetalValue: 5,
      Categories: "Misc",
      Icon: "Pen",
    },
    fields: [
      {
        key: "Weight",
        label: "Weight",
        kind: "number",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "kg",
        hint: "How heavy the item is in kilograms. Lighter is easier to carry.",
        group: "Basics",
        auto: true,
      },
      {
        key: "ConditionMax",
        label: "Max condition",
        kind: "number",
        min: 1,
        max: 100,
        integer: true,
        unit: "pts",
        hint: "Maximum durability. 10 is a typical throwaway item, 100 is nearly indestructible.",
        group: "Durability",
        auto: true,
      },
      {
        key: "ConditionLowerChanceOneIn",
        label: "Durability loss",
        kind: "number",
        min: 1,
        max: 1000,
        integer: true,
        unit: "1 in N",
        hint: "1 in N uses before the item degrades. Higher = lasts longer (100 = about 100 uses).",
        group: "Durability",
        auto: true,
      },
      {
        key: "MetalValue",
        label: "Metal value",
        kind: "number",
        min: 0,
        max: 1000,
        integer: true,
        unit: "units",
        hint: "How much smeltable metal the item yields (used by metalworking/knapping). 0 = not metallic.",
        group: "Crafting",
        auto: true,
      },
      {
        key: "Categories",
        label: "Categories",
        kind: "enum",
        enumValues: ["Misc", "Junk", "Tool", "Key", "Furniture"],
        hint: "Tags that recipes and gameplay reference (e.g. junk items can be ripped for cloth).",
        group: "Basics",
      },
    ],
    kbRefs: [
      { label: "Wiki — Scripts", path: "knowledge-base/wiki/Scripts.md" },
      { label: "Wiki — Item tags", path: "knowledge-base/wiki/Item_tag.md" },
    ],
  },
  {
    id: "melee_weapon",
    label: "Melee Weapon",
    short: "A balanced melee weapon with damage, crits and durability.",
    description:
      "A full melee weapon (sword, bat, axe…) with damage, critical hits, knockdown physics, stamina cost and durability — auto-balanced against the real melee arsenal.",
    category: "Weapon",
    pzType: "Weapon",
    displayCategory: "Weapon",
    damageCategory: "Slash",
    defaultIcon: "Sword",
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:weapon",
      legacy: { propertyKey: "Type", propertyType: "Weapon" },
      label: "melee weapons",
      // base:weapon is the melee bucket; exclude anything firearm-like
      // (AmmoType / Firearm subcategory) so the baseline stays melee-only.
      filter: (p) =>
        !str(p, "AmmoType") && str(p, "SubCategory") !== "Firearm",
    },
    defaultStats: {
      Weight: 1.0,
      MaxDamage: 1.1,
      MinDamage: 0.8,
      CriticalChance: 40,
      CritDmgMultiplier: 2.0,
      KnockdownMod: 2.0,
      DoorDamage: 5,
      TreeDamage: 0,
      EnduranceMod: 1.0,
      RunSpeedModifier: 1.0,
      MaxHitcount: 1,
      ConditionMax: 15,
      ConditionLowerChanceOneIn: 20,
      DamageCategory: "Slash",
      Icon: "Sword",
    },
    fields: [
      {
        key: "Weight",
        label: "Weight",
        kind: "number",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "kg",
        hint: "Heavier weapons swing slower and tire you faster, but hit harder.",
        group: "Basics",
        auto: true,
      },
      {
        key: "MaxDamage",
        label: "Max damage",
        kind: "number",
        min: 0,
        max: 100,
        step: 0.1,
        hint: "Peak damage per hit (1.0 ≈ a standard bat). Vanilla melee ranges roughly 0.4–1.6.",
        group: "Damage",
        auto: true,
      },
      {
        key: "MinDamage",
        label: "Min damage",
        kind: "number",
        min: 0,
        max: 100,
        step: 0.1,
        hint: "Lowest damage roll per hit. Keep it under MaxDamage.",
        group: "Damage",
        auto: true,
      },
      {
        key: "CriticalChance",
        label: "Critical chance",
        kind: "number",
        min: 0,
        max: 100,
        integer: true,
        step: 1,
        unit: "%",
        hint: "Chance of a critical hit (usually knocks the zombie down). 40 is a good default.",
        group: "Damage",
        auto: true,
      },
      {
        key: "CritDmgMultiplier",
        label: "Critical multiplier",
        kind: "number",
        min: 1,
        max: 10,
        step: 0.1,
        hint: "How many times normal damage a critical hit deals.",
        group: "Damage",
        auto: true,
      },
      {
        key: "DamageCategory",
        label: "Damage type",
        kind: "enum",
        enumValues: ["Slash", "Stab", "Blunt", "Burn", "Bite"],
        hint: "Determines the wound type: Slash cuts, Stab pierces, Blunt crushes.",
        group: "Damage",
      },
      {
        key: "KnockdownMod",
        label: "Knockdown",
        kind: "number",
        min: 0,
        max: 10,
        step: 0.1,
        hint: "How strongly hits shove zombies back / knock them over (2.0 is a typical baseball bat).",
        group: "Impact",
        auto: true,
      },
      {
        key: "DoorDamage",
        label: "Door damage",
        kind: "number",
        min: 0,
        max: 50,
        integer: true,
        hint: "Damage dealt to doors when used to bash them open.",
        group: "Impact",
        auto: true,
      },
      {
        key: "TreeDamage",
        label: "Tree damage",
        kind: "number",
        min: 0,
        max: 20,
        integer: true,
        hint: "How effective the weapon is at chopping trees.",
        group: "Impact",
        auto: true,
      },
      {
        key: "EnduranceMod",
        label: "Stamina use",
        kind: "number",
        min: 0,
        max: 5,
        step: 0.1,
        hint: "Stamina cost per swing — 1.0 is standard, lower is more efficient.",
        group: "Combat feel",
        auto: true,
      },
      {
        key: "RunSpeedModifier",
        label: "Movement speed",
        kind: "number",
        min: 0.5,
        max: 1.5,
        step: 0.05,
        hint: "How fast you move while holding it (1.0 = normal, 0.9 = big heavy weapon).",
        group: "Combat feel",
        auto: true,
      },
      {
        key: "MaxHitcount",
        label: "Max hits per swing",
        kind: "number",
        min: 1,
        max: 10,
        integer: true,
        hint: "How many zombies one swing can hit. 1 is standard; 2 makes crowd control much easier (vanilla Build 42 spelling: MaxHitcount).",
        group: "Combat feel",
        auto: true,
      },
      {
        key: "ConditionMax",
        label: "Max condition",
        kind: "number",
        min: 1,
        max: 100,
        integer: true,
        hint: "Maximum durability. 10–15 is typical for melee weapons.",
        group: "Durability",
        auto: true,
      },
      {
        key: "ConditionLowerChanceOneIn",
        label: "Durability loss",
        kind: "number",
        min: 1,
        max: 1000,
        integer: true,
        unit: "1 in N",
        hint: "1 in N hits before the weapon degrades. Higher = lasts longer.",
        group: "Durability",
        auto: true,
      },
    ],
    kbRefs: [
      {
        label: "KB — Weapons & Combat",
        path: "knowledge-base/Build42_Weapons_Combat_Research.md",
      },
    ],
  },
  {
    id: "food",
    label: "Food",
    short: "A balanced food item with hunger, thirst, calories and spoilage.",
    description:
      "A complete food item: how much it fills hunger and thirst, its calories and macros, how long it stays fresh, and whether it can be cooked.",
    category: "Food",
    pzType: "Food",
    displayCategory: "Food",
    defaultIcon: "BeefJerky",
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:food",
      legacy: { propertyKey: "Type", propertyType: "Food" },
      label: "food items",
    },
    defaultStats: {
      HungerChange: -10,
      ThirstChange: -5,
      Calories: 120,
      Carbohydrates: 10,
      Lipids: 5,
      Proteins: 8,
      Weight: 0.2,
      DaysFresh: 7,
      DaysTotallyRotten: 14,
      IsCookable: true,
      PoisonPower: 0,
      Icon: "BeefJerky",
    },
    fields: [
      {
        key: "HungerChange",
        label: "Hunger restored",
        kind: "number",
        min: -100,
        max: 0,
        integer: true,
        hint: "How much it fills you (negative = fills hunger). −10 is a light snack, −30 a full meal.",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "ThirstChange",
        label: "Thirst restored",
        kind: "number",
        min: -100,
        max: 0,
        integer: true,
        hint: "How much it quenches thirst (negative = hydrates).",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "Calories",
        label: "Calories",
        kind: "number",
        min: 0,
        max: 2000,
        integer: true,
        hint: "Energy content. A survivor needs roughly 1400–2400 kcal/day.",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "Carbohydrates",
        label: "Carbohydrates",
        kind: "number",
        min: 0,
        max: 200,
        integer: true,
        unit: "g",
        hint: "Carbs per serving — the main energy source.",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "Lipids",
        label: "Lipids",
        kind: "number",
        min: 0,
        max: 200,
        integer: true,
        unit: "g",
        hint: "Fat per serving. Needed for moodle recovery, high in calories.",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "Proteins",
        label: "Proteins",
        kind: "number",
        min: 0,
        max: 200,
        integer: true,
        unit: "g",
        hint: "Protein per serving — helps with muscle/strength recovery.",
        group: "Nutrition",
        auto: true,
      },
      {
        key: "Weight",
        label: "Weight",
        kind: "number",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "kg",
        hint: "Weight per unit carried.",
        group: "Basics",
        auto: true,
      },
      {
        key: "DaysFresh",
        label: "Days fresh",
        kind: "number",
        min: 0,
        max: 365,
        integer: true,
        unit: "days",
        hint: "Days before the food turns stale. Meat: 2–3, canned: 30+.",
        group: "Spoilage",
        auto: true,
      },
      {
        key: "DaysTotallyRotten",
        label: "Days to rot",
        kind: "number",
        min: 0,
        max: 730,
        integer: true,
        unit: "days",
        hint: "Days before the food becomes rotten and unsafe to eat.",
        group: "Spoilage",
        auto: true,
      },
      {
        key: "IsCookable",
        label: "Can be cooked",
        kind: "bool",
        hint: "Whether the item can be cooked/heated (removes germs, adds bonuses).",
        group: "Spoilage",
      },
      {
        key: "PoisonPower",
        label: "Poison chance",
        kind: "number",
        min: 0,
        max: 100,
        integer: true,
        hint: "Chance of food poisoning. 0 = safe. Leave at 0 unless it's a joke item.",
        group: "Nutrition",
        auto: true,
      },
    ],
    kbRefs: [
      { label: "KB — Cooking", path: "knowledge-base/Build42_Cooking_Research.md" },
      { label: "Wiki — Food types", path: "knowledge-base/wiki/Food_types.md" },
    ],
  },
  {
    id: "tool",
    label: "Tool",
    short: "A durable utility tool for crafting, farming or salvaging.",
    description:
      "A working tool (hammer, trowel, screwdriver…) with durability tuned against the real tool set — or a simple usable object with wear.",
    category: "Tool",
    pzType: "Normal",
    displayCategory: "Tool",
    defaultIcon: "Hammer",
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:normal",
      legacy: { propertyKey: "Type", propertyType: "Normal" },
      label: "tools",
      // base:normal is a big bucket — keep only DisplayCategory Tool or items
      // whose Categories carry the Tool tag.
      filter: (p) =>
        str(p, "DisplayCategory") === "Tool" ||
        categoriesInclude(p, "Tool"),
    },
    defaultStats: {
      Weight: 0.6,
      ConditionMax: 10,
      ConditionLowerChanceOneIn: 30,
      MetalValue: 5,
      UseWhileEquipped: false,
      CanBeEquipped: false,
      Icon: "Hammer",
    },
    fields: [
      {
        key: "Weight",
        label: "Weight",
        kind: "number",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "kg",
        hint: "Weight when carried.",
        group: "Basics",
        auto: true,
      },
      {
        key: "ConditionMax",
        label: "Max condition",
        kind: "number",
        min: 1,
        max: 100,
        integer: true,
        hint: "Maximum durability. Tools usually sit between 5 and 15.",
        group: "Durability",
        auto: true,
      },
      {
        key: "ConditionLowerChanceOneIn",
        label: "Durability loss",
        kind: "number",
        min: 1,
        max: 1000,
        integer: true,
        unit: "1 in N",
        hint: "1 in N uses before degradation. Higher = longer-lasting tool.",
        group: "Durability",
        auto: true,
      },
      {
        key: "MetalValue",
        label: "Metal value",
        kind: "number",
        min: 0,
        max: 1000,
        integer: true,
        hint: "Smeltable metal yield — lets the item be melted down.",
        group: "Crafting",
        auto: true,
      },
      {
        key: "UseWhileEquipped",
        label: "Use while equipped",
        kind: "bool",
        hint: "Whether the tool works from your hands slot (true) or needs to be in your inventory (false).",
        group: "Basics",
      },
      {
        key: "CanBeEquipped",
        label: "Can be equipped",
        kind: "bool",
        hint: "Whether the tool can be held in a hand slot.",
        group: "Basics",
      },
    ],
    kbRefs: [
      { label: "KB — Crafting & Skills", path: "knowledge-base/Build42_Crafting_Skills_Research.md" },
      { label: "Wiki — Item tags", path: "knowledge-base/wiki/Item_tag.md" },
    ],
  },
  {
    id: "clothing",
    label: "Clothing",
    short: "A wearable garment with insulation and weather protection.",
    description:
      "A wearable clothing item (jacket, shirt, pants…) with body location, insulation, wind/water resistance and movement speed effects.",
    category: "Clothing",
    pzType: "Clothing",
    displayCategory: "Clothing",
    defaultIcon: "Shirt_White",
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:clothing",
      legacy: { propertyKey: "Type", propertyType: "Clothing" },
      label: "clothing items",
    },
    defaultStats: {
      Weight: 0.3,
      BodyLocation: "Torso",
      Insulation: 0.5,
      WindResistance: 0.2,
      WaterResistance: 0.1,
      RunSpeedModifier: 1.0,
      FabricType: "Cotton",
      Icon: "Shirt_White",
    },
    fields: [
      {
        key: "Weight",
        label: "Weight",
        kind: "number",
        min: 0,
        max: 50,
        step: 0.1,
        unit: "kg",
        hint: "Weight when worn.",
        group: "Basics",
        auto: true,
      },
      {
        key: "BodyLocation",
        label: "Body location",
        kind: "enum",
        enumValues: ["Torso", "Legs", "Feet", "Head", "Hands", "FullSuit", "Neck", "Groin"],
        hint: "Which body slot the item occupies.",
        group: "Basics",
      },
      {
        key: "Insulation",
        label: "Insulation",
        kind: "number",
        min: 0,
        max: 2,
        step: 0.05,
        hint: "How warm it keeps you (0 = none, 1.0 ≈ a good winter jacket, 1.5+ very warm).",
        group: "Protection",
        auto: true,
      },
      {
        key: "WindResistance",
        label: "Wind resistance",
        kind: "number",
        min: 0,
        max: 2,
        step: 0.05,
        hint: "How well it blocks wind chill.",
        group: "Protection",
        auto: true,
      },
      {
        key: "WaterResistance",
        label: "Water resistance",
        kind: "number",
        min: 0,
        max: 2,
        step: 0.05,
        hint: "How well it keeps rain out.",
        group: "Protection",
        auto: true,
      },
      {
        key: "RunSpeedModifier",
        label: "Movement speed",
        kind: "number",
        min: 0.5,
        max: 1.5,
        step: 0.05,
        hint: "Speed while wearing it — heavy armor slows you down (0.9–0.95).",
        group: "Basics",
        auto: true,
      },
      {
        key: "FabricType",
        label: "Fabric",
        kind: "enum",
        enumValues: ["Cotton", "Denim", "Leather", "Wool", "Kevlar", "Polyester", "Nylon"],
        hint: "The material — affects tailoring recipes and feel.",
        group: "Basics",
      },
    ],
    kbRefs: [
      { label: "KB — Clothing & Armor", path: "knowledge-base/Build42_Clothing_Armor_Research.md" },
      { label: "KB — Tailoring", path: "knowledge-base/Build42_Tailoring_Research.md" },
    ],
  },
];

export function getModgenTemplate(
  id: string,
): ModgenTemplate | undefined {
  return MODGEN_TEMPLATES.find((t) => t.id === id);
}
