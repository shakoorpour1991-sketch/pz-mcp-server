// pz-mcp-server · Control Deck — pure helpers & formatters (extracted verbatim
// from the original inline <script> in admin/index.html — no logic changes).

/* ---------- helpers ---------- */
export const $  = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const pad = n => String(n).padStart(2,'0');
export const fmtClock = t => { const d = new Date(t); return pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds()); };
export function hexToRgb(h){ h = h.replace('#',''); if (h.length===3) h = h.split('').map(c=>c+c).join(''); const n = parseInt(h,16); return [(n>>16)&255,(n>>8)&255,n&255].join(','); }
export function walkUp(el, sel){ while (el && el !== document.body){ if (el.matches && el.matches(sel)) return el; el = el.parentElement; } return null; }
export function fmtUp(sec){
  if (sec == null) return '—';
  const d = Math.floor(sec/86400), h = Math.floor(sec%86400/3600), m = Math.floor(sec%3600/60), s = sec%60;
  return (d ? d+'d ' : '') + pad(h)+':'+pad(m)+':'+pad(s);
}
export function hlJSON(obj){
  // esc() now escapes quotes for attribute safety, but the highlighting regex
  // below needs literal " chars — the inspector body is text content, so raw
  // quotes are harmless there. Restore them before matching.
  const s = esc(JSON.stringify(obj, null, 2)).replace(/&quot;/g, '"');
  return s.replace(/("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?)/g, m => {
    let cls = 'tk-num';
    if (/^"/.test(m)) cls = /:\s*$/.test(m) ? 'tk-key' : 'tk-str';
    else if (/true|false/.test(m)) cls = 'tk-bool';
    else if (/null/.test(m)) cls = 'tk-null';
    return '<span class="'+cls+'">'+m+'</span>';
  });
}
/* PZ script syntax highlighting */
function hlPZ(code){
  let s = esc(code);
  s = s.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-null">$1</span>');
  s = s.replace(/^(\s*)([A-Za-z]\w*)(\s*[=:])/gm, '$1<span class="tk-key">$2</span>$3');
  s = s.replace(/\b(module|item|recipe|evolvedrecipe|fixing|sound|vehicle|clip|keep)\b/g, '<span class="tk-bool">$1</span>');
  s = s.replace(/\b(TRUE|FALSE)\b/g, '<span class="tk-bool">$1</span>');
  s = s.replace(/(^|[\s=:,(])(-?\d+(?:\.\d+)?)(?=[\s,;)}]|$)/gm, '$1<span class="tk-num">$2</span>');
  return s;
}
/* markdown-lite renderer for real tool output */
function mdInline(s){
  return s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code class="md-code">$1</code>');
}
function mdProse(t){
  let html = '';
  for (const raw of String(t).split('\n')){
    const l = raw.trim();
    if (!l) continue;
    if (/^#{1,3}\s/.test(l)) html += '<div class="md-h">'+mdInline(esc(l.replace(/^#{1,3}\s+/, '')))+'</div>';
    else if (/^[-•]\s/.test(l)) html += '<div class="md-li">'+mdInline(esc(l.replace(/^[-•]\s+/, '')))+'</div>';
    else if (/^\d+\.\s/.test(l)) html += '<div class="md-li num">'+mdInline(esc(l))+'</div>';
    else html += '<div class="md-p">'+mdInline(esc(l))+'</div>';
  }
  return html;
}
export function renderMD(text){
  const segs = String(text).split('```');
  let out = '';
  segs.forEach((seg, i) => {
    if (i % 2 === 1){
      const code = seg.replace(/^[a-zA-Z]*\r?\n/, '');
      out += '<div class="code-block"><pre>'+hlPZ(code.replace(/\r/g,''))+'</pre></div>';
    } else out += mdProse(seg);
  });
  return out || '<div class="md-p" style="color:var(--faint)">(empty result)</div>';
}

/* The MCP server serializes raw zod schemas (not JSON Schema), but the bridge
 * (admin/bridge.mjs) now normalizes every tools/list reply into proper JSON
 * Schema ({ type:'object', properties, required }) before it reaches the
 * browser. This reader prefers the properties object, and otherwise falls
 * back to the zod _cached.shape (lazily populated after a tool is first
 * parsed).
 */
function fieldKindFor(s, k){
  if (s.enum) return 'select';
  if (s.type === 'boolean') return 'bool';
  if (s.type === 'number' || s.type === 'integer') return 'num';
  if (s.type === 'array') return 'list';
  if (s.type === 'record' || s.type === 'object' || s.additionalProperties) return 'json';
  if (k === 'content') return 'textarea';
  return 'text';
}
export function normField(k, s, required){
  s = s || {};
  const norm = {
    type: s.type || 'string',
    description: s.description || '',
    enum: s.enum || undefined,
    default: s.default,
    minimum: s.minimum,
    maximum: s.maximum,
  };
  return { k, kind: fieldKindFor(norm, k), s: norm, required: !!required };
}
export function normZodField(k, z){
  if (!z || !z._def) return { k, kind: 'text', s: { type:'string', description:'' }, required:false };
  let def = z._def;
  let required = true;
  let description = def.description || '';
  let guard = 0;
  while (def && guard++ < 6 && (def.typeName === 'ZodOptional' || def.typeName === 'ZodDefault' || def.typeName === 'ZodNullable')){
    required = false;
    if (!description) description = def.description || '';
    def = def.innerType && def.innerType._def ? def.innerType._def : null;
    if (def && !description) description = def.description || '';
  }
  const typeName = def ? def.typeName : 'ZodUnknown';
  const s = { type:'string', description };
  if (typeName === 'ZodString'){
    s.type = 'string';
    (def.checks || []).forEach(c => {
      if (c.kind === 'min') s.minLength = c.value;
      else if (c.kind === 'max') s.maxLength = c.value;
    });
  } else if (typeName === 'ZodNumber'){
    s.type = 'number';
    (def.checks || []).forEach(c => {
      if (c.kind === 'min') s.minimum = c.value;
      else if (c.kind === 'max') s.maximum = c.value;
    });
  } else if (typeName === 'ZodBoolean'){
    s.type = 'boolean';
  } else if (typeName === 'ZodEnum'){
    s.type = 'string';
    const v = def.values;
    s.enum = Array.isArray(v) ? v.slice() : (v && Array.isArray(v.values) ? v.values.slice() : undefined);
  } else if (typeName === 'ZodArray'){
    s.type = 'array';
  } else if (typeName === 'ZodRecord'){
    s.type = 'record';
  } else if (typeName === 'ZodObject'){
    s.type = 'object';
  }
  return { k, kind: fieldKindFor(s, k), s, required };
}

export function fmtBytes(n){
  if (!n || n <= 0) return 'unknown';
  const u = ['B','KB','MB','GB']; let i = 0, v = n;
  while (v >= 1024 && i < u.length - 1){ v /= 1024; i++; }
  return (v >= 10 || i === 0 ? Math.round(v) : v.toFixed(1)) + ' ' + u[i];
}

export const chop = (s, n) => { s = String(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
