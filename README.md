<p align="center">
  <img src="assets/banner.svg" alt="PZ MCP Server — Stop making your AI guess" width="100%">
</p>

<p align="center">
  <img src="assets/EYE.gif" alt="PZ MCP Server — eye logo" width="100%">
</p>

> **PROJECT ZOMBOID MODDING TOOLS FOR AN AI THAT CAN INSPECT THE SAME LOCAL MATERIAL YOU DO.**

[Start here](#start-here) · [Tool map](#tool-map) · [Configuration](#configuration) · [Security](#security--side-effect-model) · [Thanks](#thanks)

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## System flow

<p align="center">
  <img src="assets/terminal-flow.svg" alt="Animated terminal workflow: parse, search, generate, validate, analyze" width="100%">
</p>

```text
Project Zomboid install        Modding documentation        Existing mod / Workshop mod
          │                            │                              │
          └──────────────┬─────────────┴──────────────┬───────────────┘
                         ▼                            ▼
                   parse / index                  inspect / analyze
                         \                            /
                          ▼                          ▼
                   ┌────────────────────────────────────┐
                   │           PZ MCP SERVER            │
                   │                                    │
                   │ SEARCH · GENERATE · VALIDATE       │
                   │ ANALYZE · TRACE RECIPE CHAINS      │
                   └─────────────────┬──────────────────┘
                                     │ MCP / stdio
                                     ▼
                              Your MCP client
```

A typical path: **parse game files → search references → generate a script → validate it → analyze the mod → export**.

<p align="center"><img src="assets/divider.svg" width="100%" height="34" alt=""></p>

## What it does

### `[ SEARCH ]` Find the source material

- Search parsed vanilla **items, recipes, sounds, and vehicles**.
- **Validate AI-generated scripts** with deterministic diagnostics ported from the [ZedScripts](https://github.com/PZ-Wiki-Modding/ZedScripts) extension and its `pz-scripts-data` dataset — all 97 block types, nested blocks, hierarchy checks, typo suggestions, deprecations — reported with file/line/column + diagnostic code and suggestion.
- **Knowledge base** — index Markdown modding documentation and ~4,700 distilled Java API types ([Unofficial PZ JavaDocs](https://github.com/demiurgeQuantified/ProjectZomboidJavaDocs)) into a searchable FTS5 index, then query it with `search_knowledge_base`.
- Search the Project Zomboid Steam Workshop and retrieve item details.

### `[ BUILD ]` Generate and check scripts

`item` · `recipe` · `fixing` · `sound` · `evolvedrecipe` · `vehicle` — then syntax-validate, check references, and export into a mod folder (dry-run available).

### `[ ANALYZE ]` Inspect the mod, not just the text

mod structure · Lua syntax · balance & compatibility · recipe dependency traversal · duplicate crafting-path detection · Workshop download + analysis through SteamCMD.

### `[ MANAGE ]` Build and manage mod projects

Scaffold a valid Build-42 mod (metadata, poster, `common/` + versioned `media/`), inspect/validate/report project status, and read/write/patch project files — strictly confined to the workspace root, with atomic writes and dry-run previews for destructive ops. Full reference: [`docs/mod-workspace.md`](docs/mod-workspace.md).

### `[ INSTALL ]` Detect your game and install mods

Smart detection of the game install, user-data, mods and Workshop directories (env override → Steam registry → `libraryfolders.vdf` → common paths, Windows/Linux/macOS/WSL), plus a mod installer for `.zip` and folder sources that refuses unsafe archives, detects conflicts by folder name and `mod.info` id, and previews everything with `dryRun`. The Control Deck's Installer tab wraps the whole flow with drag & drop.

## Tool map

| Channel         | Tools                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- |
| `DISCOVERY`     | `search_vanilla` (v2: structured filters, fuzzy resolution, AI context, relations, provenance) · `search_knowledge_base` · `get_knowledge_section` · `list_knowledge_topics` |
| `SCRIPT`        | `generate_script` · `validate_script` · `check_references` · `export_mod_script`                  |
| `LOCAL DATA`    | `parse_game_files` · `index_knowledge_base` · `index_javadocs`                                    |
| `ANALYSIS`      | `analyze_mod` · `analyze_recipe_chain` · `detect_recipe_conflicts`                                |
| `WORKSHOP`      | `workshop_search` · `workshop_get_details` · `workshop_download` · `workshop_analyze`             |
| `WORKSPACE`     | `workspace_list` · `workspace_create` · `workspace_inspect`                                       |
| `MOD GENERATOR` | `modgen_templates` · `modgen_generate` · `modgen_list` · `modgen_blueprint` · `modgen_regenerate` |
| `INSTALL`       | `detect_pz_paths` · `install_mod`                                                                 |

Tools return human-readable text alongside machine-readable MCP `structuredContent`. For parameters and examples: [`TOOLS.md`](TOOLS.md).

## Example workflows

```text
# core loop (local/offline)
parse_game_files → search_vanilla → generate_script → validate_script → analyze_mod → export_mod_script

# knowledge base
index_knowledge_base / index_javadocs once, then search_knowledge_base for every lookup

# workshop (external)
workshop_search → workshop_get_details → workshop_download → workshop_analyze

# mod workspace
workspace_create → workspace_inspect → edit files → workspace_inspect again

# install
detect_pz_paths → install_mod (dryRun first, overwrite: true to replace)
```

## Start here

```bash
git clone https://github.com/BIGtourist1991/pz-mcp-server.git
cd pz-mcp-server
npm install
npm run build
```

Requires **Node.js ≥ 22.5** (built-in `node:sqlite`). A stdio MCP configuration looks like:

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

Run the compiled server with `npm start`.

## Compatibility

| Layer           | Support                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js         | **≥ 22.5** — required for the built-in `node:sqlite`; earlier versions fail at runtime                                                   |
| OS              | Windows 10/11 (primary), Linux, macOS; WSL is supported for game-path detection                                                          |
| Project Zomboid | **Build 42.20 verified** (`PZ_GAME_VERSION`) — B42 grammar: items, `craftRecipe` (inputs/outputs), evolvedrecipe, fixing, sound, vehicle |

## Configuration

| Variable                          | Default                              | Purpose                                                                                                                 |
| --------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `PZ_MCP_DATA_DIR`                 | `./data`                             | SQLite database directory                                                                                               |
| `PZ_MCP_WORKSPACE_DIR`            | `<data>/workspaces`                  | Mod workspace root — every `workspace_*` file operation is strictly confined here                                       |
| `PZ_MCP_KB_PATH`                  | `knowledge-base/` (shipped docs)     | Knowledge-base documentation path                                                                                       |
| `PZ_MCP_JAVADOCS_PATH`            | `knowledge-base/javadocs/` (shipped) | Distilled JavaDocs markdown dir that `index_javadocs` indexes by default                                                |
| `PZ_MCP_LOG_LEVEL`                | `info`                               | pino level: `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `silent`                                                |
| `PZ_GAME_VERSION`                 | `42.20`                              | Game build for compatibility checks                                                                                     |
| `PROJECTZOMBOID_PATH` / `PZ_PATH` | auto-detect                          | Override Project Zomboid installation detection                                                                         |
| `PZ_MODS_DIR`                     | `<home>/Zomboid/mods`                | Where `install_mod` drops mods (also settable from the Control Deck → Installer tab)                                    |
| `PZ_DECK_PORT`                    | `8787`                               | Admin dashboard port                                                                                                    |
| `PZ_WORKSHOP_DIR`                 | Steam install                        | Workshop download target (else `<Steam>/steamapps/workshop/content/108600`)                                             |
| `PZ_MCP_MAX_DOWNLOAD_BYTES`       | `4294967296` (4 GiB)                 | Workshop download size cap — larger items are refused before downloading                                                |
| `STEAMCMD_PATH`                   | common paths                         | Path to the `steamcmd` binary (auto-probed if unset)                                                                    |
| `STEAMCMD_USER` / `STEAMCMD_PASS` | —                                    | Credentials for non-anonymous workshop downloads (see SteamCMD setup)                                                   |
| `STEAMCMD_USE_CREDENTIALS`        | `0`                                  | Set to `1` to allow passing credentials to steamcmd                                                                     |

All variables are validated at startup through a single Zod schema — invalid values fail fast with a per-variable error.

### Database lifecycle

The SQLite databases (`pz_database.db`, `pz_knowledge.db`) live in `PZ_MCP_DATA_DIR` and are a **disposable cache**, rebuilt by `parse_game_files` / `index_knowledge_base` / `index_javadocs`. To reset, stop the server and delete `data/` (or pass `forceReparse: true`). The schema is versioned internally and migrated on boot.

### SteamCMD setup (workshop download / analyze)

`workshop_download` / `workshop_analyze` need Valve's [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD): install it (or set `STEAMCMD_PATH`), downloads land in `PZ_WORKSHOP_DIR`. For non-anonymous items set `STEAMCMD_USER` + `STEAMCMD_PASS` **and** `STEAMCMD_USE_CREDENTIALS=1` — credentials are never passed on the command line unless you opt in. Downloaded mods are read/analyzed only, never executed or auto-installed.

## Development

| Command               | Purpose                                                 |
| --------------------- | ------------------------------------------------------- |
| `npm run build`       | Compile TypeScript                                      |
| `npm run dev`         | Run with `tsx` in development mode                      |
| `npm start`           | Run the compiled server                                 |
| `npm run lint`        | Run ESLint                                              |
| `npm test`            | Build + run the full test suite (559 tests / 111 suites) |
| `npm run coverage`    | Test coverage report (after `npm test` has built)       |
| `npm run benchmark`   | Hermetic DB/FTS performance baselines                   |
| `npm run verify:deck` | Admin dashboard smoke check                             |

## Security & side-effect model

MCP clients can drive tools autonomously, so the server separates capabilities into three trust tiers:

| Tier                      | Tools                                                                                                                                                                                                                                                                                     | Side effects                                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **READ-ONLY**             | `search_*`, `list_*`, `check_references`, `analyze_mod`, `analyze_recipe_chain`, `detect_recipe_conflicts`, `workshop_search`, `workshop_get_details`, `generate_script`, `validate_script`, `workspace_list`, `workspace_inspect`, `modgen_templates`, `modgen_list`, `modgen_blueprint` | None — pure inspection                                                                                                                                                                                  |
| **LOCAL MUTATION**        | `parse_game_files`, `index_knowledge_base`, `index_javadocs`, `export_mod_script`, `workspace_create`, `modgen_generate`, `modgen_regenerate`                                                                                                                                             | Writes to the DB under `PZ_MCP_DATA_DIR`, the explicitly provided mod path (path-validated), or the workspace root only — traversal/symlink-escape rejected, atomic writes, dry-run for destructive ops |
| **EXTERNAL SIDE EFFECTS** | `workshop_download`, `workshop_analyze`                                                                                                                                                                                                                                                   | SteamCMD subprocess + downloads into `PZ_WORKSHOP_DIR`; `dryRun` preview available                                                                                                                      |

Hardening in place: path validation (absolute-only, no `..`, existence checks) · SteamCMD runs with timeout, captured output and app/size verification · downloaded mods are parsed in a throwaway DB, never executed · errors are sanitized (no stack traces, no local paths leaked) · startup env validation.

## Current boundaries

The server can create, edit, validate, and inspect mod projects, but **launching or play-testing** a mod in-game is out of scope for now. It also avoids unsupported performance claims and compatibility promises.

## Troubleshooting

| Symptom                                                   | Fix                                                                                                                  |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `Node.js >= 22.5 is required` / exits at boot             | Update Node — `node:sqlite` is built-in from 22.5                                                                    |
| `Invalid environment configuration: …`                    | Check the listed variable — values are validated at startup                                                          |
| `SteamCMD not found`                                      | Install SteamCMD or set `STEAMCMD_PATH`                                                                              |
| `search_vanilla` returns nothing                          | Run `parse_game_files` first (DB starts empty); `forceReparse: true` after game updates                              |
| `Could not detect Project Zomboid installation`           | Set `PROJECTZOMBOID_PATH` to the install dir                                                                         |
| Stale or missing knowledge results                        | Re-run `index_knowledge_base` (or `overwrite: true` for a full re-index)                                             |
| Java API search returns nothing                           | Run `index_javadocs` (no arguments — indexes the repo-shipped distilled JavaDocs)                                    |
| SQLite lock errors with the dashboard open                | Both processes share the DB in WAL mode; wait a moment and retry                                                     |

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
