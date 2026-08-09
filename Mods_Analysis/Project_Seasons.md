---
title: "Project Seasons (B42) — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "Project_Seasons_B42"
mod_author: "Drago1212"
mod_version: "1.0.0"
date_analyzed: "2026-08-09"
tags: [pz, mod-analysis, projectseasons, build42, erosion, rust, worldgen]
---

# Project Seasons (B42) — Mod Analysis

## Overview

**Project Seasons** is a visual enhancement mod that modifies erosion and rust progression systems to create more dynamic seasonal changes in the game world. It adjusts how quickly surfaces degrade, vegetation changes, and vehicles rust based on world age and sandbox settings.

**Why it's notable:** This mod demonstrates B42's erosion system manipulation, vehicle rust mechanics, world generation biome overrides, and custom building object implementation for cleaning erosion effects.

## What It Adds

### Core Systems
- **Erosion Progression**: Multiple time-based erosion stages (0, 15, 30, 50, 80, 90 days)
- **Rust Progression**: Parallel rust stages for vehicles and metal objects
- **Clean Erosion Action**: Player can clean erosion using brooms (restores appearance)
- **Vegetation Variants**: Different bush types (dry, regular, fat) for seasonal variety

### Modified Systems
- **Erosion Speed**: Tied to sandbox option `ErosionSpeed` (values: 20, 50, 100, 200, 500)
- **Time Since Apocalypse**: Affects starting erosion state (0-360 days in 30-day increments)
- **Vehicle Rust**: Progressive rust accumulation based on erosion percentage

### Texture Groups Affected
The mod targets specific texture patterns for erosion overlay:
- `fencing_damaged*` - Damaged fences
- `crafting_ore*` - Ore-related textures
- `overlay_grime_floor*` - Floor grime overlays
- `d_streetcracks_*` - Street crack decals
- `d_floorleaves_*` - Floor leaf decals
- `vegetation_farm_*` - Farm vegetation

### Items Required
- **Broom** or **Broom_Twig**: Used for cleaning erosion (consumed on use via `transferIfNeeded`)

### Sandbox Options Integration
Uses vanilla sandbox options:
- `ErosionSpeed`: Controls rate of erosion/rust progression
- `TimeSinceApo`: Sets initial world age for erosion calculations

## Structure & Architecture

### Folder Layout
```
Project Seasons/
├── mod.info                              # Root metadata
├── 42/
│   ├── mod.info                          # Build 42-specific (v1.0.0, min 42.0.0)
│   └── media/lua/
│       ├── client/
│       │   ├── ISUI/
│       │   │   └── CleanErosionContextMenu.lua
│       │   ├── TimedActions/
│       │   │   └── CleanErosionAction.lua
│       │   ├── erosion[0-90]days.lua     # 6 erosion stage files
│       │   └── rust[0-90]days.lua        # 7 rust stage files
│       └── server/
│           ├── BuildingObjects/
│           │   └── CleanErosionCursor.lua
│           ├── worldgen/biomes/map/
│           │   └── bushes.lua
│           └── CleanErosionClientCommands.lua
```

### Code Organization
- **Client-side** (~1,200 lines): Erosion/rust calculation scripts, context menus, timed actions
- **Server-side** (~200 lines): Client command handling, building cursor, worldgen biomes
- **No shared code**: All logic is split between client and server with no overlap

### Dependencies
- **None**—fully standalone mod
- Uses vanilla `ISBuildingObject`, `ISBaseTimedAction` frameworks
- Relies on B42's erosion system (`ErosionSpeedValues`, `TimeSinceApoValues`)

## Key Techniques

### 1. Iterator-Based Vehicle Traversal

Properly handles B42's Java `Set<BaseVehicle>` return type using iterator pattern:

```lua
-- rust0days.lua (lines 11-27)
local function forEachVehicle(vehicles, fn)
    if not vehicles or not vehicles.iterator then return end

    local ok, iter = pcall(function() return vehicles:iterator() end)
    if not ok or not iter then return end

    while true do
        local hasNextOk, hasNext = pcall(function() return iter:hasNext() end)
        if not hasNextOk or not hasNext then break end

        local nextOk, veh = pcall(function() return iter:next() end)
        if nextOk and veh then
            pcall(fn, veh)
        end
    end
end
```

This is critical because `getCell():getVehicles()` returns a `Set` in B42.17+, not an `ArrayList`, so indexed `:get(i)` access fails.

### 2. Erosion Percentage Calculation

Computes erosion based on world age and sandbox settings:

```lua
-- rust0days.lua (lines 30-36)
CurrentWorldAgeDays = getGameTime():getWorldAgeHours() / 24
local sandboxOptions = getSandboxOptions()
local timeSinceApo = TimeSinceApoValues[sandboxOptions:getTimeSinceApo()] or 0
local erosionSpeed = ErosionSpeedValues[sandboxOptions:getErosionSpeed()] or 100
local timeSpent = CurrentWorldAgeDays + timeSinceApo
CurrentErosionPercentage = (timeSpent / erosionSpeed) * 100
```

Formula: `(current_days + time_since_apo) / erosion_speed * 100`

### 3. Conditional Event Registration

All erosion events are commented out by default, suggesting manual activation:

```lua
-- rust0days.lua (lines 50-59)
--Events.OnGameTimeLoaded.Add(rust.preCalculateErosion)
--Events.Everydays.Add(rust.preCalculateErosion)
--Events.OnGameStart.Add(rust.preCalculateErosion)
--Events.OnNewGame.Add(rust.preCalculateErosion)
--Events.OnCreatePlayer.Add(rust.preCalculateErosion)
--Events.OnServerStarted.Add(rust.preCalculateErosion)
--Events.OnDusk.Add(rust.preCalculateErosion)
--Events.OnDawn.Add(rust.preCalculateErosion)
--Events.OnPostDistributionMerge.Add(rust.preCalculateErosion)
--Events.OnLoadMapZones.Add(rust.preCalculateErosion)
```

This allows server admins to choose which events trigger erosion updates.

### 4. String Pattern Matching for Texture Detection

Uses `luautils.stringStarts()` for efficient texture identification:

```lua
-- CleanErosionContextMenu.lua (lines 27-45)
if object:getTextureName() and luautils.stringStarts(object:getTextureName(), "fencing_damaged") then
    target = object;
else
    local attached = object:getAttachedAnimSprite()
    if attached then
        for n=1,attached:size() do
            local sprite = attached:get(n-1)
            if sprite and sprite:getParentSprite() and sprite:getParentSprite():getName() and
                luautils.stringStarts(sprite:getParentSprite():getName(), "fencing_damaged")
                or luautils.stringStarts(sprite:getParentSprite():getName(), "crafting_ore")
                or luautils.stringStarts(sprite:getParentSprite():getName(), "overlay_grime_floor") then
                target = sprite
                break;
            end
        end
    end
end
```

### 5. Server-Authoritative Tile Object Removal

Client requests erosion cleanup, server validates and executes:

```lua
-- CleanErosionClientCommands.lua (lines 4-20)
local function onCleanErosionCommand(module, command, player, args)
    if module == 'CleanErosion' then
        if command == 'CleanErosionCommand' then
            local sq = getCell():getGridSquare(args.x, args.y, args.z)
            if not sq then return end

            for i=0,sq:getObjects():size()-1 do
                local object = sq:getObjects():get(i);
                if object:getTextureName() and luautils.stringStarts(object:getTextureName(), "fencing_damaged") then
                    sq:RemoveTileObject(object);
                else
                    -- Handle attached sprites...
                    object:RemoveAttachedAnim(n-1)
                    object:transmitUpdatedSpriteToClients()
                end
            end
        end
    end
end
Events.OnClientCommand.Add(onCleanErosionCommand)
```

### 6. Building Object Pattern for Cleaning Tool

Implements `ISBuildingObject` derivative for the cleaning cursor:

```lua
-- CleanErosionCursor.lua (lines 1-17)
CleanErosionCursor = ISBuildingObject:derive("CleanErosionCursor")

function CleanErosionCursor:create(x, y, z, north, sprite)
    local player = self.character
    local inventory = player:getInventory()
    local square = getWorld():getCell():getGridSquare(x, y, z)
    local item = inventory:getFirstTypeEvalRecurse("Broom", predicateNotBroken);
    local items = inventory:getFirstTypeEvalRecurse("Broom_Twig", predicateNotBroken);
    
    if luautils.walkAdj(player, square, true) then
        ISWorldObjectContextMenu.transferIfNeeded(player, item, items)
        luautils.equipItems(player, item, items)
        ISTimedActionQueue.add(CleanErosionAction:new(player, square, 150));
    end
end
```

### 7. Item Condition Validation

Only allows non-broken brooms for cleaning:

```lua
-- CleanErosionCursor.lua (lines 3-5)
local function predicateNotBroken(item, items)
    return not item:isBroken() --and item:hasTag("DigPlow")
end
```

### 8. WorldGen Biome Overrides

Defines custom bush variants for seasonal vegetation:

```lua
-- bushes.lua (lines 1-33)
local bush_dry = {
    features = {
        BUSH = {
            { f = worldgen.features.BUSH.bush_dry, p = 1.00 }
        }
    },
    params = {
        bush = { "DRY" },
        placements = {
            GENERIC = {
                "blends_natural_01_*",
                "!blends_natural_01_0",  -- Exclusion patterns
                -- ...
            },
        },
        protected = {
            "vegetation_drying*",
            "vegetation_farm*",
            -- ...
        },
    }
}
worldgen.biomes_map["bush_dry"] = bush_dry
```

### 9. Attached Sprite Handling

Removes erosion overlays from attached sprite collections:

```lua
-- CleanErosionClientCommands.lua (lines 17-28)
local attached = object:getAttachedAnimSprite()
if attached then
    for n = attached:size(), 1, -1 do  -- Reverse iteration for safe removal
        local sprite = attached:get(n-1)
        if sprite and sprite:getParentSprite():getName() and
            luautils.stringStarts(sprite:getParentSprite():getName(), "fencing_damaged") then
            object:RemoveAttachedAnim(n-1)
            object:transmitUpdatedSpriteToClients()
        end
    end
end
```

### 10. Multi-Stage Erosion Files

Separate Lua files for each erosion stage (0, 15, 30, 50, 80, 90 days), allowing granular control over progression thresholds.

## Notable Engineering

### ✅ Proper Java Iterator Usage
Correctly handles B42's transition from `ArrayList` to `Set` for vehicle collections using the iterator pattern with `pcall()` error handling.

### ✅ Comprehensive Error Handling
Every Java interop call is wrapped with `pcall()`:
```lua
local ok, iter = pcall(function() return vehicles:iterator() end)
if not ok or not iter then return end
```

### ✅ Reverse Iteration for Safe Removal
When removing attached sprites, iterates backwards to prevent index shifting:
```lua
for n = attached:size(), 1, -1 do
    object:RemoveAttachedAnim(n-1)
end
```

### ✅ Modular Stage Files
Each erosion/rust stage is in a separate file, making it easy to adjust thresholds or disable specific stages.

### ✅ Pattern-Based Texture Matching
Using `stringStarts()` with wildcards (`*`) allows matching texture families without hardcoding every variant.

### ✅ Client-Server Separation
- Client: Calculates erosion percentages, renders UI, queues actions
- Server: Validates and executes tile modifications, syncs to clients

## Weaknesses & Risks

### ⚠️ Commented-Out Event Handlers
All event registrations are commented out by default. Users must manually uncomment them, which is error-prone and unclear for non-technical users.

### ⚠️ No Event Debouncing
If multiple erosion events fire simultaneously (e.g., `OnDusk` + `Everydays`), the same calculation runs multiple times per tick.

### ⚠️ Hardcoded Texture Names
Texture patterns like `"fencing_damaged"` are hardcoded. If TIS changes sprite names, the mod breaks silently.

### ⚠️ No Performance Optimization
The erosion calculation iterates all vehicles and all objects on all squares every time it runs. On large saves, this could cause lag spikes.

### ⚠️ Missing Null Checks
Some code paths don't check for nil before dereferencing:
```lua
if sprite:getParentSprite():getName() and ...
```
Should be:
```lua
if sprite and sprite:getParentSprite() and sprite:getParentSprite():getName() and ...
```

### ⚠️ Item Consumption Without Verification
The `transferIfNeeded` function may consume brooms, but there's no verification that the action succeeded before queueing the timed action.

### ⚠️ No Localization
All text strings (if any) are hardcoded. No translation files are included.

### ⚠️ Inconsistent Module Naming
Client commands use module name `'CleanErosion'` but the mod ID is `Project_Seasons_B42`. This could conflict with other mods using the same module name.

### ⚠️ No Sandbox Option Validation
The code assumes `ErosionSpeedValues[sandboxOptions:getErosionSpeed()]` will always return a valid value. Invalid indices return `nil`, causing division by zero:
```lua
local erosionSpeed = ErosionSpeedValues[sandboxOptions:getErosionSpeed()] or 100
CurrentErosionPercentage = (timeSpent / erosionSpeed) * 100  -- Division by zero if nil
```

### ⚠️ Vehicle Rust Function May Not Exist
The code calls `veh:setRust(0.0)` but doesn't verify this method exists on all vehicle types in all B42 versions.

## Lessons for Modders

### 1. Use Iterator Pattern for Java Collections
When working with B42 Java collections, always use iterators for `Set` types:
```lua
local iter = vehicles:iterator()
while iter:hasNext() do
    local veh = iter:next()
    -- Process veh
end
```

### 2. Wrap Java Calls with pcall()
Java-Lua interop can fail unexpectedly. Always protect with `pcall()`:
```lua
local ok, result = pcall(function() return javaObject:javaMethod() end)
if not ok then return end
```

### 3. Iterate Backwards When Removing
When removing items from a collection during iteration, go backwards:
```lua
for i = collection:size(), 1, -1 do
    collection:remove(i-1)  -- Java uses 0-based indexing
end
```

### 4. Use Pattern Matching for Flexibility
Match texture families with prefix patterns instead of exact names:
```lua
if stringStarts(textureName, "overlay_grime_floor") then
    -- Matches overlay_grime_floor_01, overlay_grime_floor_02, etc.
end
```

### 5. Separate Concerns by Game Stage
Put different erosion stages in separate files for easier tuning:
```
erosion0days.lua    -- Initial state
erosion15days.lua   -- After 15 days
erosion30days.lua   -- After 30 days
```

### 6. Validate Sandbox Option Indices
Always provide fallbacks for array lookups from sandbox options:
```lua
local value = MyArray[sandboxOptions:getOption()] or defaultValue
```

### 7. Use Server Authority for World Changes
Let clients request changes, but let the server execute and broadcast:
```lua
-- Client: sendClientCommand(...)
-- Server: Events.OnClientCommand.Add(handler)
```

### 8. Check Method Existence Before Calling
Verify Java methods exist before invoking:
```lua
if veh.setRust then
    veh:setRust(value)
end
```

## Version Information

- **Mod Version Analyzed:** 1.0.0
- **Build 42 Version:** 42.20 (mod.info specifies minimum 42.0.0)
- **Minimum Game Version:** 42.0.0
- **Date Analyzed:** 2026-08-09
- **Files Analyzed:** 31 files (14 Lua scripts, 2 mod.info files, 15 legacy files in root `/media/`)
- **Total Lines of Code:** ~1,400 lines across client/server

---

*Analysis generated from code-only mod repository. Visual assets (textures, models, sounds) were not present for inspection. Note: This mod has duplicate files in both root `media/` and `42/media/` directories—the B42-specific versions in `42/` should take precedence.*
