---
title: "Project Zomboid Build 42 Knapping Research"
build: "42.20"
tags: [pz, modding, build42, knapping]
---

# Project Zomboid Build 42 — Knapping Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for knapping: flint/stone tool production, the `FlintKnapping` skill ladder, and stone-tool assembly. All claims verified against `media/scripts/generated/recipes/recipes_knapping.txt` (15 recipes); paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Raw Materials](#3-raw-materials)
4. [Knapped Tool Tiers](#4-knapped-tool-tiers)
5. [Stone Tool Assembly](#5-stone-tool-assembly)
6. [Skill Gating & XP](#6-skill-gating--xp)
7. [Modding Opportunities](#7-modding-opportunities)

---

## 1. Overview

- Knapping is the **stone-age skill tree**: 15 recipes in `recipes_knapping.txt` convert flint nodules, sharp stones, and flat stones into blades, chisels, drills, and weapon heads.
- Two skill families interlock: **`FlintKnapping`** (making stone tools/blades) and **`Maintenance`** (assembling stone weapons on handles — `MakeCrudeStoneAxe`, `MakeStoneHammer`, etc.).
- The core loop: `FlintNodule` → (knap) → `SharpedStone` → (shape) → blades/chisels/drills → (bind to handles) → weapons.
- All recipes are `time = 230`, `Tags = AnySurfaceCraft` (no workstation), and use the `tags[base:hammerstone;base:mallet;base:knappingtool]` tool family.
- `OnCreate = RecipeCodeOnCreate.knappFlake` (flake generation) and `minorCondition` (quality/condition) are the recipe-code hooks.

---

## 2. Core Files

| File | Role |
|------|------|
| `media/scripts/generated/recipes/recipes_knapping.txt` | All 15 knapping recipes |
| `media/scripts/generated/items/normal.txt` | `FlintNodule`, `SharpedStone`, `Stone2`, `FlatStone`, `StoneAxeHead`, `StoneMaulHead`, `Awl_Stone`, `StoneBlade*`, `StoneChisel`, `StoneDrill`, `Saw_Flint` |
| `media/scripts/generated/items/weapon.txt` | Assembled stone weapons (`AxeStone`, `StoneAxeLarge`, `StoneMaul`, `HammerStone`, `PrimitiveScythe`) |
| `media/lua/shared/TimedActions/` | `HammerStoneStanding`, `Chisel_Surface`, `CraftWeapon1H/2H` action implementations |

---

## 3. Raw Materials

| Item | Role | Where used |
|------|------|-----------|
| `FlintNodule` | Raw flint — knapped into flakes/blades | `MakeSharpFlintFlake`, `MakeLongStoneBlade` |
| `SharpedStone` | The universal knapped blank | ~10 recipes |
| `Stone2` | Cobble — hammer head | `MakeStoneHammer` |
| `FlatStone` | Head blank | `MakeLargeStoneAxeHead`, `MakeStoneMaulHead` |
| `TreeBranch2` / `LongHandle` / `Handle` | Shafts | assembly recipes |
| `Twine` / `LeatherStrips` / `tags[base:simpleweaponbinding]` | Binding | assembly recipes |
| `tags[base:hammerstone;base:mallet;base:knappingtool]` | The knapping tool family | all knapping recipes |

---

## 4. Knapped Tool Tiers

All verified from `recipes_knapping.txt` (time = 230, `category = Knapping` unless noted):

| Recipe | SkillRequired | AutoLearn | XP | Output |
|--------|:------------:|:---------:|:--:|--------|
| `MakeSharpFlintFlake` | — | — | FlintKnapping:10 | `SharpedStone` (from FlintNodule; `OnCreate = knappFlake`) |
| `MakeStoneAwl` | — | FlintKnapping:2 | FlintKnapping:10 | `Awl_Stone` |
| `MakeStoneBlade` | FlintKnapping:1 | FlintKnapping:3 | FlintKnapping:20 | `StoneBlade` |
| `RemakeLongStoneBlade` | FlintKnapping:1 | — | FlintKnapping:20 | `StoneBlade` (from `StoneBladeLong`, `MetaRecipe = base:makestoneblade`) |
| `MakeStoneBladeScythe` | FlintKnapping:2 | FlintKnapping:5 | FlintKnapping:30 | `PrimitiveScythe` |
| `MakeStoneChisel` | FlintKnapping:1 | FlintKnapping:4 | FlintKnapping:20 | `StoneChisel` |
| `MakeStoneBladeSaw` | FlintKnapping:3 | FlintKnapping:6 | FlintKnapping:40 | `Saw_Flint` |
| `MakeLargeStoneAxeHead` | FlintKnapping:4 | FlintKnapping:7 | FlintKnapping:50 | `StoneAxeHead` |
| `MakeStoneMaulHead` | FlintKnapping:5 | FlintKnapping:8 | FlintKnapping:60 | `StoneMaulHead` |
| `MakeStoneDrill` | FlintKnapping:5 | FlintKnapping:8 | FlintKnapping:60 | `StoneDrill` |
| `MakeLongStoneBlade` | FlintKnapping:6 | FlintKnapping:9 | FlintKnapping:70 | `StoneBladeLong` |

```txt
craftRecipe MakeStoneBlade
{
    time = 230,
    NeedToBeLearn = true,
    SkillRequired = FlintKnapping:1,
    xpAward = FlintKnapping:20,
    timedAction = HammerStoneStanding,
    Tags = AnySurfaceCraft,
    category = Knapping,
    AutoLearnAny = FlintKnapping:3,
    OnCreate = RecipeCodeOnCreate.minorCondition,
    inputs
    {
        item 1 [Base.SharpedStone] flags[Prop2],
        item 1 tags[base:hammerstone;base:mallet;base:knappingtool] mode:keep flags[Prop1;MayDegradeLight],
    }
    outputs
    {
        item 1 Base.StoneBlade,
    }
}
```

Notes:

- `AutoLearnAny` ladders: each tier unlocks 1–3 levels above its `SkillRequired` (e.g. `StoneBladeSaw` needs level 3, auto-learns at 6).
- `RemakeLongStoneBlade`/`MakeLongStoneBlade` share `MetaRecipe = base:makestoneblade` — a metarecipe group.
- `OnCreate = RecipeCodeOnCreate.minorCondition` applies the tool-quality/condition roll.

---

## 5. Stone Tool Assembly

Weapon assembly uses **`Maintenance`** and the `Assembly` category (`NeedToBeLearn = false`, `SkillRequired = Maintenance:1`, `xpAward = Maintenance:5`):

| Recipe | Timed action | Inputs | Output |
|--------|--------------|--------|--------|
| `MakeCrudeStoneAxe` | `CraftWeapon2H` | TreeBranch2 + SharpedStone (`IsHeadPart`) + 2 `base:simpleweaponbinding` | `AxeStone` |
| `MakeStoneHammer` | `CraftWeapon1H` | TreeBranch2 + Stone2 + 2 binding + sharpknife | `HammerStone` |
| `MakeLargeStoneAxe` | `CraftWeapon2H` | LongHandle + StoneAxeHead + 3 binding + sharpknife | `StoneAxeLarge` |
| `MakeStoneMaul` | `CraftWeapon2H` | LongHandle + StoneMaulHead + 3 binding + sharpknife | `StoneMaul` |

```txt
craftRecipe MakeCrudeStoneAxe
{
    time = 230,
    NeedToBeLearn = false,
    SkillRequired = Maintenance:1,
    xpAward = Maintenance:5,
    Tags = AnySurfaceCraft,
    category = Assembly,
    timedAction = CraftWeapon2H,
    inputs
    {
        item 1 [Base.TreeBranch2] flags[InheritCondition],
        item 1 [Base.SharpedStone] flags[Prop2;IsHeadPart],
        item 2 tags[base:simpleweaponbinding] flags[DontReplace],
    }
    outputs
    {
        item 1 Base.AxeStone,
    }
}
```

- `IsHeadPart`/`InheritCondition` flags pass the head's condition to the weapon; `DontReplace` keeps bindings.
- `base:simpleweaponbinding` is the binding tag (twine/strips) used across the tree.

---

## 6. Skill Gating & XP

| Skill | Role | XP range |
|-------|------|----------|
| `FlintKnapping` | Making tools/blades | 10 → 70 (per tier) |
| `Maintenance` | Assembling weapons | 5 per assembly |

- Skill books exist for both (`FlintKnapping`, `Maintenance` in `items/literature.txt` — see Crafting & Skills doc).
- `NeedToBeLearn = true` + `AutoLearnAny = FlintKnapping:N` is the discovery mechanic; assembly recipes are always known (`NeedToBeLearn = false`).

---

## 7. Modding Opportunities

1. **New stone tools.** Copy any tier recipe: set `SkillRequired`/`AutoLearnAny`/`xpAward` to slot into the ladder, add `OnCreate = minorCondition` for quality rolls.
2. **New knapping tools.** Extend the `base:hammerstone;base:mallet;base:knappingtool` tag family — any item with these tags becomes a valid knapping tool.
3. **Metarecipe groups.** Use `MetaRecipe` to group recipes (the `base:makestoneblade` pattern) for shared auto-upgrade paths.
4. **Weapon bindings.** New `base:simpleweaponbinding`-tagged items (e.g. sinew) extend assembly inputs; combine with `IsHeadPart`/`InheritCondition` flags.
5. **Flake system.** `OnCreate = knappFlake` is the hook for byproduct generation — mods can make knapping produce scrap/flakes as a resource sink.

---
