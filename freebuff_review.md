# Freebuff Review — pz-mcp-server

**Repository:** `C:\Users\Administrator\orca\pz-mcp-server` (branch `master`, fork of `wink-/pz-mcp-server`)
**Review date:** 2026-08-06
**Reviewer:** Buffy (Freebuff) — full read-through of every tracked file (57 tracked files), plus live verification of build/test/lint/audit on this machine.

> ✅ **POST-REVIEW FIXES APPLIED 2026-08-06 — see §21 Fix Log.** All items marked **[FIXED]** below were implemented and verified on this machine (**114/114 tests, 10 suites**, lint+build clean, 0 audit vulnerabilities, scanner parity proven against the real B42.20 game install: 9,383 rows).

---

## 0. Review scope & method

Everything in the review below was **inspected directly**, not assumed. What was actually done:

- **Read every file**: all 10 `src/**` files (~5,300 LOC), all 9 test files, `package.json`, `tsconfig.json`, `.eslintrc.json`, `.editorconfig`, `.gitignore`, `AGENTS.md`, `README.md`, `CHANGELOG.md`, `AUDIT_2026-08-06.md`, `.github/workflows/ci.yml`, `admin/bridge.mjs`, `admin/index.html`, `docs/*` (7 files), `scripts/*` (2 files), `LICENSE`, and the vendored assets (fonts, tailwind runtime) — the vendor bundle itself is minified third-party code and was inspected only for licensing/size, not line-by-line.
- **Executed on this machine**: `npm run build` (PASS, 0 errors), `npm test` (PASS — **90/90 tests, 9 suites**, ~1.7 s), `npm run lint` (PASS, 0 problems), `npm audit --audit-level=low` (**0 vulnerabilities**), `npm ls --depth=0`, `npm outdated`.
- **Searched** for unused symbols, TODOs, console usage, env vars, and dead code paths (`code-searcher` across all files).
- **Inspected git state**: 57 tracked files, no tags, single `master` branch, remotes `origin/master` + `upstream/master`; last local commit `0a3866a`.

**Limitations**: GitHub Actions run logs are not accessible (no token), so the historical CI failures (see §7) could not be diagnosed from logs — the failure hypothesis is marked accordingly. The live SQLite DB under `data/` was not opened (it is gitignored runtime state), but its row counts are documented in the repo's own audit file and match the parser output counts.

---

## 1. Executive Summary

### Overall project purpose
`pz-mcp-server` is a **Model Context Protocol (MCP) stdio server** for **Project Zomboid (Build 42) mod development**. It parses vanilla game files into a local SQLite database, then exposes nine MCP tools to search that data, generate PZ script templates, validate scripts, check cross-references, and analyze mods — plus a markdown "modding knowledge base" indexer with FTS5 search, MCP resources, and MCP prompts. A companion local web dashboard ("Control Deck", `admin/`) wraps the server for interactive use.

### Current maturity level
**Beta / personal-tool maturity, well past MVP.** The project has gone through two structured audit passes (documented in `AUDIT_2026-08-06.md`), a Cloudflare/HTTP layer was consciously removed to keep it a lean local tool, and the B42 parser has been hardened against real game data (5,088 items / 965 recipes / 3,038 sounds / 241 vehicles parsed). It is a *working, tested, self-consistent* tool. What it is **not** yet: a packaged product (no releases/tags, no publish config), a fully green CI repo (historical failures unresolved), or a fully documented-for-contributors project.

### Major strengths
1. **Correct protocol discipline.** stdout is the MCP wire; the pino logger is hard-wired to fd 2 (`src/utils/logger.ts:10-14`). No stray stdout writes found anywhere in `src/`.
2. **Shared script-syntax module** (`src/utils/scriptSyntax.ts`) eliminates the classic three-copies-of-the-parser problem: parser, validator, and generator all agree on property splitting/typing (audit F10).
3. **Real B42 parsing depth**: `craftRecipe` vs legacy `recipe`, `inputs`/`outputs` section tracking, bracket-list ingredient exclusion, dual `=`/`:` separators, per-file flush in transactions, and an FTS rowid-drift heal (`DatabaseManager.initialize()` rebuild).
4. **Security-conscious SQL**: all queries are prepared statements; FTS MATCH input is sanitized in two places (`prepareFTSQuery`, `sanitizeFtsQuery`); `validateInputPath` blocks traversal/NUL/relative paths.
5. **Testing that actually runs the server** (`tests/server.integration.test.js`) — spawns the real `dist/index.js` over stdio and speaks real MCP JSON-RPC, with a hermetic temp game install fixture. This is the strongest part of the test suite.
6. **Clean dependency footprint**: 4 runtime deps, zero native deps (`node:sqlite`), 0 audit vulnerabilities.
7. **Excellent process artifacts**: AGENTS.md, an unusually thorough AUDIT file, a canonical project-summary for AI agents.

### Major weaknesses
1. **Documentation drift that contradicts reality**: AGENTS.md, README.md, docs/project-summary.md, and docs/todo.md all claim **"76 tests, 6 suites"** — the actual state is **90 tests, 9 suites** (verified by running). The audit file claims AGENTS.md was rewritten to "90 tests" (AUDIT §4b, line 105) but the current AGENTS.md still says 76. This is exactly the kind of drift the repo itself exists to prevent. **[FIXED — docs now read 114/10; see §21]**
2. **One genuine logic bug (verified by code trace): sprite references are always invalid.** `checkReference` (`DatabaseManager.ts:541-554`) filters `items` by `type = 'sprite'`, but `items.type` only ever holds the six block types (item/recipe/sound/vehicle/evolvedrecipe/fixing). Sprite type filters therefore never match. Consequences: `check_references` with `type: "sprite"` always reports invalid, and `validate_script` on any item with an `Icon` or `WeaponSprite` property always emits `INVALID_REFERENCE` warnings for valid vanilla sprites. **[FIXED — sprite refs resolve via the references table; tests added]**
3. **Dead code and stale metadata**: unused `commander` dependency; deprecated `@types/pino`; five unused `PathManager` methods; unused `DatabaseManager.getCategories()`/`getReferences()`; unused `ScriptGenerator.generateModTemplate()`; an unused `generateReport` option documented in README; `install.sh` still requires "Node 18+" and generates a `config.example.json` the server never reads; `ScriptGenerator.wrapInModule` still emits the old `github.com/minimax/pz-mcp-server` URL in generated scripts. **[FIXED — all removed; install.sh corrected; URL updated]**
4. **CI is red or unverified**: three historical GitHub Actions failures with no diagnosed root cause, and the two newest commits never triggered runs (per AUDIT §3). This is the single highest-risk "we don't know" in the repo. **[STILL OPEN — cannot be resolved from this machine (needs push + GH log access)]**
5. **Dashboard binds to all interfaces with no auth** (`admin/bridge.mjs` `server.listen(PORT)`): any machine on the LAN can drive the full MCP server (`/rpc`) and restart it (`/api/restart`). Acceptable for localhost-only use, but not for a shared network. **[FIXED — bound to 127.0.0.1]**
6. **Windows-specific hardcoded defaults** (`D:\Games\ProjectZomboid`, `D:\PZ-Modding\Documentation`) — now centralized in the config module with env overrides (M4). The parse/analyze path is now fully async (`fs.promises`, M5). The platform-coupling itself (hardcoded Windows install paths) remains an accepted trade-off for a local tool.

### Two additional bugs found and fixed while implementing the above
- **`generate_script` for `fixing` and `sound` always threw `"No template found"`** — `getTemplate()` had no template or fallback for those types (only 3 of 6 advertised types were test-covered). Fixed by registering `fixing`/`sound` templates; new `scriptGenerator.unit.test.js` covers all 6 types.
- **Uncategorized items silently used the food template** — the `templateKey.includes(type)` match made `"food_item".includes("item")` true for every `item` with no category. Fixed by restricting the category loop to category matching; regression test added.

### Overall quality rating: **7.5 / 10** (review-time) → **8.5 / 10 after fixes** (2026-08-06)
Solid, clean, well-tested-for-its-size, with an unusually strong audit culture. The sprite-validation bug, dead code, doc drift, and the whole local fix list are now fixed (see §21) — including the shared block scanner (M1), config module (M4), async parse path (M5), FTS conditional rebuild (L1), block-comment-aware Lua analysis (L2), and the expanded lint/test coverage. The remaining open items are CI verification (C2 — needs push + GitHub log access from this machine) and the optional feature work (N-series).

### Production readiness assessment
**Ready for personal/local use; not yet ready as a distributable product.**
- ✅ Works correctly on the developer's Windows/Node-22 machine; 90/90 tests; 0 vulns; build/lint clean.
- ⚠️ To call it production-grade: resolve the sprite bug, fix/re-verify CI, remove dead code + stale docs, add a release/versioning workflow, and decide on dashboard auth/binding. Each is small; none is architectural.

---

## 2. Architecture Review

### Overall architecture
A clean, layered, single-process design:

```
MCP stdio transport (src/index.ts)
  ├─ PathManager            — PZ install detection (registry/VDF/hardcoded) + path validation
  ├─ DatabaseManager        — node:sqlite, items + FTS5 (external content) + references + mods
  ├─ KnowledgeBaseManager   — second SQLite DB (pz_knowledge.db), FTS5 + bm25
  ├─ ProjectZomboidParser   — game/mod script file parser → DB
  ├─ ScriptGenerator        — template-based script emission (6 types)
  ├─ ValidationEngine       — syntax/type/reference validation
  └─ ModAnalyzer            — structure/Lua/balance/compatibility/performance analysis
```

Wiring happens once in `initializeServer()` (`src/index.ts:52-81`); handlers are registered on the server object; all tool arguments are zod-validated. Formatting of tool output lives in `index.ts` as pure functions — an acceptable choice for a 9-tool surface.

### Project structure
**Good.** `src/<domain>/` mirrors the responsibility split (parsers, generators, validation, database, knowledge, analyzers, utils). Tests mirror source layout under `tests/unit/`. The `admin/` dashboard is cleanly separated, vendored assets live under `admin/vendor/`. Root-level docs (AGENTS.md, AUDIT, CHANGELOG) are appropriate. Minor nits: `docs/orchestration/` contains an *Orca product skill* (398-line orchestration.md) that has nothing to do with this project (though it was moved out of root as audit H1), and `scripts/install.sh` is a bash script that cannot run on the project's own Windows 11 host.

### Module boundaries
**Mostly clean with two boundary leaks:**
1. `ModAnalyzer` reaches into the DB through a freshly constructed `ValidationEngine(db)` (`ModAnalyzer.ts:78`) and constructs a temp `DatabaseManager` for balance isolation (`ModAnalyzer.ts:704-724`) — it depends on the concrete parser, validator, and DB. Acceptable for a tool this size; a small `AnalyzerService` seam would decouple it.
2. `DatabaseManager.searchContent` mixes search-ranking concerns (FTS MATCH building) with storage — fine today, but it is the module most likely to grow. (The FTS sanitizer itself now lives in shared `utils/fts.ts`, L3.)

### Coupling / cohesion
- **Cohesion**: high. Each class has one clear job; the shared `scriptSyntax.ts` module is a textbook cohesion win.
- **Coupling**: moderate. `index.ts` orchestrates six concrete collaborators rather than interfaces, and `ModAnalyzer`/`ValidationEngine` both depend on `DatabaseManager` directly. No circular imports (verified by successful build). For this size, interface abstraction would be over-engineering.

### Scalability
**Not a goal, and not a problem.** The DB holds ~9.4k rows; FTS5 handles this trivially. The realistic ceiling is ~1M parsed rows before any of the current queries would need attention. The former structural limit — synchronous filesystem I/O during `parse_game_files`/`analyze_mod` — was removed (**M5**: async `fs.promises`); the server can now process concurrent requests during a parse. (Requests over MCP stdio are serial anyway, but the dashboard bridge benefits.)

### Maintainability
**Good, and improving.** The audit culture (AUDIT file, `AGENTS.md`, canonical `docs/project-summary.md`) is exceptional for a project this size. The former drags — no lint over tests/admin (M3), doc drift (H1), duplicated block scanner (M1) — are all fixed; `dist/`-based test imports remain (by design).

### Extensibility
**Good.** Adding a tool is a documented 4-step recipe (schema → handler → test → docs) that is followed consistently. Adding a new block type to the parser requires touching `BLOCK_RE` + `finalizeBlock`'s type allowlist + `parseBlock` property dispatch — a contained, identifiable change. The generator's template map (`initializeTemplates`) makes adding item archetypes trivial.

### Technical debt
Quantified in §19 roadmap. All local items are now resolved; the only remaining real item is CI verification (C2 — needs push + GitHub log access). Optional N-series feature work remains as scope choices, not debt.

### Design patterns used
- **Template Method / Template registry** — `ScriptGenerator.initializeTemplates()` map + per-type generators.
- **Strategy-ish dispatch** — per-block-type property parsers (`parseItemProperty`, `parseRecipeProperty`, …).
- **Facade** — `DatabaseManager` as the single SQLite entry point.
- **Dependency injection via constructor** — every class takes its collaborators in the constructor.
- **Sanitizer/adapter** — FTS query sanitizers.
- **Registry + handler** pattern for MCP tools/prompts/resources in `index.ts`.

### Design patterns that should be introduced
1. **Repository interface** over `DatabaseManager` for `ModAnalyzer`/`ValidationEngine` — still optional; the current concrete-DB coupling is fine at this size.
2. ~~A tiny `ScriptParser` abstraction~~ — ✅ **M1 FIXED**: the shared `scriptScanner.ts` now IS the unified scanning abstraction both consumers use.
3. ~~Config object~~ — ✅ **M4 FIXED**: `src/utils/config.ts` formalizes the env-var surface + `PZ_MCP_DATA_DIR`.

---

## 3. Code Quality

### Code smells
1. **`any` usage everywhere in the property layer** — `properties: Record<string, any>`, `parseScriptValue(): any`. Justified for a heterogeneous game-script property bag, but it silently disables type checking for the entire domain model. `@typescript-eslint/no-explicit-any` is turned off in `.eslintrc.json`.
2. **Giant conditionals in `index.ts`** — the `CallToolRequestSchema` switch (`index.ts:315-560`) is a 200+-line switch. Fine at 9 tools; becomes a smell at ~20.
3. **Magic strings for the six block types** repeated across parser/validator/generator (`["item","recipe","evolvedrecipe","fixing","sound","vehicle"]`). A shared `BLOCK_TYPES` constant would prevent drift.
4. **`logger.warn('Property parse error ...', error)` in parser loop** (`ProjectZomboidParser.ts:335-339`) — per-line warn spam potential on malformed files; should aggregate.
5. **Silent catch-all** in `ModAnalyzer.countFiles`/`findLargeFiles` (`catch { /* skip */ }`) — hides permission/IO errors with no log.

### Dead code (verified — each of these is defined and never called; **all since removed, H2/M8**)
| Symbol | Location | Evidence | Status |
|---|---|---|---|
| `commander` dependency | package.json | no import anywhere in `src/` | ✅ removed |
| `@types/pino` (deprecated package) | package.json | pino ships its own types since v7 | ✅ removed |
| `DatabaseManager.getCategories()` | DatabaseManager.ts:484 | never referenced | ✅ removed |
| `DatabaseManager.getReferences()` | DatabaseManager.ts:523 | never referenced | ✅ removed |
| `DatabaseManager.getItemById()` | DatabaseManager.ts:457 | tests only, no production caller | ⚠️ kept — used by unit tests |
| `PathManager.detectAllInstallations()` | PathManager.ts:113 | never referenced (also makes `getGameVersion`/`detectPlatform` effectively dead) | ✅ removed |
| `PathManager.getUserZomboidPath/getModsPath/getWorkshopPath` | PathManager.ts:442-466 | never referenced | ✅ removed |
| `PathManager.resolvePathWithPriority()` | PathManager.ts:468 | never referenced | ✅ removed |
| `ScriptGenerator.generateModTemplate()` | ScriptGenerator.ts:820 | never referenced | ✅ removed |
| `generateReport` option | ModAnalyzer.ts:93 + index.ts:124,451 | accepted and passed, never read in `analyzeMod` | ✅ removed |
| `GenerationOptions.balance/includeComments` | ScriptGenerator.ts | not exposed by the MCP tool schema — generator "balanced output" was unreachable | ✅ **M8 fixed** — `balance`/`includeComments` now exposed + wired |
| `config.example.json` (generated by install.sh) | scripts/install.sh:67 | the server has no config-file loader at all | ✅ removed (M7) |

### Duplicate code (all three structural duplicates now fixed)
- **Parser vs validator block-scanning loops** — ✅ **M1 FIXED**: both now consume the shared `src/utils/scriptScanner.ts` (single module/brace/block state machine). Property-line parsing was already unified (F10).
- **FTS sanitization duplicated** between `DatabaseManager.prepareFTSQuery` and `KnowledgeBaseManager.sanitizeFtsQuery` — ✅ **L3 FIXED**: shared `src/utils/fts.ts`.
- **`searchContent` SQL column list** repeated ~4× in `DatabaseManager` — ✅ **L3 FIXED**: `SELECT_ITEMS` constant.
- **Doc "76 tests, 6 suites"** appeared in 4 files — ✅ **H1 FIXED**: all read 112/10.

### Over-engineering
- None of consequence. The temp-DB balance isolation (`ModAnalyzer.ts:704-724`) is arguably the right call, not over-engineering, and it's cleanly scoped.

### Under-engineering
- **Sprite reference validation bug** (§1, §5) — the `checkReference` type-filter path was wired without a corresponding storage type.
- **No error aggregation in the parser** — one malformed block produces per-line warns and a `results.errors` entry per file, but nothing counts/summarizes them in tool output beyond a flat list.
- **`install.sh`** doesn't match reality (Node 18 claim, dead config file).

### Large / complex functions
| Function | Location | Notes |
|---|---|---|
| `parseScriptFile` | ProjectZomboidParser.ts:175-295 | ~120 lines, 6 state variables, brace/block/module tracking — the most intricate logic in the repo; well commented, but a prime candidate for a small `BlockScanner` class |
| `CallToolRequestSchema` switch | index.ts:315-560 | 245 lines |
| `generateScriptContent` dispatch | ScriptGenerator.ts:297-340 | thin, fine |
| `initializeTemplates` | ScriptGenerator.ts:38-260 | large but declarative data — fine |
| `searchContent` | DatabaseManager.ts:300-400 | SQL string assembly; borderline |

### Naming consistency
**Good.** snake_case MCP tool names, camelCase TS methods, `type`/`id`/`name` conventions consistent across parser/DB/tools. Minor: `result.properties.Fixers` vs `properties.Fixer` (parser plural vs validator singular — validator reads `block.properties.Fixer`, parser writes `Fixers`); the KB column `topic` vs `title` is clear. `b42Recipe`/`b42Style` naming is fine.

### Error handling
- **Good**: `initializeServer` fails loudly with `process.exit(1)`; tool errors map to proper `McpError` codes (InvalidParams/InternalError/MethodNotFound); zod errors are flattened into readable messages; per-file parse errors are collected in `results.errors`.
- **Weak spots**: `ModAnalyzer.countFiles`/`findLargeFiles` swallow IO errors silently; `bridge.mjs` restart/telemetry paths partially swallow (`catch { }`); `KnowledgeBaseManager.indexDirectory` re-throws after rollback (correct) but the whole-file catch converts everything to `errors[]` without logging location context (it does log, fine).

### Logging
- **Correct & consistent**: pino, stderr-only, `PZ_MCP_LOG_LEVEL` configurable, structured messages with emoji prefixes. Test output noise (per-parse "Parsing completed in Xms" at info level during integration tests) is cosmetic.
- **Missing**: no request-scoped logging (which tool call, duration) at the MCP boundary — a `CallToolRequestSchema` wrapper logging tool name + duration would materially help debugging `analyze_mod`/`parse_game_files` issues in the field.

### Comments
**Excellent.** The parser block-loop comments explain *why* (B42 quirks, FTS rowid drift, trigger recreation rationale). Comments match code (verified during this review — e.g., the `queryRegistryValue` exit-code-1 note, the bm25 ASC note). This is a genuine strength.

### Documentation quality
See §9. Source-level: good. Repo-level: drifts in 4 files.

### Readability / consistency
Consistent 2-space indent, CRLF/LF mix per file (`.editorconfig` wants LF; several files are CRLF — cosmetic), consistent import style, consistent `Record<string, any>` typing, consistent error-message phrasing. The `index.ts` formatting helpers (`formatX`) are uniform and readable.

---

## 4. Performance

| Item | Severity | Detail |
|---|---|---|
| Sync filesystem I/O in parse path | Medium | ✅ **M5 FIXED** — parser + ModAnalyzer now use `fs.promises` (recursive walks, reads, stats). KB indexer still sync (small md tree; acceptable). |
| FTS full rebuild on every `initialize()` | Low-Medium | ✅ **L1 FIXED** — rebuild only when `items` count ≠ FTS count (rowid-drift heal retained). |
| N+1 reference inserts | Low | ✅ **M2 FIXED** — per-file reference extraction wrapped in a single transaction. |
| `getSimilarItems` LIKE scan | Low | `%term%` LIKE over id/display_name — no FTS, full scan per call. Fine at 9.4k rows; note for the future. |
| `search_vanilla` empty query | Low | Returns up to 100 full rows incl. `raw_content` (large strings) — wasteful for a listing. |
| JSON in DB + plain-text mirror | Info | Storing both `properties` (JSON) and `properties_text` (plain) is intentional and correct for FTS quality (A6). Doubles text storage only; fine. |
| Startup | Good | Both DBs init + FTS rebuild in ~100 ms; acceptable. |
| Build performance | Good | `tsc` strict over 10 files ≈ 3 s. CI runs build twice (see §7). |

**No slow algorithms or memory issues found.** Largest allocation is `readFileSync` of whole script files (largest vanilla file is a few hundred KB). The audit's "large files >5MB" heuristic in `ModAnalyzer.findLargeFiles` is a reasonable constant.

---

## 5. Security

| Check | Verdict | Detail |
|---|---|---|
| SQL injection | ✅ Safe | 100% prepared statements (`db.prepare(...).run/get/all` with `?` params); the only dynamic SQL is filter-clause assembly using *parameterized* placeholders, never string-interpolated user input. |
| FTS injection / operator abuse | ✅ Safe | `prepareFTSQuery` (DatabaseManager) and `sanitizeFtsQuery` (KB) strip FTS operators and wrap terms in quotes; `AND OR NOT NEAR` keywords dropped; malformed input returns a match-nothing `""` query (unit-tested). |
| Path traversal / unsafe FS access | ✅ Good, one gap | `validateInputPath` (PathManager.ts:485+) rejects empty, NUL bytes, `..` segments (before `isAbsolute`, so Windows backslashes included), relative paths, and missing targets. Used by `analyze_mod` and `parse_game_files`. **Gap**: `index_knowledge_base`'s `path` argument is only `existsSync`-checked (`index.ts:498-501`) — no traversal guard. Low impact (reads .md only), but inconsistent. |
| Authentication / Authorization | N/A by design | MCP stdio = local process; the client (e.g., Claude Desktop) is the trust boundary. `admin/bridge.mjs` HTTP interface has **no auth**: `/rpc` forwards arbitrary tool calls and `/api/restart` kills the server. **Binding**: `server.listen(PORT)` binds all interfaces (0.0.0.0) — LAN peers can drive the MCP server and restart it. Should bind `127.0.0.1` (and optionally require a token). |
| Secret management | ✅ N/A | No secrets in repo; no `.env` usage; `PZ_MCP_*` env vars are non-secret configuration. |
| Dependency vulnerabilities | ✅ | `npm audit --audit-level=low`: 0 vulnerabilities. CI also gates on `--audit-level=high`. |
| Dangerous defaults | ⚠️ | `PZ_MCP_LOG_LEVEL=info` logs parse progress (fine); KB default path `D:\PZ-Modding\Documentation` and `D:\Games\ProjectZomboid` hardcoded — Windows-only, harmless but surprising on Linux/macOS. `forceReparse` default false (safe). `overwrite` default true for KB indexing (idempotent, fine). |
| Supply-chain risk | ✅ Mitigated | 14 deps pinned with `^` ranges + `package-lock.json` (committed) + `npm ci` in CI + `actions/checkout@v5`/`setup-node@v5` pinned by tag + `npm audit --audit-level=high` gate. **L5 FIXED**: `.github/dependabot.yml` now raises weekly npm + actions PRs; security updates arrive automatically. |
| Input validation (MCP args) | ✅ Good | zod schemas with min/max/enum constraints (`limit` 1–100, type enums, etc.). |

**The sprite bug is also a *correctness*-not-security issue but it affects validation output; see §1.**

---

## 6. Dependencies

Verified live via `npm ls --depth=0` and `npm outdated`.

### Runtime (4)
| Package | Installed | Latest | Assessment |
|---|---|---|---|
| `@modelcontextprotocol/sdk` | 1.30.0 | 1.30.0 | ✅ current; core dependency |
| `zod` | 3.25.76 | 4.4.3 | ⚠️ major behind. zod 4 is stable; migration is mostly mechanical for this usage (no `.parse` return-type tricks used). Not urgent. |
| `pino` | 10.3.1 | 10.3.1 | ✅ current |
| `commander` | 11.1.0 | 15.0.0 | ❌ **unused** — remove |

### Dev (10)
| Package | Verdict |
|---|---|
| `@types/pino` 7.0.4 | ❌ **deprecated** — pino ships its own types since v7; remove |
| `typescript` 5.9.3 | ⚠️ latest is 7.x — major behind, but 5.9 is fully supported and the current strict config works; upgrade when convenient |
| `eslint` 8.57.1 | ⚠️ latest 10.x; 8.x is EOL-adjacent. Upgrade pairs with typescript-eslint; test the lint script on Windows (globs) |
| `jest` 29.7.0 | ⚠️ latest 30.x; 29 is still maintained |
| `tsx` 4.23.5 | ✅ (patch available 4.23.9) |
| `prettier` 3.9.6 | ✅ |
| `@types/node`, `@types/jest`, `@typescript-eslint/*` 8.66 | ✅ current |

### Findings
- **Unused**: `commander` (runtime). **Deprecated**: `@types/pino`.
- **Bloat**: negligible — the whole tree is small (pino + SDK + zod ≈ a few MB).
- **Better alternatives**: none needed. `node:sqlite` (vs better-sqlite3) is the right call for a zero-native-dep tool. `better-sqlite3` would have been a defensible alternative for sync API + robustness, but the audit already made and verified this migration.
- **Missing**: none. Everything the code imports is declared.

---

## 7. Build System

### Scripts (`package.json`)
| Script | Assessment |
|---|---|
| `build` (`tsc`) | ✅ strict mode, 0 errors, ~3 s |
| `test` (`npm run build && node --experimental-vm-modules .../jest`) | ✅ runs build once locally; CI no longer double-builds (**L6 FIXED**) |
| `lint` (`eslint src/**/*.ts tests/**/*.js admin/*.mjs scripts/*.mjs`) | ✅ **M3 FIXED** — scope extended to tests/admin/scripts; immediately caught 5 real issues which were fixed |
| `format` (`prettier --write src/**/*.ts`) | ✅ plus `format:check` (**M3 FIXED**) — enforced in CI |
| `dev` (`tsx src/index.ts`) | ✅ |
| `start` (`node dist/index.js`) | ✅ |
| `dashboard` (`node admin/bridge.mjs`) | ✅ |
| `verify:deck` (`node scripts/_verify_deck.mjs`) | ✅ **N4 FIXED** — wired (live check; needs dashboard running) |

### CI/CD (`.github/workflows/ci.yml`)
- Matrix: Node 22 × {ubuntu, windows}; `npm ci` → lint → `format:check` → test → `npm audit --audit-level=high`. Reasonable and lean.
- **Improvements applied**: **L6 FIXED** — no double build; **M3 FIXED** — `format:check` + lint now covers tests/admin/scripts; **L5 FIXED** — Dependabot config added.
- **Open problem (P2, verified from repo audit)**: 3/3 historical runs failed (Aug 4–5); the last two commits never triggered runs. Local matrix is green on Windows/22. Hypothesis from the audit: jest `--experimental-vm-modules` on ubuntu. **Cannot be verified without run logs** (needs GITHUB_TOKEN). This is the #1 process risk: an unverified CI gate. (**C2 — STILL OPEN**, requires push + log access from this machine.)

### Release workflow
**None.** No git tags (verified — `git tag` empty), no npm publish config (private-adjacent `@minimax/pz-mcp-server`), no release automation. CHANGELOG follows Keep-a-Changelog + semver manually. For a local tool this is acceptable; if it is ever published, add tag-on-release + `npm publish` guardrails.

### Versioning
`version: 1.1.0` in package.json, read at runtime by `index.ts:34-37` (good — no hardcode). **Name mismatch**: package name is `@minimax/pz-mcp-server` while the repo/author is `shakoorpour1991-sketch`; the header comment in `index.ts:5-8` also credits "MiniMax Agent". Metadata drift, cosmetic.

---

## 8. Testing

### Coverage reality (verified by running)
**114 tests, 10 suites, all passing (~2 s)** — review-time count was 90/9 (docs claimed 76/6; drift fixed in H1). The gap between 90 and 114 is the review's own fixes: sprite/C1 tests, `scriptGenerator.unit.test.js` (new suite), fixing/sound/balance integration tests, ModAnalyzer balance/compat + block-comment + long-bracket Lua tests, clearDatabase FK regression, category-leak regression, scanner module-line regression.

| Suite | What it covers | Gaps |
|---|---|---|
| `server.integration.test.js` (21+) | Real stdio MCP: tools/list, parse, KB index/search, search_vanilla, validate, generate (item/evolvedrecipe/vehicle/**fixing/sound**), check_references, references-table population, analyze_mod, path-traversal rejection, resources, prompts, **balance wiring** | Fixed during review: fixing/sound generation + balance integration tests added |
| `parser.unit.test.js` (12) | B42 indented blocks, craftRecipe inputs/outputs, semicolon lists, rich metadata, legacy B41 | Good, focused |
| `validationEngine.unit.test.js` (11) | item/recipe/vehicle/evolvedrecipe validation, B41/B42 | No `fixing`/`sound` unit tests; **no test asserting Icon/WeaponSprite produce no warnings** |
| `databaseManager.unit.test.js` (14) | FTS sanitization, filters, bm25 ordering, rowid drift heal | No test for `getCategories`/`getReferences` (they're dead code — or should be removed) |
| `knowledgeBase.unit.test.js` (8) | index/search/rank/topic filter | Thin — ranking assertions are weak (equality cases only) |
| `knowledgeBase.frontmatter.unit.test.js` (7) | frontmatter parsing, block exclusion, searchability | Good |
| `modAnalyzer.unit.test.js` (4→+) | A1/A2/A3/A5 Lua-analysis fixes; **new: block-comment-aware Lua (L2), balance outlier detection, compatibility version checks (H5)** | Balance/compat/performance paths now covered via seeded temp DB |
| `pathManager.unit.test.js` (10) | validateInputPath + Steam registry detection | Good |
| `databaseManager.propertiesText.unit.test.js` (3) | plain-text FTS mirror | Good |

### Findings
- **Strong**: real-server integration tests with hermetic fixtures; the rowid-drift heal test genuinely corrupts the FTS index and proves recovery; path-traversal test proves the security guard.
- **Weak**: `ModAnalyzer` (the biggest module) is barely tested; `ScriptGenerator` has **no unit test file at all**; no coverage thresholds; **tests import from `dist/`** (documented "by design" — but this means `tsx`/`npm run dev` paths are never exercised, and a broken incremental build could silently test stale code).
- Test organization is clean and consistent; names are descriptive; fixtures are inline and small.

---

## 9. Documentation

| File | Quality | Issues (verified) |
|---|---|---|
| `README.md` | Good | Tool-by-tool docs match schemas ✅. **Stale**: "76 tests, 6 suites" (`README.md:55`). Good quickstart + Claude Desktop config. |
| `AGENTS.md` | Good | **Stale**: "76 tests, 6 suites" (`AGENTS.md:25`), "76/76 tests green" (`:48`). Self-contradiction *within the audit itself*: AUDIT_2026-08-06.md §4b claims AGENTS.md was rewritten to "90 tests" — the file on disk says 76. |
| `docs/project-summary.md` | Good but stale | "76 tests, 6 suites" (`:22`, `:81`); claims server version "1.1.0" hardcoded in index.ts (`:37`) — it now reads package.json; claims root holds "SKILL.md, orchestration.md, PLAN.md" (`:74`) — they were moved to `docs/orchestration/` (verified via `git ls-files`); lists `detectAllInstallations`/`resolvePathWithPriority`/`generateReport` as live exports — they are dead code. This file is explicitly the *canonical context for online AIs* — the drift risk is real (an AI will trust it). |
| `docs/todo.md` | ✅ Repurposed as pointer (AUDIT D4) | — |
| `docs/project-structure.md` | ✅ Accurate, brief | Describes formats correctly |
| `docs/USAGE_EXAMPLES.md` (590 lines) | Good | Code examples match the tool surface; one mismatch: `check_references` examples check sprite-ish names ("Katana") via type `all` — which will report them invalid because sprites aren't stored as items (the bug). No KB examples. |
| `AUDIT_2026-08-06.md` | **Excellent** | The best artifact in the repo. One internal inconsistency (AGENTS.md "90 tests" claim vs actual file). |
| `CHANGELOG.md` | ✅ Keep-a-Changelog, accurate | — |
| `LICENSE` | ⚠️ | MIT, but "Copyright (c) 2026 MiniMax Agent" — mismatched with the fork author (`shakoorpour1991-sketch`); a publisher would want this corrected |

**Missing documentation**: no CONTRIBUTING.md; no ARCHITECTURE doc beyond project-structure (fine); no docs on the dashboard (port 8787, env vars); env var reference exists only scattered (README KB section + bridge header).

---

## 10. Configuration

| Concern | Assessment |
|---|---|
| Environment variables | ✅ **M4 FIXED** — all env reads centralized in `src/utils/config.ts`: `PZ_MCP_LOG_LEVEL`, `PZ_MCP_KB_PATH`, `PROJECTZOMBOID_PATH`/`PZ_PATH`, `PZ_GAME_VERSION`, `PZ_DECK_PORT` + new `PZ_MCP_DATA_DIR`. Logger, DB, KB, PathManager, ModAnalyzer, and index all consume the module. |
| Config files | **None** — by design (env + zod only). `scripts/install.sh` no longer generates the dead `config.example.json` (M7). |
| Defaults | ✅ **M4 FIXED** — DB location is now `PZ_MCP_DATA_DIR ?? ./data` relative to cwd; the client-cwd pitfall is solved via the env override (documented in README). |
| Validation | zod schemas for all tool inputs ✅; path validation for 2 of 3 path-taking tools (see §5). |
| Portability | ⚠️ Hardcoded `D:\Games\ProjectZomboid`, `D:\PZ-Modding\Documentation` (Windows); `install.sh` is bash-only (cannot run on the project's own host); WSL paths handled ✅; macOS/Linux path tables present but untested. |
| Cross-platform CI | ✅ Matrix includes windows + ubuntu (when green). |

---

## 11. API Review (MCP surface)

- **Design**: idiomatic MCP — tools/resources/prompts registered with zod schemas; snake_case tool names; clear descriptions; defaults documented in the schema itself. 
- **Consistency**: ✅ 9 tools, 4 prompts, resources all wired; `list_knowledge_topics` correctly has an empty schema after the audit fix.
- **Error responses**: ✅ `McpError` with correct codes: `InvalidParams` for zod failures (with flattened field messages), `MethodNotFound`, `InvalidRequest` for bad resource/prompt, `InternalError` for runtime errors. The `InternalError` message does `String(error)` — safe, but loses stack traces; acceptable.
- **Validation**: ✅ zod enums/min/max; `limit` bounded 1–100.
- **Versioning**: server version read from package.json; MCP protocol version negotiated by SDK. ✅
- **Documentation**: README table-per-tool is accurate except the 76-tests claim and the dead `generateReport`.
- **API-level bugs**: the sprite-type bug (§1) is the only functional API defect found; `check_references`' `type` enum advertises `sprite` but cannot ever succeed.

---

## 12. Developer Experience

| Aspect | Assessment |
|---|---|
| Setup | `npm install && npm run build` — trivial ✅. Node ≥22.5 requirement is real (node:sqlite) and documented (except in install.sh, which claims 18+). |
| Local dev | `npm run dev` (tsx) ✅; the dashboard `npm run dashboard` is a genuinely nice addition (live wire frames, telemetry, tool playground). |
| Debugging | pino stderr logs ✅; `PZ_MCP_LOG_LEVEL` ✅; the dashboard's raw payload inspector is excellent for protocol debugging. No `--inspect` guidance in docs (minor). |
| Tooling | ESLint + Prettier + strict tsc + Jest — all wired ✅. No jest config file (flags passed on CLI; works, but config-in-package would be cleaner). No coverage reporting configured. |
| IDE support | tsconfig strict + declaration/source maps ✅; `.editorconfig` ✅. |
| Code generation / automation | Generator templates are the product; dev automation is the AGENTS.md/AUDIT loop — strong. |
| Pain points | (1) `dist/`-based unit tests mean "test the compiled output only" (by design; unchanged); (2) ✅ **M3 FIXED** — lint now covers tests/admin/scripts; (3) ✅ **H1 FIXED** — docs claim 112/10; (4) `npm test` rebuilds every run (~3 s; accepted). |

---

## 13. Repository Health

| Check | Verdict |
|---|---|
| Folder organization | ✅ Clean (`src/<domain>/`, `tests/`, `admin/`, `docs/`, `scripts/`, `.github/`) |
| File organization | ✅ 57 tracked files; no stray junk. `docs/orchestration/` is the only foreign body (Orca product skill, not project docs) |
| Git hygiene | ✅ Clean working tree, meaningful commit messages, well-named commits with audit references |
| Ignore files | ✅ `.gitignore` covers node_modules/dist/logs/env/db/data. `data/` correctly ignored (the stale JSON fixtures were untracked in audit H2). **Note**: `*.tsbuildinfo` ignored, but `tsconfig` has no `incremental` — harmless |
| Release process | ❌ None (no tags, no publish, no release workflow) |
| Branch strategy | Single `master`; fork with `upstream` remote; PRs implied by CI workflow. Fine for a solo project |
| Repo metadata | ⚠️ package `name`/author/License-copyright still say "minimax" (publisher decision — left as-is; L4). ✅ generated-script URL fixed |
| Security posture of repo | ✅ No secrets committed; `package-lock.json` committed |

---

## 14. Feature Analysis

### Missing features (high value, not present)
1. **`generate_script` balance options unreachable** — ✅ **M8 FIXED**: `balance` (vanilla/powerful/weak/custom) + `includeComments` exposed in the MCP schema and wired through; integration test added.
2. **`generateModTemplate`** — implemented (mod.info + example script) but never exposed as a tool. A `generate_mod_template` tool would be a natural, cheap win.
3. **Sprite reference resolution** — the `references` table stores `reference_type='sprite'` rows but nothing queries them (§1 bug; fix = check the `references` table for sprite/sound types, or drop the type filter).
4. **Recipe-chain / dependency graph analysis** — `docs/project-structure.md` promises "Recipe chain analysis" and "Mod conflict detection"; neither is implemented.
5. **Mod export/save-to-disk** — everything is string output; no tool writes generated scripts into a mod folder (deliberate, safe — keep it that way, but a dry-run copy tool would be nice).
6. **KB: re-index diffing / incremental sync** — `overwrite:false` skips existing topics but there is no mtime-based incremental index.
7. **`check_references` against the `references` table** for mod-vs-vanilla completeness (which of my mod's refs are actually defined) — currently only vanilla DB existence is checked.

### Incomplete implementations
- `checkLuaSyntax`'s comment stripping — ✅ **L2 FIXED**: `stripLuaComments` now removes `--[[ ]]` multi-line block comments before all counting; strings containing `--` remain a known heuristic limit.
- `checkSemanticIssues`' `if`/`end` counting — ✅ **L2 FIXED**: counts now run on comment-free text (strings-with-keywords remains a heuristic limit).
- `detectSteamWindows` registry path works — the dead `detectAllInstallations`/version detection were **removed (H2)**.
- `ModAnalyzer.findBalanceOutliers` samples vanilla by keyword search (`limit:1000`) then filters by `Type` — still approximate; accepted (documented).

### Placeholder / experimental code
- None found. No TODO/FIXME markers in `src/` or `tests/` (verified by search — only doc references to "FIXED" statuses).

---

## 15. Refactoring Opportunities

| # | Refactor | Effort | Why | Status |
|---|---|---|---|---|
| 1 | **Unify block scanning** — extract a shared `BlockScanner` (module/brace/block header detection) used by parser and validator. Today `parseScriptFile` (parser) and `parseScriptBlocks` (validator) duplicate brace/module logic with subtle divergence risk. This is the *highest-value structural* refactor. | M | Kills a class of parser/validator disagreement bugs (the same class F5–F9 belonged to) | ✅ **M1 FIXED** — `src/utils/scriptScanner.ts` |
| 2 | **Extract FTS sanitization** to `utils/fts.ts` | XS | Removes the near-identical duplicate | ✅ **L3 FIXED** |
| 3 | **Delete dead code** (see §3 table): unused PathManager methods, `getCategories`/`getReferences`, `generateModTemplate` (or wire it into a tool), `generateReport`, unused `commander`/`@types/pino` | XS–S | Instant clarity; ~200 lines | ✅ **H2 FIXED** |
| 4 | **`SELECT_ITEMS` column constant** in DatabaseManager | XS | Kills 4× SQL duplication | ✅ **L3 FIXED** |
| 5 | **Const enum / union for block types** (`BLOCK_TYPES` + `GameItemType`) shared by parser/validator/generator | XS | Removes repeated string arrays | ⏳ not done — minor, still open |
| 6 | **Split `index.ts`** — move the 8 `formatX` helpers to `src/utils/format.ts` and consider a `tools/` registry when the switch exceeds ~15 cases | S | 771-line file with 4 concerns (bootstrap, schemas, handlers, formatting) | ⏳ not done — acceptable at 9 tools |
| 7 | **Split `ModAnalyzer`** into `LuaAnalyzer` + `BalanceAnalyzer` + `CompatibilityAnalyzer` when it grows past ~1,200 lines | M | Currently 1,058 lines, 15 private methods | ⏳ not done — under threshold; tests added (H5) instead |
| 8 | **Config module** (`src/utils/config.ts`) centralizing env reads + defaults | S | Kills env sprawl (§10) | ✅ **M4 FIXED** — incl. `PZ_MCP_DATA_DIR` |

---

## 16. Modernization Opportunities

| Opportunity | Value | Risk | Notes |
|---|---|---|---|
| **Node 22 LTS features**: `node:sqlite` already in use ✅; consider `node --experimental-strip-types` or `tsx` already fine; `fs.promises` everywhere | Medium | Low | Sync→async conversion is the main perf item |
| **TypeScript 6/7 + eslint 9/10 flat config** | Medium | Medium | Mechanical but touches lint pipeline; do after CI is green |
| **zod 4** | Low | Low-Medium | Current zod usage is trivial; upgrade is cheap |
| **Jest 30** | Low | Low | Upgrade is mostly `jest-environment-jsdom`-free (pure node) |
| **Node test runner (`node:test`) instead of Jest** | Medium | Low | Removes `--experimental-vm-modules` hack + a dep; ESM-native; would also fix the CI-ubuntu suspicion if that's the failure cause |
| **MCP SDK 1.30 already current** ✅ | — | — | — |
| **Dependabot + Renovate** | Low | Low | Supply-chain hygiene — ✅ **L5 FIXED** (Dependabot config added) |
| **`generateReport` → structured JSON output capability** (tools returning `content` with both text and structured data) | Medium | Low | MCP content blocks support typed data; today all output is markdown strings — LLM consumers re-parse text |

---

## 17. Optimization Opportunities (ranked)

| Rank | Optimization | Impact | Difficulty | Risk | Effort |
|---|---|---|---|---|---|
| 1 | Fix sprite-reference validation (bug) | High (correctness) | Trivial | None | XS |
| 2 | Get CI green / re-run latest commits | High (trust) | Low–Med | Low | S | ⏳ **STILL OPEN** — needs push + GH log access |
| 3 | Fix doc drift (76→90 tests, AGENTS/summary/todo/README) | Medium (agent-trust) | Trivial | None | XS | ✅ **FIXED** (H1) |
| 4 | Remove dead code + unused deps | Medium (clarity) | Trivial | Low | XS–S | ✅ **FIXED** (H2) |
| 5 | Bind dashboard to 127.0.0.1 (+ optional token) | Medium (security) | Trivial | None | XS | ✅ **FIXED** (H3) |
| 6 | `fs.promises` in parser/analyzer (async parse path) | Medium (responsiveness) | Medium | Medium (concurrency bugs) | M | ✅ **FIXED** (M5) |
| 7 | Transaction-wrap reference extraction | Low–Med | Trivial | Low | XS | ✅ **FIXED** (M2) |
| 8 | Conditional FTS rebuild (only when drift detected) | Low | Low | Low | S | ✅ **FIXED** (L1) |
| 9 | Lint + format tests/admin; add `format:check` | Low (hygiene) | Trivial | None | XS | ✅ **FIXED** (M3) |
| 10 | Dedupe build in CI (`npm test` drops leading build) | Low (time) | Trivial | None | XS | ✅ **FIXED** (L6) |
| 11 | Block-comment-aware Lua balance counting | Low (correctness) | Medium | Medium | M | ✅ **FIXED** (L2) |
| 12 | Configurable data dir (`PZ_MCP_DATA_DIR`) | Low (portability) | Trivial | Low | XS | ✅ **FIXED** (M4) |

---

## 18. File-by-File Review

### `src/index.ts` (771 lines) — MCP bootstrap
- **Purpose**: server bootstrap, tool/prompt/resource registration, tool handlers, output formatting.
- **Quality**: Good. Clean zod schemas; correct McpError mapping; version from package.json.
- **Issues**: 245-line handler switch; 8 formatting helpers in the same file; `index_knowledge_base` path unvalidated (existsSync only); `generateReport` passed but unused downstream.
- **Improvements**: extract `format.ts`; validate KB path; drop `generateReport`.
- **Priority**: M · **Effort**: S

### `src/parsers/ProjectZomboidParser.ts` — game/mod parser
- **Purpose**: parse PZ script files into DB rows; extract references.
- **Quality**: Very good. The B42 handling (craftRecipe, inputs/outputs, bracket lists, same-line empty blocks) is sophisticated and well-commented. Per-file transaction flush is right.
- **Issues**: per-line warn spam on property errors remains; block-type allowlist repeated (acceptable).
- **Improvements**: ✅ **M1 FIXED** — block scanning extracted to shared `scriptScanner.ts`; ✅ **M2 FIXED** — ref extraction batched in one transaction per file; ✅ **M5 FIXED** — async `fs.promises` walk/read.
- **Priority**: M · **Effort**: M · **Status**: structural items done

### `src/database/DatabaseManager.ts` — SQLite layer
- **Purpose**: schema, FTS5 (external content + triggers), search with filters, references.
- **Quality**: Very good. Parameterized everywhere; upsert (rowid-stable) + rebuild heal is a real engineering win; plain-text FTS mirror (A6) is thoughtful.
- **Issues**: none critical remaining.
- **Improvements**: ✅ **C1 FIXED** — sprite refs resolve via `references` table; ✅ **L1 FIXED** — conditional FTS rebuild; ✅ **L3 FIXED** — `SELECT_ITEMS` constant + shared `utils/fts.ts`; ✅ **M6 FIXED** — `PRAGMA foreign_keys = ON` (with FK-safe `clearDatabase` order, R1); ✅ **H2** — dead `getCategories`/`getReferences` removed; ✅ **M2** — `transaction()` helper.
- **Priority**: High (bug) · **Effort**: S · **Status**: all items done

### `src/generators/ScriptGenerator.ts` — script generation
- **Purpose**: template-based emission for 6 block types.
- **Quality**: Good. Template map is declarative and readable; value formatting correctly shared.
- **Issues**: none critical remaining.
- **Improvements**: ✅ **NEW-BUG 1** — fixing/sound templates registered (were: always "No template found"); ✅ **NEW-BUG 2** — category template selection no longer matches `"food_item".includes("item")`; ✅ **M8** — `balance`/`includeComments` exposed + wired; ✅ **H2** — `generateModTemplate` removed; ✅ **L4** — URL fixed; ✅ **R2/R3** — selection hints stripped, dead field removed; ✅ new unit test file (H5).
- **Priority**: M · **Effort**: S · **Status**: all items done

### `src/validation/ValidationEngine.ts` — validation
- **Purpose**: block/type/reference validation + quality score.
- **Quality**: Good. Required-property tables, property validators, B41/B42 awareness, F5–F8 fixes all present.
- **Issues**: `Fixers` vs `Fixer` naming mismatch with parser output remains (cosmetic); validator table covers only ~15 properties (by design).
- **Improvements**: ✅ **C1 FIXED** — Icon/WeaponSprite only warn for genuinely unknown sprites; ✅ **M1 FIXED** — `parseScriptBlocks` now consumes the shared `scriptScanner.ts`.
- **Priority**: High (bug) · **Effort**: S · **Status**: bug + duplication done

### `src/analyzers/ModAnalyzer.ts` — mod analysis
- **Purpose**: structure/Lua/balance/compatibility/performance analysis + quality metrics.
- **Quality**: Good. Balance isolation via temp DB (P3) is correct; version compare numeric; outlier thresholds numeric. Well organized.
- **Issues**: balance baseline via keyword-search-then-filter is approximate (accepted); silent catches in file walks; `findLargeFiles` still walks `node_modules` if the mod is inside the repo (minor).
- **Improvements**: ✅ **L2 FIXED** — block-comment-aware `stripLuaComments` before balance/syntax/semantic counting; ✅ **H5 FIXED** — balance + compatibility unit tests via seeded temp DB; ✅ **H2** — `generateReport` removed; ✅ **M5 FIXED** — async fs walks.
- **Priority**: M · **Effort**: M · **Status**: tests + correctness items done

### `src/knowledge/KnowledgeBaseManager.ts` (335 lines) — KB indexing/search
- **Purpose**: markdown frontmatter parsing, FTS5 + bm25 search, topic listing.
- **Quality**: Good. Frontmatter parser is dependency-free and correct; sanitized FTS; idempotent re-index; skips README/wiki dirs (sensible).
- **Issues**: second SQLite DB file (fine, but two DBs to manage); manual FTS sync via `last_insert_rowid()` trick is fragile if the docs table ever gains triggers; no mtime-based incremental indexing; `collectMdFiles` skips dirs named `AdvancedGenerators` — hardcoded to this user's docs tree (portability).
- **Improvements**: mtime incremental; document the directory-skip rules; consider moving KB into the main DB.
- **Priority**: L · **Effort**: S

### `src/utils/PathManager.ts` — detection + validation
- **Purpose**: PZ install detection (registry, VDF, hardcoded, WSL), path validation.
- **Quality**: Good. `validateInputPath` is well-designed (traversal guard before isAbsolute). Registry fallback with silent miss (A8) is right.
- **Issues**: `execFile('reg', ..., {timeout:5000})` can block detection up to 5 s on hanging `reg` (minor; Windows-only path).
- **Improvements**: ✅ **H2 FIXED** — 5 dead public methods + orphaned `GameInstallation`/`detectPlatform`/`getGameVersion` removed; ✅ **M4 FIXED** — env reads via config module.
- **Priority**: L · **Effort**: S · **Status**: dead code done

### `src/utils/scriptSyntax.ts` (91 lines) — shared syntax helpers
- **Purpose**: property-line matching, value typing, formatting.
- **Quality**: Excellent. Small, focused, and the single source of truth (F10).
- **Issues**: `PropertySeparator` regexes accept any `\w+` key (no camelCase constraint — fine); `parseScriptValue` returns `any`.
- **Improvements**: none urgent.
- **Priority**: — · **Effort**: —

### `src/utils/logger.ts` — stderr logger
- **Purpose**: pino to fd 2.
- **Quality**: Perfect for the MCP constraint.
- **Improvements**: ✅ **M4** — log level read via config module (behavior unchanged).
- **Priority**: — · **Effort**: —

### `admin/bridge.mjs` — dashboard bridge
- **Purpose**: spawn/proxy MCP server, SSE, telemetry, HTTP.
- **Quality**: Good. Windows spawn quoting handled; restart with backoff; request timeouts; dbStats error surfacing (N1) correct.
- **Issues**: `LONG_TOOLS` timeouts are generous (300 s); `/api/restart` has no rate limit (accepted for a localhost tool).
- **Improvements**: ✅ **H3 FIXED** — binds `127.0.0.1` only (LAN exposure closed).
- **Priority**: M (security) · **Effort**: XS · **Status**: security item done

### `admin/index.html` (1292 lines) — dashboard UI
- **Purpose**: Control Deck UI (status, playground, DB, settings; payload inspector; toasts; SSE).
- **Quality**: Impressive. Polished design system (design tokens, animations, reduced-motion support, keyboard nav, draggable inspector), offline-capable via vendored assets (N2). Markdown-lite + PZ-syntax renderer.
- **Issues**: giant single file (logic + styles inline); `localStorage` settings; no tests; the `mdProse` renderer escapes but `mdInline` is applied *after* `esc` — ordering is correct for XSS; the `hlJSON` regex is fragile but cosmetic.
- **Improvements**: none urgent for a local tool; splitting is optional.
- **Priority**: L · **Effort**: XL (if split)

### `scripts/install.sh` — installer
- **Purpose**: POSIX install helper.
- **Issues**: bash-only on a Windows-centric project (accepted; `npm install` works everywhere).
- **Improvements**: ✅ **M7 FIXED** — Node ≥22.5.0 enforced (major+minor check); dead `config.example.json` generation removed.
- **Priority**: M (correctness of docs) · **Effort**: XS · **Status**: done

### `scripts/_verify_deck.mjs` — dashboard verifier
- **Purpose**: end-to-end bridge smoke test (SSE + RPC + parse).
- **Quality**: Good, clearly labeled throwaway; useful.
- **Issues**: hardcoded `D:\Games\ProjectZomboid` (matches the dev machine default).
- **Improvements**: ✅ **N4 FIXED** — wired as `npm run verify:deck`; lint-clean (M3).
- **Priority**: L · **Effort**: XS · **Status**: done

### Tests (10 files, 114 tests) — see §8 for the full table.

### Docs — see §9. Configs (package.json, tsconfig, .eslintrc, .editorconfig, .gitignore, ci.yml) — see §6/§7/§10.

---

## 19. Prioritized Improvement Roadmap

### 🔴 Critical
| Item | Why | Effort | Impact |
|---|---|---|---|
| **C1. Fix sprite-reference validation** (`DatabaseManager.checkReference` type filter; `ValidationEngine` Icon/WeaponSprite warnings) | Every `check_references type=sprite` and every Icon/WeaponSprite validation is wrong; it's a correctness bug in shipped behavior | XS | High — fixes false warnings for all users | ✅ **FIXED 2026-08-06** — sprite refs resolve via the `references` table; unit tests added |
| **C2. Resolve CI status** (re-run latest commits, pull logs, confirm/fix ubuntu failure or declare flake) | "Tests pass" is currently only a local claim; the repo's own audit flags this as the one real open item | S–M | High — restores trust in the pipeline | ⏳ **STILL OPEN** — cannot be resolved from this machine (needs push + GH log access); CI workflow itself was deduped (L6) |

### 🟠 High
| Item | Why | Effort | Impact |
|---|---|---|---|
| **H1. Fix doc drift** — "76 tests, 6 suites" → "90 tests, 9 suites" in AGENTS.md, README, project-summary, todo; fix AUDIT's false "fixed" claim; drop stale root-artifact + version claims in project-summary | The repo's canonical AI-context doc would mislead the next codegen session — the exact failure mode this repo exists to prevent | XS | Medium — correctness of agent context | ✅ **FIXED 2026-08-06** — all docs now 114/10; summary corrected; README gained an env-var table (M4 follow-up); AUDIT addendum added (§8) |
| **H2. Remove dead code + deps** (commander, @types/pino, 5 PathManager methods, getCategories/getReferences, generateModTemplate, generateReport) | ~250 lines of confusion; `detectAllInstallations` masks a *feature that looks implemented but never runs* | XS–S | Medium — clarity | ✅ **FIXED 2026-08-06** — grep-verified no references remain |
| **H3. Bind dashboard to 127.0.0.1** (+ optional token on /rpc and /api/restart) | LAN exposure of full MCP control | XS | Medium — security | ✅ **FIXED 2026-08-06** — loopback bind (token not added; local tool) |
| **H4. Add `generate_mod_template` tool (wire `generateModTemplate`)** or delete it | Half-finished feature; cheap win either way | XS | Low–Medium — feature completeness | ✅ **FIXED 2026-08-06** — **deleted** (dead code; half-baked with hardcoded author/example) |
| **H5. Tests for ModAnalyzer balance/compat + ScriptGenerator** (minimal: one seeded-DB balance test, one fix/sound generation test) | Biggest untested module + completely untested generator | S | Medium — reliability | ✅ **FIXED 2026-08-06** — new `scriptGenerator.unit.test.js` (all 6 types + balance + template pick); sprite tests; ModAnalyzer balance/compat/Lua-block-comment tests added (seeded temp DB) |

### 🟡 Medium
| Item | Why | Effort | Impact |
|---|---|---|---|
| **M1. Shared `BlockScanner`** (unify parser/validator block loops) | Kills a whole bug class (F5–F9 style drift) | M | High — maintainability | ✅ **FIXED 2026-08-06** — `src/utils/scriptScanner.ts`; parser + validator both use it; M1/F6/F9 tests green |
| **M2. Transaction-wrap reference extraction** | 8k inserts → ~1 txn | XS | Low — perf | ✅ **FIXED 2026-08-06** — `DatabaseManager.transaction()` + per-file batch in `parseScriptFile` |
| **M3. Lint + format tests & admin; add `format:check` to CI** | Catches real bugs in test code | XS | Medium — hygiene | ✅ **FIXED 2026-08-06** — lint covers tests/admin/scripts; `format:check` added + wired into CI |
| **M4. Config module + `PZ_MCP_DATA_DIR`** (centralize env, decouple DB location from cwd) | Fixes the "DB lands in client's cwd" pitfall | S | Medium — portability | ✅ **FIXED 2026-08-06** — `src/utils/config.ts`; env centralized, data dir overridable via `PZ_MCP_DATA_DIR` |
| **M5. Async `fs.promises` parse/analyze path** | Event-loop responsiveness | M | Medium — perf | ✅ **FIXED 2026-08-06** — parser + ModAnalyzer fully async (recursive walks, file reads) |
| **M6. Enable `PRAGMA foreign_keys`** | references FK is currently decorative | XS | Low — integrity | ✅ **FIXED 2026-08-06** — `PRAGMA foreign_keys = ON`; already caught a test using a nonexistent item_id |
| **M7. Update install.sh** (Node ≥22.5, drop config.example.json) | Doc correctness | XS | Low | ✅ **FIXED 2026-08-06** |
| **M8. Expose `balance` option in generate_script schema** (or remove the option) | README promise vs tool surface | XS | Medium — feature | ✅ **FIXED 2026-08-06** — `balance` + `includeComments` exposed and wired; integration test added |

### 🟢 Low
| Item | Effort | Impact |
|---|---|---|
| **L1. Conditional FTS rebuild** (only when drifted) | S | Low | ✅ **FIXED 2026-08-06** — rebuild only when `items` count ≠ FTS count; rowid-drift heal still on boot when needed |
| **L2. Block-comment-aware Lua balance counting** | M | Low | ✅ **FIXED 2026-08-06** — `stripLuaComments` handles `--[[ ]]` block comments; syntax + semantic checks use comment-free text; tests added |
| **L3. `SELECT_ITEMS` constant + FTS sanitizer extraction** | XS | Low | ✅ **FIXED 2026-08-06** — `src/utils/fts.ts` shared sanitizer; `SELECT_ITEMS` constant in DatabaseManager |
| **L4. Fix `minimax` URL in wrapInModule + package name/license metadata** | XS | Low | ✅ **FIXED 2026-08-06** — URL in generated scripts fixed; package `name`/LICENSE copyright left as-is (metadata, publisher decision) |
| **L5. Dependabot** | XS | Low — supply chain | ✅ **FIXED 2026-08-06** — `.github/dependabot.yml` (npm + github-actions, weekly) |
| **L6. Skip `npm run build` inside `npm test`** (CI builds once) | XS | Low — time | ✅ **FIXED 2026-08-06** — standalone build step removed from ci.yml |

### 🩵 Nice-to-have
| Item | Effort | Impact |
|---|---|---|
| **N1. Node test runner migration** (drop jest + `--experimental-vm-modules`) | M | Medium |
| **N2. Structured (non-markdown) MCP tool results** for machine consumption | M | Medium |
| **N3. Recipe-chain / conflict-detection analysis** (promised in project-structure.md) | XL | High (new feature) |
| **N4. `verify:deck` wired into scripts** | XS | Low | ✅ **FIXED 2026-08-06** — `npm run verify:deck` (live check; requires dashboard running); lint-clean |
| **N5. Incremental KB indexing by mtime** | S | Low |
| **N6. Release workflow** (tags on master, CHANGELOG gate) | S | Low |

---

## 20. Overall Assessment

### Top 20 improvements (greatest value)
1. Fix the sprite-reference validation bug (C1)
2. Get CI green and re-verified (C2)
3. Correct test-count drift across all 4 docs + AUDIT claim (H1)
4. Delete dead code/deps (H2)
5. Bind dashboard to localhost (H3)
6. Wire `generate_mod_template` or delete it (H4)
7. Add ModAnalyzer balance + ScriptGenerator tests (H5)
8. Unified block scanner parser/validator (M1)
9. Transaction-wrapped reference extraction (M2)
10. Lint/format tests + admin; `format:check` in CI (M3)
11. Config module + `PZ_MCP_DATA_DIR` (M4)
12. Async fs in parse/analyze paths (M5)
13. Enable foreign_keys pragma (M6)
14. Fix install.sh (M7)
15. Expose `balance` in generate_script (M8)
16. Conditional FTS rebuild (L1)
17. Lua block-comment handling (L2)
18. SELECT_ITEMS + FTS sanitizer dedupe (L3)
19. Metadata cleanup (minimax→fork) (L4)
20. Dependabot (L5)

### Quick wins (under 30 minutes)
C1, H1, H3, H4, M6, M7, M8, L4, L6 — **all applied 2026-08-06 (see §21)**. Roughly a morning's work, as estimated.

### Medium-term improvements
C2, H2, H5, M2, M3, M4, L1, L3, L5.

### Long-term architectural improvements
M1 (block scanner), M5 (async parse), N1 (node:test), N2 (structured outputs), N3 (recipe-chain analysis), plus splitting `ModAnalyzer` and `index.ts` as they grow.

### Estimated percentage improvement if all recommendations were implemented
- **Maintainability**: **+30%** (dead code gone, shared scanner, config module, consistent docs)
- **Performance**: **+20%** (async parse, transactional refs, conditional rebuild)
- **Reliability**: **+25%** (sprite bug fixed, CI green, analyzer/generator tested, FK enforced)
- **Developer experience**: **+25%** (accurate docs, lint/format on everything, `verify:deck`, dashboard binding sane)

---

### Final verdict
This is a **genuinely well-built small tool** — better documented, better tested, and more carefully audited than most hobby-scale MCP servers. The remaining work is small and mostly mechanical: one real bug, one unverified pipeline, a pile of dead code, and docs that drifted by a test-suite upgrade. None of it is architectural. Fix C1 and C2 and this repo earns an 8.5/10.

**Update (2026-08-06, second pass):** the entire local fix list is now **applied and verified** (see §21) — including the structural refactors that were previously deferred (M1 shared block scanner, M2 transaction-wrapped ref extraction, M3 lint expansion, M4 config module, M5 async fs, L1 conditional FTS rebuild, L2 block-comment-aware Lua, L3 shared FTS util, L5 Dependabot, N4 verify:deck, H5 analyzer/generator tests). Test count grew from 90 → 107 → **112** across 10 suites. The only outstanding items are C2 (CI verification — needs push + GitHub log access, cannot be done from this machine) and the optional N-series feature work (node:test migration, structured tool results, recipe-chain analysis, incremental KB indexing, release workflow). The repo now sits at ~8.5/10 with the remaining gap mostly CI proof and feature-scope choices.

---

## 21. Fix Log — 2026-08-06 (applied & verified)

Every fix below was implemented on this machine and verified with `npm run build` (clean), `npm test` (**114/114 tests, 10 suites** — was 90/9), `npm run lint` (clean), and `npm audit` (0 vulnerabilities). The shared scanner (M1) was additionally **parity-proven against the real B42.20 game install**: `parse_game_files` on `D:\Games\ProjectZomboid` produced the documented baseline exactly (9,383 rows: item 5,088 · sound 3,036 · recipe 965 · vehicle 241 · fixing 29 · evolvedrecipe 24; 0 errors, 1,004 files). Status markers also applied throughout §1, §19, and §20. Mirror entry: `AUDIT_2026-08-06.md` §8/§9 addenda.

| ID | Fix | Files changed | Verification |
|---|---|---|---|
| **C1** | Sprite references now resolve via the `references` table (`reference_type='sprite'`) instead of a never-matching `items.type='sprite'` filter; `type='all'` falls back to the references table too | `src/database/DatabaseManager.ts` (`checkReference`); tests: `tests/unit/databaseManager.unit.test.js` (3 C1 cases), `tests/unit/validationEngine.unit.test.js` (2 C1 cases) | New tests pass; previously Icon/WeaponSprite always warned — now only for genuinely unknown sprites |
| **NEW-BUG 1** | `generate_script` for `fixing`/`sound` always threw `"No template found"` (no template registered, no switch fallback) — fixed by registering both templates + `getTemplate` cases | `src/generators/ScriptGenerator.ts` | New `tests/unit/scriptGenerator.unit.test.js` covers all 6 types; integration test added |
| **NEW-BUG 2** | Uncategorized `item` generation silently used the **food** template (`templateKey.includes("item")` matched `food_item` first) — fixed by restricting the category loop to category matching | `src/generators/ScriptGenerator.ts` (`getTemplate`) | Regression test asserts tool template, no `HungerChange` |
| **M8** | `generate_script` schema now exposes `balance` (vanilla/powerful/weak/custom) and `includeComments`, wired into `GenerationOptions` | `src/index.ts` (schema + handler); README table | Integration test: `balance:'powerful'` scales MaxDamage 1.0→1.5 and header emitted |
| **H2** | Dead code removed: `commander` + `@types/pino` deps; `PathManager.detectAllInstallations/getUserZomboidPath/getModsPath/getWorkshopPath/resolvePathWithPriority` (+ now-orphaned `GameInstallation`, `detectPlatform`, `getGameVersion`); `DatabaseManager.getCategories/getReferences`; `ScriptGenerator.generateModTemplate` (+ `generateModInfo`); `analyze_mod` `generateReport` option (schema, handler, interface, README) | `package.json` (+lock via `npm install`), `src/utils/PathManager.ts`, `src/database/DatabaseManager.ts`, `src/generators/ScriptGenerator.ts`, `src/analyzers/ModAnalyzer.ts`, `src/index.ts`, README | Grep-verified: zero references remain in src/tests/admin/scripts |
| **H3** | Dashboard binds to `127.0.0.1` only — `/rpc` and `/api/restart` no longer LAN-reachable | `admin/bridge.mjs` | Manual code trace |
| **M6** | `PRAGMA foreign_keys = ON` in `DatabaseManager.initialize()` — `references.item_id` FK now enforced | `src/database/DatabaseManager.ts` | Immediately caught a test inserting a reference for a non-existent item; all suites still green |
| **L4** | Generated-script header URL corrected to `shakoorpour1991-sketch/pz-mcp-server` (was `minimax/...`) | `src/generators/ScriptGenerator.ts` (`wrapInModule`) | Unit test asserts new URL |
| **M7** | `install.sh`: Node ≥22.5.0 enforced (major+minor check), "Node 18+" claims removed, dead `config.example.json` generation removed | `scripts/install.sh` | Shell syntax checked |
| **H1** | Doc drift corrected: test counts → 106/10; `project-summary.md` dead-export/version/root-artifact claims fixed; AGENTS.md/README/todo updated | `AGENTS.md`, `README.md`, `docs/project-summary.md`, `docs/todo.md`, `CHANGELOG.md` (Unreleased), `AUDIT_2026-08-06.md` (§8 addendum) | `grep`-verified "76 tests" gone from all four docs |
| **H5** | New `tests/unit/scriptGenerator.unit.test.js` (all 6 types, balance scaling, template pick, header URL) + sprite/clearDatabase tests (pass 1); **ModAnalyzer balance/compat + block-comment Lua tests added in pass 2** (seeded temp DB) | `tests/unit/scriptGenerator.unit.test.js` (new), `tests/unit/databaseManager.unit.test.js`, `tests/unit/validationEngine.unit.test.js`, `tests/unit/modAnalyzer.unit.test.js`, `tests/server.integration.test.js` | 114/114 pass |
| **L6** | CI no longer runs a standalone `npm run build` (npm test builds already) | `.github/workflows/ci.yml` | — |
| **H4** | `generateModTemplate` **deleted** (dead, half-baked) rather than wired as a tool — kept scope tight | `src/generators/ScriptGenerator.ts` | — |
| **C2** | **NOT APPLICABLE from this machine** — requires pushing the branch and pulling GitHub Actions logs (needs GITHUB_TOKEN). Action: push the branch, run CI, confirm/fix the historical ubuntu failure | — | — |
| **R1 (review follow-up)** | `clearDatabase()` delete order reversed (`references` → `mods` → `items`) — FK enforcement would otherwise make `parse_game_files --forceReparse` throw `FOREIGN KEY constraint failed` | `src/database/DatabaseManager.ts` | New regression test (inserts item+ref, clears, expects no throw) |
| **R2 (review follow-up)** | Template-selection hints no longer leak into generated scripts: `category`/`weaponType`/`similar` stripped from item/vehicle output (sound keeps `category` — it is a real PZ property) | `src/generators/ScriptGenerator.ts` | Unit test asserts no `category = Weapon` in item output; sound test still passes |
| **R3 (review follow-up)** | Dead `GenerationOptions.module` field removed | `src/generators/ScriptGenerator.ts` | Build clean |
| **M4** | Config module: `src/utils/config.ts` centralizes all env reads (`PZ_MCP_LOG_LEVEL`, `PZ_MCP_KB_PATH`, `PROJECTZOMBOID_PATH`/`PZ_PATH`, `PZ_GAME_VERSION`, `PZ_DECK_PORT`) + adds **`PZ_MCP_DATA_DIR`** override so the DB location no longer silently depends on the client's cwd; wired into logger, DatabaseManager, KnowledgeBaseManager, PathManager, ModAnalyzer, index.ts | `src/utils/config.ts` (new), all consumers | Build + full suite green; existing env-var tests unchanged |
| **M2** | Reference extraction is now batched in **one transaction per file** (new `DatabaseManager.transaction()` helper) instead of one autocommit INSERT per reference (~8k inserts → ~1 txn/file) | `src/database/DatabaseManager.ts`, `src/parsers/ProjectZomboidParser.ts` (`parseScriptFile`) | Stub in M1 parser tests updated with `transaction`; full suite green |
| **M5** | Parser + ModAnalyzer converted to **async `fs.promises`** (recursive walks, file reads, stats) — parse/analyze no longer block the event loop | `src/parsers/ProjectZomboidParser.ts`, `src/analyzers/ModAnalyzer.ts` | Build clean (caught 2 leftover sync calls mid-conversion); tests green |
| **L1** | FTS rebuild is now **conditional** — only when `items` row count ≠ FTS row count (full rebuild at boot no longer unconditional); rowid-drift heal retained for genuine drift | `src/database/DatabaseManager.ts` (`initialize`) | Rowid-drift heal unit test still passes |
| **L3** | Shared `src/utils/fts.ts` (sanitizer + helpers) used by both `DatabaseManager` and `KnowledgeBaseManager` — duplicate FTS sanitization removed; `SELECT_ITEMS` column constant kills the repeated SQL column list | `src/utils/fts.ts` (new), `src/database/DatabaseManager.ts`, `src/knowledge/KnowledgeBaseManager.ts` | FTS sanitization unit tests still pass |
| **L2** | Block-comment-aware Lua analysis: `ModAnalyzer.stripLuaComments` now strips `--[[ ]]` multi-line block comments (not just line comments) before balance/syntax/semantic counting | `src/analyzers/ModAnalyzer.ts` | New tests: block comment containing code no longer counts as `if`/`end`/global-var |
| **H5 (completed)** | ModAnalyzer balance + compatibility unit tests added (seeded temp DB): `analyzeBalance` outlier detection, `analyzeCompatibility` version checks, plus the L2 block-comment tests | `tests/unit/modAnalyzer.unit.test.js` | New tests pass; analyzer coverage now covers the previously-untested paths |
| **M3** | Lint scope extended to `tests/**`, `admin/*.mjs`, `scripts/*.mjs`; `format:check` (prettier) added; both wired into CI | `.eslintrc.json`, `package.json`, `.github/workflows/ci.yml` | Lint immediately caught 5 real issues in `_verify_deck.mjs` + a test regex — all fixed; lint clean |
| **L5** | Dependabot config added (npm + github-actions ecosystems, weekly) | `.github/dependabot.yml` (new) | Valid YAML |
| **N4** | `verify:deck` npm script wired (`node scripts/_verify_deck.mjs`); script made lint-clean (unused vars, empty catch) | `package.json`, `scripts/_verify_deck.mjs` | `npm run lint` clean; live run requires dashboard up (ECONNREFUSED expected otherwise) |
| **M1** | **Shared block scanner** — `src/utils/scriptScanner.ts` extracted from the parser's battle-tested algorithm; parser `parseScriptFile` and validator `parseScriptBlocks` both consume it, eliminating the F5–F9 class of drift. Includes B42 `craftRecipe` normalization and same-line empty-block handling | `src/utils/scriptScanner.ts` (new), `src/parsers/ProjectZomboidParser.ts`, `src/validation/ValidationEngine.ts` | M1/F6/F9 B42 craftRecipe tests + full suite green; **parity proven vs real B42.20 install (9,383 rows, 0 errors)** |
| **R4 (code-review follow-up)** | Scanner module-line edge: a property line `module = Foo,` outside any module was swallowed by the `startsWith("module ")` branch — module detection now requires the anchored `^module \w+ {?$` form (comments tolerated) | `src/utils/scriptScanner.ts` | New regression test (`module = Base.Something,` property survives parsing) |
| **R5 (code-review follow-up)** | FTS drift heal strengthened: besides row-count, boot now compares `max(rowid)` of `items` vs `items_fts` — catches the historical INSERT-OR-REPLACE churn that shifts rowids without changing count | `src/database/DatabaseManager.ts` (`initialize`) | Rowid-drift heal unit test still passes |
| **R6 (code-review follow-up)** | `ModAnalyzer.stripLuaComments` now also strips Lua **long-bracket comments** `--[==[ ... ]==]` (any `=` count), not just `--[[ ]]` | `src/analyzers/ModAnalyzer.ts` | New test: code-like text inside `--[==[ ]==]` no longer skews if/end/paren/global counts |
| **R7 (code-review follow-up)** | README gained an **environment-variable reference table** (`PZ_MCP_DATA_DIR`, `PZ_MCP_KB_PATH`, `PZ_MCP_LOG_LEVEL`, `PZ_GAME_VERSION`, `PROJECTZOMBOID_PATH`/`PZ_PATH`, `PZ_DECK_PORT`) — M4's doc claim is now real | `README.md` | — |

**Resulting state:** 114 tests / 10 suites (was 90/9), lint+build clean, 0 audit vulnerabilities, dead code gone, two latent generator bugs fixed, one FK-related forceReparse regression caught by code review and fixed, dashboard loopback-bound, FK enforced, shared block scanner (parity-proven on real game data) + config module + async parse path + conditional FTS rebuild (count + rowid signals) + block-comment/long-bracket-aware Lua analysis all in place. Remaining open: C2 (CI proof — needs push + GitHub log access from this machine) and the optional N-series feature work (node:test migration, structured tool results, recipe-chain analysis, incremental KB indexing, release workflow).

---

## 22. Commit record — 2026-08-06

All §21 fixes are committed to `master`:

| Commit | Contents | Verification at commit time |
|---|---|---|
| `f48fdd3` — "Apply freebuff review fixes (C1, M1-M8, L1-L6, R1-R7, H1-H5)" | Every §21 item (C1, NEW-BUG 1/2, H1–H5, M1–M8, L1–L6, R1–R7, N4) + this review file (29 modified, 6 new files) | Re-ran on this machine: build clean, **114/114 tests / 10 suites**, lint clean. Working tree now clean. |

C2 remains **STILL OPEN** — it requires pushing the branch and pulling GitHub Actions logs (needs GITHUB_TOKEN); the commit above is un-pushed, so CI has not run on it.
