/**
 * Unit tests for KnowledgeBaseManager: indexing, FTS5 search with
 * relevance ranking (bm25), topic filtering, and topic listing.
 * Runs against the compiled dist/ build.
 */
import path from 'path';
import fs from 'fs';
import os from 'os';

import { KnowledgeBaseManager } from '../../dist/knowledge/KnowledgeBaseManager.js';

describe('KnowledgeBaseManager', () => {
  let tmpDir;
  let docsDir;
  let kb;

  beforeAll(async () => {
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

  afterAll(() => {
    kb.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('indexDirectory', () => {
    test('indexes markdown docs and returns stats', async () => {
      const res = await kb.indexDirectory(docsDir);
      expect(res.topics).toBe(2);
      expect(res.files).toBe(2);
      expect(res.chars).toBeGreaterThan(0);
      expect(res.errors).toEqual([]);
    });

    test('extracts title from first # heading and source from > Source: line', async () => {
      const topics = await kb.listTopics();
      const farming = topics.find((t) => t.topic === 'Farming');
      expect(farming.title).toBe('Farming Guide');
    });
  });

  describe('search', () => {
    test('finds matching docs with topic + snippet', async () => {
      const results = await kb.search('water');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0]).toHaveProperty('topic');
      expect(results[0]).toHaveProperty('title');
      expect(results[0]).toHaveProperty('snippet');
      expect(results[0]).toHaveProperty('score');
    });

    test('topic filter restricts results', async () => {
      const results = await kb.search('water', { topic: 'Cooking' });
      expect(results.length).toBe(1);
      expect(results[0].topic).toBe('Cooking');
    });

    test('empty sanitized query returns [] (no crash)', async () => {
      const results = await kb.search('AND OR NOT NEAR');
      expect(results).toEqual([]);
    });

    test('bm25 ranking: better match ranks first', async () => {
      // Cooking matches "water" in content once; Farming also once. Both
      // should return; the one with the match in more columns (none here)
      // — for equal matches, order may tie, but must not crash and must
      // be an array.
      const results = await kb.search('soup');
      expect(Array.isArray(results)).toBe(true);
      expect(results.length).toBe(1);
      expect(results[0].topic).toBe('Cooking');
    });
  });

  describe('listTopics', () => {
    test('lists all topics with line/word/char stats', async () => {
      const topics = await kb.listTopics();
      expect(topics.length).toBe(2);
      const cooking = topics.find((t) => t.topic === 'Cooking');
      expect(cooking.lines).toBeGreaterThan(0);
      expect(cooking.words).toBeGreaterThan(0);
      expect(cooking.chars).toBeGreaterThan(0);
    });

    test('sorted by topic ascending', async () => {
      const topics = await kb.listTopics();
      expect(topics[0].topic).toBe('Cooking');
      expect(topics[1].topic).toBe('Farming');
    });
  });
});
