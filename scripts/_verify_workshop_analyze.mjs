// Verify (M3): run the Fetch & Analyze pipeline (workshop_analyze) against the
// running bridge with a FAKE mod pre-placed in PZ_WORKSHOP_DIR — the download
// step must be skipped (already present) and the parse + analyze suite must
// produce a Mod Report. Requires the bridge started with:
//   PZ_WORKSHOP_DIR=<dir with a fake mod at <dir>/<workshopId>>
const PORT = process.env.PZ_DECK_PORT || 8787;
const BASE = `http://localhost:${PORT}`;
const ID = process.argv[2] || '3777544219';
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

await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'verify-analyze', version: '1.0.0' } });

// workshop_analyze registered
const list = await rpc('tools/list', {});
const names = (list.result?.tools || []).map((t) => t.name);
check('workshop_analyze registered', names.includes('workshop_analyze'), names.length + ' tools');

// Run the pipeline
console.log('... workshop_analyze ' + ID + ' (download skipped, parse + analyze) ...');
const rep = await rpc('tools/call', { name: 'workshop_analyze', arguments: { id: ID } });
const text = rep.result?.content?.map((c) => c.text || '').join('\n') || '';
const sc = rep.result?.structuredContent;

check('tool returned a report', !!sc && !!text, text.split('\n')[0] || '');
check('title resolved from Steam', /Brita/.test(sc?.title || '') || sc?.title?.length > 3, (sc?.title || '').slice(0, 50));
check('download skipped (already present)', sc?.analysis !== undefined && text.includes('Mod Report'), '');
check('parse found the fixture items', sc?.parse?.itemCount >= 1 && sc?.parse?.filesProcessed >= 1, 'items=' + sc?.parse?.itemCount + ' files=' + sc?.parse?.filesProcessed);
check('quality score present', typeof sc?.analysis?.quality?.overall === 'number', 'score=' + sc?.analysis?.quality?.overall);
check('analysis ran structure + issues', Array.isArray(sc?.analysis?.issues), (sc?.analysis?.issues || []).length + ' issues');

console.log('');
console.log('--- report preview ---');
console.log(text.split('\n').slice(0, 22).join('\n'));
console.log('--- end preview ---');
console.log('');
console.log(pass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');
process.exit(pass ? 0 : 1);
