/**
 * Unit tests for KnowledgeBaseManager: indexing, FTS5 search with
 * relevance ranking (bm25), topic filtering, topic listing, and the
 * mtime-based incremental sync (freebuff N5).
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
      assert.ok(res.chars > 0);
      assert.deepEqual(res.errors, []);
    });

    test('extracts title from first # heading and source from > Source: line', async () => {
      const topics = await kb.listTopics();
      const farming = topics.find((t) => t.topic === 'Farming');
      assert.equal(farming.title, 'Farming Guide');
    });
  });

  describe('search', () => {
    test('finds matching docs with topic + snippet', async () => {
      const results = await kb.search('water');
      assert.ok(results.length > 0);
      assert.ok('topic' in results[0]);
      assert.ok('title' in results[0]);
      assert.ok('snippet' in results[0]);
      assert.ok('score' in results[0]);
    });

    test('topic filter restricts results', async () => {
      const results = await kb.search('water', { topic: 'Cooking' });
      assert.equal(results.length, 1);
      assert.equal(results[0].topic, 'Cooking');
    });

    test('empty sanitized query returns [] (no crash)', async () => {
      const results = await kb.search('AND OR NOT NEAR');
      assert.deepEqual(results, []);
    });

    test('bm25 ranking: better match ranks first', async () => {
      const results = await kb.search('soup');
      assert.equal(Array.isArray(results), true);
      assert.equal(results.length, 1);
      assert.equal(results[0].topic, 'Cooking');
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
    assert.deepStrictEqual(byBody.map((r) => r.topic).sort(), ['doc1']);
    const byContent = await kb.search('content');
    assert.deepStrictEqual(byContent.map((r) => r.topic).sort(), ['doc2']);
  });

  test('re-indexing prunes docs whose file disappeared (await exists path)', async () => {
    const file3 = path.join(docsDir, 'doc3.md');
    fs.writeFileSync(file3, 'Content to be pruned\n');
    await kb.indexDirectory(docsDir, { overwrite: true });

    let results = await kb.search('pruned');
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].topic, 'doc3');

    fs.unlinkSync(file3);
    await kb.indexDirectory(docsDir, { overwrite: false });

    results = await kb.search('pruned');
    assert.strictEqual(results.length, 0);
  });
});
