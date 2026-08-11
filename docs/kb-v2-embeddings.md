# KB v2 — Phase 5: Semantic search (embeddings) — implemented (Option A)

**Status:** ✅ **shipped — Option A (local WASM embeddings) is implemented and green.**
**Scope:** Finding #7b from the KB overhaul (`reload` vs `reloads` is solved by porter stemming, which shipped in Phase 0; *conceptual* matching — "what do I need for blacksmithing" surfacing the blacksmithing doc without keyword overlap — needs vector search).

**What shipped (2026-08):** `embed_knowledge` tool + `search_knowledge_base { semantic: true }` hybrid search, schema **v5** (`knowledge_chunk_vectors`), `src/knowledge/EmbeddingManager.ts` (WASM encoder + cosine/blend), `PZ_MCP_EMBEDDING_MODEL` / `PZ_MCP_EMBEDDING_BATCH_SIZE` env vars, tests + docs. Everything is **opt-in**: no model downloads at install/boot/index time; embedding happens only via `embed_knowledge`; `semantic: true` without vectors returns a friendly "run embed_knowledge first" error (never a crash, never a silent FTS fallback). Model downloads **once** into `<data>/models/` (`<cacheDir>/<org>/<repo>/` layout) and persists across restarts. **Option B (API providers) is OUT OF SCOPE** — the storage layer is provider-agnostic, but only the local encoder is implemented.

---

## 1. What is already shipped (do not rebuild)

| Capability | Where |
|---|---|
| Porter-stemmed, prefix-matched FTS5 (`reload` → `reloads/reloading`, `getPlay` → `getPlayer`) | `knowledge_chunks_fts`, `tokenize='porter unicode61'` |
| Chunked corpus ready to embed (one row per section/member) | `knowledge_chunks` (108k chunks: 3.4k wiki/api + 104k javadocs members) |
| Deterministic chunk ids (`doc#slug`) → incremental embedding by `mtime` falls out for free | `chunk_topic`, `seq` |
| Portable doc metadata for result decoration | `doc_type`, `tags`, `meta` (package/version/kind) |

So Phase 5 is purely additive: **vectors + a similarity path on top of the existing FTS search**, not a replacement of it.

---

## 2. Design decisions (recommended)

1. **Hybrid retrieval, FTS-first.** Keyword search stays the primary path — in modding, exact identifiers (class names, method signatures, script property names) are the ground truth and FTS nails those. Semantic search is a *recall booster*: `hybrid = keyword hits ∪ semantic hits`, re-ranked by a score blend (`0.7 · bm25 + 0.3 · cosine` tunable). No keyword hit → still show top semantic hits so conceptual questions work.
2. **Local-first, zero-native-dependency preserved.** The project's defining constraint is "pure TypeScript + built-in `node:sqlite`, no native deps". Research (2026) confirms a fully local path now exists that keeps that promise:
   - **`@huggingface/transformers` (transformers.js) on the pure WASM backend** — no native compilation, works on Windows. transformers.js v3 hard-depends on `onnxruntime-node` (native), so `package.json` pins **v3.8.1** and uses an **npm override** mapping `onnxruntime-node` → `onnxruntime-web` (pure JS/WASM): the native module is never installed and the WASM runtime ships in the package. `env.backends.onnx.wasm.wasmPaths` points at onnxruntime-web's local `dist/` as a `file://` URL (a raw Windows path would be parsed as the `c:` URL scheme by its factory loader), `numThreads = 1`, `env.allowRemoteModels` gates the one-time download.
   - **Vector storage without sqlite-vec:** `node:sqlite`'s `DatabaseSync` has no clean `load_extension` path, so a hosted SQLite extension (sqlite-vec) is a poor fit. Instead store each vector as a `Float32Array` → `BLOB` in a plain `knowledge_chunk_vectors` table (one row per chunk). Brute-force cosine over 108k × 384-dim vectors with typed arrays is **~10–50 ms per query** in JS — comfortably fast for an MCP tool, zero new infrastructure.
   - Model: `all-MiniLM-L6-v2` (ONNX ~90 MB, 384 dims) or `bge-small-en-v1.5` (~130 MB, 384 dims, slightly better retrieval quality). Download once into the data dir at first index.
3. **API option stays optional (opt-in flag).** `PZ_MCP_EMBEDDING_PROVIDER` + `..._API_KEY` env vars; when set, index-time embedding goes through the provider instead of the local model. Useful for users who prefer cloud quality or lack the disk/RAM for a local model. Off by default.

---

## 3. Option A — Local (recommended default)

**Costs (one-time, at index):**

| Item | Cost |
|---|---|
| Model download | ~90–130 MB once (into `<data>/models/`) |
| Embedding pass | 108k chunks × ~5–20 ms ≈ **10–30 min** single-threaded; parallelize with `worker_threads` (4–8 workers) → ~3–8 min |
| RAM | ~200–400 MB during embedding (model + batch), freed after |
| Query latency | model stays resident (lazy-loaded); embed query ≈ 5–20 ms, cosine scan ≈ 10–50 ms |

**Schema addition (migration v2 → v3, still a disposable-cache clean drop):**

```sql
CREATE TABLE knowledge_chunk_vectors (
  chunk_topic TEXT PRIMARY KEY REFERENCES knowledge_chunks(chunk_topic),
  doc_topic   TEXT NOT NULL,
  model       TEXT NOT NULL,          -- 'all-MiniLM-L6-v2' — re-index on model change
  dims        INTEGER NOT NULL,
  vector      BLOB NOT NULL,          -- Float32Array bytes
  updated_at  TEXT NOT NULL
);
CREATE INDEX idx_kcv_doc ON knowledge_chunk_vectors (doc_topic);
```

**Index pipeline** (`index_knowledge_base` / `index_javadocs` gain nothing new — a separate `embed_knowledge` tool + automatic backfill):
- `embed_knowledge { model?, batchSize? }` walks `knowledge_chunks` where no vector exists (or model/dims changed), embeds in batches (parallelized), upserts rows. Incremental by nature — re-running only touches new/changed chunks.
- Chunk text embedded = `title + content` (signature + body) so method overloads stay distinct.

**Search pipeline** (new `search_knowledge_base_semantic` tool + `search_knowledge_base { semantic: true }` opt-in param):
1. Embed the query with the same model.
2. Cosine scan → top-K (e.g. 50) by similarity.
3. FTS bm25 as today → top-K.
4. Merge, blend scores, cap at `limit`, decorate with existing `type`/`package`/`section` metadata, render with the existing formatter.

**Files touched (as built):** `src/knowledge/EmbeddingManager.ts` (new), `src/knowledge/KnowledgeBaseManager.ts` (v5 migration + vector table + hybrid search), `src/tools/localData.ts` (`embed_knowledge` tool + semantic forwarding), `src/schemas.ts` (schema + `TOOL_SCHEMAS`), `src/utils/config.ts` (env), `src/utils/formatters.ts` (`formatEmbedKnowledgeResults`), `src/tools/registry.ts` + `src/index.ts` (wiring), `package.json` (transformers v3.8.1 + `onnxruntime-node`→`onnxruntime-web` override), tests, docs.

---

## 4. Option B — API embeddings (opt-in flag)

**Providers (verified in the Gravity catalog):**

| Provider | Model | Dims | List price (verify at signup) | Full-corpus estimate* |
|---|---|---|---|---|
| OpenAI | `text-embedding-3-small` | 1536 (512/1024 via `dimensions`) | ~$0.02 / 1M tokens | ≈ $0.32 |
| Jina AI | `jina-embeddings-v3` | 1024 | ~$0.02 / 1M tokens (free tier) | ≈ $0.32 |
| Voyage AI | `voyage-3-small` | 1024 | ~$0.02 / 1M tokens | ≈ $0.32 |
| Nomic | `nomic-embed-text-v1.5` | 768 | ~$0.06 / 1M tokens | ≈ $0.97 |
| Cohere | `embed-v3` | 1024 | ~$0.10 / 1M tokens (trial key free tier) | ≈ $1.62 |

\* 108k chunks × ~150 tokens avg ≈ 16.2M tokens per full re-index. One-off per corpus; incremental embedding only re-bills changed chunks.

**Tradeoffs:** best embedding quality with zero local RAM/disk; requires network + API key; re-index over the full corpus bills per run (cheap at these volumes, but not free); privacy — chunk text leaves the machine (fine for public PZ docs, a real concern if users index private notes; the local model avoids this entirely).

**Mechanism:** `PZ_MCP_EMBEDDING_PROVIDER=openai|jina|voyage|nomic|cohere`, `PZ_MCP_EMBEDDING_API_KEY`, optional `PZ_MCP_EMBEDDING_MODEL`. EmbeddingManager picks the encoder from env; the vector table stores the model name so a provider/model change forces a clean re-embed. Batch size 128–512 chunks per request, `Promise.all` concurrency ~4.

---

## 5. Recommendation

**Ship Option A (local WASM) as the default** — it preserves the repo's zero-native-dependency identity, is private, and the volumes (108k chunks, 384-dim) are small enough that brute-force cosine in JS is a non-issue. **Add Option B as an env-flag escape hatch** for users who prefer cloud quality or lack the RAM. The storage layer (`knowledge_chunk_vectors`) and the merge/rerank logic are identical for both — only the encoder swaps, so the API flag costs almost nothing extra.

**Open questions before implementation:**
1. Default model: `all-MiniLM-L6-v2` (smaller/faster) vs `bge-small-en-v1.5` (better recall)? — default recommendation: MiniLM; bge via env override.
2. Score blend weights (0.7 bm25 / 0.3 cosine) — tune on the real corpus during a smoke test?
3. Separate `search_knowledge_base_semantic` tool vs `semantic: true` param on the existing tool? — recommendation: param, keeps the tool surface stable and the agent guidance one line.
4. Should embedding be automatic at `index_*` time (slower indexing, zero extra steps) or a separate `embed_knowledge` step (explicit, incremental, scriptable)? — recommendation: separate step.

---

## 6. Sequencing

| Step | Work | Verify | Status |
|---|---|---|---|
| 1 | v5 migration (vector table) + `EmbeddingManager` (WASM encode, batch) | unit tests with a tiny stub encoder; `npm run build` | ✅ |
| 2 | `embed_knowledge` tool + incremental backfill | `npm run verify:kb` extended with vector checks | ✅ |
| 3 | Hybrid search (merge + blend) + `semantic` param + formatter | integration tests; real-corpus smoke vs the 11 findings | ✅ |
| 4 | Option B provider adapter (env-gated, never runs by default) | mock HTTP tests; docs | ⬜ **out of scope** |
| 5 | README/TOOLS.md/CHANGELOG/progress-file update + full suite + review | `npm test`, `npm run lint` | ✅ (598 tests / 118 suites, `verify:kb` green) |
