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
const LONG_TOOLS = new Set(['parse_game_files', 'index_knowledge_base', 'analyze_mod']);

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
        return reply === null ? json(res, { ok: true }, 202) : json(res, reply);
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