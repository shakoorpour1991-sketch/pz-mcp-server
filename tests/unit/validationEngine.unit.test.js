/**
 * Unit tests for ValidationEngine: script validation and reference checks.
 * Runs against the compiled dist/ build.
 */
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ValidationEngine } from '../../dist/validation/ValidationEngine.js';

describe('ValidationEngine', () => {
  let tmpDir;
  let db;
  let validator;

  beforeAll(async () => {
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
      properties: { Type: 'Weapon' },
      rawContent: 'item TestSword {}',
      filePath: 'test.txt',
    });
    validator = new ValidationEngine(db);
  });

  afterAll(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('validates a well-formed item script', async () => {
    const content = [
      'item SampleKnife',
      '{',
      '\tType = Weapon,',
      '\tDisplayName = Sample Knife,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    expect(result.isValid).toBe(true);
    expect(result.score).toBeGreaterThanOrEqual(0);
  });

  test('flags missing required properties and bad enum values', async () => {
    const content = [
      'item BrokenItem',
      '{',
      '\tType = NotARealType,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item');
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  test('strict mode still accepts a valid item script', async () => {
    const content = [
      'item SampleKnife',
      '{',
      '\tType = Weapon,',
      '\tDisplayName = Sample Knife,',
      '}',
    ].join('\n');
    const result = await validator.validateScript(content, 'item', true);
    expect(result.isValid).toBe(true);
  });

  test('checkReferences distinguishes known and unknown items', async () => {
    const results = await validator.checkReferences(['TestSword', 'GhostItem'], 'item');
    const byName = Object.fromEntries(results.map((r) => [r.reference, r]));
    expect(byName.TestSword.isValid).toBe(true);
    expect(byName.GhostItem.isValid).toBe(false);
    expect(byName.GhostItem.error).toBeDefined();
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
    expect(result.errors).toEqual([]);
    expect(result.isValid).toBe(true);
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
    expect(
      result.errors.some((e) => e.code === 'MISSING_PROPERTY' && /Result/.test(e.message))
    ).toBe(true);
    expect(result.isValid).toBe(false);
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
    expect(result.errors).toEqual([]);
    expect(result.isValid).toBe(true);
  });
});

describe('M1 F7: vehicle validation', () => {
  const dbStub = {
    checkReference: async () => true,
    getSimilarItems: async () => [],
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
    expect(result.errors).toEqual([]);
    expect(result.isValid).toBe(true);
  });
});

describe('M1 F8: evolved recipe validation', () => {
  const dbStub = {
    checkReference: async () => true,
    getSimilarItems: async () => [],
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
    expect(result.errors).toEqual([]);
    expect(result.isValid).toBe(true);
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
    expect(result.errors).toEqual([]);
    expect(result.isValid).toBe(true);
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
    expect(result.errors.some((e) => e.code === 'MISSING_BASE_ITEM')).toBe(true);
    expect(result.isValid).toBe(false);
  });
});
