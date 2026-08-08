import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { parseScriptValue } from '../../dist/utils/scriptSyntax.js';

describe('parseScriptValue', () => {
  test('parses "10" to number', () => {
    const result = parseScriptValue('10');
    assert.strictEqual(result, 10);
    assert.strictEqual(typeof result, 'number');
  });

  test('parses "-10" to number', () => {
    const result = parseScriptValue('-10');
    assert.strictEqual(result, -10);
    assert.strictEqual(typeof result, 'number');
  });

  test('parses "-1.5" to number', () => {
    const result = parseScriptValue('-1.5');
    assert.strictEqual(result, -1.5);
    assert.strictEqual(typeof result, 'number');
  });

  test('parses "0" to number', () => {
    const result = parseScriptValue('0');
    assert.strictEqual(result, 0);
  });

  test('does not parse "-" as number', () => {
    const result = parseScriptValue('-');
    assert.strictEqual(result, '-');
    assert.strictEqual(typeof result, 'string');
  });

  test('precision guard for large integer "9007199254740993"', () => {
    const result = parseScriptValue('9007199254740993');
    assert.strictEqual(result, '9007199254740993');
    assert.strictEqual(typeof result, 'string');
  });

  test('parses "abc" as string', () => {
    const result = parseScriptValue('abc');
    assert.strictEqual(result, 'abc');
    assert.strictEqual(typeof result, 'string');
  });

  test('parses quoted string', () => {
    const result = parseScriptValue('"foo"');
    assert.strictEqual(result, 'foo');
  });

  test('parses semicolon list', () => {
    const result = parseScriptValue('a;b');
    assert.deepStrictEqual(result, ['a', 'b']);
  });

  test('parses booleans', () => {
    assert.strictEqual(parseScriptValue('true'), true);
    assert.strictEqual(parseScriptValue('false'), false);
  });
});