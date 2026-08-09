import { DatabaseManager } from "../database/DatabaseManager.js";
import { ProjectZomboidParser, ModInfo } from "../parsers/ProjectZomboidParser.js";
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
    score: number;
    recommendations: string[];
}
export interface CompatibilityAnalysis {
    conflicts: Array<{
        type: string;
        item: string;
        conflictsWith: string;
    }>;
    missingDependencies: string[];
    incompatibleMods: string[];
    gameVersionCompatibility: {
        minVersion?: string;
        maxVersion?: string;
        compatible: boolean;
    };
}
export interface PerformanceAnalysis {
    largeFiles: Array<{
        file: string;
        size: number;
    }>;
    recommendations: string[];
}
export interface QualityMetrics {
    overall: number;
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
export declare class ModAnalyzer {
    private db;
    private parser;
    private validator;
    /** Temp-DB item parse memo, keyed by modPath — balance and compatibility
     * share one parse per analyzeMod call instead of parsing the whole mod
     * twice (mod-analyzer review). The array is a materialized snapshot, so
     * this stays valid after the temp DB file is deleted. */
    private parsedItemsCache;
    /** Layout discovery memo, keyed by modPath — structure/scripts/lua/modInfo
     * share one tree walk per analyzeMod call instead of four (reviewer). */
    private layoutsCache;
    constructor(db: DatabaseManager, parser: ProjectZomboidParser);
    analyzeMod(modPath: string, options?: AnalysisOptions): Promise<ModAnalysisResult>;
    /** One layout discovery per analyzeMod call, shared by all consumers. */
    private getLayouts;
    private analyzeStructure;
    /** Top-level layout elements the analyzer understands (mod-analyzer review:
     * unexpectedFiles was dead). Dotfiles (Thumbs.db, .DS_Store, editor
     * settings) are ignored, not "unexpected". media/ at the root is the legacy
     * layout the analyzer itself parses, so it is expected too. */
    private isExpectedTopLevelEntry;
    /**
     * Parse a mod's scripts into an isolated temp DB and return its items —
     * shared by balance analysis and compatibility collision checks so the
     * vanilla game DB is never polluted (mod-analyzer review).
     */
    private parseModItems;
    private countFiles;
    private parseModInfo;
    private analyzeScripts;
    private analyzeScriptDirectory;
    private analyzeScriptFile;
    private analyzeLuaFiles;
    private analyzeLuaDirectory;
    private analyzeLuaFile;
    /**
     * Strip Lua comments so balance/semantic analysis is not skewed by text
     * inside comments (freebuff L2, audit D5): a small state machine tracks
     * string literals (single/double/long), line comments and block comments
     * (`--[[ ]]`, `--[==[ ]==]`), so `--` inside strings is never treated as a
     * comment and comments are replaced with spaces (newlines preserved, so
     * line numbers stay aligned).
     */
    private stripLuaComments;
    /**
     * Blank string literals (quoted and long [[...]] / [=*[...]=*]) so keyword,
     * paren and global-variable heuristics are not skewed by text inside strings
     * (mod-analyzer review: only comments were stripped before). Lengths and
     * newlines are preserved so line numbers stay aligned.
     */
    private blankLuaStrings;
    private checkLuaSyntax;
    private checkDeprecatedAPI;
    private checkSemanticIssues;
    /**
     * Category configs for balance comparison. Each category maps a PZ
     * properties.Type to the vanilla search keyword and the stats that
     * matter for that category (P4 #23).
     */
    private static readonly BALANCE_CATEGORIES;
    private analyzeBalance;
    private findBalanceOutliers;
    private calculateBalanceScore;
    private generateBalanceRecommendations;
    /**
     * Per-frame and in-loop event registration heuristics (mod-analyzer review).
     * Verified against the KB events table: OnPlayerUpdate is the per-frame
     * player tick, OnTick runs every game tick, and periodic timers
     * (EveryOneMinute/EveryHours) exist for throttled work.
     */
    private checkPerformanceIssues;
    private analyzeCompatibility;
    private analyzePerformance;
    private findLargeFiles;
    private generatePerformanceRecommendations;
    private calculateQualityMetrics;
    private generateRecommendations;
}
//# sourceMappingURL=ModAnalyzer.d.ts.map