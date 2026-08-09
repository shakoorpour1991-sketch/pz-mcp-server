/**
 * Shared fixture corpus tests (audit P1: real-world PZ fixtures).
 *
 * Every well-formed fixture in tests/fixtures/scripts is copied into a temp
 * mod layout (mod.info + media/scripts) and parsed with the real
 * ProjectZomboidParser; the per-category counts must match. The malformed
 * fixture must not crash the parser. The example_mod pack exercises the
 * dynamic mod-layout discovery used for workshop analysis.
 *
 * Runs against the compiled dist/ build (npm test builds first).
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';

import { DatabaseManager } from '../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../dist/parsers/ProjectZomboidParser.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.join(__dirname, 'fixtures');
const SCRIPT_FIXTURES = path.join(FIXTURES, 'scripts');

const MOD_INFO = ['name=Fixture Mod', 'id=Fixture', 'description=Corpus fixture'].join('\n');

/** Expected parse counts per fixture file. */
const EXPECTED = {
  'items.txt': { itemCount: 2 },
  'recipes.txt': { recipeCount: 1 },
  'b42_craftrecipes.txt': { recipeCount: 1 },
  'evolvedrecipes.txt': { evolvedRecipeCount: 1 },
  'fixing.txt': { fixingCount: 1 },
  'sounds.txt': { soundCount: 1 },
  'vehicles.txt': { vehicleCount: 1 },
  'multiline_nested.txt': { itemCount: 1 }, // model block must not leak as an item
};

/** Build a temp mod dir containing a single fixture script, return its path. */
function makeTempMod(fixtureFile) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-fixture-'));
  fs.mkdirSync(path.join(dir, 'media', 'scripts'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'mod.info'), MOD_INFO);
  fs.writeFileSync(
    path.join(dir, 'media', 'scripts', fixtureFile),
    fs.readFileSync(path.join(SCRIPT_FIXTURES, fixtureFile), 'utf-8'),
  );
  return dir;
}

describe('shared fixture corpus', () => {
  let tmpDir;
  let db;
  let parser;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-fixtures-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'fixtures.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  for (const [file, expected] of Object.entries(EXPECTED)) {
    test(`parses ${file} into the expected block counts`, async () => {
      const modDir = makeTempMod(file);
      try {
        const results = await parser.parseModDirectory(modDir);
        for (const [key, value] of Object.entries(expected)) {
          assert.equal(results[key], value, `${file}: ${key}`);
        }
        assert.equal(results.errors.length, 0, `${file}: unexpected parse errors: ${JSON.stringify(results.errors)}`);
      } finally {
        fs.rmSync(modDir, { recursive: true, force: true });
      }
    });
  }

  test('malformed.txt does not crash the parser (errors tolerated)', async () => {
    const modDir = makeTempMod('malformed.txt');
    try {
      const results = await parser.parseModDirectory(modDir);
      assert.equal(typeof results, 'object');
      assert.ok(Array.isArray(results.errors));
    } finally {
      fs.rmSync(modDir, { recursive: true, force: true });
    }
  });

  test('example_mod pack parses under dynamic layout discovery', async () => {
    const pack = path.join(FIXTURES, 'mods', 'example_mod');
    const results = await parser.parseModDirectory(pack);
    // 1 item + 1 recipe (itemCount counts only item blocks).
    assert.equal(results.itemCount, 1);
    assert.equal(results.recipeCount, 1);
    assert.equal(results.errors.length, 0, JSON.stringify(results.errors));
  });
});
