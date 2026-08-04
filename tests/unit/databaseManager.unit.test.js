/**
 * Unit tests for DatabaseManager: FTS5 query sanitization (audit P1 #8)
 * and search behavior. Runs against the compiled dist/ build.
 */
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';

describe('DatabaseManager', () => {
  let tmpDir;
  let db;

  beforeAll(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-db-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
  });

  afterAll(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('prepareFTSQuery (FTS5 sanitization)', () => {
    test('a simple term is quoted', () => {
      const q = db.prepareFTSQuery('sword');
      expect(q).toContain('"sword"');
    });

    test('special characters and operator keywords are stripped', () => {
      const q = db.prepareFTSQuery('"sword" OR "axe" -note *wild*');
      expect(q).toContain('"sword"');
      expect(q).toContain('"axe"');
      expect(q).toContain('"wild"'); // '*' stripped, term kept
      expect(q).not.toContain('"OR"'); // operator keyword removed as a term
      expect(q).not.toContain('"-note"');
    });

    test('operator-only or empty input yields match-nothing query', () => {
      expect(db.prepareFTSQuery('AND OR NOT NEAR')).toBe('""');
      expect(db.prepareFTSQuery('')).toBe('""');
      expect(db.prepareFTSQuery('   ')).toBe('""');
    });

    test('malformed input never throws and never leaks raw operators', () => {
      const evil = '"; DROP TABLE items; --';
      const q = db.prepareFTSQuery(evil);
      expect(q).toContain('"DROP');
      expect(q).not.toContain(';');
      expect(q).not.toContain('--');
    });
  });

  describe('searchContent', () => {
    beforeAll(async () => {
      await db.insertItem({
        id: 'Base.TestSword',
        name: 'TestSword',
        displayName: 'Test Sword',
        type: 'item',
        module: 'Base',
        category: 'Weapon',
        properties: { Type: 'Weapon' },
        rawContent: 'item TestSword {}',
        filePath: 'test.txt',
      });
    });

    test('finds items by name via FTS', async () => {
      const results = await db.searchContent('TestSword');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toBe('TestSword');
    });

    test('type filter is qualified (no ambiguous-column error)', async () => {
      // type filters against the block-type column ('item'/'recipe'/...)
      const items = await db.searchContent('TestSword', { type: 'item' });
      expect(items.length).toBeGreaterThan(0);
      const recipes = await db.searchContent('TestSword', { type: 'recipe' });
      expect(recipes.length).toBe(0);
    });

    test('empty query lists items without crashing', async () => {
      const results = await db.searchContent('');
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBeGreaterThan(0);
    });

    test('FTS5 bm25 ordering: best match ranks first (ASC, not DESC)', async () => {
      // Sword matches "sword" in 2 columns (name + displayName);
      // Spoon matches in 1 column (displayName only); Axe matches none.
      await db.insertItems([
        {
          id: 'Base.Sword',
          name: 'Sword',
          displayName: 'Sword',
          type: 'item',
          module: 'Base',
          category: 'Weapon',
          properties: { Type: 'Weapon' },
          rawContent: 'item Sword {}',
          filePath: 'test.txt',
        },
        {
          id: 'Base.Spoon',
          name: 'Spoon',
          displayName: 'Kitchen Sword',
          type: 'item',
          module: 'Base',
          category: 'Kitchen',
          properties: { Type: 'Kitchen' },
          rawContent: 'item Spoon {}',
          filePath: 'test.txt',
        },
        {
          id: 'Base.Axe',
          name: 'Axe',
          displayName: 'Axe',
          type: 'item',
          module: 'Base',
          category: 'Weapon',
          properties: { Type: 'Weapon' },
          rawContent: 'item Axe {}',
          filePath: 'test.txt',
        },
      ]);

      const results = await db.searchContent('sword');
      // TestSword (inserted earlier in this describe) also matches via its
      // display name "Test Sword", so 3 rows total — but the ordering
      // assertion is the point: the strongest match must rank first.
      expect(results.length).toBe(3);
      // bm25 rank is more negative for better matches; ASC must surface
      // the stronger match first (DESC would invert it — audit finding).
      expect(results[0].id).toBe('Base.Sword');
      const spoonIdx = results.findIndex((r) => r.id === 'Base.Spoon');
      expect(spoonIdx).toBeGreaterThan(0);
    });
  });
});
