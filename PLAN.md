# FIX PLAN: pz-mcp-server (from audit.md)

Date: 2026-08-04
Reference: audit.md (repo root). Note: audit written BEFORE the Cloudflare removal —
Cloudflare-specific items (workers-types, D1/KV, wrangler, worker auth, MCP-on-worker)
are now MOOT. Everything else stands.

## Current baseline (re-measured post-removal)

- npm run build: 69 TS errors across 6 files:
  - src/database/DatabaseManager.ts      37
  - src/validation/ValidationEngine.ts   11
  - src/analyzers/ModAnalyzer.ts         11
  - src/generators/ScriptGenerator.ts     5
  - src/index.ts                          3
  - src/utils/PathManager.ts              2
- npm test: 0 tests. npm run lint: no ESLint config.
- sqlite3 dep is UNUSED in src/ (better-sqlite3 is the real DB) — safe to drop.
- npm audit: 15 vulns (1 critical, 12 high) per audit.md.

## Constraints

- opencode quota: hard ~32 requests/window, machine-wide (verified: two fresh sessions
  both hit ResourceExhausted 32/32). => opencode gets ONE small task per window, sized
  to finish in ~15-25 requests. Everything else: Hermes (no quota).
- Parallel: opencode works ONLY on non-src files (docs/root config), Hermes works ONLY
  on src/ — zero file overlap, no merge conflicts.
- Milestone discipline: build -> live-verify -> fix -> commit per milestone.

## Execution mechanism

- Orca orchestration Run for the whole effort; one Task per milestone.
- opencode tasks: dispatched via `orca orchestration worker-start --task <id>
  --worktree current --agent opencode`; supervised with `check --wait` for worker_done;
  continuation via `orchestration send --to dispatch:<id>`.
- Hermes track: executed directly in this session, same worktree, parallel with opencode.

---

## M0 — Baseline commit (Hermes)
1. Commit the verified Cloudflare removal + audit.md + this plan.
   (git add README.md package.json package-lock.json scripts/install.sh todo.md
   audit.md PLAN.md + the 3 deletions; NOT node_modules/dist — .gitignore comes in M4.)
Gate: clean commit on master. Exit criteria recorded (69 errors).

## M1 — Build green + lint (Hermes, parallel with O1)
- H1: Fix all 69 TS errors (6 files, see baseline). Mechanical + narrowing fixes;
  keep exactOptionalPropertyTypes behavior, fix types properly (no `as any`).
- H2: Add ESLint config (flat or .eslintrc w/ typescript-eslint 6.x), make
  `npm run lint` pass (fixes unused vars/params surfaced by lint).
- Verify: npm run build = 0 errors; npm run lint = 0; npm run start boots without
  crash (smoke test, kill after ~5s).
- Commit.

## M2 — Dependencies & security (Hermes)
- H3: npm audit remediation: upgrade @modelcontextprotocol/sdk 0.4.0 -> latest 1.x
  (verify Server API — index.ts:25 may need adapting), typescript-eslint 7.x,
  drop unused sqlite3 + @types/sqlite3 (consolidate on better-sqlite3).
- H4: SQL injection fix in DatabaseManager.searchContent (parameterized FTS query).
- H5: Path-traversal guard on parse_game_files paths (input validation).
- Verify: build+lint green; npm audit no critical/high (or documented); smoke test
  search_vanilla + parse_game_files.
- Commit.

## M3 — Tests (Hermes)
- H6: jest integration tests for the 6 MCP tools (search_vanilla, generate_script,
  validate_script, check_references, analyze_mod, parse_game_files) against fixtures.
- Verify: npm test green.
- Commit.

## M4 — Docs & polish (opencode task O1, parallel with M1)
- O1 (opencode, quota-bounded): 
  1. Update README.md to reflect ACTUAL implemented features (use audit.md sec 5:
     "implemented but not documented" + API discrepancy tables; keep Cloudflare
     removal wording). 
  2. Delete README.docx and README.pdf. 
  3. Add .gitignore (node_modules, dist, *.log, .env). 
  4. Add .editorconfig, LICENSE (MIT, from package.json), CHANGELOG.md (initial entry).
  - STRICT: touch no src/ files. ~15-25 requests budget. worker_done when done.
- H7 (Hermes): review O1 diff, verify, commit.
Gate: git status clean after commit.

---

## Parallel timeline

Phase 1 (simultaneous): Hermes M1 (H1+H2)  ||  opencode O1 (M4 docs)
Phase 2 (after M1):      Hermes M2 (H3-H5), then M3 (H6)
Phase 3 (after O1):      Hermes H7 review+commit of docs
Optional O2 (if quota resets/window opens): small bounded task, e.g. .github CI
workflow (audit P3 #20) or ScriptGenerator unused-param cleanup. Not committed in plan.

## Out of scope (deferred unless you ask)

P2 feature completeness (extractReferences wiring, evolvedrecipe/vehicle generators),
P4 nice-to-haves (structured logging, Steam registry, deeper balance analysis).
