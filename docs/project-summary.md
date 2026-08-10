# PROJECT SUMMARY — pz-mcp-server (canonical context for online AIs)

> You are an AI working on this repository. READ THIS FILE FIRST. It is the
> authoritative, verified description of the project. Trust it over assumptions
> or stale docs (README.md is partially idealized; this file matches the code).

## What this project is

A **Model Context Protocol (MCP) stdio server** for **Project Zomboid mod
development** (game Build 42). It parses vanilla game files into a local
SQLite database, then exposes MCP tools to search that data, generate PZ
script templates, validate scripts, check references, and analyze mods.
It also indexes a local markdown "modding knowledge base" into FTS5.

## Runtime & tech stack (VERIFIED — do not contradict)

- Node.js **>= 22.5.0** required (`node:sqlite` is used; fails on 18/20).
- TypeScript, **ESM** (`"type": "module"`), strict tsconfig; compiles via `tsc` to `dist/`.
- **ZERO native dependencies**: runtime deps are only `@modelcontextprotocol/sdk` 1.30,
  `pino`, `zod`. Database is the **built-in `node:sqlite`** module.
- Tests: **Node's built-in test runner** (`node --test "tests/**/*.test.js"`) — no Jest.
- **460 tests, 96 suites**. Lint: ESLint (src + tests + admin + scripts).
- Coverage: `npm run coverage` (node:test `--experimental-test-coverage`, thresholds lines 85 / functions 80 / branches 70; currently ~92% lines).
- Perf: `npm run benchmark` (hermetic scripts/_benchmark.mjs — ~28K rows/sec import, ~0.17 ms FTS queries).
- Platform: Windows 11 host; CI = GitHub Actions (ubuntu + windows, Node 22 only; coverage + CodeQL + dependency-review workflows).

## Architecture (src/, 28 files — the whole source)

| File                                    | Responsibility                                                                                                                                                                                                                                                                                                  | Key exports                                                                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.ts`                          | Composition root: stdio transport, prompt/resource registration, wiring a `ToolContext` into every handler                                                                                                                                                                                                      | server bootstrap, 4 prompts, `knowledge://` resources                                                                                  |
| `src/tools/`                            | All 17 tool handlers, decomposed by domain behind a typed `ToolRegistry` (data-driven: name/description/schema/handler)                                                                                                                                                                                         | `registry.ts` (ToolRegistry), `discovery.ts`, `scripts.ts`, `analysis.ts`, `localData.ts`, `workshop.ts`, `index.ts`                   |
| `src/workshop/`                         | Steam Workshop layer: `SteamWorkshopClient` (keyless metadata: GetPublishedFileDetails API + best-effort React browse HTML parse, 24h JSON cache) + `SteamCmdDownloader` (SteamCMD wrapper: temp-dir hygiene, success-line parsing, exit-7 retry, anonymous-rejection hints, disk-space guard, skip-if-present) |
| `src/parsers/ProjectZomboidParser.ts`   | Parse PZ game files (items, recipes, evolvedrecipes, sounds, vehicles, fixing) + mod directories into the DB                                                                                                                                                                                                    | `parseGameFiles`, `parseModDirectory`, `extractReferences`                                                                             |
| `src/generators/ScriptGenerator.ts`     | Template-based script generation                                                                                                                                                                                                                                                                                | `generateItem`, `generateRecipe`, `generateEvolvedRecipe`, `generateFixing`, `generateSound`, `generateVehicle`, `formatPropertyValue` |
| `src/validation/ValidationEngine.ts`    | Script syntax + reference validation                                                                                                                                                                                                                                                                            | `validateScript`, `checkReferences`, `parseValue`                                                                                      |
| `src/utils/scriptSyntax.ts`             | Shared script-property parsing used by parser, validator, generator                                                                                                                                                                                                                                             | `matchPropertyLine`, `parseScriptValue`, `formatScriptValue`                                                                           |
| `src/database/DatabaseManager.ts`       | SQLite layer via **`node:sqlite`**                                                                                                                                                                                                                                                                              | tables: `items` (single table, `type` column), `"references"`, `mods`; FTS5                                                            |
| `src/knowledge/KnowledgeBaseManager.ts` | Markdown KB indexing/search (FTS5 + bm25)                                                                                                                                                                                                                                                                       | `indexKnowledgeBase`, `searchKnowledgeBase`, `listTopics`, `getTopic`                                                                  |
| `src/analyzers/ModAnalyzer.ts`          | Mod analysis: structure, Lua syntax, balance, deprecated APIs                                                                                                                                                                                                                                                   | `analyzeMod`                                                                                                                           |
| `src/analyzers/RecipeAnalyzer.ts`       | Recipe dependency graph + duplicate-output conflict detection                                                                                                                                                                                                                                                   | `analyzeChain`, `detectConflicts`                                                                                                      |
| `src/utils/PathManager.ts`              | Game install detection + path validation                                                                                                                                                                                                                                                                        | `validateInputPath`, `detectProjectZomboidPath`                                                                                        |
| `src/utils/logger.ts`                   | pino logger — **stderr only (fd 2)**                                                                                                                                                                                                                                                                            | `logger`                                                                                                                               |
| `src/utils/blockTypes.ts`               | Single source of truth for the six block types                                                                                                                                                                                                                                                                  | `BLOCK_TYPES`, `SEARCH_TYPES`, `isBlockType`                                                                                           |
| `src/utils/config.ts`                   | Central env validation (Zod schema, fail-fast at startup) + portable defaults                                                                                                                                                                                                                                   | `loadEnvConfig`, `validateEnvConfig`, `dataDir`, `knowledgeBasePath`, `maxDownloadBytes`                                               |
| `src/utils/mcpErrors.ts`                | Standardized error taxonomy → MCP error mapping with path redaction                                                                                                                                                                                                                                             | `toMcpError`                                                                                                                           |
| `src/utils/scriptScanner.ts`            | Shared script-block scanner used by parser/validator                                                                                                                                                                                                                                                            | `scanScriptBlocks`, `stripLineComments`, `countBraces`                                                                                 |
| `src/utils/fts.ts`                      | Shared FTS term sanitizer                                                                                                                                                                                                                                                                                       | `sanitizeFtsTerms`                                                                                                                     |
| `src/utils/formatters.ts`               | Human-readable formatters for tool output                                                                                                                                                                                                                                                                       | `formatParseResults`, `formatKbSearchResults`, …                                                                                       |
| `src/utils/modDiscovery.ts`             | Discover mod layout within a mod directory                                                                                                                                                                                                                                                                      | `discoverModLayouts`, `readModInfoId`                                                                                                  |

## MCP surface (ground truth from src/tools/registry.ts)

Tools (snake_case names, all registered in `src/tools/`):

- `search_vanilla` — structured + FTS vanilla search v2: fuzzy typo resolution, exact `id` lookup, 12+ filters (type, category, module, scriptPath, tags, weight, calories, metalValue, attachmentType, arbitrary `properties` constraints, usedInRecipe, producedByRecipe, sprite, sound), `format: "ai"` compact context blocks, `includeRelations` knowledge graph, provenance (`source`/`build`/`path`/`confidence`), typo-tolerant fallback, in-memory lookup cache. NOTE: Distribution (loot) filtering is NOT available — `distributions.lua` is not parsed.
- `search_recipes` — search the parsed recipe table by name/ingredients/result
- `generate_script` — type (item/recipe/evolvedrecipe/fixing/sound/vehicle), name, properties (record), module (default "Base"), balance (vanilla/powerful/weak/custom), includeComments
- `validate_script` — content (or filePath to a script file on disk), type, strict (default false): extends the existing validator with the **ZedScripts knowledge layer** (`src/validation/zedScriptsKnowledge.ts` + `zedScriptsRuleEngine.ts`) — deterministic diagnostics ported from the ZedScripts VS Code extension and its vendored `pz-scripts-data` dataset (`src/validation/zedData/`, provenance in `SOURCE.json`, refreshed by `scripts/port_zed_scripts_data.mjs`): unknown parameters (with typo suggestions), missing required parameters, invalid values, wrong types, deprecated parameters, duplicate parameters, missing values/commas, ID rules, unknown block keywords, and craftRecipe input/output shape checks. The layer deep-scans **all 97 dataset block types** (`entity`, `model`, `fluid`, `physics`, `timedAction`, `mannequin`, `character_trait_definition`, `component *` variants, …) including **nested blocks** — the shared scanner's opt-in deep mode (`src/utils/scriptScanner.ts` `nested`/`keywords`) tracks parents so nested components/clips/parts validate against their own knowledge instead of leaking into the enclosing block — plus hierarchy checks (`WRONG_PARENT`/`MISSING_PARENT`) and context-aware ID rules (`parentsWithout`/`optional`). Each diagnostic carries file/line/column/code/message/suggestion and the result reports the dataset source + commit
- `check_references` — references (string[]), type (item/sound/sprite/all, default all)
- `analyze_mod` — modPath, checkBalance (default true), checkCompatibility (true)
- `parse_game_files` — gamePath (optional, auto-detect), forceReparse (false)
- `index_knowledge_base` — path (default `PZ_MCP_KB_PATH` env or the repository's `knowledge-base/` folder), overwrite (true)
- `index_javadocs` — source (optional; default = repo-shipped `knowledge-base/javadocs/` distilled markdown, override `PZ_MCP_JAVADOCS_PATH`), output (default `PZ_MCP_JAVADOCS_KB_DIR` or `<data>/javadocs-kb`, only when source is provided), overwrite (true): indexes the Java API reference (works on any machine out of the box); with source = recursive class-page discovery + programmatic HTML parsing → per-type markdown → KB index
- `search_knowledge_base` — query, topic, limit (default 10)
- `list_knowledge_topics` — no parameters
- `analyze_recipe_chain` — seed, direction (upstream/downstream/both, default both), maxDepth (1-10, default 3)
- `detect_recipe_conflicts` — limit (1-200, default 50)
- `export_mod_script` — modPath, type, name, properties, module, balance, includeComments, dryRun (default true)
- `workshop_search` — query, limit (1-100, default 20); best-effort browse of the PZ workshop (AppID 108600)
- `workshop_get_details` — id (numeric or URL), forceRefresh (false); keyless Steam Web API + 24h cache
- `workshop_download` — id (numeric or URL), dryRun (default false); SteamCMD into `PZ_WORKSHOP_DIR` or `<Steam>/steamapps/workshop/content/108600`; verifies PZ, disk-space guarded, size-capped by `PZ_MCP_MAX_DOWNLOAD_BYTES` (default 4 GiB)
- `workshop_analyze` — id; download (skip-if-present) → parse_mod_directory → analyze_mod → Mod Report

Every tool result carries **`structuredContent`** (raw JSON) alongside the human text.

Workshop env: `STEAMCMD_PATH` (steamcmd binary), `PZ_WORKSHOP_DIR` (download target), `STEAMCMD_USER`/`STEAMCMD_PASS` (login items), `PZ_MCP_MAX_DOWNLOAD_BYTES` (size cap). Metadata cache: `data/workshop_metadata.json`. Security stance: mods are read/analyzed only — never executed, never auto-installed into the live game.

Prompts (kebab-case): `create-item`, `analyze-mod`, `search-game`, `validate-script`.
Resources: `knowledge://<topic>` URIs exposing indexed KB docs.

## Data model (data/pz_database.db)

Single **`items`** table (18 cols incl. rich metadata; `type` column: item/sound/recipe/
vehicle/fixing/evolvedrecipe) + FTS5 `items_fts` (external content) + `"references"` +
`mods`. Parsed B42.20 data (real parse): 9,383 items rows — item 5,088 · sound 3,036 ·
recipe 965 · vehicle 241 · fixing 29 · evolvedrecipe 24; references 8,133.
Knowledge base: FTS5 + bm25 ranking (`ORDER BY rank ASC`).

## Critical conventions (violating these breaks the build/contract)

1. **stdout is the MCP wire** — never `console.log` to stdout; pino logger writes stderr only.
2. New tool = zod schema in `src/schemas.ts` + a handler module in `src/tools/` + registration in the `ALL_TOOLS` array + tests + README/CHANGELOG.
3. Unit tests import from **`dist/`** (build first, then test).
4. `validateInputPath` (PathManager): rejects empty, NUL bytes, `'..'` segments
   (checked BEFORE `isAbsolute` — traversal guard must fire on all platforms),
   then non-absolute paths; verifies existence for kind dir/file. Returns `resolve(input)`.
5. No architectural redesigns, no refactors, no reformatting of unrelated code.
   Small localized diffs only. Match existing style exactly.
6. `npm test` = `npm run build` + node:test. Always run build + lint + test before done.

## Verification commands

```
npm run build      # tsc strict
npm run lint       # eslint src/**/*.ts
npm test           # build + node:test (460 tests, 96 suites)
npm run coverage   # test coverage with thresholds
npm run benchmark  # hermetic perf baselines
npm run format     # prettier
npm run dashboard  # Control Deck UI (admin/bridge.mjs; PZ_DECK_PORT, default 8787)
```

## Environment facts

- Game install: `D:\Games\ProjectZomboid\` (Build 42.20 stable; auto-detected via env override → Steam registry → Steam library VDF → common install paths).
- Knowledge base docs default to the repo-shipped `knowledge-base/` (portable — no machine-specific path); override with `PZ_MCP_KB_PATH`. The dev machine's personal docs copy lives at `D:\PZ-Modding\Documentation\`.
- Repo is a fork (`shakoorpour1991-sketch`); upstream `wink-/pz-mcp-server` is dormant.
- Orca orchestration artifacts (SKILL.md, orchestration.md, PLAN.md) live under `docs/orchestration/` — not project docs.

## Output contract for your responses

- Prefer **one unified git-style diff** (file paths + hunk headers) in a single code block.
- New files: provide complete contents. Never rewrite unrelated code.
- End every response with a `=== LOCAL AGENT INSTRUCTIONS ===` block:
  files modified / new files / integration order / commands to run /
  expected build+test results / potential integration issues / what to upload next.
