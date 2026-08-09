/**
 * FTS/database lifecycle integration tests (audit: expand FTS coverage).
 *
 * Exercises the real DatabaseManager against real SQLite files: insert →
 * search, update → search, delete → search (trigger path), rowid churn under
 * bulk upsert, a large import, an empty database, and migration of a
 * pre-v2 database (missing item columns + old FTS shape) into the current
 * schema with `PRAGMA user_version` bumped.
 *
 * Runs against the compiled dist/ build (npm test builds first).
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { DatabaseSync } from 'node:sqlite';

import {
  DatabaseManager,
  SCHEMA_VERSION,
} from '../dist/database/DatabaseManager.js';

function makeDb() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-fts-'));
  const dbPath = path.join(dir, 'data', 'pz_database.db');
  const db = new DatabaseManager(dbPath);
  return { dir, dbPath, db };
}

function item(id, extra = {}) {
  return {
    id,
    name: id,
    displayName: id,
    type: 'item',
    module: 'Base',
    category: 'Weapon',
    properties: { Type: 'Weapon' },
    rawContent: `item ${id} {}`,
    filePath: 'test.txt',
    ...extra,
  };
}

describe('DatabaseManager FTS lifecycle (audit P0)', () => {
  test('a fresh database reports the current schema version', async () => {
    const { dir, dbPath, db } = makeDb();
    try {
      await db.initialize();
      const raw = new DatabaseSync(dbPath, { readOnly: true });
      try {
        const ver = raw.prepare('PRAGMA user_version').get();
        assert.equal(ver.user_version, SCHEMA_VERSION);
      } finally {
        raw.close();
      }
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('empty database: search returns [] without crashing', async () => {
    const { dir, db } = makeDb();
    try {
      await db.initialize();
      assert.deepEqual(await db.searchContent(''), []);
      assert.deepEqual(await db.searchContent('anything'), []);
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('insert → search finds the row', async () => {
    const { dir, db } = makeDb();
    try {
      await db.initialize();
      await db.insertItem(item('Base.LifeSword'));
      const results = await db.searchContent('LifeSword');
      assert.equal(results.length, 1);
      assert.equal(results[0].id, 'Base.LifeSword');
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('update → search reflects the new value and drops the old term', async () => {
    const { dir, db } = makeDb();
    try {
      await db.initialize();
      await db.insertItem(item('Base.UpdateKnife', { displayName: 'Old Name' }));

      // Old display name is searchable (FTS name + display_name columns).
      let results = await db.searchContent('Old');
      assert.ok(results.some((r) => r.id === 'Base.UpdateKnife'));

      // Upsert with a new display name (re-parse scenario).
      await db.insertItem(item('Base.UpdateKnife', { displayName: 'New Name' }));

      results = await db.searchContent('New');
      assert.ok(results.some((r) => r.id === 'Base.UpdateKnife'));
      // The old FTS row must be gone (update trigger deletes + reinserts).
      const stale = await db.searchContent('Old');
      assert.ok(!stale.some((r) => r.id === 'Base.UpdateKnife'));
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('delete → search no longer finds the row (AFTER DELETE trigger)', async () => {
    const { dir, dbPath, db } = makeDb();
    try {
      await db.initialize();
      await db.insertItem(item('Base.GoneAxe'));
      assert.ok(
        (await db.searchContent('GoneAxe')).some((r) => r.id === 'Base.GoneAxe'),
      );

      // Delete through a raw connection: the items_ad trigger must remove the
      // FTS row (this is the path forceReparse/clearDatabase rely on).
      // NOTE: use a prepared statement — node:sqlite's exec() silently ignores
      // bound parameters, so exec('DELETE … WHERE id = ?', id) deletes nothing.
      const raw = new DatabaseSync(dbPath);
      try {
        raw.prepare('DELETE FROM items WHERE id = ?').run('Base.GoneAxe');
      } finally {
        raw.close();
      }

      const results = await db.searchContent('GoneAxe');
      assert.equal(results.some((r) => r.id === 'Base.GoneAxe'), false);
      // And a MATCH must not throw "missing row N" — the index is consistent.
      assert.equal(Array.isArray(results), true);
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('rowid churn under bulk upsert keeps FTS consistent', async () => {
    const { dir, db } = makeDb();
    try {
      await db.initialize();
      const batch = [];
      for (let i = 0; i < 50; i++) batch.push(item(`Base.Churn${i}`));
      await db.insertItems(batch);

      // Re-insert the same ids with changed data (simulates re-parse).
      const reBatch = batch.map((it, i) =>
        item(`Base.Churn${i}`, { displayName: `Churn ${i} v2` }),
      );
      await db.insertItems(reBatch);

      for (let i = 0; i < 50; i += 10) {
        const results = await db.searchContent(`Churn${i}`);
        assert.ok(
          results.some((r) => r.id === `Base.Churn${i}`),
          `Churn${i} must stay searchable after churn`,
        );
      }
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('a large import stays searchable', async () => {
    const { dir, db } = makeDb();
    try {
      await db.initialize();
      const batch = [];
      for (let i = 0; i < 1000; i++) batch.push(item(`Base.Bulk${i}`));
      await db.insertItems(batch);

      const needle = await db.searchContent('Bulk500');
      assert.ok(needle.some((r) => r.id === 'Base.Bulk500'));

      const stats = await db.getStats();
      assert.equal(stats.total, 1000);
    } finally {
      db.close();
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  test('initialize() migrates a v1 database (missing item columns + old FTS shape)', async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-v1-'));
    const dbPath = path.join(dir, 'data', 'pz_database.db');
    fs.mkdirSync(path.join(dir, 'data'), { recursive: true });

    // Build a v1-era database by hand: the items table without the search
    // columns, and an items_fts WITHOUT the plain-text properties_text mirror
    // (the exact shape the pre-migration schema had).
    const raw = new DatabaseSync(dbPath);
    raw.exec(`
      CREATE TABLE items (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        display_name TEXT,
        type TEXT NOT NULL,
        module TEXT NOT NULL,
        category TEXT,
        properties TEXT,
        raw_content TEXT,
        file_path TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE VIRTUAL TABLE items_fts USING fts5(
        id, name, display_name, type, module, category,
        content=items, content_rowid=rowid
      );
    `);
    raw
      .prepare(
        `INSERT INTO items (id, name, display_name, type, module, category, properties)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run('V1Sword', 'V1Sword', 'V1 Sword', 'item', 'Base', 'Weapon', '{"Type":"Weapon"}');
    raw.close();

    try {
      const db = new DatabaseManager(dbPath);
      await db.initialize();

      // 1) Schema version is bumped to the current version.
      const check = new DatabaseSync(dbPath, { readOnly: true });
      try {
        assert.equal(
          check.prepare('PRAGMA user_version').get().user_version,
          SCHEMA_VERSION,
        );
        // 2) The new columns exist after migration.
        const cols = check.prepare('PRAGMA table_info(items)').all().map((c) => c.name);
        for (const col of ['properties_text', 'tags', 'weight', 'calories']) {
          assert.ok(cols.includes(col), `column ${col} must exist after migration`);
        }
      } finally {
        check.close();
      }

      // 3) The old row survived and is searchable via the rebuilt FTS index.
      const results = await db.searchContent('V1Sword');
      assert.ok(results.some((r) => r.id === 'V1Sword'));

      // 4) New inserts keep working after the migration.
      await db.insertItem(item('Base.V1NewItem'));
      const fresh = await db.searchContent('V1NewItem');
      assert.ok(fresh.some((r) => r.id === 'Base.V1NewItem'));

      db.close();
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
