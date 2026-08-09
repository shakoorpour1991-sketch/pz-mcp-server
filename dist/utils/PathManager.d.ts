export declare class PathManager {
    private commonPaths;
    constructor();
    private initializeCommonPaths;
    detectProjectZomboidPath(): Promise<string | null>;
    private detectSteamInstallation;
    private detectSteamWindows;
    private readSteamRegistryPath;
    private queryRegistryValue;
    private detectSteamLinux;
    private detectSteamMacOS;
    private parseSteamLibraryFolders;
    isValidProjectZomboidInstallation(path: string): boolean;
    /**
     * Validate a user-supplied file path before it is used for filesystem access.
     * Guards against path traversal (audit P1 #10): rejects empty/relative paths,
     * NUL bytes, and any '..' segment. Verifies the target exists.
     *
     * @param input raw path from an MCP tool argument
     * @param kind expected target type ('dir' or 'file')
     * @returns the validated, resolved absolute path
     * @throws Error describing the rejection
     */
    validateInputPath(input: string, kind?: "dir" | "file"): string;
    /**
     * Walk up from `target` to the first existing ancestor directory and check
     * whether it is writable (W_OK via fs.access). Returns a verdict object
     * with `writable` boolean and, when not writable, an `error` message.
     * Used by export_mod_script dry-run to warn early (audit D6).
     */
    isAncestorWritable(target: string): Promise<{
        writable: boolean;
        error?: string;
    }>;
}
//# sourceMappingURL=PathManager.d.ts.map