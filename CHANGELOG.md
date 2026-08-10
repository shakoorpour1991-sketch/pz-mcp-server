# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Mod Workspace / Project Manager** — a rooted, safety-first project abstraction (`src/workspace/WorkspaceManager.ts`) plus an 11-tool `workspace_*` family: `workspace_list`, `workspace_create` (B42 scaffold: mod.info/workshop.txt/poster.png/common + versioned media, optional generated starter item script via `generate_script`), `workspace_inspect` (reuses `ModAnalyzer`), `workspace_status`, `workspace_validate` (missing id/name, duplicate keys, B42 layout, dependency resolution via the DB mods table), `workspace_list_files`, `workspace_read_file`, `workspace_write_file`, `workspace_patch_file`, `workspace_delete_file`, `workspace_rename_file`. Safety: root confinement (`PZ_MCP_WORKSPACE_DIR`, default `<data>/workspaces`), `..`/absolute/null-byte rejection, symlink/junction escape detection, atomic writes, no silent overwrites, `force` + `dryRun` for destructive ops, and `WorkspaceError` codes mapped to MCP error categories via `toMcpError`
- **Workspace test suite** — `tests/unit/workspaceManager.unit.test.js` (47 tests): scaffolding, atomic writes, patch all-or-nothing, delete/rename guards, traversal + symlink-escape security, invalid-mod detection, dependency resolution, and the valid B42 fixture `tests/fixtures/mods/b42_mod/`
- **Workspace documentation** — `docs/mod-workspace.md` (safety model, tool reference, create-from-scratch + AI workflow examples), TOOLS.md sections, README tool map/config/workflow/security updates

### Changed
- Test suite now **346 tests / 73 suites** (was 299 / 70) — registry + integration snapshots updated for the 28 tools
- **MCP entrypoint decomposed into a typed tool registry** (chatgpt audit P0) — `src/index.ts` shrank from ~1100 to ~390 lines; all 17 tool definitions moved to `src/tools/` (registry, discovery, scripts, analysis, localData, workshop). Each tool is one object (name, description, zod `inputSchema`, handler); `index.ts` is composition-only and both `tools/list` and `tools/call` derive from the registry
- **Standardized MCP error handling** (audit P1) — new `src/utils/mcpErrors.ts`: one `toMcpError` funnel maps zod rejections → InvalidParams, deliberate McpErrors pass through, and everything else → sanitized InternalError (no stack traces; absolute local paths redacted)
- **Centralized env validation** (audit P1) — `src/utils/config.ts` validates every `PZ_*`/`STEAMCMD_*` variable through one Zod schema, fail-fast at startup, including the new `PZ_MCP_MAX_DOWNLOAD_BYTES`
- **Versioned database migrations** (audit P0) — `PRAGMA user_version` + `SCHEMA_VERSION = 2`; the additive column ALTERs are now a numbered v1→v2 migration that also repairs a pre-v2 `items_fts` shape (missing plain-text mirror) and rebuilds only when the shape actually changed; `PRAGMA busy_timeout = 5000` added
- **Workshop download hardening** (audit P0) — `workshop_download` gained a `dryRun` option (app verification + target resolution, no SteamCMD/disk writes) and a size cap (`PZ_MCP_MAX_DOWNLOAD_BYTES`, default 4 GiB) enforced before download in both `workshop_download` and `workshop_analyze`
- Test suite now **299 tests / 70 suites** (was 263 / 65)
- **Machine-specific paths removed** (portability pass) — the knowledge-base default is no longer `D:\PZ-Modding\Documentation`: `index_knowledge_base` now defaults to the `knowledge-base/` folder shipped with the repository (env override unchanged), so it works out of the box on any machine; the dashboard's `analyze_mod` example no longer carries a real username, the verify scripts take the game path from `PROJECTZOMBOID_PATH`/`PZ_PATH` or auto-detect instead of a hardcoded install, and `dashboard.bat` + the `_verify_*.mjs` scripts honor `PZ_DECK_PORT` instead of assuming 8787

### Added
- **FTS/database lifecycle integration tests** (audit P0) — `tests/database.fts.integration.test.js`: insert→search, update→search, delete→search via the trigger path, rowid churn under bulk upsert, 1000-row import, empty DB, and v1→v2 migration
- **Shared PZ fixture corpus** (audit P1) — `tests/fixtures/` with representative B42 scripts for all six block types, a B42 `craftRecipe`, malformed input, a container-leak check, and an example mod pack, exercised by `tests/fixtures.unit.test.js`
- **Tool-registry snapshot tests** (audit P2) — `tests/unit/toolRegistry.unit.test.js`: all 17 tools registered with full definitions, unique names, and schema invalid-input rejections
- **Workshop tool guard tests** (audit P0) — `tests/unit/workshopTool.unit.test.js`: dry-run, size limit, app verification, concurrent-download dedupe (mocked context, no network)
- **Config validation tests** (audit P1) — `tests/unit/config.unit.test.js`
- **CI polish** (audit P1/P2) — coverage step (`npm run coverage`), CodeQL workflow (`.github/workflows/codeql.yml`), dependency-review workflow (`.github/workflows/dependency-review.yml`)
- **Performance benchmark script** (audit P2) — `npm run benchmark` (`scripts/_benchmark.mjs`): hermetic import rate, FTS query latency, stats/lookup timings on synthetic data
- **README**: compatibility matrix, example workflows, database lifecycle/reset, SteamCMD setup, security & side-effect trust tiers, troubleshooting; new env vars documented

### Fixed
- **`node:sqlite` `exec()` parameter gotcha** — tests that delete rows through a raw connection now use prepared statements: `exec('DELETE … WHERE id = ?', id)` silently ignores bound parameters and deletes nothing

### Fixed
- **Search-as-you-type (autocomplete / `search_vanilla`)** — `prepareFTSQuery` built exact-token FTS5 matches (`"flou"`), so partial prefixes like `flo`/`flou` returned nothing while typing and autocomplete felt dead. Terms are now prefix-matched (`flou*` → Flour2/Cornflour2), quoted for safety when a term still carries FTS punctuation (e.g. `Base.Burger`), multi-term input becomes an AND of prefixes, and operator/empty input still yields the match-nothing query. Works for the Chain seed autocomplete, the DB tab search, and any `search_vanilla` caller.
- **Recipe Chain fullscreen graph: inspector no longer blocks the toolbar / panning, and panning works at every zoom** — the empty-state "click a node" panel was a 320px overlay at the top-right that covered the fit/zoom/export buttons and ate drags in that region; it is now a tiny non-interactive hint pill at the bottom-center (`pointer-events: none`), and the real inspector anchors below the toolbar. The pan clamp previously hard-locked `pan = 0` whenever the graph fit the viewport (i.e. at the default fit zoom nothing could be dragged); it now uses soft bounds — the graph can slide ~40% of a viewport past each edge and settles on release, and overflowed graphs keep the viewport covered with a little overscroll. A manual drag also opts the view out of auto-refit on resize.
- **Recipe Chain graph: consumers for every item** — the chain graph read only the `references` table, which B42 bracket (`item 1 [Base.Plank;...]`) and tag (`item 1 tags[base:plank]`) inputs never reach, so items showed producers but no offspring (e.g. Plank had 3 producers, 0 consumers). The walk now loads the `recipe_ingredients` mirror (authoritative) + references + item tags once per call into an in-memory index:
  - Recipe nodes' ingredients/results/tools come from the mirror first (bracket alternatives + `tags[...]` inputs); tag inputs resolve to the items that actually carry the tag (tagged `tag: true` in the payload — inspector/markdown show a `tag` badge)
  - Item nodes' `producedBy`/`consumedBy` union mirror rows, legacy references rows, and the tag bridge (recipes consuming any of the item's tags) — live DB: Plank 3→36 consumers, Flour2 now shows 14 dough/baking recipes via `base:flour`
  - The parser now also emits mirror rows as `references` rows during `parse_game_files`, so fresh parses carry the same edges in both stores

### Added
- **Recipe Chain: fullscreen-only graph, dense collapse, smooth panning** (Control Deck Chain tab):
  - **Real fullscreen**: the graph now renders ONLY in a true browser-fullscreen layer (`requestFullscreen` on `#chainFs`) — the tab shows a launcher card with graph stats; Esc / exit button / OS exit returns to the launcher automatically, with a windowed-overlay fallback if the browser blocks fullscreen
  - **Smooth 60fps panning**: zoom/pan are pure transform writes (never repaint the graph), wheel-zoom coalesced per frame, drag inertia ("flick" with exponential decay), middle-button pan, touch pinch-zoom, arrow-key nudge, animated ease-out zoom for buttons/fit, double-click or `0` to fit, re-fit on fullscreen enter and window resize (user view preserved once they pan/zoom)
  - **Dense graph collapse**: per-column cap slider (3–30), a dense-pill mode that collapses any column over the cap into one aggregate pill (click to expand), and per-node subtree collapse chevrons (−/+) that prune the branch from the layout; edges flow through pills in both directions; expanded columns get a − collapse control so they can be restored to the pill/cap without toggling dense off/on
  - **Tag input edges** render violet & dashed (dedicated arrow marker + legend entry) so tag-resolved inputs are visually distinct from direct item inputs
- **`analyze_recipe_chain`: graph index caching** — the mirror+references+tag edge index is cached per database generation (`getGraphStamp`, auto-invalidated when the DB changes), so repeated/expanded walks skip rebuilding it
- **Game DB re-parsed** with the mirror→references parser emission — `references` ingredient rows grew from 228 to 3,848 (+758 tag-ingredient); verified live: Plank 3→36 consumers, Flour2 14 consumers via tags, path FlaxSeed→RippleFlax→FlaxRippled

### Added
- **Recipe Chain roadmap (7 items)** — richer chain browsing in `analyze_recipe_chain` + the Control Deck Chain tab:
  - **Rich node payloads**: every chain node now carries item stats (`props`: Type/category/weight/calories/hunger/thirst/tags) and recipe metadata (`meta`: category/time/skill/skillLevel/tools) straight from the DB — one round trip, no extra tool calls; the admin inspector shows them
  - **Expand-in-place**: new `expandNode` param returns a one-hop delta around any node — the dashboard merges it into the existing graph instead of re-walking from the seed (no more rebuild-everything on big graphs)
  - **Path finding**: new `target` param returns the shortest crafting pipeline seed → target (BFS over the walked graph; `path` + `pathFound` in the reply); the Chain tab renders it as a clickable pipeline strip with path nodes glowing
  - **Graph-wide highlight**: the Chain tab dims every node/edge not matching a filter term (id, name, props, tags, ingredients, results)
  - **Export & history**: copy the chain as markdown, export the graph as SVG, and back/forward navigation through rooted seeds
  - **Cycle detection**: the walk flags recipes producing their own ingredients (`cycles` list + per-node `cycle` flag); the tab badges them 🔄 and lists them in a panel
  - **Conflict severity**: `detect_recipe_conflicts` ranks duplicates — exact outputs resolving to a real item row are `high` (real breakage risk), while tag multi-path and `mapper:X` virtual outputs are `low` (the game tolerates them); the tab sorts high-first with severity badges
- **Workshop browser (M1–M4)** — browse/search the Project Zomboid Steam Workshop (AppID 108600) from the Control Deck dashboard and dissect mods without leaving the UI:
  - `workshop_search` — best-effort keyless browse of the community page (parses the React SSR item cards)
  - `workshop_get_details` — keyless Steam Web API metadata resolution (id or URL) with a 24h cache (`data/workshop_metadata.json`); `forceRefresh` bypasses the cache
  - `workshop_download` — SteamCMD wrapper: per-download temp dir (always deleted), Windows success-line parsing, exit-code-7 retry (3×), anonymous-rejection → login hint, disk-space guard (size + 1 GiB margin), skip-if-already-present
  - `workshop_analyze` — Fetch & Analyze: download → parse_mod_directory → analyze_mod → full Mod Report (what the mod adds, quality score, issues, recommendations)
  - Control Deck **Workshop tab**: search grid, paste-URL/id guaranteed path, detail panel (stats, tags, Steam page, refresh), Download + Fetch & Analyze actions, rendered Mod Report; bridge `LONG_TOOLS` timeout extended for downloads
  - Security stance: mods are read/analyzed only — never executed, never auto-installed into the live game
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

### Fixed
- **Recipe Chain tab uses the authoritative server graph** (recipe-chain review): the tab now calls `analyze_recipe_chain` directly instead of re-deriving a sampled graph from `search_recipes` — no more silent 14-node/layer and 8-recipe-per-item caps, no more phantom lowercase nodes from tag/mapper refs, and the depth-limit UI (badge, dashed border, note) is live again
- **`analyze_recipe_chain` naming tolerance**: the seed and every reference resolve through bare / `Base.`-qualified / `base:`-tag candidate spellings (vanilla items are stored bare, scripts may reference them qualified) — `Base.Axe`, `Axe` and `base:axe` all build the same graph; item nodes are canonicalized to their stored id so one item never appears twice
- **Chain-graph safety cap**: `analyze_recipe_chain` stops at 500 nodes (flagged `truncated`) instead of returning thousands of nodes for dense `both` walks at maxDepth 10
- **Recipe conflict/producer lists deduped**: a recipe claiming an item through both `result` and `output` contexts now counts once in `detect_recipe_conflicts` and in chain `producedBy`/`consumedBy` lists
- **Recipe Chain fit/zoom fixed**: fit now divides out the SVG viewBox base scale so wide graphs actually fill the viewport, and the zoom badge is WYSIWYG (visible %)
- **Recipe Chain input & controls**: Enter runs the exact typed seed unless an arrow selection was made; depth slider max raised to 10 (matches the tool schema); conflicts scan uses the documented default limit (50)

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