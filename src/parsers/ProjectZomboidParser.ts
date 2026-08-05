import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { DatabaseManager, GameItem } from '../database/DatabaseManager.js';
import logger from '../utils/logger.js';

export interface ParseResults {
  itemCount: number;
  recipeCount: number;
  soundCount: number;
  vehicleCount: number;
  evolvedRecipeCount: number;
  fixingCount: number;
  filesProcessed: number;
  parseTime: number;
  errors: Array<{file: string; message: string; line?: number}>;
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
  private scriptExtensions = ['.txt'];
  private modInfoFile = 'mod.info';

  constructor(db: DatabaseManager) {
    this.db = db;
  }

  async parseGameFiles(gamePath: string, forceReparse: boolean = false): Promise<ParseResults> {
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
          logger.warn('Database already contains data. Use forceReparse=true to re-parse.');
          results.parseTime = Date.now() - startTime;
          return results;
        }
      }

      // Clear database if force reparsing
      if (forceReparse) {
        await this.db.clearDatabase();
      }

      // Parse vanilla game scripts
      const scriptsPath = join(gamePath, 'media', 'scripts');
      if (existsSync(scriptsPath)) {
        await this.parseDirectory(scriptsPath, results, 'Base');
      } else {
        results.errors.push({
          file: scriptsPath,
          message: 'Scripts directory not found in game installation',
        });
      }

      results.parseTime = Date.now() - startTime;
      logger.info(`Parsing completed in ${results.parseTime}ms`);
      
    } catch (error) {
      results.errors.push({
        file: 'parser',
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
        join(modPath, 'media', 'scripts'),           // Direct structure
        join(modPath, '42', 'media', 'scripts'),     // Build 42 structure
        join(modPath, 'common', 'media', 'scripts'), // Common structure
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
          message: 'No scripts directory found in mod structure',
        });
      }

      results.parseTime = Date.now() - startTime;
      
    } catch (error) {
      results.errors.push({
        file: 'mod_parser',
        message: `Mod parse error: ${error instanceof Error ? error.message : String(error)}`,
      });
    }

    return results;
  }

  private async parseDirectory(dirPath: string, results: ParseResults, modulePrefix: string): Promise<void> {
    try {
      const entries = readdirSync(dirPath);
      
      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          // Recursively parse subdirectories
          await this.parseDirectory(fullPath, results, modulePrefix);
        } else if (stat.isFile() && this.scriptExtensions.includes(extname(entry).toLowerCase())) {
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

  private async parseScriptFile(filePath: string, results: ParseResults, defaultModule: string): Promise<void> {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const accumulatedItems: any[] = [];

    let currentModule = defaultModule;
    let currentBlock: any = null;
    let currentBlockStartLevel = 0;
    let blockContent: string[] = [];
    let blockStartLine = 0;
    let braceLevel = 0;
    let inModule = false;
    let pastModuleHeader = false;

    // Block types recognized as script containers. The six "primary" types
    // (item/recipe/evolvedrecipe/fixing/sound/vehicle) are stored in the DB;
    // the rest (craftRecipe, entity, model, event, ...) are consumed as
    // containers so their inner lines never leak as fake items. "craftRecipe"
    // (capital R) is the actual B42 keyword; "recipe" is the legacy B41 one.
    // Names may contain spaces (B42: "fixing Fix Pistol"), so capture the
    // full remainder up to any '{' and trim.
    const BLOCK_RE =
      /^(item|recipe|craftRecipe|craftrecipe|evolvedrecipe|fixing|sound|vehicle|entity|mod|model|event|timedAction|fluid|physics|mannequin|clock|energy|animation|bodylocation|creature)\s+([^{]+)/;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNumber = i + 1;

      // Skip empty lines and comments
      if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*')) {
        continue;
      }

      // Handle module declarations (B42: "module Base" + "{" on next line;
      // B41: "module Base {" on one line)
      if (line.startsWith('module ') && !inModule) {
        const moduleMatch = line.match(/module\s+(\w+)/);
        if (moduleMatch) {
          currentModule = moduleMatch[1];
          inModule = true;
          braceLevel = 0;
          pastModuleHeader = !line.includes('{');
        }
        // If the opening brace is on its own line, skip to it next iteration.
        if (!line.includes('{')) {
          continue;
        }
      }

      // Count braces to track module/block scope
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      braceLevel += openBraces - closeBraces;

      // Inside a module whose opening brace has been counted, block headers
      // are recognized. Latched so subsequent blocks keep working.
      if (inModule && braceLevel >= 1) {
        pastModuleHeader = true;
      }

      // Block detection. Gated: headers are recognized either outside any
      // module (B41 files without a module wrapper) or after the current
      // module's opening brace has been seen. Lines that look like inner
      // ingredient/property lines (contain [, = or ,) are never headers —
      // this is what stops "item variable[1:20] [Base.Corn] ..." lines
      // inside craftRecipe inputs from becoming fake items.
      const blockMatch = line.match(BLOCK_RE);
      const isInnerLine = /[[=,]/.test(line);
      if (blockMatch && !currentBlock && !isInnerLine && (!inModule || pastModuleHeader)) {
        currentBlock = {
          type: blockMatch[1],
          name: blockMatch[2].trim(),
          module: currentModule,
        };
        currentBlockStartLevel = braceLevel;
        blockContent = [line];
        blockStartLine = lineNumber;

        // Same-line empty blocks ("item Foo {}") close immediately — without
        // this they would swallow every subsequent block.
        if (closeBraces > 0) {
          await this.finalizeBlock(currentBlock, blockContent, blockStartLine, filePath, accumulatedItems, results);
          currentBlock = null;
          currentBlockStartLevel = 0;
          blockContent = [];
        }
        continue;
      }

      // Collect block content
      if (currentBlock) {
        blockContent.push(line);

        // A block closes when brace depth returns to the level it started at
        // (after the header line's own braces were counted above).
        if (braceLevel <= currentBlockStartLevel && line.includes('}')) {
          await this.finalizeBlock(currentBlock, blockContent, blockStartLine, filePath, accumulatedItems, results);
          currentBlock = null;
          currentBlockStartLevel = 0;
          blockContent = [];
        }
      }

      // Module exit: the module's own '}' drops depth to 0. (The module's
      // opening brace was counted, so its close lands exactly at 0.)
      if (inModule && braceLevel === 0 && line.includes('}') && !currentBlock) {
        inModule = false;
        pastModuleHeader = false;
        currentModule = defaultModule;
      }
    }

    // Flush accumulated items to database
    if (accumulatedItems.length > 0) {
      await this.db.insertItems(accumulatedItems);

      // Populate cross-item references (recipe ingredients/results, fixing
      // requirements). Must run AFTER the flush: "references".item_id has a
      // FOREIGN KEY to items(id), so the item row must exist first. Non-fatal:
      // a reference failure must not abort parsing of the rest of the file.
      for (const item of accumulatedItems) {
        try {
          await this.extractReferences(item);
        } catch (refError) {
          logger.warn(
            `Reference extraction failed for ${item.id}: ${refError instanceof Error ? refError.message : String(refError)}`
          );
        }
      }
    }
  }

  private async finalizeBlock(
    block: any,
    content: string[],
    startLine: number,
    filePath: string,
    accumulatedItems: any[],
    results: ParseResults
  ): Promise<void> {
    try {
      // B42 recipes are "craftRecipe" blocks; store them as type 'recipe'.
      const storedType =
        block.type === 'craftRecipe' || block.type === 'craftrecipe' ? 'recipe' : block.type;
      const item = this.parseBlock({ ...block, type: storedType }, content, filePath, startLine);
      if (item) {
        // Only the six primary block types are stored. Container types
        // (entity, model, event, ...) are consumed as blocks so their inner
        // lines never leak as fake items.
        if (['item', 'recipe', 'evolvedrecipe', 'fixing', 'sound', 'vehicle'].includes(storedType)) {
          accumulatedItems.push(item);

          // Update counters
          switch (item.type) {
            case 'item': results.itemCount++; break;
            case 'recipe': results.recipeCount++; break;
            case 'sound': results.soundCount++; break;
            case 'vehicle': results.vehicleCount++; break;
            case 'evolvedrecipe': results.evolvedRecipeCount++; break;
            case 'fixing': results.fixingCount++; break;
          }
        }
      }
    } catch (error) {
      results.errors.push({
        file: filePath,
        line: startLine,
        message: `Failed to parse ${block.type} block: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  }

  private parseBlock(blockInfo: any, content: string[], filePath: string, startLine: number): GameItem | null {
      const properties: Record<string, any> = {};
      const rawContent = content.join('\n');

      // Parse properties based on block type. Skip index 0 (the block header
      // line like "item Name" or "craftRecipe Name") — it is not a property.
      for (let i = 1; i < content.length; i++) {
        const line = content[i];
        const trimmed = line.trim();
        if (!trimmed || trimmed.includes('{') || trimmed.includes('}')) continue;

        try {
          if (blockInfo.type === 'item') {
          this.parseItemProperty(trimmed, properties);
        } else if (blockInfo.type === 'recipe') {
          this.parseRecipeProperty(trimmed, properties);
          // B42 craftRecipe blocks use "key = value" (like items), e.g.
          // "timedAction = Making," — the colon format above misses those.
          this.parseItemProperty(trimmed, properties);
        } else if (blockInfo.type === 'fixing') {
          this.parseFixingProperty(trimmed, properties);
        } else if (blockInfo.type === 'sound') {
          this.parseSoundProperty(trimmed, properties);
        } else if (blockInfo.type === 'evolvedrecipe') {
          this.parseEvolvedRecipeProperty(trimmed, properties);
        } else if (blockInfo.type === 'vehicle') {
          this.parseVehicleProperty(trimmed, properties);
        }
      } catch (error) {
        // Log property parse errors but continue
        logger.warn(`Property parse error in ${filePath}:${startLine}: ${error}`);
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
    const itemId = blockInfo.module === 'Base' 
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
      tags: tags ? (Array.isArray(tags) ? (tags as string[]) : [tags]) : undefined,
      metal_value: typeof metalValue === 'number' ? metalValue : undefined,
      weight: typeof weight === 'number' ? weight : undefined,
      condition_max: typeof conditionMax === 'number' ? conditionMax : undefined,
      attachment_type: attachmentTypeRaw
        ? (Array.isArray(attachmentTypeRaw) ? attachmentTypeRaw[0] : attachmentTypeRaw)
        : undefined,
      run_speed_modifier: typeof runSpeedModifier === 'number' ? runSpeedModifier : undefined,
      hunger_change: typeof hungerChange === 'number' ? hungerChange : undefined,
      thirst_change: typeof thirstChange === 'number' ? thirstChange : undefined,
      rawContent,
      filePath,
    };
  }

  private parseItemProperty(line: string, properties: Record<string, any>): void {
    // Item properties use "property = value," format
    const match = line.match(/^\s*(\w+)\s*=\s*([^,]+),?\s*$/);
    if (match) {
      const [, key, value] = match;
      properties[key] = this.parseValue(value.trim());
    }
  }

  private parseRecipeProperty(line: string, properties: Record<string, any>): void {
    // Recipe properties use "property:value," format (legacy B41)
    const match = line.match(/^\s*(\w+)\s*:\s*([^,]+),?\s*$/);
    if (match) {
      const [, key, value] = match;
      properties[key] = this.parseValue(value.trim());
    } else {
      // Ingredients and results (no colon). Exclude bracket-lists
      // ("item 2 [Base.A;Base.B] flags[...]" — B42) and the bare-word
      // "inputs"/"outputs" sub-block headers so no junk is captured.
      const ingredientMatch = line.match(/^\s*([^,=\]!]+)(?:=(\d+))?,?\s*$/);
      const trimmedIngredient = ingredientMatch ? ingredientMatch[1].trim() : '';
      if (ingredientMatch && !['inputs', 'outputs'].includes(trimmedIngredient)) {
        let item = trimmedIngredient;
        let count = ingredientMatch[2] ? parseInt(ingredientMatch[2], 10) : 1;

        // B42 craftRecipe ingredients are "item <count> <ref>" lines
        const b42 = item.match(/^item\s+(\d+)\s+(.+)$/);
        if (b42) {
          item = b42[2].trim();
          count = parseInt(b42[1], 10);
        }

        if (!properties.ingredients) properties.ingredients = [];
        properties.ingredients.push({ item, count });
      }
    }
  }

  private parseFixingProperty(line: string, properties: Record<string, any>): void {
    // Fixing properties: B41 used "Require : X", B42 uses "Require = X".
    const requireMatch = line.match(/^Require\s*[:=]\s*(.+?),?\s*$/);
    if (requireMatch) {
      properties.RequiredItem = requireMatch[1].trim();
    }

    const fixerMatch = line.match(/^Fixer\s*[:=]\s*(.+?),?\s*$/);
    if (fixerMatch) {
      if (!properties.Fixers) properties.Fixers = [];

      const fixerData = fixerMatch[1].trim();
      const parts = fixerData.split(';').map((p) => p.trim());

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

  private parseSoundProperty(line: string, properties: Record<string, any>): void {
    // Sound properties use "property = value," format
    const match = line.match(/^\s*(\w+)\s*=\s*([^,]+),?\s*$/);
    if (match) {
      const [, key, value] = match;
      properties[key] = this.parseValue(value.trim());
    }
  }

  private parseEvolvedRecipeProperty(line: string, properties: Record<string, any>): void {
    // Evolved recipe properties use "property:value," format
    const match = line.match(/^\s*(\w+)\s*:\s*([^,]+),?\s*$/);
    if (match) {
      const [, key, value] = match;
      properties[key] = this.parseValue(value.trim());
    }
  }

  private parseVehicleProperty(line: string, properties: Record<string, any>): void {
    // Vehicle properties can vary, try both formats
    let match = line.match(/^\s*(\w+)\s*=\s*([^,]+),?\s*$/);
    if (!match) {
      match = line.match(/^\s*(\w+)\s*:\s*([^,]+),?\s*$/);
    }
    
    if (match) {
      const [, key, value] = match;
      properties[key] = this.parseValue(value.trim());
    }
  }

  private parseValue(value: string): any {
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      const unquoted = value.slice(1, -1);
      if (unquoted.includes(';')) {
        return unquoted.split(';').map((s) => s.trim()).filter((s) => s.length > 0);
      }
      return unquoted;
    }

    // Split semicolon-delimited lists before numeric/boolean parsing
    if (value.includes(';')) {
      return value.split(';').map((s) => s.trim()).filter((s) => s.length > 0);
    }

    // Parse numbers
    if (/^\d+$/.test(value)) {
      return parseInt(value, 10);
    }
    
    if (/^\d*\.\d+$/.test(value)) {
      return parseFloat(value);
    }

    // Parse booleans
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;

    // Return as string
    return value;
  }

  parseModInfo(filePath: string): ModInfo {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const modInfo: ModInfo = {};

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//')) continue;

      const match = trimmed.match(/^(\w+)\s*=\s*(.*)$/);
      if (match) {
        const [, key, value] = match;
        const cleanValue = value.trim();

        switch (key.toLowerCase()) {
          case 'name':
            modInfo.name = cleanValue;
            break;
          case 'id':
            modInfo.id = cleanValue;
            break;
          case 'author':
            modInfo.author = cleanValue;
            break;
          case 'description':
            modInfo.description = cleanValue;
            break;
          case 'modversion':
          case 'version':
            modInfo.version = cleanValue;
            break;
          case 'url':
            modInfo.url = cleanValue;
            break;
          case 'poster':
            modInfo.poster = cleanValue;
            break;
          case 'icon':
            modInfo.icon = cleanValue;
            break;
          case 'require':
            modInfo.require = cleanValue.split(',').map(s => s.trim()).filter(s => s);
            break;
          case 'incompatible':
            modInfo.incompatible = cleanValue.split(',').map(s => s.trim()).filter(s => s);
            break;
          case 'versionmin':
            modInfo.versionMin = cleanValue;
            break;
          case 'versionmax':
            modInfo.versionMax = cleanValue;
            break;
        }
      }
    }

    return modInfo;
  }

  async extractReferences(item: GameItem): Promise<void> {
    const refs: Array<{ref: string; type: string; context: string}> = [];

    // Extract item references from properties
    const itemProps = ['WeaponSprite', 'Icon', 'AlternativeSwingAnim', 'AttachmentType'];
    for (const prop of itemProps) {
      if (item.properties[prop]) {
        refs.push({
          ref: String(item.properties[prop]),
          type: 'sprite',
          context: prop,
        });
      }
    }

    // Extract sound references
    const soundProps = ['BreakSound', 'HitSound', 'SwingSound', 'ImpactSound'];
    for (const prop of soundProps) {
      if (item.properties[prop]) {
        refs.push({
          ref: String(item.properties[prop]),
          type: 'sound',
          context: prop,
        });
      }
    }

    // Extract recipe ingredient references
    if (item.type === 'recipe' && item.properties.ingredients) {
      for (const ingredient of item.properties.ingredients) {
        refs.push({
          ref: ingredient.item,
          type: 'item',
          context: 'ingredient',
        });
      }
    }

    // Extract recipe result reference (may carry a count suffix: "Base.Sword=2")
    if (item.type === 'recipe' && typeof item.properties.Result === 'string') {
      const resultId = item.properties.Result.split('=')[0].trim();
      if (resultId) {
        refs.push({
          ref: resultId,
          type: 'item',
          context: 'result',
        });
      }
    }

    // Extract fixing requirement reference
    if (item.type === 'fixing' && typeof item.properties.RequiredItem === 'string') {
      const required = item.properties.RequiredItem.trim();
      if (required) {
        refs.push({
          ref: required,
          type: 'item',
          context: 'required_item',
        });
      }
    }

    // Store references in database
    for (const ref of refs) {
      await this.db.addReference(item.id, ref.ref, ref.type, ref.context);
    }
  }
}
