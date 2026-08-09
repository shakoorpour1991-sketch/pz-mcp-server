/**
 * Unit tests for DatabaseManager: FTS5 query sanitization (audit P1 #8)
 * and search behavior. Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import {
  DatabaseManager,
  referenceCandidates,
} from '../../dist/database/DatabaseManager.js';

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

  describe('Audit M5: references uniqueness', () => {
    test('references dedupe: INSERT OR IGNORE keeps a single row per logical key (M5)', async () => {
      await db.addReference('Base.TestSword', 'Base.Potato', 'item', 'ingredient');
      await db.addReference('Base.TestSword', 'Base.Potato', 'item', 'ingredient');
      // Note: the C1 describe above also added a sprite ref for this item, so
      // filter to the key under test rather than asserting the total count.
      const refs = await db.getReferencesFrom('Base.TestSword');
      const potato = refs.filter((r) => r.referenceId === 'Base.Potato');
      assert.equal(potato.length, 1);
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

  describe('deeper indexing: weight/calories filters', () => {
    before(async () => {
      await db.insertItems([
        {
          id: 'Base.Burger',
          name: 'Burger',
          displayName: 'Burger',
          type: 'item',
          module: 'Base',
          category: 'Food',
          properties: { Weight: 0.5, Calories: 750 },
          rawContent: 'item Burger {}',
          filePath: 'food.txt',
          weight: 0.5,
          calories: 750,
        },
        {
          id: 'Base.Salad',
          name: 'Salad',
          displayName: 'Salad',
          type: 'item',
          module: 'Base',
          category: 'Food',
          properties: { Weight: 0.3, Calories: 120 },
          rawContent: 'item Salad {}',
          filePath: 'food.txt',
          weight: 0.3,
          calories: 120,
        },
        {
          id: 'Base.Barbell',
          name: 'Barbell',
          displayName: 'Barbell',
          type: 'item',
          module: 'Base',
          category: 'Weapon',
          properties: { Weight: 25 },
          rawContent: 'item Barbell {}',
          filePath: 'weapon.txt',
          weight: 25,
        },
      ]);
    });

    test('maxWeight filter returns items under the bound', async () => {
      const results = await db.searchContent('', { maxWeight: 1 });
      assert.ok(results.some((r) => r.id === 'Base.Burger'));
      assert.ok(results.some((r) => r.id === 'Base.Salad'));
      assert.ok(!results.some((r) => r.id === 'Base.Barbell'));
    });

    test('minCalories filter returns high-calorie food', async () => {
      const results = await db.searchContent('', { minCalories: 500 });
      assert.ok(results.some((r) => r.id === 'Base.Burger'));
      assert.ok(!results.some((r) => r.id === 'Base.Salad'));
    });

    test('minWeight + maxWeight bound a range', async () => {
      const results = await db.searchContent('', { minWeight: 10, maxWeight: 30 });
      assert.ok(results.some((r) => r.id === 'Base.Barbell'));
      assert.ok(!results.some((r) => r.id === 'Base.Burger'));
    });

    test('dotted query never crashes and matches via FTS', async () => {
      // Regression: FTS5 must not crash on dotted ids like Base.Burger — the
      // shared sanitizeFtsTerms helper splits them into safe terms.
      const results = await db.searchContent('Base.Burger');
      assert.equal(Array.isArray(results), true);
      assert.ok(results.some((r) => r.id === 'Base.Burger'));
    });
  });

  describe('deeper indexing: searchRecipes', () => {
    before(async () => {
      // Recipe rows must exist before their ingredient rows (FK recipes.id).
      await db.insertRecipes([
        {
          id: 'Base.NailBox',
          name: 'NailBox',
          module: 'Base',
          category: 'Carpentry',
          time: 120,
          skill: 'Woodwork',
          skillLevel: 4,
          result: 'Base.NailBox',
          resultCount: 1,
          properties: { category: 'Carpentry' },
          filePath: 'recipes.txt',
        },
        {
          id: 'Base.BurgerRecipe',
          name: 'BurgerRecipe',
          module: 'Base',
          category: 'Cooking',
          time: 60,
          result: 'Base.Burger',
          properties: { category: 'Cooking' },
          filePath: 'recipes.txt',
        },
      ]);
      await db.insertRecipeIngredients([
        {
          recipeId: 'Base.NailBox',
          ref: 'Base.Plank',
          refType: 'item',
          count: 4,
          role: 'ingredient',
          sortOrder: 0,
        },
        {
          recipeId: 'Base.NailBox',
          ref: 'Base.Nails',
          refType: 'item',
          count: 6,
          role: 'ingredient',
          sortOrder: 1,
        },
        {
          recipeId: 'Base.NailBox',
          ref: 'base:saw',
          refType: 'tag',
          count: 1,
          role: 'tool',
          sortOrder: 2,
        },
        {
          recipeId: 'Base.NailBox',
          ref: 'Base.NailBox',
          refType: 'item',
          count: 1,
          role: 'output',
          sortOrder: 3,
        },
        {
          recipeId: 'Base.BurgerRecipe',
          ref: 'Base.Burger',
          refType: 'item',
          count: 1,
          role: 'output',
          sortOrder: 0,
        },
      ]);
    });

    test('finds recipes by ingredient (accepts bare name)', async () => {
      const results = await db.searchRecipes({ ingredient: 'Nails' });
      assert.ok(results.some((r) => r.id === 'Base.NailBox'));
    });

    test('finds recipes by tag tool', async () => {
      const results = await db.searchRecipes({ tool: 'base:saw' });
      assert.ok(results.some((r) => r.id === 'Base.NailBox'));
    });

    test('finds recipes by skill + level bound (Carpentry 4-style query)', async () => {
      const results = await db.searchRecipes({
        ingredient: 'Nails',
        skill: 'Woodwork',
        minSkillLevel: 4,
      });
      assert.ok(results.some((r) => r.id === 'Base.NailBox'));

      const tooHigh = await db.searchRecipes({
        ingredient: 'Nails',
        skill: 'Woodwork',
        minSkillLevel: 5,
      });
      assert.equal(tooHigh.length, 0);
    });

    test('finds recipes by result and returns structured ingredients', async () => {
      const results = await db.searchRecipes({ result: 'Burger' });
      assert.ok(results.some((r) => r.id === 'Base.BurgerRecipe'));
      const nailBox = results.find((r) => r.id === 'Base.NailBox');
      if (nailBox) {
        assert.ok(
          nailBox.ingredients.some(
            (i) => i.ref === 'Base.Nails' && i.count === 6 && i.role === 'ingredient',
          ),
        );
        assert.ok(
          nailBox.ingredients.some(
            (i) => i.ref === 'base:saw' && i.role === 'tool',
          ),
        );
      }
    });

    test('category filter narrows recipe search', async () => {
      const results = await db.searchRecipes({ category: 'Cooking' });
      assert.ok(results.some((r) => r.id === 'Base.BurgerRecipe'));
      assert.ok(!results.some((r) => r.id === 'Base.NailBox'));
    });

    test('free-text query matches recipe name substring', async () => {
      const results = await db.searchRecipes({ query: 'nailbox' });
      assert.ok(results.some((r) => r.id === 'Base.NailBox'));
    });
  });

  describe('getSimilarItems LIKE escaping (audit M7)', () => {
    before(async () => {
      await db.insertItem({
        id: 'Base.CottonPct',
        name: '100% Cotton',
        displayName: '100% Cotton',
        type: 'item',
        module: 'Base',
        category: 'Clothing',
        properties: {},
        rawContent: 'item CottonPct {}',
        filePath: 'test.txt',
      });
      await db.insertItem({
        id: 'Base.Cotton',
        name: 'Cotton',
        displayName: 'Cotton',
        type: 'item',
        module: 'Base',
        category: 'Clothing',
        properties: {},
        rawContent: 'item Cotton {}',
        filePath: 'test.txt',
      });
    });

    test('query with % returns only literal matches', async () => {
      const results = await db.getSimilarItems('%');
      assert.equal(results.length, 1);
      assert.equal(results[0], '100% Cotton');
    });

    test('query with Cotton returns both items', async () => {
      const results = await db.getSimilarItems('Cotton');
      assert.equal(results.length, 2);
      assert.ok(results.includes('100% Cotton'));
      assert.ok(results.includes('Cotton'));
    });
  });
});

describe('DatabaseManager D2/D3 fixes', () => {
  let tmpDir;
  let db;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-d23-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('getReferencesToMany batches lookups for multiple ids', async () => {
    await db.insertItem({
      id: 'item1', name: 'Item 1', displayName: 'Item 1', type: 'item',
      module: 'Base', properties: {}, rawContent: 'item Item1 {}', filePath: 'x.txt',
    });
    await db.insertItem({
      id: 'item2', name: 'Item 2', displayName: 'Item 2', type: 'item',
      module: 'Base', properties: {}, rawContent: 'item Item2 {}', filePath: 'x.txt',
    });
    await db.insertItem({
      id: 'item3', name: 'Item 3', displayName: 'Item 3', type: 'item',
      module: 'Base', properties: {}, rawContent: 'item Item3 {}', filePath: 'x.txt',
    });
    // FK (freebuff M6): references.item_id must exist as an item row — the
    // recipes are that item_id, so insert them first.
    const mkRecipe = (id) => ({
      id, name: id, displayName: id, type: 'recipe',
      module: 'Base', properties: {}, rawContent: `recipe ${id} {}`, filePath: 'x.txt',
    });
    await db.insertItems([mkRecipe('recipeA'), mkRecipe('recipeB'), mkRecipe('recipeC')]);
    await db.addReference('recipeA', 'item1', 'item', 'result');
    await db.addReference('recipeB', 'item2', 'item', 'result');
    await db.addReference('recipeC', 'item2', 'item', 'ingredient');

    const map = await db.getReferencesToMany(['item1', 'item2', 'item3']);
    assert.strictEqual(map.size, 3);
    assert.ok(map.has('item1'));
    assert.ok(map.has('item2'));
    assert.ok(map.has('item3'));

    const refs1 = map.get('item1');
    assert.strictEqual(refs1.length, 1);
    assert.deepEqual(refs1[0], { itemId: 'recipeA', type: 'item', context: 'result' });

    const refs2 = map.get('item2');
    assert.strictEqual(refs2.length, 2);
    assert.ok(refs2.some((r) => r.itemId === 'recipeB' && r.context === 'result'));
    assert.ok(refs2.some((r) => r.itemId === 'recipeC' && r.context === 'ingredient'));

    assert.deepEqual(map.get('item3'), []);

    const emptyMap = await db.getReferencesToMany([]);
    assert.strictEqual(emptyMap.size, 0);
  });

  test('transaction allows nested calls and commits all', async () => {
    await db.transaction(async () => {
      await db.insertItem({
        id: 'outer', name: 'Outer', displayName: 'Outer', type: 'item',
        module: 'Base', properties: {}, rawContent: 'item Outer {}', filePath: 'x.txt',
      });
      await db.transaction(async () => {
        await db.insertItem({
          id: 'inner', name: 'Inner', displayName: 'Inner', type: 'item',
          module: 'Base', properties: {}, rawContent: 'item Inner {}', filePath: 'x.txt',
        });
      });
    });
    assert.ok(await db.getItemById('outer'));
    assert.ok(await db.getItemById('inner'));
  });

  test('transaction clears the nesting flag after an error', async () => {
    await assert.rejects(
      db.transaction(async () => {
        await db.insertItem({
          id: 'fail', name: 'Fail', displayName: 'Fail', type: 'item',
          module: 'Base', properties: {}, rawContent: 'item Fail {}', filePath: 'x.txt',
        });
        throw new Error('Simulated failure');
      })
    );
    // Subsequent transaction must work (flag cleared).
    await db.transaction(async () => {
      await db.insertItem({
        id: 'after', name: 'After', displayName: 'After', type: 'item',
        module: 'Base', properties: {}, rawContent: 'item After {}', filePath: 'x.txt',
      });
    });
    assert.ok(await db.getItemById('after'));
  });

  test('FTS health check runs on a fresh database without throwing', async () => {
    const freshDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-fresh-'));
    const freshDb = new DatabaseManager(path.join(freshDir, 'data', 'pz_database.db'));
    await freshDb.initialize();
    freshDb.close();
    fs.rmSync(freshDir, { recursive: true, force: true });
  });

  test('FTS index rebuilds when counts drift (atomic health check)', async () => {
    const driftDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-drift-'));
    const driftDb = new DatabaseManager(path.join(driftDir, 'data', 'pz_database.db'));
    await driftDb.initialize();
    await driftDb.insertItem({
      id: 'Base.Drift', name: 'Drift', displayName: 'Drift', type: 'item',
      module: 'Base', properties: {}, rawContent: 'item Drift {}', filePath: 'x.txt',
    });
    // Manually delete FTS rows behind the index's back to create drift,
    // then close before re-initializing (Windows keeps the file handle
    // locked while the first connection is open).
    driftDb.db.exec('DELETE FROM items_fts');
    driftDb.close();
    const healedDb = new DatabaseManager(path.join(driftDir, 'data', 'pz_database.db'));
    await healedDb.initialize();
    const counts = healedDb.db
      .prepare('SELECT (SELECT COUNT(*) FROM items) AS item_count, (SELECT COUNT(*) FROM items_fts) AS fts_count')
      .get();
    assert.strictEqual(counts.item_count, counts.fts_count);
    assert.strictEqual(counts.item_count, 1);
    healedDb.close();
    fs.rmSync(driftDir, { recursive: true, force: true });
  });

  describe('recipe-chain reference tolerance', () => {
    test('referenceCandidates builds bare/qualified spellings and dedupes', () => {
      assert.deepEqual(referenceCandidates('Base.Flour2'), [
        'Base.Flour2',
        'Flour2',
        'base:flour2',
      ]);
      assert.deepEqual(referenceCandidates('Flour2'), [
        'Flour2',
        'Base.Flour2',
        'base:flour2',
      ]);
      assert.deepEqual(referenceCandidates('base:flour2'), [
        'base:flour2',
        'flour2',
        'Base.flour2',
      ]);
      // Tag-form candidates are lowercase, so they never match a PascalCase
      // item row — they exist for tag-style reference rows only (harmless).
    });

    test('getReferencesToAny matches every candidate spelling', async () => {
      await db.insertItems([
        { id: 'Flour2', name: 'Flour', displayName: 'Flour', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
        { id: 'R1', name: 'R1', displayName: 'R1', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
        { id: 'R2', name: 'R2', displayName: 'R2', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      ]);
      await db.addReference('R1', 'Base.Flour2', 'item', 'result');
      await db.addReference('R2', 'Flour2', 'item', 'ingredient');

      // Both a bare and a qualified spelling reach the same two rows.
      const bare = await db.getReferencesToAny('Flour2');
      assert.equal(bare.length, 2);
      assert.deepEqual(bare.map((r) => r.itemId).sort(), ['R1', 'R2']);
      const qualified = await db.getReferencesToAny('Base.Flour2');
      assert.deepEqual(qualified.map((r) => r.itemId).sort(), ['R1', 'R2']);
      // Tag-form spelling is case-sensitive and matches nothing here.
      const tag = await db.getReferencesToAny('base:flour2');
      assert.deepEqual(tag, []);
    });
  });
});
