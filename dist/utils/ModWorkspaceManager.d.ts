/**
 * PZ Mod Workspace Manager - First-class workspace abstraction for Project Zomboid mod development.
 *
 * Provides a coherent workspace abstraction supporting:
 * - Create mod/project
 * - Scaffold a valid B42 mod
 * - Inspect mod structure
 * - List files
 * - Read files
 * - Write/create files
 * - Safely patch files
 * - Delete files
 * - Rename/move files
 * - Validate mod structure
 * - Detect malformed metadata
 * - Detect missing required directories/files
 * - Inspect dependencies
 * - Report project status
 */
/** Valid B42 mod directory structure */
export declare const VALID_MOD_DIRS: readonly ["common", "media", "media/scripts", "media/lua", "media/sound", "media/textures", "media/maps", "lua", "scripts", "sound", "textures", "maps"];
/** Required files for a valid mod */
export declare const REQUIRED_MOD_FILES: readonly ["mod.info"];
/** Optional but common mod files */
export declare const OPTIONAL_MOD_FILES: readonly ["poster.png", "icon.png", "preview.png", "workshop.txt", "README.md", "README.txt"];
/** File extensions recognized in mods */
export declare const MOD_FILE_EXTENSIONS: {
    readonly scripts: readonly [".txt"];
    readonly lua: readonly [".lua"];
    readonly assets: readonly [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".ogg", ".wav", ".mp3"];
    readonly data: readonly [".json", ".xml", ".ini"];
    readonly docs: readonly [".md", ".txt"];
};
export interface WorkspaceConfig {
    /** Root directories where mods can be created/managed */
    workspaceRoots: string[];
    /** Default mod template (B42 or B41) */
    defaultTemplate: "B42" | "B41";
    /** Enable strict path validation */
    strictPaths: boolean;
}
export interface ModMetadata {
    id: string;
    name: string;
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
export interface ModFile {
    path: string;
    relativePath: string;
    type: "script" | "lua" | "asset" | "data" | "doc" | "config" | "other";
    size: number;
    modified: Date;
}
export interface ModStructure {
    modPath: string;
    modInfo?: ModMetadata;
    hasModInfo: boolean;
    hasCommonFolder: boolean;
    hasCorrectStructure: boolean;
    buildVersions: string[];
    files: ModFile[];
    scriptCount: number;
    luaCount: number;
    assetCount: number;
    detectedContentTypes: string[];
}
export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
    warnings: ValidationWarning[];
    missingRequired: string[];
    unexpectedFiles: string[];
}
export interface ValidationError {
    path: string;
    severity: "error";
    code: string;
    message: string;
    suggestion?: string;
}
export interface ValidationWarning {
    path: string;
    severity: "warning";
    code: string;
    message: string;
    suggestion?: string;
}
export interface DependencyInfo {
    modId: string;
    required: boolean;
    incompatible: boolean;
    versionMin?: string;
    versionMax?: string;
}
export interface ProjectStatus {
    modPath: string;
    metadata: ModMetadata | null;
    structure: ModStructure;
    validation: ValidationResult;
    dependencies: DependencyInfo[];
    issues: Array<{
        severity: "error" | "warning" | "info";
        message: string;
    }>;
    lastModified: Date | null;
}
export interface CreateModOptions {
    name: string;
    id: string;
    author?: string;
    description?: string;
    version?: string;
    template?: "B42" | "B41";
    moduleName?: string;
    createCommonFolder?: boolean;
    createLuaFolder?: boolean;
    createSoundFolder?: boolean;
    createTexturesFolder?: boolean;
}
export interface FileOperationResult {
    success: boolean;
    path?: string;
    error?: string;
    content?: string;
    backupPath?: string;
}
export declare class ModWorkspaceManager {
    private config;
    private pathManager;
    constructor(config: WorkspaceConfig);
    /**
     * Validate that a path is within configured workspace roots.
     * Prevents path traversal and ensures operations stay within allowed directories.
     */
    validateWorkspacePath(inputPath: string): string;
    /**
     * Create a new mod project with proper B42/B41 structure.
     */
    createMod(options: CreateModOptions, targetDir: string): Promise<FileOperationResult>;
    /**
     * Generate mod.info content.
     */
    private generateModInfo;
    /**
     * Generate placeholder script content.
     */
    private generatePlaceholderScript;
    /**
     * Generate README content.
     */
    private generateReadme;
    /**
     * Inspect mod structure and return detailed information.
     */
    inspectMod(modPath: string): Promise<ModStructure>;
    /**
     * Recursively scan files in mod directory.
     */
    private scanFiles;
    /**
     * Parse mod.info file.
     */
    private parseModInfo;
    /**
     * List all files in mod directory.
     */
    listFiles(modPath: string, options?: {
        pattern?: string;
        type?: ModFile["type"];
    }): Promise<ModFile[]>;
    /**
     * Read a file from mod directory.
     */
    readFile(modPath: string, filePath: string): Promise<FileOperationResult>;
    /**
     * Write/create a file in mod directory.
     */
    writeFile(modPath: string, filePath: string, content: string, options?: {
        createBackup?: boolean;
        overwrite?: boolean;
    }): Promise<FileOperationResult>;
    /**
     * Delete a file from mod directory.
     */
    deleteFile(modPath: string, filePath: string, options?: {
        createBackup?: boolean;
    }): Promise<FileOperationResult>;
    /**
     * Rename/move a file within mod directory.
     */
    renameFile(modPath: string, oldPath: string, newPath: string, _options?: {
        createBackup?: boolean;
    }): Promise<FileOperationResult>;
    /**
     * Validate mod structure.
     */
    validateMod(modPath: string): Promise<ValidationResult>;
    /**
     * Get mod dependencies from mod.info.
     */
    getDependencies(modPath: string): Promise<DependencyInfo[]>;
    /**
     * Get comprehensive project status.
     */
    getProjectStatus(modPath: string): Promise<ProjectStatus>;
    /**
     * Patch a file safely with atomic write.
     */
    patchFile(modPath: string, filePath: string, patchFn: (content: string) => string, options?: {
        createBackup?: boolean;
    }): Promise<FileOperationResult>;
}
export default ModWorkspaceManager;
//# sourceMappingURL=ModWorkspaceManager.d.ts.map