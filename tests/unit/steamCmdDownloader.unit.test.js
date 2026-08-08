import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { SteamCmdDownloader } from "../../dist/workshop/SteamCmdDownloader.js";
import { SteamWorkshopClient } from "../../dist/workshop/SteamWorkshopClient.js";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

describe("SteamCmdDownloader supplement audit fixes", () => {
  test("F1: download rejects path traversal id and does not invoke runner", async () => {
    const workshopDir = mkdtempSync(join(tmpdir(), "wstest-"));
    try {
      const downloader = new SteamCmdDownloader({
        workshopDir,
        steamCmdPath: "steamcmd.exe",
        runner: async () => {
          throw new Error("Runner should not be invoked for invalid id");
        },
      });
      await assert.rejects(
        downloader.download("../../evil"),
        /Invalid workshop item id|Path traversal detected/
      );
    } finally {
      rmSync(workshopDir, { recursive: true, force: true });
    }
  });

  test("F2-F6: happy path downloads item, parses size, and cleans up temp dir", async () => {
    const workshopDir = mkdtempSync(join(tmpdir(), "wstest-"));
    let capturedTempDir = "";
    let capturedArgs = [];
    
    const runner = async (cmd, args) => {
      capturedArgs = args;
      // find +force_install_dir
      const idx = args.indexOf("+force_install_dir");
      if (idx !== -1) {
        capturedTempDir = args[idx + 1];
        // build fake success structure
        const itemDir = join(capturedTempDir, "steamapps", "workshop", "content", "108600", "123456");
        mkdirSync(itemDir, { recursive: true });
        writeFileSync(join(itemDir, "mod.info"), "1234567890"); // 10 bytes
      }
      return {
        code: 0,
        output: `Success. Downloaded item 123456 to "${capturedTempDir}" (10 bytes)`,
      };
    };

    const downloader = new SteamCmdDownloader({
      workshopDir,
      steamCmdPath: "steamcmd.exe",
      runner,
    });

    const result = await downloader.download("123456");
    
    assert.equal(result.id, "123456");
    assert.equal(result.bytes, 10);
    assert.ok(existsSync(result.downloadedPath));
    assert.ok(!existsSync(capturedTempDir), "temp dir should be cleaned up");
    assert.ok(capturedArgs.includes("123456"), "steamcmd args carry the item id");
    
    rmSync(workshopDir, { recursive: true, force: true });
  });
});

describe("SteamWorkshopClient supplement audit fixes", () => {
  test("F10b: search returns [] when page has browse evidence but no items", async () => {
    const client = new SteamWorkshopClient({
      fetchImpl: async () => {
        return new Response(
          "<html><body>workshop/browse appid=108600 no items here</body></html>",
          { status: 200 }
        );
      },
    });
    const results = await client.search("test", 10);
    assert.deepEqual(results, []);
  });

  test("F10a: workspaceAccepted missing maps to false", async () => {
    const client = new SteamWorkshopClient({
      fetchImpl: async () => {
        return new Response(
          JSON.stringify({
            response: {
              result: 1,
              publishedfiledetails: [
                {
                  publishedfileid: "123456",
                  result: 1,
                  title: "Test",
                  // missing workshop_accepted
                },
              ],
            },
          }),
          { status: 200 }
        );
      },
    });
    const details = await client.getDetails("123456");
    assert.equal(details.workspaceAccepted, false);
  });

  test("F9: cache entry with invalid cachedAt is pruned and fetches fresh", async () => {
    const cacheDir = mkdtempSync(join(tmpdir(), "cache-"));
    const cacheFile = join(cacheDir, "workshop_metadata.json");
    
    // write malformed cache
    writeFileSync(
      cacheFile,
      JSON.stringify({
        entries: {
          "123456": {
            data: { id: "123456", title: "Old" },
            cachedAt: "not-a-number",
          },
        },
      })
    );

    let fetchCalled = false;
    const client = new SteamWorkshopClient({
      cacheFile,
      fetchImpl: async () => {
        fetchCalled = true;
        return new Response(
          JSON.stringify({
            response: {
              result: 1,
              publishedfiledetails: [
                {
                  publishedfileid: "123456",
                  result: 1,
                  title: "Fresh",
                },
              ],
            },
          }),
          { status: 200 }
        );
      },
    });

    const details = await client.getDetails("123456");
    assert.equal(details.title, "Fresh");
    assert.ok(fetchCalled, "fetch should be called because cache entry was pruned");
    
    rmSync(cacheDir, { recursive: true, force: true });
  });
});