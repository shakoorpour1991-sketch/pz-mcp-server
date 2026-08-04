/**
 * M3 integration tests: exercises the built MCP server over real stdio
 * transport, speaking the MCP JSON-RPC protocol (newline-delimited).
 *
 * Hermetic: the server is spawned with a temp working directory so its
 * SQLite database lands in <tmp>/data/pz_database.db, and a fake Project
 * Zomboid install + mod are created as fixtures. Requires `npm run build`
 * to have produced dist/ (the `test` script builds first).
 */
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const SERVER = path.resolve(__dirname, '..', 'dist', 'index.js');

const GAME_SCRIPT = [
  'module Base {',
  'item TestSword',
  '{',
  '	Type = Weapon,',
  '	DisplayName = Test Sword,',
  '	MaxDamage = 10,',
  '	Weight = 2,',
  '}',
  'item TestHelmet',
  '{',
  '	Type = Clothing,',
  '	DisplayName = Test Helmet,',
  '}',
  'recipe TestSwordRecipe',
  '{',
  '	Result: TestSword=1,',
  '	Water=2,',
  '}',
  '}',
].join('\n');

const MOD_INFO = [
  'name=Test Mod',
  'id=TestMod',
  'description=Fixture mod for integration tests',
].join('\n');

const MOD_SCRIPT = [
  'item ModDagger',
  '{',
  '	Type = Weapon,',
  '	DisplayName = Mod Dagger,',
  '	MaxDamage = 5,',
  '}',
].join('\n');

/** Minimal MCP stdio client. */
function createClient(cwd) {
  const child = spawn(process.execPath, [SERVER], { cwd, stdio: ['pipe', 'pipe', 'pipe'] });
  let buf = '';
  let nextId = 1;
  const pending = new Map();
  const stderrChunks = [];

  child.stdout.on('data', (chunk) => {
    buf += chunk.toString();
    let idx;
    while ((idx = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        continue; // tolerate non-JSON lines
      }
      if (msg.id !== undefined && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(`${msg.error.code}: ${msg.error.message}`));
        else resolve(msg.result);
      }
    }
  });

  child.stderr.on('data', (chunk) => stderrChunks.push(chunk.toString()));

  return {
    call(method, params) {
      const id = nextId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, ...(params ? { params } : {}) }) + '\n');
      });
    },
    notify(method, params) {
      child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method, ...(params ? { params } : {}) }) + '\n');
    },
    stop() {
      child.stdin.end();
      const killTimer = setTimeout(() => child.kill('SIGKILL'), 3000);
      child.once('exit', () => clearTimeout(killTimer));
    },

    /** Resolves when the child process has fully exited. */
    waitExit() {
      return new Promise((resolve) => {
        if (child.exitCode !== null || child.signalCode !== null) return resolve();
        child.once('exit', resolve);
      });
    },
    get stderr() {
      return stderrChunks.join('');
    },
  };
}

const TOOLS = [
  'search_vanilla',
  'generate_script',
  'validate_script',
  'check_references',
  'analyze_mod',
  'parse_game_files',
];

describe('pz-mcp-server integration', () => {
  let tmpDir;
  let gameDir;
  let modDir;
  let client;

  beforeAll(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-mcp-test-'));
    gameDir = path.join(tmpDir, 'game');
    modDir = path.join(tmpDir, 'mod');

    // Fixture: fake Project Zomboid installation
    fs.mkdirSync(path.join(gameDir, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(gameDir, 'media', 'scripts', 'items.txt'), GAME_SCRIPT);

    // Fixture: fake mod with mod.info + scripts
    fs.mkdirSync(path.join(modDir, 'media', 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(modDir, 'mod.info'), MOD_INFO);
    fs.writeFileSync(path.join(modDir, 'media', 'scripts', 'mod_items.txt'), MOD_SCRIPT);

    client = createClient(tmpDir);
    await client.call('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'jest-integration', version: '1.0.0' },
    });
    client.notify('notifications/initialized');
  }, 30000);

  afterAll(async () => {
    if (client) {
      client.stop();
      await client.waitExit(); // release the SQLite file lock before rm
    }
    if (tmpDir) fs.rmSync(tmpDir, { recursive: true, force: true });
  }, 10000);

  test('tools/list exposes all 6 MCP tools', async () => {
    const result = await client.call('tools/list');
    const names = result.tools.map((t) => t.name).sort();
    expect(names).toEqual([...TOOLS].sort());
  }, 30000);

  test('parse_game_files parses fixture game scripts', async () => {
    const result = await client.call('tools/call', {
      name: 'parse_game_files',
      arguments: { gamePath: gameDir },
    });
    const text = result.content[0].text;
    expect(text).toContain('**Items**: 2 parsed');
    expect(text).toContain('**Recipes**: 1 parsed');
    expect(text).not.toContain('Parse Errors:');
  }, 30000);

  test('search_vanilla finds parsed items', async () => {
    const result = await client.call('tools/call', {
      name: 'search_vanilla',
      arguments: { query: 'TestSword', limit: 10 },
    });
    const text = result.content[0].text;
    expect(text).toContain('TestSword');
    expect(text).toContain('Weapon');
  }, 30000);

  test('search_vanilla empty query lists items without crashing', async () => {
    const result = await client.call('tools/call', {
      name: 'search_vanilla',
      arguments: { query: '', limit: 5 },
    });
    const text = result.content[0].text;
    expect(text).toContain('Found');
    expect(text).toContain('TestHelmet');
  }, 30000);

  test('validate_script accepts a valid item script', async () => {
    const result = await client.call('tools/call', {
      name: 'validate_script',
      arguments: {
        content: 'item SampleKnife\n{\n\tType = Weapon,\n\tDisplayName = Sample Knife,\n}',
        type: 'item',
      },
    });
    const text = result.content[0].text;
    expect(text).toContain('✅ **Valid**');
  }, 30000);

  test('generate_script produces an item script block', async () => {
    const result = await client.call('tools/call', {
      name: 'generate_script',
      arguments: {
        type: 'item',
        name: 'GeneratedPickaxe',
        properties: { Type: 'Weapon', MaxDamage: 15 },
        module: 'Test',
      },
    });
    const text = result.content[0].text;
    expect(text).toContain('GeneratedPickaxe');
    expect(text).toContain('MaxDamage');
  }, 30000);

  test('check_references resolves known and unknown references', async () => {
    const result = await client.call('tools/call', {
      name: 'check_references',
      arguments: { references: ['TestSword', 'NoSuchItemEver'], type: 'item' },
    });
    const text = result.content[0].text;
    expect(text).toContain('✅ Valid: 1');
    expect(text).toContain('❌ Invalid: 1');
    expect(text).toContain('NoSuchItemEver');
  }, 30000);

  test('extractReferences populates the references table during parse', async () => {
    const Database = require('better-sqlite3');
    const dbPath = path.join(tmpDir, 'data', 'pz_database.db');
    const db = new Database(dbPath, { readonly: true });
    try {
      const rows = db.prepare(
        'SELECT item_id, reference_id, reference_type, context FROM "references" ORDER BY context'
      ).all();
      const recipeRows = rows.filter((r) => r.item_id === 'TestSwordRecipe');
      expect(recipeRows.length).toBeGreaterThanOrEqual(2);
      expect(recipeRows.some((r) => r.context === 'result' && r.reference_id === 'TestSword')).toBe(true);
      expect(recipeRows.some((r) => r.context === 'ingredient' && r.reference_id === 'Water')).toBe(true);
    } finally {
      db.close();
    }
  }, 30000);

  test('generate_script produces evolvedrecipe and vehicle scripts', async () => {
    const evo = await client.call('tools/call', {
      name: 'generate_script',
      arguments: {
        type: 'evolvedrecipe',
        name: 'TestCampfirePot',
        properties: {
          baseItem: 'Base.TinPot',
          ingredients: ['Base.Water', 'Base.Cabbage'],
          maxItems: 3,
        },
      },
    });
    const evoText = evo.content[0].text;
    expect(evoText).toContain('evolvedrecipe TestCampfirePot');
    expect(evoText).toContain('BaseItem: Base.TinPot');
    expect(evoText).toContain('Ingredients: Base.Water, Base.Cabbage');

    const veh = await client.call('tools/call', {
      name: 'generate_script',
      arguments: {
        type: 'vehicle',
        name: 'TestCar',
        properties: { Mass: 1200 },
      },
    });
    const vehText = veh.content[0].text;
    expect(vehText).toContain('vehicle TestCar');
    expect(vehText).toContain('Mass = 1200');
  }, 30000);

  test('analyze_mod analyzes the fixture mod', async () => {
    const result = await client.call('tools/call', {
      name: 'analyze_mod',
      arguments: { modPath: modDir },
    });
    const text = result.content[0].text;
    expect(text).toContain('**Mod Name**: Test Mod');
    expect(text).toContain('**Scripts**: 1 file(s) found');
  }, 30000);

  test('analyze_mod rejects path traversal with InvalidParams', async () => {
    await expect(
      client.call('tools/call', {
        name: 'analyze_mod',
        arguments: { modPath: `${gameDir}${path.sep}..${path.sep}..` },
      })
    ).rejects.toThrow(/Invalid modPath/);
  }, 30000);

  test('server stays alive with no uncaught stderr errors after tool calls', () => {
    const stderr = client.stderr;
    expect(stderr).not.toContain('Failed to initialize server');
    expect(stderr).not.toContain('Unhandled');
  });
});
