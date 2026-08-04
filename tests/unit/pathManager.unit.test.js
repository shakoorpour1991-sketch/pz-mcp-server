/**
 * Unit tests for PathManager.validateInputPath (audit P1 #10 path guard).
 * Runs against the compiled dist/ build.
 */
import path from 'path';
import fs from 'fs';
import os from 'os';

import { PathManager } from '../../dist/utils/PathManager.js';

describe('PathManager.validateInputPath', () => {
  let tmpDir;
  let pm;

  beforeAll(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-path-'));
    pm = new PathManager();
  });

  afterAll(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('rejects empty paths', () => {
    expect(() => pm.validateInputPath('')).toThrow('must not be empty');
    expect(() => pm.validateInputPath('   ')).toThrow('must not be empty');
  });

  test('rejects relative (non-absolute) paths', () => {
    expect(() => pm.validateInputPath('foo/bar')).toThrow('absolute');
  });

  test('rejects null bytes', () => {
    expect(() => pm.validateInputPath(`${tmpDir}\u0000evil`)).toThrow('invalid characters');
  });

  test('rejects traversal sequences (forward and back slashes)', () => {
    expect(() => pm.validateInputPath(`${tmpDir}/../..`)).toThrow("'..'");
    expect(() => pm.validateInputPath(`${tmpDir}\\..\\etc`)).toThrow("'..'");
    expect(() => pm.validateInputPath('C:\\Users\\foo\\..\\..\\bar')).toThrow("'..'");
  });

  test('accepts an existing absolute directory', () => {
    const result = pm.validateInputPath(tmpDir, 'dir');
    expect(result).toBe(tmpDir);
  });

  test('rejects nonexistent directories', () => {
    expect(() => pm.validateInputPath(path.join(tmpDir, 'does-not-exist'), 'dir')).toThrow('does not exist');
  });

  test('kind=file requires an existing file', () => {
    const file = path.join(tmpDir, 'existing.txt');
    fs.writeFileSync(file, 'hello');
    expect(pm.validateInputPath(file, 'file')).toBe(file);
    expect(() => pm.validateInputPath(path.join(tmpDir, 'missing.txt'), 'file')).toThrow('does not exist');
  });
});
