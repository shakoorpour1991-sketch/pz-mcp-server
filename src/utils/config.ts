/**
 * Centralized runtime configuration (freebuff review M4).
 *
 * All environment-variable reads and hardcoded defaults live here instead of
 * being scattered through the codebase, and PZ_MCP_DATA_DIR decouples the
 * SQLite data directory from process.cwd() (the DB used to land in whatever
 * directory the MCP client happened to launch the server from).
 */
import { join } from "path";

/** Directory for SQLite databases. Override with PZ_MCP_DATA_DIR. */
export function dataDir(): string {
  return process.env.PZ_MCP_DATA_DIR || join(process.cwd(), "data");
}

/** Main vanilla-game database path. */
export function databasePath(): string {
  return join(dataDir(), "pz_database.db");
}

/** Knowledge base database path (second DB, kept separate). */
export function knowledgeDbPath(): string {
  return join(dataDir(), "pz_knowledge.db");
}

/** Markdown knowledge-base docs directory. Override with PZ_MCP_KB_PATH. */
export function knowledgeBasePath(): string {
  return process.env.PZ_MCP_KB_PATH || "D:\\PZ-Modding\\Documentation";
}

/** pino log level. Override with PZ_MCP_LOG_LEVEL. */
export function logLevel(): string {
  return process.env.PZ_MCP_LOG_LEVEL || "info";
}

/** Game build used for compatibility checks. Override with PZ_GAME_VERSION. */
export function gameVersion(): string {
  return process.env.PZ_GAME_VERSION || "42.20";
}

/**
 * Explicit Project Zomboid install path from the environment.
 * Override with PROJECTZOMBOID_PATH or PZ_PATH.
 */
export function pzInstallEnvPath(): string | undefined {
  return process.env.PROJECTZOMBOID_PATH || process.env.PZ_PATH;
}
