# AGENTS.md — pz-mcp-server (canonical context for AI coding agents)

Hermes references this file in every task prompt sent to OpenCode for this repo. Read it fully before doing anything.

## PLATFORM / SHELL (CRITICAL — read first)

- This is a **WINDOWS 11** machine. **It is NOT Linux.** Do not assume a POSIX environment.
- **Run shell commands with PowerShell syntax** (`Get-ChildItem`, `Set-Location`, `Get-Content`, `Select-String`, `Remove-Item`, `Copy-Item`, `Test-Path`).
- **Do NOT run Linux/bash commands** (`ls`, `cat`, `grep`, `sed`, `awk`, `pwd`, `rm -rf`, `mkdir -p`, `chmod`, `curl | bash`, `$()` substitutions) — they will fail or misbehave.
- Windows-style paths: `C:\Users\Administrator\orca\pz-mcp-server`. Forward slashes work for Node tooling and in npm scripts.
- Prefer **npm scripts** over raw shell commands wherever possible (see below) — they are the cross-platform, verified path.
- There is no `python3`; `python` is 3.11.15. Node is >= 18.

## Project overview

- `pz-mcp-server` — a **Model Context Protocol (MCP) stdio server** for **Project Zomboid mod development** (Build 42).
- TypeScript, **ESM** (`"type": "module"`), Node >= 18. Entry point: `src/index.ts`, compiles to `dist/` via `tsc`.
- Local SQLite database via native `better-sqlite3` (12.x) — if a rebuild is ever triggered on Windows it needs Visual Studio C++ Build Tools; don't touch `node_modules` unless asked.

## Commands (canonical verify steps — run exactly these)

| Purpose | Command |
|---|---|
| Compile | `npm run build` |
| Tests (build + Jest) | `npm test` — 32 tests, 4 suites, must stay green |
| Lint | `npm run lint` |
| Format | `npm run format` |
| Run server | `npm start` (compiled) / `npm run dev` (tsx) |

Always run build + tests + lint before declaring a task done. Jest runs via `node --experimental-vm-modules node_modules/jest/bin/jest.js` — this works on Windows.

## Architecture (src/)

- `parsers/` — Project Zomboid game-file parsers (items, recipes, sounds, vehicles, ...) feeding the SQLite DB
- `generators/` — script generation templates (`generate_script` tool: item/recipe/fixing/sound/evolvedrecipe/vehicle)
- `validation/` — script syntax + reference validation (`validate_script`, `check_references`)
- `database/` — SQLite layer (better-sqlite3)
- `knowledge/` — knowledge-base indexing/search (FTS5 + bm25): `index_knowledge_base`, `search_knowledge_base`, `list_knowledge_topics`
- `analyzers/` — mod analysis (`analyze_mod`: structure, Lua syntax, balance, deprecated APIs)
- `utils/` — shared helpers
- `index.ts` — MCP server bootstrap + tool registration (zod schemas)

## Key facts

- **MCP stdio protocol**: stdout is the wire. The pino logger writes **stderr-only (fd 2)** — never print anything to stdout.
- Game data for `parse_game_files`: Project Zomboid **Build 42.20** install at `D:\Games\ProjectZomboid\`. Path detection: hardcoded Windows paths, WSL paths, or explicit `gamePath` param.
- Modding knowledge base docs live at `D:\PZ-Modding\Documentation\` (markdown with YAML frontmatter, ~13 research files) — indexed with `index_knowledge_base`.
- Workspace status (Aug 2026): 32/32 tests green, lint+build clean, audit.md P0–P4 resolved except Steam-registry detection.

## Conventions

- **Do not commit, push, or rewrite git history unless explicitly asked.**
- Touch only what the task needs — no drive-by refactors, renames, or reformatting of unrelated code. Match existing style.
- New MCP tools: register in `src/index.ts` with a zod schema; add tests to `tests/`; update README + CHANGELOG.
- Keep the logger stderr-only; keep stdout clean.
