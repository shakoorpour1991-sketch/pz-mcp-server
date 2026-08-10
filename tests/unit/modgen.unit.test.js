/**
 * Mod Generator (modgen_*) unit tests — the full beginner workflow:
 * templates → generate (auto stats from vanilla data or defaults) → load /
 * list → regenerate (stat patch, randomize, metadata) → validation.
 * Runs against the compiled dist/ build with a real temp DB + workspace.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../../dist/parsers/ProjectZomboidParser.js';
import { ModAnalyzer } from '../../dist/analyzers/ModAnalyzer.js';
import { ScriptGenerator } from '../../dist/generators/ScriptGenerator.js';
import { ValidationEngine } from '../../dist/validation/ValidationEngine.js';
import { WorkspaceManager } from '../../dist/workspace/WorkspaceManager.js';
import { ModGenManager } from '../../dist/modgen/ModGenManager.js';
import { modgenTools } from '../../dist/tools/modgen.js';

function seedWeapon(db, name, props) {
  db.insertItem({
    id: 'Base.' + name,
    name,
    type: 'item',
    module: 'Base',
    category: 'Weapon',
    properties: { Type: 'Weapon', DisplayCategory: 'Weapon', DamageCategory: 'Slash', ...props },
    rawContent: '',
    filePath: 'seed',
  });
}

describe('Mod Generator', () => {
  let root;
  let db;
  let ws;
  let manager;
  let ctx;

  before(async () => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-modgen-'));
    db = new DatabaseManager(path.join(root, 'test.db'));
    await db.initialize();
    ws = new WorkspaceManager([path.join(root, 'workspace')]);
    await ws.ensureRoots();
    const parser = new ProjectZomboidParser(db);
    const generator = new ScriptGenerator(db);
    const validator = new ValidationEngine(db);
    const analyzer = new ModAnalyzer(db, parser);
    manager = new ModGenManager(db, generator, validator, ws);
    ctx = {
      dbManager: db,
      parser,
      analyzer,
      generator,
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
    template: 'melee_weapon',
    name: 'MyWeapon',
    modId: 'my_weapon',
    modName: 'My Weapon',
    itemName: 'MyWeaponItem',
  });

  test('modgen_templates lists five templates with editable fields', () => {
    const list = manager.listTemplates();
    assert.equal(list.length, 5);
    const ids = list.map((t) => t.id).sort();
    assert.deepEqual(ids, ['clothing', 'food', 'melee_weapon', 'simple_item', 'tool']);
    const weapon = list.find((t) => t.id === 'melee_weapon');
    assert.ok(weapon.fields.length >= 10);
    assert.ok(weapon.fields.some((f) => f.key === 'MaxDamage' && f.auto));
    assert.ok(weapon.fields.every((f) => f.hint && f.label));
  });

  test('vanillaFor returns null when the DB has no data', async () => {
    const vanilla = await manager.vanillaFor('melee_weapon');
    assert.equal(vanilla, null);
  });

  test('generate on an empty DB uses defaults, creates a full folder, and validates', async () => {
    const res = await manager.generate(ctx, baseArgs());
    assert.equal(res.dryRun, false);
    assert.equal(res.blueprint.statsSource.kind, 'defaults');
    assert.equal(res.project, 'MyWeapon');

    const projectRoot = path.join(root, 'workspace', 'MyWeapon');
    assert.ok(fs.existsSync(path.join(projectRoot, 'mod.info')));
    assert.ok(fs.existsSync(path.join(projectRoot, 'workshop.txt')));
    assert.ok(fs.existsSync(path.join(projectRoot, 'poster.png')));
    assert.ok(fs.existsSync(path.join(projectRoot, 'README.md')));
    assert.ok(fs.existsSync(path.join(projectRoot, 'modgen.blueprint.json')));
    const scriptPath = path.join(projectRoot, '42', 'media', 'scripts', 'my_weapon_items.txt');
    assert.ok(fs.existsSync(scriptPath), 'item script written');

    const script = fs.readFileSync(scriptPath, 'utf8');
    assert.ok(script.includes('module Base'));
    assert.ok(script.includes('item MyWeaponItem'));
    assert.ok(script.includes('MaxDamage'));
    assert.ok(script.includes('DisplayName = MyWeaponItem'));

    const info = fs.readFileSync(path.join(projectRoot, 'mod.info'), 'utf8');
    assert.ok(info.includes('name=My Weapon'));
    assert.ok(info.includes('id=my_weapon'));

    // defaults flow in from the template
    assert.equal(res.blueprint.stats.MaxDamage, 1.1);

    // validation: script + folder both pass → ready
    assert.equal(res.validation.ready, true);
    assert.equal(res.validation.scriptValid, true);
    assert.equal(res.validation.projectValid, true);
  });

  test('vanilla stats derive from real game data once the DB is parsed', async () => {
    seedWeapon(db, 'Bat', { MaxDamage: 1.0, MinDamage: 0.7, ConditionMax: 15, Weight: 2.0, CriticalChance: 40 });
    seedWeapon(db, 'Katana', { MaxDamage: 1.6, MinDamage: 1.2, ConditionMax: 20, Weight: 1.5, CriticalChance: 45 });
    seedWeapon(db, 'Hammer', { MaxDamage: 0.7, MinDamage: 0.4, ConditionMax: 10, Weight: 1.2, CriticalChance: 30 });

    const vanilla = await manager.vanillaFor('melee_weapon');
    assert.ok(vanilla, 'vanilla baseline found after seeding');
    assert.equal(vanilla.sampleCount, 3);
    assert.equal(vanilla.ranges.MaxDamage.median, 1.0);
    assert.ok(vanilla.ranges.MaxDamage.count === 3);
    assert.ok(vanilla.ranges.MaxDamage.p25 <= vanilla.ranges.MaxDamage.median);
    assert.ok(vanilla.ranges.MaxDamage.median <= vanilla.ranges.MaxDamage.p75);

    const res = await manager.generate(ctx, { ...baseArgs(), name: 'BalancedBat', modId: 'balanced_bat', itemName: 'BalancedBatItem' });
    assert.equal(res.blueprint.statsSource.kind, 'vanilla');
    assert.equal(res.blueprint.statsSource.sampleCount, 3);
    assert.equal(res.blueprint.stats.MaxDamage, 1.0); // median of the seeded data
    assert.equal(res.blueprint.stats.ConditionMax, 15);
  });

  test('pinned stats always win and are not clamped', async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: 'Pinned',
      modId: 'pinned_mod',
      itemName: 'PinnedItem',
      stats: { MaxDamage: 3.3 },
    });
    assert.equal(res.blueprint.stats.MaxDamage, 3.3);
    const script = res.script;
    assert.ok(script.includes('MaxDamage = 3.3'));
  });

  test('autoStats:false keeps unpinned stats at defaults (no vanilla derivation)', async () => {
    const res = await manager.generate(ctx, {
      ...baseArgs(),
      name: 'ManualOnly',
      modId: 'manual_only',
      itemName: 'ManualItem',
      autoStats: false,
    });
    assert.equal(res.blueprint.statsSource.kind, 'defaults');
    assert.equal(res.blueprint.statsSource.label, 'manual / defaults');
    // template default (1.1), NOT the vanilla median (1.0) — no derivation
    assert.equal(res.blueprint.stats.MaxDamage, 1.1);
  });

  test('randomize rolls auto stats inside the vanilla range', async () => {
    const res1 = await manager.generate(ctx, { ...baseArgs(), name: 'RollA', modId: 'roll_a', itemName: 'RollAItem', randomize: true });
    const res2 = await manager.generate(ctx, { ...baseArgs(), name: 'RollB', modId: 'roll_b', itemName: 'RollBItem', randomize: true });
    assert.equal(res1.blueprint.statsSource.kind, 'vanilla');
    const r = res1.blueprint.statsSource.ranges.MaxDamage;
    const val = res1.blueprint.stats.MaxDamage;
    assert.ok(val >= r.p25 - 1e-9 && val <= r.p75 + 1e-9, `rolled ${val} inside IQR [${r.p25}, ${r.p75}]`);
    // statistically distinct draws (not both exactly median) — allow equal-by-luck
    assert.ok(res1.blueprint.stats.MaxDamage !== 1.0 || res2.blueprint.stats.MaxDamage !== 1.0);
  });

  test('dryRun previews without creating anything on disk', async () => {
    const res = await manager.generate(ctx, { ...baseArgs(), name: 'Ghost', modId: 'ghost', itemName: 'GhostItem', dryRun: true });
    assert.equal(res.dryRun, true);
    assert.ok(res.blueprint.stats.MaxDamage > 0);
    assert.ok(!fs.existsSync(path.join(root, 'workspace', 'Ghost')));
  });

  test('loadBlueprint round-trips the saved blueprint', async () => {
    await manager.generate(ctx, { ...baseArgs(), name: 'RoundTrip', modId: 'roundtrip', itemName: 'RTItem' });
    const bp = await manager.loadBlueprint(ctx, 'RoundTrip');
    assert.equal(bp.kind, 'pz-modgen');
    assert.equal(bp.mod.id, 'roundtrip');
    assert.equal(bp.mod.itemName, 'RTItem');
    assert.ok(bp.stats.MaxDamage >= 0);
  });

  test('list finds generated projects and skips non-generator projects', async () => {
    // a plain workspace project without a blueprint
    await ws.createProject('Plain', { modId: 'plain', modName: 'Plain', template: 'minimal' });
    const entries = await manager.list(ctx);
    const names = entries.map((e) => e.project);
    assert.ok(names.includes('RoundTrip'));
    assert.ok(names.includes('MyWeapon'));
    assert.ok(!names.includes('Plain'));
    const rt = entries.find((e) => e.project === 'RoundTrip');
    assert.equal(rt.templateLabel, 'Melee Weapon');
  });

  test('regenerate patches stats and rewrites the script + blueprint', async () => {
    const res = await manager.regenerate(ctx, {
      project: 'RoundTrip',
      stats: { MaxDamage: 2.5 },
      modName: 'Renamed Weapon',
    });
    assert.equal(res.blueprint.stats.MaxDamage, 2.5);
    assert.equal(res.blueprint.mod.modName, 'Renamed Weapon');
    assert.ok(res.script.includes('MaxDamage = 2.5'));
    const projectRoot = path.join(root, 'workspace', 'RoundTrip');
    assert.ok(fs.readFileSync(path.join(projectRoot, '42', 'media', 'scripts', 'roundtrip_items.txt'), 'utf8').includes('MaxDamage = 2.5'));
    assert.ok(fs.readFileSync(path.join(projectRoot, 'mod.info'), 'utf8').includes('name=Renamed Weapon'));
    assert.equal(res.validation.ready, true);
    // blueprint on disk is in sync
    const bp = await manager.loadBlueprint(ctx, 'RoundTrip');
    assert.equal(bp.stats.MaxDamage, 2.5);
    assert.equal(bp.mod.modName, 'Renamed Weapon');
  });

  test('regenerate randomize re-rolls only the requested stat', async () => {
    const before = await manager.loadBlueprint(ctx, 'RoundTrip');
    const res = await manager.regenerate(ctx, { project: 'RoundTrip', randomize: ['MaxDamage'] });
    assert.notEqual(res.blueprint.stats.MaxDamage, before.stats.MaxDamage, 'MaxDamage re-rolled');
    assert.equal(res.blueprint.stats.ConditionMax, before.stats.ConditionMax, 'other stats untouched');
  });

  test('regenerate with stats null resets a key back to auto', async () => {
    const res = await manager.regenerate(ctx, { project: 'RoundTrip', stats: { MaxDamage: null } });
    // back to the vanilla-derived median for the seeded data
    assert.equal(res.blueprint.stats.MaxDamage, 1.0);
  });

  test('loadBlueprint rejects projects without a generator blueprint', async () => {
    await assert.rejects(
      manager.loadBlueprint(ctx, 'Plain'),
      /modgen\.blueprint\.json/,
    );
  });

  test('generated scripts pass strict validation (ranges respected)', async () => {
    const res = await manager.generate(ctx, {
      template: 'food',
      name: 'Snack',
      modId: 'snack_mod',
      modName: 'Snack',
      itemName: 'SnackItem',
    });
    const v = await ctx.validator.validateScript(res.script, 'item', true);
    assert.equal(v.isValid, true, JSON.stringify(v.errors));
    assert.equal(res.validation.ready, true);
  });

  test('modgen_blueprint tool surfaces a clean error for non-generator projects', async () => {
    const tool = modgenTools.find((t) => t.name === 'modgen_blueprint');
    await assert.rejects(
      tool.handler({ project: 'Plain' }, ctx),
      (e) => e && e.code !== undefined, // McpError with InvalidRequest
    );
  });
});
