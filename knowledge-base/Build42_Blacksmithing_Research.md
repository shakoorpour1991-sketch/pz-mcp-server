---
title: "Project Zomboid Build 42 Blacksmithing Research"
build: "42.20"
tags: [pz, modding, build42, blacksmithing]
---

# Project Zomboid Build 42 — Blacksmithing Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the blacksmithing/metalworking tree: smelting, forging, bar production, welding, and scrap-metal armor. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Metal Sources & Smelting](#3-metal-sources--smelting)
4. [Forge & Anvil Mechanics](#4-forge--anvil-mechanics)
5. [Bar & Sheet Production](#5-bar--sheet-production)
6. [Forging Blades & Tools](#6-forging-blades--tools)
7. [Welding & Scrap-Metal Armor](#7-welding--scrap-metal-armor)
8. [Skill Gating & XP](#8-skill-gating--xp)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- Blacksmithing in B42 spans **three skill families**: `Blacksmith` (forge/smelting), `MetalWelding` (torch/sheet work, armor), and `Masonry` (stone constructions) — plus `Tailoring` for welded armor linings.
- Metal flows through a pipeline: **ore → bloom/chunks → bars/sheets → forged items**, with furnace tiers (`PrimitiveFurnace` → `PrimitiveForge` → `Furnace`) gating each stage.
- Everything is data: recipes in `entities/blacksmith/craftRecipes/` (14 files), workstations in `entities/blacksmith/workstations/` (13 entities), and the torch/welding recipes in `recipes/recipes_metalWelding*.txt`.
- The `base:blacksmith` trait grants ~90 `Forge_*` recipes at character creation (see Traits & Professions doc) — blacksmithing knowledge is largely recipe-gated.

---

## 2. Core Files

| File | Role |
|------|------|
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_furnaces_i.txt` | Primitive furnace/forge smelting (ExtractIronBloom, SmeltCopperOre, ExtractIronFromIronBloom/Ore) |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_furnace_ii.txt` | Furnace-tier recipes: `MeltSand`, `MeltGlass`, `CastBlacksmithAnvil` |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_bar.txt` | Chunk → bar/block production via `metalType` mappers |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_blades.txt` | Forged blades (Forge_Crude_Blade, Forge_Small_Knife, …) |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_tools.txt` | Forged tools (largest file: 37 craftRecipe lines) |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_other_metals.txt` | Copper/other metal processing (33 lines) |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_armor.txt`, `recipes_metalWelding_Armor.txt` | Forged/welded armor |
| `scripts/generated/entities/blacksmith/workstations/` | 13 workstation entities (forges, furnaces, charcoal, grindstone, keyduplicator, metalbandsaw) |
| `scripts/generated/recipes/recipes_metalWelding.txt` | 10 torch/sheet recipes |
| `scripts/generated/recipes/recipes_metalWelding_Armor.txt` | 9 welded scrap-armor recipes |
| `scripts/generated/items/normal.txt` | Metals, molds, coke/charcoal, StoneAnvil, Clay |
| `scripts/generated/items/drainable.txt` | `CeramicCrucible_Iron/Steel`, `CeramicCrucibleWithGlass` |

---

## 3. Metal Sources & Smelting

### Raw materials (verified, `items/normal.txt`)

| Item | Line | Stage |
|------|:----:|-------|
| `IronOre` | 919 | Raw ore |
| `CopperOre` | 931 | Raw ore |
| `IronBloom` | 907 | Smelted ore |
| `IronChunk` | 1223 | Smelted metal |
| `SteelChunk` | 1131 | Smelted metal |
| `CopperScrap` | 1718 | Smelted copper |
| `ScrapMetal` | 8451 | Salvaged metal |
| `Coke` | 1470 | High-grade fuel |
| `Charcoal` | 5597 / `CharcoalCrafted` 955 | Fuel |
| `StoneAnvil` | 2342 | Anvil (forge input) |

### Furnace recipes (`recipes_blacksmith_furnaces_i.txt`)

| Recipe | Tags | Fuel | Output |
|--------|------|:----:|--------|
| `ExtractIronBloom` | `PrimitiveFurnace` | 8 charcoal | 1 IronBloom (from IronOre) |
| `SmeltCopperOre` | `PrimitiveFurnace` | 4 charcoal | 10 CopperScrap |
| `ExtractIronFromIronBloom` | `PrimitiveForge` | 18 charcoal | 12 IronChunk (tongs + hammer) |
| `ExtractIronFromIronOre` | `Furnace` | 18 charcoal | CeramicCrucible_Iron (`OnCreate = smeltIronOrSteelIngot`, SmeltMapper) |

```txt
craftRecipe ExtractIronFromIronBloom
{
    time = 200,
    Tags = PrimitiveForge,
    category = Blacksmithing,
    inputs
    {
        item 1 tags[base:crudetongs;base:tongs] mode:keep flags[MayDegradeLight],
        item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeLight],
        item 18 tags[base:charcoal],
        item 1 [Base.IronBloom] mode:destroy flags[ItemCount;AllowDestroyedItem],
    }
    outputs { item 12 Base.IronChunk, }
}
```

`MeltSand`/`MeltGlass` (Furnace tier, `recipes_blacksmith_furnace_ii.txt`) produce `CeramicCrucibleWithGlass` — the glassmaking feedstock (see Glassmaking doc).

---

## 4. Forge & Anvil Mechanics

Workstation entities (`entities/blacksmith/workstations/`, 13 files):

| Entity file | Role |
|-------------|------|
| `entity_forge_i/ii/iii.txt` | Forge tiers |
| `entity_furnace_i/ii/iii.txt` | Furnace tiers |
| `entity_charcoal_burner.txt`, `entity_charcoal_pit.txt` | Charcoal production |
| `entity_dome_kiln.txt` (+`_craftRecipe`) | `MakeCoke` (8 charcoal → 4 Coke, `timedAction = Making_With_Kiln`, `Tags = DomeKiln`) |
| `entity_grindstone.txt` | Sharpening |
| `entity_keyduplicator.txt` | Key duplication |
| `entity_metalbandsaw.txt` | Metal cutting |

Forge entity anatomy (`entity_forge_i.txt` — `Forge_Primitive_Forge`):

```txt
entity Forge_Primitive_Forge
{
    component UiConfig { xuiSkin = default, entityStyle = ES_Forge_I, uiEnabled = true, }
    component CraftBench { Recipes = PrimitiveForge, }
    component SpriteConfig
    {
        health = 150,
        skillBaseHealth = 50,
        face S { layer { row = crafted_01_61 crafted_01_20, } }
        face E { layer { row = crafted_01_21, row = crafted_01_62, } }
    }
    component CraftRecipe
    {
        timedAction = Make_With_Brick_Low,
        time = 50,
        category = Blacksmithing,
        Tooltip = Tooltip_craft_forgeIDesc,
        inputs
        {
            item 1 tags[base:concrete] flags[DontRecordInput],
            item 10 [Base.Stone2],
            item 1 [Base.StoneAnvil],
            ...
        }
    }
}
```

Key mechanics:

- `component CraftBench { Recipes = <TierTag> }` — the forge's tier tag (`PrimitiveForge`); recipes with that `Tags` value become craftable here.
- Forges are built from `base:concrete` + 10 `Stone2` + a `StoneAnvil` (anvils are **items**, e.g. `StoneAnvil`, plus the clay anvil molds `ClayBenchAnvilMold`, `ClayBlacksmithAnvilMold`, `ClayBlockAnvilMold` from `items/normal.txt:1400–1519`).
- `SpriteConfig.health = 150`, `skillBaseHealth = 50` — workstation durability scales with skill.

---

## 5. Bar & Sheet Production

`recipes_blacksmith_bar.txt` — chunk/bar conversion via `metalType` mappers (verified `itemMapper metalType` entries):

| Recipe input (Iron/Steel) | Output |
|---------------------------|--------|
| 4 chunks | `IronBlock` / `SteelBlock` |
| 1 chunk | `IronBarQuarter` / `SteelBarQuarter` |
| 2 chunks or 2 quarters | `IronBarHalf` / `SteelBarHalf` |
| 4 chunks | `IronBar` / `SteelBar` |
| mixed chunks/quarters/halves | `IronBar` / `SteelBar` (per-type mapping) |

```txt
inputs
{
    item 4 [Base.IronChunk;Base.SteelChunk] mappers[metalType] flags[IsExclusive],
}
itemMapper metalType
{
    Base.IronBlock = Base.IronChunk,
    Base.SteelBlock = Base.SteelChunk,
}
```

Bar items live in `items/normal.txt` (`IronBarQuarter` 1270, `SteelBarQuarter` 1178) and `items/weapon.txt` (`IronBar` 8186, `SteelBar` 9439, halves 3081/4957 — bars double as weapons). Sheet metal: `MakeMetalSheet`/`MakeSmallMetalSheet` (see §7).

---

## 6. Forging Blades & Tools

Blade recipes (`recipes_blacksmith_blades.txt`):

```txt
craftRecipe Forge_Small_Knife
{
    time = 300,
    SkillRequired = Blacksmith:1,
    NeedToBeLearn = true,
    timedAction = HammerMetalStanding,
    xpAward = Blacksmith:35,
    AutoLearnAll = Blacksmith:2;SmallBlade:1,
    Tags = PrimitiveForge,
    category = Blade,
    inputs
    {
        item 2 tags[base:charcoal],
        item 1 [Base.IronBarQuarter;Base.SteelBarQuarter;Base.Katana_Shard;Base.Sword_Shard;Base.CrudeSword_Shard;Base.KitchenKnifeBlade],
        item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeLight],
        item 1 tags[base:metalworkingpliers;base:tongs;base:crudetongs] mode:keep flags[Prop2;MayDegradeLight],
    }
    outputs { ... }
}
```

- `Forge_Crude_Blade` (no skill req, `Blacksmith:25` XP) accepts bar quarters **or weapon shards** (`Katana_Shard`, `Sword_Shard`, `KitchenKnifeBlade`) → `CrudeBlade flags[IsBlunt]` — shard recycling is a core mechanic.
- `Forge_Small_Knife` gates at `Blacksmith:1` with `AutoLearnAll = Blacksmith:2;SmallBlade:1` (dual-skill auto-learn).
- Tool recipes (`recipes_blacksmith_tools.txt`, 37 craftRecipe lines) cover hammers, tongs, chisels, files, saws, etc. — the `base:blacksmith` trait's `Forge_*` list maps to these.
- `category = Blade`/`Blacksmithing` slots forged items into the craft UI.

---

## 7. Welding & Scrap-Metal Armor

### MetalWelding basics (`recipes/recipes_metalWelding.txt`, 10 recipes)

| Recipe | Skill | Key inputs | Output |
|--------|-------|-----------|--------|
| `MakeBarbedWire` | `AutoLearnAny = MetalWelding:4`, `ResearchSkillLevel = 1`, `ResearchAny = Blacksmith;Maintenance;MetalWelding` | pliers + Wire | BarbedWire |
| `MakeWireFromBarbedWire` | — | pliers + BarbedWire | Wire |
| `MakeMetalSheet` | `MetalWelding:4` (+AutoLearn 6, XP 25) | 4 SmallSheetMetal + 2 BlowTorch + weldingmask | SheetMetal |
| `MakeSmallMetalSheet` | `MetalWelding:4` | SheetMetal + 2 BlowTorch | 4 SmallSheetMetal |
| `CutSmallMetalSheet` | — | SheetMetal + sheetmetalsnips | 4 SmallSheetMetal |
| `RefillBlowTorch` | — | BlowTorch + PropaneTank (`OnCreate = refillBlowTorch`) | BlowTorch |
| `CutCircularSawblade` / `CutIronBand` | `MetalWelding:4` | 2 BlowTorch + weldingmask | halves/quarters |

`Tags = InHandCraft;Welding` marks torch recipes; welding **always requires the `base:weldingmask`** (fire hazard protection).

### Scrap-metal armor (`recipes_metalWelding_Armor.txt`, 9 recipes)

All use `timedAction = Welding_Surface`, `time = 600`, `xpAward = MetalWelding:10;Tailoring:5`:

| Recipe | SkillRequired | Output |
|--------|---------------|--------|
| `MakeScrapMetalMask` | `MetalWelding:4;Tailoring:1` | `Hat_HockeyMask_MetalScrap` |
| `MakeScrapMetalForearmArmor` | `MetalWelding:5;Tailoring:1` | `VambraceScrap_Left` |
| `MakeScrapMetalShinArmor` | `MetalWelding:5;Tailoring:1` | `GreaveScrap_Left` |
| `MakeScrapMetalGloves` | `MetalWelding:4;Tailoring:1` | `Gloves_MetalScrapArmour` |
| `MakeScrapMetalHelmet` | `MetalWelding:5;Tailoring:1` (AutoLearn 7) | `Hat_MetalScrapHelmet` |
| `MakeScrapMetalShoulderArmor` | `MetalWelding:5;Tailoring:1` | `Shoulderpad_MetalScrap_L` |
| `MakeScrapMetalThighArmor` | `MetalWelding:5;Tailoring:1` | `ThighScrapMetal_L` |
| `MakeScrapMetalBodyArmor` | `MetalWelding:6;Tailoring:1` (AutoLearn 8) | `Cuirass_MetalScrap` |
| `SpikeArmorWelding` | `MetalWelding:5` (AutoLearn 8) | spiked variants via 20-entry `armorMapper` |

Typical inputs: BlowTorch (×1–4), `base:weldingmask`, `SmallSheetMetal`/`SheetMetal`, `LeatherStrips` (destroyed), `NutsBolts`, `Buckle`, `tags[base:thread]`, plus wrench/snips/punch/hammer/scissors/sewingneedle/awl — **welded armor is a MetalWelding × Tailoring hybrid** (dual `SkillRequired`).

---

## 8. Skill Gating & XP

- Skills used: `Blacksmith`, `MetalWelding`, `Masonry` (blacksmith recipes), `Tailoring` (armor), `SmallBlade` (knife auto-learn).
- `xpAward` ranges (verified): `Blacksmith:5–100`, `MetalWelding:10–80`, `Masonry:10–80`, `MetalWelding:10;Tailoring:5` (armor).
- Gating fields: `SkillRequired = <Skill>:<Level>` (hard requirement), `AutoLearnAny = <Skill>:<Level>;…` (learn via either), `AutoLearnAll = <Skill>:<Level>;…` (learn via all listed), `ResearchSkillLevel = <n>` + `ResearchAny` (research/magazine path).
- Furnace tier tags (`PrimitiveFurnace` → `PrimitiveForge` → `Furnace`) implicitly gate recipes by workstation.
- The `base:blacksmith` trait (6 points) grants the entire `Forge_*` recipe set at creation (`MutuallyExclusiveTraits = base:blacksmith2`).

---

## 9. Modding Opportunities

1. **New smelting chain.** Add furnace-tier recipes (copy `ExtractIronFromIronOre` with `OnCreate = smeltIronOrSteelIngot` + `itemMapper`) to extend the ore→metal pipeline for new ores.
2. **Custom forge tier.** Clone `entity_forge_i` with a new `CraftBench Recipes = <YourTier>` tag and gate recipes on it — instant tiered workstation.
3. **New bars/materials.** Follow `recipes_blacksmith_bar.txt` `metalType` mappers to add quarter/half/full bar items for new metals.
4. **Shard recycling.** The blade recipes' shard inputs (`Katana_Shard`, `Sword_Shard`, …) pattern lets any weapon shard feed forging.
5. **Welded armor sets.** Copy `recipes_metalWelding_Armor.txt` (dual `MetalWelding;Tailoring` requirements, BlowTorch + weldingmask + LeatherStrips + thread inputs) for new armor pieces.
6. **Fuel economy.** Extend the dome-kiln `MakeCoke` pattern and charcoal recipes to balance smelting costs.

---
