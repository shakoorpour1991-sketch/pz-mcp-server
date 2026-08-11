/**
 * Unit tests for KnowledgeBaseManager (KB v2): chunked indexing, FTS5 search
 * with relevance ranking (bm25, porter-stemmed + prefix-matched), topic/type
 * filters, section (#) reads, stored-stats topic listing, and the mtime-based
 * incremental sync (freebuff N5).
 * Runs against the compiled dist/ build.
 */
import { describe, test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';

import { KnowledgeBaseManager } from '../../dist/knowledge/KnowledgeBaseManager.js';

describe('KnowledgeBaseManager', () => {
  let tmpDir;
  let docsDir;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-'));
    docsDir = path.join(tmpDir, 'docs');
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(
      path.join(docsDir, 'Farming.md'),
      '# Farming Guide\n> Source: v42.20\n\nCabbage grows in spring. Water is essential.\n'
    );
    fs.writeFileSync(
      path.join(docsDir, 'Cooking.md'),
      '# Cooking Guide\n> Source: v42.20\n\nSoup needs water and a pot.\n'
    );

    kb = new KnowledgeBaseManager(path.join(tmpDir, 'data'));
    await kb.initialize();
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('indexDirectory', () => {
    test('indexes markdown docs and returns stats', async () => {
      const res = await kb.indexDirectory(docsDir);
      assert.equal(res.topics, 2);
      assert.equal(res.files, 2);
      assert.equal(res.chunks, 2);
      assert.ok(res.chars > 0);
      assert.deepEqual(res.errors, []);
    });

    test('extracts title from first # heading and source from > Source: line', async () => {
      const topics = await kb.listTopics();
      const farming = topics.find((t) => t.topic === 'Farming');
      assert.equal(farming.title, 'Farming Guide');
      assert.equal(farming.docType, 'research'); // root-level docs
    });
  });

  describe('search', () => {
    test('finds matching chunk with docTopic + snippet', async () => {
      const results = await kb.search('water');
      assert.ok(results.length > 0);
      assert.ok('docTopic' in results[0]);
      assert.ok('title' in results[0]);
      assert.ok('snippet' in results[0]);
      assert.ok('score' in results[0]);
      assert.ok('type' in results[0]);
      // path is optional — topics indexed from real files carry it.
      if (results[0].path !== undefined) {
        assert.ok(typeof results[0].path === 'string');
      }
    });

    test('topic filter restricts results (doc-level topic)', async () => {
      const results = await kb.search('water', { topic: 'Cooking' });
      assert.equal(results.length, 1);
      assert.equal(results[0].docTopic, 'Cooking');
    });

    test('empty sanitized query returns [] (no crash)', async () => {
      const results = await kb.search('AND OR NOT NEAR');
      assert.deepEqual(results, []);
    });

    test('bm25 ranking: better match ranks first', async () => {
      const results = await kb.search('soup');
      assert.equal(Array.isArray(results), true);
      assert.equal(results.length, 1);
      assert.equal(results[0].docTopic, 'Cooking');
    });

    test('porter stemming: base-form query matches inflected content', async () => {
      // 'grow' must match 'grows' (porter stems both to grow).
      const results = await kb.search('grow');
      assert.ok(results.some((r) => r.docTopic === 'Farming'));
    });

    test('prefix matching: partial last term matches full words', async () => {
      const results = await kb.search('cabbag');
      assert.ok(results.some((r) => r.docTopic === 'Farming'));
    });
  });

  describe('listTopics', () => {
    test('lists all topics with line/word/char stats', async () => {
      const topics = await kb.listTopics();
      assert.equal(topics.length, 2);
      const cooking = topics.find((t) => t.topic === 'Cooking');
      assert.ok(cooking.lines > 0);
      assert.ok(cooking.words > 0);
      assert.ok(cooking.chars > 0);
      assert.equal(typeof cooking.docType, 'string');
    });

    test('sorted by topic ascending', async () => {
      const topics = await kb.listTopics();
      assert.equal(topics[0].topic, 'Cooking');
      assert.equal(topics[1].topic, 'Farming');
    });
  });

  // N5: mtime-based incremental sync. These mutate the docs dir, so they run
  // last (node:test executes tests in declaration order).
  describe('incremental indexing (N5)', () => {
    test('overwrite:false skips unchanged docs', async () => {
      const res = await kb.indexDirectory(docsDir, { overwrite: false });
      assert.equal(res.skipped, 2);
      assert.equal(res.topics, 0);
      assert.equal(res.removed, 0);
    });

    test('overwrite:false re-indexes changed docs and prunes deleted files', async () => {
      // Change Farming, delete Cooking, then sync.
      fs.writeFileSync(
        path.join(docsDir, 'Farming.md'),
        '# Farming Guide v2\n\nCabbage grows in spring.\n'
      );
      fs.rmSync(path.join(docsDir, 'Cooking.md'));

      const res = await kb.indexDirectory(docsDir, { overwrite: false });
      assert.equal(res.topics, 1); // Farming updated
      assert.equal(res.skipped, 0);
      assert.equal(res.removed, 1); // Cooking pruned

      const topics = await kb.listTopics();
      assert.deepEqual(
        topics.map((t) => t.topic).sort(),
        ['Farming']
      );
      const farming = await kb.getTopic('Farming');
      assert.equal(farming.title, 'Farming Guide v2');
    });
  });
});

describe('KnowledgeBaseManager async fs (audit D4)', () => {
  let tmpDir;
  let docsDir;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-d4-'));
    docsDir = path.join(tmpDir, 'docs');
    fs.mkdirSync(docsDir, { recursive: true });
    kb = new KnowledgeBaseManager(path.join(tmpDir, 'data'));
    await kb.initialize();
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('indexDirectory indexes markdown files via async fs (frontmatter + plain)', async () => {
    fs.writeFileSync(
      path.join(docsDir, 'doc1.md'),
      '---\ntitle: Test Doc\nsource: manual\n---\nThis is the body of test doc.\n'
    );
    fs.writeFileSync(
      path.join(docsDir, 'doc2.md'),
      '# Simple Doc\nNo frontmatter, just content.\n'
    );

    await kb.indexDirectory(docsDir, { overwrite: true });

    const byBody = await kb.search('body');
    assert.deepStrictEqual(byBody.map((r) => r.docTopic).sort(), ['doc1']);
    const byContent = await kb.search('content');
    assert.deepStrictEqual(byContent.map((r) => r.docTopic).sort(), ['doc2']);
  });

  test('re-indexing prunes docs whose file disappeared (await exists path)', async () => {
    const file3 = path.join(docsDir, 'doc3.md');
    fs.writeFileSync(file3, 'Content to be pruned\n');
    await kb.indexDirectory(docsDir, { overwrite: true });

    let results = await kb.search('pruned');
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].docTopic, 'doc3');

    fs.unlinkSync(file3);
    await kb.indexDirectory(docsDir, { overwrite: false });

    results = await kb.search('pruned');
    assert.strictEqual(results.length, 0);
  });
});

describe('KnowledgeBaseManager chunking + section reads (KB v2)', () => {
  let tmpDir;
  let docsDir;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-chunk-'));
    docsDir = path.join(tmpDir, 'docs');
    fs.mkdirSync(docsDir, { recursive: true });
    fs.writeFileSync(
      path.join(docsDir, 'Guide.md'),
      '# Guide\n\nIntro paragraph.\n\n## Section One\n\nWater is essential for crops. Fishing requires a rod.\n\n## Section Two\n\nMetalworking needs a forge.\n'
    );
    kb = new KnowledgeBaseManager(path.join(tmpDir, 'data'));
    await kb.initialize();
    const res = await kb.indexDirectory(docsDir);
    assert.deepEqual(res.errors, []);
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('splits a doc into section chunks with #section ids', async () => {
    const results = await kb.search('forge');
    assert.equal(results.length, 1);
    assert.equal(results[0].docTopic, 'Guide');
    assert.equal(results[0].topic, 'Guide#section-two');
    assert.equal(results[0].section, 'Section Two');
    assert.match(results[0].snippet, /forge/);
  });

  test('getTopic with a #section returns only that chunk', async () => {
    const section = await kb.getTopic('Guide#section-one');
    assert.notEqual(section, null);
    assert.ok(section.content.includes('Water is essential'));
    assert.ok(!section.content.includes('forge'));
    assert.equal(section.docTopic, 'Guide');
    assert.equal(section.section, 'Section One');
  });

  test('getTopic without a section assembles the full doc from chunks', async () => {
    const doc = await kb.getTopic('Guide');
    assert.notEqual(doc, null);
    assert.ok(doc.content.includes('Intro paragraph'));
    assert.ok(doc.content.includes('Section One'));
    assert.ok(doc.content.includes('Section Two'));
    assert.ok(doc.lines > 0);
    assert.ok(doc.chars > 0);
  });

  test('search is stemmed and prefix-matched (porter unicode61)', async () => {
    // 'fish' matches 'Fishing' (porter stem), 'forg' prefix-matches 'forge'.
    const fish = await kb.search('fish');
    assert.ok(fish.some((r) => r.topic === 'Guide#section-one'));
    const forg = await kb.search('forg');
    assert.ok(forg.some((r) => r.topic === 'Guide#section-two'));
  });

  test('getTopic with an unknown #section returns null', async () => {
    assert.equal(await kb.getTopic('Guide#no-such-section'), null);
    assert.equal(await kb.getTopic('NoSuchDoc#x'), null);
  });

  describe('getSection (get_knowledge_section)', () => {
    test('matches a heading by name, case-insensitively, no slug guessing', async () => {
      const res = await kb.getSection('Guide', 'Section One');
      assert.notEqual(res, null);
      assert.equal(res.match.topic, 'Guide#section-one');
      assert.equal(res.match.section, 'Section One');
      assert.ok(res.match.content.includes('Water is essential'));

      // case-insensitive
      const lower = await kb.getSection('Guide', 'section one');
      assert.equal(lower.match.topic, 'Guide#section-one');
      // prefix of the heading
      const prefix = await kb.getSection('Guide', 'section o');
      assert.equal(prefix.match.topic, 'Guide#section-one');
    });

    test('matches javadocs members by member name (ignores signature prefix)', async () => {
      const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-sec-'));
      try {
        const dir = path.join(tmp2, 'javadocs');
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(
          path.join(dir, 'zombie.FixtureGlobals.md'),
          '# zombie.FixtureGlobals\n\n## Methods\n\n### public static IsoPlayer getPlayer(int playerNum)\n\nGets the local player.\n\n### public static int getSquareWidth()\n\nWidth of the square. Note: getPlayer is deprecated here.\n'
        );
        // skipDirs excludes dirs named 'javadocs' by default (that is the
        // dedicated index_javadocs corpus) — the fixture dir uses that name
        // to drive javadocs doc-type inference, so walk it explicitly.
        const kb2 = new KnowledgeBaseManager(path.join(tmp2, 'data'), {
          skipDirs: [],
        });
        try {
          await kb2.initialize();
          // Walk tmp2 so the javadocs/ directory name becomes part of the
          // relative path: topic = javadocs/zombie.FixtureGlobals and the
          // doc is inferred as javadocs type.
          const res = await kb2.indexDirectory(tmp2);
          assert.deepEqual(res.errors, []);

          const hit = await kb2.getSection(
            'javadocs/zombie.FixtureGlobals',
            'getPlayer'
          );
          assert.notEqual(hit.match, null);
          assert.equal(
            hit.match.section,
            'public static IsoPlayer getPlayer(int playerNum)'
          );
          assert.ok(hit.match.content.includes('local player'));
          assert.ok(!hit.match.content.includes('square'));

          // Slug is deterministic from the signature: name + param types
          // (lowercased): ...#getplayer-int.
          assert.ok(
            hit.match.topic.toLowerCase().includes('getplayer'),
            hit.match.topic
          );

          // Priority: a description line that merely contains the member name
          // must NOT outrank the member chunk itself (slug-prefix beats
          // body-substring).
          const deprecation = await kb2.getSection(
            'javadocs/zombie.FixtureGlobals',
            'getPlayer'
          );
          assert.equal(
            deprecation.match.section,
            'public static IsoPlayer getPlayer(int playerNum)'
          );
        } finally {
          kb2.close();
        }
      } finally {
        fs.rmSync(tmp2, { recursive: true, force: true });
      }
    });

    test('a full chunk id in topic wins over the section param', async () => {
      const res = await kb.getSection('Guide#section-two', 'Section One');
      assert.notEqual(res, null);
      assert.equal(res.match.topic, 'Guide#section-two');
    });

    test('returns null for a missing doc and lists sections for a no-match', async () => {
      assert.equal(await kb.getSection('NoSuchDoc', 'x'), null);
      const res = await kb.getSection('Guide', 'NoSuchSection');
      assert.notEqual(res, null);
      assert.equal(res.match, null);
      assert.ok(res.sections.includes('Section One'));
      assert.ok(res.sections.includes('Section Two'));
    });
  });

  test('a v2 database migrates to v3 additively (bodyless column, data kept)', async () => {
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-v2to3-'));
    try {
      const docsDir = path.join(tmp2, 'docs');
      fs.mkdirSync(docsDir, { recursive: true });
      fs.writeFileSync(
        path.join(docsDir, 'Farming.md'),
        '# Farming\n\nCabbage grows in spring.\n'
      );
      // Build a v2 database with the same manager, then force the schema
      // version back to 2 (as a pre-upgrade v2 DB would be) and re-open.
      const kb2 = new KnowledgeBaseManager(path.join(tmp2, 'data'));
      await kb2.initialize();
      await kb2.indexDirectory(docsDir);
      kb2.close();
      const { DatabaseSync } = await import('node:sqlite');
      const dbPath = path.join(tmp2, 'data', 'pz_knowledge.db');
      const raw = new DatabaseSync(dbPath);
      try {
        // The manager builds v3 tables (bodyless already present); drop the
        // column + downgrade the version so the fixture truly simulates a
        // pre-upgrade v2 DB — otherwise the re-open's additive ALTER would
        // hit a duplicate-column error and leave the handle unclosed.
        raw.exec('ALTER TABLE knowledge_chunks DROP COLUMN bodyless');
        raw.exec('PRAGMA user_version = 2');
      } finally {
        raw.close();
      }

      const upgraded = new KnowledgeBaseManager(path.join(tmp2, 'data'));
      await upgraded.initialize();
      try {
        const check = new DatabaseSync(dbPath, { readOnly: true });
        try {
          assert.equal(
            check.prepare('PRAGMA user_version').get().user_version,
            3
          );
          const cols = check
            .prepare('PRAGMA table_info(knowledge_chunks)')
            .all()
            .map((c) => c.name);
          assert.ok(cols.includes('bodyless'));
        } finally {
          check.close();
        }
        // Existing v2 rows survive the additive migration.
        const doc = await upgraded.getTopic('Farming');
        assert.notEqual(doc, null);
        assert.ok(doc.content.includes('Cabbage'));
      } finally {
        upgraded.close();
      }
    } finally {
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });

  test('migrates a legacy v1 database to v2 (clean drop + recreate)', async () => {
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-migrate-'));
    try {
      const { DatabaseSync } = await import('node:sqlite');
      const dbPath = path.join(tmp2, 'data', 'pz_knowledge.db');
      fs.mkdirSync(path.join(tmp2, 'data'), { recursive: true });
      const raw = new DatabaseSync(dbPath);
      try {
        // Legacy v1 shape: full-copy docs table + full-copy FTS table.
        raw.exec(
          'CREATE TABLE knowledge_docs (topic TEXT PRIMARY KEY, title TEXT NOT NULL, source TEXT, content TEXT NOT NULL, mtime TEXT, file_path TEXT)'
        );
        raw.exec(
          "CREATE VIRTUAL TABLE knowledge_fts USING fts5(topic, title, source, content, tokenize='unicode61')"
        );
        raw.exec(
          "INSERT INTO knowledge_docs (topic, title, source, content) VALUES ('Legacy', 'Legacy Doc', 'old', 'old body text')"
        );
      } finally {
        raw.close();
      }

      const migrated = new KnowledgeBaseManager(path.join(tmp2, 'data'));
      await migrated.initialize();
      try {
        const check = new DatabaseSync(dbPath, { readOnly: true });
        try {
          const docCols = check
            .prepare('PRAGMA table_info(knowledge_docs)')
            .all()
            .map((c) => c.name);
          assert.ok(docCols.includes('doc_type'), 'v2 columns present');
          assert.ok(!docCols.includes('content'), 'no full-copy content column');
          // bodyless lives on knowledge_chunks (v3 additive migration).
          const chunkCols = check
            .prepare('PRAGMA table_info(knowledge_chunks)')
            .all()
            .map((c) => c.name);
          assert.ok(chunkCols.includes('bodyless'), 'v3 bodyless column present');
          assert.equal(
            check
              .prepare("SELECT name FROM sqlite_master WHERE name = 'knowledge_fts'")
              .get(),
            undefined,
            'legacy full-copy FTS table dropped'
          );
          assert.equal(
            check.prepare('PRAGMA user_version').get().user_version,
            3
          );
        } finally {
          check.close();
        }
        // Legacy rows are gone; re-indexing repopulates the v2 schema.
        assert.deepEqual(await migrated.listTopics(), []);
      } finally {
        migrated.close();
      }
    } finally {
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });
});

describe('KnowledgeBaseManager search ranking (review fixes)', () => {
  let tmpDir;
  let kb;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-rank-'));
    const docsDir = path.join(tmpDir, 'docs');
    fs.mkdirSync(path.join(docsDir, 'javadocs'), { recursive: true });
    // Prose research doc that talks about anvils.
    fs.writeFileSync(
      path.join(docsDir, 'Research.md'),
      '# Research\n\n## Forging\n\nAnvil crafting needs a forge and a hammer.\n'
    );
    // A bare bodyless javadocs constant that also carries the token.
    fs.writeFileSync(
      path.join(docsDir, 'javadocs', 'zombie.Fixture.md'),
      '# zombie.Fixture\n\n## Fields\n\n### public static final int ANVIL_WEIGHT\n'
    );
    kb = new KnowledgeBaseManager(path.join(tmpDir, 'data'), { skipDirs: [] });
    await kb.initialize();
    await kb.indexDirectory(docsDir);
  });

  after(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('natural-language query ranks prose docs before javadocs (type-aware defaults)', async () => {
    const results = await kb.search('anvil');
    assert.ok(results.length >= 2);
    assert.equal(results[0].type, 'research');
    assert.equal(results[0].docTopic, 'Research');
    // The javadocs constant still fills the tail of the result list.
    assert.ok(results.some((r) => r.type === 'javadocs'));
  });

  test('identifier-like query ranks javadocs first', async () => {
    const results = await kb.search('ANVIL_WEIGHT');
    assert.ok(results.length >= 1);
    assert.equal(results[0].type, 'javadocs');
    assert.equal(results[0].docTopic, 'javadocs/zombie.Fixture');
  });

  test('looksLikeIdentifier is conservative: capitalized prose stays prose-first', async () => {
    // 'Anvil' — a single capitalized natural-language word (no camelCase
    // transition, dot, underscore, or letter-digit adjacency) → prose first.
    const capped = await kb.search('Anvil');
    assert.ok(capped.length >= 1);
    assert.equal(capped[0].type, 'research');
    assert.equal(capped[0].docTopic, 'Research');
    // 'ANVIL' — ALL_CAPS constant signal → javadocs first (the exact member).
    const caps = await kb.search('ANVIL');
    assert.ok(caps.length >= 1);
    assert.equal(caps[0].type, 'javadocs');
    // 'zombie.Fixture' — dotted id → javadocs first.
    const dotted = await kb.search('zombie.Fixture');
    assert.ok(dotted.length >= 1);
    assert.equal(dotted[0].type, 'javadocs');
  });

  test('contentTruncated flag marks budget-truncated inline bodies', async () => {
    const results = await kb.search('anvil', {
      includeContent: true,
      maxContent: 30,
    });
    const truncated = results.filter((r) => r.contentTruncated === true);
    assert.ok(
      truncated.length > 0,
      'a small budget truncates at least one chunk body',
    );
    for (const r of truncated) {
      assert.ok(r.content !== undefined);
      assert.ok(r.content.endsWith('…'), 'truncated body carries the ellipsis');
    }
    // Untruncated results (within budget) carry no flag.
    const full = await kb.search('anvil', {
      includeContent: true,
      maxContent: 10_000,
    });
    assert.ok(
      full.every((r) => r.contentTruncated === undefined),
      'generous budget truncates nothing',
    );
  });

  test('multi-select types filter (prose only, no javadocs)', async () => {
    const results = await kb.search('anvil', {
      types: ['research', 'wiki'],
    });
    assert.ok(results.length >= 1);
    assert.ok(
      results.every((r) => r.type === 'research' || r.type === 'wiki'),
      'no javadocs when filtered out'
    );
  });

  test('single type alias still works (type=javadocs)', async () => {
    const results = await kb.search('anvil', { type: 'javadocs' });
    assert.ok(results.length >= 1);
    assert.ok(results.every((r) => r.type === 'javadocs'));
  });

  test('results carry chars/words read-cost metadata', async () => {
    const results = await kb.search('anvil');
    assert.ok(results.length >= 2);
    for (const r of results) {
      assert.equal(typeof r.chars, 'number');
      assert.equal(typeof r.words, 'number');
      assert.ok(r.chars > 0, 'chars > 0');
      assert.ok(r.words > 0, 'words > 0');
    }
  });

  test('includeContent returns chunk bodies inline within the maxContent budget', async () => {
    const results = await kb.search('anvil', {
      includeContent: true,
      maxContent: 200,
    });
    const withContent = results.filter((r) => r.content !== undefined);
    assert.ok(withContent.length > 0, 'at least one result carries content');
    const total = withContent.reduce((s, r) => s + r.content.length, 0);
    assert.ok(
      total <= 200 + 50,
      'cumulative content stays near the budget'
    );
    // Without includeContent there is no content field.
    const plain = await kb.search('anvil');
    assert.ok(plain.every((r) => r.content === undefined));
  });

  test('prefix tightening: "cooking" no longer prefix-matches "cookie"', async () => {
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-prefix-'));
    try {
      const dir = path.join(tmp2, 'docs');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        path.join(dir, 'Cooking.md'),
        '# Cooking\n\nCooking soup needs water and a pot.\n'
      );
      fs.writeFileSync(
        path.join(dir, 'Baking.md'),
        '# Baking\n\nBaking a cookie needs flour.\n'
      );
      const kb2 = new KnowledgeBaseManager(path.join(tmp2, 'data'));
      await kb2.initialize();
      await kb2.indexDirectory(dir);
      try {
        // Exact porter-stem match exists → no prefix fallback → no 'cookie'.
        const results = await kb2.search('cooking');
        assert.ok(results.some((r) => r.docTopic === 'Cooking'));
        assert.ok(!results.some((r) => r.docTopic === 'Baking'));
        // Partial-word queries still fall back to the prefix pass.
        const partial = await kb2.search('cooki');
        assert.ok(partial.some((r) => r.docTopic === 'Baking'));
      } finally {
        kb2.close();
      }
    } finally {
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });

  test('getSections reads several members in one call (batch)', async () => {
    const tmp2 = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-kb-batch-'));
    try {
      const dir = path.join(tmp2, 'javadocs');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        path.join(dir, 'zombie.FixtureGlobals.md'),
        '# zombie.FixtureGlobals\n\n## Methods\n\n### public static IsoPlayer getPlayer(int playerNum)\n\nGets the local player.\n\n### public static void Load()\n\nLoads the globals.\n'
      );
      const kb2 = new KnowledgeBaseManager(path.join(tmp2, 'data'), {
        skipDirs: [],
      });
      await kb2.initialize();
      await kb2.indexDirectory(tmp2);
      try {
        const res = await kb2.getSections(
          'javadocs/zombie.FixtureGlobals',
          ['getPlayer', 'Load', 'NoSuchMember']
        );
        assert.notEqual(res, null);
        assert.equal(res.results.length, 3);
        assert.ok(res.results[0].topic.toLowerCase().includes('getplayer'));
        assert.ok(res.results[0].content.includes('local player'));
        assert.ok(res.results[1].topic.toLowerCase().includes('load'));
        assert.equal(res.results[2], null, 'a miss yields null, not an error');
        assert.ok(res.sections.some((s) => s.includes('getPlayer')));
        assert.equal(await kb2.getSections('NoSuchDoc', ['x']), null);
      } finally {
        kb2.close();
      }
    } finally {
      fs.rmSync(tmp2, { recursive: true, force: true });
    }
  });
});
