# PROJECT SUMMARY — pz-mcp-server (canonical context for online AIs)

> You are an AI working on this repository. READ THIS FILE FIRST. It is the
> authoritative, verified description of the project. Trust it over assumptions
> or stale docs. `AGENTS.md` at the repo root is the operational reference
> (commands, shell constraints); this file is the architecture + tool surface.

## What this project is

A **Model Context Protocol (MCP) stdio server** for **Project Zomboid mod
development** (game Build 42). It parses vanilla game files into a local
SQLite database, then exposes MCP tools to search that data, generate PZ
script templates, validate scripts (including a deep Build-42 knowledge layer),
check references, analyze mods, manage a rooted mod workspace, generate
complete beginner mods, and interact with the Steam Workshop. It also indexes
markdown modding docs **and** a distilled Java API reference into a chunked,
searchable knowledge base.

## Runtime & tech stack (VERIFIED — do not contradict)

- Node.js **>= 22.5.0** required (`node:sqlite` is used; fails on 18/20).
- TypeScript, **ESM** (`"type": "module"`), strict tsconfig; compiles via `tsc` to `dist/`.
- **ZERO native dependencies**: runtime deps are only `@modelcontextprotocol/sdk` 1.30,
  `pino`, `zod`, `adm-zip` (pure-JS zip). Database is the **built-in `node:sqlite`** module.
- Tests: **Node's built-in test runner** (`node --test "tests/**/*.test.js"`) — no Jest.
  **559 tests, 111 suites** — must stay green.
- Lint: ESLint (src + tests + admin + scripts); format: prettier (`npm run format`).
- Perf: `npm run benchmark` (hermetic scripts/_benchmark.mjs).
- Verification scripts (hermetic unless noted): `npm run verify:kb` (real-corpus KB
  index checks), `verify:deck` (deck data path), `verify:javadocs`, `verify:workshop`,
  `verify:workshop_analyze`, `verify:workshop_deck` (the workshop ones hit live Steam /
  need a running bridge).
- Platform: Windows 11 host; CI = GitHub Actions (ubuntu + windows, Node 22 only).

## Architecture (src/, the whole source)

| Area                                    | Responsibility                                                                                                                                                                     | Key exports |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `src/index.ts`                          | Composition root: stdio transport, prompt/resource registration, wiring a `ToolContext` into every handler                                                                          | server bootstrap, prompts, `knowledge://` resources |
| `src/tools/`                            | All 29 tool handlers, decomposed by domain behind a typed `ToolRegistry` (data-driven: name/description/schema/handler)                                                             | `registry.ts`, `discovery.ts`, `scripts.ts`, `analysis.ts`, `localData.ts`, `workshop.ts`, `installer.ts`, `modgen.ts`, `workspace.ts`, `registry.ts` |
| `src/schemas.ts`                        | Single source of truth for every tool's zod input schema; `TOOL_SCHEMAS` map consumed by the bridge for JSON-Schema normalization + pre-validation                                   | `TOOL_SCHEMAS` |
| `src/database/DatabaseManager.ts`       | SQLite layer via **`node:sqlite`**; `items` table (18 cols, `type` column), `"references"`, `mods`, `recipe_ingredients` mirror; FTS5 (`items_fts`, external content)                 | CRUD, search, stats |
| `src/parsers/ProjectZomboidParser.ts`   | Parse PZ game files (items, recipes, evolvedrecipes, sounds, vehicles, fixing) + mod directories into the DB                                                                        | `parseGameFiles`, `parseModDirectory`, `extractReferences` |
| `src/generators/ScriptGenerator.ts`     | Template-based script generation (item/recipe/evolvedrecipe/fixing/sound/vehicle)                                                                                                   | `generateScript` |
| `src/validation/`                       | `ValidationEngine` (syntax + reference validation) + the **ZedScripts knowledge layer**: `zedScriptsRuleEngine.ts` + `zedScriptsKnowledge.ts` over the vendored `zedData/` dataset (97 block types, nested blocks, hierarchy, ID rules, craftRecipe shapes); `vanillaVerified.json` extension keeps real 42.20 game keywords accepted | `validateScript`, `checkReferences` |
| `src/knowledge/`                        | KB v2: `KnowledgeBaseManager` (chunked FTS5 search, bm25 with column weights, type-aware defaults, path-prefixed topics) + `kbChunker.ts` (deterministic section/member chunking, cleaning, doc-type inference) + `javadocs/JavaDocIndexer.ts` (recursive class-page discovery, dependency-free HTML parse → per-type markdown) | `indexDirectory`, `search`, `getTopic`, `getSection` |
| `src/analyzers/`                        | `ModAnalyzer` (structure, Lua syntax, balance, deprecated APIs, compatibility) + `RecipeAnalyzer` (dependency graph, conflict detection)                                              | `analyzeMod`, `analyzeChain`, `detectConflicts` |
| `src/workspace/WorkspaceManager.ts`     | Rooted, safety-first mod project manager: scaffold (`mod.info`, `workshop.txt`, poster, B42 `common/` + versioned `media/` tree), list, inspect, confined paths                       | `createProject`, `listProjects`, `inspect` |
| `src/modgen/`                           | Beginner mod generator: 5 templates (simple item / melee weapon / food / tool / clothing), vanilla-data auto-balancing, blueprint round-trip (`modgen.blueprint.json`), Build-42 semantic validation (`b42Validator.ts`), generated poster/icon assets | `ModGenManager` |
| `src/workshop/`                         | `SteamWorkshopClient` (keyless metadata: GetPublishedFileDetails API + best-effort browse HTML, 24h JSON cache) + `SteamCmdDownloader` (SteamCMD wrapper: temp hygiene, success parsing, exit-7 retry, disk guard, size cap) | `SteamWorkshopClient`, `SteamCmdDownloader` |
| `src/modinstall/ModInstaller.ts`        | Install mods from `.zip`/folder into the mods dir: multi-mod packs, B42 versioned layouts, zip-slip refusal, size cap                                                                 | `installMod` |
| `src/utils/`                            | Shared helpers: `scriptSyntax.ts`, `scriptScanner.ts` (shared block scanner, deep/nested mode), `fts.ts` (FTS sanitizer), `config.ts` (env centralization), `blockTypes.ts` (block types, single source of truth), `PathManager.ts` (game detection), `mcpErrors.ts`, `modDiscovery.ts`, `zip.ts`, `formatters.ts`, `fuzzy.ts` (Levenshtein), `logger.ts` (pino, stderr-only) | — |
| `src/tools/index.ts`                    | `ALL_TOOLS` array — every tool registration | `ALL_TOOLS` |

## MCP surface (ground truth from src/schemas.ts + src/tools/)

**Discovery (3):** `search_vanilla` (structured + FTS v2: fuzzy typo resolution, exact `id` lookup, 12+ filters incl. arbitrary `properties` constraints, `usedInRecipe`/`producedByRecipe`, `includeRelations` knowledge graph, `format: "ai"` context blocks, provenance) · `search_recipes` (recipe table by name/category/skill/ingredient/result/tool) · `detect_pz_paths` (cross-platform game/mods/workshop path detection).

**Scripts (3):** `generate_script` (item/recipe/evolvedrecipe/fixing/sound/vehicle templates) · `validate_script` (syntax + references + **ZedScripts Build-42 knowledge layer**; `zedScripts: false` escape hatch for B41-only codebases) · `check_references`.

**Local data (2):** `parse_game_files` (game install → DB) · `export_mod_script` (generate + write into a mod's media/scripts).

**Knowledge base (5):** `index_knowledge_base` (markdown docs → chunked KB; path-prefixed topics; skips `javadocs/`) · `index_javadocs` (repo-shipped distilled JavaDocs → `javadocs/` topics; optional HTML-tree re-ingest) · `search_knowledge_base` (section-level chunks; bm25 column weights; **type-aware defaults** — prose docs rank first for natural-language queries, javadocs first for identifiers, bodyless signatures downweighted; `type`/`types`/`package` filters; `includeContent`/`maxContent` for search+read in one call; results carry `chars`/`words`) · `get_knowledge_section` (read one section or a `sections[]` batch by heading/member name — no slug guessing) · `list_knowledge_topics`.

**Analysis (3):** `analyze_mod` · `analyze_recipe_chain` (dependency graph, `target` path finding, `expandNode` deltas) · `detect_recipe_conflicts` (severity-ranked duplicates).

**Workshop (4):** `workshop_search` (best-effort browse) · `workshop_get_details` (id/URL → metadata, 24h cache) · `workshop_download` (SteamCMD, size-capped) · `workshop_analyze` (download → parse → analyze → Mod Report).

**Install (1):** `install_mod` (.zip or folder → mods dir; multi-mod, B42 layouts, zip-slip safe).

**Mod Generator (5):** `modgen_templates` · `modgen_generate` · `modgen_list` · `modgen_blueprint` · `modgen_regenerate` — complete ready-to-ship Build-42 mod folders with auto-balanced stats and per-file script diagnostics.

**Mod Workspace (3):** `workspace_list` · `workspace_create` (scaffold B42 project under `PZ_MCP_WORKSPACE_DIR`, default `<data>/workspaces`) · `workspace_inspect` (same analysis engine as `analyze_mod`).

Every tool result carries **`structuredContent`** (raw JSON) alongside the human text.

Prompts (kebab-case): `create-item`, `analyze-mod`, `search-game`, `validate-script`.
Resources: `knowledge://<topic>` and `knowledge://<topic>#<section>` URIs (percent-encoded segments; whole-segment encode required).

## Data model (data/pz_database.db + data/pz_knowledge.db)

- **Game DB:** `items` table (type: item/sound/recipe/vehicle/fixing/evolvedrecipe) + FTS5 `items_fts` (external content) + `"references"` + `mods` + `recipe_ingredients` mirror (authoritative for B42 bracket alternatives and `tags[...]` inputs). Parsed 42.20: ~9,383 items rows, 8,133 references.
- **Knowledge DB:** `knowledge_docs` (file metadata: doc_type, tags, meta, stored `lines`/`words`/`chars`), `knowledge_chunks` (one row per section/member chunk, UNIQUE `chunk_topic`), `knowledge_chunks_fts` (external-content FTS5, `porter unicode61`, ai/ad/au triggers). Schema version **v3** (additive `bodyless` column — v1/v2 DBs migrate in place, no re-index needed). Chunk cap 6,000 chars; bodyless signature chunks are tagged and downweighted in mixed searches.

## Critical conventions (violating these breaks the build/contract)

1. **stdout is the MCP wire** — never `console.log` to stdout; pino logger writes stderr only.
2. New tool = zod schema in `src/schemas.ts` + handler module in `src/tools/` + registration in `ALL_TOOLS` + `TOOL_SCHEMAS` + tests + README/CHANGELOG + deck data (`admin/data.mjs`: `TOOL_ICONS`, `TOOL_CATS`, `TOOL_GUIDES`, `EXAMPLES`).
3. Unit tests import from **`dist/`** (build first, then test).
4. `validateInputPath` (PathManager): rejects empty, NUL bytes, `'..'` segments (checked BEFORE `isAbsolute` — traversal guard must fire on all platforms), then non-absolute paths; verifies existence for kind dir/file. Returns `resolve(input)`.
5. No architectural redesigns, no refactors, no reformatting of unrelated code. Small localized diffs only. Match existing style exactly.
6. `npm test` = `npm run build` + node:test. Always run build + lint + test before done.

## Verification commands

```
npm run build      # tsc strict
npm run lint       # eslint src/**/*.ts + tests + admin + scripts
npm test           # build + node:test (559 tests, 111 suites)
npm run verify:kb  # hermetic real-corpus KB checks (27/27)
npm run benchmark  # hermetic perf baselines
npm run format     # prettier
npm run dashboard  # Control Deck UI (admin/bridge.mjs; PZ_DECK_PORT, default 8787)
```

## Environment facts

- Game install: `D:\Games\ProjectZomboid\` (Build 42.20 stable; auto-detected via env override → Steam registry → Steam library VDF → common install paths).
- Knowledge base docs default to the repo-shipped `knowledge-base/` (portable — no machine-specific path); override with `PZ_MCP_KB_PATH`. The dev machine's personal docs copy lives at `D:\PZ-Modding\Documentation\`.
- Repo is a fork (`shakoorpour1991-sketch`); upstream `wink-/pz-mcp-server` is dormant.
- Key env vars (see `src/utils/config.ts`): `PZ_MCP_KB_PATH`, `PZ_MCP_JAVADOCS_PATH`, `PZ_MCP_JAVADOCS_KB_DIR`, `PZ_MCP_WORKSPACE_DIR`, `PZ_WORKSHOP_DIR`, `PZ_MODS_DIR`, `STEAMCMD_PATH`, `STEAMCMD_USER`/`STEAMCMD_PASS`, `PZ_MCP_MAX_DOWNLOAD_BYTES`, `PZ_DECK_PORT`.
