// pz-mcp-server · Control Deck — static data (extracted verbatim from the
// original inline <script> in admin/index.html — no logic changes).

export const ICONS = {
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.2"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowR:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  power:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.72 0"/><path d="M12 2v10"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  graph:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2.4"/><path d="M7 6h10M6.5 7.5L11 16M17.5 7.5L13 16"/></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  fwd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  stack:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>',
  hammer:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>',
};
export const TOOL_ICONS = {
  validate_script: "shield",
  generate_script: "hammer",
  search_vanilla: "search",
  check_references: "link",
  analyze_mod: "scan",
  parse_game_files: "db",
  index_knowledge_base: "book",
  index_javadocs: "code",
  embed_knowledge: "db",
  search_knowledge_base: "search",
  list_knowledge_topics: "book",
  get_knowledge_section: "book",
  detect_pz_paths: "scan",
  install_mod: "download",
  modgen_templates: "hammer",
  modgen_generate: "hammer",
  modgen_list: "folder",
  modgen_blueprint: "doc",
  modgen_regenerate: "hammer",
  search_recipes: "search",
  export_mod_script: "doc",
  analyze_recipe_chain: "graph",
  detect_recipe_conflicts: "warn",
  workshop_search: "search",
  workshop_get_details: "doc",
  workshop_download: "download",
  workshop_analyze: "scan",
  workspace_create: "folder",
  workspace_inspect: "scan",
  workspace_list: "folder",
};
export const TOOL_CATS = [
  {
    id: "search",
    label: "Search & Query",
    icon: "search",
    match: ["search_vanilla", "search_recipes"],
  },
  {
    id: "gen",
    label: "Generation",
    icon: "hammer",
    match: ["generate_script", "export_mod_script"],
  },
  {
    id: "valid",
    label: "Validation & References",
    icon: "shield",
    match: ["validate_script", "check_references"],
  },
  {
    id: "analysis",
    label: "Analysis",
    icon: "scan",
    match: [
      "analyze_mod",
      "parse_game_files",
      "analyze_recipe_chain",
      "detect_recipe_conflicts",
    ],
  },
  {
    id: "kb",
    label: "Knowledge Base",
    icon: "book",
    match: [
      "index_knowledge_base",
      "index_javadocs",
      "embed_knowledge",
      "search_knowledge_base",
      "list_knowledge_topics",
      "get_knowledge_section",
    ],
  },
  {
    id: "ws",
    label: "Workshop",
    icon: "download",
    match: [
      "workshop_search",
      "workshop_get_details",
      "workshop_download",
      "workshop_analyze",
    ],
  },
  {
    id: "install",
    label: "Install & Detect",
    icon: "download",
    match: ["detect_pz_paths", "install_mod"],
  },
  {
    id: "modgen",
    label: "Mod Generator",
    icon: "hammer",
    match: [
      "modgen_templates",
      "modgen_generate",
      "modgen_list",
      "modgen_blueprint",
      "modgen_regenerate",
    ],
  },
  {
    id: "workspace",
    label: "Mod Workspace",
    icon: "folder",
    match: ["workspace_create", "workspace_inspect", "workspace_list"],
  },
];
export function catForTool(name) {
  const c = TOOL_CATS.find((x) => x.match.includes(name));
  return c ? c.id : "search";
}
/* Beginner-friendly explanations for every tool (keyed by MCP tool name) */
export const TOOL_GUIDES = {
  search_vanilla: {
    what: "Search the real Project Zomboid database — items, recipes, sounds and vehicles — with fuzzy typo-tolerant id resolution and a knowledge-graph view.",
    how: "<b>query</b> (or <b>id</b>) is required — type a keyword like <b>axe</b> or <b>canned</b> and press Run, or use <b>id</b> for an exact canonical lookup that resolves typos (Hamer → Base.Hammer). Filters: <b>type</b> (item, recipe, sound, …), <b>category</b>, <b>module</b>, <b>scriptPath</b>, <b>tags</b>, <b>metalValueMin/Max</b>, <b>attachmentType</b>, <b>minWeight/maxWeight</b>, <b>minCalories/maxCalories</b>, <b>properties</b> (structured constraints like [{key: MaxDamage, min: 5}]), <b>usedInRecipe</b> / <b>producedByRecipe</b> (recipe-graph membership), <b>sprite</b>, <b>sound</b>. Set <b>includeRelations</b> for a full relationship graph on the first result, <b>format: \"ai\"</b> for compact anti-hallucination context blocks, or <b>limit</b> for more/fewer results.",
    ex: 'query: "axe" · limit: 10 — or id: "Base.Hamer" (typo-safe)',
  },
  search_recipes: {
    what: "Find structured crafting recipes by what they need or what they make.",
    how: "Nothing is required — Run as-is for the latest recipes, or narrow the list with <b>query</b> (name/id text), <b>category</b> (Carpentry, Cooking, Repair…), <b>skill</b>, <b>minSkillLevel/maxSkillLevel</b>, <b>ingredient</b>, <b>tool</b>, <b>result</b>, or <b>limit</b>.",
    ex: 'ingredient: "Nails" · skill: "Woodwork"',
  },
  generate_script: {
    what: "Generate balanced Project Zomboid scripts (items, recipes, sounds, vehicles) from templates.",
    how: "<b>type</b>, <b>name</b> and <b>properties</b> are required — pick a <b>type</b> (item/recipe/…), give it a <b>name</b> (e.g. Katana_Custom), describe it in <b>properties</b> as JSON. Optional: <b>module</b> (default Base), <b>balance</b> (vanilla/powerful/weak/custom), <b>includeComments</b>.",
    ex: 'type: "item" · name: "Katana_Custom" · properties: { … }',
  },
  validate_script: {
    what: "Check a Project Zomboid script for syntax errors, broken references, AND ZedScripts knowledge-layer diagnostics (unknown parameters, wrong values/types, deprecations, missing commas, craftRecipe issues) that catch AI-generated scripts that look plausible but are invalid. Covers ALL 97 block types — entity, model, fluid, physics, timedAction, component variants, etc. — including nested blocks and wrong-parent mistakes.",
    how: "<b>content</b> is required — paste your script and Run. Optional: <b>filePath</b> to validate a script file on disk (diagnostics then show the file), <b>type</b> (item/recipe/…) to check against, <b>strict</b> for a deeper pass, and <b>zedScripts: false</b> to skip the Build 42 knowledge layer on a legacy B41-only codebase. Every finding shows file/line/column, a diagnostic code and a fix suggestion — fix and validate again.",
    ex: "content: module Base { entity MyFurnace { … } } · filePath: C:/mods/MyMod/media/scripts/items.txt",
  },
  check_references: {
    what: "Verify that item, sound and sprite references actually exist in the game.",
    how: "<b>references</b> is required — put each reference on its own line. Optional <b>type</b>: item / sound / sprite / all (default all).",
    ex: "Axe · HandAxe · Sound_AxeSwing",
  },
  analyze_mod: {
    what: "Deep analysis of a mod folder — structure, balance, compatibility and deprecated APIs.",
    how: "<b>modPath</b> is required — point it at your mod directory and Run. Optional: <b>checkBalance</b> and <b>checkCompatibility</b> (both on by default).",
    ex: 'modPath: "C:/Users/you/Zomboid/mods/MyMod"',
  },
  parse_game_files: {
    what: "Parse the installed Project Zomboid game files and index them into the database.",
    how: "Nothing is required — the game path is auto-detected. Set <b>gamePath</b> if detection fails, or <b>forceReparse</b> to rebuild even when data exists.",
    ex: 'gamePath: "C:/Program Files (x86)/Steam/steamapps/common/ProjectZomboid" (optional)',
  },
  index_knowledge_base: {
    what: "Index markdown modding docs so they become searchable — cleaned, split into precise section chunks, and tagged with a portable doc type (wiki / api-docs / mods-analysis / research). Topics are path-prefixed (e.g. wiki/Farming) so names never collide.",
    how: "Nothing is required — indexes the default docs folder. Optional: <b>path</b> to a different docs dir, and <b>overwrite</b> (default true; set false for an incremental sync). Note: the javadocs/ folder is skipped — run <b>index_javadocs</b> for Java API docs.",
    ex: 'path: "C:/Users/you/Documents/PZ-Docs" (optional)',
  },
  index_javadocs: {
    what: "Index Java API docs into the knowledge base — classes, interfaces, methods, fields become searchable API reference.",
    how: "No arguments needed — the repo-shipped distilled JavaDocs markdown (knowledge-base/javadocs, one file per API type) is indexed directly, so it works on any machine. Optional <b>path</b>: a raw generated JavaDocs HTML tree (or distilled markdown dir) to re-ingest from scratch (<b>source</b> is an alias for path; <b>output</b> sets where generated markdown lands). Optional <b>overwrite</b> (default true; false for an incremental sync).",
    ex: '{} — or path: "C:/Users/you/PZ-JavaDocs" to re-ingest from HTML',
  },
  embed_knowledge: {
    what: "Semantic indexing (Phase 5, opt-in): embed every knowledge chunk into vectors so search_knowledge_base can answer conceptual questions with <b>semantic: true</b>. Nothing downloads at boot or index time — the model downloads once here, into <data>/models/, and persists (a re-run with the model cached never re-downloads).",
    how: "Just press Run — it embeds every chunk missing a vector, incrementally (re-running only touches new/changed chunks). Optional: <b>model</b> (default all-MiniLM-L6-v2; changing it forces a clean re-embed), <b>batchSize</b> (chunks per batch, default 32), <b>limit</b> (cap this run — handy for a quick smoke test), and <b>dryRun</b> (preview what would be embedded — no download, no writes). First run downloads ~90–130 MB once — allow a few minutes.",
    ex: "{} — or { dryRun: true } to preview without downloading",
  },
  search_knowledge_base: {
    what: "Search the indexed knowledge base with relevance ranking (bm25 with column weights, stemmed + prefix-matched). Results are <b>section-level chunks</b> — a wiki section or a single javadocs method/field — not whole pages, so every hit is precise. Click <b>View section</b> on a result to read exactly that chunk.",
    how: '<b>query</b> is required, e.g. "blacksmithing recipe". Natural-language queries rank prose docs (wiki/research/api-docs) first so JavaDocs constants don\'t flood the list; identifier-like queries (getSquare, Base.Hammer) rank JavaDocs first. Optional: <b>topic</b> (exact doc topic, e.g. wiki/Farming), <b>type</b> or <b>types</b> (single / multi-select doc types — e.g. types: research + wiki for prose only), <b>package</b> (Java package — javadocs only, e.g. zombie.iso), <b>semantic</b> (hybrid retrieval — blends vector similarity in at 0.7·bm25 + 0.3·cosine, so conceptual questions with zero keyword overlap still find the right doc; run <b>embed_knowledge</b> once first — without vectors it returns a friendly "run embed_knowledge first" error), <b>includeContent</b> (return full chunk bodies inline — search + read in one call, capped by <b>maxContent</b>, default 8000 chars), <b>maxResultsPerDoc</b> (cap how many chunks one doc may take in the top-N — default 3, 0 disables), and <b>limit</b> (default 10). JavaDocs must be indexed first via index_javadocs.',
    ex: 'query: "getSquare" · type: "javadocs" · package: "zombie.iso"',
  },
  list_knowledge_topics: {
    what: "List indexed knowledge-base docs with stats (chunks, lines, words). Topics are path-prefixed — wiki/…, javadocs/…, api-docs/… — so they're self-describing and never collide.",
    how: "No arguments needed — just press Run for the full list. Optional filters keep the reply lean: <b>types</b> (multi-select doc types, one per line — e.g. research + wiki), <b>prefix</b> (topic id start, e.g. wiki or javadocs/zombie.iso), and <b>limit</b> + <b>offset</b> for pagination (the reply carries the filtered <b>total</b>).",
    ex: 'types: ["research", "wiki"] · limit: 50',
  },
  get_knowledge_section: {
    what: "Read exactly one section of a knowledge-base doc — a single wiki section or one javadocs method/field — without loading the whole page. Batch mode: <b>sections</b> (one per line) reads several members of one doc in a single call.",
    how: "<b>topic</b> is required — a doc topic (e.g. <b>wiki/Farming</b> or <b>javadocs/zombie.iso.IsoGameCharacter</b>) or a full chunk id (<b>wiki/Farming#crops</b>). Optional <b>section</b>: the heading or javadocs member name to read (e.g. getPlayer). Or pass <b>sections</b> (one per line) to read several at once — a miss yields null for that entry instead of an error. On no match the reply lists the doc's available sections.",
    ex: 'topic: "javadocs/zombie.characters.IsoPlayer" · section: "getPlayer"',
  },
  analyze_recipe_chain: {
    what: "Walk the recipe dependency graph from one item: what makes it, what it makes, what consumes it.",
    how: "<b>seed</b> is required — an item or recipe id like Base.Axe. Optional: <b>direction</b> (upstream/downstream/both, default both) and <b>maxDepth</b> (1–10, default 3).",
    ex: 'seed: "Base.Axe" · direction: "both" · maxDepth: 3',
  },
  detect_recipe_conflicts: {
    what: "Find items produced by more than one recipe — duplicate crafting paths that can break resolution.",
    how: "Nothing is required — Run as-is. Optional <b>limit</b> (1–200, default 50) caps the report.",
    ex: "limit: 50",
  },
  export_mod_script: {
    what: "Generate a script and write it into a mod's media/scripts folder.",
    how: "<b>modPath</b>, <b>type</b> and <b>name</b> are required. Dry-runs by default (<b>dryRun</b> true) — set false to actually write. Optional: <b>properties</b>, <b>module</b> (Base), <b>balance</b>, <b>includeComments</b>.",
    ex: "modPath · type · name · dryRun: false",
  },
  workshop_search: {
    what: "Browse the Project Zomboid Steam Workshop by text (best-effort).",
    how: '<b>query</b> is required, e.g. "Brita". Optional <b>limit</b> (default 20). For guaranteed results, paste a URL/id into workshop_get_details instead.',
    ex: 'query: "Brita" · limit: 20',
  },
  workshop_get_details: {
    what: "Resolve full metadata for one workshop item from its id or steamcommunity URL.",
    how: "<b>id</b> is required — the numeric id or the full URL. Optional <b>forceRefresh</b> bypasses the 24h metadata cache.",
    ex: 'id: "2696145877" or a full steamcommunity URL',
  },
  workshop_download: {
    what: "Download a workshop mod via SteamCMD into the workspace folder.",
    how: "<b>id</b> is required (numeric id or URL). Requires steamcmd (STEAMCMD_PATH or a common install location). Set <b>dryRun</b> to preview — resolve the item, verify it's a Project Zomboid mod and report the target path — without touching disk.",
    ex: 'id: "2696145877" · dryRun: false',
  },
  workshop_analyze: {
    what: "Fetch & analyze a workshop mod end-to-end: download, parse, balance check + full Mod Report.",
    how: "<b>id</b> is required (numeric id or URL). This runs the full pipeline — download, parse and analysis — so it can take a while.",
    ex: 'id: "2696145877"',
  },
  detect_pz_paths: {
    what: "Smart cross-platform detection of your Project Zomboid install, mods folder and Steam Workshop folder.",
    how: "No arguments needed — press Run. It checks the PZ_MCP path env vars first, then the Steam registry + libraryfolders.vdf (Windows), Steam libraries (Linux/macOS), then common install locations. <b>modsDir</b> is where install_mod puts mods — set <b>PZ_MODS_DIR</b> (or the Installer tab → set folder) to override.",
    ex: "—",
  },
  install_mod: {
    what: "Install a mod from a .zip archive or a mod folder into Project Zomboid's mods directory.",
    how: "<b>source</b> is required — an absolute path to a .zip file or a folder. It finds every mod inside (single mods, B42 versioned folders, multi-mod packs, flat zips), refuses unsafe archives, and never overwrites unless <b>overwrite</b>:true (conflicts are skipped and reported). Set <b>targetDir</b> to install elsewhere, or <b>dryRun</b> to preview first. Tip: use the Installer tab for drag & drop.",
    ex: 'source: "C:/Downloads/MyMod.zip" · targetDir: "C:/Users/you/Zomboid/mods" (optional)',
  },
  modgen_templates: {
    what: "List the five Mod Generator templates with every editable stat field, its maturity level (ready/beta), icon suggestions and the vanilla data each balances against.",
    how: "No arguments needed — press Run. Shows Simple Item, Melee Weapon, Food, Tool and Clothing with each stat's range, unit, hint and vanilla sample count.",
    ex: "—",
  },
  modgen_generate: {
    what: "Generate a complete ready-to-ship Build 42 mod folder from a template — ItemType item script, ItemName translation, generated poster, mod.info, workshop.txt, README and an editable blueprint. The result shows detailed script diagnostics (file/line/code/suggestion) instead of a bare ready flag.",
    how: "<b>template</b>, <b>name</b>, <b>modId</b>, <b>modName</b> and <b>itemName</b> are required. Unpinned stats are auto-balanced from real vanilla game data. Optional: <b>author</b>, <b>description</b>, <b>displayName</b>, <b>icon</b> (vanilla texture to reuse, or a custom name — a placeholder texture is generated), <b>module</b>, <b>stats</b> (pin values), <b>autoStats</b>, <b>randomize</b> and <b>dryRun</b> (previews the exact file plan). Build 42 checks run before anything is written.",
    ex: 'template: "melee_weapon" · name: "MyWeapon" · modId: "my_weapon" · modName: "My Weapon" · itemName: "MyWeaponItem"',
  },
  modgen_list: {
    what: "List every mod you have generated (projects with a blueprint).",
    how: "No arguments needed — press Run.",
    ex: "—",
  },
  modgen_blueprint: {
    what: "Reopen a generated mod's editable blueprint to review or change its stats.",
    how: "<b>project</b> is required — the folder name from modgen_generate / modgen_list.",
    ex: 'project: "MyWeapon"',
  },
  modgen_regenerate: {
    what: "Rewrite a generated mod after editing its blueprint — script, translation, mod.info, README and validation stay in sync, and the stats source is re-derived from the current vanilla database.",
    how: "<b>project</b> is required. Pass <b>stats</b> to pin new values (null resets a stat to auto), <b>randomize</b> (array of stat keys) to re-roll them inside the vanilla range, or change <b>modName</b>/<b>author</b>/<b>description</b>/<b>displayName</b>/<b>icon</b>/<b>module</b>. Build 42 checks run first — nothing is written if they fail.",
    ex: 'project: "MyWeapon" · stats: { MaxDamage: 2.2 } · randomize: ["CriticalChance"]',
  },
  workspace_list: {
    what: "List mod projects in the workspace (PZ_MCP_WORKSPACE_DIR, default <data>/workspaces) with their mod.info presence.",
    how: "No arguments needed — press Run.",
    ex: "—",
  },
  workspace_create: {
    what: "Scaffold a new Build-42 mod project (mod.info, workshop.txt, poster.png, common/ + versioned media/ tree). Existing files are never modified; dryRun previews.",
    how: "<b>name</b> and <b>modId</b> are required. Optional: <b>modName</b>, <b>author</b>, <b>description</b>, <b>version</b>, <b>buildVersion</b> (default 42), <b>template</b> (minimal/full), <b>requires</b>, <b>sampleItem</b>, <b>includePoster</b>, <b>overwrite</b>, and <b>dryRun</b> to preview the exact scaffold.",
    ex: 'name: "MyMod" · modId: "mymod" · modName: "My Mod" · buildVersion: "42"',
  },
  workspace_inspect: {
    what: "Full structured inspection of a mod project: metadata, supported builds, dependencies (+ missing), content types, file counts, and validation errors/warnings — same engine as analyze_mod.",
    how: "<b>project</b> is required — a project name from workspace_list / workspace_create. Optional: <b>checkDependencies</b> (default true) and <b>includeFileList</b> (default false).",
    ex: 'project: "MyMod"',
  },
};

/* Whole-program guide (main page) */
export const GUIDE_STEPS = [
  {
    icon: "power",
    title: "What is this?",
    body: "<b>pz-mcp-server</b> is a Model Context Protocol (MCP) server that gives AI assistants live access to your Project Zomboid mod data. This deck is its friendly control panel — you drive every MCP tool an AI would, right from your browser.",
  },
  {
    icon: "link",
    title: "How the deck connects",
    body: "The bridge (<b>admin/bridge.mjs</b>) serves this page on <b>port 8787</b> and pipes JSON-RPC to the real MCP server over stdio. Watch the pill in the header — when it turns green <b>Live</b>, the server is ready. It reconnects automatically.",
  },
  {
    icon: "scan",
    title: "The 8 tabs",
    body: "<b>Status</b> — live server telemetry, wire state and log. <b>Playground</b> — call every MCP tool with form validation. <b>Database</b> — instant search over parsed game files plus the knowledge base. <b>Workshop</b> — browse, download and analyze Steam Workshop mods. <b>Chains</b> — visual crafting graph: what makes an item, what it makes, what consumes it. <b>Installer</b> — auto-detect your game paths and drop mods in (.zip or folders) to install them into Zomboid/mods. <b>Generator</b> — one-click Build 42 mod generation from beginner templates. <b>Config</b> — accent color, console behaviour and server controls.",
  },
  {
    icon: "play",
    title: "Playground workflow",
    body: "Open a tool card, fill the fields and press <b>Run</b>. Required fields are marked with a red <b>*</b> and are validated live — an empty required field disables Run with a red ring. Results appear in the result card (with a Copy button), long output collapses behind <b>Show more</b>, and every call lands in <b>Recent Runs</b> so you can re-open it later.",
  },
  {
    icon: "search",
    title: "Typical flow",
    body: "<b>1.</b> parse_game_files once to index the game. <b>2.</b> search_vanilla / search_recipes to research. <b>3.</b> generate_script to create content. <b>4.</b> validate_script + check_references to verify. <b>5.</b> analyze_mod for a full mod audit, or workshop_analyze for community mods.",
  },
  {
    icon: "db",
    title: "Database tab",
    body: "The Database tab runs the same FTS5 search as search_vanilla over parsed game data, plus a <b>Knowledge Base</b> panel that searches the indexed docs and returns precise <b>section chunks</b> (a wiki section or a single javadocs method/field). Hit <b>View section</b> on any result to drill into exactly that chunk — no more reading whole pages.",
  },
  {
    icon: "download",
    title: "Workshop tab",
    body: "Search Steam, paste a URL/id for guaranteed resolution, download a mod via SteamCMD, then run the full analyze pipeline — download, parse, balance check and a complete Mod Report.",
  },
  {
    icon: "download",
    title: "Installer tab",
    body: "Press <b>Detect paths</b> to auto-find the game install and mods folder on any machine (Steam registry, library VDFs, common paths). Then drag & drop <b>.zip files or whole mod folders</b> (or use Browse) — they are uploaded to the bridge, scanned for mods, and installed into the mods directory. Conflicting mods are skipped by default; tick <b>Overwrite</b> to replace them.",
  },
  {
    icon: "graph",
    title: "Chains tab (Recipe Chain)",
    body: "Type any item or recipe id (a recipe like <b>MillFlour</b> gives the richest graph) and press <b>Build graph</b>. Recipe nodes are amber, items cyan; green arrows mean <b>produces</b>, amber means <b>consumes</b>. Click a node to inspect it, drag to pan, ctrl+scroll to zoom. <b>Show recipe conflicts</b> lists items several recipes claim to make — click one to graph it.",
  },
  {
    icon: "arrowR",
    title: "Keyboard & tips",
    body: '<span class="kbd">1–8</span> switch tabs · <span class="kbd">T</span> payload inspector · <span class="kbd">Esc</span> close dialogs. Press <b>Enter</b> in any field to Run. The <b>Wire Log</b> shows every real JSON-RPC frame — click one to inspect the exact payload.',
  },
];

export const EXAMPLES = {
  search_vanilla: { query: "axe", limit: 10 },
  validate_script: {
    content:
      "module Base {\n  item MyAxe {\n    ItemType = base:weapon,\n    DisplayName = My Axe,\n    Weight = 3,\n    MaxDamage = 15,\n    MinDamage = 8,\n  }\n}",
    strict: false,
  },
  generate_script: {
    type: "item",
    name: "Katana_Custom",
    module: "Base",
    properties: {
      category: "Weapon",
      DisplayName: "Custom Katana",
      Icon: "Katana",
      ItemType: "base:weapon",
      Weight: 1.6,
      MaxDamage: 22,
      MinDamage: 12,
      ConditionMax: 30,
      Categories: "LongBlade",
      SubCategory: "Swinging",
      SwingTime: 1.2,
    },
  },
  check_references: {
    references: ["Axe", "HandAxe", "Sound_AxeSwing"],
    type: "all",
  },
  analyze_mod: { modPath: "C:/Users/you/Zomboid/mods/MyMod" },
  parse_game_files: {},
  index_knowledge_base: {},
  index_javadocs: {},
  embed_knowledge: { dryRun: true },
  search_knowledge_base: { query: "loot distribution" },
  list_knowledge_topics: {},
  get_knowledge_section: {
    topic: "javadocs/zombie.characters.IsoPlayer",
    section: "getPlayer",
  },
  search_recipes: { ingredient: "Nails", skill: "Woodwork" },
  export_mod_script: {
    modPath: "C:/Users/you/Zomboid/mods/MyMod",
    type: "item",
    name: "CustomAxe",
    dryRun: true,
  },
  analyze_recipe_chain: {
    seed: "Base.Axe",
    direction: "both",
    maxDepth: 3,
  },
  detect_recipe_conflicts: { limit: 50 },
  workshop_search: { query: "Brita", limit: 20 },
  workshop_get_details: { id: "2696145877" },
  workshop_download: { id: "2696145877" },
  workshop_analyze: { id: "2696145877" },
  detect_pz_paths: {},
  install_mod: {
    source: "C:/Downloads/MyMod.zip",
    dryRun: true,
  },
  modgen_templates: {},
  modgen_generate: {
    template: "melee_weapon",
    name: "MyWeapon",
    modId: "my_weapon",
    modName: "My Weapon",
    itemName: "MyWeaponItem",
  },
  modgen_list: {},
  modgen_blueprint: { project: "MyWeapon" },
  modgen_regenerate: { project: "MyWeapon", stats: { MaxDamage: 2.2 } },
  workspace_list: {},
  workspace_create: {
    name: "MyMod",
    modId: "mymod",
    modName: "My Mod",
    buildVersion: "42",
  },
  workspace_inspect: { project: "MyMod" },
};
export const CHAIN_CHIPS = [
  { id: "MillFlour", label: "Mill Flour", hint: "recipe" },
  { id: "MakeCoffeeMug", label: "Coffee Mug", hint: "recipe" },
  { id: "SawSteelBlockIntoChunks", label: "Saw Steel Chunk", hint: "recipe" },
  { id: "RipDenimClothing", label: "Rip Denim", hint: "recipe" },
  { id: "Axe", label: "Axe", hint: "item" },
  { id: "Plank", label: "Plank", hint: "item" },
  { id: "Flour2", label: "Flour", hint: "item" },
  { id: "SteelChunk", label: "Steel Chunk", hint: "item" },
];
export const CHAIN_COLW = 236,
  CHAIN_NODE_W = 168,
  CHAIN_NODE_H = 46,
  CHAIN_H = 640,
  CHAIN_CAP = 14,
  CHAIN_PITCH = 60;

export const VIEWS = [
  "status",
  "playground",
  "database",
  "workshop",
  "chain",
  "installer",
  "generator",
  "settings",
];

export const MEM_BUDGET_MB = 512;

export const SWATCHES = ["#22D3EE", "#A78BFA", "#34D399", "#FBBF24", "#FB7185"];
