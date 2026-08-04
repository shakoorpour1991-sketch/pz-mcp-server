# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- Native dependencies require Visual Studio C++ Build Tools on Windows
- Several MCP tools have limited functionality (references table empty, evolvedrecipe/vehicle generation not implemented)

---

*This changelog starts at v1.0.0. Prior development was undocumented.*