// Throwaway verification: replicate the Control Deck dashboard's exact data paths
// (SSE /events + /rpc) against the running bridge. No UI, no screenshots.
const BASE = 'http://localhost:8787';
const results = [];
let pass = true;
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  if (!ok) pass = false;
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (detail ? '  — ' + detail : ''));
}

// ---- 1. page served ----
const page = await fetch(BASE + '/');
const pageHtml = await page.text();
check('GET / serves dashboard HTML', page.status === 200 && pageHtml.includes('id="pillTxt"'), 'status=' + page.status);

// ---- 2. SSE /events — collect ALL frames until search res seen ----
const frames = [];
let hello = null;
const sseReader = (async () => {
  try {
    const res = await fetch(BASE + '/events');
    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = '';
    const deadline = Date.now() + 240000; // 4 min cap
    while (Date.now() < deadline) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf('\n\n')) >= 0) {
        const block = buf.slice(0, idx); buf = buf.slice(idx + 2);
        let event = 'message', data = '';
        for (const line of block.split('\n')) {
          if (line.startsWith('event: ')) event = line.slice(7);
          else if (line.startsWith('data: ')) data += line.slice(6);
        }
        if (!data) continue;
        let parsed; try { parsed = JSON.parse(data); } catch { continue; }
        if (event === 'hello') hello = parsed;
        else if (event === 'frame') frames.push(parsed);
      }
    }
    try { await reader.cancel(); } catch {}
  } catch (e) { /* stream ended */ }
})();

// ---- 3. dashboard handshake ----
async function rpc(method, params, notify = false) {
  const msg = { jsonrpc: '2.0', method, params: params ?? {} };
  if (!notify) msg.id = ++seq;
  const res = await fetch(BASE + '/rpc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
  return res.json();
}
let seq = 0;

const init = await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'pz-control-deck', version: '1.0.0' } });
check('initialize', init.result?.serverInfo?.name === 'pz-mcp-server', 'server=' + init.result?.serverInfo?.name + ' v' + init.result?.serverInfo?.version);
await rpc('notifications/initialized', {}, true);

// ---- 4. populate DB through the standard tool (runtime artifact; data/ tracked files untouched) ----
console.log('... parse_game_files D:\\Games\\ProjectZomboid (this takes a while) ...');
const parse = await rpc('tools/call', { name: 'parse_game_files', arguments: { gamePath: 'D:\\Games\\ProjectZomboid' } });
const parseText = parse.result?.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || parse.error?.message || 'no content';
console.log('--- parse result (first 600 chars) ---');
console.log(parseText.slice(0, 600));
console.log('--------------------------------------');
const parseOk = !!parse.result && !parse.error && !/error|failed|0 items/i.test(parseText);
check('parse_game_files', parseOk, parseText.slice(0, 120).replace(/\n/g, ' | '));

// ---- 5. tools/list + search_vanilla "axe" ----
const list = await rpc('tools/list', {});
check('tools/list', Array.isArray(list.result?.tools) && list.result.tools.length > 0, list.result?.tools?.length + ' tools');
const svSchema = list.result?.tools?.find(t => t.name === 'search_vanilla')?.inputSchema;
check('search_vanilla registered', !!svSchema, svSchema ? 'schema props: ' + Object.keys(svSchema?.properties || {}).join(', ') : 'MISSING');

const call = await rpc('tools/call', { name: 'search_vanilla', arguments: { query: 'axe' } });
const text = call.result?.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '';
const isMarkdown = text.length > 0 && /[#|*`-]/.test(text);
check('search_vanilla "axe" returns formatted markdown', !!call.result && !call.error && isMarkdown, text.length + ' chars');
console.log('--- search result (first 700 chars) ---');
console.log(text.slice(0, 700));
console.log('--------------------------------------');

// ---- 6. wire log frames ----
await new Promise(r => setTimeout(r, 2000));
const searchReq = frames.find(f => f.dir === 'req' && f.msg?.method === 'tools/call' && f.msg?.params?.name === 'search_vanilla');
const searchRes = frames.find(f => f.dir === 'res' && f.msg?.id === call.id);
const parseReq = frames.find(f => f.dir === 'req' && f.msg?.method === 'tools/call' && f.msg?.params?.name === 'parse_game_files');
check('Wire Log: req frame search_vanilla', !!searchReq, searchReq ? 'id=' + searchReq.msg.id : 'none');
check('Wire Log: res frame search_vanilla', !!searchRes, searchRes ? 'id=' + searchRes.msg.id : 'none');
check('Wire Log: req frame parse_game_files', !!parseReq, parseReq ? 'id=' + parseReq.msg.id : 'none');
check('Wire Log: handshake frames (initialize/tools/list)', frames.some(f => f.dir === 'req' && f.msg?.method === 'initialize') && frames.some(f => f.dir === 'req' && f.msg?.method === 'tools/list'), frames.length + ' frames total');

// ---- 7. bridge state ----
const stats = await (await fetch(BASE + '/api/stats')).json();
check('bridge state = live', stats.state === 'live', 'state=' + stats.state + ' pid=' + stats.pid);

console.log('');
console.log(pass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');
process.exit(pass ? 0 : 1);
