---
title: Project Zomboid Build 42 Masonry Research
build: "42.20"
tags: [pz, modding, build42, masonry]
---

# Build 42 — Masonry Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the **Masonry** skill: stone shaping, cement/concrete mixing, brick production and brick construction. Unlike most skills there is **no `recipes_masonry.txt`** — the recipes are spread across entity craft benches, `recipes_buckets.txt` and the pottery pipeline. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents
1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [The Stone Chain](#3-the-stone-chain)
4. [Cement & Concrete](#4-cement--concrete)
5. [The Brick Pipeline](#5-the-brick-pipeline)
6. [Construction Recipes](#6-construction-recipes)
7. [Masonry Workstations](#7-masonry-workstations)
8. [Items & Tools](#8-items--tools)
9. [Pitfalls](#9-pitfalls)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

- Masonry is the **stone/brick construction skill**: shaping stone into blocks and wheels, mixing clay-cement and concrete, pressing and firing clay bricks, and building brick walls/doors/windows.
- Recipe locations are **scattered** (verified): the stone chain lives in `entities/blacksmith/craftRecipes/recipes_stonemasonry_i.txt`; cement/concrete in `recipes/recipes_buckets.txt` (`category = Masonry`); brick construction in `entities/walls/entity_brick_*.txt`; brick *production* in the pottery pipeline (`entities/pottery/cratRecipes/craftrecipe_handpress.txt` + `craftrecipe_kiln.txt`).
- Skill ladder: `Masonry` has a 5-book skill-book ladder (`items/literature.txt`, `SkillTrained = Masonry`).
- XP per craft: 10 (stones, simple pits, mills) → 20 (stone blocks, brick walls) → 30 (stone wheels) → 60–80 (stone weapon heads).

## 2. Core Files

| File | Role |
|---|---|
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_stonemasonry_i.txt` | Stone shaping recipes (stones, blocks, wheels) |
| `scripts/generated/recipes/recipes_buckets.txt` | `MakeBucketOfClayCement`, `MakeBucketOfClayCementFromGrass`, `MakeBucketOfConcrete` (all `category = Masonry`) |
| `scripts/generated/entities/walls/entity_brick_walllvl1.txt` + `entity_brick_doorframelvl1/2.txt`, `entity_brick_windowframelvl1/2.txt`, `entity_brick_fencelvl2.txt`, `entity_brick_floor.txt` | Brick construction recipes (`SkillRequired = Masonry:2`) |
| `scripts/generated/entities/pottery/cratRecipes/craftrecipe_handpress.txt` | `PressClayBrick` (unfired brick) |
| `scripts/generated/entities/pottery/cratRecipes/craftrecipe_kiln.txt` | Kiln firing → `ClayBrick` |
| `scripts/generated/entities/agricultural/workstations/entity_cooking_pit.txt`, `entity_simple_cooking_pit.txt`, `entity_stone_mill.txt`, `entity_stone_quern.txt` | Masonry-gated workstations |
| `scripts/generated/entities/furniture/entity_stone_cabinet.txt` | Stone furniture (Masonry-gated) |
| `scripts/generated/items/normal.txt` | `StoneChisel` (2354), `ConcretePowder` (3601), `PlasterPowder` (3610), `PlasterTrowel` (3709), `Limestone` (9387), `StoneBlock` (9412), `ClayBrickUnfired` (9982), `ClayBrick` (10012), `WoodenBrickMold` (10042) |

## 3. The Stone Chain

All **8 recipes** in `recipes_stonemasonry_i.txt` (verified):

| Recipe | Output | XP | SkillRequired |
|---|---|---|---|
| `Make_Stones_from_Large_Stone` | `Stone2` ×10 | `Masonry:10` | — |
| `Make_Stone_Block_from_Stone` | `StoneBlock` ×1 | `Masonry:20` | `Masonry:1` |
| `Make_Small_Stone_Wheel` | `StoneWheelSmall` ×2 | `Masonry:30` | `Masonry:2` |
| `Make_Stone_Wheel` | stone wheel | `Masonry:30` | `Masonry:2` |
| `Make_Stone_Anvil` | stone anvil | `Masonry:30` | `Masonry:2` |
| `MakeLargeStoneAxeHead2` | stone axe head | `Masonry:60` | `Masonry:6` |
| `MakeStoneMaulHead2` | stone maul head | `Masonry:70` | `Masonry:7` |
| `MakeStoneMaceHead` | stone mace head | `Masonry:80` | `Masonry:8` |

All use `timedAction = HammerStoneStanding`; the first three are `CanBeDoneFromFloor`. The weapon-head tier (`Masonry:6`–`8`) produces stone heads for the knapping/weapon trees — the full ladder runs **`Masonry:1` → `Masonry:8`**.

## 4. Cement & Concrete

All in `recipes_buckets.txt`, `category = Masonry`, `timedAction = MixingBucket` (verified):

| Recipe | Inputs | Output |
|---|---|---|
| `MakeBucketOfClayCement` | bucket (destroy) + `-fluid 10.0 categories[Water] mode:mixture` + `Clay` ×2 + `Sandbag` | `BucketClayCement` |
| `MakeBucketOfClayCementFromGrass` | bucket + water + `Clay` ×2 + `GrassTuft`/`HayTuft` ×50 | `BucketClayCement` |
| `MakeBucketOfConcrete` | bucket + water + `ConcretePowder` ×1 | `BucketConcreteFull` |

- The **fluid system** is used directly in recipes (`-fluid 10.0 categories[Water] mode:mixture`) — water is consumed as a fluid, not an item.
- Carved buckets map to `BucketCarvedClayCement`/`BucketCarvedConcreteFull` via `itemMapper bucketList`.
- Cement/concrete buckets are the mortar material for brick construction (tag `base:concrete`).

## 5. The Brick Pipeline

Bricks are produced by the **pottery tree**, then consumed by Masonry construction (verified cross-file chain):

```text
Clay ──(handpress: PressClayBrick)──► ClayBrickUnfired ──(kiln)──► ClayBrick
                                                        (3 unfired → 3 fired; 6 → 6)
```

- `craftrecipe_handpress.txt` → `PressClayBrick` (output `Base.ClayBrickUnfired`).
- `craftrecipe_kiln.txt` — kiln recipe group, `Tags = KilnSmall;KilnLarge`; e.g. input `3 × ClayBrickUnfired` → output `3 × ClayBrick`.
- Items: `ClayBrickUnfired` (`items/normal.txt:9982`), `ClayBrick` (10012), `WoodenBrickMold` (10042 — the mold used in pressing).

## 6. Construction Recipes

Brick construction lives on the **wall entities** (`entity_brick_walllvl1.txt` etc.), verified example:

```text
    craftRecipe ...            -- inside entity_brick_walllvl1
    {
        category = Masonry,
        SkillRequired = Masonry:2,
        xpAward = Masonry:20,
        inputs
        {
            item 1 tags[base:masonstrowel] mode:keep flags[Prop1;MayDegradeLight],
            item 2 tags[base:concrete] flags[DontRecordInput],
            item 4 [Base.ClayBrick],
        }
    }
```

- **Every brick structure** (walls lvl1/2, doorframes lvl1/2, windowframes lvl1/2, fence lvl2, floor) requires `Masonry:2` and awards `Masonry:20` XP.
- Consumes **4 ClayBrick + 2 concrete + a mason's trowel** per unit (wall example).
- `entity_brick_doorframelvl1.txt` confirms the same `category = Masonry; SkillRequired = Masonry:2; xpAward = Masonry:20` trio.

## 7. Masonry Workstations

Several **agricultural/furniture entities are Masonry-gated builds** (verified):

| Entity | SkillRequired | xpAward |
|---|---|---|
| `entity_simple_cooking_pit` | `Masonry:1` | `Masonry:10` |
| `entity_cooking_pit` | `Masonry:2` | `Masonry:20` |
| `entity_stone_mill` | `Masonry:1` | `Masonry:10` |
| `entity_stone_quern` | `Masonry:1` | `Masonry:10` |
| `entity_stone_cabinet` | (Masonry — verified in file) | — |
| `entity_brick_doorframelvl1/2` | `Masonry:2` | `Masonry:20` |

## 8. Items & Tools

- **Tools:** `StoneChisel` (`normal.txt:2354`), `PlasterTrowel` (3709), plus tag-based tools `base:masonstrowel` (trowel), `base:crudechisel`/`base:masonschisel` (chisels), `base:concrete` (cement buckets), `base:hammer`/`base:clubhammer`/`base:sledgehammer`/`base:stonemaul`/`base:pickaxe` (hammers).
- **Materials:** `LargeStone`, `Stone2`, `StoneBlock` (9412), `Limestone` (9387), `ConcretePowder` (3601), `PlasterPowder` (3610), `Lime` (`food.txt:8806`), `Clay`, `Sandbag`, `ClayBrick`/`ClayBrickUnfired`, `WoodenBrickMold`.
- `Lime` (food file) is the culinary/industrial lime — relevant for plaster recipes in related trees.

## 9. Pitfalls

- **No `recipes_masonry.txt`** — modders searching for a single Masonry file will miss 90% of the skill; the recipes live on entities.
- **`Bricktoys`** (`normal.txt:11549`) is a *toy*, not a construction brick — do not reference it in brick recipes.
- **Bricks come from the pottery tree** — a Masonry build needs the handpress + kiln (or pre-fired `ClayBrick` loot) before it can build walls.
- **Water is a fluid** — cement recipes consume `-fluid 10.0 categories[Water]`; `BucketWater`-style item inputs won't match.
- Masonry recipes often use **`CanBeDoneFromFloor`** — they are not locked to a workbench, but the kiln/handpress *are* required for bricks.

## 10. Modding Opportunities

1. **New stone products:** extend `recipes_stonemasonry_i.txt` with `Masonry:3+` tiers (stone doors, statues, blocks) using the same `HammerStoneStanding` timed action.
2. **Custom bricks/materials:** add a `craftRecipe` to the handpress/kiln files for colored or reinforced bricks; add new `base:concrete`-tagged buckets.
3. **Entity-gated builds:** any new stone/cement furniture entity can carry `category = Masonry` + `SkillRequired`/`xpAward` to auto-join the skill.
4. **Fluid-driven mixing:** new mortar/plaster recipes can consume `-fluid` water exactly like the bucket recipes — reuse the `MixingBucket` timed action.
5. **Construction sets:** copy the `entity_brick_*` pattern for modded wall/floor materials (consumes N bricks + concrete + trowel).
