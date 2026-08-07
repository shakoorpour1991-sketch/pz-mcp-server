/**
 * Unit tests for DatabaseManager: FTS5 query sanitization (audit P1 #8)
 * and search behavior. Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';

describe('DatabaseManager', () => {
  let tmpDir;
  let db;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-db-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('prepareFTSQuery (FTS5 sanitization)', () => {
    test('a simple term is quoted', () => {
      const q = db.prepareFTSQuery('sword');
      assert.ok(q.includes('"sword"'));
    });

    test('special characters and operator keywords are stripped', () => {
      const q = db.prepareFTSQuery('"sword" OR "axe" -note *wild*');
      assert.ok(q.includes('"sword"'));
      assert.ok(q.includes('"axe"'));
      assert.ok(q.includes('"wild"')); // '*' stripped, term kept
      assert.ok(!q.includes('"OR"')); // operator keyword removed as a term
      assert.ok(!q.includes('"-note"'));
    });

    test('operator-only or empty input yields match-nothing query', () => {
      assert.equal(db.prepareFTSQuery('AND OR NOT NEAR'), '""');
      assert.equal(db.prepareFTSQuery(''), '""');
      assert.equal(db.prepareFTSQuery('   '), '""');
    });

    test('malformed input never throws and never leaks raw operators', () => {
      const evil = '"; DROP TABLE items; --';
      const q = db.prepareFTSQuery(evil);
      assert.ok(q.includes('"DROP'));
      assert.ok(!q.includes(';'));
      assert.ok(!q.includes('--'));
    });
  });

  describe('searchContent', () => {
    before(async () => {
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
      assert.ok(results.length > 0);
      assert.equal(results[0].name, 'TestSword');
    });

    test('type filter is qualified (no ambiguous-column error)', async () => {
      // type filters against the block-type column ('item'/'recipe'/...)
      const items = await db.searchContent('TestSword', { type: 'item' });
      assert.ok(items.length > 0);
      const recipes = await db.searchContent('TestSword', { type: 'recipe' });
      assert.equal(recipes.length, 0);
    });

    test('empty query lists items without crashing', async () => {
      const results = await db.searchContent('');
      assert.equal(Array.isArray(results), true);
      assert.ok(results.length > 0);
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
      assert.equal(results.length, 3);
      // bm25 rank is more negative for better matches; ASC must surface
      // the stronger match first (DESC would invert it — audit finding).
      assert.equal(results[0].id, 'Base.Sword');
      const spoonIdx = results.findIndex((r) => r.id === 'Base.Spoon');
      assert.ok(spoonIdx > 0);
    });

    test('tags filter matches items with any of the specified tags', async () => {
      await db.insertItem({
        id: 'Base.Hammer',
        name: 'Hammer',
        displayName: 'Hammer',
        type: 'item',
        module: 'Base',
        category: 'Weapon',
        properties: { Tags: ['Hammer', 'Metal'], Type: 'Weapon' },
        rawContent: 'item Hammer {}',
        filePath: 'test.txt',
        tags: ['Hammer', 'Metal'],
        metal_value: 10,
      });

      const results = await db.searchContent('', { tags: 'Hammer,Metal' });
      assert.ok(results.length > 0);
      assert.equal(results.some((r) => r.id === 'Base.Hammer'), true);
    });

    test('metalValueMin filters items with metal_value >= threshold', async () => {
      await db.insertItem({
        id: 'Base.IronBar',
        name: 'IronBar',
        displayName: 'Iron Bar',
        type: 'item',
        module: 'Base',
        category: 'Material',
        properties: { MetalValue: 25, Type: 'Material' },
        rawContent: 'item IronBar {}',
        filePath: 'test.txt',
        metal_value: 25,
      });

      const results = await db.searchContent('', { metalValueMin: 20 });
      assert.equal(results.some((r) => r.id === 'Base.IronBar'), true);

      const lowResults = await db.searchContent('', { metalValueMin: 30 });
      assert.equal(lowResults.some((r) => r.id === 'Base.IronBar'), false);
    });

    test('metalValueMax filters items with metal_value <= threshold', async () => {
      await db.insertItem({
        id: 'Base.CopperBar',
        name: 'CopperBar',
        displayName: 'Copper Bar',
        type: 'item',
        module: 'Base',
        category: 'Material',
        properties: { MetalValue: 5, Type: 'Material' },
        rawContent: 'item CopperBar {}',
        filePath: 'test.txt',
        metal_value: 5,
      });

      const results = await db.searchContent('', { metalValueMax: 10 });
      assert.equal(results.some((r) => r.id === 'Base.CopperBar'), true);

      const highResults = await db.searchContent('', { metalValueMax: 3 });
      assert.equal(highResults.some((r) => r.id === 'Base.CopperBar'), false);
    });

    test('attachmentType filter matches items with the specified attachment type', async () => {
      await db.insertItem({
        id: 'Base.Sling',
        name: 'Sling',
        displayName: 'Sling',
        type: 'item',
        module: 'Base',
        category: 'Weapon',
        properties: { AttachmentType: 'Sling', Type: 'Weapon' },
        rawContent: 'item Sling {}',
        filePath: 'test.txt',
        attachment_type: 'Sling',
      });

      const results = await db.searchContent('', { attachmentType: 'Sling' });
      assert.equal(results.some((r) => r.id === 'Base.Sling'), true);

      const noResults = await db.searchContent('', { attachmentType: 'Bow' });
      assert.equal(noResults.some((r) => r.id === 'Base.Sling'), false);
    });
  });

  describe('checkReference: sprite references resolve via the references table (C1)', () => {
    before(async () => {
      // extractReferences stores Icon/WeaponSprite values as
      // reference_type='sprite' rows; they are NOT rows in items.
      // (item_id must reference the existing 'Base.TestSword' row — FK is
      // enforced now, freebuff M6.)
      await db.addReference('Base.TestSword', 'TestSwordIcon', 'sprite', 'Icon');
    });

    test('type=sprite resolves against the references table', async () => {
      assert.equal(await db.checkReference('TestSwordIcon', 'sprite'), true);
      assert.equal(await db.checkReference('NoSuchSpriteEver', 'sprite'), false);
    });

    test('type=all falls back to the references table when not an item', async () => {
      assert.equal(await db.checkReference('TestSwordIcon'), true);
      assert.equal(await db.checkReference('NoSuchRefEver'), false);
    });

    test('type=item/sound still resolve against items only', async () => {
      assert.equal(await db.checkReference('Base.TestSword', 'item'), true);
      assert.equal(await db.checkReference('TestSwordIcon', 'item'), false);
    });
  });

  describe('FTS rowid stability (upsert vs INSERT OR REPLACE)', () => {
    test('re-inserting the same id keeps it FTS-searchable (no rowid drift)', async () => {
      const item = {
        id: 'Base.DriftTest',
        name: 'DriftTest',
        displayName: 'Drift Test',
        type: 'item',
        module: 'Base',
        category: 'Weapon',
        properties: { DisplayName: 'Drift Test', Type: 'Weapon' },
        rawContent: 'item DriftTest {}',
        filePath: 'drift.txt',
      };

      // First insert + search
      await db.insertItem(item);
      let results = await db.searchContent('DriftTest');
      assert.equal(results.some((r) => r.id === 'Base.DriftTest'), true);

      // Re-insert (simulates re-parse of the same file) — upsert must keep the
      // rowid stable so the FTS external-content index stays aligned. With
      // INSERT OR REPLACE this used to drift and throw "missing row N".
      await db.insertItem({ ...item, displayName: 'Drift Test v2' });
      results = await db.searchContent('DriftTest');
      assert.equal(results.some((r) => r.id === 'Base.DriftTest'), true);
      assert.equal(results.find((r) => r.id === 'Base.DriftTest')?.displayName, 'Drift Test v2');

      // Bulk path too
      await db.insertItems([{ ...item, id: 'Base.DriftBulk', name: 'DriftBulk' }]);
      results = await db.searchContent('DriftBulk');
      assert.equal(results.some((r) => r.id === 'Base.DriftBulk'), true);
    });

    test('initialize() heals a stale FTS index (rebuild)', async () => {
      // Simulate the drift: delete a row behind the FTS index's back (as
      // INSERT OR REPLACE used to do) then re-initialize and confirm the
      // rebuild command resyncs without throwing.
      const staleDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-stale-'));
      const staleDb = new DatabaseManager(path.join(staleDir, 'data', 'pz_database.db'));
      await staleDb.initialize();
      await staleDb.insertItem({
        id: 'Base.StaleItem',
        name: 'StaleItem',
        displayName: 'Stale Item',
        type: 'item',
        module: 'Base',
        properties: {},
        rawContent: 'item StaleItem {}',
        filePath: 'stale.txt',
      });

      // Corrupt the FTS index by deleting the content row without firing the
      // delete trigger (simulates rowid drift) — then close.
      const { DatabaseSync } = await import('node:sqlite');
      const rawPath = path.join(staleDir, 'data', 'pz_database.db');
      const raw = new DatabaseSync(rawPath);
      raw.exec('DELETE FROM items WHERE id = ?', 'Base.StaleItem');
      raw.close();
      staleDb.close();

      // Re-initialize: the rebuild in initialize() must resync FTS with the
      // (now empty) items table without throwing "missing row N".
      const healedDb = new DatabaseManager(rawPath);
      await healedDb.initialize();
      // Any MATCH must not throw; the index is empty so no results.
      const results = await healedDb.searchContent('StaleItem');
      assert.equal(Array.isArray(results), true);
      healedDb.close();
      fs.rmSync(staleDir, { recursive: true, force: true });
    });
  });

  describe('clearDatabase with FK enforcement (M6 regression)', () => {
    test('deletes references before items without FOREIGN KEY constraint failed', async () => {
      await db.insertItem({
        id: 'Base.FkItem',
        name: 'FkItem',
        displayName: 'FK Item',
        type: 'item',
        module: 'Base',
        properties: {},
        rawContent: 'item FkItem {}',
        filePath: 'fk.txt',
      });
      await db.addReference('Base.FkItem', 'FkSprite', 'sprite', 'Icon');

      // Must not throw: references are deleted before items (forceReparse path)
      await db.clearDatabase();
      const stats = await db.getStats();
      assert.equal(stats.total, 0);
    });
  });
});
