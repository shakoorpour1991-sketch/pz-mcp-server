/**
 * Unit tests for the smart mod installer (src/modinstall/ModInstaller.ts) and
 * the safe zip extraction (src/utils/zip.ts). Real temp dirs + real zips built
 * with adm-zip — covers single mods, B42 versioned folders, packs, flat zips,
 * zip-slip protection, macOS junk filtering, conflicts, dryRun and guards.
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import AdmZip from 'adm-zip';

import { ModInstaller, ModInstallError } from '../../dist/modinstall/ModInstaller.js';
import { extractZipToDir, safeEntryPath, isMacJunk } from '../../dist/utils/zip.js';
import { PathManager } from '../../dist/utils/PathManager.js';

const MOD_INFO = (id, name = 'Test Mod', version = '1.0') =>
  `id=${id}\nname=${name}\nversion=${version}\n`;

function makeZip(files) {
  const zip = new AdmZip();
  for (const f of files) {
    if (f.dir) zip.addFile(f.path + '/', Buffer.alloc(0));
    else zip.addFile(f.path, Buffer.from(f.data));
  }
  const out = path.join(global.tmpRoot, 'zip-' + Math.random().toString(36).slice(2) + '.zip');
  zip.writeZip(out);
  return out;
}

// Hand-build a STORED (uncompressed) zip with raw entry names — adm-zip
// normalizes '../' and leading '/' when ADDING files, so the zip-slip test
// needs a byte-level archive that keeps malicious names verbatim.
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function buildRawZip(entries, out) {
  const parts = [];
  const central = [];
  let offset = 0;
  for (const e of entries) {
    const name = Buffer.from(e.name, 'utf8');
    const data = Buffer.from(e.data);
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(0, 8);      // method: stored
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(0, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    parts.push(local, name, data);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0);
    ch.writeUInt16LE(20, 4);
    ch.writeUInt16LE(20, 6);
    ch.writeUInt16LE(0x0800, 8);
    ch.writeUInt16LE(0, 10);
    ch.writeUInt16LE(0, 12);
    ch.writeUInt16LE(0, 14);
    ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(data.length, 20);
    ch.writeUInt32LE(data.length, 24);
    ch.writeUInt16LE(name.length, 28);
    ch.writeUInt16LE(0, 30);
    ch.writeUInt16LE(0, 32);
    ch.writeUInt16LE(0, 34);
    ch.writeUInt16LE(0, 36);
    ch.writeUInt32LE(0, 38);
    ch.writeUInt32LE(offset, 42);
    central.push(ch, name);
    offset += 30 + name.length + data.length;
  }
  const cdOffset = parts.reduce((a, b) => a + b.length, 0);
  const cdSize = central.reduce((a, b) => a + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(cdSize, 12);
  eocd.writeUInt32LE(cdOffset, 16);
  eocd.writeUInt16LE(0, 20);
  fs.writeFileSync(out, Buffer.concat([...parts, ...central, eocd]));
  return out;
}

describe('zip extraction safety (src/utils/zip.ts)', () => {
  before(() => {
    global.tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-inst-tmp-'));
  });
  after(() => {
    fs.rmSync(global.tmpRoot, { recursive: true, force: true });
  });

  test('safeEntryPath rejects traversal and absolute paths', () => {
    assert.equal(safeEntryPath('../evil.txt'), null);
    assert.equal(safeEntryPath('a/../../b'), null);
    assert.equal(safeEntryPath('/etc/passwd'), null);
    assert.equal(safeEntryPath('C:/windows/system32'), null);
    assert.equal(safeEntryPath('a\\..\\..\\b'), null);
    assert.equal(safeEntryPath('mod.info'), 'mod.info');
    assert.equal(safeEntryPath('./mods/./A/mod.info'), 'mods/A/mod.info');
  });

  test('isMacJunk filters macOS Finder artifacts', () => {
    assert.equal(isMacJunk('__MACOSX/._mod.info'), true);
    assert.equal(isMacJunk('MyMod/._poster.png'), true);
    assert.equal(isMacJunk('MyMod/.DS_Store'), true);
    assert.equal(isMacJunk('MyMod/mod.info'), false);
  });

  test('extracts a normal zip and reports the summary', () => {
    const zipPath = makeZip([
      { path: 'MyMod/mod.info', data: MOD_INFO('TestMod') },
      { path: 'MyMod/media/scripts/items.txt', data: 'module Base {}\n' },
    ]);
    const dest = path.join(global.tmpRoot, 'out-normal');
    const s = extractZipToDir(zipPath, dest);
    assert.equal(s.fileCount, 2);
    assert.equal(s.skipped, 0);
    assert.ok(fs.existsSync(path.join(dest, 'MyMod', 'media', 'scripts', 'items.txt')));
  });

  test('zip-slip entries never escape the destination', () => {
    // Raw archive with verbatim malicious entry names (../ and absolute).
    const zipPath = path.join(global.tmpRoot, 'slip-' + Math.random().toString(36).slice(2) + '.zip');
    buildRawZip([
      { name: 'MyMod/mod.info', data: MOD_INFO('Slip') },
      { name: '../escaped.txt', data: 'pwned' },
      { name: '/absolute.txt', data: 'nope' },
      { name: 'C:/windows/system32/evil.txt', data: 'nope' },
    ], zipPath);
    const dest = path.join(global.tmpRoot, 'out-slip');
    const s = extractZipToDir(zipPath, dest);
    assert.ok(s.skipped >= 3, 'unsafe entries skipped: ' + JSON.stringify(s.skippedReasons));
    assert.ok(!fs.existsSync(path.join(global.tmpRoot, 'escaped.txt')));
    assert.ok(!fs.existsSync('/absolute.txt'));
    assert.ok(!fs.existsSync(path.join(global.tmpRoot, 'evil.txt')));
    assert.ok(fs.existsSync(path.join(dest, 'MyMod', 'mod.info')));
  });

  test('__MACOSX junk is dropped', () => {
    const zipPath = makeZip([
      { path: 'MyMod/mod.info', data: MOD_INFO('Mac') },
      { path: '__MACOSX/._mod.info', data: 'junk' },
    ]);
    const dest = path.join(global.tmpRoot, 'out-mac');
    const s = extractZipToDir(zipPath, dest);
    assert.equal(s.skipped, 1);
    assert.ok(!fs.existsSync(path.join(dest, '__MACOSX')));
  });

  test('a non-zip file throws ZipError', () => {
    const notZip = path.join(global.tmpRoot, 'fake.zip');
    fs.writeFileSync(notZip, 'this is not a zip archive');
    assert.throws(() => extractZipToDir(notZip, path.join(global.tmpRoot, 'out-fake')), /Not a readable zip/);
  });
});

describe('ModInstaller — folder source', () => {
  let pm;
  let source;
  let target;

  before(() => {
    if (!global.tmpRoot) global.tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-inst-tmp-'));
    pm = new PathManager();
    source = path.join(global.tmpRoot, 'FolderMod');
    fs.mkdirSync(path.join(source, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(source, 'mod.info'), MOD_INFO('FolderMod', 'Folder Mod'));
    fs.writeFileSync(path.join(source, 'media', 'scripts', 'items.txt'), 'module Base {}\n');
    target = path.join(global.tmpRoot, 'mods-folder-target');
  });
  after(() => {
    fs.rmSync(global.tmpRoot, { recursive: true, force: true });
  });

  test('copies a mod folder into the target', async () => {
    const installer = new ModInstaller(pm);
    const r = await installer.install(source, { targetDir: target });
    assert.equal(r.sourceKind, 'folder');
    assert.equal(r.mods.length, 1);
    const m = r.mods[0];
    assert.equal(m.status, 'installed');
    assert.equal(m.modId, 'FolderMod');
    assert.equal(m.name, 'FolderMod');
    assert.equal(m.filesCopied, 2);
    assert.ok(fs.existsSync(path.join(target, 'FolderMod', 'mod.info')));
    assert.ok(fs.existsSync(path.join(target, 'FolderMod', 'media', 'scripts', 'items.txt')));
  });

  test('dryRun previews with zero disk changes', async () => {
    const freshTarget = path.join(global.tmpRoot, 'mods-dryrun-target');
    const installer = new ModInstaller(pm);
    const r = await installer.install(source, { targetDir: freshTarget, dryRun: true });
    assert.equal(r.dryRun, true);
    assert.equal(r.mods[0].status, 'planned');
    assert.ok(!fs.existsSync(freshTarget), 'target must not be created in dryRun');
  });

  test('source that is (or is inside) the target is refused', async () => {
    const installer = new ModInstaller(pm);
    await assert.rejects(
      () => installer.install(source, { targetDir: source }),
      (e) => e instanceof ModInstallError && e.code === 'source-inside-target',
    );
    await assert.rejects(
      () => installer.install(source, { targetDir: path.dirname(source) }),
      (e) => e instanceof ModInstallError && e.code === 'source-inside-target',
    );
  });

  test('folder without any mod.info is rejected', async () => {
    const junk = path.join(global.tmpRoot, 'NotAMod');
    fs.mkdirSync(path.join(junk, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(junk, 'media', 'scripts', 'x.txt'), 'x');
    const installer = new ModInstaller(pm);
    await assert.rejects(
      () => installer.install(junk, { targetDir: target }),
      (e) => e instanceof ModInstallError && e.code === 'no-mod-info',
    );
  });

  test('invalid source path is rejected', async () => {
    const installer = new ModInstaller(pm);
    await assert.rejects(
      () => installer.install(path.join(global.tmpRoot, 'does-not-exist'), { targetDir: target }),
      (e) => e instanceof ModInstallError && e.code === 'invalid-source',
    );
  });
});

describe('ModInstaller — zip source', () => {
  let pm;
  let target;

  before(() => {
    if (!global.tmpRoot) global.tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-inst-tmp-'));
    pm = new PathManager();
    target = path.join(global.tmpRoot, 'mods-zip-target');
  });
  after(() => {
    fs.rmSync(global.tmpRoot, { recursive: true, force: true });
  });

  test('single mod folder zip installs as that folder', async () => {
    const zipPath = makeZip([
      { path: 'MyZipMod/mod.info', data: MOD_INFO('ZipMod', 'Zip Mod') },
      { path: 'MyZipMod/media/scripts/items.txt', data: 'module Base {}\n' },
    ]);
    const installer = new ModInstaller(pm);
    const r = await installer.install(zipPath, { targetDir: target });
    assert.equal(r.sourceKind, 'zip');
    const m = r.mods[0];
    assert.equal(m.status, 'installed');
    assert.equal(m.name, 'MyZipMod');
    assert.ok(fs.existsSync(path.join(target, 'MyZipMod', 'mod.info')));
  });

  test('flat zip (mod.info at archive root) installs under the zip file name', async () => {
    const zipPath = makeZip([
      { path: 'mod.info', data: MOD_INFO('FlatMod', 'Flat Mod') },
      { path: 'media/scripts/items.txt', data: 'module Base {}\n' },
    ]);
    const installer = new ModInstaller(pm);
    const r = await installer.install(zipPath, { targetDir: target });
    assert.equal(r.mods.length, 1);
    const m = r.mods[0];
    assert.equal(m.status, 'installed');
    assert.equal(m.name, path.basename(zipPath).replace(/\.zip$/, ''));
    assert.ok(fs.existsSync(path.join(target, m.name, 'mod.info')));
  });

  test('B42 versioned zip (MyMod/42/mod.info) installs as MyMod, not MyMod/42', async () => {
    const zipPath = makeZip([
      { path: 'B42Mod/42/mod.info', data: MOD_INFO('B42Mod', 'B42 Mod') },
      { path: 'B42Mod/42/media/scripts/items.txt', data: 'module Base {}\n' },
      { path: 'B42Mod/common/media/textures/tex.png', data: 'png', dir: false },
    ]);
    const installer = new ModInstaller(pm);
    const r = await installer.install(zipPath, { targetDir: target });
    assert.equal(r.mods.length, 1);
    const m = r.mods[0];
    assert.equal(m.status, 'installed');
    assert.equal(m.name, 'B42Mod');
    assert.ok(fs.existsSync(path.join(target, 'B42Mod', '42', 'mod.info')));
    assert.ok(fs.existsSync(path.join(target, 'B42Mod', 'common', 'media', 'textures', 'tex.png')));
  });

  test('workshop pack zip installs each inner mod', async () => {
    const zipPath = makeZip([
      { path: 'mods/PackA/42/mod.info', data: MOD_INFO('PackA', 'Pack A') },
      { path: 'mods/PackA/42/media/scripts/a.txt', data: 'a' },
      { path: 'mods/PackB/mod.info', data: MOD_INFO('PackB', 'Pack B') },
      { path: 'mods/PackB/media/scripts/b.txt', data: 'b' },
    ]);
    const installer = new ModInstaller(pm);
    const r = await installer.install(zipPath, { targetDir: target });
    assert.equal(r.mods.length, 2);
    const names = r.mods.map((m) => m.name).sort();
    assert.deepEqual(names, ['PackA', 'PackB']);
    assert.ok(r.mods.every((m) => m.status === 'installed'));
    assert.ok(fs.existsSync(path.join(target, 'PackA', '42', 'mod.info')));
    assert.ok(fs.existsSync(path.join(target, 'PackB', 'mod.info')));
  });

  test('invalid zip (corrupt content) is rejected with invalid-zip', async () => {
    const badZip = path.join(global.tmpRoot, 'broken.zip');
    fs.writeFileSync(badZip, 'garbage-not-a-zip');
    const installer = new ModInstaller(pm);
    await assert.rejects(
      () => installer.install(badZip, { targetDir: target }),
      (e) => e instanceof ModInstallError && e.code === 'invalid-zip',
    );
  });

  test('zip with no mod.info anywhere is rejected', async () => {
    const zipPath = makeZip([
      { path: 'random/media/scripts/x.txt', data: 'x' },
      { path: 'random/readme.txt', data: 'hi' },
    ]);
    const installer = new ModInstaller(pm);
    await assert.rejects(
      () => installer.install(zipPath, { targetDir: target }),
      (e) => e instanceof ModInstallError && e.code === 'no-mod-info',
    );
  });
});

describe('ModInstaller — conflicts & overwrite', () => {
  let pm;
  let sourceZip;
  let target;

  before(() => {
    if (!global.tmpRoot) global.tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-inst-tmp-'));
    pm = new PathManager();
    sourceZip = makeZip([
      { path: 'ConflictMod/mod.info', data: MOD_INFO('ConflictMod', 'Conflict Mod') },
      { path: 'ConflictMod/media/scripts/items.txt', data: 'module Base {}\n' },
    ]);
    target = path.join(global.tmpRoot, 'mods-conflict-target');
  });
  after(() => {
    fs.rmSync(global.tmpRoot, { recursive: true, force: true });
  });

  async function preinstallExisting(extraLines) {
    fs.mkdirSync(path.join(target, 'ConflictMod', 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(target, 'ConflictMod', 'mod.info'), MOD_INFO('ConflictMod', 'OLD') + (extraLines || ''));
    fs.writeFileSync(path.join(target, 'ConflictMod', 'media', 'scripts', 'old.txt'), 'old content');
  }

  test('existing mod with the same id is skipped with a reason', async () => {
    await preinstallExisting();
    const installer = new ModInstaller(pm);
    const r = await installer.install(sourceZip, { targetDir: target });
    assert.equal(r.mods.length, 1);
    assert.equal(r.mods[0].status, 'skipped');
    assert.match(r.mods[0].reason, /ConflictMod/);
    // existing content untouched
    assert.equal(fs.readFileSync(path.join(target, 'ConflictMod', 'media', 'scripts', 'old.txt'), 'utf8'), 'old content');
  });

  test('overwrite:true replaces the existing folder', async () => {
    await preinstallExisting();
    const installer = new ModInstaller(pm);
    const r = await installer.install(sourceZip, { targetDir: target, overwrite: true });
    assert.equal(r.mods[0].status, 'installed');
    assert.ok(fs.existsSync(path.join(target, 'ConflictMod', 'media', 'scripts', 'items.txt')));
    assert.ok(!fs.existsSync(path.join(target, 'ConflictMod', 'media', 'scripts', 'old.txt')), 'old copy replaced');
  });
});
