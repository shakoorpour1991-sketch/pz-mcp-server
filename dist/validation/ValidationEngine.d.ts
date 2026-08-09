import { DatabaseManager } from "../database/DatabaseManager.js";
export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
    warnings: ValidationWarning[];
    suggestions: string[];
    score: number;
}
export interface ValidationError {
    line: number;
    column?: number;
    message: string;
    severity: "error" | "warning" | "info";
    code: string;
    suggestion?: string;
}
export interface ValidationWarning extends ValidationError {
    severity: "warning";
}
export interface ReferenceValidationResult {
    reference: string;
    type: string;
    isValid: boolean;
    error?: string;
    suggestions: string[];
    /**
     * Completeness detail (freebuff N-series): where the reference actually
     * lives. 'defined' = an items row exists; 'referenced' = only appears in
     * the references table (sprite/model refs, or a dangling reference);
     * 'missing' = nowhere.
     */
    detail?: "defined" | "referenced" | "missing";
    /** Block type of the items row when the reference is defined as an item. */
    itemType?: string;
    /** How many items/recipes reference this id. */
    referenceCount?: number;
}
export declare class ValidationEngine {
    private db;
    private readonly requiredProperties;
    private readonly propertyValidators;
    constructor(db: DatabaseManager);
    validateScript(content: string, expectedType?: string, strict?: boolean): Promise<ValidationResult>;
    checkReferences(references: string[], type?: string): Promise<ReferenceValidationResult[]>;
    private parseScriptBlocks;
    private parseProperty;
    private parseValue;
    private validateBlock;
    private validateProperty;
    private validateBlockSpecific;
    private validateItemBlock;
    private validateRecipeBlock;
    private validateFixingBlock;
    private validateSoundBlock;
    private validateEvolvedRecipeBlock;
    private validateModuleStructure;
    private validateSyntax;
    private validateTypeConsistency;
    private calculateQualityScore;
}
//# sourceMappingURL=ValidationEngine.d.ts.map