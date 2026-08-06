import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { DatabaseSync } from 'node:sqlite';
import { KnowledgeBaseManager } from '../../dist/knowledge/KnowledgeBaseManager.js';

describe('KnowledgeBaseManager: YAML frontmatter (A7)', () => {
  let tmpDir;
  let kb;
  let indexResult;

  beforeAll(async () => {
    tmpDir = mkdtempSync(join(tmpdir(), 'pz-kb-a7-'));
    const docsDir = join(tmpDir, 'docs');
    mkdirSync(docsDir, { recursive: true });

    // Doc with YAML frontmatter: title + source must come from the block,
    // and the block itself must not be indexed.
    writeFileSync(
      join(docsDir, 'loot-system.md'),
      [
        '---',
        'title: "Loot Distribution Deep Dive"',
        'build: "42.20"',
        'source: "https://pzwiki.example/loot"',
        'tags: [loot, spawning]',
        '---',
        '',
        '# Ignored H1 Title',
        '',
        'Body text about loot tables and spawn chances.',
        '',
        '> Source: blockquote fallback that must NOT win',
      ].join('\n'),
      'utf-8'
    );

    // Doc without frontmatter: old H1 + blockquote behavior must survive.
    writeFileSync(
      join(docsDir, 'plain-notes.md'),
      ['# Plain H1 Title', '', 'Just body text.', '> Source: blockquote source'].join('\n'),
      'utf-8'
    );

    kb = new KnowledgeBaseManager(tmpDir);
    await kb.initialize();
    indexResult = await kb.indexDirectory(docsDir);
  });

  afterAll(() => {
    try { kb?.close(); } catch { /* ignore */ }
    rmSync(tmpDir, { recursive: true, force: true });
  });

  test('indexes both docs without errors', () => {
    expect(indexResult.errors).toEqual([]);
    expect(indexResult.topics).toBe(2);
  });

  test('title comes from frontmatter, not the H1', async () => {
    const topic = await kb.getTopic('loot-system');
    expect(topic).not.toBeNull();
    expect(topic.title).toBe('Loot Distribution Deep Dive');
  });

  test('source comes from frontmatter, not the blockquote', () => {
    const raw = new DatabaseSync(join(tmpDir, 'pz_knowledge.db'), { readOnly: true });
    try {
      const row = raw.prepare('SELECT source FROM knowledge_docs WHERE topic = ?').get('loot-system');
      expect(row.source).toBe('https://pzwiki.example/loot');
    } finally {
      raw.close();
    }
  });

  test('frontmatter block is excluded from indexed content', async () => {
    const topic = await kb.getTopic('loot-system');
    expect(topic.content).not.toContain('title: "Loot Distribution Deep Dive"');
    expect(topic.content).not.toContain('build: "42.20"');
    expect(topic.content).not.toContain('tags: [loot, spawning]');
    expect(topic.content).toContain('Body text about loot tables');
  });

  test('docs without frontmatter keep the old H1/blockquote behavior', async () => {
    const topic = await kb.getTopic('plain-notes');
    expect(topic).not.toBeNull();
    expect(topic.title).toBe('Plain H1 Title');
    const raw = new DatabaseSync(join(tmpDir, 'pz_knowledge.db'), { readOnly: true });
    try {
      const row = raw.prepare('SELECT source FROM knowledge_docs WHERE topic = ?').get('plain-notes');
      expect(row.source).toBe('blockquote source');
    } finally {
      raw.close();
    }
  });

  test('frontmatter values are not searchable', async () => {
    const hits = await kb.search('42');
    expect(hits).toEqual([]);
  });

  test('body text remains searchable', async () => {
    const hits = await kb.search('loot tables');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].topic).toBe('loot-system');
  });
});
