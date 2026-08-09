---
title: "Project Zomboid Build 42 Pottery Research"
build: "42.20"
tags: [pz, modding, build42, pottery]
---

# Project Zomboid Build 42 — Pottery Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for pottery: clay acquisition, molds, wheel/hand-press shaping, kiln firing, and ceramic vessels. All claims verified against `recipes/recipes_pottery.txt`, `entities/pottery/` (incl. the `cratRecipes` folder), and item files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Clay & Unfired Items](#3-clay--unfired-items)
4. [Molds](#4-molds)
5. [Workstations: Wheel, Hand Press & Bench](#5-workstations-wheel-hand-press--bench)
6. [Kiln Firing](#6-kiln-firing)
7. [Vessels & Their Uses](#7-vessels--their-uses)
8. [Skill Gating](#8-skill-gating)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- Pottery is a **shape-then-fire** skill tree: clay + molds/tools → **unfired** items → kiln → **fired** ceramics.
- Clay starts as `Clay` (and `Claybag`); unfired pieces are made on the **pottery wheel**, **hand press**, or by hand; everything is fired in a **kiln** (`entity_kiln_small`, `entity_kiln_large`, plus the blacksmith `dome_kiln` for coke).
- Produces: bricks/tiles/shingles (construction), crucibles (smelting/glassmaking feedstock!), bowls/plates/jars (food + fluid storage), and blacksmith molds (anvil, bar, ingot molds).
- Pottery integrates with **blacksmithing and glassmaking** — the crucibles and molds made here power both trees.

---

## 2. Core Files

| File | Role |
|------|------|
| `scripts/generated/recipes/recipes_pottery.txt` | 5 hand-craft recipes (molds + manual brick/tile pressing) |
| `scripts/generated/entities/pottery/cratRecipes/craftrecipe_potterywheel.txt` | Wheel recipes: crucibles, mortar & pestle (fluid-aware) |
| `scripts/generated/entities/pottery/cratRecipes/craftrecipe_handpress.txt` | Press recipes: bricks, tiles, shingles, ingot/anvil/bar molds |
| `scripts/generated/entities/pottery/cratRecipes/craftrecipe_kiln.txt` | Firing: `FireBrick`, crucible/jar/plate/ingot firing |
| `scripts/generated/entities/pottery/workstations/` | `entity_pottery_wheel(_modern)`, `entity_pottery_bench`, `entity_hand_press`, `entity_kiln_small/large` |
| `scripts/generated/items/normal.txt` | Clay, unfired/fired ceramics (lines 9592–10012) |
| `scripts/generated/items/food.txt` | Clay food containers (`SoupBowlClay`, `SaladClay`, …) |

---

## 3. Clay & Unfired Items

Verified items (`items/normal.txt`): `Clay` (9592), `ClayBowl` (9602), `ClayBowlUnfired` (9627), `ClayJarUnfired` (9659), `ClayJar` (9669), `ClayJarGlazed` (9690), `ClayPlate` (9766), `ClayPlateUnfired` (9775), `GlassBlowingPipeUnfired` (9942), `ClayBrickUnfired` (9982), `ClayBrick` (10012); also `Claybag` (drainable 316), `Clay*Mold` (normal 1400–1519).

The pattern: **`<Item>Unfired` → (kiln) → `<Item>`**.

---

## 4. Molds

`recipes_pottery.txt` (verified) — wooden molds are the press inputs:

| Recipe | Timed action | Time | XP | Output |
|--------|--------------|:----:|:--:|--------|
| `MakeBrickMold` | `SawLogs` | 150 | Woodwork:5 | `WoodenBrickMold` |
| `MakeShingleMold` | `SawLogs` | 180 | Woodwork:5 | `WoodenShingleMold` |
| `MakeTileMold` | `SawLogs` | 180 | Woodwork:5 | `WoodenTileMold` |
| `PressClayBrickManually` | `Making` | 120 | Pottery:5 | `ClayBrickUnfired` (Clay + mold kept) |
| `PressClayTileManually` | `Making` | 120 | Pottery:5 | `ClayTileUnfired` |

All carry `Tags = AnySurfaceCraft;Pottery`, `category = Pottery`.

---

## 5. Workstations: Wheel, Hand Press & Bench

`entities/pottery/workstations/` (6 entities, verified):

| Entity | Role |
|--------|------|
| `entity_pottery_wheel.txt` / `entity_pottery_wheel_modern.txt` | Wheel — crucibles, mortar & pestle |
| `entity_hand_press.txt` | Press — bricks, tiles, shingles, molds |
| `entity_pottery_bench.txt` | Pottery bench |
| `entity_kiln_small.txt` / `entity_kiln_large.txt` | Firing kilns |

Wheel recipe example (`cratRecipes/craftrecipe_potterywheel.txt`):

```txt
craftRecipe MakeCeramicCrucible
{
    timedAction = Craft_PotteryWheel,
    time = 120,
    Tags = PotteryWheel,
    SkillRequired = Pottery:1,
    xpAward = Pottery:25,
    category = Pottery,
    inputs
    {
        item 2 [Base.Clay],
        item 1 [Base.Sandbag],
    }
    outputs
    {
        item 1 Base.CeramicCrucibleUnfired,
    }
}
```

- `Tags = PotteryWheel` gates wheel recipes to the wheel entity (same tag pattern as forge tiers).
- `MakeCeramicCrucibleSmall` (1 Clay + Sandbag, Pottery:1) and `MakeCeramicMortarAndPestle` (2 Clay + Sandbag) follow.
- The pottery-wheel `cratRecipes` also include fluid-aware recipes (`-fluid … categories[Water] mode:mixture` — see Fluid System doc).

---

## 6. Kiln Firing

`cratRecipes/craftrecipe_kiln.txt` (verified) — `Tags = Kiln`-bound firing:

| Recipe | Input | Output |
|--------|-------|--------|
| `FireBrick` | 3 `ClayBrickUnfired` | 3 `ClayBrick` |
| `FireBrickLarge` | 6 `ClayBrickUnfired` | 6 `ClayBrick` |
| crucible firing | `CeramicCrucibleUnfired`/`CeramicCrucibleSmallUnfired` | `CeramicCrucible`/`CeramicCrucibleSmall` (crucibleSize mapper) |
| bowl/jar/plate firing | `ClayBowlUnfired`, `ClayJarUnfired`, `ClayPlateUnfired` | `ClayBowl`, `ClayJar`, `ClayPlate` (jarType/plateType mappers) |
| ingot/bar mold firing | `ClayIngotMoldUnfired`, `ClayBarMoldUnfired` | fired molds |

The blacksmith `dome_kiln` (`workstations/entity_dome_kiln_craftRecipe.txt`) fires **coke** (`MakeCoke`: 8 CharcoalCrafted/Charcoal → 4 Coke, `timedAction = Making_With_Kiln`) — shared kiln infrastructure across pottery and blacksmithing.

---

## 7. Vessels & Their Uses

- **Food:** clay bowls/plates appear as food containers — `SoupBowlClay`, `StewBowlClay`, `PastaBowlClay`, `RiceBowlClay`, `SaladClay`, `HotDrinkClay`, `FruitSaladClay` (all verified in `items/food.txt`).
- **Fluids:** `ClayJar` (and glazed variant) are fluid containers (see Fluid System doc); amphorae/wells use pottery-adjacent entities.
- **Smelting/glass:** fired `CeramicCrucible*` are consumed by blacksmithing (iron/steel smelting) and glassmaking (`CeramicCrucibleWithGlass`) recipes.
- **Construction:** `ClayBrick`/`ClayTile`/`ClayShingle` build kilns, furnaces, and masonry structures (`Masonry` skill).

---

## 8. Skill Gating

- `Pottery` skill: `xpAward = Pottery:5` (hand press) and `Pottery:15–25` (wheel); `SkillRequired = Pottery:1` on wheel crucibles.
- Kiln firing recipes carry no `Pottery` requirement (verified) — gating is on shaping, not firing.
- `Woodwork:5` XP on mold carpentry; molds are the Woodwork/Pottery crossover.
- `Pottery` has a skill-book ladder (`SkillTrained = Pottery` in `items/literature.txt`); the `base:artisan` trait grants `Glassmaking=1;Pottery=1` XP boosts.

---

## 9. Modding Opportunities

1. **New ceramics.** Add `<X>Unfired` item + wheel/hand-press shaping recipe (`Tags = PotteryWheel`/`AnySurfaceCraft;Pottery`) + kiln firing recipe (`Tags = Kiln`) — the complete pottery pipeline.
2. **New molds.** Wooden mold recipes (`SawLogs`) are trivial to clone for custom press shapes.
3. **Fluid vessels.** Give fired jars `component FluidContainer` for custom liquid storage; wire into fluid recipes.
4. **Cross-skill feedstocks.** Crucible/mold items bridge pottery→blacksmithing/glassmaking; new fired components can feed any recipe tree.
5. **Kiln variants.** New kiln entities with custom `Tags` tier the firing chain (small → large kiln) like forge tiers.

---
