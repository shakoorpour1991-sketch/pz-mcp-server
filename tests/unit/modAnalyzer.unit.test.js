/**
 * Unit tests for ModAnalyzer audit fixes (A1-A5).
 * Tests the Lua-analysis paths that do not require a real PZ game DB.
 */
import { describe, test, before, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { ModAnalyzer } from '../../dist/analyzers/ModAnalyzer.js';
import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../../dist/parsers/ProjectZomboidParser.js';

describe('ModAnalyzer', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  before(async () => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'modanalyzer-test-'));
    fs.mkdirSync(path.join(tempDir, 'media', 'lua'), { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'mod.info'), 'name=TestMod\n');

    const dbPath = path.join(tempDir, 'test.db');
    dbManager = new DatabaseManager(dbPath);
    await dbManager.initialize();
    const parser = new ProjectZomboidParser(dbManager);
    analyzer = new ModAnalyzer(dbManager, parser);
  });

  beforeEach(() => {
    // Remove all .lua files from the lua dir so each test starts fresh
    const luaDir = path.join(tempDir, 'media', 'lua');
    for (const f of fs.readdirSync(luaDir)) {
      if (f.endsWith('.lua')) fs.unlinkSync(path.join(luaDir, f));
    }
  });

  after(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  // A1: local vars should never trigger GLOBAL_VAR; undeclared assignments should
  test('A1: local x = 1 produces no global-leak warning; y = 2 does', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_a1.lua');

    fs.writeFileSync(luaPath, 'local x = 1\n');
    const r1 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const leaks1 = r1.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks1.length, 0);

    fs.writeFileSync(luaPath, 'y = 2\n');
    const r2 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const leaks2 = r2.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks2.length, 1);
    assert.ok(leaks2[0].message.includes('y'));
  });

  // A2: UNUSED_REQUIRE branch removed — no such warnings can fire
  test('A2: UNUSED_REQUIRE check removed — no UNUSED_REQUIRE warnings', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_a2.lua');
    fs.writeFileSync(luaPath, 'local mod = require("someModule")\n');
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const unused = r.issues.filter((i) => i.code === 'UNUSED_REQUIRE');
    assert.equal(unused.length, 0);
  });

  // A3: multi-line balanced expression should not warn; genuinely unbalanced should
  test('A3: multi-line balanced parens no warning; genuinely unbalanced does warn', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_a3.lua');

    fs.writeFileSync(luaPath, 'foo(\n  arg1,\n  arg2\n)\n');
    const r1 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const imb1 = r1.issues.filter(
      (i) => i.code === 'LUA_SYNTAX_WARNING' && i.message.includes('Unbalanced'),
    );
    assert.equal(imb1.length, 0);

    fs.writeFileSync(luaPath, 'foo(\n  arg1\n');
    const r2 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const imb2 = r2.issues.filter(
      (i) => i.code === 'LUA_SYNTAX_WARNING' && i.message.includes('Unbalanced'),
    );
    assert.equal(imb2.length, 1);
  });

  // A5: OnPreMapLoad.Add still triggers the best-practice info issue
  test('A5: OnPreMapLoad.Add detection triggers LUA_BEST_PRACTICE info', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_a5.lua');
    fs.writeFileSync(luaPath, 'Events.OnPreMapLoad.Add(function() end)\n');
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const info = r.issues.filter(
      (i) => i.code === 'LUA_BEST_PRACTICE',
    );
    assert.equal(info.length, 1);
    // The same Lua snippet's function() end is balanced under the audit M2
    // block-keyword counting (function opens, end closes) — no SEMANTIC_ERROR.
  });

  // L2: comments must not skew balance/global-variable checks
  test('L2: unbalanced parens inside a block comment do not warn; local in comment does not leak', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_l2.lua');
    fs.writeFileSync(
      luaPath,
      '--[[ this comment has ( unbalanced\nand another ( bracket ]]\nlocal ok = 1\n'
    );
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const unbalanced = r.issues.filter(
      (i) => i.code === 'LUA_SYNTAX_WARNING' && i.message.includes('Unbalanced')
    );
    assert.equal(unbalanced.length, 0);
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks.length, 0);
  });

  test('L2: assignments inside line comments do not trigger GLOBAL_VAR', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_l2b.lua');
    fs.writeFileSync(luaPath, '-- hidden = 5\nlocal visible = 1\n');
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks.length, 0);
  });

  test('L2: long-bracket comments --[==[ ]==] are stripped before counting', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_l2c.lua');
    fs.writeFileSync(
      luaPath,
      '--[==[ code-like text ( with parens and if end\nif fake then end\n]==]\nlocal ok = 1\n'
    );
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const unbalanced = r.issues.filter(
      (i) => i.code === 'LUA_SYNTAX_WARNING' && i.message.includes('Unbalanced')
    );
    assert.equal(unbalanced.length, 0);
    const semantic = r.issues.filter((i) => i.code === 'SEMANTIC_ERROR');
    assert.equal(semantic.length, 0);
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks.length, 0);
  });

  // Audit M2: block-keyword counting must account for function/for/while
  test('M2: realistic Lua with functions/loops/conditionals produces no SEMANTIC_ERROR', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_m2a.lua');
    fs.writeFileSync(
      luaPath,
      'local function onEvent()\n  for i = 1, 10 do\n    if i % 2 == 0 then\n      print(i)\n    end\n  end\nend\nonEvent()'
    );
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const semantic = r.issues.filter((i) => i.code === 'SEMANTIC_ERROR');
    assert.equal(semantic.length, 0);
  });

  test('M2: truly unbalanced if still warns', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_m2b.lua');
    fs.writeFileSync(luaPath, "if hasWater then\n  print('ok')\n");
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const semantic = r.issues.filter((i) => i.code === 'SEMANTIC_ERROR');
    assert.equal(semantic.length, 1);
  });

  test('M2: function() end alone is balanced (no spurious SEMANTIC_ERROR)', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_m2c.lua');
    fs.writeFileSync(luaPath, 'Events.OnPreMapLoad.Add(function() end)');
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const semantic = r.issues.filter((i) => i.code === 'SEMANTIC_ERROR');
    assert.equal(semantic.length, 0);
  });
});

// ===========================================================================
// H5: balance + compatibility analysis against a seeded vanilla baseline
// ===========================================================================

describe('ModAnalyzer balance analysis (seeded vanilla baseline)', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  before(async () => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'modanalyzer-bal-'));
    fs.mkdirSync(path.join(tempDir, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'mod.info'), 'name=BalanceMod\nid=BalanceMod\n');
    fs.writeFileSync(
      path.join(tempDir, 'media', 'scripts', 'balance.txt'),
      'item SuperBlade\n{\n\tType = Weapon,\n\tDisplayName = Super Blade,\n\tMaxDamage = 100,\n}\n'
    );

    dbManager = new DatabaseManager(path.join(tempDir, 'bal.db'));
    await dbManager.initialize();
    // Vanilla baseline: weapons with MaxDamage 5 and 10 (avg 7.5). SuperBlade's
    // 100 is > 2x the average, so it must be flagged as an outlier.
    await dbManager.insertItems([
      {
        id: 'VanillaKnife', name: 'VanillaKnife', displayName: 'Vanilla Knife',
        type: 'item', module: 'Base', category: 'Weapon',
        properties: { Type: 'Weapon', MaxDamage: 5 },
        rawContent: 'item VanillaKnife {}', filePath: 'vanilla.txt',
      },
      {
        id: 'VanillaAxe', name: 'VanillaAxe', displayName: 'Vanilla Axe',
        type: 'item', module: 'Base', category: 'Weapon',
        properties: { Type: 'Weapon', MaxDamage: 10 },
        rawContent: 'item VanillaAxe {}', filePath: 'vanilla.txt',
      },
    ]);

    const parser = new ProjectZomboidParser(dbManager);
    analyzer = new ModAnalyzer(dbManager, parser);
  });

  after(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('flags mod items far above the vanilla average as outliers and drops the score', async () => {
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: true,
      checkCompatibility: false,
    });
    assert.equal(r.balance.itemCount, 1);
    const outlier = r.balance.outliers.find((o) => o.item === 'SuperBlade');
    assert.notEqual(outlier, undefined);
    assert.equal(outlier.property, 'MaxDamage');
    assert.equal(outlier.value, 100);
    assert.ok(r.balance.score < 100);
  });

  test('in-balance mod items produce no outliers', async () => {
    fs.writeFileSync(
      path.join(tempDir, 'media', 'scripts', 'balanced.txt'),
      'item MildDagger\n{\n\tType = Weapon,\n\tDisplayName = Mild Dagger,\n\tMaxDamage = 6,\n}\n'
    );
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: true,
      checkCompatibility: false,
    });
    assert.equal(r.balance.itemCount, 2);
    const mild = r.balance.outliers.find((o) => o.item === 'MildDagger');
    assert.equal(mild, undefined);
  });
});

describe('ModAnalyzer compatibility analysis (seeded)', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  before(async () => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'modanalyzer-compat-'));
    fs.mkdirSync(path.join(tempDir, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'mod.info'), [
      'name=CompatMod',
      'id=CompatMod',
      'require=SomeMissingDependency',
      'versionMax=41.0',
    ].join('\n'));
    fs.writeFileSync(
      path.join(tempDir, 'media', 'scripts', 'items.txt'),
      'item CompatAxe\n{\n\tType = Weapon,\n\tDisplayName = Compat Axe,\n}\n'
    );

    dbManager = new DatabaseManager(path.join(tempDir, 'compat.db'));
    await dbManager.initialize();
    const parser = new ProjectZomboidParser(dbManager);
    analyzer = new ModAnalyzer(dbManager, parser);
  });

  after(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('flags missing required dependencies and version-max incompatibility', async () => {
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: true,
    });
    assert.ok(r.compatibility.missingDependencies.includes('SomeMissingDependency'));
    // versionMax=41.0 vs default PZ_GAME_VERSION 42.20 → incompatible
    assert.equal(r.compatibility.gameVersionCompatibility.compatible, false);
    assert.equal(r.compatibility.gameVersionCompatibility.maxVersion, '41.0');
  });

  // Audit M4: require lists resolve against the mods table (mod IDs)
  test('M4: require entries resolve against the mods table (mod IDs), not items', async () => {
    await dbManager.upsertMod({ id: 'InstalledDep', name: 'InstalledDep' });
    fs.writeFileSync(path.join(tempDir, 'mod.info'), 'name=CompatMod\nid=CompatMod\nrequire=InstalledDep\n');
    const r = await analyzer.analyzeMod(tempDir, { checkCompatibility: true });
    assert.ok(!r.compatibility.missingDependencies.includes('InstalledDep'));
    assert.equal(r.compatibility.missingDependencies.length, 0);
  });

  // Audit M4: versionMin was recorded but never enforced
  test('M4: versionMin below current game version flags incompatibility', async () => {
    fs.writeFileSync(path.join(tempDir, 'mod.info'), 'name=CompatMod\nid=CompatMod\nversionMin=43.0\n');
    const r = await analyzer.analyzeMod(tempDir, { checkCompatibility: true });
    assert.equal(r.compatibility.gameVersionCompatibility.compatible, false);
    assert.equal(r.compatibility.gameVersionCompatibility.minVersion, '43.0');
  });
});

// Audit D5: string-aware comment stripping, deprecated-in-string, multi-name locals
describe('ModAnalyzer Lua precision (audit D5)', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  before(async () => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'modanalyzer-d5-'));
    fs.mkdirSync(path.join(tempDir, 'media', 'lua'), { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'mod.info'), 'name=TestMod\n');

    dbManager = new DatabaseManager(path.join(tempDir, 'd5.db'));
    await dbManager.initialize();
    const parser = new ProjectZomboidParser(dbManager);
    analyzer = new ModAnalyzer(dbManager, parser);
  });

  after(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  async function analyze(lua) {
    fs.writeFileSync(path.join(tempDir, 'media', 'lua', 'd5.lua'), lua);
    return analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
  }

  test('D5: -- inside a string is not treated as a comment', async () => {
    const r = await analyze('local msg = "say -- not a comment"\nlocal x = 1\n');
    assert.equal(r.issues.filter((i) => i.code === 'GLOBAL_VAR').length, 0);
    assert.equal(r.issues.filter((i) => i.code === 'SEMANTIC_ERROR').length, 0);
  });

  test('D5: deprecated API inside a string is not flagged; real call is', async () => {
    const r = await analyze(
      'local s = "getLocalPlayer()"\nlocal p = getLocalPlayer()\n'
    );
    const dep = r.issues.filter((i) => i.code === 'DEPRECATED_API');
    assert.equal(dep.length, 1);
    assert.equal(dep[0].line, 2);
  });

  test('D5: multi-name local declarations register all names', async () => {
    const r = await analyze('local a, b = 1, 2\nb = 3\nc = 4\n');
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    assert.equal(leaks.length, 1);
    assert.equal(leaks[0].message.includes('c'), true);
  });
});
