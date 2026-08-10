/**
 * Tool-registry snapshot tests (audit P2: data-driven registration).
 *
 * The typed registry in src/tools/index.ts is the single source of truth for
 * the MCP tool surface: every tool must carry name, description, inputSchema,
 * and a handler, names must be unique, and the schema of record must reject
 * invalid input (the dispatcher relies on inputSchema.parse to gate calls).
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import { ALL_TOOLS, ToolRegistry } from '../../dist/tools/index.js';

const EXPECTED_TOOLS = [
  'search_vanilla',
  'search_recipes',
  'generate_script',
  'validate_script',
  'check_references',
  'analyze_mod',
  'parse_game_files',
  'index_knowledge_base',
  'search_knowledge_base',
  'list_knowledge_topics',
  'analyze_recipe_chain',
  'detect_recipe_conflicts',
  'export_mod_script',
  'workshop_search',
  'workshop_get_details',
  'workshop_download',
  'workshop_analyze',
  'workspace_create',
  'workspace_inspect',
  'workspace_list',
  'detect_pz_paths',
  'install_mod',
  'modgen_templates',
  'modgen_generate',
  'modgen_list',
  'modgen_blueprint',
  'modgen_regenerate',
];

describe('tool registry (audit P2)', () => {
  test('registers exactly the documented tools', () => {
    const names = ALL_TOOLS.map((t) => t.name).sort();
    assert.deepEqual(names, [...EXPECTED_TOOLS].sort());
  });

  test('every tool has a name, description, inputSchema, and handler', () => {
    for (const tool of ALL_TOOLS) {
      assert.ok(typeof tool.name === 'string' && tool.name.length > 0, 'name');
      assert.ok(
        typeof tool.description === 'string' && tool.description.length > 0,
        `${tool.name}: description`,
      );
      assert.ok(tool.inputSchema !== undefined, `${tool.name}: inputSchema`);
      assert.equal(typeof tool.handler, 'function', `${tool.name}: handler`);
    }
  });

  test('tool names are unique and the registry resolves them', () => {
    const registry = new ToolRegistry(ALL_TOOLS);
    assert.equal(registry.list().length, EXPECTED_TOOLS.length);
    for (const name of EXPECTED_TOOLS) {
      assert.notEqual(registry.get(name), undefined, `${name} resolvable`);
    }
    assert.equal(registry.get('no_such_tool'), undefined);
  });

  test('schemas reject invalid input (dispatcher gate)', () => {
    const cases = [
      // [tool, invalidArgs, expectedFail: boolean]
      ['search_vanilla', { type: 'bogus-type' }, true],
      ['search_vanilla', { query: 'x', limit: 999 }, true],
      ['search_vanilla', { query: 'sword' }, false],
      ['generate_script', { type: 'not-a-block-type', name: 'X', properties: {} }, true],
      ['generate_script', { type: 'item', name: 'X', properties: {} }, false],
      ['validate_script', { content: 'item X {}', type: 'item' }, false],
      ['validate_script', { content: 'item X {}', type: 'not-a-type' }, true],
      ['workshop_download', { id: '' }, true],
      ['workshop_download', { id: '123456' }, false], // dryRun defaults to false
      ['workshop_download', { id: '123456', dryRun: 'yes' }, true],
      ['analyze_recipe_chain', { seed: 'Axe', maxDepth: 99 }, true],
      ['analyze_recipe_chain', { seed: 'Axe' }, false],
      ['index_knowledge_base', { overwrite: 'not-a-bool' }, true],
      ['list_knowledge_topics', {}, false],
      ['detect_pz_paths', {}, false],
      ['install_mod', { source: '' }, true],
      ['install_mod', { source: '/some/Mod.zip' }, false],
      ['install_mod', { source: '/x', overwrite: 'yes' }, true],
      ['install_mod', { source: '/x', targetDir: '', dryRun: true }, true],
    ];
    const byName = new Map(ALL_TOOLS.map((t) => [t.name, t]));
    for (const [name, args, expectFail] of cases) {
      const tool = byName.get(name);
      assert.notEqual(tool, undefined, `${name} registered`);
      const result = tool.inputSchema.safeParse(args);
      assert.equal(
        result.success,
        !expectFail,
        `${name} with ${JSON.stringify(args)} should ${expectFail ? 'reject' : 'accept'}`,
      );
    }
  });
});
