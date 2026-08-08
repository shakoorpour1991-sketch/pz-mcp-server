import { existsSync, unlinkSync } from "fs";
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
import logger from "../utils/logger.js";

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

      // Audit M4: record the analyzed mod in the DB so mod.info require= lists
      // of other mods can resolve against mod IDs (the mods table was dead).
      if (modInfo?.id) {
        await this.db.upsertMod({
          id: modInfo.id,
          name: modInfo.name || basename(modPath),
          author: modInfo.author,
          version: modInfo.version,
          description: modInfo.description,
          path: modPath,
        });
      }

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
    } catch (error) {
      // Directory read error — no longer swallowed silently (freebuff review
      // §3 code smell #5): an unreadable subtree is diagnosable in the logs.
      logger.warn(
        `Failed to read directory ${dirPath} during file count: ${error instanceof Error ? error.message : String(error)}`,
      );
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

      // Strip Lua comments ONCE (audit D5), then run every check on the clean
      // text: strings are preserved by the state machine, so `--` inside quotes
      // never skews syntax/semantic checks and deprecated patterns inside
      // comments are no longer false positives. Newlines survive stripping, so
      // all line numbers below stay aligned with the original file.
      const stripped = this.stripLuaComments(content);

      // Check for common Lua syntax issues
      this.checkLuaSyntax(stripped, filePath, result);

      // Check for deprecated API usage
      this.checkDeprecatedAPI(stripped, filePath, result);

      // Check for semantic issues
      this.checkSemanticIssues(stripped, filePath, result);
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
   * inside comments (freebuff L2, audit D5): a small state machine tracks
   * string literals (single/double/long), line comments and block comments
   * (`--[[ ]]`, `--[==[ ]==]`), so `--` inside strings is never treated as a
   * comment and comments are replaced with spaces (newlines preserved, so
   * line numbers stay aligned).
   */
  private stripLuaComments(content: string): string {
    const result: string[] = [];
    const n = content.length;
    let i = 0;

    enum State {
      Normal,
      SingleString,
      DoubleString,
      LongString,
      LineComment,
      BlockComment,
    }

    let state = State.Normal;
    let equalsCount = 0; // For long strings and block comments

    while (i < n) {
      const ch = content[i];
      const next = i + 1 < n ? content[i + 1] : "";
      const next2 = i + 2 < n ? content[i + 2] : "";

      switch (state) {
        case State.Normal: {
          // String literals
          if (ch === "'") {
            state = State.SingleString;
            result.push(ch);
            i++;
            break;
          }
          if (ch === '"') {
            state = State.DoubleString;
            result.push(ch);
            i++;
            break;
          }

          // Long string: [[ or [=*[ (NOT a comment — no preceding --)
          if (ch === "[" && (next === "[" || next === "=")) {
            let eq = 0;
            let j = i + 1;
            while (j < n && content[j] === "=") {
              eq++;
              j++;
            }
            if (j < n && content[j] === "[") {
              state = State.LongString;
              equalsCount = eq;
              for (let k = i; k <= j; k++) result.push(content[k]);
              i = j + 1;
              break;
            }
          }

          // Comments
          if (ch === "-" && next === "-") {
            // Block comment: --[[ or --[=*[ (eq counted AFTER the first '[')
            if (next2 === "[") {
              let eq = 0;
              let j = i + 3;
              while (j < n && content[j] === "=") {
                eq++;
                j++;
              }
              if (j < n && content[j] === "[") {
                state = State.BlockComment;
                equalsCount = eq;
                result.push(" ", " ");
                for (let k = 0; k < 1 + eq + 1; k++) result.push(" ");
                i = j + 1;
                break;
              }
            }
            // Line comment
            state = State.LineComment;
            result.push(" ", " ");
            i += 2;
            break;
          }

          result.push(ch);
          i++;
          break;
        }

        case State.SingleString: {
          result.push(ch);
          if (ch === "\\" && next) {
            result.push(next);
            i += 2;
            break;
          }
          if (ch === "'") {
            state = State.Normal;
          }
          i++;
          break;
        }

        case State.DoubleString: {
          result.push(ch);
          if (ch === "\\" && next) {
            result.push(next);
            i += 2;
            break;
          }
          if (ch === '"') {
            state = State.Normal;
          }
          i++;
          break;
        }

        case State.LongString: {
          result.push(ch);
          if (ch === "]") {
            let eq = 0;
            let j = i + 1;
            while (j < n && content[j] === "=") {
              eq++;
              j++;
            }
            if (j < n && content[j] === "]" && eq === equalsCount) {
              // First ] already pushed above; add =* and final ]
              for (let k = 0; k < eq; k++) result.push("=");
              result.push("]");
              state = State.Normal;
              i = j + 1;
              break;
            }
          }
          i++;
          break;
        }

        case State.LineComment: {
          if (ch === "\n") {
            result.push("\n");
            state = State.Normal;
          } else {
            result.push(" ");
          }
          i++;
          break;
        }

        case State.BlockComment: {
          if (ch === "\n") {
            result.push("\n");
          } else {
            result.push(" ");
          }
          if (ch === "]") {
            let eq = 0;
            let j = i + 1;
            while (j < n && content[j] === "=") {
              eq++;
              j++;
            }
            if (j < n && content[j] === "]" && eq === equalsCount) {
              // First ] already spaced above; add =* and final ]
              for (let k = 0; k < eq; k++) result.push(" ");
              result.push(" ");
              state = State.Normal;
              i = j + 1;
              break;
            }
          }
          i++;
          break;
        }
      }
    }

    return result.join("");
  }

  private checkLuaSyntax(
    content: string,
    filePath: string,
    result: ModAnalysisResult,
  ): void {
    // content is already stripped of comments (audit D5 — single strip at the
    // analyzeLuaFile call site, so line numbers stay aligned).
    const lines = content.split("\n");
    let openParens = 0,
      closeParens = 0;
    let openBrackets = 0,
      closeBrackets = 0;
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

    // content is already stripped of comments (audit D5). Quoted segments are
    // blanked before matching so a pattern inside a string literal is not a
    // false positive either (only real calls are flagged).
    const lines = content.split("\n");
    const stringLiteralRe = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g;
    for (let i = 0; i < lines.length; i++) {
      const lineNumber = i + 1;
      const unquoted = lines[i].replace(stringLiteralRe, (m) => " ".repeat(m.length));

      for (const pattern of deprecatedPatterns) {
        if (unquoted.includes(pattern.pattern)) {
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
    // content is already stripped of comments (audit D5) so comments never
    // trigger GLOBAL_VAR or skew if/end counting (freebuff L2).
    const lines = content.split("\n");

    // Note: standalone `do ... end` blocks and keywords inside string literals
    // are not tracked here (do appears together with for/while; strings are handled separately).
    const blockOpenerCount = ((content.match(/\bif\b/g) || []).length + (content.match(/\bfor\b/g) || []).length + (content.match(/\bwhile\b/g) || []).length + (content.match(/\bfunction\b/g) || []).length);
    const endKeywordCount = (content.match(/\bend\b/g) || []).length;

    if (blockOpenerCount !== endKeywordCount) {
      result.issues.push({
        file: filePath,
        severity: "error",
        message: `Unbalanced block keywords: ${blockOpenerCount} openers (if/for/while/function) but ${endKeywordCount} 'end' keywords`,
        code: "SEMANTIC_ERROR",
      });
    }

    const globalVarPattern = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*/g;
    const globalVars = new Set<string>();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const lineNumber = i + 1;

      // Register ALL local variable names declared on this line, including
      // multi-name declarations (`local a, b = 1, 2`) so later reassignments
      // of b are not flagged as global leaks (audit D5).
      if (line.includes("local ")) {
        const localPart = line.substring(line.indexOf("local ") + 6).trim();
        for (const part of localPart.split(",")) {
          const match = part.trim().match(/^([a-zA-Z_][a-zA-Z0-9_]*)/);
          if (match) {
            globalVars.add(match[1]);
          }
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
        // Check if dependency is available (mod IDs — audit M4: require lists
        // name other MODS, not items; checkReference(dep, "item") was wrong)
        const exists = await this.db.modExists(dep);
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
      // versionMin was recorded but never enforced (audit M4) — symmetric
      // numeric check: game build below the declared minimum is incompatible.
      if (minVersion !== undefined) {
        const [minMajor, minMinor] = minVersion.split(".").map(Number);
        if (
          curMajor < minMajor ||
          (curMajor === minMajor && curMinor < minMinor)
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
    } catch (error) {
      // Directory read error — no longer swallowed silently (freebuff review
      // §3 code smell #5).
      logger.warn(
        `Failed to read directory ${dirPath} during large-file scan: ${error instanceof Error ? error.message : String(error)}`,
      );
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
