import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { DatabaseSync } from 'node:sqlite';
import { DatabaseManager } from '../../dist/database/DatabaseManager.js';

describe('DatabaseManager: plain-text properties_text FTS mirror (A6)', () => {
  let tmpDir;
  let db;
  let raw;

  beforeAll(async () => {
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

  afterAll(() => {
    try { raw?.close(); } catch { /* ignore */ }
    try { db?.close(); } catch { /* ignore */ }
    rmSync(tmpDir, { recursive: true, force: true });
  });

  test('properties column still holds JSON', () => {
    const row = raw.prepare('SELECT properties FROM items WHERE id = ?').get('Base.TestAxe');
    const parsed = JSON.parse(row.properties);
    expect(parsed.DisplayName).toBe('Test Axe');
    expect(parsed.Tags).toEqual(['Cutting', 'Woodwork']);
  });

  test('properties_text is plain text without JSON noise', () => {
    const row = raw.prepare('SELECT properties_text FROM items WHERE id = ?').get('Base.TestAxe');
    expect(row.properties_text).not.toMatch(/[{}"]/);
    expect(row.properties_text).toContain('DisplayName=Test Axe');
    expect(row.properties_text).toContain('Weight=2.5');
    expect(row.properties_text).toContain('Tags=Cutting,Woodwork');
    expect(row.properties_text).toContain('DamageCategory.Blunt=true');
  });

  test('FTS matches on property values through the plain-text mirror', async () => {
    const hits = await db.searchContent('Woodwork', { type: 'item' });
    expect(hits.map((h) => h.id)).toContain('Base.TestAxe');
  });
});
