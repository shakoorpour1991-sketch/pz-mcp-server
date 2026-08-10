/**
 * Centralized runtime configuration (freebuff review M4).
 *
 * All environment-variable reads and hardcoded defaults live here instead of
 * being scattered through the codebase, and PZ_MCP_DATA_DIR decouples the
 * SQLite data directory from process.cwd() (the DB used to land in whatever
 * directory the MCP client happened to launch the server from).
 *
 * Every variable is validated through a single Zod schema (loadEnvConfig) so
 * invalid configuration fails fast at startup instead of surfacing as
 * confusing runtime behavior (audit: configuration validated at startup).
 */
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

/** Directory of this module (works compiled in dist/ and via tsx in src/). */
const MODULE_DIR = dirname(fileURLToPath(import.meta.url));
/** The repo's shipped research docs — the portable knowledge-base default. */
const SHIPPED_KB_PATH = join(MODULE_DIR, "..", "..", "knowledge-base");

/** Max allowed workshop download size in bytes (PZ_MCP_MAX_DOWNLOAD_BYTES). */
export const DEFAULT_MAX_DOWNLOAD_BYTES = 4 * 1024 * 1024 * 1024; // 4 GiB

/**
 * The single environment schema. Every PZ_ and STEAMCMD_ prefixed variable
 * the server reads is validated here; unknown variables are ignored for
 * forward compatibility.
 */
export const EnvSchema = z.object({
  PZ_MCP_DATA_DIR: z.string().min(1).optional(),
  PZ_MCP_WORKSPACE_DIR: z.string().min(1).optional(),
  PZ_MCP_KB_PATH: z.string().min(1).optional(),
  PZ_MCP_LOG_LEVEL: z
    .enum(["trace", "debug", "info", "warn", "error", "fatal", "silent"])
    .optional(),
  PZ_GAME_VERSION: z.string().min(1).optional(),
  PROJECTZOMBOID_PATH: z.string().min(1).optional(),
  PZ_PATH: z.string().min(1).optional(),
  PZ_WORKSHOP_DIR: z.string().min(1).optional(),
  STEAMCMD_PATH: z.string().min(1).optional(),
  STEAMCMD_USER: z.string().min(1).optional(),
  STEAMCMD_PASS: z.string().min(1).optional(),
  STEAMCMD_USE_CREDENTIALS: z.enum(["0", "1", "false", "true"]).optional(),
  PZ_MCP_MAX_DOWNLOAD_BYTES: z.coerce.number().int().positive().optional(),
});

export type EnvConfig = z.infer<typeof EnvSchema>;

/**
 * Parse + validate the environment. Throws with a per-variable breakdown on
 * invalid configuration. Reads are deliberately NOT cached: tests and tools
 * set env vars mid-process, so every read reflects the current environment
 * (a startup validation gate is still provided by validateEnvConfig).
 */
export function loadEnvConfig(env: NodeJS.ProcessEnv = process.env): EnvConfig {
  const parsed = EnvSchema.safeParse(env);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid environment configuration:\n${issues}`);
  }
  return parsed.data;
}

/**
 * Startup gate: fail fast on invalid environment configuration before the
 * server binds. The individual readers below re-parse per call so env vars
 * set later (tests, tooling) are always honored.
 */
export function validateEnvConfig(): EnvConfig {
  return loadEnvConfig();
}

/** Directory for SQLite databases. Override with PZ_MCP_DATA_DIR. */
export function dataDir(): string {
  return validateEnvConfig().PZ_MCP_DATA_DIR || join(process.cwd(), "data");
}

/**
 * Root directory for the mod workspace (projects the workspace_* tools may
 * create and modify). Override with PZ_MCP_WORKSPACE_DIR. Defaults to a
 * dedicated `workspaces/` folder next to the SQLite data so the server is
 * self-contained and never writes outside its own tree unless told to.
 */
export function workspaceRoot(): string {
  return (
    validateEnvConfig().PZ_MCP_WORKSPACE_DIR || join(dataDir(), "workspaces")
  );
}

/** Main vanilla-game database path. */
export function databasePath(): string {
  return join(dataDir(), "pz_database.db");
}

/** Knowledge base database path (second DB, kept separate). */
export function knowledgeDbPath(): string {
  return join(dataDir(), "pz_knowledge.db");
}

/**
 * Markdown knowledge-base docs directory. Override with PZ_MCP_KB_PATH.
 * Defaults to the knowledge-base/ directory shipped with the repository so
 * index_knowledge_base works out of the box on any machine (no machine-
 * specific default path).
 */
export function knowledgeBasePath(): string {
  return validateEnvConfig().PZ_MCP_KB_PATH || SHIPPED_KB_PATH;
}

/** pino log level. Override with PZ_MCP_LOG_LEVEL. */
export function logLevel(): string {
  return validateEnvConfig().PZ_MCP_LOG_LEVEL || "info";
}

/** Game build used for compatibility checks. Override with PZ_GAME_VERSION. */
export function gameVersion(): string {
  return validateEnvConfig().PZ_GAME_VERSION || "42.20";
}

/**
 * Explicit Project Zomboid install path from the environment.
 * Override with PROJECTZOMBOID_PATH or PZ_PATH.
 */
export function pzInstallEnvPath(): string | undefined {
  return validateEnvConfig().PROJECTZOMBOID_PATH || validateEnvConfig().PZ_PATH;
}

/**
 * Workshop download size cap in bytes (0 = unlimited). Override with
 * PZ_MCP_MAX_DOWNLOAD_BYTES. Enforced before SteamCMD runs so an oversized
 * item is refused without touching disk or the network.
 */
export function maxDownloadBytes(): number {
  return (
    validateEnvConfig().PZ_MCP_MAX_DOWNLOAD_BYTES ?? DEFAULT_MAX_DOWNLOAD_BYTES
  );
}
