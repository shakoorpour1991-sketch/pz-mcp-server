/**
 * Knowledge base indexing pipeline verification (hermetic, reproducible).
 *
 * Indexes the repo-shipped markdown KB (wiki/, api-docs/, Mods_Analysis/,
 * root research docs) and the shipped distilled JavaDocs into temp databases,
 * then asserts the KB v2 pipeline end-to-end — the exact path the
 * index_knowledge_base / index_javadocs tools take:
 *
 *  - counts: docs + section chunks indexed, zero per-file errors
 *  - doc-type taxonomy: all five types present and portable (wiki /
 *    api-docs / javadocs / mods-analysis / research)
 *  - cleaning: Table-of-Contents sections are gone from indexed content
 *  - chunk granularity: javadocs search returns per-member chunks that can be
 *    read directly (small, precise — not the whole 100KB class page)
 *  - filters: type / package / doc-topic
 *  - section reads: getTopic(doc#section) returns exactly that chunk
 *  - incremental sync: unchanged files skipped before read/parse; deleted
 *    files pruned together with their chunks
 *  - migration: a legacy v1 DB (full-copy docs + FTS) is dropped and
 *    recreated as v2
 *
 * Usage:  node scripts/_verify_kb.mjs     (no args — uses the repo's KB)
 *         npm run verify:kb
 */
import { mkdtempSync, rmSync, mkdirSync, writeFileSync, statSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
import { DatabaseSync } from "node:sqlite";
import { KnowledgeBaseManager } from "../dist/knowledge/KnowledgeBaseManager.js";

const repo = resolve(import.meta.dirname, "..");
const KB_DIR = join(repo, "knowledge-base");
const JAVADOCS_DIR = join(KB_DIR, "javadocs");

const tmp = mkdtempSync(join(tmpdir(), "pz-verify-kb-"));
let failures = 0;

function check(label, ok, extra = "") {
  console.log(`${ok ? "  ✅" : "  ❌"} ${label}${extra ? ` — ${extra}` : ""}`);
  if (!ok) failures += 1;
}

try {
  console.log(`KB: ${KB_DIR}\nJavaDocs: ${JAVADOCS_DIR}\n`);

  // ---------------------------------------------------------------- Phase 1
  // The generic markdown KB walk (index_knowledge_base default scope: javadocs
  // is excluded from the generic walk).
  const kb = new KnowledgeBaseManager(join(tmp, "kb-main"));
  await kb.initialize();
  const t0 = Date.now();
  const md = await kb.indexDirectory(KB_DIR, { overwrite: true });
  const mdMs = Date.now() - t0;
  console.log(
    `[markdown KB] ${md.topics} topics / ${md.chunks} chunks / ${md.files} files in ${mdMs}ms\n`,
  );
  check("markdown KB indexed with zero errors", md.errors.length === 0, `${md.errors.length} errors`);
  check("expected topic volume", md.topics >= 150, `${md.topics} topics`);
  check("chunked into sections", md.chunks >= 1000, `${md.chunks} chunks`);

  // Portable doc-type taxonomy.
  const topics = await kb.listTopics();
  const docTypes = new Set(topics.map((t) => t.docType));
  for (const expected of ["wiki", "api-docs", "mods-analysis", "research"]) {
    check(`doc type '${expected}' present`, docTypes.has(expected));
  }
  check(
    "no javadocs in the generic walk (skipDirs)",
    !docTypes.has("javadocs"),
  );

  // Cleaning: Table of Contents sections must not survive into content.
  const smith = await kb.getTopic("Build42_Blacksmithing_Research");
  check("research doc retrievable", smith !== null);
  if (smith) {
    check(
      "Table of Contents cleaned from content",
      !smith.content.includes("Table of Contents") &&
        smith.content.includes("Blacksmithing"),
      `${smith.lines} lines`,
    );
  }

  // type filter works end-to-end.
  const luaWiki = await kb.search("Lua", { type: "wiki", limit: 5 });
  check(
    "type=wiki filter returns only wiki docs",
    luaWiki.length > 0 && luaWiki.every((r) => r.type === "wiki") &&
      luaWiki.some((r) => r.docTopic.startsWith("wiki/")),
    luaWiki.slice(0, 2).map((r) => r.docTopic).join(", "),
  );

  // Review fixes: type-aware defaults (prose first for natural-language
  // queries — the "anvil" flood case), multi-select types, inline content,
  // read-cost metadata.
  const anvil = await kb.search("anvil", { limit: 8 });
  check(
    "natural-language query ranks prose before javadocs ('anvil')",
    anvil.length > 0 && anvil[0].type !== "javadocs" &&
      anvil.some((r) => r.docTopic === "Build42_Blacksmithing_Research"),
    anvil.slice(0, 3).map((r) => `${r.type}:${r.docTopic}`).join(", "),
  );
  const multi = await kb.search("Lua", {
    types: ["wiki", "research"],
    limit: 5,
  });
  check(
    "multi-select types filter (wiki + research, no javadocs)",
    multi.length > 0 &&
      multi.every((r) => r.type === "wiki" || r.type === "research"),
    multi.slice(0, 2).map((r) => r.type).join(", "),
  );
  const inline = await kb.search("blacksmithing", {
    includeContent: true,
    maxContent: 6000,
    limit: 5,
  });
  check(
    "includeContent returns chunk bodies inline",
    inline.some(
      (r) => typeof r.content === "string" && r.content.length > 0,
    ),
  );
  check(
    "search results carry chars/words read-cost metadata",
    inline.length > 0 &&
      typeof inline[0].chars === "number" &&
      typeof inline[0].words === "number",
    inline[0] ? `${inline[0].chars} chars / ${inline[0].words} words` : "",
  );

  // ------------------------------------------------------------ JavaDocs
  const t1 = Date.now();
  const jd = await kb.indexDirectory(JAVADOCS_DIR, {
    overwrite: true,
    topicPrefix: "javadocs",
  });
  const jdMs = Date.now() - t1;
  console.log(
    `\n[javadocs] ${jd.topics} topics / ${jd.chunks} chunks in ${jdMs}ms\n`,
  );
  check("javadocs indexed with zero errors", jd.errors.length === 0, `${jd.errors.length} errors`);
  check("all shipped types indexed", jd.topics >= 4000, `${jd.topics} topics`);
  check("chunked per member", jd.chunks >= 80_000, `${jd.chunks} chunks`);

  // Chunk granularity: a method search returns precise member chunks.
  const gs = await kb.search("getSquare", { type: "javadocs", limit: 5 });
  check(
    "javadocs search returns IsoGridSquare chunks",
    gs.some((r) => r.docTopic.includes("zombie.iso.IsoGridSquare")),
    gs.slice(0, 3).map((r) => r.docTopic).join(", "),
  );
  const member = gs[0];
  check("member result carries portable type", member.type === "javadocs");
  if (member) {
    const section = await kb.getTopic(member.topic);
    check(
      "member chunk read directly is small + relevant",
      section !== null &&
        section.content.includes(member.title.split("(")[0].split(/\s+/).pop() ?? "getSquare") &&
        section.lines <= 200,
      section ? `${section.lines} lines` : "null",
    );
  }

  // package filter (javadocs meta).
  const pkg = await kb.search("getSquare", { package: "zombie.iso", limit: 5 });
  check(
    "package=zombie.iso filter works",
    pkg.length > 0 && pkg.every((r) => r.package === "zombie.iso"),
    pkg.slice(0, 2).map((r) => r.package).join(", "),
  );

  // Incremental: unchanged files are skipped before read/parse.
  const incMd = await kb.indexDirectory(KB_DIR, { overwrite: false });
  check(
    "markdown incremental skips unchanged",
    incMd.skipped === md.files && incMd.topics === 0 && incMd.removed === 0,
    `skipped ${incMd.skipped}/${md.files}`,
  );
  const incJd = await kb.indexDirectory(JAVADOCS_DIR, {
    overwrite: false,
    topicPrefix: "javadocs",
  });
  check(
    "javadocs incremental skips unchanged",
    incJd.skipped === jd.files && incJd.topics === 0 && incJd.removed === 0,
    `skipped ${incJd.skipped}/${jd.files}`,
  );

  // Bodyless tagging (schema v3): the flagged bare-signature chunks are
  // present in the DB and search can read the flag. The main manager must be
  // closed first — a raw read-only connection to the WAL-mode DB while the
  // writer is still open fails on Windows (EBUSY on later cleanup).
  kb.close();
  const kbDb = new DatabaseSync(join(tmp, "kb-main", "pz_knowledge.db"), {
    readOnly: true,
  });
  try {
    const b = kbDb
      .prepare("SELECT COUNT(*) AS n FROM knowledge_chunks WHERE bodyless = 1")
      .get();
    check("bodyless chunks tagged in DB", b.n > 1000, `${b.n} bodyless`);
  } finally {
    kbDb.close();
  }

  const dbSize = statSync(join(tmp, "kb-main", "pz_knowledge.db")).size;
  console.log(`\n  DB size: ${(dbSize / 1024 / 1024).toFixed(1)} MB (source KB is 32MB of markdown)`);

  // ------------------------------------------------------------- Prune
  const prune = new KnowledgeBaseManager(join(tmp, "kb-prune"));
  await prune.initialize();
  const pruneDir = join(tmp, "prune-docs");
  mkdirSync(pruneDir, { recursive: true });
  writeFileSync(join(pruneDir, "A.md"), "# A\n\nAlpha content.\n");
  writeFileSync(join(pruneDir, "B.md"), "# B\n\nBeta content.\n");
  await prune.indexDirectory(pruneDir, { overwrite: true });
  rmSync(join(pruneDir, "A.md"));
  const pruned = await prune.indexDirectory(pruneDir, { overwrite: false });
  check(
    "deleted doc pruned with its chunks",
    pruned.removed === 1 && pruned.topics === 0 && pruned.skipped === 1,
    `removed ${pruned.removed}`,
  );
  check(
    "pruned doc unsearchable",
    (await prune.search("alpha")).length === 0,
  );
  const b = await prune.getTopic("B");
  check("surviving doc intact", b !== null && b.content.includes("Beta"));
  prune.close();

  // ------------------------------------------------------- Migration v1→v2
  const migrateDir = join(tmp, "kb-migrate");
  mkdirSync(migrateDir, { recursive: true });
  const legacyDbPath = join(migrateDir, "pz_knowledge.db");
  const raw = new DatabaseSync(legacyDbPath);
  try {
    raw.exec(
      "CREATE TABLE knowledge_docs (topic TEXT PRIMARY KEY, title TEXT NOT NULL, source TEXT, content TEXT NOT NULL, mtime TEXT, file_path TEXT)",
    );
    raw.exec(
      "CREATE VIRTUAL TABLE knowledge_fts USING fts5(topic, title, source, content, tokenize='unicode61')",
    );
    raw.exec(
      "INSERT INTO knowledge_docs (topic, title, source, content) VALUES ('Legacy', 'Legacy', 'old', 'old body')",
    );
  } finally {
    raw.close();
  }
  const migrated = new KnowledgeBaseManager(migrateDir);
  await migrated.initialize();
  const checkDb = new DatabaseSync(legacyDbPath, { readOnly: true });
  try {
    const docCols = checkDb
      .prepare("PRAGMA table_info(knowledge_docs)")
      .all()
      .map((c) => c.name);
    const chunkCols = checkDb
      .prepare("PRAGMA table_info(knowledge_chunks)")
      .all()
      .map((c) => c.name);
    check(
      "legacy DB migrated to v3 (doc_type, bodyless, no content copy, no full-copy FTS)",
      docCols.includes("doc_type") && !docCols.includes("content") &&
        chunkCols.includes("bodyless") &&
        checkDb.prepare("SELECT name FROM sqlite_master WHERE name = 'knowledge_fts'").get() === undefined &&
        checkDb.prepare("PRAGMA user_version").get().user_version === 3,
    );
    check(
      "legacy rows gone after migration",
      (await migrated.listTopics()).length === 0,
    );
  } finally {
    checkDb.close();
    migrated.close();
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

console.log(
  failures === 0
    ? "\n✅ knowledge base pipeline verification passed"
    : `\n❌ ${failures} check(s) failed`,
);
process.exit(failures === 0 ? 0 : 1);
