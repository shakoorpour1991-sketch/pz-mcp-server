---
title: Project Zomboid Build 42 Bone Research
build: "42.20"
tags: [pz, modding, build42, bone]
---

# Build 42 — Bone Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the **Bone** crafting family: 35 recipes in `media/scripts/generated/recipes/recipes_bone.txt`. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents
1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Recipe Catalog](#3-recipe-catalog)
4. [Recipe Anatomy](#4-recipe-anatomy)
5. [Skill Gating & XP](#5-skill-gating--xp)
6. [Tools & Materials](#6-tools--materials)
7. [The Bone Item Chain](#7-the-bone-item-chain)
8. [Character Synergies](#8-character-synergies)
9. [Pitfalls](#9-pitfalls)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

- **Bone is a recipe category, not a skill.** The 35 recipes in `recipes_bone.txt` cross-train **`Carving`**, **`Maintenance`** and **`Tailoring`**, and are gated by **`Strength`** for the skull-smashing recipes.
- Bone crafting converts animal by-products (`AnimalBone`, `LargeAnimalBone`, skulls, jawbones) into weapons (clubs, hatchets, jawbone axes), tools (knives, awls, needles, fishing hooks) and jewelry (skull/bird-skull necklaces, bone beads).
- It is the **bone-age weapon tier** between knapping and blacksmithing — no furnace, forge or metal required.
- Recipe count: **35 craftRecipes** (verified) — the largest single "survivalist" family outside tailoring/metal.

## 2. Core Files

| File | Role |
|---|---|
| `scripts/generated/recipes/recipes_bone.txt` | All 35 bone recipes |
| `scripts/generated/items/weapon.txt` | Bone weapon items: `AnimalBone` (1137), `LargeAnimalBone` (3217), `BoneClub` (1507), `BoneClub_Spiked` (1551), `JawboneBovide` (3124), `JawboneBovide_Club` (3169), `JawboneBovide_Morningstar` (8231), `JawboneBovide_Axe` (10139) |
| `scripts/generated/characters/character_traits.txt` | `base:whittler`, `base:wildernessknowledge` — grant bone recipes |
| `scripts/generated/items/literature.txt` | Skill books for the cross-trained skills (`Carving`, `Maintenance`, `Tailoring`) |
| `scripts/generated/recipes/recipes_knapping.txt` | Related stone-age tree (see Knapping sub-doc) |

## 3. Recipe Catalog

All 35 `craftRecipe` blocks (verified):

| # | Recipe | Category | XP / gating |
|---|--------|----------|-------------|
| 1 | `MakeBoneClub` | Weaponry | `Maintenance:10`, req `Maintenance:1` |
| 2 | `MakeBoneHatchet` | Weaponry | hatchet head + handle |
| 3 | `MakeBoneHatchetHead` | Weaponry | `AutoLearnAll Maintenance:3;SmallBlunt:1` |
| 4 | `MakeJawboneAxe` | Weaponry | jawbone → axe |
| 5 | `MakeJawboneClub` | Weaponry | jawbone → club |
| 6–8 | `SharpenBone` / `SharpenLongBone` / `SharpenJawbone` | — | whetstone/file + `Carving` |
| 9 | `MakeDullBoneKnife` | — | bone → dull knife |
| 10–11 | `MakeBoneSpoon` / `MakeBoneFork` | — | utensils |
| 12 | `MakeBoneSewingNeedle` | — | `Tailoring:9` XP — feeds Tailoring |
| 13 | `MakeBoneFishingHook` | — | feeds Fishing |
| 14 | `BoneSpikeWeapon` | Weaponry | spiked bone weapon |
| 15–21 | `SmashBone`, `SmashJawbone`, `SmashCowSkull`, `SmashHerbivoreSkull`, `SmashStagSkull`, `SmashPigSkull`, `SmashSmallHerbivoreSkull` | — | **Strength-gated** skull breaking |
| 22 | `MakeBoneAwl` | — | hide/leather working tool |
| 23–26 | `MakeAnimalSkullNecklace`, `MakeAnimalSkullsNecklace`, `MakeLongAnimalSkullNecklace`, `MakeLongAnimalSkullsNecklace` | — | jewelry |
| 27–31 | `MakeBirdSkullEarrings`, `MakeBirdSkullNecklace`, `MakeBirdSkullsNecklace`, `MakeLongBirdSkullNecklace`, `MakeLongBirdSkullsNecklace` | — | bird-skull jewelry (uses `base:birdskull` tag) |
| 32–33 | `MakeLargeBoneBead` / `MakeLargeBoneBeads` | — | drilled beads |
| 34 | `CarveFleshingTool` | — | hide processing |
| 35 | `CarveWhistle` | — | signalling item |

## 4. Recipe Anatomy

```text
    craftRecipe MakeBoneClub
    {
        time = 200,
        Tags = AnySurfaceCraft,
        category = Weaponry,
        xpAward = Maintenance:10,
        SkillRequired = Maintenance:1,
        NeedToBeLearn = true,
        timedAction = CraftWeapon1H,
        AutoLearnAll = Maintenance:3;SmallBlunt:1,
        inputs
        {
            item 1 [Base.AnimalBone;Base.LargeAnimalBone] mappers[ClubMapper] flags[Prop2;InheritCondition],
            item 2 [Base.LeatherStrips],
        }
        outputs
        {
            item 1 mapper:ClubMapper,
        }
        itemMapper ClubMapper
        {
            Base.BoneClub = Base.AnimalBone,
            Base.LargeBoneClub = Base.LargeAnimalBone,
            default = Base.LargeBoneClub,
        }
    }
```
*(`recipes_bone.txt` lines 3–31)*

Structural facts:
- **`NeedToBeLearn = true` + `AutoLearnAll`** — club-making is a learned recipe, auto-granted at `Maintenance:3` + `SmallBlunt:1`.
- **`itemMapper`** converts input bone size into output club size (`AnimalBone → BoneClub`, `LargeAnimalBone → LargeBoneClub`).
- **`AnySurfaceCraft`** — no workbench needed.
- `CraftWeapon1H` timed action shared with improvised-weapons crafting.

## 5. Skill Gating & XP

**`SkillRequired` distribution (verified):** `Tailoring:1` ×9, `Carving:1` ×5, `Carving:2` ×4, `Strength:2` ×3, `Carving:3` ×3, `Strength:4` ×2, `Maintenance:1` ×2, `Strength:1`/`Strength:3`/`Maintenance:2`/`Maintenance:3`/`Carving:4`/`Carving:5`/`Carving:6` ×1 each.

**`xpAward` distribution (verified):** `Tailoring:9` ×9 (bone sewing needles/leatherwork), `Carving:20` ×4, `Carving:10` ×4, `Carving:30` ×3, `Maintenance:10` ×2, `Carving:40` ×2, `Maintenance:20`/`Maintenance:30` ×1 each.

- **Strength gates skull-smashing** (`Smash*` recipes) — a purely "skill" build cannot break skulls without STR requirements.
- No `Bone` skill book exists — level up through Carving/Maintenance/Tailoring books (`items/literature.txt`).

## 6. Tools & Materials

**Tool tags across the 35 recipes (verified counts):**
- `tags[base:whetstone;base:file]` ×11 — sharpening (bones, jawbones)
- `tags[base:hammer;base:sledgehammer;base:clubhammer;base:hammerstone]` ×7 — smashing
- `tags[base:sharpknife]` ×6
- `tags[base:birdskull]` ×5 — bird-skull jewelry input tag
- `tags[base:sharpknife;base:meatcleaver]` ×4
- `tags[base:saw;base:smallsaw;base:crudesaw;base:sharpknife;base:meatcleaver]` ×4 — cutting skulls/bones
- `tags[base:drillwood;base:drillmetal;base:drillwoodpoor]` ×3 — bead drilling
- `tags[base:pliers]` ×1, `tags[base:choptree;...;sharpknife]` ×1

**Materials:** `AnimalBone`, `LargeAnimalBone`, `LeatherStrips` (×2 per club), cow/herbivore/stag/pig/small-herbivore skulls, bird skulls, jawbones.

## 7. The Bone Item Chain

```text
AnimalBone / LargeAnimalBone
  ├─ SharpenBone/SharpenLongBone  →  sharpened bone (weapon cores)
  ├─ MakeDullBoneKnife            →  BoneKnife (then sharpen → knife)
  ├─ MakeBoneClub / LargeBoneClub →  + LeatherStrips (club tier)
  ├─ MakeBoneSewingNeedle         →  Tailoring needle (Tailoring:9 XP)
  ├─ MakeBoneFishingHook          →  fishing hook
  ├─ MakeBoneAwl                  →  hide-working awl
  └─ SmashBone (STR)              →  bone fragments for beads/spikes
Skulls (cow/stag/pig/herbivore) — Smash* (STR) → skull fragments + skull jewelry
Jawbone (JawboneBovide) → MakeJawboneClub / MakeJawboneAxe / SharpenJawbone
Bird skulls (base:birdskull tag) → earrings + 4 necklace variants
```

## 8. Character Synergies

| Source | Cost | Effect (verified) |
|---|---|---|
| Trait `base:whittler` | 2 | `Carving=2`; grants `SharpenBone`, `SharpenLongBone`, `SharpenJawbone`, `MakeBoneFishingHook`, `MakeBoneSewingNeedle`, `MakeBoneHatchetHead`, `MakeBoneAwl`, `MakeLargeBoneBead(s)`, `MakeBoneFork`, `CarveFleshingTool` |
| Trait `base:wildernessknowledge` | 8 | grants `SharpenLongBone`, `MakeBoneFishingHook`, `MakeBoneSewingNeedle`, `MakeBoneAwl`, `MakeBoneClub`, `MakeBoneHatchetHead`, `MakeJawboneAxe` |

The Whittler trait is the single biggest bone-tree enabler — it auto-grants 10 bone recipes at character creation.

## 9. Pitfalls

- **`Bone` is not a perk** — do not look for `Bone` in `Perks.*` or skill books; XP goes to Carving/Maintenance/Tailoring.
- **Strength requirements** are real gates — the `Smash*` recipes demand `Strength:2`–`4`; weak characters cannot break skulls.
- **Jawbone naming:** the item is `JawboneBovide` (bovine jawbone); recipes name variants `JawboneBovide_Club/_Axe/_Morningstar`.
- **`NeedToBeLearn` recipes** (e.g. `MakeBoneClub`) are *not* craftable until learned or auto-granted — no recipe book exists for them, so discovery happens via `AutoLearnAll`/traits.
- Bone weapons are low-durability early-game items; several are `Weaponry`-category, so they compete with improvised weapons in the radial menu.

## 10. Modding Opportunities

1. **New bone weapons:** copy `MakeBoneClub`, add a new `itemMapper` entry for a custom bone type, or a new output + `AutoLearnAll` gate.
2. **Custom skull loot:** add `Smash<NewSkull>` recipes mirroring the existing `Smash*` blocks (STR-gated) for modded animals.
3. **Tag-driven tools:** any item tagged `base:whetstone`, `base:hammerstone`, or `base:birdskull` plugs into the existing recipe inputs — extend the tag lists for mod tools.
4. **Trait hooks:** extend `base:whittler`'s `GrantedRecipes` to auto-grant custom bone recipes.
5. **Cross-tree glue:** bone sewing needles/awls are inputs to tailoring and leatherworking — new hide recipes can consume them.
