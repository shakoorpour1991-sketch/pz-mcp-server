/**
 * Standardized MCP error handling (audit: error semantics + sanitization).
 *
 * The tool dispatcher funnels every handler error through toMcpError so MCP
 * clients get a stable, useful message without stack traces or, where
 * practical, local filesystem layout.
 *
 * Category → JSON-RPC code mapping (documented here; deliberately NOT new
 * error classes — the single mapper below is the contract, and call sites
 * keep throwing plain Errors or deliberate McpErrors):
 *   - invalid input            → InvalidParams  (zod schema rejection)
 *   - missing local resource   → InvalidRequest ("Topic not found", …)
 *   - parse failure            → InvalidRequest (malformed game/mod script)
 *   - validation failure       → InvalidRequest (script failed validation)
 *   - external service failure → InternalError (Steam/SteamCMD/network)
 *   - filesystem permission    → InternalError (EACCES/EPERM family)
 *   - internal error           → InternalError (catch-all)
 */
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { ZodError } from "zod";

/**
 * Redact local filesystem layout from an error message where practical:
 * absolute drive paths (C:\…), POSIX home/mnt prefixes become "<local path>".
 * Successful tool output still surfaces paths (the user asked for them);
 * this only tames error messages that would otherwise echo the machine
 * layout back to a client.
 */
export function sanitizeErrorMessage(message: string): string {
  return message.replace(
    /[A-Za-z]:[\\/][^\s\n)]*|(?:\/home\/|\/Users\/|\/mnt\/[a-z]\/)[^\s\n)]*/g,
    "<local path>",
  );
}

/**
 * Map any thrown value to an McpError with the right JSON-RPC code and a
 * sanitized message. Zod rejections become InvalidParams, deliberate
 * McpErrors pass through untouched, and everything else lands in
 * InternalError with stack traces stripped.
 */
export function toMcpError(error: unknown): McpError {
  if (error instanceof ZodError) {
    return new McpError(
      ErrorCode.InvalidParams,
      `Invalid parameters: ${error.errors
        .map((e) => `${e.path.join(".") || "(root)"}: ${e.message}`)
        .join(", ")}`,
    );
  }
  if (error instanceof McpError) {
    return error;
  }

  // Everything else is an internal/domain error: sanitize (no stack traces,
  // no absolute local paths) and surface as InternalError.
  const message = error instanceof Error ? error.message : String(error);
  return new McpError(
    ErrorCode.InternalError,
    `Tool execution failed: ${sanitizeErrorMessage(message)}`,
  );
}
