---
title: "Project Zomboid Build 42 Tailoring Research"
build: "42.20"
tags: [pz, modding, build42, tailoring]
---

# Project Zomboid Build 42 — Tailoring Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for tailoring: the 172-recipe tailoring family, needle/thread mechanics, patching, conversions, knitting, leatherworking, and dyeing. All claims verified against the five `recipes_tailoring*.txt` files and `items/clothing.txt`; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Tools: Needle, Thread & Scissors](#3-tools-needle-thread--scissors)
4. [Patching & Reinforcement](#4-patching--reinforcement)
5. [Clothing Conversion & Crafting](#5-clothing-conversion--crafting)
6. [Knitting](#6-knitting)
7. [Leather & Hide](#7-leather--hide)
8. [Dyeing](#8-dyeing)
9. [Armor Upgrades](#9-armor-upgrades)
10. [Skill Gating](#10-skill-gating)
11. [Modding Opportunities](#11-modding-opportunities)

---

## 1. Overview

- Tailoring is the **largest recipe family in the game** — **172 recipes across 5 files** (verified counts: tailoring 40, armor 30, garbageTapeAndTarp 33, knitting 9, leatherAndHide 60).
- The core loop: rip clothing into **fabric strips** (`RippedSheets`, `DenimStrips`, `LeatherStrips`, `BurlapPiece`), then sew them into new clothing or **patch** existing items to raise defense.
- Tools: **sewing needle/awl** + **thread/twine** + **scissors** (with `SharpnessCheck`/`IsNotDull` flags).
- `SkillRequired` starts at `Tailoring:1` and scales; `AutoLearnAll`/`AutoLearnAny` drive discovery; skill books ladder at 1/3/5/7/9 (see Crafting & Skills doc).
- Dyeing is **fluid-driven** (`-fluid 0.2 [Dye] flags[InheritColor]` + `tags[base:canbedyed]`).

---

## 2. Core Files

| File | Recipes | Role |
|------|:-------:|------|
| `scripts/generated/recipes/recipes_tailoring.txt` | 40 | Core: patch, convert, craft, dye |
| `scripts/generated/recipes/recipes_tailoring_armor.txt` | 30 | Armor upgrades (padded/stitched layers) |
| `scripts/generated/recipes/recipes_tailoring_garbageTapeAndTarp.txt` | 33 | Tape/tarp emergency repairs |
| `scripts/generated/recipes/recipes_tailoring_knitting.txt` | 9 | Knitted items (yarn) |
| `scripts/generated/recipes/recipes_tailoring_leatherAndHide.txt` | 60 | Leather/hide sewing |
| `scripts/generated/items/clothing.txt` | 1395 items | All clothing + fabric tags (`base:ripclothingcotton`, `base:canbedyed`) |
| `scripts/generated/items/drainable.txt` | — | `Thread` (2264), `Thread_Aramid` (2280), `Thread_Sinew` (2294) |
| `scripts/generated/items/normal.txt` | — | `Needle` (10741), `Needle_Bone` (10755), `KnittingNeedles` (10705, `_Bone` 10717, `_Wood` 10729) |

---

## 3. Tools: Needle, Thread & Scissors

- **`tags[base:sewingneedle]`** — required by most sewing recipes; awl (`base:awl`) is an alternative/companion (`tags[base:sewingneedle;base:awl]`).
- **`tags[base:thread]`** — consumed per recipe (1–5 units); `base:twine` is an accepted substitute (`tags[base:thread;base:twine]`).
- **`tags[base:scissors;base:sharpknife]`** — cutting, gated by `flags[IsNotDull;MayDegradeLight]`; scissors specifically use `flags[SharpnessCheck;IsNotDull]`.
- Thread types (verified): `Thread`, `Thread_Aramid`, `Thread_Sinew` — stronger variants for advanced recipes.
- Knitting uses `tags[base:knittingneedles]` + `Yarn` (with `InheritColor`).

---

## 4. Patching & Reinforcement

Verified recipe fields (`recipes_tailoring.txt`):

| Recipe | SkillRequired | Key inputs | Notes |
|--------|:------------:|-----------|-------|
| `MakeMattress` | Tailoring:2 | sewingneedle + 5 thread + 5 Sheet + 5 `base:pillow` | XP 13 |
| patch recipes | Tailoring:1–2 | sewingneedle + thread + RippedSheets/LeatherStrips | line 71–196 |

The patch pattern (verified at `recipes_tailoring.txt:71–75`):

```txt
SkillRequired = Tailoring:2,
inputs
{
    item 1 tags[base:sewingneedle] mode:keep,
    item 5 tags[base:thread],
    ...
}
```

Ripped-sheet items and fabric rolls appear with count prefixes and mappers (`5 [Base.RippedSheets;2:Base.BurlapPiece] … mappers[ragType] flags[IsExclusive]`) — patch tier scales with Tailoring level, raising `ScratchDefense`/`BiteDefense` on the patched garment.

---

## 5. Clothing Conversion & Crafting

- `ConvertIntoFingerlessGloves` (verified, `recipes_tailoring.txt`): scissors (`SharpnessCheck;IsNotDull`) + leather gloves (`flags[IsNotWorn;CopyClothing]` + `gloveColor` mapper) → fingerless variants.
- `CutSheet`: `FabricRoll_Cotton` (`InheritColor`) → `Sheet`.
- `SewClothSatchel` (Tailoring:2, `AutoLearnAll = Tailoring:3`, XP 13): 2 fabric rolls (`fabricType` mapper → Burlap/Cotton/Denim satchels) + 2 thread.
- Generic pattern: `mappers[<Type>]` + `itemMapper` turn one recipe into a family of color/material variants; `InheritColor`/`CopyClothing` propagate the input's color/state.

---

## 6. Knitting

`recipes_tailoring_knitting.txt` (9 recipes, verified):

```txt
craftRecipe KnitBalaclavaFace
{
    timedAction = Knitting,
    time = 200,
    Tags = InHandCraft,
    category = Tailoring,
    SkillRequired = Tailoring:3,
    xpAward = Tailoring:20,
    NeedToBeLearn = true,
    inputs
    {
        item 1 tags[base:knittingneedles] mode:keep,
        item 1 [Base.Yarn] flags[InheritColor],
    }
    outputs
    {
        item 1 Base.Hat_BalaclavaFace,
    }
}
```

- `KnitBalaclavaFull` requires `Tailoring:4` (XP 30); other knitted items follow at increasing levels.
- `timedAction = Knitting`, `Tags = InHandCraft` — knit anywhere; 1 yarn + needles.

---

## 7. Leather & Hide

`recipes_tailoring_leatherAndHide.txt` (60 recipes, verified):

- Leather inputs use dedicated tags: `tags[base:leathercrudetannedsmall;base:leatherfurtannedsmall]` (small) and `…medium` (medium) — **leather is tanning-tiered**.
- `SewHideBandeau` (Tailoring:1, XP 11): scissors/sharpknife + needle/awl + small tanned/fur hide (`HideType` mapper → `Bandeau_FaunHide` or default `Bandeau_Hide`) + thread/twine.
- `SewHideSack` (Tailoring:1): medium hides + needle/awl + thread/twine → hide sack.
- Raw hide prep lives in `entities/animals/craftRecipes/recipes_leather_prep*.txt` (see Entities/Trapping docs) — the tanning chain feeds these sewing recipes.

---

## 8. Dyeing

`DyeClothes` (verified, `recipes_tailoring.txt`):

```txt
craftRecipe DyeClothes
{
    Icon = Item_Yarn,
    timedAction = MixingBucket,
    time = 150,
    Tags = AnySurfaceCraft,
    OnCreate = RecipeCodeOnCreate.inheritColorFromMaterial,
    category = Tailoring,
    inputs
    {
        item 1 [Base.Bucket;Base.BucketEmpty;Base.BucketWaterDebug;Base.BucketCarved] mode:keep,
        -fluid 10.0 categories[Water] mode:mixture,
        item 1 [*] mode:keep,
        -fluid 0.2 [Dye] flags[InheritColor],
        item 1 tags[base:canbedyed] mode:keep flags[IsNotWorn],
    }
    outputs { }
}
```

- Bucket + **10.0 liters water** + **0.2 Dye fluid** (`InheritColor`) + `tags[base:canbedyed]` item (not worn).
- `OnCreate = inheritColorFromMaterial` — color is copied from the dye into the garment.

---

## 9. Armor Upgrades

`recipes_tailoring_armor.txt` (30 recipes) — padded/stitched armor layers on clothing; combined with `recipes_metalWelding_Armor.txt` for welded armor (see Blacksmithing doc). Common mechanics: `base:thread` + `Buckle` + `LeatherStrips` inputs, `Tailoring` skill requirements, defense upgrades on the armor slot items.

---

## 10. Skill Gating

- `SkillRequired = Tailoring:1` (basic) → `Tailoring:4` (advanced knitting).
- `AutoLearnAll = Tailoring:3` (e.g. `SewClothSatchel`) vs `AutoLearnAny` — discovery patterns.
- `xpAward = Tailoring:6–68` (verified range across files; e.g. 11–13 common, 20–30 knitting, up to 68/55/45 in leather/armor files).
- Skill-book ladder: 5 books at `LvlSkillTrained = 1/3/5/7/9` (`SkillTrained = Tailoring`).
- Tailoring is the **joint skill** in welded armor recipes (`SkillRequired = MetalWelding:N;Tailoring:1`).

---

## 11. Modding Opportunities

1. **New clothing recipes.** Follow the `mappers[type]` + `itemMapper` + `InheritColor`/`CopyClothing` pattern for color/material variants.
2. **Fabric families.** New `base:ripclothing<Fabric>` and `base:canbedyed` tags make custom fabrics work with existing ripping/dyeing recipes.
3. **Patch tiers.** Extend patch recipes with `SkillRequired = Tailoring:N` + `base:thread` counts for higher defense layers.
4. **Custom dyes.** New dye fluids + `-fluid` inputs replicate the bucket dye pipeline.
5. **Tanning tiers.** Add `base:leather<grade>tanned<size>` tags and hide-sewing recipes to extend the leather chain.
6. **Knitting line.** Yarn items + `Knitting` timed-action recipes scale with `Tailoring` levels.

---
