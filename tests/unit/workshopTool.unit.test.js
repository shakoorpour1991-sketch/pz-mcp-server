/**
 * Unit tests for the workshop_download tool handler guards (audit P0/P1):
 * dry-run preview without touching disk, download size limit, app-id
 * verification, and concurrent-download dedupe. Handlers receive their
 * dependencies via ToolContext, so these run with plain mocks — no network,
 * no SteamCMD, no server process.
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';

import { workshopTools } from '../../dist/tools/workshop.js';
import { WorkshopDownloadSchema } from '../../dist/schemas.js';

const downloadTool = workshopTools.find((t) => t.name === 'workshop_download');
assert.notEqual(downloadTool, undefined, 'workshop_download must be registered');

function makeCtx(overrides = {}) {
  const downloaded = [];
  const ctx = {
    workshopClient: {
      getDetails: async () => ({
        id: '123456',
        title: 'Test Mod',
        appId: '108600',
        fileSize: 1000,
        url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=123456',
        subscribers: 42,
      }),
    },
    steamCmdDownloader: {
      resolveWorkshopDir: async () => '/tmp/workshop',
      download: async (id) => {
        downloaded.push(id);
        return { id, downloadedPath: `/tmp/workshop/${id}`, bytes: 1000 };
      },
    },
    activeWorkshopDownloads: new Set(),
    ...overrides,
  };
  return { ctx, downloaded };
}

describe('workshop_download tool guards', () => {
  test('dryRun=true verifies the item but never invokes SteamCMD', async () => {
    const { ctx, downloaded } = makeCtx();
    const result = await downloadTool.handler({ id: '123456', dryRun: true }, ctx);
    assert.equal(result.structuredContent.dryRun, true);
    assert.equal(result.structuredContent.id, '123456');
    assert.equal(result.structuredContent.fileSize, 1000);
    assert.equal(downloaded.length, 0, 'download must not be invoked on dry-run');
    assert.ok(result.content[0].text.includes('Dry run'));
  });

  test('dryRun=true still refuses a non-Project-Zomboid item', async () => {
    const { ctx } = makeCtx({
      workshopClient: {
        getDetails: async () => ({ id: '123456', title: 'CS:GO Mod', appId: '730', fileSize: 500 }),
      },
    });
    await assert.rejects(
      downloadTool.handler({ id: '123456', dryRun: true }, ctx),
      (err) =>
        err instanceof McpError &&
        err.code === ErrorCode.InvalidParams &&
        /not Project Zomboid/.test(err.message),
    );
  });

  test('an oversized item is refused before any download (size limit)', async () => {
    const big = 10 * 1024 * 1024 * 1024; // 10 GiB > 4 GiB default cap
    const { ctx, downloaded } = makeCtx({
      workshopClient: {
        getDetails: async () => ({
          id: '123456', title: 'Huge Mod', appId: '108600', fileSize: big,
        }),
      },
    });
    await assert.rejects(
      downloadTool.handler({ id: '123456', dryRun: false }, ctx),
      (err) =>
        err instanceof McpError &&
        err.code === ErrorCode.InvalidParams &&
        /download limit/.test(err.message),
    );
    assert.equal(downloaded.length, 0);
  });

  test('unknown size (0) passes the size limit', async () => {
    const { ctx, downloaded } = makeCtx({
      workshopClient: {
        getDetails: async () => ({
          id: '123456', title: 'No Size Mod', appId: '108600', fileSize: 0,
        }),
      },
    });
    const result = await downloadTool.handler({ id: '123456', dryRun: false }, ctx);
    assert.equal(downloaded.length, 1);
    assert.equal(result.structuredContent.id, '123456');
  });

  test('a concurrent download of the same item is rejected', async () => {
    const { ctx } = makeCtx();
    ctx.activeWorkshopDownloads.add('123456');
    await assert.rejects(
      downloadTool.handler({ id: '123456', dryRun: false }, ctx),
      (err) =>
        err instanceof McpError &&
        err.code === ErrorCode.InvalidParams &&
        /already downloading/.test(err.message),
    );
  });

  test('successful download registers + releases the dedupe set', async () => {
    const { ctx, downloaded } = makeCtx();
    const result = await downloadTool.handler({ id: '123456', dryRun: false }, ctx);
    assert.equal(downloaded.length, 1);
    assert.equal(result.structuredContent.dryRun, undefined);
    assert.equal(ctx.activeWorkshopDownloads.has('123456'), false, 'dedupe entry released');
  });

  test('WorkshopDownloadSchema defaults dryRun to false', () => {
    const parsed = WorkshopDownloadSchema.parse({ id: '123456' });
    assert.equal(parsed.dryRun, false);
    assert.equal(WorkshopDownloadSchema.parse({ id: '123456', dryRun: true }).dryRun, true);
  });
});
