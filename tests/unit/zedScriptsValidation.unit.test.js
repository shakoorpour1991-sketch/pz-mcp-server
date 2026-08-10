/**
 * ZedScripts knowledge-layer validation tests.
 *
 * Covers the ported ZedScripts diagnostics (unknown parameters, wrong values
 * and types, deprecations, required parameters, missing commas, duplicate
 * parameters, ID rules, unknown block keywords and craftRecipe input/output
 * shape checks) with both valid Build 42 scripts and intentionally invalid
 * ones that mimic common AI-generation mistakes.
 *
 * Runs against the compiled dist/ build (npm test builds first).
 */
import { describe, test, before, after } from "node:test";
import assert from "node:assert/strict";
import path from "path";
import fs from "fs";
import os from "os";

import { DatabaseManager } from "../../dist/database/DatabaseManager.js";
import { ValidationEngine } from "../../dist/validation/ValidationEngine.js";

// Reference lookups always succeed — these tests focus on the deterministic
// knowledge layer, not the game DB.
const dbStub = {
  checkReference: async () => true,
  getSimilarItems: async () => [],
  describeReference: async () => ({
    defined: true,
    itemType: "item",
    referenceTypes: [],
    referenceCount: 1,
  }),
};

const codes = (result) =>
  result.errors.concat(result.warnings).map((d) => d.code);

// Only diagnostics produced by the ZedScripts knowledge layer.
const zedDiags = (result) =>
  result.errors
    .concat(result.warnings)
    .filter((d) => d.source === "zedscripts");

describe("ZedScripts knowledge layer — valid Build 42 scripts", () => {
  let engine;
  before(() => {
    engine = new ValidationEngine(dbStub);
  });

  test("valid item (ItemType/Weight/Categories) has no diagnostics", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tWeight = 1.5,",
      "\tCategories = SmallBlade,",
      "\tMaxDamage = 1.1,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    assert.deepEqual(result.errors, []);
    assert.ok(!codes(result).includes("UNKNOWN_PARAMETER"));
    assert.equal(result.isValid, true);
  });

  test("valid craftRecipe with tags + inputs/outputs has no diagnostics", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakePlank",
      "    {",
      "        tags = Carpentry;Other,",
      "        Time = 150,",
      "        inputs",
      "        {",
      "            item 1 [Base.Log;Base.WoodenStick],",
      "            item 1 tags[base:spatula] mode:keep,",
      "        }",
      "        outputs",
      "        {",
      "            item 2 Base.Plank,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
    assert.deepEqual(result.warnings, []);
  });

  test("valid evolvedrecipe with vanilla Ingredients/Time (server-verified allowlist)", async () => {
    const script = [
      "module TestMod",
      "{",
      "    evolvedrecipe TestSoup",
      "    {",
      "        BaseItem: Base.Soup,",
      "        Ingredients: Base.Water,Base.Cabbage,",
      "        ResultItem: Base.Soup,",
      "        Time: 60,",
      "        MaxItems: 3,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "evolvedrecipe");
    assert.deepEqual(result.errors, []);
    assert.ok(!codes(result).includes("UNKNOWN_PARAMETER"));
  });

  test("valid fixing and sound blocks have no diagnostics", async () => {
    const fixing = [
      "fixing FixtureFixBat",
      "{",
      "\tRequire : Base.Bat,",
      "\tFixer : Base.Glue=1;Fixing=2,",
      "}",
    ].join("\n");
    const fResult = await engine.validateScript(fixing, "fixing");
    assert.deepEqual(fResult.errors, []);
    assert.equal(fResult.isValid, true);

    const sound = [
      "sound FixtureSwing",
      "{",
      "\tcategory = Ambient,",
      "\tloop = TRUE,",
      "\tmaster = Primary,",
      "}",
    ].join("\n");
    const sResult = await engine.validateScript(sound, "sound");
    assert.deepEqual(sResult.errors, []);
    assert.equal(sResult.isValid, true);
  });

  test("legacy B41 recipe blocks keep the existing lenient handling", async () => {
    // rawType `recipe` is not in the Build 42 dataset — no knowledge-layer
    // diagnostics (no MISSING_PARAMETER for tags, no ID rules).
    const script = [
      "recipe Make LegacyPlank",
      "{",
      "\tResult:Base.Plank=2,",
      "\tTime:150.0,",
      "\tCategory:Carpentry,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    assert.deepEqual(result.errors, []);
    assert.equal(result.isValid, true);
  });
});

describe("ZedScripts knowledge layer — AI-generation mistakes", () => {
  let engine;
  before(() => {
    engine = new ValidationEngine(dbStub);
  });

  const find = (result, code) =>
    result.errors.concat(result.warnings).find((d) => d.code === code);

  test("unknown property is flagged with a suggestion (and a typo suggests the real name)", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tMaxDamaage = 999,",
      "\tFlyingPower = 1,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const typo = find(result, "UNKNOWN_PARAMETER");
    assert.ok(typo, "expected UNKNOWN_PARAMETER");
    assert.equal(typo.severity, "warning");
    assert.ok(typo.suggestion.includes("MaxDamage"), typo.suggestion);
    assert.equal(find(result, "UNKNOWN_PARAMETER").source, "zedscripts");
    assert.equal(result.zedScripts.source.includes("pz-scripts-data"), true);
    assert.equal(result.zedScripts.commit.length > 0, true);
  });

  test("nonexistent ItemType value is an error with the valid list", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:sword,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const wrong = find(result, "WRONG_VALUES");
    assert.ok(wrong);
    assert.equal(wrong.severity, "error");
    assert.ok(wrong.suggestion.includes("base:weapon"));
    assert.equal(result.isValid, false);
  });

  test("wrong-typed value (Weight = heavy) is an error", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tWeight = heavy,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const typeErr = find(result, "INVALID_TYPE_FOR_VALUE");
    assert.ok(typeErr);
    assert.equal(typeErr.severity, "error");
    assert.ok(typeErr.message.includes("float"));
    assert.equal(result.isValid, false);
  });

  test("legacy deprecated parameters are flagged with replacements", async () => {
    const script = [
      "item LegacyItem",
      "{",
      "\tType = Weapon,",
      "\tItemType = base:weapon,",
      "\tDisplayName = Old Name,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const dep = find(result, "DEPRECATED_PARAMETER_REPLACEMENT_VERSION");
    assert.ok(dep);
    assert.equal(dep.severity, "warning");
    assert.ok(dep.suggestion.includes("ItemType"));
    assert.ok(codes(result).includes("DEPRECATED_PARAMETER_VERSION")); // DisplayName
    assert.equal(result.isValid, true); // deprecations never invalidate
  });

  test("missing required craftRecipe tags is an error", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakePlank",
      "    {",
      "        Time = 150,",
      "        inputs { item 1 Base.Log, }",
      "        outputs { item 1 Base.Plank, }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    const missing = find(result, "MISSING_PARAMETER");
    assert.ok(missing);
    assert.equal(missing.severity, "error");
    assert.ok(missing.message.includes("tags"));
    assert.equal(result.isValid, false);
  });

  test("missing comma is flagged with the corrected line", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon",
      "\tWeight = 1.5,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const comma = find(result, "MISSING_COMMA");
    assert.ok(comma);
    assert.equal(comma.severity, "warning");
    assert.ok(comma.suggestion.includes("base:weapon,"));
  });

  test("duplicate parameters are flagged", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tWeight = 1,",
      "\tWeight = 2,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const dup = find(result, "DUPLICATE_PARAMETER");
    assert.ok(dup);
    assert.equal(dup.severity, "warning");
  });

  test("craftRecipe input shape mistakes are all caught", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakeX",
      "    {",
      "        tags = Test,",
      "        inputs",
      "        {",
      "            item 1.5 [Log;Base.Log.Base.Wood;Base.Wood Stuff],",
      "        }",
      "        outputs",
      "        {",
      "            item 1 [*;Base.Plank],",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    const allCodes = codes(result);
    // fractional amount
    assert.ok(allCodes.includes("INTEGER_AMOUNT"));
    // bare id without module part
    assert.ok(allCodes.includes("MISSING_MODULE"));
    // item ID with dots (module.id.id)
    assert.ok(allCodes.includes("NO_DOTS_ITEM"));
    // item full type with spaces
    assert.ok(allCodes.includes("SPACES_IN_ITEM"));
    // '*' alongside other items
    assert.ok(allCodes.includes("ALL_WITH_OTHERS"));
    assert.equal(result.isValid, false);
  });

  test("malformed amounts (negative / non-numeric) are caught", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakeX",
      "    {",
      "        tags = Test,",
      "        inputs",
      "        {",
      "            item -1 Base.Nails,",
      "            item x Base.Glue,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    const amounts = result.errors
      .concat(result.warnings)
      .filter((d) => d.code === "INVALID_AMOUNT");
    assert.equal(
      amounts.length,
      2,
      JSON.stringify(result.errors.concat(result.warnings)),
    );
    assert.equal(amounts[0].severity, "error");
    assert.equal(result.isValid, false);
  });

  test("integral float values satisfy integer parameters (Time = 30.0)", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakePlank",
      "    {",
      "        tags = Test,",
      "        Time = 30.0,",
      "        inputs { item 1 Base.Log, }",
      "        outputs { item 1 Base.Plank, }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    assert.ok(
      !result.errors.some((e) => e.code === "INVALID_TYPE_FOR_VALUE"),
      JSON.stringify(result.errors),
    );
    assert.equal(result.isValid, true);
  });

  test("comma-separated item lists get the actionable ;-separator message", async () => {
    const script = [
      "module TestMod",
      "{",
      "    craftRecipe MakeX",
      "    {",
      "        tags = Test,",
      "        inputs",
      "        {",
      "            item 1 [Base.A,Base.B],",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "recipe");
    const invalidValue = result.errors
      .concat(result.warnings)
      .find((d) => d.code === "INVALID_VALUE");
    assert.ok(
      invalidValue,
      JSON.stringify(result.errors.concat(result.warnings)),
    );
    assert.ok(invalidValue.suggestion.includes(";"), invalidValue.suggestion);
    assert.ok(!result.errors.some((e) => e.code === "NO_DOTS_ITEM"));
  });

  test("unknown block keyword is flagged with a suggestion", async () => {
    const script = [
      "module TestMod",
      "{",
      "    itme Foo",
      "    {",
      "        ItemType = base:weapon,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const notValid = find(result, "NOT_VALID_BLOCK");
    assert.ok(notValid);
    assert.equal(notValid.severity, "warning");
    assert.ok(notValid.suggestion.includes("item"));
  });

  test("block IDs with spaces are flagged where the dataset forbids them", async () => {
    const script = [
      "item My Cool Sword",
      "{",
      "\tItemType = base:weapon,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const idDiag = find(result, "ID_CANNOT_CONTAIN_SPACES");
    assert.ok(idDiag);
    assert.equal(idDiag.severity, "warning");
  });
});

describe("ZedScripts knowledge layer — plumbing", () => {
  let tmpDir;
  let db;
  let engine;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pz-zed-"));
    db = new DatabaseManager(path.join(tmpDir, "data", "pz_database.db"));
    await db.initialize();
    engine = new ValidationEngine(db);
  });

  after(() => {
    db.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test("filePath attaches the file to every diagnostic", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tMaxDamaage = 999,",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item", false, {
      filePath: "C:/mods/MyMod/media/scripts/items.txt",
    });
    const knowledgeDiags = zedDiags(result);
    assert.ok(knowledgeDiags.length > 0);
    for (const warning of knowledgeDiags) {
      assert.equal(warning.file, "C:/mods/MyMod/media/scripts/items.txt");
      assert.equal(warning.source, "zedscripts");
    }
    // Existing engine diagnostics keep their normal shape (no file).
    assert.ok(result.zedScripts.diagnostics > 0);
  });

  test("zedScripts: false disables the knowledge layer", async () => {
    const script = [
      "item SampleKnife",
      "{",
      "\tItemType = base:weapon,",
      "\tFlyingPower = 1,",
      "}",
    ].join("\n");
    const withLayer = await engine.validateScript(script, "item");
    assert.ok(withLayer.warnings.some((w) => w.code === "UNKNOWN_PARAMETER"));
    const withoutLayer = await engine.validateScript(script, "item", false, {
      zedScripts: false,
    });
    assert.equal(withoutLayer.zedScripts, undefined);
    assert.ok(
      !withoutLayer.warnings.some((w) => w.code === "UNKNOWN_PARAMETER"),
    );
  });
});

describe("ZedScripts knowledge layer — extended block types (deep scan + hierarchy)", () => {
  let engine;
  before(() => {
    engine = new ValidationEngine(dbStub);
  });

  const find = (result, code) =>
    result.errors.concat(result.warnings).find((d) => d.code === code);

  test("valid entity with components, SpriteConfig face and layer is clean", async () => {
    const script = [
      "module Test",
      "{",
      "    entity MyFurnace",
      "    {",
      "        DisplayName = My Furnace,",
      "        components",
      "        {",
      "            component SpriteConfig",
      "            {",
      "                health = 200,",
      "                face SINGLE",
      "                {",
      "                    layer",
      "                    {",
      "                        row = 1,",
      "                    }",
      "                }",
      "            }",
      "            component CraftBench",
      "            {",
      "            }",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    assert.deepEqual(
      result.errors.concat(result.warnings),
      [],
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("nested component inside an item validates its own params, not the item\u2019s", async () => {
    const script = [
      "module Test",
      "{",
      "    item WaterContainer",
      "    {",
      "        ItemType = base:container,",
      "        Weight = 1,",
      "        component FluidContainer",
      "        {",
      "            Capacity = 20,",
      "            ContainerName = Water,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    // The component lines must not leak as unknown parameters of the item.
    assert.ok(
      !codes(result).includes("UNKNOWN_PARAMETER"),
      JSON.stringify(result.warnings),
    );
    assert.ok(
      !result.warnings.some((w) => /Capacity/.test(w.message)),
      JSON.stringify(result.warnings),
    );
  });

  test("component variant typo is flagged as INVALID_ID with a suggestion", async () => {
    const script = [
      "module Test",
      "{",
      "    item Bad",
      "    {",
      "        ItemType = base:weapon,",
      "        component FluidConatiner",
      "        {",
      "            Capacity = 20,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "item");
    const diag = find(result, "INVALID_ID");
    assert.ok(diag, JSON.stringify(result.errors.concat(result.warnings)));
    assert.equal(diag.severity, "error");
    assert.ok(diag.suggestion.includes("FluidContainer"), diag.suggestion);
  });

  test("clip at module level is flagged WRONG_PARENT", async () => {
    const script = [
      "module Test",
      "{",
      "    clip BadClip",
      "    {",
      "        event = foo,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    const diag = find(result, "WRONG_PARENT");
    assert.ok(diag, JSON.stringify(result.errors.concat(result.warnings)));
    assert.equal(diag.severity, "warning");
    assert.ok(diag.message.includes("sound"), diag.message);
  });

  test("unnamed clip inside sound is clean (clips take no ID)", async () => {
    const script = [
      "module Test",
      "{",
      "    sound MySound",
      "    {",
      "        category = Ambient,",
      "        clip",
      "        {",
      "            event = foo,",
      "            volume = 0.8,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script, "sound");
    assert.deepEqual(
      result.errors.concat(result.warnings),
      [],
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("unnamed sound inside a vehicle template is clean (parentsWithout)", async () => {
    const script = [
      "module Test",
      "{",
      "    template MyCar",
      "    {",
      "        sound",
      "        {",
      "            engine = true,",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    assert.ok(
      !result.errors.concat(result.warnings).some((d) => d.code === "HAS_ID"),
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("character_trait_definition missing required parameters", async () => {
    const script = [
      "module Test",
      "{",
      "    character_trait_definition MyTrait",
      "    {",
      "        UIName = My Trait,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    const missing = result.errors.filter((e) => e.code === "MISSING_PARAMETER");
    // UIDescription is server-verified as optional (vanilla traits omit it).
    assert.ok(missing.length >= 4, JSON.stringify(result.errors));
    assert.ok(missing.some((e) => /CharacterTrait/.test(e.message)));
    assert.ok(!missing.some((e) => /UIDescription/.test(e.message)));
  });

  test("valid fluid, model and timedAction blocks are clean", async () => {
    const script = [
      "module Test",
      "{",
      "    fluid Water",
      "    {",
      "        ColorReference = water,",
      "        DisplayName = Water,",
      "    }",
      "    model MyModel",
      "    {",
      "        file = model.fbx,",
      "        texture = model_tex,",
      "    }",
      "    timedAction RepairAction",
      "    {",
      "        actionAnim = Repair,",
      "        metabolics = 1.0,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    assert.deepEqual(
      result.errors.concat(result.warnings),
      [],
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("entity component CraftRecipe needs inputs but not tags (verified)", async () => {
    const script = [
      "module Test",
      "{",
      "    entity Workbench",
      "    {",
      "        components",
      "        {",
      "            component CraftRecipe",
      "            {",
      "                time = 30,",
      "            }",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    // tags is server-verified as optional for entity craft recipes (vanilla
    // omits it) — but the required inputs section is still reported.
    assert.ok(
      !result.errors.some((e) => e.code === "MISSING_PARAMETER"),
      JSON.stringify(result.errors),
    );
    const child = find(result, "MISSING_CHILD_BLOCK");
    assert.ok(child, JSON.stringify(result.errors.concat(result.warnings)));
    assert.ok(/inputs/.test(child.message), child.message);
  });

  test("mannequin with a single-part model reference is clean", async () => {
    const script = [
      "module Test",
      "{",
      "    mannequin Dummy",
      "    {",
      "        model = DummyModel,",
      "        pose = Stand,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    assert.deepEqual(
      result.errors.concat(result.warnings),
      [],
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("vanilla-verified keywords and parameters are accepted, not flagged", async () => {
    // xuiConfig, vehicle seatNumber, part hasLightsRear and the SpriteConfig
    // extras are all used by the real 42.20 game tree even though the
    // pz-scripts-data dataset does not model them — verified game data wins,
    // so none of them may produce a diagnostic.
    const script = [
      "module Test",
      "{",
      "    xuiConfig project_zomboid",
      "    {",
      "        String",
      "        {",
      "            styleBar,",
      "        }",
      "    }",
      "    vehicle V",
      "    {",
      "        seatNumber = 4,",
      "        part Engine",
      "        {",
      "            hasLightsRear = true,",
      "        }",
      "    }",
      "    entity Desk",
      "    {",
      "        components",
      "        {",
      "            component SpriteConfig",
      "            {",
      "                dontNeedFrame = true,",
      "                canBePadlocked = true,",
      "                BreakSound = BreakSoundCrate,",
      "                face SINGLE",
      "                {",
      "                    layer",
      "                    {",
      "                        row = 1,",
      "                    }",
      "                }",
      "            }",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    assert.deepEqual(
      result.errors.concat(result.warnings),
      [],
      JSON.stringify(result.errors.concat(result.warnings)),
    );
  });

  test("fluid recipe amounts may be decimal (vanilla ships -fluid 0.2)", async () => {
    const script = [
      "module Test",
      "{",
      "    craftRecipe MakeCoffee",
      "    {",
      "        tags = Test,",
      "        inputs",
      "        {",
      "            -fluid 0.2 categories[Water] mode:mixture,",
      "            +fluid 0.1 categories[Coffee] mode:mixture,",
      "        }",
      "        outputs",
      "        {",
      "            item 1 [Base.Coffee2],",
      "        }",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    // Fluid amounts are liters and may be fractional — only item amounts
    // must be whole numbers.
    assert.ok(
      !codes(result).includes("INTEGER_AMOUNT"),
      JSON.stringify(result.warnings),
    );
    assert.ok(
      !result.errors.some((e) => e.code === "INVALID_AMOUNT"),
      JSON.stringify(result.errors),
    );
  });

  test("dataset dependent-parameter hints are not enforced (vanilla contradicts)", async () => {
    // 42.20 vanilla ships ConsolidateOption without cantBeConsolided and
    // Packaged with nutrition on base:drainable items — the game loads these
    // fine, so the dataset's `needs` rules must never fire here.
    const script = [
      "module Test",
      "{",
      "    item Vinegar",
      "    {",
      "        DisplayCategory = Food,",
      "        ItemType = base:drainable,",
      "        Packaged = true,",
      "        ConsolidateOption = ContextMenu_Merge,",
      "        HungerChange = -10.0,",
      "    }",
      "}",
    ].join("\n");
    const result = await engine.validateScript(script);
    const diags = result.errors.concat(result.warnings);
    assert.ok(
      !diags.some((d) => d.code === "MISSING_DEPENDENT_PARAMETER"),
      JSON.stringify(diags),
    );
    assert.ok(
      !diags.some((d) => d.code === "DEPENDENT_PARAMETER_WRONG_VALUE"),
      JSON.stringify(diags),
    );
  });

  test("provenance distinguishes original ZedScripts from dev extensions", async () => {
    // WRONG_PARENT is a dev extension → provenance=dev_functionality.
    const script1 = [
      "module Test",
      "{",
      "    clip BadClip",
      "    {",
      "        event = foo,",
      "    }",
      "}",
    ].join("\n");
    const r1 = await engine.validateScript(script1);
    const wrong = zedDiags(r1).find((d) => d.code === "WRONG_PARENT");
    assert.ok(wrong, "WRONG_PARENT diagnostic exists");
    assert.equal(wrong.provenance, "dev_functionality");

    // UNKNOWN_PARAMETER is a faithful port of ZedScripts → ORIGINAL_ZEDSCRIPT.
    const script2 = [
      "module Test",
      "{",
      "    item Sample",
      "    {",
      "        ItemType = base:weapon,",
      "        UnknownParam = 1,",
      "    }",
      "}",
    ].join("\n");
    const r2 = await engine.validateScript(script2);
    const unknown = zedDiags(r2).find((d) => d.code === "UNKNOWN_PARAMETER");
    assert.ok(unknown, "UNKNOWN_PARAMETER diagnostic exists");
    assert.equal(unknown.provenance, "ORIGINAL_ZEDSCRIPT");
  });
});
