/**
 * Unit tests for ProjectZomboidParser: semicolon-delimited list splitting
 * and rich metadata extraction into top-level columns.
 */
import path from 'path';
import fs from 'fs';
import os from 'os';

import { DatabaseManager } from '../../dist/database/DatabaseManager.js';
import { ProjectZomboidParser } from '../../dist/parsers/ProjectZomboidParser.js';

describe('ProjectZomboidParser', () => {
  let tmpDir;
  let db;
  let parser;

  beforeEach(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pz-parser-'));
    db = new DatabaseManager(path.join(tmpDir, 'data', 'pz_database.db'));
    await db.initialize();
    parser = new ProjectZomboidParser(db);
  });

  afterEach(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  describe('parseValue: semicolon-delimited lists', () => {
    test('Tags with semicolons are split into an array', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_items.txt'),
        [
          'module Base {',
          'item TestHammer',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Hammer,',
          '\tTags = "Hammer;Metal",',
          '\tWeight = 1.8,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      expect(results.itemCount).toBe(1);

      const item = await db.getItemById('TestHammer');
      expect(item).not.toBeNull();
      expect(item.properties.Tags).toEqual(['Hammer', 'Metal']);
      expect(item.tags).toEqual(['Hammer', 'Metal']);
    });

    test('single string value without semicolon stays a string', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_single.txt'),
        [
          'module Base {',
          'item TestSword',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Sword,',
          '\tTags = "Sharp",',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      expect(results.itemCount).toBe(1);

      const item = await db.getItemById('TestSword');
      expect(item.properties.Tags).toBe('Sharp');
      expect(item.tags).toEqual(['Sharp']);
    });
  });

  describe('rich metadata extraction', () => {
    test('extracts tags, metal_value, weight, condition_max, attachment_type from properties', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_rich.txt'),
        [
          'module Base {',
          'item TestSling',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Sling,',
          '\tTags = "Hammer;Metal",',
          '\tMetalValue = 20,',
          '\tWeight = 1.8,',
          '\tConditionMax = 100,',
          '\tAttachmentType = "Sling",',
          '\tRunSpeedModifier = 0.5,',
          '\tHungerChange = 5,',
          '\tThirstChange = 3,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      expect(results.itemCount).toBe(1);

      const item = await db.getItemById('TestSling');
      expect(item).not.toBeNull();
      expect(item.properties.Tags).toEqual(['Hammer', 'Metal']);
      expect(item.tags).toEqual(['Hammer', 'Metal']);
      expect(item.properties.MetalValue).toBe(20);
      expect(item.metal_value).toBe(20);
      expect(item.properties.Weight).toBe(1.8);
      expect(item.weight).toBe(1.8);
      expect(item.properties.ConditionMax).toBe(100);
      expect(item.condition_max).toBe(100);
      expect(item.properties.AttachmentType).toBe('Sling');
      expect(item.attachment_type).toBe('Sling');
      expect(item.properties.RunSpeedModifier).toBe(0.5);
      expect(item.run_speed_modifier).toBe(0.5);
      expect(item.properties.HungerChange).toBe(5);
      expect(item.hunger_change).toBe(5);
      expect(item.properties.ThirstChange).toBe(3);
      expect(item.thirst_change).toBe(3);
    });

    test('missing rich fields are undefined', async () => {
      const scriptDir = path.join(tmpDir, 'media', 'scripts');
      fs.mkdirSync(scriptDir, { recursive: true });
      fs.writeFileSync(
        path.join(scriptDir, 'test_minimal.txt'),
        [
          'module Base {',
          'item TestBasic',
          '{',
          '\tType = Weapon,',
          '\tDisplayName = Test Basic,',
          '}',
          '}',
        ].join('\n')
      );

      const results = await parser.parseGameFiles(tmpDir, true);
      expect(results.itemCount).toBe(1);

      const item = await db.getItemById('TestBasic');
      expect(item).not.toBeNull();
      expect(item.tags).toBeUndefined();
      expect(item.metal_value).toBeUndefined();
      expect(item.weight).toBeUndefined();
      expect(item.condition_max).toBeUndefined();
      expect(item.attachment_type).toBeUndefined();
      expect(item.run_speed_modifier).toBeUndefined();
      expect(item.hunger_change).toBeUndefined();
      expect(item.thirst_change).toBeUndefined();
    });
  });
});