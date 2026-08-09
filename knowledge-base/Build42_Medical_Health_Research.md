---
title: "Project Zomboid Build 42 Medical & Health Research"
build: "42.20"
tags: [pz, modding, build42, medical, health]
---

# Project Zomboid Build 42 — Medical & Health Research

> **Scope:** Build 42.20 (stable). Medical items, the medical recipe set (`recipes_medical.txt`), and the health-system Lua. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Medical Items](#3-medical-items)
4. [Medical Recipes](#4-medical-recipes)
5. [HealthSystem Lua](#5-healthsystem-lua)
6. [Wound & Bandage Items](#6-wound--bandage-items)
7. [Modding Opportunities](#7-modding-opportunities)

---

## 1. Overview

- Medical gameplay is split between **data** (items + recipes) and a small **Lua hook** (`lua/server/HealthSystem/HealthUpdate.lua`, 45 lines).
- Medical items use the `Medical = true` marker property, the `base:consumable` tag, and (for applied items) `ItemType = base:clothing` on per-body-part bandages.
- The medical recipe set (9 recipes in `recipes_medical.txt`) covers poultices (herbal, with `AutoLearnAny` skill gating), rag/bandage disinfection and cleaning (fluid-driven), splints, alcohol-soaked cotton, and water purification.
- Fluid integration is central: alcohol/water are `-fluid` inputs; purification and heat checks use `OnTest`/`OnCreate` callbacks (`RecipeCodeOnTest.purifyWater`, `RecipeCodeOnTest.hotFluidContainer`).

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/recipes/recipes_medical.txt` | 9 medical recipes |
| `media/lua/server/HealthSystem/HealthUpdate.lua` | Health update hook (window-scratch logic, body damage) |
| `media/scripts/generated/items/normal.txt` | `Bandaid`, `CottonBalls`, `Disinfectant`, `Splint`, cataplasms |
| `media/scripts/generated/items/drainable.txt` | `Pills`, `PillsAntiDep`, `PillsBeta`, `PillsSleepingTablets`, `AlcoholWipes`, `WaterPurificationTablets` |
| `media/scripts/generated/items/container.txt` | `FirstAidKit` container |
| `media/scripts/generated/items/clothing.txt` | Per-body-part `Bandage_*` items (line ~21796+) |

---

## 3. Medical Items

### Item inventory (verified paths)

| Item | Path:line | Type | Notes |
|------|-----------|------|-------|
| `Splint` | normal.txt:8290 | normal | `Medical = true`, Tooltip `Tooltip_Splint`, MetalValue 1.0 |
| `Bandaid` | normal.txt:8102 | normal | — |
| `CottonBalls` | normal.txt:8241 | normal | — |
| `Disinfectant` | normal.txt:8266 | normal | — |
| `ComfreyCataplasm` | normal.txt (~8310) | normal | Herbal poultice |
| `Pills` | drainable.txt:1414 | drainable | `Medical = true`, `UseDelta = 0.1`, `Tags = base:consumable` |
| `PillsAntiDep` | drainable.txt:1429 | drainable | Antidepressants |
| `PillsBeta` | drainable.txt:1444 | drainable | Beta blockers |
| `PillsSleepingTablets` | drainable.txt:1459 | drainable | Sleeping pills |
| `AlcoholWipes` | drainable.txt:1506 | drainable | Antiseptic wipes |
| `WaterPurificationTablets` | drainable.txt:276 | drainable | Purification |
| `FirstAidKit` | container.txt:707 | container | Medical container |

### Example blocks (verified)

```txt
item Splint
{
    DisplayCategory = FirstAid,
    ItemType = base:normal,
    Weight = 1.0,
    Icon = Splint,
    Medical = true,
    MetalValue = 1.0,
    Tooltip = Tooltip_Splint,
    WorldStaticModel = Splint,
}

item Pills
{
    DisplayCategory = FirstAid,
    ItemType = base:drainable,
    Weight = 0.2,
    Icon = PillsPainkiller,
    Medical = true,
    Tooltip = Tooltip_Painkillers,
    UseDelta = 0.1,
    UseWhileEquipped = false,
    StaticModel = PillBottle,
    WorldStaticModel = PainKillers_Ground,
    Tags = base:consumable,
}
```

---

## 4. Medical Recipes

All 9 recipes from `recipes_medical.txt` (verified):

| Recipe | Timed action | Time | Inputs | Output |
|--------|--------------|:----:|--------|--------|
| `MakePlantainPoultice` | `MixingMortarPestle` | 60 | mortar&pestle + 5× `base:plantain` | `Base.PlantainCataplasm` |
| `MakeComfreyPoultice` | `MixingMortarPestle` | 60 | mortar&pestle + 5× `base:comfrey` | `Base.ComfreyCataplasm` |
| `MakeWildGarlicPoultice` | `MixingMortarPestle` | 60 | mortar&pestle + 5× `base:wildgarlic` | `Base.WildGarlicCataplasm` |
| `DisinfectRag` | `ApplyAlcohol` | 40 | rag + `-fluid 0.1 [RubbingAlcohol;Vodka;Whiskey]` | `AlcoholRippedSheets`/`AlcoholBandage` |
| `DisinfectBandage` | `ScrubClothWithSoap` | 100 | rag + hot `-fluid 0.5 [Water]` (`OnTest = hotFluidContainer`) | Alcohol versions |
| `CleanBandage` | `ScrubClothWithSoap` | 40 | dirty rag + `-fluid 0.5 categories[Water] mode:mixture` | clean rag |
| `MakeSplint` | `Making` | 70 | `RippedSheets`/`DenimStrips`/`LeatherStrips` + `Plank`/`TreeBranch2`/`WoodenStick2` | `Base.Splint` |
| `DouseCottonInAlcohol` | `ApplyAlcohol` | 20 | `CottonBalls` + `-fluid 0.1 [RubbingAlcohol;Vodka;Whiskey]` | `Base.AlcoholedCottonBalls` |
| `PurifyWater` | `Making` | 70 | fluid container (`ItemIsFluid;NotEmpty`) + `WaterPurificationTablets` | — (purifies in place) |

Notable recipe fields (verified in source):

- **`NeedToBeLearn = true` + `AutoLearnAny = Doctor:5;PlantScavenging:5`** — poultice recipes auto-learn at Doctor **or** PlantScavenging level 5 (a modding-friendly gate pattern).
- **`Tags = AnySurfaceCraft;Health`** — the `Health` tag groups recipes under the Medical category in the UI.
- **`OnTest = RecipeCodeOnTest.hotFluidContainer`** — `DisinfectBandage` requires hot water (with `Tooltip = Tooltip_needsToBeHot`).
- **`PurifyWater`** — `OnTest = RecipeCodeOnTest.purifyWater` + `OnCreate = RecipeCodeOnCreate.purifyWater`; input `item 1 [*] mode:keep flags[ItemIsFluid;NotEmpty]`.

Example:

```txt
craftRecipe DisinfectRag
{
    timedAction = ApplyAlcohol,
    time = 40,
    Tags = InHandCraft;Health,
    category = Medical,
    inputs
    {
        item 1 [Base.RippedSheets;Base.Bandage] mode:destroy flags[AllowFavorite;InheritFavorite] mappers[ragType],
        item 1 [*],
        -fluid 0.1 [RubbingAlcohol;Vodka;Whiskey],
    }
    outputs
    {
        item 1 mapper:ragType,
    }
    itemMapper ragType
    {
        Base.AlcoholRippedSheets = Base.RippedSheets,
        Base.AlcoholBandage = Base.Bandage,
    }
}
```

---

## 5. HealthSystem Lua

`media/lua/server/HealthSystem/HealthUpdate.lua` (45 lines, verified):

- `healthUpdate.update()` — runs on tick but **early-returns on dedicated servers** (`getCore():isDedicated()`); grabs `player:getBodyDamage()` and detects grid changes.
- `healthUpdate.scratchFromWindow(feeler)` — **1-in-6 scratch chance** (`ZombRand(6) == 0`) when crossing a destroyed window (`getThumpableTo` + `isDestroyed()`); picks a random `BodyPartType` and calls `part:SetScratched(true, true)`, with the player saying "Ouch !".
- The event registration (`Events.OnTick.Add(healthUpdate.update)`) is **commented out** in vanilla — the file is effectively a template/modding hook.
- Body/health state is Java-side (`getBodyDamage()`, `BodyPartType`, `SetScratched`); the Lua file is the documented extension point for custom health logic.

---

## 6. Wound & Bandage Items

Per-body-part bandage items live in `items/clothing.txt` (line ~21796 onward, verified):

```txt
item Bandage_LeftUpperArm
{
    DisplayCategory = Bandage,
    ItemType = base:clothing,
    Weight = 0.0,
    BodyLocation = base:bandage,
    ClothingItem = Bandage_LeftUpperArm,
    WorldRender = false,
    hidden = true,
}
```

- Each `Bandage_<BodyPart>` has a `_Blood` variant (e.g. `Bandage_LeftUpperArm_Blood`) — verified across `Bandage_LeftUpperArm`, `_RightUpperArm`, `_Abdomen`, `_Chest`, `_Groin`, `_LeftLowerLeg`, `_RightLowerLeg`, `_LeftFoot`, `_RightFoot`, `_LeftHand`, ….
- They are **hidden** (`hidden = true`) clothing items (`base:clothing`) bound to `BodyLocation = base:bandage` — applied to the character model rather than stored in the inventory like normal items.
- `DisplayCategory = Bandage` (34 items) and `Wound` (60 items) in `clothing.txt` cover the wound-visual family (see the Clothing & Armor research doc).

---

## 7. Modding Opportunities

1. **New herbal remedies.** Copy the poultice pattern: mortar&pestle recipe + `NeedToBeLearn` + `AutoLearnAny = Doctor:5;PlantScavenging:5` → custom cataplasms for new foraged herbs (tags `base:<herb>`).
2. **New medication.** `Medical = true` drainables with `UseDelta`/`Tags = base:consumable` slot into the pill UX; wire effects through Lua (see HealthUpdate).
3. **Fluid-based medicine.** Reuse `-fluid 0.1 [RubbingAlcohol;Vodka;Whiskey]` disinfection or `-fluid 0.5 categories[Water] mode:mixture` cleaning in custom medical recipes; add your own antiseptic fluids.
4. **Conditional crafting.** Use `OnTest`/`OnCreate` callbacks (hot-water, purification) to add temperature/state requirements to new recipes.
5. **Health hooks.** Follow `healthUpdate` (Events.OnTick + `getBodyDamage()`) to add custom injury/status systems; re-enable the commented tick registration.
6. **Custom wound visuals.** Add `Bandage_*`-style hidden clothing items bound to `BodyLocation = base:bandage` with `_Blood` variants for new injury types.

---
