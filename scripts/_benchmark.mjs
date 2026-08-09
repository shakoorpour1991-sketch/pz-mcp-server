/**
 * Hermetic performance benchmark (audit P2: performance baselines).
 *
 * Measures the local SQLite layer against synthetic data — no game files
 * required. Tracks:
 *   - rows imported / sec (bulk insert path, transaction)
 *   - FTS query latency (searchContent, prefix MATCH)
 *   - stats / reference lookup latency
 *
 * Run after a build: `npm run benchmark` (or `node scripts/_benchmark.mjs`).
 * Uses a throwaway DB under the OS temp dir; nothing is written to ./data.
 */
import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { DatabaseManager } from "../dist/database/DatabaseManager.js";

const N = 2000; // synthetic items
const QUERIES = 50; // FTS queries averaged

const item = (i) => ({
  id: `Base.Bench${i}`,
  name: `Bench${i}`,
  displayName: `Bench Item ${i}`,
  type: "item",
  module: "Base",
  category: i % 3 === 0 ? "Weapon" : i % 3 === 1 ? "Food" : "Clothing",
  properties: {
    Type: i % 3 === 0 ? "Weapon" : i % 3 === 1 ? "Food" : "Clothing",
    Weight: (i % 50) / 10,
    Calories: i % 3 === 1 ? (i % 1000) : undefined,
    Tags: ["Bench", `Tag${i % 7}`],
  },
  rawContent: `item Bench${i} {}`,
  filePath: "bench.txt",
  tags: ["Bench", `Tag${i % 7}`],
  weight: (i % 50) / 10,
  calories: i % 3 === 1 ? i % 1000 : undefined,
});

const ms = (t0) => (performance.now() - t0) / 1000;

async function main() {
  const dir = mkdtempSync(join(tmpdir(), "pz-bench-"));
  const db = new DatabaseManager(join(dir, "bench.db"));
  try {
    await db.initialize();

    // Bulk import
    const batch = Array.from({ length: N }, (_, i) => item(i));
    let t0 = performance.now();
    await db.insertItems(batch);
    const importSec = ms(t0);

    // FTS query latency (average of QUERIES lookups)
    t0 = performance.now();
    for (let i = 0; i < QUERIES; i++) {
      await db.searchContent(`Bench${i * 37}`, { limit: 5 });
    }
    const ftsSec = ms(t0) / QUERIES;

    // Stats
    t0 = performance.now();
    const stats = await db.getStats();
    const statsSec = ms(t0);

    // Reference lookup (checkReference)
    t0 = performance.now();
    for (let i = 0; i < QUERIES; i++) {
      await db.checkReference(`Base.Bench${i * 37}`);
    }
    const refSec = ms(t0) / QUERIES;

    console.log(`Benchmark (N=${N}, synthetic items, throwaway DB)\n`);
    console.log(`  Import:        ${stats.total} rows in ${importSec.toFixed(2)}s → ${Math.round(N / importSec).toLocaleString()} rows/sec`);
    console.log(`  FTS query:     ${(ftsSec * 1000).toFixed(2)} ms avg (${QUERIES} prefix searches, limit 5)`);
    console.log(`  getStats:      ${(statsSec * 1000).toFixed(2)} ms`);
    console.log(`  checkReference: ${(refSec * 1000).toFixed(2)} ms avg (${QUERIES} lookups)`);
    console.log(`\nTip: re-run against the real game DB (data/pz_database.db) after parse_game_files for production numbers.`);
  } finally {
    db.close();
    rmSync(dir, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error("Benchmark failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
