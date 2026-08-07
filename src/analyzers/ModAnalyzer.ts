import {
  existsSync,
  unlinkSync,
} from "fs";
import { readdir, stat, readFile } from "fs/promises";
import { join, extname, basename } from "path";
import { tmpdir } from "os";
import { DatabaseManager, GameItem } from "../database/DatabaseManager.js";
import {
  ProjectZomboidParser,
  ModInfo,
} from "../parsers/ProjectZomboidParser.js";
import { ValidationEngine } from "../validation/ValidationEngine.js";
import { gameVersion } from "../utils/config.js";

export interface ModAnalysisResult {
  modName?: string;
  modPath: string;
  modInfo?: ModInfo;
  structure: StructureAnalysis;
  issues: Issue[];
  balance?: BalanceAnalysis;
  compatibility?: CompatibilityAnalysis;
  performance?: PerformanceAnalysis;
  quality: QualityMetrics;
  recommendations: string[];
}

export interface StructureAnalysis {
  hasModInfo: boolean;
  hasCorrectStructure: boolean;
  scriptCount: number;
  luaCount: number;
  assetCount: number;
  missingFiles: string[];
  unexpectedFiles: string[];
  buildVersions: string[];
  hasCommonFolder: boolean;
}

export interface Issue {
  file: string;
  line?: number;
  severity: "error" | "warning" | "info";
  message: string;
  code: string;
  suggestion?: string;
}

export interface BalanceAnalysis {
  itemCount: number;
  averageStats: Record<string, number>;
  outliers: Array<{
    item: string;
    property: string;
    value: any;
    recommendation: string;
    ratio?: number;
  }>;
  score: number; // 0-100 balance score
  recommendations: string[];
}

export interface CompatibilityAnalysis {
  conflicts: Array<{ type: string; item: string; conflictsWith: string }>;
  missingDependencies: string[];
  incompatibleMods: string[];
  gameVersionCompatibility: {
    minVersion?: string;
    maxVersion?: string;
    compatible: boolean;
  };
}

export interface PerformanceAnalysis {
  largeFiles: Array<{ file: string; size: number }>;
  recommendations: string[];
}

export interface QualityMetrics {
  overall: number; // 0-100
  structure: number;
  syntax: number;
  balance: number;
  documentation: number;
}

export interface AnalysisOptions {
  checkBalance?: boolean;
  checkCompatibility?: boolean;
  checkPerformance?: boolean;
  strictValidation?: boolean;
}

export class ModAnalyzer {
  private db: DatabaseManager;
  private parser: ProjectZomboidParser;
  private validator: ValidationEngine;

  constructor(db: DatabaseManager, parser: ProjectZomboidParser) {
    this.db = db;
    this.parser = parser;
    this.validator = new ValidationEngine(db);
  }

  async analyzeMod(
    modPath: string,
    options: AnalysisOptions = {},
  ): Promise<ModAnalysisResult> {
    const {
      checkBalance = true,
      checkCompatibility = true,
      checkPerformance = true,
      strictValidation = false,
    } = options;

    const result: ModAnalysisResult = {
      modPath,
      structure: await this.analyzeStructure(modPath),
      issues: [],
      quality: {
        overall: 0,
        structure: 0,
        syntax: 0,
        balance: 0,
        documentation: 0,
      },
      recommendations: [],
    };

    try {
      // Parse mod.info if it exists
      const modInfo = this.parseModInfo(modPath);
      if (modInfo) result.modInfo = modInfo;
      result.modName = modInfo?.name || basename(modPath);

      // Analyze scripts
      await this.analyzeScripts(modPath, result, strictValidation);

      // Analyze Lua files
      await this.analyzeLuaFiles(modPath, result);

      // Balance analysis
      if (checkBalance) {
        result.balance = await this.analyzeBalance(modPath, result);
      }

      // Compatibility analysis
      if (checkCompatibility) {
        result.compatibility = await this.analyzeCompatibility(modPath, result);
      }

      // Performance analysis
      if (checkPerformance) {
        result.performance = await this.analyzePerformance(modPath, result);
      }

      // Calculate quality metrics
      this.calculateQualityMetrics(result);

      // Generate recommendations
      this.generateRecommendations(result);
    } catch (error) {
      result.issues.push({
        file: "analyzer",
        severity: "error",
        message: `Analysis failed: ${error instanceof Error ? error.message : String(error)}`,
        code: "ANALYSIS_ERROR",
      });
    }

    return result;
  }

  private async analyzeStructure(modPath: string): Promise<StructureAnalysis> {
    const structure: StructureAnalysis = {
      hasModInfo: false,
      hasCorrectStructure: false,
      scriptCount: 0,
      luaCount: 0,
      assetCount: 0,
      missingFiles: [],
      unexpectedFiles: [],
      buildVersions: [],
      hasCommonFolder: false,
    };

    if (!existsSync(modPath)) {
      structure.missingFiles.push("Mod directory does not exist");
      return structure;
    }

    // Check for mod.info
    const modInfoPaths = [
      join(modPath, "mod.info"),
      join(modPath, "42", "mod.info"),
    ];

    for (const modInfoPath of modInfoPaths) {
      if (existsSync(modInfoPath)) {
        structure.hasModInfo = true;
        break;
      }
    }

    // Check for proper Build 42 structure
    const commonPath = join(modPath, "common");
    structure.hasCommonFolder = existsSync(commonPath);

    // Find build version folders (async fs — freebuff M5)
    try {
      const entries = await readdir(modPath);
      for (const entry of entries) {
        const entryPath = join(modPath, entry);
        if ((await stat(entryPath)).isDirectory()) {
          if (/^\d+(\.\d+)*$/.test(entry)) {
            structure.buildVersions.push(entry);
          }
        }
      }
    } catch {
      // Unreadable mod root — buildVersions stays empty, countFiles will
      // report the read error itself.
    }

    // Check for correct structure (Build 42 style)
    const hasVersionFolder = structure.buildVersions.length > 0;
    structure.hasCorrectStructure =
      structure.hasCommonFolder && hasVersionFolder;

    // Count files
    await this.countFiles(modPath, structure);

    // Check for missing essential files
    if (!structure.hasModInfo) {
      structure.missingFiles.push("mod.info");
    }

    if (structure.scriptCount === 0 && structure.luaCount === 0) {
      structure.missingFiles.push("No script or Lua files found");
    }

    return structure;
  }

  private async countFiles(
    dirPath: string,
    structure: StructureAnalysis,
  ): Promise<void> {
    try {
      // Async fs (freebuff M5): analysis must not block the event loop.
      const entries = await readdir(dirPath);

      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);

        if (entryStat.isDirectory()) {
          await this.countFiles(fullPath, structure);
        } else {
          const ext = extname(entry).toLowerCase();

          if (ext === ".txt" && fullPath.includes("scripts")) {
            structure.scriptCount++;
          } else if (ext === ".lua") {
            structure.luaCount++;
          } else if (
            [".png", ".jpg", ".jpeg", ".ogg", ".wav", ".mp3"].includes(ext)
          ) {
            structure.assetCount++;
          }
        }
      }
    } catch {
      // Directory read error, skip
    }
  }

  private parseModInfo(modPath: string): ModInfo | undefined {
    const modInfoPaths = [
      join(modPath, "mod.info"),
      join(modPath, "42", "mod.info"),
    ];

    for (const modInfoPath of modInfoPaths) {
      if (existsSync(modInfoPath)) {
        try {
          return this.parser.parseModInfo(modInfoPath);
        } catch {
          // Failed to parse, continue to next path
        }
      }
    }

    return undefined;
  }

  private async analyzeScripts(
    modPath: string,
    result: ModAnalysisResult,
    strict: boolean,
  ): Promise<void> {
    const scriptPaths = [
      join(modPath, "media", "scripts"),
      join(modPath, "42", "media", "scripts"),
      join(modPath, "common", "media", "scripts"),
    ];

    for (const scriptsPath of scriptPaths) {
      if (existsSync(scriptsPath)) {
        await this.analyzeScriptDirectory(scriptsPath, result, strict);
      }
    }
  }

  private async analyzeScriptDirectory(
    dirPath: string,
    result: ModAnalysisResult,
    strict: boolean,
  ): Promise<void> {
    try {
      const entries = await readdir(dirPath);

      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);

        if (entryStat.isDirectory()) {
          await this.analyzeScriptDirectory(fullPath, result, strict);
        } else if (extname(entry).toLowerCase() === ".txt") {
          await this.analyzeScriptFile(fullPath, result, strict);
        }
      }
    } catch (error) {
      result.issues.push({
        file: dirPath,
        severity: "error",
        message: `Failed to read scripts directory: ${error instanceof Error ? error.message : String(error)}`,
        code: "READ_ERROR",
      });
    }
  }

  private async analyzeScriptFile(
    filePath: string,
    result: ModAnalysisResult,
    strict: boolean,
  ): Promise<void> {
    try {
      const content = await readFile(filePath, "utf-8");
      const validation = await this.validator.validateScript(
        content,
        undefined,
        strict,
      );

      // Add validation issues to result
      for (const error of validation.errors) {
        const issue: Issue = {
          file: filePath,
          line: error.line,
          severity: error.severity,
          message: error.message,
          code: error.code,
        };
        if (error.suggestion !== undefined) {
          issue.suggestion = error.suggestion;
        }
        result.issues.push(issue);
      }

      for (const warning of validation.warnings) {
        const issue: Issue = {
          file: filePath,
          line: warning.line,
          severity: warning.severity,
          message: warning.message,
          code: warning.code,
        };
        if (warning.suggestion !== undefined) {
          issue.suggestion = warning.suggestion;
        }
        result.issues.push(issue);
      }
    } catch (error) {
      result.issues.push({
        file: filePath,
        severity: "error",
        message: `Failed to analyze script: ${error instanceof Error ? error.message : String(error)}`,
        code: "SCRIPT_ANALYSIS_ERROR",
      });
    }
  }

  private async analyzeLuaFiles(
    modPath: string,
    result: ModAnalysisResult,
  ): Promise<void> {
    const luaPaths = [
      join(modPath, "media", "lua"),
      join(modPath, "42", "media", "lua"),
      join(modPath, "common", "media", "lua"),
    ];

    for (const luaPath of luaPaths) {
      if (existsSync(luaPath)) {
        await this.analyzeLuaDirectory(luaPath, result);
      }
    }
  }

  private async analyzeLuaDirectory(
    dirPath: string,
    result: ModAnalysisResult,
  ): Promise<void> {
    try {
      const entries = await readdir(dirPath);

      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);

        if (entryStat.isDirectory()) {
          await this.analyzeLuaDirectory(fullPath, result);
        } else if (extname(entry).toLowerCase() === ".lua") {
          await this.analyzeLuaFile(fullPath, result);
        }
      }
    } catch (error) {
      result.issues.push({
        file: dirPath,
        severity: "error",
        message: `Failed to read Lua directory: ${error instanceof Error ? error.message : String(error)}`,
        code: "READ_ERROR",
      });
    }
  }

  private async analyzeLuaFile(
    filePath: string,
    result: ModAnalysisResult,
  ): Promise<void> {
    try {
      const content = await readFile(filePath, "utf-8");

      // Basic Lua syntax checks
      if (!content.trim()) {
        result.issues.push({
          file: filePath,
          severity: "warning",
          message: "Empty Lua file",
          code: "EMPTY_FILE",
        });
        return;
      }

      // Check for common Lua syntax issues
      this.checkLuaSyntax(content, filePath, result);

      // Check for deprecated API usage
      this.checkDeprecatedAPI(content, filePath, result);

      // Check for semantic issues
      this.checkSemanticIssues(content, filePath, result);
    } catch (error) {
      result.issues.push({
        file: filePath,
        severity: "error",
        message: `Failed to analyze Lua file: ${error instanceof Error ? error.message : String(error)}`,
        code: "LUA_ANALYSIS_ERROR",
      });
    }
  }

  /**
   * Strip Lua comments so balance/semantic analysis is not skewed by text
   * inside comments (freebuff L2): removes `--[[ ]]` block comments (which can
   * span lines) and `--` line comments. A heuristic — strings containing `--`
   * are still misread, but block comments no longer cause false positives.
   */
  private stripLuaComments(content: string): string {
    return content
      // Long-bracket comments (--[[ ]] and --[==[ ... ]==]) can span lines and
      // contain code-like text; strip them whole before per-line handling
      // (freebuff L2). `=*` permits any `=` count, matching Lua's spec.
      .replace(/--\[=*\[[\s\S]*?\]=*\]/g, ' ')
      .split("\n")
      .map((line) => {
        const idx = line.indexOf("--");
        return idx === -1 ? line : line.substring(0, idx);
      })
      .join("\n");
  }

  private checkLuaSyntax(
    content: string,
    filePath: string,
    result: ModAnalysisResult,
  ): void {
    const lines = this.stripLuaComments(content).split("\n");
    let openParens = 0, closeParens = 0;
    let openBrackets = 0, closeBrackets = 0;
    let firstIssueLine = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      const openP = (line.match(/\(/g) || []).length;
      const closeP = (line.match(/\)/g) || []).length;
      const openB = (line.match(/\[/g) || []).length;
      const closeB = (line.match(/\]/g) || []).length;

      openParens += openP;
      closeParens += closeP;
      openBrackets += openB;
      closeBrackets += closeB;

      if (closeParens > openParens && firstIssueLine === -1) {
        firstIssueLine = i + 1;
      }
      if (closeBrackets > openBrackets && firstIssueLine === -1) {
        firstIssueLine = i + 1;
      }
    }

    if (openParens !== closeParens) {
      result.issues.push({
        file: filePath,
        line: firstIssueLine !== -1 ? firstIssueLine : 1,
        severity: "warning",
        message: `Unbalanced parentheses: ${openParens} open vs ${closeParens} close`,
        code: "LUA_SYNTAX_WARNING",
      });
    }

    if (openBrackets !== closeBrackets) {
      result.issues.push({
        file: filePath,
        line: firstIssueLine !== -1 ? firstIssueLine : 1,
        severity: "warning",
        message: `Unbalanced brackets: ${openBrackets} open vs ${closeBrackets} close`,
        code: "LUA_SYNTAX_WARNING",
      });
    }

    // Check for OnPreMapLoad usage
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes("Events.OnPreMapLoad.Add")) {
        result.issues.push({
          file: filePath,
          line: i + 1,
          severity: "info",
          message:
            "Consider using Events.OnGameBoot.Add for initialization code",
          code: "LUA_BEST_PRACTICE",
        });
      }
    }
  }

  private checkDeprecatedAPI(
    content: string,
    filePath: string,
    result: ModAnalysisResult,
  ): void {
    const deprecatedPatterns = [
      {
        pattern: "getCell():getGridSquare()",
        new: "getSquare()",
        message: "Use getSquare() instead of getCell():getGridSquare()",
      },
      {
        pattern: "getSpecificPlayer(0)",
        new: "getPlayer()",
        message: "Use getPlayer() instead of getSpecificPlayer(0)",
      },
      {
        pattern: "getSpecificPlayer(1)",
        new: "getPlayer()",
        message: "Use getPlayer() instead of getSpecificPlayer(1)",
      },
      {
        pattern: "instanceof",
        new: "type checking",
        message: "instanceof may not work as expected in Lua",
      },
      {
        pattern: "getClosestPlayer()",
        new: "getPlayer()",
        message: "getClosestPlayer() is deprecated, use getPlayer()",
      },
      {
        pattern: "getLocalPlayer()",
        new: "getPlayer()",
        message: "getLocalPlayer() is deprecated, use getPlayer()",
      },
    ];

    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNumber = i + 1;

      for (const pattern of deprecatedPatterns) {
        if (line.includes(pattern.pattern)) {
          result.issues.push({
            file: filePath,
            line: lineNumber,
            severity: "warning",
            message: pattern.message,
            code: "DEPRECATED_API",
            suggestion: `Replace with: ${pattern.new}`,
          });
        }
      }
    }
  }

  private checkSemanticIssues(
    content: string,
    filePath: string,
    result: ModAnalysisResult,
  ): void {
    // Analyze comment-free code so comments never trigger GLOBAL_VAR or skew
    // if/end counting (freebuff L2).
    const clean = this.stripLuaComments(content);
    const lines = clean.split("\n");
    const ifKeywordCount = (clean.match(/\bif\b/g) || []).length;
    const endKeywordCount = (clean.match(/\bend\b/g) || []).length;

    if (ifKeywordCount !== endKeywordCount) {
      result.issues.push({
        file: filePath,
        severity: "error",
        message: `Unbalanced if/end: ${ifKeywordCount} 'if' statements but ${endKeywordCount} 'end' keywords`,
        code: "SEMANTIC_ERROR",
      });
    }

    const globalVarPattern = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*/g;
    const globalVars = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNumber = i + 1;

      // Always register local declarations (not just in strict context)
      if (line.includes("local ")) {
        const localMatch = line.match(/local\s+([a-zA-Z_][a-zA-Z0-9_]*)/);
        if (localMatch) {
          const varName = localMatch[1];
          globalVars.add(varName);
        }
      }

      const varMatches = Array.from(line.matchAll(globalVarPattern));
      for (const match of varMatches) {
        const varName = match[1];
        if (!varName.startsWith("_") && !globalVars.has(varName)) {
          result.issues.push({
            file: filePath,
            line: lineNumber,
            severity: "warning",
            message: `Potential global variable leak: '${varName}' is assigned without 'local' keyword`,
            code: "GLOBAL_VAR",
          });
        }
      }
    }
  }

  /**
   * Category configs for balance comparison. Each category maps a PZ
   * properties.Type to the vanilla search keyword and the stats that
   * matter for that category (P4 #23).
   */
  private static readonly BALANCE_CATEGORIES = [
    {
      type: "Weapon",
      keyword: "weapon",
      stats: ["MaxDamage", "MinDamage", "Weight"],
    },
    {
      type: "Armor",
      keyword: "armor",
      stats: ["BiteDefense", "ScratchDefense", "BulletDefense", "Weight"],
    },
    {
      type: "Clothing",
      keyword: "clothing",
      stats: ["Insulation", "WindResistance", "WaterResistance", "Weight"],
    },
    {
      type: "Food",
      keyword: "food",
      stats: ["HungerChange", "ThirstChange", "Calories", "Weight"],
    },
  ] as const;

  private async analyzeBalance(
    modPath: string,
    _result: ModAnalysisResult,
  ): Promise<BalanceAnalysis> {
    const balance: BalanceAnalysis = {
      itemCount: 0,
      averageStats: {},
      outliers: [],
      score: 100,
      recommendations: [],
    };

    try {
      // Parse mod items into an isolated temp DB so the vanilla game DB is
      // never polluted (audit P3). Vanilla comparisons in findBalanceOutliers
      // still read the main DB.
      const tempPath = join(
        tmpdir(),
        `pz-balance-${process.pid}-${Date.now()}.db`,
      );
      const tempDb = new DatabaseManager(tempPath);
      let modItems: GameItem[] = [];
      try {
        await tempDb.initialize();
        await new ProjectZomboidParser(tempDb).parseModDirectory(modPath);
        modItems = await tempDb.getItemsByType("item");
      } finally {
        tempDb.close();
        try {
          unlinkSync(tempPath);
        } catch {
          /* best-effort cleanup */
        }
      }

      if (modItems.length === 0) {
        balance.recommendations.push("No items found to analyze");
        return balance;
      }

      balance.itemCount = modItems.length;

      // Collect stats from mod items (all categories)
      const stats = ModAnalyzer.BALANCE_CATEGORIES.flatMap((c) => c.stats);
      const statValues: Record<string, number[]> = {};

      for (const stat of stats) {
        statValues[stat] = [];
      }

      for (const item of modItems) {
        for (const stat of stats) {
          const value = item.properties[stat];
          if (typeof value === "number") {
            statValues[stat].push(value);
          }
        }
      }

      // Calculate averages
      for (const [stat, values] of Object.entries(statValues)) {
        if (values.length > 0) {
          balance.averageStats[stat] =
            values.reduce((sum, val) => sum + val, 0) / values.length;
        }
      }

      // Find outliers (items with stats significantly different from vanilla)
      await this.findBalanceOutliers(modItems, balance);

      // Calculate balance score
      balance.score = this.calculateBalanceScore(balance);

      // Generate balance recommendations
      this.generateBalanceRecommendations(balance);
    } catch (error) {
      balance.recommendations.push(
        `Balance analysis failed: ${error instanceof Error ? error.message : String(error)}`,
      );
    }

    return balance;
  }

  private async findBalanceOutliers(
    modItems: GameItem[],
    balance: BalanceAnalysis,
  ): Promise<void> {
    for (const category of ModAnalyzer.BALANCE_CATEGORIES) {
      // Get vanilla items of this category for comparison
      const vanillaResults = await this.db.searchContent(category.keyword, {
        type: "item",
        limit: 1000,
      });
      const vanillaItems = vanillaResults.filter(
        (v) => v.properties.Type === category.type,
      );

      if (vanillaItems.length === 0) continue;

      // Calculate vanilla averages
      const vanillaStats: Record<string, number> = {};
      for (const stat of category.stats) {
        const values = vanillaItems
          .map((w) => w.properties[stat])
          .filter((v) => typeof v === "number") as number[];

        if (values.length > 0) {
          vanillaStats[stat] =
            values.reduce((sum, val) => sum + val, 0) / values.length;
        }
      }

      // Find outliers in mod items of this category
      for (const item of modItems) {
        if (item.properties.Type === category.type) {
          for (const stat of category.stats) {
            const value = item.properties[stat];
            const vanillaAvg = vanillaStats[stat];

            if (typeof value === "number" && vanillaAvg) {
              const ratio = value / vanillaAvg;

              if (ratio > 2.0) {
                balance.outliers.push({
                  item: item.name,
                  property: stat,
                  value,
                  ratio,
                  recommendation: `${stat} is ${ratio.toFixed(1)}x higher than vanilla average (${vanillaAvg.toFixed(1)})`,
                });
              } else if (ratio < 0.3) {
                balance.outliers.push({
                  item: item.name,
                  property: stat,
                  value,
                  recommendation: `${stat} is ${(1 / ratio).toFixed(1)}x lower than vanilla average (${vanillaAvg.toFixed(1)})`,
                });
              }
            }
          }
        }
      }
    }
  }

  private calculateBalanceScore(balance: BalanceAnalysis): number {
    let score = 100;

    // Deduct points for outliers
    score -= balance.outliers.length * 5;

    // Deduct points for extreme outliers (numeric ratio >= 10x — audit minor #7)
    const extremeOutliers = balance.outliers.filter(
      (o) => o.ratio !== undefined && o.ratio >= 10,
    );
    score -= extremeOutliers.length * 15;

    return Math.max(0, score);
  }

  private generateBalanceRecommendations(balance: BalanceAnalysis): void {
    if (balance.outliers.length > 0) {
      balance.recommendations.push(
        `Found ${balance.outliers.length} potential balance issues`,
      );

      if (balance.outliers.length > 5) {
        balance.recommendations.push(
          "Consider reviewing item stats for better game balance",
        );
      }
    }

    if (balance.score < 50) {
      balance.recommendations.push(
        "Many items appear to be overpowered or underpowered compared to vanilla",
      );
    }
  }

  private async analyzeCompatibility(
    _modPath: string,
    result: ModAnalysisResult,
  ): Promise<CompatibilityAnalysis> {
    const compatibility: CompatibilityAnalysis = {
      conflicts: [],
      missingDependencies: [],
      incompatibleMods: [],
      gameVersionCompatibility: {
        compatible: true,
      },
    };

    // Check mod.info dependencies
    if (result.modInfo?.require) {
      for (const dep of result.modInfo.require) {
        // Check if dependency is available (simplified check)
        const exists = await this.db.checkReference(dep, "item");
        if (!exists) {
          compatibility.missingDependencies.push(dep);
        }
      }
    }

    // Check game version compatibility
    if (result.modInfo?.versionMin || result.modInfo?.versionMax) {
      const minVersion = result.modInfo.versionMin;
      const maxVersion = result.modInfo.versionMax;
      if (minVersion !== undefined) {
        compatibility.gameVersionCompatibility.minVersion = minVersion;
      }
      if (maxVersion !== undefined) {
        compatibility.gameVersionCompatibility.maxVersion = maxVersion;
      }

      // Numeric version comparison (audit minor #6 — was string-lexical).
      // Default game version = actual B42.20 install; PZ_GAME_VERSION env
      // overrides for testing against other builds (freebuff M4: config.ts).
      const [curMajor, curMinor] = gameVersion().split(".").map(Number);
      if (maxVersion !== undefined) {
        const [maxMajor, maxMinor] = maxVersion.split(".").map(Number);
        if (
          curMajor > maxMajor ||
          (curMajor === maxMajor && curMinor > maxMinor)
        ) {
          compatibility.gameVersionCompatibility.compatible = false;
        }
      }
    }

    return compatibility;
  }

  private async analyzePerformance(
    modPath: string,
    _result: ModAnalysisResult,
  ): Promise<PerformanceAnalysis> {
    const performance: PerformanceAnalysis = {
      largeFiles: [],
      recommendations: [],
    };

    await this.findLargeFiles(modPath, performance);
    this.generatePerformanceRecommendations(performance);

    return performance;
  }

  private async findLargeFiles(
    dirPath: string,
    performance: PerformanceAnalysis,
  ): Promise<void> {
    try {
      const entries = await readdir(dirPath);

      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);

        if (entryStat.isDirectory()) {
          await this.findLargeFiles(fullPath, performance);
        } else {
          const sizeInMB = entryStat.size / (1024 * 1024);

          if (sizeInMB > 5) {
            // Files larger than 5MB
            performance.largeFiles.push({
              file: fullPath,
              size: entryStat.size,
            });
          }
        }
      }
    } catch {
      // Skip directories that can't be read
    }
  }

  private generatePerformanceRecommendations(
    performance: PerformanceAnalysis,
  ): void {
    if (performance.largeFiles.length > 0) {
      performance.recommendations.push(
        `Found ${performance.largeFiles.length} large files that may impact loading time`,
      );
      performance.recommendations.push(
        "Consider optimizing textures and audio files",
      );
    }
  }

  private calculateQualityMetrics(result: ModAnalysisResult): void {
    const metrics = result.quality;

    // Structure score
    metrics.structure = 0;
    if (result.structure.hasModInfo) metrics.structure += 30;
    if (result.structure.hasCorrectStructure) metrics.structure += 40;
    if (result.structure.scriptCount > 0) metrics.structure += 20;
    if (result.structure.missingFiles.length === 0) metrics.structure += 10;

    // Syntax score (based on issues)
    const syntaxErrors = result.issues.filter(
      (i) => i.severity === "error",
    ).length;
    const syntaxWarnings = result.issues.filter(
      (i) => i.severity === "warning",
    ).length;
    metrics.syntax = Math.max(0, 100 - syntaxErrors * 15 - syntaxWarnings * 5);

    // Balance score
    metrics.balance = result.balance?.score || 100;

    // Documentation score
    metrics.documentation = 0;
    if (result.modInfo?.description) metrics.documentation += 50;
    if (result.modInfo?.author) metrics.documentation += 25;
    if (result.modInfo?.version) metrics.documentation += 25;

    // Overall score
    metrics.overall = Math.round(
      (metrics.structure +
        metrics.syntax +
        metrics.balance +
        metrics.documentation) /
        4,
    );
  }

  private generateRecommendations(result: ModAnalysisResult): void {
    const recommendations: string[] = [];

    // Structure recommendations
    if (!result.structure.hasModInfo) {
      recommendations.push("Add a mod.info file with proper metadata");
    }

    if (!result.structure.hasCorrectStructure) {
      recommendations.push(
        "Use Build 42 mod structure with common/ and version folders",
      );
    }

    // Issue-based recommendations
    const errorCount = result.issues.filter(
      (i) => i.severity === "error",
    ).length;
    if (errorCount > 0) {
      recommendations.push(
        `Fix ${errorCount} error(s) to ensure mod functionality`,
      );
    }

    const warningCount = result.issues.filter(
      (i) => i.severity === "warning",
    ).length;
    if (warningCount > 5) {
      recommendations.push("Address warnings to improve mod quality");
    }

    // Balance recommendations
    if (result.balance?.outliers.length && result.balance.outliers.length > 0) {
      recommendations.push(
        "Review item balance for better gameplay experience",
      );
    }

    // Quality recommendations
    if (result.quality.overall < 70) {
      recommendations.push(
        "Consider improving mod structure and documentation",
      );
    }

    result.recommendations = recommendations;
  }
}
