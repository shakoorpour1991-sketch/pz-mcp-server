/**
 * Tests for the JavaDoc ingestion pipeline (src/knowledge/javadocs):
 *
 *  - discovery: recursive scan keeps only real class pages and skips
 *    navigation/search/index/class-use/package pages (no manual file list)
 *  - rendering: per-type markdown in the KB's preferred representation
 *    (frontmatter title/source/version + structured body)
 *  - reproducibility: a second ingest of an unchanged tree writes nothing
 *  - end-to-end: ingested markdown indexed through KnowledgeBaseManager and
 *    retrieved via search (class / interface / method queries), topic
 *    filter, getTopic, and provenance (source/version preserved)
 *
 * Runs against the compiled dist/ build. Fixtures: tests/fixtures/javadocs.
 */
import { describe, test, before, after } from "node:test";
import assert from "node:assert/strict";
import path from "path";
import fs from "fs";
import os from "os";
import { fileURLToPath } from "url";

import { JavaDocIndexer } from "../../dist/knowledge/javadocs/JavaDocIndexer.js";
import { KnowledgeBaseManager } from "../../dist/knowledge/KnowledgeBaseManager.js";
import { shippedJavadocsPath } from "../../dist/utils/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.resolve(__dirname, "..", "fixtures", "javadocs");
const SHIPPED = path.resolve(
  __dirname,
  "..",
  "..",
  "knowledge-base",
  "javadocs",
);

describe("JavaDocIndexer discovery", () => {
  let result;
  before(async () => {
    result = await new JavaDocIndexer().discoverClassPages(FIXTURES);
  });

  test("discovers exactly the class pages, sorted, no manual file list", () => {
    const names = result.pages.map((p) => path.basename(p)).sort();
    assert.deepEqual(names, [
      "FixtureCapability.html",
      "FixtureGlobals.html",
      "FixtureNested.Inner.html",
      "FixtureRecord.html",
      "GitVersion.html",
      "IFixtureUpdater.html",
    ]);
  });

  test("skips navigation/search/index/class-use/package pages", () => {
    assert.equal(result.skippedNonClass, 7); // index/class-use dirs are pruned outright
    for (const p of result.pages) {
      assert.ok(
        !p.includes("class-use") &&
          !p.includes("index-files") &&
          !p.includes("package-") &&
          !p.endsWith("search.html") &&
          !p.endsWith("index.html"),
        `unexpected non-class page: ${p}`,
      );
    }
  });
});

describe("JavaDocIndexer ingest + markdown rendering", () => {
  let tmpDir;
  let outDir;
  let first;
  let second;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-javadocs-"));
    outDir = path.join(tmpDir, "kb");
    first = await new JavaDocIndexer().ingest(FIXTURES, outDir);
    second = await new JavaDocIndexer().ingest(FIXTURES, outDir);
  });

  after(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("ingest parses every discovered page and reports stats", () => {
    assert.equal(first.classPages, 6);
    assert.equal(first.parsed, 6);
    assert.equal(first.written, 6);
    assert.equal(first.unchanged, 0);
    assert.equal(first.removed, 0);
    assert.equal(first.version, "42.20.0");
    assert.deepEqual(first.errors, []);
  });

  test("re-ingest is idempotent: unchanged files are not rewritten", () => {
    assert.equal(second.parsed, 6);
    assert.equal(second.written, 0);
    assert.equal(second.unchanged, 6);
    assert.equal(second.removed, 0);
  });

  test("writes one <fqn>.md per type with KB frontmatter", () => {
    const files = fs.readdirSync(outDir).sort();
    assert.deepEqual(files, [
      "zombie.FixtureCapability.md",
      "zombie.FixtureGlobals.md",
      "zombie.FixtureNested.Inner.md",
      "zombie.GitVersion.md",
      "zombie.interfaces.IFixtureUpdater.md",
      "zombie.iso.FixtureRecord.md",
    ]);
  });

  test("rendered markdown carries frontmatter title/source/version/kind/package", () => {
    const md = fs.readFileSync(
      path.join(outDir, "zombie.FixtureGlobals.md"),
      "utf-8",
    );
    assert.match(md, /^---\ntitle: zombie\.FixtureGlobals\n/);
    assert.match(md, /^source: Unofficial PZ JavaDocs 42\.20\.0\n/m);
    assert.match(md, /^version: 42\.20\.0\n/m);
    assert.match(md, /^kind: class\n/m);
    assert.match(md, /^package: zombie\n/m);
    assert.match(md, /^# zombie\.FixtureGlobals\n/m);
    assert.match(md, /`public final class FixtureGlobals extends Object`/);
    assert.match(md, /## Fields/);
    assert.match(md, /### public static double hungerIncrease/);
    assert.match(md, /## Methods/);
    assert.match(md, /### public static IsoPlayer getPlayer\(int playerNum\)/);
    assert.match(md, /- `int` `playerNum` — the player index/);
    assert.match(md, /## Inheritance/);
    assert.match(md, /- java\.lang\.Object/);
    // Provenance footer survives into the stored doc.
    assert.match(md, /parsed from `.*FixtureGlobals\.html`/);
  });
});

describe("JavaDocIndexer reproducibility (stale-doc pruning)", () => {
  test("removes generated docs whose source class page disappeared", async () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "pz-javadocs-prune-"));
    let kb;
    try {
      const src = path.join(tmp, "src");
      const out = path.join(tmp, "kb");
      fs.cpSync(FIXTURES, src, { recursive: true });

      const first = await new JavaDocIndexer().ingest(src, out);
      assert.equal(first.written, 6);
      assert.equal(first.removed, 0);
      assert.ok(fs.existsSync(path.join(out, "zombie.FixtureCapability.md")));

      // Index the full tree first so the KB knows all 6 topics.
      kb = new KnowledgeBaseManager(path.join(tmp, "data"));
      await kb.initialize();
      const full = await kb.indexDirectory(out);
      assert.equal(full.topics, 6);

      // A class page disappears from the source tree → re-ingest must prune it.
      fs.rmSync(path.join(src, "zombie", "FixtureCapability.html"));
      const second = await new JavaDocIndexer().ingest(src, out);
      assert.equal(second.written, 0);
      assert.equal(second.unchanged, 5);
      assert.equal(second.removed, 1);
      assert.equal(
        fs.existsSync(path.join(out, "zombie.FixtureCapability.md")),
        false,
      );
      assert.ok(fs.existsSync(path.join(out, "zombie.FixtureGlobals.md")));

      // Foreign non-FQN .md files in the output dir are never touched.
      fs.writeFileSync(path.join(out, "README.md"), "# user notes\n");
      const third = await new JavaDocIndexer().ingest(src, out);
      assert.equal(third.removed, 0);
      assert.ok(fs.existsSync(path.join(out, "README.md")));

      // KB incremental sync drops the pruned topic too (the .md file that the
      // KB had indexed is gone, so its topic must be pruned on re-sync).
      const res = await kb.indexDirectory(out, { overwrite: false });
      assert.equal(res.removed, 1);
      assert.equal(await kb.getTopic("zombie.FixtureCapability"), null);
      kb.close();
    } finally {
      // Close before cleanup: on Windows an open sqlite handle blocks rmSync.
      kb?.close?.();
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
});

describe("JavaDocIndexer end-to-end KB integration (KB v2)", () => {
  let tmpDir;
  let kb;
  let outDir;
  const PREFIX = "javadocs";

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-javadocs-e2e-"));
    outDir = path.join(tmpDir, "kb");
    const ingest = await new JavaDocIndexer().ingest(FIXTURES, outDir);
    assert.deepEqual(ingest.errors, []);

    kb = new KnowledgeBaseManager(path.join(tmpDir, "data"));
    await kb.initialize();
    // index_javadocs namespaces topics under `javadocs/` (KB v2).
    const index = await kb.indexDirectory(outDir, { topicPrefix: PREFIX });
    assert.deepEqual(index.errors, []);
    assert.equal(index.topics, 6);
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("search finds a class by name (path-prefixed FQN doc topic)", async () => {
    const results = await kb.search("FixtureGlobals");
    assert.ok(results.length > 0);
    const globals = results.find(
      (r) => r.docTopic === "javadocs/zombie.FixtureGlobals",
    );
    assert.notEqual(globals, undefined);
    assert.equal(globals.docTitle, "zombie.FixtureGlobals");
    assert.equal(globals.type, "javadocs");
    assert.ok(globals.snippet.length > 0);
  });

  test("search finds an interface", async () => {
    const results = await kb.search("IFixtureUpdater");
    assert.ok(
      results.some(
        (r) => r.docTopic === "javadocs/zombie.interfaces.IFixtureUpdater",
      ),
    );
  });

  test("search returns the method member chunk with its signature as title", async () => {
    const results = await kb.search("getPlayer");
    const globals = results.find(
      (r) => r.docTopic === "javadocs/zombie.FixtureGlobals",
    );
    assert.notEqual(globals, undefined);
    assert.match(globals.snippet, /getPlayer/);
    assert.match(globals.title, /getPlayer/);
  });

  test("search finds enum constants and record accessors", async () => {
    const strength = await kb.search("Strength");
    assert.ok(
      strength.some(
        (r) => r.docTopic === "javadocs/zombie.FixtureCapability",
      ),
    );
    const accessor = await kb.search("x()");
    assert.ok(
      accessor.some((r) => r.docTopic === "javadocs/zombie.iso.FixtureRecord"),
    );
  });

  test("topic filter returns chunks of the exact class doc", async () => {
    const results = await kb.search("public static", {
      topic: "javadocs/zombie.FixtureGlobals",
    });
    assert.ok(results.length > 0);
    assert.ok(
      results.every((r) => r.docTopic === "javadocs/zombie.FixtureGlobals"),
    );
  });

  test("type filter scopes to javadocs only", async () => {
    const results = await kb.search("getPlayer", { type: "javadocs" });
    assert.ok(results.length > 0);
    assert.ok(results.every((r) => r.type === "javadocs"));
  });

  test("package filter scopes to a Java package", async () => {
    const results = await kb.search("getPlayer", {
      package: "zombie",
    });
    assert.ok(results.length > 0);
    assert.ok(results.every((r) => r.package === "zombie"));
  });

  test("getTopic returns full API content with provenance and source metadata", async () => {
    const doc = await kb.getTopic("javadocs/zombie.FixtureGlobals");
    assert.notEqual(doc, null);
    assert.equal(doc.title, "zombie.FixtureGlobals");
    assert.ok(doc.content.includes("public static void Load()"));
    assert.ok(doc.content.includes("## Methods"));
    assert.ok(doc.content.includes("Unofficial PZ JavaDocs 42.20.0"));

    // The source column in the DB is tagged with the docs provenance.
    const { DatabaseSync } = await import("node:sqlite");
    const raw = new DatabaseSync(path.join(tmpDir, "data", "pz_knowledge.db"), {
      readOnly: true,
    });
    try {
      const row = raw
        .prepare("SELECT source FROM knowledge_docs WHERE topic = ?")
        .get("javadocs/zombie.FixtureGlobals");
      assert.equal(row.source, "Unofficial PZ JavaDocs 42.20.0");
    } finally {
      raw.close();
    }
  });

  test("getTopic with a #section reads exactly one member chunk", async () => {
    const results = await kb.search("Load", {
      topic: "javadocs/zombie.FixtureGlobals",
    });
    const loadChunk = results.find((r) => /public static void Load/.test(r.title));
    assert.notEqual(loadChunk, undefined);
    const section = await kb.getTopic(loadChunk.topic);
    assert.notEqual(section, null);
    assert.ok(section.content.includes("public static void Load"));
    assert.equal(section.docTopic, "javadocs/zombie.FixtureGlobals");
    assert.ok(section.lines > 0);
  });

  test("listTopics includes the javadocs topics alongside markdown topics", async () => {
    const topics = await kb.listTopics();
    const names = topics.map((t) => t.topic);
    assert.ok(names.includes("javadocs/zombie.FixtureGlobals"));
    assert.ok(names.includes("javadocs/zombie.GitVersion"));
    assert.ok(names.includes("javadocs/zombie.interfaces.IFixtureUpdater"));
  });

  test("incremental re-index after re-ingest skips unchanged docs", async () => {
    await new JavaDocIndexer().ingest(FIXTURES, outDir); // no rewrites → mtime stable
    const res = await kb.indexDirectory(outDir, {
      overwrite: false,
      topicPrefix: PREFIX,
    });
    assert.equal(res.skipped, 6);
    assert.equal(res.topics, 0);
    assert.equal(res.removed, 0);
  });
});

describe("JavaDocIndexer output-path validation", () => {
  test("rejects relative, traversal, and empty output paths", () => {
    assert.throws(
      () => JavaDocIndexer.validateOutputDir(""),
      /must not be empty/,
    );
    assert.throws(
      () => JavaDocIndexer.validateOutputDir("relative/path"),
      /must be absolute/,
    );
    assert.throws(
      () => JavaDocIndexer.validateOutputDir("C:/a/../b"),
      /must not contain '\.\.'/,
    );
    assert.doesNotThrow(() =>
      JavaDocIndexer.validateOutputDir("C:/Users/me/kb"),
    );
  });
});

describe("repo-shipped javadocs (index_javadocs default source)", () => {
  test("ships the distilled per-type markdown next to the knowledge base", () => {
    assert.ok(fs.existsSync(SHIPPED), "knowledge-base/javadocs exists");
    const md = fs.readdirSync(SHIPPED).filter((f) => f.endsWith(".md"));
    assert.ok(md.length > 4000, `expected 4000+ types, got ${md.length}`);
  });

  test("config resolves to the same repo-shipped directory by default", () => {
    assert.equal(shippedJavadocsPath(), SHIPPED);
  });

  test("key game API classes are present with frontmatter metadata", () => {
    for (const f of [
      "zombie.iso.IsoObject.md",
      "zombie.characters.IsoGameCharacter.md",
    ]) {
      const p = path.join(SHIPPED, f);
      assert.ok(fs.existsSync(p), `${f} exists`);
      const head = fs.readFileSync(p, "utf-8").slice(0, 400);
      assert.match(head, /^---\ntitle:/, `${f} has frontmatter`);
      assert.match(
        head,
        /Unofficial PZ JavaDocs/,
        `${f} keeps source metadata`,
      );
    }
  });
});
