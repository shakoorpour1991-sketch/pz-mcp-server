import pino from 'pino';
import { logLevel } from './config.js';

/**
 * Structured logger (P4 #21).
 *
 * CRITICAL: pino defaults to stdout, but this server's STDOUT is the MCP
 * JSON-RPC channel — any stray output corrupts the protocol. All log output
 * must go to stderr (fd 2). Level is configurable via PZ_MCP_LOG_LEVEL.
 */
const logger = pino(
  {
    level: logLevel(),
  },
  pino.destination({ fd: 2 })
);

export default logger;
