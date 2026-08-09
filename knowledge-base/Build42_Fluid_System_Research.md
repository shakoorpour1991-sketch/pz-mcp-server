---
title: "Project Zomboid Build 42 Fluid System Research"
build: "42.20"
tags: [pz, modding, build42, fluid]
---

# Project Zomboid Build 42 — Fluid System Research

> **Scope:** Build 42.20 (stable). This document covers the fluid system: fluid definitions, categories, properties, poisoning, containers, blending, recipes, and the Lua/UI layers. Every claim was verified against the game files on disk. All paths are relative to the Project Zomboid install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Fluid Definitions](#3-fluid-definitions)
4. [Fluid Properties](#4-fluid-properties)
5. [Categories & Blending](#5-categories--blending)
6. [Poison System](#6-poison-system)
7. [Fluid Containers](#7-fluid-containers)
8. [Fluid-Enabled Entities](#8-fluid-enabled-entities)
9. [Fluid Recipes](#9-fluid-recipes)
10. [Lua Implementation](#10-lua-implementation)
11. [Drinking Mechanics](#11-drinking-mechanics)
12. [UI Layer](#12-ui-layer)
13. [Modding Opportunities](#13-modding-opportunities)

---

## 1. Overview

The fluid system is Build 42's unified runtime model for every liquid in the game: water (clean/tainted/carbonated), fuel (petrol), alcoholic drinks, soft drinks, juices, coffee/tea, milk, animal products (blood, grease), and chemicals (bleach, acid, dye, perfume). It replaces the B41-era "drainable item + UseDelta" approach for liquids with **fluid-typed containers** that can hold measured amounts (liters) of typed fluid.

Key architectural facts:

- **Fluids are data, not items.** A fluid (`fluid Water { ... }`) has no inventory existence of its own. It only exists *inside* a fluid container.
- **Containers are a component.** Both items (`component FluidContainer` in `items/*.txt`) and world entities (`component FluidContainer` in `entities/*.txt`) declare capacity and behavior with the same component syntax.
- **Runtime is Java, wrapped in Lua.** The core classes `FluidContainer`, `ResourceFluid`, and `FluidUtil` are Java; `media/lua/shared/Fluids/ISFluidContainer.lua` and `ISFluidUtil.lua` are the Lua wrappers used by mods and UI.
- **61 fluids** are defined in three script files (`fluids.txt`, `fluids_Alcoholic.txt`, `fluids_Beverages.txt`).
- **Transfer, emptying, drinking and mixing** are implemented as timed actions (`ISFluidTransferAction`, `ISFluidEmptyAction`, `ISDrinkFluidAction`, `ISAddFluidFromItemAction`).
- **Energies** (electric, mechanical, thermal, steam, wind, solar…) are a sibling system defined in `scripts/generated/energies.txt` and are covered in the Energy System research doc, not here.

---

## 2. Core Files

### Scripts (`media/scripts/generated/`)

| File | Purpose |
|------|---------|
| `fluids.txt` | 20 base fluids: water, fuel, chemicals, milk, blood (465 lines) |
| `fluids_Alcoholic.txt` | 18 alcoholic fluids: beer, wine, spirits, liqueurs (646 lines) |
| `fluids_Beverages.txt` | 23 beverages: sodas, juices, coffee, tea, honey (740 lines) |
| `recipes/recipes_fluids.txt` | Bottle/can opening recipes (3 recipes, 53 lines) |
| `items/*.txt` | Item-side `component FluidContainer` blocks (e.g. `items/normal.txt`, `items/container.txt`) |
| `entities/*/.../*.txt` | Entity-side `component FluidContainer` blocks (rain collectors, water dispensers, wells, fuel pumps) |

### Lua (`media/lua/shared/`)

| File | Purpose |
|------|---------|
| `Fluids/ISFluidContainer.lua` | Lua wrapper around the Java `FluidContainer`/`ResourceFluid` objects |
| `Fluids/ISFluidUtil.lua` | Container validation, walk-to logic, transfer-time helpers |
| `Fluids/ISFluidTransferAction.lua` | Timed action: pouring/transferring fluid between containers |
| `Fluids/ISFluidEmptyAction.lua` | Timed action: emptying a container |
| `TimedActions/ISDrinkFluidAction.lua` | Timed action: drinking from a container |
| `TimedActions/ISAddFluidFromItemAction.lua` | Timed action: adding fluid from an item |

### Lua UI (`media/lua/client/`)

| File | Purpose |
|------|---------|
| `Fluids/ISFluidBar.lua` | In-world fluid level bar rendering |
| `Fluids/ISFluidContainerPanel.lua` | Container contents panel |
| `Fluids/ISFluidInfoUI.lua` | Container info window |
| `Fluids/ISFluidPanelAction.lua` | Context-menu panel actions |
| `Fluids/ISFluidTransferUI.lua` | Transfer/pour UI |
| `ISUI/ISFluidContainerMenu.lua` | Right-click container menu integration |
| `Entity/ISUI/Controls/ISFluidSlot.lua`, `ISFluidSlotPanel.lua` | Fluid slots on entity tool panels |
| `DebugUIs/DebugMenu/Fluids/` | Debug tools: `ISFluidDebugWindow`, `ISFluidOverviewPanel`, `ISFluidMixerViewPanel`, `ISFluidCategoriesViewPanel`, `ISFluidItemsViewPanel`, `ISFluidViewPanel` |

### Localization

`media/lua/shared/Translate/EN/Fluids.json` (and per-language copies) maps `Fluid_Name_<Id>` keys to display strings, e.g. `Fluid_Name_Petrol → "Gasoline"`, `Fluid_Name_TaintedWater → "Water"`, `Fluid_Name_Water → "Water"`.

---

## 3. Fluid Definitions

Fluids are declared inside a `module` block. Each fluid is a `fluid <Id>` block with a `ColorReference`, an i18n `DisplayName` key, `Categories`, and `Properties` (nutrition/effect values). Optional blocks: `Poison` and `BlendWhiteList`.

### Block Anatomy (from `media/scripts/generated/fluids.txt`)

```txt
module Base
{
    fluid Water
    {
        ColorReference = LightSkyBlue,
        DisplayName = Fluid_Name_Water,
        Categories
        {
            Beverage,
            Water,
        }
        Properties
        {
            ThirstChange = -50.0,
        }
    }

    fluid TaintedWater
    {
        ColorReference = LightSkyBlue,
        DisplayName = Fluid_Name_TaintedWater,
        Categories
        {
            Beverage,
            Hazardous,
            Water,
        }
        Properties
        {
            ThirstChange = -50.0,
        }
        Poison
        {
            maxEffect = Medium,
            minAmount = 1.0,
            diluteRatio = 0.2,
        }
    }
}
```

### Complete Fluid List (61 total)

| File | Fluids |
|------|--------|
| `fluids.txt` (20) | Water, TaintedWater, CarbonatedWater, Petrol, RubbingAlcohol, Cologne, Perfume, PoisonPotent, Bleach, Blood, CleaningLiquid, Dye, HairDye, Acid, SecretFlavoring, CowMilk, AnimalMilk, AnimalBlood, AnimalGrease, SheepMilk |
| `fluids_Alcoholic.txt` (18) | Beer, Brandy, Champagne, Cider, CoffeeLiqueur, Curacao, Gin, Grenadine, Mead, Port, Rum, Scotch, Sherry, Tequila, Vermouth, Vodka, Whiskey, Wine |
| `fluids_Beverages.txt` (23) | Cola, ColaDiet, GingerAle, MilkChocolate, SodaBlueberry, SodaBubblegum, SodaPop, SodaLime, SodaGrape, SodaPineapple, SodaStrewberry, Coffee, Tea, Honey, JuiceApple, JuiceCranberry, JuiceFruitpunch, JuiceGrape, JuiceLemon, JuiceOrange, JuiceTomato, SimpleSyrup, SpiffoJuice |

---

## 4. Fluid Properties

`Properties` holds per-liter nutrition and effect values. Verified keys (from `fluids.txt`, `fluids_Alcoholic.txt`, `fluids_Beverages.txt`):

| Key | Meaning | Example values (Beer / Brandy / Cola) |
|-----|---------|---------------------------------------|
| `ThirstChange` | Thirst reduction per liter | −20.0 / −20.0 / −30.0 |
| `HungerChange` | Hunger reduction | −10.0 / −20.0 / −12.0 |
| `StressChange` | Stress delta | 0.0 / 0.0 / 0.0 |
| `UnhappyChange` | Unhappiness delta | −10.0 / −10.0 / −10.0 |
| `fatigueChange` | Fatigue delta | 0.0 (Cola: −2.0 — caffeine effect) |
| `Calories` | Calorie content | 500.0 / 2000.0 / 400.0 |
| `Carbohydrates` | Carbs | 36.0 / 0.0 / 104.0 |
| `Lipids` | Fat | 0.0 / 0.0 / 0.0 |
| `Proteins` | Protein | 4.0 / 0.0 / 0.0 |
| `alcohol` | Alcohol ratio (0–1) | 0.05 / 0.4 / 0.0 |
| `fluReduction` | Flu cure chance | 0.0 everywhere observed |
| `painReduction` | Pain reduction | 0.0 everywhere observed |
| `enduranceChange` | Endurance delta | 0.0 everywhere observed |
| `foodSicknessChange` | Sickness delta | 0 everywhere observed |

Notes:

- Water-family fluids carry only `ThirstChange = -50.0`.
- Caffeine is modeled as `fatigueChange = -2.0` on Cola/ColaDiet (verified in `fluids_Beverages.txt`).
- `Calories = 0.0` and `Carbohydrates = 0.0` on ColaDiet distinguish diet soda (verified).
- Display names are resolved through `Fluid_Name_<Id>` keys, not literal names — e.g. `Fluid_Name_Petrol` renders as **"Gasoline"** in English.

---

## 5. Categories & Blending

Every fluid declares one or more `Categories`. Categories observed in vanilla definitions:

| Category | Example fluids |
|----------|----------------|
| `Beverage` | Water, all sodas, juices, beer, wine, spirits |
| `Water` | Water, TaintedWater, CarbonatedWater |
| `Alcoholic` | Beer, Brandy, Champagne, … Whiskey, Wine |
| `Fuel` | Petrol |
| `Hazardous` | TaintedWater, Petrol |
| `Industrial` | Petrol, RubbingAlcohol |
| `Medical` | RubbingAlcohol |

### Blend White Lists

Fluids that must not mix freely declare a `BlendWhiteList` restricting which *categories* may be blended in. Petrol (from `fluids.txt`):

```txt
fluid Petrol
{
    ...
    BlendWhiteList
    {
        whitelist = true,
        categories
        {
            Fuel,
        }
    }
}
```

Alcoholic and beverage fluids use the same whitelist pattern but allow `Beverage`-category blends (verified in `fluids_Alcoholic.txt` and `fluids_Beverages.txt` — e.g. Beer, Brandy, Champagne, Cola, ColaDiet each carry `BlendWhiteList { whitelist = true, categories { Beverage } }`).

### Mixing in Recipes

Recipes consume and produce fluids with explicit amounts, category matchers, and a `mode`:

```txt
- fluid 0.25 categories[Water] mode:mixture,
```

(verified in `media/scripts/generated/entities/animals/craftRecipes/recipes_butter_churn.txt` and `entities/pottery/cratRecipes/craftrecipe_potterywheel.txt`). Recipe inputs can also target fluid-bearing items via the `ItemIsFluid` flag:

```txt
item 1 [*] mode:keep flags[ItemIsFluid;HandcraftOnly],
```

(verified in `media/scripts/generated/entities/pottery/cratRecipes/craftrecipe_potterywheel.txt`).

---

## 6. Poison System

Fluids can poison whoever drinks them. The `Poison` block (verified in `fluids.txt`):

| Field | Meaning |
|-------|---------|
| `maxEffect` | Severity: `Medium` (TaintedWater), `Deadly` (Petrol) |
| `minAmount` | Minimum amount (liters) for the effect to apply |
| `diluteRatio` | How much mixing with other fluids dilutes the poison (0.0 = never diluted, 0.2 = dilutes slowly) |

```txt
fluid TaintedWater
{
    ...
    Poison
    {
        maxEffect = Medium,
        minAmount = 1.0,
        diluteRatio = 0.2,
    }
}

fluid Petrol
{
    ...
    Poison
    {
        maxEffect = Deadly,
        minAmount = 1.0,
        diluteRatio = 0.0,
    }
}
```

Note the asymmetry: tainted water can be diluted by blending (0.2), petrol poisoning cannot (0.0). This is the hook behind "boil/mix the tainted water" gameplay and moddable safety mechanics.

---

## 7. Fluid Containers

Any item or entity can hold fluids by adding `component FluidContainer`. Verified component properties (from `items/normal.txt` and entity files):

| Property | Meaning | Verified example |
|----------|---------|------------------|
| `ContainerName` | Identifier/display key | `Large Bucket`, `Pot`, `Source`, `Collector` |
| `Capacity` | Max liters | Bucket 20.0, Pot 1.5, WaterDrop source 100.0, rain collector 400.0/600.0 |
| `TransferRate` | Liters per second when pouring | 5.0 (bucket, pot) |
| `RainFactor` | Fraction of rainfall collected | 0.7 (bucket), 0.8 (pot), 0.4/0.25 (collectors) |
| `InitialPercentMin` / `InitialPercentMax` | Random starting fill (0–1) | Cologne 0.1–1.0; collectors 0.0–0.0 |
| `PickRandomFluid` | Pick one entry from the `Fluids` list at spawn | HairDye bottles |
| `CustomDrinkSound` | Override drink sound | `DrinkingFromMug` (Pot, Cologne) |
| `FillFromTapSound` | Sound when filled from a tap | `GetWaterFromTapMetalMedium` |
| `FillFromToiletSound` | Sound when filled from a toilet | `GetWaterFromToilet` |
| `Fluids { fluid = Id:weight }` | Weighted list of starter fluid types | `fluid = Water:1.0`, `fluid = Petrol:1.0` |

### Item Examples (all from `media/scripts/generated/items/normal.txt`)

```txt
# Bucket
component FluidContainer
{
    ContainerName = Large Bucket,
    RainFactor = 0.7,
    Capacity = 20.0,
    TransferRate = 5.0,
}

# WaterDrop — a "source" pseudo-item used by sinks/taps
component FluidContainer
{
    ContainerName = Source,
    Capacity = 100.0,
    Fluids
    {
        fluid = Water:1.0,
    }
}

# Cologne bottle — small, random starting fill
component FluidContainer
{
    ContainerName = BottleCologne,
    Capacity = 0.1,
    InitialPercentMin = 0.1,
    InitialPercentMax = 1.0,
    CustomDrinkSound = DrinkingFromMug,
    Fluids
    {
        fluid = Cologne:1.0,
    }
}

# Hair dye — colored variants via 8 weighted entries with RGB tints
component FluidContainer
{
    ContainerName = BottleHairDye,
    PickRandomFluid = true,
    Capacity = 1.0,
    Fluids
    {
        fluid = HairDye:1.0:0.1:0.09:0.08,
        fluid = HairDye:1.0:0.83:0.67:0.27,
        ...
    }
}
```

The `fluid = HairDye:1.0:r:g:b` syntax carries a per-entry RGB tint — this is how the same fluid type renders in different colors.

---

## 8. Fluid-Enabled Entities

World objects with `component FluidContainer` (verified files under `media/scripts/generated/entities/`):

| Entity file | Container notes |
|-------------|-----------------|
| `appliances/workstations/entity_fuelpump.txt` | Starts filled: `fluid = Petrol:1.0` |
| `appliances/workstations/entity_waterdispenser.txt` | Starts filled: `fluid = Water:1.0` |
| `appliances/workstations/entity_well.txt` | Water container |
| `outdoors/entity_raincollector.txt` | 3 variants, `ContainerName = Collector`, Capacity 400.0/600.0, `RainFactor` 0.4/0.25, empty start (0.0–0.0) |
| `outdoors/entity_raincollector_tarp.txt` | Tarp rain collector variant |
| `outdoors/entity_amphora.txt` | Ceramic water container |
| `appliances/workstations/entity_coffeemachine_craftRecipe.txt` | Coffee machine work recipe with fluid inputs |
| `animals/craftRecipes/recipes_butter_churn.txt` | Churn recipe: `-fluid 5.0 [CowMilk;SheepMilk] mode:mixture`, `-fluid 0.2 categories[Water] mode:mixture` |

The fuel pump and water dispenser show the standard "always full" world source pattern: `component FluidContainer` + `Fluids { fluid = X:1.0 }` with no initial-percent randomization.

---

## 9. Fluid Recipes

### `media/scripts/generated/recipes/recipes_fluids.txt` (complete, 53 lines)

| Recipe | Timed action | Time (s) | Outputs |
|--------|--------------|:--------:|---------|
| `OpenBottleOfBeer` | `OpenBeerBottle` | 15 | — (unseals the bottle) |
| `OpenCanOfBeverage` | `OpenPopCan` | 15 | — (unseals the can) |
| `OpenBottleOfWine` | `UncorkBottle` | 30 | `Base.Cork` |

Example — bottle opening relies on item tags and *sealed* flags, not on crafting station:

```txt
craftRecipe OpenBottleOfBeer
{
    timedAction = OpenBeerBottle,
    time = 15,
    AllowBatchCraft = false,
    Tags = InHandCraft;Cooking;CanBeDoneInDark,
    category = Cooking,
    inputs
    {
        item 1 tags[base:bottleopener] mode:keep,
        item 1 [Base.BeerBottle;Base.BeerImported] mode:keep flags[DontPutBack;IsSealed;Prop2;Unseal;ItemCount],
    }
}
```

The `IsSealed` input flag + `Unseal` + `Prop2` combination is how "sealed drink" state is handled on fluid containers.

### Other recipe files referencing fluids

Fluid inputs/outputs also appear in: `recipes.txt`, `recipes_baking.txt`, `recipes_buckets.txt`, `recipes_cooking.txt`, `recipes_farming.txt`, `recipes_fishing.txt`, `recipes_jarring.txt`, `recipes_lightsources.txt`, `recipes_medical.txt`, `recipes_tailoring.txt`, `recipes_traps.txt` (verified by grep for `fluid` across `media/scripts/generated/recipes/`).

---

## 10. Lua Implementation

### `media/lua/shared/Fluids/ISFluidUtil.lua`

- `ISFluidUtil.isoPanelWalkToDist = 2` — walk-to range for fluid panels.
- `ISFluidUtil.isoMaxPanelDist = 2` — distance beyond which the fluid panel auto-closes.
- `validateContainer(container)` — requires `container.Type == "ISFluidContainer"`; for `InventoryItem` owners checks `isInPlayerInventory()`/`containsID`, for `IsoObject` owners checks `isExistInTheWorld()`.
- `doWalkTo(player, container, dist)` — walks the player adjacent to an `IsoObject` owner before acting.
- `getContainerOwner(container)` — for `ResourceFluid` returns `getGameEntity()`, otherwise `getOwner()`.
- `getTransferActionTimePerLiter()` / `getMinTransferActionTime()` — delegate to Java `FluidUtil` (transfer pacing lives in Java).

### `media/lua/shared/Fluids/ISFluidContainer.lua`

A Lua wrapper derived from `ISBaseObject` around Java `FluidContainer` or `ResourceFluid`:

- `isItem()` — owner is an `InventoryItem`.
- `isResource()` — wrapped object is a `ResourceFluid`.
- `isIsoPanel()` — owner is an `IsoObject` (world panel).
- `sync()` — server-side only; calls `sync()` on the IsoObject, `syncItemFields()` on inventory items (`ResourceFluid` sync is "not implemented" in this build).

### Transfer & Empty Actions

`ISFluidTransferAction.lua` and `ISFluidEmptyAction.lua` (both in `media/lua/shared/Fluids/`) implement the timed pour/empty actions driven by the UI and context menus; the exact liters-per-second pacing is queried from Java `FluidUtil` (see above).

---

## 11. Drinking Mechanics

`media/lua/shared/TimedActions/ISDrinkFluidAction.lua` implements drinking from any fluid container:

- **Start validity:** container not empty **and** `getMoodles():getMoodleLevel(MoodleType.FOOD_EATEN) < 3` (the game also allows it when calories < 1000 — see the commented alternative in the source).
- **Validation:** the container must be the one bound to the item's `getWorldItem():getFluidContainer()`, or the item must be in the player's inventory (client path uses `containsID`).
- **Animation:** `CharacterActionAnims.Drink`; hand models override based on `EatType` (`"Pot"`/`"PotForged"` → no hand override; otherwise default `"bottle"`).
- **Sound:** default `DrinkingFromMug`; if the item's heat > 1.0 (hot drink) the sound switches to `DrinkingFromHotTeaCup` (checked for food/drainable via `getHeat()`, otherwise `getItemHeat()`).
- **Networking:** server plays the `drinkFluid` anim event via `emulateAnimEvent(self.netAction, 100, "drinkFluid", nil)` and applies the drink effect on the server at that event; client plays audio.
- **Events:** reports `EventEating` to the character; sets `JobType` to the custom menu option or `ContextMenu_Drink`.

---

## 12. UI Layer

All fluid UI lives under `media/lua/client/` (paths verified):

- `Fluids/ISFluidBar.lua` — world-space fluid level bar above containers.
- `Fluids/ISFluidContainerPanel.lua` + `Fluids/ISFluidInfoUI.lua` — container contents and info.
- `Fluids/ISFluidPanelAction.lua` — actions from the panel (pour, empty, drink, mix).
- `Fluids/ISFluidTransferUI.lua` — the transfer dialog with liter amounts and target selection.
- `ISUI/ISFluidContainerMenu.lua` — right-click context menu entries for containers.
- `Entity/ISUI/Controls/ISFluidSlot.lua`, `ISFluidSlotPanel.lua` — fluid slots used by entity tool panels (e.g. the fuel pump's tool panel).
- `DebugUIs/DebugMenu/Fluids/` — six debug panels for inspecting fluids, categories, mixers and items.

The transfer UI is where the "click a container, pour into another" interaction is assembled; the underlying actions are the shared timed actions in §10.

---

## 13. Modding Opportunities

All hooks below are verified data/script extension points in B42.20.

1. **Add a custom fluid.** Declare `fluid MyAcid` (with `ColorReference`, `DisplayName`, `Categories`, `Properties`) in a `module` block in your mod's scripts; add `Fluid_Name_MyAcid` to `media/lua/shared/Translate/EN/Fluids.json` (or your own language file). It is instantly usable by any container via `Fluids { fluid = MyAcid:1.0 }`.
2. **New beverage/chemistry content.** Model new drinks entirely in data: give them `ThirstChange`, caffeine via `fatigueChange`, alcohol via `alcohol`, and nutrition via `Calories/Carbohydrates/Lipids/Proteins` — no Java needed.
3. **Custom blending rules.** Use `BlendWhiteList` to forbid/allow mixing by category — e.g. make a flammable blend only mix with `Fuel` categories like petrol does.
4. **Poison & safety mechanics.** `Poison` + `diluteRatio` gives you tainted-food style mechanics for any fluid; a mod could add "purified" fluids that dilute poisons faster.
5. **New containers.** Any item with `component FluidContainer` becomes a vessel; set `RainFactor` for rain collection, `TransferRate` for pour speed, `InitialPercentMin/Max` for random spawn fill, `PickRandomFluid` + RGB-tinted `fluid = Id:1.0:r:g:b` entries for random colored contents.
6. **World sources.** Copy the fuel-pump/water-dispenser pattern (entity + `FluidContainer` + `Fluids { fluid = X:1.0 }`) to add taps, dispensers, or wells for custom fluids.
7. **Fluid recipes.** Use `-fluid <liters> [FluidA;FluidB] mode:mixture` inputs/outputs and the `ItemIsFluid` input flag to build mixing recipes (churn/pottery-wheel style), plus sealed-drink mechanics via `IsSealed`/`Unseal`/`Prop2` flags.
8. **Drinking flavor.** Per-container `CustomDrinkSound` and the heat-based `DrinkingFromHotTeaCup` switch give custom drinks appropriate audio without code.
9. **UI/behavior extension.** Wrap `ISFluidContainer`/`ISFluidUtil` or add new timed actions alongside `ISDrinkFluidAction` to implement custom pour/use behaviors; the client `Fluids/` panels are the integration point for new interactions.

---
