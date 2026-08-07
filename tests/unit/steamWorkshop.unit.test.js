/**
 * Unit tests for SteamWorkshopClient (M1): id/URL resolution, metadata via the
 * keyless Steam Web API (mocked fetch), 24h cache behavior, and best-effort
 * HTML browse parsing. Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

import {
  SteamWorkshopClient,
  parseWorkshopInput,
} from '../../dist/workshop/SteamWorkshopClient.js';

const API_DETAIL = {
  publishedfileid: '2696145877',
  result: 1,
  creator: '76561198000000000',
  creator_app_id: 108600,
  consumer_app_id: 108600,
  title: 'Brita\'s Weapon Pack',
  description: 'Adds a huge arsenal of weapons to the game. <b>Fully balanced.</b>',
  file_size: '52428800',
  file_url: 'https://cdn.akamai.steamstatic.com/ugc/x/',
  preview_url: 'https://cdn.akamai.steamstatic.com/steam/ws/thumb.jpg',
  time_created: '1620000000',
  time_updated: '1720000000',
  subscriptions: '12345',
  views: '99999',
  tags: [{ tag: 'Weapons' }, { tag: 'Items' }],
  vote_data: { votes_up: 456, votes_down: 12 },
  workshop_accepted: true,
};

function jsonResponse(obj) {
  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

// Mirrors the current React SSR workshop browse page: hashed class names,
// stable href patterns (filedetails/?id=… title links, By NAME author links,
// thumbnail <img> after the id link's second occurrence). Includes a hero
// "Learn More" link that must be filtered out.
const BROWSE_HTML = `
<html><body>
<div class="hero"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2872282653">Learn More</a></div>
<div class="card">
  <div class="Sw3NXcvOA4Y-"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3777544219">Brita&#x27;s Armor Pack LITE (B42.20)</a></div>
  <div class="o14JIlvi52E-"><a href="https://steamcommunity.com/id/tutiwen/myworkshopfiles/?appid=108600">By tutiwen</a></div>
  <div class="UNowfeldbNg- Panel"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3777544219" class="tK5agp5sRy8-"><img src="https://images.steamusercontent.com/ugc/x.jpg?ima=fit" alt="Brita&#x27;s Armor Pack LITE (B42.20)" loading="lazy"/></a></div>
</div>
<div class="card">
  <div class="Sw3NXcvOA4Y-"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3777418909">Brita&#x27;s B42 Armor Pack</a></div>
  <div class="o14JIlvi52E-"><a href="https://steamcommunity.com/id/tutiwen/myworkshopfiles/?appid=108600">By tutiwen</a></div>
</div>
</body></html>`;

describe('parseWorkshopInput', () => {
  test('accepts a bare numeric id', () => {
    assert.equal(parseWorkshopInput('2696145877'), '2696145877');
  });

  test('accepts a sharedfiles filedetails URL', () => {
    assert.equal(
      parseWorkshopInput(
        'https://steamcommunity.com/sharedfiles/filedetails/?id=2696145877'
      ),
      '2696145877'
    );
  });

  test('accepts a URL with extra params after id', () => {
    assert.equal(
      parseWorkshopInput(
        'https://steamcommunity.com/sharedfiles/filedetails/?id=2696145877&searchtext=axe'
      ),
      '2696145877'
    );
  });

  test('accepts whitespace-padded input', () => {
    assert.equal(parseWorkshopInput('  1234567890  '), '1234567890');
  });

  test('rejects garbage with a descriptive error', () => {
    assert.throws(() => parseWorkshopInput('not-a-workshop-id'), /Could not parse/);
    assert.throws(() => parseWorkshopInput(''), /Could not parse/);
  });
});

describe('SteamWorkshopClient', () => {
  let tmpDir;
  let cacheCounter;
  let client;
  let cacheFile;
  let fetchCalls;

  before(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-ws-'));
    cacheCounter = 0;
  });

  after(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  // Each test gets its own cache file so earlier tests cannot warm it from disk.
  function makeClient(overrides = {}) {
    fetchCalls = [];
    cacheFile = path.join(tmpDir, `ws-${cacheCounter++}.json`);
    const fetchImpl = async (url, init = {}) => {
      fetchCalls.push({ url, method: init.method || 'GET' });
      if ((init.method || 'GET') === 'POST') {
        return jsonResponse({
          response: { result: 1, resultcount: 1, publishedfiledetails: [API_DETAIL] },
        });
      }
      return new Response(BROWSE_HTML, {
        status: 200,
        headers: { 'content-type': 'text/html' },
      });
    };
    client = new SteamWorkshopClient({
      cacheFile,
      fetchImpl,
      now: overrides.now || (() => 1_000_000_000_000),
      ...overrides,
    });
    return client;
  }

  describe('getDetails', () => {
    test('maps the API response into details', async () => {
      client = makeClient();
      const d = await client.getDetails('2696145877');
      assert.equal(d.id, '2696145877');
      assert.equal(d.title, "Brita's Weapon Pack");
      assert.equal(d.appId, '108600');
      assert.equal(d.fileSize, 52428800);
      assert.equal(d.subscribers, 12345);
      assert.equal(d.views, 99999);
      assert.equal(d.votesUp, 456);
      assert.equal(d.votesDown, 12);
      assert.equal(d.tags[0], 'Weapons');
      assert.equal(d.timeCreated, 1620000000);
      assert.ok(d.description.includes('arsenal'));
    });

    test('uses cache on the second call (fetch once)', async () => {
      client = makeClient();
      await client.getDetails('2696145877');
      await client.getDetails('2696145877');
      assert.equal(fetchCalls.length, 1);
    });

    test('forceRefresh bypasses the cache', async () => {
      client = makeClient();
      await client.getDetails('2696145877');
      await client.getDetails('2696145877', { forceRefresh: true });
      assert.equal(fetchCalls.length, 2);
    });

    test('expired cache refetches (TTL clock)', async () => {
      let now = 0;
      client = makeClient({ now: () => now });
      await client.getDetails('2696145877'); // cached at t=0
      now = 1_000_000_000_000 + 25 * 60 * 60 * 1000; // >24h later
      await client.getDetails('2696145877');
      assert.equal(fetchCalls.length, 2);
    });

    test('throws when Steam returns no data for the id', async () => {
      client = makeClient({
        fetchImpl: async () =>
          jsonResponse({ response: { result: 1, resultcount: 0, publishedfiledetails: [] } }),
      });
      await assert.rejects(
        () => client.getDetails('9999999999'),
        /no data for workshop id/
      );
    });

    test('network failure surfaces as a readable error', async () => {
      client = makeClient({
        fetchImpl: async () => {
          throw new Error('ECONNREFUSED');
        },
      });
      await assert.rejects(() => client.getDetails('2696145877'), /ECONNREFUSED/);
    });
  });

  describe('search', () => {
    test('parses item cards into summaries (new React page structure)', async () => {
      client = makeClient();
      const items = await client.search('brita', 20);
      assert.equal(items.length, 2);
      const first = items[0];
      assert.equal(first.id, '3777544219');
      assert.equal(first.title, "Brita's Armor Pack LITE (B42.20)");
      assert.equal(first.author, 'tutiwen');
      assert.ok(first.thumbnailUrl.startsWith('https://'));
      assert.ok(first.url.includes('id=3777544219'));
      const second = items[1];
      assert.equal(second.id, '3777418909');
      assert.equal(second.title, "Brita's B42 Armor Pack");
    });

    test('parses cards where the thumbnail link precedes the title link (live DOM order)', async () => {
      // Live Steam DOM (2026): thumbnail anchor comes first, title anchor after.
      const thumbFirst = `
<html><body>
<div class="hero"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2872282653">Learn More</a></div>
<div class="card">
  <div class="UNowfeldbNg- Panel"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3777544219" class="tK5agp5sRy8-"><img src="https://images.steamusercontent.com/ugc/x.jpg" alt="Thumb title" loading="lazy"/></a></div>
  <div class="Sw3NXcvOA4Y-"><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3777544219">Brita&#x27;s Armor Pack LITE (B42.20)</a></div>
  <div class="o14JIlvi52E-"><a href="https://steamcommunity.com/id/tutiwen/myworkshopfiles/?appid=108600">By tutiwen</a></div>
</div>
</body></html>`;
      client = makeClient({
        fetchImpl: async () => new Response(thumbFirst, { status: 200 }),
      });
      const items = await client.search('brita', 20);
      assert.equal(items.length, 1);
      assert.equal(items[0].title, "Brita's Armor Pack LITE (B42.20)");
      assert.equal(items[0].author, 'tutiwen');
      assert.ok(items[0].thumbnailUrl.startsWith('https://images.steamusercontent.com'));
    });

    test('filters out hero/navigation "Learn More" links', async () => {
      client = makeClient();
      const items = await client.search('brita', 20);
      assert.ok(!items.some((i) => i.id === '2872282653'));
    });

    test('limit caps the number of items', async () => {
      client = makeClient();
      const items = await client.search('weapon', 1);
      assert.equal(items.length, 1);
    });

    test('empty query returns [] without fetching', async () => {
      client = makeClient();
      const items = await client.search('   ', 10);
      assert.deepEqual(items, []);
      assert.equal(fetchCalls.length, 0);
    });

    test('unparseable HTML throws a graceful degradation error', async () => {
      client = new SteamWorkshopClient({
        cacheFile,
        now: () => 0,
        fetchImpl: async () =>
          new Response('<html><body>Steam login wall or empty</body></html>', {
            status: 200,
            headers: { 'content-type': 'text/html' },
          }),
      });
      await assert.rejects(() => client.search('weapon', 10), /No items parsed from Steam/);
    });

    test('HTTP error status surfaces', async () => {
      client = new SteamWorkshopClient({
        cacheFile,
        now: () => 0,
        fetchImpl: async () => new Response('nope', { status: 503 }),
      });
      await assert.rejects(() => client.search('weapon', 10), /HTTP 503/);
    });
  });

  describe('cache file', () => {
    test('persists details to disk and reloads them', async () => {
      client = makeClient();
      await client.getDetails('2696145877');
      assert.ok(fs.existsSync(cacheFile));
      const onDisk = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
      assert.ok(onDisk.entries['2696145877']);
      assert.equal(onDisk.entries['2696145877'].data.title, "Brita's Weapon Pack");
    });
  });
});
