# Feature Proposal — Workshop Browser in the Control Deck

**Feature:** Browse the Project Zomboid Steam Workshop from the Control Deck dashboard, pick a mod, and have the MCP server fetch it, parse it, and run a full analysis — all without leaving the dashboard.

**Status:** ✅ **APPROVED 2026-08-06** — full scope M1→M4, search strategy = **paste URL/ID + HTML browse** (option 2, no API-key gating in MVP).

---

## 1. The product

The Control Deck (admin/, port 8787) gets a new **Workshop** section. From it, the user can:

1. **Browse/search** the Project Zomboid Workshop (AppID `108600`) — search box + browsable grid of mods (title, author, thumbnail, tags, size, last-updated, subscriber count, description).
2. **Select a mod** (click a card, or paste a workshop URL / ID as the guaranteed path).
3. **"Fetch & Analyze"** — one action that:
   - downloads the mod via SteamCMD (anonymous, unless the item requires login),
   - parses its scripts into the local DB (existing `parse_game_files` machinery),
   - runs the full analysis suite (`analyze_mod` — structure, Lua quality, balance outliers, compatibility, performance),
   - checks the mod's references against vanilla + the references table (`check_references`),
   - surfaces recipe conflicts against vanilla/other mods (new `RecipeAnalyzer`),
   - and renders a **Mod Report**: what the mod adds (items/recipes/sounds), what it changes, its files, balance red flags, dangling references, conflicts, and a quality score.

The same capability is exposed as MCP tools, so CLI/MCP clients get it too — the dashboard is one consumer, not the only one.

## 2. Why it fits this project

Everything downstream already exists; only the workshop-facing layer is new:

| Existing piece | What it provides |
|---|---|
| `parse_game_files` + `mods` table | Ingests a mod's script files into the DB |
| `analyze_mod` | Structure / Lua / balance / compatibility / performance analysis |
| `check_references` + `references` table | Completeness + dangling-reference detection |
| `RecipeAnalyzer` (analyze_recipe_chain / detect_recipe_conflicts) | Conflict detection between the mod and vanilla/other mods |
| `PathManager` (Steam registry detection) | Finds the Steam install → workshop content dir is `<SteamPath>\steamapps\workshop\content\108600\<publishedfileid>` |
| Control Deck bridge (`admin/bridge.mjs`) | Spawns the server, `/rpc`, SSE events — the wiring for a new view + progress events |

New pieces (all small):
- **Workshop metadata client** — Steam Web API `GetPublishedFileDetails` (keyless, POST, batch ≤ 100 ids) for resolution; browse/search needs a source (see §5 decision).
- **SteamCMD wrapper** — download + temp-dir hygiene + output parsing (patterns already proven in the `workshopdl` project; reuse, don't reinvent).
- **New MCP tools** — `workshop_search`, `workshop_get_details`, `workshop_download` (zod schemas, registered in `src/index.ts`, `structuredContent` per the N2 convention).
- **Dashboard Workshop view** — new section in `admin/index.html` + bridge endpoints/SSE for progress.

## 3. The flow (end to end)

```
Workshop tab in Control Deck
  └─ search / browse (query → list of {id, title, author, tags, size, updated, subscribers})
  └─ select a mod (card click, or paste URL/ID)
  └─ "Fetch & Analyze"
       1. workshop_get_details  → metadata + confirm appid == 108600
       2. workshop_download     → SteamCMD into per-download temp dir → move to
                                  <workshopContentDir>/<id> → delete temp (always)
       3. parse_game_files      → mod scripts into DB (mods table)
       4. analyze_mod           → quality report
       5. check_references      → completeness vs vanilla + references table
       6. detect_recipe_conflicts → mod-vs-vanilla conflict list
       7. render Mod Report (prose + structuredContent)
```

Progress during download shows in the dashboard via SSE (indeterminate while SteamCMD runs, then snap to 100% with the real byte count — Windows SteamCMD prints no incremental progress).

## 4. Milestones (build → verify live → fix → commit → next)

- **M1 — Browse & details.** Steam Web API client (metadata resolution, batch, cache with 24h TTL), browse/search source, `workshop_search` + `workshop_get_details` tools, Workshop view with search + grid + mod detail panel. *Verify: live lookup of a real PZ workshop item by URL.*
- **M2 — Download.** SteamCMD wrapper (per-download `+force_install_dir` temp dir, always-deleted; Windows success-line parsing; `No subscription` → actionable login error), `workshop_download` tool, download progress in dashboard via SSE. *Verify: live download of a small real mod, content lands in the workshop dir, temp dir gone.*
- **M3 — Analyze pipeline.** Download → parse → analyze → check refs → conflicts → Mod Report view. *Verify: full pipeline on a real mod end to end.*
- **M4 — Polish.** Metadata cache update/refresh, error states, disk-space guard, docs (README tool table, project-summary.md, CHANGELOG), tests for the new tools.

## 5. Implementation notes (ground truths — read before designing)

- **AppID `108600`** is Project Zomboid. Workshop content dir: `<SteamPath>\steamapps\workshop\content\108600\<publishedfileid>`.
- **Metadata resolution is keyless and batchable**: `POST /ISteamRemoteStorage/GetPublishedFileDetails/v1/` (form-encoded, `itemcount` + `publishedfileids[i]`). It resolves *known IDs only* — it cannot search.
- **Search/browse decision needed**: there is no keyless Steam Web API search endpoint. Options, in order of robustness:
  1. **Paste URL/ID** as the guaranteed path (resolve via GetPublishedFileDetails) — zero fragility, always works. **Recommended MVP.**
  2. **Browse via steamcommunity.com/workshop/browse/?appid=108600** HTML — works keylessly but is brittle; treat as best-effort with graceful degradation.
  3. **Optional Steam Web API key** (`IPublishedFileService/QueryFiles`) — proper server-side search if the user provides a key; feature-gated, never required.
  Do not integrate third-party mirrors (all dead: smods.ru, GGNetwork, steamworkshopdownloader.io, etc.).
- **Download = SteamCMD, always** (Valve-sanctioned; mirrors are dead). Anonymous by default. Patterns from the proven `workshopdl` project:
  - Per-download temp dir via `+force_install_dir <tmp>`; **always delete it** in a `finally` (orphaned temps accumulate >20GB); temp dir must be next to the output (same filesystem rename, and immune to LOCALAPPDATA redirects).
  - Args order: `+force_install_dir` before `+login` before `+workshop_download_item`.
  - Windows success line: `Success. Downloaded item N to "path" (NNNN bytes)` — parse the byte count from it; emit one final `progress(100)` event.
  - `No subscription` = anonymous rejected → tell the user to retry with a login; never pass passwords on argv.
  - SteamCMD first run can fail with exit code 7 — retry 3× with backoff.
- **Security stance**: workshop mods are untrusted third-party code. The server **reads/analyzes only** — parsing scripts and running Lua analysis never executes the mod. **Do not auto-install into the live game**; the download target is a workspace/analysis dir (workshop content dir or a configurable `PZ_WORKSHOP_DIR`). Validate all paths with the existing `validateInputPath`; sanitize filenames.
- **Keep the stack lean**: Node 22 global `fetch` for the Web API (no new http dep); SteamCMD is an external binary, not an npm dep; no native deps (node:sqlite).
- **Dashboard is the user's own UI** — extend `admin/index.html` + `admin/bridge.mjs` in place (glass design, existing design tokens). No new app, no new framework.
- **MCP conventions**: snake_case tool names, zod schemas with bounded inputs (`limit` 1–100), `structuredContent` on every new tool (N2), logger stays stderr-only.
- **Tests**: `node:test` runner (Jest is gone), `tests/unit/` + integration tests; mock SteamCMD with a fake binary, but run **at least one live download** per milestone that touches the download path.

## 6. Constraints & conventions

- Milestones: build → **verify with real tool output** → fix → commit → next. One commit per milestone.
- `npm run build` && `npm test` && `npm run lint` must stay green (127/127 tests).
- No drive-by refactors, no overengineering, minimal new dependencies.
- Update `docs/project-summary.md` (canonical AI context), README tool tables, CHANGELOG (Unreleased) when the feature lands.
- Return unified diffs + LOCAL AGENT INSTRUCTIONS; diffs apply against the current working tree.

## 7. Out of scope (keep it tight)

- Auto-subscribing to workshop items or installing into the live game.
- Steam Guard / interactive-login flows (anonymous covers the vast majority of PZ mods).
- Workshop upload/publishing tooling.
- Multi-game support — AppID 108600 only, for now.
