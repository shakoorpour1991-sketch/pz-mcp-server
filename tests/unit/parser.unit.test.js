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

  // Audit M3: fixing dotted material prefix + evolvedrecipe references
test('fixing block with dotted material keeps prefix', async () => {
    const scriptsDir = path.join(tmpDir, 'media', 'scripts');
    fs.mkdirSync(scriptsDir, { recursive: true });
    fs.writeFileSync(
      path.join(scriptsDir, 'test_fixing.txt'),
      'fixing Base.GlueRepair\n{\n\tRequire : Base.Hammer,\n\tFixer : Base.Glue=1;Metalworking=5,\n}\n'
    );

    await parser.parseGameFiles(tmpDir, true);
    const item = await db.getItemById('Base.GlueRepair');
    assert.ok(item, 'Item should be parsed');
    assert.equal(item.properties.Fixers[0].material, 'Base.Glue');
    assert.equal(item.properties.Fixers[0].quantity, 1);
  });

  test('evolvedrecipe creates item + ingredient references', async () => {
    const scriptsDir = path.join(tmpDir, 'media', 'scripts');
    fs.mkdirSync(scriptsDir, { recursive: true });
    fs.writeFileSync(
      path.join(scriptsDir, 'test_recipe.txt'),
      'evolvedrecipe Soup\n{\n\tBaseItem : Base.Soup,\n\tIngredients : Base.Potato, Base.Cabbage,\n}\n'
    );

    await parser.parseGameFiles(tmpDir, true);
    const item = await db.getItemById('Soup');
    assert.ok(item, 'Soup item should be parsed');

    const refs = await db.getReferencesFrom('Soup');
    assert.ok(
      refs.some(r => r.referenceId === 'Base.Potato' && r.context === 'ingredient'),
      'Should have Base.Potato ingredient reference'
    );
    assert.ok(
      refs.some(r => r.referenceId === 'Base.Soup' && r.context === 'baseItem'),
      'Should have Base.Soup baseItem reference'
    );
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
  let recipes;
  let ingredients;
  let dbStub;
  let parser;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-mcp-m1-'));
    inserted = [];
    refs = [];
    recipes = [];
    ingredients = [];
    dbStub = {
      insertItems: async (items) => {
        inserted.push(...items);
      },
      insertRecipes: async (recipeList) => {
        recipes.push(...recipeList);
      },
      insertRecipeIngredients: async (ingList) => {
        ingredients.push(...ingList);
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

// ===========================================================================
// Deeper indexing: structured recipe records (freebuff deeper indexing)
// ===========================================================================

describe('Structured recipe records (deeper indexing)', () => {
  let tmpDir;
  let inserted;
  let recipes;
  let ingredients;
  let dbStub;
  let parser;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-mcp-recipe-'));
    inserted = [];
    recipes = [];
    ingredients = [];
    dbStub = {
      insertItems: async (items) => {
        inserted.push(...items);
      },
      insertRecipes: async (recipeList) => {
        recipes.push(...recipeList);
      },
      insertRecipeIngredients: async (ingList) => {
        ingredients.push(...ingList);
      },
      addReference: async () => {},
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

  const writeScript = (content) => {
    const fullPath = path.join(tmpDir, 'media', 'scripts', 'test.txt');
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf-8');
  };

  test('B42 craftRecipe: category/time/skill/result + ingredient/tool/output rows', async () => {
    writeScript([
      'module Base',
      '{',
      '    craftRecipe Build_Nail_Box',
      '    {',
      '        category = Carpentry,',
      '        time = 120,',
      '        SkillRequired = Woodwork:4,',
      '        inputs',
      '        {',
      '            item 4 [Base.Plank] flags[Prop2],',
      '            item 6 [Base.Nails],',
      '            item 1 tags[base:saw;base:smallsaw] mode:keep flags[MayDegradeLight],',
      '        }',
      '        outputs',
      '        {',
      '            item 1 Base.NailBox,',
      '        }',
      '    }',
      '}',
    ].join('\n'));

    const results = await parser.parseModDirectory(tmpDir);
    assert.deepEqual(results.errors, []);

    // Recipe mirror row: category, time, skill, result
    const recipe = recipes.find((r) => r.id === 'Build_Nail_Box');
    assert.notEqual(recipe, undefined);
    assert.equal(recipe.category, 'Carpentry');
    assert.equal(recipe.time, 120);
    assert.equal(recipe.skill, 'Woodwork');
    assert.equal(recipe.skillLevel, 4);
    assert.equal(recipe.result, 'Base.NailBox');
    assert.equal(recipe.resultCount, 1);

    // Ingredients: brackets expand each alternative into its own row
    const plank = ingredients.filter(
      (i) => i.recipeId === 'Build_Nail_Box' && i.ref === 'Base.Plank'
    );
    assert.equal(plank.length, 1);
    assert.equal(plank[0].count, 4);
    assert.equal(plank[0].role, 'ingredient');

    const nails = ingredients.find(
      (i) => i.recipeId === 'Build_Nail_Box' && i.ref === 'Base.Nails'
    );
    assert.notEqual(nails, undefined);
    assert.equal(nails.count, 6);
    assert.equal(nails.role, 'ingredient');

    // Tools: mode:keep tag lines become tool rows, one per tag
    const saw = ingredients.find(
      (i) => i.recipeId === 'Build_Nail_Box' && i.ref === 'base:saw'
    );
    assert.notEqual(saw, undefined);
    assert.equal(saw.refType, 'tag');
    assert.equal(saw.role, 'tool');
    const smallSaw = ingredients.find(
      (i) => i.recipeId === 'Build_Nail_Box' && i.ref === 'base:smallsaw'
    );
    assert.notEqual(smallSaw, undefined);
    assert.equal(smallSaw.role, 'tool');

    // Outputs
    const output = ingredients.find(
      (i) => i.recipeId === 'Build_Nail_Box' && i.role === 'output'
    );
    assert.notEqual(output, undefined);
    assert.equal(output.ref, 'Base.NailBox');
  });

  test('legacy B41 recipe: keep tools, =count ingredients, Result property', async () => {
    writeScript([
      'module Base',
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
    ].join('\n'));

    const results = await parser.parseModDirectory(tmpDir);
    assert.deepEqual(results.errors, []);

    const found = recipes.find((r) => r.name === 'Make LegacyPlank');
    assert.notEqual(found, undefined);
    assert.equal(found.result, 'Base.LegacyPlank');
    assert.equal(found.resultCount, 2);
    assert.equal(found.time, 150);
    assert.equal(found.category, 'Carpentry');

    const log = ingredients.find(
      (i) => i.recipeId === found.id && i.ref === 'Base.Log'
    );
    assert.notEqual(log, undefined);
    assert.equal(log.count, 4);
    assert.equal(log.role, 'ingredient');

    const saw = ingredients.find(
      (i) => i.recipeId === found.id && i.ref === 'Base.Saw'
    );
    assert.notEqual(saw, undefined);
    assert.equal(saw.role, 'tool');
  });
});

// Audit D6: parseModDirectory must handle Build 42 versioned folders (42.20/…)
describe('ProjectZomboidParser versioned folders (audit D6)', () => {
  let tmpDir;
  let db;
  let parser;

  beforeEach(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-parse-ver-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
  });

  afterEach(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('parses scripts from a versioned folder (42.20/media/scripts)', async () => {
    const modRoot = path.join(tmpDir, 'TestMod');
    fs.mkdirSync(path.join(modRoot, '42.20', 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, '42.20', 'media', 'scripts', 'ver.txt'),
      'module Base {\n    item VersionedPickaxe {\n        Type = Weapon\n        DisplayName = VPickaxe\n    }\n}'
    );

    const res = await parser.parseModDirectory(modRoot);
    assert.ok(res.itemCount >= 1, 'should have parsed the versioned item');
    const item = await db.getItemById('VersionedPickaxe');
    assert.ok(item, 'versioned item row should exist in the DB');
    assert.equal(
      res.errors.some((e) => e.message.includes('No scripts directory found')),
      false
    );
  });

  test('still parses a common/media/scripts structure', async () => {
    const modRoot = path.join(tmpDir, 'CommonMod');
    fs.mkdirSync(path.join(modRoot, 'common', 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, 'common', 'media', 'scripts', 'c.txt'),
      'module Base {\n    item CommonHoe {\n        { DisplayName = Hoe }\n    }\n}'
    );

    const res = await parser.parseModDirectory(modRoot);
    assert.ok(res.itemCount >= 1, 'should have parsed the common item');
  });
});

// Dynamic layout discovery (mod-analyzer review): Steam Workshop items are
// often PACKS — the real mod lives under mods/<Name>/<version>/media/scripts
// with its own nested mod.info. A fixed path list missed these entirely.
describe('ProjectZomboidParser workshop pack layouts (dynamic discovery)', () => {
  let tmpDir;
  let db;
  let parser;

  beforeEach(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-parse-pack-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
  });

  afterEach(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('parses a versioned workshop pack (mods/Name/42.20/media/scripts)', async () => {
    // Steam workshop item root: no scripts at the top, the mod is nested.
    const packRoot = path.join(tmpDir, 'PackRoot');
    const modRoot = path.join(packRoot, 'mods', 'LongTermPack');
    fs.mkdirSync(path.join(modRoot, '42.20', 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, '42.20', 'mod.info'),
      'name=Long Term Pack\nid=SKITTLE_LongTermPack\n'
    );
    fs.writeFileSync(
      path.join(modRoot, '42.20', 'media', 'scripts', 'food.txt'),
      'item SaltedBeef\n{\n\tType = Food,\n\tDisplayName = Salted Beef,\n\tHungerChange = -5,\n}'
    );

    const res = await parser.parseModDirectory(packRoot);
    assert.deepEqual(res.errors, []);
    assert.equal(res.itemCount, 1);
    // The pack's inner mod.info id governs the module name.
    const item = await db.getItemById('SKITTLE_LongTermPack.SaltedBeef');
    assert.ok(item, 'item should be stored under the inner mod id module');
  });

  test('parses an unversioned workshop pack (mods/Name/media/scripts)', async () => {
    const packRoot = path.join(tmpDir, 'PackRoot2');
    const modRoot = path.join(packRoot, 'mods', 'PlainPack');
    fs.mkdirSync(path.join(modRoot, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, 'media', 'scripts', 'tool.txt'),
      'module Base {\n    item PackHammer {\n        Type = Weapon\n        DisplayName = Pack Hammer\n    }\n}'
    );

    const res = await parser.parseModDirectory(packRoot);
    assert.deepEqual(res.errors, []);
    assert.equal(res.itemCount, 1);
    const item = await db.getItemById('PackHammer');
    assert.ok(item, 'unversioned pack item should parse');
  });

  test('parses scripts inside a pack even when no mod.info exists anywhere', async () => {
    const packRoot = path.join(tmpDir, 'PackRoot3');
    const modRoot = path.join(packRoot, 'mods', 'BarePack');
    fs.mkdirSync(path.join(modRoot, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, 'media', 'scripts', 'item.txt'),
      'module Base {\n    item BarePackChip {\n        Type = Food\n    }\n}'
    );

    const res = await parser.parseModDirectory(packRoot);
    assert.deepEqual(res.errors, []);
    assert.equal(res.itemCount, 1);
    assert.ok(await db.getItemById('BarePackChip'), 'bare pack item should parse');
  });

  test('parses both common/ and versioned content in one pack', async () => {
    const packRoot = path.join(tmpDir, 'PackRoot4');
    const modRoot = path.join(packRoot, 'mods', 'DualPack');
    fs.mkdirSync(path.join(modRoot, 'common', 'media', 'scripts'), { recursive: true });
    fs.mkdirSync(path.join(modRoot, '42', 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(
      path.join(modRoot, 'common', 'media', 'scripts', 'shared.txt'),
      'module Base {\n    item SharedClip {\n        Type = Food\n    }\n}'
    );
    fs.writeFileSync(
      path.join(modRoot, '42', 'media', 'scripts', 'ver.txt'),
      'module Base {\n    item VerClip {\n        Type = Food\n    }\n}'
    );

    const res = await parser.parseModDirectory(packRoot);
    assert.deepEqual(res.errors, []);
    assert.equal(res.itemCount, 2);
    assert.ok(await db.getItemById('SharedClip'), 'common content parsed');
    assert.ok(await db.getItemById('VerClip'), 'versioned content parsed');
  });
});
