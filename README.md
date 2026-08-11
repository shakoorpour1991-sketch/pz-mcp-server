<p align="center">
  <img src="assets/banner.svg" alt="PZ MCP Server — Stop making your AI guess" width="100%">
</p>

<p align="center">
  <img src="assets/EYE.gif" alt="PZ MCP Server — eye logo" width="100%">
</p>

> **PROJECT ZOMBOID MODDING TOOLS FOR AN AI THAT CAN INSPECT THE SAME LOCAL MATERIAL YOU DO.**

[Start here](#start-here) · [Tool map](#tool-map) · [Stats](#stats) · [Configuration](#configuration) · [Security](#security) · [Thanks](#thanks)

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## What it is

- MCP (Model Context Protocol) **stdio server** for **Project Zomboid mod development** — Build 42
- TypeScript · ESM · Node ≥ 22.5 · **0 native dependencies** (built-in `node:sqlite`, pure JS)
- Local-first: parses your game install, docs, and Java API reference into a searchable SQLite DB
- One MCP surface for: **SEARCH · GENERATE · VALIDATE · ANALYZE · MANAGE · INSTALL**
- Every tool returns human-readable text **+** machine-readable `structuredContent`
- Includes the glass **Control Deck** admin dashboard (`admin/`, port 8787)

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## Tool map

### `[ DISCOVERY ]` — find the source material

- `search_vanilla` — parsed vanilla items/recipes/sounds/vehicles (v2: structured filters, fuzzy typo resolution, exact-id lookup, relations graph, AI-context format, provenance)
- `search_recipes` — recipe table by name/category/skill/ingredient/result/tool
- `detect_pz_paths` — cross-platform game/mods/workshop path detection
- `search_knowledge_base` — FTS5 + bm25, type-aware ranking; **`semantic: true`** for hybrid keyword + vector search
- `get_knowledge_section` — read one section (or batch) by heading/member name
- `list_knowledge_topics` — list indexed topics

### `[ SCRIPT ]` — generate and check scripts

- `generate_script` — item / recipe / fixing / sound / evolvedrecipe / vehicle templates
- `validate_script` — syntax + reference checks **+ ZedScripts Build-42 knowledge layer** (97 block types, nested blocks, hierarchy, typo suggestions, deprecations; file/line/column + diagnostic code + suggestion)
- `check_references` — reference validation
- `export_mod_script` — generate + write into a mod's `media/scripts` (dry-run)

### `[ LOCAL DATA ]` — build the index

- `parse_game_files` — game install → SQLite (items, recipes, sounds, vehicles, references)
- `index_knowledge_base` — markdown modding docs → chunked FTS5 KB (incremental)
- `index_javadocs` — repo-shipped distilled JavaDocs (~4,700 types) or raw HTML tree → API knowledge
- `embed_knowledge` — **semantic indexing (opt-in)**: embeds chunks into vectors, incremental

### `[ ANALYSIS ]` — inspect the mod, not just the text

- `analyze_mod` — structure, Lua syntax, balance, deprecated APIs, compatibility
- `analyze_recipe_chain` — dependency graph traversal (what makes/consumes an item)
- `detect_recipe_conflicts` — duplicate crafting-path detection

### `[ WORKSHOP ]` — Steam Workshop

- `workshop_search` · `workshop_get_details` (24h cache) · `workshop_download` (SteamCMD, size-capped) · `workshop_analyze` (download → parse → Mod Report)

### `[ WORKSPACE ]` — mod project management

- `workspace_create` — scaffold a valid Build-42 project (`mod.info`, poster, `common/` + versioned `media/`)
- `workspace_list` · `workspace_inspect` — validation report (structure, metadata, deps, recommendations)
- All file operations strictly confined to the workspace root, atomic writes, dry-runs

### `[ MOD GENERATOR ]` — beginner-friendly complete mods

- `modgen_templates` · `modgen_generate` · `modgen_list` · `modgen_blueprint` · `modgen_regenerate`
- 5 templates: simple item · melee weapon · food · tool · clothing
- Stats **auto-balanced from real vanilla game data**, Build-42 validated before anything is written

### `[ INSTALL ]` — detect your game and install mods

- `install_mod` — `.zip` or folder → mods dir; multi-mod packs, B42 versioned layouts, zip-slip refusal, conflict detection, `dryRun` preview

## Semantic KB search

- **Opt-in by design** — nothing downloads or changes unless you run `embed_knowledge` / pass `semantic: true`
- `embed_knowledge` — explicit one-time step; embeds `title + content` per chunk, parallel workers
- Local WASM embeddings via `@huggingface/transformers` — **still zero native dependencies**
- Model: `all-MiniLM-L6-v2` (384-dim) — **one-time ~90–130 MB download, persisted at `<data>/models/`, never re-downloaded** (not on restart, not on deck open)
- Incremental — re-running only embeds new/changed chunks; model change (`PZ_MCP_EMBEDDING_MODEL`) forces a clean re-embed
- `search_knowledge_base { semantic: true }` — hybrid retrieval: FTS bm25 top-K ∪ cosine top-K, blended `0.7·bm25 + 0.3·cosine`; conceptual questions with zero keyword overlap still find the right doc; no keyword hit → semantic hits still returned
- `semantic: true` with no vectors → friendly error telling you to run `embed_knowledge` first

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## Stats

- **30 MCP tools** across 8 channels
- **598 tests / 118 suites** — green (build + lint + format:check + coverage + audit)
- Coverage: 94.24% line · 85.62% functions · 93.76% branches
- **0 vulnerabilities** (`npm audit`)
- **~9,383 vanilla items** · 8,133 references parsed (Build 42.20)
- **108k knowledge chunks** — 3.4k wiki/api + 104k javadocs members
- **~4,700 Java API types** (distilled Unofficial PZ JavaDocs)
- **97 script block types** validated (ZedScripts dataset + vanilla-verified table)
- **5 modgen templates** · **5 script generators** · **8 recipe channels**
- **0 native dependencies** · MIT license

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## Start here

```bash
git clone https://github.com/BIGtourist1991/pz-mcp-server.git
cd pz-mcp-server
npm install
npm run build
```

```json
{
  "mcpServers": {
    "pz-mcp-server": {
      "command": "node",
      "args": ["/absolute/path/to/pz-mcp-server/dist/index.js"]
    }
  }
}
```

- Run the compiled server: `npm start` · dev mode: `npm run dev`
- Admin dashboard: `npm run dashboard` → http://localhost:8787

## Requirements

- **Node.js ≥ 22.5** — required for built-in `node:sqlite`; earlier versions fail at runtime
- **OS** — Windows 10/11 (primary) · Linux · macOS · WSL (game-path detection)
- **Project Zomboid** — **Build 42.20 verified** (`PZ_GAME_VERSION`)

## Configuration

- `PZ_MCP_DATA_DIR` — `./data` — SQLite database directory
- `PZ_MCP_WORKSPACE_DIR` — `<data>/workspaces` — mod workspace root (every `workspace_*` file op confined here)
- `PZ_MCP_KB_PATH` — `knowledge-base/` (shipped) — knowledge-base docs path
- `PZ_MCP_JAVADOCS_PATH` — `knowledge-base/javadocs/` (shipped) — distilled JavaDocs dir
- `PZ_MCP_LOG_LEVEL` — `info` — pino level (trace…silent)
- `PZ_GAME_VERSION` — `42.20` — game build for compatibility checks
- `PROJECTZOMBOID_PATH` / `PZ_PATH` — auto-detect — game install override
- `PZ_MODS_DIR` — `<home>/Zomboid/mods` — where `install_mod` drops mods
- `PZ_DECK_PORT` — `8787` — admin dashboard port
- `PZ_WORKSHOP_DIR` — Steam install — workshop download target
- `PZ_MCP_MAX_DOWNLOAD_BYTES` — 4 GiB — workshop download size cap
- `STEAMCMD_PATH` / `STEAMCMD_USER` / `STEAMCMD_PASS` / `STEAMCMD_USE_CREDENTIALS` — SteamCMD setup (credentials never on argv unless `USE_CREDENTIALS=1`)
- `PZ_MCP_EMBEDDING_MODEL` — `all-MiniLM-L6-v2` — semantic embedding model (change forces clean re-embed)

All variables validated at startup via a single Zod schema — invalid values fail fast.

## Security & side-effect model

- **READ-ONLY** — all `search_*`, `list_*`, `check_references`, `analyze_*`, `detect_*`, `generate_script`, `validate_script`, `workspace_*` reads, `modgen_templates/list/blueprint` — no side effects
- **LOCAL MUTATION** — `parse_game_files`, `index_*`, `embed_knowledge`, `export_mod_script`, `workspace_create`, `modgen_generate/regenerate` — writes confined to data dir / validated paths / workspace root; traversal + symlink-escape rejected; atomic writes; dry-runs
- **EXTERNAL** — `workshop_download`, `workshop_analyze` — SteamCMD subprocess + downloads into `PZ_WORKSHOP_DIR` (timeout, captured output, app + size verified)
- Path safety: absolute-only, no `..`, existence checks · downloaded mods parsed in a throwaway DB, **never executed** · errors sanitized (no stack traces, no local paths leaked) · startup env validation

## Development

- `npm run build` — compile TypeScript
- `npm run dev` / `npm start` — run (tsx dev / compiled)
- `npm run lint` — ESLint
- `npm test` — build + full suite (598 tests / 118 suites)
- `npm run coverage` — coverage report (thresholds: 85/80/70)
- `npm run benchmark` — hermetic DB/FTS performance baselines
- `npm run verify:kb` · `npm run verify:deck` · `npm run verify:javadocs` — hermetic verification
- `npm run verify:workshop` · `verify:workshop_analyze` · `verify:workshop_deck` — live Steam (needs bridge)

## Troubleshooting

- `Node.js >= 22.5 is required` / exits at boot → update Node (`node:sqlite` built-in from 22.5)
- `Invalid environment configuration: …` → check the listed variable (validated at startup)
- `SteamCMD not found` → install or set `STEAMCMD_PATH`
- `search_vanilla` returns nothing → run `parse_game_files` first; `forceReparse: true` after game updates
- `Could not detect Project Zomboid installation` → set `PROJECTZOMBOID_PATH`
- Stale/missing knowledge results → re-run `index_knowledge_base` (`overwrite: true` for full re-index)
- Semantic search says no vectors → run `embed_knowledge` once
- SQLite lock errors with dashboard open → shared WAL DB; wait a moment and retry

## Boundaries

- Mod projects can be created, edited, validated, inspected — **launching/play-testing in-game is out of scope** for now (`src/workspace/` is the foundation for it)
- No unsupported performance claims or compatibility promises

<p align="center">
  <img src="assets/divider.svg" width="100%" height="34" alt="">
</p>

## Thanks

This project builds on the work of many people and projects:

**Project Zomboid & the modding community**
- **The Indie Stone** — for Project Zomboid, Build 42, and the modding support that makes all of this possible.
- **PZ-Wiki-Modding** — for the [ZedScripts](https://github.com/PZ-Wiki-Modding/ZedScripts) extension and its machine-readable [pz-scripts-data](https://github.com/pz-wiki-modding/pz-scripts-data) dataset, which powers the script-validation knowledge layer (97 block types), and for [PZ-API-Docs](https://github.com/PZ-Wiki-Modding/PZ-API-Docs), the official script/API reference shipped as the `knowledge-base/api-docs/` docs.
- **The PZ Wiki community** ([pzwiki.net](https://pzwiki.net)) — for the modding guides that make up `knowledge-base/wiki/`.
- **demiurgeQuantified** — for the [Unofficial PZ JavaDocs](https://github.com/demiurgeQuantified/ProjectZomboidJavaDocs), source of the ~4,700 API types shipped under `knowledge-base/javadocs/`.
- **Valve** — for [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD), used for Workshop downloads and analysis.

**Mod authors** — the creators of the community mods analyzed in `knowledge-base/Mods_Analysis/` (Bandits, BeyondTen, Excavation, NeatUI, Project Seasons, Railroader, RepairableWindows, StarlitLibrary, TanksHavePropane). Their work is an invaluable teaching resource.

**Open-source software**
- **Anthropic** — for the Model Context Protocol and the `@modelcontextprotocol/sdk`.
- **Hugging Face** — for `@huggingface/transformers` (WASM embeddings powering semantic KB search).
- Runtime libraries: **zod**, **pino**, **adm-zip**.
- Tooling: **TypeScript**, **ESLint** & typescript-eslint, **Prettier**, **tsx** — and the Node.js team for `node:sqlite`.

<p align="center">
  <img src="assets/divider.svg" width="100%" height="34" alt="">
</p>

<p align="center">
  <strong>LOCAL DATA → MCP TOOLS → CONTEXTUAL AI ACTION</strong>
</p>

<p align="center">
  <a href="TOOLS.md">Tool reference</a> ·
  <a href="CHANGELOG.md">Changelog</a> ·
  <a href="https://github.com/BIGtourist1991/pz-mcp-server/issues">Issues</a> ·
  <a href="https://github.com/BIGtourist1991/pz-mcp-server/discussions">Discussions</a>
</p>
