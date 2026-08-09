import { PathManager } from "../utils/PathManager.js";
export interface SteamCmdRunResult {
    code: number;
    output: string;
}
export interface DownloadResult {
    id: string;
    downloadedPath: string;
    bytes: number;
    elapsedMs: number;
    attempts: number;
    tempDir: string;
    note?: string;
}
export interface DownloadProgress {
    /** Bytes on disk in the (still-temp) download folder so far. */
    bytes: number;
    /** Expected total bytes (from workshop metadata); 0 when unknown. */
    expectedBytes: number;
    /** 0-99 while in flight (never 100 — completion is signalled separately). */
    pct: number;
    elapsedMs: number;
}
export interface SteamCmdDownloaderOptions {
    /** Explicit steamcmd binary path (else env STEAMCMD_PATH, else common paths). */
    steamCmdPath?: string;
    /** Explicit workshop output dir (else env PZ_WORKSHOP_DIR, else Steam install). */
    workshopDir?: string;
    /** Injectable process runner for tests: (cmd, args) => {code, output}. */
    runner?: (cmd: string, args: string[]) => Promise<SteamCmdRunResult>;
    /** Common installation paths to probe (defaults to COMMON_STEAMCMD_PATHS for the platform). */
    commonSteamCmdPaths?: string[];
    pathManager?: PathManager;
    /** Clock injection (tests). */
    now?: () => number;
    /** Free-space probe on the download drive (tests). Default: fs.statfsSync. */
    diskFree?: (dir: string) => number;
}
export declare class SteamCmdDownloader {
    private steamCmdPath;
    private workshopDir;
    private runner;
    private commonSteamCmdPaths;
    private pathManager;
    private now;
    private diskFree;
    constructor(opts?: SteamCmdDownloaderOptions);
    /** Locate the steamcmd binary. Throws an actionable error when absent. */
    resolveSteamCmdPath(): Promise<string>;
    /** Resolve the workshop output dir (env → Steam install → error). */
    resolveWorkshopDir(): Promise<string>;
    /**
     * Download a workshop item via SteamCMD into the workspace dir.
     * Temp dir next to the target, always removed. Retries exit code 7.
     */
    download(id: string, onPhase?: (phase: string) => void, opts?: {
        expectedBytes?: number;
        onProgress?: (p: DownloadProgress) => void;
    }): Promise<DownloadResult>;
    /** `+login anonymous`, or credentials from env (never argv literals in code). */
    private loginArgs;
    private parseOutput;
    private tail;
    private dirSize;
}
//# sourceMappingURL=SteamCmdDownloader.d.ts.map