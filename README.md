# Project Zomboid MCP Server

A local-only Model Context Protocol (MCP) stdio server for Project Zomboid mod development, providing script validation, generation, and contextual assistance. Connects to any MCP client (e.g., Claude Desktop) via stdio.

## Features

### Available Tools
- **search_vanilla** — Full-text search of parsed vanilla game data (items, recipes, sounds, vehicles)
- **generate_script** — Generate `item`, `recipe`, `fixing`, `sound`, `evolvedrecipe`, and `vehicle` scripts using templates
- **validate_script** — Syntax and reference validation with error/warning/suggestion output
- **check_references** — Validate item, sound, and sprite references against the database (run `parse_game_files` first)
- **analyze_mod** — Mod directory analysis: structure validation, Lua syntax checking, balance metrics, deprecated API detection
- **parse_game_files** — Parse Project Zomboid game files and populate the local SQLite database
- **index_knowledge_base** — Index markdown modding knowledge base docs (title, source, content) into a searchable FTS database
- **search_knowledge_base** — Full-text search of knowledge base docs with relevance ranking and topic filter
- **list_knowledge_topics** — List all indexed knowledge base topics with line/word/char stats

### Path Detection
- Hardcoded path checks for common Project Zomboid install locations on Windows
- WSL path detection
- Manual path override via `gamePath` parameter

### Build 42 Compatibility
- Supports the Build 42 mod folder structure

### Dependencies
- `@modelcontextprotocol/sdk` 1.30
- `node:sqlite` (built-in, no native dependencies)
- `zod` 3.25
- Node >= 22.5

---

## Installation

### Prerequisites
- **Node.js 22.5.0 or higher**
- **npm** package manager

### Setup
```bash
git clone https://github.com/minimax/pz-mcp-server.git
cd pz-mcp-server
npm install
npm run build
```

### npm Scripts
| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript (`tsc`) |
| `npm run dev` | Run with `tsx` (dev mode, requires successful build) |
| `npm start` | Run compiled server (`node dist/index.js`) |
| `npm run lint` | ESLint |
| `npm test` | Build + Jest (66 tests: 20 integration + 46 unit) |

---

## Usage

### Claude Desktop (STDIO)

Add to your `claude_desktop_config.json`:
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

Restart Claude Desktop after editing the config. Requires a successful `npm run build` first.

### Manual STDIO
```bash
node dist/index.js
```

---

## MCP Tools

### search_vanilla
Search parsed vanilla game content with full-text search.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `query` | string | Yes | Search query |
| `type` | enum | No | Filter: `item`, `recipe`, `sound`, `vehicle`, `all` (default: `all`) |
| `category` | string | No | Filter by item category |
| `limit` | number | No | Max results, 1–100 (default: 20) |

**Output:** Text listing matching items with name, type, display name, and up to 5 properties.

---

### generate_script
Generate Project Zomboid scripts from templates.

**Supported types:** `item`, `recipe`, `fixing`, `sound`, `evolvedrecipe`, `vehicle`

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `type` | enum | Yes | Script type |
| `name` | string | Yes | Name of the item/recipe/etc |
| `properties` | object | Yes | Script properties (e.g., `DisplayName`, `Type`, `MaxDamage`) |
| `module` | string | No | Module name (default: `"Base"`) |

**Output:** Formatted script block with generated Lua/INI content.

---

### validate_script
Validate script syntax and references.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | Script content to validate |
| `type` | enum | No | Expected type: `item`, `recipe`, `evolvedrecipe`, `fixing`, `sound`, `vehicle` |
| `strict` | boolean | No | Enable strict validation (default: `false`) |

**Output:** Validation status (valid/invalid), list of errors (with line numbers and suggestions), warnings, and general suggestions.

---

### check_references
Validate item, sound, and sprite references against the parsed database.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `references` | string[] | Yes | List of reference strings to check |
| `type` | enum | No | Type filter: `item`, `sound`, `sprite`, `all` (default: `all`) |

**Output:** Count of valid/invalid references, list of invalid refs with error messages and suggestions.

> Note: The database is empty until `parse_game_files` has been run.

---

### analyze_mod
Analyze a mod directory for structure, syntax, compatibility, and balance.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `modPath` | string | Yes | Path to mod directory |
| `checkBalance` | boolean | No | Perform balance analysis (default: `true`) |
| `checkCompatibility` | boolean | No | Check vanilla compatibility (default: `true`) |
| `generateReport` | boolean | No | Generate detailed report (default: `true`) |

**Output:** Mod name, path, structure validation results (mod. info, scripts, Lua, assets), issues grouped by severity, balance score and recommendations.

---

### parse_game_files
Parse Project Zomboid game files and populate the local SQLite database.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `gamePath` | string | No | Path to PZ installation (auto-detected if omitted) |
| `forceReparse` | boolean | No | Re-parse even if data exists (default: `false`) |

**Output:** Counts of parsed items, recipes, sounds, vehicles; file count and parse time; any parse errors.

---

### index_knowledge_base
Index markdown knowledge base docs (title, source, content) into a searchable FTS database.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `path` | string | No | Path to the knowledge base docs dir (default: `PZ_MCP_KB_PATH` env or `D:\PZ-Modding\Documentation`) |
| `overwrite` | boolean | No | Re-index existing topics (default: `true`) |

**Output:** Counts of indexed topics, files found, total characters; any per-file errors.

---

### search_knowledge_base
Full-text search of knowledge base docs with relevance ranking and topic filter.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `query` | string | Yes | Search query |
| `topic` | string | No | Filter by exact topic (filename without `.md`) |
| `limit` | number | No | Max results, 1–100 (default: 10) |

**Output:** Matching topics ranked by relevance (bm25), each with title, score, and a content snippet.

---

### list_knowledge_topics
List all indexed knowledge base topics with stats.

**Parameters:** none

**Output:** Each indexed topic with title, line/word/char counts.

---

## Development Workflow

1. **Build:** `npm run build`
2. **Parse game data:** Call `parse_game_files` with your PZ install path (or let it auto-detect)
3. **Search for references:** Use `check_references` to validate item/sound/sprite names against the database
4. **Generate scripts:** Use `generate_script` to scaffold item/recipe/fixing/sound scripts
5. **Validate:** Use `validate_script` to check syntax before adding to your mod
6. **Analyze:** Use `analyze_mod` to audit your mod's structure, balance, and compatibility

---

## Supported File Formats
- **mod.info** — Mod metadata
- **Script files (.txt)** — Items, recipes, fixing scripts, sounds
- **Lua files (.lua)** — Syntax checking (parentheses/brackets balance), deprecated API detection

---

## Architecture

```
MCP Server (StdioServerTransport)
  ├── PathManager          — Game install detection
  ├── DatabaseManager      — SQLite + FTS5
  ├── KnowledgeBaseManager — KB docs indexing + FTS5 search
  ├── ProjectZomboidParser — Game file parsing
  ├── ScriptGenerator      — Template-based script generation
  ├── ValidationEngine     — Syntax + reference validation
  └── ModAnalyzer          — Mod analysis + quality metrics
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

---

## License

MIT License — see the [LICENSE](LICENSE) file for details.

---

**Built for the Project Zomboid modding community**