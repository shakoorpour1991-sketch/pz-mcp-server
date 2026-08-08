# pz-mcp-server — Code Audit

- Repo: https://github.com/shakoorpour1991-sketch/pz-mcp-server (commit 2d65aa4, master)
- Date: 2026-08-07
- Audited by: Qwen3.8-Max (chat.qwen.ai) via OpenTabs MCP bridge — one chat, 5 attached source files, thinking mode
- Method: full repository source (src/, tests/, admin/bridge.mjs, configs) uploaded as 5 text files (core / parsers+generators+validation / database+knowledge / analyzers / tests+configs); one audit request in a single conversation; follow-up message in the same chat covered src/workshop/* (SteamCmdDownloader, SteamWorkshopClient) which the model flagged as a coverage gap. Model output is verbatim below.
- Coverage: src/index.ts, src/utils/*, src/parsers/*, src/generators/*, src/validation/*, src/database/*, src/knowledge/*, src/analyzers/*, src/workshop/*, tests/*, admin/bridge.mjs, package.json, tsconfig.json, AGENTS.md

---
# Code Audit Report — `pz-mcp-server`

**Scope reviewed:** all 5 provided files — `src/index.ts`, `src/utils/*`, `src/parsers/*`, `src/generators/*`, `src/validation/*`, `src/database/*`, `src/knowledge/*`, `src/analyzers/*`, `tests/server.integration.test.js`, `admin/bridge.mjs`, `package.json`, `tsconfig.json`, `AGENTS.md`.

**Note on coverage:** `src/workshop/SteamWorkshopClient.ts` and `src/workshop/SteamCmdDownloader.ts` are *imported by `index.ts` but not present* in the provided bundle, so those findings are flagged as "verify" rather than confirmed.

---

## Executive Summary

The codebase is **well-architected and defensively written** for its domain: path traversal is centralized and enforced, all SQL is parameterized, FTS input is sanitized, stdout is kept clean for the MCP wire, and there is clear investment in shared "single source of truth" modules (scanner, block types, property syntax) plus real integration tests. The most serious problems are **correctness bugs, not security holes**: negative numeric values are parsed as strings (`parseScriptValue`), and the Lua `if`/`end` balance check emits guaranteed false-positive errors on nearly every real Lua file. Secondary concerns are **data-integrity gaps** (the `references` table has no uniqueness constraint, so `INSERT OR IGNORE` is a no-op; `workshop_analyze` pollutes the vanilla DB) and **event-loop blocking / N+1 query patterns** in the knowledge base and analyzers.

---

## Security Findings

**[Medium] `src/workshop/*` (via `src/index.ts` `workshop_download` / `workshop_analyze`) — unverified command-injection / SSRF surface.**
The workshop client fetches Steam URLs and drives `steamcmd` using a user-supplied id/URL (`parseWorkshopInput(id)`). These files were not provided, so I cannot confirm they (a) invoke `steamcmd` with an argument array (`execFile`/`spawn`, no `shell: true`) and (b) restrict outbound URLs to `steamcommunity.com` / `api.steampowered.com`. *Fix:* confirm `steamcmd` is spawned without a shell and ids are validated as numeric before interpolation; hard-code the Steam host rather than building URLs from raw input.

**[Low] `admin/bridge.mjs` `spawnChild()` — `shell: true` with a hand-quoted command line.**
`needsShell` builds `"cmd" "arg" ...` and spawns with `shell: true`. Args are currently hard-coded (`['tsx','src/index.ts']` / `['--no-warnings', dist]`), so it is not exploitable today, but `shell: true` is fragile. *Fix:* keep the arg-array form and quote only when unavoidable; never let args derive from external input.

**[Low] `admin/bridge.mjs` `/rpc` and `/api/restart` — no authentication.**
Correctly bound to `127.0.0.1` only, but any local process (or a malicious local page able to reach loopback) can drive/restart the server. JSON `POST` triggers a CORS preflight the server never answers, which blunts browser CSRF, but that is incidental. *Fix:* optional shared-secret header check on `/rpc` and `/api/restart`.

**[Low] `src/index.ts` zod schemas — unbounded inputs.**
`GenerateScriptSchema.properties` / `ExportModScriptSchema.properties` are `z.record(z.any())`, and large string fields (`content`, `query`) have no `.max()` in most tools. Oversized payloads become memory/CPU pressure. *Fix:* add `.max()` caps and record-size limits where practical.

**[Low] `src/utils/PathManager.ts` `validateInputPath()` — no symlink resolution / containment.**
It rejects empty, NUL, relative, and `..` paths and requires the target to exist — which is strong — but it does not call `realpath` (so symlinked escapes aren't detected) and has no "allowed root" concept; any absolute existing path is accepted. This matches the local-tool trust model, but note UNC paths (`\\server\share`) are accepted on Windows. *Fix (only if containment is ever required):* resolve with `realpath` and assert a root prefix.

**[Info / Strength] SQL & FTS5 injection is well-mitigated.**
Every query uses `?` placeholders; `prepareFTSQuery()` and `KnowledgeBaseManager.search()` build `MATCH` strings only from `sanitizeFtsTerms()` (`src/utils/fts.ts`). The one behavioral (non-injection) gap: `DatabaseManager.getSimilarItems()` doesn't escape `%`/`_` LIKE wildcards in user input.

---

## Bugs and Correctness

**[High] `src/utils/scriptSyntax.ts` `parseScriptValue()` — negative numbers returned as strings.**
`/^\d+$/` and `/^\d*\.\d+$/` reject a leading `-`, so `-10` / `-1.5` fall through to the string return. `HungerChange = -10`, `ThirstChange`, and similar negative stats are stored as strings, which breaks numeric validation (`ValidationEngine.propertyValidators`), balance math (`ModAnalyzer.analyzeBalance`), and numeric filters. *Fix:* allow an optional sign: `/^-?\d+$/`, `/^-?\d*\.\d+$/`. (Also: very large integers silently lose precision via `parseInt`.)

**[High] `src/analyzers/ModAnalyzer.ts` `checkSemanticIssues()` — guaranteed false-positive `SEMANTIC_ERROR`.**
It compares `count("if")` vs `count("end")` and flags a mismatch as an error. But `end` also closes `function`, `for`, `while`, and `do` blocks, so almost any non-trivial Lua file has more `end`s than `if`s and is reported as "Unbalanced if/end". This makes the Lua analyzer actively misleading. *Fix:* remove the check or use a real Lua grammar/balanced-block parser.

**[Medium] `src/parsers/ProjectZomboidParser.ts` `parseFixingProperty()` — fixer material loses its module prefix.**
`parts[0].match(/(\w+)=(\d+)/)` can't match across `.`, so `Base.Glue=1` yields `material = "Glue"` (the engine matches `Glue=1`). Round-tripping the generator's own `Fixer : Base.Glue=1,` output corrupts the reference. *Fix:* `/([\w.]+)=(\d+)/`.

**[Medium] `src/index.ts` `workshop_analyze` — pollutes the vanilla database.**
`parser.parseModDirectory(dl.downloadedPath)` writes workshop mod rows into the **main** `dbManager`, so `search_vanilla`, recipe-conflict, and reference checks get contaminated by third-party mod items. `ModAnalyzer.analyzeBalance` deliberately uses a throwaway temp DB for exactly this reason. *Fix:* parse into a temp `DatabaseManager` (as balance analysis does) or tag mod rows and exclude them from vanilla queries.

**[Medium] `src/database/DatabaseManager.ts` `references` schema / `addReference()` — `INSERT OR IGNORE` is a no-op; duplicates accumulate.**
The `"references"` table has no `UNIQUE` constraint on `(item_id, reference_id, reference_type, context)`, so `INSERT OR IGNORE` never ignores. Any re-parse that hits the upsert path (e.g., running `workshop_analyze` twice) inserts duplicate reference rows, inflating `describeReference().referenceCount` and `findDuplicateRecipeOutputs()`. *Fix:* `CREATE UNIQUE INDEX ... ON "references"(item_id, reference_id, reference_type, context)`.

**[Medium] `src/analyzers/ModAnalyzer.ts` `analyzeCompatibility()` — two logic errors.**
(1) `mod.info` `require` lists **other mod IDs**, but they're checked with `checkReference(dep, "item")`, so every dependency is reported as "missing". (2) Only `versionMax` is enforced; a `versionMin` newer than the running build never sets `compatible=false`. *Fix:* treat `require` as mod ids (not items) and add the `cur < min` comparison.

**[Low] `src/utils/scriptScanner.ts` — incomplete block-comment handling.**
Only lines starting with `/*` or `*` are skipped; there's no "inside comment" state. A multi-line comment whose body lines don't start with `*` (and any inline `/* ... */`) is parsed as code — braces/keywords inside it can corrupt block detection. *Fix:* track comment state and strip inline comments.

**[Low] `src/utils/PathManager.ts` `detectProjectZomboidPath()` — env override checked last.**
`PROJECTZOMBOID_PATH`/`PZ_PATH` is consulted *after* Steam and common paths, so an explicit user override is silently ignored whenever another install is found. *Fix:* check the env override first.

**[Low] `src/parsers/ProjectZomboidParser.ts` `extractReferences()` — evolved recipes ignored.**
`evolvedrecipe` `BaseItem`/`Ingredients` are never written to `references`, so `analyze_recipe_chain` / `detect_recipe_conflicts` can't see evolved-recipe edges.

**[Low] `src/analyzers/ModAnalyzer.ts` `checkDeprecatedAPI()` — scans un-stripped content.**
Unlike `checkSemanticIssues`, it uses raw content, so deprecated API names inside comments trigger warnings. *Fix:* run on `stripLuaComments(content)`.

**[Low] `src/analyzers/RecipeAnalyzer.ts` `analyzeChain()` — `truncated` over-reported.**
`truncated=true` is set whenever any node sits at `maxDepth`, even when it had no further edges to expand. (Minor perf: `queue.shift()` is O(n).)

---

## Error Handling and Concurrency

**[Medium] `src/knowledge/KnowledgeBaseManager.ts` `indexDirectory()` / `collectMdFiles()` — synchronous fs blocks the event loop.**
`readdirSync`, `readFileSync`, `statSync` are used for the whole indexing pass (the parser was explicitly migrated to async fs per "freebuff M5", but the KB manager wasn't). Additionally it opens **one transaction per file** (`BEGIN`/`COMMIT` inside the loop), which is slow and not atomic across the index. *Fix:* async fs + a single batched transaction.

**[Medium] N+1 query patterns.**
- `ValidationEngine.validateProperty()` issues a `checkReferences()` DB call **per reference-typed property** (Icon/WeaponSprite/sounds) for every block; during `analyze_mod` this multiplies across every script file.
- `RecipeAnalyzer.analyzeChain()` does `getItemById` + `getReferencesFrom`/`getReferencesTo` per node, plus `getReferencesTo` per ingredient/result.
- `ValidationEngine.checkReferences()` runs 2–3 queries per reference (`checkReference`, `getSimilarItems`, `describeReference`).
*Fix:* batch with `IN (...)` lookups and memoize per-run.

**[Medium] `src/database/DatabaseManager.ts` `transaction()` + parser `extractReferences` — async work inside a sync SQLite transaction.**
`BEGIN ... await fn() ... COMMIT` wraps an `async` callback. It is safe **only because** `addReference()` is internally synchronous; if any real async I/O is added inside the transaction, the single `node:sqlite` connection could interleave another request's statements between `BEGIN` and `COMMIT` (nested-transaction errors / partial commits). *Fix:* keep transaction bodies purely synchronous, or document/enforce the constraint.

**[Low] `admin/bridge.mjs` — two lifecycle weaknesses.**
`setInterval(telemetry, 2000)` calls an `async` function with no `.catch` (potential unhandled rejection), and `restartCount = 0` is reset on any stdout data, defeating the 5-restart cap if the child prints output before crashing.

**[Low] `src/index.ts` — no graceful shutdown.**
The main/knowledge DBs are never explicitly closed on SIGINT/SIGTERM; correctness relies on process exit. Add a shutdown hook calling `dbManager.close()` / `knowledgeBaseManager.close()`.

**[Info] `src/parsers/ProjectZomboidParser.ts` `parseScriptFile()`** — items are committed in one transaction and references in a *separate* one; a crash between them leaves items without references (references are intentionally non-fatal, so this is acceptable, just note it).

**[Info] All `node:sqlite` calls are synchronous** and block the event loop per query — inherent to the API and fine for a single stdio client, but relevant while the bridge polls the same DB.

---

## Code Quality and Architecture

**[Medium] Pervasive `any` under `strict: true`.**
`index.ts` formatters (`formatSearchResults(results: any[])`, `formatValidationResults(validation: any)`, `formatModAnalysis(analysis: any)`, …), `ProjectZomboidParser.parseBlock(blockInfo: any)`, `accumulatedItems: any[]`, `ValidationEngine.validateBlock(block: any)`, `ModAnalyzer` block params. This defeats much of the strict compiler config. *Fix:* define shared `FormattedX`/`Block` interfaces.

**[Medium] `src/index.ts` is a monolith.**
All 16 tool handlers, all `format*` helpers, resource handlers, and prompt handlers live in one ~large file. *Fix:* split into `tools/`, `formatters/`, `resources/`, `prompts/`.

**[Low] Repeated deep-clone idiom.**
`JSON.parse(JSON.stringify(...))` appears in many handlers to satisfy `exactOptionalPropertyTypes`. *Fix:* centralize in a helper or use `structuredClone`.

**[Low] `ScriptGenerator.getTemplate()` — substring-based template matching.**
`templateKey.includes(cat)` is fragile: category `"item"` resolves to `food_item`, and `ranged_weapon` can never be chosen by category. *Fix:* an explicit category→template map.

**[Low] Duplicated brace validation.**
`ValidationEngine.validateSyntax()` re-implements brace counting independently of the shared `scanScriptBlocks()` — exactly the drift the shared scanner was created to prevent. *Fix:* derive structure errors from scanner output.

**[Low] `ModAnalyzer.checkSemanticIssues()` global-var heuristic is noisy.**
It flags any top-level assignment not preceded by `local`, including intentional globals; expect false positives. Consider a whitelist or local-only detection.

**[Info] `KnowledgeBaseManager.collectMdFiles()` hard-codes skip dirs** (`wiki`, `AdvancedGenerators`) and `README.md`; make configurable.

**[Info] `index.ts` `formatKbSearchResults()`** — the `snippet.replace(...)` appears to be a no-op as written; verify intent.

---

## Strengths

- **Centralized, tested path-traversal defense.** `PathManager.validateInputPath()` (absolute, no `..`, no NUL, existence check) is consistently applied to `analyze_mod`, `parse_game_files`, `index_knowledge_base`, and `export_mod_script`, and the export filename is sanitized; integration tests assert traversal rejection.
- **Injection-safe data layer.** Fully parameterized SQL, shared `sanitizeFtsTerms()`, and FTS `MATCH` built only from sanitized terms; WAL mode and `PRAGMA foreign_keys=ON` are set, with an FTS health/rebuild guard on startup.
- **Deliberate anti-drift architecture.** Single sources of truth — `blockTypes.ts`, `scriptScanner.ts` (parser + validator), `scriptSyntax.ts` (parser + validator + generator) — with comments explaining prior audit fixes.
- **Correct MCP stdio hygiene.** Pino logs to stderr only (`logger.ts`), keeping stdout clean for JSON-RPC; server version read from `package.json` instead of hard-coded.
- **Real hermetic integration tests** over actual stdio with temp-dir isolation and SQLite-lock-safe teardown; the dashboard bridge binds loopback-only.

---

## Summary Table

| Severity | Area | Finding | Location |
|---|---|---|---|
| High | Correctness | Negative numeric values parsed as strings (breaks validation/balance) | `src/utils/scriptSyntax.ts · parseScriptValue()` |
| High | Correctness | Lua `if`/`end` count mismatch → guaranteed false `SEMANTIC_ERROR` | `src/analyzers/ModAnalyzer.ts · checkSemanticIssues()` |
| Medium | Security (verify) | Workshop client unverified: steamcmd invocation / SSRF | `src/workshop/*` via `src/index.ts · workshop_download/analyze` |
| Medium | Correctness/Design | `workshop_analyze` writes mod rows into vanilla DB | `src/index.ts · workshop_analyze` |
| Medium | Data integrity | `references` has no UNIQUE index; `INSERT OR IGNORE` no-op → duplicates | `src/database/DatabaseManager.ts · addReference()` |
| Medium | Correctness | Fixing fixer material drops `Module.` prefix | `src/parsers/ProjectZomboidParser.ts · parseFixingProperty()` |
| Medium | Correctness | `mod.info require` misreported as items; `versionMin` never enforced | `src/analyzers/ModAnalyzer.ts · analyzeCompatibility()` |
| Medium | Concurrency | Sync fs blocking + per-file transactions in KB indexing | `src/knowledge/KnowledgeBaseManager.ts · indexDirectory()` |
| Medium | Performance | N+1 DB queries in reference validation & recipe-chain walk | `ValidationEngine.validateProperty/checkReferences`, `RecipeAnalyzer.analyzeChain` |
| Medium | Concurrency | Async callback inside sync BEGIN/COMMIT transaction (fragile) | `DatabaseManager.transaction()` + parser `extractReferences` |
| Medium | Quality | Pervasive `any`; `index.ts` monolith | `src/index.ts`, parsers, analyzers |
| Low | Security | `shell: true` in bridge spawner (hard-coded args) | `admin/bridge.mjs · spawnChild()` |
| Low | Security | No auth on loopback `/rpc` & `/api/restart` | `admin/bridge.mjs` |
| Low | Security | Unbounded zod inputs (`z.record(z.any())`, large strings) | `src/index.ts` schemas |
| Low | Security | `validateInputPath` no symlink/UNC containment | `src/utils/PathManager.ts · validateInputPath()` |
| Low | Correctness | Block comments (non-`*` lines) not skipped by scanner | `src/utils/scriptScanner.ts` |
| Low | Correctness | Env install override checked last | `src/utils/PathManager.ts · detectProjectZomboidPath()` |
| Low | Correctness | Evolved-recipe references never extracted | `src/parsers/ProjectZomboidParser.ts · extractReferences()` |
| Low | Correctness | Deprecated-API scan includes comments | `src/analyzers/ModAnalyzer.ts · checkDeprecatedAPI()` |
| Low | Concurrency | Unhandled `telemetry` promise; `restartCount` reset defeats cap | `admin/bridge.mjs` |
| Low | Quality | Deep-clone idiom; substring template match; duplicated brace check | `index.ts`, `ScriptGenerator.getTemplate`, `ValidationEngine.validateSyntax` |
| Info | Security | SQL/FTS injection well-mitigated (LIKE wildcards unescaped in suggestions) | `DatabaseManager`, `fts.ts` |
| Info | Quality | Hard-coded KB skip dirs; no-op snippet replace; no graceful shutdown | `KnowledgeBaseManager`, `index.ts` |

=== LOCAL AGENT INSTRUCTIONS ===

1. **Files to modify:** none yet — this is an audit/reporting task only.
2. **New files to create:** none.
3. **Exact integration order:** N/A (no code changes produced).
4. **Commands the local agent should run:** none required. If the user wants fixes applied in a follow-up, start with the two High-severity items: `src/utils/scriptSyntax.ts · parseScriptValue()` (allow negative numbers) and `src/analyzers/ModAnalyzer.ts · checkSemanticIssues()` (remove/replace the broken `if`/`end` check).
5. **Expected build/test results:** N/A for this response. After any future fix: `npm run build`, `npm test` (127 tests, 11 suites green), `npm run lint`.
6. **If build fails:** send back the full `tsc` error output and the failing `node --test` assertion lines.
7. **Additional files to upload for the next iteration:** to confirm/resolve the Medium security finding, provide `src/workshop/SteamWorkshopClient.ts` and `src/workshop/SteamCmdDownloader.ts`; also `AUDIT_2026-08-06.md` and `freebuff_review.md` if you want me to cross-check against the existing fix log.

---

## Workshop Supplement (src/workshop/*)

## Supplement audit — `src/workshop/*` only

[High] `src/workshop/SteamCmdDownloader.ts:~154-215` - `download()` accepts an unvalidated `id` and uses it in `join(workshopDir, id)`, the temp-dir name, and SteamCMD arguments. A value like `../../evil` can escape the intended directories; a value beginning with `+` could be treated as a SteamCMD option. Fix: validate `id` as `^\d{6,15}$` inside `download()` (or parse via `parseWorkshopInput()` then re-check numeric), and resolve/contain paths:
```ts
const dest = path.resolve(workshopDir, id);
if (!dest.startsWith(path.resolve(workshopDir) + path.sep)) throw ...
```

[Medium] `src/workshop/SteamCmdDownloader.ts:~213,310` - `STEAMCMD_PASS` becomes a process argument (`+login user pass`). On multi-user systems this is visible via process listings/audit logs. Fix: default to anonymous and refuse password login unless an explicit opt-in flag is set; document the risk; prefer cached/interactive Steam login mechanisms if available.

[Medium] `src/workshop/SteamCmdDownloader.ts:~209` - temp dir is predictable and not securely created: `.steamcmd-tmp-${id}-${now}`. A local attacker who can predict the name could pre-create a symlink/directory. Fix: create it with `mkdtempSync(join(dirname(resolvedWorkshopDir), ".steamcmd-tmp-"))` and set restrictive permissions where possible.

[Medium] `src/workshop/SteamCmdDownloader.ts:~87-106` - default `spawn()` runner has no timeout and accumulates unbounded stdout/stderr. A hung SteamCMD process can stall the server; huge output can exhaust memory. Fix: add an abort/kill timeout and cap captured output (e.g. 1 MB), truncating safely.

[Medium] `src/workshop/SteamCmdDownloader.ts:~360` - `dirSize()` uses `statSync()`, which follows symlinks. Downloaded workshop content is untrusted; symlink cycles or links outside the directory can cause hangs, inflated sizes, or reads outside the mod folder. Fix: use `lstatSync()`, skip symlinks, and cap depth/total bytes.

[Low] `src/workshop/SteamCmdDownloader.ts:~282` - cleanup `rmSync(tempDir, ...)` in `finally` can mask the original error if cleanup fails. Fix: wrap cleanup in `try/catch` and log cleanup failure without throwing.

[Low] `src/workshop/SteamWorkshopClient.ts:~305` - cache is written with default permissions and non-atomically. Fix: write to a temp file in the same directory, use mode `0o600`, then `renameSync()`.

[Low] `src/workshop/SteamWorkshopClient.ts:~330` - no direct SSRF because hosts are fixed, but `fetch` follows redirects by default and returned `thumbnailUrl`/`fileUrl` are not scheme-validated. Fix: use `redirect: "error"` for Steam metadata requests and ensure consumed URLs are `https:` before exposing/fetching them later.

[Low] `src/workshop/SteamWorkshopClient.ts:~110,280` - cache entries are trusted without schema validation and are never pruned. Fix: validate `data` shape and `cachedAt` type on load; prune expired entries occasionally.

[Low] `src/workshop/SteamWorkshopClient.ts:~170,135,131` - real bugs/error handling: `workspaceAccepted: d.workshop_accepted !== false` treats missing as true; `search()` throws on zero results even when “no results” is valid; `resolveWorkshopDir()` uses `indexOf("steamapps")` instead of path segments. Fix: use `Boolean(d.workshop_accepted)`, return `[]` for legitimate zero-result searches, and split/compare path segments.

Overall audit conclusions do not change; these are additional hardening/input-validation issues, not architecture-breaking flaws.

=== LOCAL AGENT INSTRUCTIONS ===

1. Files to modify: `src/workshop/SteamCmdDownloader.ts`, `src/workshop/SteamWorkshopClient.ts` (only if implementing fixes).  
2. New files to create: none.  
3. Exact integration order: downloader input/path hardening → temp-dir hardening → spawn timeout/output cap → client cache/redirect hardening.  
4. Commands the local agent should run: project typecheck/lint/unit tests.  
5. Expected build/test results: no new failures; workshop tests may need updates for stricter ID validation.  
6. If build fails, send back: compiler/lint error text and failing test stack traces only.  
7. Additional files needed: none unless tests reference workshop fixtures.