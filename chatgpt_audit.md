# PZ MCP Server — ChatGPT Audit

**Repository:** `shakoorpour1991-sketch/pz-mcp-server`  
**Branch audited:** `master`  
**Audit date:** 2026-08-09  
**Audit type:** architecture, code quality, correctness, security, testing, CI/CD, documentation, maintainability, and release-readiness review

## 1. Executive Summary

The repository is a substantial MCP server for Project Zomboid mod development. Its architecture is reasonably modular: MCP transport/tool registration is centralized while parsing, database access, generation, validation, analysis, knowledge indexing, and Workshop functionality are separated into dedicated modules.

The project has several strong engineering foundations already in place: TypeScript, Zod schemas, SQLite/FTS5, explicit Node.js engine requirements, automated lint/format/test/audit CI, Windows + Ubuntu CI coverage, structured recipe data, MCP resources/prompts, and a clear README.

The main architectural risk is **concentration of responsibility in `src/index.ts`**. It is approximately 36 KB and contains server initialization, all tool definitions, resources, prompts, and tool dispatch. This makes future changes harder to reason about and increases regression risk.

The second major area is **database correctness and lifecycle complexity**. `DatabaseManager` contains schema creation, migrations, FTS synchronization/healing, reference normalization, recipe storage, indexing, and query logic. This is powerful, but the amount of stateful behavior deserves stronger integration tests and explicit migration/version management.

### Overall assessment

| Area | Rating |
|---|---:|
| Architecture | 8/10 |
| TypeScript/code organization | 7/10 |
| Database design | 8/10 |
| MCP design | 8/10 |
| Testing | 7/10 |
| CI/CD | 8/10 |
| Security | 7/10 |
| Documentation | 8/10 |
| Maintainability | 6/10 |
| Release readiness | 7/10 |

**Overall: 7.5/10 — good foundation, but the project would benefit substantially from decomposition of the MCP entrypoint, stronger integration/property testing, and more explicit operational/security boundaries.**

---

## 2. Repository Architecture

The source tree is logically divided into:

- `analyzers/` — mod and recipe analysis
- `database/` — SQLite persistence and search
- `generators/` — script generation
- `knowledge/` — documentation indexing/search
- `parsers/` — Project Zomboid parsing
- `validation/` — generated/script validation
- `workshop/` — Steam Workshop/SteamCMD operations
- `utils/` — paths, configuration, logging, formatting, and helpers
- `schemas.ts` — MCP input validation
- `index.ts` — MCP server bootstrap, definitions, and dispatch

This is a sensible domain-oriented layout. The main weakness is that the public MCP layer has not been decomposed into the same domain boundaries.

### Recommended target structure

```text
src/
  server/
    createServer.ts
    registerTools.ts
    registerResources.ts
    registerPrompts.ts
  tools/
    discovery.ts
    scripts.ts
    analysis.ts
    localData.ts
    workshop.ts
  services/
    ...
  database/
  parsers/
  analyzers/
  generators/
  validation/
  knowledge/
  workshop/
  utils/
```

This should be done incrementally rather than as a large rewrite.

---

## 3. Critical / High Priority Findings

### HIGH — `src/index.ts` is too large and has too many responsibilities

`src/index.ts` contains MCP setup, initialization, tool schemas/descriptions, resource handling, prompt handling, and the central tool switch. The file is roughly 36 KB.

**Impact:**

- difficult navigation
- high merge-conflict probability
- difficult unit testing of individual handlers
- high cognitive load when adding tools
- greater chance of accidentally changing unrelated behavior

**Recommendation:** extract each tool family into registration/handler modules and leave `index.ts` responsible only for composition and startup.

**Estimated effort:** 1–2 days.

### HIGH — Database migrations are implicit rather than versioned

`DatabaseManager.migrateSchema()` checks for missing columns and adds them. This works for additive changes, but there is no explicit schema-version migration framework visible in the inspected implementation.

**Risks:**

- future migrations that require data transformation become harder
- rollback/upgrade paths are unclear
- multiple historical database states may accumulate

**Recommendation:** introduce a schema version table and numbered migrations:

```text
001_initial
002_item_metadata
003_recipe_index
004_reference_constraints
...
```

**Estimated effort:** 1 day.

### HIGH — FTS correctness deserves stronger automated coverage

The database contains deliberate FTS repair logic, trigger recreation, row-count/max-rowid health checks, and rebuild behavior. This indicates that FTS synchronization has already been a meaningful source of complexity.

**Recommendation:** add integration tests covering:

1. insert → search
2. update → search
3. delete → search
4. `INSERT OR REPLACE` / rowid churn
5. migration from an older DB
6. stale FTS index detection
7. empty database
8. large import

**Estimated effort:** 1 day.

### HIGH — Workshop operations require explicit security boundaries

The server exposes Workshop downloading and analysis and can export generated scripts to filesystem paths.

These are powerful capabilities when an MCP client/agent is allowed to invoke tools autonomously.

**Recommendation:** treat filesystem writes, SteamCMD execution, and Workshop downloads as privileged operations. Add:

- configurable allowed workspace roots
- path canonicalization and traversal protection
- explicit dry-run defaults
- maximum download size/time where practical
- subprocess timeouts
- clear logging of external commands
- optional confirmation/allowlist mode for destructive operations

**Estimated effort:** 1–2 days.

---

## 4. Medium Priority Findings

### MEDIUM — Tool registration should be data-driven where practical

The server manually defines many tools and then manually dispatches them through a large `switch`.

This creates duplication between:

- tool name
- description
- schema
- handler
- formatting/error behavior

A registry can make this relationship explicit.

```ts
const tools = {
  search_vanilla: {
    schema: SearchVanillaSchema,
    description: "...",
    handler: handleSearchVanilla,
  },
};
```

### MEDIUM — Error handling should be standardized

The central tool dispatcher catches errors, but each domain should have predictable error semantics.

Recommended categories:

- invalid input
- missing local resource
- parse failure
- validation failure
- external service failure
- filesystem permission failure
- internal error

MCP clients should receive useful structured error information without leaking stack traces or local-sensitive paths unnecessarily.

### MEDIUM — Configuration should be validated at startup

Environment variables such as paths, ports, log levels, and game version should be parsed through a single Zod configuration schema.

This avoids scattered environment parsing and gives immediate startup failures for invalid configuration.

### MEDIUM — Node.js requirement should be consistently documented

`package.json` requires Node `>=22.5.0`. CI tests Node 22. README also documents Node >=22.5.

Keep this single source of truth and consider documenting the exact reason for the minimum version, especially because the project uses `node:sqlite`.

### MEDIUM — Large admin assets increase repository size

The repository contains large vendored dashboard assets, including a roughly 257 KB `admin/index.html` and a roughly 407 KB Tailwind asset.

This is not inherently wrong, but the dashboard should be checked for:

- unnecessary duplicated assets
- build-generated files that could be generated during release
- third-party license requirements
- dependency update strategy

### MEDIUM — Tests should include real-world Project Zomboid fixtures

Unit tests alone are insufficient for a parser/generator/validator project.

Add a curated fixture corpus containing representative B42 scripts and intentionally malformed scripts.

Recommended fixture categories:

- items
- recipes
- evolved recipes
- fixing
- sounds
- vehicles
- tags
- module-qualified references
- multiline/nested blocks
- malformed syntax
- real third-party mod structures

---

## 5. Low Priority / Quality Improvements

### LOW — Avoid comments that reference internal audit/review history

The code contains comments such as `audit A6`, `freebuff L3`, and similar review-history markers.

These are useful during development but should eventually be replaced with durable engineering comments explaining **why** the behavior exists rather than where it originated.

### LOW — Reduce `any` in persistence models

The database interfaces contain `Record<string, any>` for dynamic Project Zomboid properties.

Some dynamic typing is reasonable because PZ properties are heterogeneous, but `unknown` plus narrow parsing helpers would improve type safety.

### LOW — Separate display formatting from domain results

The presence of formatter modules is good. Keep domain/service methods returning structured objects and let formatters handle MCP-facing human-readable output. This makes testing and future clients easier.

### LOW — Add performance benchmarks for large indexes

The application is fundamentally a local knowledge engine. Import/search performance will matter as the database grows.

Track at least:

- parse time per MB
- rows imported/sec
- FTS index build time
- common query latency
- recipe-chain traversal latency
- Workshop analysis time excluding download

---

## 6. Database Review

The database architecture is one of the stronger parts of the repository.

Positive points:

- SQLite
- WAL mode
- foreign-key enforcement
- FTS5
- dedicated indexes
- structured recipe tables
- reference normalization
- FTS triggers
- stale-index healing
- migration support

The recipe model is particularly useful because recipes are represented both as searchable game data and as structured dependency information.

### Recommended improvements

1. Add explicit schema versioning.
2. Add transaction boundaries around multi-table imports.
3. Add integration tests for every trigger.
4. Add indexes based on actual query plans after representative data imports.
5. Consider `PRAGMA busy_timeout` for concurrent access.
6. Define a clear database lifecycle for parser re-indexing.
7. Consider atomic replacement/rebuild strategies for large imports.
8. Document whether the database is disposable cache data or persistent user state.

---

## 7. MCP Interface Review

The MCP surface is broad and useful. It exposes:

- vanilla search
- recipe search
- script generation
- validation
- reference checks
- mod analysis
- game parsing/indexing
- knowledge-base indexing/search
- recipe-chain analysis
- recipe-conflict detection
- script export
- Workshop search/details/download/analysis
- MCP resources
- MCP prompts

This is a strong feature set.

### Main concern

The server exposes many capabilities through a single process with different trust levels.

A useful conceptual separation is:

```text
READ-ONLY
search / inspect / analyze / validate

LOCAL MUTATION
parse / index / export

EXTERNAL SIDE EFFECTS
Workshop download / SteamCMD
```

Document these categories and consider making permissions/allowlists possible for clients that support them.

---

## 8. Script Generation & Validation

The generator/validator pairing is architecturally correct: generation should not be treated as proof of correctness.

Recommended pipeline:

```text
request
  ↓
Zod validation
  ↓
reference lookup
  ↓
generation
  ↓
syntax validation
  ↓
semantic/reference validation
  ↓
optional balance/compatibility analysis
  ↓
export
```

The most important improvement is to ensure every generated script type has both syntax fixtures and semantic/reference fixtures.

Do not rely on string-pattern validation alone for correctness where the Project Zomboid grammar permits nesting or context-dependent semantics.

---

## 9. Workshop / External Process Review

Workshop functionality significantly expands the usefulness of the project but also increases operational complexity.

Recommended safeguards:

- verify Workshop AppID before download
- sanitize Workshop IDs
- use fixed workspace roots
- prevent arbitrary output paths
- enforce subprocess timeout
- capture exit code and stderr
- distinguish download failure from analysis failure
- clean temporary files deterministically
- avoid trusting downloaded filenames/paths
- avoid executing downloaded content directly

SteamCMD should be treated as an external dependency with explicit failure states rather than assuming it exists.

---

## 10. Testing Review

The repository has a test command that builds first and then runs Node tests. CI additionally runs lint, formatting checks, tests, and `npm audit`.

This is good release hygiene.

The biggest opportunity is **depth rather than simply test count**.

### Recommended test pyramid

```text
                 E2E MCP tests
                      ▲
                 integration
              database/parser
                    ▲
               domain unit tests
                    ▲
              small pure helpers
```

High-value tests:

- MCP tool registration snapshot
- every schema rejects invalid input
- parser fixtures
- generator snapshots
- validator fixtures
- DB migration tests
- FTS consistency tests
- recipe graph tests
- path security tests
- Workshop input parsing tests
- export dry-run tests

---

## 11. CI/CD Review

The CI workflow is strong for a project of this size:

- Ubuntu + Windows
- Node 22
- `npm ci`
- lint
- formatting check
- test/build
- `npm audit --audit-level=high`

This is especially appropriate because the application targets Windows users while remaining portable enough to test on Ubuntu.

### Recommended additions

- coverage reporting
- dependency review on pull requests
- CodeQL or equivalent static security analysis
- artifact upload for release builds
- test the packaged/npm-published output rather than only source compilation
- verify that generated `dist/` contents match a clean build

---

## 12. Security Review

No obvious secret material is apparent from the inspected repository metadata/files.

Still, the application is an agent-facing local automation server, so the relevant security model is broader than traditional web-server security.

### Threat model

Potentially untrusted MCP input can influence:

- filesystem paths
- generated files
- local database queries
- Workshop identifiers
- SteamCMD arguments
- external downloads

Therefore validate at the **boundary**, not only inside services.

### Priority controls

| Control | Priority |
|---|---|
| Canonicalize/allowlist filesystem paths | High |
| Prevent path traversal | High |
| Validate subprocess arguments | High |
| Subprocess timeout | High |
| Limit download/workspace scope | High |
| Structured error sanitization | Medium |
| Security-focused integration tests | Medium |
| CodeQL/static analysis | Medium |

---

## 13. Documentation Review

The README is visually strong and communicates the architecture clearly. It explains the system flow, tool categories, installation, MCP configuration, configuration variables, development commands, and current boundaries.

A particularly good practice is explicitly stating capabilities that are **not** claimed.

Recommended additions:

1. Supported Project Zomboid Build 42 versions.
2. Compatibility matrix for Node/OS/PZ.
3. Database lifecycle and reset instructions.
4. SteamCMD setup instructions.
5. Security/side-effect model for MCP clients.
6. Example end-to-end workflows.
7. Troubleshooting section.
8. Release/install instructions for non-developers.

---

## 14. Recommended Roadmap

### Phase 1 — Hardening

1. Add FTS integration tests.
2. Add path traversal/security tests.
3. Add Workshop subprocess timeout/error tests.
4. Validate all environment configuration centrally.
5. Add representative PZ fixture corpus.

### Phase 2 — Architecture

1. Split `src/index.ts` by tool family.
2. Introduce a typed tool registry.
3. Separate MCP adapters from domain services.
4. Standardize error handling.

### Phase 3 — Persistence

1. Introduce explicit schema versions.
2. Number migrations.
3. Add migration upgrade tests.
4. Add large-dataset import benchmarks.

### Phase 4 — Release Quality

1. Add coverage thresholds.
2. Add CodeQL/security analysis.
3. Test clean packaged output.
4. Document supported PZ builds.
5. Publish a stable installation path.

---

## 15. Priority Matrix

| Finding | Severity | Effort | Priority |
|---|---|---:|---:|
| Split oversized `index.ts` | High | Medium | P0 |
| Version database migrations | High | Medium | P0 |
| Harden filesystem/subprocess boundaries | High | Medium | P0 |
| Expand FTS/database integration tests | High | Medium | P0 |
| Add real PZ parser fixtures | Medium | Medium | P1 |
| Centralize configuration validation | Medium | Low | P1 |
| Standardize MCP error handling | Medium | Medium | P1 |
| Add typed tool registry | Medium | Medium | P1 |
| Improve Workshop failure handling | Medium | Medium | P1 |
| Add coverage/security CI | Medium | Low | P1 |
| Remove review-history comments | Low | Low | P2 |
| Reduce `any` usage | Low | Medium | P2 |
| Add performance benchmarks | Low | Medium | P2 |

---

## 16. Final Verdict

The project has moved beyond a simple prototype. The combination of MCP tools, structured SQLite/FTS indexing, Project Zomboid parsing, script generation, validation, recipe analysis, knowledge search, and Workshop analysis gives it a coherent product architecture.

The most important next step is **not adding more features**. It is making the existing feature set easier to maintain and safer to invoke autonomously.

### Top 5 actions

1. **Decompose `src/index.ts`.**
2. **Introduce explicit database migrations/versioning.**
3. **Strengthen FTS/parser/database integration tests with real PZ fixtures.**
4. **Harden filesystem and SteamCMD boundaries.**
5. **Add typed tool registration and standardized MCP errors.**

If those five areas are addressed, the project should become substantially easier to extend while reducing the risk of regressions as additional Project Zomboid Build 42 functionality is added.

---

## Audit Basis

This audit was performed against the GitHub repository's `master` branch and focused on repository structure, `package.json`, README, CI workflow, MCP entrypoint, database implementation, and available source organization. Findings that require runtime execution or exhaustive inspection of every implementation path should be verified with a local clean checkout and full test/build run before being treated as confirmed defects.
