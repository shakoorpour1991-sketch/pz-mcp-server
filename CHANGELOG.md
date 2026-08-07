# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **`analyze_recipe_chain` tool** (freebuff N3): walks the recipe dependency graph from any item/recipe id — what it is made from, what it makes, and what consumes it (direction + maxDepth controls)
- **`detect_recipe_conflicts` tool** (freebuff N3): finds items produced by more than one recipe (duplicate crafting paths)
- **`export_mod_script` tool** (freebuff §14): generates a script and optionally writes it into a mod's `media/scripts` folder — dry-run by default, path-validated, filename sanitized
- **Structured tool results** (freebuff N2): every tool now returns raw JSON via the MCP `structuredContent` field alongside the human-readable text
- **`check_references` completeness detail** (freebuff §14 #7): each result now reports whether the reference is `defined` (items row), `referenced`-only (sprites/dangling refs), or `missing` — with item type and reference counts
- **mtime-based incremental KB indexing** (freebuff N5): `index_knowledge_base` with `overwrite: false` now skips unchanged docs, re-indexes changed docs, and prunes deleted files instead of skipping all existing topics
- **`prepublishOnly` guardrail + release workflow** (freebuff N6): `.github/workflows/release.yml` runs on `v*` tags — CI, version-vs-tag check, CHANGELOG check, dry-run publish, and real publish gated on `NPM_TOKEN`
- **Steam registry detection on Windows** (audit P4 #22): `detectSteamWindows` now queries the actual Steam install path from the registry (HKCU `SteamPath`, HKLM fallback) before falling back to hardcoded paths and `libraryfolders.vdf` — catches non-default installs (e.g. `D:\Games\ProjectZomboid`)
- **`generate_script` balance + comments options**: `balance` (vanilla/powerful/weak/custom) and `includeComments` exposed in the tool schema (freebuff review M8)
- **`fixing` and `sound` script generation fixed**: both types previously threw "No template found" because no template was registered; templates + unit tests added
- **Sprite reference validation fixed** (freebuff review C1): `check_references` with `type="sprite"` and `Icon`/`WeaponSprite` validation now resolve against the `references` table instead of always reporting invalid
- **Unit tests for ScriptGenerator** (new suite, all 6 types) + `checkReference`/sprite/clearDatabase tests; total suite now 114 tests / 10 suites
- **`clearDatabase()` order fixed under FK enforcement**: `references`/`mods` are deleted before `items` — `parse_game_files` with `forceReparse=true` would otherwise hit `FOREIGN KEY constraint failed`
- **Template-selection hints no longer leak into generated scripts**: `category`/`weaponType`/`similar` are stripped from item/vehicle output (sound keeps `category` — it is a real property)

### Changed
- **DB layer migrated to built-in `node:sqlite`** (no native deps); Node >= 22.5 now required — engines, CI matrix, and docs updated to match.
- **Dead code removed** (freebuff review H2): unused `commander` and deprecated `@types/pino` deps dropped; unused `PathManager` methods (`detectAllInstallations`, `getUserZomboidPath`, `getModsPath`, `getWorkshopPath`, `resolvePathWithPriority`), `DatabaseManager.getCategories`/`getReferences`, `ScriptGenerator.generateModTemplate`, and the unused `analyze_mod` `generateReport` option removed
- **Item template selection fixed**: uncategorized items no longer default to the food template (the `templateKey.includes(type)` match hijacked every `item` into `food_item`)
- **`PRAGMA foreign_keys = ON`** enforced (freebuff review M6) — `references.item_id` FK is now real
- **Dashboard binds to 127.0.0.1 only** (freebuff review H3): `/rpc` and `/api/restart` are no longer reachable from other machines
- **Generated-script header URL corrected** to `shakoorpour1991-sketch/pz-mcp-server`
- **`install.sh`**: Node 22.5+ requirement enforced; dead `config.example.json` generation removed
- **CI**: removed the redundant standalone `npm run build` (npm test builds already)
- **Shared block scanner** (`src/utils/scriptScanner.ts`, freebuff M1): parser and validator now consume one module/brace/block state machine — the F5–F9 class of parser/validator drift is structurally impossible
- **Config module** (`src/utils/config.ts`, freebuff M4): all env reads centralized (`PZ_MCP_LOG_LEVEL`, `PZ_MCP_KB_PATH`, `PROJECTZOMBOID_PATH`/`PZ_PATH`, `PZ_GAME_VERSION`, `PZ_DECK_PORT`) + new `PZ_MCP_DATA_DIR` to decouple the DB location from the client's cwd
- **Async parse/analyze path** (freebuff M5): parser + ModAnalyzer now use `fs.promises` — `parse_game_files`/`analyze_mod` no longer block the event loop
- **Conditional FTS rebuild** (freebuff L1): `items_fts` is rebuilt only when item/FTS row counts drift (rowid-drift heal retained)
- **Block-comment-aware Lua analysis** (freebuff L2): `ModAnalyzer.stripLuaComments` strips `--[[ ]]` multi-line comments before balance/syntax/semantic counting
- **Shared FTS util + `SELECT_ITEMS` constant** (freebuff L3): `src/utils/fts.ts` used by both DatabaseManager and KnowledgeBaseManager
- **ModAnalyzer balance + compatibility unit tests** (freebuff H5): seeded temp-DB coverage for outlier detection and version checks
- **Lint scope expanded** (freebuff M3): ESLint now covers `tests/`, `admin/`, `scripts/`; `format:check` added and wired into CI
- **Dependabot config** (freebuff L5): `.github/dependabot.yml` (npm + github-actions, weekly)
- **`verify:deck` npm script** (freebuff N4): `npm run verify:deck` runs the dashboard smoke check
- **Scanner module-line guard** (code-review follow-up): `module = Foo,` property lines outside any module are no longer swallowed by the module-detection branch
- **FTS drift heal strengthened** (code-review follow-up): boot now also compares `max(rowid)` of `items` vs `items_fts` — catches INSERT-OR-REPLACE churn that shifts rowids without changing row count
- **Lua long-bracket comments handled** (code-review follow-up): `--[==[ ... ]==]` stripped before balance/syntax/semantic counting
- **README env-var reference table** (code-review follow-up): `PZ_MCP_DATA_DIR`, `PZ_MCP_KB_PATH`, `PZ_MCP_LOG_LEVEL`, `PZ_GAME_VERSION`, `PROJECTZOMBOID_PATH`/`PZ_PATH`, `PZ_DECK_PORT` documented
- **Shared `BLOCK_TYPES` constant** (freebuff refactor #5): `src/utils/blockTypes.ts` is the single source of truth for the six block types — parser allowlist, validator required-property table, and all zod enums now derive from it
- **`index_knowledge_base` path validated** (freebuff §5 security gap): the KB `path` argument now goes through `validateInputPath` (traversal/absolute/existence guard), matching `analyze_mod`/`parse_game_files`
- **Parser property-error aggregation** (freebuff §3 #4): per-line `logger.warn` spam on malformed property lines is replaced by one aggregated warn per file, with per-line issues surfaced in `parse_game_files` results
- **`ModAnalyzer` IO errors logged** (freebuff §3 #5): `countFiles`/`findLargeFiles` no longer swallow directory read errors silently
- **Tests migrated from Jest to `node:test`** (freebuff N1): all 10 suites rewritten for the built-in runner — `npm test` = `npm run build && node --test "tests/**/*.test.js"`; `jest`/`@types/jest` removed; new `recipeAnalyzer.unit.test.js` suite. Total: 127 tests / 11 suites

## [1.1.0] - 2026-08-05

### Fixed
- **Build/TypeScript**: All 52 TypeScript errors resolved (commits f1cc131/042a307/21909fb); build now compiles cleanly
- **Dependencies**: All 15 npm vulnerabilities resolved — SDK upgraded to 1.30, sqlite3 removed, typescript-eslint 8; 0 vulnerabilities remaining
- **Native dependencies**: `better-sqlite3@12.11.1` ships Node 20/22 prebuilt binaries; Visual Studio C++ Build Tools no longer required on Windows
- **Server boot**: Windows entry guard (`unhandledRejection`/`uncaughtException`) improved; server now starts reliably

### Added
- **12 integration tests** (`tests/server.integration.test.js`) covering all MCP tools; run via `npm test`
- **ESLint config** (`.eslintrc.json`) with TypeScript support; `npm run lint` passes clean
- **References table population**: `extractReferences` now wired into the `parseGameFiles` flow (commit 0647d62); references table is populated during parsing
- **Evolvedrecipe generator**: `generateEvolvedRecipe` implemented in `ScriptGenerator` (commit 0647d62)
- **Vehicle generator**: `generateVehicle` implemented in `ScriptGenerator` (commit 0647d62)
- **CI workflow** (`.github/workflows/`); lint and test on push/PR
- **README truth-audit**: Claimed features (`evolvedrecipe`/`vehicle` output, references table, tests, lint) now verified against implementation
- **Bulk inserts**: parser accumulates items per file and flushes via a transaction (commit f8a0c62)
- **FTS5 rank ordering fix**: `ORDER BY rank ASC` — bm25 is more-negative-is-better; DESC inverted results (commit 82bf1ef)
- **Knowledge base integration**: 3 new MCP tools — `index_knowledge_base`, `search_knowledge_base`, `list_knowledge_topics` (commits 6e7309f/d199945); indexes `D:\PZ-Modding\Documentation` (or `PZ_MCP_KB_PATH`) into a searchable FTS database

### Removed
- **Cloudflare Workers** — HTTP API, edge deployment, D1 database, KV storage, and `wrangler.toml` removed (commit 8bd7d1a); project now runs as local STDIO MCP server only

---

## [1.0.0] - 2026-08-04

### Removed
- **Cloudflare Workers support** — HTTP API, edge deployment, D1 database integration, and KV storage removed. The project now runs exclusively as a local STDIO MCP server.

### Added
- Initial MCP server implementation with STDIO transport
- Project Zomboid script parsing, validation, and generation
- SQLite database with full-text search for vanilla game content
- Mod analysis tools (structure, syntax, balance, quality metrics)
- Auto-detection of Project Zomboid installations (Steam, Epic, GOG, WSL)

### Known Issues
- ~~Native dependencies require Visual Studio C++ Build Tools on Windows~~ — **Resolved**: `better-sqlite3@12.11.1` ships prebuilt binaries (Node 20/22)
- ~~Several MCP tools have limited functionality (references table empty, evolvedrecipe/vehicle generation not implemented)~~ — **Resolved**: references table now populated (commit 0647d62); evolvedrecipe and vehicle generators implemented (commit 0647d62)

---

*This changelog starts at v1.0.0. Prior development was undocumented.*