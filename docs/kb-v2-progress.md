# KB v2 Overhaul — Phase Progress

Tracks the knowledge base overhaul (the 11-finding review) through its
implementation phases. Phase 0–4 landed together in one pass: the schema v2
change is load-bearing, so the indexing pipeline, search/retrieval, tool
guidance and tests had to land in the same unit to keep the manager and the
test suite green. Phase 5 (semantic search, Option A — local WASM embeddings)
shipped after the FTS rounds per the locked design in
`docs/kb-v2-embeddings.md`.

Legend: ✅ done · ⏸ deferred (decision recorded) · ⬜ not started

| Phase | Scope | Findings | Status | Key artifacts |
| ----- | ----- | -------- | ------ | ------------- |
| 0 | Schema redesign + chunker | 1, 2, 3, 4, 5, 7a, 9 | ✅ | `src/knowledge/kbChunker.ts`, `KnowledgeBaseManager.ensureSchema` |
| 1 | Indexing pipeline rewrite | 1, 2, 4, 5, 9 | ✅ | `KnowledgeBaseManager.indexDirectory` (chunk write path, `topicPrefix`, stored stats, incremental skip-before-read) |
| 2 | Search, retrieval, resources | 6, 7a, 8, 10 | ✅ | `search` (filters, snippets), `getTopic` doc/#section, `getSection` (friendly heading/member lookup) + `get_knowledge_section` tool, `index.ts` resource URIs, `schemas.ts`, `formatters.ts`, `discovery.ts` |
| 3 | Tool guidance + docs | 11 | ✅ | `localData.ts` descriptions, README, TOOLS.md, CHANGELOG |
| 4 | Tests + verification | — | ✅ | `kbChunker.unit.test.js` (new), KB/javadocs/frontmatter/integration suites, `scripts/_verify_kb.mjs` |
| 5 | Semantic search (embeddings) | 7b | ✅ | Option A (local WASM via transformers.js + onnxruntime-web override, schema v5 `knowledge_chunk_vectors`) — `embed_knowledge` tool, `search_knowledge_base { semantic: true }` hybrid (0.7·bm25 + 0.3·cosine), one-time model download under `<data>/models/`; Option B (API) out of scope |
| 6 | Search quality review fixes (type-aware ranking, search+read, size metadata) | 1–9 + minors | ✅ | `search` rework (type-aware defaults, bm25 weights, bodyless downweight, prefix fallback), `types`/`includeContent`/`maxContent`, `chars`/`words`, `getSections`, schema v3, 8 docs frontmatter, chunk cap 6k |

---

## Phase 0 — Schema redesign (foundation)

- `KB_SCHEMA_VERSION = 2` + migration: legacy v1 tables (`knowledge_docs` with
  full `content` copy, full-copy `knowledge_fts`) are dropped and recreated —
  clean break, logged only when a legacy table was actually present. KB DB is
  a disposable cache, so re-running the index tools repopulates.
- `knowledge_docs`: file metadata only (topic, title, source, `doc_type`,
  tags, meta, precomputed `lines`/`words`/`chars`, mtime, file_path).
- `knowledge_chunks`: one row per section/member chunk
  (`chunk_topic` UNIQUE, doc_topic, title, content, heading, level, seq).
- `knowledge_chunks_fts`: **external-content FTS5** (`content='knowledge_chunks'`,
  `tokenize='porter unicode61'`) + ai/ad/au triggers — content stored once,
  index-only FTS (finding #4).
- `src/knowledge/kbChunker.ts`: frontmatter parsing incl. inline arrays,
  doc-type inference, per-type cleaning, deterministic heading chunking
  (H1/H2 + javadocs H3 members), size caps with word-boundary splits,
  member slugs safe for generics.

## Phase 1 — Indexing pipeline

- `indexDirectory`: walk → clean → chunk → write doc + chunks in one
  transaction with per-file savepoints; chunk deletes cascade to FTS via
  triggers; stats computed at index time; `topicPrefix` option
  (`index_javadocs` → `javadocs/...` topics); incremental sync skips
  unchanged files **before** read/parse and prunes deleted files (cascading
  to chunks); `JavaDocIndexer` unchanged (one `.md` per class — member
  chunking happens at index time).
- Verification: `scripts/_verify_kb.mjs` + `npm run verify:kb`.

## Phase 2 — Search, retrieval, resources

- `search`: chunk-level results (`topic` = `docTopic#slug`, plus `docTopic`,
  `docTitle`, title, section, snippet, score, portable `type`, `package`,
  `path`); porter stemmed + last-term prefix; `topic`/`type`/`package`
  filters; line-window snippets with table collapse.
- `getTopic(doc)` assembles the full doc from chunks; `getTopic(doc#section)`
  returns exactly that chunk.
- `index.ts`: `knowledge://` URIs support path-prefixed topics and `#`
  fragments (whole segment percent-encoded); malformed escapes rejected;
  `resources/list` uses stored stats (near-zero memory).
- `search_knowledge_base` schema: `type` (enum) + `package` params.

## Phase 3 — Tool guidance + docs

- `search_knowledge_base` / `index_knowledge_base` descriptions rewritten with
  usage examples, filters, and the index_javadocs-first note.
- README workflow section, TOOLS.md tool reference, CHANGELOG entry.

## Phase 4 — Tests + verification

- New `tests/unit/kbChunker.unit.test.js` (frontmatter arrays, cleaning,
  boundaries, determinism, dedupe, overflow parts, javadocs members, generics
  slugs, parseKbDoc metadata).
- Updated KB / javadocs / frontmatter / integration suites (chunk results,
  path-prefixed topics, section reads, migration, malformed URIs).
- `scripts/_verify_kb.mjs` hermetic real-corpus verification.

## Phase 5 — Semantic search (Option A: local WASM embeddings, shipped)

- **`embed_knowledge` tool (opt-in)** — embeds every chunk missing a vector
  (or whose model changed) as `title + content`, in batches, into the schema
  **v5** `knowledge_chunk_vectors` table (Float32Array BLOB, `chunk_topic` PK,
  `idx_kcv_doc` index). `dryRun: true` previews pending work with zero
  download/embed/write; `limit` caps a run. Re-running is incremental and
  cheap; a model change (`PZ_MCP_EMBEDDING_MODEL`) forces a clean re-embed.
  The model downloads **once** into `<data>/models/` and persists — a cached
  second run is provably network-free (tested with an injected fake
  downloader). No model is downloaded at install, boot, or index_* time.
- **`search_knowledge_base { semantic: true }`** — hybrid retrieval: FTS
  bm25 top-K ∪ brute-force cosine top-K (typed arrays), blended
  `0.7·bm25 + 0.3·cosine` (tunable consts), capped at `limit`, decorated with
  the existing metadata + formatter. No keyword hit → semantic hits still
  returned. `semantic: true` with no vectors → friendly
  "run embed_knowledge first" error — never a crash, never a silent FTS
  fallback; a stored model mismatch guides a re-embed.
- **Runtime** — `@huggingface/transformers` **v3.8.1** on the pure WASM
  backend: package.json npm-overrides `onnxruntime-node` → `onnxruntime-web`
  (native module never installed), `wasmPaths` as a `file://` URL of the
  local dist, lazy model import/load (boot and index_* never touch it),
  model kept resident for query-time.
- **Tests** — `embeddingManager.unit.test.js` (cosine + blend math,
  one-time-download policy) + `knowledgeBase.embeddings.unit.test.js`
  (v5 migration, incremental backfill, model-change re-embed, dry-run,
  no-vectors error, hybrid search, topic filter on the semantic scan) with a
  tiny stub encoder (no model in CI); server integration coverage;
  `scripts/_verify_kb.mjs` extended (v5 schema + vector-table checks).
  Design doc: `docs/kb-v2-embeddings.md`.

## Phase 6 — Search quality review fixes (the 10-finding review, #10 deferred)

User decision: ship findings 1–9 + the two minors now; Phase 5 (#10, semantic
search) stays parked. All changes are inside `KnowledgeBaseManager.ts` +
`schemas.ts` + `localData.ts`/`formatters.ts` — no schema-breaking migration
(v2 → v3 is an additive `ALTER TABLE ADD COLUMN`), no new deps.

- **Type-aware ranking (#1)** — mixed search (no type/package filter) ranks
  prose docs first for natural-language queries and javadocs first for
  identifier-looking ones (`looksLikeIdentifier`: caps/dots/underscores/digits);
  bodyless chunks get a rank penalty in the prose case. Verified live on the
  real corpus: `anvil` → `Build42_Blacksmithing_Research` first (was 6/6
  constants); `getSquare`/`ANVIL_WEIGHT` still surface javadocs first.
- **bm25 weights (#6)** — `bm25(fts, 5.0, 1.0, 3.0, 1.0, 1.0, 2.0, 1.0)`
  favors chunk_topic/title/tags over content.
- **chars/words per result (#3)** — computed in memory, no extra query;
  agents budget context before reading.
- **includeContent / maxContent (#2)** — search returns capped inline bodies
  (default 8k, max 20k chars), filled in rank order — search + read in one
  call, no N+1 `get_knowledge_section`.
- **Prefix tightening (#4)** — last-term prefix only as a fallback when plain
  matching returns nothing; short terms (< 3 chars) never expand.
- **`types` multi-select (#5)** — `["research", "wiki"]` etc.; `type` stays
  a single-select alias.
- **Bodyless tagging (#9)** — `isBodyless` in the chunker; schema v3
  `bodyless` column; downweighted now, and Phase 5 embeddings will skip/
  embed-title-only them. Existing v2 DBs migrate additively (default 0 until
  re-indexed — safe conservative default).
- **Chunk cap 12k → 6k (#8)** — tighter retrieval units (~1.5k tokens);
  research sections average 1.3k so most are untouched.
- **Frontmatter for 8 root docs (#7)** — 7 `Build42_*_Research.md` + README
  now carry `title`/`source`/`build`/`tags` (the last docs relying on
  H1/`> Source:` fallbacks).
- **`getSections` batch (minor)** — `get_knowledge_section` accepts
  `sections[]`; one call reads several javadocs members, `null` on miss.
- Deck: KB rows show chars/words + an include-content toggle (inline bodies);
  guides/examples updated. `scripts/_verify_kb.mjs` extended to 27 checks.

---

## Verification status

| Check | Result |
| ----- | ------ |
| `npm run build` | ✅ clean |
| `npm test` | ✅ 598/598, 118 suites — incl. the new embedding suites (cosine + blend math, one-time-download policy, local-only query path, v5 migration, incremental backfill, model-change re-embed, dry-run (incl. no-wipe-on-model-change), no-vectors error, hybrid search), the tool-registry snapshot (30 tools incl. `embed_knowledge`), and the integration cases (`embed_knowledge` dry-run, `semantic: true` friendly error) |
| `npm run lint` | ✅ 0 errors |
| Real-corpus smoke | ✅ 211 markdown docs → 3,751 chunks; 4,683 javadocs → 104,614 member chunks (10s, 0 errors); `anvil` → blacksmithing research first; schema v5 + empty vector table after indexing (opt-in confirmed) |
| `npm run verify:kb` | ✅ 31/31 checks — Phase 0–6 checks plus v5 schema version, vector-table columns, `idx_kcv_doc` index, indexing-leaves-vectors-empty (opt-in), legacy→v5 migration |
| `npm run verify:deck` | ✅ ALL CHECKS PASSED against a live bridge (29 tools registered, deck untouched by Phase 5) |

## Re-index note

Existing databases are migrated to **v5 additively** (v3/v4 → v5 adds the
`knowledge_chunk_vectors` table; existing chunks are untouched — vectors are
backfilled on demand via `embed_knowledge`). Legacy v1 tables are still
dropped and recreated (clean break). Run `index_knowledge_base` and
`index_javadocs` once after any v2/v3/v4 → v5 upgrade to rebuild the search
index, then `embed_knowledge` once to backfill semantic vectors.
