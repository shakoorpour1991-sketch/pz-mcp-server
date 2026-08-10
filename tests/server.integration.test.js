/**
 * M3 integration tests: exercises the built MCP server over real stdio
 * transport, speaking the MCP JSON-RPC protocol (newline-delimited).
 *
 * Hermetic: the server is spawned with a temp working directory so its
 * SQLite database lands in <tmp>/data/pz_database.db, and a fake Project
 * Zomboid install + mod are created as fixtures. Requires `npm run build`
 * to have produced dist/ (the `test` script builds first).
 */
import { describe, test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { DatabaseSync } from "node:sqlite";
import AdmZip from "adm-zip";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SERVER = path.resolve(__dirname, "..", "dist", "index.js");

const GAME_SCRIPT = [
  "module Base {",
  "item TestSword",
  "{",
  "\tItemType = base:weapon,",
  "\tDisplayName = Test Sword,",
  "\tMaxDamage = 10,",
  "\tWeight = 2,",
  "}",
  "item TestHelmet",
  "{",
  "\tItemType = base:clothing,",
  "\tDisplayName = Test Helmet,",
  "}",
  "recipe TestSwordRecipe",
  "{",
  "\tResult: TestSword=1,",
  "\tWater=2,",
  "}",
  "vehicle TestCar",
  "{",
  "\tName = TestCar,",
  "\tDisplayName = Test Car,",
  "\tWeight = 1200,",
  "}",
  "}",
].join("\n");

const MOD_INFO = [
  "name=Test Mod",
  "id=TestMod",
  "description=Fixture mod for integration tests",
].join("\n");

const MOD_SCRIPT = [
  "item ModDagger",
  "{",
  "\tItemType = base:weapon,",
  "\tDisplayName = Mod Dagger,",
  "\tMaxDamage = 5,",
  "}",
].join("\n");

/** Minimal MCP stdio client. */
function createClient(cwd) {
  const child = spawn(process.execPath, [SERVER], {
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
  });
  let buf = "";
  let nextId = 1;
  const pending = new Map();
  const stderrChunks = [];

  child.stdout.on("data", (chunk) => {
    buf += chunk.toString();
    let idx;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        continue; // tolerate non-JSON lines
      }
      if (msg.id !== undefined && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error)
          reject(new Error(`${msg.error.code}: ${msg.error.message}`));
        else resolve(msg.result);
      }
    }
  });

  child.stderr.on("data", (chunk) => stderrChunks.push(chunk.toString()));

  return {
    call(method, params) {
      const id = nextId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        child.stdin.write(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            method,
            ...(params ? { params } : {}),
          }) + "\n",
        );
      });
    },
    notify(method, params) {
      child.stdin.write(
        JSON.stringify({
          jsonrpc: "2.0",
          method,
          ...(params ? { params } : {}),
        }) + "\n",
      );
    },
    stop() {
      child.stdin.end();
      const killTimer = setTimeout(() => child.kill("SIGKILL"), 3000);
      child.once("exit", () => clearTimeout(killTimer));
    },

    /** Resolves when the child process has fully exited. */
    waitExit() {
      return new Promise((resolve) => {
        if (child.exitCode !== null || child.signalCode !== null)
          return resolve();
        child.once("exit", resolve);
      });
    },
    get stderr() {
      return stderrChunks.join("");
    },
  };
}

const TOOLS = [
  "search_vanilla",
  "search_recipes",
  "generate_script",
  "validate_script",
  "check_references",
  "analyze_mod",
  "parse_game_files",
  "index_knowledge_base",
  "index_javadocs",
  "search_knowledge_base",
  "list_knowledge_topics",
  "analyze_recipe_chain",
  "detect_recipe_conflicts",
  "export_mod_script",
  "workshop_search",
  "workshop_get_details",
  "workshop_download",
  "workshop_analyze",
  "workspace_create",
  "workspace_inspect",
  "workspace_list",
  "detect_pz_paths",
  "install_mod",
  "modgen_templates",
  "modgen_generate",
  "modgen_list",
  "modgen_blueprint",
  "modgen_regenerate",
];

describe("pz-mcp-server integration", () => {
  let tmpDir;
  let gameDir;
  let modDir;
  let client;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-mcp-test-"));
    gameDir = path.join(tmpDir, "game");
    modDir = path.join(tmpDir, "mod");

    // Fixture: fake Project Zomboid installation
    fs.mkdirSync(path.join(gameDir, "media", "scripts"), { recursive: true });
    fs.writeFileSync(
      path.join(gameDir, "media", "scripts", "items.txt"),
      GAME_SCRIPT,
    );

    // Fixture: fake mod with mod.info + scripts
    fs.mkdirSync(path.join(modDir, "media", "scripts"), { recursive: true });
    fs.writeFileSync(path.join(modDir, "mod.info"), MOD_INFO);
    fs.writeFileSync(
      path.join(modDir, "media", "scripts", "mod_items.txt"),
      MOD_SCRIPT,
    );

    client = createClient(tmpDir);
    await client.call("initialize", {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "node-test-integration", version: "1.0.0" },
    });
    client.notify("notifications/initialized");
  });

  after(async () => {
    if (client) {
      client.stop();
      await client.waitExit(); // release the SQLite file lock before rm
    }
    if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("tools/list exposes all MCP tools", async () => {
    const result = await client.call("tools/list");
    const names = result.tools.map((t) => t.name).sort();
    assert.deepEqual(names, [...TOOLS].sort());
  });

  test("install_mod installs a mod from a zip; detect_pz_paths reports paths", async () => {
    const zip = new AdmZip();
    zip.addFile(
      "MyInstalledMod/mod.info",
      Buffer.from("id=MyInstalledMod\nname=My Installed Mod\nversion=1.0\n"),
    );
    zip.addFile(
      "MyInstalledMod/media/scripts/items.txt",
      Buffer.from("item InstalledDagger { ItemType = base:weapon, }"),
    );
    const zipPath = path.join(tmpDir, "my-installed-mod.zip");
    zip.writeZip(zipPath);

    const modsTarget = path.join(tmpDir, "Zomboid", "mods");
    const result = await client.call("tools/call", {
      name: "install_mod",
      arguments: { source: zipPath, targetDir: modsTarget },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("installed"), text);
    const sc = result.structuredContent;
    assert.equal(sc.mods.length, 1);
    assert.equal(sc.mods[0].status, "installed");
    assert.equal(sc.mods[0].modId, "MyInstalledMod");
    assert.equal(sc.mods[0].filesCopied, 2);
    assert.ok(
      fs.existsSync(path.join(modsTarget, "MyInstalledMod", "mod.info")),
    );
    assert.ok(
      fs.existsSync(
        path.join(
          modsTarget,
          "MyInstalledMod",
          "media",
          "scripts",
          "items.txt",
        ),
      ),
    );

    const detect = await client.call("tools/call", {
      name: "detect_pz_paths",
      arguments: {},
    });
    const d = detect.structuredContent;
    assert.equal(typeof d.platform, "string");
    assert.ok(typeof d.modsDir.path === "string" && d.modsDir.path.length > 0);
    assert.equal(typeof d.modsDir.exists, "boolean");
    assert.equal(typeof d.modsDir.writable, "boolean");
  });

  test("modgen workflow: templates → generate → list → blueprint → regenerate", async () => {
    const tpl = await client.call("tools/call", {
      name: "modgen_templates",
      arguments: {},
    });
    const templates = tpl.structuredContent.templates;
    assert.equal(templates.length, 5);
    assert.ok(templates.some((t) => t.id === "melee_weapon"));
    assert.ok(
      templates.every((t) => t.fields.length >= 4 && t.fields[0].label),
    );

    const gen = await client.call("tools/call", {
      name: "modgen_generate",
      arguments: {
        template: "melee_weapon",
        name: "GenSword",
        modId: "gen_sword",
        modName: "Generated Sword",
        itemName: "GenSwordItem",
      },
    });
    const g = gen.structuredContent;
    assert.equal(g.dryRun, false);
    assert.equal(g.project, "GenSword");
    assert.equal(g.blueprint.mod.id, "gen_sword");
    assert.equal(g.blueprint.mod.itemName, "GenSwordItem");
    assert.equal(g.validation.ready, true);
    assert.ok(
      g.script.includes("ItemType = base:weapon"),
      "B42 item class emitted",
    );
    assert.ok(!/^\s*Type\s*=/.test(g.script), "no legacy Type property");
    assert.ok(
      !g.script.includes("DisplayName"),
      "no DisplayName — translation used",
    );
    assert.ok(g.files.includes("modgen.blueprint.json"));
    assert.ok(g.files.includes("README.md"));
    assert.ok(g.files.includes("mod.info"));
    assert.ok(g.files.includes("poster.png"));
    assert.ok(
      g.files.includes("42/media/lua/shared/Translate/EN/ItemName.json"),
    );
    assert.ok(g.files.includes("42/media/scripts/gen_sword_items.txt"));

    const list = await client.call("tools/call", {
      name: "modgen_list",
      arguments: {},
    });
    assert.ok(
      list.structuredContent.projects.some((p) => p.project === "GenSword"),
    );

    const bp = await client.call("tools/call", {
      name: "modgen_blueprint",
      arguments: { project: "GenSword" },
    });
    assert.equal(bp.structuredContent.kind, "pz-modgen");
    assert.equal(bp.structuredContent.mod.itemName, "GenSwordItem");

    const regen = await client.call("tools/call", {
      name: "modgen_regenerate",
      arguments: {
        project: "GenSword",
        stats: { MaxDamage: 2.2 },
        randomize: ["CriticalChance"],
      },
    });
    const r = regen.structuredContent;
    assert.equal(r.blueprint.stats.MaxDamage, 2.2);
    assert.equal(r.validation.ready, true);
    assert.ok(r.script.includes("MaxDamage = 2.2"));
    assert.ok(r.script.includes("ItemType = base:weapon"));
  });

  test("parse_game_files parses fixture game scripts", async () => {
    const result = await client.call("tools/call", {
      name: "parse_game_files",
      arguments: { gamePath: gameDir },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("**Items**: 2 parsed"));
    assert.ok(text.includes("**Recipes**: 1 parsed"));
    assert.ok(!text.includes("Parse Errors:"));
  });

  test("index_knowledge_base indexes markdown docs and search finds them", async () => {
    const kbDir = path.join(tmpDir, "kb");
    fs.mkdirSync(kbDir, { recursive: true });
    fs.writeFileSync(
      path.join(kbDir, "Farming.md"),
      "# Farming Guide\n> Source: v42.20\n\nCabbage grows in spring. Water is essential.\n",
    );
    fs.writeFileSync(
      path.join(kbDir, "Cooking.md"),
      "# Cooking Guide\n> Source: v42.20\n\nSoup needs water and a pot.\n",
    );

    const idx = await client.call("tools/call", {
      name: "index_knowledge_base",
      arguments: { path: kbDir },
    });
    assert.ok(idx.content[0].text.includes("**Topics**: 2 indexed"));

    const search = await client.call("tools/call", {
      name: "search_knowledge_base",
      arguments: { query: "water", limit: 5 },
    });
    assert.ok(search.content[0].text.includes('Found 2 results for "water"'));

    const topicFilter = await client.call("tools/call", {
      name: "search_knowledge_base",
      arguments: { query: "water", topic: "Cooking" },
    });
    assert.ok(topicFilter.content[0].text.includes("Found 1 results"));
    assert.ok(topicFilter.content[0].text.includes("Cooking"));

    const list = await client.call("tools/call", {
      name: "list_knowledge_topics",
      arguments: {},
    });
    assert.ok(list.content[0].text.includes("Knowledge Base Topics (2)"));
    assert.ok(list.content[0].text.includes("Farming"));
    assert.ok(list.content[0].text.includes("Cooking"));
  });

  test("index_javadocs ingests a javadocs tree and search returns Java API results", async () => {
    const javadocsSrc = path.join(tmpDir, "javadocs-src");
    fs.cpSync(path.join(__dirname, "fixtures", "javadocs"), javadocsSrc, {
      recursive: true,
    });
    const javadocsOut = path.join(tmpDir, "javadocs-kb");

    const idx = await client.call("tools/call", {
      name: "index_javadocs",
      arguments: { source: javadocsSrc, output: javadocsOut },
    });
    const sc = idx.structuredContent;
    assert.equal(sc.ingest.classPages, 6);
    assert.equal(sc.ingest.written, 6);
    assert.equal(sc.ingest.version, "42.20.0");
    assert.equal(sc.index.topics, 6);
    assert.ok(idx.content[0].text.includes("JavaDocs Index Results"));
    assert.ok(
      fs.existsSync(path.join(javadocsOut, "zombie.FixtureGlobals.md")),
    );

    const search = await client.call("tools/call", {
      name: "search_knowledge_base",
      arguments: { query: "FixtureGlobals", limit: 5 },
    });
    assert.ok(search.content[0].text.includes("zombie.FixtureGlobals"));
    assert.ok(
      search.structuredContent.results.some(
        (r) => r.topic === "zombie.FixtureGlobals",
      ),
    );

    const methodSearch = await client.call("tools/call", {
      name: "search_knowledge_base",
      arguments: { query: "getPlayer", limit: 5 },
    });
    assert.ok(
      methodSearch.structuredContent.results.some(
        (r) =>
          r.topic === "zombie.FixtureGlobals" && /getPlayer/.test(r.snippet),
      ),
    );

    const resource = await client.call("resources/read", {
      uri: "knowledge://zombie.FixtureGlobals",
    });
    assert.ok(
      resource.contents[0].text.includes("Unofficial PZ JavaDocs 42.20.0"),
    );

    const list = await client.call("tools/call", {
      name: "list_knowledge_topics",
      arguments: {},
    });
    assert.ok(list.content[0].text.includes("zombie.GitVersion"));
  });

  test("index_javadocs rejects a non-existent source dir", async () => {
    await assert.rejects(
      client.call("tools/call", {
        name: "index_javadocs",
        arguments: { source: path.join(tmpDir, "no-such-javadocs") },
      }),
      /Invalid javadocs path/,
    );
  });

  test("index_javadocs with no source uses the repo-shipped markdown (works on any machine)", async () => {
    const idx = await client.call("tools/call", {
      name: "index_javadocs",
      arguments: {},
    });
    const sc = idx.structuredContent;
    assert.equal(sc.mode, "shipped");
    assert.equal(sc.ingest.mode, "shipped");
    assert.ok(
      sc.ingest.source.replace(/\\/g, "/").includes("knowledge-base/javadocs"),
    );
    assert.ok(
      sc.index.topics > 4000,
      `expected 4000+ types, got ${sc.index.topics}`,
    );
    assert.ok(idx.content[0].text.includes("repo-shipped distilled markdown"));

    // The game API is searchable right after the shipped-docs index.
    const search = await client.call("tools/call", {
      name: "search_knowledge_base",
      arguments: { query: "IsoObject getSquare", limit: 5 },
    });
    assert.ok(
      search.structuredContent.results.some(
        (r) => r.topic === "zombie.iso.IsoObject",
      ),
    );
    assert.ok(search.content[0].text.includes("📘 JavaDocs"));
  });

  test("search_vanilla finds parsed items", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "TestSword", limit: 10 },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("TestSword"));
    assert.ok(text.includes("base:weapon"));
    // N2: structured results accompany the human text. Search is now
    // prefix-based (search-as-you-type), so the fixture recipe also matches
    // via its own id ('TestSwordRecipe') AND its 'Result: TestSword=1,'
    // property text — ordering is rank-based, so the item row must simply be
    // present among the results.
    assert.ok(result.structuredContent.count >= 1);
    assert.ok(
      result.structuredContent.results.some((r) => r.id === "TestSword"),
    );
  });

  test("search_recipes finds fixture recipes by ingredient and result", async () => {
    // The fixture game script has `recipe TestSwordRecipe { Result: TestSword=1, Water=2, }`
    const byIngredient = await client.call("tools/call", {
      name: "search_recipes",
      arguments: { ingredient: "Water" },
    });
    const text = byIngredient.content[0].text;
    assert.ok(text.includes("TestSwordRecipe"));
    assert.ok(text.includes("Ingredients: 2x Water"));
    assert.ok(text.includes("Results: 1x TestSword"));
    assert.equal(byIngredient.structuredContent.recipes[0].result, "TestSword");

    const byResult = await client.call("tools/call", {
      name: "search_recipes",
      arguments: { result: "TestSword" },
    });
    assert.ok(byResult.content[0].text.includes("TestSwordRecipe"));

    const none = await client.call("tools/call", {
      name: "search_recipes",
      arguments: {
        ingredient: "NoSuchItem",
        skill: "Carpentry",
        minSkillLevel: 4,
      },
    });
    assert.ok(none.content[0].text.includes("Found 0 recipes"));
    assert.equal(none.structuredContent.count, 0);
  });

  test("search_vanilla weight and calories filters work", async () => {
    // Fixture TestSword has Weight = 2; TestHelmet has no Weight.
    const heavy = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "", minWeight: 1.5, limit: 50 },
    });
    assert.ok(
      heavy.structuredContent.results.some((r) => r.id === "TestSword"),
    );

    const light = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "", maxWeight: 1, limit: 50 },
    });
    assert.ok(
      !light.structuredContent.results.some((r) => r.id === "TestSword"),
    );
  });

  test("search_vanilla empty query lists items without crashing", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "", limit: 5 },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("Found"));
    assert.ok(text.includes("TestHelmet"));
  });

  test("search_vanilla exact id lookup resolves canonical item (feature 5)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { id: "TestSword", limit: 10 },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("Resolved"));
    assert.ok(text.includes("TestSword"));
    assert.ok(text.includes("exact"));
    assert.ok(text.includes("100%"));
    const sc = result.structuredContent;
    assert.equal(sc.count, 1);
    assert.equal(sc.results[0].id, "TestSword");
    assert.equal(sc.results[0].provenance.source, "vanilla");
    assert.equal(sc.results[0].provenance.confidence, "verified");
  });

  test("search_vanilla fuzzy id lookup resolves typos (feature 2)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { id: "Testsord", limit: 10 }, // typo of TestSword
    });
    const text = result.content[0].text;
    assert.ok(text.includes("Resolved"));
    assert.ok(text.includes("TestSword"));
    assert.ok(text.includes("fuzzy"));
    const sc = result.structuredContent;
    assert.equal(sc.count, 1);
    assert.equal(sc.results[0].id, "TestSword");
  });

  test("search_vanilla properties filter finds items by property constraints (feature 1)", async () => {
    // TestSword has MaxDamage=10, Weight=2. Find it with MaxDamage > 5.
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        properties: [{ key: "MaxDamage", min: 5 }],
        limit: 10,
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("TestSword"));
    assert.ok(!text.includes("TestHelmet"));

    // MaxDamage < 5 should return nothing (fixture has MaxDamage=10)
    const low = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        properties: [{ key: "MaxDamage", max: 5 }],
        limit: 10,
      },
    });
    assert.ok(!low.content[0].text.includes("TestSword"));
  });

  test("search_vanilla properties filter with eq constraint (feature 1)", async () => {
    // TestSword has ItemType = base:weapon
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        properties: [{ key: "ItemType", eq: "base:weapon" }],
        limit: 10,
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("TestSword"));
  });

  test("search_vanilla module filter works (feature 1)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        module: "Base",
        limit: 10,
      },
    });
    const text = result.content[0].text;
    // Fixture items are all in module Base
    assert.ok(text.includes("TestSword"));
    assert.ok(text.includes("TestHelmet"));

    const noMatch = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        module: "NonExistentModule",
        limit: 10,
      },
    });
    assert.ok(noMatch.content[0].text.includes("Found 0"));
  });

  test("search_vanilla scriptPath filter works (feature 1)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        scriptPath: "items.txt",
        limit: 10,
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("TestSword"));
    assert.ok(text.includes("TestHelmet"));
  });

  test("search_vanilla usedInRecipe filter works (feature 1)", async () => {
    // Items referenced by recipes as ingredients. The fixture recipe
    // TestSwordRecipe has Water as ingredient — Water does not have its
    // own item row, so the filter returns no results. Still exercises
    // the code path without crashing.
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        usedInRecipe: true,
        limit: 10,
      },
    });
    // The API should return normally (possibly empty)
    assert.ok(result.content[0].text.includes("Found"));
    const sc = result.structuredContent;
    assert.equal(typeof sc.count, "number");
  });

  test("search_vanilla producedByRecipe filter works (feature 1)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        query: "",
        producedByRecipe: true,
        limit: 10,
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("TestSword"));
  });

  test("search_vanilla format=ai returns compact context blocks (feature 3)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        id: "TestSword",
        format: "ai",
      },
    });
    const text = result.content[0].text;
    // AI context header with anti-hallucination instruction
    assert.ok(text.includes("Use these exact identifiers"));
    assert.ok(text.includes("Do not invent"));
    // Compact key: value format
    assert.ok(text.includes("id: TestSword"));
    assert.ok(text.includes("type: item"));
    assert.ok(text.includes("module: Base"));
    assert.ok(text.includes("properties:"));
    assert.ok(text.includes("MaxDamage: 10"));
    // Build info
    assert.ok(text.includes("Build 42.20"));
    // Footer instruction
    assert.ok(text.includes("generate your script using ONLY"));
  });

  test("search_vanilla includeRelations returns knowledge graph (feature 4)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: {
        id: "TestSword",
        includeRelations: true,
      },
    });
    const text = result.content[0].text;
    // Relations header
    assert.ok(text.includes("Relations: TestSword"));
    // TestSword is produced by TestSwordRecipe
    assert.ok(text.includes("TestSwordRecipe"));
    // TestSword is not used as an ingredient per se, but has relations
    assert.ok(text.includes("Recipes using TestSword"));
    assert.ok(text.includes("Recipes producing TestSword"));
  });

  test("search_vanilla result carries provenance (feature 6)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "TestSword", limit: 10 },
    });
    const sc = result.structuredContent;
    assert.ok(sc.build, "build should be present");
    assert.equal(sc.build, "42.20");
    const item = sc.results.find((r) => r.id === "TestSword");
    assert.notEqual(item, undefined);
    assert.ok(item.provenance, "each result should have provenance");
    assert.equal(item.provenance.source, "vanilla");
    assert.equal(item.provenance.build, "42.20");
    assert.ok(item.provenance.path, "path should be present");
    assert.ok(item.provenance.confidence, "confidence should be present");
  });

  test("search_vanilla typo-tolerant fallback resolves query to canonical item (feature 2)", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "Testsord", limit: 10 }, // typo of TestSword
    });
    const text = result.content[0].text;
    // The handler should resolve the typo and report the canonical match
    assert.ok(text.includes("No text matches"));
    assert.ok(text.includes("TestSword"));
    const sc = result.structuredContent;
    assert.ok(sc.resolved, "resolved should be present");
    assert.equal(sc.resolved.canonicalId, "TestSword");
  });

  test("validate_script accepts a valid item script", async () => {
    const result = await client.call("tools/call", {
      name: "validate_script",
      arguments: {
        content:
          "item SampleKnife\n{\n\tItemType = base:weapon,\n\tDisplayName = Sample Knife,\n}",
        type: "item",
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("✅ **Valid**"));
  });

  test("validate_script with filePath reads the file and reports file-scoped ZedScripts diagnostics", async () => {
    const brokenPath = path.join(
      modDir,
      "media",
      "scripts",
      "broken_items.txt",
    );
    fs.writeFileSync(
      brokenPath,
      "module TestMod\n{\n\titem BrokenKnife\n\t{\n\t\tItemType = base:weapon,\n\t\tMaxDamaage = 999,\n\t\tFlyingPower = 1,\n\t}\n}\n",
    );
    const result = await client.call("tools/call", {
      name: "validate_script",
      arguments: { filePath: brokenPath, type: "item" },
    });
    const text = result.content[0].text;
    // Diagnostics are scoped to the file and carry the ZedScripts marker +
    // actionable suggestion (typo → real property name).
    assert.ok(text.includes("broken_items.txt"), text);
    assert.ok(text.includes("[UNKNOWN_PARAMETER]"), text);
    assert.ok(text.includes("MaxDamage"), text);
    assert.ok(text.includes("ZedScripts knowledge layer"), text);
    const structured = result.structuredContent;
    assert.ok(structured.warnings.some((w) => w.file === brokenPath));
    assert.equal(structured.zedScripts.commit.length > 0, true);
  });

  test("generate_script produces an item script block", async () => {
    const result = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "item",
        name: "GeneratedPickaxe",
        properties: { Type: "Weapon", MaxDamage: 15 },
        module: "Test",
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("GeneratedPickaxe"));
    assert.ok(text.includes("MaxDamage"));
  });

  test("generate_script accepts the balance option (melee weapon template, powerful)", async () => {
    const result = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "item",
        name: "BalancedBat",
        properties: {
          Type: "Weapon",
          DisplayName: "Balanced Bat",
          category: "Weapon",
        },
        balance: "powerful",
        includeComments: true,
      },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("BalancedBat"));
    assert.ok(text.includes("MaxDamage = 1.5")); // 1.0 (melee base) * 1.5 (powerful)
    assert.ok(text.includes("Generated by Project Zomboid MCP Server"));
  });

  test("generate_script supports fixing and sound types", async () => {
    const fixing = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "fixing",
        name: "Fix Bat",
        properties: {
          require: "Base.Bat",
          fixers: [{ material: "Base.Glue", quantity: 1 }],
        },
      },
    });
    const fixingText = fixing.content[0].text;
    assert.ok(fixingText.includes("fixing Fix Bat"));
    assert.ok(fixingText.includes("Require : Base.Bat,"));
    assert.ok(fixingText.includes("Fixer : Base.Glue=1,"));

    const sound = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "sound",
        name: "TestSwing",
        properties: { category: "Ambient", file: "swing.ogg" },
      },
    });
    const soundText = sound.content[0].text;
    assert.ok(soundText.includes("sound TestSwing"));
    assert.ok(soundText.includes("category = Ambient,"));
    assert.ok(soundText.includes("file = swing.ogg,"));
  });

  test("check_references resolves known and unknown references", async () => {
    const result = await client.call("tools/call", {
      name: "check_references",
      arguments: { references: ["TestSword", "NoSuchItemEver"], type: "item" },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("✅ Valid: 1"));
    assert.ok(text.includes("❌ Invalid: 1"));
    assert.ok(text.includes("NoSuchItemEver"));
    // Completeness summary is part of the output now.
    assert.ok(text.includes("📊 Defined:"));
  });

  test("extractReferences populates the references table during parse", async () => {
    const dbPath = path.join(tmpDir, "data", "pz_database.db");
    const db = new DatabaseSync(dbPath, { readOnly: true });
    try {
      const rows = db
        .prepare(
          'SELECT item_id, reference_id, reference_type, context FROM "references" ORDER BY context',
        )
        .all();
      const recipeRows = rows.filter((r) => r.item_id === "TestSwordRecipe");
      assert.ok(recipeRows.length >= 2);
      assert.equal(
        recipeRows.some(
          (r) => r.context === "result" && r.reference_id === "TestSword",
        ),
        true,
      );
      assert.equal(
        recipeRows.some(
          (r) => r.context === "ingredient" && r.reference_id === "Water",
        ),
        true,
      );
    } finally {
      db.close();
    }
  });

  test("analyze_recipe_chain walks the fixture recipe graph (N3)", async () => {
    const result = await client.call("tools/call", {
      name: "analyze_recipe_chain",
      arguments: { seed: "TestSwordRecipe", direction: "both", maxDepth: 3 },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("Recipe Chain: TestSwordRecipe"));
    assert.ok(text.includes("consumes: Water"));
    assert.ok(text.includes("produces: TestSword"));

    const chain = result.structuredContent;
    assert.equal(chain.seedKind, "recipe");
    const seedNode = chain.nodes.find((n) => n.id === "TestSwordRecipe");
    assert.notEqual(seedNode, undefined);
    assert.equal(
      seedNode.results.some((r) => r.id === "TestSword"),
      true,
    );
    assert.equal(
      seedNode.ingredients.some((r) => r.id === "Water"),
      true,
    );
    // Water + TestSword item nodes were expanded from the recipe.
    assert.ok(chain.nodes.some((n) => n.id === "Water"));
    assert.ok(chain.nodes.some((n) => n.id === "TestSword"));
  });

  test("detect_recipe_conflicts reports none for the single-recipe fixture (N3)", async () => {
    const result = await client.call("tools/call", {
      name: "detect_recipe_conflicts",
      arguments: { limit: 50 },
    });
    const text = result.content[0].text;
    assert.ok(
      text.includes("✅ No items are produced by more than one recipe."),
    );
    const sc = result.structuredContent;
    assert.equal(sc.totalRecipes, 1);
    assert.deepEqual(sc.conflicts, []);
  });

  test("export_mod_script dry-runs without writing, then writes on dryRun=false", async () => {
    const dry = await client.call("tools/call", {
      name: "export_mod_script",
      arguments: {
        modPath: modDir,
        type: "item",
        name: "ExportedKnife",
        properties: { Type: "Weapon", DisplayName: "Exported Knife" },
        module: "TestMod",
        dryRun: true,
      },
    });
    assert.ok(dry.content[0].text.includes("Dry run"));
    const target = path.join(modDir, "media", "scripts", "ExportedKnife.txt");
    assert.equal(fs.existsSync(target), false);
    assert.equal(dry.structuredContent.dryRun, true);
    assert.equal(dry.structuredContent.filePath, target);

    const written = await client.call("tools/call", {
      name: "export_mod_script",
      arguments: {
        modPath: modDir,
        type: "item",
        name: "ExportedKnife",
        properties: { Type: "Weapon", DisplayName: "Exported Knife" },
        module: "TestMod",
        dryRun: false,
      },
    });
    assert.equal(fs.existsSync(target), true);
    const content = fs.readFileSync(target, "utf-8");
    assert.ok(content.includes("item ExportedKnife"));
    assert.ok(content.includes("module TestMod"));
    assert.equal(written.structuredContent.dryRun, false);
    assert.equal(written.structuredContent.filePath, target);
  });

  test("index_knowledge_base rejects path traversal with InvalidParams", async () => {
    await assert.rejects(
      client.call("tools/call", {
        name: "index_knowledge_base",
        arguments: { path: `${gameDir}${path.sep}..${path.sep}..` },
      }),
      /Invalid knowledge base path/,
    );
  });

  test("vehicle blocks parse and are searchable with type=vehicle", async () => {
    const result = await client.call("tools/call", {
      name: "search_vanilla",
      arguments: { query: "TestCar", type: "vehicle" },
    });
    const text = result.content[0].text;
    assert.ok(text.includes('Found 1 results for "TestCar"'));
    assert.ok(text.includes("**TestCar** (vehicle)"));
    assert.ok(text.includes("Test Car"));
    assert.ok(text.includes("Weight: 1200"));
  });

  test("generate_script produces evolvedrecipe and vehicle scripts", async () => {
    const evo = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "evolvedrecipe",
        name: "TestCampfirePot",
        properties: {
          baseItem: "Base.TinPot",
          ingredients: ["Base.Water", "Base.Cabbage"],
          maxItems: 3,
        },
      },
    });
    const evoText = evo.content[0].text;
    assert.ok(evoText.includes("evolvedrecipe TestCampfirePot"));
    assert.ok(evoText.includes("BaseItem: Base.TinPot"));
    assert.ok(evoText.includes("Ingredients: Base.Water, Base.Cabbage"));

    const veh = await client.call("tools/call", {
      name: "generate_script",
      arguments: {
        type: "vehicle",
        name: "TestCar",
        properties: { Mass: 1200 },
      },
    });
    const vehText = veh.content[0].text;
    assert.ok(vehText.includes("vehicle TestCar"));
    assert.ok(vehText.includes("Mass = 1200"));
  });

  test("analyze_mod analyzes the fixture mod", async () => {
    const result = await client.call("tools/call", {
      name: "analyze_mod",
      arguments: { modPath: modDir },
    });
    const text = result.content[0].text;
    assert.ok(text.includes("**Mod Name**: Test Mod"));
    // The fixture mod ships one script; export_mod_script may have added more.
    assert.match(text, /\*\*Scripts\*\*: \d+ file\(s\) found/);
  });

  test("analyze_mod rejects path traversal with InvalidParams", async () => {
    await assert.rejects(
      client.call("tools/call", {
        name: "analyze_mod",
        arguments: { modPath: `${gameDir}${path.sep}..${path.sep}..` },
      }),
      /Invalid modPath/,
    );
  });

  test("server stays alive with no uncaught stderr errors after tool calls", () => {
    const stderr = client.stderr;
    assert.ok(!stderr.includes("Failed to initialize server"));
    assert.ok(!stderr.includes("Unhandled"));
  });

  describe("MCP resources", () => {
    test("resources/list returns KB topics as resources with knowledge:// URIs", async () => {
      const kbDir = path.join(tmpDir, "kb2");
      fs.mkdirSync(kbDir, { recursive: true });
      fs.writeFileSync(
        path.join(kbDir, "Farming.md"),
        "# Farming Guide\n> Source: v42.20\n\nCabbage grows in spring.\n",
      );
      await client.call("tools/call", {
        name: "index_knowledge_base",
        arguments: { path: kbDir },
      });

      const result = await client.call("resources/list");
      const farmingRes = result.resources?.find((r) => r.name === "Farming");
      assert.notEqual(farmingRes, undefined);
      assert.equal(farmingRes.uri, "knowledge://Farming");
      assert.equal(farmingRes.mimeType, "text/markdown");
      assert.match(farmingRes.description, /\d+ lines/);
    });

    test("resources/read returns full content for existing topic", async () => {
      const result = await client.call("resources/read", {
        uri: "knowledge://Farming",
      });
      assert.notEqual(result.contents, undefined);
      assert.ok(result.contents.length > 0);
      assert.ok(result.contents[0].text.includes("Farming Guide"));
      assert.equal(result.contents[0].mimeType, "text/markdown");
    });

    test("resources/read returns error for missing topic", async () => {
      await assert.rejects(
        client.call("resources/read", { uri: "knowledge://NoSuchTopic" }),
        /Topic not found/,
      );
    });
  });

  describe("MCP prompts", () => {
    test("prompts/list returns all 4 prompt templates", async () => {
      const result = await client.call("prompts/list");
      const names = result.prompts.map((p) => p.name).sort();
      assert.deepEqual(
        names,
        ["analyze-mod", "create-item", "search-game", "validate-script"].sort(),
      );
    });

    test("prompts/get create-item substitutes itemName arg", async () => {
      const result = await client.call("prompts/get", {
        name: "create-item",
        arguments: { itemName: "TestSword", category: "Weapon" },
      });
      assert.ok(result.description.includes("TestSword"));
      assert.notEqual(result.messages, undefined);
      assert.equal(result.messages.length, 1);
      assert.equal(result.messages[0].role, "user");
      assert.ok(result.messages[0].content.text.includes("TestSword"));
      assert.ok(result.messages[0].content.text.includes("Weapon"));
    });

    test("prompts/get search-game substitutes query and type args", async () => {
      const result = await client.call("prompts/get", {
        name: "search-game",
        arguments: { query: "axe", type: "item" },
      });
      assert.ok(result.messages[0].content.text.includes("axe"));
      assert.ok(result.messages[0].content.text.includes("item"));
    });

    test("prompts/get returns error for unknown prompt", async () => {
      await assert.rejects(
        client.call("prompts/get", { name: "nonexistent" }),
        /Unknown prompt/,
      );
    });
  });
});
