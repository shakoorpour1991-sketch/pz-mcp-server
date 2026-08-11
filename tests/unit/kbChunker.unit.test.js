/**
 * Unit tests for the KB chunker (src/knowledge/kbChunker.ts): frontmatter
 * parsing with inline arrays, doc-type inference, per-type cleaning, heading-
 * based chunking (including per-member javadocs chunks), deterministic chunk
 * ids, and the full parseKbDoc pipeline.
 * Runs against the compiled dist/ build.
 */
import { describe, test } from "node:test";
import assert from "node:assert/strict";

import {
  parseFrontmatter,
  inferDocType,
  cleanMarkdown,
  slugify,
  chunkMarkdown,
  parseKbDoc,
  isBodyless,
} from "../../dist/knowledge/kbChunker.js";

describe("parseFrontmatter", () => {
  test("parses scalars, quoted values, and inline arrays", () => {
    const raw = `---
title: "PZ Java - Build 42"
source: PZwiki (cleaned)
build: '42.20'
tags: [pz, modding, build42]
---
# Body
`;
    const { meta, body } = parseFrontmatter(raw);
    assert.equal(meta.title, "PZ Java - Build 42");
    assert.equal(meta.source, "PZwiki (cleaned)");
    assert.equal(meta.build, "42.20");
    assert.deepEqual(meta.tags, ["pz", "modding", "build42"]);
    assert.equal(body, "# Body\n");
  });

  test("no-op without frontmatter", () => {
    const { meta, body } = parseFrontmatter("# Just a doc\n");
    assert.deepEqual(meta, {});
    assert.equal(body, "# Just a doc\n");
  });

  test("no-op with an unterminated opener", () => {
    const raw = "---\ntitle: dangling\n";
    const { meta, body } = parseFrontmatter(raw);
    assert.deepEqual(meta, {});
    assert.equal(body, raw);
  });
});

describe("inferDocType", () => {
  test("maps top-level path segments to the taxonomy", () => {
    assert.equal(inferDocType("wiki/Java"), "wiki");
    assert.equal(inferDocType("api-docs/scripts/items.txt"), "api-docs");
    assert.equal(inferDocType("javadocs/zombie.iso.IsoObject"), "javadocs");
    assert.equal(inferDocType("Mods_Analysis/Bandits"), "mods-analysis");
    assert.equal(inferDocType("Build42_Blacksmithing_Research"), "research");
  });

  test("frontmatter type overrides path inference", () => {
    assert.equal(
      inferDocType("flat/dir", { type: "wiki" }),
      "wiki",
    );
  });

  test("javadocs self-identify via package/kind frontmatter", () => {
    assert.equal(
      inferDocType("zombie.FixtureGlobals", { package: "zombie" }),
      "javadocs",
    );
  });
});

describe("cleanMarkdown", () => {
  test("drops Table of Contents sections", () => {
    const cleaned = cleanMarkdown(
      "# Title\n\n## Table of Contents\n\n- [A](#a)\n- [B](#b)\n\n## Section\n\nReal content.\n",
      "research",
    );
    assert.ok(!cleaned.includes("Table of Contents"));
    assert.ok(cleaned.includes("Real content."));
  });

  test("api-docs tables collapse to key: value lines", () => {
    const cleaned = cleanMarkdown(
      "# Api\n\n| Property | Meaning |\n| --- | --- |\n| Weight | 2.0 |\n| Type | base:weapon |\n\nText.\n",
      "api-docs",
    );
    assert.ok(cleaned.includes("Property: Meaning"));
    assert.ok(cleaned.includes("Weight: 2.0"));
    assert.ok(cleaned.includes("Type: base:weapon"));
    assert.ok(!cleaned.includes("| --- |"));
  });

  test("wiki trailing footer lines are stripped", () => {
    const cleaned = cleanMarkdown(
      "# Page\n\nContent.\n\nRetrieved from https://pzwiki.net/w/index.php?title=Java\nCategory: Modding\n",
      "wiki",
    );
    assert.ok(!cleaned.includes("Retrieved from"));
    assert.ok(!cleaned.includes("Category:"));
    assert.ok(cleaned.includes("Content."));
  });

  test("javadocs ingestion footer keeps provenance but drops the machine path", () => {
    const cleaned = cleanMarkdown(
      "# astar.AStar\n\n## Methods\n\n### public int numSearchSteps()\n\n**Returns:** `int`\n\n---\n*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\\Users\\x\\AStar.html`*\n",
      "javadocs",
    );
    assert.ok(cleaned.includes("numSearchSteps"));
    // The source label survives (portable provenance)…
    assert.ok(cleaned.includes("Unofficial PZ JavaDocs 42.12.0"));
    // …but the machine-specific parse path is gone.
    assert.ok(!cleaned.includes("AStar.html"));
    assert.ok(!cleaned.includes("parsed from"));
  });

  test("normalizes newlines and trims", () => {
    const cleaned = cleanMarkdown("# T\r\n\r\n\r\n\r\nBody   \r\n", "research");
    assert.equal(cleaned, "# T\n\nBody");
  });
});

describe("slugify", () => {
  test("produces lowercase dash slugs", () => {
    assert.equal(slugify("Farming Guide"), "farming-guide");
    assert.equal(slugify("Section Two"), "section-two");
    assert.equal(slugify("  !!!  "), "section");
  });
});

describe("chunkMarkdown", () => {
  const doc = [
    "# Guide",
    "",
    "Intro paragraph.",
    "",
    "## Section One",
    "",
    "Water is essential for crops.",
    "",
    "## Section Two",
    "",
    "Metalworking needs a forge.",
    "",
  ].join("\n");

  test("splits at H1/H2 with deterministic #slug ids", () => {
    const chunks = chunkMarkdown(doc, "Guide", "research", "Guide");
    assert.deepEqual(
      chunks.map((c) => c.chunkTopic),
      ["Guide#guide", "Guide#section-one", "Guide#section-two"],
    );
    assert.equal(chunks[0].heading, "Guide");
    assert.equal(chunks[0].headingLevel, 1);
    assert.equal(chunks[1].heading, "Section One");
    assert.ok(chunks[0].content.includes("Intro paragraph."));
  });

  test("is deterministic: identical input yields identical ids", () => {
    const a = chunkMarkdown(doc, "Guide", "research", "Guide");
    const b = chunkMarkdown(doc, "Guide", "research", "Guide");
    assert.deepEqual(
      a.map((c) => c.chunkTopic),
      b.map((c) => c.chunkTopic),
    );
    assert.deepEqual(
      a.map((c) => c.content),
      b.map((c) => c.content),
    );
  });

  test("dedupes repeated heading slugs; keeps title-only H1 chunks", () => {
    // The bare '# T' heading (no body) is kept so a title-only doc stays
    // searchable; the two '## Overview' sections get deduped ids.
    const chunks = chunkMarkdown(
      "# T\n\n## Overview\n\na\n\n## Overview\n\nb\n",
      "T",
      "research",
      "T",
    );
    assert.deepEqual(
      chunks.map((c) => c.chunkTopic),
      ["T#t", "T#overview", "T#overview-2"],
    );
  });

  test("splits over-long sections into deterministic -part chunks", () => {
    const para = "word ".repeat(3000); // ~15KB single paragraph
    const body = `# T\n\n## Long\n\n${para}\n\n## Short\n\nDone.\n`;
    const chunks = chunkMarkdown(body, "T", "research", "T");
    const long = chunks.filter((c) => c.chunkTopic.startsWith("T#long"));
    assert.ok(long.length >= 2, "long section should split into parts");
    assert.ok(
      long.every((c) => c.content.length <= 6_000 + 100),
      "parts respect the chunk cap",
    );
    assert.ok(long.some((c) => c.chunkTopic.endsWith("-part-1")));
    assert.ok(long.some((c) => c.chunkTopic.endsWith("-part-2")));
    // No part is severed mid-token: cuts land on word boundaries (the repeated
    // 'word ' paragraphs guarantee spaces near the cap; the first part ends
    // with the '## Long' heading).
    assert.ok(long.every((c) => /[A-Za-z]$/.test(c.content)));
    assert.ok(chunks.some((c) => c.chunkTopic === "T#short"));
  });

  test("javadocs: every member becomes its own chunk with a member slug", () => {
    const md = [
      "# zombie.FixtureGlobals",
      "",
      "`public final class FixtureGlobals`",
      "",
      "## Fields",
      "",
      "### public static double hungerIncrease",
      "",
      "Hunger increase rate.",
      "",
      "## Methods",
      "",
      "### public static IsoPlayer getPlayer(int playerNum)",
      "",
      "Returns the player.",
      "",
      "### public static void Load()",
      "",
    ].join("\n");
    const chunks = chunkMarkdown(md, "javadocs/zombie.FixtureGlobals", "javadocs", "zombie.FixtureGlobals");
    const topics = chunks.map((c) => c.chunkTopic);
    // Class header + member-section markers + members.
    assert.ok(topics.includes("javadocs/zombie.FixtureGlobals#fields"));
    assert.ok(topics.includes("javadocs/zombie.FixtureGlobals#methods"));
    assert.ok(topics.includes("javadocs/zombie.FixtureGlobals#hungerincrease"));
    assert.ok(topics.includes("javadocs/zombie.FixtureGlobals#getplayer-int"));
    assert.ok(topics.includes("javadocs/zombie.FixtureGlobals#load"));
  });

  test("bodyless flag: bare signatures are tagged, prose chunks are not", () => {
    const bare = chunkMarkdown(
      "# T\n\nIntro paragraph about the fixture.\n\n## Fields\n\n### public static final int GlovesStrengthBonus\n\n## Methods\n\n### public static IsoPlayer getPlayer(int playerNum)\n\nGets the local player.\n",
      "T",
      "javadocs",
      "T",
    );
    const byTopic = Object.fromEntries(
      bare.map((c) => [c.chunkTopic, c]),
    );
    // Bare member signature (no body) → bodyless.
    assert.equal(byTopic["T#glovesstrengthbonus"].bodyless, true);
    // Empty member-section marker (## Fields) → bodyless.
    assert.equal(byTopic["T#fields"].bodyless, true);
    // Member with a description → not bodyless.
    assert.equal(byTopic["T#getplayer-int"].bodyless, false);
    // Class header/intro chunk with prose → not bodyless.
    assert.equal(byTopic["T#t"].bodyless, false);
    // A bare title-only chunk IS bodyless (kept for searchability, tagged).
    const bare2 = chunkMarkdown("# T\n", "T", "research", "T");
    assert.equal(bare2[0].bodyless, true);
  });

  test("generic method signatures slug by the real member name", () => {
    const md = [
      "# T",
      "",
      "## Methods",
      "",
      "### public static <T extends Comparable<T>> T max(T a)",
      "",
      "Returns the max.",
      "",
      "### public <T> List<T> mapAll(Map<String, Integer> m)",
      "",
      "Maps all.",
      "",
    ].join("\n");
    const chunks = chunkMarkdown(md, "T", "javadocs", "T");
    const topics = chunks.map((c) => c.chunkTopic);
    // The generics in the parameter types must not hijack the boundary:
    // member names are `max` / `mapall`, not `Comparable` / `mapAll`-misread.
    assert.ok(topics.includes("T#max-t"), topics.join(", "));
    assert.ok(topics.includes("T#mapall-map-string-integer"), topics.join(", "));
  });
});

describe("isBodyless", () => {
  test("heading-only content is bodyless; prose is not", () => {
    assert.equal(isBodyless("### public static final int X\n"), true);
    assert.equal(isBodyless("## Methods\n"), true);
    assert.equal(isBodyless("# Title\n"), true);
    assert.equal(
      isBodyless("### public static int x()\n\nReturns the count.\n"),
      false,
    );
    // A deprecation marker alone is still effectively bodyless.
    assert.equal(
      isBodyless("### public static void Old()\n\n> ⚠️ **Deprecated**\n"),
      true,
    );
  });

  test("stubby <=2-line structural bodies are bodyless (audit tuning)", () => {
    // A bare "**Returns:** `int`" carries no prose — tagged bodyless.
    assert.equal(
      isBodyless("### public int numSearchSteps()\n\n**Returns:** `int`\n"),
      true,
    );
    // A lone parameter-list item is structural metadata, not prose.
    assert.equal(
      isBodyless(
        "### public static void Load(String path)\n\n- `String` `path` — the file\n",
      ),
      true,
    );
    // Two structural lines (label + list item) are still bodyless.
    assert.equal(
      isBodyless(
        "### public static IsoPlayer getPlayer(int playerNum)\n\n**Parameters:**\n- `int` `playerNum`\n",
      ),
      true,
    );
    // Short prose (a real description sentence) is NOT bodyless.
    assert.equal(
      isBodyless("### public static int x()\n\nReturns the player's square.\n"),
      false,
    );
    // 3+ structural lines (full Parameters + Returns) count as a real body.
    assert.equal(
      isBodyless(
        "### public static void Load(String path)\n\n**Parameters:**\n- `String` `path`\n\n**Returns:** `void`\n",
      ),
      false,
    );
  });
});

describe("parseKbDoc", () => {
  test("extracts title/source/tags/docType/meta from wiki frontmatter", () => {
    const raw = `---
title: "Java - Build 42"
source: PZwiki (cleaned)
build: '42.20'
tags: [pz, modding, build42]
---
# Java - Build 42

Body text.
`;
    const parsed = parseKbDoc(raw, "wiki/Java.md");
    assert.equal(parsed.docTopic, "wiki/Java");
    assert.equal(parsed.title, "Java - Build 42");
    assert.equal(parsed.source, "PZwiki (cleaned)");
    assert.equal(parsed.docType, "wiki");
    assert.deepEqual(parsed.tags, ["pz", "modding", "build42"]);
    assert.equal(parsed.meta.version, "42.20");
    assert.ok(parsed.chunks.length >= 1);
  });

  test("javadocs files carry package/kind metadata and member chunks", () => {
    const raw = `---
title: zombie.FixtureGlobals
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---
# zombie.FixtureGlobals

\`public final class FixtureGlobals extends Object\`

## Methods

### public static void Load()

Loads the globals.
`;
    const parsed = parseKbDoc(raw, "zombie.FixtureGlobals.md");
    assert.equal(parsed.docType, "javadocs");
    assert.equal(parsed.meta.package, "zombie");
    assert.equal(parsed.meta.kind, "class");
    assert.equal(parsed.meta.version, "42.20.0");
    assert.ok(
      parsed.chunks.some(
        (c) => c.chunkTopic === "zombie.FixtureGlobals#load",
      ),
    );
  });

  test("falls back to first H1 and > Source: line", () => {
    const parsed = parseKbDoc(
      "# Farming Guide\n> Source: v42.20\n\nCabbage grows in spring.\n",
      "Farming.md",
    );
    assert.equal(parsed.title, "Farming Guide");
    assert.equal(parsed.source, "v42.20");
    assert.equal(parsed.docType, "research");
    assert.equal(parsed.tabley, false);
  });

  test("tabley flag: mostly-table docs are tagged, prose docs are not", () => {
    const tableDoc = parseKbDoc(
      "# Loot\n\n| Item | Weight |\n| --- | --- |\n| Nails | 2.0 |\n| Hammer | 3.0 |\n| Axe | 4.0 |\n\nA prose line.\n",
      "api-docs/mapping/loot.md",
    );
    assert.equal(tableDoc.tabley, true);
    const proseDoc = parseKbDoc(
      "# Blacksmithing\n\nAnvils are used to shape metal.\n\n## Recipes\n\nHammer + ingot = tool.\n",
      "Build42_Blacksmithing_Research.md",
    );
    assert.equal(proseDoc.tabley, false);
  });
});
