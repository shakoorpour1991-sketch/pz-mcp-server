/**
 * Unit tests for the fuzzy / typo-tolerant matching utility.
 */
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  levenshtein,
  normalizeKey,
  similarity,
  bestFuzzyMatch,
} from "../../dist/utils/fuzzy.js";

describe("fuzzy matching utility", () => {
  describe("levenshtein", () => {
    test("identical strings return 0", () => {
      assert.equal(levenshtein("Hammer", "Hammer"), 0);
    });
    test("one-character typo returns 1", () => {
      assert.equal(levenshtein("Hamer", "Hammer"), 1); // missing 'm'
      assert.equal(levenshtein("Hammmer", "Hammer"), 1); // extra 'm'
    });
    test("edit distances: 1-char and 2-char typos", () => {
      assert.equal(levenshtein("Hammr", "Hammer"), 1); // insert 'e'
      assert.equal(levenshtein("Hamer", "Hammmer"), 2); // missing 'm' + extra 'm'
    });
    test("completely different strings return the longer length", () => {
      assert.equal(levenshtein("Axe", "Egg"), 3); // Axe → Egg: A→E, x→g, +g = 3
    });
    test("empty string case", () => {
      assert.equal(levenshtein("", ""), 0);
      assert.equal(levenshtein("Hammer", ""), 6);
      assert.equal(levenshtein("", "Hammer"), 6);
    });
    test("case-sensitive (uppercase vs lowercase differ)", () => {
      assert.equal(levenshtein("hammer", "Hammer"), 1);
    });
  });

  describe("normalizeKey", () => {
    test("strips Base. prefix", () => {
      assert.equal(normalizeKey("Base.Hamer"), "hamer");
    });
    test("strips base: prefix", () => {
      assert.equal(normalizeKey("base:hamer"), "hamer");
    });
    test("strips any module qualifier", () => {
      assert.equal(normalizeKey("Mod.Sword"), "sword");
    });
    test("lowercases the result", () => {
      assert.equal(normalizeKey("HAMMER"), "hammer");
    });
    test("bare name stays bare and lowercased", () => {
      assert.equal(normalizeKey("Hamer"), "hamer");
    });
    test("trims whitespace", () => {
      assert.equal(normalizeKey("  Base.Hamer  "), "hamer");
    });
  });

  describe("similarity", () => {
    test("identical is 1.0", () => {
      assert.equal(similarity("Hammer", "Hammer"), 1);
    });
    test("one-char typo is roughly 0.86 for 7-char strings", () => {
      const sim = similarity("Hamer", "Hammer");
      assert.ok(sim > 0.8 && sim < 0.9, `expected ~0.86, got ${sim}`);
    });
    test("empty strings are 1.0", () => {
      assert.equal(similarity("", ""), 1);
    });
  });

  describe("bestFuzzyMatch", () => {
    const ids = [
      "Hammer",
      "Axe",
      "BaseballBat",
      "FryingPan",
      "Screwdriver",
      "WoodenMallet",
    ];

    test("exact match returns method=exact, confidence=1", () => {
      const r = bestFuzzyMatch("Hammer", ids);
      assert.notEqual(r, null);
      assert.equal(r.method, "exact");
      assert.equal(r.confidence, 1);
      assert.equal(r.id, "Hammer");
    });

    test("case-insensitive match returns confidence ~0.98", () => {
      const r = bestFuzzyMatch("hammer", ids);
      assert.notEqual(r, null);
      assert.equal(r.method, "case-insensitive");
      assert.ok(r.confidence > 0.95);
      assert.equal(r.id, "Hammer");
    });

    test("prefix match (min 3 chars) returns prefix confidence ~0.9", () => {
      const r = bestFuzzyMatch("Basebal", ids);
      assert.notEqual(r, null);
      assert.equal(r.method, "prefix");
      assert.equal(r.id, "BaseballBat");
    });

    test("prefix match on short input (<3 chars) should not match", () => {
      const r = bestFuzzyMatch("Ba", ids);
      // 2 chars → prefix barrer not met; might be fuzzy or null
      assert.ok(r === null || r.method === "fuzzy");
    });

    test("fuzzy (typo) match resolves Hamer → Hammer", () => {
      const r = bestFuzzyMatch("Hamer", ids);
      assert.notEqual(r, null);
      assert.equal(r.method, "fuzzy");
      assert.equal(r.id, "Hammer");
      assert.ok(r.confidence > 0.8, `expected >0.8, got ${r.confidence}`);
    });

    test("fuzzy resolves Base.Hamer → Hammer (handles module prefix)", () => {
      const r = bestFuzzyMatch("Base.Hamer", ids);
      assert.notEqual(r, null);
      assert.equal(r.id, "Hammer");
    });

    test("fuzzy resolves base:hamer → Hammer (tag form)", () => {
      const r = bestFuzzyMatch("base:hamer", ids);
      assert.notEqual(r, null);
      assert.equal(r.id, "Hammer");
    });

    test("null returned for completely unrelated input", () => {
      const r = bestFuzzyMatch("Xyzzy", ids);
      assert.equal(r, null);
    });

    test("empty input returns null", () => {
      assert.equal(bestFuzzyMatch("", ids), null);
      assert.equal(bestFuzzyMatch("   ", ids), null);
    });

    test("best among multiple fuzzy candidates", () => {
      // "ScrewDriver" vs "Screwdriver" — one case difference
      const r = bestFuzzyMatch("ScrewDriver", ids);
      assert.notEqual(r, null);
      assert.equal(r.id, "Screwdriver");
      // Must be case-insensitive match (better than fuzzy)
      assert.equal(r.method, "case-insensitive");
    });
  });
});