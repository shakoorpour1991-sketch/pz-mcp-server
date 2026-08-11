# Tool Reference

Full parameter reference for every MCP tool exposed by the server. See the [README](README.md) for setup and an overview.

---

### `search_vanilla`

Search vanilla Project Zomboid content with intelligent matching and structured filters (category, weight, calories, tags, type, module, script path, properties, recipe usage, sprite/sound). See the README for the search→generate→validate workflow.

| Param               | Type     | Required | Description                                                                                                                      |
| ------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `query`             | string   | No       | FTS search query — prefix-matched for autocomplete. Optional when filters are used.                                              |
| `id`                | string   | No       | **Exact canonical lookup** — e.g. `Base.Hammer`. Resolves typos (`Hamer` → `Hammer`) with confidence. Fast path; see feature 5.  |
| `type`              | enum     | No       | `item`, `recipe`, `sound`, `vehicle`, `all` (default: `all`)                                                                     |
| `category`          | string   | No       | Filter by item category                                                                                                          |
| `module`            | string   | No       | Filter by exact module name (e.g. `Base`)                                                                                        |
| `scriptPath`        | string   | No       | Substring match on script file path (e.g. `recipes/cooking`)                                                                     |
| `tags`              | string   | No       | Filter by tags (comma-separated, matches if ANY tag present)                                                                     |
| `metalValueMin`     | number   | No       | Minimum metal value                                                                                                              |
| `metalValueMax`     | number   | No       | Maximum metal value                                                                                                              |
| `attachmentType`    | string   | No       | Filter by attachment type                                                                                                        |
| `minWeight`         | number   | No       | Minimum weight                                                                                                                   |
| `maxWeight`         | number   | No       | Maximum weight                                                                                                                   |
| `minCalories`       | number   | No       | Minimum calories                                                                                                                 |
| `maxCalories`       | number   | No       | Maximum calories                                                                                                                 |
| `properties`        | array    | No       | **Structured property constraints** — ANDed together. `[{key: MaxDamage, min: 5}, {key: Weight, max: 2}]` → items with `MaxDamage > 5 AND Weight < 2`. Each constraint: `key` + optional `eq`/`min`/`max` |
| `usedInRecipe`      | boolean  | No       | Only items that appear as recipe ingredients (handles tag inputs, bracket alternatives)                                           |
| `producedByRecipe`  | boolean  | No       | Only items produced by recipes as results/outputs                                                                                |
| `sprite`            | string   | No       | Filter by sprite reference (WeaponSprite, Icon, etc.)                                                                            |
| `sound`             | string   | No       | Filter by sound reference (BreakSound, HitSound, etc.)                                                                           |
| `includeRelations`  | boolean  | No       | If true, the primary result carries a **knowledge graph**: recipes using/producing it, sounds/sprites it references, sibling scripts, and KB documentation |
| `format`            | enum     | No       | `"text"` (default) or `"ai"` — AI mode returns compact deterministic context blocks with explicit instructions to use exact identifiers; designed to reduce hallucination |
| `limit`             | number   | No       | Max results, 1–100 (default: 20)                                                                                                 |

**Output:**
- `count`, `build`, `results[]` — each result carries `id`, `name`, `displayName`, `type`, `module`, `category`, `weight`, `calories`, `tags`, `properties`, and `provenance` (`source`, `build`, `path`, `confidence`).
- When `id` is used: match metadata (`method`, `confidence`).
- When the query resolves a typo: `resolved` block with `canonicalId` and `confidence`.
- When `includeRelations` is true: `relations` block on the primary result.
- **Distribution search:** not supported — loot tables (`distributions.lua`) are not parsed into the SQLite database.

> **Tip for AI agents:** use `id` for known identifiers (fast, exact, confident). Use `format: "ai"` to get compact blocks that tell the language model "use these exact values, don't invent properties."

---

### `search_recipes`

Search the parsed recipe table by name, category, skill, ingredients or results — structured crafting-data search, distinct from `search_vanilla`'s mixed content.

| Param           | Type   | Required | Description                                                                        |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------- |
| `query`         | string | No       | Free-text search on recipe name or id                                              |
| `category`      | string | No       | Filter by recipe category (e.g. `Carpentry`, `Cooking`, `Repair`)                  |
| `skill`         | string | No       | Filter by required skill (e.g. `Woodwork`, `Blacksmith`, `Carpentry`)              |
| `minSkillLevel` | number | No       | Minimum required skill level                                                       |
| `maxSkillLevel` | number | No       | Maximum required skill level                                                       |
| `ingredient`    | string | No       | Recipes using this item or tag as an ingredient (accepts `Base.Nails`, `Nails`, or `base:nails`) |
| `tool`          | string | No       | Recipes requiring this item or tag as a tool (`mode:keep` input)                   |
| `result`        | string | No       | Recipes producing this item                                                        |
| `limit`         | number | No       | Max results, 1–100 (default: 20)                                                   |

**Output:** Matching recipes with id, name, category, skill requirements, ingredients and results.

---

### `generate_script`

Generate Project Zomboid scripts from templates.

**Supported types:** `item`, `recipe`, `fixing`, `sound`, `evolvedrecipe`, `vehicle`

| Param             | Type    | Required | Description                                                        |
| ----------------- | ------- | -------- | ------------------------------------------------------------------ |
| `type`            | enum    | Yes      | Script type                                                        |
| `name`            | string  | Yes      | Name of the item/recipe/etc                                        |
| `properties`      | object  | Yes      | Script properties (e.g. `DisplayName`, `Type`, `MaxDamage`)        |
| `module`          | string  | No       | Module name (default: `"Base"`)                                    |
| `balance`         | enum    | No       | `vanilla` (default), `powerful`, `weak`, `custom` (no adjustments) |
| `includeComments` | boolean | No       | Include explanatory comments (default: `false`)                    |

**Output:** Formatted script block with generated Lua/INI content.

---

### `validate_script`

Validate Project Zomboid script syntax, structure and references — including the **ZedScripts knowledge-layer diagnostics** (deterministic checks ported from the [ZedScripts](https://github.com/PZ-Wiki-Modding/ZedScripts) extension and its `pz-scripts-data` dataset) designed to catch AI-generated code that looks plausible but is invalid: unknown parameters (with typo suggestions), missing required parameters, invalid values, wrong types, deprecated parameters, duplicate parameters, missing values, missing commas, block-ID rules, unknown block keywords, and `craftRecipe` input/output shape mistakes.

The knowledge layer scans **every block type the dataset describes (97 block types)** — `entity`, `model`, `fluid`, `physics`, `animation`, `timedAction`, `mannequin`, `character_trait_definition`, `component *` variants and the rest — including **nested blocks** (components inside items/entities, `clip` inside `sound`, `part`/`attachment` inside vehicles, `face`/`layer` in entity sprite configs), each validated against its own parameter knowledge with **hierarchy checks** (`WRONG_PARENT`/`MISSING_PARENT`: a `clip` at module level, a `component` inside a `craftRecipe`, ...) and context-aware ID rules (`parentsWithout`/`optional`). A typo'd component variant (`component FluidConatiner`) is reported as `INVALID_ID` with the valid variants and a did-you-mean suggestion.

**Verified game data wins.** The dataset does not model every keyword/parameter the game itself ships, so a vanilla-verified extensions table (`zedData/vanillaVerified.json`, regenerable via `scripts/_extract_vanilla_verified.mjs`) silently accepts what the real 42.20 script tree uses — `xuiConfig` blocks, `component SpriteConfig` `dontNeedFrame`/`canBePadlocked`/`BreakSound`/…, `part` `hasLightsRear`, `passenger` `door2`/`hasRoof`, `contextEntry` `icon`/`customSubmenu`, `physics` `radius`, `vehicle` `seatNumber`, `entity` `Description`/`BuildDescription`, … — instead of flagging them unknown. The dataset's dependent-parameter (`needs`) rules are not enforced (vanilla violates them and loads fine), and recipe **fluid amounts** (`-fluid 0.2 categories[Water]`) may be decimal like the vanilla recipes. Running the engine over all 1,004 vanilla script files yields zero errors — the only warnings left are genuine deprecations the dataset documents (e.g. vehicle `frontEndHealth` → `frontEndDurability`).

Robustness and parity details: double commas are flagged `INVALID_COMMA` (property lines and recipe input/output entries); a single wrong value on a scalar parameter is `WRONG_VALUE` while array/object lists keep `WRONG_VALUES`; braces inside quoted values are ignored when tracking block boundaries (an unbalanced `{` in a `DisplayName` can't corrupt the scan); `template vehicle <Name>` headers keep the full multi-word name (only the first token is the type qualifier); a required parameter or `inputs`/`outputs` section header inside a `/* ... */` comment can't satisfy its check; and legacy B41 `recipe` headers are never flagged as unknown blocks. The whole layer can be switched off per call with **`zedScripts: false`** (e.g. validating a B41-only codebase).

| Param      | Type    | Required | Description                                                                                                               |
| ---------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `content`  | string  | No       | Script content to validate (required unless `filePath` is given)                                                          |
| `filePath` | string  | No       | Absolute path to a `.txt` script file — read from disk (content is ignored); every diagnostic is then scoped to this file |
| `type`     | enum    | No       | `item`, `recipe`, `evolvedrecipe`, `fixing`, `sound`, `vehicle`                                                           |
| `strict`   | boolean | No       | Enable strict validation (default: `false`)                                                                               |

**Output:** Valid/invalid status, errors and warnings — each with file (when `filePath` is used), line, column, diagnostic code, message and an actionable suggestion; a `zedScripts` summary carries the knowledge-layer diagnostic count and its upstream dataset source/commit (version-aware).

> **Validate → fix → revalidate loop for AI-generated mods:** run `validate_script` with the generated script (or `filePath` on the written file) or `analyze_mod` on the mod folder — both surface the ZedScripts diagnostics per file/line — fix the flagged lines, then validate again until clean. `modgen_generate` / `modgen_regenerate` surface the same structured diagnostics (`scriptDiagnostics`: file/line/column/code/severity/message/suggestion) on every generated mod, so a mod is never just "ready/not ready" — the findings say why.

---

### `check_references`

Validate item, sound, and sprite references against the parsed database.

| Param        | Type     | Required | Description                                       |
| ------------ | -------- | -------- | ------------------------------------------------- |
| `references` | string[] | Yes      | List of reference strings to check                |
| `type`       | enum     | No       | `item`, `sound`, `sprite`, `all` (default: `all`) |

**Output:** Count of valid/invalid references, list of invalid refs with error messages and suggestions.

> Requires `parse_game_files` to have been run first — the database is empty otherwise.

---

### `analyze_mod`

Analyze a mod directory for structure, syntax, compatibility, and balance.

| Param                | Type    | Required | Description                                   |
| -------------------- | ------- | -------- | --------------------------------------------- |
| `modPath`            | string  | Yes      | Path to mod directory                         |
| `checkBalance`       | boolean | No       | Perform balance analysis (default: `true`)    |
| `checkCompatibility` | boolean | No       | Check vanilla compatibility (default: `true`) |

**Output:** Mod name/path, structure validation (mod.info, scripts, Lua, assets), issues by severity, balance score and recommendations.

---

### `parse_game_files`

Parse Project Zomboid game files and populate the local SQLite database.

| Param          | Type    | Required | Description                                     |
| -------------- | ------- | -------- | ----------------------------------------------- |
| `gamePath`     | string  | No       | Path to PZ install (auto-detected if omitted)   |
| `forceReparse` | boolean | No       | Re-parse even if data exists (default: `false`) |

**Output:** Counts of parsed items, recipes, sounds, vehicles; file count and parse time; any parse errors.

---

### `index_knowledge_base`

Index markdown knowledge base docs into the chunked search database. Docs are cleaned (TOC/footer removal, api-docs table collapse), split into **section chunks**, tagged with a portable **doc type** (`wiki` / `api-docs` / `mods-analysis` / `research`), and stored with external-content FTS. JavaDocs are a separate corpus — run `index_javadocs` (this tool skips the `javadocs/` directory by default).

| Param       | Type    | Required | Description                                                                                 |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------- |
| `path`      | string  | No       | Docs directory (default: `PZ_MCP_KB_PATH` env or the repository's `knowledge-base/` folder) |
| `overwrite` | boolean | No       | Full re-index (default: `true`); `false` = mtime-based incremental sync                     |

**Output:** Counts of indexed topics, files found, section chunks, total characters; any per-file errors.

---

### `index_javadocs`

Index Java API docs into the knowledge base so `search_knowledge_base` returns class/interface/method results. **Works out of the box on any machine**: with no arguments it indexes the **repo-shipped distilled JavaDocs markdown** (`knowledge-base/javadocs/` — one file per API type, ~4,700 types from the Unofficial PZ JavaDocs), so no game install, raw HTML tree, or machine-specific path is needed.

Optionally re-ingest from a raw generated JavaDoc HTML tree (the tree with package folders + `*.html` class pages): the pipeline recursively keeps only real API type pages (detected mechanically by the `javadoc/ClassWriter` generator meta tag — no manual file list), parses each page programmatically into structured API knowledge, renders it into the KB's markdown representation, and indexes it.

| Param       | Type    | Required | Description                                                                                                                                                                                                                             |
| ----------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `source`    | string  | No       | Path to a raw generated JavaDocs HTML directory to re-ingest from scratch. When omitted, the repo-shipped `knowledge-base/javadocs/` distilled markdown is indexed directly (default: `PZ_MCP_JAVADOCS_PATH` env, else the shipped dir) |
| `output`    | string  | No       | Directory for generated per-type markdown (default: `PZ_MCP_JAVADOCS_KB_DIR` env or `<data>/javadocs-kb`); only used when `source` is provided                                                                                          |
| `overwrite` | boolean | No       | Full re-index (default: `true`); `false` = mtime-based incremental sync                                                                                                                                                                 |

**What is extracted per type:** package, kind (class/interface/enum/record/annotation), fully-qualified name, modifiers, type signature, inheritance chain, superclass, implemented interfaces, description, deprecated flags, and every field / constructor / method — each with its full signature, modifiers, return type, parameters (name, type, javadoc description) and source/version tag (e.g. `Unofficial PZ JavaDocs 42.20.0`).

**What is skipped:** navigation, search and index assets (`index-files/`, `search.html`, `member-search-index.js`, …), duplicate `class-use/` pages, `package-summary`/`package-tree`/`package-use` pages, and any other HTML that is not a `javadoc/ClassWriter` page.

**Output:** `ingest` (class pages discovered, parsed, markdown written, unchanged skipped, version) + `index` (KB topics indexed). Re-runs are idempotent — unchanged pages are not rewritten.

---

### `embed_knowledge`

**Semantic indexing (Phase 5, fully opt-in)** — embed every knowledge chunk that does not have a vector yet into the schema-v5 `knowledge_chunk_vectors` table. Nothing happens at install, boot, or `index_*` time: the embedding model downloads **only** when this tool runs non-dry, **once**, into `<data>/models/`, and persists across restarts (a cached second run never re-downloads). Re-running is **incremental** — only chunks without a vector (or whose model changed) are embedded, so it is cheap and safe to re-run after any re-index. Chunk text embedded = `title + content` (signature + body, so method overloads stay distinct).

| Param       | Type    | Required | Description                                                                                            |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `model`     | string  | No       | Embedding model id (default: `PZ_MCP_EMBEDDING_MODEL` or `Xenova/all-MiniLM-L6-v2`, 384 dims); changing the model forces a clean re-embed of every chunk |
| `batchSize` | number  | No       | Chunks per embedding batch (default: `PZ_MCP_EMBEDDING_BATCH_SIZE` or 32, 1–512)                       |
| `limit`     | number  | No       | Cap on chunks embedded this run (useful for smoke tests / incremental chunks)                          |
| `dryRun`    | boolean | No       | Preview what would be embedded — **no download, no embedding, no writes** (default: `false`)           |

**Output:** `model`, `dims`, `total` (chunks in the KB), `vectors` (rows stored after the run), `embedded` (this run), `skipped` (already done), `modelChanged`, `dryRun`, `durationMs`.

> Local WASM embeddings via `@huggingface/transformers` — the repo keeps its **zero-native-dependency** identity (an npm override maps `onnxruntime-node` → `onnxruntime-web`, pure JS/WASM).

---

### `search_knowledge_base`

Full-text search of knowledge base docs with relevance ranking. Exact terms are matched **first**; only when a plain match returns nothing does the query re-run with **prefix + inflection expansion** (a suffix-expansion fallback: `"getPlay"` resolves to `getPlayer`/`getPlayers`, `"reload"` to `reloads`/`reloading` — the index itself is plain `unicode61`, because porter stemming silently broke trailing-y prefix fallbacks). Common queries never pay the `"cooking"` → `cookie` noise tax since expansion only fires on a no-hit. **Results are section-level chunks** — each hit is a precise unit (a wiki section or a single javadocs method/field) with its own `topic` id, readable directly via `knowledge://<topic>` (or `knowledge://<topic>#<section>` for one section).

**Type-aware defaults**: 96.8% of the corpus is javadocs and most of those are bodyless bare signatures (decompiled PZ fields have no javadoc comments), so a flat ranking used to flood natural-language queries with constants. A mixed search (no `type`/`types`/`package` filter) ranks **prose docs (wiki/research/api-docs/mods-analysis) first when the query reads like natural language** ("anvil", "blacksmithing") and **javadocs first when it looks like an identifier** (`getPlayer`, `ANVIL_WEIGHT`, `Base.Hammer`) — with bodyless signature chunks and table-heavy docs downweighted in the prose case, and a **per-doc cap** so one giant doc can't flood the top-N. An explicit filter always uses pure bm25 rank. **bm25 column weights** favor the chunk topic/title/tags over the long content body, so identifier searches surface the exact member first.

**Semantic (Phase 5, opt-in)**: pass `semantic: true` for **hybrid retrieval** — the query is embedded and cosine-scanned against the vector index, then the semantic top-K is merged with the keyword top-K and re-ranked by `0.7·bm25 + 0.3·cosine`. Conceptual questions with zero keyword overlap still find the right doc (no keyword hit → semantic hits are still returned). Requires vectors — run `embed_knowledge` once first; `semantic: true` without vectors returns a friendly "run embed_knowledge first" error (never a crash, never a silent FTS fallback).

| Param              | Type      | Required | Description                                                                                                                                        |
| ------------------ | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query`            | string    | Yes      | Search query                                                                                                                                       |
| `topic`            | string    | No       | Filter by exact doc topic — the path-prefixed id (e.g. `wiki/Java`, `javadocs/zombie.iso.IsoObject`)                                                |
| `type`             | enum      | No       | Single doc type filter: `wiki`, `api-docs`, `javadocs`, `mods-analysis`, `research` (alias for a one-element `types`)                               |
| `types`            | enum[]    | No       | **Multi-select** doc types, e.g. `["research", "wiki"]` (prose only, no javadocs) — express intent precisely in one call                           |
| `package`          | string    | No       | Filter by Java package (javadocs only, e.g. `zombie.iso`)                                                                                           |
| `includeContent`   | boolean   | No       | Return full chunk bodies inline (search + read in one call — no `get_knowledge_section` round trips); bodies are filled in rank order up to the budget |
| `maxContent`       | number    | No       | Total char budget for inline bodies (default 8,000, max 20,000; the first overflow is truncated, later results omit content)                        |
| `maxResultsPerDoc` | number    | No       | Cap results per doc (default 3; 0 disables) — a top-10 that samples several docs beats ten hits from a single loot table                            |
| `semantic`         | boolean   | No       | **Hybrid retrieval** (default: `false` — byte-identical to today's FTS-only path): embed the query and blend semantic (cosine) hits in as `0.7·bm25 + 0.3·cosine`. Requires `embed_knowledge` to have been run once |
| `limit`            | number    | No       | Max results, 1–100 (default: 10)                                                                                                                    |

**Output:** Chunks ranked by relevance (bm25), each with `topic` (chunk id), `docTopic` (file-level topic), title, section, score, portable `type`, `source`, a line-window snippet, **read-cost `chars`/`words` metadata** (agents can budget context before reading), and — when `includeContent` was requested — the capped `content` body. JavaDocs must be indexed with `index_javadocs` first.

---

### `get_knowledge_section`

Read **exactly one section** (or a batch of them) of a knowledge base doc by name — no slug guessing. Pass a doc topic (`wiki/Java`, `javadocs/zombie.iso.IsoGameCharacter`) plus the section heading or javadocs member name (`Section One`, `getPlayer`, `public static void Load()`), or a full chunk id (`wiki/Java#section-one`) to read it directly. Matched case-insensitively; on no match the reply lists the doc's available sections.

| Param      | Type     | Required | Description                                                                                                          |
| ---------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `topic`    | string   | Yes      | Doc topic (path-prefixed id) or a full chunk id (`doc#section`)                                                       |
| `section`  | string   | No       | Single section heading, member name, or chunk slug — omitted when `topic` already carries a `#section`                |
| `sections` | string[] | No       | **Batch mode**: resolve several headings/member names in one call (e.g. a handful of javadocs methods on one class) — each entry matched like `section`; a miss yields `null` in `results`, never an error |

**Output:** The single chunk (a wiki section or one javadocs method/field) with its chunk id, doc, title, and content — never the whole page. In batch mode, `results[]` (one entry per requested name, in order, `null` on miss) plus the doc's available sections. An agent hunting several method signatures fetches a handful of ~5-line member chunks in one round trip, not the 100 KB class page.

---

### `list_knowledge_topics`

List indexed knowledge base topics with stats (line/word/char counts — precomputed at index time, instant even with ~5,000 topics). Optional filters keep the reply lean instead of forcing an agent to pay for the whole corpus.

| Param    | Type    | Required | Description                                                                                                    |
| -------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `type`   | enum    | No       | Single doc type filter (alias for a one-element `types`)                                                       |
| `types`  | enum[]  | No       | **Multi-select** doc types, e.g. `["research", "wiki"]` (prose docs only)                                     |
| `prefix` | string  | No       | Only topics whose path-prefixed id starts with this prefix (e.g. `wiki`, `javadocs/zombie.iso`)                |
| `limit`  | number  | No       | Max topics (1–1000) — pairs with `offset` for pagination                                                       |
| `offset` | number  | No       | Skip this many topics — pairs with `limit` for pagination                                                      |

**Output:** Each matching topic with title, doc type, and line/word/char counts, plus a `total` (matching count) and `filtered` flag so agents can paginate without a second call.

---

### `analyze_recipe_chain`

Walk the recipe dependency graph built during parsing.

| Param        | Type   | Required | Description                                                                                                                                                                 |
| ------------ | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `seed`       | string | Yes      | Item or recipe id to start from                                                                                                                                             |
| `direction`  | enum   | No       | `upstream`, `downstream`, `both` (default)                                                                                                                                  |
| `maxDepth`   | number | No       | Chain depth, 1–10 (default: 3)                                                                                                                                              |
| `expandNode` | string | No       | Grow in place: return only the one-hop neighborhood around this node id (already present in a previous result) so clients merge a delta instead of re-walking from the seed |

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

| Param   | Type   | Required | Description                        |
| ------- | ------ | -------- | ---------------------------------- |
| `limit` | number | No       | Max conflicts, 1–200 (default: 50) |

**Output:** List of conflicting items and the recipes that produce each — each conflict carries `severity` (`high` for exact duplicates on a real item row, `low` for tag/mapper multi-path the game tolerates) and `kind` (`exact` / `tag` / `mapper`).

---

### `export_mod_script`

Generate a script and (optionally) write it into a mod's `media/scripts` folder.

| Param             | Type    | Required | Description                                                     |
| ----------------- | ------- | -------- | --------------------------------------------------------------- |
| `modPath`         | string  | Yes      | Mod directory (must be absolute and existing)                   |
| `type`            | enum    | Yes      | `item`, `recipe`, `evolvedrecipe`, `fixing`, `sound`, `vehicle` |
| `name`            | string  | Yes      | Script name (sanitized into the output filename)                |
| `properties`      | object  | No       | Script properties (default: `{}`)                               |
| `module`          | string  | No       | Module name (default: `"Base"`)                                 |
| `balance`         | enum    | No       | Balance mode (same as `generate_script`)                        |
| `includeComments` | boolean | No       | Include explanatory comments                                    |
| `dryRun`          | boolean | No       | Preview only, no disk changes (default: `true`)                 |

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

| Param    | Type    | Required | Description                                                                                                                                     |
| -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | string  | Yes      | Workshop item id or URL (verified to be a Project Zomboid item first)                                                                           |
| `dryRun` | boolean | No       | Preview the download — resolve the item, verify the app, report the target path — without invoking SteamCMD or touching disk (default: `false`) |

**Size cap:** items larger than `PZ_MCP_MAX_DOWNLOAD_BYTES` (default 4 GiB) are refused before any download, in both `workshop_download` and `workshop_analyze`.

---

### `workshop_analyze`

Fetch & analyze: downloads the mod (skips if already present), parses its scripts into the database, runs the full analysis suite, and returns a Mod Report.

---

### `detect_pz_paths`

Smart cross-platform detection of every Project Zomboid path the server cares about. No arguments.

**Resolution order (per path):**

- **Game install:** `PROJECTZOMBOID_PATH` / `PZ_PATH` env → Steam registry (`HKCU\Software\Valve\Steam` SteamPath, HKLM fallback) + `libraryfolders.vdf` → common install locations (Windows / Linux / macOS / WSL)
- **User-data dir:** `<home>/Zomboid` (exists flag)
- **Mods dir:** `PZ_MODS_DIR` env → `<home>/Zomboid/mods` (exists + writable flags)
- **Workshop dir:** `PZ_WORKSHOP_DIR` env → derived from a Steam-library game install → every known Steam library → `<home>/Zomboid/workshop` cache

**Output:** `platform`, `home`, `gameInstall` (path + detection source), `userDataDir`, `modsDir`, `workshopDir`, `envOverrides` — each with exists/writable flags.

---

### `install_mod`

Install a Project Zomboid mod into the mods directory from a `.zip` archive **or** a mod folder.

| Param       | Type    | Required | Description                                                                                                         |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `source`    | string  | Yes      | Absolute path to a `.zip` archive or a mod folder                                                                   |
| `targetDir` | string  | No       | Destination mods directory (default: `PZ_MODS_DIR` or `<home>/Zomboid/mods`; created on install)                    |
| `overwrite` | boolean | No       | Replace a conflicting mod (same folder name or `mod.info` id) — default `false`, conflicts are skipped and reported |
| `dryRun`    | boolean | No       | Preview the plan with zero disk changes (default: `false`)                                                          |

**What it handles:** single mod folders (`MyMod/mod.info`), Build-42 versioned layouts (`MyMod/42/mod.info` → installed as `MyMod/`), flat zips (`mod.info` at the archive root → installed under the zip file name), and multi-mod workshop packs (`mods/A/…`, `mods/B/…` → each installed).

**Safety:** zip-slip and absolute-path entries are refused, symlink entries are skipped, macOS junk (`__MACOSX`, `._*`, `.DS_Store`) is filtered (reported as warnings), an 8 GiB size cap protects against archive bombs, mods are only copied after `mod.info` verification, and the source is never copied onto itself.

**Output:** `sourceKind`, `targetDir`, per-mod `{ name, modId, modName, version, status (installed|planned|skipped|error), reason, targetPath, filesCopied }`, plus `warnings` and a `summary`.

---

### `workspace_list`

List mod projects in the workspace (`PZ_MCP_WORKSPACE_DIR`, default `<data>/workspaces`) with their `mod.info` presence.

**Output:** Project names, paths, and whether each has a `mod.info`.

---

### `workspace_create`

Scaffold a new Build-42 mod project (`mod.info`, `workshop.txt`, `poster.png`, `common/` + versioned `media/` tree). Existing files are never modified; `dryRun` previews.

| Param           | Type     | Required | Description                                                                  |
| --------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `name`          | string   | Yes      | Project folder name (single path segment)                                    |
| `modId`         | string   | Yes      | Unique mod id (`mod.info` `id=`)                                             |
| `modName`       | string   | No       | Display name (default: modId)                                                |
| `author`        | string   | No       | Mod author                                                                   |
| `description`   | string   | No       | Mod description                                                              |
| `version`       | string   | No       | Mod version (default: `1.0`)                                                 |
| `buildVersion`  | string   | No       | Numeric B42 version folder (default: `42`)                                   |
| `template`      | enum     | No       | `minimal` \| `full` (default: `full`)                                        |
| `requires`      | string[] | No       | Other mod ids for `mod.info` `require=`                                      |
| `sampleItem`    | boolean  | No       | Generate a starter item script via `generate_script`                         |
| `includePoster` | boolean  | No       | Write `poster.png` (default: `true`)                                         |
| `overwrite`     | boolean  | No       | If the folder exists, only add missing scaffold (never edits existing files) |
| `dryRun`        | boolean  | No       | Preview only — no disk changes (default: `false`)                            |

---

### `workspace_inspect`

Full structured inspection: metadata, supported builds, dependencies (+ missing), content types, file counts, and validation errors/warnings — same engine as `analyze_mod`.

| Param               | Type    | Required | Description                                                 |
| ------------------- | ------- | -------- | ----------------------------------------------------------- |
| `project`           | string  | Yes      | Project name                                                |
| `checkDependencies` | boolean | No       | Resolve `require=` ids against known mods (default: `true`) |
| `includeFileList`   | boolean | No       | Include the recursive file list (default: `false`)          |

---

### `modgen_templates`

List the five Mod Generator templates (Simple Item, Melee Weapon, Food, Tool,
Clothing) with every editable stat field — label, type, range, unit, plain-
language hint, group — plus each template's **Build 42 item class**
(`ItemType = base:*`), **maturity level** (`ready`/`beta`), verified vanilla
**icon suggestions**, and the live vanilla baseline it auto-balances against
(`vanilla` is `null` until the game data is parsed).

| Param | Type | Required | Description  |
| ----- | ---- | -------- | ------------ |
| —     | —    | —        | No arguments |

### `modgen_generate`

Generate a **complete, ready-to-ship Build 42 mod folder** from a template:
`mod.info`, `workshop.txt`, a **generated poster.png**, B42 `common/` +
versioned `media/` tree, a **Build 42 item script** (`ItemType = base:*` —
never the legacy `Type = ...`), an **ItemName translation file** (the B42
way to name items), a beginner-friendly `README.md` and an editable
`modgen.blueprint.json`. Unpinned stats are **auto-balanced from real vanilla
game data** (median of comparable items, filtered to the game install for
honest provenance; falls back to sensible defaults when the DB isn't parsed).
`stats` pins values, `randomize` rolls inside the vanilla interquartile range,
`icon` reuses a vanilla texture or ships a **generated placeholder texture**
in `42/media/textures/`, and `dryRun` previews the **exact file plan**
without creating anything. Every generation is **validated against Build 42
semantics before anything is written**; the result carries a `validation`
block (script + folder + Build 42 checks, `ready` flag).

| Param         | Type    | Required | Description                                                                                                    |
| ------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `template`    | enum    | Yes      | `simple_item` \| `melee_weapon` \| `food` \| `tool` \| `clothing`                                              |
| `name`        | string  | Yes      | Project folder name (single segment)                                                                           |
| `modId`       | string  | Yes      | Unique mod id (`mod.info` `id=`)                                                                               |
| `modName`     | string  | Yes      | Human-readable mod name                                                                                        |
| `itemName`    | string  | Yes      | Item block id (letters/digits/underscores)                                                                     |
| `author`      | string  | No       | Mod author                                                                                                     |
| `description` | string  | No       | Mod description                                                                                                |
| `displayName` | string  | No       | In-game item name (default: `itemName`) — written into the ItemName translation file                           |
| `icon`        | string  | No       | Vanilla texture to reuse, or a custom name — a generated placeholder texture is shipped (default per template) |
| `module`      | string  | No       | Script module (default: `Base`)                                                                                |
| `stats`       | object  | No       | Stat overrides keyed by property name — pinned as-is                                                           |
| `autoStats`   | boolean | No       | Auto-balance unpinned stats (default: `true`)                                                                  |
| `randomize`   | boolean | No       | Roll auto stats inside the vanilla range (default: `false`)                                                    |
| `dryRun`      | boolean | No       | Preview only — no project created (default: `false`)                                                           |

### `modgen_list`

List every mod previously generated (workspace projects carrying a
`modgen.blueprint.json`) with template, item and last-updated time.

| Param | Type | Required | Description  |
| ----- | ---- | -------- | ------------ |
| —     | —    | —        | No arguments |

### `modgen_blueprint`

Reopen a generated mod's editable blueprint — template, metadata, full stat
set, and the stats source (vanilla sample vs defaults, with game version and
vanilla file count when available). Feed the result into `modgen_regenerate`
after editing.

| Param     | Type   | Required | Description                                           |
| --------- | ------ | -------- | ----------------------------------------------------- |
| `project` | string | Yes      | Project name (from `modgen_generate` / `modgen_list`) |

### `modgen_regenerate`

Rewrite a generated mod from its blueprint after editing. `stats` is a patch
keyed by property name (`null` resets a stat back to auto), `randomize` is a
list of stat keys to re-roll inside the vanilla range, and the mod/item
metadata fields update `mod.info`. The **stats source is re-derived from the
current vanilla database** (so the README's balancing claim stays truthful),
and the rewrite is **staged**: the new script is Build 42-validated first —
if validation fails, nothing on disk is touched; otherwise script,
translation, README, blueprint and assets are all rewritten (each write
atomic) — the folder never drifts.

| Param                                          | Type     | Required | Description                                                                      |
| ---------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------- |
| `project`                                      | string   | Yes      | Project name to regenerate                                                       |
| `stats`                                        | object   | No       | Stat patch — `{ "MaxDamage": 2.2 }` pins, `{ "MaxDamage": null }` resets to auto |
| `randomize`                                    | string[] | No       | Stat keys to re-roll inside the vanilla range                                    |
| `modName` / `author` / `description`           | string   | No       | Update mod metadata (`mod.info`)                                                 |
| `itemName` / `displayName` / `icon` / `module` | string   | No       | Update the item definition                                                       |

---

## Dependencies

- `@modelcontextprotocol/sdk` 1.30
- `adm-zip` (pure-JS zip read/write — no native dependencies)
- `@huggingface/transformers` 3.8.1 (WASM embeddings for `embed_knowledge` — lazy-imported; npm override maps its native `onnxruntime-node` onto `onnxruntime-web`, pure JS/WASM)
- `node:sqlite` (built-in, no native dependencies)
- `zod` 3.25
- Node.js ≥ 22.5
