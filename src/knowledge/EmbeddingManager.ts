/**
 * Phase 5 semantic KB search — embedding layer (Option A: local WASM only).
 *
 * Everything here is opt-in: the transformers.js module is imported lazily on
 * the FIRST embed_knowledge / semantic search, the model downloads once into
 * <data>/models/ (only when embed_knowledge runs non-dry), and no code in this
 * module runs at server boot or index_* time.
 *
 * Runtime: @huggingface/transformers v3 on the pure WASM backend. The package
 * ships onnxruntime-node (native) as a hard dependency, so package.json maps
 * it onto onnxruntime-web via an npm override — the native module is never
 * installed, and `env.backends.onnx.wasm.wasmPaths` points at onnxruntime-
 * web's local dist/ (file:// URL — a raw Windows path would be parsed as the
 * `c:` URL scheme by its factory loader). Model weights + tokenizer are cached
 * by transformers.js under env.cacheDir = <data>/models as
 * <data>/models/<org>/<repo>/ (verified end-to-end on Windows + Node 22).
 */
import { join, dirname, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { embeddingModel, embeddingModelsDir } from "../utils/config.js";
import logger from "../utils/logger.js";

/** Default local embedding model (ONNX, 384 dims) — override with PZ_MCP_EMBEDDING_MODEL. */
export const DEFAULT_EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";
/** Fallback dims before the model is loaded (MiniLM + bge-small are both 384). */
export const DEFAULT_EMBEDDING_DIMS = 384;

/** Hybrid blend weights — FTS-first, tunable (see docs/kb-v2-embeddings.md §2). */
export const HYBRID_BM25_WEIGHT = 0.7;
export const HYBRID_COSINE_WEIGHT = 0.3;
/** Semantic candidates merged into the FTS top-N (cosine scan cap). */
export const SEMANTIC_TOP_K = 50;

/**
 * Raised when semantic search is requested but the vector index is missing or
 * was built with a different model. The tool handler maps it to a friendly
 * "run embed_knowledge first" error — never a crash, never silent FTS fallback.
 */
export class SemanticNotIndexedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SemanticNotIndexedError";
  }
}

/** Cosine similarity of two equal-length vectors (typed arrays, brute force). */
export function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  if (a.length !== b.length || a.length === 0) return 0;
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

/**
 * Hybrid score blend: 0.7·bm25 (min-max normalized to [0,1] across the FTS
 * candidate set) + 0.3·cosine. A chunk absent from one path contributes 0 on
 * that axis — keyword search stays the primary signal, semantic boosts recall.
 */
export function hybridBlend(
  bm25Score01: number | undefined,
  cosineScore: number | undefined,
  weights: {
    bm25: number;
    cosine: number;
  } = { bm25: HYBRID_BM25_WEIGHT, cosine: HYBRID_COSINE_WEIGHT },
): number {
  return (
    weights.bm25 * (bm25Score01 ?? 0) + weights.cosine * (cosineScore ?? 0)
  );
}

/**
 * The encoder contract — injectable so unit tests run with a tiny stub and
 * NO model download in CI. The production implementation wraps transformers.js.
 */
export interface EmbeddingEncoder {
  /** Model id (e.g. Xenova/all-MiniLM-L6-v2) — stored per vector row. */
  readonly modelName: string;
  /** Vector dimensionality (384 for MiniLM). */
  readonly dims: number;
  /** True when the model files already exist on disk (no download needed). */
  isModelCached(): boolean;
  /**
   * Load the model into memory. When `allowDownload` is false the load is
   * strictly local-only (throws when files are missing) — this is what makes
   * the second run over a cached model provably network-free.
   */
  ensureModel(allowDownload?: boolean): Promise<void>;
  /** Embed texts; one normalized Float32Array per text, each length = dims. */
  embedTexts(texts: string[]): Promise<Float32Array[]>;
}

/**
 * Transformers.js WASM encoder (the real runtime). The transformers module is
 * imported lazily so server boot / index_* never touch it; the model itself is
 * only downloaded when ensureModel(true) runs, which the caller gates behind
 * the isModelCached() check and embed_knowledge's non-dry path.
 */
export class TransformersEmbeddingEncoder implements EmbeddingEncoder {
  readonly modelName: string;
  private readonly cacheDir: string;
  private readonly configuredDims: number;
  private extractorPromise: Promise<any> | null = null;
  private loadedDims: number | null = null;

  constructor(opts?: { modelName?: string; cacheDir?: string; dims?: number }) {
    this.modelName = opts?.modelName ?? embeddingModel();
    this.cacheDir = opts?.cacheDir ?? embeddingModelsDir();
    this.configuredDims = opts?.dims ?? DEFAULT_EMBEDDING_DIMS;
  }

  /** Transformers.js cache layout: <cacheDir>/<org>/<repo>/config.json + onnx/model.onnx. */
  private get modelDir(): string {
    return join(this.cacheDir, this.modelName);
  }

  get dims(): number {
    if (this.loadedDims !== null) return this.loadedDims;
    // Read hidden_size from the cached model config when present, so a dry-run
    // preview reports the real dims without loading the model.
    const configPath = join(this.modelDir, "config.json");
    if (existsSync(configPath)) {
      try {
        const hidden = JSON.parse(
          readFileSync(configPath, "utf-8"),
        ).hidden_size;
        if (typeof hidden === "number" && hidden > 0) return hidden;
      } catch {
        // fall through to the configured default
      }
    }
    return this.configuredDims;
  }

  isModelCached(): boolean {
    return (
      existsSync(join(this.modelDir, "config.json")) &&
      existsSync(join(this.modelDir, "onnx", "model.onnx"))
    );
  }

  async ensureModel(allowDownload = true): Promise<void> {
    await this.getExtractor(allowDownload);
  }

  async embedTexts(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    // Query/backfill embeddings run against an already-downloaded model
    // (embed_knowledge ensured it first) — load local-only so a broken cache
    // fails loudly instead of silently downloading at query time.
    const extractor = await this.getExtractor(false);
    const output = await extractor(texts, { pooling: "mean", normalize: true });
    const dims = output.dims as number[];
    const batch = dims.length === 1 ? 1 : dims[0];
    const vecDims = dims[dims.length - 1];
    const data = output.data as Float32Array;
    const vectors: Float32Array[] = [];
    for (let i = 0; i < batch; i++) {
      vectors.push(data.slice(i * vecDims, (i + 1) * vecDims));
    }
    return vectors;
  }

  private async getExtractor(allowDownload: boolean): Promise<any> {
    if (this.extractorPromise) return this.extractorPromise;
    this.extractorPromise = this.load(allowDownload);
    return this.extractorPromise;
  }

  private async load(allowDownload: boolean): Promise<any> {
    // Lazy import keeps boot and index_* free of transformers.js. The WASM
    // backend is configured through the shared onnxruntime-web env.
    const tjs = await import("@huggingface/transformers");
    const env = tjs.env as any;
    const pipeline = tjs.pipeline;
    env.cacheDir = this.cacheDir;
    env.logLevel = 40; // v3 LogLevel.ERROR — silence transformers/ort logging
    env.allowRemoteModels = allowDownload;
    const wasm = env.backends?.onnx?.wasm;
    if (wasm) {
      // Local WASM factory/binary: file:// URL of onnxruntime-web's dist/ so
      // its dynamic import resolves in Node ESM (a raw Windows path would be
      // parsed as protocol 'c:'). Falls back to the CDN default if the package
      // cannot be located (still works online).
      const dist = this.resolveOrtWebDist();
      if (dist) {
        wasm.wasmPaths = pathToFileURL(dist + sep).href;
        wasm.numThreads = 1;
      } else {
        logger.warn(
          "onnxruntime-web dist not resolvable — WASM files will be fetched from the CDN (requires network on model load)",
        );
      }
    }
    try {
      const extractor = await pipeline("feature-extraction", this.modelName, {
        // fp32 selects the full-precision model.onnx (quantized:false default
        // in v3 is fp32 anyway — dtype is the typed contract).
        dtype: "fp32",
      });
      const hidden = (extractor?.model?.config as any)?.hidden_size;
      if (typeof hidden === "number" && hidden > 0) {
        this.loadedDims = hidden;
      }
      logger.info(
        "Embedding model %s loaded (%d dims, WASM backend)",
        this.modelName,
        this.dims,
      );
      return extractor;
    } catch (err) {
      this.extractorPromise = null; // allow a retry on the next call
      throw err;
    }
  }

  /** Locate onnxruntime-web's dist/ (pure JS/WASM, no native deps). */
  private resolveOrtWebDist(): string | null {
    try {
      const require = createRequire(import.meta.url);
      const pkgPath = require.resolve("onnxruntime-web/package.json");
      return join(dirname(pkgPath), "dist");
    } catch {
      return null;
    }
  }
}

/**
 * The embedding facade the KB manager talks to. Wraps an encoder (real or
 * injected stub) and owns the one-time download policy: the downloader runs
 * only when the model is NOT already cached on disk — a second run over a
 * cached model is provably network-free.
 */
export class EmbeddingManager {
  readonly encoder: EmbeddingEncoder;

  constructor(opts?: { encoder?: EmbeddingEncoder }) {
    this.encoder = opts?.encoder ?? new TransformersEmbeddingEncoder();
  }

  get modelName(): string {
    return this.encoder.modelName;
  }

  get dims(): number {
    return this.encoder.dims;
  }

  isModelCached(): boolean {
    return this.encoder.isModelCached();
  }

  /**
   * Load the model, downloading ONLY when it is not already cached. The
   * model stays resident for query-time embedding (idempotent — later calls
   * are no-ops while the extractor is alive). An explicit `allowDownload`
   * overrides the cache-aware default: `false` is the query-time path — a
   * missing cache fails loudly instead of silently downloading mid-search.
   */
  async ensureModel(allowDownload?: boolean): Promise<void> {
    const download = allowDownload ?? !this.encoder.isModelCached();
    await this.encoder.ensureModel(download);
  }

  /**
   * Embed texts. Callers ensure the model first (ensureModel) — embedTexts is
   * a pure delegate so the download/load policy stays in one place and is
   * observable (a second run over a cached model never re-downloads).
   */
  async embedTexts(texts: string[]): Promise<Float32Array[]> {
    return this.encoder.embedTexts(texts);
  }
}
