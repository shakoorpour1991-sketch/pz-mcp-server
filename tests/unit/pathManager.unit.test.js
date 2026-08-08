/**
 * Unit tests for PathManager.validateInputPath (audit P1 #10 path guard)
 * and PathManager.detectSteamWindows registry detection (audit P4 #22).
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, beforeEach, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { PathManager } from '../../dist/utils/PathManager.js';

describe('PathManager.validateInputPath', () => {
  let tmpDir;
  let pm;

  before(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-path-'));
    pm = new PathManager();
  });

  after(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('rejects empty paths', () => {
    assert.throws(() => pm.validateInputPath(''), /must not be empty/);
    assert.throws(() => pm.validateInputPath('   '), /must not be empty/);
  });

  test('rejects relative (non-absolute) paths', () => {
    assert.throws(() => pm.validateInputPath('foo/bar'), /absolute/);
  });

  test('rejects null bytes', () => {
    assert.throws(() => pm.validateInputPath(`${tmpDir}\u0000evil`), /invalid characters/);
  });

  test('rejects traversal sequences (forward and back slashes)', () => {
    assert.throws(() => pm.validateInputPath(`${tmpDir}/../..`), /'\.\.'/);
    assert.throws(() => pm.validateInputPath(`${tmpDir}\\..\\etc`), /'\.\.'/);
    assert.throws(() => pm.validateInputPath('C:\\Users\\foo\\..\\..\\bar'), /'\.\.'/);
  });

  test('accepts an existing absolute directory', () => {
    const result = pm.validateInputPath(tmpDir, 'dir');
    assert.equal(result, tmpDir);
  });

  test('rejects nonexistent directories', () => {
    assert.throws(() => pm.validateInputPath(path.join(tmpDir, 'does-not-exist'), 'dir'), /does not exist/);
  });

  test('kind=file requires an existing file', () => {
    const file = path.join(tmpDir, 'existing.txt');
    fs.writeFileSync(file, 'hello');
    assert.equal(pm.validateInputPath(file, 'file'), file);
    assert.throws(() => pm.validateInputPath(path.join(tmpDir, 'missing.txt'), 'file'), /does not exist/);
  });
});

describe('PathManager env override and validation', () => {
  let tempDir;
  let originalEnv;

  before(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-test-'));
    // isValidProjectZomboidInstallation requires media/scripts + an executable
    fs.mkdirSync(path.join(tempDir, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'ProjectZomboid64.exe'), '');
    originalEnv = process.env.PROJECTZOMBOID_PATH;
  });

  after(() => {
    if (originalEnv !== undefined) {
      process.env.PROJECTZOMBOID_PATH = originalEnv;
    } else {
      delete process.env.PROJECTZOMBOID_PATH;
    }
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('env override wins over Steam and common paths', async () => {
    process.env.PROJECTZOMBOID_PATH = tempDir;
    const pathManager = new PathManager();
    const detected = await pathManager.detectProjectZomboidPath();
    assert.strictEqual(detected, tempDir);
  });

  test('validateInputPath accepts existing directory', () => {
    const pathManager = new PathManager();
    const result = pathManager.validateInputPath(tempDir, 'dir');
    assert.ok(result);
  });

  test('validateInputPath rejects nonexistent directory', () => {
    const pathManager = new PathManager();
    const fakePath = path.join(os.tmpdir(), 'nonexistent-' + Date.now());
    assert.throws(() => {
      pathManager.validateInputPath(fakePath, 'dir');
    }, /Directory does not exist/);
  });
});

describe('PathManager.detectSteamWindows registry detection', () => {
  let pm;

  beforeEach(() => {
    pm = new PathManager();
  });

  test('registry returns SteamPath and valid PZ is found there', async () => {
    const steamRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-steam-'));
    const pzDir = path.join(steamRoot, 'steamapps', 'common', 'ProjectZomboid');
    fs.mkdirSync(pzDir, { recursive: true });
    fs.writeFileSync(path.join(pzDir, 'ProjectZomboid64.exe'), '');
    fs.mkdirSync(path.join(pzDir, 'media', 'scripts'), { recursive: true });

    pm.queryRegistryValue = async () => steamRoot;

    const result = await pm.detectSteamWindows();
    assert.equal(result, pzDir);

    fs.rmSync(steamRoot, { recursive: true, force: true });
  });

  test('registry points to dir without PZ, falls through to libraryfolders.vdf', async () => {
    const steamRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-steam-'));
    const libraryDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-lib-'));
    const pzDir = path.join(libraryDir, 'steamapps', 'common', 'ProjectZomboid');
    fs.mkdirSync(pzDir, { recursive: true });
    fs.writeFileSync(path.join(pzDir, 'ProjectZomboid64.exe'), '');
    fs.mkdirSync(path.join(pzDir, 'media', 'scripts'), { recursive: true });

    const steamAppsDir = path.join(steamRoot, 'steamapps');
    fs.mkdirSync(steamAppsDir, { recursive: true });
    const vdfContent = `"libraryfolders"\n{\n    "1"\n    {\n        "path"    "${libraryDir.replace(/\\/g, '\\\\')}"\n    }\n}`;
    fs.writeFileSync(path.join(steamAppsDir, 'libraryfolders.vdf'), vdfContent);

    pm.queryRegistryValue = async () => steamRoot;

    const result = await pm.detectSteamWindows();
    assert.equal(result, pzDir);

    fs.rmSync(steamRoot, { recursive: true, force: true });
    fs.rmSync(libraryDir, { recursive: true, force: true });
  });

  test('registry read fails gracefully, returns null when no hardcoded paths exist', async () => {
    pm.queryRegistryValue = async () => {
      throw new Error('Registry query failed');
    };

    const result = await pm.detectSteamWindows();
    assert.equal(result, null);
  });
});

// Audit D6: isAncestorWritable walk-up helper
describe('PathManager.isAncestorWritable (audit D6)', () => {
  let pm;

  before(() => {
    pm = new PathManager();
  });

  test('returns writable=true for an existing, writable directory', async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-writable-'));
    try {
      const verdict = await pm.isAncestorWritable(dir);
      assert.equal(verdict.writable, true);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('walks up to a writable ancestor for a non-existent deep path', async () => {
    const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-parent-'));
    const child = path.join(parent, 'nonexistent', 'deep');
    const verdict = await pm.isAncestorWritable(child);
    assert.equal(verdict.writable, true);
    fs.rmSync(parent, { recursive: true, force: true });
  });
});
