/**
 * Unit tests for ProjectZomboidParser: indented blocks, semicolon-delimited
 * list splitting, and rich metadata extraction into top-level columns.
 */
import { describe, test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../../dist/parsers/ProjectZomboidParser.js';

describe('ProjectZomboidParser', () => {
  let tmpDir;
  let db;
  let parser;

  beforeEach(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-parser-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
  });

  afterEach(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('B42 indented item block inside module', () => {
    test('item block indented 4 spaces inside module parses with properties', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'normal.txt'),
        [
          'module Base',
          '{',
          '    item Hat_SantaHatDebug',
          '    {',
          '        DisplayCategory = Accessory,',
          '        ItemType = base:normal,',
          '        Weight = 0.5,',
          '        Tags = base:isfirefuel;base:isfiretinder,',
          '    }',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 1);

      const item = await db.getItemById('Hat_SantaHatDebug');
      assert.notEqual(item, null);
      assert.equal(item.displayName, 'Hat_SantaHatDebug');
      assert.equal(item.properties.DisplayCategory, 'Accessory');
      assert.equal(item.properties.ItemType, 'base:normal');
      assert.equal(item.properties.Weight, 0.5);
      assert.deepEqual(item.tags, ['base:isfirefuel', 'base:isfiretinder']);
    });

    test('multiple indented item blocks in same module all parsed', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'food.txt'),
        [
          'module Base',
          '{',
          '    item Apple',
          '    {',
          '        DisplayName = Apple,',
          '        Weight = 0.1,',
          '    }',
          '    item Banana',
          '    {',
          '        DisplayName = Banana,',
          '        Weight = 0.2,',
          '    }',
          '    item Cherry',
          '    {',
          '        DisplayName = Cherry,',
          '        Weight = 0.05,',
          '    }',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 3);
      assert.notEqual(await db.getItemById('Apple'), null);
      assert.notEqual(await db.getItemById('Banana'), null);
      assert.notEqual(await db.getItemById('Cherry'), null);
    });
  });

  describe('craftRecipe ingredient lines do NOT create items', () => {
    test('variable[...] ingredient lines inside craftRecipe are not inserted as items', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'entity_test.txt'),
        [
          'craftrecipe RecipeName',
          '{',
          '    item variable[1:20] [Base.Corn] flags[ItemCount] mode:destroy,',
          '    item variable[1:3] [Base.Seeds] flags[ItemCount] mode:destroy,',
          '    Result = Base.DriedCorn,',
          '    Time = 100.0,',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 0);

      const fake1 = await db.getItemById('variable');
      const fake2 = await db.getItemById('Base.Corn');
      assert.equal(fake1, null);
      assert.equal(fake2, null);
    });

    test('bare numeric lines do not become items', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'entity_num.txt'),
        [
          'craftrecipe RecipeName2',
          '{',
          '    item variable[1:20] [Base.Corn] flags[ItemCount] mode:destroy,',
          '    400',
          '    8',
          '    20',
          '    Result = Base.DriedCorn,',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 0);

      const fake = await db.getItemById('400');
      assert.equal(fake, null);
    });

    test('entity container block lines are not inserted as items', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'entity_dry.txt'),
        [
          'entity Drying_Rack',
          '{',
          '    DisplayName = Drying Rack,',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 0);
      assert.equal(results.vehicleCount, 0);
    });
  });

  describe('parseValue: semicolon-delimited lists', () => {
    test('Tags with semicolons are split into an array', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_items.txt'),
        [
          'module Base {',
          'item TestHammer',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Hammer,',
          '\tTags = "Hammer;Metal",',
          '\tWeight = 1.8,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 1);

      const item = await db.getItemById('TestHammer');
      assert.notEqual(item, null);
      assert.deepEqual(item.properties.Tags, ['Hammer', 'Metal']);
      assert.deepEqual(item.tags, ['Hammer', 'Metal']);
    });

    test('single string value without semicolon stays a string', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_single.txt'),
        [
          'module Base {',
          'item TestSword',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Sword,',
          '\tTags = "Sharp",',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 1);

      const item = await db.getItemById('TestSword');
      assert.equal(item.properties.Tags, 'Sharp');
      assert.deepEqual(item.tags, ['Sharp']);
    });
  });

  describe('rich metadata extraction', () => {
    test('extracts tags, metal_value, weight, condition_max, attachment_type from properties', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_rich.txt'),
        [
          'module Base {',
          'item TestSling',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Sling,',
          '\tTags = "Hammer;Metal",',
          '\tMetalValue = 20,',
          '\tWeight = 1.8,',
          '\tConditionMax = 100,',
          '\tAttachmentType = "Sling",',
          '\tRunSpeedModifier = 0.5,',
          '\tHungerChange = 5,',
          '\tThirstChange = 3,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 1);

      const item = await db.getItemById('TestSling');
      assert.notEqual(item, null);
      assert.deepEqual(item.properties.Tags, ['Hammer', 'Metal']);
      assert.deepEqual(item.tags, ['Hammer', 'Metal']);
      assert.equal(item.properties.MetalValue, 20);
      assert.equal(item.metal_value, 20);
      assert.equal(item.properties.Weight, 1.8);
      assert.equal(item.weight, 1.8);
      assert.equal(item.properties.ConditionMax, 100);
      assert.equal(item.condition_max, 100);
      assert.equal(item.properties.AttachmentType, 'Sling');
      assert.equal(item.attachment_type, 'Sling');
      assert.equal(item.properties.RunSpeedModifier, 0.5);
      assert.equal(item.run_speed_modifier, 0.5);
      assert.equal(item.properties.HungerChange, 5);
      assert.equal(item.hunger_change, 5);
      assert.equal(item.properties.ThirstChange, 3);
      assert.equal(item.thirst_change, 3);
    });

    test('missing rich fields are undefined', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_minimal.txt'),
        [
          'module Base {',
          'item TestBasic',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Basic,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      assert.equal(results.itemCount, 1);

      const item = await db.getItemById('TestBasic');
      assert.notEqual(item, null);
      assert.equal(item.tags, undefined);
      assert.equal(item.metal_value, undefined);
      assert.equal(item.weight, undefined);
      assert.equal(item.condition_max, undefined);
      assert.equal(item.attachment_type, undefined);
      assert.equal(item.run_speed_modifier, undefined);
      assert.equal(item.hunger_change, undefined);
      assert.equal(item.thirst_change, undefined);
    });
  });
});

// ===========================================================================
// M1 (F6/F9): B42 craftRecipe parsing — isolated DatabaseManager stub so the
// refs context bucket (ingredient vs output) is captured directly.
// ===========================================================================

describe('M1 F6/F9: B42 craftRecipe parsing', () => {
  let tmpDir;
  let inserted;
  let refs;
  let dbStub;
  let parser;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-mcp-m1-'));
    inserted = [];
    refs = [];
    dbStub = {
      insertItems: async (items) => {
        inserted.push(...items);
      },
      addReference: async (id, ref, type, context) => {
        refs.push({ id, ref, type, context });
      },
      transaction: async (fn) => {
        await fn();
      },
      getStats: async () => ({ total: 0 }),
      clearDatabase: async () => {},
    };
    parser = new ProjectZomboidParser(dbStub);
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  const writeScript = (relPath, content) => {
    const fullPath = path.join(tmpDir, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf-8');
  };

  const b42Script = [
    'module TestMod',
    '{',
    '    craftRecipe Make TestPlank',
    '    {',
    '        category = Carpenters,',
    '        timedAction = SawLog,',
    '        inputs',
    '        {',
    '            item 1 Base.HandSaw,',
    '            item 2 [Base.Log;Base.WoodenStick],',
    '        }',
    '        outputs',
    '        {',
    '            item 2 Base.TestPlank,',
    '        }',
    '    }',
    '}',
  ].join('\n');

  test('craftRecipe: "=" properties parsed, inputs stay ingredients, outputs land in outputs', async () => {
    writeScript('media/scripts/crafting.txt', b42Script);
    const results = await parser.parseModDirectory(tmpDir);
    assert.deepEqual(results.errors, []);
    assert.equal(results.recipeCount, 1);

    const recipe = inserted.find((i) => i.type === 'recipe');
    assert.notEqual(recipe, undefined);
    // F6: B42 "key = value" properties
    assert.equal(recipe.properties.category, 'Carpenters');
    assert.equal(recipe.properties.timedAction, 'SawLog');
    // F9: bracket-alternative inputs remain excluded, plain inputs captured
    assert.deepEqual(recipe.properties.ingredients, [{ item: 'Base.HandSaw', count: 1 }]);
    // F9: outputs must land in outputs, not leak into ingredients
    assert.deepEqual(recipe.properties.outputs, [{ item: 'Base.TestPlank', count: 2 }]);
    assert.equal(recipe.properties.ingredients.some((i) => i.item === 'Base.TestPlank'), false);
  });

  test('craftRecipe outputs are extracted as "output" references', async () => {
    writeScript('media/scripts/crafting.txt', b42Script);
    await parser.parseModDirectory(tmpDir);
    assert.equal(
      refs.some((r) => r.ref === 'Base.TestPlank' && r.type === 'item' && r.context === 'output'),
      true
    );
    assert.equal(
      refs.some((r) => r.ref === 'Base.HandSaw' && r.type === 'item' && r.context === 'ingredient'),
      true
    );
  });

  test('legacy B41 recipe blocks keep parsing (colon properties, =count ingredients)', async () => {
    writeScript(
      'media/scripts/recipes.txt',
      [
        'module TestMod',
        '{',
        '    recipe Make LegacyPlank',
        '    {',
        '        Base.Log=4,',
        '        keep [Base.Saw],',
        '        Result:Base.LegacyPlank=2,',
        '        Time:150.0,',
        '        Category:Carpentry,',
        '    }',
        '}',
      ].join('\n')
    );
    const results = await parser.parseModDirectory(tmpDir);
    assert.deepEqual(results.errors, []);
    assert.equal(results.recipeCount, 1);

    const recipe = inserted.find((i) => i.type === 'recipe');
    assert.equal(recipe.properties.Result, 'Base.LegacyPlank=2');
    assert.equal(recipe.properties.Time, 150);
    assert.deepEqual(recipe.properties.ingredients, [{ item: 'Base.Log', count: 4 }]);
    assert.equal(recipe.properties.outputs, undefined);
  });

  test('scanner: a "module = Foo," property line is not swallowed as a module declaration', async () => {
    // Regression: the scanner's module branch previously matched any line
    // starting with "module " (freebuff M1 review follow-up) — a property
    // named `module` outside any module would be skipped entirely.
    writeScript(
      'media/scripts/module_prop.txt',
      [
        'item Standalone',
        '{',
        '    module = Base.Something,',
        '    Weight = 2.0,',
        '}',
      ].join('\n')
    );
    const results = await parser.parseModDirectory(tmpDir);
    assert.deepEqual(results.errors, []);
    const item = inserted.find((i) => i.type === 'item');
    assert.notEqual(item, undefined);
    assert.equal(item.properties.module, 'Base.Something');
    assert.equal(item.properties.Weight, 2);
  });
});
