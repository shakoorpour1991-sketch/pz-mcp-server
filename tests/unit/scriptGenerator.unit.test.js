/**
 * Unit tests for ScriptGenerator: template selection for every supported
 * type, balance scaling, and module wrapping.
 * Runs against the compiled dist/ build.
 *
 * Covers the freebuff fix: 'fixing' and 'sound' previously had no template
 * and generateScript threw "No template found" for them.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ScriptGenerator } from '../../dist/generators/ScriptGenerator.js';

describe('ScriptGenerator', () => {
  let tmpDir;
  let db;
  let generator;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-gen-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    generator = new ScriptGenerator(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('generates an item script wrapped in a module', async () => {
    const script = await generator.generateScript(
      'item',
      'TestAxe',
      { Type: 'Weapon', DisplayName: 'Test Axe', MaxDamage: 2.5 },
      'MyMod',
    );
    assert.ok(script.includes('module MyMod'));
    assert.ok(script.includes('item TestAxe'));
    assert.ok(script.includes('DisplayName = Test Axe,'));
    assert.ok(script.includes('MaxDamage = 2.5,'));
  });

  test('balance=powerful scales weapon stats (MaxDamage 1.0 -> 1.5)', async () => {
    // category: 'Weapon' picks the melee_weapon template (base MaxDamage 1.0)
    const script = await generator.generateScript(
      'item',
      'BalancedKnife',
      { Type: 'Weapon', DisplayName: 'Balanced Knife', category: 'Weapon' },
      'Base',
      { balance: 'powerful' },
    );
    assert.ok(script.includes('MaxDamage = 1.5'));
    // category is a template-selection hint, not a PZ property — must not leak
    assert.ok(!script.includes('category = Weapon'));
  });

  test('uncategorized item uses the tool template, not food (template-pick fix)', async () => {
    const script = await generator.generateScript('item', 'PlainTool', {
      Type: 'Normal',
      DisplayName: 'Plain Tool',
    });
    assert.ok(script.includes('item PlainTool'));
    assert.ok(script.includes('Categories = Tool,')); // tool_item template
    assert.ok(!script.includes('HungerChange')); // would come from food template
  });

  test('category "Ranged Weapon" picks the ranged_weapon template', async () => {
    const script = await generator.generateScript(
      'item',
      'RifleX',
      {
        Type: 'Weapon',
        DisplayName: 'Rifle',
        category: 'Ranged Weapon',
        AmmoType: '9mm',
      },
      'Base'
    );
    assert.ok(script.includes('MaxRange = 20'));
    assert.ok(script.includes('Categories = Firearm'));
    assert.ok(!script.includes('MaxDamage'));
  });

  test('category "item" does not hijack into the food template', async () => {
    const script = await generator.generateScript(
      'item',
      'OddThing',
      { category: 'item', DisplayName: 'Odd' },
      'Base'
    );
    assert.ok(!script.includes('HungerChange'));
    assert.ok(script.includes('Categories = Tool'));
  });

  test('generates a recipe with ingredients and result', async () => {
    const script = await generator.generateScript('recipe', 'Make Plank', {
      ingredients: [{ item: 'Base.Log', count: 4 }],
      result: 'Base.Plank',
    });
    assert.ok(script.includes('recipe Make Plank'));
    assert.ok(script.includes('Base.Log=4,'));
    assert.ok(script.includes('Result:Base.Plank=1,'));
  });

  test('generates an evolved recipe', async () => {
    const script = await generator.generateScript('evolvedrecipe', 'TestSoup', {
      baseItem: 'Base.TinPot',
      ingredients: ['Base.Water', 'Base.Cabbage'],
    });
    assert.ok(script.includes('evolvedrecipe TestSoup'));
    assert.ok(script.includes('BaseItem: Base.TinPot'));
    assert.ok(script.includes('Ingredients: Base.Water, Base.Cabbage'));
  });

  test('generates a vehicle script', async () => {
    const script = await generator.generateScript('vehicle', 'TestCar', {
      Mass: 1200,
    });
    assert.ok(script.includes('vehicle TestCar'));
    assert.ok(script.includes('Mass = 1200'));
  });

  test('generates a fixing script (was: no template, threw)', async () => {
    const script = await generator.generateScript('fixing', 'Fix Axe', {
      require: 'Base.Axe',
      fixers: [{ material: 'Base.Screws', quantity: 2, skill: 'Maintenance', skillLevel: 2 }],
    });
    assert.ok(script.includes('fixing Fix Axe'));
    assert.ok(script.includes('Require : Base.Axe,'));
    assert.ok(script.includes('Fixer : Base.Screws=2; Maintenance=2,'));
  });

  test('generates a sound script (was: no template, threw)', async () => {
    const script = await generator.generateScript('sound', 'TestAmbience', {
      category: 'Ambient',
      file: 'ambience.ogg',
      distanceMax: 50,
    });
    assert.ok(script.includes('sound TestAmbience'));
    assert.ok(script.includes('category = Ambient,'));
    assert.ok(script.includes('file = ambience.ogg,'));
    assert.ok(script.includes('distanceMax = 50,'));
  });

  test('includeComments emits the generated-by header with the correct repo URL', async () => {
    const script = await generator.generateScript(
      'item',
      'CommentedItem',
      { Type: 'Normal', DisplayName: 'Commented Item' },
      'Base',
      { includeComments: true },
    );
    assert.ok(script.includes('Generated by Project Zomboid MCP Server'));
    assert.ok(script.includes('https://github.com/shakoorpour1991-sketch/pz-mcp-server'));
  });
});
