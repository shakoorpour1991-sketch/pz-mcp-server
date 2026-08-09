---
title: "Project Zomboid Build 42 Glassmaking Research"
build: "42.20"
tags: [pz, modding, build42, glassmaking]
---

# Project Zomboid Build 42 — Glassmaking Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for glassmaking: melting sand/glass, blowing vessels, and the `Glassmaking` skill ladder. All claims verified against `recipes/recipes_glassmaking.txt` (8 recipes), `entities/blacksmith/craftRecipes/recipes_blacksmith_furnace_ii.txt` (melt recipes), and item files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Glass Furnace Mechanics](#3-glass-furnace-mechanics)
4. [Blown Vessels & Products](#4-blown-vessels--products)
5. [Skill Ladder](#5-skill-ladder)
6. [Modding Opportunities](#6-modding-opportunities)

---

## 1. Overview

- Glassmaking is a **Furnace + workstation-chain skill**: sand/glass is melted in a furnace-tier crucible, then blown into vessels with a glass-blowing pipe.
- The feedstock chain: `Sandbag` (or `BrokenGlass`) + furnace → `CeramicCrucibleWithGlass` → blow-pipe recipes → jars, bottles, glasses, panels, mirrors.
- All 8 vessel recipes are in `recipes/recipes_glassmaking.txt`; the two melt recipes live in the **blacksmith furnace II** file (`recipes_blacksmith_furnace_ii.txt`) — glassmaking reuses the smelting workstation.
- `SkillRequired` ranges from `Glassmaking:2` (drinking glass) to `Glassmaking:9` (champagne glass); `AutoLearnAny` is 1 level above skill requirement.
- Vessels double as **fluid containers** (jars/bottles) — see the Fluid System doc.

---

## 2. Core Files

| File | Role |
|------|------|
| `scripts/generated/recipes/recipes_glassmaking.txt` | 8 glassmaking recipes |
| `scripts/generated/entities/blacksmith/craftRecipes/recipes_blacksmith_furnace_ii.txt` | `MeltSand`, `MeltGlass` (Furnace tier) |
| `scripts/generated/items/normal.txt` | `GlassBlowingPipe` (9952) + `GlassBlowingPipeUnfired` (9942), `ClaySheetMold` |
| `scripts/generated/items/drainable.txt` | `CeramicCrucibleWithGlass` (951), `CeramicCrucible_Iron/Steel`, small variants |
| `scripts/generated/items/food.txt` | Glass containers (`BottleCrafted`, `JarCrafted` beverage items) |

---

## 3. Glass Furnace Mechanics

`MeltSand` and `MeltGlass` (`Tags = Furnace`, `category = Glassmaking`, `time = 20`) — verified:

```txt
craftRecipe MeltSand
{
    time = 20,
    Tags = Furnace,
    category = Glassmaking,
    inputs
    {
        item 1 [Base.CeramicCrucibleSmall] mode:destroy flags[ItemCount;IsEmpty],
        item 1 tags[base:crudetongs;base:tongs] mode:keep flags[MayDegradeLight],
        item 1 [Base.Sandbag],
        item 1 tags[base:startfire],
        item 2 tags[base:charcoal],
    }
    outputs
    {
        item 1 Base.CeramicCrucibleWithGlass,
    }
}
```

- **`MeltSand`**: `CeramicCrucibleSmall` (empty, destroyed) + `Sandbag` + `startfire` + 2 charcoal → `CeramicCrucibleWithGlass`.
- **`MeltGlass`**: same crucible + **6 `BrokenGlass`** + `startfire` + 1 charcoal → `CeramicCrucibleWithGlass` (glass recycling).
- Requires the **Furnace-tier** workstation (blacksmith furnace II/III) — no dedicated glass furnace entity exists in vanilla.
- Crucibles are pottery products: `CeramicCrucibleSmall` (fired from `CeramicCrucibleSmallUnfired` in the kiln — see Pottery doc).

---

## 4. Blown Vessels & Products

All 8 recipes from `recipes_glassmaking.txt` (verified; common inputs = pliers + `GlassBlowingPipe` (kept) + `CeramicCrucibleWithGlass`):

| Recipe | SkillRequired | AutoLearnAny | XP | Output |
|--------|:------------:|:------------:|:--:|--------|
| `MakeDrinkingGlass` | Glassmaking:2 | 4 | 45 | `DrinkingGlass` |
| `MakeGlassBottle` | Glassmaking:3 | 5 | 60 | `BottleCrafted` |
| `MakeMirror` | Glassmaking:4 | 5 | 50 | `Mirror` (needs `SmallSheetMetal` + `ClaySheetMold`) |
| `MakeGlassJar` | Glassmaking:5 | 6 | 75 | `JarCrafted` |
| `MakeWineGlass` | Glassmaking:7 | 8 | 90 | `GlassWine` |
| `MakeLanternGlass` | Glassmaking:7 | 8 | 90 | `LanternGlass` |
| `MakeChampagneGlass` | Glassmaking:9 | 10 | 90 | `GlassChampagne` |
| `MakeGlassPanel` | — | — | 25 | `GlassPanel` (uses `ClaySheetMold`, **no blow pipe**) |

```txt
craftRecipe MakeGlassJar
{
    timedAction = Craft_Glassmaking,
    time = 100,
    Tags = AnySurfaceCraft;Glassmaking,
    category = Glassmaking,
    NeedToBeLearn = true,
    SkillRequired = Glassmaking:5,
    AutoLearnAny = Glassmaking:6,
    xpAward = Glassmaking:75,
    inputs
    {
        item 1 tags[base:pliers] mode:keep flags[MayDegradeLight],
        item 1 [Base.GlassBlowingPipe] mode:keep,
        item 1 [Base.CeramicCrucibleWithGlass],
    }
    outputs
    {
        item 1 Base.JarCrafted,
    }
}
```

Mechanics:

- `timedAction = Craft_Glassmaking` + `Tags = AnySurfaceCraft;Glassmaking` — craftable by hand anywhere (no glass bench required).
- Vessels made from the *melted glass* crucible; the pipe and pliers are kept (`mode:keep`).
- `GlassPanel` and `Mirror` instead use a **`ClaySheetMold`** (pottery product) — flat-glass products skip the blow pipe.

---

## 5. Skill Ladder

| Level | Unlocks |
|:-----:|---------|
| 2 | DrinkingGlass |
| 3 | GlassBottle |
| 4 | Mirror |
| 5 | GlassJar |
| 7 | WineGlass, LanternGlass |
| 9 | ChampagneGlass |

- `AutoLearnAny` sits 1–2 levels above `SkillRequired` (2→4, 3→5, 5→6, 7→8, 9→10) — the standard discovery gap.
- XP per craft: 25 (panel) → 90 (wine/champagne/lantern).
- `Glassmaking` has a skill-book ladder (5 books, `SkillTrained = Glassmaking` in `items/literature.txt`).

---

## 6. Modding Opportunities

1. **New glass products.** Copy a vessel recipe (`Craft_Glassmaking` + pipe + crucible) with a new `SkillRequired`/`AutoLearnAny`/`xpAward`; keep `Tags = AnySurfaceCraft;Glassmaking` for the UI tab.
2. **Alternative feedstocks.** Add melt recipes beside `MeltSand`/`MeltGlass` (Furnace tier) to accept custom glass sources (e.g. bottle recycling).
3. **Mold-based products.** Follow `GlassPanel`/`Mirror` with `ClaySheetMold` inputs to make flat glass without the pipe.
4. **New furnace content.** Since melting lives in the blacksmith furnace II file, adding `Tags = Furnace` recipes extends both workstations at once.
5. **Fluid integration.** New vessels inherit fluid-container behavior (jars/bottles carry fluids); wire custom capacities via `component FluidContainer`.

---
