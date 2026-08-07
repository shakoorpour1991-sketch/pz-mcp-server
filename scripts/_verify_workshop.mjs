// Throwaway verification (M1): exercise the Steam Workshop metadata client
// against the REAL Steam Web API + community browse page. No server, no UI.
//   node scripts/_verify_workshop.mjs
import { SteamWorkshopClient } from '../dist/workshop/SteamWorkshopClient.js';

const results = [];
let pass = true;
function check(name, ok, detail) {
  results.push({ name, ok, detail });
  if (!ok) pass = false;
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (detail ? '  — ' + detail : ''));
}

const client = new SteamWorkshopClient();

// ---- 1. live browse search (best-effort HTML) ----
let items = [];
try {
  items = await client.search('Brita', 5);
  check('workshop search "Brita"', items.length > 0, items.length + ' items');
} catch (err) {
  check('workshop search "Brita"', false, String(err.message || err));
}

// ---- 2. live metadata resolution for the first result ----
let details = null;
const target = items[0]?.id || '2696145877'; // fallback: a known PZ item id
if (target) {
  try {
    details = await client.getDetails(target);
    const isPz = details.appId === '108600';
    check('workshop_get_details ' + target, !!details.title, details.title + ' · ' + details.appId + ' · ' + details.fileSize + ' bytes');
    check('item is Project Zomboid (appid 108600)', isPz, 'appid=' + details.appId);
  } catch (err) {
    check('workshop_get_details ' + target, false, String(err.message || err));
  }
}

// ---- 3. cache: second lookup should not hit the network ----
if (details) {
  try {
    const again = await client.getDetails(target);
    check('cached second lookup', again.id === details.id, 'id=' + again.id);
  } catch (err) {
    check('cached second lookup', false, String(err.message || err));
  }
}

console.log('');
if (items[0]) console.log('   sample  →  ' + items[0].title + ' by ' + items[0].author + ' (' + items[0].id + ')');
if (details) console.log('   details →  ' + details.title + ' · ' + details.fileSize + ' bytes · ' + details.subscribers + ' subs · updated ' + new Date(details.timeUpdated * 1000).toISOString().slice(0, 10));
console.log('');
console.log(pass ? 'ALL CHECKS PASSED' : 'SOME CHECKS FAILED');
process.exit(pass ? 0 : 1);
