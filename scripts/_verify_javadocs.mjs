/**
 * JavaDocs ingestion verification (reproducible, hermetic).
 *
 * Ingests a generated JavaDoc tree (source from argv[2] or
 * PZ_MCP_JAVADOCS_SOURCE) into a temp output dir + temp KB database, then
 * asserts that representative class / interface / method searches return
 * accurate Java API results — the same path an MCP client takes.
 *
 * Usage:  node scripts/_verify_javadocs.mjs [javadocs-source-dir]
 * Env:    PZ_MCP_JAVADOCS_SOURCE  (alternative way to point at the tree)
 */
import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { JavaDocIndexer } from "../dist/knowledge/javadocs/JavaDocIndexer.js";
import { KnowledgeBaseManager } from "../dist/knowledge/KnowledgeBaseManager.js";

const source =
  process.argv[2] || process.env.PZ_MCP_JAVADOCS_SOURCE || "";
if (!source) {
  console.error(
    "Usage: node scripts/_verify_javadocs.mjs <javadocs-source-dir>\n" +
      "  or set PZ_MCP_JAVADOCS_SOURCE.",
  );
  process.exit(2);
}

const tmp = mkdtempSync(join(tmpdir(), "pz-verify-javadocs-"));
const outDir = join(tmp, "kb");
let failures = 0;

function check(label, ok, extra = "") {
  console.log(`${ok ? "  ✅" : "  ❌"} ${label}${extra ? ` — ${extra}` : ""}`);
  if (!ok) failures += 1;
}

try {
  console.log(`Source: ${source}\n`);

  const ingest = await new JavaDocIndexer().ingest(source, outDir);
  console.log(
    `Discovered ${ingest.classPages} class pages · parsed ${ingest.parsed} · ` +
      `written ${ingest.written} · unchanged ${ingest.unchanged} · ` +
      `skipped ${ingest.skippedNonClass} non-class · version ${ingest.version}`,
  );
  check("class pages discovered > 0", ingest.classPages > 0);
  check("all discovered pages parsed without errors", ingest.errors.length === 0);
  check("docs version detected", /^\d+(\.\d+)+$/.test(ingest.version ?? ""), ingest.version ?? "none");

  const kb = new KnowledgeBaseManager(join(tmp, "data"));
  await kb.initialize();
  const index = await kb.indexDirectory(outDir);
  console.log(`KB indexed ${index.topics} topics from ${index.files} files\n`);
  check("KB index has no errors", index.errors.length === 0);

  // Representative API searches (the MCP search_knowledge_base path).
  const searches = [
    { q: "IsoObject", topic: "zombie.iso.IsoObject", label: "class by name" },
    { q: "IsoPlayer", topic: "zombie.characters.IsoPlayer", label: "class by name" },
    { q: "IUpdater", topic: "zombie.interfaces.IUpdater", label: "interface" },
    { q: "getThirst", topic: null, label: "method name" },
    { q: "hasTrait", topic: null, label: "method name" },
  ];
  for (const s of searches) {
    // Free-text search must return relevant zombie.* hits.
    const hits = await kb.search(s.q, { limit: 5 });
    const topics = hits.map((h) => h.topic);
    const relevant = hits.some((h) => h.topic.startsWith("zombie"));
    // Exact-type lookup: topic filter pinpoints the class doc itself (bm25
    // free-text ranking may surface heavy users of a type before the type).
    let exact = true;
    if (s.topic) {
      const filtered = await kb.search(s.q, { topic: s.topic, limit: 1 });
      exact = filtered.length === 1 && filtered[0].topic === s.topic;
    }
    const ok = relevant && exact;
    check(`search "${s.q}"`, ok, ok ? topics.slice(0, 3).join(", ") : `(relevant=${relevant} exact=${exact})`);
  }

  // Class-level query: full doc body must carry signatures.
  const doc = await kb.getTopic("zombie.iso.IsoObject");
  check("getTopic zombie.iso.IsoObject", doc !== null);
  if (doc) {
    check(
      "doc carries method signatures + provenance",
      /public .+\(/.test(doc.content) &&
        /Unofficial PZ JavaDocs/.test(doc.content),
      `${doc.lines} lines`,
    );
  }

  // Provenance: source column tagged with the docs banner + version.
  const { DatabaseSync } = await import("node:sqlite");
  const raw = new DatabaseSync(join(tmp, "data", "pz_knowledge.db"), {
    readOnly: true,
  });
  try {
    const row = raw
      .prepare("SELECT source FROM knowledge_docs WHERE topic = ?")
      .get("zombie.iso.IsoObject");
    check("source column tagged", /42\.\d+/.test(row?.source ?? ""), row?.source ?? "none");
  } finally {
    raw.close();
  }
  kb.close();
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(failures === 0 ? "\n✅ javadocs verification passed" : `\n❌ ${failures} check(s) failed`);
process.exit(failures === 0 ? 0 : 1);
