/**
 * Unit tests for RecipeAnalyzer (freebuff N3): recipe-chain graph walking in
 * both directions and recipe-conflict detection, against a seeded database.
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { RecipeAnalyzer } from '../../dist/analyzers/RecipeAnalyzer.js';

describe('RecipeAnalyzer', () => {
  let tmpDir;
  let db;
  let analyzer;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-recipe-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();

    // Seed items + recipes with cross-references (the shape parse_game_files
    // produces in the "references" table).
    await db.insertItems([
      { id: 'Base.Log', name: 'Log', displayName: 'Log', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Base.Plank', name: 'Plank', displayName: 'Plank', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Base.Nails', name: 'Nails', displayName: 'Nails', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Base.Twig', name: 'Twig', displayName: 'Twig', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Base.PlankBox', name: 'PlankBox', displayName: 'Plank Box', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      // Recipes (item rows with type='recipe')
      { id: 'SawPlank', name: 'SawPlank', displayName: 'Saw Plank', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'CraftBox', name: 'CraftBox', displayName: 'Craft Box', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'AltPlank', name: 'AltPlank', displayName: 'Alt Plank', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
    ]);

    // SawPlank: Log -> Plank
    await db.addReference('SawPlank', 'Base.Log', 'item', 'ingredient');
    await db.addReference('SawPlank', 'Base.Plank', 'item', 'result');
    // CraftBox: Plank + Nails -> PlankBox
    await db.addReference('CraftBox', 'Base.Plank', 'item', 'ingredient');
    await db.addReference('CraftBox', 'Base.Nails', 'item', 'ingredient');
    await db.addReference('CraftBox', 'Base.PlankBox', 'item', 'output');
    // AltPlank: Twig -> Plank (conflict with SawPlank on Plank)
    await db.addReference('AltPlank', 'Base.Twig', 'item', 'ingredient');
    await db.addReference('AltPlank', 'Base.Plank', 'item', 'result');
    // AltPlank also declares Plank through an 'output' context: the same
    // producer twice. producedBy/conflict lists must dedupe it to one.
    await db.addReference('AltPlank', 'Base.Plank', 'item', 'output');

    analyzer = new RecipeAnalyzer(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('walks upstream from an item to its producing recipes', async () => {
    const chain = await analyzer.analyzeChain('Base.Plank', 'upstream', 3);
    assert.equal(chain.seedKind, 'item');
    assert.notEqual(chain.nodes.find((n) => n.id === 'SawPlank'), undefined);
    assert.notEqual(chain.nodes.find((n) => n.id === 'AltPlank'), undefined);
    const plank = chain.nodes.find((n) => n.id === 'Base.Plank');
    assert.equal(plank.producedBy.length, 2);
  });

  test('walks downstream from a recipe through its consumers', async () => {
    const chain = await analyzer.analyzeChain('SawPlank', 'downstream', 3);
    assert.equal(chain.seedKind, 'recipe');
    const saw = chain.nodes.find((n) => n.id === 'SawPlank');
    assert.equal(saw.results.some((r) => r.id === 'Base.Plank'), true);
    // CraftBox consumes Plank as an ingredient -> reached downstream.
    assert.notEqual(chain.nodes.find((n) => n.id === 'CraftBox'), undefined);
  });

  test('walks both directions with maxDepth cutoff', async () => {
    const chain = await analyzer.analyzeChain('CraftBox', 'both', 1);
    assert.equal(chain.seedKind, 'recipe');
    assert.notEqual(chain.nodes.find((n) => n.id === 'Base.PlankBox'), undefined);
    // Upstream of CraftBox (ingredient Plank) reaches its producers at depth 1.
    assert.notEqual(chain.nodes.find((n) => n.id === 'SawPlank'), undefined);
    assert.notEqual(chain.nodes.find((n) => n.id === 'AltPlank'), undefined);
    // Twig (AltPlank's ingredient) is at depth 2 — cut off by maxDepth=1.
    assert.equal(chain.nodes.some((n) => n.id === 'Base.Twig'), false);
    assert.equal(chain.truncated, true);
  });

  test('unknown seeds resolve with kind=unknown and do not crash', async () => {
    const chain = await analyzer.analyzeChain('NoSuchThing', 'both', 3);
    assert.equal(chain.seedKind, 'unknown');
    assert.equal(chain.nodes.length, 1);
    assert.equal(chain.nodes[0].id, 'NoSuchThing');
  });

  test('dedupes a producer that declares both result and output contexts', async () => {
    const chain = await analyzer.analyzeChain('Base.Plank', 'upstream', 3);
    const plank = chain.nodes.find((n) => n.id === 'Base.Plank');
    assert.equal(plank.producedBy.length, 2); // SawPlank + AltPlank, not 3
    assert.deepEqual(plank.producedBy.sort(), ['AltPlank', 'SawPlank']);
  });

  test('conflict detection finds items produced by multiple recipes', async () => {
    const result = await analyzer.detectConflicts(50);
    assert.equal(result.totalRecipes, 3);
    const plankConflict = result.conflicts.find((c) => c.item === 'Base.Plank');
    assert.notEqual(plankConflict, undefined);
    assert.equal(plankConflict.recipes.length, 2);
    assert.deepEqual(
      plankConflict.recipes.map((r) => r.id).sort(),
      ['AltPlank', 'SawPlank']
    );
  });

  test('conflict detection honors the limit', async () => {
    const limited = await analyzer.detectConflicts(0);
    // LIMIT 0 returns no rows, but the query must not throw.
    assert.deepEqual(limited.conflicts, []);
    const one = await analyzer.detectConflicts(1);
    assert.equal(one.conflicts.length, 1);
  });
});

describe('RecipeAnalyzer.analyzeChain fixes (audit D1)', () => {
  // Minimal stub implementing the required database methods. The batch
  // graph-index methods are derived from the refsFrom/refsTo shape so the
  // walk index behaves exactly as with a real DatabaseManager (mirror rows
  // ← refsFrom, references edges ← refsTo).
  function createStubDb(data) {
    const mirrorRows = [];
    for (const [recipeId, refs] of Object.entries(data.refsFrom || {})) {
      for (const r of refs) {
        if (r.type !== 'item') continue;
        const role =
          r.context === 'ingredient'
            ? 'ingredient'
            : r.context === 'result' || r.context === 'output'
              ? 'output'
              : 'tool';
        mirrorRows.push({
          recipeId,
          ref: r.referenceId,
          refType: 'item',
          role,
          count: 1,
        });
      }
    }
    const refEdges = [];
    for (const [referenceId, refs] of Object.entries(data.refsTo || {})) {
      for (const r of refs) {
        if (r.type !== 'item') continue;
        refEdges.push({ itemId: r.itemId, referenceId, context: r.context });
      }
    }
    const graphItems = Object.entries(data.items || {}).map(([id, it]) => ({
      id,
      tags: it.tags ?? null,
    }));
    return {
      getItemById: async (id) => data.items[id] || null,
      getReferencesFrom: async (id) => data.refsFrom[id] || [],
      getReferencesToAny: async (id) => data.refsTo[id] || [],
      // buildNode queries the structured recipes mirror for recipe metadata.
      getRecipeById: async () => null,
      getRecipeIngredientIndex: async () => mirrorRows,
      getGraphItems: async () => graphItems,
      getReferenceEdges: async () => refEdges,
    };
  }

  test('handles cycles without duplicate nodes', async () => {
    // Cycle: R1 produces A, A is ingredient for R2, R2 produces B, B is ingredient for R1
    const items = {
      R1: { displayName: 'Recipe1', type: 'recipe' },
      R2: { displayName: 'Recipe2', type: 'recipe' },
      A: { displayName: 'Item A', type: 'item' },
      B: { displayName: 'Item B', type: 'item' },
    };
    const refsFrom = {
      R1: [{ type: 'item', context: 'result', referenceId: 'A' }],
      R2: [
        { type: 'item', context: 'ingredient', referenceId: 'A' },
        { type: 'item', context: 'result', referenceId: 'B' },
      ],
    };
    const refsTo = {
      A: [
        { type: 'item', context: 'result', itemId: 'R1' },
        { type: 'item', context: 'ingredient', itemId: 'R2' },
      ],
      B: [
        { type: 'item', context: 'result', itemId: 'R2' },
        { type: 'item', context: 'ingredient', itemId: 'R1' },
      ],
    };
    const db = createStubDb({ items, refsFrom, refsTo });
    const analyzer = new RecipeAnalyzer(db);

    const result = await analyzer.analyzeChain('R1', 'both', 10);
    const ids = result.nodes.map(n => n.id);
    const unique = new Set(ids);
    assert.strictEqual(ids.length, unique.size, 'duplicate node IDs found');
    assert.strictEqual(ids.length, 4, 'all four nodes should appear');
    assert.strictEqual(result.truncated, false);
  });

  test('sets truncated=false when maxDepth reached with no further edges', async () => {
    // Chain: X (item) -> R1 (recipe) -> Y (item), with Y's only edge back to visited R1
    const items = {
      X: { displayName: 'X', type: 'item' },
      R1: { displayName: 'R1', type: 'recipe' },
      Y: { displayName: 'Y', type: 'item' },
    };
    const refsFrom = {
      R1: [
        { type: 'item', context: 'ingredient', referenceId: 'X' },
        { type: 'item', context: 'result', referenceId: 'Y' },
      ],
    };
    const refsTo = {
      X: [{ type: 'item', context: 'ingredient', itemId: 'R1' }],
      Y: [{ type: 'item', context: 'result', itemId: 'R1' }],
    };
    const db = createStubDb({ items, refsFrom, refsTo });
    const analyzer = new RecipeAnalyzer(db);

    const result = await analyzer.analyzeChain('X', 'both', 2);
    assert.strictEqual(result.truncated, false);
    assert.deepStrictEqual(
      result.nodes.map(n => n.id),
      ['X', 'R1', 'Y']
    );
  });

  test('sets truncated=true when a node at maxDepth still has expandable edges', async () => {
    // R1 produces Y; R2 also produces Y and consumes W. Starting at R1 with
    // maxDepth=2: R2 is reached at depth 2 and its ingredient W would need
    // depth 3 — a genuinely cut edge (W is never enqueued by BFS).
    const items = {
      R1: { displayName: 'R1', type: 'recipe' },
      R2: { displayName: 'R2', type: 'recipe' },
      Y: { displayName: 'Y', type: 'item' },
      W: { displayName: 'W', type: 'item' },
    };
    const refsFrom = {
      R1: [{ type: 'item', context: 'result', referenceId: 'Y' }],
      R2: [
        { type: 'item', context: 'ingredient', referenceId: 'W' },
        { type: 'item', context: 'result', referenceId: 'Y' },
      ],
    };
    const refsTo = {
      Y: [
        { type: 'item', context: 'result', itemId: 'R1' },
        { type: 'item', context: 'result', itemId: 'R2' },
      ],
      W: [{ type: 'item', context: 'ingredient', itemId: 'R2' }],
    };
    const db = createStubDb({ items, refsFrom, refsTo });
    const analyzer = new RecipeAnalyzer(db);

    const result = await analyzer.analyzeChain('R1', 'both', 2);
    assert.strictEqual(result.truncated, true);
    assert.deepStrictEqual(
      result.nodes.map(n => n.id),
      ['R1', 'Y', 'R2']
    );
  });

  test('resolves the seed through its candidate spellings', async () => {
    // Items stored bare ('Flour2'); references use the qualified spelling.
    const items = {
      Flour2: { displayName: 'Flour', type: 'item' },
      R1: { displayName: 'Mill Flour', type: 'recipe' },
    };
    const refsFrom = {
      R1: [{ type: 'item', context: 'result', referenceId: 'Base.Flour2' }],
    };
    // Keyed by both spellings: the stub's getReferencesToAny mirrors the
    // tolerant IN-lookup (bare and qualified forms match the same rows).
    const refsTo = {
      Flour2: [{ type: 'item', context: 'result', itemId: 'R1' }],
      'Base.Flour2': [{ type: 'item', context: 'result', itemId: 'R1' }],
    };
    const db = createStubDb({ items, refsFrom, refsTo });
    const analyzer = new RecipeAnalyzer(db);

    // 'Base.Flour2' seed → canonical node id 'Flour2', resolved as an item.
    const chain = await analyzer.analyzeChain('Base.Flour2', 'upstream', 3);
    assert.equal(chain.seed, 'Flour2');
    assert.equal(chain.seedKind, 'item');
    assert.notEqual(chain.nodes.find((n) => n.id === 'R1'), undefined);
    const flour = chain.nodes.find((n) => n.id === 'Flour2');
    assert.deepEqual(flour.producedBy, ['R1']);

    // Bare spelling works too (exact match is always the first candidate).
    const chain2 = await analyzer.analyzeChain('Flour2', 'upstream', 3);
    assert.equal(chain2.seed, 'Flour2');
    assert.equal(chain2.seedKind, 'item');
  });

  test('stops at the node-count safety cap and flags truncation', async () => {
    const N = 700;
    const items = {
      R1: { displayName: 'Wide Recipe', type: 'recipe' },
    };
    const refsFrom = {
      R1: Array.from({ length: N }, (_, i) => ({
        type: 'item',
        context: 'ingredient',
        referenceId: 'Ing' + i,
      })),
    };
    const db = createStubDb({ items, refsFrom, refsTo: {} });
    const analyzer = new RecipeAnalyzer(db);

    const result = await analyzer.analyzeChain('R1', 'both', 10);
    assert.ok(result.nodes.length <= 500, 'node cap respected');
    assert.equal(result.truncated, true, 'cap hit reports truncation');
  });

  test('maintains behavior for a simple linear chain', async () => {
    const items = {
      I: { displayName: 'I', type: 'item' },
      R: { displayName: 'R', type: 'recipe' },
      O: { displayName: 'O', type: 'item' },
    };
    const refsFrom = {
      R: [
        { type: 'item', context: 'ingredient', referenceId: 'I' },
        { type: 'item', context: 'result', referenceId: 'O' },
      ],
    };
    const refsTo = {
      I: [{ type: 'item', context: 'ingredient', itemId: 'R' }],
      O: [{ type: 'item', context: 'result', itemId: 'R' }],
    };
    const db = createStubDb({ items, refsFrom, refsTo });
    const analyzer = new RecipeAnalyzer(db);

    const result = await analyzer.analyzeChain('I', 'both', 3);
    assert.deepStrictEqual(
      result.nodes.map(n => n.id),
      ['I', 'R', 'O']
    );
    assert.strictEqual(result.truncated, false);
  });
});

describe('RecipeAnalyzer roadmap: rich payloads, cycles, expand, path, severity', () => {
  let tmpDir;
  let db;
  let analyzer;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-roadmap-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();

    // Items with stats (weight/calories/hunger) + tags, plus recipes with
    // structured metadata (category/time/skill) and mirror rows (counts,
    // tools) — the shape parse_game_files produces via insertRecipes /
    // insertRecipeIngredients.
    await db.insertItems([
      { id: 'Base.Wheat', name: 'Wheat', displayName: 'Wheat', type: 'item', module: 'Base', properties: { Type: 'Food' }, rawContent: '', filePath: 'x.txt', category: 'Food', weight: 0.2, calories: 50, tags: ['Cereal'] },
      { id: 'Base.Flour', name: 'Flour', displayName: 'Flour', type: 'item', module: 'Base', properties: { Type: 'Food' }, rawContent: '', filePath: 'x.txt', category: 'Food', weight: 0.5, calories: 300, tags: ['Cereal'] },
      { id: 'Base.Dough', name: 'Dough', displayName: 'Dough', type: 'item', module: 'Base', properties: { Type: 'Food' }, rawContent: '', filePath: 'x.txt', category: 'Food', weight: 0.4, calories: 400, tags: ['Cereal'] },
      { id: 'Base.Bread', name: 'Bread', displayName: 'Bread', type: 'item', module: 'Base', properties: { Type: 'Food' }, rawContent: '', filePath: 'x.txt', category: 'Food', weight: 0.3, calories: 500, tags: ['Cereal'] },
      { id: 'Base.CookedBread', name: 'CookedBread', displayName: 'Cooked Bread', type: 'item', module: 'Base', properties: { Type: 'Food' }, rawContent: '', filePath: 'x.txt', category: 'Food', weight: 0.3, calories: 600, tags: ['Cereal'] },
      // Recipes (item rows with type='recipe')
      { id: 'MillFlour', name: 'MillFlour', displayName: 'Mill Flour', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'MakeDough', name: 'MakeDough', displayName: 'Make Dough', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'BakeBread', name: 'BakeBread', displayName: 'Bake Bread', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'SlowBread', name: 'SlowBread', displayName: 'Slow Bread', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
    ]);

    // Structured recipes mirror (metadata: category/time/skill).
    await db.insertRecipes([
      { id: 'MillFlour', name: 'MillFlour', module: 'Base', category: 'Cooking', time: 60, skill: 'Cooking', skillLevel: 3, result: 'Base.Flour', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'MakeDough', name: 'MakeDough', module: 'Base', category: 'Cooking', time: 30, result: 'Base.Dough', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'BakeBread', name: 'BakeBread', module: 'Base', category: 'Cooking', time: 120, skill: 'Cooking', skillLevel: 5, result: 'Base.Bread', resultCount: 2, properties: {}, filePath: 'x.txt' },
      { id: 'SlowBread', name: 'SlowBread', module: 'Base', category: 'Cooking', time: 300, result: 'Base.Bread', resultCount: 1, properties: {}, filePath: 'x.txt' },
    ]);

    // Mirror rows: ingredient/output counts + tool refs.
    await db.insertRecipeIngredients([
      { recipeId: 'MillFlour', ref: 'Base.Wheat', refType: 'item', count: 2, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'MillFlour', ref: 'Base.Flour', refType: 'item', count: 1, role: 'output', sortOrder: 1 },
      { recipeId: 'MillFlour', ref: 'base:mill', refType: 'tag', count: 1, role: 'tool', sortOrder: 2 },
      { recipeId: 'MakeDough', ref: 'Base.Flour', refType: 'item', count: 3, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'MakeDough', ref: 'Base.Water', refType: 'item', count: 1, role: 'ingredient', sortOrder: 1 },
      { recipeId: 'MakeDough', ref: 'Base.Dough', refType: 'item', count: 1, role: 'output', sortOrder: 2 },
      { recipeId: 'BakeBread', ref: 'Base.Dough', refType: 'item', count: 1, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'BakeBread', ref: 'Base.Bread', refType: 'item', count: 2, role: 'output', sortOrder: 1 },
      { recipeId: 'SlowBread', ref: 'Base.Dough', refType: 'item', count: 1, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'SlowBread', ref: 'Base.Bread', refType: 'item', count: 1, role: 'output', sortOrder: 1 },
      // A tag-output duplicate: both recipes output the same tag.
      { recipeId: 'BakeBread', ref: 'base:bakery', refType: 'tag', count: 1, role: 'output', sortOrder: 2 },
      { recipeId: 'SlowBread', ref: 'base:bakery', refType: 'tag', count: 1, role: 'output', sortOrder: 2 },
    ]);

    // References (the graph edges the walk follows).
    await db.addReference('MillFlour', 'Base.Wheat', 'item', 'ingredient');
    await db.addReference('MillFlour', 'Base.Flour', 'item', 'result');
    await db.addReference('MakeDough', 'Base.Flour', 'item', 'ingredient');
    await db.addReference('MakeDough', 'Base.Dough', 'item', 'output');
    await db.addReference('BakeBread', 'Base.Dough', 'item', 'ingredient');
    await db.addReference('BakeBread', 'Base.Bread', 'item', 'output');
    await db.addReference('SlowBread', 'Base.Dough', 'item', 'ingredient');
    await db.addReference('SlowBread', 'Base.Bread', 'item', 'output');

    analyzer = new RecipeAnalyzer(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('item nodes carry curated props (weight, calories, category, tags)', async () => {
    const chain = await analyzer.analyzeChain('Base.Bread', 'upstream', 3);
    const bread = chain.nodes.find((n) => n.id === 'Base.Bread');
    assert.equal(bread.props.weight, 0.3);
    assert.equal(bread.props.calories, 500);
    assert.equal(bread.props.category, 'Food');
    assert.deepEqual(bread.props.tags, ['Cereal']);
    assert.equal(bread.props.Type, 'Food');
  });

  test('recipe nodes carry meta (category, time, skill) and tools', async () => {
    const chain = await analyzer.analyzeChain('Base.Bread', 'upstream', 3);
    const bake = chain.nodes.find((n) => n.id === 'BakeBread');
    assert.equal(bake.meta.category, 'Cooking');
    assert.equal(bake.meta.time, 120);
    assert.equal(bake.meta.skill, 'Cooking');
    assert.equal(bake.meta.skillLevel, 5);
    assert.equal(bake.meta.tools, undefined); // BakeBread declares no tool
    // Counts from the mirror attach to ingredients/results.
    const mill = chain.nodes.find((n) => n.id === 'MillFlour');
    const wheat = mill.ingredients.find((i) => i.id === 'Base.Wheat');
    assert.equal(wheat.count, 2);
    assert.deepEqual(mill.meta.tools, [{ id: 'base:mill', count: 1 }]);
  });

  test('cycle detection flags recipes producing their own ingredients', async () => {
    // Build a self-loop: recipe R uses and produces the same item.
    await db.insertItem({
      id: 'LoopR', name: 'LoopR', displayName: 'Loop Recipe', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt',
    });
    await db.addReference('LoopR', 'Base.Flour', 'item', 'ingredient');
    await db.addReference('LoopR', 'Base.Flour', 'item', 'output');

    const chain = await analyzer.analyzeChain('LoopR', 'both', 3);
    const loop = chain.nodes.find((n) => n.id === 'LoopR');
    assert.equal(loop.cycle, true);
    assert.ok(chain.cycles.some((c) => c.recipe === 'LoopR' && c.item === 'Base.Flour'));
  });

  test('expandNode returns a one-hop delta around the requested node', async () => {
    const delta = await analyzer.analyzeChain('Base.Wheat', 'both', 3, {
      expandNode: 'Base.Dough',
    });
    assert.equal(delta.expandedNode, 'Base.Dough');
    // Seed identity is preserved for client-side merge.
    assert.equal(delta.seed, 'Base.Wheat');
    // The delta is the one-hop neighborhood: Dough + its two producers.
    const ids = delta.nodes.map((n) => n.id);
    assert.ok(ids.includes('Base.Dough'));
    assert.ok(ids.includes('MakeDough'));
    assert.ok(ids.includes('BakeBread'));
    assert.ok(ids.includes('SlowBread'));
    // Two hops away: Wheat must NOT appear in the delta.
    assert.ok(!ids.includes('Base.Wheat'));
  });

  test('target mode returns the shortest crafting path seed → target', async () => {
    const chain = await analyzer.analyzeChain('Base.Wheat', 'both', 10, {
      target: 'Base.Bread',
    });
    assert.equal(chain.pathFound, true);
    // Two equal-length paths exist (BakeBread or SlowBread) — assert shape,
    // not the exact route: it must alternate item → recipe → item.
    const path = chain.path;
    assert.equal(path[0], 'Base.Wheat');
    assert.equal(path[path.length - 1], 'Base.Bread');
    assert.equal(path.length, 7); // Wheat → R → Flour → R → Dough → R → Bread
    assert.ok(path.includes('Base.Flour'));
    assert.ok(path.includes('Base.Dough'));
    // Path-mode nodes are exactly the path nodes.
    assert.deepEqual(chain.nodes.map((n) => n.id), path);
  });

  test('target mode reports pathFound=false when unreachable', async () => {
    const chain = await analyzer.analyzeChain('Base.Wheat', 'both', 5, {
      target: 'Base.CookedBread',
    });
    assert.equal(chain.pathFound, false);
    assert.deepEqual(chain.path, []);
  });

  test('conflict severity: exact duplicates high, tag multi-path low', async () => {
    const result = await analyzer.detectConflicts(50);
    // Base.Bread is produced by BakeBread + SlowBread (exact) → high.
    const exact = result.conflicts.find((c) => c.item === 'Base.Bread');
    assert.equal(exact.severity, 'high');
    assert.equal(exact.kind, 'exact');
    assert.deepEqual(exact.recipes.map((r) => r.id).sort(), ['BakeBread', 'SlowBread']);
    // base:bakery tag output shared by both → low severity.
    const tag = result.conflicts.find((c) => c.item === 'base:bakery');
    assert.equal(tag.severity, 'low');
    assert.equal(tag.kind, 'tag');
  });

  test('conflict severity: mapper virtual outputs are low (no items row)', async () => {
    // Two recipes output the same mapper:X virtual ref; no items row exists
    // for it — the game resolves mappers per recipe, so severity must be low
    // (regression from real-game data: mapper:metalType had 20 producers).
    // Recipe item rows first (references.item_id FK), then the structured
    // mirror rows, then the references (as the real parser does).
    await db.insertItems([
      { id: 'MapOutA', name: 'MapOutA', displayName: 'MapOutA', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'MapOutB', name: 'MapOutB', displayName: 'MapOutB', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
    ]);
    await db.insertRecipes([
      { id: 'MapOutA', name: 'MapOutA', module: 'Base', category: 'Cooking', result: 'mapper:bakeryMapper', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'MapOutB', name: 'MapOutB', module: 'Base', category: 'Cooking', result: 'mapper:bakeryMapper', resultCount: 1, properties: {}, filePath: 'x.txt' },
    ]);
    await db.insertRecipeIngredients([
      { recipeId: 'MapOutA', ref: 'mapper:bakeryMapper', refType: 'mapper', count: 1, role: 'output', sortOrder: 0 },
      { recipeId: 'MapOutB', ref: 'mapper:bakeryMapper', refType: 'mapper', count: 1, role: 'output', sortOrder: 0 },
    ]);
    // The conflict query reads the references table (mirror rows alone do not
    // drive findDuplicateRecipeOutputs) — the parser writes mapper outputs
    // there with reference_type 'item' + context 'output'.
    await db.addReference('MapOutA', 'mapper:bakeryMapper', 'item', 'output');
    await db.addReference('MapOutB', 'mapper:bakeryMapper', 'item', 'output');

    const result = await analyzer.detectConflicts(50);
    const m = result.conflicts.find((c) => c.item === 'mapper:bakeryMapper');
    assert.notEqual(m, undefined);
    assert.equal(m.severity, 'low');
    assert.equal(m.kind, 'mapper');
  });
});

describe('RecipeAnalyzer chain-graph consumers (recipe_ingredients mirror fix)', () => {
  let tmpDir;
  let db;
  let analyzer;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-consumers-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();

    // Real-game shape: items stored BARE ('Plank'), mirror refs QUALIFIED
    // ('Base.Plank'), and the references table EMPTY for these edges (B42
    // bracket/tag inputs never reach it — the bug that hid consumers).
    await db.insertItems([
      { id: 'Plank', name: 'Plank', displayName: 'Plank', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Wheat', name: 'Wheat', displayName: 'Wheat', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'Flour2', name: 'Flour2', displayName: 'Flour', type: 'item', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt', tags: ['base:flour'] },
      { id: 'CarvePlank', name: 'CarvePlank', displayName: 'Carve Plank', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'MakeBox', name: 'MakeBox', displayName: 'Make Box', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'MakeFlour', name: 'MakeFlour', displayName: 'Mill Flour', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
      { id: 'MakeBreadDough', name: 'MakeBreadDough', displayName: 'Make Bread Dough', type: 'recipe', module: 'Base', properties: {}, rawContent: '', filePath: 'x.txt' },
    ]);
    await db.insertRecipes([
      { id: 'CarvePlank', name: 'CarvePlank', module: 'Base', result: 'Base.Plank', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'MakeBox', name: 'MakeBox', module: 'Base', result: 'Base.Box', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'MakeFlour', name: 'MakeFlour', module: 'Base', result: 'Base.Flour2', resultCount: 1, properties: {}, filePath: 'x.txt' },
      { id: 'MakeBreadDough', name: 'MakeBreadDough', module: 'Base', result: 'Base.BreadDough', resultCount: 1, properties: {}, filePath: 'x.txt' },
    ]);
    // Mirror rows ONLY — no references rows at all (the bug being fixed).
    await db.insertRecipeIngredients([
      { recipeId: 'CarvePlank', ref: 'Base.Plank', refType: 'item', count: 1, role: 'output', sortOrder: 0 },
      { recipeId: 'MakeBox', ref: 'Base.Plank', refType: 'item', count: 3, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'MakeFlour', ref: 'Base.Wheat', refType: 'item', count: 2, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'MakeFlour', ref: 'Base.Flour2', refType: 'item', count: 1, role: 'output', sortOrder: 1 },
      { recipeId: 'MakeBreadDough', ref: 'base:flour', refType: 'tag', count: 1, role: 'ingredient', sortOrder: 0 },
      { recipeId: 'MakeBreadDough', ref: 'Base.BreadDough', refType: 'item', count: 1, role: 'output', sortOrder: 1 },
    ]);

    analyzer = new RecipeAnalyzer(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('items consumed only via mirror bracket rows get their consumers', async () => {
    const chain = await analyzer.analyzeChain('Plank', 'both', 2);
    const plank = chain.nodes.find((n) => n.id === 'Plank');
    assert.ok(plank.producedBy.includes('CarvePlank'));
    assert.ok(plank.consumedBy.includes('MakeBox'));
    // Recipe payloads come from the mirror too (bracket alternatives).
    const box = chain.nodes.find((n) => n.id === 'MakeBox');
    const ing = box.ingredients.find((i) => i.id === 'Plank');
    assert.notEqual(ing, undefined);
    assert.equal(ing.count, 3);
    assert.equal(ing.tag, undefined);
  });

  test('items consumed via a tag input get their consumers (tag bridge)', async () => {
    const chain = await analyzer.analyzeChain('Flour2', 'both', 2);
    const flour = chain.nodes.find((n) => n.id === 'Flour2');
    assert.ok(flour.producedBy.includes('MakeFlour'));
    assert.ok(flour.consumedBy.includes('MakeBreadDough'));
    const dough = chain.nodes.find((n) => n.id === 'MakeBreadDough');
    const resolved = dough.ingredients.find((i) => i.id === 'Flour2');
    assert.notEqual(resolved, undefined);
    assert.equal(resolved.count, 1);
    assert.equal(resolved.tag, true);
  });

  test('upstream walk reaches mirror-only producers through tag-resolved ingredients', async () => {
    const chain = await analyzer.analyzeChain('MakeBreadDough', 'both', 3);
    const ids = chain.nodes.map((n) => n.id);
    assert.ok(ids.includes('Flour2'));
    assert.ok(ids.includes('MakeFlour'));
    assert.ok(ids.includes('Wheat'));
  });
});
