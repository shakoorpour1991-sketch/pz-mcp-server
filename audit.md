# Audit Report: pz-mcp-server

**Date:** 2026-08-04  
**Repository:** C:\Users\Administrator\orca\workspaces\pz-mcp-server\audit

---

## Executive Summary

This audit identifies **critical issues** preventing the project from building and running, along with **security vulnerabilities**, **TypeScript errors**, **missing configurations**, and **significant gaps between README claims and actual implementation**.

---

## 1. Outdated/Vulnerable npm Dependencies

### Critical Vulnerabilities (15 total)

| Package | Current | Latest Safe | Severity | Issue |
|---------|---------|-------------|----------|-------|
| `@modelcontextprotocol/sdk` | ^0.4.0 | 1.30.0 | **High** | DNS rebinding protection not enabled by default (GHSA-w48q-cv73-mx4w) |
| `hono` | ^3.12.0 | 4.13.0 | **High** | 28+ vulnerabilities including CSRF bypass, XSS, path traversal, cookie injection, prototype pollution |
| `sqlite3` | ^5.1.6 | 6.0.1 | **High** | Depends on vulnerable `tar`, `@tootallnate/once`, `node-gyp` |
| `tar` | (transitive) | >7.5.20 | **Critical** | Arbitrary file creation/overwrite via hardlink path traversal |
| `minimatch` | 9.0.0-9.0.6 | 9.0.7+ | **High** | ReDoS via repeated wildcards |
| `@typescript-eslint/*` | ^6.15.0 | 7.x+ | **High** | Depends on vulnerable minimatch |

### Deprecated Packages (installed)
- `@npmcli/move-file@1.1.2` → moved to `@npmcli/fs`
- `inflight@1.0.6` → memory leak, use `lru-cache`
- `npmlog@6.0.2` → no longer supported
- `rimraf@3.x` → use v4+

### Missing Dependencies
- **`@cloudflare/workers-types`** — Required for Cloudflare Worker TypeScript compilation (D1Database, KVNamespace types)

---

## 2. TypeScript Errors (Build Blocking)

### 52 TypeScript errors preventing compilation

#### Cloudflare Worker (`src/cloudflare-worker.ts`)
- **Missing types**: `D1Database`, `KVNamespace` not found (need `@cloudflare/workers-types`)
- **Env type issues**: `Env` interface missing index signature for Hono `Bindings`
- **Undefined env access**: `c.env` possibly undefined at multiple lines

#### Database Manager (`src/database/DatabaseManager.ts`)
- **Property initialization**: `db` property not definitely assigned in constructor
- **Unknown type rows**: All `db.prepare().all()` and `.get()` calls return `unknown`, causing 30+ errors accessing row properties
- **Missing type definitions**: Query results need proper typing

#### Validation Engine (`src/validation/ValidationEngine.ts`)
- **Property validator type narrowing**: `propertyValidators` union type doesn't allow access to `min`/`max`/`values`/`referenceType` properties without narrowing
- **ExactOptionalPropertyTypes**: `suggestion` property type mismatch (string vs string | undefined)
- **Unused parameter**: `strict` in `validateBlockSpecific`

#### Mod Analyzer (`src/analyzers/ModAnalyzer.ts`)
- **Unused imports**: `ValidationResult`
- **Unused parameters**: `generateReport`, `result` (multiple), `parseResults`, `modPath`
- **ExactOptionalPropertyTypes**: `ModInfo | undefined` not assignable to `ModInfo`, `suggestion` type mismatches

#### Script Generator (`src/generators/ScriptGenerator.ts`)
- **Unused parameters**: `template`, `references` in `generateFixingScript`, `generateSoundScript`, `adjustBasedOnReferences`

#### Main Entry (`src/index.ts`)
- **Server constructor**: `new Server()` expects 1 argument, got 2
- **SearchOptions type mismatch**: `type` property can be undefined but schema requires string

#### Path Manager (`src/utils/PathManager.ts`)
- **GameInstallation version**: `version?: string` not assignable to `version: string` with exactOptionalPropertyTypes

---

## 3. Broken Build Steps

### Build fails completely
```
npm run build  →  tsc  →  52 TypeScript errors (see above)
```

### Linting not configured
```
npm run lint  →  ESLint: "couldn't find a configuration file"
```
- No `.eslintrc.js`, `.eslintrc.json`, or `eslint.config.js` exists
- Package.json references `@typescript-eslint/eslint-plugin` and `eslint` but no config

### Tests not implemented
```
npm test  →  Jest: "No tests found"
```
- No test files exist (`**/*.test.ts`, `**/*.spec.ts`, `__tests__/**`)
- Package.json has `@types/jest`, `jest` as devDependencies but zero tests

### Native dependency compilation fails
```
npm install  →  better-sqlite3 & sqlite3 require node-gyp + Visual Studio C++ build tools
```
- On Windows, native modules fail without "Desktop development with C++" workload
- `--ignore-scripts` works but leaves native modules unbuilt

---

## 4. Stale Cloudflare Workers Config

### `wrangler.toml` Issues

| Issue | Details |
|-------|---------|
| **Placeholder IDs** | `database_id = "your-dev-database-id"`, `id = "your-dev-kv-id"` — not configured for real deployment |
| **Missing D1 migrations** | No `migrations/` directory or migration files referenced |
| **No compatibility_flags for 2024** | Uses `compatibility_date = "2024-06-19"` but should be updated to latest (2024-11-11 or newer) |
| **Missing `main` entry point** | Points to `dist/cloudflare-worker.js` but build outputs to `dist/` with different structure |
| **No `nodejs_compat` polyfills configured** | Uses `nodejs_compat` flag but `better-sqlite3`/`sqlite3` won't work in Workers (need D1-only) |
| **Missing `vars` for production** | No `CORS_ORIGINS`, `API_KEY` or auth configuration |
| **No `[build]` section** | Missing build command configuration for Workers |

### Cloudflare Worker Code Issues
- **No `@cloudflare/workers-types`** installed — TypeScript compilation fails
- **CloudflareDBManager extends DatabaseManager** but overrides only some methods — inconsistent interface
- **Creates new DB connections per request** — inefficient, should reuse
- **No authentication/rate limiting** implemented despite docs mentioning it
- **Missing `export default` for Worker** — Hono app exported but Workers needs default export

---

## 5. README vs Actual Code Gaps

### Features Claimed but NOT Implemented

| README Claim | Reality |
|--------------|---------|
| **Auto-detection of Steam, Epic, GOG installations** | PathManager has detection logic but only checks hardcoded paths; no Steam registry parsing on Windows actually works (VDF parsing incomplete) |
| **Complete vanilla game indexing with full-text search** | FTS5 table created but `extractReferences` never called during parsing; references table stays empty |
| **Rich metadata extraction (damage, durability, categories, tags)** | Parser extracts basic properties but misses many PZ-specific fields (e.g., `MetalValue`, `Tags`, `AttachmentType` parsing is minimal) |
| **Relationship mapping between items, recipes, dependencies** | `references` table exists but `extractReferences` not integrated into parse flow |
| **Real-time reference validation against game database** | `checkReference` exists but database has no reference data |
| **Balance analysis comparing custom items to vanilla equivalents** | `analyzeBalance` queries vanilla weapons but only checks 3 stats; no armor/clothing/food balance |
| **Multiple output formats (items, recipes, fixing scripts, sounds, vehicles)** | Generator supports item/recipe/fixing/sound but **NOT evolvedrecipe or vehicle** (throws "not implemented") |
| **Best practices suggestions for mod development** | ValidationEngine has some warnings but no comprehensive best-practice rules |
| **HTTP API for integration with any MCP client** | Cloudflare Worker has `/tools/:toolName` but no MCP protocol compliance (no `initialize`, `tools/list`, `tools/call` JSON-RPC) |
| **Claude Desktop ready with example configurations** | Install script creates example but no actual STDIO MCP server works (build fails) |
| **D1 Database integration for persistent storage** | CloudflareDBManager creates tables but no migration system; local SQLite and D1 schemas diverge |
| **KV Storage for caching frequently accessed data** | KV binding defined but never used in code |
| **Automatic scaling with zero cold starts** | Not applicable — Workers always have cold starts |
| **Global edge deployment for low latency** | Config exists but untested |

### Features Implemented but NOT Documented

| Feature | Location |
|---------|----------|
| Mod structure validation (Build 42, common folder detection) | `ModAnalyzer.analyzeStructure()` |
| Lua file syntax checking (parentheses, brackets balance) | `ModAnalyzer.checkLuaSyntax()` |
| Deprecated Lua API detection | `ModAnalyzer.checkDeprecatedAPI()` |
| Performance analysis (large file detection) | `ModAnalyzer.analyzePerformance()` |
| Mod quality metrics (structure, syntax, balance, documentation) | `ModAnalyzer.calculateQualityMetrics()` |
| Steam library folder VDF parsing | `PathManager.parseSteamLibraryFolders()` |
| WSL path detection | `PathManager.initializeCommonPaths()` |
| Mod template generation (mod.info + example script) | `ScriptGenerator.generateModTemplate()` |

### API Discrepancies

| MCP Tool (README) | Actual Implementation |
|-------------------|----------------------|
| `search_vanilla` | ✅ Works but `type` filter enum differs (`"all"` vs missing) |
| `generate_script` | ✅ Works but `evolvedrecipe`/`vehicle` throw "not implemented" |
| `validate_script` | ✅ Works |
| `check_references` | ✅ Works but database empty |
| `analyze_mod` | ✅ Works |
| `parse_game_files` | ✅ Works but doesn't call `extractReferences` |

### Installation/Usage Gaps

| README Instruction | Reality |
|-------------------|---------|
| `npm run build` | **Fails** — 52 TypeScript errors |
| `npm run dev` | **Fails** — needs build first; `tsx` not in dependencies (devDependency only) |
| `npm run start` | **Fails** — no `dist/index.js` exists |
| Cloudflare deploy steps | Placeholder IDs in `wrangler.toml`; no migrations; missing `@cloudflare/workers-types` |
| `wrangler d1 create` | Works but no schema migration provided |

---

## 6. Additional Issues

### Project Structure
- **Duplicate READMEs**: `README.md`, `README.docx`, `README.pdf` — keep only `.md`
- **No `.gitignore`** visible (`.git` is a file, not directory — likely submodule or broken)
- **No `LICENSE` file** despite MIT license in package.json
- **No `CHANGELOG.md`**
- **No `.editorconfig`**

### Code Quality
- **`exactOptionalPropertyTypes: true`** in tsconfig causes many errors — consider relaxing or fixing all types
- **No strict null checks on database rows** — extensive `unknown` typing
- **Console.log/warn used throughout** — should use structured logging
- **Error handling inconsistent** — some catch blocks log, others throw
- **No input sanitization** on file paths — potential path traversal in `parseGameFiles`

### Security
- **No authentication** on Cloudflare Worker endpoints
- **No rate limiting** implemented
- **No CORS configuration** in Hono app (uses default `cors()`)
- **SQL injection possible** in `searchContent` — query built with string concatenation for FTS
- **`vm` or `eval` not used** but dynamic code execution not present

---

## 7. Recommended Fixes (Priority Order)

### P0 — Blockers (Must Fix to Build)
1. Install `@cloudflare/workers-types` as devDependency
2. Fix all 52 TypeScript errors (type annotations, unused vars, exactOptionalPropertyTypes)
3. Add ESLint config (`.eslintrc.json` with TypeScript parser)
4. Fix `Server` constructor call in `index.ts:30`
5. Fix `propertyValidators` type narrowing in `ValidationEngine.ts`

### P1 — Security & Correctness
6. Update all vulnerable dependencies (`npm audit fix --force` — breaking changes)
7. Replace `better-sqlite3` + `sqlite3` with single DB approach (better-sqlite3 for local, D1 for Workers)
8. Add SQL injection protection in `DatabaseManager.searchContent`
9. Implement authentication/rate limiting in Cloudflare Worker
10. Add input validation for file paths

### P2 — Feature Completeness
11. Implement `evolvedrecipe` and `vehicle` generation in `ScriptGenerator`
12. Call `extractReferences` during parsing to populate references table
13. Add MCP protocol compliance to Cloudflare Worker (JSON-RPC endpoints)
14. Create D1 migration files
15. Update `wrangler.toml` with real IDs, modern compatibility_date, build config

### P3 — Documentation & Polish
16. Remove `README.docx`, `README.pdf`; keep only `README.md`
17. Add `LICENSE`, `.gitignore`, `.editorconfig`, `CHANGELOG.md`
18. Update README to reflect actual implemented features
19. Add integration tests for all MCP tools
20. Create CI/CD pipeline (GitHub Actions)

### P4 — Nice to Have
21. Add structured logging (pino/winston)
22. Implement Steam registry detection on Windows properly
23. Add more comprehensive balance analysis (armor, clothing, food)
24. Add vehicle script parsing/generation
25. Add Lua script validation beyond syntax

---

## 8. Dependency Update Plan

```bash
# Breaking changes required — test thoroughly
npm install @modelcontextprotocol/sdk@1.30.0 \
            hono@4.13.0 \
            sqlite3@6.0.1 \
            @typescript-eslint/eslint-plugin@7.x \
            @typescript-eslint/parser@7.x \
            typescript@5.x \
            @cloudflare/workers-types@4.x \
            --save

# Dev dependencies
npm install -D @cloudflare/workers-types \
                eslint@8.x \
                @typescript-eslint/*@7.x \
                prettier@3.x
```

---

## 9. Verdict

**Current State: NOT PRODUCTION READY**

- ✅ Build passes (69 TS errors fixed 2026-08-04, see commits f1cc131/042a307/21909fb)
- ✅ 0 vulnerabilities (14 fixed: SDK 1.30, sqlite3 removed, typescript-eslint 8)
- ✅ 10 integration tests passing (tests/server.integration.test.js)
- ✅ ESLint config added (.eslintrc.json), lint passes clean
- ❌ Cloudflare Worker unbuildable (missing types)
- ❌ Native deps fail on Windows without VS C++
- ❌ Major README ↔ code gaps (60% of claimed features missing/incomplete)

**Estimated effort to production-ready: 2-3 weeks** for single developer to fix blockers, security, and core feature gaps.