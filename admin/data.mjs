// pz-mcp-server · Control Deck — static data (extracted verbatim from the
// original inline <script> in admin/index.html — no logic changes).

export const ICONS = {
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3.2"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  db:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  power:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.72 0"/><path d="M12 2v10"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  graph:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2.4"/><path d="M7 6h10M6.5 7.5L11 16M17.5 7.5L13 16"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  fwd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  stack:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>',
};
export const TOOL_ICONS = { validate_script:'shield', generate_script:'spark', search_vanilla:'search', check_references:'link',
  analyze_mod:'scan', parse_game_files:'db', index_knowledge_base:'book', search_knowledge_base:'search', list_knowledge_topics:'book',
  detect_pz_paths:'scan', install_mod:'download',
  modgen_templates:'spark', modgen_generate:'spark', modgen_list:'folder', modgen_blueprint:'doc', modgen_regenerate:'spark' };
export const TOOL_CATS = [
  { id:'search', label:'Search & Query', icon:'search', match:['search_vanilla','search_recipes'] },
  { id:'gen', label:'Generation', icon:'spark', match:['generate_script','export_mod_script'] },
  { id:'valid', label:'Validation & References', icon:'shield', match:['validate_script','check_references'] },
  { id:'analysis', label:'Analysis', icon:'scan', match:['analyze_mod','parse_game_files','analyze_recipe_chain','detect_recipe_conflicts'] },
  { id:'kb', label:'Knowledge Base', icon:'book', match:['index_knowledge_base','search_knowledge_base','list_knowledge_topics'] },
  { id:'ws', label:'Workshop', icon:'download', match:['workshop_search','workshop_get_details','workshop_download','workshop_analyze'] },
  { id:'install', label:'Install & Detect', icon:'download', match:['detect_pz_paths','install_mod'] },
  { id:'modgen', label:'Mod Generator', icon:'spark', match:['modgen_templates','modgen_generate','modgen_list','modgen_blueprint','modgen_regenerate'] },
];
export function catForTool(name){ const c = TOOL_CATS.find(x => x.match.includes(name)); return c ? c.id : 'search'; }
/* Beginner-friendly explanations for every tool (keyed by MCP tool name) */
export const TOOL_GUIDES = {
  search_vanilla: {
    what:'Search the real Project Zomboid database — items, recipes, sounds and vehicles.',
    how:'<b>query</b> is required — type a keyword like <b>axe</b> or <b>canned</b> and press Run. Everything else is optional: filter by <b>type</b> (item, recipe, sound, …), <b>category</b>, <b>tags</b>, <b>metalValueMin/Max</b>, <b>attachmentType</b>, <b>minWeight/maxWeight</b>, <b>minCalories/maxCalories</b>, or set <b>limit</b> for more/fewer results.',
    ex:'query: "axe" · limit: 10',
  },
  search_recipes: {
    what:'Find structured crafting recipes by what they need or what they make.',
    how:'Nothing is required — Run as-is for the latest recipes, or narrow the list with <b>query</b> (name/id text), <b>category</b> (Carpentry, Cooking, Repair…), <b>skill</b>, <b>minSkillLevel/maxSkillLevel</b>, <b>ingredient</b>, <b>tool</b>, <b>result</b>, or <b>limit</b>.',
    ex:'ingredient: "Nails" · skill: "Woodwork"',
  },
  generate_script: {
    what:'Generate balanced Project Zomboid scripts (items, recipes, sounds, vehicles) from templates.',
    how:'<b>type</b>, <b>name</b> and <b>properties</b> are required — pick a <b>type</b> (item/recipe/…), give it a <b>name</b> (e.g. Katana_Custom), describe it in <b>properties</b> as JSON. Optional: <b>module</b> (default Base), <b>balance</b> (vanilla/powerful/weak/custom), <b>includeComments</b>.',
    ex:'type: "item" · name: "Katana_Custom" · properties: { … }',
  },
  validate_script: {
    what:'Check a Project Zomboid script for syntax errors and broken references.',
    how:'<b>content</b> is required — paste your script there and Run. Optional: <b>type</b> (item/recipe/…) to check against, and <b>strict</b> for a deeper pass. Great after generate_script.',
    ex:'content: module Base { item MyAxe { … } }',
  },
  check_references: {
    what:'Verify that item, sound and sprite references actually exist in the game.',
    how:'<b>references</b> is required — put each reference on its own line. Optional <b>type</b>: item / sound / sprite / all (default all).',
    ex:'Axe · HandAxe · Sound_AxeSwing',
  },
  analyze_mod: {
    what:'Deep analysis of a mod folder — structure, balance, compatibility and deprecated APIs.',
    how:'<b>modPath</b> is required — point it at your mod directory and Run. Optional: <b>checkBalance</b> and <b>checkCompatibility</b> (both on by default).',
    ex:'modPath: "C:/Users/you/Zomboid/mods/MyMod"',
  },
  parse_game_files: {
    what:'Parse the installed Project Zomboid game files and index them into the database.',
    how:'Nothing is required — the game path is auto-detected. Set <b>gamePath</b> if detection fails, or <b>forceReparse</b> to rebuild even when data exists.',
    ex:'gamePath: "C:/Program Files (x86)/Steam/steamapps/common/ProjectZomboid" (optional)',
  },
  index_knowledge_base: {
    what:'Index markdown modding docs so they become searchable.',
    how:'Nothing is required — indexes the default docs folder. Optional: <b>path</b> to a different docs dir, and <b>overwrite</b> (default true; set false for an incremental sync).',
    ex:'path: "C:/Users/you/Documents/PZ-Docs" (optional)',
  },
  search_knowledge_base: {
    what:'Search the indexed knowledge-base docs with relevance ranking and topic filters.',
    how:'<b>query</b> is required, e.g. "loot distribution". Optional: <b>topic</b> (exact filename without .md) and <b>limit</b> (default 10).',
    ex:'query: "loot distribution" · limit: 10',
  },
  list_knowledge_topics: {
    what:'List every indexed knowledge-base topic with stats.',
    how:'No arguments needed — just press Run.',
    ex:'—',
  },
  analyze_recipe_chain: {
    what:'Walk the recipe dependency graph from one item: what makes it, what it makes, what consumes it.',
    how:'<b>seed</b> is required — an item or recipe id like Base.Axe. Optional: <b>direction</b> (upstream/downstream/both, default both) and <b>maxDepth</b> (1–10, default 3).',
    ex:'seed: "Base.Axe" · direction: "both" · maxDepth: 3',
  },
  detect_recipe_conflicts: {
    what:'Find items produced by more than one recipe — duplicate crafting paths that can break resolution.',
    how:'Nothing is required — Run as-is. Optional <b>limit</b> (1–200, default 50) caps the report.',
    ex:'limit: 50',
  },
  export_mod_script: {
    what:'Generate a script and write it into a mod\'s media/scripts folder.',
    how:'<b>modPath</b>, <b>type</b> and <b>name</b> are required. Dry-runs by default (<b>dryRun</b> true) — set false to actually write. Optional: <b>properties</b>, <b>module</b> (Base), <b>balance</b>, <b>includeComments</b>.',
    ex:'modPath · type · name · dryRun: false',
  },
  workshop_search: {
    what:'Browse the Project Zomboid Steam Workshop by text (best-effort).',
    how:'<b>query</b> is required, e.g. "Brita". Optional <b>limit</b> (default 20). For guaranteed results, paste a URL/id into workshop_get_details instead.',
    ex:'query: "Brita" · limit: 20',
  },
  workshop_get_details: {
    what:'Resolve full metadata for one workshop item from its id or steamcommunity URL.',
    how:'<b>id</b> is required — the numeric id or the full URL. Optional <b>forceRefresh</b> bypasses the 24h metadata cache.',
    ex:'id: "2696145877" or a full steamcommunity URL',
  },
  workshop_download: {
    what:'Download a workshop mod via SteamCMD into the workspace folder.',
    how:'<b>id</b> is required (numeric id or URL). Requires steamcmd (STEAMCMD_PATH or a common install location).',
    ex:'id: "2696145877"',
  },
  workshop_analyze: {
    what:'Fetch & analyze a workshop mod end-to-end: download, parse, balance check + full Mod Report.',
    how:'<b>id</b> is required (numeric id or URL). This runs the full pipeline — download, parse and analysis — so it can take a while.',
    ex:'id: "2696145877"',
  },
  detect_pz_paths: {
    what:'Smart cross-platform detection of your Project Zomboid install, mods folder and Steam Workshop folder.',
    how:'No arguments needed — press Run. It checks the PZ_MCP path env vars first, then the Steam registry + libraryfolders.vdf (Windows), Steam libraries (Linux/macOS), then common install locations. <b>modsDir</b> is where install_mod puts mods — set <b>PZ_MODS_DIR</b> (or the Installer tab → set folder) to override.',
    ex:'—',
  },
  install_mod: {
    what:'Install a mod from a .zip archive or a mod folder into Project Zomboid\'s mods directory.',
    how:'<b>source</b> is required — an absolute path to a .zip file or a folder. It finds every mod inside (single mods, B42 versioned folders, multi-mod packs, flat zips), refuses unsafe archives, and never overwrites unless <b>overwrite</b>:true (conflicts are skipped and reported). Set <b>targetDir</b> to install elsewhere, or <b>dryRun</b> to preview first. Tip: use the Installer tab for drag & drop.',
    ex:'source: "C:/Downloads/MyMod.zip" · targetDir: "C:/Users/you/Zomboid/mods" (optional)',
  },
  modgen_templates: {
    what:'List the five Mod Generator templates with every editable stat field and the vanilla data each balances against.',
    how:'No arguments needed — press Run. Shows Simple Item, Melee Weapon, Food, Tool and Clothing with each stat\'s range, unit and hint.',
    ex:'—',
  },
  modgen_generate: {
    what:'Generate a complete ready-to-ship mod folder from a template — script, mod.info, workshop.txt, README and an editable blueprint.',
    how:'<b>template</b>, <b>name</b>, <b>modId</b>, <b>modName</b> and <b>itemName</b> are required. Unpinned stats are auto-balanced from real vanilla game data. Optional: <b>author</b>, <b>description</b>, <b>displayName</b>, <b>icon</b>, <b>module</b>, <b>stats</b> (pin values), <b>autoStats</b>, <b>randomize</b> (roll within the vanilla range) and <b>dryRun</b>.',
    ex:'template: "melee_weapon" · name: "MyWeapon" · modId: "my_weapon" · modName: "My Weapon" · itemName: "MyWeaponItem"',
  },
  modgen_list: {
    what:'List every mod you have generated (projects with a blueprint).',
    how:'No arguments needed — press Run.',
    ex:'—',
  },
  modgen_blueprint: {
    what:'Reopen a generated mod\'s editable blueprint to review or change its stats.',
    how:'<b>project</b> is required — the folder name from modgen_generate / modgen_list.',
    ex:'project: "MyWeapon"',
  },
  modgen_regenerate: {
    what:'Rewrite a generated mod after editing its blueprint — script, mod.info, README and validation stay in sync.',
    how:'<b>project</b> is required. Pass <b>stats</b> to pin new values (null resets a stat to auto), <b>randomize</b> (array of stat keys) to re-roll them inside the vanilla range, or change <b>modName</b>/<b>author</b>/<b>description</b>/<b>displayName</b>/<b>icon</b>/<b>module</b>.',
    ex:'project: "MyWeapon" · stats: { MaxDamage: 2.2 } · randomize: ["CriticalChance"]',
  },
};

/* Whole-program guide (main page) */
export const GUIDE_STEPS = [
  { icon:'power', title:'What is this?', body:'<b>pz-mcp-server</b> is a Model Context Protocol (MCP) server that gives AI assistants live access to your Project Zomboid mod data. This deck is its friendly control panel — you drive the same 17 tools an AI would, right from your browser.' },
  { icon:'link', title:'How the deck connects', body:'The bridge (<b>admin/bridge.mjs</b>) serves this page on <b>port 8787</b> and pipes JSON-RPC to the real MCP server over stdio. Watch the pill in the header — when it turns green <b>Live</b>, the server is ready. It reconnects automatically.' },
  { icon:'scan', title:'The 7 tabs', body:'<b>Status</b> — live server telemetry, wire state and log. <b>Playground</b> — call every MCP tool with form validation. <b>Database</b> — instant search over parsed game files. <b>Workshop</b> — browse, download and analyze Steam Workshop mods. <b>Recipe Chain</b> — visual crafting graph: what makes an item, what it makes, what consumes it. <b>Installer</b> — auto-detect your game paths and drop mods in (.zip or folders) to install them into Zomboid/mods. <b>Config</b> — accent color, console behaviour and server controls.' },
  { icon:'play', title:'Playground workflow', body:'Open a tool card, fill the fields and press <b>Run</b>. Required fields are marked with a red <b>*</b> and are validated live — an empty required field disables Run with a red ring. Results appear in the result card (with a Copy button), long output collapses behind <b>Show more</b>, and every call lands in <b>Recent Runs</b> so you can re-open it later.' },
  { icon:'search', title:'Typical flow', body:'<b>1.</b> parse_game_files once to index the game. <b>2.</b> search_vanilla / search_recipes to research. <b>3.</b> generate_script to create content. <b>4.</b> validate_script + check_references to verify. <b>5.</b> analyze_mod for a full mod audit, or workshop_analyze for community mods.' },
  { icon:'db', title:'Database & Knowledge tabs', body:'The Database tab runs the same FTS5 search as search_vanilla. The Knowledge Base tools index and search your markdown modding docs — useful for keeping your research one query away.' },
  { icon:'download', title:'Workshop tab', body:'Search Steam, paste a URL/id for guaranteed resolution, download a mod via SteamCMD, then run the full analyze pipeline — download, parse, balance check and a complete Mod Report.' },
  { icon:'download', title:'Installer tab', body:'Press <b>Detect paths</b> to auto-find the game install and mods folder on any machine (Steam registry, library VDFs, common paths). Then drag & drop <b>.zip files or whole mod folders</b> (or use Browse) — they are uploaded to the bridge, scanned for mods, and installed into the mods directory. Conflicting mods are skipped by default; tick <b>Overwrite</b> to replace them.' },
  { icon:'graph', title:'Recipe Chain tab', body:'Type any item or recipe id (a recipe like <b>MillFlour</b> gives the richest graph) and press <b>Build graph</b>. Recipe nodes are amber, items cyan; green arrows mean <b>produces</b>, amber means <b>consumes</b>. Click a node to inspect it, drag to pan, ctrl+scroll to zoom. <b>Show recipe conflicts</b> lists items several recipes claim to make — click one to graph it.' },
  { icon:'arrowR', title:'Keyboard & tips', body:'<span class="kbd">1–7</span> switch tabs · <span class="kbd">T</span> payload inspector · <span class="kbd">Esc</span> close dialogs. Press <b>Enter</b> in any field to Run. The <b>Wire Log</b> shows every real JSON-RPC frame — click one to inspect the exact payload.' },
];

export const EXAMPLES = {
  search_vanilla: { query:'axe', limit:10 },
  validate_script: { content:'module Base {\n  item MyAxe {\n    Type = Weapon,\n    DisplayName = My Axe,\n    Weight = 3,\n    MaxDamage = 15,\n    MinDamage = 8,\n  }\n}', strict:false },
  generate_script: { type:'item', name:'Katana_Custom', module:'Base',
    properties:{ category:'Weapon', DisplayName:'Custom Katana', Icon:'Katana', Type:'Weapon', Weight:1.6, MaxDamage:22, MinDamage:12, ConditionMax:30, Categories:'LongBlade', DamageCategory:'Slash', SwingTime:1.2 } },
  check_references: { references:['Axe','HandAxe','Sound_AxeSwing'], type:'all' },
  analyze_mod: { modPath:'C:/Users/you/Zomboid/mods/MyMod' },
  parse_game_files: {},
  index_knowledge_base: {},
  search_knowledge_base: { query:'loot distribution' },
  list_knowledge_topics: {},
};
export const EXAMPLE_ACTIONS = [
  { label:'Search “axe”', tool:'search_vanilla', args:{ query:'axe', limit:10 } },
  { label:'Generate katana', tool:'generate_script', args:EXAMPLES.generate_script },
  { label:'Generate canned food', tool:'generate_script', args:{ type:'item', name:'CannedBeans_Custom', module:'Base', properties:{ category:'Food', DisplayName:'Canned Beans', Icon:'CannedBeans', HungerChange:-25, Calories:350, DaysFresh:30 } } },
  { label:'Validate sample', tool:'validate_script', args:EXAMPLES.validate_script },
  { label:'Check references', tool:'check_references', args:EXAMPLES.check_references },
  { label:'List KB topics', tool:'list_knowledge_topics', args:{} },
];

export const CHAIN_CHIPS = [
  { id:'MillFlour', label:'Mill Flour', hint:'recipe' },
  { id:'MakeCoffeeMug', label:'Coffee Mug', hint:'recipe' },
  { id:'SawSteelBlockIntoChunks', label:'Saw Steel Chunk', hint:'recipe' },
  { id:'RipDenimClothing', label:'Rip Denim', hint:'recipe' },
  { id:'Axe', label:'Axe', hint:'item' },
  { id:'Plank', label:'Plank', hint:'item' },
  { id:'Flour2', label:'Flour', hint:'item' },
  { id:'SteelChunk', label:'Steel Chunk', hint:'item' },
];
export const CHAIN_COLW = 236, CHAIN_NODE_W = 168, CHAIN_NODE_H = 46, CHAIN_H = 640, CHAIN_CAP = 14, CHAIN_PITCH = 60;

export const VIEWS = ['status','playground','database','workshop','chain','installer','generator','settings'];

export const MEM_BUDGET_MB = 512;


export const SWATCHES = ['#22D3EE','#A78BFA','#34D399','#FBBF24','#FB7185'];
