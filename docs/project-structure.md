# Project Structure — pz-mcp-server

> Superseded. The canonical architecture + tool-surface reference is
> **`docs/project-summary.md`**; the operational reference (commands, shell
> constraints, conventions) is **`AGENTS.md`** at the repo root. This file
> keeps only a quick navigation map.

```
src/
  index.ts                 # MCP server bootstrap, prompts, knowledge:// resources, ALL_TOOLS
  schemas.ts               # every tool's zod input schema + TOOL_SCHEMAS (used by the bridge)
  tools/                   # 29 tool handlers + ToolRegistry (discovery, scripts, analysis, localData,
                           #   workshop, installer, modgen, workspace, registry, index)
  database/                # SQLite layer (node:sqlite) — items, references, mods, recipe_ingredients, FTS5
  parsers/                 # ProjectZomboidParser — game files + mod directories -> DB
  generators/              # ScriptGenerator — item/recipe/evolvedrecipe/fixing/sound/vehicle templates
  validation/              # ValidationEngine + ZedScripts knowledge layer (zedData/ dataset, 97 block types)
  knowledge/               # KnowledgeBaseManager (KB v2 chunked search), kbChunker, javadocs/JavaDocIndexer
  analyzers/               # ModAnalyzer (structure/lua/balance/deprecations) + RecipeAnalyzer (graph/conflicts)
  workspace/               # WorkspaceManager — rooted, safety-first mod project management
  modgen/                  # beginner mod generator (templates, b42Validator, assets)
  workshop/                # SteamWorkshopClient + SteamCmdDownloader
  modinstall/              # ModInstaller — .zip/folder -> mods dir
  utils/                   # shared helpers (scriptScanner, scriptSyntax, fts, config, blockTypes, ...)
admin/
  bridge.mjs               # Control Deck HTTP bridge (port 8787) — JSON-RPC over stdio to the MCP server
  index.html / main.mjs / data.mjs / style.css   # Control Deck UI
scripts/                   # maintenance + verification scripts (verify:kb, verify:deck, _verify_*, ...)
tests/                     # node:test suites (559 tests, 111 suites) — build first, import from dist/
knowledge-base/            # repo-shipped modding docs + javadocs/ (distilled Java API reference)
zedData/ (in src/validation/zedData/)  # vendored pz-scripts-data dataset + vanillaVerified.json
docs/                      # project-summary (canonical), kb-v2-*, mod-workspace, USAGE_EXAMPLES
```
