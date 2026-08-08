/**
 * Unit tests for scriptScanner block-comment handling (audit M7).
 * Multi-line comments whose body lines don't start with "*" and inline
 * block comments must not corrupt block detection / brace counting.
 * Runs against the compiled dist/ build.
 */
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { scanScriptBlocks } from "../../dist/utils/scriptScanner.js";

describe("scriptScanner block comment handling", () => {
  test("multi-line comment with item declaration does not create fake block", () => {
    const content = `module Test {
  /* This is a comment
  item Foo {
    Weight = 1
  }
  */
  item Bar {
    Weight = 2
  }
}`;
    const blocks = scanScriptBlocks(content);
    assert.strictEqual(blocks.length, 1);
    assert.strictEqual(blocks[0].name, "Bar");
    assert.strictEqual(blocks[0].type, "item");
  });

  test("inline block comment does not shift brace depth", () => {
    const content = `module Test {
  item Foo { /* { */
    Weight = 1
  }
}`;
    const blocks = scanScriptBlocks(content);
    assert.strictEqual(blocks.length, 1);
    assert.strictEqual(blocks[0].name, "Foo");
    assert.strictEqual(blocks[0].endLine, 4);
  });

  test("normal item still parses correctly", () => {
    const content = `module Test {
  item Foo {
    Weight = 1
  }
}`;
    const blocks = scanScriptBlocks(content);
    assert.strictEqual(blocks.length, 1);
    assert.strictEqual(blocks[0].name, "Foo");
    assert.strictEqual(blocks[0].type, "item");
    assert.ok(blocks[0].content.some(line => line.includes("Weight = 1")));
  });
});
