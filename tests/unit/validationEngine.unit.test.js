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
