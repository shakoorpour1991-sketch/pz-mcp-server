import pino from "pino";
/**
 * Structured logger (P4 #21).
 *
 * CRITICAL: pino defaults to stdout, but this server's STDOUT is the MCP
 * JSON-RPC channel — any stray output corrupts the protocol. All log output
 * must go to stderr (fd 2). Level is configurable via PZ_MCP_LOG_LEVEL.
 */
declare const logger: pino.Logger<never, boolean>;
export default logger;
//# sourceMappingURL=logger.d.ts.map