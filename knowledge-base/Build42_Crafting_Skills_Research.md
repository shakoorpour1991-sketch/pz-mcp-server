---
title: "Project Zomboid Build 42 Crafting & Skills Research"
build: "42.20"
tags: [pz, modding, build42, crafting, skills]
---

# Project Zomboid Build 42 — Crafting & Skills System Research

> **Scope:** Build 42.20 (stable). Master document for the recipe engine (`craftRecipe`), the 43 recipe files, timed actions, evolved recipes, entity/workstation recipes, and the skill/XP system that drives them. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Recipe Files Catalog](#3-recipe-files-catalog)
4. [craftRecipe Block Anatomy](#4-craftrecipe-block-anatomy)
5. [Inputs & Outputs](#5-inputs--outputs)
6. [Recipe Tags & Conditions](#6-recipe-tags--conditions)
7. [Recipe Categories](#7-recipe-categories)
8. [Skills & XP](#8-skills--xp)
9. [Timed Actions](#9-timed-actions)
10. [Evolved Recipes](#10-evolved-recipes)
11. [Entity Recipes & Workstations](#11-entity-recipes--workstations)
12. [Modding Opportunities](#12-modding-opportunities)

---

## 1. Overview

- Recipes are **data blocks** (`craftRecipe`) inside `module Base` in `media/scripts/generated/recipes/` (43 files) plus per-entity recipe files under `media/scripts/generated/entities/*/`.
- A recipe declares a **timed action** (animation/behavior), a **time** in ticks, **tags** (surfaces/tools), a UI **category**, **inputs** (items by id, tag, or fluid with counts and flags), **outputs**, optional **XP awards** (`xpAward`), optional **skill requirements** (`ResearchSkillLevel`), and optional **item mappers** and `OnCreate` callbacks.
- Input items are matched by **full id** (`Base.Log`), **tag** (`tags[base:saw]`), or **fluid** (`-fluid 0.25 categories[Water]`), each with a `mode` (`keep`, `destroy`) and `flags` (`Prop1`, `MayDegradeLight`, `IsSealed`, …).
- **Timed actions** are defined separately in `media/scripts/generated/timedactions.txt` (119 definitions) and carry metabolics, animation, sound, props, and muscle-strain data.
- **Evolved recipes** (stew/soup-style container cooking) are declared in `media/scripts/generated/evolvedrecipes.txt`.
- **Skills** are XP-gated; skill books exist as 5-level ladders (`LvlSkillTrained = 1, 3, 5, 7, 9`) per skill in `items/literature.txt`.

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/recipes/recipes.txt` | Base/general recipes |
| `media/scripts/generated/recipes/recipes_*.txt` | 42 category files (see catalog below) |
| `media/scripts/generated/recipes/recipes_fishing_evolvedrecipe.txt` | Fishing evolved recipes |
| `media/scripts/generated/timedactions.txt` | 119 `timedAction` definitions (animations, sounds, metabolics, muscle strain) |
| `media/scripts/generated/evolvedrecipes.txt` | `evolvedrecipe` blocks (pot/bucket cooking templates) |
| `media/scripts/generated/entities/*/craftRecipes/*.txt` | Entity-bound recipes (blacksmith, agricultural, animals) |
| `media/scripts/generated/entities/*/workstations/*_craftRecipe.txt` | Workstation recipes (looms, mills, coffee machine, toaster, drying racks) |
| `media/scripts/generated/items/literature.txt` | Skill books (`SkillTrained` + `LvlSkillTrained`) and magazines |
| `media/lua/shared/TimedActions/*.lua` | Lua implementations of recipe timed actions |

---

## 3. Recipe Files Catalog

All 43 files in `media/scripts/generated/recipes/` with verified `craftRecipe` counts (623 total across the category files; `recipes.txt` and entity recipe files add more):

| File | Recipes | | File | Recipes |
|------|:-------:|-|------|:-------:|
| recipes.txt | (base) | | recipes_jarring.txt | 2 |
| recipes_ammunition.txt | 5 | | recipes_knapping.txt | 15 |
| recipes_assembly.txt | 7 | | recipes_lightsources.txt | 7 |
| recipes_baking.txt | 20 | | recipes_medical.txt | 9 |
| recipes_bone.txt | 35 | | recipes_metalWelding.txt | 10 |
| recipes_buckets.txt | 5 | | recipes_metalWelding_Armor.txt | 9 |
| recipes_camping.txt | 1 | | recipes_packing.txt | 29 |
| recipes_cannedFood.txt | 9 | | recipes_pottery.txt | 5 |
| recipes_cardsAndDice.txt | 2 | | recipes_radio.txt | 4 |
| recipes_carpentry.txt | 28 | | recipes_sacks.txt | 2 |
| recipes_carving.txt | 32 | | recipes_sleepingbags_and_tents.txt | 4 |
| recipes_cooking.txt | 52 | | recipes_spears.txt | 6 |
| recipes_disassembly.txt | 5 | | recipes_survivalist.txt | 2 |
| recipes_electrical.txt | 9 | | recipes_tailoring.txt | 40 |
| recipes_farming.txt | 13 | | recipes_tailoring_armor.txt | 30 |
| recipes_fishing.txt | 6 | | recipes_tailoring_garbageTapeAndTarp.txt | 33 |
| recipes_fishing_evolvedrecipe.txt | 0 (evolved) | | recipes_tailoring_knitting.txt | 9 |
| recipes_fixing.txt | 12 | | recipes_tailoring_leatherAndHide.txt | 60 |
| recipes_fluids.txt | 3 | | recipes_tobacco.txt | 3 |
| recipes_gasmasks.txt | 11 | | recipes_trapping.txt | 5 |
| recipes_glassmaking.txt | 8 | | recipes_traps.txt | 17 |
| recipes_improvised_weapons.txt | 30 | | | |

Largest families: Tailoring (~172 across 5 files), Cooking (~52 + baking 20), Bone (35), Improvised weapons (30), Packing (29), Carpentry (28).

---

## 4. craftRecipe Block Anatomy

### Field reference (verified across `recipes/carpentry`, blacksmith, tailoring, electrical)

| Field | Meaning | Example |
|-------|---------|---------|
| `timedAction` | Which timed action drives the animation/behavior | `SawLogs`, `OpenBeerBottle` |
| `time` | Duration in ticks | `230`, `200`, `15` |
| `Tags` | Surface/workbench/tool requirement tags (`;`-separated) | `InHandCraft;CanBeDoneFromFloor` |
| `category` | UI tab/category | `Carpentry`, `Blacksmithing`, `Cooking` |
| `xpAward` | XP granted: `Skill:Amount` | `Woodwork:5`, `Blacksmith:20` |
| `ResearchSkillLevel` | Minimum skill level to learn the recipe | `4` (electrical), `1` (metalWelding) |
| `AllowBatchCraft` | Disable batching | `false` |
| `OnCreate` | Lua callback after creation | `RecipeCodeOnCreate.smeltIronOrSteelIngot` |
| `inputs { }` / `outputs { }` | Item/fluid requirements and results | see §5 |
| `itemMapper <Name> { }` | Output item mapping (with `default`) | `SmeltMapper`, `StickMapper` |

### Simple example — `SawLogs` (`recipes/recipes_carpentry.txt`)

```txt
craftRecipe SawLogs
{
    timedAction = SawLogs,
    time = 230,
    Tags = InHandCraft;CanBeDoneFromFloor,
    category = Carpentry,
    xpAward = Woodwork:5,
    inputs
    {
        item 1 [Base.Log] flags[Prop2],
        item 1 tags[base:saw] mode:keep flags[MayDegradeLight;Prop1],
    }
    outputs
    {
        item 3 Base.Plank,
    }
}
```

### Tool/forge example — `ExtractIronFromIronOre` (`entities/blacksmith/craftRecipes/recipes_blacksmith_furnaces_i.txt`)

```txt
craftRecipe ExtractIronFromIronOre
{
    time = 200,
    Tags = Furnace,
    category = Blacksmithing,
    OnCreate = RecipeCodeOnCreate.smeltIronOrSteelIngot,
    inputs
    {
        item 1 [Base.CeramicCrucible;Base.CeramicCrucible_Steel] mode:destroy flags[NotFull;ItemCount] mappers[SmeltMapper],
        item 1 tags[base:crudetongs;base:tongs] mode:keep flags[MayDegradeLight],
        item 18 tags[base:charcoal],
        item 1 [Base.IronOre;Base.IronBloom] mode:destroy flags[ItemCount;AllowDestroyedItem],
    }
    outputs
    {
        item 1 mapper:SmeltMapper,
    }
    itemMapper SmeltMapper
    {
        default = Base.CeramicCrucible_Iron,
    }
}
```

Note the furnace tier tags: `Tags = PrimitiveFurnace` / `PrimitiveForge` / `Furnace` gate recipes to workstation tiers (verified in `recipes_blacksmith_furnaces_i.txt`).

---

## 5. Inputs & Outputs

### Item input syntax

```
item <count> <source> mode:<mode> flags[<Flag>;...] mappers[<Mapper>;...]
```

- **Source** is either a bracketed id list (`[Base.Log;Base.Sapling]`) or a tag matcher (`tags[base:saw]`, `tags[base:crudetongs;base:tongs]`).
- **`mode:keep`** — tool stays in inventory (may still degrade).
- **`mode:destroy`** — consumed; used with `ItemCount` flag so the game knows to count it.
- **Flags (verified):** `Prop1`, `Prop2` (which hand holds the item for the anim), `MayDegradeLight`, `IsNotDull`, `DontPutBack`, `IsSealed`, `Unseal`, `ItemCount`, `AllowDestroyedItem`, `NotFull`, `InheritCondition`, `HandcraftOnly`, `ItemIsFluid`.
- **Mappers** map input → output item; `itemMapper <Name> { Base.A = Base.B, default = Base.C }`. `outputs { item N mapper:Name }` emits the mapped item (verified `StickMapper`, `SmeltMapper`).

### Fluid inputs

```
-fluid <liters> <source> mode:mixture,
```

(verified in `entities/animals/craftRecipes/recipes_butter_churn.txt`, `entities/pottery/cratRecipes/craftrecipe_potterywheel.txt`) — see the Fluid System research doc.

### Output syntax

```
outputs { item <count> <Base.Id>, }
```

Multiple outputs allowed (e.g. `ChopLog` → `item 6 Base.Firewood` + `item 1 Base.Splinters`). Mapper outputs use `item 1 mapper:Name`.

---

## 6. Recipe Tags & Conditions

`Tags` on the recipe gate where/when crafting is possible. Verified values:

| Tag | Meaning |
|-----|---------|
| `InHandCraft` | Craftable from inventory (no surface) |
| `AnySurfaceCraft` | Any surface works |
| `CanBeDoneFromFloor` | Allowed on the ground |
| `CanBeDoneInDark` | No light required |
| `Furnace` / `PrimitiveFurnace` / `PrimitiveForge` | Workstation tier requirement (blacksmithing) |
| `InHandCraft;Cooking` | e.g. bottle/can opening (recipes_fluids.txt) |

Entity workstations define their own surfaces; recipes target them via the entity's workstation tags (see §11).

---

## 7. Recipe Categories

`category = <Name>` drives the crafting UI tabs. Verified counts across `recipes/*.txt` (top 17):

| Category | Recipes | | Category | Recipes |
|----------|:-------:|-|----------|:-------:|
| Tailoring | 183 | | Knapping | 11 |
| Cooking | 86 | | Medical | 8 |
| Miscellaneous | 50 | | Glassmaking | 8 |
| Carving | 47 | | Fishing | 6 |
| Weaponry | 42 | | Pottery | 5 |
| Packing | 32 | | Masonry | 3 |
| Electrical | 29 | | | |
| Carpentry | 28 | | | |
| Metalworking | 19 | | | |
| Assembly | 16 | | | |
| Repair | 14 | | | |
| Farming | 13 | | | |

Blacksmithing recipes use `category = Blacksmithing` (verified in the blacksmith craftRecipes).

---

## 8. Skills & XP

### XP awards

Recipes award XP via `xpAward = <Skill>:<Amount>`. Verified skills and amounts:

| Skill | Awarded amounts (examples) |
|-------|---------------------------|
| `Woodwork` | 5, 10, 20, 40, 50, 60 |
| `Cooking` | 3, 10 |
| `Tailoring` | 6, 8, 9, 11, 13, 16, 20, 30, 38, 45, 55, 68 |
| `Carving` | 5, 10, 20, 30 |
| `Maintenance` | 1, 5, 10 |
| `MetalWelding` | 10, 20, 25, 30, 40, 50, 60, 70, 80 |
| `Electricity` | 10 |
| `Blacksmith` | 5, 10, 15, 20, 25, 35, 40, 45, 50, 60, 70, 75, 90, 100 |
| `Masonry` | 10, 20, 30, 60, 70, 80 |

### Recipe learning requirements

`ResearchSkillLevel = <n>` requires the player's skill level to learn/discover the recipe (verified: `recipes_electrical.txt:164` = 4; `recipes_metalWelding.txt:11` = 1).

### Skill books — 5-level ladder

Skill books in `items/literature.txt` carry `DisplayCategory = SkillBook`, `SkillTrained = <Skill>`, and `LvlSkillTrained = 1/3/5/7/9` (verified for Carpentry; example):

```txt
DisplayCategory = SkillBook,
LvlSkillTrained = 1,   -- (also 3, 5, 7, 9 in sibling books)
SkillTrained = Carpentry,
```

All 24 skills with skill books (verified `SkillTrained` values): Aiming, Blacksmith, Butchering, Carpentry, Carving, Cooking, Electricity, Farming, FirstAid, Fishing, FlintKnapping, Foraging, Glassmaking, Husbandry, LongBlade, Maintenance, Masonry, Mechanics, MetalWelding, Pottery, Reloading, Tailoring, Tracking, Trapping.

---

## 9. Timed Actions

`media/scripts/generated/timedactions.txt` — 119 `timedAction` blocks. Field reference (verified):

| Field | Meaning |
|-------|---------|
| `metabolics` | Metabolic activity class (e.g. `SedentaryActivity`, `HeavyDomestic`) |
| `actionAnim` | Animation name (e.g. `ApplyAlcohol`, `BlowGlass`, `HammerSmashSurface`) |
| `sound` / `completionSound` | Audio events; `soundTime = animation_event` syncs to the anim |
| `prop1` / `prop2` | Item the player holds in each hand during the anim (`Base.WhiskeyBottle`, `Base.CraftingWire`) |
| `muscleStrainFactor` | Strain per action (e.g. `0.0133`) |
| `muscleStrainSkill` | Skill mitigating strain (e.g. `Strength`) |
| `muscleStrainParts` | Body parts strained (`Hand_R;ForeArm_R;UpperArm_R`) |

```txt
timedAction CutWire
{
    metabolics = HeavyDomestic,
    actionAnim = CutWire,
    prop1 = Base.CraftingPliers,
    prop2 = Base.CraftingWire,
    muscleStrainFactor = 0.0133,
    muscleStrainSkill = Strength,
    muscleStrainParts = Hand_R;ForeArm_R;UpperArm_R,
}
```

Recipes bind to these by name (`timedAction = CutWire`). The actual behavior runs in `media/lua/shared/TimedActions/*.lua`.

---

## 10. Evolved Recipes

`media/scripts/generated/evolvedrecipes.txt` — container-based cooking templates. Block fields (verified):

| Field | Meaning |
|-------|---------|
| `BaseItem` | Container the recipe applies to (`Base.Pot`, `Base.Bucket`, `Base.PotForged`) |
| `MaxItems` | Max ingredients (4 or 6) |
| `ResultItem` | Result container item (`Base.PotOfSoupRecipe`, `Base.BucketOfSoup`) |
| `Cookable` | Can be cooked |
| `Name` | UI action name (`Prepare Soup`) |
| `Template` | Template to inherit (`Soup`, `Stew`) |
| `MinimumWater` | Minimum water in liters required (`0.9`) |

```txt
evolvedrecipe Soup
{
    BaseItem = Base.Pot,
    MaxItems = 6,
    ResultItem = Base.PotOfSoupRecipe,
    Cookable = true,
    Name = Prepare Soup,
    Template = Soup,
    MinimumWater = 0.9,
}
```

Variants cover each container type (`SoupBucket`, `SoupBucket2`, `SoupForged`, `Soup2`, `Stew`, …). The `recipes_fishing_evolvedrecipe.txt` file holds the fishing-specific evolved recipes.

---

## 11. Entity Recipes & Workstations

Recipe files live inside entity folders — these are the Build 42 workstation recipes:

| Path (under `media/scripts/generated/entities/`) | Contents |
|------|----------|
| `blacksmith/craftRecipes/` | 14 files: `recipes_blacksmith_armor`, `_bandsaw`, `_bar`, `_blades`, `_cookware`, `_furnaces_i`, `_furnace_ii`, `_heads`, `_ii`, `_other_metals`, `_standingdrill`, `_tools`, … (largest file: `_tools` = 37 `craftRecipe` lines, `_other_metals` = 33) |
| `agricultural/craftRecipes/` | `recipes_fiber.txt`, `recipes_flax.txt` |
| `animals/craftRecipes/` | `recipes_butter_churn.txt`, `recipes_leather_prep.txt`, `recipes_leather_prep_blair.txt`, `recipes_spinning_wheel.txt` |
| `agricultural/workstations/*_craftRecipe.txt` | Drying rack (8), herb drying rack (25), simple loom (3), stone mill (5), stone quern (3) |
| `appliances/workstations/*_craftRecipe.txt` | Coffee machine (2), toaster (1) |

Furnace tiers (`PrimitiveFurnace` → `PrimitiveForge` → `Furnace`) show how workstation-bound tags gate recipe availability — the pattern to copy for modded workstations.

---

## 12. Modding Opportunities

1. **New recipes.** Add a `craftRecipe` block (any module) reusing an existing `timedAction`; set `category` to slot into an existing UI tab or a new one.
2. **New timed actions.** Add a `timedAction` block with `metabolics`, `actionAnim`, `sound`, `prop1/prop2`, and muscle-strain fields, plus the Lua action in `media/lua/shared/TimedActions/`.
3. **Tag-based inputs.** Use `tags[base:yourtag]` inputs so any item with your tag is a valid ingredient/tool — the vanilla pattern for saws, hammers, tongs, charcoal.
4. **Item mappers.** `itemMapper` + `outputs { item N mapper:Name }` lets one recipe produce different outputs from different input subtypes (stick carving, crucible smelting).
5. **Skill gating.** `ResearchSkillLevel` requires a skill level to learn; `xpAward` feeds XP; add a skill-book ladder (5 books at `LvlSkillTrained` 1/3/5/7/9) to make your skill learnable.
6. **Workstation recipes.** Put `craftRecipe` files under `entities/<mod>/craftRecipes/` (or `workstations/*_craftRecipe.txt`) and gate them with entity-defined `Tags` (furnace-tier style) so recipes only appear at your workstation.
7. **Evolved recipes.** `evolvedrecipe` + container `BaseItem`/`ResultItem`/`MinimumWater` templates give custom pot/can/bucket cooking for new foods.
8. **Custom flags/modes.** New input flags integrate with the existing input parser; combine with `OnCreate = RecipeCodeOnCreate.<fn>` callbacks for post-craft behavior (e.g. smelting crucibles).

---
