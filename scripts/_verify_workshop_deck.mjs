// Verify (M1 dashboard): exercise the Workshop tab's exact data path against the
// running Control Deck bridge — /rpc tools/list + workshop_search + workshop_get_details.
const BASE = 'http://localhost:8787';
const results = [];
let pass = true;
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  if (!ok) pass = false;
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (detail ? '  — ' + detail : ''));
}

let seq = 0;
async function rpc(method, params) {
  const msg = { jsonrpc: '2.0', method, params: params ?? {} };
  msg.id = ++seq;
  const res = await fetch(BASE + '/rpc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
  return res.json();
}

// 1. handshake (what the dashboard does on load)
const init = await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'verify-ws', version: '1.0.0' } });
check('initialize', !!init.result, 'server=' + init.result?.serverInfo?.name);

// 2. tools/list exposes the two new tools
const list = await rpc('tools/list', {});
const names = (list.result?.tools || []).map((t) => t.name);
check('workshop_search registered', names.includes('workshop_search'), names.length + ' tools');
check('workshop_get_details registered', names.includes('workshop_get_details'));

// 3. workshop_search "Brita" (live Steam)
const search = await rpc('tools/call', { name: 'workshop_search', arguments: { query: 'Brita', limit: 5 } });
const items = search.result?.structuredContent?.items || [];
check('workshop_search returns items', items.length > 0, items.length + ' items, first: ' + (items[0]?.title || '?'));
check('search items have id + url', items.every((i) => i.id && i.url));

// 4. workshop_get_details on the first result (live Steam)
if (items[0]) {
  const det = await rpc('tools/call', { name: 'workshop_get_details', arguments: { id: items[0].id } });
  const sc = det.result?.structuredContent;
  check('workshop_get_details resolves', !!sc?.details?.title, (sc?.details?.title || 'FAIL').slice(0, 60));
  check('isProjectZomboid flag set', sc?.isProjectZomboid === true, 'appid=' + sc?.details?.appId);
  check('details carry fileSize + subscribers', (sc?.details?.fileSize || 0) > 0 && (sc?.details?.subscribers || 0) >= 0);
}

// 5. paste-a-URL path
const byUrl = await rpc('tools/call', { name: 'workshop_get_details', arguments: { id: 'https://steamcommunity.com/sharedfiles/filedetails/?id=' + (items[0]?.id || '3777544219') } });
check('URL input resolves', !!byUrl.result?.structuredContent?.details?.id);

console.log('');
console.log(pass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');
process.exit(pass ? 0 : 1);
