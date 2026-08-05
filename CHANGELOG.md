# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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