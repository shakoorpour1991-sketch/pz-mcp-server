import { DatabaseManager } from "../database/DatabaseManager.js";
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
export declare class ScriptGenerator {
    private db;
    private templates;
    private readonly categoryTemplateMap;
    constructor(db: DatabaseManager);
    private initializeTemplates;
    generateScript(type: string, name: string, specifications: Record<string, any>, module?: string, options?: GenerationOptions): Promise<string>;
    private getTemplate;
    private getBalanceReference;
    private generateScriptContent;
    private generateItemScript;
    private generateRecipeScript;
    private generateFixingScript;
    private generateSoundScript;
    private generateEvolvedRecipeScript;
    private generateVehicleScript;
    private applyBalanceAdjustments;
    private applyRecipeBalanceAdjustments;
    private adjustBasedOnReferences;
    private formatPropertyValue;
    private wrapInModule;
}
//# sourceMappingURL=ScriptGenerator.d.ts.map