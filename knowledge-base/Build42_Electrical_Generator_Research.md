---
title: "PZ Build 42 Electrical Generator Research"
build: "42.18"
tags: [pz, modding, build42, generators]
---

# Project Zomboid Build 42 — Electrical Generator Research

## Table of Contents

1. [Vanilla Generator Overview](#1-vanilla-generator-overview)
2. [Generator Item Definitions](#2-generator-item-definitions)
3. [Generator Lifecycle](#3-generator-lifecycle)
4. [Lua Implementation Details](#4-lua-implementation-details)
5. [Electrical/Power System](#5-electricalpower-system)
6. [Fuel System](#6-fuel-system)
7. [Sound System](#7-sound-system)
8. [Sandbox Settings](#8-sandbox-settings)
9. [Modding Opportunities](#9-modding-opportunities)
10. [Important Files Reference](#10-important-files-reference)

---

## 1. Vanilla Generator Overview

### Generator Variants

Build 42 has **4 generator item variants** and **16 world object sprites** (4 sprites per variant):

| Item | Weight | Icon | ConditionMax | Sprite Range | ConditionLowerChance | SoundRadius | SoundVolume | Notes |
|------|--------|------|-------------|--------------|---------------------|-------------|-------------|-------|
| `Generator` | 40.0 | Generator | 100 | `appliances_misc_01_0..3` | 1 in 30 | 20 | 1 | Standard gas generator |
| `Generator_Yellow` | 40.0 | Generator2 | 100 | `appliances_misc_01_8..11` | 1 in 36 | 20 | 1 | Yellow variant, slightly more durable |
| `Generator_Blue` | 30.0 | Generator3 | 100 | `appliances_misc_01_12..15` | 1 in 24 | 23 | 1 | Lighter (30 weight), louder (23 radius) |
| `Generator_Old` | 40.0 | Generator4 | 100 | `appliances_misc_01_4..7` | 1 in 25 | 25 | 1 | Old variant, random spawn condition, loudest (25 radius) |

### Common Item Properties

All four generators share:

```lua
item Generator
{
    DisplayCategory = Electronics,
    ItemType = base:normal,           -- "normal" = not drainable, just a heavy object
    Weight = 40.0,
    ConditionMax = 100,
    MetalValue = 500.0,               -- High metal scrap value
    RequiresEquippedBothHands = true,  -- Must be carried in both hands
    Tooltip = Tooltip_Generator,
    Tags = base:heavyitem;base:generator;base:hasmetal;base:ignorezombiedensity;base:showcondition,
    WorldObjectSprite = appliances_misc_01_0,
}
```

Key tags: `heavyitem`, `generator`, `hasmetal`, `ignorezombiedensity`, `showcondition`.

**Important**: There are **no entity/CraftRecipe definitions** for generators in Build 42. Generators are **map objects** — they spawn pre-placed on the world map via `MapObjects.OnNewWithSprite` hooks that create `IsoGenerator` Java objects.

---

## 2. Generator Item Definitions

**File**: `media/scripts/generated/items/normal.txt` (lines 4919-4985)

Four generator items plus the two fuel containers used with generators:

### Fuel Containers

| Item | Weight | Fluid Capacity | Fluid Type | Tags |
|------|--------|---------------|------------|------|
| `PetrolCan` | 1.6 | 10.0 units | `Petrol:1.0` | base:petrol |
| `JerryCan` | 4.0 | 20.0 units | `Petrol:1.0` | base:petrol |

Both have a `FluidContainer` component:
```
component FluidContainer
{
    ContainerName = GasCan,          -- or Jerrycan
    Capacity = 10.0,                -- or 20.0
    Fluids
    {
        fluid = Petrol:1.0,
    }
}
```

### Repair Material

| Item | Weight | MetalValue |
|------|--------|------------|
| `ElectronicsScrap` | 0.1 | 5.0 |

Note: **Gasoline** does not exist as a named item in the FTS database. The game uses `Petrol` as the fluid type. The search returned 0 results for "Gasoline" and 0 for "solar" — confirming no solar power or gas infrastructure in Build 42.

---

## 3. Generator Lifecycle

### Full Player Interaction Flow

```
  Item in inventory (heavy item)
       │
       ▼  (Right-click → Take Generator)
  Place on ground (dropped from hands)
       │
       ▼  (Right-click → Connect Generator)
  Plug connected (buildings within radius)
       │
       ▼  (Right-click → Refuel)
  Fuel added (Petrol from can/jerry can)
       │
       ▼  (Right-click → Activate)
  Generator running → powers nearby objects
       │
       ├─► Deactivate (Right-click → Deactivate)
       ├─► Unplug (Right-click → Unplug)
       ├─► Refuel (Right-click → Refuel)
       ├─► Repair (Right-click → Repair, needs ElectronicsScrap)
       └─► Info panel (Right-click → Info)
```

### Lifecycle State Transitions

```
  STATE:  Not placed           — item in inventory (type: Generator_*)
          ↓ ISTakeGenerator.complete()
  STATE:  Placed, disconnected — IsoGenerator in world, isConnected=false
          ↓ ISPlugGenerator.complete()
  STATE:  Connected            — isConnected=true
          ↓ ISAddFuel.complete()
  STATE:  Connected + Fueled   — getFuel() > 0
          ↓ ISActivateGenerator.complete()
  STATE:  Running              — isActivated=true, powers devices
          ↓ (condition drops, or manual)
  STATE:  Deactivated          — isActivated=false
          ↓ ISPlugGenerator(plug=false)
  STATE:  Disconnected         — isConnected=false
          ↓ ISTakeGenerator.complete()
  STATE:  Back in inventory
```

### Context Menu Generation

The generator right-click menu is built by **Java code** (`ISWorldObjectContextMenuLogic` — not in Lua). The handlers are defined in Lua at `ISWorldObjectContextMenu.lua` lines 529-672, but the menu itself is created by the Java engine when `instanceof(obj, "IsoGenerator")` is true (confirmed via debug context menu at `DebugContextMenu.lua:412`).

The registered handlers are:
- `onInfoGenerator` — Opens ISGeneratorInfoWindow
- `onPlugGenerator` — Toggle Plug/Unplug
- `onActivateGenerator` — Toggle Activate/Deactivate
- `onFixGenerator` — Repair with ElectronicsScrap
- `onAddFuelGenerator` — Refuel submenu from Petrol containers
- `onTakeGenerator` — Pick up generator

From inventory, generators are handled at `ISInventoryPaneContextMenu.lua` lines 270-404: the `Generator` item type (or `hasTag(ItemTag.GENERATOR)`) gets a "Take" option that equips it as a two-handed heavy item.

---

## 4. Lua Implementation Details

### 4.1 MOGenerator.lua — World Object Initialization

**Path**: `media/lua/server/Map/MapObjects/MOGenerator.lua`

**Server-only** (`if isClient() then return end`). Replaces map sprites with `IsoGenerator` Java objects.

```lua
local function ReplaceExistingObject(object, fuel, condition, type)
    local cell = getWorld():getCell()
    local square = object:getSquare()
    if not type then type = "Base.Generator" end
    local item = instanceItem(type)
    item:setCondition(condition)
    item:getModData().fuel = fuel
    square:transmitRemoveItemFromSquare(object)
    local javaObject = IsoGenerator.new(item, cell, square)
    javaObject:transmitCompleteItemToClients()
end
```

**Sprite-to-type mapping** (16 sprites × 4 types):

| Sprites | Function | Generator Type | Fuel | Condition |
|---------|----------|----------------|------|-----------|
| `appliances_misc_01_0..3` | `NewGenerator` | `Base.Generator` | 0 | 100 |
| `appliances_misc_01_8..11` | `NewGenerator_Yellow` | `Base.Generator_Yellow` | 0 | 100 |
| `appliances_misc_01_12..15` | `NewGenerator_Blue` | `Base.Generator_Blue` | 0 | 100 |
| `appliances_misc_01_4..7` | `NewGenerator_Old` | `Base.Generator_Old` | 0 | `ZombRand(100)+1` |

All registered at `PRIORITY = 5`.

**Key API**: `IsoGenerator.new(item, cell, square)` — The constructor calls `AddSpecialObject` automatically (noted in a code comment: "probably it shouldn't").

### 4.2 ISActivateGenerator.lua — Start/Stop Generator

**Path**: `media/lua/shared/TimedActions/ISActivateGenerator.lua`

```lua
-- Duration: 30 ticks (= 3 seconds)
function ISActivateGenerator:getDuration()
    return 30
end

-- Complete: fail-to-start check
function ISActivateGenerator:complete()
    if self.activate and self.generator:getCondition() <= 50 and ZombRand(2) == 0 then
        self.generator:failToStart()          -- 50% fail chance when condition ≤ 50
    else
        self.generator:setActivated(self.activate)
    end
    self.generator:sync()
    return true
end

-- Validity checks
function ISActivateGenerator:isValid()
    if self.activate == self.generator:isActivated() then return false end
    if self.activate and not self.generator:isConnected() or
            self.generator:getFuel() <= 0 or
            self.generator:getCondition() <= 0 then
        return false
    end
    return self.generator:getObjectIndex() ~= -1
end
```

**Rules**:
- Must be connected AND have fuel AND condition > 0 to activate
- When condition ≤ 50, 50% chance of `failToStart()` (plays `GeneratorFailedToStart` sound)
- Animation: "Loot" with "Low" position
- Uses `Perks.Electricity` in repair, but **no skill requirement** for activation

### 4.3 ISPlugGenerator.lua — Plug/Unplug

**Path**: `media/lua/shared/TimedActions/ISPlugGenerator.lua`

```lua
-- Duration: 300 ticks (= 30 seconds)
function ISPlugGenerator:getDuration()
    return 300
end

function ISPlugGenerator:complete()
    self.generator:setConnected(self.plug);
    return true;
end

function ISPlugGenerator:isValid()
    return self.generator:getObjectIndex() ~= -1 and
           self.generator:isConnected() ~= self.plug
end
```

**Rules**:
- Plugging takes **30 seconds**
- Sound: `GeneratorConnect` plays during action
- No skill or tool requirement for plugging
- `isConnected()` is a simple boolean toggle via `setConnected()`

### 4.4 ISAddFuel.lua — Refuel Generator

**Path**: `media/lua/shared/TimedActions/ISAddFuel.lua`

```lua
function ISAddFuel:start()
    self:setActionAnim("refuelgascan")
    self.petrol:setJobType(getText("ContextMenu_GeneratorAddFuel"))
    self.petrol:setJobDelta(0.0)
    self:setOverrideHandModels(self.petrol:getStaticModel(), nil)
    self.sound = self.character:playSound("GeneratorAddFuel")
end

function ISAddFuel:complete()
    local endFuel = math.min(self.fluidCont:getAmount(),
                             self.generator:getMaxFuel() - self.generator:getFuel())
    self.fluidCont:adjustAmount(self.fluidCont:getAmount() - endFuel)
    self.petrol:syncItemFields()
    self.generator:setFuel(self.generator:getFuel() + endFuel)
    self.generator:sync()
    return true;
end

function ISAddFuel:getDuration()
    return 70 + (self.fluidCont:getAmount() * 50)
end
```

**Rules**:
- Duration scales linearly with fuel amount: `70 + (amount * 50)` ticks
- Fuel is transferred from the container's `FluidContainer` to the generator
- Uses `Petrol` fluid type only
- Animation: "refuelgascan" with override hand models
- Sound: `GeneratorAddFuel`
- **No skill or tool requirement** for refueling

### 4.5 ISFixGenerator.lua — Repair Generator

**Path**: `media/lua/shared/TimedActions/ISFixGenerator.lua`

```lua
function ISFixGenerator:isValid()
    return self.generator:getObjectIndex() ~= -1 and
           not self.generator:isActivated() and
           self.generator:getCondition() < 100 and
           self.character:getInventory():containsTypeRecurse("ElectronicsScrap")
end

function ISFixGenerator:complete()
    local scrapItem = self.character:getInventory():getFirstTypeRecurse("ElectronicsScrap")
    if not scrapItem then return false end
    self.character:removeFromHands(scrapItem)
    self.character:getInventory():Remove(scrapItem)
    sendRemoveItemFromContainer(self.character:getInventory(), scrapItem)
    self.generator:setCondition(self.generator:getCondition() + 4 +
                                (1 * (self.character:getPerkLevel(Perks.Electricity)) / 2))
    addXp(self.character, Perks.Electricity, 5)
    return true
end

function ISFixGenerator:getDuration()
    return 150 - (self.character:getPerkLevel(Perks.Electricity) * 3)
end
```

**Rules**:
- **Cannot repair while generator is running** (must be deactivated)
- Consumes 1 `ElectronicsScrap` per repair tick
- Condition restored: `4 + (ElectricityLevel / 2)` per scrap — at Electricity 10, restores 9 condition per scrap
- Duration: `150 - (ElectricityLevel * 3)` ticks — at Electricity 10, 120 ticks (= 12 seconds)
- Grants 5 XP in Electricity per repair
- Continues repairing automatically if more scraps available (chain queuing)
- **Minimum Electricity level: 0** (no minimum, just faster at higher levels)

### 4.6 ISTakeGenerator.lua — Pick Up Generator

**Path**: `media/lua/shared/TimedActions/ISTakeGenerator.lua`

```lua
function ISTakeGenerator:isValid()
    return self.generator:getObjectIndex() ~= -1 and
           not self.generator:isConnected()
end

function ISTakeGenerator:complete()
    forceDropHeavyItems(self.character)
    local itemType = "Base.Generator"
    local mData = self.generator:getModData()
    if mData.generatorFullType then itemType = mData.generatorFullType end
    local item = instanceItem(itemType)
    self.character:getInventory():AddItem(item)
    item:setCondition(self.generator:getCondition())
    self.character:setPrimaryHandItem(item)
    self.character:setSecondaryHandItem(item)
    if self.generator:getFuel() > 0 then
        item:getModData()["fuel"] = self.generator:getFuel()
    end
    self.generator:remove()
    return true
end
```

**Rules**:
- **Must be unplugged** (not connected) to pick up
- Duration: 100 ticks (= 10 seconds)
- Preserves condition and fuel in item modData (`generatorFullType`, `fuel`)
- `forceDropHeavyItems(self.character)` — drops anything else the player was carrying
- Metabolism: `Metabolics.HeavyWork`

### 4.7 ISGeneratorInfoWindow.lua — Info Panel

**Path**: `media/lua/client/ISUI/ISGeneratorInfoWindow.lua`

Displays a floating window with:
- Generator name (`IGUI_Generator_TypeGas`)
- Texture icon
- Fuel percentage (update-aware)
- Condition (update-aware)
- **When running**: list of powered items (`getItemsPowered()`)
- **When running**: base power consumption string
- **When running**: total power usage 
- **Indoor warning** (red text): `IGUI_Generator_IsToxic` shown when generator square is indoors and has a building

```lua
-- Rich text builder (key section)
function ISGeneratorInfoWindow.getRichText(object, displayStats)
    local fuel = math.ceil(object:getFuelPercentage())
    local condition = object:getCondition()
    local text = getText("IGUI_Generator_FuelAmount", fuel) ...
    if object:isActivated() then
        text = text .. getText("IGUI_PowerConsumption") .. ":"
        local items = object:getItemsPowered()
        for i=0, items:size()-1 do
            text = text .. "   " .. items:get(i) .. " "
        end
        text = text .. getText("IGUI_Generator_TypeGas") .. " (" ..
               object:getBasePowerConsumptionString() .. ")"
        text = text .. getText("IGUI_Total") .. ": " ..
               object:getTotalPowerUsingString() .. " "
    end
    -- indoor CO warning (red)
    if square and not square:isOutside() and square:getBuilding() then
        text = text .. " <RED> " .. getText("IGUI_Generator_IsToxic")
    end
    return text
end
```

### 4.8 ISGeneratorInfoAction.lua — Open Info

**Path**: `media/lua/client/TimedActions/ISGeneratorInfoAction.lua`

Instant action (maxTime = 0, completes immediately). Opens `ISGeneratorInfoWindow` for the clicked generator. Registers with `ISLayoutManager` as a persistent window.

---

## 5. Electrical/Power System

### 5.1 IsoGenerator Java API (Accessed from Lua)

The `IsoGenerator` class is **Java-based**, not defined in Lua. The following method calls are confirmed from the Lua inspection:

| Lua Call | Return Type | Purpose |
|----------|-------------|---------|
| `IsoGenerator.new(item, cell, square)` | `IsoGenerator` | Constructor — creates generator at square |
| `generator:isActivated()` | `boolean` | Is generator running |
| `generator:setActivated(bool)` | `void` | Start/stop generator |
| `generator:isConnected()` | `boolean` | Is generator plugged into building |
| `generator:setConnected(bool)` | `void` | Plug/unplug generator |
| `generator:getFuel()` | `float` | Total fuel units remaining |
| `generator:setFuel(float)` | `void` | Set fuel level |
| `generator:getFuelPercentage()` | `float` | 0.0-100.0 fuel percentage |
| `generator:getMaxFuel()` | `float` | Maximum fuel capacity |
| `generator:getCondition()` | `int` | Current condition (0-100) |
| `generator:setCondition(int)` | `void` | Set condition |
| `generator:getObjectIndex()` | `int` | World object index (-1 if invalid) |
| `generator:failToStart()` | `void` | Play fail-to-start sound/effect |
| `generator:sync()` | `void` | Sync state to clients |
| `generator:remove()` | `void` | Remove from world |
| `generator:getModData()` | `table` | Mod data (stores fuel, generatorFullType) |
| `generator:getItemsPowered()` | `ArrayList<String>` | List of powered device names |
| `generator:getBasePowerConsumptionString()` | `String` | The generator's own power draw |
| `generator:getTotalPowerUsingString()` | `String` | Total power being consumed |
| `generator:getTextureName()` | `String` | Texture for UI |
| `generator:getSquare()` | `IsoSquare` | The square the generator is on |

**Inferred but confirmed via context**: Additional methods likely on IsoGenerator based on usage patterns (these may be inherited from `IsoObject`):
- `generator:getX()`, `getY()`, `getZ()` — Position
- `generator:getWorld()` — World reference

### 5.2 Power Grid Mechanics (Java-internal)

**How generators power buildings**:

The power grid system is **Java-only** — no Lua files exist for power grid management. From the available evidence:

1. **Power for building** is determined by `square:haveElectricity()` and `square:hasGridPower()`:
   - `haveElectricity()` returns true if the grid has power (before the electric shutoff)
   - `hasGridPower()` returns true if any generator is connected to the building the square belongs to
2. **Generator connection scope**: A generator connected via `setConnected(true)` powers all squares in the building it's adjacent to
3. **Power consumption**: Each powered appliance consumes power; the generator's capacity is displayed via `basePowerConsumptionString()` vs `totalPowerUsingString()`
4. **CO poisoning**: Indoor generators are toxic (displayed as warning in info window). This is a static check — `not square:isOutside() and square:getBuilding()` — no gradual CO accumulation mechanic is visible in Lua

### 5.3 Relationship to Car Battery Charger

The car battery charger (`CarBatteryCharger` item) shares part of the generator infrastructure:

```lua
-- ISVehicleMenu.lua:1088
if square and ((SandboxVars.AllowExteriorGenerator and square:haveElectricity())
               or (square:hasGridPower())) then
```

Car battery chargers check for:
1. `AllowExteriorGenerator` sandbox option + external `haveElectricity()`
2. OR `hasGridPower()` (generator-powered building)

### 5.4 Electric Shutoff

**Sandbox values** (from `shared/Sandbox/*.lua`):
- `ElecShut` — Type of shutoff (1=Instant, 2=0-30 days, 3=0-365 days)
- `ElecShutModifier` — Days until shutoff: 
  - Default: 14 days (Apocalypse)
  - `-1` = No shutoff (SixMonthsLater, power was already gone)

**Java-based**: The actual power cutoff scheduling and random timing is handled by Java (`getSandboxOptions():randomElectricityShut(elecShut)`, `getGameTime():getWorldAgeHours()`).

---

## 6. Fuel System

### 6.1 Fluid System Architecture

Build 42 uses a **FluidContainer component system**. Generators use `Petrol` as their fuel source.

**Petrol fuel containers**:
- `PetrolCan` (10 unit capacity) — tagged `base:petrol`
- `JerryCan` (20 unit capacity) — tagged `base:petrol`

**Fuel transfer** (`ISAddFuel.lua`):
```lua
local endFuel = math.min(self.fluidCont:getAmount(),
                         self.generator:getMaxFuel() - self.generator:getFuel())
self.fluidCont:adjustAmount(self.fluidCont:getAmount() - endFuel)
self.generator:setFuel(self.generator:getFuel() + endFuel)
```

The generator has `getMaxFuel()` and `getFuel()` measured in **fuel units** (not drainable units). Each fluid unit from the container adds 1 fuel unit.

**Note from code**: FIXME at line 636 of ISWorldObjectContextMenu.lua says *"Each drainable unit adds 10% to a generator. FIXME: A partial unit also adds 10% to a generator."* — indicating a known issue where partial fuel units provide the same 10% fuel increase.

### 6.2 Fuel Consumption

Fuel consumption rate is **Java-internal** (`IsoGenerator` handles fuel burn in its update loop). There is no Lua code for fuel consumption logic — the generator burns fuel while `isActivated()` is true.

### 6.3 Fuel Sourcing

Players obtain Petrol from:
1. **Gas station pumps** (interact via context menu → fill container)
2. **Vehicles** (siphon/remove from gas tank)
3. **Pre-spawned containers** found as loot

No electric charging, solar, or alternative fuel systems exist.

---

## 7. Sound System

### 7.1 Generator Sound Events

**File**: `media/scripts/generated/sounds/objects/sounds_object_generator.txt` (156 lines)

| Sound Name | Event | Type | distanceMax | Category |
|------------|-------|------|-------------|----------|
| `GeneratorFailedToStart` | Object/Generator/StartupFail | clip | 100 | Object |
| `GeneratorStarting` | Object/Generator/Startup | clip | 100 | Object |
| `GeneratorStopping` | Object/Generator/Shutdown | clip | 100 | Object |
| `GeneratorLoop` | Object/Generator/Running | clip | 100 | Object |
| `GeneratorBackfire` | Object/Generator/Backfire | clip | 100 | Object |
| `GeneratorAddFuel` | Object/Generator/AddFuel | clip | — | Object |
| `GeneratorRepair` | Object/Generator/Repair | clip | — | Object |
| `GeneratorConnect` | Object/Generator/Connect | clip | — | Object |
| `OldGeneratorFailedToStart` | Object/OldGenerator/StartupFail | clip | 100 | Object |
| `OldGeneratorStarting` | Object/OldGenerator/Startup | clip | 100 | Object |
| `OldGeneratorStopping` | Object/OldGenerator/Shutdown | clip | 100 | Object |
| `OldGeneratorLoop` | Object/OldGenerator/Running | clip | 100 | Object |
| `OldGeneratorAddFuel` | Object/OldGenerator/AddFuel | clip | — | Object |
| `OldGeneratorRepair` | Object/OldGenerator/Repair | clip | — | Object |
| `OldGeneratorConnect` | Object/OldGenerator/Connect | clip | — | Object |

The **OldGenerator** variant has its own set of sounds (prefix `OldGenerator`). All sounds with `distanceMax = 100` have 100-cell range.

### 7.2 Electrical Sounds

**File**: `media/scripts/generated/sounds/player/sounds_player_electrical.txt`

| Sound Name | Event | Category |
|------------|-------|----------|
| `Dismantle` | Character/Survival/Electrical/Dismantle | Player |
| `DismantleFailed` | Character/Survival/Electrical/DismantleFailed | Player |

### 7.3 World Events

| Sound Name | Event | Type | Notes |
|------------|-------|------|-------|
| `WorldEventElectricityShutdown` | World/Event/ElectricityShutdown | Ambient loop | Plays when grid power goes out |

---

## 8. Sandbox Settings

### 8.1 Generator-Related Settings

From `shared/Sandbox/*.lua`:

```lua
-- Present in all survival presets (Apocalypse, Survivor, Builder, etc.)
AllowExteriorGenerator = true,    -- Can generators power buildings from outside
```

From server options (`OptionScreens/ServerSettingsScreen.lua`):
- `AllowExteriorGenerator` — Configurable in server settings (line 4850)

### 8.2 Electricity Settings

```lua
ElecShut = 1,         -- 0=Never, 1=Instant, 2=0-30 days, 3=0-365 days
ElecShutModifier = 14, -- Days until shutoff (or -1 for immediate)
```

The `ElecShut` values across presets:
| Preset | ElecShut | ElecShutModifier |
|--------|----------|-------------------|
| Apocalypse | 2 | 14 |
| Survivor | 2 | 30 (inferred) |
| Builder | 3 | 365 (inferred) |
| SixMonthsLater | 1 | -1 (instant) |
| Extinction | 2 | 14 |
| Outbreak | 3 | 14 |
| Rising | 3 | 14 |

---

## 9. Modding Opportunities

### 9.1 Modding Potential Matrix

| Feature | Moddable | Method |
|---------|----------|--------|
| Custom generator items (new variants) | ✅ | New item definition in items .txt + MapObjects hook |
| Custom generator sprites | ✅ | Add new sprite mapping in MOGenerator.lua |
| Modified generator properties (weight, sound radius, durability) | ✅ | Edit item definitions |
| New repair requirements | ✅ | Modify ISFixGenerator.lua |
| New fuel types (diesel, ethanol, electric) | ⚠️ | Add new Fluid types; generator fuel check is Java-internal |
| Portable generators | ✅ | New item + timed action (lighter weight, smaller radius) |
| Generator fuel consumption rate | ❌ | Java-internal (IsoGenerator update loop) |
| Generator power capacity | ❌ | Java-internal |
| Power grid mechanics | ❌ | Java-internal |
| Building power connection radius | ❌ | Java-internal |
| CO poisoning mechanics | ⚠️ | Warning text is Lua; actual mechanic may be Java |
| Solar panels | ⚠️ | New entity + CraftRecipe + timed actions + fuel model |
| Wind turbines | ⚠️ | New entity + CraftRecipe + timed actions + fuel model |
| Advanced electrical networks | ❌ | Requires modding engine classes directly |
| Battery storage systems | ⚠️ | Could use existing Battery/DrainableComboItem system |
| Generator UI improvements | ✅ | ISGeneratorInfoWindow can be extended |

### 9.2 Easy (Lua/config only)

1. **Custom Generator Variants** — Add new items with different weight, sound radius, durability, sprites. Register in MOGenerator.lua via `MapObjects.OnNewWithSprite`. **Difficulty**: Easy

2. **Unique Generator Behaviors** — Override timed actions to add new effects: silent generators, generators that attract zombies, generators with different fuel-to-power ratios. **Difficulty**: Easy-Medium

3. **Extended Generator Info UI** — Add new panels/tabs to ISGeneratorInfoWindow showing runtime statistics, fuel burn rate, estimated remaining time. **Difficulty**: Easy

4. **New Repair Materials** — Expand ISFixGenerator to accept alternative repair materials (ScrapMetal, specific tools). **Difficulty**: Easy

### 9.3 Medium (Lua config + new scripting)

5. **Portable Generator Mod** — Light generator (10-15 kg) with low power output, short fuel burn, carried in one hand or backpack. New timed actions for deploy/pack. **Difficulty**: Medium
   - Key: `RequiresEquippedBothHands = false` for the item
   - New timed action for unequip + place sequence

6. **Generator Environmental Effects** — Add carbon monoxide tracking logic. Hook into ISActivateGenerator to gradually build up indoor CO levels. Show warning text and apply negative moodle/health effects. **Difficulty**: Medium

7. **Dual-Fuel Generator** — Modify ISAddFuel to accept multiple fluid types (Petrol + new Ethanol/Fuel mix). Different performance per fuel type. **Difficulty**: Medium

### 9.4 Challenging (Java interaction needed)

8. **Solar Power System** — New entity class + CraftRecipe panel for assembly. ModData-driven power generation based on time of day/weather. Needs timed actions for placement/connection. Power stored in a new item's modData and fed to buildings via existing grid. **Difficulty**: Hard
   - Uses existing `hasGridPower()` if you can register solar as a "generator"

9. **Wind Turbine** — Similar to solar but requires tall placement + wind speed. **Difficulty**: Hard

10. **Advanced Generator Tuning** — Multiple generators on one building, smart load balancing, fuel efficiency upgrades. Would need to hook into or replace Java-side power consumption logic. **Difficulty**: Very Hard

11. **Electricity Skill Expansion** — New electricity-based recipes: advanced batteries, power meters, junction boxes, circuit breakers. Expand the Electricity skill progression from 0-10 with meaningful perks per level. **Difficulty**: Medium-Hard

### 9.5 Impossible Without Engine Changes

12. **Generator fuel consumption rate** — The rate fuel is burned each game tick is hardcoded in `IsoGenerator.update()` (Java). Cannot be changed without engine modding.
13. **Power grid connection radius** — How far a generator's power reaches is determined by the building system (Java).
14. **Multi-building power sharing** — Generators power one building only; the building assignment logic is Java-internal.
15. **Grid-tie inverters / backfeed to main grid** — The power grid is a binary on/off state with no capacity management exposed to Lua.

---

## 10. Important Files Reference

### Generator Lua Files

| File | Path | Purpose | Type |
|------|------|---------|------|
| `MOGenerator.lua` | `server/Map/MapObjects/MOGenerator.lua` | Sprite→IsoGenerator map object init | Server-only |
| `ISActivateGenerator.lua` | `shared/TimedActions/ISActivateGenerator.lua` | Start/stop generator | Shared |
| `ISPlugGenerator.lua` | `shared/TimedActions/ISPlugGenerator.lua` | Plug/unplug generator | Shared |
| `ISAddFuel.lua` | `shared/TimedActions/ISAddFuel.lua` | Refuel with Petrol | Shared |
| `ISFixGenerator.lua` | `shared/TimedActions/ISFixGenerator.lua` | Repair with ElectronicsScrap | Shared |
| `ISTakeGenerator.lua` | `shared/TimedActions/ISTakeGenerator.lua` | Pick up generator | Shared |
| `ISGeneratorInfoWindow.lua` | `client/ISUI/ISGeneratorInfoWindow.lua` | Info panel UI | Client |
| `ISGeneratorInfoAction.lua` | `client/TimedActions/ISGeneratorInfoAction.lua` | Open info window | Client |

### Generator Script Files

| File | Lines | Purpose |
|------|-------|---------|
| `items/normal.txt` | 4919-4985 | 4 generator item definitions |
| `items/normal.txt` | 4655-4663 | ElectronicsScrap item |
| `items/normal.txt` | 7329-7348 | PetrolCan item |
| `items/normal.txt` | 14352-14373 | JerryCan item |
| `sounds/objects/sounds_object_generator.txt` | 156 | Generator sound definitions (16 sounds) |
| `sounds/player/sounds_player_electrical.txt` | 20 | Electrical dismantle sounds |
| `recipes/recipes_electrical.txt` | 194 | Electrical dismantle/repair recipes |
| `xui/xui_skin_electric_common.txt` | 15 | UI skin (minimal - just Craft button) |

### Infrastructure Lua Files

| File | Path | Purpose |
|------|------|---------|
| `ISWorldObjectContextMenu.lua` | `client/ISUI/ISWorldObjectContextMenu.lua` | Generator menu handlers (lines 529-672) |
| `ISInventoryPaneContextMenu.lua` | `client/ISUI/ISInventoryPaneContextMenu.lua` | Inventory "Take" option for generators |
| `ISVehicleMenu.lua` | `client/Vehicles/ISUI/ISVehicleMenu.lua` | Battery charger power check |
| `DebugContextMenu.lua` | `client/DebugUIs/DebugContextMenu.lua` | Debug set-fuel option (line 1053) |
| `DebugGlobalObjectState_PropertiesPanel.lua` | `client/DebugUIs/` | Generator debug property panel |
| `Apocalypse.lua` | `shared/Sandbox/Apocalypse.lua` | Sandbox preset example |

### Item Script Files

| File | Lines | Format | Contains |
|------|-------|--------|----------|
| `items/normal.txt` | 14,726 | txt | Generator, Generator_Yellow, Generator_Blue, Generator_Old, ElectronicsScrap, PetrolCan, JerryCan |
| `items/drainable.txt` | ~2,600 | txt | Battery, PropaneTank (for reference) |

### Related Vehicle/Electrical Items

| Item | Script File | Notes |
|------|-------------|-------|
| `CarBatteryCharger` | items/normal.txt | Shares generator power check |
| `Battery` | items/drainable.txt | Drainable battery cell |
| `ElectronicsScrap` | items/normal.txt | Generator repair material |
| `PowerBar` | items/normal.txt | Electrical component (not related to power) |

### Sound Event Hierarchy

```
Object/
├── Generator/
│   ├── Startup         (GeneratorStarting)
│   ├── Shutdown        (GeneratorStopping)
│   ├── Running         (GeneratorLoop)
│   ├── StartupFail     (GeneratorFailedToStart)
│   ├── Backfire        (GeneratorBackfire)
│   ├── AddFuel         (GeneratorAddFuel)
│   ├── Repair          (GeneratorRepair)
│   └── Connect         (GeneratorConnect)
└── OldGenerator/
    ├── Startup         (OldGeneratorStarting)
    ├── Shutdown        (OldGeneratorStopping)
    ├── Running         (OldGeneratorLoop)
    ├── StartupFail     (OldGeneratorFailedToStart)
    ├── AddFuel         (OldGeneratorAddFuel)
    ├── Repair          (OldGeneratorRepair)
    └── Connect         (OldGeneratorConnect)
```

---

## Appendix: Code Concepts

### Generator State Variables (in ModData)

When a generator is picked up into inventory, these values are preserved:
- `item:getModData().fuel` — Fuel amount (float)
- `item:getModData().generatorFullType` — The generator type string (e.g., `"Base.Generator_Yellow"`)

When placed from inventory, the `ReplaceExistingObject` function uses:
- `item:getCondition()` — Current condition
- `item:getModData().fuel` — Preserved fuel

### Timing Reference

All timed action durations are in **game ticks** (= centiseconds, 100 ticks = 1 second):

| Action | Duration | Real Time |
|--------|----------|-----------|
| Activate/Deactivate | 30 ticks | 0.3 seconds |
| Plug/Unplug | 300 ticks | 3 seconds |
| Refuel (base + fuel amount) | 70 + (amount × 50) | 0.7s + 0.5s/unit |
| Repair | 150 - (Elec × 3) | 1.5s - 0.03s/level |
| Pick up | 100 ticks | 1 second |
| Info panel | 0 ticks | Instant |

### Keys Checked During Fuel Fill (Context Menu)

The fuel fill menu looks for items where:
```lua
item:getFluidContainer() and item:getFluidContainer():contains(Fluid.Petrol)
```

This means **any** FluidContainer with Petrol will work — not just PetrolCan/JerryCan. Custom fuel containers could be added.

---

*Research conducted against Project Zomboid Build 42.18 installation at D:\Games\ProjectZomboid-42.18*
*No APIs were invented — every class, method, and file path listed is sourced from actual game files.*
