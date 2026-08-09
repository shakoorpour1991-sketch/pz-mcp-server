import { z } from "zod";
/** Max allowed workshop download size in bytes (PZ_MCP_MAX_DOWNLOAD_BYTES). */
export declare const DEFAULT_MAX_DOWNLOAD_BYTES: number;
/**
 * The single environment schema. Every PZ_ and STEAMCMD_ prefixed variable
 * the server reads is validated here; unknown variables are ignored for
 * forward compatibility.
 */
export declare const EnvSchema: z.ZodObject<{
    PZ_MCP_DATA_DIR: z.ZodOptional<z.ZodString>;
    PZ_MCP_KB_PATH: z.ZodOptional<z.ZodString>;
    PZ_MCP_LOG_LEVEL: z.ZodOptional<z.ZodEnum<["trace", "debug", "info", "warn", "error", "fatal", "silent"]>>;
    PZ_GAME_VERSION: z.ZodOptional<z.ZodString>;
    PROJECTZOMBOID_PATH: z.ZodOptional<z.ZodString>;
    PZ_PATH: z.ZodOptional<z.ZodString>;
    PZ_WORKSHOP_DIR: z.ZodOptional<z.ZodString>;
    STEAMCMD_PATH: z.ZodOptional<z.ZodString>;
    STEAMCMD_USER: z.ZodOptional<z.ZodString>;
    STEAMCMD_PASS: z.ZodOptional<z.ZodString>;
    STEAMCMD_USE_CREDENTIALS: z.ZodOptional<z.ZodEnum<["0", "1", "false", "true"]>>;
    PZ_MCP_MAX_DOWNLOAD_BYTES: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    PZ_MCP_DATA_DIR?: string | undefined;
    PZ_MCP_KB_PATH?: string | undefined;
    PZ_MCP_LOG_LEVEL?: "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent" | undefined;
    PZ_GAME_VERSION?: string | undefined;
    PROJECTZOMBOID_PATH?: string | undefined;
    PZ_PATH?: string | undefined;
    PZ_WORKSHOP_DIR?: string | undefined;
    STEAMCMD_PATH?: string | undefined;
    STEAMCMD_USER?: string | undefined;
    STEAMCMD_PASS?: string | undefined;
    STEAMCMD_USE_CREDENTIALS?: "0" | "1" | "false" | "true" | undefined;
    PZ_MCP_MAX_DOWNLOAD_BYTES?: number | undefined;
}, {
    PZ_MCP_DATA_DIR?: string | undefined;
    PZ_MCP_KB_PATH?: string | undefined;
    PZ_MCP_LOG_LEVEL?: "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent" | undefined;
    PZ_GAME_VERSION?: string | undefined;
    PROJECTZOMBOID_PATH?: string | undefined;
    PZ_PATH?: string | undefined;
    PZ_WORKSHOP_DIR?: string | undefined;
    STEAMCMD_PATH?: string | undefined;
    STEAMCMD_USER?: string | undefined;
    STEAMCMD_PASS?: string | undefined;
    STEAMCMD_USE_CREDENTIALS?: "0" | "1" | "false" | "true" | undefined;
    PZ_MCP_MAX_DOWNLOAD_BYTES?: number | undefined;
}>;
export type EnvConfig = z.infer<typeof EnvSchema>;
/**
 * Parse + validate the environment. Throws with a per-variable breakdown on
 * invalid configuration. Reads are deliberately NOT cached: tests and tools
 * set env vars mid-process, so every read reflects the current environment
 * (a startup validation gate is still provided by validateEnvConfig).
 */
export declare function loadEnvConfig(env?: NodeJS.ProcessEnv): EnvConfig;
/**
 * Startup gate: fail fast on invalid environment configuration before the
 * server binds. The individual readers below re-parse per call so env vars
 * set later (tests, tooling) are always honored.
 */
export declare function validateEnvConfig(): EnvConfig;
/** Directory for SQLite databases. Override with PZ_MCP_DATA_DIR. */
export declare function dataDir(): string;
/** Main vanilla-game database path. */
export declare function databasePath(): string;
/** Knowledge base database path (second DB, kept separate). */
export declare function knowledgeDbPath(): string;
/**
 * Markdown knowledge-base docs directory. Override with PZ_MCP_KB_PATH.
 * Defaults to the knowledge-base/ directory shipped with the repository so
 * index_knowledge_base works out of the box on any machine (no machine-
 * specific default path).
 */
export declare function knowledgeBasePath(): string;
/** pino log level. Override with PZ_MCP_LOG_LEVEL. */
export declare function logLevel(): string;
/** Game build used for compatibility checks. Override with PZ_GAME_VERSION. */
export declare function gameVersion(): string;
/**
 * Explicit Project Zomboid install path from the environment.
 * Override with PROJECTZOMBOID_PATH or PZ_PATH.
 */
export declare function pzInstallEnvPath(): string | undefined;
/**
 * Workshop download size cap in bytes (0 = unlimited). Override with
 * PZ_MCP_MAX_DOWNLOAD_BYTES. Enforced before SteamCMD runs so an oversized
 * item is refused without touching disk or the network.
 */
export declare function maxDownloadBytes(): number;
//# sourceMappingURL=config.d.ts.map