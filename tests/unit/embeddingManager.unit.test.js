/**
 * EmbeddingManager unit tests (Phase 5 semantic search).
 *
 * Pure math (cosine + hybrid blend) and the one-time-download policy — all
 * against a tiny stub encoder with a recording downloader, so NO model is ever
 * downloaded in CI. The runtime transformers.js encoder is exercised by a
 * manual smoke test only (verified on Windows + Node 22 before this shipped).
 */
import { describe, test } from "node:test";
import assert from "node:assert/strict";

import {
  EmbeddingManager,
  cosineSimilarity,
  hybridBlend,
  HYBRID_BM25_WEIGHT,
  HYBRID_COSINE_WEIGHT,
} from "../../dist/knowledge/EmbeddingManager.js";

/**
 * Stub encoder: deterministic normalized pseudo-random vectors from the text,
 * and a recording ensureModel() — the injectable fake downloader the cache-
 * reuse test asserts on.
 */
class StubEncoder {
  constructor({ modelName = "stub/model", dims = 8, cached = false } = {}) {
    this.modelName = modelName;
    this._dims = dims;
    this.cached = cached;
    /** Records the allowDownload flag of every ensureModel() call. */
    this.ensureCalls = [];
    this.embedCalls = 0;
  }

  isModelCached() {
    return this.cached;
  }

  async ensureModel(allowDownload = true) {
    this.ensureCalls.push(allowDownload);
    // A download puts the model on disk (mirrors the real cache layout); a
    // local-only load with no cache fails loudly (mirrors the encoder).
    if (allowDownload) {
      this.cached = true;
    } else if (!this.cached) {
      throw new Error("model not cached — local-only load refused");
    }
  }

  async embedTexts(texts) {
    this.embedCalls++;
    return texts.map((t) => {
      const v = new Float32Array(this._dims);
      let h = 0;
      for (const ch of t) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      for (let i = 0; i < this._dims; i++) {
        h = (h * 1103515245 + 12345) >>> 0;
        v[i] = (h / 2 ** 32) * 2 - 1;
      }
      const n = Math.sqrt(Array.from(v).reduce((a, x) => a + x * x, 0)) || 1;
      for (let i = 0; i < this._dims; i++) v[i] /= n;
      return v;
    });
  }

  get dims() {
    return this._dims;
  }
}

describe("cosineSimilarity (pure math)", () => {
  test("identical vectors → 1", () => {
    const a = new Float32Array([1, 0, 0]);
    assert.equal(cosineSimilarity(a, new Float32Array([1, 0, 0])), 1);
  });

  test("orthogonal vectors → 0", () => {
    const a = new Float32Array([1, 0, 0]);
    const b = new Float32Array([0, 1, 0]);
    assert.ok(Math.abs(cosineSimilarity(a, b)) < 1e-9);
  });

  test("opposite vectors → -1", () => {
    const a = new Float32Array([1, 0, 0]);
    assert.ok(Math.abs(cosineSimilarity(a, new Float32Array([-1, 0, 0])) + 1) < 1e-9);
  });

  test("zero vector → 0 (never NaN)", () => {
    assert.equal(cosineSimilarity(new Float32Array([0, 0]), new Float32Array([1, 1])), 0);
  });

  test("length mismatch → 0", () => {
    assert.equal(
      cosineSimilarity(new Float32Array([1, 2]), new Float32Array([1, 2, 3])),
      0,
    );
  });
});

describe("hybridBlend (0.7·bm25 + 0.3·cosine)", () => {
  test("default weights blend both signals", () => {
    assert.equal(hybridBlend(1, 1), HYBRID_BM25_WEIGHT + HYBRID_COSINE_WEIGHT);
    assert.equal(hybridBlend(0.5, 0.5), 0.7 * 0.5 + 0.3 * 0.5);
  });

  test("a chunk absent from one path contributes 0 on that axis", () => {
    // Semantic-only hit: 0.3 · cosine. FTS-only hit: 0.7 · bm25.
    assert.equal(hybridBlend(undefined, 0.8), HYBRID_COSINE_WEIGHT * 0.8);
    assert.equal(hybridBlend(0.6, undefined), HYBRID_BM25_WEIGHT * 0.6);
    assert.equal(hybridBlend(undefined, undefined), 0);
  });

  test("weights are tunable", () => {
    assert.equal(
      hybridBlend(1, 0, { bm25: 0.9, cosine: 0.1 }),
      0.9,
    );
  });
});

describe("EmbeddingManager one-time download policy", () => {
  test("downloads when the model is NOT cached, never again once cached", async () => {
    const enc = new StubEncoder({ cached: false });
    const mgr = new EmbeddingManager({ encoder: enc });

    await mgr.ensureModel();
    assert.deepEqual(enc.ensureCalls, [true], "first run downloads");

    // Simulate a second embed_knowledge run / server restart: the model now
    // exists on disk under <data>/models/ — the downloader must NOT run again.
    enc.cached = true;
    await mgr.ensureModel();
    await mgr.ensureModel(); // repeated runs are idempotent
    assert.deepEqual(enc.ensureCalls, [true, false, false], "no re-download");
  });

  test("embedTexts is a pure delegate — ensureModel is the explicit gate", async () => {
    const enc = new StubEncoder({ cached: false, dims: 4 });
    const mgr = new EmbeddingManager({ encoder: enc });
    await mgr.ensureModel(); // explicit gate (embed_knowledge does this once)
    const vectors = await mgr.embedTexts(["alpha", "beta"]);
    assert.equal(enc.embedCalls, 1);
    assert.equal(vectors.length, 2);
    assert.ok(vectors[0] instanceof Float32Array);
    assert.equal(vectors[0].length, 4);
    // No implicit re-ensure inside embedTexts.
    assert.deepEqual(enc.ensureCalls, [true]);
  });

  test("ensureModel(false) is the strictly local-only query path", async () => {
    // Model not cached and downloads explicitly refused: the load must fail
    // loudly — a semantic search never silently downloads.
    const enc = new StubEncoder({ cached: false });
    const mgr = new EmbeddingManager({ encoder: enc });
    await assert.rejects(mgr.ensureModel(false), /local-only/);
    assert.deepEqual(enc.ensureCalls, [false], "no download attempted");
  });

  test("forwards modelName + dims from the encoder", () => {
    const enc = new StubEncoder({ modelName: "custom/model", dims: 12, cached: true });
    const mgr = new EmbeddingManager({ encoder: enc });
    assert.equal(mgr.modelName, "custom/model");
    assert.equal(mgr.dims, 12);
    assert.equal(mgr.isModelCached(), true);
  });
});
