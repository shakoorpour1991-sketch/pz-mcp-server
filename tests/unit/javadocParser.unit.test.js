/**
 * Unit tests for the JavaDoc HTML parser (src/knowledge/javadocs):
 * structured API extraction from generated javadoc ClassWriter pages —
 * package, type kind, FQN, fields, constructors, methods, parameters,
 * return types, signatures, inheritance, descriptions, deprecated flags and
 * source/version tags — plus mechanical class-page detection (non-class
 * pages like package-summary / class-use / search must never parse).
 *
 * Fixtures live in tests/fixtures/javadocs/ (synthetic pages mirroring the
 * real JDK-25 javadoc markup + one verbatim real page, GitVersion.html).
 * Runs against the compiled dist/ build.
 */
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import {
  isClassPage,
  parseJavaDocClass,
  htmlText,
  extractGenerator,
} from "../../dist/knowledge/javadocs/JavaDocParser.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES = path.resolve(__dirname, "..", "fixtures", "javadocs");

function readFixture(rel) {
  return fs.readFileSync(path.join(FIXTURES, rel), "utf-8");
}

function parseFixture(rel) {
  return parseJavaDocClass(readFixture(rel), path.join(FIXTURES, rel));
}

describe("javadoc class-page detection", () => {
  test("isClassPage accepts only javadoc/ClassWriter pages", () => {
    assert.equal(isClassPage(readFixture("zombie/FixtureGlobals.html")), true);
    assert.equal(isClassPage(readFixture("zombie/GitVersion.html")), true);
  });

  test("navigation/search/index/package pages are not class pages", () => {
    const nonClass = [
      "index.html",
      "search.html",
      "help-doc.html",
      "deprecated-list.html",
      "index-files/index-1.html",
      "zombie/package-summary.html",
      "zombie/package-tree.html",
      "zombie/package-use.html",
      "zombie/class-use/FixtureGlobals.html",
    ];
    for (const rel of nonClass) {
      assert.equal(
        isClassPage(readFixture(rel)),
        false,
        `${rel} must not be detected as a class page`,
      );
    }
  });

  test("extractGenerator reads the generator meta tag", () => {
    assert.equal(
      extractGenerator(readFixture("zombie/FixtureGlobals.html")),
      "javadoc/ClassWriter",
    );
    assert.equal(
      extractGenerator(readFixture("search.html")),
      "javadoc/SearchWriter",
    );
  });

  test("htmlText decodes entities and drops tags/wbr", () => {
    assert.equal(
      htmlText("public static&nbsp;void <b>Load</b><wbr>() &amp; &lt;T&gt;"),
      "public static void Load() & <T>",
    );
    assert.equal(htmlText("<br>a<br/>b"), "a\nb");
  });
});

describe("javadoc class page parsing", () => {
  test("parses a class: package, kind, FQN, modifiers, signature", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    assert.equal(doc.name, "FixtureGlobals");
    assert.equal(doc.package, "zombie");
    assert.equal(doc.kind, "class");
    assert.equal(doc.fullyQualifiedName, "zombie.FixtureGlobals");
    assert.equal(doc.modifiers, "public");
    assert.match(doc.signature, /public final class FixtureGlobals/);
    assert.match(doc.signature, /extends Object/);
  });

  test("extracts inheritance chain root→leaf and superclass", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    assert.deepEqual(doc.inheritance, [
      "java.lang.Object",
      "zombie.FixtureGlobals",
    ]);
    assert.equal(doc.superclass, "Object");
    assert.deepEqual(doc.interfaces, []);
  });

  test("extracts fields with signature + modifiers", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    assert.equal(doc.fields.length, 1);
    const field = doc.fields[0];
    assert.equal(field.kind, "field");
    assert.equal(field.name, "hungerIncrease");
    assert.equal(field.signature, "public static double hungerIncrease");
    assert.equal(field.modifiers, "public static");
    assert.equal(field.returnType, "double");
  });

  test("extracts constructors", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    assert.equal(doc.constructors.length, 1);
    const ctor = doc.constructors[0];
    assert.equal(ctor.kind, "constructor");
    assert.equal(ctor.name, "FixtureGlobals");
    assert.equal(ctor.signature, "public FixtureGlobals()");
  });

  test("extracts methods: signature, return type, params, description, param docs", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    const names = doc.methods.map((m) => m.name);
    assert.deepEqual(names, ["Load", "getPlayer", "getOldPlayerNum"]);

    const load = doc.methods.find((m) => m.name === "Load");
    assert.equal(load.signature, "public static void Load()");
    assert.equal(load.returnType, "void");
    assert.equal(load.modifiers, "public static");

    const getPlayer = doc.methods.find((m) => m.name === "getPlayer");
    assert.equal(getPlayer.returnType, "IsoPlayer");
    assert.equal(getPlayer.parameters.length, 1);
    assert.deepEqual(getPlayer.parameters[0], {
      name: "playerNum",
      type: "int",
      description: "the player index",
    });
    assert.equal(
      getPlayer.description,
      "Returns the player with the given index",
    );
  });

  test("flags deprecated members", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    const old = doc.methods.find((m) => m.name === "getOldPlayerNum");
    assert.equal(old.deprecated, true);
    assert.match(old.signature, /@Deprecated/);
    assert.equal(old.modifiers, "@Deprecated public static");
    const load = doc.methods.find((m) => m.name === "Load");
    assert.equal(load.deprecated, undefined);
  });

  test("tags source + version from the about-language banner", () => {
    const doc = parseFixture("zombie/FixtureGlobals.html");
    assert.equal(doc.source, "Unofficial PZ JavaDocs 42.20.0");
    assert.equal(doc.version, "42.20.0");
  });
});

describe("javadoc interface parsing", () => {
  test("parses an interface with description and abstract/default methods", () => {
    const doc = parseFixture("zombie/interfaces/IFixtureUpdater.html");
    assert.equal(doc.kind, "interface");
    assert.equal(doc.package, "zombie.interfaces");
    assert.equal(doc.fullyQualifiedName, "zombie.interfaces.IFixtureUpdater");
    assert.equal(
      doc.description,
      "Contract for objects that can be updated each simulation tick.",
    );
    assert.equal(doc.constructors.length, 0);
    assert.deepEqual(doc.interfaces, []);
    // Single-level chain: interface with no superinterfaces — must not
    // over-capture the type-signature section below the inheritance div.
    assert.deepEqual(doc.inheritance, ["zombie.interfaces.IFixtureUpdater"]);

    const update = doc.methods.find((m) => m.name === "update");
    assert.equal(update.signature, "void update()");
    assert.equal(update.returnType, "void");
    assert.equal(update.modifiers, "");

    const priority = doc.methods.find((m) => m.name === "getPriority");
    assert.equal(priority.modifiers, "default");
    assert.equal(priority.returnType, "int");
  });
});

describe("javadoc enum parsing", () => {
  test("parses an enum: kind, enum-constant fields, methods with param/throws docs", () => {
    const doc = parseFixture("zombie/FixtureCapability.html");
    assert.equal(doc.kind, "enum");
    assert.equal(doc.fullyQualifiedName, "zombie.FixtureCapability");
    assert.match(doc.signature, /public enum FixtureCapability/);

    // Enum constants are modeled as fields.
    assert.deepEqual(doc.fields.map((f) => f.name).sort(), [
      "Agility",
      "Strength",
    ]);
    const strength = doc.fields.find((f) => f.name === "Strength");
    assert.equal(
      strength.signature,
      "public static final FixtureCapability Strength",
    );

    const valueOf = doc.methods.find((m) => m.name === "valueOf");
    assert.equal(valueOf.returnType, "FixtureCapability");
    assert.equal(valueOf.parameters.length, 1);
    assert.equal(valueOf.parameters[0].name, "name");
    assert.equal(
      valueOf.parameters[0].description,
      "the name of the enum constant to be returned.",
    );

    const values = doc.methods.find((m) => m.name === "values");
    assert.equal(values.returnType, "FixtureCapability[]");
  });
});

describe("javadoc nested + record parsing", () => {
  test("nested types keep the dotted name in the FQN", () => {
    const doc = parseFixture("zombie/FixtureNested.Inner.html");
    assert.equal(doc.name, "FixtureNested.Inner");
    assert.equal(doc.fullyQualifiedName, "zombie.FixtureNested.Inner");
    assert.equal(doc.kind, "class");
    assert.ok(doc.methods.some((m) => m.name === "ping"));
  });

  test("records parse with kind=record and accessor methods", () => {
    const doc = parseFixture("zombie/iso/FixtureRecord.html");
    assert.equal(doc.kind, "record");
    assert.equal(doc.package, "zombie.iso");
    assert.equal(doc.fullyQualifiedName, "zombie.iso.FixtureRecord");
    assert.match(doc.signature, /implements Comparable/);
    assert.deepEqual(doc.interfaces, ["Comparable<FixtureRecord>"]);
    assert.ok(
      doc.methods.some((m) => m.name === "x" && m.returnType === "int"),
    );
  });
});

describe("javadoc real-world page (GitVersion.html)", () => {
  test("parses a verbatim real javadoc page without errors", () => {
    const doc = parseFixture("zombie/GitVersion.html");
    assert.equal(doc.name, "GitVersion");
    assert.equal(doc.package, "zombie");
    assert.equal(doc.kind, "class");
    assert.equal(doc.fullyQualifiedName, "zombie.GitVersion");
    assert.equal(doc.version, "42.20.0");
    assert.deepEqual(doc.inheritance, [
      "java.lang.Object",
      "zombie.GitVersion",
    ]);
    assert.ok(doc.fields.some((f) => f.name === "REVISION"));
    assert.equal(doc.constructors.length, 1);
    assert.equal(doc.constructors[0].name, "GitVersion");
  });
});
