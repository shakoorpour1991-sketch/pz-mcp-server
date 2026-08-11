# KB v2 Overhaul — Phase Progress

Tracks the knowledge base overhaul (the 11-finding review) through its
implementation phases. Phase 0–4 landed together in one pass: the schema v2
change is load-bearing, so the indexing pipeline, search/retrieval, tool
guidance and tests had to land in the same unit to keep the manager and the
test suite green. Phase 5 (semantic search) is deliberately deferred by user
decision — the FTS round ships first.

Legend: ✅ done · ⏸ deferred (decision recorded) · ⬜ not started

| Phase | Scope | Findings | Status | Key artifacts |
| ----- | ----- | -------- | ------ | ------------- |
| 0 | Schema redesign + chunker | 1, 2, 3, 4, 5, 7a, 9 | ✅ | `src/knowledge/kbChunker.ts`, `KnowledgeBaseManager.ensureSchema` |
| 1 | Indexing pipeline rewrite | 1, 2, 4, 5, 9 | ✅ | `KnowledgeBaseManager.indexDirectory` (chunk write path, `topicPrefix`, stored stats, incremental skip-before-read) |
| 2 | Search, retrieval, resources | 6, 7a, 8, 10 | ✅ | `search` (filters, snippets), `getTopic` doc/#section, `getSection` (friendly heading/member lookup) + `get_knowledge_section` tool, `index.ts` resource URIs, `schemas.ts`, `formatters.ts`, `discovery.ts` |
| 3 | Tool guidance + docs | 11 | ✅ | `localData.ts` descriptions, README, TOOLS.md, CHANGELOG |
| 4 | Tests + verification | — | ✅ | `kbChunker.unit.test.js` (new), KB/javadocs/frontmatter/integration suites, `scripts/_verify_kb.mjs` |
| 5 | Semantic search (embeddings) | 7b | ⏸ deferred | user chose **FTS-only round** (porter + prefix) over local (sqlite-vec+ONNX) or API (OpenAI/Gemini/Cohere) embeddings |
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

## Phase 5 — Semantic search (deferred, design ready)

- Porter stemming + prefix matching shipped in Phase 0 (#7a). Real semantic
  search (embeddings over chunks, precomputed at index time) is a dedicated
  follow-up. Design doc: `docs/kb-v2-embeddings.md` — recommendation:
  **local WASM embeddings via transformers.js** (`all-MiniLM-L6-v2`,
  zero native deps — research confirmed the WASM backend keeps the repo's
  no-native-deps identity, and 108k × 384-dim is small enough for pure-JS
  brute-force cosine, so sqlite-vec is unnecessary), plus an **opt-in API
  path** (`PZ_MCP_EMBEDDING_PROVIDER`: OpenAI/Jina/Voyage/Nomic/Cohere,
  ≈ $0.32–$1.62 per full re-index) and hybrid FTS+vector retrieval. Awaiting
  go-ahead (open questions: default model, blend weights, tool shape,
  auto-embed vs explicit `embed_knowledge` step).

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
| `npm test` | ✅ 559/559 (was 536), 111 suites — incl. the new search-ranking suite (type-aware defaults, multi-select, includeContent budget + truncation flag, chars/words, prefix tightening, conservative identifier heuristic), `getSections` batch, bodyless chunker tests, v2→v3 + v1→v3 migrations |
| `npm run lint` | ✅ 0 errors (10 pre-existing warnings in `admin/main.mjs`) |
| Real-corpus smoke | ✅ 211 markdown docs → 3,751 chunks; 4,683 javadocs → 104,614 member chunks (9s, 0 errors); `anvil` → blacksmithing research first |
| `npm run verify:kb` | ✅ 27/27 checks — Phase 0–4 checks plus prose-before-javadocs (`anvil`), identifier-first (`getSquare`), multi-select types, includeContent, chars/words metadata, bodyless tagging in DB, v1→v3 and v2→v3 migrations |
| `npm run verify:deck` | ✅ ALL CHECKS PASSED against a live bridge (29 tools registered) |

## Re-index note

Existing v2 databases are migrated to **v3 additively** (a `bodyless` column
is added; existing chunks default to not-bodyless until re-indexed — safe).
Legacy v1 tables are still dropped and recreated (clean break). Run
`index_knowledge_base` and `index_javadocs` once to repopulate and pick up
the bodyless tags (the server logs the migration on first boot after the
upgrade).
