---
title: "Project Zomboid Build 42 Energy System Research"
build: "42.20"
tags: [pz, modding, build42, energy]
---

# Project Zomboid Build 42 — Energy System Research

> **Scope:** Build 42.20 (stable). The Energy system models power as typed **resources** (Electric, Mechanical, Thermal, Steam, Wind, Solar, Void) attached to entities/vehicles via the Java Entity system, with data definitions in `scripts/generated/energies.txt` and Lua UI bindings in `media/lua/client/Entity/ISUI/`. Battery items and vehicle batteries are covered here because they are the item-level storage/consumption counterpart. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Energy Type Definitions](#3-energy-type-definitions)
4. [Runtime Model](#4-runtime-model)
5. [Battery Items](#5-battery-items)
6. [Vehicles & Batteries](#6-vehicles--batteries)
7. [UI Layer](#7-ui-layer)
8. [Related Item Properties](#8-related-item-properties)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- The Energy system is **Java-implemented** (part of the Build 42 Entity system). No `Energy*.lua` engine file exists; what the Lua layer exposes are UI bindings (`ISEnergyBar`, `ISEnergySlot`) over Java resources, plus debug panels.
- Energy *types* are declared as **data** in `media/scripts/generated/energies.txt` — 7 types, each with a display name key, an RGB color, and icon/bar textures.
- Energy resources live on game objects (entities, vehicles) and expose **ratios** (`getEnergyRatio()`) and **channels** (`getChannel()`) to the UI. The crafting panel integrates energy slots (`ISCraftLogicPanel:createEnergySlotPanel`), so workbench-style recipes can consume/produce energy — but the energy *wiring* itself is Java-level, not script-level.
- Item-level energy storage is done with **drainable battery items** (UseDelta charge model) and **vehicle battery parts** (`template_battery.txt`), tied together by item tags (`base:usesbattery`, `base:carbattery`) and the `CarBatteryCharger`.
- Do not confuse with the unrelated item property `FireStartingEnergy` (fire-start tools) or the fluid `Fuel` category (petrol) — both are covered in the Weapons/Combat and Fluid research docs respectively.

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/energies.txt` | Data definitions for all 7 energy types (65 lines) |
| `media/lua/client/Entity/ISUI/Controls/ISEnergyBar.lua` | Bar widget rendering an energy ratio with per-type textures |
| `media/lua/client/Entity/ISUI/Controls/ISEnergySlot.lua` | Icon + bar slot; channel color borders |
| `media/lua/client/Entity/ISUI/Controls/ISEnergySlotPanel.lua` | Panel holding multiple energy slots |
| `media/lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel.lua` | Crafting panel — `createEnergySlotPanel` builds energy UI for recipes |
| `media/lua/client/Entity/ISUI/CraftRecipe/ISWidgetInput.lua` | Craft-recipe input widget with energy handling |
| `media/scripts/xui/defaultskin/xs_ISEnergyBar.txt`, `xs_ISEnergySlot.txt`, `xs_ISEnergySlotPanel.txt` | XUI skin styles for the energy widgets |
| `media/lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.lua`, `DebugUIs/DebugMenu/Climate/PlayerClimateDebug.lua` | Debug viewers exposing energy fields |
| `media/lua/shared/Translate/EN/Entity.json` | `EC_Energy_*` display-name localization |
| `media/scripts/generated/items/drainable.txt` | `Battery`, `CarBattery1/2/3`, `Lighter_Battery`, electric tools |
| `media/scripts/generated/items/normal.txt` | `BatteryBox`, `CarBatteryCharger` |
| `media/scripts/generated/vehicles/template_battery.txt` | Vehicle battery part definition |

---

## 3. Energy Type Definitions

`media/scripts/generated/energies.txt` (complete file, 65 lines) — all definitions live under `module Base`:

```txt
module Base
{
    energy Electric
    {
        DisplayName = EC_Energy_Electric,
        Color = 0.63:0.78:0.6,
        iconTexture = media/ui/Entity/Energy/icon_energy_electric.png,
        horizontalBarTexture = media/ui/Entity/Bars/bars_horz_green.png,
        verticalBarTexture = media/ui/Entity/Bars/bars_vert_green.png,
    }
    ...
}
```

| Energy | Color (r:g:b) | Icon texture | UI bars (horz/vert) |
|--------|:-------------:|--------------|---------------------|
| `Electric` | 0.63:0.78:0.6 | `icon_energy_electric.png` | `bars_horz/vert_green.png` |
| `Mechanical` | 0.73:0.67:0.63 | `icon_energy_mechanical.png` | `bars_horz/vert_yellowgreen.png` |
| `Thermal` | 0.83:0.72:0.52 | `icon_energy_thermal.png` | `bars_horz/vert_orange.png` |
| `Steam` | 0.87:0.64:0.62 | `icon_energy_steam.png` | `bars_horz/vert_red.png` |
| `VoidEnergy` | 0.0:0.0:0.0 | `icon_energy_solar.png` | `bars_horz/vert_yellow.png` |
| `Wind` | 0.62:0.67:0.77 | `icon_energy_wind.png` | `bars_horz/vert_blue.png` |
| `Solar` | 0.84:0.81:0.54 | `icon_energy_solar.png` | `bars_horz/vert_yellow.png` |

Block fields:

| Field | Meaning |
|-------|---------|
| `DisplayName` | i18n key (`EC_Energy_*`), resolved in `Translate/EN/Entity.json` |
| `Color` | `r:g:b` color used for the energy's visual identity |
| `iconTexture` | Icon shown in energy slots (`media/ui/Entity/Energy/...`) |
| `horizontalBarTexture` / `verticalBarTexture` | Fill textures for the energy bar (`media/ui/Entity/Bars/...`) |

Localized names (verified in `Translate/EN/Entity.json`): `EC_Energy_Electric → "Electric"`, `EC_Energy_Mechanical → "Mechanical"`, `EC_Energy_Thermal → "Thermal"`, `EC_Energy_Steam → "Steam"`.

---

## 4. Runtime Model

The engine side is Java (the `ResourceFluid`/`FluidContainer`-style pattern of the Entity system, applied to energies). The Lua layer observes resources through these verified bindings:

- **`resource:getEnergyRatio()`** — current fill ratio (0–1) of an energy resource; drives the bar drawing (used in `ISEnergyBar.lua`).
- **`resource:getEnergy()`** — returns the energy type object, exposing `getHorizontalBarTexture()` and `getVerticalBarTexture()` (verified in `ISEnergySlot.lua` lines 132–133). These are exactly the textures declared per-type in `energies.txt`.
- **`resource:getChannel()`** — the energy "channel"; UI colors the bar border with `getChannel():getColor()`, and compares against the `ResourceChannel.NO_CHANNEL` sentinel (verified in `ISEnergySlot.lua`).
- **`energy:getIconTexture()`** — the per-type icon from `energies.txt` (`iconTexture`).

Crafting integration (verified in `media/lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel.lua`): `createEnergySlotPanel(_style)` builds an `ISEnergySlotPanel` for a crafting recipe, i.e. recipes on workstations can display and (at Java level) exchange energy resources. `ISWidgetInput.lua` similarly handles energy on craft-recipe input widgets.

Note: no *script-level* energy usage exists in vanilla — grepping `entities/`, `items/`, and `recipes/` for `energy` yields only the unrelated `FireStartingEnergy` item property (see §8). Energies are attached to entities/vehicles from Java; the data file only defines the types' presentation.

---

## 5. Battery Items

All verified in `media/scripts/generated/items/drainable.txt` / `normal.txt`.

| Item | File:line | Type | Key fields |
|------|-----------|------|------------|
| `Battery` | drainable.txt:673 | drainable | Weight 0.1, `UseDelta = 0.007`, `cantBeConsolided`, `Researchablerecipes = MakeImprovisedLighter`, Tags `base:hasmetal` |
| `CarBattery1` | drainable.txt:2336 | drainable | Weight 5.0, `UseDelta = 0.00001`, `VehicleType = 1`, ConditionMax 100, `ChanceToSpawnDamaged = 30`, `MechanicsItem`, Tags `base:carbattery`, `KeepOnDeplete` |
| `CarBattery2` | drainable.txt:2355 | drainable | Same, `VehicleType = 2` |
| `CarBattery3` | drainable.txt:2374 | drainable | Same, `VehicleType = 3` |
| `Lighter_Battery` | drainable.txt:2393 | drainable | FireSource category electric lighter |
| `BatteryBox` | normal.txt:4507 | normal | Battery storage container |
| `CarBatteryCharger` | normal.txt:11806 | normal | Charges car batteries (`Tooltip = Tooltip_CarBatteryCharger`) |
| `SheepElectricShears` | drainable.txt (line ~250) | drainable | `UseDelta = 0.002`, `KeepOnDeplete`, ConditionMax 20, `ConditionLowerStandard = 40.0`, Tags include **`base:usesbattery`** |

### The drainable battery model

Batteries are `base:drainable` items: charge is `UseDelta` (a fraction consumed per use), and `KeepOnDeplete = true` keeps the item after charge runs out (CarBattery) or `DisappearOnUse = false` keeps tools usable. Electric tools (e.g. `SheepElectricShears`) declare the **`base:usesbattery`** tag, which is the modding hook for "this tool takes batteries".

```txt
item Battery
{
    DisplayCategory = Electronics,
    ItemType = base:drainable,
    Weight = 0.1,
    Icon = Battery,
    MetalValue = 1.0,
    UseDelta = 0.007,
    UseWhileEquipped = false,
    cantBeConsolided = true,
    WorldStaticModel = Battery,
    Researchablerecipes = MakeImprovisedLighter,
    Tags = base:hasmetal,
}
```

---

## 6. Vehicles & Batteries

Vehicle batteries are **vehicle parts**, not items (the items above are the installable/removable part contents). Verified in `media/scripts/generated/vehicles/template_battery.txt`:

```txt
template vehicle Battery
{
    part Battery
    {
        mechanicArea = Engine,
        area = Engine,
        itemType = Base.CarBattery,
        mechanicRequireKey = true,
        category = engine,
        durability = 2,
        table install
        {
            items { 1 { tags = base:screwdriver, count = 1, keep = true, equip = primary, } }
            time = 100,
            test = Vehicles.InstallTest.Default,
            door = EngineDoor,
        }
        table uninstall
        {
            items { 1 { tags = base:screwdriver, count = 1, keep = true, equip = primary, } }
            time = 100,
            test = Vehicles.UninstallTest.Battery,
        }
        lua { ... }
    }
}
```

Key facts:

- Part `Battery` lives in the `Engine` mechanic area; installs `Base.CarBattery` (any of the three `VehicleType` variants).
- Install/uninstall both take 100 ticks with a screwdriver (tag `base:screwdriver`), key required (`mechanicRequireKey`), `category = engine`, `durability = 2`.
- Uninstall uses the specialized `Vehicles.UninstallTest.Battery` test; install uses the default test and requires the engine door.
- The `lua { }` block on the part is the vehicle-part script hook (part Lua) — the vanilla part's charge logic lives there/at Java level.

---

## 7. UI Layer

### `ISEnergyBar` (`media/lua/client/Entity/ISUI/Controls/ISEnergyBar.lua`)

- Derived from `ISUIElement`; renders a progress bar from `resource:getEnergyRatio()`.
- Supports `isVertical` orientation and textured fills: when a render texture is set it draws via `DrawTexturePercentage` (horizontal) or `DrawTexturePercentageBottomUp` (vertical) — these are the `*BarTexture` assets from `energies.txt`.
- Tooltip on hover; optional `noBackground()`.

### `ISEnergySlot` / `ISEnergySlotPanel`

- `ISEnergySlot` = icon (`S_Image_EnergyIcon` XUI style, 24×24, `energy:getIconTexture()`) + an `ISEnergyBar` (`S_EnergyBar_Vertical`/`S_EnergyBar_Horizontal` XUI styles).
- Border color follows the resource channel: `colorToTable(self.resource:getChannel():getColor())`, falling back to `energyBorderColorOrig` when the channel is `ResourceChannel.NO_CHANNEL`.
- `ISEnergySlotPanel` stacks slots; used by the crafting panel.

### XUI skin (`media/scripts/xui/defaultskin/xs_ISEnergySlot.txt`)

```txt
xuiSkin default
{
    ISEnergySlot
    {
        background          = false,
        backgroundColor     = C_Background,
        borderColor         = C_Border,
        margin              = 5,
        minimumBarSize      = 100,
        enableIcon          = true,
        isVertical          = true,
        equalSpacing        = true,
    }
    ISEnergySlot S_EnergySlot_Vertical { isVertical = true, }
    ISEnergySlot S_EnergySlot_Horizontal { isVertical = false, }
}
```

`xs_ISEnergyBar.txt` and `xs_ISEnergySlotPanel.txt` provide the bar/panel styles referenced above.

---

## 8. Related Item Properties

### `FireStartingEnergy` (weapons)

Verified across `media/scripts/generated/items/weapon.txt` (lines 232, 265, 295, 327, 359, 391 → 20; 419, 448, 477, 507, 537, 567, 950, 984, 1015, 1048, 1081, 1114 → 40; 768, 799, 828, 859, 890, 921 → 0; 19032 → 30). This is a per-item numeric property on fire-start tools (e.g. lighters/road flares) that contributes to fire-starting success — **not** the entity energy system, but shares the name and is a common modding confusion point.

### `base:usesbattery` / `base:carbattery` tags

- `base:usesbattery` — item consumes batteries (verified on `SheepElectricShears`).
- `base:carbattery` — item is a car battery (verified on `CarBattery1/2/3`).
- `RequireInHandOrInventory = Base.…/Base.Lighter_Battery` — recipe inputs can require battery-powered lighters in hand (verified in `items/drainable.txt:2104` and `items/food.txt` multiple lines).

---

## 9. Modding Opportunities

1. **New energy types.** Add `energy MyEnergy { DisplayName, Color, iconTexture, horizontalBarTexture, verticalBarTexture }` to a `module` block in your mod scripts + a `EC_Energy_MyEnergy` string in `Translate/EN/Entity.json`. If the Java-side entity system picks it up (modded workstation/vehicle), it will render with your textures automatically.
2. **Custom energy UI.** Derive from `ISEnergyBar`/`ISEnergySlot` or add new XUI skin styles (`S_EnergyBar_*`, `S_EnergySlot_*`) to restyle or annotate energy displays on your workstations.
3. **Energy-consuming recipes.** The crafting panel already builds energy slots (`ISCraftLogicPanel:createEnergySlotPanel`) — recipes bound to modded workstations can surface energy requirements through the existing widget path (`ISWidgetInput`).
4. **Battery-powered tools.** Tag an item `base:usesbattery` and give it `UseDelta` charge + `KeepOnDeplete`/`DisappearOnUse` semantics to create battery tools exactly like `SheepElectricShears`.
5. **New battery types.** Model any chargeable item as a `base:drainable` battery (see `Battery`), then require it in recipes via `RequireInHandOrInventory` or part install tables.
6. **Vehicle battery parts.** Copy `template vehicle Battery` to create part categories that install your own battery item (`itemType = Base.<YourBattery>`), with custom install/uninstall tests and times.
7. **Charging stations.** Extend the `CarBatteryCharger` pattern (`normal.txt:11806`) with recipes/conditions that recharge drained `base:carbattery` items.

---
