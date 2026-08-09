import { DatabaseManager, GameItem } from "../database/DatabaseManager.js";
export interface ParseResults {
    itemCount: number;
    recipeCount: number;
    soundCount: number;
    vehicleCount: number;
    evolvedRecipeCount: number;
    fixingCount: number;
    filesProcessed: number;
    parseTime: number;
    errors: Array<{
        file: string;
        message: string;
        line?: number;
    }>;
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
export declare class ProjectZomboidParser {
    private db;
    private scriptExtensions;
    constructor(db: DatabaseManager);
    parseGameFiles(gamePath: string, forceReparse?: boolean): Promise<ParseResults>;
    parseModDirectory(modPath: string): Promise<ParseResults>;
    private parseDirectory;
    private parseScriptFile;
    private finalizeBlock;
    private parseBlock;
    /**
     * Build the structured recipe mirror row + ingredient/tool/output rows for
     * one recipe block (freebuff deeper indexing). Scans the block's raw lines
     * directly so it can capture what the generic property parser skips:
     *   - B42 `item N [A;B] flags[...]` alternatives (each alternative becomes
     *     its own ingredient row so "recipes using Base.Nails" finds recipes
     *     where Nails appears as `[Base.Nails;...]`)
     *   - B42 `item N tags[base:x;base:y] mode:keep` → tool rows by tag
     *   - B42 outputs section → role 'output' rows
     *   - legacy `keep [Base.Saw]` → tool rows; `Result:Base.X=2` → result
     * Uses the same inputs/outputs section tracking as parseBlock (F9).
     */
    private buildRecipeRecord;
    private parseItemProperty;
    private parseRecipeProperty;
    private parseFixingProperty;
    private parseSoundProperty;
    private parseEvolvedRecipeProperty;
    private parseVehicleProperty;
    parseModInfo(filePath: string): ModInfo;
    extractReferences(item: GameItem): Promise<void>;
}
//# sourceMappingURL=ProjectZomboidParser.d.ts.map