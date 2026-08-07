/**
 * Unit tests for ModAnalyzer audit fixes (A1-A5).
 * Tests the Lua-analysis paths that do not require a real PZ game DB.
 */
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

  beforeAll(async () => {
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

  afterAll(() => {
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
    expect(leaks1).toHaveLength(0);

    fs.writeFileSync(luaPath, 'y = 2\n');
    const r2 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const leaks2 = r2.issues.filter((i) => i.code === 'GLOBAL_VAR');
    expect(leaks2).toHaveLength(1);
    expect(leaks2[0].message).toContain('y');
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
    expect(unused).toHaveLength(0);
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
    expect(imb1).toHaveLength(0);

    fs.writeFileSync(luaPath, 'foo(\n  arg1\n');
    const r2 = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const imb2 = r2.issues.filter(
      (i) => i.code === 'LUA_SYNTAX_WARNING' && i.message.includes('Unbalanced'),
    );
    expect(imb2).toHaveLength(1);
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
    expect(info).toHaveLength(1);
    // The same Lua snippet also has an unmatched 'end' (no 'if'), which is a
    // separate SEMANTIC_ERROR — that is expected and out of scope for A5.
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
    expect(unbalanced).toHaveLength(0);
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    expect(leaks).toHaveLength(0);
  });

  test('L2: assignments inside line comments do not trigger GLOBAL_VAR', async () => {
    const luaPath = path.join(tempDir, 'media', 'lua', 'test_l2b.lua');
    fs.writeFileSync(luaPath, '-- hidden = 5\nlocal visible = 1\n');
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: false,
    });
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    expect(leaks).toHaveLength(0);
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
    expect(unbalanced).toHaveLength(0);
    const semantic = r.issues.filter((i) => i.code === 'SEMANTIC_ERROR');
    expect(semantic).toHaveLength(0);
    const leaks = r.issues.filter((i) => i.code === 'GLOBAL_VAR');
    expect(leaks).toHaveLength(0);
  });
});

// ===========================================================================
// H5: balance + compatibility analysis against a seeded vanilla baseline
// ===========================================================================

describe('ModAnalyzer balance analysis (seeded vanilla baseline)', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  beforeAll(async () => {
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

  afterAll(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('flags mod items far above the vanilla average as outliers and drops the score', async () => {
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: true,
      checkCompatibility: false,
    });
    expect(r.balance.itemCount).toBe(1);
    const outlier = r.balance.outliers.find((o) => o.item === 'SuperBlade');
    expect(outlier).toBeDefined();
    expect(outlier.property).toBe('MaxDamage');
    expect(outlier.value).toBe(100);
    expect(r.balance.score).toBeLessThan(100);
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
    expect(r.balance.itemCount).toBe(2);
    const mild = r.balance.outliers.find((o) => o.item === 'MildDagger');
    expect(mild).toBeUndefined();
  });
});

describe('ModAnalyzer compatibility analysis (seeded)', () => {
  let tempDir;
  let dbManager;
  let analyzer;

  beforeAll(async () => {
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

  afterAll(() => {
    dbManager.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('flags missing required dependencies and version-max incompatibility', async () => {
    const r = await analyzer.analyzeMod(tempDir, {
      checkBalance: false,
      checkCompatibility: true,
    });
    expect(r.compatibility.missingDependencies).toContain('SomeMissingDependency');
    // versionMax=41.0 vs default PZ_GAME_VERSION 42.20 → incompatible
    expect(r.compatibility.gameVersionCompatibility.compatible).toBe(false);
    expect(r.compatibility.gameVersionCompatibility.maxVersion).toBe('41.0');
  });
});
