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
| `path` | string | No | Docs directory (default: `PZ_MCP_KB_PATH` env or the repository's `knowledge-base/` folder) |
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

Graph edges come from the `recipe_ingredients` mirror (authoritative for B42
bracket alternatives and `tags[...]` inputs) unioned with the legacy
`references` table — so every item resolves both its producers and its
consumers regardless of the input form the script used. Tag inputs
(`tags[base:flour]`) resolve to the items that carry the tag; those ingredient
entries are flagged `tag: true`, and item nodes list recipes consuming any of
the item's tags. Dense seeds (e.g. Plank, charcoal) can legitimately set
`truncated` at shallow depths now that consumers are visible.
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

| Param | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | Workshop item id or URL (verified to be a Project Zomboid item first) |
| `dryRun` | boolean | No | Preview the download — resolve the item, verify the app, report the target path — without invoking SteamCMD or touching disk (default: `false`) |

**Size cap:** items larger than `PZ_MCP_MAX_DOWNLOAD_BYTES` (default 4 GiB) are refused before any download, in both `workshop_download` and `workshop_analyze`.

---

### `workshop_analyze`
Fetch & analyze: downloads the mod (skips if already present), parses its scripts into the database, runs the full analysis suite, and returns a Mod Report.

---

### `workshop_analyze`
Fetch & analyze: downloads the mod (skips if already present), parses its scripts into the database, runs the full analysis suite, and returns a Mod Report.

---

### `workspace_list`
List mod projects in the workspace (`PZ_MCP_WORKSPACE_DIR`, default `<data>/workspaces`) with their `mod.info` presence.

**Output:** Project names, paths, and whether each has a `mod.info`.

---

### `workspace_create`
Scaffold a new Build-42 mod project (`mod.info`, `workshop.txt`, `poster.png`, `common/` + versioned `media/` tree). Existing files are never modified; `dryRun` previews.

| Param | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Project folder name (single path segment) |
| `modId` | string | Yes | Unique mod id (`mod.info` `id=`) |
| `modName` | string | No | Display name (default: modId) |
| `author` | string | No | Mod author |
| `description` | string | No | Mod description |
| `version` | string | No | Mod version (default: `1.0`) |
| `buildVersion` | string | No | Numeric B42 version folder (default: `42`) |
| `template` | enum | No | `minimal` \| `full` (default: `full`) |
| `requires` | string[] | No | Other mod ids for `mod.info` `require=` |
| `sampleItem` | boolean | No | Generate a starter item script via `generate_script` |
| `includePoster` | boolean | No | Write `poster.png` (default: `true`) |
| `overwrite` | boolean | No | If the folder exists, only add missing scaffold (never edits existing files) |
| `dryRun` | boolean | No | Preview only — no disk changes (default: `false`) |

---

### `workspace_inspect`
Full structured inspection: metadata, supported builds, dependencies (+ missing), content types, file counts, and validation errors/warnings — same engine as `analyze_mod`.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `checkDependencies` | boolean | No | Resolve `require=` ids against known mods (default: `true`) |
| `includeFileList` | boolean | No | Include the recursive file list (default: `false`) |

---

### `workspace_status`
Fast project status: metadata, file/script/lua counts, content types, and an `ok` verdict (no script parsing).

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |

---

### `workspace_validate`
Validate structure + metadata: `mod.info` presence/well-formedness (missing `id`/`name`, duplicate keys), B42 layout (`common/`, version folder, content), dependency resolution.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |

---

### `workspace_list_files`
Recursively list files and directories inside a project (workspace-relative, root-confined).

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `path` | string | No | Relative path within the project (default: root) |
| `recursive` | boolean | No | Recurse into subdirectories (default: `true`) |
| `maxDepth` | number | No | Max directory depth (default: 12) |
| `maxEntries` | number | No | Cap on entries (default: 2000) |

---

### `workspace_read_file`
Read a text file from a project.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `path` | string | Yes | Workspace-relative file path |

---

### `workspace_write_file`
Write/create a file atomically (temp + rename). Refuses to overwrite unless `overwrite:true`.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `path` | string | Yes | Workspace-relative file path |
| `content` | string | Yes | File content (UTF-8) |
| `overwrite` | boolean | No | Replace an existing file (default: `false`) |
| `dryRun` | boolean | No | Preview only (default: `false`) |

---

### `workspace_patch_file`
Safely patch a file with context-matched replacements — every patch must match or nothing is written.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `path` | string | Yes | Workspace-relative file path |
| `patches` | array | Yes | `{ oldText, newText?, count?, description? }[]` — ordered, all-or-nothing |

---

### `workspace_delete_file`
Delete a file or directory. Requires `force:true` (+ `recursive:true` for non-empty dirs); `dryRun` previews by default.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `path` | string | Yes | Workspace-relative path |
| `force` | boolean | No | Explicit intent required for deletion (default: `false`) |
| `recursive` | boolean | No | Allow deleting a non-empty directory |
| `dryRun` | boolean | No | Preview only (default: `true`) |

---

### `workspace_rename_file`
Rename/move a file or directory within the project.

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `from` | string | Yes | Source workspace-relative path |
| `to` | string | Yes | Target workspace-relative path |
| `overwrite` | boolean | No | Replace the target if it exists (default: `false`) |

---

## Dependencies

- `@modelcontextprotocol/sdk` 1.30
- `node:sqlite` (built-in, no native dependencies)
- `zod` 3.25
- Node.js ≥ 22.5
