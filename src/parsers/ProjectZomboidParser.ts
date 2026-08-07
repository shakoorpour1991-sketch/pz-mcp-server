import { readFileSync, existsSync } from "fs";
import { readFile, readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { DatabaseManager, GameItem } from "../database/DatabaseManager.js";
import { matchPropertyLine, parseScriptValue } from "../utils/scriptSyntax.js";
import { scanScriptBlocks, ScanBlock } from "../utils/scriptScanner.js";
import { isBlockType } from "../utils/blockTypes.js";
import logger from "../utils/logger.js";

export interface ParseResults {
  itemCount: number;
  recipeCount: number;
  soundCount: number;
  vehicleCount: number;
  evolvedRecipeCount: number;
  fixingCount: number;
  filesProcessed: number;
  parseTime: number;
  errors: Array<{ file: string; message: string; line?: number }>;
}

export interface ModInfo {
  name?: string;
  id?: string;
  author?: string;
  description?: string;
  version?: string;
  url?: string;
  poster?: string;
  icon?: string;
  require?: string[];
  incompatible?: string[];
  versionMin?: string;
  versionMax?: string;
}

export class ProjectZomboidParser {
  private db: DatabaseManager;
  private scriptExtensions = [".txt"];
  private modInfoFile = "mod.info";

  constructor(db: DatabaseManager) {
    this.db = db;
  }

  async parseGameFiles(
    gamePath: string,
    forceReparse: boolean = false,
  ): Promise<ParseResults> {
    const startTime = Date.now();
    const results: ParseResults = {
      itemCount: 0,
      recipeCount: 0,
      soundCount: 0,
      vehicleCount: 0,
      evolvedRecipeCount: 0,
      fixingCount: 0,
      filesProcessed: 0,
      parseTime: 0,
      errors: [],
    };

    try {
      // Check if we need to parse
      if (!forceReparse) {
        const stats = await this.db.getStats();
        if (stats.total > 0) {
          logger.warn(
            "Database already contains data. Use forceReparse=true to re-parse.",
          );
          results.parseTime = Date.now() - startTime;
          return results;
        }
      }

      // Clear database if force reparsing
      if (forceReparse) {
        await this.db.clearDatabase();
      }

      // Parse vanilla game scripts
      const scriptsPath = join(gamePath, "media", "scripts");
      if (existsSync(scriptsPath)) {
        await this.parseDirectory(scriptsPath, results, "Base");
      } else {
        results.errors.push({
          file: scriptsPath,
          message: "Scripts directory not found in game installation",
        });
      }

      results.parseTime = Date.now() - startTime;
      logger.info(`Parsing completed in ${results.parseTime}ms`);
    } catch (error) {
      results.errors.push({
        file: "parser",
        message: `Parse error: ${error instanceof Error ? error.message : String(error)}`,
      });
    }

    return results;
  }

  async parseModDirectory(modPath: string): Promise<ParseResults> {
    const startTime = Date.now();
    const results: ParseResults = {
      itemCount: 0,
      recipeCount: 0,
      soundCount: 0,
      vehicleCount: 0,
      evolvedRecipeCount: 0,
      fixingCount: 0,
      filesProcessed: 0,
      parseTime: 0,
      errors: [],
    };

    try {
      // Parse mod.info if it exists
      let modInfo: ModInfo | null = null;
      const modInfoPath = join(modPath, this.modInfoFile);
      if (existsSync(modInfoPath)) {
        modInfo = this.parseModInfo(modInfoPath);
      }

      // Determine module name from mod info or directory
      const moduleName = modInfo?.id || basename(modPath);

      // Look for media/scripts directories in both versioned and common folders
      const possiblePaths = [
        join(modPath, "media", "scripts"), // Direct structure
        join(modPath, "42", "media", "scripts"), // Build 42 structure
        join(modPath, "common", "media", "scripts"), // Common structure
      ];

      let foundScripts = false;
      for (const scriptsPath of possiblePaths) {
        if (existsSync(scriptsPath)) {
          await this.parseDirectory(scriptsPath, results, moduleName);
          foundScripts = true;
        }
      }

      if (!foundScripts) {
        results.errors.push({
          file: modPath,
          message: "No scripts directory found in mod structure",
        });
      }

      results.parseTime = Date.now() - startTime;
    } catch (error) {
      results.errors.push({
        file: "mod_parser",
        message: `Mod parse error: ${error instanceof Error ? error.message : String(error)}`,
      });
    }

    return results;
  }

  private async parseDirectory(
    dirPath: string,
    results: ParseResults,
    modulePrefix: string,
  ): Promise<void> {
    try {
      // Async fs (freebuff M5): parsing must not block the event loop.
      const entries = await readdir(dirPath);

      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);

        if (entryStat.isDirectory()) {
          // Recursively parse subdirectories
          await this.parseDirectory(fullPath, results, modulePrefix);
        } else if (
          entryStat.isFile() &&
          this.scriptExtensions.includes(extname(entry).toLowerCase())
        ) {
          try {
            await this.parseScriptFile(fullPath, results, modulePrefix);
            results.filesProcessed++;
          } catch (error) {
            results.errors.push({
              file: fullPath,
              message: `Failed to parse file: ${error instanceof Error ? error.message : String(error)}`,
            });
          }
        }
      }
    } catch (error) {
      results.errors.push({
        file: dirPath,
        message: `Failed to read directory: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  }

  private async parseScriptFile(
    filePath: string,
    results: ParseResults,
    defaultModule: string,
  ): Promise<void> {
    const content = await readFile(filePath, "utf-8");
    const accumulatedItems: any[] = [];

    // Split the file into blocks with the shared scanner (freebuff M1) — the
    // same algorithm the validation engine uses, so the two consumers can
    // never drift apart again.
    const blocks = scanScriptBlocks(content, defaultModule);

    for (const block of blocks) {
      await this.finalizeBlock(block, filePath, accumulatedItems, results);
    }

    // Flush accumulated items to database
    if (accumulatedItems.length > 0) {
      await this.db.insertItems(accumulatedItems);

      // Populate cross-item references (recipe ingredients/results, fixing
      // requirements). Must run AFTER the flush: "references".item_id has a
      // FOREIGN KEY to items(id), so the item row must exist first. Non-fatal:
      // a reference failure must not abort parsing of the rest of the file.
      // The whole per-file batch runs in one transaction (freebuff M2) instead
      // of one autocommit INSERT per reference.
      await this.db.transaction(async () => {
        for (const item of accumulatedItems) {
          try {
            await this.extractReferences(item);
          } catch (refError) {
            logger.warn(
              `Reference extraction failed for ${item.id}: ${refError instanceof Error ? refError.message : String(refError)}`,
            );
          }
        }
      });
    }
  }

  private async finalizeBlock(
    block: ScanBlock,
    filePath: string,
    accumulatedItems: any[],
    results: ParseResults,
  ): Promise<void> {
    // Per-line property parse problems are collected here and surfaced once
    // per file instead of a logger.warn per malformed line (freebuff review
    // §3 code smell #4).
    const parseErrors: Array<{ file: string; message: string; line?: number }> =
      [];
    try {
      // The scanner normalized B42 "craftRecipe" blocks to type 'recipe';
      // block.rawType keeps the original keyword so parseBlock can
      // distinguish B42 craftRecipe ("key = value" properties, F6) from
      // legacy B41 recipe blocks ("key:value" properties, "Key=Count"
      // ingredients).
      const storedType = block.type;
      const item = this.parseBlock(
        {
          ...block,
          type: storedType,
          b42Recipe:
            block.rawType === "craftRecipe" || block.rawType === "craftrecipe",
        },
        block.content,
        filePath,
        block.startLine,
        parseErrors,
      );
      if (item) {
        // Only the six primary block types are stored (shared BLOCK_TYPES).
        // Container types (entity, model, event, ...) are consumed as blocks
        // so their inner lines never leak as fake items.
        if (isBlockType(storedType)) {
          accumulatedItems.push(item);

          // Update counters
          switch (item.type) {
            case "item":
              results.itemCount++;
              break;
            case "recipe":
              results.recipeCount++;
              break;
            case "sound":
              results.soundCount++;
              break;
            case "vehicle":
              results.vehicleCount++;
              break;
            case "evolvedrecipe":
              results.evolvedRecipeCount++;
              break;
            case "fixing":
              results.fixingCount++;
              break;
          }
        }
      }

      // Aggregate per-line property issues into a single warn + one error
      // entry each (with real line numbers), instead of warn-per-line.
      if (parseErrors.length > 0) {
        logger.warn(
          `Property parse issues in ${filePath}: ${parseErrors.length} issue(s)`,
        );
        results.errors.push(...parseErrors);
      }
    } catch (error) {
      results.errors.push({
        file: filePath,
        line: block.startLine,
        message: `Failed to parse ${block.type} block: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  }

  private parseBlock(
    blockInfo: any,
    content: string[],
    filePath: string,
    startLine: number,
    parseErrors: Array<{ file: string; message: string; line?: number }>,
  ): GameItem | null {
    const properties: Record<string, any> = {};
    const rawContent = content.join("\n");
    // B42 craftRecipe blocks group their item lines into "inputs" and
    // "outputs" sub-blocks; track the active section so the lines land in
    // the right bucket (audit F9).
    let recipeSection: "inputs" | "outputs" | null = null;
    // B42 style: "key = value" properties (F6). Real B42.20 craftRecipe
    // blocks always carry an inputs/outputs section, so detect it from the
    // content as well as from the original keyword.
    const b42Style =
      blockInfo.b42Recipe === true ||
      content.some((l) => {
        const bare = l
          .trim()
          .replace(/[{}]+\s*$/, "")
          .trim();
        return bare === "inputs" || bare === "outputs";
      });

    // Parse properties based on block type. Skip index 0 (the block header
    // line like "item Name" or "craftRecipe Name") — it is not a property.
    for (let i = 1; i < content.length; i++) {
      const line = content[i];
      const trimmed = line.trim();
      // Track craftRecipe inputs/outputs sections (F9). Section headers may
      // carry their opening brace ("inputs {"); any closing brace ends the
      // current section.
      if (blockInfo.type === "recipe") {
        const bare = trimmed.replace(/[{}]+\s*$/, "").trim();
        if (bare === "inputs" || bare === "outputs") {
          recipeSection = bare;
          continue;
        }
        if (trimmed.includes("}")) {
          recipeSection = null;
        }
      }
      if (!trimmed || trimmed.includes("{") || trimmed.includes("}")) continue;

      try {
        if (blockInfo.type === "item") {
          this.parseItemProperty(trimmed, properties);
        } else if (blockInfo.type === "recipe") {
          this.parseRecipeProperty(
            trimmed,
            properties,
            recipeSection,
            b42Style,
          );
        } else if (blockInfo.type === "fixing") {
          this.parseFixingProperty(trimmed, properties);
        } else if (blockInfo.type === "sound") {
          this.parseSoundProperty(trimmed, properties);
        } else if (blockInfo.type === "evolvedrecipe") {
          this.parseEvolvedRecipeProperty(trimmed, properties);
        } else if (blockInfo.type === "vehicle") {
          this.parseVehicleProperty(trimmed, properties);
        }
      } catch (error) {
        // Collect property parse errors (aggregated per file in finalizeBlock)
        parseErrors.push({
          file: filePath,
          line: startLine + i,
          message: `Failed to parse property: ${error instanceof Error ? error.message : String(error)}`,
        });
      }
    }

    // Extract rich metadata fields into top-level columns
    const tags = properties.Tags;
    const metalValue = properties.MetalValue;
    const weight = properties.Weight;
    const conditionMax = properties.ConditionMax;
    const attachmentTypeRaw = properties.AttachmentType;
    const runSpeedModifier = properties.RunSpeedModifier;
    const hungerChange = properties.HungerChange;
    const thirstChange = properties.ThirstChange;

    // Generate item ID
    const itemId =
      blockInfo.module === "Base"
        ? blockInfo.name
        : `${blockInfo.module}.${blockInfo.name}`;

    return {
      id: itemId,
      name: blockInfo.name,
      displayName: properties.DisplayName || properties.Name || blockInfo.name,
      type: blockInfo.type as any,
      module: blockInfo.module,
      category: properties.DisplayCategory || properties.Category,
      properties,
      tags: tags
        ? Array.isArray(tags)
          ? (tags as string[])
          : [tags]
        : undefined,
      metal_value: typeof metalValue === "number" ? metalValue : undefined,
      weight: typeof weight === "number" ? weight : undefined,
      condition_max:
        typeof conditionMax === "number" ? conditionMax : undefined,
      attachment_type: attachmentTypeRaw
        ? Array.isArray(attachmentTypeRaw)
          ? attachmentTypeRaw[0]
          : attachmentTypeRaw
        : undefined,
      run_speed_modifier:
        typeof runSpeedModifier === "number" ? runSpeedModifier : undefined,
      hunger_change:
        typeof hungerChange === "number" ? hungerChange : undefined,
      thirst_change:
        typeof thirstChange === "number" ? thirstChange : undefined,
      rawContent,
      filePath,
    };
  }

  private parseItemProperty(
    line: string,
    properties: Record<string, any>,
  ): void {
    // Item properties use "property = value," format
    const matched = matchPropertyLine(line, "=");
    if (matched) {
      properties[matched.key] = parseScriptValue(matched.value);
    }
  }

  private parseRecipeProperty(
    line: string,
    properties: Record<string, any>,
    section: "inputs" | "outputs" | null = null,
    b42Style: boolean = false,
  ): void {
    // Recipe properties: B42 craftRecipe uses "property = value," (F6);
    // legacy B41 recipes use "property:value,". Accept both separators for
    // B42 blocks only — in legacy blocks "Key=Count," lines are ingredients
    // with a count, not properties (keeps `Water=2,` legacy mods intact).
    const matched = matchPropertyLine(line, b42Style ? "[:=]" : ":");
    if (matched) {
      properties[matched.key] = parseScriptValue(matched.value);
      return;
    }
    // Ingredient/output lines (no separator). Exclude bracket-lists
    // ("item 2 [Base.A;Base.B] flags[...]" — B42) and the bare-word
    // "inputs"/"outputs" sub-block headers so no junk is captured.
    const ingredientMatch = line.match(/^\s*([^,=\]!]+)(?:=(\d+))?,?\s*$/);
    const trimmedIngredient = ingredientMatch ? ingredientMatch[1].trim() : "";
    if (ingredientMatch && !["inputs", "outputs"].includes(trimmedIngredient)) {
      let item = trimmedIngredient;
      let count = ingredientMatch[2] ? parseInt(ingredientMatch[2], 10) : 1;

      // B42 craftRecipe lines are "item <count> <ref>"
      const b42 = item.match(/^item\s+(\d+)\s+(.+)$/);
      if (b42) {
        item = b42[2].trim();
        count = parseInt(b42[1], 10);
      }
      // Lines inside the "outputs" section are results, not ingredients (F9).
      const bucket = section === "outputs" ? "outputs" : "ingredients";
      if (!properties[bucket]) properties[bucket] = [];
      properties[bucket].push({ item, count });
    }
  }

  private parseFixingProperty(
    line: string,
    properties: Record<string, any>,
  ): void {
    // Fixing properties: B41 used "Require : X", B42 uses "Require = X".
    const requireMatch = line.match(/^Require\s*[:=]\s*(.+?),?\s*$/);
    if (requireMatch) {
      properties.RequiredItem = requireMatch[1].trim();
    }

    const fixerMatch = line.match(/^Fixer\s*[:=]\s*(.+?),?\s*$/);
    if (fixerMatch) {
      if (!properties.Fixers) properties.Fixers = [];

      const fixerData = fixerMatch[1].trim();
      const parts = fixerData.split(";").map((p) => p.trim());

      const fixer: any = {};

      // Parse material and quantity
      const materialMatch = parts[0].match(/(\w+)=(\d+)/);
      if (materialMatch) {
        fixer.material = materialMatch[1];
        fixer.quantity = parseInt(materialMatch[2], 10);
      } else {
        // B42: the first part is a plain item id ("Base.Pistol"), no =N form.
        fixer.material = parts[0];
      }

      // Parse skill requirement if present
      if (parts.length > 1) {
        const skillMatch = parts[1].match(/(\w+)=(\d+)/);
        if (skillMatch) {
          fixer.skill = skillMatch[1];
          fixer.skillLevel = parseInt(skillMatch[2], 10);
        }
      }

      properties.Fixers.push(fixer);
    }
  }

  private parseSoundProperty(
    line: string,
    properties: Record<string, any>,
  ): void {
    // Sound properties use "property = value," format
    const matched = matchPropertyLine(line, "=");
    if (matched) {
      properties[matched.key] = parseScriptValue(matched.value);
    }
  }

  private parseEvolvedRecipeProperty(
    line: string,
    properties: Record<string, any>,
  ): void {
    // Evolved recipe properties use "property:value," format
    const matched = matchPropertyLine(line, ":");
    if (matched) {
      properties[matched.key] = parseScriptValue(matched.value);
    }
  }

  private parseVehicleProperty(
    line: string,
    properties: Record<string, any>,
  ): void {
    // Vehicle properties can vary, accept both "=" and ":" formats
    const matched = matchPropertyLine(line, "[:=]");
    if (matched) {
      properties[matched.key] = parseScriptValue(matched.value);
    }
  }

  parseModInfo(filePath: string): ModInfo {
    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    const modInfo: ModInfo = {};

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("//"))
        continue;

      const match = trimmed.match(/^(\w+)\s*=\s*(.*)$/);
      if (match) {
        const [, key, value] = match;
        const cleanValue = value.trim();

        switch (key.toLowerCase()) {
          case "name":
            modInfo.name = cleanValue;
            break;
          case "id":
            modInfo.id = cleanValue;
            break;
          case "author":
            modInfo.author = cleanValue;
            break;
          case "description":
            modInfo.description = cleanValue;
            break;
          case "modversion":
          case "version":
            modInfo.version = cleanValue;
            break;
          case "url":
            modInfo.url = cleanValue;
            break;
          case "poster":
            modInfo.poster = cleanValue;
            break;
          case "icon":
            modInfo.icon = cleanValue;
            break;
          case "require":
            modInfo.require = cleanValue
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s);
            break;
          case "incompatible":
            modInfo.incompatible = cleanValue
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s);
            break;
          case "versionmin":
            modInfo.versionMin = cleanValue;
            break;
          case "versionmax":
            modInfo.versionMax = cleanValue;
            break;
        }
      }
    }

    return modInfo;
  }

  async extractReferences(item: GameItem): Promise<void> {
    const refs: Array<{ ref: string; type: string; context: string }> = [];

    // Extract item references from properties
    const itemProps = [
      "WeaponSprite",
      "Icon",
      "AlternativeSwingAnim",
      "AttachmentType",
    ];
    for (const prop of itemProps) {
      if (item.properties[prop]) {
        refs.push({
          ref: String(item.properties[prop]),
          type: "sprite",
          context: prop,
        });
      }
    }

    // Extract sound references
    const soundProps = ["BreakSound", "HitSound", "SwingSound", "ImpactSound"];
    for (const prop of soundProps) {
      if (item.properties[prop]) {
        refs.push({
          ref: String(item.properties[prop]),
          type: "sound",
          context: prop,
        });
      }
    }

    // Extract recipe ingredient references
    if (item.type === "recipe" && item.properties.ingredients) {
      for (const ingredient of item.properties.ingredients) {
        refs.push({
          ref: ingredient.item,
          type: "item",
          context: "ingredient",
        });
      }
    }

    // Extract recipe result reference (may carry a count suffix: "Base.Sword=2")
    if (item.type === "recipe" && typeof item.properties.Result === "string") {
      const resultId = item.properties.Result.split("=")[0].trim();
      if (resultId) {
        refs.push({
          ref: resultId,
          type: "item",
          context: "result",
        });
      }
    }

    // Extract B42 craftRecipe output references (outputs section, audit F9)
    if (item.type === "recipe" && Array.isArray(item.properties.outputs)) {
      for (const output of item.properties.outputs) {
        if (output && typeof output.item === "string" && output.item) {
          refs.push({
            ref: output.item,
            type: "item",
            context: "output",
          });
        }
      }
    }

    // Extract fixing requirement reference
    if (
      item.type === "fixing" &&
      typeof item.properties.RequiredItem === "string"
    ) {
      const required = item.properties.RequiredItem.trim();
      if (required) {
        refs.push({
          ref: required,
          type: "item",
          context: "required_item",
        });
      }
    }

    // Store references in database
    for (const ref of refs) {
      await this.db.addReference(item.id, ref.ref, ref.type, ref.context);
    }
  }
}
