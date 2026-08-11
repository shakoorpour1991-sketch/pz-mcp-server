// pz-mcp-server · Control Deck client — talks to admin/bridge.mjs (same origin)
// ----------------------------------------------------------------------------
// Split out of the original inline <script> in admin/index.html (no logic
// changes): pure helpers live in ./utils.mjs, static data in ./data.mjs.
// ES modules are strict by default — the 'use strict'; line kept below is a
// harmless no-op here.
import {
  $,
  $$,
  clamp,
  esc,
  fmtClock,
  hexToRgb,
  walkUp,
  fmtUp,
  hlJSON,
  renderMD,
  normField,
  normZodField,
  chop,
  fmtBytes,
} from "./utils.mjs";
import {
  ICONS,
  TOOL_ICONS,
  TOOL_CATS,
  catForTool,
  TOOL_GUIDES,
  GUIDE_STEPS,
  EXAMPLES,
  CHAIN_CHIPS,
  CHAIN_COLW,
  CHAIN_NODE_W,
  CHAIN_NODE_H,
  CHAIN_H,
  CHAIN_CAP,
  CHAIN_PITCH,
  VIEWS,
  MEM_BUDGET_MB,
  SWATCHES,
} from "./data.mjs";
("use strict");
/* ================================================================
   Control Deck client — talks to admin/bridge.mjs (same origin)
   ================================================================ */

function openHelp() {
  const modal = $("#helpModal");
  if (!modal) return;
  const body = $("#helpBody");
  S._prevFocus = document.activeElement;
  const count = $("#helpCount");
  if (count) count.textContent = S.tools.length + " tools";
  let html = "";
  for (const cat of TOOL_CATS) {
    const tools = S.tools.filter((t) => catForTool(t.name) === cat.id);
    if (!tools.length) continue;
    html += '<div class="help-cat">' + esc(cat.label) + "</div>";
    html += tools
      .map((t) => {
        const g = TOOL_GUIDES[t.name];
        return (
          '<div class="help-item">' +
          '<span class="h-ic">' +
          (ICONS[TOOL_ICONS[t.name]] || ICONS.spark) +
          "</span>" +
          '<div class="h-body">' +
          '<div class="h-name">' +
          esc(t.name) +
          "</div>" +
          (g
            ? '<div class="h-what">' +
              g.what +
              '</div><div class="h-how">How to use: ' +
              g.how +
              "</div>" +
              '<span class="h-ex">' +
              ICONS.play +
              " " +
              esc(g.ex) +
              "</span>"
            : '<div class="h-what">' + esc(t.description || "") + "</div>") +
          "</div></div>"
        );
      })
      .join("");
  }
  body.innerHTML =
    html ||
    '<div class="md-p" style="color:var(--faint)">Tools not loaded yet — try again in a moment.</div>';
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  const fb = modal.querySelector("button");
  if (fb) fb.focus();
}
function closeHelp() {
  const modal = $("#helpModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (S._prevFocus && S._prevFocus.focus) S._prevFocus.focus();
}
function openGuide() {
  const modal = $("#guideModal");
  if (!modal) return;
  const body = $("#guideBody");
  S._prevFocus = document.activeElement;
  body.innerHTML =
    '<div class="guide-hero">' +
    ICONS.spark +
    "<div>" +
    '<div class="guide-hero-title">Welcome to the Control Deck</div>' +
    '<div class="guide-hero-sub">A live control room for the Project Zomboid mod-dev MCP server — monitor it, call its tools, and manage your whole modding workflow.</div>' +
    "</div></div>" +
    GUIDE_STEPS.map(
      (s) =>
        '<div class="guide-step">' +
        '<span class="gs-ic">' +
        (ICONS[s.icon] || ICONS.spark) +
        "</span>" +
        '<div class="gs-body"><div class="gs-title">' +
        s.title +
        '</div><div class="gs-desc">' +
        s.body +
        "</div></div>" +
        "</div>",
    ).join("");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  const fb = modal.querySelector("button");
  if (fb) fb.focus();
}
function closeGuide() {
  const modal = $("#guideModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (S._prevFocus && S._prevFocus.focus) S._prevFocus.focus();
}
/* ---------- state ---------- */
const S = {
  view: "status",
  conn: "connecting",
  handshaken: false,
  // True once the user asks to close the whole program: the bridge + MCP
  // server are stopping, so the deck shows the shutdown overlay and never
  // tries to reconnect.
  shuttingDown: false,
  serverInfo: null,
  protocol: null,
  tools: [],
  openTool: null,
  telemetry: null,
  ws: {
    results: [],
    detail: null,
    busy: false,
    error: null,
    actionError: null,
    downloading: false,
    download: null,
    analyzing: false,
    report: null,
    phase: null,
    startedAt: 0,
    pipeTimer: 0,
    dl: {
      active: false,
      paused: false,
      reqPaused: false,
      pct: 0,
      bytes: 0,
      expected: 0,
      elapsed: 0,
      phase: null,
      startedAt: 0,
      timer: 0,
    },
  },
  wsDir: null,
  // Knowledge-base search state for the Database tab (section drill-down).
  kbdb: { results: null, drill: null, drillContent: null },
  // Index state shown on the Status page (refreshed from list_knowledge_topics).
  kbStatus: { state: "idle", docs: 0, javadocs: 0, byType: {}, total: 0 },
  // Collapse state for Status-tab cards, keyed by data-card id (persisted).
  cardsCollapsed: {},
  inst: {
    detected: null,
    busy: false,
    items: [],
    overwrite: false,
    last: null,
    _autodone: false,
  },
  gen: {
    busy: false,
    err: null,
    templates: null,
    template: null,
    mod: {
      name: "",
      modId: "",
      modName: "",
      author: "",
      description: "",
      itemName: "",
      displayName: "",
      icon: "",
    },
    stats: {},
    pinned: {},
    autoStats: true,
    project: null,
    last: null,
    list: null,
    listBusy: false,
    _loaded: false,
  },
  logs: [],
  fid: 0,
  methodById: new Map(),
  resLatency: new Map(),
  reqAt: new Map(),
  serverLog: [],
  seq: 0,
  _followAt: 0,
  _prevFocus: null,
  lat: { ema: null, calls: 0, spark: [] },
  memSpark: [],
  sesSpark: [],
  itemsSpark: [],
  upSpark: [],
  events: [],
  lastResult: null,
  pg: {
    values: {},
    query: "",
    cats: {},
    recent: [],
    ctrls: {},
    tool: null,
    _sel: false,
  },
  chain: {
    seed: "",
    direction: "both",
    depth: 2,
    busy: false,
    error: null,
    graph: null,
    layout: null,
    sugg: null,
    conflicts: null,
    confTotal: 0,
    confBusy: false,
    insp: null,
    expLayers: {},
    zoom: 1,
    pan: { x: 0, y: 0 },
    dropTimer: 0,
    depthTimer: 0,
    fitted: false,
    fsOpen: false,
    dropIdx: -1,
    _dbSeen: false,
    // Recipe Chain roadmap: expand-in-place, path mode, highlight, history, cycles
    expandBusy: false,
    path: null,
    pathFound: null,
    pathStash: null,
    pathTarget: "",
    pathBusy: false,
    highlight: "",
    history: [],
    histIdx: -1,
    cycOpen: false,
    // Dense-collapse: per-column cap, dense pill mode, collapsed subtrees, view state
    cap: 14,
    dense: false,
    collapsed: {},
    _fitZoom: 0,
    _fitIdle: true,
    _zoomAnim: 0,
  },
  settings: {
    accent: "#22D3EE",
    reduceMotion: false,
    autoScroll: true,
    follow: false,
  },
};
function saveSettings() {
  try {
    localStorage.setItem("pzdeck.settings", JSON.stringify(S.settings));
  } catch {}
}
function loadSettings() {
  try {
    const r = localStorage.getItem("pzdeck.settings");
    if (r) Object.assign(S.settings, JSON.parse(r));
  } catch {}
}
function applyAccent(hex) {
  S.settings.accent = hex;
  document.documentElement.style.setProperty("--accent", hex);
  document.documentElement.style.setProperty("--accent-rgb", hexToRgb(hex));
  saveSettings();
  $$(".swatch").forEach((sw) =>
    sw.classList.toggle(
      "sel",
      sw.dataset.color.toLowerCase() === hex.toLowerCase(),
    ),
  );
}

/* ---------- toasts / pill ---------- */
function toast(msg, icon) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML =
    (ICONS[icon || "check"] || "") + "<span>" + esc(msg) + "</span>";
  $("#toasts").appendChild(el);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => el.classList.add("show")),
  );
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 400);
  }, 3000);
}
function setConn(c) {
  S.conn = c;
  const pill = $("#pill"),
    txt = $("#pillTxt"),
    banner = $("#connBanner");
  pill.className =
    "pill" + (c === "live" ? "" : c === "connecting" ? " busy" : " dead");
  txt.textContent =
    c === "live" ? "Live" : c === "connecting" ? "Connecting…" : "Offline";
  if (banner) banner.classList.toggle("show", c === "offline");
}

/* ---------- real MCP client (via bridge) ---------- */
async function rpc(method, params, opts = {}) {
  const msg = { jsonrpc: "2.0", method, params: params ?? {} };
  if (!opts.notify) msg.id = ++S.seq;
  let res;
  try {
    res = await fetch("/rpc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
      signal: opts.signal,
    });
  } catch (e) {
    if (opts.signal?.aborted) throw e;
    setConn("offline");
    throw new Error("bridge unreachable");
  }
  if (opts.notify) return null;
  const reply = await res.json();
  const dt = Math.round(performance.now() - (msg._t0 || 0));
  if (method === "tools/call") {
    S.lat.calls++;
    if (reply.id !== undefined) S.resLatency.set(reply.id, dt);
  }
  if (reply.error) {
    const e = new Error(reply.error.message);
    e.code = reply.error.code;
    throw e;
  }
  return reply;
}
function recordLatency(dt) {
  S.lat.ema = S.lat.ema == null ? dt : Math.round(S.lat.ema * 0.65 + dt * 0.35);
  S.lat.spark.push(dt);
  if (S.lat.spark.length > 24) S.lat.spark.shift();
  updateStatusDom();
}
async function handshake() {
  setConn("connecting");
  const init = await rpc("initialize", {
    protocolVersion: "2025-06-18",
    capabilities: {},
    clientInfo: { name: "pz-control-deck", version: "1.0.0" },
  });
  S.serverInfo = init.result.serverInfo;
  S.protocol = init.result.protocolVersion;
  $("#verBadge").textContent = "v" + (S.serverInfo?.version || "?");
  await rpc("notifications/initialized", {}, { notify: true });
  const list = await rpc("tools/list", {});
  S.tools = list.result.tools || [];
  S.handshaken = true;
  setConn("live");
  addEvent("handshake · " + S.tools.length + " tools registered");
  loadWorkshopDir();
  loadEnv();
  renderView();
  refreshKbStatus();
}

/* ---------- SSE wire ---------- */
function connectEvents() {
  const es = new EventSource("/events");
  es.onopen = () => {
    if (!S.handshaken) setConn("connecting");
  };
  es.onerror = () => {
    if (!S.handshaken) setConn("offline");
  };
  es.addEventListener("hello", (e) => {
    const d = JSON.parse(e.data);
    S.serverLog = d.logs || [];
    if (d.telemetry) applyTelemetry(d.telemetry);
    renderServerLog();
  });
  es.addEventListener("frame", (e) => onFrame(JSON.parse(e.data)));
  es.addEventListener("telemetry", (e) => applyTelemetry(JSON.parse(e.data)));
  es.addEventListener("log", (e) => {
    S.serverLog.push(JSON.parse(e.data));
    if (S.serverLog.length > 200) S.serverLog.shift();
    renderServerLog();
  });
  es.addEventListener("status", (e) => {
    const d = JSON.parse(e.data);
    if (d.state === "restarting") {
      S.handshaken = false;
      addEvent("server restarting…");
    }
  });
  es.addEventListener("shutdown", () => {
    // The bridge told us it is stopping (red Shut down button) — park the
    // deck on the shutdown overlay instead of the offline/retry state.
    S.shuttingDown = true;
    showShutdownOverlay();
  });
}
function onFrame(f) {
  if (f.dir === "req" && f.msg.id !== undefined)
    S.methodById.set(f.msg.id, f.msg.method);
  if (f.dir === "req" && f.msg.id !== undefined) S.reqAt.set(f.msg.id, f.t);
  const entry = {
    id: "F" + ++S.fid,
    dir: f.dir,
    t: f.t,
    msg: f.msg,
    method:
      f.msg.method ||
      (f.dir === "res"
        ? S.methodById.get(f.msg.id) || "response"
        : "notification"),
  };
  if (f.dir === "res") {
    // Latency = bridge req-frame → res-frame delta (frame timestamps always
    // exist for both sides, so the wire-log latency column is never empty).
    const t0 = f.msg.id !== undefined ? S.reqAt.get(f.msg.id) : undefined;
    entry.latency =
      t0 != null ? Math.max(0, f.t - t0) : S.resLatency.get(f.msg.id);
    if (f.msg.id !== undefined) S.reqAt.delete(f.msg.id);
  }
  S.logs.push(entry);
  if (S.logs.length > 300) S.logs.shift();
  appendLogLine(entry);
  const cnt = $("#logCount");
  if (cnt) cnt.textContent = S.logs.length + " frames";
  if (term.open && S.settings.follow) {
    // Throttle inspector re-renders so a frame burst can't thrash the DOM.
    const now = performance.now();
    if (now - (S._followAt || 0) > 100) {
      S._followAt = now;
      showPayload(entry);
    }
  }
}

/* ---------- telemetry ---------- */
function applyTelemetry(t) {
  S.telemetry = t;
  if (t.memMB != null) {
    S.memSpark.push(t.memMB);
    if (S.memSpark.length > 24) S.memSpark.shift();
  }
  S.sesSpark.push(t.sessions || 0);
  if (S.sesSpark.length > 24) S.sesSpark.shift();
  S.itemsSpark.push(t.db?.total || 0);
  if (S.itemsSpark.length > 24) S.itemsSpark.shift();
  S.upSpark.push(t.uptime ?? 0);
  if (S.upSpark.length > 24) S.upSpark.shift();
  if (t && t.db) {
    // DB re-parse fingerprint: when the parsed item count changes mid-session,
    // drop the cached conflict list so the next scan uses fresh data.
    if (S.chain._dbFinger != null && S.chain._dbFinger !== t.db.total) {
      S.chain.conflicts = null;
    }
    S.chain._dbFinger = t.db.total;
  }
  $("#upChip").textContent = "⏱ " + fmtUp(t.uptime);
  updateStatusDom();
  renderDbStats();
  if (S.view === "chain" && t && t.db && !S.chain._dbSeen) {
    S.chain._dbSeen = true;
    renderChain();
  }
}
function addEvent(txt) {
  S.events.unshift({ t: Date.now(), txt });
  if (S.events.length > 6) S.events.pop();
  renderEvents();
}
function renderEvents() {
  const box = $("#evList");
  if (!box) return;
  box.innerHTML = S.events.length
    ? S.events
        .map(
          (e) =>
            '<div class="evrow"><span class="ev-t">' +
            fmtClock(e.t) +
            "</span><span>" +
            esc(e.txt) +
            "</span></div>",
        )
        .join("")
    : '<div class="evrow" style="color:var(--faint)">No activity yet — run a tool.</div>';
}

/* ---------- tab bar ---------- */
function moveIndicator() {
  const ind = $("#tabInd"),
    btn = $("#tab-" + S.view);
  if (!btn) return;
  ind.style.height = btn.offsetHeight + "px";
  ind.style.transform = "translateY(" + btn.offsetTop + "px)";
}
function switchView(name) {
  if (!VIEWS.includes(name)) return;
  if (name !== "chain") chainFsClose();
  S.view = name;
  $$(".tab").forEach((b) => {
    const on = b.dataset.view === name;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
  });
  moveIndicator();
  renderView();
}

/* ---------- router ---------- */
function renderView() {
  // Any re-render can destroy the anchor of a shown description tooltip — the
  // tip is body-appended, so it must be dismissed explicitly, not left to
  // mouseout (which may never fire on element removal).
  hideToolTip();
  const mount = $("#view");
  mount.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "view";
  wrap.setAttribute("role", "tabpanel");
  wrap.id = "panel-" + S.view;
  wrap.setAttribute("aria-labelledby", "tab-" + S.view);
  mount.appendChild(wrap);
  let html = bannerHTML();
  if (S.view === "status") html += statusHTML();
  else if (S.view === "playground") html += playgroundHTML();
  else if (S.view === "database") html += databaseHTML();
  else if (S.view === "workshop") html += workshopHTML();
  else if (S.view === "chain") html += chainHTML();
  else if (S.view === "installer") html += installerHTML();
  else if (S.view === "generator") html += genHTML();
  else html += settingsHTML();
  wrap.innerHTML = html;
  if (S.view === "status") {
    updateStatusDom();
    renderEvents();
    applyCardStates();
  }
  if (S.view === "playground") {
    renderToolStack();
    renderRecent();
    renderAllLogs();
    applyPgSizes();
    if (S.lastResult) restoreResult();
  }
  if (S.view === "database") {
    renderDbStats();
    restoreKbDb();
  }
  if (S.view === "workshop") renderWorkshopResults();
  if (S.view === "chain") renderChain();
  if (S.view === "installer") initInstallerView();
  if (S.view === "generator") initGenView();
  if (S.view === "settings") {
    loadWorkshopDir();
    loadEnv();
  }
  requestAnimationFrame(moveIndicator);
}
function bannerHTML() {
  return (
    '<div id="connBanner" class="' +
    (S.conn === "offline" ? "show" : "") +
    '">' +
    ICONS.warn +
    '<span style="flex:1">Bridge offline. Start it from the repo root with <code>npm run dashboard</code> — the deck reconnects automatically.</span>' +
    '<button class="btn sm" data-act="reconnect">Retry now</button></div>'
  );
}

/* ==================== STATUS ==================== */
function ringSVG(id, rc) {
  return (
    '<div class="ring-wrap" style="--rc:' +
    rc +
    '">' +
    '<svg class="ring" viewBox="0 0 68 68" aria-hidden="true"><circle class="ring-bg" cx="34" cy="34" r="30"/><circle class="ring-fg" id="rg-' +
    id +
    '" cx="34" cy="34" r="30"/></svg>' +
    '<div class="ring-c" id="rc-' +
    id +
    '">—</div></div>'
  );
}
function metricCard(id, label, rc, sub) {
  return (
    '<article class="glass card metric" style="--rc:' +
    rc +
    '" data-card="metric-' +
    id +
    '"><div class="m-top" data-act="card-collapse" data-card="metric-' +
    id +
    '">' +
    ringSVG(id, rc) +
    '<div style="min-width:0"><div class="m-label">' +
    label +
    '</div><div class="m-value" id="mv-' +
    id +
    '">—</div>' +
    '<div class="m-sub">' +
    sub +
    "</div></div>" +
    cardCollapseBtn("metric-" + id) +
    "</div>" +
    '<svg class="spark" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true"><path class="a" id="sa-' +
    id +
    '"></path><path class="l" id="sl-' +
    id +
    '"></path></svg></article>'
  );
}
function statusHTML() {
  return (
    '<div class="guide-banner">' +
    '<span class="gb-ic">' +
    ICONS.spark +
    "</span>" +
    '<div class="gb-txt"><b>New here? Start here.</b><p>Learn how to use the whole dashboard, the MCP server and every tool in one guided tour.</p></div>' +
    '<button class="btn success pulse-success" data-act="open-guide" title="Beginner-friendly guide for the whole dashboard">' +
    ICONS.book +
    " How to use this dashboard</button>" +
    "</div>" +
    '<div class="metrics-grid">' +
    metricCard(
      "up",
      "Uptime",
      "var(--cyan)",
      '<span class="badge b-info" id="upPid">pid —</span>',
    ) +
    metricCard(
      "mem",
      "Memory · RSS",
      "var(--violet)",
      '<span class="badge b-vio">budget ' + MEM_BUDGET_MB + " MB</span>",
    ) +
    metricCard(
      "lat",
      "Tool-Call Latency",
      "var(--emerald)",
      '<span class="badge b-ok" id="latCalls">0 calls</span>',
    ) +
    metricCard(
      "items",
      "Indexed Items",
      "var(--amber)",
      '<span class="badge b-dim" id="refBadge">— refs</span>',
    ) +
    "</div>" +
    '<section class="glass card panel-card kb-idx-card" data-card="kb-idx">' +
    '<h3 data-act="card-collapse" data-card="kb-idx">' +
    ICONS.book +
    " Knowledge Base Index" +
    cardCollapseBtn("kb-idx") +
    '<span class="badge b-dim" style="margin-left:auto">persists across restarts — index once, it stays</span></h3>' +
    '<div class="kb-idx-grid" id="kbIdxGrid"></div>' +
    "</section>" +
    '<div class="status-grid">' +
    '<section class="glass card panel-card" data-card="transport"><h3 data-act="card-collapse" data-card="transport">' +
    ICONS.link +
    " Transports & State" +
    cardCollapseBtn("transport") +
    '</h3><div id="transportRows"></div></section>' +
    '<section class="glass card panel-card" data-card="srvlog"><h3 data-act="card-collapse" data-card="srvlog">' +
    ICONS.doc +
    " Server Log" +
    cardCollapseBtn("srvlog") +
    '<span class="badge b-dim" style="margin-left:auto">pino · stderr</span></h3><div class="srvlog" id="srvLog"></div></section>' +
    '<section class="glass card panel-card" data-card="info"><h3 data-act="card-collapse" data-card="info">' +
    ICONS.spark +
    " Server Info" +
    cardCollapseBtn("info") +
    '</h3><div id="infoRows"></div>' +
    '<div class="sec-title" style="margin:14px 0 6px">Recent Activity</div><div id="evList"></div></section>' +
    "</div>"
  );
}
function setRing(id, pct, center) {
  const fg = $("#rg-" + id),
    c = $("#rc-" + id);
  if (!fg) return;
  fg.style.strokeDashoffset = (188.5 * (1 - clamp(pct, 0, 1))).toFixed(2);
  if (c && center !== undefined) c.textContent = center;
}
function sparkPaths(arr) {
  if (!arr || arr.length < 2) return null;
  const w = 120,
    h = 36,
    p = 3,
    min = Math.min.apply(null, arr),
    max = Math.max.apply(null, arr),
    span = max - min || 1;
  const step = (w - p * 2) / (arr.length - 1);
  let d = "";
  arr.forEach((v, i) => {
    d +=
      (i ? "L" : "M") +
      (p + i * step).toFixed(1) +
      "," +
      (h - p - ((v - min) / span) * (h - p * 2)).toFixed(1);
  });
  return {
    line: d,
    area: d + "L" + (w - p) + "," + (h - p) + "L" + p + "," + (h - p) + "Z",
  };
}
function drawSpark(id, arr) {
  const paths = sparkPaths(arr);
  if (!paths) return;
  const l = $("#sl-" + id),
    a = $("#sa-" + id);
  if (l) l.setAttribute("d", paths.line);
  if (a) a.setAttribute("d", paths.area);
}
function updateStatusDom() {
  if (S.view !== "status") return;
  const t = S.telemetry;

  const up = $("#mv-up");
  if (up) up.textContent = fmtUp(t?.uptime);
  setRing(
    "up",
    t ? (t.uptime % 604800) / 604800 : 0,
    t ? Math.floor((t.uptime || 0) / 86400) + "d" : "—",
  );
  const pid = $("#upPid");
  if (pid) pid.textContent = "pid " + (t?.pid ?? "—");

  const mem = $("#mv-mem");
  if (mem)
    mem.innerHTML = (t?.memMB != null ? t.memMB : "—") + "<small>MB</small>";
  setRing(
    "mem",
    t?.memMB != null ? t.memMB / MEM_BUDGET_MB : 0,
    t?.memMB != null ? Math.round((t.memMB / MEM_BUDGET_MB) * 100) + "%" : "—",
  );

  const lat = $("#mv-lat");
  if (lat)
    lat.innerHTML = S.lat.ema != null ? S.lat.ema + "<small>ms</small>" : "—";
  setRing(
    "lat",
    S.lat.ema != null ? clamp(1 - S.lat.ema / 2000, 0.02, 1) : 0,
    S.lat.ema != null ? S.lat.ema + "ms" : "—",
  );
  const lc = $("#latCalls");
  if (lc) lc.textContent = S.lat.calls + " calls";

  const it = $("#mv-items");
  if (it) it.textContent = (t?.db?.total ?? 0).toLocaleString();
  setRing(
    "items",
    t?.db ? clamp(t.db.total / 60000, 0, 1) : 0,
    t?.db ? (t.db.total / 1000).toFixed(1) + "k" : "0",
  );
  const rb = $("#refBadge");
  if (rb)
    rb.textContent = t?.db
      ? (t.db.references ?? 0).toLocaleString() + " refs"
      : "— refs";

  drawSpark("up", S.sesSpark);
  drawSpark("mem", S.memSpark);
  drawSpark("lat", S.lat.spark);
  drawSpark("items", S.itemsSpark);

  const tr = $("#transportRows");
  if (tr)
    tr.innerHTML =
      '<div class="flow" aria-label="Data path">' +
      '<span class="fhop"><i class="fdot" style="background:var(--emerald)"></i>Browser</span><span class="flink">⇄</span>' +
      '<span class="fhop"><i class="fdot" style="background:' +
      (S.conn === "live" ? "var(--emerald)" : "var(--rose)") +
      '"></i>Bridge <b>:' +
      location.port +
      '</b></span><span class="flink">⇄</span>' +
      '<span class="fhop"><i class="fdot" style="background:' +
      (S.conn === "live" ? "var(--emerald)" : "var(--rose)") +
      '"></i>stdio</span><span class="flink">⇄</span>' +
      '<span class="fhop"><i class="fdot" style="background:' +
      (S.conn === "live" ? "var(--emerald)" : "var(--rose)") +
      '"></i>MCP server</span>' +
      "</div>" +
      '<div class="trow"><span class="tdot" style="background:' +
      (S.conn === "live" ? "var(--emerald)" : "var(--rose)") +
      '"></span>' +
      '<div style="flex:1;min-width:0"><div style="font-weight:600">Browser → Bridge · HTTP</div><div class="tcap">Tools list & tool calls travel here</div></div>' +
      '<span class="badge ' +
      (S.conn === "live" ? "b-ok" : "b-err") +
      '">' +
      (S.conn === "live" ? "connected" : "offline") +
      "</span></div>" +
      '<div class="trow"><span class="tdot" style="background:' +
      (S.conn === "live" ? "var(--emerald)" : "var(--rose)") +
      '"></span>' +
      '<div style="flex:1;min-width:0"><div style="font-weight:600">Bridge → Server · stdio</div><div class="tcap">The MCP wire — JSON-RPC · pid ' +
      (t?.pid ?? "—") +
      "</div></div>" +
      '<span class="badge ' +
      (S.conn === "live" ? "b-ok" : "b-err") +
      '">' +
      (t?.state || S.conn) +
      "</span></div>" +
      '<div class="trow"><span class="tdot" style="background:var(--cyan)"></span>' +
      '<div style="flex:1;min-width:0"><div style="font-weight:600">Server → Browser · SSE <span class="mono">/events</span></div><div class="tcap">Live telemetry, wire frames & server log</div></div>' +
      '<span class="badge b-info">' +
      (t?.sessions ?? 0) +
      " client(s)</span></div>" +
      '<div class="trow"><span class="tdot" style="background:' +
      (t?.db ? "var(--emerald)" : "var(--amber)") +
      '"></span>' +
      '<div style="flex:1;min-width:0"><div style="font-weight:600">SQLite · pz_database.db</div><div class="tcap">Indexed game data — feed it with parse_game_files</div></div>' +
      '<span class="badge ' +
      (t?.db ? "b-ok" : "b-warn") +
      '">' +
      (t?.db ? t.db.total.toLocaleString() + " items" : "not parsed yet") +
      "</span></div>";

  const ir = $("#infoRows");
  if (ir)
    ir.innerHTML =
      '<div class="krow"><span class="k">Server</span><span class="v">' +
      esc(S.serverInfo?.name || "pz-mcp-server") +
      "</span></div>" +
      '<div class="krow"><span class="k">Version</span><span class="v">' +
      esc(S.serverInfo?.version || "—") +
      "</span></div>" +
      '<div class="krow"><span class="k">MCP protocol</span><span class="v">' +
      esc(S.protocol || "—") +
      "</span></div>" +
      '<div class="krow"><span class="k">Entry</span><span class="v">' +
      esc(t?.entry || "—") +
      "</span></div>" +
      '<div class="krow"><span class="k">Tools</span><span class="v">' +
      S.tools.length +
      " registered</span></div>";
  updateKbStatusDom();
}

/* ---------- knowledge base index status (Status page) ---------- */
// Reads list_knowledge_topics (stored stats — instant) and reports whether the
// markdown KB and the JavaDocs corpus are indexed. The KB lives in
// data/pz_knowledge.db on disk, so it survives restarts: index once, and every
// session afterwards shows "indexed" here without re-running anything.
async function refreshKbStatus() {
  if (!S.handshaken) return;
  S.kbStatus = { ...S.kbStatus, state: "loading" };
  updateKbStatusDom();
  try {
    const reply = await rpc("tools/call", {
      name: "list_knowledge_topics",
      arguments: {},
    });
    const topics = reply.result?.structuredContent?.topics || [];
    const byType = {};
    let docs = 0,
      javadocs = 0;
    for (const t of topics) {
      const k = t.docType || "other";
      byType[k] = (byType[k] || 0) + 1;
      if (k === "javadocs") javadocs++;
      else docs++;
    }
    // Only the computed counts are kept — the raw topics array (~4-5k rows)
    // is discarded so it isn't retained in state for the whole session.
    S.kbStatus = {
      state: "ok",
      docs,
      javadocs,
      byType,
      total: topics.length,
    };
  } catch (e) {
    S.kbStatus = {
      ...S.kbStatus,
      state: "error",
      error: String((e && e.message) || e),
    };
  }
  updateKbStatusDom();
}
function kbIdxTileHTML(label, count, sub, ok, actions) {
  return (
    '<div class="kb-idx-tile">' +
    '<div class="kb-idx-top">' +
    '<span class="kb-idx-dot' +
    (ok ? " on" : "") +
    '"></span>' +
    '<span class="kb-idx-label">' +
    esc(label) +
    "</span>" +
    '<span class="badge ' +
    (ok ? "b-ok" : "b-warn") +
    '" style="margin-left:auto">' +
    (ok ? "indexed" : "not indexed") +
    "</span></div>" +
    '<div class="kb-idx-val num">' +
    count +
    "</div>" +
    '<div class="kb-idx-sub">' +
    esc(sub) +
    "</div>" +
    (actions ? '<div class="kb-idx-actions">' + actions + "</div>" : "") +
    "</div>"
  );
}

/* ---------- tool-description hover tooltip (?) ---------- */
let _tipEl = null;
function showToolTip(anchor, text) {
  if (!text) return;
  if (_tipEl && _tipEl._owner === anchor) return;
  hideToolTip();
  const tip = document.createElement("div");
  tip.className = "tool-tip";
  tip.textContent = text;
  tip._owner = anchor;
  document.body.appendChild(tip);
  const r = anchor.getBoundingClientRect();
  const w = Math.min(400, innerWidth - 24);
  const left = Math.max(12, Math.min(r.right - w, innerWidth - w - 12));
  let top = r.bottom + 10;
  if (top + Math.min(320, innerHeight * 0.42) > innerHeight - 12)
    top = Math.max(12, r.top - 70);
  tip.style.width = w + "px";
  tip.style.left = left + "px";
  tip.style.top = top + "px";
  requestAnimationFrame(() => tip.classList.add("show"));
  _tipEl = tip;
}
function hideToolTip() {
  if (_tipEl) {
    _tipEl.remove();
    _tipEl = null;
  }
}
document.addEventListener("mouseover", (e) => {
  const q = walkUp(e.target, ".tool-q");
  if (q) showToolTip(q, q.dataset.desc || "");
});
document.addEventListener("mouseout", (e) => {
  const q = walkUp(e.target, ".tool-q");
  if (q && (!e.relatedTarget || !q.contains(e.relatedTarget))) hideToolTip();
});
document.addEventListener("focusin", (e) => {
  const q = walkUp(e.target, ".tool-q");
  if (q) showToolTip(q, q.dataset.desc || "");
});
document.addEventListener("focusout", (e) => {
  if (walkUp(e.target, ".tool-q")) hideToolTip();
});
// Dismiss on any click or scroll — a fixed-position tip goes stale relative
// to its anchor the moment the page (or any scroll container) moves.
document.addEventListener("pointerdown", hideToolTip);
document.addEventListener("scroll", hideToolTip, true);
let _kbIdxHtml = "";
function updateKbStatusDom() {
  const grid = $("#kbIdxGrid");
  if (!grid) return;
  const s = S.kbStatus;
  if (s.state === "idle" || s.state === "loading") {
    grid.innerHTML =
      '<div class="md-out" style="color:var(--faint);display:flex;align-items:center;gap:10px"><span class="spinner"></span> checking knowledge base index…</div>';
    return;
  }
  if (s.state === "error") {
    grid.innerHTML =
      '<div class="md-out" style="color:var(--faint)">Could not read the knowledge base index — is the server running?</div>';
    return;
  }
  const docsBtn =
    s.docs > 0
      ? '<button class="btn sm ghost" data-act="go-tool" data-tool="search_knowledge_base">' +
        ICONS.search +
        " Search</button>"
      : '<button class="btn sm" data-act="go-tool" data-tool="index_knowledge_base">' +
        ICONS.book +
        " Index now</button>";
  const jdBtn =
    s.javadocs > 0
      ? '<button class="btn sm ghost" data-act="go-tool" data-tool="search_knowledge_base">' +
        ICONS.search +
        " Search</button>"
      : '<button class="btn sm" data-act="go-tool" data-tool="index_javadocs">' +
        ICONS.code +
        " Index now</button>";
  const parts = [];
  for (const [k, v] of Object.entries(s.byType))
    if (k !== "javadocs" && v > 0) parts.push(k);
  const html =
    kbIdxTileHTML(
      "Markdown docs",
      s.docs,
      parts.length ? parts.join(" · ") : "wiki · api-docs · research · mods-analysis",
      s.docs > 0,
      docsBtn,
    ) +
    kbIdxTileHTML(
      "JavaDocs API",
      s.javadocs,
      "Unofficial PZ JavaDocs — one entry per API type",
      s.javadocs > 0,
      jdBtn,
    );
  // Skip the DOM write only when the grid ALREADY holds this content — the
  // guard exists so the 2s telemetry tick never rebuilds hovered buttons, but
  // a fresh status render (tab switch) creates an empty grid that must be
  // repopulated even if the html is unchanged.
  if (grid.innerHTML !== "" && html === _kbIdxHtml) return;
  _kbIdxHtml = html;
  grid.innerHTML = html;
}

/* ---------- Status-card collapse / expand ---------- */
function cardCollapseBtn(id) {
  return (
    '<button class="card-collapse" data-act="card-collapse" data-card="' +
    id +
    '" aria-expanded="true" aria-label="Collapse card" title="Collapse / expand">' +
    ICONS.chev +
    "</button>"
  );
}
function saveCardStates() {
  try {
    localStorage.setItem("pzdeck.cards", JSON.stringify(S.cardsCollapsed));
  } catch {}
}
function loadCardStates() {
  try {
    Object.assign(
      S.cardsCollapsed,
      JSON.parse(localStorage.getItem("pzdeck.cards") || "{}"),
    );
  } catch {}
}
// Re-apply persisted collapse state after the Status tab is re-rendered.
// Only the card containers carry the collapsed class; their buttons (which
// also carry data-card) just mirror aria-expanded.
function applyCardStates() {
  for (const el of $$(".panel-card[data-card], .metric[data-card]")) {
    const id = el.dataset.card;
    el.classList.toggle("collapsed", !!S.cardsCollapsed[id]);
    const btn = el.querySelector(".card-collapse");
    if (btn) btn.setAttribute("aria-expanded", String(!S.cardsCollapsed[id]));
  }
}
function toggleCardState(id) {
  S.cardsCollapsed[id] = !S.cardsCollapsed[id];
  saveCardStates();
  const card = document.querySelector(
    '.panel-card[data-card="' + id + '"], .metric[data-card="' + id + '"]',
  );
  if (card) {
    card.classList.toggle("collapsed", S.cardsCollapsed[id]);
    const btn = card.querySelector(".card-collapse");
    if (btn)
      btn.setAttribute("aria-expanded", String(!S.cardsCollapsed[id]));
  }
}
let _srvLogRaf = 0;
function renderServerLog() {
  if (_srvLogRaf) return;
  _srvLogRaf = requestAnimationFrame(() => {
    _srvLogRaf = 0;
    const box = $("#srvLog");
    if (!box) return;
    const tail = S.serverLog.slice(-80);
    box.innerHTML = tail
      .map((l) => {
        let line = l.line,
          cls = "";
        try {
          const j = JSON.parse(l.line);
          const lvl =
            {
              10: "TRC",
              20: "DBG",
              30: "INF",
              40: "WRN",
              50: "ERR",
              60: "FTL",
            }[j.level] || "LOG";
          cls = j.level >= 50 ? "err" : j.level >= 40 ? "warn" : "";
          const t = j.time ? new Date(j.time).toTimeString().slice(0, 8) : "";
          line = t + " " + lvl + " · " + (j.msg || JSON.stringify(j));
        } catch {
          if (/error|❌|💥/i.test(l.line)) cls = "err";
          else if (/warn|⚠/i.test(l.line)) cls = "warn";
        }
        return '<div class="ln ' + cls + '">' + esc(line) + "</div>";
      })
      .join("");
    box.scrollTop = box.scrollHeight;
  });
}
/* ==================== PLAYGROUND ==================== */
function getToolFields(tool) {
  const schema = tool.inputSchema || {};
  const props = schema.properties;
  if (
    props &&
    typeof props === "object" &&
    !Array.isArray(props) &&
    Object.keys(props).length
  ) {
    const req = new Set(schema.required || []);
    return Object.entries(props).map(([k, s]) => normField(k, s, req.has(k)));
  }
  const shape = schema._cached && schema._cached.shape;
  if (shape && typeof shape === "object" && Object.keys(shape).length) {
    return Object.entries(shape).map(([k, z]) => normZodField(k, z));
  }
  return [];
}
function fieldsForTool(tool) {
  return getToolFields(tool).map((f) => {
    const saved = S.pg.values[tool.name] || {};
    const hasSaved = Object.prototype.hasOwnProperty.call(saved, f.k);
    const def = hasSaved
      ? saved[f.k]
      : ((EXAMPLES[tool.name] || {})[f.k] ?? f.s.default);
    return {
      k: f.k,
      kind: f.kind,
      s: f.s,
      required: f.required,
      def,
      hasSaved,
    };
  });
}
function fieldHTML(tool, f) {
  const fid = "pf-" + tool.name + "-" + f.k;
  const eid = "pe-" + tool.name + "-" + f.k;
  const reqTag = f.required ? ' <span style="color:var(--rose)">*</span>' : "";
  const hint = f.s.description
    ? '<div class="f-hint">' + esc(f.s.description) + "</div>"
    : "";
  const errEl =
    '<div class="f-err" id="' + eid + '" style="display:none"></div>';
  if (f.kind === "bool") {
    return (
      '<div style="display:flex;align-items:center;justify-content:space-between;min-height:44px;gap:10px">' +
      '<div><span class="f-label" style="margin:0">' +
      esc(f.k) +
      reqTag +
      "</span>" +
      hint +
      "</div>" +
      '<button class="switch" id="' +
      fid +
      '" role="switch" aria-checked="' +
      (f.def === true) +
      '" aria-label="' +
      esc(f.k) +
      '"><span class="trk"></span><span class="knb"></span></button></div>'
    );
  }
  if (f.kind === "select") {
    const opts = (f.required ? [] : [""]).concat(f.s.enum || []);
    return (
      '<div><label class="f-label" for="' +
      fid +
      '">' +
      esc(f.k) +
      reqTag +
      '</label><select class="field" id="' +
      fid +
      '">' +
      opts
        .map(
          (o) =>
            '<option value="' +
            esc(o) +
            '"' +
            (o === f.def ? " selected" : "") +
            ">" +
            (o === "" ? "(any)" : esc(o)) +
            "</option>",
        )
        .join("") +
      "</select>" +
      hint +
      errEl +
      "</div>"
    );
  }
  if (f.kind === "num") {
    const val = f.def == null || f.def === "" ? "" : f.def;
    return (
      '<div><label class="f-label" for="' +
      fid +
      '">' +
      esc(f.k) +
      reqTag +
      '</label><input type="number" class="field num" id="' +
      fid +
      '" value="' +
      (val ?? "") +
      '" ' +
      (f.s.minimum != null ? 'min="' + f.s.minimum + '"' : "") +
      " " +
      (f.s.maximum != null ? 'max="' + f.s.maximum + '"' : "") +
      ">" +
      hint +
      errEl +
      "</div>"
    );
  }
  if (f.kind === "list") {
    const val = Array.isArray(f.def) ? f.def.join("\n") : String(f.def ?? "");
    return (
      '<div><label class="f-label" for="' +
      fid +
      '">' +
      esc(f.k) +
      reqTag +
      '</label><textarea class="field" id="' +
      fid +
      '" rows="3" placeholder="one per line">' +
      esc(val) +
      "</textarea>" +
      hint +
      errEl +
      "</div>"
    );
  }
  if (f.kind === "json") {
    const val =
      typeof f.def === "string"
        ? f.def
        : f.def != null
          ? JSON.stringify(f.def, null, 2)
          : "{}";
    return (
      '<div><label class="f-label" for="' +
      fid +
      '">' +
      esc(f.k) +
      reqTag +
      '</label><textarea class="field" id="' +
      fid +
      '" rows="6">' +
      esc(val) +
      "</textarea>" +
      hint +
      errEl +
      "</div>"
    );
  }
  if (f.kind === "textarea") {
    return (
      '<div><label class="f-label" for="' +
      fid +
      '">' +
      esc(f.k) +
      reqTag +
      '</label><textarea class="field" id="' +
      fid +
      '" rows="6">' +
      esc(f.def ?? "") +
      "</textarea>" +
      hint +
      errEl +
      "</div>"
    );
  }
  return (
    '<div><label class="f-label" for="' +
    fid +
    '">' +
    esc(f.k) +
    reqTag +
    '</label><input class="field" id="' +
    fid +
    '" value="' +
    esc(f.def ?? "") +
    '">' +
    hint +
    errEl +
    "</div>"
  );
}
function toolCardHTML(tool) {
  const open = S.openTool === tool.name;
  const fields = fieldsForTool(tool);
  const parts = [];
  for (let i = 0; i < fields.length; i++) {
    if (
      i + 1 < fields.length &&
      ["select", "num", "text"].includes(fields[i].kind) &&
      ["select", "num", "text"].includes(fields[i + 1].kind)
    ) {
      parts.push(
        '<div class="frow">' +
          fieldHTML(tool, fields[i]) +
          fieldHTML(tool, fields[i + 1]) +
          "</div>",
      );
      i++;
    } else parts.push(fieldHTML(tool, fields[i]));
  }
  return (
    '<article class="glass card tool' +
    (open ? " open" : "") +
    '" id="tool-' +
    tool.name +
    '" data-tool="' +
    tool.name +
    '">' +
    '<div class="glow" aria-hidden="true"></div>' +
    '<button class="tool-head" data-act="toggle-tool" aria-expanded="' +
    open +
    '">' +
    '<span class="tool-ic">' +
    (ICONS[TOOL_ICONS[tool.name]] || ICONS.spark) +
    "</span>" +
    '<span style="min-width:0;flex:1"><span class="tool-name">' +
    esc(tool.name) +
    "</span></span>" +
    '<span class="tool-q" tabindex="0" role="img" aria-label="Show tool description" data-desc="' +
    esc(tool.description || "") +
    '"><span class="tool-q-ic">?</span></span>' +
    '<span class="badge b-dim" style="flex:none">' +
    getToolFields(tool).length +
    " params</span>" +
    '<span class="tool-chv">' +
    ICONS.chev +
    "</span>" +
    "</button>" +
    '<div class="tool-panel"' +
    (open ? ' style="height:auto;opacity:1"' : "") +
    ">" +
    '<div class="tool-panel-in">' +
    parts.join("") +
    '<div class="run-row"><button class="btn primary" data-act="run-tool" style="flex:1"><span class="run-label" style="display:inline-flex;align-items:center;gap:8px">' +
    ICONS.play +
    " Run " +
    esc(tool.name) +
    "</span></button>" +
    '<button class="btn danger" data-act="cancel-run" style="display:none">' +
    ICONS.x +
    " Cancel</button></div>" +
    "</div></div></article>"
  );
}
function playgroundHTML() {
  return (
    '<div class="play-grid">' +
    '<div class="pg-left">' +
    '<div class="pg-toolbar">' +
    '<div class="pg-search"><span class="pg-ic">' +
    ICONS.search +
    "</span>" +
    '<select class="field pg-tool-select" id="pgToolSelect" aria-label="Select a tool" title="Pick a tool — only it is shown so everything fits on screen">' +
    '<option value="">Select a tool…</option>' +
    "</select>" +
    "</div>" +
    '<button class="btn success" data-act="open-help" title="Beginner-friendly guide for every tool">' +
    ICONS.book +
    " How to use the tools</button>" +
    "</div>" +
    '<div class="sec-title" style="margin-top:0">MCP Tools · <span id="toolCount">' +
    (S.handshaken ? S.tools.length : "…") +
    "</span> registered</div>" +
    '<div class="pg-card-scroll" id="pgToolCard"></div>' +
    "</div>" +
    '<div class="pg-right">' +
    '<section class="glass card" id="resultCard" style="display:none">' +
    '<div id="resultHead"></div><div id="resultBody"></div>' +
    "</section>" +
    '<div class="sec-title" style="margin-top:22px">Recent Runs <span class="badge b-dim num" id="recentCount">' +
    S.pg.recent.length +
    "</span></div>" +
    '<section class="glass card" id="recentCard" style="display:none"><div id="recentList"></div></section>' +
    '<div class="rsz" data-rsz="recent" role="separator" aria-label="Resize recent runs" title="Drag to resize"></div>' +
    '<div class="sec-title" style="margin-top:0">Wire Log · Live JSON-RPC</div>' +
    '<section class="glass card console">' +
    '<div class="console-head"><h3><span style="width:7px;height:7px;border-radius:50%;background:var(--emerald);display:inline-block;animation:pulse 2.2s infinite"></span> mcp://wire</h3>' +
    '<span class="badge b-dim num" id="logCount">' +
    S.logs.length +
    ' frames</span><span style="flex:1"></span>' +
    '<button class="ibtn' +
    (S.settings.autoScroll ? " on" : "") +
    '" title="Auto-scroll" aria-pressed="' +
    S.settings.autoScroll +
    '" data-act="autoscroll"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg></button>' +
    '<button class="ibtn" title="Open inspector" data-act="open-term"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg></button>' +
    '<button class="ibtn" title="Clear local view" data-act="clear-logs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button>' +
    "</div>" +
    '<div class="log-body" id="logBody" tabindex="0" aria-label="Live JSON-RPC wire log"></div>' +
    '<div class="console-foot"><span>Click any frame to inspect the raw payload</span><span class="kbd">⏎ inspect</span></div>' +
    "</section>" +
    '<div class="rsz" data-rsz="wire" role="separator" aria-label="Resize wire log" title="Drag to resize"></div>' +
    "</div></div>"
  );
}
function renderToolStack() {
  const sel = $("#pgToolSelect");
  if (!sel || !S.handshaken) return;
  let html = '<option value="">Select a tool…</option>';
  for (const cat of TOOL_CATS) {
    const tools = S.tools.filter((t) => catForTool(t.name) === cat.id);
    if (!tools.length) continue;
    html +=
      '<optgroup label="' +
      esc(cat.label) +
      '">' +
      tools
        .map(
          (t) =>
            '<option value="' +
            esc(t.name) +
            '">' +
            esc(t.name) +
            " — " +
            esc(chop(t.description || "", 72)) +
            "</option>",
        )
        .join("") +
      "</optgroup>";
  }
  sel.innerHTML = html;
  const cnt = $("#toolCount");
  if (cnt) cnt.textContent = S.tools.length;
  // First visit: preselect the first tool so the single-card view is never empty.
  // If the picked tool vanished (server restart), fall back to the empty state.
  if (!S.pg._sel && !S.pg.tool) S.pg.tool = S.tools[0]?.name || null;
  else if (S.pg.tool && !S.tools.some((t) => t.name === S.pg.tool)) {
    S.pg.tool = null;
    S.pg._sel = true;
  }
  sel.value = S.pg.tool || "";
  renderSingleTool();
}
function renderSingleTool() {
  const card = $("#pgToolCard");
  if (!card) return;
  const t = S.tools.find((x) => x.name === S.pg.tool);
  if (!t) {
    S.openTool = null;
    card.innerHTML =
      '<div class="glass card pg-empty"><span class="tool-ic">' +
      ICONS.spark +
      "</span>" +
      '<div style="min-width:0"><div class="tool-name">No tool selected</div>' +
      '<div class="tool-desc">Pick a tool from the dropdown to configure and run it — hover the ? icon for its description.</div></div></div>';
    return;
  }
  S.openTool = t.name;
  card.innerHTML = toolCardHTML(t);
  syncToolValidation(t.name);
}
function expandPanel(card, open) {
  const panel = $(".tool-panel", card),
    head = $(".tool-head", card);
  if (!panel || !head) return;
  // Reduce-motion / prefers-reduced-motion: skip the WAAPI animation entirely.
  if (document.documentElement.classList.contains("rm")) {
    card.classList.toggle("open", open);
    head.setAttribute("aria-expanded", String(open));
    panel.style.height = open ? "auto" : "0px";
    panel.style.opacity = open ? "1" : "0";
    return;
  }
  if (open) {
    card.classList.add("open");
    head.setAttribute("aria-expanded", "true");
    panel.style.opacity = "0";
    panel.style.height = "0px";
    const a = panel.animate(
      [
        { height: "0px", opacity: 0 },
        { height: panel.scrollHeight + "px", opacity: 1 },
      ],
      { duration: 400, easing: "cubic-bezier(.22,1.1,.36,1)" },
    );
    a.onfinish = () => {
      panel.style.height = "auto";
      panel.style.opacity = "1";
    };
  } else {
    head.setAttribute("aria-expanded", "false");
    const h = panel.offsetHeight;
    panel.style.height = h + "px";
    void panel.offsetWidth;
    const a = panel.animate(
      [
        { height: h + "px", opacity: 1 },
        { height: "0px", opacity: 0 },
      ],
      { duration: 320, easing: "cubic-bezier(.4,0,.2,1)" },
    );
    a.onfinish = () => {
      card.classList.remove("open");
      panel.style.height = "0px";
    };
  }
}
function toggleTool(name) {
  // Single-tool playground: picking a different tool re-renders the one visible
  // card; picking the same tool just collapses/expands its panel as before.
  if ($("#pgToolSelect")) {
    if (S.pg.tool !== name) {
      S.pg.tool = name;
      S.pg._sel = true;
      $("#pgToolSelect").value = name;
      renderSingleTool();
    } else {
      const card = $("#tool-" + CSS.escape(name));
      if (card) {
        const open = !card.classList.contains("open");
        S.openTool = open ? name : null;
        expandPanel(card, open);
      }
    }
    return;
  }
  const prev = S.openTool;
  S.openTool = prev === name ? null : name;
  if (prev && prev !== name) {
    const old = $("#tool-" + CSS.escape(prev));
    if (old) expandPanel(old, false);
  }
  const card = $("#tool-" + CSS.escape(name));
  if (card) expandPanel(card, S.openTool === name);
}
function collectArgs(tool) {
  const args = {};
  for (const f of fieldsForTool(tool)) {
    const el = $("#pf-" + tool.name + "-" + f.k);
    if (!el) continue;
    let v;
    if (f.kind === "bool") v = el.getAttribute("aria-checked") === "true";
    else if (f.kind === "num") {
      if (el.value === "") continue;
      v = Number(el.value);
    } else if (f.kind === "list") {
      const lines = el.value
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean);
      if (!lines.length) continue;
      v = lines;
    } else if (f.kind === "json") {
      try {
        v = JSON.parse(el.value || "{}");
      } catch {
        return null;
      }
    } else {
      if (el.value === "") continue;
      v = el.value;
    }
    args[f.k] = v;
  }
  return args;
}
function fieldErrors(tool) {
  const errs = {};
  for (const f of fieldsForTool(tool)) {
    const el = $("#pf-" + tool.name + "-" + f.k);
    if (!el || f.kind === "bool") continue;
    const v = el.value;
    if (f.required && v.trim() === "") errs[f.k] = "Required";
    if (f.kind === "num" && v.trim() !== "") {
      const n = Number(v);
      if (!Number.isFinite(n)) errs[f.k] = "Not a number";
      else if (f.s.minimum != null && n < f.s.minimum)
        errs[f.k] = "Min " + f.s.minimum;
      else if (f.s.maximum != null && n > f.s.maximum)
        errs[f.k] = "Max " + f.s.maximum;
    } else if (f.kind === "json" && v.trim() !== "") {
      try {
        JSON.parse(v);
      } catch {
        errs[f.k] = "Invalid JSON";
      }
    } else if (f.kind === "list" && f.required) {
      if (
        !v
          .split("\n")
          .map((x) => x.trim())
          .filter(Boolean).length
      )
        errs[f.k] = "Required";
    }
  }
  return errs;
}
function syncToolValidation(name) {
  const tool = S.tools.find((t) => t.name === name);
  if (!tool) return;
  const errs = fieldErrors(tool);
  for (const f of fieldsForTool(tool)) {
    const el = $("#pf-" + tool.name + "-" + f.k);
    const errEl = $("#pe-" + tool.name + "-" + f.k);
    if (el) el.classList.toggle("invalid", !!errs[f.k]);
    if (errEl && errEl.style.display !== "none") errEl.style.display = "none";
    if (errEl && errs[f.k]) {
      errEl.textContent = errs[f.k];
      errEl.style.display = "block";
    }
  }
  const card = $("#tool-" + CSS.escape(name));
  const btn = card && $('[data-act="run-tool"]', card);
  if (btn) btn.disabled = Object.keys(errs).length > 0;
  return Object.keys(errs).length;
}
function runTool(name) {
  const tool = S.tools.find((t) => t.name === name);
  if (!tool) return;
  const n = syncToolValidation(name);
  if (n > 0) {
    toast("Fix the highlighted fields first", "warn");
    return;
  }
  const args = collectArgs(tool);
  if (args !== null) callTool(name, args);
}
function markTool(name, running) {
  const card = $("#tool-" + CSS.escape(name));
  if (!card) return;
  card.classList.toggle("active", running);
  const lbl = $(".run-label", card),
    btn = $('[data-act="run-tool"]', card);
  if (lbl)
    lbl.innerHTML = running
      ? '<span class="spinner"></span> Executing…'
      : ICONS.play + " Run " + esc(name);
  if (btn) btn.disabled = running;
}
async function callTool(name, args) {
  if (!S.handshaken) {
    toast("Not connected — waiting for handshake", "warn");
    return;
  }
  if (S.view !== "playground") switchView("playground");
  // Single-tool playground: go-tool buttons elsewhere (Database tab, Status
  // page) can target any tool — surface its card (with the Cancel button) so
  // the running state is always visible.
  const sel = $("#pgToolSelect");
  if (sel && S.pg.tool !== name) {
    S.pg.tool = name;
    S.pg._sel = true;
    sel.value = name;
    renderSingleTool();
  }
  const ctrl = new AbortController();
  S.pg.ctrls[name] = ctrl;
  markTool(name, true);
  const cb = $("#tool-" + CSS.escape(name) + ' [data-act="cancel-run"]');
  if (cb) cb.style.display = "inline-flex";
  const t0 = performance.now();
  try {
    const reply = await rpc(
      "tools/call",
      { name, arguments: args },
      { signal: ctrl.signal },
    );
    const dt = Math.round(performance.now() - t0);
    recordLatency(dt);
    const text =
      reply.result?.content?.map((c) => c.text || "").join("\n") ||
      "(empty result)";
    addEvent(name + " · " + dt + "ms");
    showResult(name, text, dt, reply, false);
    pushRecent(name, dt, "ok", text);
    toast(name + " completed · " + dt + "ms");
    // Indexing changed the knowledge base on disk — refresh the Status page
    // tiles so the user sees the new indexed state without restarting.
    if (name === "index_knowledge_base" || name === "index_javadocs")
      refreshKbStatus();
  } catch (e) {
    const dt = Math.round(performance.now() - t0);
    if (ctrl.signal.aborted) {
      addEvent(name + " cancelled");
      showResult(name, "(cancelled by user)", dt, null, true);
      pushRecent(name, dt, "cancel", "(cancelled by user)");
      toast(name + " cancelled", "warn");
    } else {
      addEvent(name + " failed");
      showResult(name, String(e.message || e), dt, null, true);
      pushRecent(name, dt, "err", String(e.message || e));
      toast(name + " failed: " + e.message, "warn");
    }
  } finally {
    markTool(name, false);
    if (cb) cb.style.display = "none";
    delete S.pg.ctrls[name];
    syncToolValidation(name);
  }
}
function pushRecent(name, dt, status, text) {
  S.pg.recent.unshift({ name, dt, status, t: Date.now(), text });
  if (S.pg.recent.length > 10) S.pg.recent.pop();
  renderRecent();
}
function renderRecent() {
  const card = $("#recentCard"),
    cnt = $("#recentCount"),
    list = $("#recentList");
  if (!card || !cnt || !list) return;
  card.style.display = S.pg.recent.length ? "" : "none";
  const rsz = $('.rsz[data-rsz="recent"]');
  if (rsz) rsz.style.display = S.pg.recent.length ? "" : "none";
  cnt.textContent = S.pg.recent.length + "/10";
  list.innerHTML = S.pg.recent
    .map(
      (r, i) =>
        '<button class="recent-item" data-act="recent-open" data-i="' +
        i +
        '" aria-label="Reopen ' +
        esc(r.name) +
        '">' +
        '<span class="r-name mono">' +
        esc(r.name) +
        "</span>" +
        '<span class="badge ' +
        (r.status === "ok"
          ? "b-ok"
          : r.status === "cancel"
            ? "b-warn"
            : "b-err") +
        '" style="flex:none">' +
        (r.status === "ok"
          ? "✓ " + r.dt + "ms"
          : r.status === "cancel"
            ? "✖ cancelled"
            : "✖ error") +
        "</span>" +
        '<span class="r-time num">' +
        fmtClock(r.t) +
        "</span>" +
        "</button>",
    )
    .join("");
}
/* Restore user-resized Playground panel sizes (wire log / recent runs) after
   a re-render — sizes are persisted to localStorage by the .rsz drag handles. */
function applyPgSizes() {
  try {
    const logH = parseFloat(localStorage.getItem("pz.pg.logH") || "");
    const lb = $("#logBody");
    if (lb && logH >= 80 && logH <= innerHeight * 0.6)
      lb.style.height = logH + "px";
    const recH = parseFloat(localStorage.getItem("pz.pg.recentH") || "");
    const rc = $("#recentCard");
    if (rc && recH >= 60 && recH <= innerHeight * 0.55) {
      rc.style.height = recH + "px";
      rc.style.maxHeight = recH + "px";
    }
  } catch {}
}
function resultHeadHTML(r) {
  // Same clamp the body uses: long-text Show-more only applies to raw markdown
  // output — structured KB lists scroll in #resultBody's own viewport.
  const long = r.text && r.text.length > 6000 && r.kbResults === null;
  return (
    '<span class="tool-ic" style="width:32px;height:32px;border-radius:9px;flex:none">' +
    (ICONS[TOOL_ICONS[r.name]] || ICONS.spark) +
    "</span>" +
    '<span class="mono" style="font-size:13px;font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
    esc(r.name) +
    "</span>" +
    (r.isError
      ? '<span class="badge b-err">✖ error</span>'
      : '<span class="badge b-ok">✓ ' +
        (r.dt != null ? r.dt + "ms" : "done") +
        "</span>") +
    '<span style="flex:1"></span>' +
    '<button class="btn sm ghost" data-act="copy-result">' +
    ICONS.copy +
    " Copy</button>" +
    (long
      ? '<button class="btn sm" data-act="res-toggle">Show more</button>'
      : "") +
    (r.script
      ? '<button class="btn sm" data-act="copy-script">' +
        ICONS.copy +
        " Copy script</button>"
      : "") +
    (r.script && r.name === "generate_script"
      ? '<button class="btn sm primary" data-act="to-validate">' +
        ICONS.shield +
        " Validate it</button>"
      : "") +
    (r.reply
      ? '<button class="btn sm ghost" data-act="inspect-raw">raw JSON</button>'
      : "") +
    '<button class="ibtn" style="width:36px;height:36px;border-radius:10px;flex:none" data-act="close-result" aria-label="Close result">' +
    ICONS.x +
    "</button>"
  );
}
function showResult(name, text, dt, reply, isError) {
  const card = $("#resultCard");
  if (!card) return;
  const fences = text.match(/```[\s\S]*?```/);
  const script = fences
    ? fences[0].replace(/^```[a-zA-Z]*\r?\n?/, "").replace(/```$/, "")
    : null;
  // Structured script diagnostics (validate_script / analyze_mod / modgen
  // results) render as a dedicated panel with severity icons, provenance
  // badges and click-to-open lines — extracted from the tool's structured
  // content so the deck doesn't have to parse markdown.
  const diags = reply ? findDiagnostics(reply.result?.structuredContent) : [];
  // KB v2: search_knowledge_base returns section-level chunks with portable
  // metadata (docTopic, type, package) — render them as a structured list with
  // per-row "View section" drill-down (get_knowledge_section) instead of a
  // bare markdown dump, so a hit reads as the exact chunk it is.
  const kbResults = extractKbResults(name, reply);
  S.lastResult = {
    name,
    text,
    script,
    reply,
    isError,
    dt,
    diags,
    kbResults,
    kbDrill: null,
    kbDrillContent: null,
  };
  // The long-text clamp only applies to raw markdown output; structured KB
  // lists scroll inside #resultBody's own viewport instead.
  const long = text.length > 6000 && kbResults === null;
  card.style.display = "";
  $("#resultHead").innerHTML = resultHeadHTML(S.lastResult);
  const body = $("#resultBody");
  body.classList.toggle("long", long);
  body.classList.remove("show-all");
  body.innerHTML = isError
    ? '<div class="md-p" style="color:#FDA4AF">' + esc(text) + "</div>"
    : kbResults !== null
      ? renderKbResultsBody(kbResults)
      : renderMD(text);
  if (diags.length) {
    const d = document.createElement("div");
    d.innerHTML = diagPanelHTML(diags);
    body.appendChild(d.firstElementChild);
  }
  card.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function sendToValidate(script) {
  switchView("playground");
  setTimeout(() => {
    if (S.openTool && S.openTool !== "validate_script") toggleTool(S.openTool);
    if (S.openTool !== "validate_script") toggleTool("validate_script");
    const ta = $("#pf-validate_script-content");
    if (ta) {
      ta.value = script;
      S.pg.values.validate_script = S.pg.values.validate_script || {};
      S.pg.values.validate_script.content = script;
      syncToolValidation("validate_script");
      ta.focus();
    }
    const el = $("#tool-validate_script");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    toast("Generated script loaded into validate_script — press Run");
  }, 80);
}
function restoreResult() {
  const card = $("#resultCard");
  if (!card || !S.lastResult) return;
  const r = S.lastResult;
  const long = r.text && r.text.length > 6000 && r.kbResults === null;
  card.style.display = "";
  $("#resultHead").innerHTML = resultHeadHTML(r);
  const body = $("#resultBody");
  body.classList.toggle("long", long);
  body.classList.remove("show-all");
  body.innerHTML = r.isError
    ? '<div class="md-p" style="color:#FDA4AF">' + esc(r.text) + "</div>"
    : r.kbResults !== null
      ? r.kbDrill != null && r.kbDrillContent
        ? kbSectionHTML(r.kbDrillContent, r.kbResults[r.kbDrill]?.type)
        : renderKbResultsBody(r.kbResults)
      : renderMD(r.text);
  if (r.diags && r.diags.length) {
    const d = document.createElement("div");
    d.innerHTML = diagPanelHTML(r.diags);
    body.appendChild(d.firstElementChild);
  }
}

/* ---------- knowledge-base results & section drill-down ---------- */
function extractKbResults(name, reply) {
  if (name !== "search_knowledge_base" || !reply) return null;
  const results = reply.result?.structuredContent?.results;
  return Array.isArray(results) ? results : null;
}
function kbTypeBadge(type) {
  const map = {
    wiki: "b-info",
    "api-docs": "b-vio",
    javadocs: "b-dim",
    "mods-analysis": "b-warn",
    research: "b-ok",
  };
  return (
    '<span class="badge ' +
    (map[type] || "b-dim") +
    '">' +
    esc(type || "doc") +
    "</span>"
  );
}
function kbRowHTML(r, i) {
  return (
    '<div class="kb-row">' +
    '<div class="kb-top">' +
    '<span class="kb-title mono">' +
    esc(r.title || r.topic) +
    "</span>" +
    kbTypeBadge(r.type) +
    (r.package
      ? '<span class="badge b-dim">' + esc(r.package) + "</span>"
      : "") +
    '<span class="kb-doc">' +
    esc(r.docTopic || r.topic) +
    "</span>" +
    "</div>" +
    '<div class="kb-meta">' +
    (typeof r.chars === "number"
      ? '<span>✒ ' + r.chars.toLocaleString() + " chars</span>"
      : "") +
    (typeof r.words === "number"
      ? '<span>' + r.words.toLocaleString() + " words</span>"
      : "") +
    (typeof r.score === "number" ? '<span>score ' + r.score + "</span>" : "") +
    "</div>" +
    '<div class="kb-snippet">' +
    esc(r.snippet || "") +
    "</div>" +
    // Inline chunk bodies come back when the user ticked Include content.
    (r.content
      ? '<div class="kb-inline">' + esc(r.content) + "</div>"
      : "") +
    '<div class="kb-foot">' +
    '<button class="btn sm" data-act="kb-section" data-i="' +
    i +
    '" title="Read exactly this section via get_knowledge_section">' +
    ICONS.book +
    " View section</button>" +
    "</div></div>"
  );
}
function renderKbResultsBody(results) {
  if (!results || !results.length) {
    return '<div class="md-out" style="color:var(--faint)">No knowledge-base results.</div>';
  }
  return (
    '<div class="sec-title" style="margin:0 2px 10px">' +
    results.length +
    " section(s) — each hit is one chunk with read-cost stats; click <b>View section</b> to read it, or tick <b>Include content</b> to get bodies inline</div>" +
    '<div class="kb-res">' +
    results.map(kbRowHTML).join("") +
    "</div>"
  );
}
function kbSectionHTML(m, type) {
  return (
    '<div class="kb-drill">' +
    '<div class="kb-drill-head">' +
    '<button class="btn sm ghost" data-act="kb-back">' +
    ICONS.back +
    " Back to results</button>" +
    kbTypeBadge(type) +
    '<span class="kb-doc mono">' +
    esc(m.docTopic || "") +
    "</span>" +
    '<span style="flex:1"></span>' +
    '<button class="btn sm ghost" data-act="kb-copy">' +
    ICONS.copy +
    " Copy section</button>" +
    "</div>" +
    '<div class="kb-drill-title">' +
    esc(m.title || m.topic) +
    "</div>" +
    '<div class="md-p">' +
    renderMD(m.content || "") +
    "</div></div>"
  );
}
async function kbDrillIn(i) {
  const r = S.lastResult.kbResults && S.lastResult.kbResults[i];
  const body = $("#resultBody");
  if (!r || !body) return;
  body.innerHTML =
    '<div class="md-out" style="display:flex;align-items:center;gap:10px"><span class="spinner"></span> reading section…</div>';
  try {
    const reply = await kbSectionFetch(r.topic);
    const match = reply.result?.structuredContent;
    if (!match) throw new Error("empty section response");
    S.lastResult.kbDrill = i;
    S.lastResult.kbDrillContent = match;
    body.innerHTML = kbSectionHTML(match, r.type);
  } catch (e) {
    body.innerHTML =
      '<div class="md-out" style="color:#FDA4AF">✖ ' +
      esc(e.message || e) +
      "</div>";
  }
}
async function kbSectionFetch(topic) {
  return rpc("tools/call", {
    name: "get_knowledge_section",
    arguments: { topic },
  });
}

/* ---------- knowledge-base search (Database tab) ---------- */
function restoreKbDb() {
  const out = $("#kbOut");
  // No results yet (or a zero-hit search): keep the placeholder guidance.
  if (!out || !S.kbdb.results || !S.kbdb.results.length) return;
  if (S.kbdb.drill != null && S.kbdb.drillContent)
    out.innerHTML = kbSectionHTML(
      S.kbdb.drillContent,
      S.kbdb.results[S.kbdb.drill]?.type,
    );
  else out.innerHTML = renderKbResultsBody(S.kbdb.results);
}
async function kbDbSearch() {
  const q = $("#kbQuery").value.trim();
  const type = $("#kbType").value;
  const inc = $("#kbInclude");
  const includeContent = !!(inc && inc.checked);
  const out = $("#kbOut");
  if (!q) {
    toast("Type a KB query first", "warn");
    return;
  }
  out.innerHTML =
    '<div class="md-out" style="display:flex;align-items:center;gap:10px"><span class="spinner"></span> querying knowledge base…</div>';
  try {
    const args = { query: q, limit: 15 };
    if (type) args.type = type;
    if (includeContent) args.includeContent = true;
    const reply = await rpc("tools/call", {
      name: "search_knowledge_base",
      arguments: args,
    });
    const results = reply.result?.structuredContent?.results || [];
    S.kbdb.results = results;
    S.kbdb.drill = null;
    S.kbdb.drillContent = null;
    out.innerHTML = results.length
      ? renderKbResultsBody(results)
      : '<div class="md-out" style="color:var(--faint)">No knowledge-base results for “' +
        esc(q) +
        '”. Run <b>index_knowledge_base</b> / <b>index_javadocs</b> first.</div>';
  } catch (e) {
    out.innerHTML =
      '<div class="md-out" style="color:#FDA4AF">✖ ' + esc(e.message || e) + "</div>";
  }
}
async function kbDbDrill(i) {
  const r = S.kbdb.results && S.kbdb.results[i];
  const out = $("#kbOut");
  if (!r || !out) return;
  out.innerHTML =
    '<div class="md-out" style="display:flex;align-items:center;gap:10px"><span class="spinner"></span> reading section…</div>';
  try {
    const reply = await kbSectionFetch(r.topic);
    const match = reply.result?.structuredContent;
    if (!match) throw new Error("empty section response");
    S.kbdb.drill = i;
    S.kbdb.drillContent = match;
    out.innerHTML = kbSectionHTML(match, r.type);
  } catch (e) {
    out.innerHTML =
      '<div class="md-out" style="color:#FDA4AF">✖ ' + esc(e.message || e) + "</div>";
  }
}
function kbDbBack() {
  const out = $("#kbOut");
  if (!out) return;
  S.kbdb.drill = null;
  S.kbdb.drillContent = null;
  out.innerHTML =
    S.kbdb.results && S.kbdb.results.length
      ? renderKbResultsBody(S.kbdb.results)
      : '<div class="md-out" style="color:var(--faint)">Search results will appear here.</div>';
}

/* ---------- wire log ---------- */
function logLineHTML(e) {
  const glyph = e.dir === "req" ? "→" : e.dir === "res" ? "←" : "◆";
  const idTag =
    e.msg.id !== undefined ? ' <span class="id">#' + e.msg.id + "</span>" : "";
  const err = e.msg.error
    ? ' <span class="badge b-err" style="font-size:9px;padding:1px 6px">err</span>'
    : "";
  return (
    '<div class="log-line" role="button" tabindex="0" data-id="' +
    e.id +
    '" aria-label="Inspect ' +
    esc(e.method) +
    '">' +
    '<span class="lg-dir ' +
    e.dir +
    '">' +
    glyph +
    "</span>" +
    '<span class="lg-method">' +
    esc(e.method) +
    idTag +
    err +
    "</span>" +
    (e.latency != null
      ? '<span class="lg-lat num">' + e.latency + "ms</span>"
      : "<span></span>") +
    '<span class="lg-time num">' +
    fmtClock(e.t) +
    "</span>" +
    '<span class="lg-chv">' +
    ICONS.arrowR +
    "</span></div>"
  );
}
function appendLogLine(e) {
  const body = $("#logBody");
  if (!body) return;
  const empty = $(".log-empty", body);
  if (empty) empty.remove();
  body.insertAdjacentHTML("beforeend", logLineHTML(e));
  while (body.children.length > 300) body.removeChild(body.firstChild);
  if (S.settings.autoScroll) body.scrollTop = body.scrollHeight;
  const cnt = $("#logCount");
  if (cnt) cnt.textContent = S.logs.length + " frames";
}
function renderAllLogs() {
  const body = $("#logBody");
  if (!body) return;
  if (body.childElementCount === S.logs.length && S.logs.length > 0) return;
  body.innerHTML = S.logs.length
    ? S.logs.map(logLineHTML).join("")
    : '<div class="log-empty">No frames yet — run a tool and watch the real JSON-RPC traffic here.</div>';
  if (S.settings.autoScroll) body.scrollTop = body.scrollHeight;
}
function openLogEntry(id) {
  const e = S.logs.find((x) => x.id === id);
  if (e) openTerminal(e);
}

/* ==================== DATABASE ==================== */
function databaseHTML() {
  return (
    '<div class="sec-title" style="margin-top:0">data/pz_database.db · live counts</div>' +
    '<div class="tile-grid" id="dbTiles"></div>' +
    '<section class="glass card panel-card">' +
    "<h3>" +
    ICONS.search +
    ' Live Search <span class="badge b-dim" style="margin-left:auto">via search_vanilla · FTS5</span></h3>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
    '<input class="field" id="dbQuery" style="flex:1;min-width:200px" placeholder="Search items, recipes, sounds, vehicles… e.g. axe, canned food, V8 engine" aria-label="Search query">' +
    '<select class="field" id="dbType" style="width:150px" aria-label="Type filter"><option value="all">all</option><option value="item">item</option><option value="recipe">recipe</option><option value="sound">sound</option><option value="vehicle">vehicle</option></select>' +
    '<button class="btn primary" data-act="db-search">' +
    ICONS.search +
    " Search</button>" +
    "</div>" +
    '<div id="dbOut" style="margin-top:14px"><div class="md-out" style="color:var(--faint)">Results will appear here. If the database is empty, run <b>parse_game_files</b> in the Playground first.</div></div>' +
    "</section>" +
    '<section class="glass card panel-card" style="margin-top:14px">' +
    "<h3>" +
    ICONS.book +
    ' Knowledge Base <span class="badge b-dim" style="margin-left:auto">via search_knowledge_base · section chunks</span></h3>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
    '<input class="field" id="kbQuery" style="flex:1;min-width:200px" placeholder="Search wiki docs, research notes & Java API… e.g. getSquare, blacksmithing, loot" aria-label="Knowledge base query">' +
    '<select class="field" id="kbType" style="width:150px" aria-label="Doc type filter">' +
    '<option value="">all types</option><option value="wiki">wiki</option><option value="api-docs">api-docs</option><option value="javadocs">javadocs</option><option value="mods-analysis">mods-analysis</option><option value="research">research</option>' +
    "</select>" +
    '<label class="kb-inc" title="Return each chunk full body inline (search + read in one call — no extra get_knowledge_section round trips)"><input type="checkbox" id="kbInclude"> include content</label>' +
    '<button class="btn primary" data-act="kb-search">' +
    ICONS.search +
    " Search KB</button>" +
    '<button class="btn sm" data-act="go-tool" data-tool="index_knowledge_base">' +
    ICONS.book +
    " index_knowledge_base</button>" +
    '<button class="btn sm" data-act="go-tool" data-tool="index_javadocs">' +
    ICONS.code +
    " index_javadocs</button>" +
    "</div>" +
    '<div class="f-hint" style="margin:8px 2px 0">Indexed markdown docs + the repo-shipped JavaDocs reference are split into <b>section chunks</b> — search returns precise units with <b>chars/words</b> so you can budget reads, and <b>View section</b> reads exactly one (wiki section or a single method/field). Tick <b>Include content</b> to get chunk bodies inline. Natural-language queries rank wiki/research/api-docs first; identifiers (getSquare) rank JavaDocs first.</div>' +
    '<div id="kbOut" style="margin-top:14px"><div class="md-out" style="color:var(--faint)">Search results will appear here — each result is one section; click <b>View section</b> to read it.</div></div>' +
    "</section>"
  );
}
function renderDbStats() {
  const box = $("#dbTiles");
  if (!box) return;
  const db = S.telemetry?.db;
  const TYPE_TIPS = {
    item: "Items you can hold, use, wear or eat — weapons, food, tools, clothes, materials. The things recipes consume and produce.",
    recipe:
      "Crafting recipes: how the game turns ingredients into results — building, cooking, crafting, crafting stations.",
    evolvedrecipe:
      "Cooking evolution — how prepared food upgrades into better meals (e.g. soup → stew) as ingredients are added.",
    fixing:
      "Repair recipes — how worn or damaged items are fixed with tools and materials (patching clothes, mending weapons).",
    sound:
      "Game sound scripts — the audio events (footsteps, gunshots, doors, alarms) that items and animations trigger.",
    vehicle:
      "Vehicles and their parts — cars, engines, seats, doors, with stats like condition, fuel capacity and weight.",
  };
  const tile = (k, v, tip) =>
    '<div class="glass card stat-tile" ' +
    (tip ? 'title="' + esc(tip) + '"' : "") +
    '><div class="tv num">' +
    (v ?? 0).toLocaleString() +
    '</div><div class="tk2">' +
    esc(k) +
    "</div></div>";
  if (!db) {
    box.innerHTML =
      tile("total", 0) +
      '<div class="glass stat-tile" style="grid-column:span 2;display:flex;align-items:center;gap:10px;color:var(--muted);font-size:13px;flex-wrap:wrap">' +
      ICONS.warn +
      ' Database not created yet — run <button class="btn sm" data-act="go-tool" data-tool="parse_game_files" style="margin:0 4px">parse_game_files</button> first.</div>';
    return;
  }
  box.innerHTML =
    tile(
      "total",
      db.total,
      "Everything indexed from the game scripts: items, recipes, sounds, vehicles and more. Hover the other tiles to learn what each type means.",
    ) +
    Object.entries(db.byType)
      .map(([k, v]) =>
        tile(k, v, TYPE_TIPS[k] || "Rows of type “" + k + "” in the database."),
      )
      .join("") +
    tile(
      "references",
      db.references,
      "Links between recipes and items — which recipe needs which ingredients and produces which results. This is what powers the recipe chain browser.",
    ) +
    tile(
      "mods",
      db.mods,
      "Distinct mods whose scripts were parsed into this database — the vanilla game counts as one, plus any workshop mods you have analyzed.",
    );
}
async function dbSearch() {
  const q = $("#dbQuery").value.trim();
  const type = $("#dbType").value;
  const out = $("#dbOut");
  if (!q) {
    toast("Type a query first", "warn");
    return;
  }
  out.innerHTML =
    '<div class="md-out" style="display:flex;align-items:center;gap:10px"><span class="spinner"></span> querying SQLite FTS5…</div>';
  try {
    const args = { query: q, limit: 15 };
    if (type !== "all") args.type = type;
    const reply = await rpc("tools/call", {
      name: "search_vanilla",
      arguments: args,
    });
    const results = reply.result?.structuredContent?.results || [];
    if (!results.length) {
      out.innerHTML =
        '<div class="md-out" style="color:var(--faint)">No results for “' +
        esc(q) +
        "”. Try a broader query.</div>";
      return;
    }
    out.innerHTML =
      '<div class="sec-title" style="margin:0 2px 10px">' +
      results.length +
      " result(s) — hover a row for details</div>" +
      '<div class="db-res">' +
      results.map(dbRowHTML).join("") +
      "</div>";
  } catch (e) {
    out.innerHTML =
      '<div class="md-out" style="color:#FDA4AF">✖ ' +
      esc(e.message) +
      "</div>";
  }
}
function dbRowHTML(r) {
  const name = r.displayName || r.name || r.id;
  let tip =
    r.displayName && r.displayName !== r.name
      ? r.displayName + " (" + r.id + ")"
      : r.id;
  const lines = [];
  if (r.type) lines.push("Type: " + r.type);
  if (r.module) lines.push("Module: " + r.module);
  if (r.category) lines.push("Category: " + r.category);
  if (r.weight != null) lines.push("Weight: " + r.weight + " kg");
  if (r.calories != null) lines.push("Calories: " + r.calories);
  const props = r.properties
    ? Object.entries(r.properties)
        .filter(([, v]) => v !== null && v !== undefined)
        .slice(0, 8)
        .map(([k, v]) => k + ": " + v)
        .join("\n")
    : "";
  if (props) lines.push("", "Properties:", props);
  if (lines.length) tip += "\n\n" + lines.join("\n");
  return (
    '<div class="db-row" tabindex="0" title="' +
    esc(tip) +
    '">' +
    '<span class="db-name">' +
    esc(name) +
    "</span>" +
    '<span class="badge ' +
    (r.type === "recipe" ? "b-dim" : "b-info") +
    '">' +
    esc(r.type || "?") +
    "</span>" +
    (r.module && r.module !== "Base"
      ? '<span class="badge b-dim">' + esc(r.module) + "</span>"
      : "") +
    (r.category
      ? '<span style="margin-left:auto" class="tk2">' +
        esc(r.category) +
        "</span>"
      : "") +
    "</div>"
  );
}
function wsStat(label, value) {
  return (
    '<div class="glass card stat-tile" style="flex:1;min-width:110px"><div class="tv num">' +
    value +
    '</div><div class="tk2">' +
    esc(label) +
    "</div></div>"
  );
}
function wsDirStatusHTML() {
  return S.wsDir
    ? 'Custom — <span class="mono">' + esc(S.wsDir) + "</span>"
    : "Default (Steam workshop content, or PZ_WORKSHOP_DIR)";
}
function wsCardHTML(it) {
  const thumb = it.thumbnailUrl
    ? '<img class="ws-thumb" src="' +
      esc(it.thumbnailUrl) +
      '" alt="' +
      esc(it.title) +
      '" loading="lazy">'
    : '<div class="ws-thumb-ph">no preview</div>';
  return (
    '<button class="glass card ws-card" data-act="ws-select" data-id="' +
    esc(it.id) +
    '" aria-label="Fetch details for ' +
    esc(it.title) +
    '">' +
    thumb +
    '<span class="ws-title">' +
    esc(it.title) +
    "</span>" +
    '<span class="ws-sub">' +
    (it.author ? "<span>" + esc(it.author) + "</span>" : "") +
    (it.subscribers > 0
      ? "<span>👥 " + it.subscribers.toLocaleString() + "</span>"
      : "") +
    '<span class="badge b-dim" style="margin-left:auto">#' +
    esc(it.id) +
    "</span>" +
    "</span></button>"
  );
}
function workshopHTML() {
  let html =
    '<div class="sec-title" style="margin-top:0">Steam Workshop · Project Zomboid (AppID 108600)</div>' +
    '<section class="glass card panel-card" style="margin-bottom:16px">' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
    '<input class="field" id="wsQuery" style="flex:1;min-width:200px" placeholder="Search mods… e.g. Brita, Common Sense, map pack" aria-label="Workshop search">' +
    '<button class="btn primary" id="wsSearchBtn" data-act="ws-search">' +
    ICONS.search +
    " Search</button>" +
    "</div>" +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--stroke-soft)">' +
    '<span class="badge b-dim" style="flex:none">or</span>' +
    '<input class="field" id="wsId" style="flex:1;min-width:220px" placeholder="Paste a workshop URL or numeric id (guaranteed resolution)" aria-label="Workshop URL or id">' +
    '<button class="btn" id="wsDetailsBtn" data-act="ws-details">' +
    ICONS.link +
    " Fetch details</button>" +
    "</div>" +
    '<div class="f-hint" style="margin:8px 2px 0">Browse is best-effort (Steam HTML scrape). Pasting a URL or id is the guaranteed path — use it when search misses.</div>' +
    (S.wsDir
      ? '<div class="f-hint" style="margin:4px 2px 0;display:flex;align-items:center;gap:10px">Download folder: <code class="mono">' +
        esc(S.wsDir) +
        '</code><button class="btn sm ghost" data-act="ws-open-folder" title="Open the download folder in Explorer">' +
        ICONS.folder +
        ' Open folder</button><span class="faint" style="font-size:12px">— change it in Settings → Workshop</span></div>'
      : '<div class="f-hint" style="margin:4px 2px 0;display:flex;align-items:center;gap:10px">Download folder: default (Steam workshop content)<button class="btn sm ghost" data-act="ws-open-folder" title="Open the download folder in Explorer">' +
        ICONS.folder +
        " Open folder</button></div>") +
    "</section>" +
    '<div id="wsBody"></div>';
  return html;
}
function renderWorkshopResults() {
  const body = $("#wsBody");
  if (!body) return;
  if (S.ws.busy) {
    body.innerHTML =
      '<div class="md-out" style="display:flex;align-items:center;gap:10px"><span class="spinner"></span> querying Steam…</div>';
    return;
  }
  if (S.ws.error) {
    body.innerHTML =
      '<div class="md-out" style="color:#FDA4AF">✖ ' +
      esc(S.ws.error) +
      "</div>";
    return;
  }
  if (S.ws.detail) {
    body.innerHTML = wsDetailHTML(S.ws.detail);
    wsReportToggleFix();
    return;
  }
  const r = S.ws.results || [];
  if (!r.length) {
    body.innerHTML =
      '<div class="md-out" style="color:var(--faint)">No results yet — search above, or paste a workshop URL/id for guaranteed metadata.</div>';
    return;
  }
  body.innerHTML =
    '<div class="sec-title" style="margin:0 2px 10px">' +
    r.length +
    " result(s) · click a card to fetch details</div>" +
    '<div class="ws-grid">' +
    r.map(wsCardHTML).join("") +
    "</div>";
}
async function wsSearch() {
  if (S.ws.busy) {
    toast("A workshop request is already running", "warn");
    return;
  }
  const q = $("#wsQuery").value.trim();
  if (!q) {
    toast("Type a search query", "warn");
    return;
  }
  clearInterval(S.ws.pipeTimer);
  S.ws.pipeTimer = 0;
  wsDlReset();
  S.ws.busy = true;
  S.ws.error = null;
  S.ws.detail = null;
  S.ws.actionError = null;
  S.ws.report = null;
  S.ws.download = null;
  renderWorkshopResults();
  const btn = $("#wsSearchBtn");
  if (btn) btn.disabled = true;
  try {
    const reply = await rpc("tools/call", {
      name: "workshop_search",
      arguments: { query: q, limit: 24 },
    });
    const sc = reply.result?.structuredContent;
    S.ws.results = sc?.items || [];
    S.ws.busy = false;
    renderWorkshopResults();
    addEvent("workshop search · " + S.ws.results.length + " items");
  } catch (e) {
    S.ws.busy = false;
    S.ws.error = String(e.message || e).replace(
      /^Tool execution failed:\s*/,
      "",
    );
    renderWorkshopResults();
  } finally {
    if (btn) btn.disabled = false;
  }
}
async function wsFetchDetails(input, forceRefresh) {
  if (S.ws.busy) {
    toast("A workshop request is already running", "warn");
    return;
  }
  clearInterval(S.ws.pipeTimer);
  S.ws.pipeTimer = 0;
  wsDlReset();
  S.ws.busy = true;
  S.ws.error = null;
  S.ws.actionError = null;
  S.ws.report = null;
  S.ws.download = null;
  renderWorkshopResults();
  try {
    const args = { id: input };
    if (forceRefresh) args.forceRefresh = true;
    const reply = await rpc("tools/call", {
      name: "workshop_get_details",
      arguments: args,
    });
    const sc = reply.result?.structuredContent;
    S.ws.detail = sc?.details || null;
    S.ws.busy = false;
    renderWorkshopResults();
    if (S.ws.detail && sc?.isProjectZomboid === false)
      toast("Not a Project Zomboid item — app " + S.ws.detail.appId, "warn");
    else if (S.ws.detail) toast("Details loaded — " + S.ws.detail.title);
  } catch (e) {
    S.ws.busy = false;
    const msg = String(e.message || e).replace(
      /^Tool execution failed:\s*/,
      "",
    );
    // A failed refresh on an already-loaded detail card keeps the card visible
    // (inline alert) instead of replacing the whole view with a bare error.
    if (forceRefresh && S.ws.detail) S.ws.actionError = msg;
    else S.ws.error = msg;
    renderWorkshopResults();
  }
}
function wsDownloadResultHTML(r) {
  return (
    '<div class="md-out" style="margin-top:12px">' +
    '<div class="md-h">✅ Downloaded — ' +
    esc(r.downloadedPath) +
    "</div>" +
    '<div class="md-p">' +
    ICONS.db +
    " " +
    esc(fmtBytes(r.bytes)) +
    " in " +
    (r.elapsedMs / 1000).toFixed(1) +
    "s · steamcmd attempts: " +
    esc(String(r.attempts)) +
    "</div>" +
    '<div class="md-p" style="color:var(--faint)">Next: click <b>Fetch &amp; Analyze</b> to run the full pipeline — download, parse and a complete Mod Report.</div></div>'
  );
}
/* Progress for workshop_download: the server streams
 * "workshop_download: progress N% (b/e bytes)" + phase lines via pino → SSE. */
function wsDlFromLogs() {
  let hit = null;
  for (const e of S.serverLog || []) {
    const line = e && e.line;
    if (!line) continue;
    if (e.t && S.ws.dl.startedAt && e.t < S.ws.dl.startedAt) continue;
    let msg = null;
    try {
      const j = JSON.parse(line);
      if (j && typeof j.msg === "string") msg = j.msg;
    } catch {
      /* raw */
    }
    if (!msg) {
      const m = line.match(/"msg":"workshop_download: progress ([^"]*)"/);
      if (m) msg = "workshop_download: progress " + m[1];
    }
    if (!msg || !msg.startsWith("workshop_download: progress")) continue;
    const m2 = msg.match(/(\d+(?:\.\d+)?)%\s*\((\d+)\/(\d+)\s*bytes\)/);
    if (m2)
      hit = {
        pct: Math.min(99, Math.round(+m2[1])),
        bytes: +m2[2],
        expected: +m2[3],
      };
  }
  return hit;
}
function wsDlPhaseFromLogs() {
  let phase = null;
  for (const e of S.serverLog || []) {
    const line = e && e.line;
    if (!line) continue;
    if (e.t && S.ws.dl.startedAt && e.t < S.ws.dl.startedAt) continue;
    let msg = null;
    try {
      const j = JSON.parse(line);
      if (j && typeof j.msg === "string") msg = j.msg;
    } catch {
      /* raw */
    }
    if (!msg) {
      const m = line.match(/"msg":"workshop_download: ([^"]*)"/);
      if (m) msg = "workshop_download: " + m[1];
    }
    if (
      !msg ||
      !msg.startsWith("workshop_download:") ||
      /^workshop_download: progress/.test(msg)
    )
      continue;
    phase = msg.slice("workshop_download:".length).trim();
  }
  return phase;
}
function wsDlMeterHTML(id) {
  const dl = S.ws.dl;
  const pct = dl.expected > 0 ? Math.min(100, Math.round(dl.pct || 0)) : 0;
  const got = fmtBytes(dl.bytes || 0);
  const total = dl.expected > 0 ? fmtBytes(dl.expected) : "…";
  return (
    '<div class="ws-pipe" id="wsDlMeter" style="margin-top:12px;align-items:center">' +
    '<div style="flex:1;min-width:180px">' +
    '<div class="ws-dl-bar"><i style="width:' +
    pct +
    '%"></i></div>' +
    '<div class="ws-dl-meta"><span>' +
    got +
    " / " +
    total +
    "</span>" +
    (dl.expected > 0 ? "<span>" + pct + "%</span>" : "") +
    "<span>⏱ " +
    Math.round(dl.elapsed || 0) +
    "s</span></div>" +
    "</div>" +
    '<button class="btn sm danger" data-act="ws-pause-dl" data-id="' +
    esc(id) +
    '" title="Pause the download">' +
    ICONS.x +
    " Pause</button>" +
    (dl.phase
      ? '<div class="ws-dl-phase" style="width:100%">' +
        esc(dl.phase) +
        "</div>"
      : "") +
    "</div>"
  );
}
function wsDlReset() {
  clearInterval(S.ws.dl.timer);
  S.ws.dl.timer = 0;
  Object.assign(S.ws.dl, {
    active: false,
    paused: false,
    reqPaused: false,
    pct: 0,
    bytes: 0,
    expected: 0,
    elapsed: 0,
    phase: null,
  });
  S.ws.downloading = false;
}
/* Live phase detection: the server logs "workshop_analyze: <phase>" via pino,
 * and the bridge forwards every log line as an SSE `log` event, so the deck
 * can drive a real pipeline UI instead of a static spinner. */
function wsPhaseFromLogs() {
  let phase = null;
  for (const e of S.serverLog || []) {
    const line = e && e.line;
    if (!line) continue;
    // Only phases logged since this analyze started — otherwise a re-run could
    // instantly inherit a stale phase from the previous run (log is capped, not cleared).
    if (e.t && S.ws.startedAt && e.t < S.ws.startedAt) continue;
    let msg = null;
    try {
      const j = JSON.parse(line);
      if (j && typeof j.msg === "string") msg = j.msg;
    } catch {
      /* raw text fallback below */
    }
    if (!msg) {
      const m = line.match(/"msg":"workshop_analyze:\s*([^"]*)"/);
      if (m) msg = "workshop_analyze: " + m[1];
    }
    if (!msg || !msg.startsWith("workshop_analyze:")) continue;
    phase = msg.slice("workshop_analyze:".length).trim();
  }
  return phase;
}
function wsPipeHTML() {
  const steps = ["Download", "Parse", "Analyze"];
  const ph = S.ws.phase || "";
  let cur = 0;
  if (/pars/i.test(ph)) cur = 1;
  else if (/analys|analyz/i.test(ph)) cur = 2;
  const secs = Math.max(
    0,
    Math.round((Date.now() - (S.ws.startedAt || Date.now())) / 1000),
  );
  return (
    '<div class="ws-pipe" id="wsPipe">' +
    steps
      .map(
        (s, i) =>
          '<span class="ws-step ' +
          (i < cur ? "done" : i === cur ? "active" : "") +
          '"><span class="dot"></span>' +
          s +
          (i === cur
            ? '<span class="spinner" style="width:11px;height:11px;margin-left:2px"></span>'
            : "") +
          "</span>",
      )
      .join('<span style="color:var(--faint);font-size:11px">→</span>') +
    '<span class="elapsed">' +
    secs +
    "s</span>" +
    (ph
      ? '<div style="width:100%;font-size:11.5px;color:var(--muted)">' +
        esc(ph) +
        "</div>"
      : "") +
    "</div>"
  );
}
function wsReportHTML(r) {
  const sc = r.sc || {};
  const an = sc.analysis || {};
  const q = an.quality || {};
  const issues = Array.isArray(an.issues) ? an.issues : [];
  const errN = issues.filter((i) => i.severity === "error").length;
  const warnN = issues.filter((i) => i.severity === "warning").length;
  const parse = sc.parse || {};
  const chips = [];
  if (typeof q.overall === "number")
    chips.push(
      '<span class="ws-chip score">Quality <b>' + q.overall + "/100</b></span>",
    );
  chips.push(
    '<span class="ws-chip">Items <b>' +
      esc(String(parse.itemCount ?? "—")) +
      "</b></span>",
  );
  chips.push(
    '<span class="ws-chip">Recipes <b>' +
      esc(String(parse.recipeCount ?? "—")) +
      "</b></span>",
  );
  chips.push(
    '<span class="ws-chip">Sounds <b>' +
      esc(String(parse.soundCount ?? "—")) +
      "</b></span>",
  );
  chips.push(
    '<span class="ws-chip">Files <b>' +
      esc(String(parse.filesProcessed ?? "—")) +
      "</b></span>",
  );
  chips.push(
    errN || warnN
      ? '<span class="ws-chip warn">Issues <b>' +
          errN +
          " err / " +
          warnN +
          " warn</b></span>"
      : '<span class="ws-chip">Issues <b>0</b></span>',
  );
  if (sc.elapsedMs != null)
    chips.push(
      '<span class="ws-chip">⏱ ' +
        (sc.elapsedMs / 1000).toFixed(1) +
        "s</span>",
    );
  return (
    '<section class="glass card" style="margin-top:16px;overflow:hidden">' +
    '<div class="ws-report-head">' +
    ICONS.scan +
    " Mod Report" +
    '<span class="badge b-dim" style="margin-left:auto">' +
    esc(sc.title || "") +
    "</span>" +
    '<button class="btn sm" data-act="ws-copy-report" title="Copy the full report">' +
    ICONS.copy +
    " Copy</button>" +
    '<button class="btn sm ghost" data-act="ws-toggle-report" id="wsToggleBtn">Show more</button>' +
    "</div>" +
    '<div style="padding:0 16px 4px">' +
    chips.join("") +
    "</div>" +
    '<div class="md-out ws-report-body" id="wsReportBody" style="border-radius:0;border:0;border-top:1px solid var(--stroke-soft)">' +
    renderMD(r.text) +
    "</div>" +
    "</section>"
  );
}
function wsReportToggleFix() {
  const body = $("#wsReportBody"),
    btn = $("#wsToggleBtn");
  if (!body || !btn) return;
  // Only offer "Show more" when the report actually overflows its box.
  btn.style.display = body.scrollHeight > body.clientHeight + 4 ? "" : "none";
}
async function wsAnalyze(id) {
  if (S.ws.analyzing) return;
  clearInterval(S.ws.pipeTimer);
  S.ws.analyzing = true;
  S.ws.report = null;
  S.ws.download = null;
  S.ws.error = null;
  S.ws.actionError = null;
  S.ws.phase = null;
  S.ws.startedAt = Date.now();
  renderView();
  S.ws.pipeTimer = setInterval(() => {
    S.ws.phase = wsPhaseFromLogs();
    const el = $("#wsPipe");
    if (el) el.outerHTML = wsPipeHTML();
  }, 1000);
  try {
    const reply = await rpc("tools/call", {
      name: "workshop_analyze",
      arguments: { id },
    });
    const text =
      reply.result?.content?.map((c) => c.text || "").join("\n") || "";
    S.ws.report = { text, sc: reply.result?.structuredContent || null };
    if (!text) throw new Error("Empty report from workshop_analyze");
    addEvent(
      "workshop analyze · " +
        id +
        (S.ws.report.sc?.elapsedMs != null
          ? " · " + (S.ws.report.sc.elapsedMs / 1000).toFixed(1) + "s"
          : ""),
    );
    toast("Analysis complete — Mod Report ready");
  } catch (e) {
    S.ws.actionError = String(e.message || e).replace(
      /^Tool execution failed:\s*/,
      "",
    );
  } finally {
    clearInterval(S.ws.pipeTimer);
    S.ws.pipeTimer = 0;
    S.ws.analyzing = false;
    renderView();
  }
}
async function wsDownload(id) {
  if (S.ws.downloading) return;
  clearInterval(S.ws.dl.timer);
  const dl = S.ws.dl;
  Object.assign(dl, {
    active: true,
    paused: false,
    reqPaused: false,
    pct: 0,
    bytes: 0,
    expected: 0,
    elapsed: 0,
    phase: null,
    startedAt: Date.now(),
  });
  S.ws.downloading = true;
  S.ws.download = null;
  S.ws.error = null;
  S.ws.actionError = null;
  renderView();
  dl.timer = setInterval(() => {
    const p = wsDlFromLogs();
    if (p) {
      dl.pct = p.pct;
      dl.bytes = p.bytes;
      dl.expected = p.expected;
    }
    dl.elapsed = (Date.now() - dl.startedAt) / 1000;
    const ph = wsDlPhaseFromLogs();
    if (ph) dl.phase = ph;
    const el = $("#wsDlMeter");
    if (el) el.outerHTML = wsDlMeterHTML(id);
  }, 500);
  try {
    const reply = await rpc("tools/call", {
      name: "workshop_download",
      arguments: { id },
    });
    const sc = reply.result?.structuredContent;
    S.ws.download = sc || null;
    if (!S.ws.download)
      throw new Error("No structured result from workshop_download");
    toast("Downloaded — " + fmtBytes(S.ws.download.bytes));
    addEvent(
      "workshop download · " + id + " · " + fmtBytes(S.ws.download.bytes),
    );
  } catch (e) {
    if (dl.reqPaused) dl.paused = true;
    else
      S.ws.actionError = String(e.message || e).replace(
        /^Tool execution failed:\s*/,
        "",
      );
  } finally {
    clearInterval(dl.timer);
    dl.timer = 0;
    Object.assign(dl, { active: false, reqPaused: false });
    S.ws.downloading = false;
    renderView();
  }
}
async function wsPauseDownload(_id) {
  const dl = S.ws.dl;
  dl.reqPaused = true;
  try {
    const r = await fetch("/api/workshop/pause", { method: "POST" });
    const d = await r.json().catch(() => ({}));
    if (!d.ok) toast(d.error || "Could not pause the download", "warn");
  } catch {
    /* the download call itself will surface the interrupted state */
  }
}
function wsResumeDownload(id) {
  S.ws.dl.paused = false;
  wsDownload(id);
}
function wsCancelDownload() {
  wsDlReset();
  renderView();
}
function wsDetailHTML(d) {
  const isPz = d.appId === "108600";
  const tags =
    d.tags && d.tags.length
      ? d.tags.map((t) => '<span class="chip">' + esc(t) + "</span>").join("")
      : "";
  return (
    '<section class="glass card panel-card" style="margin-bottom:16px">' +
    '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px">' +
    '<h3 style="margin:0">' +
    ICONS.scan +
    ' <span style="font-family:var(--font-mono);font-size:13px">' +
    esc(d.title) +
    "</span></h3>" +
    '<span style="flex:1"></span>' +
    '<a class="btn sm" href="' +
    esc(d.url) +
    '" target="_blank" rel="noopener">' +
    ICONS.link +
    " Steam page</a>" +
    '<button class="ibtn" data-act="ws-refresh" data-id="' +
    esc(d.id) +
    '" title="Refresh metadata (bypass 24h cache)" aria-label="Refresh metadata"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg></button>' +
    '<button class="btn sm ghost" data-act="ws-back">' +
    ICONS.x +
    " Close</button>" +
    "</div>" +
    '<div class="ws-detail-grid">' +
    (d.thumbnailUrl
      ? '<img class="ws-detail-thumb" src="' +
        esc(d.thumbnailUrl) +
        '" alt="' +
        esc(d.title) +
        '" loading="lazy">'
      : '<div class="ws-thumb-ph">no preview</div>') +
    "<div>" +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:10px">' +
    '<span class="badge ' +
    (isPz ? "b-ok" : "b-warn") +
    '">' +
    (isPz ? "Project Zomboid ✓" : "not PZ — app " + esc(d.appId || "?")) +
    "</span>" +
    '<span class="badge b-dim">#' +
    esc(d.id) +
    "</span>" +
    (d.workspaceAccepted
      ? '<span class="badge b-info">workshop accepted</span>'
      : '<span class="badge b-err">not accepted</span>') +
    "</div>" +
    '<div class="ws-stats">' +
    wsStat("File size", fmtBytes(d.fileSize)) +
    wsStat("Subscribers", (d.subscribers || 0).toLocaleString()) +
    wsStat("Views", (d.views || 0).toLocaleString()) +
    wsStat(
      "Rating",
      "👍 " +
        (d.votesUp || 0).toLocaleString() +
        " / 👎 " +
        (d.votesDown || 0).toLocaleString(),
    ) +
    "</div>" +
    '<div class="krow"><span class="k">Last updated</span><span class="v">' +
    esc(
      d.timeUpdated
        ? new Date(d.timeUpdated * 1000).toISOString().slice(0, 10)
        : "—",
    ) +
    "</span></div>" +
    '<div class="krow"><span class="k">Created</span><span class="v">' +
    esc(
      d.timeCreated
        ? new Date(d.timeCreated * 1000).toISOString().slice(0, 10)
        : "—",
    ) +
    "</span></div>" +
    (tags
      ? '<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">' +
        tags +
        "</div>"
      : "") +
    (S.ws.actionError
      ? '<div class="ws-alert">✖ ' +
        esc(S.ws.actionError) +
        '<button class="ibtn" data-act="ws-dismiss-err" title="Dismiss" aria-label="Dismiss error">' +
        ICONS.x +
        "</button></div>"
      : "") +
    (S.ws.analyzing ? wsPipeHTML() : "") +
    (S.ws.dl.paused
      ? '<div class="ws-alert" style="border-color:rgba(251,191,36,.4);background:rgba(251,191,36,.07);color:#FCD34D">⏸ Download paused — steamcmd was stopped. Resume to continue, or discard.' +
        '<button class="btn sm" style="margin-left:auto" data-act="ws-resume-dl" data-id="' +
        esc(d.id) +
        '">' +
        ICONS.play +
        " Resume</button>" +
        '<button class="ibtn" data-act="ws-cancel-dl" title="Discard paused download" aria-label="Discard paused download">' +
        ICONS.x +
        "</button>" +
        "</div>"
      : "") +
    '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px">' +
    (S.ws.analyzing
      ? '<span style="display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:13px"><span class="spinner"></span> ' +
        esc(S.ws.phase || "Connecting to Steam…") +
        "</span>"
      : '<button class="btn primary" data-act="ws-analyze" data-id="' +
        esc(d.id) +
        '">' +
        ICONS.scan +
        " Fetch &amp; Analyze</button>") +
    '<button class="btn" data-act="ws-download" data-id="' +
    esc(d.id) +
    '"' +
    (S.ws.analyzing ? " disabled" : "") +
    ">" +
    ICONS.download +
    (S.ws.downloading ? " Downloading…" : " Download mod") +
    "</button>" +
    "</div>" +
    (S.ws.dl.active && !S.ws.dl.paused ? wsDlMeterHTML(d.id) : "") +
    (S.ws.download ? wsDownloadResultHTML(S.ws.download) : "") +
    (S.ws.report ? wsReportHTML(S.ws.report) : "") +
    (d.description
      ? '<div class="ws-desc" id="wsDesc">' +
        esc(d.description) +
        "</div>" +
        (d.description.length > 420
          ? '<button class="btn sm ghost" data-act="ws-desc-toggle" id="wsDescToggle" style="margin-top:10px">Show full description</button>'
          : "")
      : "") +
    "</div>" +
    "</div></section>"
  );
}

function chainHTML() {
  const segs = ["both", "upstream", "downstream"];
  return (
    '<div class="sec-title" style="margin-top:0">' +
    ICONS.graph +
    " Recipe Chain · crafting graph browser</div>" +
    '<section class="glass card panel-card">' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
    '<div style="flex:1;min-width:230px;position:relative">' +
    '<input class="field" id="chainSeed" value="' +
    esc(S.chain.seed) +
    '" style="padding-right:44px" placeholder="Search any item or recipe… e.g. MillFlour, Flour, Axe" aria-label="Seed item or recipe" autocomplete="off" spellcheck="false">' +
    '<div class="chain-drop" id="chainDrop" hidden></div>' +
    "</div>" +
    '<button class="btn primary" id="chainRunBtn" data-act="chain-run">' +
    ICONS.play +
    " Build graph</button>" +
    "</div>" +
    '<div class="f-hint" style="margin:8px 2px 0">Recipe ids craft the best graphs — type 3+ letters to autocomplete, or paste an exact id and press <b>Enter</b>. Most plain items (Axe, Log…) are found in the world, not crafted.</div>' +
    '<div class="chain-chips">' +
    CHAIN_CHIPS.map(
      (ch) =>
        '<button class="chain-chip" data-act="chain-chip" data-id="' +
        esc(ch.id) +
        '" title="' +
        esc(ch.id) +
        '">' +
        esc(ch.label) +
        ' <span class="badge b-dim" style="flex:none">' +
        esc(ch.hint) +
        "</span></button>",
    ).join("") +
    "</div>" +
    '<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--stroke-soft)">' +
    '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span style="font-size:12px;color:var(--muted)">Direction</span>' +
    '<div class="chain-seg" role="group" aria-label="Graph direction">' +
    segs
      .map(
        (d) =>
          '<button class="' +
          (S.chain.direction === d ? "on" : "") +
          '" data-act="chain-dir" data-v="' +
          d +
          '">' +
          { both: "Both", upstream: "Upstream", downstream: "Downstream" }[d] +
          "</button>",
      )
      .join("") +
    "</div></div>" +
    '<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span style="font-size:12px;color:var(--muted)">Depth <b id="chainDepthVal" style="color:var(--text)">' +
    S.chain.depth +
    "</b></span>" +
    '<input type="range" id="chainDepth" min="1" max="10" step="1" value="' +
    S.chain.depth +
    '" style="width:150px" aria-label="Graph depth">' +
    '<button class="btn sm ghost" id="chainConfBtn" data-act="chain-conflicts" style="border:1px solid var(--stroke)">' +
    ICONS.warn +
    " Show recipe conflicts</button></div>" +
    "</div>" +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--stroke-soft)">' +
    '<button class="ibtn" id="chainBackBtn" data-act="chain-back" style="width:34px;height:34px;border-radius:10px" title="Back to previous root" aria-label="Back">' +
    ICONS.back +
    "</button>" +
    '<button class="ibtn" id="chainFwdBtn" data-act="chain-fwd" style="width:34px;height:34px;border-radius:10px" title="Forward" aria-label="Forward">' +
    ICONS.fwd +
    "</button>" +
    '<div style="flex:1;min-width:220px;position:relative"><input class="field" id="chainPathTarget" value="' +
    esc(S.chain.pathTarget) +
    '" style="padding-right:44px" placeholder="Path to… e.g. Base.Bread — shortest crafting route from the seed" aria-label="Path target" autocomplete="off" spellcheck="false">' +
    '<button class="ibtn" data-act="chain-path-go" style="position:absolute;right:4px;top:4px;width:36px;height:36px;border-radius:10px" title="Find shortest path" aria-label="Find path">' +
    ICONS.search +
    "</button></div>" +
    '<div style="flex:1;min-width:200px;position:relative"><input class="field" id="chainHighlight" value="' +
    esc(S.chain.highlight) +
    '" style="padding-right:44px" placeholder="Highlight… e.g. Nails — dims nodes without it" aria-label="Graph highlight" autocomplete="off" spellcheck="false">' +
    '<button class="ibtn" data-act="chain-hl-clear" style="position:absolute;right:4px;top:4px;width:36px;height:36px;border-radius:10px" title="Clear highlight" aria-label="Clear highlight">' +
    ICONS.x +
    "</button></div>" +
    "</div>" +
    "</section>" +
    '<div id="chainOut"></div>'
  );
}
function renderChain() {
  const out = $("#chainOut");
  if (!out) return;
  const c = S.chain;
  const emptyDb = !S.telemetry?.db || !S.telemetry.db.total;
  let html = "";
  if (emptyDb)
    html +=
      '<div class="ws-alert" style="margin-bottom:14px">' +
      ICONS.warn +
      ' The database is empty — run <b>parse_game_files</b> once so the graph has real crafting data. <button class="btn sm primary" style="margin-left:auto" data-act="go-tool" data-tool="parse_game_files">' +
      ICONS.db +
      " parse_game_files</button></div>";
  if (c.confBusy)
    html +=
      '<div class="md-out" style="display:flex;align-items:center;gap:10px;margin-top:14px"><span class="spinner"></span> scanning recipes for conflicts…</div>';
  else if (c.conflicts) html += chainConflictsHTML();
  if (c.cycOpen && c.graph && c.graph.cycles && c.graph.cycles.length)
    html += chainCyclesHTML();
  if (c.busy)
    html +=
      '<div class="md-out" style="display:flex;align-items:center;gap:10px;margin-top:14px"><span class="spinner"></span> ' +
      (c.layout ? "rebuilding graph…" : "expanding crafting graph…") +
      "</div>";
  else if (c.error)
    html +=
      '<div class="md-out" style="color:#FDA4AF;margin-top:14px">✖ ' +
      esc(c.error) +
      "</div>";
  // The graph itself renders ONLY inside the real fullscreen layer (#chainFs) —
  // the tab shows a launcher card instead of a small inline window.
  else if (c.layout) html += chainLauncherHTML();
  else if (c.sugg) html += chainSuggHTML();
  else
    html +=
      '<div class="md-out" style="color:var(--faint);margin-top:14px">Pick a seed above and press <b>Build graph</b>, click a quick-start chip, or scan for conflicts — then watch what makes it, what it makes, and what consumes it. The graph opens in a dedicated fullscreen view.</div>';
  out.innerHTML = html;
  // The fullscreen layer is the only place the graph lives — keep it in sync
  // on every state change (builds, expand, path, depth/cap tweaks…).
  if (c.fsOpen) chainFsPaint();
  chainHistButtons();
}
function chainConflictsHTML() {
  const c = S.chain,
    cs = (c.conflicts || []).slice();
  // Severity ranking (roadmap #7): exact duplicates (high) first, tag
  // multi-path (low) after — the game tolerates tag overlap.
  const high = cs.filter((x) => x.severity === "high").length;
  cs.sort(
    (a, b) =>
      (a.severity === "high" ? 0 : 1) - (b.severity === "high" ? 0 : 1) ||
      a.item.localeCompare(b.item),
  );
  const sevBadge = (x) =>
    x.severity === "high"
      ? '<span class="badge b-err" style="flex:none" title="Same item id from multiple recipes — can break recipe resolution">high</span>'
      : '<span class="badge b-warn" style="flex:none" title="Shared ' +
        (x.kind === "mapper" ? "mapper output" : "tag output") +
        ' — the game tolerates the overlap">' +
        (x.kind === "mapper" ? "mapper" : "tag") +
        "</span>";
  return (
    '<div class="glass card panel-card" style="margin-bottom:14px">' +
    '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">' +
    ICONS.warn +
    " <b>Recipe conflicts</b>" +
    '<span class="badge b-dim">' +
    cs.length +
    " conflicted item(s) · " +
    esc(c.confTotal) +
    " recipes scanned</span>" +
    (high ? '<span class="badge b-err">' + high + " high</span>" : "") +
    '<span style="flex:1"></span>' +
    '<button class="ibtn" data-act="chain-conf-clear" style="width:32px;height:32px;border-radius:9px" aria-label="Hide conflicts" title="Hide conflicts">' +
    ICONS.x +
    "</button>" +
    "</div>" +
    '<div class="f-hint" style="margin:6px 2px 10px">Items that multiple recipes claim to produce — <b>high</b> = exact duplicate (real breakage risk), <b>tag</b> = shared tag the game tolerates. Click one to graph its producers.</div>' +
    '<div class="chain-chips">' +
    cs
      .map(
        (x) =>
          '<button class="chain-chip' +
          (x.severity === "high" ? " warn" : "") +
          '" data-act="chain-conf" data-id="' +
          esc(x.item) +
          '" title="' +
          esc(x.item) +
          " — " +
          x.recipes.length +
          " recipes (" +
          x.kind +
          ')">' +
          esc(chop(x.item, 26)) +
          ' <span class="badge b-dim" style="flex:none">' +
          x.recipes.length +
          "</span> " +
          sevBadge(x) +
          "</button>",
      )
      .join("") +
    "</div>" +
    "</div>"
  );
}
async function chainConflicts() {
  const c = S.chain;
  if (c.confBusy) return;
  const btn = $("#chainConfBtn");
  c.confBusy = true;
  if (btn) {
    btn.disabled = true;
    btn.innerHTML =
      '<span class="spinner" style="width:12px;height:12px"></span> scanning…';
  }
  renderChain();
  try {
    const reply = await rpc("tools/call", {
      name: "detect_recipe_conflicts",
      arguments: { limit: 50 },
    });
    const sc = reply.result?.structuredContent;
    c.conflicts = sc?.conflicts || [];
    c.confTotal = sc?.totalRecipes || 0;
    c.confBusy = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = ICONS.warn + " Show recipe conflicts";
    }
    renderChain();
    addEvent("recipe conflicts · " + c.conflicts.length + " conflicted items");
    if (!c.conflicts.length) toast("No recipe conflicts found", "warn");
  } catch (e) {
    c.confBusy = false;
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = ICONS.warn + " Show recipe conflicts";
    }
    c.error = String(e.message || e).replace(/^Tool execution failed:\s*/, "");
    renderChain();
  }
}
async function chainRun(seedOverride) {
  const c = S.chain,
    f = c.fsOpen ? $("#chainFsSeed") : $("#chainSeed");
  if (c.busy) {
    toast("A graph is already building", "warn");
    return;
  }
  const seed = seedOverride ?? (f ? f.value.trim() : "");
  if (!seed) {
    toast("Type an item or recipe id first", "warn");
    return;
  }
  if (f) f.value = seed;
  const newSeed = seed !== c.seed;
  c.seed = seed;
  c.insp = null;
  c.sugg = null;
  c.error = null;
  c.busy = true;
  if (newSeed) c.fitted = false; // new seed re-fits; depth/direction tweaks preserve the current view
  // A fresh build supersedes any path view / highlight-rooted state.
  // Any full rebuild supersedes path/highlight-rooted state (a path view is a
  // different graph; direction/depth tweaks rebuild the whole walk).
  c.path = null;
  c.pathFound = null;
  c.pathStash = null;
  c.cycOpen = false;
  c.expLayers = {};
  chainDropClose();
  const btn = $("#chainRunBtn");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML =
      '<span class="spinner" style="width:12px;height:12px"></span> Building…';
  }
  renderChain();
  try {
    // The server walks the authoritative reference graph (complete edges, a
    // real truncation flag, naming-tolerant seed/ref resolution). The tab
    // renders that result directly instead of re-deriving a sampled graph
    // from search_recipes (recipe-chain review: one graph engine).
    const reply = await rpc("tools/call", {
      name: "analyze_recipe_chain",
      arguments: { seed, direction: c.direction, maxDepth: c.depth },
    });
    const g = reply.result?.structuredContent;
    if (!g || !Array.isArray(g.nodes)) throw new Error("empty graph reply");
    if (g.seed !== seed) {
      c.seed = g.seed;
      if (f) f.value = g.seed;
    }
    // Root history (roadmap #5): each fresh seed roots a new entry; re-rooting
    // an existing seed just moves back to it (no dupes).
    const lastRoot = c.history[c.histIdx];
    if (lastRoot !== g.seed) {
      c.history = c.history.slice(0, c.histIdx + 1);
      c.history.push(g.seed);
      c.histIdx = c.history.length - 1;
    }
    c.busy = false;
    if (g.nodes.length > 1) {
      c.graph = g;
      c.layout = chainLayout();
      renderChain();
      addEvent(
        "recipe chain · " + g.seed + " → " + (g.nodes.length - 1) + " linked",
      );
    } else {
      c.graph = null;
      c.layout = null;
      c.sugg = { seed: g.seed, kind: g.seedKind, results: [] };
      renderChain();
      chainSuggest(g.seed);
    }
  } catch (e) {
    c.busy = false;
    c.error = String(e.message || e).replace(/^Tool execution failed:\s*/, "");
    c.graph = null;
    c.layout = null; // drop the stale view when a build fails
    renderChain();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = ICONS.play + " Build graph";
    }
  }
}
/* ---- Recipe Chain roadmap: expand-in-place, path, cycles, history, export ---- */
function chainCyclesHTML() {
  const cyc = (S.chain.graph && S.chain.graph.cycles) || [];
  return (
    '<div class="glass card panel-card" style="margin-bottom:14px">' +
    '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">' +
    ICONS.warn +
    " <b>Crafting cycles</b>" +
    '<span class="badge b-err">' +
    cyc.length +
    "</span>" +
    '<span style="flex:1"></span>' +
    '<button class="ibtn" data-act="chain-cyc-close" style="width:32px;height:32px;border-radius:9px" aria-label="Hide cycles" title="Hide cycles">' +
    ICONS.x +
    "</button>" +
    "</div>" +
    '<div class="f-hint" style="margin:6px 2px 10px">A recipe produces an item it also consumes — a loop that can break crafting IRL. Click to graph the recipe.</div>' +
    '<div class="chain-cycles">' +
    cyc
      .map(
        (x) =>
          '<button class="chain-cyc-item" data-act="chain-conf" data-id="' +
          esc(x.recipe) +
          '" title="' +
          esc(x.recipe) +
          '">🔄 ' +
          esc(chop(x.recipe, 28)) +
          " ⇄ " +
          esc(chop(x.item, 24)) +
          "</button>",
      )
      .join("") +
    "</div>" +
    "</div>"
  );
}
async function chainExpand(nodeId) {
  const c = S.chain,
    g = c.graph;
  if (!g || !g.seed || c.expandBusy || c.busy) return;
  c.expandBusy = true;
  c.busy = true;
  renderChain();
  try {
    // One server round trip: the walk roots at the clicked node with depth 1,
    // returns a delta the client merges into the existing graph (roadmap #2).
    const reply = await rpc("tools/call", {
      name: "analyze_recipe_chain",
      arguments: {
        seed: c.seed,
        direction: c.direction,
        maxDepth: c.depth,
        expandNode: nodeId,
      },
    });
    const d = reply.result?.structuredContent;
    if (!d || !Array.isArray(d.nodes)) throw new Error("empty expand reply");
    // Merge: replace the expanded node's payload, add any brand-new neighbors.
    const byId = new Map(g.nodes.map((n) => [n.id, n]));
    for (const n of d.nodes) byId.set(n.id, n);
    g.nodes = [...byId.values()];
    // The delta can reach layers beyond the original walk — allow the full
    // layout depth; chainLayout's column builder stops at empty layers, so
    // extra headroom costs nothing and merged nodes are never dropped.
    g.maxDepth = Math.max(g.maxDepth, Math.min(10, c.depth + 2));
    if (d.cycles && d.cycles.length) g.cycles = d.cycles;
    if (d.truncated) g.truncated = true;
    c.busy = false;
    c.expandBusy = false;
    c.layout = chainLayout();
    renderChain();
    addEvent(
      "recipe chain · expand " +
        nodeId +
        " → +" +
        (d.nodes.length - 1) +
        " linked",
    );
    toast("Expanded " + nodeId);
  } catch (e) {
    c.busy = false;
    c.expandBusy = false;
    c.error = String(e.message || e).replace(/^Tool execution failed:\s*/, "");
    renderChain();
  }
}
async function chainPathGo() {
  const c = S.chain,
    f = $("#chainPathTarget");
  const target = f ? f.value.trim() : c.pathTarget;
  if (!target) {
    toast("Type a target item or recipe id first", "warn");
    return;
  }
  if (c.pathBusy || c.busy) return;
  c.pathTarget = target;
  c.pathBusy = true;
  c.busy = true;
  renderChain();
  try {
    // Shortest crafting pipeline seed → target (roadmap #3). The reply's
    // nodes ARE the path, so the graph collapses to the pipeline.
    const reply = await rpc("tools/call", {
      name: "analyze_recipe_chain",
      arguments: {
        seed: c.seed,
        direction: c.direction,
        maxDepth: Math.max(c.depth, 5),
        target,
      },
    });
    const g = reply.result?.structuredContent;
    if (!g || !Array.isArray(g.nodes)) throw new Error("empty path reply");
    c.path = g.path || [];
    c.pathFound = g.pathFound;
    c.busy = false;
    c.pathBusy = false;
    if (c.pathFound) {
      // Stash the full graph so "Back to full graph" can restore it — the
      // path reply carries only the pipeline nodes (reviewer fix). The stash
      // is only taken from a non-path view (never from a previous path view).
      if (!c.pathStash) c.pathStash = c.graph;
      c.graph = g;
      c.layout = chainLayout();
      renderChain();
      addEvent(
        "recipe path · " +
          c.seed +
          " → " +
          target +
          " · " +
          (c.path.length - 1) +
          " step(s)",
      );
      toast("Path found: " + c.path.join(" → "));
    } else {
      renderChain();
      toast("No crafting path from " + c.seed + " to " + target, "warn");
    }
  } catch (e) {
    c.busy = false;
    c.pathBusy = false;
    c.error = String(e.message || e).replace(/^Tool execution failed:\s*/, "");
    renderChain();
  }
}
function chainBack() {
  const c = S.chain;
  if (c.histIdx <= 0) return;
  c.histIdx--;
  const seed = c.history[c.histIdx];
  if (seed) chainRun(seed);
  chainHistButtons();
}
function chainFwd() {
  const c = S.chain;
  if (c.histIdx >= c.history.length - 1) return;
  c.histIdx++;
  const seed = c.history[c.histIdx];
  if (seed) chainRun(seed);
  chainHistButtons();
}
function chainHistButtons() {
  const c = S.chain;
  const b = $("#chainBackBtn"),
    fw = $("#chainFwdBtn");
  if (b) b.disabled = c.histIdx <= 0;
  if (fw) fw.disabled = c.histIdx >= c.history.length - 1;
}
function chainExportMd() {
  const c = S.chain,
    g = c.graph;
  if (!g) return;
  let md = "# Recipe Chain: " + g.seed + "\n\n";
  md += "- **Seed**: " + g.seed + " (" + g.seedKind + ")\n";
  md +=
    "- **Nodes**: " +
    g.nodes.length +
    (g.truncated ? " (truncated)" : "") +
    "\n";
  if (c.path && c.pathFound) md += "- **Path**: " + c.path.join(" → ") + "\n";
  if (g.cycles && g.cycles.length)
    md +=
      "- **Cycles**: " +
      g.cycles.map((x) => x.recipe + "⇄" + x.item).join(", ") +
      "\n";
  md += "\n";
  for (const n of g.nodes) {
    const icon = n.kind === "recipe" ? "🔧" : n.kind === "item" ? "📦" : "❓";
    md +=
      icon +
      " **" +
      n.id +
      "** (" +
      n.kind +
      (n.itemType ? ", " + n.itemType : "") +
      ")" +
      (n.cycle ? " 🔄" : "") +
      "\n";
    if (n.props && Object.keys(n.props).length) {
      const bits = [];
      if (n.props.category) bits.push("category " + n.props.category);
      if (typeof n.props.weight === "number")
        bits.push("weight " + n.props.weight);
      if (typeof n.props.calories === "number")
        bits.push(n.props.calories + " cal");
      if (typeof n.props.hunger === "number")
        bits.push("hunger " + n.props.hunger);
      if (n.props.tags && n.props.tags.length)
        bits.push("tags " + n.props.tags.join(";"));
      if (bits.length) md += "  - " + bits.join(" · ") + "\n";
    }
    if (n.meta) {
      const bits = [];
      if (n.meta.category) bits.push("category " + n.meta.category);
      if (typeof n.meta.time === "number") bits.push(n.meta.time + "s");
      if (n.meta.skill)
        bits.push(
          n.meta.skill +
            (n.meta.skillLevel !== undefined ? " " + n.meta.skillLevel : ""),
        );
      if (n.meta.tools && n.meta.tools.length)
        bits.push("tools " + n.meta.tools.map((t) => t.id).join(", "));
      if (bits.length) md += "  - " + bits.join(" · ") + "\n";
    }
    if (n.ingredients.length)
      md +=
        "  - consumes: " +
        n.ingredients
          .map(
            (i) =>
              i.id + (i.tag ? " (tag)" : "") + (i.count ? " ×" + i.count : ""),
          )
          .join(", ") +
        "\n";
    if (n.results.length)
      md +=
        "  - produces: " +
        n.results
          .map((r) => r.id + (r.count ? " ×" + r.count : ""))
          .join(", ") +
        "\n";
    if (n.producedBy.length)
      md += "  - made by: " + n.producedBy.join(", ") + "\n";
    if (n.consumedBy.length)
      md += "  - used by: " + n.consumedBy.join(", ") + "\n";
    md += "\n";
  }
  md += "---\nGenerated by pz-mcp-server Control Deck · analyze_recipe_chain\n";
  navigator.clipboard
    ?.writeText(md)
    .then(() => toast("Chain copied as markdown"))
    .catch(() => toast("Copy blocked by browser", "warn"));
}
function chainExportSvg() {
  const svg = $("#chainSvg");
  if (!svg) return;
  const clone = svg.cloneNode(true);
  const width = svg.viewBox.baseVal.width,
    height = svg.viewBox.baseVal.height;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", width);
  clone.setAttribute("height", height);
  const css = Array.from(document.querySelectorAll("style"))
    .map((s) => s.textContent)
    .join("\n");
  const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style.textContent = css;
  clone.insertBefore(style, clone.firstChild);
  const blob = new Blob(
    [
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
        new XMLSerializer().serializeToString(clone),
    ],
    { type: "image/svg+xml" },
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download =
    "recipe-chain-" +
    (S.chain.graph ? S.chain.graph.seed.replace(/[^\w.-]+/g, "_") : "graph") +
    ".svg";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  toast("SVG exported");
}
function chainHighlightApply() {
  const f = S.chain.fsOpen ? $("#chainFsHighlight") : $("#chainHighlight");
  const v = f ? f.value.trim() : "";
  if (S.chain.highlight === v) return;
  S.chain.highlight = v;
  // Debounce repaints on big graphs (reviewer): the seed/depth inputs use the
  // same 220ms pattern; a full chainPaint per keystroke is wasteful at 500 nodes.
  clearTimeout(S.chain._hlTimer);
  S.chain._hlTimer = setTimeout(chainPaint, 160);
}
/* (client-side graph builder removed — the tab consumes analyze_recipe_chain) */ async function chainSuggest(
  seed,
) {
  const c = S.chain;
  try {
    const [ir, rr] = await Promise.all([
      rpc("tools/call", {
        name: "search_vanilla",
        arguments: { query: seed, type: "item", limit: 8 },
      }).catch(() => null),
      rpc("tools/call", {
        name: "search_vanilla",
        arguments: { query: seed, type: "recipe", limit: 8 },
      }).catch(() => null),
    ]);
    const list = [];
    const push = (sc, type) => {
      for (const r of (sc && sc.results) || [])
        if (!list.find((x) => x.id === r.id))
          list.push({ id: r.id, type, name: r.displayName || r.name || r.id });
    };
    push(ir && ir.result && ir.result.structuredContent, "item");
    push(rr && rr.result && rr.result.structuredContent, "recipe");
    if (!c.sugg || c.sugg.seed !== seed) return;
    c.sugg.results = list.slice(0, 14);
    renderChain();
  } catch {
    /* keep the dead-end card without suggestions */
  }
}
function chainSuggHTML() {
  const s = S.chain.sugg;
  if (!s) return "";
  const items = (s.results || [])
    .map(
      (r) =>
        '<button class="chain-chip" data-act="chain-sugg" data-id="' +
        esc(r.id) +
        '">' +
        esc(r.name || r.id) +
        ' <span class="badge ' +
        (r.type === "recipe" ? "b-info" : "b-dim") +
        '" style="flex:none">' +
        esc(r.type) +
        "</span></button>",
    )
    .join("");
  return (
    '<div class="glass card panel-card" style="margin-top:14px">' +
    '<div class="md-h" style="display:flex;align-items:center;gap:8px">' +
    ICONS.warn +
    " Nothing craftable for “" +
    esc(s.seed) +
    "”</div>" +
    '<div class="md-p" style="color:var(--muted);margin-top:6px">That id resolves' +
    (s.kind ? " as <b>" + esc(s.kind) + "</b>" : "") +
    ", but no crafting recipe links to it in the parsed database. Most items are found in the world, not crafted. Search finds recipes too — try one below, or a close match:</div>" +
    (items
      ? '<div class="chain-chips" style="margin-top:10px">' + items + "</div>"
      : '<div class="md-p" style="color:var(--faint);margin-top:10px">No close matches found — try another keyword.</div>') +
    "</div>"
  );
}
function chainLayout() {
  const g = S.chain.graph;
  if (!g) return null;
  const collapsed = S.chain.collapsed || {};
  const byId = new Map(g.nodes.map((n) => [n.id, n]));
  const seed = byId.get(g.seed) || byId.get(g.nodes[0]) || null;
  if (!seed) return null;
  const dir = S.chain.direction;
  const nbors = (n, side) => {
    const out = [];
    if (n.kind === "recipe") {
      const list = side === "up" ? n.ingredients || [] : n.results || [];
      for (const x of list)
        if (byId.has(x.id) && x.id !== seed.id) out.push(x.id);
    } else {
      const list = side === "up" ? n.producedBy || [] : n.consumedBy || [];
      for (const id of list) if (byId.has(id) && id !== seed.id) out.push(id);
    }
    return out;
  };
  const columns = (side) => {
    if (
      (side === "up" && dir === "downstream") ||
      (side === "dn" && dir === "upstream")
    )
      return [];
    const cols = [];
    let layer = [seed.id];
    const seen = new Set([seed.id]);
    for (let d = 1; d <= g.maxDepth; d++) {
      const next = [],
        refs = new Map();
      for (const pid of layer) {
        const pn = byId.get(pid);
        if (!pn) continue;
        // Collapsed subtrees: don't expand THROUGH the node — branches only
        // reachable via it disappear from deeper columns.
        if (collapsed[pid]) continue;
        for (const nid of nbors(pn, side)) {
          refs.set(nid, (refs.get(nid) || 0) + 1);
          if (seen.has(nid)) continue;
          seen.add(nid);
          next.push(nid);
        }
      }
      if (!next.length) break;
      next.sort(
        (a, b) => (refs.get(b) || 0) - (refs.get(a) || 0) || a.localeCompare(b),
      );
      cols.push(next);
      layer = next;
    }
    return cols;
  };
  return { byId, seed, up: columns("up"), dn: columns("dn") };
}
function chainGraphHTML() {
  const c = S.chain,
    L = c.layout;
  const totalCols = L.up.length + 1 + L.dn.length;
  const W = totalCols * CHAIN_COLW + 80;
  const H = chainViewH();
  const insp = c.insp ? L.byId.get(c.insp) : null;
  const seedBadge =
    L.seed.kind === "recipe"
      ? '<span class="badge b-info">recipe</span>'
      : L.seed.kind === "item"
        ? '<span class="badge b-dim">item</span>'
        : '<span class="badge b-dim">' + esc(L.seed.kind) + "</span>";
  // Rendered inside the real-fullscreen #chainFs layer — the layer supplies
  // the fullscreen chrome, so the canvas itself is a plain flex column.
  return (
    '<div class="chain-main">' +
    '<div class="chain-canvas">' +
    '<div class="chain-tools">' +
    '<b class="mono" style="font-size:12.5px">' +
    esc(L.seed.id) +
    "</b>" +
    seedBadge +
    (c.graph.truncated ? '<span class="badge b-err">truncated</span>' : "") +
    '<span class="badge b-dim">' +
    (L.up.length + L.dn.length) +
    " layer(s) · " +
    c.graph.nodes.length +
    " node(s)</span>" +
    (c.graph.cycles && c.graph.cycles.length
      ? '<button class="chain-chip" data-act="chain-cyc-toggle" style="border-color:rgba(251,113,133,.5);background:rgba(251,113,133,.08);color:#FDA4AF" title="Show crafting cycles">🔄 ' +
        c.graph.cycles.length +
        " cycle(s)</button>"
      : "") +
    (c.pathFound && c.path
      ? '<button class="chain-chip" data-act="chain-path-clear" style="border-color:rgba(52,211,153,.5);background:rgba(52,211,153,.08);color:#7EE7B8" title="Back to the full graph">' +
        ICONS.x +
        " path view</button>"
      : "") +
    '<span class="spacer"></span>' +
    '<button class="ibtn" data-act="chain-export-md" style="width:34px;height:34px;border-radius:10px" title="Copy chain as markdown" aria-label="Copy markdown"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg></button>' +
    '<button class="ibtn" data-act="chain-export-svg" style="width:34px;height:34px;border-radius:10px" title="Export SVG" aria-label="Export SVG"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg></button>' +
    '<button class="ibtn" data-act="chain-fit" style="width:34px;height:34px;border-radius:10px" title="Fit view" aria-label="Fit view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/></svg></button>' +
    '<button class="ibtn" data-act="chain-zoomout" style="width:34px;height:34px;border-radius:10px" title="Zoom out" aria-label="Zoom out"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg></button>' +
    '<button class="ibtn" data-act="chain-zoomin" style="width:34px;height:34px;border-radius:10px" title="Zoom in" aria-label="Zoom in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>' +
    '<span class="badge b-dim mono" id="chainZoomVal" style="min-width:46px;text-align:center;font-size:11px">' +
    Math.round(chainVisibleZoom() * 100) +
    "%</span>" +
    '<button class="ibtn" data-act="chain-fs-close" style="width:34px;height:34px;border-radius:10px" title="Exit fullscreen (Esc)" aria-label="Exit fullscreen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15h-6v-6M3 9h6v6M21 21l-6-6M3 3l6 6"/></svg></button>' +
    "</div>" +
    (c.pathFound && c.path && c.path.length
      ? '<div class="chain-path">' +
        c.path
          .map(
            (id, i) =>
              '<span class="phop' +
              (i === 0 ? '" style="color:#7EE7B8;font-weight:700"' : '"') +
              ' data-act="chain-path-hop" data-id="' +
              esc(id) +
              '" title="Click to inspect ' +
              esc(id) +
              '">' +
              esc(chop(id, 24)) +
              "</span>" +
              (i < c.path.length - 1 ? '<span class="parr">→</span>' : ""),
          )
          .join("") +
        '<span class="pbad"><span class="badge b-ok" style="flex:none">shortest path · ' +
        (c.path.length - 1) +
        " step(s)</span></span></div>"
      : "") +
    '<div class="chain-svgwrap' +
    (c.graph.truncated ? " trunc" : "") +
    '" id="chainSvgWrap" style="height:' +
    (c.fsOpen ? "auto" : H) +
    'px">' +
    '<svg class="chain-svg" id="chainSvg" viewBox="0 0 ' +
    W +
    " " +
    H +
    '" preserveAspectRatio="xMidYMid meet">' +
    "<defs>" +
    '<marker id="mkG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#34D399"/></marker>' +
    '<marker id="mkA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#FBBF24"/></marker>' +
    '<marker id="mkV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#A78BFA"/></marker>' +
    "</defs>" +
    '<g id="chainG" transform="' +
    chainTransformStr() +
    '"></g>' +
    "</svg>" +
    "</div>" +
    '<div class="chain-legend">' +
    '<span><i style="background:#34D399"></i>produces</span>' +
    '<span><i style="background:#FBBF24"></i>consumes</span>' +
    '<span><i style="background:transparent;height:2px;border-top:2px dashed #A78BFA"></i>tag input</span>' +
    '<span><span class="lg-dot" style="background:rgba(251,191,36,.25);border-color:rgba(251,191,36,.65)"></span>recipe</span>' +
    '<span><span class="lg-dot" style="background:rgba(34,211,238,.22);border-color:rgba(34,211,238,.65)"></span>item</span>' +
    '<span style="margin-left:auto">drag to pan (flick for inertia) · ctrl+scroll / pinch to zoom · dbl-click or 0 to fit · arrows nudge</span>' +
    "</div>" +
    (c.graph.truncated
      ? '<div class="chain-note">' +
        ICONS.warn +
        " The server cut off expansion (depth limit or 500-node cap) — the graph may be incomplete.</div>"
      : "") +
    (c.fsOpen
      ? insp
        ? '<div class="glass card panel-card chain-insp-fs" id="chainInspFs"><div class="insp-head"><b class="mono" style="font-size:12px;word-break:break-all;min-width:0">' +
          esc(insp.name || insp.id) +
          '</b><button class="ibtn" data-act="chain-insp-close" style="width:26px;height:26px;border-radius:8px;margin-left:auto;flex:none" aria-label="Close inspector" title="Close inspector">' +
          ICONS.x +
          "</button></div>" +
          chainInspHTML(insp) +
          "</div>"
        : '<div class="glass card panel-card chain-insp-fs empty" id="chainInspFs">Click a node to inspect it — ingredients, results, producers &amp; consumers</div>'
      : "") +
    "</div>" +
    '<aside class="glass card panel-card chain-insp" id="chainInsp"' +
    (c.fsOpen ? " hidden" : "") +
    ">" +
    (insp
      ? chainInspHTML(insp)
      : '<div style="color:var(--faint);font-size:12.5px">Click any node to inspect it — ingredients, results, producers and consumers. Click again to re-root the graph.</div>') +
    "</aside>" +
    "</div>"
  );
}
function chainPaint() {
  const g = $("#chainG");
  if (!g) return;
  const c = S.chain,
    L = c.layout;
  chainApplyGeometry();
  // Roadmap #4: graph-wide highlight. When set, nodes are dimmed unless their
  // id/name, props/tags, meta, ingredients or results mention the term.
  const hl = (c.highlight || "").trim().toLowerCase();
  const hlSet = new Set();
  const hlEdge = new Set();
  if (hl) {
    for (const n of L.byId.values()) {
      const hay = [
        n.id,
        n.name || "",
        n.props ? JSON.stringify(n.props) : "",
        n.meta ? JSON.stringify(n.meta) : "",
        (n.ingredients || []).map((i) => i.id).join(" "),
        (n.results || []).map((r) => r.id).join(" "),
        (n.producedBy || []).join(" "),
        (n.consumedBy || []).join(" "),
      ]
        .join(" ")
        .toLowerCase();
      if (hay.includes(hl)) {
        hlSet.add(n.id);
        for (const i of n.ingredients || []) hlEdge.add(n.id + "|" + i.id);
        for (const r of n.results || []) hlEdge.add(n.id + "|" + r.id);
        for (const p of n.producedBy || []) hlEdge.add(n.id + "|" + p);
        for (const cid of n.consumedBy || []) hlEdge.add(n.id + "|" + cid);
      }
    }
  }
  const colX = (idx) => 40 + idx * CHAIN_COLW + (CHAIN_COLW - CHAIN_NODE_W) / 2;
  const colYs = (col) => {
    const n = col.length,
      pad = 70,
      span = chainViewH() - 2 * pad;
    return col.map(
      (id, i) => pad + (n === 1 ? span / 2 : (span * (i + 0.5)) / n),
    );
  };
  const seedCol = L.up.length;
  const pos = new Map();
  const shown = [];
  const cap = c.cap || CHAIN_CAP;
  const pillOf = (key) => "__pill:" + key;
  const build = (side, base) =>
    L[side].forEach((col, d) => {
      const key = side + ":" + (d + 1);
      const expanded = !!c.expLayers[key];
      const show = expanded ? col : col.slice(0, cap);
      // Dense mode: any column above the cap collapses to ONE aggregate pill.
      const dense = c.dense && !expanded && col.length > cap;
      const xs = colX(base + d),
        ys = colYs(dense ? [col[0]] : show);
      if (dense) pos.set(pillOf(key), { x: xs, y: ys[0] });
      else show.forEach((id, i) => pos.set(id, { x: xs, y: ys[i] }));
      shown.push({ side, d, key, col, show, dense, expanded, xs, ys });
    });
  build("up", 0);
  build("dn", seedCol + 1);
  const seedPos = { x: colX(seedCol), y: chainViewH() / 2 };
  pos.set(L.seed.id, seedPos);
  const nbors = (n, side) => {
    const out = [];
    if (n.kind === "recipe") {
      const list = side === "up" ? n.ingredients || [] : n.results || [];
      for (const x of list)
        if (L.byId.has(x.id) && x.id !== L.seed.id) out.push(x.id);
    } else {
      const list = side === "up" ? n.producedBy || [] : n.consumedBy || [];
      for (const id of list)
        if (L.byId.has(id) && id !== L.seed.id) out.push(id);
    }
    return out;
  };
  // Per-node subtree collapse: nodes with offspring in a deeper column get a
  // chevron; chainLayout prunes expansions FROM collapsed nodes (branches that
  // are only reachable through them disappear from deeper columns).
  const collapsible = new Set();
  for (const s of shown) {
    for (const id of s.show) {
      const n = L.byId.get(id);
      if (!n) continue;
      const next = shown.find((x) => x.side === s.side && x.d === s.d + 1);
      if (next && nbors(n, s.side).some((nid) => next.col.includes(nid)))
        collapsible.add(id);
    }
  }
  const edges = [],
    seen = new Set();
  function link(pn, cn, posId, srcId) {
    const id2 = posId || cn.id,
      id1 = srcId || pn.id;
    const p = pos.get(id1),
      ch = pos.get(id2);
    if (!p || !ch) return;
    const k = id1 + "|" + id2;
    if (seen.has(k)) return;
    seen.add(k);
    let color = "#FBBF24",
      count = null,
      tag = false;
    // The recipe node always carries the authoritative ingredient/result data
    // (tag inputs resolve to violet dashed edges).
    const rec = pn.kind === "recipe" ? pn : cn.kind === "recipe" ? cn : null;
    const itemId =
      pn.kind === "recipe" ? cn.id : cn.kind === "recipe" ? pn.id : null;
    if (rec && itemId) {
      const r = (rec.results || []).find((x) => x.id === itemId);
      if (r) {
        color = "#34D399";
        count = r.count || null;
      } else {
        const ing = (rec.ingredients || []).find((x) => x.id === itemId);
        if (ing) {
          count = ing.count || null;
          if (ing.tag) {
            color = "#A78BFA";
            tag = true;
          }
        }
      }
    }
    const l = p.x <= ch.x ? p : ch,
      r2 = l === p ? ch : p;
    const xA = l.x + CHAIN_NODE_W,
      yA = l.y + CHAIN_NODE_H / 2,
      xB = r2.x,
      yB = r2.y + CHAIN_NODE_H / 2;
    const mx = (xA + xB) / 2;
    edges.push({
      d:
        "M" +
        xA +
        " " +
        yA +
        " C" +
        mx +
        " " +
        yA +
        " " +
        mx +
        " " +
        yB +
        " " +
        xB +
        " " +
        yB,
      color,
      count,
      tag,
      lx: mx,
      ly: (yA + yB) / 2 - 7,
      a: id1,
      b: id2,
    });
  }
  function layerEdges(side, tgt, prev) {
    // prev is a shown entry (or the seed pseudo-entry). Dense SOURCE columns
    // also collapse to the pill — every edge from a dense column's nodes
    // departs from the pill so downstream connectivity survives.
    const srcKey = prev && prev.dense ? pillOf(prev.key) : null;
    for (const pid of prev.show) {
      const pn = L.byId.get(pid);
      if (!pn) continue;
      for (const nid of nbors(pn, side)) {
        if (!tgt.show.includes(nid)) continue;
        if (tgt.dense && !pos.get(nid))
          link(pn, L.byId.get(nid), pillOf(tgt.key), srcKey);
        else link(pn, L.byId.get(nid), null, srcKey);
      }
    }
  }
  const up0 = shown.find((x) => x.side === "up" && x.d === 0);
  const dn0 = shown.find((x) => x.side === "dn" && x.d === 0);
  if (up0) layerEdges("up", up0, { show: [L.seed.id] });
  if (dn0) layerEdges("dn", dn0, { show: [L.seed.id] });
  shown.forEach((s) => {
    if (s.d === 0) return;
    const prev = shown.find((x) => x.side === s.side && x.d === s.d - 1);
    if (prev) layerEdges(s.side, s, prev);
  });
  const edgeHTML = edges
    .map(
      (e) =>
        '<path class="chain-edge' +
        (e.tag ? " tag" : "") +
        (hlEdge.has(e.a + "|" + e.b) || hlEdge.has(e.b + "|" + e.a)
          ? " mat"
          : "") +
        '" data-a="' +
        esc(e.a) +
        '" data-b="' +
        esc(e.b) +
        '" d="' +
        e.d +
        '" stroke="' +
        e.color +
        '" stroke-width="1.6" marker-end="url(#mk' +
        (e.color === "#34D399" ? "G" : e.tag ? "V" : "A") +
        ')"/>' +
        (e.count
          ? '<text class="chain-count' +
            (hlEdge.has(e.a + "|" + e.b) || hlEdge.has(e.b + "|" + e.a)
              ? " mat"
              : "") +
            '" data-a="' +
            esc(e.a) +
            '" data-b="' +
            esc(e.b) +
            '" x="' +
            e.lx +
            '" y="' +
            e.ly +
            '" text-anchor="middle">' +
            e.count +
            "×</text>"
          : ""),
    )
    .join("");
  const svgEl = $("#chainSvg");
  if (svgEl) svgEl.classList.toggle("dim", hl.length > 0);
  let nodeHTML = chainNodeHTML(
    L.seed,
    seedPos.x,
    seedPos.y,
    "seed" + (hlSet.has(L.seed.id) ? " mat" : ""),
  );
  shown.forEach((s) => {
    nodeHTML +=
      '<text class="chain-lvl" x="' +
      (s.xs + CHAIN_NODE_W / 2) +
      '" y="30" text-anchor="middle">level ' +
      (s.d + 1) +
      "</text>";
    if (s.dense) nodeHTML += chainPillHTML(s);
    else
      s.show.forEach(
        (id, i) =>
          (nodeHTML += chainNodeHTML(
            L.byId.get(id),
            s.xs,
            s.ys[i],
            hlSet.has(id) ? "mat" : "",
            collapsible.has(id),
          )),
      );
    if (!s.dense && s.col.length > s.show.length) {
      const gy = Math.max.apply(null, s.ys) + CHAIN_NODE_H + 20;
      nodeHTML +=
        '<g class="chain-ghost" data-act="chain-more" data-key="' +
        s.key +
        '" transform="translate(' +
        s.xs +
        "," +
        gy +
        ')">' +
        '<rect width="' +
        CHAIN_NODE_W +
        '" height="' +
        CHAIN_NODE_H +
        '" rx="12" fill="transparent" stroke="#94A3B8" stroke-width="1.4" stroke-dasharray="5 5"/>' +
        '<text x="' +
        CHAIN_NODE_W / 2 +
        '" y="' +
        CHAIN_NODE_H / 2 +
        '" text-anchor="middle" dominant-baseline="central" class="cn-ghost">+ ' +
        (s.col.length - s.show.length) +
        " more</text></g>";
    }
    // Expanded column (from a dense pill or a +N more ghost): a − collapse
    // ghost restores the capped/pill view — no more toggling dense off/on.
    else if (s.expanded && s.col.length > cap) {
      const gy = Math.max.apply(null, s.ys) + CHAIN_NODE_H + 20;
      nodeHTML +=
        '<g class="chain-ghost less" data-act="chain-less" data-key="' +
        s.key +
        '" transform="translate(' +
        s.xs +
        "," +
        gy +
        ')" title="Collapse this column back to the ' +
        (c.dense ? "pill" : "cap") +
        '">' +
        '<rect width="' +
        CHAIN_NODE_W +
        '" height="' +
        CHAIN_NODE_H +
        '" rx="12" fill="transparent" stroke="#FBBF24" stroke-width="1.4" stroke-dasharray="5 5"/>' +
        '<text x="' +
        CHAIN_NODE_W / 2 +
        '" y="' +
        CHAIN_NODE_H / 2 +
        '" text-anchor="middle" dominant-baseline="central" class="cn-ghost">− ' +
        (c.dense ? "collapse to pill" : "collapse") +
        "</text></g>";
    }
  });
  g.innerHTML = edgeHTML + nodeHTML;
  chainApplyTransform();
  chainHover(null); // repaints wipe .ho/.hl — reset the dim state so it never sticks
  const zv = $("#chainZoomVal");
  if (zv) zv.textContent = Math.round(chainVisibleZoom() * 100) + "%";
}
function chainPillHTML(s) {
  const L = S.chain.layout;
  const n = s.col.length;
  const subs = s.col.slice(0, 5).map((id) => {
    const nd = L.byId.get(id);
    return chop((nd && nd.name) || id, 13);
  });
  const title =
    n +
    " node(s): " +
    subs.join(", ") +
    (n > 5 ? ", …" : "") +
    " — click to expand this column";
  return (
    '<g class="chain-pill" data-act="chain-more" data-key="' +
    s.key +
    '" transform="translate(' +
    s.xs +
    "," +
    s.ys[0] +
    ')" title="' +
    esc(title) +
    '">' +
    '<rect width="' +
    CHAIN_NODE_W +
    '" height="' +
    CHAIN_NODE_H +
    '" rx="12"/>' +
    '<text x="' +
    CHAIN_NODE_W / 2 +
    '" y="' +
    Math.round(CHAIN_NODE_H / 2 - 7) +
    '" text-anchor="middle" dominant-baseline="central" class="cn-count">' +
    n +
    " nodes</text>" +
    '<text x="' +
    CHAIN_NODE_W / 2 +
    '" y="' +
    Math.round(CHAIN_NODE_H / 2 + 9) +
    '" text-anchor="middle" dominant-baseline="central" class="cn-ghost">click to expand</text>' +
    "</g>"
  );
}
function chainNodeHTML(n, x, y, extra, collapsible) {
  const cls = n.kind === "recipe" ? "r" : n.kind === "item" ? "i" : "u";
  const sel = S.chain.insp === n.id;
  const cyc = n.cycle ? " cyc" : "";
  const pat =
    S.chain.pathFound && S.chain.path && S.chain.path.includes(n.id)
      ? " pat"
      : "";
  const colOn = !!S.chain.collapsed[n.id];
  const gy = Math.round(CHAIN_NODE_H / 2 - 7);
  const glyph =
    n.kind === "recipe"
      ? '<svg x="12" y="' +
        gy +
        '" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h6M6 2v3L3.4 9.4A2.6 2.6 0 0 0 5.4 13h5.2a2.6 2.6 0 0 0 2-4.1L10 5V2"/><path d="M4.6 10h6.8"/></svg>'
      : n.kind === "item"
        ? '<svg x="12" y="' +
          gy +
          '" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="2" y="2.5" width="12" height="11" rx="2.5"/><path d="M2 6.5h12"/></svg>'
        : '<text class="cn-glyph" x="18" y="' +
          CHAIN_NODE_H / 2 +
          '" dominant-baseline="central">?</text>';
  const cycBadge = n.cycle
    ? '<text x="' +
      CHAIN_NODE_W +
      '" y="8" text-anchor="end" style="font-size:13px;pointer-events:none">🔄</text>'
    : "";
  const colBtn = collapsible
    ? '<g class="chain-col" data-act="chain-collapse" data-id="' +
      esc(n.id) +
      '" transform="translate(' +
      (CHAIN_NODE_W - 21) +
      "," +
      Math.round(CHAIN_NODE_H / 2 - 9) +
      ')" title="' +
      (colOn ? "Expand hidden branch" : "Collapse this branch") +
      '"><rect width="18" height="18" rx="6"/><text x="9" y="9.5" text-anchor="middle" dominant-baseline="central">' +
      (colOn ? "+" : "−") +
      "</text></g>"
    : "";
  const tip = n.name && n.name !== n.id ? n.name + " · " + n.id : n.id;
  return (
    '<g class="chain-node ' +
    cls +
    (sel ? " sel" : "") +
    (extra ? " " + extra : "") +
    cyc +
    pat +
    (colOn ? " col-sub" : "") +
    '" data-act="chain-node" data-id="' +
    esc(n.id) +
    '" title="' +
    esc(tip) +
    (n.cycle ? " — self-loop: produces its own ingredient" : "") +
    '" transform="translate(' +
    x +
    "," +
    y +
    ')">' +
    '<rect width="' +
    CHAIN_NODE_W +
    '" height="' +
    CHAIN_NODE_H +
    '" rx="12"/>' +
    glyph +
    cycBadge +
    colBtn +
    '<text class="cn-name" x="32" y="' +
    Math.round(CHAIN_NODE_H / 2 - 7) +
    '">' +
    esc(chop(n.name || n.id, 16)) +
    "</text>" +
    '<text class="cn-id" x="32" y="' +
    Math.round(CHAIN_NODE_H / 2 + 9) +
    '">' +
    esc(chop(n.id, 20)) +
    "</text>" +
    "</g>"
  );
}
function chainInspHTML(n) {
  const rows = [];
  if (n.kind === "recipe") {
    // Roadmap #1: recipe metadata (category/time/skill/tools) from the mirror.
    if (n.meta) {
      const bits = [];
      if (n.meta.category)
        bits.push("category <b>" + esc(n.meta.category) + "</b>");
      if (typeof n.meta.time === "number")
        bits.push("<b>" + esc(n.meta.time) + "s</b>");
      if (n.meta.skill)
        bits.push(
          "requires <b>" +
            esc(n.meta.skill) +
            (n.meta.skillLevel !== undefined
              ? " " + esc(n.meta.skillLevel)
              : "") +
            "</b>",
        );
      if (bits.length)
        rows.push(
          '<div class="insp-row" style="justify-content:flex-start;gap:6px;flex-wrap:wrap">' +
            bits.join(" · ") +
            "</div>",
        );
      if (n.meta.tools && n.meta.tools.length)
        rows.push(
          '<div class="insp-row" style="justify-content:flex-start;gap:6px;flex-wrap:wrap"><span style="color:var(--faint)">tools</span> ' +
            n.meta.tools
              .map(
                (t) =>
                  '<span class="badge b-dim" style="flex:none">' +
                  esc(t.id) +
                  (t.count ? " ×" + esc(t.count) : "") +
                  "</span>",
              )
              .join(" ") +
            "</div>",
        );
    }
    const ing = n.ingredients || [],
      res = n.results || [];
    rows.push(
      '<div class="insp-sec"><div class="insp-title">Ingredients · ' +
        ing.length +
        "</div>" +
        (ing.length
          ? ing
              .map(
                (i) =>
                  '<div class="insp-row"><span>' +
                  esc(i.id) +
                  (i.tag
                    ? ' <span class="badge b-dim" style="flex:none" title="Any item carrying this tag is a valid input">tag</span>'
                    : "") +
                  "</span>" +
                  (i.count
                    ? '<span class="badge b-dim" style="flex:none">×' +
                      esc(i.count) +
                      "</span>"
                    : "") +
                  "</div>",
              )
              .join("")
          : '<div class="insp-row"><span style="color:var(--faint)">none</span></div>') +
        "</div>",
    );
    rows.push(
      '<div class="insp-sec"><div class="insp-title">Results · ' +
        res.length +
        "</div>" +
        (res.length
          ? res
              .map(
                (r) =>
                  '<div class="insp-row"><span>' +
                  esc(r.id) +
                  "</span>" +
                  (r.count
                    ? '<span class="badge b-dim" style="flex:none">×' +
                      esc(r.count) +
                      "</span>"
                    : "") +
                  "</div>",
              )
              .join("")
          : '<div class="insp-row"><span style="color:var(--faint)">none</span></div>') +
        "</div>",
    );
  } else {
    const pb = n.producedBy || [],
      cb = n.consumedBy || [];
    rows.push(
      '<div class="insp-row" style="justify-content:flex-start"><span class="badge ' +
        (n.kind === "item" ? "b-info" : "b-dim") +
        '">' +
        esc(n.kind === "item" ? "Item" : "Unknown") +
        "</span>" +
        (n.itemType
          ? '<span class="badge b-dim" style="flex:none">' +
            esc(n.itemType) +
            "</span>"
          : "") +
        "</div>",
    );
    // Roadmap #1: item stats (weight/calories/hunger/thirst/tags).
    if (n.props) {
      const bits = [];
      if (n.props.Type) bits.push("Type <b>" + esc(n.props.Type) + "</b>");
      if (n.props.category)
        bits.push("category <b>" + esc(n.props.category) + "</b>");
      if (typeof n.props.weight === "number")
        bits.push("weight <b>" + esc(n.props.weight) + "</b>");
      if (typeof n.props.calories === "number")
        bits.push("<b>" + esc(n.props.calories) + "</b> cal");
      if (typeof n.props.hunger === "number")
        bits.push("hunger <b>" + esc(n.props.hunger) + "</b>");
      if (typeof n.props.thirst === "number")
        bits.push("thirst <b>" + esc(n.props.thirst) + "</b>");
      if (n.props.tags && n.props.tags.length)
        bits.push(
          "tags " +
            n.props.tags
              .map(
                (t) =>
                  '<span class="badge b-dim" style="flex:none">' +
                  esc(t) +
                  "</span>",
              )
              .join(" "),
        );
      if (bits.length)
        rows.push(
          '<div class="insp-row" style="justify-content:flex-start;gap:6px;flex-wrap:wrap">' +
            bits.join(" · ") +
            "</div>",
        );
    }
    rows.push(
      '<div class="insp-sec"><div class="insp-title">Produced by · ' +
        pb.length +
        "</div>" +
        (pb.length
          ? pb
              .map(
                (id) =>
                  '<div class="insp-row"><span>' + esc(id) + "</span></div>",
              )
              .join("")
          : '<div class="insp-row"><span style="color:var(--faint)">nothing crafts this</span></div>') +
        "</div>",
    );
    rows.push(
      '<div class="insp-sec"><div class="insp-title">Consumed by · ' +
        cb.length +
        "</div>" +
        (cb.length
          ? cb
              .map(
                (id) =>
                  '<div class="insp-row"><span>' + esc(id) + "</span></div>",
              )
              .join("")
          : '<div class="insp-row"><span style="color:var(--faint)">used by nothing</span></div>') +
        "</div>",
    );
  }
  return (
    '<div style="display:flex;flex-direction:column;gap:6px">' +
    '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><b class="mono" style="font-size:12.5px;word-break:break-all">' +
    esc(n.id) +
    "</b>" +
    (n.cycle
      ? '<span class="badge b-err" style="flex:none">🔄 self-loop</span>'
      : "") +
    "</div>" +
    '<div style="font-size:11px;color:var(--faint);font-family:var(--font-mono)">' +
    (n.name && n.name !== n.id ? esc(n.name) : "—") +
    "</div>" +
    (n.cycle
      ? '<div class="chain-insp-note">This recipe produces an item it also consumes — a crafting loop that can break recipes IRL.</div>'
      : "") +
    rows.join("") +
    '<div class="insp-actions">' +
    '<button class="btn sm primary" data-act="chain-root" data-id="' +
    esc(n.id) +
    '">' +
    ICONS.spark +
    " Root graph here</button>" +
    '<button class="btn sm" data-act="chain-expand" data-id="' +
    esc(n.id) +
    '" style="border:1px solid var(--stroke)">' +
    ICONS.graph +
    " Expand</button>" +
    '<button class="btn sm ghost" data-act="chain-copy-id" data-id="' +
    esc(n.id) +
    '" style="border:1px solid var(--stroke)">' +
    ICONS.copy +
    " Copy id</button>" +
    '<button class="btn sm ghost" data-act="chain-copy-json" data-id="' +
    esc(n.id) +
    '" style="border:1px solid var(--stroke)">' +
    ICONS.doc +
    " Copy JSON</button>" +
    "</div></div>"
  );
}
function chainInspPaint() {
  const n = S.chain.layout && S.chain.layout.byId.get(S.chain.insp);
  const box = $("#chainInsp");
  if (box)
    box.innerHTML = n
      ? chainInspHTML(n)
      : '<div style="color:var(--faint);font-size:12.5px">Click any node to inspect it.</div>';
  const fsBox = $("#chainInspFs");
  if (fsBox) {
    fsBox.classList.toggle("empty", !n);
    fsBox.innerHTML = n
      ? '<div class="insp-head"><b class="mono" style="font-size:12px;word-break:break-all;min-width:0">' +
        esc(n.name || n.id) +
        '</b><button class="ibtn" data-act="chain-insp-close" style="width:26px;height:26px;border-radius:8px;margin-left:auto;flex:none" aria-label="Close inspector" title="Close inspector">' +
        ICONS.x +
        "</button></div>" +
        chainInspHTML(n)
      : "Click a node to inspect it — ingredients, results, producers &amp; consumers";
  }
}
function chainMarkSel(id) {
  $$('#chainG [data-act="chain-node"]').forEach((el) =>
    el.classList.toggle("sel", el.dataset.id === id),
  );
}
function chainHover(id) {
  const svg = $("#chainSvg");
  if (!svg) return;
  if (id === S.chain._hoverId) return; // same node (rect→text→glyph moves) — nothing to change
  S.chain._hoverId = id;
  if (id) {
    svg.classList.add("hover");
    $$("#chainG .chain-node").forEach((el) =>
      el.classList.toggle("ho", el.dataset.id === id),
    );
    $$("#chainG .chain-edge, #chainG .chain-count").forEach((el) =>
      el.classList.toggle("hl", el.dataset.a === id || el.dataset.b === id),
    );
  } else {
    svg.classList.remove("hover");
    $$("#chainG .ho").forEach((el) => el.classList.remove("ho"));
    $$("#chainG .hl").forEach((el) => el.classList.remove("hl"));
  }
}
function chainTransformStr() {
  return (
    "translate(" +
    S.chain.pan.x +
    "," +
    S.chain.pan.y +
    ") scale(" +
    S.chain.zoom +
    ")"
  );
}
function chainViewH() {
  const c = S.chain,
    L = c.layout;
  if (!L) return CHAIN_H;
  let max = 1;
  for (const side of ["up", "dn"])
    for (let d = 0; d < L[side].length; d++) {
      const key = side + ":" + (d + 1);
      const col = L[side][d] || [];
      max = Math.max(
        max,
        c.expLayers[key]
          ? col.length
          : Math.min(col.length, c.cap || CHAIN_CAP),
      );
    }
  return Math.max(CHAIN_H, max * CHAIN_PITCH + 140);
}
function chainApplyTransform() {
  const g = $("#chainG");
  if (g) g.setAttribute("transform", chainTransformStr());
}
function chainApplyGeometry() {
  const c = S.chain,
    L = c.layout;
  if (!L) return;
  const wrap = $("#chainSvgWrap"),
    svg = $("#chainSvg");
  if (wrap) wrap.style.height = c.fsOpen ? "auto" : chainViewH() + "px";
  if (svg) {
    const W = (L.up.length + 1 + L.dn.length) * CHAIN_COLW + 80;
    svg.setAttribute("viewBox", "0 0 " + W + " " + chainViewH());
  }
}
/* ---- Real fullscreen (requestFullscreen): the graph lives ONLY in #chainFs ---- */
function chainOpenFs() {
  const c = S.chain;
  if (c.fsOpen) return;
  const layer = $("#chainFs");
  if (!layer) return;
  c.fsOpen = true;
  c.fitted = false;
  layer.hidden = false;
  chainFsPaint();
  // Move focus into the layer (not the seed input — arrows should keep panning
  // the graph, not move an input caret).
  layer.focus({ preventScroll: true });
  // Must be called synchronously inside the user gesture to be granted.
  const req = layer.requestFullscreen
    ? layer.requestFullscreen()
    : layer.webkitRequestFullscreen
      ? layer.webkitRequestFullscreen()
      : Promise.resolve();
  if (req && req.catch)
    req.catch(() =>
      toast(
        "Fullscreen blocked by the browser — using the windowed overlay (Esc closes)",
        "warn",
      ),
    );
  addEvent("recipe chain · fullscreen graph");
}
function chainFsClose() {
  if (S.chain.fsOpen && document.fullscreenElement) {
    const ex = document.exitFullscreen
      ? document.exitFullscreen()
      : document.webkitExitFullscreen && document.webkitExitFullscreen();
    if (ex && ex.catch) ex.catch(() => {});
  } else chainFsCleanup();
}
function chainFsCleanup() {
  const layer = $("#chainFs");
  if (layer) layer.hidden = true;
  if (S.chain.fsOpen) S.chain.fsOpen = false;
  renderChain();
}
function chainFsResize() {
  if (!S.chain.fsOpen || !S.chain.layout) return;
  chainApplyGeometry();
  if (S.chain._fitIdle) chainFitAnim();
  else chainApplyTransform();
}
function chainLauncherHTML() {
  const c = S.chain,
    L = c.layout,
    g = c.graph;
  if (!L || !g) return "";
  const up = L.up.reduce((a, x) => a + x.length, 0),
    dn = L.dn.reduce((a, x) => a + x.length, 0);
  const seedBadge =
    L.seed.kind === "recipe"
      ? '<span class="badge b-info">recipe</span>'
      : '<span class="badge b-dim">item</span>';
  return (
    '<div class="glass card panel-card chain-launch">' +
    '<div class="launch-info">' +
    '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><b class="mono" style="font-size:13px">' +
    esc(g.seed) +
    "</b>" +
    seedBadge +
    (g.truncated ? '<span class="badge b-err">truncated</span>' : "") +
    '<span class="badge b-dim">' +
    up +
    " producer(s) · " +
    dn +
    " consumer(s) · " +
    g.nodes.length +
    " node(s)</span></div>" +
    '<div class="f-hint" style="margin-top:6px">The graph opens in a dedicated <b>fullscreen</b> window — drag to pan (with inertia), ctrl+scroll or pinch to zoom, double-click to fit, arrows to nudge.</div>' +
    "</div>" +
    '<button class="btn primary" style="min-width:200px;padding:11px 18px" data-act="chain-fs-open">' +
    ICONS.graph +
    " Open graph in fullscreen</button>" +
    "</div>"
  );
}
function chainFsBarHTML() {
  const c = S.chain;
  const segs = ["both", "upstream", "downstream"];
  const dirLbl = {
    both: "Both",
    upstream: "Upstream",
    downstream: "Downstream",
  };
  const runIcon = c.busy
    ? '<span class="spinner" style="width:13px;height:13px;border-width:2px"></span>'
    : ICONS.search;
  return (
    '<div class="chain-fs-title">' +
    ICONS.graph +
    " Recipe Chain</div>" +
    '<div style="flex:1;min-width:190px;position:relative">' +
    '<input class="field" id="chainFsSeed" value="' +
    esc(c.seed) +
    '" style="padding-right:44px" placeholder="Item or recipe id…" aria-label="Seed item or recipe" autocomplete="off" spellcheck="false">' +
    '<button class="ibtn" data-act="chain-run" style="position:absolute;right:4px;top:4px;width:36px;height:36px;border-radius:10px" title="Build graph (Enter)" aria-label="Build graph">' +
    runIcon +
    "</button>" +
    '<div class="chain-drop" id="chainFsDrop" hidden></div>' +
    "</div>" +
    '<div class="chain-seg" role="group" aria-label="Graph direction">' +
    segs
      .map(
        (d) =>
          '<button class="' +
          (c.direction === d ? "on" : "") +
          '" data-act="chain-dir" data-v="' +
          d +
          '">' +
          dirLbl[d] +
          "</button>",
      )
      .join("") +
    "</div>" +
    '<div style="display:flex;align-items:center;gap:7px"><span style="font-size:11.5px;color:var(--muted)">Depth</span>' +
    '<input type="range" id="chainFsDepth" min="1" max="10" step="1" value="' +
    c.depth +
    '" style="width:104px" aria-label="Graph depth"></div>' +
    '<div style="display:flex;align-items:center;gap:7px"><span style="font-size:11.5px;color:var(--muted)">Cap</span>' +
    '<input type="range" id="chainFsCap" min="3" max="30" step="1" value="' +
    c.cap +
    '" style="width:84px" aria-label="Column cap"></div>' +
    '<button class="ibtn' +
    (c.dense ? " on" : "") +
    '" data-act="chain-dense" style="width:36px;height:36px;border-radius:10px" title="Collapse dense columns into a single pill" aria-label="Collapse dense columns">' +
    ICONS.stack +
    "</button>" +
    '<div style="flex:1;min-width:150px;position:relative">' +
    '<input class="field" id="chainFsHighlight" value="' +
    esc(c.highlight) +
    '" style="padding-right:36px;height:36px;font-size:12px" placeholder="Highlight…" aria-label="Graph highlight" autocomplete="off" spellcheck="false">' +
    '<button class="ibtn" data-act="chain-hl-clear" style="position:absolute;right:2px;top:2px;width:32px;height:32px;border-radius:8px" title="Clear highlight" aria-label="Clear highlight">' +
    ICONS.x +
    "</button>" +
    "</div>" +
    '<button class="ibtn" data-act="chain-fs-close" style="width:38px;height:38px;border-radius:10px;margin-left:auto" title="Exit fullscreen (Esc)" aria-label="Exit fullscreen">' +
    ICONS.x +
    "</button>"
  );
}
function chainFsPaint() {
  const layer = $("#chainFs");
  if (!layer) return;
  const c = S.chain;
  const body = c.layout
    ? (c.busy
        ? '<div class="chain-rebuild"><span class="spinner" style="width:12px;height:12px"></span> rebuilding graph…</div>'
        : "") + chainGraphHTML()
    : '<div class="chain-fs-full"><div class="chain-fs-empty">' +
      (c.busy
        ? '<span class="spinner" style="width:20px;height:20px;display:block;margin:0 auto 12px"></span>'
        : c.error
          ? "✖ " + esc(c.error) + "<br>"
          : "") +
      "No graph yet. Type an item or recipe id in the bar above, then press <b>Enter</b> or the search button.</div></div>";
  layer.innerHTML =
    '<div class="chain-fs-bar">' +
    chainFsBarHTML() +
    "</div>" +
    '<div class="chain-fs-body">' +
    body +
    "</div>";
  if (c.layout) {
    chainPaint();
    bindChainSvg();
    // Never fit while busy (rebuild): the arriving new graph fits instead.
    if (!c.fitted && !c.busy) {
      c.fitted = true;
      requestAnimationFrame(() => {
        if (S.chain.layout && $("#chainG")) chainFitAnim();
      });
    }
  }
  const fsSeed = $("#chainFsSeed");
  if (fsSeed) {
    // Input events bubble to the document listener (chainSeedType); this only
    // binds the enter/arrow navigation for the fullscreen seed field.
    fsSeed.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const d = $("#chainFsDrop"),
          items = d && !d.hidden ? $$(".chain-drop-item", d) : [];
        const pick =
          S.chain.dropIdx >= 0 && items[S.chain.dropIdx]
            ? items[S.chain.dropIdx]
            : null;
        if (pick) chainRun(pick.dataset.id);
        else chainRun();
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const d = $("#chainFsDrop");
        if (d && !d.hidden) {
          e.preventDefault();
          const n = $$(".chain-drop-item", d).length;
          if (n)
            chainDropHighlight(
              e.key === "ArrowDown"
                ? (S.chain.dropIdx + 1) % n
                : (S.chain.dropIdx - 1 + n) % n,
            );
        }
      } else if (e.key === "Escape") chainDropClose();
    });
  }
}
function chainSeedType(input) {
  clearTimeout(S.chain.dropTimer);
  const v = input.value.trim();
  S.chain.seed = v;
  S.chain.dropIdx = -1;
  if (v.length < 3) {
    chainDropClose();
    return;
  }
  const fs = input.id === "chainFsSeed";
  S.chain.dropTimer = setTimeout(
    () =>
      chainDropSearch(
        v,
        fs ? "chainFsSeed" : undefined,
        fs ? "chainFsDrop" : undefined,
      ),
    220,
  );
}
function chainVisibleZoom() {
  // Visible scale = the SVG viewBox base scale (meet-fit of W×H into the
  // wrap) × the chainG zoom transform. Makes the zoom badge WYSIWYG and the
  // fit math correct (recipe-chain review).
  const c = S.chain,
    L = c.layout;
  if (!L) return c.zoom;
  const wrap = $("#chainSvgWrap");
  if (!wrap) return c.zoom;
  const W = (L.up.length + 1 + L.dn.length) * CHAIN_COLW + 80;
  const H = chainViewH();
  const sv = Math.max(
    0.05,
    Math.min((wrap.clientWidth || 600) / W, (wrap.clientHeight || H) / H),
  );
  return c.zoom * sv;
}
/* ---- view math: transform-only zoom/pan (never repaint the graph) ---- */
function chainApplyView() {
  chainApplyTransform();
  const zv = $("#chainZoomVal");
  if (zv) zv.textContent = Math.round(chainVisibleZoom() * 100) + "%";
}
function chainFitTarget() {
  const L = S.chain.layout;
  if (!L) return null;
  const wrap = $("#chainSvgWrap");
  if (!wrap) return null;
  const W = (L.up.length + 1 + L.dn.length) * CHAIN_COLW + 80;
  const H = chainViewH();
  const cw = wrap.clientWidth || 600,
    ch = wrap.clientHeight || H;
  // The SVG viewBox already scales W×H to fit the wrap (preserveAspectRatio
  // 'meet'), so the graph transform compounds on top of that base scale.
  // Divide it out — the visible scale after fit is ≈0.94 for any graph size.
  const sv = Math.max(0.05, Math.min(cw / W, ch / H));
  const z = Math.max(0.2, Math.min(3, 0.94 / sv));
  return { zoom: z, x: (cw - W * z) / 2, y: (ch - H * z) / 2 };
}
function chainFitAnim() {
  const t = chainFitTarget();
  if (!t) return;
  chainZoomAnim(t.zoom, { px: t.x, py: t.y });
  S.chain._fitIdle = true;
}
function chainZoom(f, cx, cy) {
  const wrap = $("#chainSvgWrap");
  if (!wrap) return;
  const r = wrap.getBoundingClientRect();
  const px = cx != null ? cx - r.left : r.width / 2;
  const py = cy != null ? cy - r.top : r.height / 2;
  chainZoomAnim(Math.max(0.2, Math.min(3, S.chain.zoom * f)), {
    cx: px,
    cy: py,
  });
}
function chainZoomAnim(targetZoom, opts) {
  const c = S.chain;
  const wrap = $("#chainSvgWrap");
  if (!wrap) return;
  opts = opts || {};
  const dur = opts.dur || 200;
  targetZoom = Math.max(0.2, Math.min(3, targetZoom));
  const rm =
    S.settings.reduceMotion ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  const r = wrap.getBoundingClientRect();
  const z0 = c.zoom;
  const px0 = c.pan.x,
    py0 = c.pan.y;
  const cx = opts.cx != null ? opts.cx : r.width / 2;
  const cy = opts.cy != null ? opts.cy : r.height / 2;
  const gx = (cx - c.pan.x) / c.zoom,
    gy = (cy - c.pan.y) / c.zoom;
  const tx = opts.px != null ? opts.px : cx - gx * targetZoom;
  const ty = opts.py != null ? opts.py : cy - gy * targetZoom;
  c._fitIdle = false;
  cancelAnimationFrame(c._zoomAnim);
  if (rm || dur <= 0) {
    c.zoom = targetZoom;
    c.pan.x = tx;
    c.pan.y = ty;
    chainClampPan();
    chainApplyView();
    return;
  }
  const t0 = performance.now();
  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    const e = ease(t);
    c.zoom = z0 + (targetZoom - z0) * e;
    c.pan.x = px0 + (tx - px0) * e;
    c.pan.y = py0 + (ty - py0) * e;
    chainClampPan();
    chainApplyView();
    if (t < 1) c._zoomAnim = requestAnimationFrame(step);
  };
  c._zoomAnim = requestAnimationFrame(step);
}
function bindChainSvg() {
  const svg = $("#chainSvg");
  if (!svg) return;
  let drag = null,
    panRaf = 0,
    inerRaf = 0,
    vel = { x: 0, y: 0 };
  const pointers = new Map();
  let pinch = null;
  const rm = () =>
    S.settings.reduceMotion ||
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Coalesce pan writes to one rAF per frame so dragging stays at 60fps.
  const panPaint = () => {
    if (panRaf) return;
    panRaf = requestAnimationFrame(() => {
      panRaf = 0;
      chainApplyTransform();
    });
  };
  svg.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    // Two pointers = pinch zoom (touch).
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch = {
        d: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)),
        z: S.chain.zoom,
      };
      drag = null;
      svg.classList.remove("dragging");
      document.body.classList.remove("panning");
      return;
    }
    if (e.target.closest("[data-act]")) {
      pointers.delete(e.pointerId);
      return;
    }
    if (e.button !== 0 && e.button !== 1) {
      pointers.delete(e.pointerId);
      return;
    }
    if (e.button === 1) e.preventDefault();
    cancelAnimationFrame(inerRaf);
    inerRaf = 0;
    cancelAnimationFrame(S.chain._zoomAnim);
    S.chain._zoomAnim = 0;
    S.chain._fitIdle = false; // a manual drag opts out of auto-refit on resize
    vel = { x: 0, y: 0 };
    drag = {
      x: e.clientX,
      y: e.clientY,
      px: S.chain.pan.x,
      py: S.chain.pan.y,
      lx: e.clientX,
      ly: e.clientY,
      t: performance.now(),
    };
    svg.setPointerCapture(e.pointerId);
    svg.classList.add("dragging");
    document.body.classList.add("panning");
    chainHover(null);
  });
  svg.addEventListener("pointermove", (e) => {
    if (pointers.has(e.pointerId))
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d > 0) {
        const z = Math.max(0.2, Math.min(3, pinch.z * (d / pinch.d)));
        const mx = (a.x + b.x) / 2,
          my = (a.y + b.y) / 2;
        const gx = (mx - S.chain.pan.x) / S.chain.zoom,
          gy = (my - S.chain.pan.y) / S.chain.zoom;
        S.chain.zoom = z;
        S.chain.pan.x = mx - gx * z;
        S.chain.pan.y = my - gy * z;
        chainClampPan();
        panPaint();
      }
      return;
    }
    if (!drag) return;
    const dx = e.clientX - drag.x,
      dy = e.clientY - drag.y;
    // Flick velocity = smoothed instantaneous delta (last move), not the
    // average over the whole drag — a slow drag ending in a quick flick
    // should still glide.
    const now = performance.now();
    const dt = now - drag.t;
    if (dt > 0) {
      const ivx = ((e.clientX - drag.lx) / dt) * 16.7,
        ivy = ((e.clientY - drag.ly) / dt) * 16.7;
      vel.x = vel.x * 0.72 + ivx * 0.28;
      vel.y = vel.y * 0.72 + ivy * 0.28;
    }
    drag.lx = e.clientX;
    drag.ly = e.clientY;
    drag.t = now;
    S.chain.pan.x = drag.px + dx;
    S.chain.pan.y = drag.py + dy;
    chainClampPan();
    panPaint();
  });
  const endDrag = (e) => {
    if (e) pointers.delete(e.pointerId);
    if (pinch && pointers.size < 2) pinch = null;
    const wasDrag = !!drag;
    drag = null;
    svg.classList.remove("dragging");
    document.body.classList.remove("panning");
    // Inertia: release = gentle flick that keeps gliding and decays.
    if (wasDrag && !pinch && !rm()) {
      const step = () => {
        vel.x *= 0.9;
        vel.y *= 0.9;
        if (Math.abs(vel.x) < 0.4 && Math.abs(vel.y) < 0.4) {
          inerRaf = 0;
          return;
        }
        S.chain.pan.x += vel.x;
        S.chain.pan.y += vel.y;
        chainClampPan();
        chainApplyTransform();
        inerRaf = requestAnimationFrame(step);
      };
      inerRaf = requestAnimationFrame(step);
    }
  };
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);
  svg.addEventListener("contextmenu", (e) => {
    if (e.button === 2) e.preventDefault();
  });
  svg.addEventListener("dblclick", (e) => {
    if (!e.target.closest("[data-act]")) chainFitAnim();
  });
  svg.addEventListener("pointerover", (e) => {
    if (svg.classList.contains("dragging")) return;
    const n = e.target.closest(".chain-node");
    chainHover(n ? n.dataset.id : null);
  });
  svg.addEventListener(
    "wheel",
    (e) => {
      const wrap = $("#chainSvgWrap");
      const cw = wrap ? wrap.clientWidth : 600,
        ch = wrap ? wrap.clientHeight : chainViewH();
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        // Coalesce rapid wheel-zoom into one transform write per frame.
        S.chain._zoomAcc = (S.chain._zoomAcc || 0) + (e.deltaY < 0 ? 1 : -1);
        S.chain._zoomPt = { x: e.clientX, y: e.clientY };
        if (!S.chain._zoomRaf) {
          S.chain._zoomRaf = requestAnimationFrame(() => {
            S.chain._zoomRaf = 0;
            const f = Math.pow(1.12, S.chain._zoomAcc || 0);
            S.chain._zoomAcc = 0;
            if (f !== 1 && S.chain.layout) {
              const pt = S.chain._zoomPt || null;
              chainZoomAnim(Math.max(0.2, Math.min(3, S.chain.zoom * f)), {
                cx: pt && pt.x,
                cy: pt && pt.y,
                dur: 90,
              });
            }
          });
        }
        return;
      }
      const L = S.chain.layout;
      const W = L ? (L.up.length + 1 + L.dn.length) * CHAIN_COLW + 80 : 0;
      const overW = W * S.chain.zoom > cw,
        overH = chainViewH() * S.chain.zoom > ch;
      if ((e.shiftKey && overW) || (!e.shiftKey && overH)) {
        e.preventDefault();
        S.chain.pan.x -= e.shiftKey ? e.deltaY : 0;
        S.chain.pan.y += e.shiftKey ? 0 : e.deltaY;
        chainClampPan();
        panPaint();
      }
    },
    { passive: false },
  );
}
function chainClampPan() {
  const wrap = $("#chainSvgWrap"),
    L = S.chain.layout;
  if (!wrap || !L) return;
  const W = (L.up.length + 1 + L.dn.length) * CHAIN_COLW + 80;
  const H = chainViewH();
  const cw = wrap.clientWidth || 600,
    ch = wrap.clientHeight || H;
  // Soft bounds: even when the content fits the viewport (default/fit zoom)
  // the graph stays grabbable — it can slide ~40% of a viewport past each
  // edge and gently settles, so panning feels smooth at EVERY zoom level.
  // When the content overflows, the bounds still keep the viewport covered
  // (no dead space) while allowing a little overscroll.
  const mx = (cw - W * S.chain.zoom) / 2 + cw * 0.4;
  const my = (ch - H * S.chain.zoom) / 2 + ch * 0.4;
  S.chain.pan.x = clamp(
    S.chain.pan.x,
    Math.min(0, cw - W * S.chain.zoom - mx),
    Math.max(0, mx),
  );
  S.chain.pan.y = clamp(
    S.chain.pan.y,
    Math.min(0, ch - H * S.chain.zoom - my),
    Math.max(0, my),
  );
}
async function chainDropSearch(v, seedId, dropId) {
  try {
    const [ir, rr] = await Promise.all([
      rpc("tools/call", {
        name: "search_vanilla",
        arguments: { query: v, type: "item", limit: 6 },
      }).catch(() => null),
      rpc("tools/call", {
        name: "search_vanilla",
        arguments: { query: v, type: "recipe", limit: 6 },
      }).catch(() => null),
    ]);
    const list = [];
    const push = (sc, type) => {
      for (const r of (sc && sc.results) || [])
        if (!list.find((x) => x.id === r.id))
          list.push({ id: r.id, type, name: r.displayName || r.name || r.id });
    };
    push(ir && ir.result && ir.result.structuredContent, "item");
    push(rr && rr.result && rr.result.structuredContent, "recipe");
    const drop = $(dropId || "chainDrop");
    const f = $(seedId || "chainSeed");
    if (!drop || !f || f.value.trim() !== v) return;
    if (!list.length) {
      drop.innerHTML =
        '<div class="chain-drop-empty">No matches for “' +
        esc(v) +
        "” — paste an exact id and press Enter.</div>";
      drop.hidden = false;
      return;
    }
    drop.innerHTML = list
      .map(
        (x) =>
          '<button type="button" class="chain-drop-item" data-act="chain-sel" data-id="' +
          esc(x.id) +
          '"><span class="mono">' +
          esc(x.id) +
          '</span><span class="badge ' +
          (x.type === "recipe" ? "b-info" : "b-dim") +
          '" style="margin-left:auto;flex:none">' +
          esc(x.type) +
          "</span></button>",
      )
      .join("");
    S.chain.dropIdx = -1;
    drop.hidden = false;
  } catch {
    /* autocomplete is best-effort */
  }
}
function chainDropHighlight(idx) {
  S.chain.dropIdx = idx;
  const d = $("#chainDrop"),
    fd = $("#chainFsDrop");
  if (d)
    $$(".chain-drop-item", d).forEach((el, i) =>
      el.classList.toggle("sel", i === idx),
    );
  if (fd)
    $$(".chain-drop-item", fd).forEach((el, i) =>
      el.classList.toggle("sel", i === idx),
    );
}
function chainDropClose() {
  const d = $("#chainDrop");
  if (d) d.hidden = true;
  const fd = $("#chainFsDrop");
  if (fd) fd.hidden = true;
}

/* ==================== SETTINGS ==================== */
function switchRow(key, checked, label, sub) {
  return (
    '<div class="set-row"><div><div class="lbl">' +
    label +
    '</div><div class="sub">' +
    sub +
    "</div></div>" +
    '<button class="switch" role="switch" aria-checked="' +
    checked +
    '" aria-label="' +
    label +
    '" data-act="set-switch" data-key="' +
    key +
    '"><span class="trk"></span><span class="knb"></span></button></div>'
  );
}
function settingsHTML() {
  const st = S.settings;
  return (
    '<div class="set-grid">' +
    '<section class="glass card panel-card"><h3>' +
    ICONS.spark +
    " Appearance</h3>" +
    '<div class="set-row" style="align-items:flex-start"><div><div class="lbl">Accent color</div><div class="sub">Applied instantly across rings, glows & controls</div></div>' +
    '<div class="swatches">' +
    SWATCHES.map(
      (c) =>
        '<button class="swatch' +
        (c.toLowerCase() === st.accent.toLowerCase() ? " sel" : "") +
        '" data-act="swatch" data-color="' +
        c +
        '" aria-label="Accent ' +
        c +
        '"><span class="dotc" style="background:' +
        c +
        ";box-shadow:0 0 14px " +
        c +
        '66"></span></button>',
    ).join("") +
    '<span class="color-well" title="Custom accent"><input type="color" id="accentPicker" value="' +
    st.accent +
    '" aria-label="Custom accent"><span class="cw-dot"></span></span>' +
    "</div></div>" +
    switchRow(
      "reduceMotion",
      st.reduceMotion,
      "Reduce motion",
      "Disables springs, breathing glows & parallax",
    ) +
    "</section>" +
    '<section class="glass card panel-card"><h3>' +
    ICONS.doc +
    " Console</h3>" +
    switchRow(
      "autoScroll",
      st.autoScroll,
      "Auto-scroll wire log",
      "Pin to newest JSON-RPC frame",
    ) +
    switchRow(
      "follow",
      st.follow,
      "Terminal follow mode",
      "Inspector mirrors the latest frame automatically",
    ) +
    '<div class="set-row"><div><div class="lbl">Wire log</div><div class="sub">Local frame history in this tab</div></div><button class="btn" data-act="clear-logs">Clear</button></div>' +
    "</section>" +
    '<section class="glass card panel-card"><h3>' +
    ICONS.download +
    " Workshop</h3>" +
    '<div class="set-row" style="align-items:flex-start"><div><div class="lbl">Download folder</div><div class="sub" id="wsDirStatus">' +
    wsDirStatusHTML() +
    "</div></div></div>" +
    '<div class="set-row" style="flex-wrap:wrap"><input class="field" id="wsDirInput" style="flex:1;min-width:230px" placeholder="e.g. D:\\PZ-Mods\\Workshop" value="' +
    (S.wsDir ? esc(S.wsDir) : "") +
    '" aria-label="Workshop download folder">' +
    '<button class="btn primary" data-act="ws-set-dir">' +
    ICONS.check +
    " Save &amp; restart</button>" +
    (S.wsDir
      ? '<button class="btn" data-act="ws-clear-dir">' +
        ICONS.x +
        " Use default</button>"
      : "") +
    "</div>" +
    '<div class="f-hint" style="margin:8px 2px 0">workshop_download &amp; workshop_analyze fetch mods here via SteamCMD. The bridge saves the path and restarts the server so it applies immediately. Tip: use the game&apos;s workshop folder (…\\steamapps\\workshop\\content\\108600) so mods also appear in-game.</div>' +
    "</section>" +
    '<section class="glass card panel-card"><h3>' +
    ICONS.link +
    " Server</h3>" +
    '<div class="set-row"><div><div class="lbl">Restart MCP server</div><div class="sub">Bridge kills the child process and respawns it</div></div>' +
    '<button class="btn danger" data-act="restart" ' +
    (S.conn !== "live" ? "disabled" : "") +
    ">" +
    ICONS.power +
    " Restart</button></div>" +
    '<div class="set-row"><div><div class="lbl">Shut down deck</div><div class="sub">Stops the bridge, the MCP server and every running task — closes the console window (same as Ctrl+C). Start again with dashboard.bat</div></div>' +
    '<button class="btn danger" data-act="shutdown">' +
    ICONS.power +
    " Shut down</button></div>" +
    '<div class="set-row"><div><div class="lbl">Server log level</div><div class="sub">Live from the bridge env</div></div><span class="badge b-dim mono" id="envLogLevel">…</span></div>' +
    '<div class="set-row"><div><div class="lbl">Knowledge base path</div><div class="sub">Live from the bridge env</div></div><span class="badge b-dim mono" id="envKbPath">…</span></div>' +
    '<div class="set-row"><div><div class="lbl">SteamCMD</div><div class="sub">Workshop downloads use this binary</div></div><span class="badge b-dim mono" id="envSteamCmd">…</span></div>' +
    "</section>" +
    '<section class="glass card panel-card"><h3>' +
    ICONS.db +
    " About</h3>" +
    '<div class="krow"><span class="k">Server</span><span class="v">' +
    esc(
      (S.serverInfo?.name || "pz-mcp-server") +
        " v" +
        (S.serverInfo?.version || "—"),
    ) +
    "</span></div>" +
    '<div class="krow"><span class="k">Protocol</span><span class="v">' +
    esc(S.protocol || "—") +
    "</span></div>" +
    '<div class="krow"><span class="k">Transport</span><span class="v">stdio ⇄ bridge ⇄ SSE/HTTP</span></div>' +
    '<div class="krow"><span class="k">Shortcuts</span><span class="v"><span class="kbd">1–6</span> tabs · <span class="kbd">T</span> terminal · <span class="kbd">Esc</span> close</span></div>' +
    '<div class="krow"><span class="k">Source</span><span class="v"><a class="link" href="https://github.com/shakoorpour1991-sketch/pz-mcp-server" target="_blank" rel="noopener">repository ↗</a></span></div>' +
    "</section></div>"
  );
}
async function restartServer() {
  try {
    await fetch("/api/restart", { method: "POST" });
    S.handshaken = false;
    toast("Restart signal sent — respawning…", "power");
    setConn("connecting");
    setTimeout(() => handshake().catch(() => setConn("offline")), 2500);
  } catch {
    toast("Bridge unreachable", "warn");
  }
}

/* ---------- full program shutdown (red Shut down button) ---------- */
/** Promise-based confirm modal. Resolves true only when the user explicitly
 * confirms; Esc, the ✕ button or Cancel all resolve false. */
function confirmAsk(html, note) {
  return new Promise((resolve) => {
    const modal = $("#confirmModal");
    if (!modal) return resolve(true);
    const body = $("#confirmBody");
    if (body)
      body.innerHTML =
        (html || "") +
        (note ? '<p class="confirm-note">' + note + "</p>" : "");
    const yes = $("#confirmYes"),
      no = modal.querySelector('[data-act="confirm-no"]');
    const close = (v) => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      yes?.removeEventListener("click", onYes);
      no?.removeEventListener("click", onNo);
      document.removeEventListener("keydown", onKey);
      if (S._prevFocus && S._prevFocus.focus) S._prevFocus.focus();
      resolve(v);
    };
    const onYes = () => close(true);
    const onNo = () => close(false);
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(false);
      }
    };
    S._prevFocus = document.activeElement;
    yes?.addEventListener("click", onYes);
    no?.addEventListener("click", onNo);
    document.addEventListener("keydown", onKey);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    no?.focus();
  });
}
function showShutdownOverlay() {
  const ov = $("#shutdownOverlay");
  if (ov) ov.hidden = false;
  setConn("offline");
  addEvent("program shut down — you can close this tab");
}
async function shutdownDeck() {
  if (S.shuttingDown) return;
  const ok = await confirmAsk(
    "<b>This stops the whole Control Deck.</b>" +
      "<p>The bridge, the MCP server and every running task " +
      "(workshop downloads, mod installs, file parsing, …) will be stopped, " +
      "and the “Glass Control Deck” console window closes with it.</p>",
    "Nothing keeps running in the background. To start it again later, " +
      "double-click <b>dashboard.bat</b>.",
  );
  if (!ok) return;
  S.shuttingDown = true;
  toast("Shutting down…", "power");
  // Show the overlay immediately (optimistic): if the fetch races the bridge
  // going down it still lands on the static shutdown screen, not a retry loop.
  showShutdownOverlay();
  try {
    await fetch("/api/shutdown", { method: "POST" });
  } catch {
    /* bridge already down — the overlay is already showing */
  }
}
async function loadEnv() {
  try {
    const r = await fetch("/api/env");
    const d = await r.json();
    const ll = $("#envLogLevel");
    if (ll && d.logLevel) ll.textContent = "PZ_MCP_LOG_LEVEL=" + d.logLevel;
    const kp = $("#envKbPath");
    if (kp && d.kbPath) kp.textContent = "PZ_MCP_KB_PATH=" + d.kbPath;
    const sc = $("#envSteamCmd");
    if (sc && d.steamCmdPath)
      sc.textContent = "STEAMCMD_PATH=" + d.steamCmdPath;
  } catch {
    /* bridge not up yet */
  }
}
async function loadWorkshopDir() {
  try {
    const r = await fetch("/api/workshop-dir");
    const d = await r.json();
    S.wsDir = d && typeof d.configured === "string" ? d.configured : null;
    const st = $("#wsDirStatus");
    if (st) st.innerHTML = wsDirStatusHTML();
  } catch {
    /* bridge not up yet */
  }
}
async function wsOpenFolder() {
  let d = {};
  try {
    const r = await fetch("/api/open-workshop-dir", { method: "POST" });
    d = await r.json().catch(() => ({}));
  } catch {
    toast("Bridge unreachable", "warn");
    return;
  }
  if (!d.ok) {
    toast(d.error || "Could not open the folder", "warn");
    return;
  }
  toast("Opened " + d.path, "check");
}
async function setWorkshopDir(path, clear) {
  let d = {};
  try {
    const r = await fetch("/api/workshop-dir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clear ? { clear: true } : { path }),
    });
    d = await r.json().catch(() => ({}));
  } catch {
    toast("Bridge unreachable", "warn");
    return;
  }
  if (!d.ok) {
    toast(d.error || "Could not save the folder", "warn");
    return;
  }
  S.wsDir = d.configured || null;
  S.handshaken = false;
  setConn("connecting");
  toast(
    clear
      ? "Default folder restored — respawning server…"
      : "Download folder saved — respawning server…",
    "check",
  );
  setTimeout(() => handshake().catch(() => setConn("offline")), 2500);
  renderView();
}

/* ==================== TERMINAL ==================== */
const term = {
  open: false,
  x: 0,
  y: 0,
  w: 540,
  h: 380,
  max: false,
  prev: null,
  current: null,
};
const termEl = () => $("#terminal");
function termApply() {
  const el = termEl();
  el.style.transform = "translate3d(" + term.x + "px," + term.y + "px,0)";
  el.style.width = term.w + "px";
  el.style.height = term.h + "px";
}
function termPositionDefault() {
  if (innerWidth < 640) {
    term.w = innerWidth - 16;
    term.h = Math.round(innerHeight * 0.62);
    term.x = 8;
    term.y = innerHeight - term.h - 96;
  } else {
    term.w = 540;
    term.h = 380;
    term.x = innerWidth - term.w - 28;
    term.y = Math.max(80, innerHeight - term.h - 130);
  }
}
function showPayload(entry) {
  term.current = entry;
  const idp = entry.msg?.id !== undefined ? " #" + entry.msg.id : "";
  $("#termTitle").textContent =
    "mcp://" +
    entry.dir +
    " · " +
    (entry.method || "") +
    idp +
    " · " +
    fmtClock(entry.t);
  $("#termBody").innerHTML = hlJSON(entry.msg);
}
function openTerminal(entry) {
  if (!term.open) {
    termPositionDefault();
    termApply();
  }
  termEl().classList.add("open");
  term.open = true;
  showPayload(
    entry ||
      S.logs[S.logs.length - 1] || {
        dir: "sys",
        method: "idle",
        t: Date.now(),
        msg: { note: "No frames yet — run a tool in the Playground." },
      },
  );
  $("#termClose").focus({ preventScroll: true });
}
function closeTerminal() {
  termEl().classList.remove("open");
  term.open = false;
}
function toggleTermMax() {
  if (!term.max) {
    term.prev = { x: term.x, y: term.y, w: term.w, h: term.h };
    term.x = 10;
    term.y = 10;
    term.w = innerWidth - 20;
    term.h = innerHeight - 20;
    term.max = true;
  } else {
    Object.assign(term, term.prev);
    term.max = false;
  }
  termApply();
}
function bindTerminal() {
  const head = $("#termHead");
  let drag = null;
  head.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button") || term.max) return;
    drag = { mode: "move", px: e.clientX, py: e.clientY, x: term.x, y: term.y };
    head.setPointerCapture(e.pointerId);
  });
  $("#termResize").addEventListener("pointerdown", (e) => {
    if (term.max) return;
    drag = {
      mode: "resize",
      px: e.clientX,
      py: e.clientY,
      w: term.w,
      h: term.h,
    };
    e.target.setPointerCapture(e.pointerId);
  });
  const onMove = (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.px,
      dy = e.clientY - drag.py;
    if (drag.mode === "move") {
      term.x = clamp(drag.x + dx, -term.w + 80, innerWidth - 80);
      term.y = clamp(drag.y + dy, 0, innerHeight - 56);
    } else {
      term.w = clamp(drag.w + dx, 300, innerWidth - 16);
      term.h = clamp(drag.h + dy, 220, innerHeight - 16);
    }
    termApply();
  };
  head.addEventListener("pointermove", onMove);
  $("#termResize").addEventListener("pointermove", onMove);
  head.addEventListener("pointerup", () => (drag = null));
  $("#termResize").addEventListener("pointerup", () => (drag = null));
  head.addEventListener("keydown", (e) => {
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key) ||
      term.max
    )
      return;
    e.preventDefault();
    const s = 28;
    if (e.key === "ArrowLeft") term.x -= s;
    if (e.key === "ArrowRight") term.x += s;
    if (e.key === "ArrowUp") term.y -= s;
    if (e.key === "ArrowDown") term.y += s;
    term.x = clamp(term.x, -term.w + 80, innerWidth - 80);
    term.y = clamp(term.y, 0, innerHeight - 56);
    termApply();
  });
  $("#termClose").addEventListener("click", closeTerminal);
  $("#termMax").addEventListener("click", toggleTermMax);
  $("#termFollow").addEventListener("click", function () {
    S.settings.follow = !S.settings.follow;
    this.classList.toggle("on", S.settings.follow);
    this.setAttribute("aria-pressed", String(S.settings.follow));
    saveSettings();
    if (S.settings.follow && S.logs.length)
      showPayload(S.logs[S.logs.length - 1]);
  });
  $("#termCopy").addEventListener("click", () => {
    if (!term.current) return;
    navigator.clipboard
      ?.writeText(JSON.stringify(term.current.msg, null, 2))
      .then(() => toast("Payload copied"))
      .catch(() => toast("Copy blocked by browser", "warn"));
  });
}

/* ==================== DIAGNOSTICS PANEL ==================== */

/** Recursively extract diagnostic-like objects from a structured content tree. */
function findDiagnostics(obj, out = []) {
  if (Array.isArray(obj)) {
    for (const item of obj) {
      if (item && typeof item === "object") {
        if (
          typeof item.severity === "string" &&
          (item.severity === "error" ||
            item.severity === "warning" ||
            item.severity === "info") &&
          (typeof item.message === "string" || typeof item.code === "string")
        ) {
          out.push(item);
        } else findDiagnostics(item, out);
      }
    }
  } else if (obj && typeof obj === "object") {
    for (const v of Object.values(obj)) findDiagnostics(v, out);
  }
  return out;
}

function diagLocation(d) {
  return [
    d.file,
    d.line > 0
      ? "L" + d.line + (d.column !== undefined ? ":" + (d.column + 1) : "")
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function diagRowHTML(d, i, clickable = true) {
  const sev =
    d.severity === "error" ? "✖" : d.severity === "warning" ? "⚠" : "ℹ";
  const loc = diagLocation(d);
  const prov = d.provenance
    ? '<span class="p-badge ' +
      (d.provenance === "dev_functionality" ? "p-dev" : "p-orig") +
      '">' +
      esc(d.provenance) +
      "</span>"
    : "";
  const sug = d.suggestion
    ? '<span class="diag-sug">💡 ' + esc(d.suggestion) + "</span>"
    : "";
  const locAttr =
    clickable && d.line > 0
      ? ' data-line="' +
        d.line +
        '" data-col="' +
        (d.column ?? 0) +
        '" data-i="' +
        i +
        '"' +
        ' data-act="diag-open"'
      : "";
  return (
    '<div class="diag-row"' +
    locAttr +
    ">" +
    '<span class="diag-sev ' +
    d.severity +
    '">' +
    sev +
    "</span>" +
    '<span class="diag-code">' +
    esc(d.code) +
    "</span>" +
    prov +
    (loc ? '<span class="diag-loc">' + esc(loc) + "</span>" : "") +
    '<span class="diag-msg">' +
    esc(d.message) +
    "</span>" +
    sug +
    "</div>"
  );
}

function diagPanelHTML(diags) {
  const errN = diags.filter((d) => d.severity === "error").length;
  const warnN = diags.filter((d) => d.severity === "warning").length;
  const infoN = diags.filter((d) => d.severity === "info").length;
  const counts =
    (errN ? '<span class="badge b-err">' + errN + " err</span>" : "") +
    (warnN ? '<span class="badge b-warn">' + warnN + " warn</span>" : "") +
    (infoN ? '<span class="badge b-info">' + infoN + " info</span>" : "");
  return (
    '<div class="diag-panel">' +
    '<div class="diag-head"><span class="diag-icon">' +
    ICONS.shield +
    '</span> Script Diagnostics <span class="diag-counts">' +
    counts +
    "</span></div>" +
    diags.map((d, i) => diagRowHTML(d, i)).join("") +
    "</div>"
  );
}

function showDiagLineViewer(line) {
  const content = S.pg.values?.validate_script?.content;
  if (!content) {
    toast("Open the script in validate_script to view lines", "warn");
    return;
  }
  const lines = content.split("\n");
  const modal = document.createElement("div");
  modal.className = "diag-modal";
  modal.innerHTML =
    '<div class="diag-modal-shell">' +
    '<div class="diag-modal-head"><span>Line Viewer</span><button class="ibtn" data-act="close-diag-modal" style="width:36px;height:36px;border-radius:10px">' +
    ICONS.x +
    "</button></div>" +
    '<pre class="diag-modal-body">' +
    lines
      .map((l, i) => {
        const n = i + 1;
        const hl = n === line ? ' class="hl"' : "";
        return (
          "<span" +
          hl +
          '><span class="ln">' +
          String(n).padStart(4) +
          "</span>" +
          esc(l) +
          "</span>"
        );
      })
      .join("\n") +
    "</pre></div>";
  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    const hl = modal.querySelector(".hl");
    if (hl) hl.scrollIntoView({ block: "center" });
  });
}

/* ==================== GLOBAL EVENTS ==================== */
document.addEventListener("click", (e) => {
  const t = e.target;
  const dropEl = $("#chainDrop"),
    fsDropEl = $("#chainFsDrop");
  if (
    dropEl &&
    !dropEl.hidden &&
    t.id !== "chainSeed" &&
    !t.closest("#chainDrop")
  )
    chainDropClose();
  else if (
    fsDropEl &&
    !fsDropEl.hidden &&
    t.id !== "chainFsSeed" &&
    !t.closest("#chainFsDrop")
  )
    chainDropClose();
  const tab = walkUp(t, ".tab");
  if (tab) {
    switchView(tab.dataset.view);
    return;
  }
  const act = walkUp(t, "[data-act]");
  if (act) {
    const a = act.dataset.act;
    if (a === "toggle-tool") toggleTool(act.closest(".tool").dataset.tool);
    else if (a === "run-tool") {
      runTool(act.closest(".tool").dataset.tool);
    } else if (a === "cancel-run") {
      const c = S.pg.ctrls[act.closest(".tool").dataset.tool];
      if (c) c.abort();
    } else if (a === "recent-open") {
      const r = S.pg.recent[+act.dataset.i];
      if (r) showResult(r.name, r.text, r.dt, null, r.status !== "ok");
    } else if (a === "copy-result") {
      const txt = S.lastResult ? S.lastResult.script || S.lastResult.text : "";
      if (txt)
        navigator.clipboard
          ?.writeText(txt)
          .then(() => toast("Result copied"))
          .catch(() => toast("Copy blocked by browser", "warn"));
    } else if (a === "res-toggle") {
      const body = $("#resultBody");
      if (!body) return;
      const open = body.classList.toggle("show-all");
      act.textContent = open ? "Show less" : "Show more";
    }    else if (a === "open-help") openHelp();
    else if (a === "close-help") closeHelp();
    else if (a === "open-guide") openGuide();
    else if (a === "close-guide") closeGuide();
    else if (a === "card-collapse") toggleCardState(act.dataset.card);
    else if (a === "db-search") dbSearch();
    else if (a === "kb-search") kbDbSearch();
    else if (a === "kb-section") {
      const i = +act.dataset.i;
      if (act.closest("#kbOut")) kbDbDrill(i);
      else kbDrillIn(i);
    } else if (a === "kb-back") {
      if (act.closest("#kbOut")) kbDbBack();
      else {
        S.lastResult.kbDrill = null;
        S.lastResult.kbDrillContent = null;
        restoreResult();
      }
    } else if (a === "kb-copy") {
      const m = act.closest("#kbOut")
        ? S.kbdb.drillContent
        : S.lastResult.kbDrillContent;
      if (m && m.content)
        navigator.clipboard
          ?.writeText(m.content)
          .then(() => toast("Section copied"))
          .catch(() => toast("Copy blocked by browser", "warn"));
    }
    else if (a === "ws-search") wsSearch();
    else if (a === "ws-details") {
      const v = $("#wsId").value.trim();
      if (!v) {
        toast("Paste a workshop URL or id first", "warn");
        return;
      }
      wsFetchDetails(v);
    } else if (a === "ws-select") wsFetchDetails(act.dataset.id);
    else if (a === "ws-back") {
      clearInterval(S.ws.pipeTimer);
      S.ws.pipeTimer = 0;
      wsDlReset();
      S.ws.detail = null;
      S.ws.error = null;
      S.ws.actionError = null;
      S.ws.report = null;
      S.ws.download = null;
      renderView();
    } else if (a === "ws-download") wsDownload(act.dataset.id);
    else if (a === "ws-analyze") wsAnalyze(act.dataset.id);
    else if (a === "ws-refresh") {
      wsFetchDetails(act.dataset.id, true);
      toast("Refreshing metadata from Steam…");
    } else if (a === "ws-set-dir") {
      const v = $("#wsDirInput").value.trim();
      if (!v) {
        toast("Enter a folder path", "warn");
        return;
      }
      setWorkshopDir(v);
    } else if (a === "ws-open-folder") wsOpenFolder();
    else if (a === "ws-clear-dir") {
      setWorkshopDir(null, true);
    } else if (a === "ws-pause-dl") {
      wsPauseDownload(act.dataset.id);
    } else if (a === "ws-resume-dl") {
      wsResumeDownload(act.dataset.id);
    } else if (a === "ws-cancel-dl") {
      wsCancelDownload();
    } else if (a === "ws-dismiss-err") {
      S.ws.actionError = null;
      renderView();
    } else if (a === "ws-copy-report") {
      if (S.ws.report?.text)
        navigator.clipboard
          ?.writeText(S.ws.report.text)
          .then(() => toast("Mod Report copied to clipboard"))
          .catch(() => toast("Copy blocked by browser", "warn"));
    } else if (a === "ws-toggle-report") {
      const body = $("#wsReportBody"),
        btn = $("#wsToggleBtn");
      if (!body || !btn) return;
      const open = body.classList.toggle("expand");
      btn.textContent = open ? "Show less" : "Show more";
    } else if (a === "ws-desc-toggle") {
      const body = $("#wsDesc"),
        btn = $("#wsDescToggle");
      if (!body) return;
      const open = body.classList.toggle("expand");
      if (btn) btn.textContent = open ? "Show less" : "Show full description";
    } else if (a === "inst-detect") instDetect();
    else if (a === "inst-open-mods") instOpenMods();
    else if (a === "inst-set-mods") {
      const el = $("#instModsEdit");
      if (el) el.style.display = el.style.display === "none" ? "" : "none";
    } else if (a === "inst-save-mods") {
      const v = $("#instModsInput") && $("#instModsInput").value.trim();
      if (!v) {
        toast("Enter an absolute folder path", "warn");
        return;
      }
      instSetModsDir(v);
    } else if (a === "inst-clear-mods") instSetModsDir(null, true);
    else if (a === "inst-browse-zip") {
      const i = $("#instZipInput");
      if (i) i.click();
    } else if (a === "inst-browse-folder") {
      const i = $("#instFolderInput");
      if (i) i.click();
    } else if (a === "inst-toggle-overwrite") {
      S.inst.overwrite = !S.inst.overwrite;
      const sw = act.closest(".switch");
      if (sw) sw.setAttribute("aria-checked", String(S.inst.overwrite));
    } else if (a === "inst-clear-items") {
      S.inst.items = [];
      S.inst.last = null;
      instRender();
    } else if (a === "open-term") openTerminal();
    else if (a === "clear-logs") {
      S.logs = [];
      S.methodById.clear();
      S.reqAt.clear();
      renderAllLogs();
      toast("Local wire log cleared");
    } else if (a === "restart") restartServer();
    else if (a === "shutdown") shutdownDeck();
    else if (a === "reconnect") handshake().catch(() => setConn("offline"));
    else if (a === "copy-script") {
      if (S.lastResult?.script)
        navigator.clipboard
          ?.writeText(S.lastResult.script)
          .then(() => toast("Script copied to clipboard"))
          .catch(() => toast("Copy blocked by browser", "warn"));
    } else if (a === "to-validate") {
      if (S.lastResult?.script) sendToValidate(S.lastResult.script);
    } else if (a === "inspect-raw") {
      if (S.lastResult?.reply)
        openTerminal({
          dir: "res",
          method: "tools/call · " + S.lastResult.name,
          t: Date.now(),
          msg: S.lastResult.reply,
        });
    } else if (a === "close-result") {
      const c = $("#resultCard");
      if (c) c.style.display = "none";
    } else if (a === "diag-open") {
      const line = parseInt(act.dataset.line, 10);
      if (line > 0) showDiagLineViewer(line);
    } else if (a === "close-diag-modal") {
      const m = act.closest(".diag-modal");
      if (m) m.remove();
    } else if (a === "go-tool") {
      switchView("playground");
      setTimeout(() => {
        if (S.openTool !== act.dataset.tool) toggleTool(act.dataset.tool);
        const el = $("#tool-" + CSS.escape(act.dataset.tool));
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    } else if (a === "autoscroll") {
      S.settings.autoScroll = !S.settings.autoScroll;
      act.classList.toggle("on", S.settings.autoScroll);
      act.setAttribute("aria-pressed", String(S.settings.autoScroll));
      saveSettings();
      const body = $("#logBody");
      if (body && S.settings.autoScroll) body.scrollTop = body.scrollHeight;
    } else if (a === "swatch") applyAccent(act.dataset.color);
    else if (a === "set-switch") {
      const key = act.dataset.key;
      S.settings[key] = !S.settings[key];
      act.setAttribute("aria-checked", String(S.settings[key]));
      saveSettings();
      if (key === "reduceMotion")
        document.documentElement.classList.toggle(
          "rm",
          S.settings.reduceMotion,
        );
      if (key === "follow") {
        const fb = $("#termFollow");
        if (fb) {
          fb.classList.toggle("on", S.settings.follow);
          fb.setAttribute("aria-pressed", String(S.settings.follow));
        }
      }
    } else if (a === "chain-run") chainRun();
    else if (a === "chain-chip" || a === "chain-sugg" || a === "chain-conf")
      chainRun(act.dataset.id);
    else if (a === "chain-sel") {
      const f = S.chain.fsOpen ? $("#chainFsSeed") : $("#chainSeed");
      if (f) f.value = act.dataset.id;
      chainDropClose();
      chainRun(act.dataset.id);
    } else if (a === "chain-dir") {
      S.chain.direction = act.dataset.v;
      $$(".chain-seg button").forEach((b) =>
        b.classList.toggle("on", b.dataset.v === S.chain.direction),
      );
      if (S.chain.seed) chainRun();
    } else if (a === "chain-conflicts") chainConflicts();
    else if (a === "chain-conf-clear") {
      S.chain.conflicts = null;
      renderChain();
    } else if (a === "chain-node") {
      S.chain.insp = act.dataset.id;
      chainInspPaint();
      chainMarkSel(act.dataset.id);
    } else if (a === "chain-insp-close") {
      S.chain.insp = null;
      chainInspPaint();
      chainMarkSel(null);
    } else if (a === "chain-root") chainRun(act.dataset.id);
    else if (a === "chain-copy-id") {
      navigator.clipboard
        ?.writeText(act.dataset.id)
        .then(() => toast("Copied " + act.dataset.id))
        .catch(() => toast("Copy blocked by browser", "warn"));
    } else if (a === "chain-copy-json") {
      const n =
        S.chain.graph &&
        S.chain.graph.nodes.find((x) => x.id === act.dataset.id);
      if (n)
        navigator.clipboard
          ?.writeText(JSON.stringify(n, null, 2))
          .then(() => toast("Node JSON copied"))
          .catch(() => toast("Copy blocked by browser", "warn"));
      else toast("Node data not available", "warn");
    } else if (a === "chain-more") {
      S.chain.expLayers[act.dataset.key] = true;
      chainPaint();
    } // keep the user's zoom/pan; canvas grows via chainApplyGeometry
    else if (a === "chain-less") {
      delete S.chain.expLayers[act.dataset.key];
      chainPaint();
      chainFitAnim();
    } // re-collapse an expanded column (back to pill/cap)
    else if (a === "chain-zoomin") chainZoom(1.25);
    else if (a === "chain-zoomout") chainZoom(0.8);
    else if (a === "chain-fit") chainFitAnim();
    else if (a === "chain-full" || a === "chain-fs-close") chainFsClose();
    else if (a === "chain-fs-open") chainOpenFs();
    else if (a === "chain-dense") {
      S.chain.dense = !S.chain.dense;
      if (S.chain.fsOpen) chainFsPaint();
      else renderChain();
    } else if (a === "chain-collapse") {
      const id = act.dataset.id;
      if (S.chain.collapsed[id]) delete S.chain.collapsed[id];
      else S.chain.collapsed[id] = true;
      S.chain.insp = null;
      S.chain.layout = chainLayout();
      chainPaint();
      chainMarkSel(null);
      chainFitAnim();
    } else if (a === "chain-expand") chainExpand(act.dataset.id);
    else if (a === "chain-path-go") chainPathGo();
    else if (a === "chain-path-hop") {
      S.chain.insp = act.dataset.id;
      chainInspPaint();
      chainMarkSel(act.dataset.id);
    } else if (a === "chain-path-clear") {
      if (S.chain.pathStash) {
        S.chain.graph = S.chain.pathStash;
        S.chain.layout = chainLayout();
      }
      S.chain.path = null;
      S.chain.pathFound = null;
      S.chain.pathStash = null;
      renderChain();
      toast("Back to full graph");
    } else if (a === "chain-hl-clear") {
      const f = $("#chainHighlight");
      if (f) f.value = "";
      S.chain.highlight = "";
      chainPaint();
    } else if (a === "chain-back") chainBack();
    else if (a === "chain-fwd") chainFwd();
    else if (a === "chain-cyc-toggle") {
      S.chain.cycOpen = !S.chain.cycOpen;
      renderChain();
    } else if (a === "chain-cyc-close") {
      S.chain.cycOpen = false;
      renderChain();
    } else if (a === "chain-export-md") chainExportMd();
    else if (a === "chain-export-svg") chainExportSvg();
    return;
  }
  if (t.id === "helpModal") {
    closeHelp();
    return;
  }
  if (t.id === "guideModal") {
    closeGuide();
    return;
  }
  const sw = walkUp(t, ".switch");
  if (sw && sw.id.startsWith("pf-") && sw.closest(".tool")) {
    const on = sw.getAttribute("aria-checked") !== "true";
    sw.setAttribute("aria-checked", String(on));
    const m = /^pf-(.+)-([^-]+)$/.exec(sw.id);
    if (m) {
      S.pg.values[m[1]] = S.pg.values[m[1]] || {};
      S.pg.values[m[1]][m[2]] = on;
      syncToolValidation(m[1]);
    }
    return;
  }
  const line = walkUp(t, ".log-line");
  if (line) openLogEntry(line.dataset.id);
});
document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.id === "chainSeed" || t.id === "chainFsSeed") {
    chainSeedType(t);
  } else if (t.id === "chainHighlight" || t.id === "chainFsHighlight") {
    chainHighlightApply();
  } else if (t.id === "chainPathTarget") {
    S.chain.pathTarget = t.value.trim();
  } else if (t.id === "chainFsDepth") {
    const c = S.chain;
    c.depth = parseInt(t.value, 10) || 2;
    clearTimeout(c.depthTimer);
    c.depthTimer = setTimeout(() => {
      if (c.seed) chainRun();
    }, 500);
    return;
  } else if (t.id === "chainFsCap") {
    const c = S.chain;
    c.cap = parseInt(t.value, 10) || 14;
    clearTimeout(c._capTimer);
    c._capTimer = setTimeout(() => {
      if (c.fsOpen) chainFsPaint();
    }, 120);
    return;
  } else if (t.id === "chainDepth") {
    const c = S.chain;
    c.depth = parseInt(t.value, 10) || 2;
    const dv = $("#chainDepthVal");
    if (dv) dv.textContent = c.depth;
    clearTimeout(c.depthTimer);
    c.depthTimer = setTimeout(() => {
      if (c.seed) chainRun();
    }, 500);
    return;
  }
  if (t.id && t.id.startsWith("pf-")) {
    const m = /^pf-(.+)-([^-]+)$/.exec(t.id);
    if (m) {
      S.pg.values[m[1]] = S.pg.values[m[1]] || {};
      S.pg.values[m[1]][m[2]] = t.value;
      syncToolValidation(m[1]);
    }
  }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.id === "accentPicker") {
    applyAccent(t.value);
    toast("Custom accent applied");
    return;
  }
  if (t.id === "pgToolSelect") {
    S.pg.tool = t.value || null;
    S.pg._sel = true;
    renderSingleTool();
    return;
  }
  if (t.id && t.id.startsWith("pf-")) {
    const m = /^pf-(.+)-([^-]+)$/.exec(t.id);
    if (m) {
      S.pg.values[m[1]] = S.pg.values[m[1]] || {};
      S.pg.values[m[1]][m[2]] = t.value;
      syncToolValidation(m[1]);
    }
  }
});
/* Playground panel resizers — drag the pill to resize the wire log body
   (#logBody) or the recent-runs card (#recentCard). Pointer-capture drag,
   clamped to sane bounds, persisted to localStorage so sizes survive reloads. */
document.addEventListener("pointerdown", (e) => {
  const h = e.target.closest(".rsz");
  if (!h) return;
  const which = h.dataset.rsz;
  const el = which === "wire" ? $("#logBody") : $("#recentCard");
  if (!el || el.offsetHeight === 0) return;
  e.preventDefault();
  h.setPointerCapture(e.pointerId);
  const startY = e.clientY,
    startH = el.offsetHeight;
  const min = which === "wire" ? 80 : 60;
  const max = Math.round(innerHeight * (which === "wire" ? 0.6 : 0.55));
  h.classList.add("dragging");
  document.body.classList.add("rsz-dragging");
  const onMove = (ev) => {
    const px = clamp(startH + (ev.clientY - startY), min, max);
    el.style.height = px + "px";
    if (which === "recent") el.style.maxHeight = px + "px";
  };
  const end = () => {
    h.classList.remove("dragging");
    document.body.classList.remove("rsz-dragging");
    h.removeEventListener("pointermove", onMove);
    h.removeEventListener("pointerup", end);
    try {
      localStorage.setItem(
        "pz.pg." + (which === "wire" ? "logH" : "recentH"),
        String(parseFloat(el.style.height)),
      );
    } catch {}
  };
  h.addEventListener("pointermove", onMove);
  h.addEventListener("pointerup", end);
});
document.addEventListener("keydown", (e) => {
  // Modal focus trap: keep Tab/Shift+Tab cycling inside an open help/guide
  // dialog so keyboard users can't tab out into the page behind it.
  const openModal = $("#helpModal").classList.contains("open")
    ? $("#helpModal")
    : $("#guideModal").classList.contains("open")
      ? $("#guideModal")
      : null;
  if (openModal && e.key === "Tab") {
    const f = openModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (f.length) {
      const first = f[0],
        last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    return;
  }
  // Escape always exits chain fullscreen first — even when an input is focused.
  if (e.key === "Escape" && S.chain.fsOpen) {
    chainFsClose();
    return;
  }
  if (e.key === "Escape") hideToolTip();
  const inField = walkUp(e.target, "input,textarea,select,[contenteditable]");
  if (inField) {
    if (e.key === "Enter" && inField.id === "dbQuery") {
      e.preventDefault();
      dbSearch();
    } else if (e.key === "Enter" && inField.id === "kbQuery") {
      e.preventDefault();
      kbDbSearch();
    } else if (e.key === "Enter" && inField.id === "wsQuery") {
      e.preventDefault();
      wsSearch();
    } else if (e.key === "Enter" && inField.id === "wsId") {
      e.preventDefault();
      wsFetchDetails(inField.value.trim());
    } else if (inField.id === "chainSeed") {
      const d = $("#chainDrop");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (d && !d.hidden) {
          e.preventDefault();
          const n = $$(".chain-drop-item", d).length;
          if (n)
            chainDropHighlight(
              e.key === "ArrowDown"
                ? (S.chain.dropIdx + 1) % n
                : (S.chain.dropIdx - 1 + n) % n,
            );
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const items = d && !d.hidden ? $$(".chain-drop-item", d) : [];
        // Only an explicit arrow selection hijacks Enter; otherwise run the
        // exact typed seed (recipe-chain review: no surprise autocomplete).
        const pick =
          S.chain.dropIdx >= 0 && items[S.chain.dropIdx]
            ? items[S.chain.dropIdx]
            : null;
        if (pick) {
          const f = $("#chainSeed");
          if (f) f.value = pick.dataset.id;
          chainRun(pick.dataset.id);
        } else chainRun();
      } else if (e.key === "Escape") chainDropClose();
    } else if (
      e.key === "Enter" &&
      inField.id &&
      inField.id.startsWith("pf-")
    ) {
      if (inField.tagName === "TEXTAREA" && !e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const toolEl = walkUp(inField, ".tool");
      if (toolEl) runTool(toolEl.dataset.tool);
    } else if (e.key === "Enter" && inField.id === "chainPathTarget") {
      e.preventDefault();
      chainPathGo();
    }
    return;
  }
  if (e.key === "Escape") {
    const d = $("#chainDrop");
    if (d && !d.hidden) {
      chainDropClose();
      return;
    }
  }
  if (e.key === "Escape" && term.open) {
    closeTerminal();
    return;
  }
  if (e.key === "Escape" && $("#helpModal").classList.contains("open")) {
    closeHelp();
    return;
  }
  if (e.key === "Escape" && $("#guideModal").classList.contains("open")) {
    closeGuide();
    return;
  }
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key.toLowerCase();
  // Fullscreen graph keys: arrows pan, +/− zoom, 0 fit (only when no input is
  // focused — the inField guard above already returned for those).
  if (S.chain.fsOpen && S.chain.layout) {
    const step = 56 / S.chain.zoom;
    if (k === "arrowleft") {
      S.chain.pan.x += step;
      chainClampPan();
      chainApplyTransform();
      return;
    }
    if (k === "arrowright") {
      S.chain.pan.x -= step;
      chainClampPan();
      chainApplyTransform();
      return;
    }
    if (k === "arrowup") {
      S.chain.pan.y += step;
      chainClampPan();
      chainApplyTransform();
      return;
    }
    if (k === "arrowdown") {
      S.chain.pan.y -= step;
      chainClampPan();
      chainApplyTransform();
      return;
    }
    if (k === "+" || k === "=") {
      e.preventDefault();
      chainZoomAnim(S.chain.zoom * 1.25);
      return;
    }
    if (k === "-") {
      e.preventDefault();
      chainZoomAnim(S.chain.zoom * 0.8);
      return;
    }
    if (k === "0") {
      e.preventDefault();
      chainFitAnim();
      return;
    }
  }
  if (k >= "1" && k <= "8") switchView(VIEWS[parseInt(k, 10) - 1]);
  else if (k === "t") {
    e.preventDefault();
    term.open ? closeTerminal() : openTerminal();
  }
});
$("#tabbar").addEventListener("keydown", (e) => {
  const idx = VIEWS.indexOf(S.view);
  let next = null;
  if (e.key === "ArrowRight" || e.key === "ArrowDown")
    next = VIEWS[(idx + 1) % VIEWS.length];
  else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
    next = VIEWS[(idx - 1 + VIEWS.length) % VIEWS.length];
  else if (e.key === "Home") next = VIEWS[0];
  else if (e.key === "End") next = VIEWS[VIEWS.length - 1];
  else return;
  e.preventDefault();
  switchView(next);
  $("#tab-" + next).focus();
});

/* ==================== BOOT ==================== */
function boot() {
  loadSettings();
  loadCardStates();
  try {
    Object.assign(
      S.pg.cats,
      JSON.parse(localStorage.getItem("pzdeck.pgcats") || "{}"),
    );
  } catch {}
  applyAccent(S.settings.accent);
  if (S.settings.reduceMotion) document.documentElement.classList.add("rm");
  bindTerminal();
  connectEvents();
  renderView();
  moveIndicator();
  $("#btnTermTop").addEventListener("click", () => openTerminal());
  const shutdownBtn = $("#btnShutdown");
  if (shutdownBtn) shutdownBtn.addEventListener("click", () => shutdownDeck());
  handshake().catch(() => setConn("offline"));
  setInterval(() => {
    // Never reconnect after a user-initiated shutdown — the program is closed.
    if (!S.shuttingDown && !S.handshaken && S.conn === "offline")
      handshake().catch(() => {});
  }, 5000);
  addEventListener("resize", () => {
    moveIndicator();
    if (S.chain.fsOpen) chainFsResize();
    if (term.open && !term.max) {
      term.x = clamp(term.x, -term.w + 80, innerWidth - 80);
      term.y = clamp(term.y, 0, innerHeight - 56);
      termApply();
    }
  });
  // Scroll perf: tag <html> while ANYTHING scrolls (capture phase catches inner
  // scrollers — wire log, server log, modals, terminal — not just the page) so
  // the ambient background animations (blob drift, shimmer, pulses) pause on the
  // compositor, freeing GPU bandwidth for the scroll painting itself.
  let _scrollPauseT = 0;
  document.addEventListener(
    "scroll",
    () => {
      const de = document.documentElement;
      if (!de.classList.contains("scrolling")) de.classList.add("scrolling");
      clearTimeout(_scrollPauseT);
      _scrollPauseT = setTimeout(() => de.classList.remove("scrolling"), 150);
    },
    { capture: true, passive: true },
  );
  // Real fullscreen (requestFullscreen): exiting via Esc/button/OS returns the
  // graph to the launcher card automatically.
  document.addEventListener("fullscreenchange", () => {
    // Entering: the viewport just resized — re-fit once the layout settles.
    if (
      document.fullscreenElement &&
      document.fullscreenElement.id === "chainFs"
    ) {
      requestAnimationFrame(() => {
        if (S.chain.fsOpen) chainFsResize();
      });
    }
    // Exiting (Esc/button/OS): back to the launcher card.
    else if (!document.fullscreenElement && S.chain.fsOpen) chainFsCleanup();
  });
}
boot();
/* ==================== MOD INSTALLER ====================
 * Smart path detection (detect_pz_paths) + drag&drop / browse installs.
 * The browser cannot hand absolute paths to the MCP server, so a dropped zip
 * is streamed to the bridge (data/uploads) and a dropped folder is walked +
 * uploaded file-by-file with relative paths; install_mod then does the real
 * work (scan, conflict check, copy) on the local path. Uploads are cleaned up
 * after each run.
 */
function instDetectRows() {
  const d = S.inst.detected;
  if (!d)
    return '<div class="tcap">Not detected yet — press <b>Detect paths</b> (or it runs automatically the first time you open this tab).</div>';
  const gi = d.gameInstall && d.gameInstall.path;
  const ws = d.workshopDir && d.workshopDir.path;
  const rows = [
    [
      "Game install",
      gi || "(not found)",
      gi ? "b-ok" : "b-warn",
      gi ? "via " + d.gameInstall.source : "set PROJECTZOMBOID_PATH / PZ_PATH",
    ],
    [
      "User data dir",
      d.userDataDir.path,
      d.userDataDir.exists ? "b-ok" : "b-dim",
      d.userDataDir.exists ? "exists" : "not created yet",
    ],
    [
      "Mods dir",
      d.modsDir.path,
      d.modsDir.writable === false
        ? "b-err"
        : d.modsDir.exists
          ? "b-ok"
          : "b-info",
      d.modsDir.writable === false
        ? "NOT writable"
        : d.modsDir.exists
          ? "writable"
          : "created on first install",
    ],
    [
      "Workshop dir",
      ws || "(not found)",
      d.workshopDir && d.workshopDir.exists ? "b-ok" : "b-dim",
      d.workshopDir && d.workshopDir.exists ? "exists" : "",
    ],
    ["Platform", d.platform, "b-info", ""],
  ];
  return (
    "<div>" +
    rows
      .map(
        (r) =>
          '<div class="krow" style="gap:12px;min-height:40px"><span class="k" style="flex:none">' +
          r[0] +
          "</span>" +
          '<span class="v" style="max-width:none;text-align:left;flex:1;overflow-wrap:anywhere">' +
          esc(r[1]) +
          "</span>" +
          '<span class="badge ' +
          r[2] +
          '" style="flex:none">' +
          esc(r[3] || "") +
          "</span></div>",
      )
      .join("") +
    "</div>"
  );
}
function installerHTML() {
  const prefill =
    S.inst.detected && S.inst.detected.modsDir
      ? S.inst.detected.modsDir.path
      : "";
  return (
    '<div class="inst-grid">' +
    '<section class="glass card panel-card" style="min-width:0">' +
    "<h3>" +
    ICONS.scan +
    ' PZ path detection <span class="badge b-dim" style="margin-left:auto;font-family:var(--font-mono)" id="instBusyBadge">' +
    esc(S.inst.busy ? "detecting…" : "auto") +
    "</span></h3>" +
    '<div id="instDetectBody">' +
    instDetectRows() +
    "</div>" +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">' +
    '<button class="btn primary" data-act="inst-detect"' +
    (S.inst.busy ? " disabled" : "") +
    ">" +
    ICONS.scan +
    " Detect paths</button>" +
    '<button class="btn" data-act="inst-open-mods">' +
    ICONS.folder +
    " Open mods folder</button>" +
    '<span style="flex:1"></span>' +
    '<button class="btn sm ghost" data-act="inst-set-mods" style="border:1px solid var(--stroke)">Set mods folder…</button>' +
    "</div>" +
    '<div class="inst-edit" id="instModsEdit" style="display:none;margin-top:14px">' +
    '<div class="f-label">Mods directory override (PZ_MODS_DIR)</div>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    '<input class="field" id="instModsInput" style="flex:1;min-width:260px" placeholder="C:/Users/you/Zomboid/mods" value="' +
    esc(prefill) +
    '" />' +
    '<button class="btn" data-act="inst-save-mods">Save &amp; restart</button>' +
    '<button class="btn ghost" data-act="inst-clear-mods">Reset</button>' +
    "</div>" +
    '<div class="f-hint">Saved per machine; the server restarts with PZ_MODS_DIR set. Clear to auto-detect <home>/Zomboid/mods.</div>' +
    "</div>" +
    "</section>" +
    '<section class="glass card panel-card" style="min-width:0">' +
    "<h3>" +
    ICONS.download +
    ' Install mods <span class="badge b-dim" style="margin-left:auto">.zip or folder</span></h3>' +
    '<div id="instDrop" class="dropzone">' +
    '<div class="dz-ic">' +
    ICONS.download +
    "</div>" +
    '<div class="dz-title">Drag &amp; drop mods here</div>' +
    '<div class="dz-sub">.zip archives or whole mod folders — single or multiple. Uploaded to the local bridge only, never sent anywhere.</div>' +
    '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px">' +
    '<button class="btn" data-act="inst-browse-zip">' +
    ICONS.doc +
    " Browse .zip…</button>" +
    '<button class="btn" data-act="inst-browse-folder">' +
    ICONS.folder +
    " Browse folder…</button>" +
    "</div>" +
    "</div>" +
    '<div style="display:flex;align-items:center;gap:10px;margin-top:14px;flex-wrap:wrap">' +
    '<button class="switch" role="switch" aria-checked="' +
    S.inst.overwrite +
    '" data-act="inst-toggle-overwrite" aria-label="Overwrite conflicting mods" title="When a mod with the same id/folder is already installed: skip (off) or replace (on)"><span class="trk"></span><span class="knb"></span></button>' +
    '<span style="font-size:13px">Overwrite conflicting mods</span>' +
    '<span class="f-hint" style="margin:0">off: conflicts are skipped &amp; reported</span>' +
    '<span style="flex:1"></span>' +
    (S.inst.items.length
      ? '<button class="btn sm ghost" data-act="inst-clear-items">' +
        ICONS.x +
        " Clear list</button>"
      : "") +
    "</div>" +
    '<div id="instItems" style="display:flex;flex-direction:column;gap:10px;margin-top:12px">' +
    (S.inst.items.length
      ? S.inst.items.map(instItemRow).join("")
      : '<div class="tcap">Nothing yet — drop mods above, or use Browse.</div>') +
    "</div>" +
    "</section>" +
    '<section class="glass card panel-card" id="instResultCard" style="display:none;min-width:0">' +
    "<h3>" +
    ICONS.check +
    " Last install result</h3>" +
    '<div id="instResultBody"></div>' +
    "</section>" +
    '<input type="file" id="instZipInput" accept=".zip,application/zip" style="display:none" />' +
    '<input type="file" id="instFolderInput" webkitdirectory directory style="display:none" />' +
    "</div>"
  );
}
function initInstallerView() {
  if (!S.inst._autodone && !S.inst.busy && !S.inst.detected) instDetect();
  const drop = $("#instDrop");
  if (drop) {
    drop.addEventListener("dragenter", (e) => {
      e.preventDefault();
      drop.classList.add("drag");
    });
    drop.addEventListener("dragover", (e) => {
      e.preventDefault();
      drop.classList.add("drag");
    });
    drop.addEventListener("dragleave", (e) => {
      e.preventDefault();
      drop.classList.remove("drag");
    });
    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("drag");
      instHandleDrop(e);
    });
  }
  const zi = $("#instZipInput");
  if (zi)
    zi.addEventListener("change", () => {
      if (zi.files && zi.files[0]) instAddFile(zi.files[0]);
      zi.value = "";
    });
  const fi = $("#instFolderInput");
  if (fi)
    fi.addEventListener("change", () => {
      if (fi.files && fi.files.length) instAddFolderFiles(Array.from(fi.files));
      fi.value = "";
    });
  instRender();
}
function instRender() {
  const det = $("#instDetectBody");
  if (det) det.innerHTML = instDetectRows();
  const busy = $("#instBusyBadge");
  if (busy) busy.textContent = S.inst.busy ? "detecting…" : "auto";
  const items = $("#instItems");
  if (items)
    items.innerHTML = S.inst.items.length
      ? S.inst.items.map(instItemRow).join("")
      : '<div class="tcap">Nothing yet — drop mods above, or use Browse.</div>';
  const rc = $("#instResultCard"),
    rb = $("#instResultBody");
  if (rc && rb) {
    if (S.inst.last) {
      rc.style.display = "";
      rb.innerHTML = instResultHTML(S.inst.last);
    } else rc.style.display = "none";
  }
}
async function instDetect() {
  S.inst.busy = true;
  S.inst._autodone = true;
  instRender();
  try {
    const reply = await rpc("tools/call", {
      name: "detect_pz_paths",
      arguments: {},
    });
    S.inst.detected = (reply.result && reply.result.structuredContent) || null;
    const md = $("#instModsInput");
    if (md && S.inst.detected) md.value = S.inst.detected.modsDir.path || "";
  } catch (err) {
    toast("Detection failed: " + String((err && err.message) || err), "warn");
  }
  S.inst.busy = false;
  instRender();
}
async function instOpenMods() {
  let d = {};
  try {
    const r = await fetch("/api/open-mods-dir", { method: "POST" });
    d = await r.json().catch(() => ({}));
  } catch {
    toast("Bridge unreachable", "warn");
    return;
  }
  if (!d.ok) {
    toast(d.error || "Could not open the mods folder", "warn");
    return;
  }
  toast("Opened " + d.path, "check");
}
async function instSetModsDir(path, clear) {
  let d = {};
  try {
    const r = await fetch("/api/mods-dir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clear ? { clear: true } : { path }),
    });
    d = await r.json().catch(() => ({}));
  } catch {
    toast("Bridge unreachable", "warn");
    return;
  }
  if (!d.ok) {
    toast(d.error || "Could not save the folder", "warn");
    return;
  }
  S.handshaken = false;
  setConn("connecting");
  toast(
    clear
      ? "Mods folder reset to auto-detect — respawning…"
      : "Mods folder saved — respawning server…",
    "check",
  );
  setTimeout(() => handshake().catch(() => setConn("offline")), 2500);
}
function instHandleDrop(e) {
  const items =
    e.dataTransfer && e.dataTransfer.items
      ? Array.from(e.dataTransfer.items)
      : [];
  let handled = 0;
  for (const it of items) {
    const entry = it.webkitGetAsEntry ? it.webkitGetAsEntry() : null;
    if (!entry) {
      const f = it.kind === "file" ? it.getAsFile() : null;
      if (f) {
        instAddFile(f);
        handled++;
      }
      continue;
    }
    handled++;
    if (entry.isFile) {
      if (/\.zip$/i.test(entry.name)) instAddFileEntry(entry);
      else
        toast(
          'Only .zip files or folders can be installed — got "' +
            entry.name +
            '"',
          "warn",
        );
    } else instAddFolderEntry(entry);
  }
  if (!handled && e.dataTransfer && e.dataTransfer.files) {
    for (const f of e.dataTransfer.files)
      if (/^\.zip$/i.test(f.name)) instAddFile(f);
  }
}
async function instAddFileEntry(entry) {
  try {
    instAddFile(await new Promise((res, rej) => entry.file(res, rej)));
  } catch (err) {
    toast(
      "Could not read dropped file: " + String((err && err.message) || err),
      "warn",
    );
  }
}
function instAddFile(file) {
  const item = {
    id: "it" + Date.now() + Math.random().toString(36).slice(2, 7),
    name: file.name,
    kind: "zip",
    state: "uploading",
    size: file.size,
    rootPath: null,
  };
  S.inst.items.push(item);
  instRender();
  instUploadZip(file, item);
}
async function instUploadZip(file, item) {
  try {
    const r = await fetch(
      "/api/mod-source/zip?name=" + encodeURIComponent(file.name),
      { method: "POST", body: file },
    );
    const d = await r.json().catch(() => ({}));
    if (!d.ok) throw new Error(d.error || "upload failed");
    item.rootPath = d.path;
    item.state = "installing";
    instRender();
    await instRun(item.rootPath, item);
  } catch (err) {
    item.state = "error";
    item.detail = String((err && err.message) || err);
    instRender();
    toast("Upload failed: " + item.detail, "warn");
    instFailCleanup(item);
  }
}
function instAddFolderFiles(files) {
  const rels = files.map((f) => f.webkitRelativePath || f.name);
  const root = (rels[0] || "folder").split("/")[0];
  const item = {
    id: "it" + Date.now() + Math.random().toString(36).slice(2, 7),
    name: root,
    kind: "folder",
    state: "uploading",
    filesTotal: files.length,
    filesDone: 0,
    batch: root + "-" + Date.now(),
    rootPath: null,
  };
  S.inst.items.push(item);
  instRender();
  instUploadFolderFiles(item, files, rels);
}
async function instAddFolderEntry(entry) {
  const out = [];
  try {
    await instWalkEntry(entry, out, "");
  } catch (err) {
    toast(
      "Could not read folder: " + String((err && err.message) || err),
      "warn",
    );
    return;
  }
  if (!out.length) {
    toast("Folder is empty: " + entry.name, "warn");
    return;
  }
  const item = {
    id: "it" + Date.now() + Math.random().toString(36).slice(2, 7),
    name: entry.name,
    kind: "folder",
    state: "uploading",
    filesTotal: out.length,
    filesDone: 0,
    batch: entry.name + "-" + Date.now(),
    rootPath: null,
  };
  S.inst.items.push(item);
  instRender();
  await instUploadFolderFiles(
    item,
    out.map((o) => o.file),
    out.map((o) => o.rel),
  );
}
async function instWalkEntry(entry, out, prefix) {
  if (entry.isFile) {
    const f = await new Promise((res, rej) => entry.file(res, rej));
    out.push({ rel: prefix ? prefix + "/" + f.name : f.name, file: f });
    return;
  }
  const reader = entry.createReader();
  const nextPrefix = prefix ? prefix + "/" + entry.name : entry.name;
  for (;;) {
    const batch = await new Promise((res, rej) => reader.readEntries(res, rej));
    if (!batch || !batch.length) break;
    for (const e of batch) await instWalkEntry(e, out, nextPrefix);
  }
}
async function instUploadFolderFiles(item, files, rels) {
  try {
    for (let i = 0; i < files.length; i++) {
      const r = await fetch(
        "/api/mod-source/folder?batch=" +
          encodeURIComponent(item.batch) +
          "&rel=" +
          encodeURIComponent(rels[i]),
        { method: "POST", body: files[i] },
      );
      const d = await r.json().catch(() => ({}));
      if (!d.ok) throw new Error(d.error || "upload failed");
      item.rootPath = item.rootPath || d.path;
      item.filesDone = i + 1;
      instRender();
    }
    item.state = "installing";
    instRender();
    await instRun(item.rootPath, item);
  } catch (err) {
    item.state = "error";
    item.detail = String((err && err.message) || err);
    instRender();
    toast("Folder upload failed: " + item.detail, "warn");
    instFailCleanup(item);
  }
}
async function instRun(source, item) {
  try {
    const reply = await rpc("tools/call", {
      name: "install_mod",
      arguments: { source, overwrite: S.inst.overwrite },
    });
    const sc = reply.result && reply.result.structuredContent;
    item.state = "done";
    item.result = sc || {};
    item.detail =
      (reply.result &&
        reply.result.content &&
        reply.result.content[0] &&
        reply.result.content[0].text) ||
      "";
    S.inst.last = item.result;
    instRender();
  } catch (err) {
    item.state = "error";
    item.detail = String((err && err.message) || err);
    instRender();
  }
  instCleanup(source);
}
async function instCleanup(path) {
  try {
    await fetch("/api/mod-source/cleanup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    });
  } catch {
    /* */
  }
}
function instItemRow(item) {
  let right;
  if (item.state === "uploading")
    right =
      '<span class="spinner"></span><span class="inst-phase">uploading…' +
      (item.filesTotal
        ? " " + item.filesDone + "/" + item.filesTotal + " files"
        : "") +
      "</span>";
  else if (item.state === "installing")
    right =
      '<span class="spinner"></span><span class="inst-phase">installing…</span>';
  else if (item.state === "done") {
    const mods = item.result && item.result.mods ? item.result.mods : [];
    const ok = mods.filter((m) => m.status === "installed").length;
    const skip = mods.filter((m) => m.status === "skipped").length;
    const err = mods.filter((m) => m.status === "error").length;
    right =
      (ok ? '<span class="badge b-ok">' + ok + " installed</span>" : "") +
      (skip ? '<span class="badge b-warn">' + skip + " skipped</span>" : "") +
      (err ? '<span class="badge b-err">' + err + " failed</span>" : "");
    if (!right) right = '<span class="badge b-dim">done</span>';
  } else right = '<span class="badge b-err">error</span>';
  return (
    '<div class="inst-item">' +
    '<span class="inst-ic">' +
    (item.kind === "zip" ? ICONS.doc : ICONS.folder) +
    "</span>" +
    '<div style="min-width:0;flex:1"><div class="inst-name">' +
    esc(item.name) +
    "</div>" +
    (item.detail
      ? '<div class="inst-detail">' + esc(chop(item.detail, 240)) + "</div>"
      : "") +
    "</div>" +
    right +
    "</div>"
  );
}
function instResultHTML(r) {
  const mods = r.mods || [];
  const lines = mods
    .map((m) => {
      const id = m.modId
        ? ' <span class="mono" style="color:var(--faint)">' +
          esc(m.modId) +
          "</span>"
        : "";
      const ver = m.version
        ? ' <span class="badge b-dim">v' + esc(m.version) + "</span>"
        : "";
      let badge = '<span class="badge b-ok">installed</span>';
      if (m.status === "planned")
        badge = '<span class="badge b-info">planned</span>';
      else if (m.status === "skipped")
        badge = '<span class="badge b-warn">skipped</span>';
      else if (m.status === "error")
        badge = '<span class="badge b-err">error</span>';
      const why = m.reason
        ? '<div class="tcap">' + esc(m.reason) + "</div>"
        : "";
      return (
        '<div style="margin-top:8px"><div class="krow" style="align-items:flex-start;min-height:auto;padding:6px 2px"><span style="flex:1;min-width:0">' +
        esc(m.name) +
        id +
        ver +
        "</span>" +
        badge +
        "</div>" +
        why +
        "</div>"
      );
    })
    .join("");
  return (
    '<div class="tcap" style="margin-bottom:6px">Target: <code class="mono">' +
    esc(r.targetDir) +
    "</code> · " +
    esc(r.summary || "") +
    "</div>" +
    (lines || '<div class="tcap">No mods in result.</div>') +
    (r.warnings && r.warnings.length
      ? '<div style="margin-top:10px" class="tcap" style="color:#FCD34D">' +
        r.warnings.map((w) => "⚠ " + esc(w)).join("<br/>") +
        "</div>"
      : "")
  );
}
function instFailCleanup(item) {
  // A failed upload can leave a partial file/batch in data/uploads — free it.
  if (item && item.rootPath) instCleanup(item.rootPath);
}
/* ==================== MOD GENERATOR ====================
 * Beginner-friendly mod creation (modgen_* MCP tools).
 * Flow: pick a template → describe the mod → tune stats (auto-balanced from
 * vanilla data, or pin/roll any stat) → generate a complete ready-to-ship
 * folder with an editable blueprint → reopen / edit / regenerate anytime.
 */
function genState() {
  const g = S.gen;
  g.tpl =
    g.templates && g.template
      ? g.templates.find((t) => t.id === g.template)
      : null;
  return g;
}

function genHTML() {
  const g = genState();
  const editing = !!g.project;
  return (
    '<div class="gen-wrap">' +
    '<div class="guide-banner">' +
    '<span class="gb-ic">' +
    ICONS.spark +
    "</span>" +
    '<div class="gb-txt"><b>Create a Project Zomboid mod — no coding needed.</b><p>Pick a template, name your mod, and the server balances the stats against real vanilla game data. You get a complete, ready-to-ship mod folder you can reopen and tweak any time.</p></div>' +
    '<button class="btn ghost" data-act="gen-help" title="How the generator works">' +
    ICONS.book +
    " How it works</button>" +
    "</div>" +
    '<section class="glass card panel-card"><h3>' +
    ICONS.spark +
    ' 1 · Choose a template</h3><div id="genTpls" class="gen-tpls"></div></section>' +
    '<section class="glass card panel-card" id="genFormCard"' +
    (g.tpl ? "" : " hidden") +
    ">" +
    "<h3>" +
    ICONS.doc +
    " 2 · Describe your " +
    (g.tpl ? esc(g.tpl.label) : "mod") +
    ' <span class="badge b-dim" id="genModeBadge" style="margin-left:auto">' +
    (editing ? "editing <b>" + esc(g.project) + "</b>" : "new mod") +
    "</span></h3>" +
    '<div class="gen-basics">' +
    genBasicsHTML(g) +
    "</div>" +
    '<h3 style="margin-top:18px">' +
    ICONS.graph +
    " 3 · Tune the stats " +
    genAutoBadge(g) +
    "</h3>" +
    '<div class="gen-src-note" id="genSrcNote"></div>' +
    '<div id="genStats"></div>' +
    '<div class="gen-actions">' +
    (editing
      ? '<button class="btn primary" data-act="gen-save"' +
        (g.busy ? " disabled" : "") +
        ">" +
        ICONS.check +
        " Save changes & regenerate</button>"
      : '<button class="btn primary" data-act="gen-generate"' +
        (g.busy ? " disabled" : "") +
        ">" +
        ICONS.spark +
        " " +
        (g.busy ? "Working…" : "Generate mod") +
        "</button>") +
    '<button class="btn ghost" data-act="gen-preview"' +
    (g.busy || editing ? " disabled" : "") +
    ">" +
    ICONS.chev +
    " Preview (dry run)</button>" +
    '<button class="btn ghost" data-act="gen-new"' +
    (g.busy ? " disabled" : "") +
    ">" +
    ICONS.x +
    " Start over</button>" +
    "</div>" +
    '<div id="genErr" class="gen-err"></div>' +
    "</section>" +
    '<section class="glass card panel-card" id="genResultCard" hidden><div id="genResult"></div></section>' +
    '<section class="glass card panel-card"><h3>' +
    ICONS.folder +
    ' Your generated mods <span class="badge b-dim" style="margin-left:auto" id="genListCount"></span></h3>' +
    '<div class="tcap">Generated mods live in the workspace and keep an editable blueprint — reopen one to change stats and regenerate.</div>' +
    '<div id="genList" class="gen-list"></div>' +
    "</section>" +
    "</div>"
  );
}

function genAutoBadge(g) {
  return (
    '<span class="badge b-ok" style="margin-left:8px" title="Unpinned stats are auto-balanced against vanilla game data. Click a stat\'s auto badge to return it to auto.">⚡ auto-balance ' +
    (g.autoStats ? "on" : "off") +
    "</span>"
  );
}

function genBasicsHTML(g) {
  const m = g.mod;
  const f = (id, label, val, ph, extra) =>
    '<label class="gen-fld"><span>' +
    label +
    (extra || "") +
    '</span><input id="genb-' +
    id +
    '" data-gen-basic="' +
    id +
    '" value="' +
    esc(val || "") +
    '" placeholder="' +
    esc(ph || "") +
    '" spellcheck="false"></label>';
  return (
    f("modName", "Mod name *", m.modName, "e.g. My First Weapon") +
    f("name", "Project folder *", m.name, "e.g. MyFirstWeapon") +
    f("modId", "Mod ID *", m.modId, "e.g. my_first_weapon") +
    f("author", "Author", m.author, "Your name") +
    f("itemName", "Item ID *", m.itemName, "e.g. MyWeaponItem") +
    f(
      "displayName",
      "In-game item name",
      m.displayName,
      m.itemName || "e.g. My Weapon",
    ) +
    '<label class="gen-fld"><span>Icon sprite <em class="gen-hint" title="The default reuses a verified vanilla texture. Any other name ships a generated placeholder texture in 42/media/textures/.">?</em></span><input id="genb-icon" data-gen-basic="icon" value="' +
    esc(m.icon || "") +
    '" placeholder="' +
    esc((g.tpl && g.tpl.defaultIcon) || "Axe") +
    '" list="genIconSug" spellcheck="false"></label>' +
    (g.tpl && g.tpl.iconSuggestions && g.tpl.iconSuggestions.length
      ? '<datalist id="genIconSug">' +
        g.tpl.iconSuggestions
          .map((i) => '<option value="' + esc(i) + '"></option>')
          .join("") +
        "</datalist>"
      : "") +
    '<label class="gen-fld gen-fld-wide"><span>Description</span><input id="genb-description" data-gen-basic="description" value="' +
    esc(m.description || "") +
    '" placeholder="A short description of your mod (optional)" spellcheck="false"></label>'
  );
}

function genStatsHTML(g) {
  if (!g.tpl) return "";
  const flds = g.tpl.fields;
  const stats = g.stats;
  const vanilla = g.vanilla;
  const srcNote = g.srcNote || "";
  const noteEl = $("#genSrcNote");
  if (noteEl) noteEl.innerHTML = srcNote;
  const groups = [];
  let cur = null;
  for (const f of flds) {
    if (f.group !== cur) {
      cur = f.group;
      groups.push({ name: cur, fields: [] });
    }
    groups[groups.length - 1].fields.push(f);
  }
  return groups
    .map(
      (grp) =>
        '<div class="gen-group"><h4>' +
        esc(grp.name) +
        '</h4><div class="gen-stats">' +
        grp.fields
          .map((f) =>
            genStatRow(
              g,
              f,
              stats[f.key],
              vanilla && vanilla.ranges ? vanilla.ranges[f.key] : null,
            ),
          )
          .join("") +
        "</div></div>",
    )
    .join("");
}

function genStatRow(g, f, val, range) {
  const key = f.key;
  const pinned = !!g.pinned[key];
  const v = val === undefined || val === "" ? "" : String(val);
  const rangeTxt = range
    ? '<span class="gen-range" title="Derived from ' +
      range.count +
      ' vanilla items">vanilla ' +
      fmtN(range.p25) +
      "–" +
      fmtN(range.p75) +
      " · median " +
      fmtN(range.median) +
      " · n=" +
      range.count +
      "</span>"
    : f.auto
      ? '<span class="gen-range dim">balanced default</span>'
      : "";
  let input = "";
  if (f.kind === "number") {
    input =
      '<input type="number" data-stat="' +
      key +
      '" value="' +
      v +
      '" min="' +
      (f.min ?? "") +
      '" max="' +
      (f.max ?? "") +
      '" step="' +
      (f.step ?? (f.integer ? 1 : 0.1)) +
      '"' +
      (f.integer ? ' inputmode="numeric"' : "") +
      ">" +
      '<button class="gen-dice" data-act="gen-dice" data-key="' +
      key +
      '" title="Roll a new value ' +
      (range
        ? "inside the vanilla range " + fmtN(range.p25) + "–" + fmtN(range.p75)
        : "within a sensible range") +
      '">🎲</button>';
  } else if (f.kind === "bool") {
    input =
      '<select data-stat="' +
      key +
      '"><option value="true"' +
      (v === "true" ? " selected" : "") +
      '>true</option><option value="false"' +
      (v === "false" || !v ? " selected" : "") +
      ">false</option></select>";
  } else if (f.kind === "enum") {
    input =
      '<select data-stat="' +
      key +
      '">' +
      (f.enumValues || [])
        .map(
          (ev) =>
            '<option value="' +
            esc(ev) +
            '"' +
            (v === ev ? " selected" : "") +
            ">" +
            esc(ev) +
            "</option>",
        )
        .join("") +
      "</select>";
  } else {
    input =
      '<input type="text" data-stat="' +
      key +
      '" value="' +
      esc(v) +
      '" spellcheck="false">';
  }
  return (
    '<div class="gen-stat' +
    (f.auto ? " auto" : "") +
    '">' +
    '<div class="gen-stat-h"><span class="gen-stat-label">' +
    esc(f.label) +
    "</span>" +
    (f.auto
      ? '<button class="gen-pin" data-act="gen-auto" data-key="' +
        key +
        '" title="' +
        (pinned
          ? "Return this stat to auto-balancing"
          : "This stat is auto-balanced") +
        '"' +
        (pinned ? "" : " data-auto") +
        ">" +
        (pinned ? '<span class="gen-custom">custom</span>' : "auto") +
        "</button>"
      : "") +
    rangeTxt +
    "</div>" +
    '<div class="gen-stat-c">' +
    input +
    "</div>" +
    '<div class="gen-stat-hint">' +
    esc(f.hint) +
    "</div>" +
    "</div>"
  );
}

function genResultHTML(g) {
  const last = g.last;
  if (!last) return "";
  const v = last.validation;
  const ready = v && v.ready;
  const files = last.files || [];
  return (
    "<h3>" +
    (ready ? ICONS.check : ICONS.warn) +
    " " +
    (ready ? "Your mod is ready to ship" : "Almost — check the issues below") +
    "</h3>" +
    '<div class="gen-badges">' +
    (ready
      ? '<span class="badge b-ok">✅ Ready — script ✅ · folder ✅</span>'
      : '<span class="badge b-warn">' +
        ICONS.warn +
        " Needs attention</span>") +
    (v && v.scriptValid
      ? '<span class="badge b-ok">script valid</span>'
      : '<span class="badge b-warn">script issues</span>') +
    (v && v.projectValid
      ? '<span class="badge b-ok">folder valid</span>'
      : '<span class="badge b-warn">folder issues</span>') +
    (v && (!v.b42Errors || !v.b42Errors.length)
      ? '<span class="badge b-ok">Build 42 ✅</span>'
      : '<span class="badge b-warn">Build 42 issues</span>') +
    '<span class="badge b-dim" style="margin-left:auto;font-family:var(--font-mono)">' +
    esc(last.absPath || "") +
    "</span>" +
    "</div>" +
    (v &&
    (v.note ||
      (v.b42Errors || []).length ||
      (v.b42Warnings || []).length ||
      (v.b42Info || []).length ||
      v.scriptWarnings.length ||
      v.projectErrors.length ||
      v.projectWarnings.length)
      ? '<ul class="gen-issues">' +
        (v.note ? '<li class="info">' + esc(v.note) + "</li>" : "") +
        (v.b42Errors || [])
          .map((e) => '<li class="err">🔴 ' + esc(e) + "</li>")
          .join("") +
        (v.b42Warnings || [])
          .map((w) => '<li class="warn">⚡ ' + esc(w) + "</li>")
          .join("") +
        (v.b42Info || [])
          .map((i) => '<li class="info">' + esc(i) + "</li>")
          .join("") +
        v.scriptWarnings
          .map((w) => '<li class="warn">⚠️ ' + esc(w) + "</li>")
          .join("") +
        (v.scriptDiagnostics || [])
          .map(
            (d, i) => '<li class="info">' + diagRowHTML(d, i, false) + "</li>",
          )
          .join("") +
        v.projectErrors
          .map((e) => '<li class="err">❌ ' + esc(e) + "</li>")
          .join("") +
        v.projectWarnings
          .map((w) => '<li class="warn">⚠️ ' + esc(w) + "</li>")
          .join("") +
        "</ul>"
      : "") +
    '<div class="gen-filelist"><b>Files (' +
    files.length +
    ')</b><code class="gen-tree">' +
    files.map((f) => esc(f)).join("\n") +
    "</code></div>" +
    '<div class="gen-actions">' +
    '<button class="btn primary" data-act="gen-save"' +
    (g.busy ? " disabled" : "") +
    ">" +
    ICONS.check +
    " Regenerate</button>" +
    '<button class="btn success" data-act="gen-install"' +
    (g.busy || last.dryRun ? " disabled" : "") +
    ">" +
    ICONS.download +
    " Install into your game</button>" +
    '<button class="btn ghost" data-act="gen-new">' +
    ICONS.x +
    " Start over</button>" +
    "</div>"
  );
}

function genListHTML(g) {
  if (g.listBusy) return '<div class="tcap">Loading…</div>';
  const items = g.list || [];
  if (!items.length)
    return '<div class="tcap">Nothing yet — generate your first mod above and it appears here.</div>';
  return items
    .map(
      (it) =>
        '<div class="gen-list-item">' +
        '<div class="gen-li-ic">' +
        ICONS.folder +
        "</div>" +
        '<div class="gen-li-main"><b>' +
        esc(it.modName) +
        '</b><span class="gen-li-sub">' +
        esc(it.templateLabel) +
        " · item <code>" +
        esc(it.itemName) +
        "</code> · updated " +
        esc((it.updatedAt || "").slice(0, 10)) +
        "</span></div>" +
        '<button class="btn sm" data-act="gen-open" data-project="' +
        esc(it.project) +
        '" title="Open its blueprint and edit">' +
        ICONS.doc +
        " Open & edit</button>" +
        "</div>",
    )
    .join("");
}

function fmtN(n) {
  if (n === undefined || n === null) return "—";
  return Number(n).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function genRender() {
  const g = genState();
  const tpls = $("#genTpls");
  if (tpls) {
    if (!g.templates)
      tpls.innerHTML = '<div class="tcap">Loading templates…</div>';
    else if (!g.templates.length)
      tpls.innerHTML =
        '<div class="tcap">No templates — is the server live?</div>';
    else
      tpls.innerHTML = g.templates
        .map(
          (t) =>
            '<button class="gen-tpl' +
            (t.id === g.template ? " sel" : "") +
            '" data-act="gen-pick" data-template="' +
            t.id +
            '" role="radio" aria-checked="' +
            (t.id === g.template) +
            '">' +
            '<span class="gen-tpl-top"><b>' +
            esc(t.label) +
            "</b>" +
            '<span class="gen-mat ' +
            (t.maturity === "beta" ? "beta" : "ready") +
            '" title="' +
            esc(t.maturityNote || "") +
            '">' +
            (t.maturity === "beta" ? "🟡 beta" : "✅ ready") +
            "</span></span>" +
            "<span>" +
            esc(t.short) +
            "</span>" +
            '<em class="gen-tpl-type">' +
            esc(t.itemType) +
            "</em>" +
            (t.maturity === "beta"
              ? '<em class="gen-mat-note">' + esc(t.maturityNote) + "</em>"
              : "") +
            (t.vanilla
              ? "<em>⚡ balanced against " +
                t.vanilla.sampleCount +
                " " +
                esc(t.vanilla.label) +
                "</em>"
              : "<em>⚡ balanced defaults (parse the game data in the Database tab for real vanilla stats)</em>") +
            "</button>",
        )
        .join("");
  }
  const card = $("#genFormCard");
  if (card) card.hidden = !g.tpl;
  const basics = $(".gen-basics");
  if (basics && g.tpl) basics.innerHTML = genBasicsHTML(g);
  const stats = $("#genStats");
  if (stats && g.tpl) {
    g.srcNote = g.vanilla
      ? "⚡ Unpinned stats are auto-balanced against <b>" +
        g.vanilla.sampleCount +
        "</b> " +
        esc(g.vanilla.label) +
        " from the vanilla database" +
        (g.vanilla.sourceFiles
          ? " (" + g.vanilla.sourceFiles + " vanilla files)"
          : "") +
        (g.vanilla.gameVersion ? " — game " + esc(g.vanilla.gameVersion) : "") +
        ". Edit any stat to pin it, or click 🎲 to roll it inside the vanilla range."
      : "⚡ Auto-balance uses sensible defaults because the vanilla game data isn't indexed yet. Open the <b>Database</b> tab → <b>Parse game files</b>, then regenerate for data-driven stats.";
    stats.innerHTML = genStatsHTML(g);
  }
  const badge = $("#genModeBadge");
  if (badge)
    badge.innerHTML = g.project
      ? "editing <b>" + esc(g.project) + "</b>"
      : "new mod";
  const result = $("#genResultCard");
  if (result) {
    if (g.last && !g.busy) {
      result.hidden = false;
      $("#genResult").innerHTML = genResultHTML(g);
    } else result.hidden = true;
  }
  const list = $("#genList");
  if (list) list.innerHTML = genListHTML(g);
  const lc = $("#genListCount");
  if (lc)
    lc.textContent = g.list
      ? g.list.length + (g.list.length === 1 ? " mod" : " mods")
      : "";
}

function initGenView() {
  genRender();
  if (S.gen._loaded) return;
  S.gen._loaded = true;
  (async () => {
    try {
      const [t, l] = await Promise.all([
        rpc("tools/call", { name: "modgen_templates", arguments: {} }),
        rpc("tools/call", { name: "modgen_list", arguments: {} }),
      ]);
      S.gen.templates =
        (t.result &&
          t.result.structuredContent &&
          t.result.structuredContent.templates) ||
        [];
      S.gen.list =
        (l.result &&
          l.result.structuredContent &&
          l.result.structuredContent.projects) ||
        [];
      genRender();
    } catch (err) {
      S.gen.err = err.message;
      genRender();
    }
  })();
}

function genPick(id) {
  const g = genState();
  const t = g.templates.find((x) => x.id === id);
  if (!t) return;
  S.gen.template = id;
  S.gen.mod = {
    name: "",
    modId: "",
    modName: "",
    author: "",
    description: "",
    itemName: "",
    displayName: "",
    icon: t.defaultIcon || "",
  };
  S.gen.stats = { ...(t.defaults || {}) };
  S.gen.pinned = {};
  S.gen.project = null;
  S.gen.last = null;
  S.gen.vanilla = t.vanilla || null;
  S.gen._idTouched = false;
  genRender();
  requestAnimationFrame(() => {
    const c = $("#genFormCard");
    c?.scrollIntoView({ behavior: "smooth", block: "start" });
    const f = $("#genb-modName");
    f?.focus();
  });
}

function genSuggestModId() {
  if (S.gen._idTouched) return;
  const base = (S.gen.mod.modName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  if (base) S.gen.mod.modId = base;
  if (base && !S.gen.mod.itemName) {
    S.gen.mod.itemName =
      base
        .replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase())
        .replace(/^./, (c) => c.toUpperCase()) + "Item";
  }
  if (S.gen.mod.displayName === "" && S.gen.mod.modName)
    S.gen.mod.displayName = S.gen.mod.modName;
}

function genCollectArgs() {
  const stats = {};
  for (const key of Object.keys(S.gen.stats)) {
    // pinned stats go as concrete values; unpinned auto stats stay out so the
    // server derives them from vanilla data
    if (S.gen.pinned[key]) stats[key] = S.gen.stats[key];
  }
  const args = {
    template: S.gen.template,
    name: S.gen.mod.name.trim(),
    modId: S.gen.mod.modId.trim(),
    modName: S.gen.mod.modName.trim(),
    itemName: S.gen.mod.itemName.trim() || undefined,
    displayName: S.gen.mod.displayName.trim() || undefined,
    icon: S.gen.mod.icon.trim() || undefined,
    author: S.gen.mod.author.trim() || undefined,
    description: S.gen.mod.description.trim() || undefined,
    autoStats: S.gen.autoStats,
  };
  if (Object.keys(stats).length) args.stats = stats;
  return args;
}

async function genGenerate(preview) {
  const err = $("#genErr");
  if (err) err.innerHTML = "";
  if (!S.gen.mod.modName.trim()) {
    S.gen.err = "Give your mod a name first (step 2).";
    genRender();
    return;
  }
  if (!S.gen.mod.name.trim())
    S.gen.mod.name = S.gen.mod.modName.trim().replace(/[^A-Za-z0-9_.-]+/g, "_");
  if (!S.gen.mod.modId.trim()) genSuggestModId();
  genSuggestModId();
  S.gen.busy = true;
  S.gen.err = null;
  genRender();
  try {
    const args = genCollectArgs();
    if (preview) args.dryRun = true;
    const reply = await rpc("tools/call", {
      name: "modgen_generate",
      arguments: args,
    });
    const res = reply.result.structuredContent;
    if (!preview) {
      S.gen.project = res.project;
      S.gen.mod = {
        name: res.blueprint.mod.name,
        modId: res.blueprint.mod.id,
        modName: res.blueprint.mod.modName,
        author: res.blueprint.mod.author || "",
        description: res.blueprint.mod.description || "",
        itemName: res.blueprint.mod.itemName,
        displayName: res.blueprint.mod.displayName,
        icon: res.blueprint.mod.icon,
      };
      S.gen.stats = { ...res.blueprint.stats };
      // server-derived values are now the source of truth — all pinned
      S.gen.pinned = {};
      for (const k of Object.keys(res.blueprint.stats)) S.gen.pinned[k] = true;
      S.gen.last = res;
      toast("Mod generated — ready to ship");
    } else {
      // preview: show the blueprint stats in the editor without a project
      S.gen.stats = { ...res.blueprint.stats };
      S.gen.pinned = {};
      for (const k of Object.keys(res.blueprint.stats)) S.gen.pinned[k] = true;
      S.gen.last = res;
      toast("Dry-run preview — no files created");
    }
  } catch (e) {
    S.gen.err = e.message || String(e);
  }
  S.gen.busy = false;
  genRender();
  if (S.gen.last) {
    const r = $("#genResultCard");
    r?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function genSave() {
  const err = $("#genErr");
  if (err) err.innerHTML = "";
  if (!S.gen.project) {
    genGenerate(false);
    return;
  }
  S.gen.busy = true;
  S.gen.err = null;
  genRender();
  try {
    const stats = {};
    for (const key of Object.keys(S.gen.stats)) {
      if (S.gen.pinned[key]) stats[key] = S.gen.stats[key];
      else stats[key] = null; // reset to auto
    }
    const args = { project: S.gen.project, stats };
    const m = S.gen.mod;
    if (m.modName.trim()) args.modName = m.modName.trim();
    if (m.author.trim()) args.author = m.author.trim();
    if (m.description.trim()) args.description = m.description.trim();
    if (m.itemName.trim()) args.itemName = m.itemName.trim();
    if (m.displayName.trim()) args.displayName = m.displayName.trim();
    if (m.icon.trim()) args.icon = m.icon.trim();
    const reply = await rpc("tools/call", {
      name: "modgen_regenerate",
      arguments: args,
    });
    const res = reply.result.structuredContent;
    S.gen.stats = { ...res.blueprint.stats };
    S.gen.pinned = {};
    for (const k of Object.keys(res.blueprint.stats)) S.gen.pinned[k] = true;
    S.gen.last = res;
    toast("Mod regenerated");
  } catch (e) {
    S.gen.err = e.message || String(e);
  }
  S.gen.busy = false;
  genRender();
  const r = $("#genResultCard");
  r?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function genOpen(project) {
  S.gen.busy = true;
  S.gen.err = null;
  genRender();
  try {
    const reply = await rpc("tools/call", {
      name: "modgen_blueprint",
      arguments: { project },
    });
    const bp = reply.result.structuredContent;
    if (!S.gen.templates) {
      const tr = await rpc("tools/call", {
        name: "modgen_templates",
        arguments: {},
      });
      S.gen.templates = tr.result.structuredContent.templates;
    }
    S.gen.template = bp.template;
    S.gen.vanilla =
      (S.gen.templates.find((x) => x.id === bp.template) || {}).vanilla || null;
    S.gen.project = project;
    S.gen.mod = {
      name: bp.mod.name,
      modId: bp.mod.id,
      modName: bp.mod.modName,
      author: bp.mod.author || "",
      description: bp.mod.description || "",
      itemName: bp.mod.itemName,
      displayName: bp.mod.displayName,
      icon: bp.mod.icon,
    };
    S.gen.stats = { ...bp.stats };
    S.gen.pinned = {};
    for (const k of Object.keys(bp.stats)) S.gen.pinned[k] = true;
    S.gen.last = null;
    toast("Opened " + project + " — edit and save to regenerate");
    requestAnimationFrame(() => {
      const c = $("#genFormCard");
      c?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  } catch (e) {
    S.gen.err = e.message || String(e);
  }
  S.gen.busy = false;
  genRender();
}

function genNew() {
  S.gen.template = null;
  S.gen.project = null;
  S.gen.last = null;
  S.gen.mod = {
    name: "",
    modId: "",
    modName: "",
    author: "",
    description: "",
    itemName: "",
    displayName: "",
    icon: "",
  };
  S.gen.stats = {};
  S.gen.pinned = {};
  S.gen.err = null;
  S.gen._idTouched = false;
  genRender();
  const c = $("#genFormCard");
  c?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function genDice(key) {
  const g = genState();
  const f = g.tpl.fields.find((x) => x.key === key);
  if (!f) return;
  if (S.gen.project) {
    // existing mod: server rolls inside the vanilla range and rewrites
    S.gen.busy = true;
    genRender();
    try {
      const reply = await rpc("tools/call", {
        name: "modgen_regenerate",
        arguments: { project: S.gen.project, randomize: [key] },
      });
      const res = reply.result.structuredContent;
      S.gen.stats = { ...res.blueprint.stats };
      S.gen.pinned = {};
      for (const k of Object.keys(res.blueprint.stats)) S.gen.pinned[k] = true;
      S.gen.last = res;
    } catch (e) {
      S.gen.err = e.message || String(e);
    }
    S.gen.busy = false;
    genRender();
    return;
  }
  // new mod: roll locally within the vanilla range (or field bounds)
  const range =
    S.gen.vanilla && S.gen.vanilla.ranges ? S.gen.vanilla.ranges[key] : null;
  let v;
  if (range) {
    const lo = Math.min(range.p25, range.p75),
      hi = Math.max(range.p25, range.p75);
    v = lo + Math.random() * Math.max(0, hi - lo);
  } else if (
    f.kind === "number" &&
    f.min !== undefined &&
    f.max !== undefined
  ) {
    v = f.min + Math.random() * (f.max - f.min);
  } else return;
  v = f.integer ? Math.round(v) : Number(v.toFixed(f.step === 0.05 ? 2 : 1));
  if (f.min !== undefined && f.max !== undefined)
    v = Math.min(f.max, Math.max(f.min, v));
  S.gen.stats[key] = v;
  S.gen.pinned[key] = true;
  const input = $("#genstat-" + CSS.escape(key));
  if (input) input.value = v;
  const row = input ? input.closest(".gen-stat") : null;
  const pin = row && row.querySelector('[data-act="gen-auto"]');
  if (pin) pin.classList.remove("data-auto");
  genRender();
  toast("Rolled " + key + " = " + v);
}

function genAuto(key) {
  if (S.gen.project) {
    // existing mod: tell the server to re-derive this stat from vanilla data
    S.gen.busy = true;
    genRender();
    (async () => {
      try {
        const reply = await rpc("tools/call", {
          name: "modgen_regenerate",
          arguments: { project: S.gen.project, stats: { [key]: null } },
        });
        const res = reply.result.structuredContent;
        S.gen.stats = { ...res.blueprint.stats };
        S.gen.pinned = {};
        for (const k of Object.keys(res.blueprint.stats))
          S.gen.pinned[k] = true;
        S.gen.last = res;
        toast(key + " returned to auto-balance");
      } catch (e) {
        S.gen.err = e.message || String(e);
      }
      S.gen.busy = false;
      genRender();
    })();
    return;
  }
  S.gen.pinned[key] = false;
  genRender();
}

async function genInstall() {
  if (!S.gen.last || S.gen.last.dryRun) return;
  S.gen.busy = true;
  genRender();
  try {
    const reply = await rpc("tools/call", {
      name: "install_mod",
      arguments: { source: S.gen.last.absPath },
    });
    const sc = reply.result.structuredContent;
    const installed = (sc.mods || []).filter(
      (m) => m.status === "installed",
    ).length;
    const skipped = (sc.mods || []).filter(
      (m) => m.status === "skipped",
    ).length;
    if (installed) toast("Installed into your game (" + installed + " mod)");
    else if (skipped)
      toast("Already installed or conflicts — use overwrite", "warn");
    else toast("Nothing installed — see result", "warn");
    S.gen.last = { ...S.gen.last, installResult: sc };
  } catch (e) {
    S.gen.err = "Install failed: " + (e.message || String(e));
  }
  S.gen.busy = false;
  genRender();
}

function genHelp() {
  openGuide
    ? openGuide()
    : toast(
        "Choose a template → describe your mod → tune stats → Generate. The server builds a complete mod folder with an editable blueprint.",
        "book",
      );
}

function genAction(a, act) {
  if (a === "gen-help") genHelp();
  else if (a === "gen-pick") genPick(act.dataset.template);
  else if (a === "gen-generate") genGenerate(false);
  else if (a === "gen-preview") genGenerate(true);
  else if (a === "gen-save") genSave();
  else if (a === "gen-open") genOpen(act.dataset.project);
  else if (a === "gen-new") genNew();
  else if (a === "gen-dice") genDice(act.dataset.key);
  else if (a === "gen-auto") genAuto(act.dataset.key);
  else if (a === "gen-install") genInstall();
}

document.addEventListener("click", (e) => {
  const act = walkUp(e.target, "[data-act]");
  if (!act) return;
  const a = act.dataset.act;
  if (a && a.startsWith("gen-")) genAction(a, act);
});

document.addEventListener("input", (e) => {
  const t = e.target;
  if (t.dataset && t.dataset.genBasic) {
    S.gen.mod[t.dataset.genBasic] = t.value;
    if (t.dataset.genBasic === "modName") genSuggestModId();
    return;
  }
  if (t.dataset && t.dataset.stat) {
    const key = t.dataset.stat;
    let v = t.value;
    if (t.type === "number") v = v === "" ? null : Number(v);
    if (v !== null && v !== "") {
      S.gen.stats[key] = v;
      S.gen.pinned[key] = true;
    }
    return;
  }
});

document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.dataset && t.dataset.stat) {
    const key = t.dataset.stat;
    const v = t.value;
    S.gen.stats[key] = t.type === "number" ? Number(v) : v;
    S.gen.pinned[key] = true;
    genRender();
  }
});
