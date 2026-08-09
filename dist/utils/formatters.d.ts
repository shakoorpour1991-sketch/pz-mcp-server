export declare function formatSearchResults(results: any[]): string;
export declare function formatRecipeSearchResults(recipes: any[]): string;
export declare function formatValidationResults(validation: any): string;
export declare function formatReferenceResults(results: any): string;
export declare function formatRecipeChain(chain: any): string;
export declare function formatRecipeConflicts(result: any): string;
export declare function formatModAnalysis(analysis: any): string;
export declare function formatParseResults(results: any): string;
export declare function formatKbIndexResults(result: {
    topics: number;
    files: number;
    chars: number;
    skipped: number;
    removed: number;
    errors: Array<{
        file: string;
        message: string;
    }>;
}): string;
export declare function formatKbSearchResults(query: string, results: Array<{
    topic: string;
    title: string;
    snippet: string;
    score: number;
}>): string;
export declare function formatKbTopics(topics: Array<{
    topic: string;
    title: string;
    lines: number;
    words: number;
    chars: number;
}>): string;
export declare function formatWorkshopSearchResults(query: string, items: Array<{
    id: string;
    title: string;
    author: string;
    url: string;
    shortDescription: string;
    tags: string[];
    subscribers: number;
}>): string;
export declare function formatWorkshopDetails(details: {
    id: string;
    title: string;
    url: string;
    appId: string;
    fileSize: number;
    subscribers: number;
    views: number;
    votesUp: number;
    votesDown: number;
    tags: string[];
    description: string;
    timeUpdated: number;
}, isPz: boolean): string;
export declare function formatWorkshopDownload(result: {
    id: string;
    downloadedPath: string;
    bytes: number;
    elapsedMs: number;
    attempts: number;
    note?: string;
}): string;
export interface WorkshopModReport {
    modId: string;
    title: string;
    url: string;
    fileSize: number;
    subscribers: number;
    downloadedPath: string;
    downloadBytes: number;
    /** Total tool duration (download + parse + analyze), ms. */
    elapsedMs: number;
    parse: {
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
        }>;
    };
    analysis: any;
}
export declare function formatWorkshopModReport(report: WorkshopModReport): string;
export declare function formatBytes(n: number): string;
/** Format mod structure for workspace_inspect_mod */
export declare function formatModStructure(structure: {
    modPath: string;
    modInfo?: {
        id?: string;
        name?: string;
        version?: string;
    };
    hasModInfo: boolean;
    hasCommonFolder: boolean;
    hasCorrectStructure: boolean;
    buildVersions: string[];
    files: Array<{
        relativePath: string;
        type: string;
        size: number;
    }>;
    scriptCount: number;
    luaCount: number;
    assetCount: number;
    detectedContentTypes: string[];
}): string;
/** Format validation result for workspace_validate_mod */
export declare function formatValidationResult(validation: {
    isValid: boolean;
    errors: Array<{
        code: string;
        message: string;
        path: string;
        suggestion?: string;
    }>;
    warnings: Array<{
        code: string;
        message: string;
        path: string;
        suggestion?: string;
    }>;
    missingRequired: string[];
    unexpectedFiles: string[];
}): string;
/** Format project status for workspace_get_status */
export declare function formatProjectStatus(status: {
    modPath: string;
    metadata: {
        id?: string;
        name?: string;
        version?: string;
        author?: string;
    } | null;
    structure: {
        hasModInfo: boolean;
        hasCorrectStructure: boolean;
        buildVersions: string[];
        scriptCount: number;
        luaCount: number;
        assetCount: number;
    };
    validation: {
        isValid: boolean;
        errors: any[];
        warnings: any[];
    };
    dependencies: Array<{
        modId: string;
        required: boolean;
        incompatible: boolean;
    }>;
    issues: Array<{
        severity: "error" | "warning" | "info";
        message: string;
    }>;
    lastModified: Date | null;
}): string;
//# sourceMappingURL=formatters.d.ts.map