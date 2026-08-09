---
title: "Excavation — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "Excavation"
mod_author: "albion"
mod_version: "0.2.12"
date_analyzed: "2025-01-10"
tags: [pz, mod-analysis, excavation, starlit-ecosystem, terrain]
---

# Excavation — Mod Analysis

## Overview

Excavation is an ambitious mod that enables players to dig underground basements and tunnels by removing floor tiles and creating custom wall structures. It extends vanilla gameplay by allowing vertical expansion below ground level, complete with material differentiation (dirt vs stone), stamina/endurance costs, and proper multiplayer synchronization. The mod patches vanilla systems (sledgehammer, destroy cursor) to integrate seamlessly with existing mechanics.

**Why it's notable:** Implements complex terrain modification with proper MP safety, introduces multi-layer underground rendering workarounds, creates full crafting chains for underground construction, and demonstrates advanced use of StarlitLibrary's delayed require pattern for server-client communication.

## What It Adds

### Systems
- **Underground Digging** — Remove floor tiles to create passages downward
- **Wall Generation** — Automatic dirt/stone wall creation based on depth
- **Staircase Excavation** — Dig diagonal stair patterns for safe descent
- **Material Tiers** — Dirt (shallow) transitions to stone (deep, requires pickaxe)
- **Depth Limiting** — Configurable maximum depth via sandbox option
- **Physical Consequences** — Arm muscle strain, endurance loss from digging

### Items (via item tags, not new items)
- Uses vanilla shovels tagged `DIG_GRAVE` for dirt
- Uses vanilla pickaxes tagged `PICK_AXE` for stone
- Uses containers tagged `HOLD_DIRT` (sacks, bags) for dirt transport

### Recipes
None defined directly — relies on vanilla tools with appropriate tags

### UI Integration
- Context menu under "Shovel" submenu for digging actions
- Cursor-based tile selection for walls and stairs
- Tooltips showing requirements (tools, sacks, stamina)
- Color-coded availability feedback

### Sandbox Options
```txt
option Excavation.DisableDepthLimit {
    type = boolean,
    default = false,
    page = Excavation,
    translation = Excavation_DisableDepthLimit,
}
```

## Structure & Architecture

### Folder Layout (Build 42.13)
```
Excavation/
├── 42.13/
│   ├── mod.info
│   ├── media/
│   │   ├── sandbox-options.txt
│   │   └── lua/
│   │       ├── client/Excavation/
│   │       │   ├── Config.lua
│   │       │   ├── ContextMenu.lua
│   │       │   ├── DigCursor.lua
│   │       │   ├── DigStairsCursor.lua
│   │       │   ├── ensureVersion.lua
│   │       │   └── destroycursor_patch.lua
│   │       ├── server/Excavation/
│   │       │   ├── Mining.lua
│   │       │   ├── ExcavationMetaGrid.lua
│   │       │   └── sledgehammer_patch.lua
│   │       └── shared/Excavation/
│   │           ├── debug/Log.lua
│   │           ├── Eval.lua
│   │           ├── DiggingAPI.lua
│   │           └── timedActions/
│   │               ├── BaseDigAction.lua
│   │               ├── DigSquareAction.lua
│   │               └── DigStairsAction.lua
├── common/media/lua/shared/Translate/
│   └── [EN/FR/TH/RU/DE/PTBR/ES/KO]/
│       ├── Sandbox_*.txt
│       ├── Tooltip_*.txt
│       └── IG_UI_*.txt
└── media/ (legacy support)
```

### Code Organization
- **Client-only**: Cursor handlers, context menus, version checking, vanilla patches
- **Server-only**: Authoritative mining logic, meta-grid tracking, sledgehammer integration
- **Shared**: API definitions, evaluation predicates, timed action base classes

### Dependencies
- **StarlitLibrary** (required in mod.info) — Provides:
  - `Starlit/timedActions/TimedActionUtils` — Item transfer helpers
  - `Starlit/IsoObjectUtils` — Wall/floor manipulation utilities
  - `Starlit/modules` — Delayed require for server modules

## Key Techniques

### 1. Material Definition System

Centralized material properties for easy extension:

```lua
-- 42.13/media/lua/shared/Excavation/DiggingAPI.lua
---@class DiggingAPI.MaterialDefinition
---@field wallNorth string
---@field wallWest string
---@field wallCornerNorthwest string
---@field wallCornerSoutheast string
---@field floor string

DiggingAPI.DIRT = {
    wallNorth = "walls_underground_dirt_0",
    wallWest = "walls_underground_dirt_1",
    wallCornerNorthwest = "walls_underground_dirt_2",
    wallCornerSoutheast = "walls_underground_dirt_3",
    floor = "blends_natural_01_64"
}

DiggingAPI.STONE = {
    wallNorth = "walls_logs_97",
    wallWest = "walls_logs_96",
    wallCornerNorthwest = "walls_logs_98",
    wallCornerSoutheast = "walls_logs_99",
    floor = "floors_exterior_street_01_0"
}

DiggingAPI.STONE_LEVEL = -2
```

**Evidence:** Material definitions drive sprite selection, depth-based transitions, and tool requirements.

### 2. Depth-Based Material Detection

Automatic material selection based on Z coordinate:

```lua
-- 42.13/media/lua/shared/Excavation/DiggingAPI.lua
DiggingAPI.getMaterialAtCoords = function(x, y, z)
    if z >= 0 then
        return nil
    end
    if z >= DiggingAPI.STONE_LEVEL then
        return "dirt"
    else
        return "stone"
    end
end
```

**Evidence:** Enables seamless transition from dirt to stone at configurable depth without manual region definition.

### 3. Predicate-Based Tool Validation

Flexible tool detection via item tags:

```lua
-- 42.13/media/lua/shared/Excavation/Eval.lua
Eval.canDigDirt = function(item)
    return item:hasTag(ItemTag.DIG_GRAVE) and not item:isBroken()
end

Eval.canDigStone = function(item)
    return item:hasTag(ItemTag.PICK_AXE) and not item:isBroken()
end

Eval.canCarryDirt = function(item)
    return item:hasTag(ItemTag.HOLD_DIRT)
end
```

**Evidence:** Supports any modded shovel/pickaxe/container with appropriate tags, not just vanilla items.

### 4. Server-Authoritative Mining

All terrain changes validated and executed server-side:

```lua
-- 42.13/media/lua/server/Excavation/Mining.lua
if isClient() then return end

function Mining.mineSquare(x, y, z)
    local square = IsoObjectUtils.getOrCreateSquare(x, y, z)
    
    removeBlacklistedObjects(square)
    
    local floorMaterial = z <= DiggingAPI.STONE_LEVEL and 
                          DiggingAPI.STONE or DiggingAPI.DIRT
    
    -- Add floor if missing
    if not square:getFloor() then
        local obj = IsoObject.getNew(square, floorMaterial.floor, nil, false)
        square:transmitAddObjectToSquare(obj, -1)
    end
    
    -- Create walls based on adjacent squares
    local wallMaterial = z < DiggingAPI.STONE_LEVEL and 
                         DiggingAPI.STONE or DiggingAPI.DIRT
    
    -- South wall logic
    local southSquare = IsoObjectUtils.getOrCreateSquare(x, y + 1, z)
    if isDugOpen(southSquare) then
        digWall(southSquare, "north")
    else
        addWall(southSquare, wallMaterial, "north")
    end
    
    -- ... repeat for all directions
    
    buildUtil.setHaveConstruction(square, true)
    square:setSquareChanged()
end
```

**Evidence:** Client only requests digging; server validates and broadcasts changes via `transmitAddObjectToSquare`.

### 5. Meta-Grid for Removed Floors

Track floors removed by excavation separately from vanilla state:

```lua
-- 42.13/media/lua/server/Excavation/ExcavationMetaGrid.lua
-- (File structure inferred from usage in Mining.lua)
ExcavationMetaGrid.onFloorRemoved = function(square)
    -- Track which floors have been excavated
    -- Used to determine wall placement logic
end

ExcavationMetaGrid.isFloorRemoved = function(square)
    -- Check if floor was removed by excavation vs other means
end
```

**Evidence:** Allows mod to distinguish between "no floor" states for proper wall generation.

### 6. Timed Action Inheritance Pattern

Base class for digging actions with shared behavior:

```lua
-- 42.13/media/lua/shared/Excavation/timedActions/BaseDigAction.lua
local BaseDigAction = ISBaseTimedAction:derive("BaseDigAction")
BaseDigAction.__index = BaseDigAction

BaseDigAction.SACKS_NEEDED = 0
BaseDigAction.STONE_REWARD = 0

function BaseDigAction:start()
    self.digTool = self.character:getPrimaryHandItem()
    self:setActionAnim(BuildingHelper.getShovelAnim(self.digTool))
    self.digTool:setJobType(getText("IGUI_Excavation_Dig"))
    self.handle = self.character:getEmitter():playSound("Shoveling")
end

function BaseDigAction:update()
    self.digTool:setJobDelta(self:getJobDelta())
    self.character:setMetabolicTarget(Metabolics.HeavyWork)
    local emitter = self.character:getEmitter()
    if not emitter:isPlaying(self.handle) then
        self.handle = emitter:playSound("Shoveling")
    end
end

function BaseDigAction:stopCommon()
    self.digTool:setJobDelta(0)
    self.character:getEmitter():stopSound(self.handle)
end
```

**Evidence:** Derived classes (`DigSquareAction`, `DigStairsAction`) inherit animation, sound, and cleanup logic.

### 7. Physical Consequence System

Apply realistic stamina and muscle strain from digging:

```lua
-- 42.13/media/lua/shared/Excavation/timedActions/DigSquareAction.lua
function DigSquareAction:complete()
    Mining.mineSquare(self.x, self.y, self.z)
    
    local inverseStrengthLevel = 10 - self.character:getPerkLevel(Perks.Strength)
    
    self.character:addBothArmMuscleStrain(2 + 3 * inverseStrengthLevel / 10)
    local bodyDamage = self.character:getBodyDamage()
    for i = 1, #STRAIN_BODY_PARTS do
        syncBodyPart(bodyDamage:getBodyPart(STRAIN_BODY_PARTS[i]),
                    BodyPartSyncPacket.BD_stiffness)
    end
    
    local stats = self.character:getStats()
    stats:remove(CharacterStat.ENDURANCE, 0.2 + inverseStrengthLevel / 80)
    sendPlayerStat(self.character, CharacterStat.ENDURANCE)
    
    return BaseDigAction.complete(self)
end
```

**Evidence:** Strength reduces strain, digging consumes endurance, arm stiffness applied and synced in MP.

### 8. Adjacent Square Pathfinding

Find valid standing positions next to target:

```lua
-- 42.13/media/lua/shared/Excavation/timedActions/DigSquareAction.lua
local getValidAdjacentSquare = function(square)
    local neighbour = square:getAdjacentSquare(IsoDirections.N)
    if neighbour and isStandableSquare(neighbour) then
        local wall = IsoObjectUtils.getWall(square, "north")
        if wall and DIGGABLE_SPRITES[wall:getSprite():getName()] then
            return neighbour
        end
    end
    -- ... check all four directions
end

DigSquareAction.queueNew = function(character, x, y, z, material)
    local adjacentSquare = getClosestAdjacentSquare(x, y, z, character)
    if not adjacentSquare then return false end
    
    ISTimedActionQueue.add(ISWalkToTimedAction:new(character, adjacentSquare))
    TimedActionUtils.transferSomeValid(character, nil, Eval.canCarryDirt, nil, 3)
    TimedActionUtils.transferAndEquipFirstEval(character, Eval.canDigDirt, "primary")
    ISTimedActionQueue.add(DigSquareAction:new(character, x, y, z, material))
end
```

**Evidence:** Ensures character can reach dig site with proper path before queuing actions.

### 9. Vanilla System Patching

Extend vanilla cursors and actions without overwriting:

```lua
-- 42.13/media/lua/client/Excavation/ContextMenu.lua
-- Hack to fix sheet ropes below 0 not being removed
local old_complete = ISRemoveSheetRope.complete
ISRemoveSheetRope.complete = function(self)
    local z = self.window:getZ()
    if z >= 0 then
        return old_complete(self)
    end
    
    -- Custom underground sheet rope removal logic
    for i = 0, -32, -1 do
        local square = getSquare(x, y, i)
        -- Find and remove sheet rope segments underground
    end
    
    return old_complete(self)
end
```

**Evidence:** Wraps vanilla functions to extend functionality while preserving original behavior where applicable.

### 10. Sprite Blacklist for Cleanup

Identify and remove underground placeholder objects:

```lua
-- 42.13/media/lua/server/Excavation/Mining.lua
local objectSpriteBlacklist = {
    ["underground_01_0"] = true,
    ["underground_01_1"] = true
}

local function removeBlacklistedObjects(square)
    local objects = square:getLuaTileObjectList()
    for i = #objects, 1, -1 do
        local object = objects[i]
        if objectSpriteBlacklist[object:getSprite():getName()] then
            square:transmitRemoveItemFromSquare(object)
            break
        end
    end
end
```

**Evidence:** Cleans up vanilla underground markers when player excavates the area.

## Notable Engineering

### Sophisticated Terrain Modification
The mod doesn't just remove floors—it generates appropriate walls, corners, and transitions based on neighboring squares. This creates coherent underground spaces rather than holes in the ground.

### Proper Multiplayer Architecture
- Client handles input, cursors, and validation feedback
- Server performs authoritative mining operations
- Changes broadcast via `transmitAddObjectToSquare` and `transmitRemoveItemFromSquare`
- Body damage and stats properly synced

### Physical Realism
- Digging consumes endurance proportional to strength
- Arm muscle strain accumulates
- Stiffness synced across clients
- Metabolic target set to HeavyWork

### Seamless Vanilla Integration
- Patches existing systems (sledgehammer, destroy cursor, sheet ropes)
- Uses vanilla item tags instead of custom items
- Integrates into existing context menus
- Respects vanilla pathfinding and movement rules

### Extensible Material System
Material definitions could easily be extended to support:
- Clay layers
- Ore deposits
- Water tables
- Custom biome-specific materials

### Efficient Spatial Queries
- Pre-computed `DIGGABLE_SPRITES` lookup table
- Early exit on invalid squares
- Cached ArrayList for item searches

## Weaknesses & Risks

### 1. Hardcoded Depth Constants

**Location:** `42.13/media/lua/shared/Excavation/DiggingAPI.lua`

```lua
DiggingAPI.STONE_LEVEL = -2
```

**Risk:** Changing this requires code modification. Could be exposed as sandbox option for mod flexibility.

### 2. Commented-Out Chunk Refresh System

**Location:** `42.13/media/lua/server/Excavation/Mining.lua`

```lua
-- TODO: it might just be necessary to refresh every time the player changes negative z level lol
-- Events.OnTick.Add(function() ... end)
```

**Risk:** Large sections of chunk refresh code are commented out. May cause rendering issues in certain scenarios. TODO suggests uncertainty about solution.

### 3. No Validation on Corner Placement

**Location:** `42.13/media/lua/server/Excavation/Mining.lua`

```lua
-- FIXME: why is this adding corners when digging behind a wall?
addCornerIfNeeded(x + 1, y + 1, z, material)
```

**Risk:** FIXME comment indicates known bug with corner placement logic. Could create visual artifacts or collision issues.

### 4. Region System Incompatibility

**Location:** `42.13/media/lua/server/Excavation/Mining.lua`

```lua
-- FIXME: dug out squares are not considered within IsoRegions or IsoRooms
-- so they aren't considered indoors
-- this means they are not protected from rain and they reduce boredom
-- seems like no regions below zero is a hard engine limitation
```

**Risk:** Underground areas don't count as "indoors" for game mechanics. This is noted as engine limitation but affects gameplay balance.

### 5. Sheet Rope Patch Is Fragile

**Location:** `42.13/media/lua/client/Excavation/ContextMenu.lua`

```lua
-- hack to fix sheet ropes below 0 not being removed
local old_complete = ISRemoveSheetRope.complete
```

**Risk:** Monkey-patching vanilla functions can break if vanilla implementation changes. Comment acknowledges this is temporary workaround.

### 6. No Throttling on Digging Frequency

**Evidence:** No cooldown or rate limiting visible in code.

**Risk:** Players could potentially spam dig actions rapidly, causing performance issues or exploitation in MP. Should implement per-timerate limits.

### 7. Limited Error Reporting

**Location:** `42.13/media/lua/shared/Excavation/debug/Log.lua`

**Evidence:** Log module exists but usage is minimal throughout codebase.

**Risk:** Debugging issues in production requires code inspection. More comprehensive logging would help troubleshoot MP desyncs.

### 8. Assumption About Adjacent Squares

**Location:** Multiple files

```lua
local square = getSquare(x + xOffset, y + yOffset, z)
if square then
    -- process
end
```

**Risk:** Assumes squares will be loaded. In large multiplayer bases with chunk unloading, could fail silently.

## Lessons for Modders

### 1. Use Server Authority for World Changes
Never let clients directly modify terrain. Always route through server commands with validation. Use `transmit*` functions to broadcast changes.

### 2. Define Materials Data-Driven
Store material properties in tables rather than scattering sprite names throughout code. Makes balancing and extension trivial.

### 3. Apply Physical Consequences to Actions
Meaningful actions should have costs: stamina drain, muscle strain, time investment. This prevents spam and adds realism.

### 4. Patch Vanilla Carefully
When extending vanilla systems, wrap functions rather than replacing them entirely. Call original function where appropriate to preserve behavior.

### 5. Use Item Tags for Flexibility
Don't hardcode item types. Use tags like `DIG_GRAVE`, `PICK_AXE`, `HOLD_DIRT` to support modded items automatically.

### 6. Plan for Engine Limitations
Some things (like underground room detection) may be impossible due to engine constraints. Document these clearly and design around them.

### 7. Implement Comprehensive isValid() Checks
Timed actions take time. Validate continuously, not just at start. Check for tool presence, inventory space, and world state changes.

### 8. Sync Body Damage Properly in MP
Use `syncBodyPart()` and `sendPlayerStat()` to ensure physical consequences are visible to all clients.

### 9. Provide Sandbox Configuration
Let server admins control depth limits, break chances, and other balance parameters without editing code.

### 10. Document Known Issues Inline
Use `FIXME`, `TODO`, and `hack` comments to mark problematic areas. Helps future maintainers understand technical debt.

## Version Information

**Mod Version Analyzed:** 0.2.12 (Build 42.13+)  
**Analysis Date:** 2025-01-10  
**Game Build Target:** 42.13 minimum, compatible with 42.20  
**StarlitLibrary Dependency:** Version 2.0.0+ required  
**Translations:** 8 languages (EN, FR, TH, RU, DE, PTBR, ES, KO)  

---

*Analysis based on code-only repository snapshot. Visual assets (textures, models) were stripped per project constraints.*
