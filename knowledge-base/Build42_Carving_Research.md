---
title: Project Zomboid Build 42 Carving Research
build: "42.20"
tags: [pz, modding, build42, carving]
---

# Build 42 — Carving Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the **Carving** crafting tree: 32 recipes in `media/scripts/generated/recipes/recipes_carving.txt`. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents
1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Recipe Catalog](#3-recipe-catalog)
4. [Recipe Anatomy](#4-recipe-anatomy)
5. [Skill Gating & XP](#5-skill-gating--xp)
6. [Tools & Materials](#6-tools--materials)
7. [Cross-Skill Support](#7-cross-skill-support)
8. [Character Synergies](#8-character-synergies)
9. [Pitfalls](#9-pitfalls)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

- Carving is the **shaping tree**: 32 recipes in `recipes_carving.txt` convert sticks, planks, long sticks and bone/tusk by-products into tools, handles, utensils, weapon blanks and jewelry.
- Recipes are mostly **`InHandCraft`** (no workstation required) — carving is the earliest, most accessible crafting skill after basic survival.
- XP is pure **`Carving`** skill; a few high-end recipes dual-gate with `Tailoring` (e.g. `CarveBat` needs `Carving:3;Tailoring:1`).
- The skill **feeds other trees**: carved knapping tools, a clay sculpting tool, knitting needles, buckets, and long handles used by improvised-weapon recipes.
- Skill ladder: `Carving` has a 5-book skill-book ladder in `items/literature.txt` (`SkillTrained = Carving`, `LvlSkillTrained = 7`).

## 2. Core Files

| File | Role |
|---|---|
| `scripts/generated/recipes/recipes_carving.txt` | All 32 carving recipes (single file — the whole skill) |
| `scripts/generated/items/normal.txt` | Output items: `CrudeWoodenTongs`, `WoodenSpoon`, `WoodenFork`, etc. |
| `scripts/generated/items/literature.txt` | Carving skill books (`SkillTrained = Carving`, 5 levels, max trained level 7) |
| `scripts/generated/characters/character_traits.txt` | `base:whittler`, `base:handy`, `base:wildernessknowledge` — Carving XP boosts + granted recipes |
| `scripts/generated/characters/character_professions.txt` | `base:parkranger` — Carving XP boost |
| `scripts/generated/recipes/recipes_bone.txt` | Bone crafting cross-trains Carving XP (see Bone sub-doc) |

## 3. Recipe Catalog

All 32 `craftRecipe` blocks (verified by grep):

| # | Recipe | Output | Notes |
|---|--------|--------|-------|
| 1 | `MakeStake` | `Stake` | sharpknife + branch/handle/longstick → stake |
| 2 | `CarveLongStick` | long stick | in-hand shaping |
| 3 | `MakeCrudeWoodenTongs` | `CrudeWoodenTongs` | tool for glass/metal work |
| 4 | `CarveTrowel` | trowel | masonry/agriculture tool |
| 5 | `CarveClaySculptingTool` | sculpting tool | feeds Pottery |
| 6 | `CarveKnappingTools` | knapping tools | feeds Knapping |
| 7 | `CarveWoodenSpoon` | `WoodenSpoon` | utensil |
| 8 | `CarveStick` | carved stick | |
| 9–12 | `CarveSmallHandle` / `2SmallHandles` / `4SmallHandles` / `8SmallHandles` | handles | quantity ladder |
| 13 | `CarveSmallHandlesFromPlank` | small handles | plank source |
| 14 | `CarveDice` | dice | cards-and-dice recreation |
| 15 | `CarvePlank` | plank | |
| 16 | `CarveMediumHandle` | medium handle | |
| 17 | `CarveMediumHandlesFromPlank` | medium handles | |
| 18 | `CarveWoodenFork` | `WoodenFork` | utensil |
| 19 | `CarveCuttingBoards` | cutting boards | cooking |
| 20 | `CarveLongHandle` | long handle | improvised weapons |
| 21 | `CarveKnittingNeedles` | knitting needles | feeds Tailoring |
| 22 | `CarvePipe` | pipe | smoking/tobacco |
| 23 | `CarveWoodenSpade` | wooden spade | farming |
| 24 | `CarveBucket` | carved bucket | feeds bucket family |
| 25 | `CarveGoblets` | goblets | |
| 26 | `CarveShortBat` | short bat | weapon blank |
| 27 | `CarveBat` | bat | weapon blank; dual-gated `Carving:3;Tailoring:1` |
| 28–32 | `MakePigTuskNecklace`, `MakePigTusksNecklace`, `MakePigTuskEarrings`, `MakeToothNecklace`, `MakeLongToothNecklace` | jewelry | pig tusks / teeth |

**Tools used across all 32 recipes (tag counts):** `tags[base:sharpknife;base:meatcleaver]` ×17, `tags[base:sharpknife]` ×9, `tags[base:drillwood;base:drillmetal;base:drillwoodpoor]` ×5, `tags[base:sharpknife;base:meatcleaver;base:saw]` ×1, `tags[base:saw]` ×1, `tags[base:pliers]` ×1, `tags[base:carvelongstick]` ×1.

## 4. Recipe Anatomy

```text
    craftRecipe MakeStake
    {
        timedAction = SharpenStakeWood,
        time = 100,
        OnCreate = RecipeCodeOnCreate.minorCondition,
        Tags = InHandCraft,
        xpAward = Carving:5,
        category = Carving,
        inputs
        {
            item 1 tags[base:sharpknife;base:meatcleaver] mode:keep flags[MayDegrade;IsNotDull],
            item 1 [Base.TreeBranch2;Base.Handle;Base.LongStick_Broken;Base.WoodenStick2;Base.LongHandle_Broken;Base.LongHandle;Base.LongStick;Base.Plunger] flags[AllowDestroyedItem],
        }
        outputs
        {
            item 1 Base.Stake,
        }
    }
```
*(`recipes_carving.txt` lines 3–21)*

Notable structural facts:
- **`OnCreate = RecipeCodeOnCreate.minorCondition`** — tool-quality rolls are applied at craft time (carved items inherit condition variance).
- **`flags[AllowDestroyedItem]`** on wood inputs — broken branches/sticks are valid material.
- **`mode:keep` + `flags[IsNotDull]`** — the knife must be sharp and is not consumed.
- No `NeedToBeLearn` on most recipes → most are known by default or via AutoLearn-style discovery; the skill ladder gates the higher tiers.

## 5. Skill Gating & XP

**`SkillRequired` distribution (verified):**

| SkillRequired | Recipes |
|---|:---:|
| `Carving:1` | 9 |
| `Carving:2` | 5 |
| `Carving:3` | 4 |
| `Carving:2;Tailoring:1` | 3 |
| `Carving:4` | 2 |
| `Carving:3;Tailoring:1` | 2 |
| `Carving:5` / `Carving:7` / `Carving:9` | 1 each |

**`xpAward` distribution (verified):** `Carving:10` ×9, `Carving:20` ×8, `Carving:30` ×7, `Carving:5` ×4, `Carving:40/50/70/90` ×1 each.

- The ladder tops out at **`Carving:9`** (goblets/jewelry tier) — one of the highest per-recipe requirements in the game's craft trees.
- Skill books: 5-book ladder (`BookCarving1`–`5`), `LvlSkillTrained = 7` caps passive training.
- XP gain per craft scales from 5 (stakes) to 90 (top jewelry), so the tree self-accelerates.

## 6. Tools & Materials

- **Primary tool:** any item tagged `base:sharpknife` (kitchen/hunting knives) or `base:meatcleaver` — kept (`mode:keep`) but must be non-dull.
- **Drilling:** `base:drillwood` / `base:drillmetal` / `base:drillwoodpoor` tags (5 recipes — bead/jewelry drilling).
- **Raw materials:** `TreeBranch2`, `Handle`, `LongStick`/`LongStick_Broken`, `WoodenStick2`, `LongHandle`/`LongHandle_Broken`, `Plunger` (all wood sources), planks, pig tusks, animal teeth.
- **Output items** (verified in `items/normal.txt`): `CrudeWoodenTongs` (line 891), `WoodenFork` (4368), `WoodenSpoon` (4381).

## 7. Cross-Skill Support

Carving is a **component factory** for other B42 skills:

| Carved item | Feeds |
|---|---|
| `CarveKnappingTools` | Knapping (flint tool crafting) |
| `CarveClaySculptingTool` | Pottery (clay shaping) |
| `CarveKnittingNeedles` | Tailoring (knitting sub-tree) |
| `CarveBucket` | Bucket family / Masonry cement buckets |
| `CarveLongHandle` + handles | Improvised weapons (spears, hammers) |
| `CarveTrowel` | Masonry / gardening |
| `MakeCrudeWoodenTongs` | Blacksmithing / glassmaking heat handling |

## 8. Character Synergies

Verified from `character_traits.txt` / `character_professions.txt`:

| Source | Cost | Effect |
|---|---|---|
| Trait `base:whittler` ("Whittler") | 2 | `XPBoosts = Carving=2`; grants 18 recipes incl. `CarveBat`, `CarveBucket`, `CarveGoblets`, bone needles/hooks |
| Trait `base:handy` ("Handy") | 8 | `XPBoosts = Carving=1;Maintenance=1;Masonry=1;Woodwork=1`; grants weapon-reinforcement recipes |
| Trait `base:wildernessknowledge` | 8 | `XPBoosts = ...;Carving=1`; grants stone/bone tools + carving recipes |
| Profession `base:parkranger` (Park Ranger) | −4 | `XPBoosts = Trapping=1;Doctor=1;PlantScavenging=1;FlintKnapping=1;Carving=1` |

## 9. Pitfalls

- **No dedicated Carving workstation** — carving is `InHandCraft`; do not search entity craft benches for carving recipes.
- **`CarveBat` and the dual-gated tier** require *both* `Carving` and `Tailoring` — a pure carving build cannot reach the bat/goblet tier.
- **`OnCreate.minorCondition`** means output quality varies — carvings are not guaranteed max condition.
- **Knife sharpness matters:** recipes require `IsNotDull`; a dull knife fails the input match.
- The `base:carvelongstick` tag (used by `CarveLongStick` output) is a *tool tag* for follow-on recipes — carved long sticks are intermediate materials, not just decor.

## 10. Modding Opportunities

1. **New carving recipes:** copy any block, set `category = Carving`, keep `Tags = InHandCraft`, add `SkillRequired`/`xpAward` to slot into the ladder (`Carving:1`–`9`).
2. **New knife-tag tools:** any item with `base:sharpknife` or `base:meatcleaver` tags automatically works in 26/32 recipes — add the tag to custom blades.
3. **Cross-skill components:** carve new intermediates (e.g. a carved mold) and reference them from pottery/blacksmith recipes.
4. **Trait hooks:** extend `base:whittler`'s `GrantedRecipes` list to auto-grant custom recipes at character creation.
5. **Jewelry/social items:** the tusk/tooth/necklace tier is the natural place for custom decorative or trading items.
