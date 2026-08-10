/**
 * Unit tests for the Mod Workspace / Project Manager:
 *  - WorkspaceManager: scaffold, file ops, atomic writes, patch safety,
 *    destructive-op guards, and path-traversal / symlink-escape security.
 *  - workspace tool helpers (inspectProject) against a real temp DB +
 *    parser + analyzer, including the checked-in valid B42 fixture.
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { ErrorCode } from '@modelcontextprotocol/sdk/types.js';

import {
  WorkspaceManager,
  WorkspaceError,
} from '../../dist/workspace/WorkspaceManager.js';
import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../../dist/parsers/ProjectZomboidParser.js';
import { ModAnalyzer } from '../../dist/analyzers/ModAnalyzer.js';
import {
  inspectProject,
  workspaceTools,
} from '../../dist/tools/workspace.js';

const B42_FIXTURE = path.join(process.cwd(), 'tests', 'fixtures', 'mods', 'b42_mod');

describe('WorkspaceManager', () => {
  let root;
  let ws;

  before(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-'));
    ws = new WorkspaceManager([root]);
  });

  after(() => {
    fs.rmSync(root, { recursive: true, force: true });
  });

  // -------------------------------------------------------------------------
  // createProject / scaffolding
  // -------------------------------------------------------------------------

  test('createProject scaffolds a minimal B42 mod', async () => {
    const r = await ws.createProject('MinMod', {
      modId: 'min_mod',
      modName: 'Min Mod',
      author: 'A',
      description: 'D',
      version: '1.2',
      template: 'minimal',
    });
    assert.equal(r.dryRun, false);
    assert.equal(r.project, 'MinMod');
    for (const f of ['mod.info', 'workshop.txt', 'poster.png', 'common/media/.gitkeep', '42/media/scripts/.gitkeep']) {
      assert.ok(fs.existsSync(path.join(root, 'MinMod', f)), `missing ${f}`);
    }
    const info = fs.readFileSync(path.join(root, 'MinMod', 'mod.info'), 'utf8');
    assert.match(info, /^name=Min Mod$/m);
    assert.match(info, /^id=min_mod$/m);
    assert.match(info, /^version=1.2$/m);
    assert.match(info, /^poster=poster.png$/m);
    assert.ok(!fs.existsSync(path.join(root, 'MinMod', '42', 'media', 'lua')), 'minimal must not scaffold lua');
  });

  test('createProject full template includes lua/sound/textures/maps + server script', async () => {
    await ws.createProject('FullMod', { modId: 'full_mod', template: 'full' });
    for (const f of ['42/media/lua/server/full_mod_init.lua', '42/media/sound/.gitkeep', '42/media/textures/.gitkeep', '42/media/maps/.gitkeep']) {
      assert.ok(fs.existsSync(path.join(root, 'FullMod', f)), `missing ${f}`);
    }
    const lua = fs.readFileSync(path.join(root, 'FullMod', '42', 'media', 'lua', 'server', 'full_mod_init.lua'), 'utf8');
    assert.match(lua, /Events\.OnGameStart\.Add/);
  });

  test('createProject writes require= line from requires', async () => {
    await ws.createProject('DepMod', { modId: 'dep_mod', requires: ['base', 'other_mod'] });
    const info = fs.readFileSync(path.join(root, 'DepMod', 'mod.info'), 'utf8');
    assert.match(info, /^require=base,other_mod$/m);
  });

  test('createProject refuses an existing project unless overwrite', async () => {
    await assert.rejects(
      ws.createProject('MinMod', { modId: 'x' }),
      (e) => e instanceof WorkspaceError && e.code === 'ALREADY_EXISTS',
    );
  });

  test('createProject overwrite only adds missing files, never edits existing ones', async () => {
    const modInfoPath = path.join(root, 'MinMod', 'mod.info');
    const before = fs.readFileSync(modInfoPath, 'utf8');
    await ws.createProject('MinMod', { modId: 'min_mod', overwrite: true, template: 'full' });
    assert.equal(fs.readFileSync(modInfoPath, 'utf8'), before, 'existing mod.info must be untouched');
    assert.ok(fs.existsSync(path.join(root, 'MinMod', '42', 'media', 'lua', 'server', 'min_mod_init.lua')));
  });

  test('createProject dryRun writes nothing', async () => {
    const r = await ws.createProject('DryMod', { modId: 'dry_mod', dryRun: true });
    assert.equal(r.dryRun, true);
    assert.ok(r.created.length > 0);
    assert.ok(!fs.existsSync(path.join(root, 'DryMod')));
  });

  test('createProject rejects invalid names and buildVersion', async () => {
    await assert.rejects(ws.createProject('..', { modId: 'x' }), (e) => e.code === 'PATH_ESCAPE');
    await assert.rejects(ws.createProject('a/b', { modId: 'x' }), (e) => e.code === 'INVALID_PATH');
    await assert.rejects(ws.createProject('ok', { modId: 'x', buildVersion: 'latest' }), (e) => e.code === 'INVALID_PATH');
  });

  test('createProject writes a binary-safe poster.png', () => {
    const png = fs.readFileSync(path.join(root, 'MinMod', 'poster.png'));
    assert.deepEqual(png.subarray(0, 8), Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), 'PNG magic bytes');
  });

  // -------------------------------------------------------------------------
  // write / read / patch / delete / rename
  // -------------------------------------------------------------------------

  test('writeFile/readFile roundtrip with auto-created nested dirs', async () => {
    await ws.writeFile('P/42/media/lua/client/ui.lua', 'print("hi")');
    const r = await ws.readFile('P/42/media/lua/client/ui.lua');
    assert.equal(r.content, 'print("hi")');
    assert.ok(r.size > 0);
  });

  test('writeFile refuses silent overwrite; overwrite flag replaces', async () => {
    await ws.writeFile('P/a.txt', 'one');
    await assert.rejects(ws.writeFile('P/a.txt', 'two'), (e) => e.code === 'ALREADY_EXISTS');
    await ws.writeFile('P/a.txt', 'two', { overwrite: true });
    assert.equal((await ws.readFile('P/a.txt')).content, 'two');
  });

  test('writeFile dryRun creates nothing', async () => {
    const r = await ws.writeFile('P/dry.txt', 'x', { dryRun: true });
    assert.equal(r.dryRun, true);
    assert.ok(!fs.existsSync(path.join(root, 'P', 'dry.txt')));
  });

  test('all writes are atomic — no temp files left behind', async () => {
    const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
    const leftovers = walk(root).filter((f) => f.includes('.tmp'));
    assert.deepEqual(leftovers, []);
  });

  test('patchFile applies all matches; no-match and count mismatch abort without writing', async () => {
    await ws.writeFile('P/patch.txt', 'a\nb\nc\nb\n');
    const r = await ws.patchFile('P/patch.txt', [
      { oldText: 'b', newText: 'B' },
      { oldText: 'c', newText: 'C', description: 'caps c' },
    ]);
    assert.equal(r.changed, true);
    assert.equal(r.changes.length, 3);
    assert.equal((await ws.readFile('P/patch.txt')).content, 'a\nB\nC\nB\n');

    await assert.rejects(
      ws.patchFile('P/patch.txt', [{ oldText: 'zzz', newText: 'x' }]),
      (e) => e.code === 'NO_MATCH',
    );
    assert.equal((await ws.readFile('P/patch.txt')).content, 'a\nB\nC\nB\n', 'failed patch must not modify the file');

    await assert.rejects(
      ws.patchFile('P/patch.txt', [{ oldText: 'B', newText: 'b', count: 5 }]),
      (e) => e.code === 'NO_MATCH',
    );
    assert.equal((await ws.readFile('P/patch.txt')).content, 'a\nB\nC\nB\n');
  });

  test('delete requires force, dryRun previews, recursive needed for non-empty dirs', async () => {
    await ws.writeFile('P/del.txt', 'x');
    await assert.rejects(ws.delete('P/del.txt'), (e) => e.code === 'FORCE_REQUIRED');
    const dry = await ws.delete('P/del.txt', { force: true });
    assert.equal(dry.dryRun, true);
    assert.ok(fs.existsSync(path.join(root, 'P', 'del.txt')));
    await ws.delete('P/del.txt', { force: true, dryRun: false });
    assert.ok(!fs.existsSync(path.join(root, 'P', 'del.txt')));

    await ws.writeFile('P/dirx/a.txt', 'x');
    await assert.rejects(
      ws.delete('P/dirx', { force: true, dryRun: false }),
      (e) => e.code === 'NOT_EMPTY',
    );
    await ws.delete('P/dirx', { force: true, recursive: true, dryRun: false });
    assert.ok(!fs.existsSync(path.join(root, 'P', 'dirx')));
  });

  test('delete removes a whole project dir with force+recursive', async () => {
    await ws.createProject('Gone', { modId: 'gone' });
    await ws.delete('Gone', { force: true, recursive: true, dryRun: false });
    assert.ok(!fs.existsSync(path.join(root, 'Gone')));
  });

  test('rename moves across dirs and refuses to clobber', async () => {
    await ws.writeFile('P/src.txt', 's');
    await ws.rename('P/src.txt', 'P/sub/dst.txt');
    assert.ok(!fs.existsSync(path.join(root, 'P', 'src.txt')));
    assert.equal((await ws.readFile('P/sub/dst.txt')).content, 's');

    await ws.writeFile('P/other.txt', 'o');
    await assert.rejects(ws.rename('P/other.txt', 'P/sub/dst.txt'), (e) => e.code === 'ALREADY_EXISTS');
    await ws.rename('P/other.txt', 'P/sub/dst.txt', { overwrite: true });
    assert.equal((await ws.readFile('P/sub/dst.txt')).content, 'o');
  });

  test('listFiles returns sorted recursive entries with sizes; NOT_FOUND for missing', async () => {
    const files = await ws.listFiles('P');
    const dst = files.find((f) => f.path === 'P/sub/dst.txt');
    assert.ok(dst, 'dst.txt must appear');
    assert.equal(dst.type, 'file');
    assert.ok(dst.size > 0);
    await assert.rejects(ws.listFiles('nope'), (e) => e.code === 'NOT_FOUND');
  });

  test('listFiles honors maxEntries and maxDepth caps', async () => {
    for (let i = 0; i < 10; i++) await ws.writeFile(`Cap/a${i}.txt`, 'x');
    await ws.writeFile('Cap/deep/nested/deep.txt', 'x');
    const capped = await ws.listFiles('Cap', { maxEntries: 3 });
    assert.ok(capped.filter((e) => e.type === 'file').length <= 3, 'entries capped');
    const shallow = await ws.listFiles('Cap', { maxDepth: 1 });
    assert.ok(!shallow.some((e) => e.path.includes('deep.txt')), 'depth capped');
  });

  test('patchFile replaces non-overlapping matches without re-matching inserted text', async () => {
    await ws.writeFile('P/overlap.txt', 'ababa');
    const r = await ws.patchFile('P/overlap.txt', [{ oldText: 'aba', newText: 'X' }]);
    assert.equal(r.changes.length, 1);
    assert.equal((await ws.readFile('P/overlap.txt')).content, 'Xba');

    await ws.writeFile('P/self.txt', 'a a');
    const r2 = await ws.patchFile('P/self.txt', [{ oldText: 'a', newText: 'aa' }]);
    assert.equal(r2.changes.length, 2);
    assert.equal((await ws.readFile('P/self.txt')).content, 'aa aa');
  });

  test('secondary roots are readable and listed without .. path segments', async () => {
    const rootA = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-a-'));
    const rootB = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-b-'));
    try {
      const multi = new WorkspaceManager([rootA, rootB]);
      fs.writeFileSync(path.join(rootB, 'only_b.txt'), 'x');
      const files = await multi.listFiles('only_b.txt');
      const entry = files.find((f) => f.path === 'only_b.txt');
      assert.ok(entry && entry.type === 'file', 'secondary-root file listed without ..');
      const r = await multi.readFile('only_b.txt');
      assert.equal(r.content, 'x');
      // writes always target the primary root
      await multi.writeFile('new.txt', 'n');
      assert.ok(fs.existsSync(path.join(rootA, 'new.txt')));
      assert.ok(!fs.existsSync(path.join(rootB, 'new.txt')));
    } finally {
      fs.rmSync(rootA, { recursive: true, force: true });
      fs.rmSync(rootB, { recursive: true, force: true });
    }
  });

  test('listProjects lists folders with mod.info presence', async () => {
    const projects = await ws.listProjects();
    const min = projects.find((p) => p.name === 'MinMod');
    assert.ok(min && min.hasModInfo === true);
  });

  // -------------------------------------------------------------------------
  // Security / path traversal
  // -------------------------------------------------------------------------

  test('rejects traversal, absolute, null-byte and empty paths', () => {
    for (const bad of ['../evil', '..\\evil', 'sub/../../evil', '/etc/passwd', 'C:\\Windows', 'foo\u0000bar', '', '   ']) {
      assert.throws(() => ws.resolve(bad), (e) => e instanceof WorkspaceError, `should reject ${JSON.stringify(bad)}`);
    }
  });

  test('writeFile cannot escape the root via traversal', async () => {
    await assert.rejects(ws.writeFile('sub/../../escape.txt', 'x'), (e) => e.code === 'PATH_ESCAPE');
    assert.ok(!fs.existsSync(path.join(root, '..', 'escape.txt')));
  });

  test('rename cannot escape the root', async () => {
    await ws.writeFile('P/keep.txt', 'k');
    await assert.rejects(ws.rename('P/keep.txt', 'P/../../out.txt'), (e) => e.code === 'PATH_ESCAPE');
    await assert.rejects(ws.rename('P/../../in.txt', 'P/ok.txt'), (e) => e.code === 'PATH_ESCAPE');
  });

  test('symlink/junction inside the root cannot escape it', async (t) => {
    const outside = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-outside-'));
    const link = path.join(root, 'escape-link');
    try {
      if (process.platform === 'win32') fs.symlinkSync(outside, link, 'junction');
      else fs.symlinkSync(outside, link, 'dir');
    } catch (e) {
      t.skip(`symlink creation not permitted on this platform: ${e.code}`);
      return;
    }
    try {
      await assert.rejects(ws.readFile('escape-link/x.txt'), (e) => e instanceof WorkspaceError);
      await assert.rejects(ws.writeFile('escape-link/x.txt', 'x'), (e) => e instanceof WorkspaceError);
      await assert.rejects(ws.listFiles('escape-link'), (e) => e.code === 'PATH_ESCAPE');
      assert.ok(!fs.existsSync(path.join(outside, 'x.txt')), 'must not write through the link');
    } finally {
      fs.rmSync(outside, { recursive: true, force: true });
      fs.rmSync(link, { recursive: true, force: true });
    }
  });

  test('the workspace root itself cannot be addressed for deletion', async () => {
    await assert.rejects(ws.delete('.'), (e) => e.code === 'INVALID_PATH');
    await assert.rejects(ws.delete('..'), (e) => e.code === 'PATH_ESCAPE');
  });

  test('readFile rejects directory paths', async () => {
    await assert.rejects(ws.readFile('P'), (e) => e.code === 'INVALID_PATH');
  });
});

describe('workspace tool helpers (inspect)', () => {
  let root;
  let ws;
  let db;
  let parser;
  let analyzer;
  let ctx;

  before(async () => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-tools-'));
    ws = new WorkspaceManager([root]);
    db = new DatabaseManager(path.join(root, 'test.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
    analyzer = new ModAnalyzer(db, parser);
    ctx = { workspaceManager: ws, dbManager: db, parser, analyzer };
    fs.cpSync(B42_FIXTURE, path.join(root, 'fixture_mod'), { recursive: true });
  });

  after(() => {
    db.close();
    fs.rmSync(root, { recursive: true, force: true });
  });

  test('inspectProject returns a full structured inspection via the real analyzer', async () => {
    const insp = await inspectProject(ctx, 'fixture_mod', {
      checkDependencies: false,
      includeFileList: true,
    });
    assert.equal(insp.modId, 'b42_fixture');
    assert.equal(insp.modName, 'B42 Fixture Mod');
    assert.equal(insp.version, '1.0.0');
    assert.ok(insp.supportedBuilds.includes('42'));
    assert.ok(insp.contentTypes.includes('scripts'));
    assert.ok(insp.files.scriptCount >= 1);
    assert.ok(Array.isArray(insp.files.list) && insp.files.list.length > 0);
    assert.equal(typeof insp.validation.valid, 'boolean');
    assert.ok(Array.isArray(insp.validation.errors));
  });

  test('inspectProject throws sanitized NOT_FOUND for missing projects', async () => {
    const opts = { checkDependencies: false, includeFileList: false };
    await assert.rejects(inspectProject(ctx, 'nope', opts), (e) => e.code === ErrorCode.InvalidRequest);
  });

  test('detectContentTypes identifies media content + mod/poster markers', async () => {
    const types = await ws.detectContentTypes(path.join(root, 'fixture_mod'));
    assert.ok(types.includes('scripts'));
    assert.ok(types.includes('lua'));
    assert.ok(types.includes('mod'));
    assert.ok(types.includes('poster'));
  });
});

describe('workspace tool registration & handlers', () => {
  const TOOL_NAMES = [
    'workspace_list',
    'workspace_create',
    'workspace_inspect',
  ];

  for (const name of TOOL_NAMES) {
    test(`${name} is registered with a schema`, () => {
      const tool = workspaceTools.find((t) => t.name === name);
      assert.notEqual(tool, undefined, `${name} must be registered`);
      assert.ok(tool.inputSchema, `${name} needs an input schema`);
      assert.ok(typeof tool.description === 'string' && tool.description.length > 10);
    });
  }

  test('workspace_create handler scaffolds and writes a generated sample item script', async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-tool-'));
    try {
      const ws = new WorkspaceManager([root]);
      const ctx = {
        workspaceManager: ws,
        generator: { generateScript: async () => 'module X { }' },
      };
      const tool = workspaceTools.find((t) => t.name === 'workspace_create');
      const res = await tool.handler(
        { name: 'ToolMod', modId: 'tool_mod', sampleItem: true, template: 'minimal', overwrite: false, dryRun: false, includePoster: true },
        ctx,
      );
      assert.equal(res.structuredContent.dryRun, false);
      const scriptPath = path.join(root, 'ToolMod', '42', 'media', 'scripts', 'tool_mod_items.txt');
      assert.equal(fs.readFileSync(scriptPath, 'utf8').trim(), 'module X { }');
      assert.equal(fs.readFileSync(path.join(root, 'ToolMod', 'mod.info'), 'utf8').includes('id=tool_mod'), true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });


});
