/**
 * Mod Generator (modgen_*) unit tests — the full beginner workflow with
 * Build 42 correctness assertions:
 *  - generated scripts emit ItemType = base:* (never legacy Type = ...),
 *  - display names land in the ItemName translation file (no DisplayName),
 *  - poster + custom icons are really generated (real PNGs, not 1×1),
 *  - dry runs report the exact file plan,
 *  - regenerate recomputes statsSource when the vanilla DB appears,
 *  - Build 42 validation blocks invalid generations before anything is written.
 * Runs against the compiled dist/ build with a real temp DB + workspace.
 */
import { describe, test, before, after } from "node:test";
import assert from "node:assert/strict";
import path from "path";
import fs from "fs";
import os from "os";

import { DatabaseManager } from "../../dist/database/DatabaseManager.js";
import { ProjectZomboidParser } from "../../dist/parsers/ProjectZomboidParser.js";
import { ModAnalyzer } from "../../dist/analyzers/ModAnalyzer.js";
import { ValidationEngine } from "../../dist/validation/ValidationEngine.js";
import { WorkspaceManager } from "../../dist/workspace/WorkspaceManager.js";
import { ModGenManager } from "../../dist/modgen/ModGenManager.js";
import { modgenTools } from "../../dist/tools/modgen.js";

function seedWeapon(db, name, props) {
  db.insertItem({
    id: "Base." + name,
    name,
    type: "item",
    module: "Base",
    category: "Weapon",
    properties: {
      ItemType: "base:weapon",
      DisplayCategory: "Weapon",
      SubCategory: "Swinging",
      ...props,
    },
    rawContent: "",
    filePath: "seed",
  });
}

function isPng(buf) {
  return (
    buf.length > 100 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  );
}

describe("Mod Generator", () => {
  let root;
  let db;
  let ws;
  let manager;
  let ctx;

  before(async () => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "pz-modgen-"));
    db = new DatabaseManager(path.join(root, "test.db"));
    await db.initialize();
    ws = new WorkspaceManager([path.join(root, "workspace")]);
    await ws.ensureRoots();
    const parser = new ProjectZomboidParser(db);
    const validator = new ValidationEngine(db);
    const analyzer = new ModAnalyzer(db, parser);
    manager = new ModGenManager(db, validator, ws);
    ctx = {
      dbManager: db,
      parser,
      analyzer,
      validator,
      workspaceManager: ws,
      modGenManager: manager,
    };
  });

  after(() => {
    db.close();
    fs.rmSync(root, { recursive: true, force: true });
  });

  const baseArgs = () => ({
    template: "melee_weapon",
    name: "MyWeapon",
    modId: "my_weapon",
    modName: "My Weapon",
    itemName: "MyWeaponItem",
  });

  test("modgen_templates lists five templates with fields, maturity and icons", () => {
    const list = manager.listTemplates();
    assert.equal(list.length, 5);
    const ids = list.map((t) => t.id).sort();
    assert.deepEqual(ids, [
      "clothing",
      "food",
      "melee_weapon",
      "simple_item",
      "tool",
    ]);
    const weapon = list.find((t) => t.id === "melee_weapon");
    assert.ok(weapon.fields.length >= 10);
    assert.ok(weapon.fields.some((f) => f.key === "MaxDamage" && f.auto));
    assert.ok(weapon.fields.every((f) => f.hint && f.label));
    assert.equal(weapon.itemType, "base:weapon");
    assert.equal(weapon.maturity, "ready");
    assert.ok(weapon.iconSuggestions.length >= 3);
    const clothing = list.find((t) => t.id === "clothing");
    assert.equal(clothing.maturity, "beta");
    assert.ok(clothing.maturityNote.length > 0);
  });

  test("vanillaFor returns null when the DB has no data", async () => {
    const vanilla = await manager.vanillaFor("melee_weapon", ctx);
    assert.equal(vanilla, null);
  });

  test("generate emits a Build 42 item, translation, real poster, and validates", async () => {
    const res = await manager.generate(ctx, baseArgs());
    assert.equal(res.dryRun, false);
    assert.equal(res.blueprint.statsSource.kind, "defaults");
    assert.equal(res.project, "MyWeapon");

    const projectRoot = path.join(root, "workspace", "MyWeapon");
    const scriptPath = path.join(
      projectRoot,
      "42",
      "media",
      "scripts",
      "my_weapon_items.txt",
    );
    assert.ok(fs.existsSync(scriptPath), "item script written");

    const script = fs.readFileSync(scriptPath, "utf8");
    assert.ok(script.includes("module Base"));
    assert.ok(script.includes("item MyWeaponItem"));
    assert.ok(
      script.includes("ItemType = base:weapon"),
      "B42 item class emitted",
    );
    assert.ok(script.includes("MaxDamage"));
    assert.ok(!/^\s*Type\s*=/.test(script), "no legacy Type property");
    assert.ok(
      !script.includes("DisplayName"),
      "no DisplayName — translation used instead",
    );

    // Build 42 ItemName translation file, keyed Module.ItemId.
    const translationPath = path.join(
      projectRoot,
      "42",
      "media",
      "lua",
      "shared",
      "Translate",
      "EN",
      "ItemName.json",
    );
    assert.ok(fs.existsSync(translationPath), "translation file written");
    const translation = JSON.parse(fs.readFileSync(translationPath, "utf8"));
    assert.equal(translation["Base.MyWeaponItem"], "MyWeaponItem");

    // Real generated poster (not the old 1×1 placeholder).
    const poster = fs.readFileSync(path.join(projectRoot, "poster.png"));
    assert.ok(isPng(poster), "poster is a real PNG");
    assert.ok(poster.length > 200, "poster has real content");

    // Default icon is a verified vanilla texture — no placeholder file needed.
    assert.ok(
      !fs.existsSync(path.join(projectRoot, "42", "media", "textures")),
      "no custom icon texture for vanilla default",
    );

    const info = fs.readFileSync(path.join(projectRoot, "mod.info"), "utf8");
    assert.ok(info.includes("name=My Weapon"));
    assert.ok(info.includes("id=my_weapon"));

    assert.equal(res.blueprint.stats.MaxDamage, 1.1);
    assert.equal(res.validation.ready, true);
    assert.equal(res.validation.b42Errors.length, 0);
  });

  test("vanilla stats derive from real game data once the DB is parsed", async () => {
    seedWeapon(db, "Bat", {
      MaxDamage: 1.0,
      MinDamage: 0.7,
      ConditionMax: 15,
      Weight: 2.0,
      CriticalChance: 40,
    });
    seedWeapon(db, "Katana", {
      MaxDamage: 1.6,
      MinDamage: 1.2,
      ConditionMax: 20,
      Weight: 1.5,
      CriticalChance: 45,
    });
    seedWeapon(db, "Hammer", {
      MaxDamage: 0.7,
      MinDamage: 0.4,
      ConditionMax: 10,
      Weight: 1.2,
      CriticalChance: 30,
    });

    const vanilla = await manager.vanillaFor("melee_weapon", ctx);
    assert.ok(vanilla, "vanilla baseline found after seeding");
    assert.equal(vanilla.sampleCount, 3);
    assert.equal(vanilla.ranges.MaxDamage.median, 1.0);
    assert.equal(vanilla.ranges.MaxDamage.count, 3);
    assert.ok(vanilla.ranges.MaxDamage.p25 <= vanilla.ranges.MaxDamage.median);
    assert.ok(vanilla.ranges.MaxDamage.median <= vanilla.ranges.MaxDamage.p75);

    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: "BalancedBat",
      modId: "balanced_bat",
      itemName: "BalancedBatItem",
    });
    assert.equal(res.blueprint.statsSource.kind, "vanilla");
    assert.equal(res.blueprint.statsSource.sampleCount, 3);
    assert.equal(res.blueprint.stats.MaxDamage, 1.0); // median of the seeded data
    assert.equal(res.blueprint.stats.ConditionMax, 15);
    assert.equal(res.validation.dataChecked, true);
  });

  test("pinned stats always win and are not clamped", async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: "Pinned",
      modId: "pinned_mod",
      itemName: "PinnedItem",
      stats: { MaxDamage: 3.3 },
    });
    assert.equal(res.blueprint.stats.MaxDamage, 3.3);
    assert.ok(res.script.includes("MaxDamage = 3.3"));
    assert.equal(res.validation.ready, true);
  });

  test("autoStats:false keeps unpinned stats at defaults (no vanilla derivation)", async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: "ManualOnly",
      modId: "manual_only",
      itemName: "ManualItem",
      autoStats: false,
    });
    assert.equal(res.blueprint.statsSource.kind, "defaults");
    assert.equal(res.blueprint.statsSource.label, "manual / defaults");
    assert.equal(res.blueprint.stats.MaxDamage, 1.1); // template default, not the median
  });

  test("randomize rolls auto stats inside the vanilla range", async () => {
    const rolls = [];
    for (let i = 0; i < 6; i++) {
      const res = await manager.generate(ctx, {
        ...baseArgs(),
        name: `Roll${i}`,
        modId: `roll_${i}`,
        itemName: `Roll${i}Item`,
        randomize: true,
      });
      assert.equal(res.blueprint.statsSource.kind, "vanilla");
      const r = res.blueprint.statsSource.ranges.MaxDamage;
      const val = res.blueprint.stats.MaxDamage;
      assert.ok(
        val >= r.p25 - 1e-9 && val <= r.p75 + 1e-9,
        `rolled ${val} inside IQR [${r.p25}, ${r.p75}]`,
      );
      rolls.push(val);
    }
    // Rolls are step-rounded, so a roll can legitimately land on the median
    // (with the seeded [0.7, 1.0, 1.6] data the IQR is [0.7, 1.0] and a 0.1
    // step puts ~1/6 of rolls on 1.0) — a two-roll pair would flake. Six
    // independent rolls make "all identical" astronomically unlikely
    // (~1/46k) while still proving randomize actually varies.
    assert.ok(new Set(rolls).size > 1, `rolls varied: ${rolls.join(", ")}`);
  });

  test("dryRun previews the exact file plan without writing anything", async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: "Ghost",
      modId: "ghost",
      itemName: "GhostItem",
      dryRun: true,
    });
    assert.equal(res.dryRun, true);
    // Exact plan: scaffold + script + translation + README + blueprint.
    for (const f of [
      "mod.info",
      "workshop.txt",
      "poster.png",
      "common/media/.gitkeep",
      "42/media/scripts/ghost_items.txt",
      "42/media/scripts/.gitkeep",
      "42/media/lua/shared/Translate/EN/ItemName.json",
      "README.md",
      "modgen.blueprint.json",
    ]) {
      assert.ok(res.files.includes(f), `plan includes ${f}`);
    }
    assert.ok(!fs.existsSync(path.join(root, "workspace", "Ghost")));
  });

  test("custom icon ships a generated placeholder texture", async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: "CustomIcon",
      modId: "custom_icon",
      itemName: "CustomIconItem",
      icon: "MyGlowSword",
    });
    const tex = path.join(
      root,
      "workspace",
      "CustomIcon",
      "42",
      "media",
      "textures",
      "MyGlowSword.png",
    );
    assert.ok(fs.existsSync(tex), "custom icon texture generated");
    assert.ok(isPng(fs.readFileSync(tex)));
    assert.ok(res.script.includes("Icon = MyGlowSword"));
  });

  test("loadBlueprint round-trips the saved blueprint", async () => {
    await manager.generate(ctx, {
      ...baseArgs(),
      name: "RoundTrip",
      modId: "roundtrip",
      itemName: "RTItem",
    });
    const bp = await manager.loadBlueprint(ctx, "RoundTrip");
    assert.equal(bp.kind, "pz-modgen");
    assert.equal(bp.mod.id, "roundtrip");
    assert.equal(bp.mod.itemName, "RTItem");
    assert.ok(bp.stats.MaxDamage >= 0);
  });

  test("list finds generated projects and skips non-generator projects", async () => {
    await ws.createProject("Plain", {
      modId: "plain",
      modName: "Plain",
      template: "minimal",
    });
    const entries = await manager.list(ctx);
    const names = entries.map((e) => e.project);
    assert.ok(names.includes("RoundTrip"));
    assert.ok(names.includes("MyWeapon"));
    assert.ok(!names.includes("Plain"));
    const rt = entries.find((e) => e.project === "RoundTrip");
    assert.equal(rt.templateLabel, "Melee Weapon");
  });

  test("regenerate patches stats and rewrites the script + blueprint", async () => {
    const res = await manager.regenerate(ctx, {
      project: "RoundTrip",
      stats: { MaxDamage: 2.5 },
      modName: "Renamed Weapon",
    });
    assert.equal(res.blueprint.stats.MaxDamage, 2.5);
    assert.equal(res.blueprint.mod.modName, "Renamed Weapon");
    assert.ok(res.script.includes("MaxDamage = 2.5"));
    const projectRoot = path.join(root, "workspace", "RoundTrip");
    assert.ok(
      fs
        .readFileSync(
          path.join(
            projectRoot,
            "42",
            "media",
            "scripts",
            "roundtrip_items.txt",
          ),
          "utf8",
        )
        .includes("MaxDamage = 2.5"),
    );
    assert.ok(
      fs
        .readFileSync(path.join(projectRoot, "mod.info"), "utf8")
        .includes("name=Renamed Weapon"),
    );
    assert.equal(res.validation.ready, true);
    const bp = await manager.loadBlueprint(ctx, "RoundTrip");
    assert.equal(bp.stats.MaxDamage, 2.5);
    assert.equal(bp.mod.modName, "Renamed Weapon");
  });

  test("regenerate randomize re-rolls only the requested stat", async () => {
    const before = await manager.loadBlueprint(ctx, "RoundTrip");
    const res = await manager.regenerate(ctx, {
      project: "RoundTrip",
      randomize: ["MaxDamage"],
    });
    assert.notEqual(
      res.blueprint.stats.MaxDamage,
      before.stats.MaxDamage,
      "MaxDamage re-rolled",
    );
    assert.equal(
      res.blueprint.stats.ConditionMax,
      before.stats.ConditionMax,
      "other stats untouched",
    );
  });

  test("regenerate with stats null resets a key back to auto", async () => {
    const res = await manager.regenerate(ctx, {
      project: "RoundTrip",
      stats: { MaxDamage: null },
    });
    assert.equal(res.blueprint.stats.MaxDamage, 1.0); // vanilla median for the seeded data
  });

  test("regenerate recomputes statsSource when the vanilla DB appears", async () => {
    // MyWeapon was generated on an EMPTY db → defaults.
    const before = await manager.loadBlueprint(ctx, "MyWeapon");
    assert.equal(before.statsSource.kind, "defaults");
    // Seed happened in the vanilla test → regenerate must re-derive the source.
    const res = await manager.regenerate(ctx, { project: "MyWeapon" });
    assert.equal(res.blueprint.statsSource.kind, "vanilla");
    assert.equal(res.blueprint.statsSource.sampleCount, 3);
  });

  test("loadBlueprint rejects projects without a generator blueprint", async () => {
    await assert.rejects(
      manager.loadBlueprint(ctx, "Plain"),
      /modgen\.blueprint\.json/,
    );
  });

  test("generated food script passes strict validation", async () => {
    const res = await manager.generate(ctx, {
      template: "food",
      name: "Snack",
      modId: "snack_mod",
      modName: "Snack",
      itemName: "SnackItem",
    });
    const v = await ctx.validator.validateScript(res.script, "item", true);
    assert.equal(v.isValid, true, JSON.stringify(v.errors));
    assert.equal(res.validation.ready, true);
    assert.ok(res.script.includes("ItemType = base:food"));
  });

  test("generated mod surfaces structured script diagnostics and its file path", async () => {
    const res = await manager.generate(ctx, {
      template: "melee_weapon",
      name: "DiagMod",
      modId: "diag_mod",
      modName: "Diag Mod",
      itemName: "DiagItem",
    });
    const val = res.validation;
    assert.ok(val, "validation present");
    assert.equal(val.ready, true, JSON.stringify(val.scriptDiagnostics));
    // Every script finding carries the structured diagnostic contract.
    assert.ok(Array.isArray(val.scriptDiagnostics));
    for (const d of val.scriptDiagnostics) {
      assert.ok(
        typeof d.code === "string" && d.code.length > 0,
        JSON.stringify(d),
      );
      assert.ok(
        ["error", "warning", "info"].includes(d.severity),
        JSON.stringify(d),
      );
      assert.equal(typeof d.line, "number");
      assert.ok(typeof d.message === "string" && d.message.length > 0);
    }
    // The generated script lives at a known path inside the project.
    assert.equal(val.scriptFile, "42/media/scripts/diag_mod_items.txt");
    // scriptWarnings (legacy summary) is still populated.
    assert.ok(Array.isArray(val.scriptWarnings));
  });

  test("clothing generation is Build 42-shaped (registry values, no legacy props)", async () => {
    const res = await manager.generate(ctx, {
      template: "clothing",
      name: "MyShirt",
      modId: "my_shirt",
      modName: "My Shirt",
      itemName: "MyShirtItem",
    });
    assert.equal(
      res.validation.ready,
      true,
      JSON.stringify(res.validation.b42Errors),
    );
    assert.ok(res.script.includes("ItemType = base:clothing"));
    assert.ok(res.script.includes("BodyLocation = base:tshirt"));
    assert.ok(res.script.includes("ClothingItem = Tshirt_DefaultTEXTURE"));
    assert.ok(res.script.includes("BloodLocation = Shirt"));
    assert.ok(
      !res.script.includes("CanBeEquipped"),
      "no B41 CanBeEquipped leakage",
    );
  });

  test("Build 42 validation blocks invalid generations before writing", async () => {
    await assert.rejects(
      manager.generate(ctx, {
        ...baseArgs(),
        name: "Broken",
        modId: "broken",
        itemName: "BrokenItem",
        stats: { MinDamage: 5, MaxDamage: 1 },
      }),
      /Build 42 validation failed/,
    );
    assert.ok(
      !fs.existsSync(path.join(root, "workspace", "Broken")),
      "nothing written on failed validation",
    );
  });

  test("modgen_blueprint tool surfaces a clean error for non-generator projects", async () => {
    const tool = modgenTools.find((t) => t.name === "modgen_blueprint");
    await assert.rejects(
      tool.handler({ project: "Plain" }, ctx),
      (e) => e && e.code !== undefined, // McpError with InvalidRequest
    );
  });
});
