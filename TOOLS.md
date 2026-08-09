# Tool Reference

Full parameter reference for every MCP tool exposed by the server. See the [README](README.md) for setup and an overview.

---

### `search_vanilla`
Search parsed vanilla game content with full-text search.

| Param | Type | Required | Description |
|---|---|---|---|
| `query` | string | Yes | Search query |
| `type` | enum | No | `item`, `recipe`, `sound`, `vehicle`, `all` (default: `all`) |
| `category` | string | No | Filter by item category |
| `limit` | number | No | Max results, 1–100 (default: 20) |

**Output:** Matching items with name, type, display name, and up to 5 properties.

---

### `generate_script`
Generate Project Zomboid scripts from templates.

**Supported types:** `item`, `recipe`, `fixing`, `sound`, `evolvedrecipe`, `vehicle`

| Param | Type | Required | Description |
|---|---|---|---|
| `type` | enum | Yes | Script type |
| `name` | string | Yes | Name of the item/recipe/etc |
| `properties` | object | Yes | Script properties (e.g. `DisplayName`, `Type`, `MaxDamage`) |
| `module` | string | No | Module name (default: `"Base"`) |
| `balance` | enum | No | `vanilla` (default), `powerful`, `weak`, `custom` (no adjustments) |
| `includeComments` | boolean | No | Include explanatory comments (default: `false`) |

**Output:** Formatted script block with generated Lua/INI content.

---

### `validate_script`
Validate script syntax and references.

| Param | Type | Required | Description |
|---|---|---|---|
| `content` | string | Yes | Script content to validate |
| `type` | enum | No | `item`, `recipe`, `evolvedrecipe`, `fixing`, `sound`, `vehicle` |
| `strict` | boolean | No | Enable strict validation (default: `false`) |

**Output:** Valid/invalid status, errors (with line numbers + suggestions), warnings, general suggestions.

---

### `check_references`
Validate item, sound, and sprite references against the parsed database.

| Param | Type | Required | Description |
|---|---|---|---|
| `references` | string[] | Yes | List of reference strings to check |
| `type` | enum | No | `item`, `sound`, `sprite`, `all` (default: `all`) |

**Output:** Count of valid/invalid references, list of invalid refs with error messages and suggestions.

> Requires `parse_game_files` to have been run first — the database is empty otherwise.

---

### `analyze_mod`
Analyze a mod directory for structure, syntax, compatibility, and balance.

| Param | Type | Required | Description |
|---|---|---|---|
| `modPath` | string | Yes | Path to mod directory |
| `checkBalance` | boolean | No | Perform balance analysis (default: `true`) |
| `checkCompatibility` | boolean | No | Check vanilla compatibility (default: `true`) |

**Output:** Mod name/path, structure validation (mod.info, scripts, Lua, assets), issues by severity, balance score and recommendations.

---

### `parse_game_files`
Parse Project Zomboid game files and populate the local SQLite database.

| Param | Type | Required | Description |
|---|---|---|---|
| `gamePath` | string | No | Path to PZ install (auto-detected if omitted) |
| `forceReparse` | boolean | No | Re-parse even if data exists (default: `false`) |

**Output:** Counts of parsed items, recipes, sounds, vehicles; file count and parse time; any parse errors.

---

### `index_knowledge_base`
Index markdown knowledge base docs into a searchable FTS database.

| Param | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | Docs directory (default: `PZ_MCP_KB_PATH` env or `D:\PZ-Modding\Documentation`) |
| `overwrite` | boolean | No | Full re-index (default: `true`); `false` = mtime-based incremental sync |

**Output:** Counts of indexed topics, files found, total characters; any per-file errors.

---

### `search_knowledge_base`
Full-text search of knowledge base docs with relevance ranking and topic filter.

| Param | Type | Required | Description |
|---|---|---|---|
| `query` | string | Yes | Search query |
| `topic` | string | No | Filter by exact topic (filename without `.md`) |
| `limit` | number | No | Max results, 1–100 (default: 10) |

**Output:** Matching topics ranked by relevance (bm25), each with title, score, and a content snippet.

---

### `list_knowledge_topics`
List all indexed knowledge base topics with stats. No parameters.

**Output:** Each indexed topic with title, line/word/char counts.

---

### `analyze_recipe_chain`
Walk the recipe dependency graph built during parsing.

| Param | Type | Required | Description |
|---|---|---|---|
| `seed` | string | Yes | Item or recipe id to start from |
| `direction` | enum | No | `upstream`, `downstream`, `both` (default) |
| `maxDepth` | number | No | Chain depth, 1–10 (default: 3) |
| `expandNode` | string | No | Grow in place: return only the one-hop neighborhood around this node id (already present in a previous result) so clients merge a delta instead of re-walking from the seed |
| `target` | string | No | Find the shortest crafting path from `seed` to this item/recipe id — the reply carries the ordered node ids in `path` (`pathFound: false` when unreachable) |

**Output:** Ordered chain of nodes — recipes with ingredients/results, items with producers/consumers. Node ids are canonicalized to the stored item id, and `seed` accepts bare (`Axe`), module-qualified (`Base.Axe`) or tag (`base:axe`) spellings. `truncated` is true when the depth limit or the 500-node safety cap cut the walk short.

**Rich payloads:** every node also carries what the Control Deck inspector shows — item nodes have `props` (Type/category/weight/calories/hunger/thirst/tags), recipe nodes have `meta` (category/time/skill/skillLevel) and `tools` (tool refs with counts). Recipe nodes that produce one of their own ingredients are flagged `cycle: true`, and the walk returns a `cycles` list (`{recipe, item}`). In `target`/`expandNode` mode the result also carries `path`/`pathFound` and `expandedNode` respectively.

**Conflict severity:** `detect_recipe_conflicts` now ranks each duplicate — `severity: "high"` when the output resolves to a real item row (one recipe silently wins), `severity: "low"` for tag multi-path and `mapper:X` virtual outputs the game tolerates. `kind` is `exact` / `tag` / `mapper`.

---

### `detect_recipe_conflicts`
Find items produced by more than one recipe — duplicate crafting paths the game may resolve unexpectedly.

| Param | Type | Required | Description |
|---|---|---|---|
| `limit` | number | No | Max conflicts, 1–200 (default: 50) |

**Output:** List of conflicting items and the recipes that produce each — each conflict carries `severity` (`high` for exact duplicates on a real item row, `low` for tag/mapper multi-path the game tolerates) and `kind` (`exact` / `tag` / `mapper`).

---

### `export_mod_script`
Generate a script and (optionally) write it into a mod's `media/scripts` folder.

| Param | Type | Required | Description |
|---|---|---|---|
| `modPath` | string | Yes | Mod directory (must be absolute and existing) |
| `type` | enum | Yes | `item`, `recipe`, `evolvedrecipe`, `fixing`, `sound`, `vehicle` |
| `name` | string | Yes | Script name (sanitized into the output filename) |
| `properties` | object | No | Script properties (default: `{}`) |
| `module` | string | No | Module name (default: `"Base"`) |
| `balance` | enum | No | Balance mode (same as `generate_script`) |
| `includeComments` | boolean | No | Include explanatory comments |
| `dryRun` | boolean | No | Preview only, no disk changes (default: `true`) |

**Output:** Target file path + generated content. With `dryRun: false`, the file is written inside `<modPath>/media/scripts`.

---

### `workshop_search`
Browse the Project Zomboid Steam Workshop (AppID 108600) by text. Best-effort keyless HTML scrape — paste a URL or id for guaranteed resolution.

---

### `workshop_get_details`
Resolve full metadata for a workshop item from its id or Steam Community URL. Keyless Steam Web API, 24h cache; `forceRefresh` bypasses it.

---

### `workshop_download`
Download a workshop item via SteamCMD into the workshop workspace directory (`PZ_WORKSHOP_DIR` or `<Steam>/steamapps/workshop/content/108600`). Refuses non-PZ items; disk-space guarded.

---

### `workshop_analyze`
Fetch & analyze: downloads the mod (skips if already present), parses its scripts into the database, runs the full analysis suite, and returns a Mod Report.

---

## Dependencies

- `@modelcontextprotocol/sdk` 1.30
- `node:sqlite` (built-in, no native dependencies)
- `zod` 3.25
- Node.js ≥ 22.5
