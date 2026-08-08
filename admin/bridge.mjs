#!/usr/bin/env node
/**
 * pz-mcp-server · Control Deck Bridge
 * ------------------------------------------------------------------
 * Zero-dependency Node bridge that:
 *   • spawns the real MCP server (dist/index.js, or tsx src/index.ts)
 *   • proxies browser JSON-RPC ⇄ stdio JSON-RPC
 *   • serves the dashboard UI at http://localhost:8787
 *   • streams ALL wire frames + pino stderr logs via SSE
 *   • reports real telemetry: uptime, child RSS memory, SSE sessions,
 *     and live SQLite stats from data/pz_database.db
 *
 * Run from repo root:   npm run dashboard
 */
import http from 'node:http';
import { spawn, execFile } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const ADMIN_DIR = join(ROOT, 'admin');
const PORT = Number(process.env.PZ_DECK_PORT || 8787);
const DB_PATH = join(ROOT, 'data', 'pz_database.db');
const LONG_TOOLS = new Set(['parse_game_files', 'index_knowledge_base', 'analyze_mod', 'workshop_download', 'workshop_analyze']);

/* ================= MCP child process ================= */
let child = null;
let startedAt = Date.now();
let state = 'starting';            // starting | live | restarting
let restartCount = 0;
let shuttingDown = false;
const pending = new Map();         // rpc id -> {resolve, reject, timer}
const sseClients = new Set();
const logs = [];                   // stderr ring buffer

function serverEntry() {
  const dist = join(ROOT, 'dist', 'index.js');
  // --no-warnings silences the node:sqlite ExperimentalWarning on Node 22
  if (existsSync(dist)) return { cmd: process.execPath, args: ['--no-warnings', dist], label: 'dist/index.js' };
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  return { cmd: npx, args: ['tsx', 'src/index.ts'], label: 'tsx src/index.ts (dev)' };
}

function pushLog(line) {
  const e = { line, t: Date.now() };
  logs.push(e);
  if (logs.length > 200) logs.shift();
  broadcast('log', e);
}

function spawnChild() {
  const { cmd, args, label } = serverEntry();
  startedAt = Date.now();
  // Windows pitfall: `shell: true` joins cmd+args WITHOUT quoting, so a node.exe
  // under "C:\Program Files\..." breaks ("'C:\Program' is not recognized").
  // .exe → spawn directly (no shell). .cmd/.bat → build a quoted command line.
  const needsShell = /\.(cmd|bat)$/i.test(cmd);
  const spawnOpts = {
    cwd: ROOT,
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, PZ_MCP_LOG_LEVEL: process.env.PZ_MCP_LOG_LEVEL || 'info' },
  };
  if (needsShell) {
    const line = '"' + cmd + '" ' + args.map(a => '"' + a.replace(/"/g, '\\"') + '"').join(' ');
    child = spawn(line, { ...spawnOpts, shell: true });
  } else {
    child = spawn(cmd, args, spawnOpts);
  }
  state = 'starting';
  broadcast('status', { state, pid: child.pid, entry: label });
  pushLog(`▸ spawning MCP server (${label}) pid=${child.pid}`);

  let buf = '';
  child.stdout.on('data', d => {
    restartCount = 0;              // healthy output seen
    state = 'live';
    buf += d.toString();
    let idx;
    while ((idx = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      let msg;
      try { msg = JSON.parse(line); } catch { continue; }
      onServerMessage(msg);
    }
  });

  let ebuf = '';
  child.stderr.on('data', d => {
    ebuf += d.toString();
    let idx;
    while ((idx = ebuf.indexOf('\n')) >= 0) {
      const line = ebuf.slice(0, idx).trim();
      ebuf = ebuf.slice(idx + 1);
      if (line) pushLog(line);
    }
  });

  child.on('exit', code => {
    pushLog(`⚠ server process exited (code ${code})`);
    for (const [, p] of pending) { clearTimeout(p.timer); p.reject(new Error('server process exited')); }
    pending.clear();
    if (!shuttingDown && restartCount++ < 5) {
      state = 'restarting';
      broadcast('status', { state });
      setTimeout(spawnChild, 800);
    }
  });
}

function onServerMessage(msg) {
  const isResponse = msg.id !== undefined && (msg.result !== undefined || msg.error !== undefined);
  broadcast('frame', { dir: isResponse ? 'res' : 'srv', msg, t: Date.now() });
  if (msg.id !== undefined && pending.has(msg.id)) {
    const p = pending.get(msg.id);
    pending.delete(msg.id);
    clearTimeout(p.timer);
    p.resolve(msg);
  }
}

function sendToServer(msg, timeout = 120000) {
  return new Promise((resolve, reject) => {
    if (!child || !child.stdin.writable) return reject(new Error('server process not running yet'));
    broadcast('frame', { dir: 'req', msg, t: Date.now() });
    if (msg.id === undefined) {                       // notification → fire & forget
      child.stdin.write(JSON.stringify(msg) + '\n');
      return resolve(null);
    }
    const timer = setTimeout(() => {
      pending.delete(msg.id);
      reject(new Error(`request #${msg.id} timed out after ${timeout / 1000}s`));
    }, timeout);
    pending.set(msg.id, { resolve, reject, timer });
    child.stdin.write(JSON.stringify(msg) + '\n');
  });
}

/* ================= real telemetry ================= */
import { DatabaseSync } from 'node:sqlite';

function dbStats() {
  if (!existsSync(DB_PATH)) return null;
  try {
    const db = new DatabaseSync(DB_PATH, { readOnly: true });
    const out = { total: 0, byType: {}, references: 0, mods: 0 };
    try {
      for (const r of db.prepare('SELECT type, COUNT(*) AS c FROM items GROUP BY type').all()) {
        out.byType[r.type] = r.c; out.total += r.c;
      }
      out.references = db.prepare('SELECT COUNT(*) AS c FROM "references"').get().c;
      out.mods = db.prepare('SELECT COUNT(*) AS c FROM mods').get().c;
    } catch (err) {
      // "no such table" just means parse_game_files has not run yet - keep
      // the graceful zeros quietly (telemetry polls every 2s). Anything else
      // (e.g. a corrupted DB) is a real SQL error: surface it on stderr.
      const msg = err && err.message ? err.message : String(err);
      if (!/no such table/i.test(msg)) console.error(`[bridge] dbStats query failed: ${msg}`);
    }
    db.close();
    return out;
  } catch (err) {
    const msg = err && err.message ? err.message : String(err);
    console.error(`[bridge] dbStats: cannot open ${DB_PATH}: ${msg}`);
    return null;
  }
}

function childMemoryMB() {
  return new Promise(resolve => {
    if (!child || !child.pid) return resolve(null);
    if (process.platform === 'win32') {
      execFile('tasklist', ['/FI', `PID eq ${child.pid}`, '/FO', 'CSV', '/NH'], (err, out) => {
        if (err) return resolve(null);
        const m = String(out).match(/"(\d[\d,]*)\s*K"/);
        resolve(m ? Math.round(parseInt(m[1].replace(/,/g, ''), 10) / 1024) : null);
      });
    } else {
      try {
        const m = readFileSync(`/proc/${child.pid}/status`, 'utf8').match(/VmRSS:\s+(\d+)\s+kB/);
        resolve(m ? Math.round(parseInt(m[1], 10) / 1024) : null);
      } catch { resolve(null); }
    }
  });
}

let lastTelemetry = null;
async function telemetry() {
  lastTelemetry = {
    state, pid: child?.pid ?? null,
    uptime: Math.floor((Date.now() - startedAt) / 1000),
    sessions: sseClients.size,
    memMB: await childMemoryMB(),
    db: dbStats(),
    entry: serverEntry().label,
    dbPath: DB_PATH,
    t: Date.now(),
  };
  broadcast('telemetry', lastTelemetry);
}
setInterval(telemetry, 2000);

/* ================= SSE broadcast ================= */
function broadcast(event, data) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of sseClients) { try { res.write(payload); } catch { /* drop */ } }
}

/* ================= zod → JSON Schema normalization =================
 * The MCP server ships raw zod instances as `inputSchema` (the SDK only
 * converts zod for registerTool, not for a hand-rolled tools/list). Zod
 * serializes to `{ _def, ~standard, _cached }`; field names only survive in
 * `_cached.shape`, which zod populates lazily after the first parse. So every
 * tools/list reply is normalized here to real JSON Schema so the dashboard
 * always receives `{ type: 'object', properties, required }`:
 *   1. keep a proper `properties` if the server ever sends one
 *   2. else walk `_cached.shape` (live truth for tools already called)
 *   3. else mirror the real schemas from src/index.ts
 */

const BLOCK_TYPES = ['item', 'recipe', 'evolvedrecipe', 'fixing', 'sound', 'vehicle'];
const SEARCH_TYPES = BLOCK_TYPES.concat(['all']);
const SCHEMA_MIRROR = {
  search_vanilla: {
    required: ['query'],
    properties: {
      query: { type: 'string', maxLength: 1000, description: 'Search query for vanilla game content' },
      type: { type: 'string', enum: SEARCH_TYPES, description: 'Filter by content type' },
      category: { type: 'string', maxLength: 256, description: 'Filter by item category' },
      tags: { type: 'string', maxLength: 256, description: 'Filter by tags (comma-separated, matches if ANY tag present)' },
      metalValueMin: { type: 'number', description: 'Minimum metal value' },
      metalValueMax: { type: 'number', description: 'Maximum metal value' },
      attachmentType: { type: 'string', maxLength: 256, description: 'Filter by attachment type' },
      minWeight: { type: 'number', minimum: 0, description: 'Minimum Weight (kg)' },
      maxWeight: { type: 'number', minimum: 0, description: 'Maximum Weight (kg)' },
      minCalories: { type: 'number', minimum: 0, description: 'Minimum Calories (food items)' },
      maxCalories: { type: 'number', minimum: 0, description: 'Maximum Calories (food items)' },
      limit: { type: 'number', minimum: 1, maximum: 100, default: 20, description: 'Maximum number of results' },
    },
  },
  search_recipes: {
    required: [],
    properties: {
      query: { type: 'string', maxLength: 1000, description: 'Free-text search on recipe name or id' },
      category: { type: 'string', maxLength: 256, description: 'Filter by recipe category (e.g. Carpentry, Cooking, Repair)' },
      skill: { type: 'string', maxLength: 256, description: 'Filter by required skill (e.g. Woodwork, Blacksmith, Carpentry)' },
      minSkillLevel: { type: 'number', minimum: 0, description: 'Minimum required skill level' },
      maxSkillLevel: { type: 'number', minimum: 0, description: 'Maximum required skill level' },
      ingredient: { type: 'string', maxLength: 256, description: 'Recipes using this item or tag as an ingredient (accepts Base.Nails, Nails, or base:nails)' },
      tool: { type: 'string', maxLength: 256, description: 'Recipes requiring this item or tag as a tool (mode:keep input)' },
      result: { type: 'string', maxLength: 256, description: 'Recipes producing this item' },
      limit: { type: 'number', minimum: 1, maximum: 100, default: 20, description: 'Maximum number of results' },
    },
  },
  generate_script: {
    required: ['type', 'name', 'properties'],
    properties: {
      type: { type: 'string', enum: BLOCK_TYPES, description: 'Type of script to generate' },
      name: { type: 'string', maxLength: 256, description: 'Name of the item/recipe/etc to generate' },
      properties: { type: 'record', description: 'Properties and specifications for the generated content' },
      module: { type: 'string', maxLength: 256, default: 'Base', description: 'Module name to use' },
      balance: { type: 'string', enum: ['vanilla', 'powerful', 'weak', 'custom'], description: 'Balance mode: vanilla (default), powerful, weak, or custom (no adjustments)' },
      includeComments: { type: 'boolean', description: 'Include explanatory comments in the generated script' },
    },
  },
  validate_script: {
    required: ['content'],
    properties: {
      content: { type: 'string', maxLength: 1000000, description: 'Script content to validate' },
      type: { type: 'string', enum: BLOCK_TYPES, description: 'Expected script type' },
      strict: { type: 'boolean', default: false, description: 'Enable strict validation mode' },
    },
  },
  check_references: {
    required: ['references'],
    properties: {
      references: { type: 'array', description: 'List of references to validate' },
      type: { type: 'string', enum: ['item', 'sound', 'sprite', 'all'], default: 'all', description: 'Type of references to check' },
    },
  },
  analyze_mod: {
    required: ['modPath'],
    properties: {
      modPath: { type: 'string', maxLength: 4096, description: 'Path to mod directory' },
      checkBalance: { type: 'boolean', default: true, description: 'Perform balance analysis' },
      checkCompatibility: { type: 'boolean', default: true, description: 'Check compatibility with vanilla' },
    },
  },
  parse_game_files: {
    required: [],
    properties: {
      gamePath: { type: 'string', maxLength: 4096, description: 'Path to Project Zomboid installation (auto-detected if not provided)' },
      forceReparse: { type: 'boolean', default: false, description: 'Force re-parsing even if data exists' },
    },
  },
  index_knowledge_base: {
    required: [],
    properties: {
      path: { type: 'string', maxLength: 4096, description: 'Path to the knowledge base docs directory (defaults to PZ_MCP_KB_PATH env or D:\\PZ-Modding\\Documentation)' },
      overwrite: { type: 'boolean', default: true, description: 'Full re-index. Set to false for an mtime-based incremental sync (unchanged docs skipped, changed docs updated, deleted docs pruned)' },
    },
  },
  analyze_recipe_chain: {
    required: ['seed'],
    properties: {
      seed: { type: 'string', maxLength: 1000, description: 'Item or recipe id to start the chain from' },
      direction: { type: 'string', enum: ['upstream', 'downstream', 'both'], default: 'both', description: 'Which edges to follow: what makes it (upstream), what it makes / consumes it (downstream), or both' },
      maxDepth: { type: 'number', minimum: 1, maximum: 10, default: 3, description: 'Maximum chain depth to traverse' },
    },
  },
  detect_recipe_conflicts: {
    required: [],
    properties: {
      limit: { type: 'number', minimum: 1, maximum: 200, default: 50, description: 'Maximum number of conflicts to report' },
    },
  },
  export_mod_script: {
    required: ['modPath', 'type', 'name'],
    properties: {
      modPath: { type: 'string', maxLength: 4096, description: 'Path to the mod directory to write the script into' },
      type: { type: 'string', enum: BLOCK_TYPES, description: 'Type of script to generate' },
      name: { type: 'string', maxLength: 256, description: 'Name of the item/recipe/etc (also used for the output filename)' },
      properties: { type: 'record', default: {}, description: 'Properties and specifications for the generated content' },
      module: { type: 'string', maxLength: 256, default: 'Base', description: 'Module name to use' },
      balance: { type: 'string', enum: ['vanilla', 'powerful', 'weak', 'custom'], description: 'Balance mode: vanilla (default), powerful, weak, or custom (no adjustments)' },
      includeComments: { type: 'boolean', description: 'Include explanatory comments in the generated script' },
      dryRun: { type: 'boolean', default: true, description: 'Preview the target file only — no disk changes. Set to false to actually write' },
    },
  },
  search_knowledge_base: {
    required: ['query'],
    properties: {
      query: { type: 'string', maxLength: 1000, description: 'Search query for knowledge base content' },
      topic: { type: 'string', maxLength: 256, description: 'Filter by exact topic (filename without .md)' },
      limit: { type: 'number', minimum: 1, maximum: 100, default: 10, description: 'Maximum number of results' },
    },
  },
  workshop_search: {
    required: ['query'],
    properties: {
      query: { type: 'string', minLength: 1, maxLength: 120, description: 'Workshop search text (browse the Project Zomboid workshop)' },
      limit: { type: 'number', minimum: 1, maximum: 100, default: 20, description: 'Maximum number of results (default 20)' },
    },
  },
  workshop_get_details: {
    required: ['id'],
    properties: {
      id: { type: 'string', minLength: 1, maxLength: 300, description: 'Workshop item id or URL, e.g. 2696145877 or https://steamcommunity.com/sharedfiles/filedetails/?id=2696145877' },
      forceRefresh: { type: 'boolean', default: false, description: 'Bypass the 24h metadata cache and re-fetch from Steam' },
    },
  },
  workshop_download: {
    required: ['id'],
    properties: {
      id: { type: 'string', minLength: 1, maxLength: 300, description: 'Workshop item id or URL to download via SteamCMD (verified to be a Project Zomboid item first)' },
    },
  },
  workshop_analyze: {
    required: ['id'],
    properties: {
      id: { type: 'string', minLength: 1, maxLength: 300, description: 'Workshop item id or URL — downloads it (SteamCMD), parses its scripts into the DB, and runs the full analysis suite, returning a Mod Report' },
    },
  },
  list_knowledge_topics: { required: [], properties: {} },
};

function zodShapeToProp(k, z) {
  if (!z || !z._def) return { prop: { type: 'string' }, required: false };
  let def = z._def;
  let required = true;
  let description = def.description || '';
  let guard = 0;
  while (def && guard++ < 6 && (def.typeName === 'ZodOptional' || def.typeName === 'ZodDefault' || def.typeName === 'ZodNullable')) {
    required = false;
    if (!description) description = def.description || '';
    def = def.innerType && def.innerType._def ? def.innerType._def : null;
    if (def && !description) description = def.description || '';
  }
  const prop = { type: 'string' };
  if (description) prop.description = description;
  const typeName = def ? def.typeName : 'ZodUnknown';
  if (typeName === 'ZodString') {
    (def.checks || []).forEach(c => {
      if (c.kind === 'min') prop.minLength = c.value;
      else if (c.kind === 'max') prop.maxLength = c.value;
    });
  } else if (typeName === 'ZodNumber') {
    prop.type = 'number';
    (def.checks || []).forEach(c => {
      if (c.kind === 'min') prop.minimum = c.value;
      else if (c.kind === 'max') prop.maximum = c.value;
    });
  } else if (typeName === 'ZodBoolean') {
    prop.type = 'boolean';
  } else if (typeName === 'ZodEnum') {
    const v = def.values;
    const vals = Array.isArray(v) ? v.slice() : (v && Array.isArray(v.values) ? v.values.slice() : null);
    if (vals && vals.length) prop.enum = vals;
  } else if (typeName === 'ZodArray') {
    prop.type = 'array';
  } else if (typeName === 'ZodRecord') {
    prop.type = 'record';
  } else if (typeName === 'ZodObject') {
    prop.type = 'object';
  }
  return { prop, required };
}

function normalizeInputSchema(tool) {
  const raw = tool && tool.inputSchema;
  if (!raw || typeof raw !== 'object') return raw;
  if (raw.properties && typeof raw.properties === 'object' && Object.keys(raw.properties).length) return raw; // already JSON Schema
  const shape = raw._cached && raw._cached.shape;
  if (shape && typeof shape === 'object' && Object.keys(shape).length) {
    const required = [];
    const properties = {};
    for (const [k, z] of Object.entries(shape)) {
      const entry = zodShapeToProp(k, z);
      properties[k] = entry.prop;
      if (entry.required) required.push(k);
    }
    return { type: 'object', properties, required };
  }
  const mirror = tool.name && SCHEMA_MIRROR[tool.name];
  if (mirror) return { type: 'object', properties: mirror.properties, required: mirror.required };
  return raw;
}

function normalizeToolsReply(reply) {
  const tools = reply && reply.result && reply.result.tools;
  if (Array.isArray(tools)) {
    for (const t of tools) {
      if (t && t.inputSchema) t.inputSchema = normalizeInputSchema(t);
    }
  }
  return reply;
}

/* ================= HTTP server ================= */
function json(res, obj, code = 200) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}
async function readBody(req) {
  let s = '';
  for await (const chunk of req) { s += chunk; if (s.length > 5_000_000) throw new Error('body too large'); }
  return s;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  try {
    if (req.method === 'GET' && url.pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(readFileSync(join(ADMIN_DIR, 'index.html')));
    }

    if (req.method === 'GET' && url.pathname === '/events') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache',
        'Connection': 'keep-alive', 'Access-Control-Allow-Origin': '*',
      });
      res.write('retry: 1500\n\n');
      sseClients.add(res);
      res.write(`event: hello\ndata: ${JSON.stringify({ state, pid: child?.pid ?? null, logs: logs.slice(-40), telemetry: lastTelemetry })}\n\n`);
      const ping = setInterval(() => { try { res.write(': ping\n\n'); } catch { /* */ } }, 25000);
      req.on('close', () => { clearInterval(ping); sseClients.delete(res); });
      return;
    }

    if (req.method === 'GET' && url.pathname === '/api/stats') return json(res, lastTelemetry || { state });

    if (req.method === 'POST' && url.pathname === '/api/restart') {
      pushLog('↻ restart requested from Control Deck');
      try { child?.kill('SIGTERM'); } catch { /* */ }
      return json(res, { ok: true });
    }

    if (req.method === 'POST' && url.pathname === '/rpc') {
      let msg;
      try { msg = JSON.parse(await readBody(req)); }
      catch { return json(res, { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }, 400); }
      const timeout = LONG_TOOLS.has(msg.params?.name) ? 300000 : 120000;
      try {
        const reply = await sendToServer(msg, timeout);
        return reply === null ? json(res, { ok: true }, 202) : json(res, normalizeToolsReply(reply));
      } catch (e) {
        return json(res, { jsonrpc: '2.0', id: msg.id ?? null, error: { code: -32000, message: String(e.message || e) } }, 502);
      }
    }

    res.writeHead(404); res.end('not found');
  } catch (e) { json(res, { error: String(e.message || e) }, 500); }
});

/* ================= lifecycle ================= */
process.on('SIGINT', () => { shuttingDown = true; try { child?.kill(); } catch { /* */ } process.exit(0); });
process.on('exit', () => { try { child?.kill(); } catch { /* */ } });

// Bind to loopback only: the /rpc + /api/restart endpoints can drive the
// whole MCP server, so they must never be reachable from other machines
// (freebuff review H3).
server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  pz-mcp-server · Control Deck bridge');
  console.log(`  ▸ dashboard   http://localhost:${PORT}`);
  console.log(`  ▸ entry       ${serverEntry().label}`);
  console.log(`  ▸ database    ${existsSync(DB_PATH) ? DB_PATH : 'not created yet — run parse_game_files'}`);
  console.log('');
});
spawnChild();