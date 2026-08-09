---
title: "Project Zomboid Build 42 Clothing & Armor Research"
build: "42.20"
tags: [pz, modding, build42, clothing, armor]
---

# Project Zomboid Build 42 — Clothing & Armor Research

> **Scope:** Build 42.20 (stable). Clothing/armor item definitions, defense properties, fabric/insulation data, tailoring recipes, and the clothing asset pipeline. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Clothing Item Anatomy](#3-clothing-item-anatomy)
4. [Armor & Defense Properties](#4-armor--defense-properties)
5. [Body Locations & Layers](#5-body-locations--layers)
6. [Fabric & Environmental Properties](#6-fabric--environmental-properties)
7. [Tailoring Recipes](#7-tailoring-recipes)
8. [Clothing Assets](#8-clothing-assets)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- **1,395 clothing items** are defined in `media/scripts/generated/items/clothing.txt` — every wearable, bandage, accessory, and body mod in the game.
- Clothing is data-driven: protection (`ScratchDefense`, `BiteDefense`, `BulletDefense`), insulation, wind/water resistance, movement modifiers, and repair/hole behavior are all item properties.
- **`BodyLocation`** pins each item to a character slot (`base:dress`, `base:longdress`, …); **`ClothingItem`** binds it to the 3D outfit definition; **`BloodLocation`** tells the game which body regions get bloodied.
- Tailoring (172 recipes across 5 files) is the repair/upgrade loop: ripping, patching, padding, dyeing, and converting.
- 3D appearance lives in `media/clothing/` (XML definitions + texture/model folders).

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/items/clothing.txt` | 1,395 clothing item definitions |
| `media/scripts/generated/items/container.txt` | Clothing containers (bags) |
| `media/scripts/generated/recipes/recipes_tailoring.txt` | 40 tailoring recipes |
| `media/scripts/generated/recipes/recipes_tailoring_armor.txt` | 30 armor-upgrade recipes |
| `media/scripts/generated/recipes/recipes_tailoring_garbageTapeAndTarp.txt` | 33 tape/tarp repairs |
| `media/scripts/generated/recipes/recipes_tailoring_knitting.txt` | 9 knitting recipes |
| `media/scripts/generated/recipes/recipes_tailoring_leatherAndHide.txt` | 60 leather/hide recipes |
| `media/clothing/` | `clothing.xml`, `clothingItems/`, `clothingDecals/` (3D model data) |

---

## 3. Clothing Item Anatomy

### Block anatomy (verified, `clothing.txt`)

```txt
item Dress_Knees
{
    DisplayCategory = Clothing,
    ItemType = base:clothing,
    Icon = DressShortWhite,
    BloodLocation = ShortsShort;Shirt,
    BodyLocation = base:dress,
    ClothingItem = Dress_Knees,
    FabricType = Cotton,
    Insulation = 0.15,
    WindResistance = 0.1,
    WorldStaticModel = Dress_Short_Ground,
    Tags = base:canbedyed;base:ripclothingcotton;base:noragdoll,
}

item Dress_Long
{
    ...
    BodyLocation = base:longdress,
    Insulation = 0.3,
    RunSpeedModifier = 0.9,          -- long dress slows the wearer
    WindResistance = 0.2,
    ...
}
```

### Display categories (verified counts)

| DisplayCategory | Count | | DisplayCategory | Count |
|----------------|:-----:|-|----------------|:-----:|
| Clothing | 481 | | Wound | 60 |
| Accessory | 328 | | Bandage | 34 |
| ProtectiveGear | 290 | | Appearance | 27 |
| Memento | 87 | | MaleBody | 3 |
| ZedDmg | 74 | | FirstAid | 3 |

---

## 4. Armor & Defense Properties

Verified property frequencies across all 1,395 items:

| Property | Count | Meaning |
|----------|:-----:|---------|
| `ScratchDefense` | 607 | Scratch/zombie-claw defense value |
| `BiteDefense` | 421 | Bite defense value |
| `BulletDefense` | 101 | Gunshot defense value |
| `WeaponHitArmourSound` | 213 | Sound when hit by weapons |
| `BulletHitArmourSound` | 213 | Sound when hit by bullets |
| `NeckProtectionModifier` | 62 | Extra neck protection |
| `CanHaveHoles` | 525 | Can be holed/damaged by attacks |
| `ConditionMax` / `ConditionLowerChanceOneIn` | 200/200 | Durability model |
| `SpawnWith` | 48 | Chance/items spawned with |

ProtectiveGear (290 items) is the armor-heavy category (kevlar vests, helmets, pads). Defense values are plain numbers — mods tune protection purely in data.

---

## 5. Body Locations & Layers

- **`BodyLocation`** (present on all 1,395 items) pins the item to a body slot. Verified values include `base:dress`, `base:longdress`, plus the standard B42 slots for shirts, trousers, jackets, hats, masks, etc.
- **`ClothingItem`** (all 1,395 items) references the 3D outfit definition (drawn from `media/clothing/clothingItems/`).
- **`BloodLocation`** (864 items) lists the blood regions the item exposes (e.g. `ShortsShort;Shirt`, `Trousers;Shirt`) — this drives blood visuals per body part.
- **`ClothingItemExtra` / `ClothingItemExtraOption` / `ClothingExtraSubmenu`** (338 items) define interchangeable attachments (straps, patches, trims) selectable in the UI.
- **`Cosmetic = true`** (157 items) marks purely cosmetic items.

---

## 6. Fabric & Environmental Properties

| Property | Count | Meaning |
|----------|:-----:|---------|
| `Insulation` | 856 | Heat retention (higher = warmer) |
| `WindResistance` | 758 | Blocks windchill |
| `WaterResistance` | 186 | Rain protection |
| `FabricType` | 414 | Fabric family (e.g. `Cotton`) |
| `DiscomfortModifier` | 343 | Comfort penalty over time |
| `RunSpeedModifier` | 279 | Movement speed multiplier |
| `CombatSpeedModifier` | 167 | Combat speed multiplier |
| `VisionModifier` | 83 | Vision range penalty |
| `ChanceToFall` | 253 | Trip chance |
| `BreakSound` | 255 | Rip/break audio |

Fabric tag families (verified in item `Tags`): `base:ripclothingcotton` (rippable cotton), `base:canbedyed` (dyeable), `base:noragdoll` (no ragdoll physics). These tags are the hooks used by tailoring recipes.

---

## 7. Tailoring Recipes

### The tailoring recipe family (verified counts)

| File | Recipes | Primary actions |
|------|:-------:|-----------------|
| recipes_tailoring.txt | 40 | Convert, cut, dye |
| recipes_tailoring_armor.txt | 30 | Armor upgrades |
| recipes_tailoring_garbageTapeAndTarp.txt | 33 | Tape/tarp repairs |
| recipes_tailoring_knitting.txt | 9 | Knitted items |
| recipes_tailoring_leatherAndHide.txt | 60 | Leather/hide crafting |

### Recipe examples (verified)

```txt
craftRecipe ConvertIntoFingerlessGloves
{
    timedAction = SewingCloth,
    time = 60,
    Tags = AnySurfaceCraft,
    category = Tailoring,
    inputs
    {
        item 1 tags[base:scissors] mode:keep flags[SharpnessCheck;IsNotDull],
        item 1 [Base.Gloves_LeatherGlovesBlack;Base.Gloves_LeatherGlovesBrown;Base.Gloves_LeatherGloves] flags[IsNotWorn;CopyClothing] mappers[gloveColor],
    }
    outputs
    {
        item 1 mapper:gloveColor,
    }
    itemMapper gloveColor
    {
        Base.Gloves_FingerlessLeatherGloves = Base.Gloves_LeatherGloves,
        Base.Gloves_FingerlessLeatherGloves_Black = Base.Gloves_LeatherGlovesBlack,
        Base.Gloves_FingerlessLeatherGloves_Brown = Base.Gloves_LeatherGlovesBrown,
    }
}
```

Notes:

- Scissors are required with `flags[SharpnessCheck;IsNotDull]` (sharpness matters).
- `flags[IsNotWorn;CopyClothing]` — the input must not be worn, and the result **copies** the input's clothing state.
- `DyeClothes` uses a bucket + **fluid input** (`-fluid 0.2 [Dye] flags[InheritColor]`) plus a `base:canbedyed` item, with `OnCreate = RecipeCodeOnCreate.inheritColorFromMaterial` — the color-dye pipeline is fluid + data driven.
- `CutSheet` cuts `Base.FabricRoll_Cotton` (with `InheritColor`) into `Base.Sheet`.

---

## 8. Clothing Assets

`media/clothing/` contains 4 top-level entries (verified):

| Path | Purpose |
|------|---------|
| `clothing.xml` | **Outfit manager** — named outfits (`m_FemaleOutfits` blocks) with GUIDs, per-item `probability`, and `subItems` layering |
| `clothingItems/` | **1,795 per-item definitions** (`<clothingItem>` XML, one per wearable) |
| `clothingDecals/` + `clothingDecals.xml` | Decal textures/definitions (logos, patches) |

### Per-item XML anatomy (`clothingItems/Apron_BBQ.xml`, verified)

```xml
<clothingItem>
	<m_MaleModel>skinned\clothes\bob_apron</m_MaleModel>
	<m_FemaleModel>skinned\clothes\kate_apron</m_FemaleModel>
	<m_GUID>00c24ea0-5288-41c8-b56d-63ceb9344e77</m_GUID>
	<m_Static>false</m_Static>
	<m_AllowRandomHue>false</m_AllowRandomHue>
	<m_AllowRandomTint>false</m_AllowRandomTint>
	<m_AttachBone></m_AttachBone>
	<textureChoices>clothes\apron\Apron_BBQ_1</textureChoices>
	<textureChoices>clothes\apron\Apron_BBQ_2</textureChoices>
	<textureChoices>clothes\apron\Apron_BBQ_3</textureChoices>
</clothingItem>
```

- `m_MaleModel` / `m_FemaleModel` — skinned mesh paths per gender.
- `textureChoices` — texture variants (randomized per `m_AllowRandomHue/Tint` flags).
- The `ClothingItem` id in `clothing.txt` resolves to a file in `clothingItems/`; the `Icon`/`WorldStaticModel` item properties reference the UI and ground-model assets respectively.

---

## 9. Modding Opportunities

1. **New clothing item.** Add an `item` block with `BodyLocation`, `ClothingItem`, `FabricType`, `Insulation`, `WindResistance`, and defense values — it immediately integrates with tailoring tags (`base:ripclothingcotton`, `base:canbedyed`).
2. **Armor tuning.** Adjust `ScratchDefense`/`BiteDefense`/`BulletDefense`, `NeckProtectionModifier`, and `ConditionLowerChanceOneIn` for rebalanced protection.
3. **Layered attachments.** Use `ClothingItemExtra`/`ClothingItemExtraOption`/`ClothingExtraSubmenu` to add swappable straps/patches to existing items.
4. **New tailoring recipes.** Add `SewingCloth`-timed recipes with scissors + `flags[SharpnessCheck;IsNotDull]` and `CopyClothing` for item conversions; `itemMapper` handles color/fabric variants.
5. **Dyeing systems.** Extend `DyeClothes` (fluid `Dye` + `InheritColor` + `OnCreate`) to dye new fabrics or add custom dye fluids.
6. **Fabric families.** New `base:ripclothing<Fabric>` tags make your fabrics rippable by existing tailoring recipes.
7. **Clothing assets.** Add entries under `media/clothing/clothingItems/` + `clothing.xml` and reference them via `ClothingItem` for full 3D outfits.

---
