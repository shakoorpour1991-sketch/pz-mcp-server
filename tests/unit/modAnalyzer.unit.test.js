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
});
