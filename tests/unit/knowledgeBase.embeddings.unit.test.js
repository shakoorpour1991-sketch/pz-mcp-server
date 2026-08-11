/**
 * KnowledgeBaseManager Phase 5 embeddings (semantic search) — unit tests.
 *
 * Migration to schema v5, embed_knowledge incremental backfill + model-change
 * re-embed + dry-run preview, the friendly no-vectors error, and the hybrid
 * search (FTS ∪ semantic, 0.7·bm25 + 0.3·cosine) — all driven by a tiny stub
 * encoder with a small synonym table, so NO model is downloaded in CI.
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { DatabaseSync } from "node:sqlite";

import { KnowledgeBaseManager } from "../../dist/knowledge/KnowledgeBaseManager.js";
import { EmbeddingManager } from "../../dist/knowledge/EmbeddingManager.js";

/**
 * Deterministic semantic stub: bag-of-words over stemmed tokens with a small
 * synonym table, so "aquatic angling" surfaces the watering chunk that shares
 * zero keywords ("water"/"fish"/"rod" via synonyms + light stemming).
 */
const SYN = {
  aquatic: ["water", "fish"],
  angling: ["fish", "rod"],
  smithing: ["metal", "forge", "anvil"],
  metalworking: ["metal", "forge"],
};

class SemanticStubEncoder {
  constructor({ modelName = "stub/semantic", dims = 64, cached = false } = {}) {
    this.modelName = modelName;
    this._dims = dims;
    this.cached = cached;
    this.ensureCalls = [];
    /** Every text batch handed to embedTexts (asserts title+content). */
    this.recordedTexts = [];
  }

  isModelCached() {
    return this.cached;
  }

  async ensureModel(allowDownload = true) {
    this.ensureCalls.push(allowDownload);
    // A download puts the model on disk (mirrors the real cache layout).
    if (allowDownload) this.cached = true;
  }

  stem(w) {
    let s = w;
    for (const suf of ["ies", "ing", "es", "s", "ed"]) {
      if (s.length > 4 && s.endsWith(suf)) {
        s = s.slice(0, -suf.length);
        break;
      }
    }
    return s;
  }

  hash(w) {
    let h = 0;
    for (const c of w) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return h >>> 0;
  }

  embedOne(text) {
    const v = new Float32Array(this._dims);
    const tokens = text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    for (const raw of tokens) {
      const expanded = new Set([raw, ...(SYN[raw] ?? [])]);
      for (const tok of expanded) {
        v[this.hash(this.stem(tok)) % this._dims] += 1;
      }
    }
    const n = Math.sqrt(Array.from(v).reduce((a, x) => a + x * x, 0)) || 1;
    for (let i = 0; i < this._dims; i++) v[i] /= n;
    return v;
  }

  async embedTexts(texts) {
    this.recordedTexts.push(...texts);
    return texts.map((t) => this.embedOne(t));
  }

  get dims() {
    return this._dims;
  }
}

function makeKb(tmpDir, encoder) {
  const kb = new KnowledgeBaseManager(path.join(tmpDir, "data"), {
    embeddingManager: new EmbeddingManager({ encoder }),
  });
  return kb;
}

const GUIDE_DOC = [
  "# Guide",
  "",
  "Intro paragraph.",
  "",
  "## Watering",
  "",
  "Water is essential for crops. Fishing requires a rod.",
  "",
  "## Forging",
  "",
  "Metalworking needs a forge and an anvil.",
  "",
].join("\n");

describe("KB schema v5 (semantic vector table)", () => {
  let tmpDir;
  let docsDir;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-kb-v5-"));
    docsDir = path.join(tmpDir, "docs");
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(path.join(docsDir, "Guide.md"), GUIDE_DOC);
    kb = makeKb(tmpDir, new SemanticStubEncoder());
    await kb.initialize();
    await kb.indexDirectory(docsDir);
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("fresh DB is v5 with the vector table + index", () => {
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      assert.equal(raw.prepare("PRAGMA user_version").get().user_version, 5);
      const cols = raw
        .prepare("PRAGMA table_info(knowledge_chunk_vectors)")
        .all()
        .map((c) => c.name);
      assert.deepEqual(cols, [
        "chunk_topic",
        "doc_topic",
        "model",
        "dims",
        "vector",
        "updated_at",
      ]);
      const idx = raw
        .prepare("SELECT name FROM sqlite_master WHERE type='index' AND name='idx_kcv_doc'")
        .get();
      assert.notEqual(idx, undefined);
      // Chunks exist but no vectors (opt-in — indexing never embeds).
      assert.equal(raw.prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors").get().n, 0);
    } finally {
      raw.close();
    }
  });

  test("a v4 DB migrates to v5 additively (existing rows survive)", async () => {
    // Force user_version back to 4 (tables already exist) and reopen — the
    // v4 → v5 path must just add the vector table without touching chunks.
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"));
    try {
      raw.exec("PRAGMA user_version = 4");
    } finally {
      raw.close();
    }
    kb.close();
    kb = makeKb(tmpDir, new SemanticStubEncoder());
    await kb.initialize();
    const raw2 = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      assert.equal(raw2.prepare("PRAGMA user_version").get().user_version, 5);
      const chunks = raw2.prepare("SELECT COUNT(*) AS n FROM knowledge_chunks").get().n;
      assert.ok(chunks >= 2, `chunks survive migration (${chunks})`);
    } finally {
      raw2.close();
    }
  });
});

describe("embedKnowledge (Phase 5 backfill)", () => {
  let tmpDir;
  let docsDir;
  let encoder;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-kb-embed-"));
    docsDir = path.join(tmpDir, "docs");
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(path.join(docsDir, "Guide.md"), GUIDE_DOC);
    encoder = new SemanticStubEncoder();
    kb = makeKb(tmpDir, encoder);
    await kb.initialize();
    await kb.indexDirectory(docsDir);
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("dryRun previews without downloading, embedding, or writing", async () => {
    const res = await kb.embedKnowledge({ dryRun: true });
    assert.equal(res.dryRun, true);
    assert.equal(res.model, "stub/semantic");
    assert.equal(res.dims, 64);
    assert.equal(res.embedded, 0);
    assert.equal(res.vectors, 0);
    assert.ok(res.total >= 2);
    assert.equal(res.skipped, 0, "nothing embedded yet, so nothing skipped");
    assert.equal(encoder.ensureCalls.length, 0, "no model download on dry-run");
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      assert.equal(raw.prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors").get().n, 0);
    } finally {
      raw.close();
    }
  });

  test("embeds every chunk; chunk text embedded = title + content", async () => {
    const res = await kb.embedKnowledge({});
    assert.equal(res.dryRun, false);
    assert.equal(res.model, "stub/semantic");
    assert.equal(res.dims, 64);
    assert.equal(res.embedded, res.total);
    assert.equal(res.vectors, res.total);
    assert.equal(res.skipped, 0);
    // The stub recorded every embedded text — each is title + content.
    assert.equal(encoder.recordedTexts.length, res.total);
    assert.ok(
      encoder.recordedTexts.some((t) => t.startsWith("Watering\n")),
      "watering chunk text carries its title",
    );
    assert.ok(
      encoder.recordedTexts.some((t) => t.startsWith("Forging\n")),
      "forging chunk text carries its title",
    );
    // One download (first run, model not cached), stored under the default model.
    assert.deepEqual(encoder.ensureCalls, [true]);
  });

  test("re-running is incremental — only chunks without a vector are embedded", async () => {
    const res = await kb.embedKnowledge({});
    assert.equal(res.embedded, 0);
    assert.equal(res.skipped, res.total);
    assert.equal(res.vectors, res.total);
    // Nothing pending → the early return skips even the cached-model load:
    // zero work, and certainly no re-download.
    assert.deepEqual(encoder.ensureCalls, [true]);
  });

  test("limit embeds only the first N pending chunks", async () => {
    // Fresh state: wipe the vectors, then a limit-1 run embeds exactly one.
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"));
    try {
      raw.exec("DELETE FROM knowledge_chunk_vectors");
    } finally {
      raw.close();
    }
    const res = await kb.embedKnowledge({ limit: 1 });
    assert.equal(res.embedded, 1);
    assert.equal(res.vectors, 1);
    // The model is already on disk from the first embed — this run must NOT
    // re-download (ensureModel(false) is the observable no-download gate).
    assert.deepEqual(encoder.ensureCalls, [true, false]);
  });

  test("model change forces a clean re-embed of every chunk", async () => {
    const res = await kb.embedKnowledge({ model: "stub/other" });
    assert.equal(res.modelChanged, true);
    assert.equal(res.embedded, res.total);
    assert.equal(res.vectors, res.total);
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      const models = raw
        .prepare("SELECT DISTINCT model FROM knowledge_chunk_vectors")
        .all()
        .map((r) => r.model);
      assert.deepEqual(models, ["stub/other"]);
    } finally {
      raw.close();
    }
  });

  test("dryRun with a model change previews a re-embed without wiping vectors", async () => {
    // Vectors currently exist (model "stub/other" from the re-embed test) — a
    // dry-run preview of a different model must NOT delete them, and must
    // report every chunk as pending for the new model.
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      assert.equal(
        raw.prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors").get().n,
        3,
        "vectors exist before the dry-run",
      );
    } finally {
      raw.close();
    }
    const callsBefore = encoder.ensureCalls.length;
    const res = await kb.embedKnowledge({ model: "stub/another", dryRun: true });
    assert.equal(res.dryRun, true);
    assert.equal(res.modelChanged, true);
    assert.equal(res.embedded, 0, "nothing embedded on a dry-run");
    assert.equal(res.vectors, 3, "dry-run leaves the vector table untouched");
    assert.equal(res.skipped, 0, "every chunk is pending for the new model");
    assert.equal(
      encoder.ensureCalls.length,
      callsBefore,
      "no model load on a dry-run",
    );
    // The stored vectors (and their model) survive the preview.
    const raw2 = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      assert.equal(
        raw2.prepare("SELECT COUNT(*) AS n FROM knowledge_chunk_vectors").get().n,
        3,
      );
      const models = raw2
        .prepare("SELECT DISTINCT model FROM knowledge_chunk_vectors")
        .all()
        .map((r) => r.model);
      assert.deepEqual(models, ["stub/other"]);
    } finally {
      raw2.close();
    }
  });

  test("orphan vectors (chunks re-indexed away) are pruned", async () => {
    // Simulate a re-index that removed the Guide doc (its chunks are deleted
    // directly; FK is not enforced, so the vector rows survive as orphans).
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"));
    try {
      raw.prepare("DELETE FROM knowledge_chunks WHERE doc_topic = ?").run("Guide");
    } finally {
      raw.close();
    }
    const res = await kb.embedKnowledge({ model: "stub/other" });
    assert.equal(res.vectors, 0, "orphan vector rows pruned");
    assert.equal(res.embedded, 0);
  });
});

describe("semantic search (hybrid, Phase 5)", () => {
  let tmpDir;
  let docsDir;
  let encoder;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-kb-sem-"));
    docsDir = path.join(tmpDir, "docs");
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(path.join(docsDir, "Guide.md"), GUIDE_DOC);
    encoder = new SemanticStubEncoder();
    kb = makeKb(tmpDir, encoder);
    await kb.initialize();
    await kb.indexDirectory(docsDir);
    await kb.embedKnowledge({});
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("semantic: true with no vectors → friendly error naming embed_knowledge", async () => {
    // Fresh KB (indexed, not embedded) in a separate dir.
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), "pz-kb-sem2-"));
    const kb2 = makeKb(tmp2, new SemanticStubEncoder());
    try {
      await kb2.initialize();
      await kb2.indexDirectory(docsDir);
      await assert.rejects(
        kb2.search("aquatic angling", { semantic: true }),
        /No semantic vectors indexed yet\. Run embed_knowledge first/,
      );
    } finally {
      kb2.close();
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });

  test("semantic: true with a mismatched stored model → friendly re-embed error", async () => {
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), "pz-kb-sem3-"));
    const enc2 = new SemanticStubEncoder({ modelName: "stub/semantic" });
    const kb2 = makeKb(tmp2, enc2);
    try {
      await kb2.initialize();
      await kb2.indexDirectory(docsDir);
      await kb2.embedKnowledge({ model: "stub/other" });
      await assert.rejects(
        kb2.search("water", { semantic: true }),
        /were embedded with model "stub\/other".*Re-run embed_knowledge/,
      );
    } finally {
      kb2.close();
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });

  test("no keyword hit → semantic hits are still returned", async () => {
    // "aquatic angling" shares zero tokens with the corpus (FTS = 0) but the
    // stub's synonyms map it onto the watering chunk.
    const ftsOnly = await kb.search("aquatic angling");
    assert.deepEqual(ftsOnly, []);
    const hybrid = await kb.search("aquatic angling", { semantic: true });
    assert.ok(hybrid.length > 0, "semantic hits returned despite no keyword hit");
    const watering = hybrid.find((r) => r.topic === "Guide#watering");
    assert.ok(watering, "watering chunk surfaces via synonyms");
    assert.ok(watering.snippet.includes("Water"));
    // A semantic-only hit scores 0.3·cosine (bm25 axis = 0) → score in (0, 0.3].
    // Sibling chunks with zero cosine blend to exactly 0 and are tolerated.
    assert.ok(
      watering.score > 0 && watering.score <= 0.3 + 1e-9,
      `watering score ${watering.score} in (0, 0.3]`,
    );
    for (const r of hybrid) {
      assert.ok(r.score <= 0.3 + 1e-9, `score ${r.score} capped at 0.3`);
    }
  });

  test("keyword hits are still present in the hybrid (FTS-first)", async () => {
    const hybrid = await kb.search("water", { semantic: true });
    assert.ok(hybrid.some((r) => r.topic === "Guide#watering"));
    const fts = await kb.search("water");
    assert.ok(fts.some((r) => r.topic === "Guide#watering"));
  });

  test("topic filter applies to the semantic scan", async () => {
    const hybrid = await kb.search("aquatic angling", {
      semantic: true,
      topic: "Guide",
    });
    assert.ok(hybrid.length > 0 && hybrid.every((r) => r.docTopic === "Guide"));
    const none = await kb.search("aquatic angling", {
      semantic: true,
      topic: "NoSuchDoc",
    });
    assert.deepEqual(none, []);
  });

  test("semantic: false is byte-identical to the FTS path", async () => {
    const plain = await kb.search("water", {});
    const explicit = await kb.search("water", { semantic: false });
    assert.deepEqual(plain.map((r) => r.topic), explicit.map((r) => r.topic));
  });
});
