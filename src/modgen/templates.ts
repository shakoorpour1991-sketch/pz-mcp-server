/**
 * Mod Generator templates — the five beginner-friendly starting points.
 *
 * Each template is a complete Build 42 item definition:
 *  - `itemType` — the Build 42 item class emitted as `ItemType = base:*`
 *    (never the legacy `Type = ...` model),
 *  - every editable stat field (label, type, range, unit, hint, group),
 *  - a vanilla baseline query (DatabaseManager.getItemsByPropertyType + an
 *    optional in-memory filter) used to derive realistic balanced stats from
 *    real parsed game data when the DB is populated,
 *  - sane fallback defaults for machines where vanilla data isn't indexed,
 *  - a maturity level so the UI never over-promises (clothing reuses a
 *    vanilla outfit; a fully custom 3D outfit needs external assets),
 *  - knowledge-base references surfaced as "learn more" hints.
 *
 * Field names, enum values and defaults were verified against the parsed
 * Build 42.20 vanilla database (5,088 items) — e.g. weapon damage type is
 * `SubCategory` (Swinging/Stab/Spear), clothing uses registry-style
 * `BodyLocation = base:tshirt`, and `DisplayCategory` values come from real
 * vanilla categories (there is no "Misc" in Build 42).
 */

export type ModgenTemplateId =
  "simple_item" | "melee_weapon" | "food" | "tool" | "clothing";

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

/** How ready this template's output is for a typical beginner. */
export type ModgenMaturity = "ready" | "beta";

export interface ModgenTemplate {
  id: ModgenTemplateId;
  /** Short display label ("Melee Weapon"). */
  label: string;
  /** One-liner shown on the template card. */
  short: string;
  /** Longer description for the build screen. */
  description: string;
  /** Build 42 item class — emitted as `ItemType = <value>`. */
  itemType: "base:normal" | "base:weapon" | "base:food" | "base:clothing";
  /** Display category (real Build 42 value — validated against vanilla data). */
  displayCategory: string;
  /** Category label shown in the UI (informational only). */
  category: string;
  /** Default sprite reference for the Icon property (verified vanilla icon). */
  defaultIcon: string;
  /** Icons the user can pick from (all verified vanilla icon names). */
  iconSuggestions: string[];
  /** Properties that must be present for the item to be valid. */
  requiredProps: string[];
  /** Emit WeaponSprite = Icon (melee weapons — the in-world weapon model). */
  emitWeaponSprite?: boolean;
  /** Extra emitted properties not represented as editable fields. */
  extraProps?: string[];
  /** How complete/safe the output is for a beginner. */
  maturity: ModgenMaturity;
  /** Plain-language caveat shown next to the maturity badge. */
  maturityNote: string;
  /** Brand colour used for the generated poster + placeholder icon. */
  color: [number, number, number];
  /**
   * Vanilla baseline: getItemsByPropertyType(propertyType, …, propertyKey)
   * then the filter. Targets the Build 42.20 spelling — `ItemType` with
   * lowercase tag values like "base:weapon". The legacy B41 `Type`
   * spelling was removed (no item in the parsed DB has it).
   */
  baseline: {
    propertyKey: string;
    propertyType: string;
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

export const MODGEN_TEMPLATES: ModgenTemplate[] = [
  {
    id: "simple_item",
    label: "Simple Item",
    short: "A collectible or utility item that stacks in your inventory.",
    description:
      "The classic starting point: a non-equippable item (junk, a unique collectible, a crafting material) with weight, durability and a metal value.",
    itemType: "base:normal",
    displayCategory: "Junk",
    category: "Misc",
    defaultIcon: "Pen",
    iconSuggestions: [
      "Pen",
      "IDcard",
      "CreditCard",
      "BusinessCard",
      "PopEmpty",
      "Flier",
    ],
    requiredProps: ["Weight", "Icon"],
    maturity: "ready",
    maturityNote:
      "Plain item with real Build 42 junk styling — no extra assets needed.",
    color: [96, 116, 148],
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:normal",
      label: "collectible junk items",
      // base:normal is a huge bucket — keep only junk/memento collectibles so
      // auto-stats come from comparable items.
      filter: (p) => ["Junk", "Memento"].includes(str(p, "DisplayCategory")),
    },
    defaultStats: {
      Weight: 0.5,
      ConditionMax: 10,
      ConditionLowerChanceOneIn: 40,
      MetalValue: 5,
      Categories: "",
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
        kind: "string",
        hint: "Optional tags recipes can reference (e.g. base:write, base:canbeplowed). Leave empty if unsure.",
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
    itemType: "base:weapon",
    displayCategory: "Weapon",
    category: "Weapon",
    defaultIcon: "Axe",
    iconSuggestions: [
      "Axe",
      "ClubHammer",
      "KnifeButter",
      "UmbrellaWhite",
      "Pen",
    ],
    requiredProps: ["MaxDamage", "MinDamage", "ConditionMax", "Icon"],
    emitWeaponSprite: true,
    maturity: "ready",
    maturityNote:
      "Full melee weapon with the in-world weapon sprite tied to your icon.",
    color: [166, 64, 56],
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:weapon",
      label: "melee weapons",
      // base:weapon is the melee bucket; exclude anything firearm-like
      // (AmmoType / Firearm subcategory) so the baseline stays melee-only.
      filter: (p) => !str(p, "AmmoType") && str(p, "SubCategory") !== "Firearm",
    },
    defaultStats: {
      Weight: 1.5,
      MaxDamage: 1.1,
      MinDamage: 0.8,
      CriticalChance: 40,
      CritDmgMultiplier: 2.0,
      KnockdownMod: 2.0,
      DoorDamage: 5,
      TreeDamage: 0,
      EnduranceMod: 1.0,
      MaxHitcount: 1,
      ConditionMax: 15,
      ConditionLowerChanceOneIn: 20,
      SubCategory: "Swinging",
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
        key: "SubCategory",
        label: "Swing type",
        kind: "enum",
        enumValues: ["Swinging", "Stab", "Spear"],
        hint: "How the weapon attacks: Swinging = blunt & slash swings (bats, axes), Stab = thrusting blades (knives), Spear = polearms.",
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
        key: "MaxHitcount",
        label: "Max hits per swing",
        kind: "number",
        min: 1,
        max: 10,
        integer: true,
        hint: "How many zombies one swing can hit. 1 is standard; 2 makes crowd control much easier.",
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
    itemType: "base:food",
    displayCategory: "Food",
    category: "Food",
    defaultIcon: "BeefJerky",
    iconSuggestions: [
      "BeefJerky",
      "BeerBottle",
      "WaterBottle",
      "JarBrown",
      "PotFull",
    ],
    requiredProps: ["Calories", "Weight", "Icon"],
    maturity: "ready",
    maturityNote: "Complete food item — no extra assets needed.",
    color: [98, 152, 82],
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:food",
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
      {
        label: "KB — Cooking",
        path: "knowledge-base/Build42_Cooking_Research.md",
      },
      { label: "Wiki — Food types", path: "knowledge-base/wiki/Food_types.md" },
    ],
  },
  {
    id: "tool",
    label: "Tool",
    short: "A durable utility tool for crafting, farming or salvaging.",
    description:
      "A working tool (hammer, trowel, screwdriver…) with durability tuned against the real tool set — or a simple usable object with wear.",
    itemType: "base:normal",
    displayCategory: "Tool",
    category: "Tool",
    defaultIcon: "Wrench",
    iconSuggestions: ["Wrench", "Shovel", "Pliers", "Fork", "Shovel2"],
    requiredProps: ["Weight", "ConditionMax", "Icon"],
    maturity: "ready",
    maturityNote: "Durable utility item — no extra assets needed.",
    color: [192, 142, 62],
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:normal",
      label: "tools",
      // base:normal is a big bucket — keep only DisplayCategory Tool items.
      filter: (p) => str(p, "DisplayCategory") === "Tool",
    },
    defaultStats: {
      Weight: 0.6,
      ConditionMax: 10,
      ConditionLowerChanceOneIn: 30,
      MetalValue: 5,
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
    ],
    kbRefs: [
      {
        label: "KB — Crafting & Skills",
        path: "knowledge-base/Build42_Crafting_Skills_Research.md",
      },
      { label: "Wiki — Item tags", path: "knowledge-base/wiki/Item_tag.md" },
    ],
  },
  {
    id: "clothing",
    label: "Clothing",
    short: "A wearable garment with insulation and weather protection.",
    description:
      "A wearable clothing item (jacket, shirt, pants…) with a Build 42 body location, outfit reference, insulation and weather protection.",
    itemType: "base:clothing",
    displayCategory: "Clothing",
    category: "Clothing",
    defaultIcon: "TshirtGeneric",
    iconSuggestions: [
      "TshirtGeneric",
      "ShirtGeneric",
      "Bandeau_Burlap",
      "Bandeau_Denim",
    ],
    requiredProps: ["BodyLocation", "ClothingItem", "Icon"],
    maturity: "beta",
    maturityNote:
      "Renders using a vanilla t-shirt outfit (ClothingItem). A fully custom look needs 3D clothing assets.",
    color: [74, 122, 162],
    baseline: {
      propertyKey: "ItemType",
      propertyType: "base:clothing",
      label: "clothing items",
    },
    defaultStats: {
      Weight: 0.3,
      BodyLocation: "base:tshirt",
      ClothingItem: "Tshirt_DefaultTEXTURE",
      BloodLocation: "Shirt",
      Insulation: 0.5,
      WindResistance: 0.2,
      WaterResistance: 0.1,
      FabricType: "Cotton",
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
        enumValues: [
          "base:tshirt",
          "base:shirt",
          "base:sweater",
          "base:jacket",
          "base:pants",
          "base:shorts",
          "base:shoes",
          "base:hat",
          "base:skirt",
          "base:dress",
          "base:longskirt",
          "base:longdress",
          "base:mask",
          "base:scarf",
          "base:fullsuit",
        ],
        hint: "Which body slot the item occupies (Build 42 registry values — e.g. base:tshirt, base:jacket, base:pants).",
        group: "Basics",
      },
      {
        key: "ClothingItem",
        label: "Outfit reference",
        kind: "string",
        hint: "Binds the item to an outfit definition (clothing.xml). Defaults to a vanilla t-shirt outfit; a custom look needs 3D clothing assets.",
        group: "Basics",
      },
      {
        key: "BloodLocation",
        label: "Blood location",
        kind: "enum",
        enumValues: [
          "Shirt",
          "ShirtLongSleeves",
          "ShirtNoSleeves",
          "UpperBody",
          "Jacket",
          "Trousers",
          "Head",
          "Shoes",
          "Groin",
          "Neck",
          "Hands",
        ],
        hint: "Which body regions show blood on the garment (vanilla values like Shirt, UpperBody, Jacket).",
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
        key: "FabricType",
        label: "Fabric",
        kind: "enum",
        enumValues: [
          "Cotton",
          "Denim",
          "Leather",
          "Wool",
          "Kevlar",
          "Polyester",
          "Nylon",
        ],
        hint: "The material — affects tailoring recipes and feel.",
        group: "Basics",
      },
    ],
    kbRefs: [
      {
        label: "KB — Clothing & Armor",
        path: "knowledge-base/Build42_Clothing_Armor_Research.md",
      },
      {
        label: "KB — Tailoring",
        path: "knowledge-base/Build42_Tailoring_Research.md",
      },
    ],
  },
];

export function getModgenTemplate(id: string): ModgenTemplate | undefined {
  return MODGEN_TEMPLATES.find((t) => t.id === id);
}
