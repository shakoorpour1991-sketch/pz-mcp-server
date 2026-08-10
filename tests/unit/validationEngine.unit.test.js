/**
 * Unit tests for ValidationEngine: script validation, reference checks, and
 * the reference completeness detail (freebuff N-series).
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ValidationEngine } from '../../dist/validation/ValidationEngine.js';

describe('ValidationEngine', () => {
  let tmpDir;
  let db;
  let validator;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-val-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    await db.insertItem({
      id: 'TestSword', // module 'Base' items use bare names as ids (parser behavior)
      name: 'TestSword',
      displayName: 'Test Sword',
      type: 'item',
      module: 'Base',
      category: 'Weapon',
      properties: { ItemType: 'base:weapon' },
      rawContent: 'item TestSword {}',
      filePath: 'test.txt',
    });
    validator = new ValidationEngine(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('validates a well-formed item script', async () => {
    const content = [
      'item SampleKnife',
      '{',
      '\tItemType = base:weapon,',
      '\tDisplayName = Sample Knife,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.equal(result.isValid, true);
    assert.ok(result.score >= 0);
  });

  test('flags missing required properties and bad enum values', async () => {
    // Missing ItemType (required in Build 42) plus a bad DisplayCategory
    // enum value — both must surface as errors. The legacy B41 `Type`
    // property no longer exists and is not a substitute.
    const content = [
      'item BrokenItem',
      '{',
      '\tDisplayCategory = NotACategory,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.equal(result.isValid, false);
    assert.ok(
      result.errors.some((e) => e.code === 'MISSING_PROPERTY' && /ItemType/.test(e.message))
    );
    assert.ok(result.errors.some((e) => e.code === 'INVALID_ENUM_VALUE'));
  });

  test('legacy Type alone no longer satisfies the item requirement', async () => {
    const content = [
      'item LegacyItem',
      '{',
      '\tType = Weapon,',
      '\tDisplayName = Legacy Item,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.equal(result.isValid, false);
    assert.ok(
      result.errors.some((e) => e.code === 'MISSING_PROPERTY' && /ItemType/.test(e.message))
    );
  });

  test('strict mode still accepts a valid item script', async () => {
    const content = [
      'item SampleKnife',
      '{',
      '\tItemType = base:weapon,',
      '\tDisplayName = Sample Knife,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item', true);
    assert.equal(result.isValid, true);
  });

  test('checkReferences distinguishes known and unknown items', async () => {
    const results = await validator.checkReferences(['TestSword', 'GhostItem'], 'item');
    const byName = Object.fromEntries(results.map((r) => [r.reference, r]));
    assert.equal(byName.TestSword.isValid, true);
    assert.equal(byName.GhostItem.isValid, false);
    assert.notEqual(byName.GhostItem.error, undefined);
  });

  // N-series (F3): completeness detail — defined / referenced-only / missing.
  test('checkReferences reports where each reference lives (defined/referenced/missing)', async () => {
    // The sprite reference lives only in the references table (not an items
    // row) — exactly the mod-vs-vanilla gap the completeness detail surfaces.
    await db.addReference('TestSword', 'TestSwordIcon', 'sprite', 'Icon');

    const results = await validator.checkReferences(
      ['TestSword', 'TestSwordIcon', 'GhostItem'],
      'all'
    );
    const byName = Object.fromEntries(results.map((r) => [r.reference, r]));
    assert.equal(byName.TestSword.detail, 'defined');
    assert.equal(byName.TestSword.itemType, 'item');
    // Sprite lives only in the references table → referenced, not defined.
    assert.equal(byName.TestSwordIcon.detail, 'referenced');
    assert.ok(byName.TestSwordIcon.referenceCount > 0);
    assert.equal(byName.GhostItem.detail, 'missing');
    assert.equal(byName.GhostItem.referenceCount, 0);
  });

  // C1: sprite references (Icon/WeaponSprite) are stored in the references
  // table, not in items — a recorded sprite must validate without warnings.
  test('C1: recorded sprite reference validates without INVALID_REFERENCE warnings', async () => {
    await db.addReference('TestSword', 'TestSwordIcon', 'sprite', 'Icon');

    const content = [
      'item SampleIcon',
      '{',
      '\tItemType = base:weapon,',
      '\tDisplayName = Sample Icon,',
      '\tIcon = TestSwordIcon,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    const invalidRefs = result.warnings.filter((w) => w.code === 'INVALID_REFERENCE');
    assert.equal(invalidRefs.length, 0);
  });

  test('C1: unknown sprite reference still warns', async () => {
    const content = [
      'item SampleIcon2',
      '{',
      '\tItemType = base:weapon,',
      '\tDisplayName = Sample Icon 2,',
      '\tIcon = DefinitelyNotASprite,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    const invalidRefs = result.warnings.filter((w) => w.code === 'INVALID_REFERENCE');
    assert.ok(invalidRefs.length > 0);
  });

  // Performance (tool audit): lists of 8+ references take the batched DB
  // path (2 queries instead of ~4 per reference) with identical results.
  test('checkReferences batches large lists with identical results', async () => {
    await db.addReference('TestSword', 'TestSwordIcon', 'sprite', 'Icon');
    const refs = [
      'TestSword', 'TestSwordIcon', 'GhostItem',
      'Nope1', 'Nope2', 'Nope3', 'Nope4', 'Nope5', 'Nope6', 'Nope7',
    ];
    const results = await validator.checkReferences(refs, 'all');
    assert.equal(results.length, refs.length);
    const byName = Object.fromEntries(results.map((r) => [r.reference, r]));
    assert.equal(byName.TestSword.isValid, true);
    assert.equal(byName.TestSword.detail, 'defined');
    // Sprite lives only in the references table → referenced, not defined.
    assert.equal(byName.TestSwordIcon.detail, 'referenced');
    assert.ok(byName.TestSwordIcon.referenceCount > 0);
    for (const name of ['GhostItem', 'Nope1', 'Nope7']) {
      assert.equal(byName[name].isValid, false);
      assert.equal(byName[name].detail, 'missing');
      assert.equal(byName[name].referenceCount, 0);
      assert.notEqual(byName[name].error, undefined);
    }
  });
});

describe('D11: brace counting uses shared comment-stripping', () => {
  let tmpDir, db, validator;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-val-'));
    const dbPath = path.join(tmpDir, 'data', 'pz_database.db');
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    db = new DatabaseManager(dbPath);
    await db.initialize();
    validator = new ValidationEngine(db);
  });

  after(async () => {
    if (db) await db.close();
    if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('braces inside block comments do not false-positive', async () => {
    const content = [
      'module Base {',
      '  item GhostBrace { /* } */ }',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.ok(!result.errors.some((e) => e.code === 'SYNTAX_ERROR'));
  });

  test('missing closers still reported', async () => {
    const content = [
      'item A {',
      '  ItemType = base:weapon,',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.ok(
      result.errors.some(
        (e) => e.code === 'SYNTAX_ERROR' && /Missing 1 closing brace/.test(e.message),
      ),
    );
  });

  test('stray closing brace still reported', async () => {
    const content = ['}', 'item A {', '}'].join('\n');
    const result = await validator.validateScript(content, 'item');
    assert.ok(
      result.errors.some(
        (e) => e.code === 'SYNTAX_ERROR' && /Unexpected closing brace/.test(e.message),
      ),
    );
  });
});

// ===========================================================================
// M1 (F5-F8): B42 validator consistency
// ===========================================================================

describe('M1 F5/F6: B42 craftRecipe validation', () => {
  // DatabaseManager stub: reference lookups always succeed so these tests
  // focus on block recognition / separators / required properties.
  const dbStub = {
    checkReference: async () => true,
    getSimilarItems: async () => [],
    describeReference: async () => ({ defined: true, itemType: 'item', referenceTypes: [], referenceCount: 1 }),
  };

  test('recognizes craftRecipe blocks with B42 "key = value" properties and outputs section', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    craftRecipe Make TestPlank',
      '    {',
      '        category = Carpenters,',
      '        timedAction = SawLog,',
      '        Time = 150,',
      '        inputs',
      '        {',
      '            item 1 [Base.Log;Base.WoodenStick],',
      '        }',
      '        outputs',
      '        {',
      '            item 2 Base.Plank,',
      '        }',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'recipe');
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });

  test('craftRecipe without Result property and without outputs section errors', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    craftRecipe Broken Recipe',
      '    {',
      '        category = Carpenters,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'recipe');
    assert.equal(
      result.errors.some((e) => e.code === 'MISSING_PROPERTY' && /Result/.test(e.message)),
      true
    );
    assert.equal(result.isValid, false);
  });

  test('legacy B41 recipe with colon properties still validates', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    recipe Make LegacyPlank',
      '    {',
      '        Result:Base.Plank=2,',
      '        Time:150.0,',
      '        Category:Carpentry,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'recipe');
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });
});

describe('M1 F7: vehicle validation', () => {
  const dbStub = {
    checkReference: async () => true,
    getSimilarItems: async () => [],
    describeReference: async () => ({ defined: true, itemType: 'item', referenceTypes: [], referenceCount: 1 }),
  };

  test('vehicle scripts validate without a "template" property (generator parity)', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    vehicle TestCar',
      '    {',
      '        Mass = 1000,',
      '        EngineForce = 280,',
      '        MaxSpeed = 130,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'vehicle');
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });
});

describe('M1 F8: evolved recipe validation', () => {
  const dbStub = {
    checkReference: async () => true,
    getSimilarItems: async () => [],
    describeReference: async () => ({ defined: true, itemType: 'item', referenceTypes: [], referenceCount: 1 }),
  };

  test('BaseItem alone satisfies the evolved recipe requirement', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    evolvedrecipe TestSoup',
      '    {',
      '        BaseItem: Base.Soup,',
      '        MaxItems: 3,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'evolvedrecipe');
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });

  test('legacy ResultItem alone also satisfies the requirement', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    evolvedrecipe TestSoup',
      '    {',
      '        ResultItem: Base.Soup,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'evolvedrecipe');
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });

  test('missing both BaseItem and ResultItem is an error', async () => {
    const engine = new ValidationEngine(dbStub);
    const script = [
      'module TestMod',
      '{',
      '    evolvedrecipe TestSoup',
      '    {',
      '        MaxItems: 3,',
      '    }',
      '}',
    ].join('\n');
    const result = await engine.validateScript(script, 'evolvedrecipe');
    assert.equal(result.errors.some((e) => e.code === 'MISSING_BASE_ITEM'), true);
    assert.equal(result.isValid, false);
  });
});
