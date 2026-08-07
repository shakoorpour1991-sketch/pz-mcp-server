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
