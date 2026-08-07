import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { DatabaseSync } from 'node:sqlite';
import { DatabaseManager } from '../../dist/database/DatabaseManager.js';

describe('DatabaseManager: plain-text properties_text FTS mirror (A6)', () => {
  let tmpDir;
  let db;
  let raw;

  before(async () => {
    tmpDir = mkdtempSync(join(tmpdir(), 'pz-dbm-a6-'));
    db = new DatabaseManager(join(tmpDir, 'test.db'));
    await db.initialize();
    await db.insertItem({
      id: 'Base.TestAxe',
      name: 'TestAxe',
      displayName: 'Test Axe',
      type: 'item',
      module: 'Base',
      category: 'Weapon',
      properties: {
        DisplayName: 'Test Axe',
        Weight: 2.5,
        MaxDamage: 1.7,
        DamageCategory: { Blunt: true, Edge: false },
        Tags: ['Cutting', 'Woodwork'],
      },
      rawContent: 'item TestAxe { DisplayName = Test Axe }',
      filePath: join(tmpDir, 'fake-items.txt'),
    });
    raw = new DatabaseSync(join(tmpDir, 'test.db'), { readOnly: true });
  });

  after(() => {
    try { raw?.close(); } catch { /* ignore */ }
    try { db?.close(); } catch { /* ignore */ }
    rmSync(tmpDir, { recursive: true, force: true });
  });

  test('properties column still holds JSON', () => {
    const row = raw.prepare('SELECT properties FROM items WHERE id = ?').get('Base.TestAxe');
    const parsed = JSON.parse(row.properties);
    assert.equal(parsed.DisplayName, 'Test Axe');
    assert.deepEqual(parsed.Tags, ['Cutting', 'Woodwork']);
  });

  test('properties_text is plain text without JSON noise', () => {
    const row = raw.prepare('SELECT properties_text FROM items WHERE id = ?').get('Base.TestAxe');
    assert.doesNotMatch(row.properties_text, /[{}"]/);
    assert.ok(row.properties_text.includes('DisplayName=Test Axe'));
    assert.ok(row.properties_text.includes('Weight=2.5'));
    assert.ok(row.properties_text.includes('Tags=Cutting,Woodwork'));
    assert.ok(row.properties_text.includes('DamageCategory.Blunt=true'));
  });

  test('FTS matches on property values through the plain-text mirror', async () => {
    const hits = await db.searchContent('Woodwork', { type: 'item' });
    assert.ok(hits.map((h) => h.id).includes('Base.TestAxe'));
  });
});
