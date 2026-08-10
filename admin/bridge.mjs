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
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const ADMIN_DIR = join(ROOT, 'admin');
const PORT = Number(process.env.PZ_DECK_PORT || 8787);
const DB_PATH = join(ROOT, 'data', 'pz_database.db');
const SETTINGS_PATH = join(ROOT, 'data', 'deck-settings.json');
const LONG_TOOLS = new Set(['parse_game_files', 'index_knowledge_base', 'analyze_mod', 'workshop_download', 'workshop_analyze']);

/* Split dashboard assets: the deck used to be one self-contained index.html.
 * The slim shell now links style.css and the *.mjs modules — these are the
 * ONLY static files served. Everything else (vendor/tailwind.js, …) is
 * deliberately NOT served: it never loaded before either, so behavior stays
 * byte-for-byte identical. */
const DECK_STATIC = new Map([
  ['/style.css', 'text/css; charset=utf-8'],
  ['/main.mjs', 'text/javascript; charset=utf-8'],
  ['/utils.mjs', 'text/javascript; charset=utf-8'],
  ['/data.mjs', 'text/javascript; charset=utf-8'],
]);

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

/* Persisted bridge settings (e.g. the workshop download folder). Survives
 * bridge restarts; injected into the MCP child's env at spawn time. */
function readDeckSettings() {
  try { return JSON.parse(readFileSync(SETTINGS_PATH, 'utf8')); } catch { return {}; }
}
function writeDeckSettings(s) {
  try { mkdirSync(dirname(SETTINGS_PATH), { recursive: true }); } catch { /* */ }
  writeFileSync(SETTINGS_PATH, JSON.stringify(s, null, 2));
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
  const deckSettings = readDeckSettings();
  const spawnOpts = {
    cwd: ROOT,
    stdio: ['pipe', 'pipe', 'pipe'],
    env: {
      ...process.env,
      PZ_MCP_LOG_LEVEL: process.env.PZ_MCP_LOG_LEVEL || 'info',
      ...(deckSettings.workshopDir ? { PZ_WORKSHOP_DIR: deckSettings.workshopDir } : {}),
    },
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

/* ================= live zod schemas (src/schemas.ts) =================
 * Prefer the compiled dist/schemas.js; in dev (no dist) fall back to loading
 * the TS source via tsx (the same dev mechanism the spawned child uses). If
 * both fail we degrade gracefully: normalization uses the serialized zod
 * shape and server-side validation is skipped.
 */
let TOOL_SCHEMAS = null;
try {
  ({ TOOL_SCHEMAS } = await import('../dist/schemas.js'));
} catch {
  try {
    await import('tsx/esm');
    ({ TOOL_SCHEMAS } = await import('../src/schemas.ts'));
  } catch {
    TOOL_SCHEMAS = null;
  }
}

function zodFieldToProp(f) {
  if (!f || !f._def) return { prop: { type: 'string' }, required: false };
  let def = f._def;
  let required = true;
  let description = def.description || '';
  let defaultValue;
  let guard = 0;
  while (def && guard++ < 6 && (def.typeName === 'ZodOptional' || def.typeName === 'ZodDefault' || def.typeName === 'ZodNullable')) {
    required = false;
    if (!description) description = def.description || '';
    if (def.typeName === 'ZodDefault' && defaultValue === undefined) {
      const dv = def.defaultValue;
      defaultValue = typeof dv === 'function' ? dv() : dv;
    }
    def = def.innerType && def.innerType._def ? def.innerType._def : null;
    if (def && !description) description = def.description || '';
  }
  if (def && def.typeName === 'ZodEffects' && def.schema && def.schema._def) {
    if (!description) description = def.description || '';
    def = def.schema._def;
  }
  const prop = { type: 'string' };
  if (description) prop.description = description;
  if (defaultValue !== undefined) prop.default = defaultValue;
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
    if (Array.isArray(v) && v.length) prop.enum = v.slice();
  } else if (typeName === 'ZodArray') {
    prop.type = 'array';
  } else if (typeName === 'ZodRecord') {
    prop.type = 'record';
  } else if (typeName === 'ZodObject') {
    prop.type = 'object';
  }
  return { prop, required };
}

function liveSchemaToJSONSchema(name) {
  const schema = TOOL_SCHEMAS && TOOL_SCHEMAS[name];
  if (!schema || typeof schema.shape !== 'object' || schema.shape === null) return null;
  const required = [];
  const properties = {};
  for (const [k, f] of Object.entries(schema.shape)) {
    const entry = zodFieldToProp(f);
    properties[k] = entry.prop;
    if (entry.required) required.push(k);
  }
  return { type: 'object', properties, required };
}

function validateArgs(name, args) {
  const schema = TOOL_SCHEMAS && TOOL_SCHEMAS[name];
  if (!schema || typeof schema.safeParse !== 'function') return null;
  const res = schema.safeParse(args === undefined ? {} : args);
  if (res.success) return null;
  const parts = res.error.issues.map(i => `${i.path.length ? i.path.join('.') : '(root)'}: ${i.message}`);
  return `Invalid parameters: ${parts.join(', ')}`;
}

function zodShapeToProp(z) {
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
  const live = tool.name && liveSchemaToJSONSchema(tool.name);
  if (live) return live;
  const shape = raw._cached && raw._cached.shape;
  if (shape && typeof shape === 'object' && Object.keys(shape).length) {
    const required = [];
    const properties = {};
    for (const [k, z] of Object.entries(shape)) {
      const entry = zodShapeToProp(z);
      properties[k] = entry.prop;
      if (entry.required) required.push(k);
    }
    return { type: 'object', properties, required };
  }
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

    if (req.method === 'GET' && DECK_STATIC.has(url.pathname)) {
      res.writeHead(200, { 'Content-Type': DECK_STATIC.get(url.pathname), 'Cache-Control': 'no-store' });
      return res.end(readFileSync(join(ADMIN_DIR, url.pathname.slice(1))));
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

    // Real resolved env for the Settings tab (deck badges show these instead
    // of hardcoded defaults).
    if (req.method === 'GET' && url.pathname === '/api/env') {
      return json(res, {
        logLevel: process.env.PZ_MCP_LOG_LEVEL || 'info',
        // Mirrors the server's default (src/utils/config.ts): env override, else
        // the knowledge-base/ folder shipped with the repository.
        kbPath: process.env.PZ_MCP_KB_PATH || join(ROOT, 'knowledge-base'),
        workshopDir: readDeckSettings().workshopDir || process.env.PZ_WORKSHOP_DIR || null,
        steamCmdPath: process.env.STEAMCMD_PATH || '(auto-detected)',
      });
    }

    if (req.method === 'POST' && url.pathname === '/api/restart') {
      pushLog('↻ restart requested from Control Deck');
      try { child?.kill('SIGTERM'); } catch { /* */ }
      return json(res, { ok: true });
    }

    if (req.method === 'GET' && url.pathname === '/api/workshop-dir') {
      return json(res, { configured: readDeckSettings().workshopDir || null });
    }

    if (req.method === 'POST' && url.pathname === '/api/workshop-dir') {
      let body;
      try { body = JSON.parse(await readBody(req)); }
      catch { return json(res, { ok: false, error: 'Invalid JSON body' }, 400); }
      const clear = body.clear === true;
      if (clear) {
        const s = readDeckSettings();
        delete s.workshopDir;
        writeDeckSettings(s);
        pushLog('↻ workshop download folder reset to default');
        try { child?.kill('SIGTERM'); } catch { /* */ }
        return json(res, { ok: true, configured: null });
      }
      const p = typeof body.path === 'string' ? body.path.trim() : '';
      if (!p) return json(res, { ok: false, error: 'Enter a folder path' }, 400);
      if (!/^[A-Za-z]:[\\/]/.test(p) && !/^\\\\/.test(p)) {
        return json(res, { ok: false, error: 'Use an absolute path, e.g. D:\\PZ-Mods\\Workshop' }, 400);
      }
      // Pre-flight: reject unwritable/nonexistent-drive folders right away
      // instead of failing later inside workshop_download/workshop_analyze.
      try { mkdirSync(p, { recursive: true }); } catch { return json(res, { ok: false, error: `Folder not writable: ${p}` }, 400); }
      const s = readDeckSettings();
      s.workshopDir = p;
      writeDeckSettings(s);
      pushLog(`↻ workshop download folder set to ${p}`);
      try { child?.kill('SIGTERM'); } catch { /* */ }
      return json(res, { ok: true, configured: p });
    }

    // Open the workshop download folder in Explorer. Resolves the same way
    // downloads do: deck setting → PZ_WORKSHOP_DIR → derive from the Steam
    // library the PZ install lives in → common Steam locations.
    if (req.method === 'POST' && url.pathname === '/api/open-workshop-dir') {
      if (process.platform !== 'win32') {
        return json(res, { ok: false, error: 'Open folder is only supported on Windows' }, 400);
      }
      let dir = readDeckSettings().workshopDir || process.env.PZ_WORKSHOP_DIR || null;
      if (!dir) {
        const candidates = [
          'D:/Games/steamapps/workshop/content/108600',
          'C:/Program Files (x86)/Steam/steamapps/workshop/content/108600',
          'C:/Steam/steamapps/workshop/content/108600',
        ];
        for (const c of candidates) {
          if (existsSync(c)) { dir = c; break; }
        }
      }
      if (!dir) {
        return json(res, { ok: false, error: 'Could not determine the workshop folder — set one in Settings → Workshop first' }, 400);
      }
      mkdirSync(dir, { recursive: true });
      // explorer.exe detaches immediately; its exit code is unreliable, so a
      // non-zero status is not treated as failure here.
      execFile('explorer', [dir], () => pushLog(`↗ opened workshop folder ${dir}`));
      return json(res, { ok: true, path: dir });
    }

    // Pause an in-flight workshop_download: steamcmd.exe is force-killed (the
    // server's downloader downloads into a temp dir and only renames it into
    // place on success, so a killed run leaves nothing behind and Resume just
    // re-invokes the tool). No new MCP tool needed.
    if (req.method === 'POST' && url.pathname === '/api/workshop/pause') {
      if (process.platform !== 'win32') {
        return json(res, { ok: false, error: 'Pause is only supported on Windows' }, 400);
      }
      execFile('taskkill', ['/IM', 'steamcmd.exe', '/T', '/F'], (err) => {
        const msg = err ? String(err.message || '') : '';
        if (err && !/not found|no running instance/i.test(msg)) {
          return json(res, { ok: false, error: 'Could not pause: ' + msg }, 500);
        }
        pushLog('⏸ workshop download pause requested — killed steamcmd');
        return json(res, { ok: true });
      });
      return; // response is sent from the taskkill callback
    }

    if (req.method === 'POST' && url.pathname === '/rpc') {
      let msg;
      try { msg = JSON.parse(await readBody(req)); }
      catch { return json(res, { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }, 400); }
      // Server-side pre-flight: reject invalid tool arguments against the live
      // zod schemas before the request ever reaches the MCP child process.
      if (msg.method === 'tools/call' && msg.params && msg.params.name) {
        const bad = validateArgs(msg.params.name, msg.params.arguments);
        if (bad) return json(res, { jsonrpc: '2.0', id: msg.id ?? null, error: { code: -32602, message: bad } }, 200);
      }
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