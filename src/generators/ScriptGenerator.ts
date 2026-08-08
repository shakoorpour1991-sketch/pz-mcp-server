import { DatabaseManager, GameItem } from "../database/DatabaseManager.js";
import { formatScriptValue } from "../utils/scriptSyntax.js";

export interface ItemTemplate {
  type: string;
  category: string;
  baseStats: Record<string, any>;
  requiredProperties: string[];
  optionalProperties: string[];
  balanceMultipliers: Record<string, number>;
}

export interface GenerationOptions {
  balance?: "vanilla" | "powerful" | "weak" | "custom";
  includeComments?: boolean;
}

export class ScriptGenerator {
  private db: DatabaseManager;
  private templates: Map<string, ItemTemplate> = new Map();
  private readonly categoryTemplateMap: Record<string, string> = {
    weapon: "melee_weapon",
    melee: "melee_weapon",
    "melee weapon": "melee_weapon",
    ranged: "ranged_weapon",
    "ranged weapon": "ranged_weapon",
    food: "food_item",
    tool: "tool_item",
    clothing: "clothing_item",
    recipe: "basic_recipe",
  };

  constructor(db: DatabaseManager) {
    this.db = db;
    this.initializeTemplates();
  }

  private initializeTemplates(): void {
    // Weapon templates
    this.templates.set("melee_weapon", {
      type: "item",
      category: "Weapon",
      baseStats: {
        DisplayCategory: "Weapon",
        Type: "Weapon",
        Weight: 1.0,
        BaseSpeed: 1.0,
        MaxDamage: 1.0,
        MinDamage: 0.8,
        ConditionMax: 10,
        ConditionLowerChanceOneIn: 20,
        Categories: "SmallBlade",
        DamageCategory: "Slash",
        SwingTime: 3,
        KnockBackOnNoDeath: true,
        TreeDamage: 0,
        DoorDamage: 5,
      },
      requiredProperties: ["DisplayName", "Icon", "Type", "Weight"],
      optionalProperties: [
        "AttachmentType",
        "WeaponSprite",
        "SwingSound",
        "HitSound",
        "BreakSound",
      ],
      balanceMultipliers: {
        powerful: 1.5,
        weak: 0.7,
        vanilla: 1.0,
      },
    });

    this.templates.set("ranged_weapon", {
      type: "item",
      category: "Weapon",
      baseStats: {
        DisplayCategory: "Weapon",
        Type: "Weapon",
        Weight: 2.0,
        MaxRange: 20,
        MinRange: 0.8,
        AimingTime: 50,
        ConditionMax: 15,
        Categories: "Firearm",
        RequiresEquippedBothHands: true,
        SubCategory: "Firearm",
        AimingPerkRangeModifier: 1.5,
        HitChance: 75,
        ProjectileCount: 1,
        ShareDamage: false,
        MaxHitCount: 1,
      },
      requiredProperties: ["DisplayName", "Icon", "Type", "Weight", "AmmoType"],
      optionalProperties: [
        "WeaponSprite",
        "SwingSound",
        "ClickSound",
        "EjectAmmoSound",
      ],
      balanceMultipliers: {
        powerful: 1.3,
        weak: 0.8,
        vanilla: 1.0,
      },
    });

    this.templates.set("food_item", {
      type: "item",
      category: "Food",
      baseStats: {
        DisplayCategory: "Food",
        Type: "Food",
        Weight: 0.1,
        HungerChange: -10,
        ThirstChange: 0,
        Calories: 50,
        Carbohydrates: 5,
        Lipids: 1,
        Proteins: 2,
        DaysFresh: 7,
        DaysTotallyRotten: 14,
        IsCookable: true,
      },
      requiredProperties: ["DisplayName", "Icon", "Type"],
      optionalProperties: ["EvolvedRecipe", "OnEat", "CustomContextMenu"],
      balanceMultipliers: {
        powerful: 1.2,
        weak: 0.8,
        vanilla: 1.0,
      },
    });

    this.templates.set("tool_item", {
      type: "item",
      category: "Tool",
      baseStats: {
        DisplayCategory: "Tool",
        Type: "Normal",
        Weight: 0.5,
        ConditionMax: 10,
        ConditionLowerChanceOneIn: 30,
        Categories: "Tool",
      },
      requiredProperties: ["DisplayName", "Icon", "Type"],
      optionalProperties: ["AttachmentType", "Tags", "MetalValue"],
      balanceMultipliers: {
        powerful: 1.1,
        weak: 0.9,
        vanilla: 1.0,
      },
    });

    this.templates.set("clothing_item", {
      type: "item",
      category: "Clothing",
      baseStats: {
        DisplayCategory: "Clothing",
        Type: "Clothing",
        Weight: 0.3,
        BodyLocation: "Torso",
        CanBeEquipped: "Torso",
        BloodLocation: "Torso",
        FabricType: "Cotton",
        ClothingItem: "Base.TShirt_DefaultTEXTURE",
      },
      requiredProperties: ["DisplayName", "Icon", "Type", "BodyLocation"],
      optionalProperties: ["Insulation", "WindResistance", "WaterResistance"],
      balanceMultipliers: {
        powerful: 1.2,
        weak: 0.8,
        vanilla: 1.0,
      },
    });

    // Recipe template
    this.templates.set("basic_recipe", {
      type: "recipe",
      category: "Recipe",
      baseStats: {
        Time: 50.0,
        Category: "Cooking",
        OnCreate: "Recipe.OnCreate.CannedFood",
        OnGiveXP: "Recipe.OnGiveXP.Cooking5",
      },
      requiredProperties: ["Result"],
      optionalProperties: ["Sound", "Category", "NeedToBeLearn"],
      balanceMultipliers: {
        powerful: 0.7, // Faster crafting
        weak: 1.5, // Slower crafting
        vanilla: 1.0,
      },
    });

    // Evolved recipe template (transforms a base item with additional ingredients)
    this.templates.set("evolved_recipe", {
      type: "evolvedrecipe",
      category: "Recipe",
      baseStats: {
        AllowFrozen: false,
        MaxItems: 3,
      },
      requiredProperties: ["BaseItem"],
      optionalProperties: ["Ingredients", "AllowFrozen", "MaxItems"],
      balanceMultipliers: {
        powerful: 1.0,
        weak: 1.0,
        vanilla: 1.0,
      },
    });

    // Fixing template — emit a B41-style fixing block. The generator does not
    // fill defaults; everything comes from the user specs (freebuff fix: the
    // 'fixing' type previously had no template and threw "No template found").
    this.templates.set("fixing", {
      type: "fixing",
      category: "Fixing",
      baseStats: {},
      requiredProperties: [],
      optionalProperties: ["Require", "Fixer"],
      balanceMultipliers: {
        powerful: 1.0,
        weak: 1.0,
        vanilla: 1.0,
      },
    });

    // Sound template — minimal sound block; properties come from the user
    // specs (freebuff fix: 'sound' previously had no template and threw).
    this.templates.set("sound", {
      type: "sound",
      category: "Sound",
      baseStats: {},
      requiredProperties: [],
      optionalProperties: ["category", "clip", "file", "event"],
      balanceMultipliers: {
        powerful: 1.0,
        weak: 1.0,
        vanilla: 1.0,
      },
    });

    // Vehicle template (minimal top-level vehicle script)
    this.templates.set("vehicle", {
      type: "vehicle",
      category: "Vehicle",
      baseStats: {
        Mass: 1000,
        EngineLoudness: 100,
        EngineForce: 280,
        BrakingForce: 40,
        MaxSpeed: 130,
        SuspensionTravel: 5,
        WheelTrackWidth: 1.4,
        AxleWeight: 50,
        MechanicalConditionMax: 100,
      },
      requiredProperties: ["Mass"],
      optionalProperties: [
        "EngineForce",
        "MaxSpeed",
        "BrakingForce",
        "EngineLoudness",
      ],
      balanceMultipliers: {
        powerful: 1.2,
        weak: 0.8,
        vanilla: 1.0,
      },
    });
  }

  async generateScript(
    type: string,
    name: string,
    specifications: Record<string, any>,
    module: string = "Base",
    options: GenerationOptions = {},
  ): Promise<string> {
    const template = this.getTemplate(type, specifications.category);
    if (!template) {
      throw new Error(
        `No template found for type: ${type}, category: ${specifications.category}`,
      );
    }

    // Get balance reference from similar vanilla items
    const balanceRef = await this.getBalanceReference(type, specifications);

    // Template-selection / balance-hint keys (category, weaponType, similar)
    // are consumed above for template lookup and balancing; they are NOT PZ
    // script properties for item/vehicle output and must not leak into it.
    // (For `sound`, `category` IS a real property and is emitted deliberately;
    // recipe/evolvedrecipe/fixing already exclude or use their own keys.)
    const propSpecs: Record<string, any> = { ...specifications };
    if (type === "item" || type === "vehicle") {
      for (const key of ["category", "weaponType", "similar"]) {
        delete propSpecs[key];
      }
    }

    // Generate the script content
    const content = await this.generateScriptContent(
      type,
      name,
      propSpecs,
      template,
      balanceRef,
      options,
    );

    // Wrap in module if needed
    return this.wrapInModule(content, module, options.includeComments);
  }

  private getTemplate(type: string, category?: string): ItemTemplate | null {
    if (category) {
      const key = category
        .toLowerCase()
        .replace(/[\s_]+/g, " ")
        .trim();
      const templateKey = this.categoryTemplateMap[key];
      if (templateKey) {
        return this.templates.get(templateKey)!;
      }
    }

    // Default fallback based on type
    switch (type) {
      case "item":
        return this.templates.get("tool_item")!;
      case "recipe":
        return this.templates.get("basic_recipe")!;
      case "evolvedrecipe":
        return this.templates.get("evolved_recipe")!;
      case "vehicle":
        return this.templates.get("vehicle")!;
      case "fixing":
        return this.templates.get("fixing")!;
      case "sound":
        return this.templates.get("sound")!;
      default:
        return null;
    }
  }

  private async getBalanceReference(
    type: string,
    specs: Record<string, any>,
  ): Promise<GameItem[]> {
    const searchQueries = [];

    // Build search queries based on specifications
    if (specs.category) {
      searchQueries.push(specs.category);
    }

    if (specs.weaponType) {
      searchQueries.push(specs.weaponType);
    }

    if (specs.similar) {
      searchQueries.push(specs.similar);
    }

    // Default queries for different types
    if (searchQueries.length === 0) {
      switch (type) {
        case "item":
          if (specs.category === "Weapon") {
            searchQueries.push("weapon damage");
          } else if (specs.category === "Food") {
            searchQueries.push("food hunger");
          } else {
            searchQueries.push("tool");
          }
          break;
        case "recipe":
          searchQueries.push("recipe cooking");
          break;
        default:
          searchQueries.push(type);
      }
    }

    // Search for similar items
    const references: GameItem[] = [];
    for (const query of searchQueries) {
      const results = await this.db.searchContent(query, {
        type: type === "item" ? "item" : type,
        limit: 5,
      });
      references.push(...results);
    }

    return references;
  }

  private async generateScriptContent(
    type: string,
    name: string,
    specs: Record<string, any>,
    template: ItemTemplate,
    references: GameItem[],
    options: GenerationOptions,
  ): Promise<string> {
    if (type === "item") {
      return this.generateItemScript(
        name,
        specs,
        template,
        references,
        options,
      );
    } else if (type === "recipe") {
      return this.generateRecipeScript(
        name,
        specs,
        template,
        references,
        options,
      );
    } else if (type === "fixing") {
      return this.generateFixingScript(
        name,
        specs,
        template,
        references,
        options,
      );
    } else if (type === "sound") {
      return this.generateSoundScript(
        name,
        specs,
        template,
        references,
        options,
      );
    } else if (type === "evolvedrecipe") {
      return this.generateEvolvedRecipeScript(
        name,
        specs,
        template,
        references,
        options,
      );
    } else if (type === "vehicle") {
      return this.generateVehicleScript(
        name,
        specs,
        template,
        references,
        options,
      );
    }

    throw new Error(`Script generation for type '${type}' not implemented`);
  }

  private generateItemScript(
    name: string,
    specs: Record<string, any>,
    template: ItemTemplate,
    references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${specs.DisplayName || name} - Generated item */`);
    }

    lines.push(`    item ${name}`);
    lines.push(`    {`);

    // Merge template stats with user specifications
    const properties = { ...template.baseStats, ...specs };

    // Apply balance adjustments
    if (options.balance && options.balance !== "custom") {
      this.applyBalanceAdjustments(
        properties,
        template,
        options.balance,
        references,
      );
    }

    // Generate properties
    for (const [key, value] of Object.entries(properties)) {
      if (value !== undefined && value !== null) {
        const formattedValue = this.formatPropertyValue(value);
        lines.push(`        ${key} = ${formattedValue},`);
      }
    }

    lines.push(`    }`);

    return lines.join("\n");
  }

  private generateRecipeScript(
    name: string,
    specs: Record<string, any>,
    template: ItemTemplate,
    references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${name} - Generated recipe */`);
    }

    lines.push(`    recipe ${name}`);
    lines.push(`    {`);

    // Add ingredients
    if (specs.ingredients && Array.isArray(specs.ingredients)) {
      for (const ingredient of specs.ingredients) {
        if (typeof ingredient === "string") {
          lines.push(`        ${ingredient},`);
        } else if (ingredient.item) {
          const count = ingredient.count || 1;
          if (ingredient.keep) {
            lines.push(`        keep ${ingredient.item},`);
          } else {
            lines.push(
              `        ${ingredient.item}${count > 1 ? `=${count}` : ""},`,
            );
          }
        }
      }
      lines.push("");
    }

    // Add result
    if (specs.result) {
      const resultCount = specs.resultCount || 1;
      lines.push(`        Result:${specs.result}=${resultCount},`);
    }

    // Merge template properties with user specifications
    const properties = { ...template.baseStats };
    Object.keys(specs).forEach((key) => {
      if (!["ingredients", "result", "resultCount"].includes(key)) {
        properties[key] = specs[key];
      }
    });

    // Apply balance adjustments
    if (options.balance && options.balance !== "custom") {
      this.applyRecipeBalanceAdjustments(
        properties,
        template,
        options.balance,
        references,
      );
    }

    // Generate properties
    for (const [key, value] of Object.entries(properties)) {
      if (value !== undefined && value !== null) {
        const formattedValue = this.formatPropertyValue(value);
        lines.push(`        ${key}:${formattedValue},`);
      }
    }

    lines.push(`    }`);

    return lines.join("\n");
  }

  private generateFixingScript(
    name: string,
    specs: Record<string, any>,
    _template: ItemTemplate,
    _references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${name} - Generated fixing script */`);
    }

    lines.push(`    fixing ${name}`);
    lines.push(`    {`);

    // Add required item
    if (specs.require) {
      lines.push(`        Require : ${specs.require},`);
      lines.push("");
    }

    // Add fixers
    if (specs.fixers && Array.isArray(specs.fixers)) {
      for (const fixer of specs.fixers) {
        let fixerLine = `        Fixer : ${fixer.material}=${fixer.quantity}`;
        if (fixer.skill && fixer.skillLevel) {
          fixerLine += `; ${fixer.skill}=${fixer.skillLevel}`;
        }
        fixerLine += ",";
        lines.push(fixerLine);
      }
    }

    lines.push(`    }`);

    return lines.join("\n");
  }

  private generateSoundScript(
    name: string,
    specs: Record<string, any>,
    _template: ItemTemplate,
    _references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${name} - Generated sound */`);
    }

    lines.push(`    sound ${name}`);
    lines.push(`    {`);

    // Add category
    if (specs.category) {
      lines.push(`        category = ${specs.category},`);
    }

    // Add clip block
    lines.push(`        clip`);
    lines.push(`        {`);

    if (specs.file) {
      lines.push(`            file = ${specs.file},`);
    } else if (specs.event) {
      lines.push(`            event = ${specs.event},`);
    }

    if (specs.distanceMax) {
      lines.push(`            distanceMax = ${specs.distanceMax},`);
    }

    lines.push(`        }`);
    lines.push(`    }`);

    return lines.join("\n");
  }

  private generateEvolvedRecipeScript(
    name: string,
    specs: Record<string, any>,
    template: ItemTemplate,
    _references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${name} - Generated evolved recipe */`);
    }

    lines.push(`    evolvedrecipe ${name}`);
    lines.push(`    {`);

    // Base item (the item the recipe transforms)
    const baseItem = specs.baseItem || specs.BaseItem;
    if (baseItem) {
      lines.push(`        BaseItem: ${baseItem},`);
    }

    // Ingredients: array of strings or {item, count} objects
    if (specs.ingredients && Array.isArray(specs.ingredients)) {
      const ingredients = specs.ingredients
        .map((ing: any) => (typeof ing === "string" ? ing : ing && ing.item))
        .filter((v: any) => typeof v === "string" && v.trim().length > 0);
      if (ingredients.length > 0) {
        lines.push(`        Ingredients: ${ingredients.join(", ")},`);
      }
    }

    // Merge remaining template defaults with user specs
    const properties = { ...template.baseStats };
    Object.keys(specs).forEach((key) => {
      if (!["baseItem", "BaseItem", "ingredients"].includes(key)) {
        properties[key] = specs[key];
      }
    });

    for (const [key, value] of Object.entries(properties)) {
      if (value !== undefined && value !== null) {
        lines.push(`        ${key}: ${this.formatPropertyValue(value)},`);
      }
    }

    lines.push(`    }`);
    return lines.join("\n");
  }

  private generateVehicleScript(
    name: string,
    specs: Record<string, any>,
    template: ItemTemplate,
    _references: GameItem[],
    options: GenerationOptions,
  ): string {
    const lines: string[] = [];

    if (options.includeComments) {
      lines.push(`    /* ${name} - Generated vehicle */`);
    }

    lines.push(`    vehicle ${name}`);
    lines.push(`    {`);

    // Merge template defaults with user specifications
    const properties = { ...template.baseStats, ...specs };

    for (const [key, value] of Object.entries(properties)) {
      if (value !== undefined && value !== null) {
        lines.push(`        ${key} = ${this.formatPropertyValue(value)},`);
      }
    }

    lines.push(`    }`);
    return lines.join("\n");
  }

  private applyBalanceAdjustments(
    properties: Record<string, any>,
    template: ItemTemplate,
    balance: string,
    references: GameItem[],
  ): void {
    const multiplier = template.balanceMultipliers[balance] || 1.0;

    // Apply multipliers to damage-related properties
    const damageProps = [
      "MaxDamage",
      "MinDamage",
      "CritDmgMultiplier",
      "DoorDamage",
      "TreeDamage",
    ];
    for (const prop of damageProps) {
      if (properties[prop] && typeof properties[prop] === "number") {
        properties[prop] = Math.round(properties[prop] * multiplier * 10) / 10;
      }
    }

    // Apply inverse multipliers to negative properties
    const inverseProps = ["Weight", "SwingTime"];
    for (const prop of inverseProps) {
      if (properties[prop] && typeof properties[prop] === "number") {
        properties[prop] =
          Math.round((properties[prop] / multiplier) * 10) / 10;
      }
    }

    // Adjust durability
    if (
      properties.ConditionMax &&
      typeof properties.ConditionMax === "number"
    ) {
      properties.ConditionMax = Math.round(
        properties.ConditionMax * multiplier,
      );
    }

    // Use reference items for better balance
    if (references.length > 0) {
      this.adjustBasedOnReferences(properties, references, balance);
    }
  }

  private applyRecipeBalanceAdjustments(
    properties: Record<string, any>,
    template: ItemTemplate,
    balance: string,
    _references: GameItem[],
  ): void {
    const multiplier = template.balanceMultipliers[balance] || 1.0;

    // Adjust recipe time (inverse for powerful)
    if (properties.Time && typeof properties.Time === "number") {
      properties.Time =
        Math.round(properties.Time * (1 / multiplier) * 10) / 10;
    }
  }

  private adjustBasedOnReferences(
    properties: Record<string, any>,
    references: GameItem[],
    balance: string,
  ): void {
    // Calculate average stats from references
    const avgStats: Record<string, number> = {};
    const numericProps = ["MaxDamage", "MinDamage", "Weight", "ConditionMax"];

    for (const prop of numericProps) {
      const values = references
        .map((ref) => ref.properties[prop])
        .filter((val) => typeof val === "number") as number[];

      if (values.length > 0) {
        avgStats[prop] =
          values.reduce((sum, val) => sum + val, 0) / values.length;
      }
    }

    // Adjust properties based on balance and averages
    const balanceMultipliers = {
      powerful: 1.2,
      weak: 0.8,
      vanilla: 1.0,
    };

    const multiplier =
      balanceMultipliers[balance as keyof typeof balanceMultipliers] || 1.0;

    for (const [prop, avgValue] of Object.entries(avgStats)) {
      if (properties[prop] === undefined) {
        properties[prop] = Math.round(avgValue * multiplier * 10) / 10;
      }
    }
  }

  private formatPropertyValue(value: any): string {
    // Shared with the parser/validator value handling (audit F10).
    return formatScriptValue(value);
  }

  private wrapInModule(
    content: string,
    module: string,
    includeComments: boolean = false,
  ): string {
    const lines: string[] = [];

    if (includeComments) {
      lines.push("/**");
      lines.push(" * Generated by Project Zomboid MCP Server");
      lines.push(" * https://github.com/shakoorpour1991-sketch/pz-mcp-server");
      lines.push(" */");
      lines.push("");
    }

    lines.push(`module ${module}`);
    lines.push("{");
    lines.push(content);
    lines.push("}");

    return lines.join("\n");
  }
}
