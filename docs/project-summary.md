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
- **127 tests, 11 suites**. Lint: ESLint (src + tests + admin + scripts).
- Platform: Windows 11 host; CI = GitHub Actions (ubuntu + windows, Node 22 only).

## Architecture (src/, 10 files — the whole source)

| File | Responsibility | Key exports |
|---|---|---|
| `src/index.ts` | MCP server bootstrap: stdio transport, tool/prompt/resource registration (zod schemas); server version read from package.json at runtime | 16 tools, 4 prompts, `knowledge://` resources |
| `src/workshop/` | Steam Workshop layer: `SteamWorkshopClient` (keyless metadata: GetPublishedFileDetails API + best-effort React browse HTML parse, 24h JSON cache) + `SteamCmdDownloader` (SteamCMD wrapper: temp-dir hygiene, success-line parsing, exit-7 retry, anonymous-rejection hints, disk-space guard, skip-if-present) |
| `src/parsers/ProjectZomboidParser.ts` | Parse PZ game files (items, recipes, evolvedrecipes, sounds, vehicles, fixing) + mod directories into the DB | `parseGameFiles`, `parseModDirectory`, `extractReferences` |
| `src/generators/ScriptGenerator.ts` | Template-based script generation | `generateItem`, `generateRecipe`, `generateEvolvedRecipe`, `generateFixing`, `generateSound`, `generateVehicle`, `formatPropertyValue` |
| `src/validation/ValidationEngine.ts` | Script syntax + reference validation | `validateScript`, `checkReferences`, `parseValue` |
| `src/utils/scriptSyntax.ts` | Shared script-property parsing used by parser, validator, generator | `matchPropertyLine`, `parseScriptValue`, `formatScriptValue` |
| `src/database/DatabaseManager.ts` | SQLite layer via **`node:sqlite`** | tables: `items` (single table, `type` column), `"references"`, `mods`; FTS5 |
| `src/knowledge/KnowledgeBaseManager.ts` | Markdown KB indexing/search (FTS5 + bm25) | `indexKnowledgeBase`, `searchKnowledgeBase`, `listTopics`, `getTopic` |
| `src/analyzers/ModAnalyzer.ts` | Mod analysis: structure, Lua syntax, balance, deprecated APIs | `analyzeMod` |
| `src/analyzers/RecipeAnalyzer.ts` | Recipe dependency graph + duplicate-output conflict detection | `analyzeChain`, `detectConflicts` |
| `src/utils/PathManager.ts` | Game install detection + path validation | `validateInputPath`, `detectProjectZomboidPath` |
| `src/utils/logger.ts` | pino logger — **stderr only (fd 2)** | `logger` |
| `src/utils/blockTypes.ts` | Single source of truth for the six block types | `BLOCK_TYPES`, `SEARCH_TYPES`, `isBlockType` |

## MCP surface (ground truth from src/index.ts)

Tools (snake_case names):
- `search_vanilla` — FTS over vanilla data; filters: type (item/recipe/sound/vehicle/evolvedrecipe/fixing/all), category, tags, metalValueMin/Max, attachmentType, limit
- `generate_script` — type (item/recipe/evolvedrecipe/fixing/sound/vehicle), name, properties (record), module (default "Base"), balance (vanilla/powerful/weak/custom), includeComments
- `validate_script` — content, type, strict (default false)
- `check_references` — references (string[]), type (item/sound/sprite/all, default all)
- `analyze_mod` — modPath, checkBalance (default true), checkCompatibility (true)
- `parse_game_files` — gamePath (optional, auto-detect), forceReparse (false)
- `index_knowledge_base` — path (default `D:\PZ-Modding\Documentation` or `PZ_MCP_KB_PATH`), overwrite (true)
- `search_knowledge_base` — query, topic, limit (default 10)
- `list_knowledge_topics` — no parameters
- `analyze_recipe_chain` — seed, direction (upstream/downstream/both, default both), maxDepth (1-10, default 3)
- `detect_recipe_conflicts` — limit (1-200, default 50)
- `export_mod_script` — modPath, type, name, properties, module, balance, includeComments, dryRun (default true)
- `workshop_search` — query, limit (1-100, default 20); best-effort browse of the PZ workshop (AppID 108600)
- `workshop_get_details` — id (numeric or URL), forceRefresh (false); keyless Steam Web API + 24h cache
- `workshop_download` — id (numeric or URL); SteamCMD into `PZ_WORKSHOP_DIR` or `<Steam>/steamapps/workshop/content/108600`; verifies PZ, disk-space guarded
- `workshop_analyze` — id; download (skip-if-present) → parse_mod_directory → analyze_mod → Mod Report

Every tool result carries **`structuredContent`** (raw JSON) alongside the human text.

Workshop env: `STEAMCMD_PATH` (steamcmd binary), `PZ_WORKSHOP_DIR` (download target), `STEAMCMD_USER`/`STEAMCMD_PASS` (login items). Metadata cache: `data/workshop_metadata.json`. Security stance: mods are read/analyzed only — never executed, never auto-installed into the live game.

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
2. New tool = zod schema + registration in `src/index.ts` + tests + README/CHANGELOG.
3. Unit tests import from **`dist/`** (build first, then test).
4. `validateInputPath` (PathManager): rejects empty, NUL bytes, `'..'` segments
   (checked BEFORE `isAbsolute` — traversal guard must fire on all platforms),
   then non-absolute paths; verifies existence for kind dir/file. Returns `resolve(input)`.
5. No architectural redesigns, no refactors, no reformatting of unrelated code.
   Small localized diffs only. Match existing style exactly.
6. `npm test` = `npm run build` + node:test. Always run build + lint + test before done.

## Verification commands

```
npm run build    # tsc strict
npm run lint     # eslint src/**/*.ts
npm test         # build + node:test (127 tests, 11 suites)
npm run format   # prettier
npm run dashboard  # Control Deck UI (admin/bridge.mjs, port 8787)
```

## Environment facts

- Game install: `D:\Games\ProjectZomboid\` (Build 42.20 stable).
- Knowledge base docs: `D:\PZ-Modding\Documentation\` (~13 markdown research files with YAML frontmatter).
- Repo is a fork (`shakoorpour1991-sketch`); upstream `wink-/pz-mcp-server` is dormant.
- Orca orchestration artifacts (SKILL.md, orchestration.md, PLAN.md) live under `docs/orchestration/` — not project docs.

## Output contract for your responses

- Prefer **one unified git-style diff** (file paths + hunk headers) in a single code block.
- New files: provide complete contents. Never rewrite unrelated code.
- End every response with a `=== LOCAL AGENT INSTRUCTIONS ===` block:
  files modified / new files / integration order / commands to run /
  expected build+test results / potential integration issues / what to upload next.
