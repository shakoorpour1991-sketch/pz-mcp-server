/**
 * Unit tests for SteamCmdDownloader (M2): SteamCMD discovery, workshop-dir
 * resolution, the download flow with a FAKE steamcmd runner, Windows success
 * line parsing, temp-dir hygiene (always deleted), anonymous-rejection
 * handling, and exit-code-7 retry with backoff. Runs against dist/.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

import { SteamCmdDownloader } from '../../dist/workshop/SteamCmdDownloader.js';

const PZ_APPID = '108600';

/**
 * A fake steamcmd: inspects its args to learn the temp dir + id, materializes
 * the "downloaded" content tree there, then emits the Windows success line.
 */
function fakeRunner({ behavior = 'success', exitCode = 0 }) {
  return async (cmd, args) => {
    // args: [+force_install_dir, tmp, +login, …login, +workshop_download_item, APPID, ID, +quit]
    const tempDir = args[args.indexOf('+force_install_dir') + 1];
    const id = args[args.indexOf('+workshop_download_item') + 2];
    const lines = ['Update state (0x61) downloading, progress: 0.00', 'Redirecting stderr to "logs/stderr.txt"'];
    let code = exitCode;
    if (behavior === 'no-subscription') {
      lines.push('ERROR! Download item ' + id + ' rejected : No subscription');
      code = 8;
    } else if (behavior === 'exit7') {
      lines.push('ERROR! Failed to install app (No installed package)');
      code = 7;
    } else {
      // success — materialize the content tree SteamCMD would write
      const contentDir = path.join(tempDir, 'steamapps', 'workshop', 'content', PZ_APPID, id);
      fs.mkdirSync(path.join(contentDir, 'media', 'scripts'), { recursive: true });
      fs.writeFileSync(path.join(contentDir, 'mod.info'), 'name=Test Mod\n');
      fs.writeFileSync(path.join(contentDir, 'media', 'scripts', 'items.txt'), 'module Test { }');
      fs.writeFileSync(path.join(contentDir, 'big.bin'), Buffer.alloc(1024));
      lines.push(`Success. Downloaded item ${id} to "${contentDir}" (2048 bytes)`);
      code = 0;
    }
    lines.push('Success. App id 108600 fully downloaded.');
    return { code, output: lines.join('\n') };
  };
}

describe('SteamCmdDownloader', () => {
  let tmpDir;
  let workshopDir;
  const savedEnv = {};

  before(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-sc-'));
    workshopDir = path.join(tmpDir, 'workshop-content-108600');
    fs.mkdirSync(workshopDir, { recursive: true });
    for (const k of ['STEAMCMD_PATH', 'PZ_WORKSHOP_DIR', 'STEAMCMD_USER', 'STEAMCMD_PASS']) {
      savedEnv[k] = process.env[k];
      delete process.env[k];
    }
  });

  after(() => {
    for (const [k, v] of Object.entries(savedEnv)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  let wsCounter = 0;
  // Each test gets its own workshop dir so earlier downloads cannot leak into
  // the "workshop dir is empty" assertions of later tests.
  function makeDownloader(overrides = {}) {
    workshopDir = path.join(tmpDir, `ws-${wsCounter++}`);
    fs.mkdirSync(workshopDir, { recursive: true });
    return new SteamCmdDownloader({
      steamCmdPath: 'C:/fake/steamcmd.exe',
      workshopDir,
      now: () => 1_000_000,
      runner: fakeRunner({}),
      ...overrides,
    });
  }

  describe('resolveSteamCmdPath', () => {
    test('uses the explicit path from options', async () => {
      const d = makeDownloader();
      assert.equal(await d.resolveSteamCmdPath(), 'C:/fake/steamcmd.exe');
    });

    test('honors STEAMCMD_PATH env when set', async () => {
      const envPath = path.join(tmpDir, 'steamcmd.exe');
      fs.writeFileSync(envPath, 'x');
      process.env.STEAMCMD_PATH = envPath;
      try {
        const d = new SteamCmdDownloader({ workshopDir, runner: fakeRunner({}) });
        assert.equal(await d.resolveSteamCmdPath(), envPath);
      } finally {
        delete process.env.STEAMCMD_PATH;
      }
    });

    test('throws an actionable error when steamcmd is missing', async () => {
      // Environment-independent: the dev machine HAS steamcmd at
      // C:\steamcmd\steamcmd.exe (a COMMON_STEAMCMD_PATHS entry), so override
      // the candidate list to simulate a machine without it.
      const d = new SteamCmdDownloader({
        workshopDir,
        runner: fakeRunner({}),
        commonSteamCmdPaths: [],
        pathManager: { detectProjectZomboidPath: async () => null },
      });
      await assert.rejects(() => d.resolveSteamCmdPath(), /SteamCMD not found/);
    });
  });

  describe('resolveWorkshopDir', () => {
    test('uses the explicit option dir', async () => {
      const d = makeDownloader();
      assert.equal(await d.resolveWorkshopDir(), workshopDir);
    });

    test('honors PZ_WORKSHOP_DIR env', async () => {
      const envDir = path.join(tmpDir, 'env-workshop');
      process.env.PZ_WORKSHOP_DIR = envDir;
      try {
        const d = new SteamCmdDownloader({ steamCmdPath: 'x', runner: fakeRunner({}) });
        assert.equal(await d.resolveWorkshopDir(), envDir);
      } finally {
        delete process.env.PZ_WORKSHOP_DIR;
      }
    });

    test('derives from the Steam PZ install path', async () => {
      const fakePm = {
        detectProjectZomboidPath: async () =>
          'D:/SteamLibrary/steamapps/common/ProjectZomboid',
      };
      const d = new SteamCmdDownloader({
        steamCmdPath: 'x',
        runner: fakeRunner({}),
        pathManager: fakePm,
      });
      const dir = await d.resolveWorkshopDir();
      assert.equal(
        dir,
        path.join('D:/SteamLibrary', 'steamapps', 'workshop', 'content', PZ_APPID),
      );
    });

    test('throws when no Steam install and no env dir', async () => {
      const d = new SteamCmdDownloader({
        steamCmdPath: 'x',
        runner: fakeRunner({}),
        pathManager: { detectProjectZomboidPath: async () => null },
      });
      await assert.rejects(() => d.resolveWorkshopDir(), /PZ_WORKSHOP_DIR/);
    });
  });

  describe('download', () => {
    test('downloads, moves content into the workshop dir, deletes temp', async () => {
      const d = makeDownloader();
      const phases = [];
      const res = await d.download('3777544219', (p) => phases.push(p));
      assert.equal(res.id, '3777544219');
      assert.equal(res.bytes, 2048); // parsed from the Windows success line
      assert.equal(res.attempts, 1);
      assert.ok(res.downloadedPath.endsWith(path.join('3777544219')));
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219', 'mod.info')));
      assert.ok(
        fs.existsSync(path.join(workshopDir, '3777544219', 'media', 'scripts', 'items.txt')),
      );
      // temp dir is gone
      assert.ok(!fs.existsSync(res.tempDir));
      assert.ok(phases.length >= 2);
    });

    test('reuses the PZ appid when deriving the content path', async () => {
      const d = makeDownloader();
      const res = await d.download('3777544219');
      assert.equal(res.bytes, 2048);
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219')));
    });

    test('rejects anonymous-rejected items with a login hint', async () => {
      const d = makeDownloader({ runner: fakeRunner({ behavior: 'no-subscription' }) });
      await assert.rejects(
        () => d.download('3777544219'),
        /requires an account that owns a subscription/,
      );
      // temp dir still cleaned up on failure
      assert.deepEqual(fs.readdirSync(workshopDir), []);
    });

    test('retries transient exit code 7 and succeeds on attempt 2', async () => {
      let calls = 0;
      const d = makeDownloader({
        runner: async (cmd, args) => {
          calls++;
          if (calls === 1) return fakeRunner({ behavior: 'exit7' })(cmd, args);
          return fakeRunner({})(cmd, args);
        },
      });
      const res = await d.download('3777544219');
      assert.equal(res.attempts, 2);
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219')));
    });

    test('gives up after 3 consecutive exit-7 failures', async () => {
      let calls = 0;
      const d = makeDownloader({
        runner: async (cmd, args) => {
          calls++;
          return fakeRunner({ behavior: 'exit7' })(cmd, args);
        },
      });
      await assert.rejects(() => d.download('3777544219'), /transient exit code 7/);
      assert.equal(calls, 3);
      assert.deepEqual(fs.readdirSync(workshopDir), []);
    });

    test('unknown failure exit code surfaces with output tail', async () => {
      const d = makeDownloader({
        runner: async () => ({ code: 11, output: 'Some unknown steamcmd error' }),
      });
      await assert.rejects(() => d.download('3777544219'), /exited with code 11/);
    });

    test('skips download when the item is already present', async () => {
      const d = makeDownloader();
      fs.mkdirSync(path.join(workshopDir, '3777544219', 'media', 'scripts'), { recursive: true });
      fs.writeFileSync(path.join(workshopDir, '3777544219', 'mod.info'), 'name=Test\n');
      const res = await d.download('3777544219');
      assert.equal(res.attempts, 0);
      assert.ok(res.note.includes('skipped'));
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219', 'mod.info')));
    });

    test('already-present check wins over the disk-space guard', async () => {
      // Regression: re-analysis of a present mod must not be blocked by a
      // (simulated) full disk — the skip path precedes the guard.
      const d = makeDownloader({ diskFree: () => 0 });
      fs.mkdirSync(path.join(workshopDir, '3777544219'), { recursive: true });
      fs.writeFileSync(path.join(workshopDir, '3777544219', 'mod.info'), 'name=Test\n');
      const res = await d.download('3777544219', undefined, { expectedBytes: 1024 * 1024 * 1024 });
      assert.equal(res.attempts, 0);
      assert.ok(res.note.includes('skipped'));
    });

    test('STEAMCMD_USER without STEAMCMD_PASS fails fast with a clear error', async () => {
      process.env.STEAMCMD_USER = 'someone';
      delete process.env.STEAMCMD_PASS;
      try {
        const d = makeDownloader();
        await assert.rejects(
          () => d.download('3777544219'),
          /STEAMCMD_USER is set but STEAMCMD_PASS is empty/,
        );
      } finally {
        delete process.env.STEAMCMD_USER;
      }
    });

    test('refuses when free disk space is below the size + 1GiB margin', async () => {
      const d = makeDownloader({ diskFree: () => 5 * 1024 * 1024 * 1024 }); // 5 GiB free
      await assert.rejects(
        () => d.download('3777544219', undefined, { expectedBytes: 6 * 1024 * 1024 * 1024 }),
        /Not enough free disk space/,
      );
    });

    test('allows download when free space is sufficient', async () => {
      const d = makeDownloader({ diskFree: () => 100 * 1024 * 1024 * 1024 });
      await d.download('3777544219', undefined, { expectedBytes: 1024 * 1024 });
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219')));
    });

    test('disk probe failure degrades to a warning and proceeds', async () => {
      const d = makeDownloader({ diskFree: () => { throw new Error('probe failed'); } });
      await d.download('3777544219', undefined, { expectedBytes: 1024 });
      assert.ok(fs.existsSync(path.join(workshopDir, '3777544219')));
    });
  });
});
