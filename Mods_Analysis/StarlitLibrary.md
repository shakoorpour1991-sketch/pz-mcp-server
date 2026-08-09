---
title: "Starlit Library — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "StarlitLibrary"
mod_author: "albion"
mod_version: "2.1.3"
date_analyzed: "2025-01-10"
tags: [pz, mod-analysis, starlitlibrary, library, utility]
---

# Starlit Library — Mod Analysis

## Overview

Starlit Library is a foundational utility library for Project Zomboid mods, providing reusable components for common modding tasks. It makes no gameplay changes on its own but serves as a dependency for other mods in the Starlit ecosystem (RepairableWindows, Excavation). The library abstracts complex PZ API patterns into clean, reusable modules covering timed actions, color utilities, world object manipulation, event handling, and version management.

**Why it's notable:** Represents professional-grade library design for PZ modding with proper namespacing, comprehensive utility functions, delayed module loading for cross-context dependencies, and robust version checking with user-friendly update prompts.

## What It Adds

### Utility Modules (Shared)
- **TimedActionUtils** — Item transfer, equipment, and wear action helpers
- **Colour** — Color interpolation, conversion from ColorInfo/Color objects
- **Utils** — Variable lookup by string path, world object retrieval by coordinates
- **TableUtils** — Table manipulation helpers
- **Iterators** — Custom iteration patterns
- **Bitwise** — Bitwise operation utilities
- **Time** — Time-related calculations
- **Reflection** — Runtime type inspection helpers
- **SelfMergeTable** — Deep table merging with conflict resolution

### Event System
- **LuaEvent** — Object-oriented event implementation with listener management
- **Events** — Wrapper around PZ's event system
- **PZEvents** — Project Zomboid event integrations

### File & Data Handling
- **File** — File I/O operations
- **Json** — JSON parsing and serialization
- **ZombieData** — Zombie definition handling
- **ZombieIds** — Zombie ID mapping

### Module System
- **modules** — Delayed require mechanism for cross-context imports
- **Version** — Version checking with automatic update prompts

### Timed Actions (Shared & Client)
- **TransferItemAction** — Transfer items matching criteria to inventory
- **TimedActionUtils** — High-level action composition
- **TransferItemTypeAction** — Type-based item transfers

### Sandbox Integration
- **SandboxUtils** — Sandbox option helpers
- **Traits** — Trait definitions and validation

### Debug Tools (Client-only)
- **DebugMenu** — In-game debugging interface
- **StarlitLog** — Structured logging system
- **Logger** — Log level management
- **ZombieDataDebugger** — Zombie data inspection tools

### UI Components (Client)
- **InventoryUI** — Inventory interface extensions
- **BaseSquareCursor** — Square selection cursor base class
- **ModTranslations** — Translation loading utilities

## Structure & Architecture

### Folder Layout (Build 42.15)
```
StarlitLibrary/
├── 42.15/
│   ├── mod.info
│   ├── media/
│   │   ├── scripts/Starlit/sounds.txt
│   │   └── lua/
│   │       ├── client/Starlit/
│   │       │   ├── client/
│   │       │   │   ├── ErrorSound.lua
│   │       │   │   ├── BaseSquareCursor.lua
│   │       │   │   ├── InventoryUI.lua
│   │       │   │   ├── ModTranslations.lua
│   │       │   │   ├── timedActions/
│   │       │   │   │   ├── TransferItemAction.lua
│   │       │   │   │   ├── TimedActionUtils.lua
│   │       │   │   │   └── TransferItemTypeAction.lua
│   │       │   │   ├── debug/
│   │       │   │   │   ├── DebugMenu.lua
│   │       │   │   │   └── ZombieDataDebugger.lua
│   │       │   │   └── internal/
│   │       │   │       ├── Config.lua
│   │       │   │       └── Traits.lua
│   │       │   └── Starlit/client/ (legacy)
│   │       ├── shared/Starlit/
│   │       │   ├── debug/
│   │       │   │   ├── StarlitLog.lua
│   │       │   │   └── Logger.lua
│   │       │   ├── utils/
│   │       │   │   ├── TableUtils.lua
│   │       │   │   ├── Bitwise.lua
│   │       │   │   ├── Reflection.lua
│   │       │   │   ├── SelfMergeTable.lua
│   │       │   │   ├── Time.lua
│   │       │   │   ├── Utils.lua
│   │       │   │   ├── Colour.lua
│   │       │   │   └── Iterators.lua
│   │       │   ├── file/
│   │       │   │   ├── Json.lua
│   │       │   │   └── File.lua
│   │       │   ├── timedActions/
│   │       │   │   ├── TransferItemAction.lua
│   │       │   │   └── TimedActionUtils.lua
│   │       │   ├── sandbox/
│   │       │   │   ├── Traits.lua
│   │       │   │   └── SandboxUtils.lua
│   │       │   ├── Version.lua
│   │       │   ├── LuaEvent.lua
│   │       │   ├── TaskManager.lua
│   │       │   ├── Events.lua
│   │       │   ├── ZombieIds.lua
│   │       │   ├── EntityHandle.lua
│   │       │   ├── Globals.lua
│   │       │   ├── PZEvents.lua
│   │       │   ├── Recipe.lua
│   │       │   ├── modules.lua
│   │       │   ├── ZombieData.lua
│   │       │   ├── IsoObjectUtils.lua
│   │       │   ├── internal/json.lua
│   │       │   └── ZedScript.lua
│   │       └── typings/alias.lua
│   └── media/lua/shared/!!!!!!!starlit_load_first.lua
├── common/media/lua/shared/Translate/EN/
│   ├── IG_UI_EN.txt
│   └── UI_EN.txt
└── media/ (legacy build support)
```

### Code Organization
- **Shared**: Core utilities, event system, timed actions, file I/O, version management
- **Client**: UI components, debug tools, sound handling, cursor systems
- **Server**: No server-only files (library is designed to be client/shared focused)

### Load Order Management
```lua
-- media/lua/shared/!!!!!!!starlit_load_first.lua
-- Filename ensures this loads first due to alphabetical ordering
```

**Evidence:** Uses `!!!!!!!` prefix to guarantee earliest possible load order for bootstrapping.

## Key Techniques

### 1. Delayed Require for Cross-Context Dependencies

Solves the problem of requiring client modules from shared code:

```lua
-- 42.15/media/lua/shared/Starlit/modules.lua
local delayedRequires = {}
local uninitialisedMetatable = {
    __index = function()
        error("tried to index delayedRequire module before initialisation")
    end
}

function modules.delayedRequire(module)
    if not delayedRequires[module] then
        delayedRequires[module] = setmetatable({}, uninitialisedMetatable)
    end
    return delayedRequires[module]
end

local function initDelayedRequires()
    for moduleName, t in pairs(delayedRequires) do
        local module = require(moduleName)
        setmetatable(t, {__index = module, __newindex = module})
    end
    modules.onDelayedRequiresDone:trigger()
end

Events.OnInitGlobalModData.Add(initDelayedRequires)
```

**Evidence:** Returns an empty table with metatable that redirects to actual module after `OnInitGlobalModData` fires. Used by Excavation mod for server-only Mining module.

### 2. Object-Oriented Event System

Custom LuaEvent class with listener management:

```lua
-- 42.15/media/lua/shared/Starlit/LuaEvent.lua
local LuaEvent = {}
LuaEvent.__index = LuaEvent

function LuaEvent.new()
    local o = setmetatable(table.newarray(), LuaEvent)
    table.insert(LuaEvent._list, o)
    return o
end

function LuaEvent:addListener(listener)
    if not listener then return end
    table.insert(self, 1, listener)
end

function LuaEvent:addListenerBefore(target, listener)
    for i = 1, #self do
        if self[i] == target then
            table.insert(self, i+1, listener)
            return
        end
    end
end

function LuaEvent:trigger(...)
    for i = #self, 1, -1 do
        self[i](...)
    end
end
```

**Evidence:** Supports adding listeners at specific positions (before/after target), reverse-order triggering for proper cleanup, and automatic cleanup on Lua file reload.

### 3. Color Interpolation Utilities

Smooth color transitions for UI feedback:

```lua
-- 42.15/media/lua/shared/Starlit/utils/Colour.lua
Colour.lerpColour = function(a, b, amount)
    local result = table.newarray()
    for i = 1, 4 do
        result[i] = a[i] + (b[i] - a[i]) * amount
    end
    return result
end

Colour.fromColorInfo = function(colorInfo)
    return table.newarray(
        colorInfo:getR(), 
        colorInfo:getG(), 
        colorInfo:getB(), 
        1
    )
end

Colour.goodColour = Colour.fromColorInfo(CORE:getGoodHighlitedColor())
Colour.badColour = Colour.fromColorInfo(CORE:getBadHighlitedColor())
```

**Evidence:** Used by RepairableWindows to interpolate between green/red based on break chance percentage.

### 4. World Object Retrieval by Coordinates

Safe object lookup with bounds checking:

```lua
-- 42.15/media/lua/shared/Starlit/utils/Utils.lua
Utils.getWorldObject = function(x, y, z, i)
    local square = getSquare(x, y, z)
    if not square then return nil end
    local objects = square:getObjects()
    if objects:size() < i then return nil end
    return objects:get(i)
end

Utils.findVar = function(name, start)
    local location = luautils.split(name, "%.")
    local result = start or _G
    for j = 1, #location do
        result = result[location[j]]
        if result == nil then return end
    end
    return result
end
```

**Evidence:** Used by RepairableWindows' WindowUtils to safely retrieve window objects from coordinates and index.

### 5. Timed Action Item Transfer Pattern

Atomic item transfers with proper queuing:

```lua
-- 42.15/media/lua/shared/Starlit/timedActions/TimedActionUtils.lua
TimedActionUtils.transferFirstValid = function(character, type, predicate, predicateArg)
    assert(type or predicate, "No item predicate or type passed")
    ISTimedActionQueue.add(
        TransferItemAction:new(
            character, type, predicate, predicateArg, 1
        )
    )
end

TimedActionUtils.transferAndEquip = function(character, item, slot)
    slot = slot or "primary"
    local needEquip
    if slot == "primary" then
        needEquip = character:getPrimaryHandItem() ~= item
    else
        needEquip = character:getSecondaryHandItem() ~= item
    end
    
    if not needEquip then return end
    
    if item then
        local inventory = character:getInventory()
        if not inventory:contains(item) then
            ISTimedActionQueue.add(
                ISInventoryTransferAction:new(character, item, item:getContainer(), inventory)
            )
        end
    end
    
    ISTimedActionQueue.add(
        ISEquipWeaponAction:new(character, item, 50, slot == "primary")
    )
end
```

**Evidence:** Used by RepairableWindows and Excavation to handle complex item movement before timed actions execute.

### 6. Version Checking with User Prompts

Automatic update notification system:

```lua
-- 42.15/media/lua/shared/Starlit/Version.lua
Version.compareVersion = function(build, major, minor, patch)
    if Version.BUILD > build then return "toohigh"
    elseif Version.BUILD < build then return "toolow" end
    
    if Version.MAJOR > major then return "toohigh"
    elseif Version.MAJOR < major then return "toolow" end
    
    if Version.MINOR < minor then return "toolow"
    elseif Version.MINOR == minor and Version.PATCH < patch then
        return "toolow"
    end
    
    return "compatible"
end

Version.ensureVersion = function(major, minor, patch)
    local compareResult = Version.compareVersion(GAME_BUILD, major, minor, patch)
    
    if compareResult == "toolow" then
        local text = getText("IGUI_StarlitLibrary_VersionTooOld", 
                            Version.VERSION_STRING, 
                            string.format("%d.%d.%d", major, minor, patch))
        local popup = ISModalDialog:new(...)
        popup:initialise()
        popup:addToUIManager()
    end
    
    return compareResult
end
```

**Evidence:** Shows modal dialog with Steam overlay or browser redirect to update page when version is incompatible.

### 7. Dynamic Variable Resolution

String-based variable lookup for flexible configuration:

```lua
-- 42.15/media/lua/shared/Starlit/utils/Utils.lua
Utils.findVar = function(name, start)
    local location = luautils.split(name, "%.")
    local result = start or _G
    for j = 1, #location do
        result = result[location[j]]
        if result == nil then return end
    end
    return result
end
```

**Evidence:** Allows configs to reference variables by string path like `"SandboxVars.Excavation.DisableDepthLimit"`.

### 8. Listener Cleanup on Lua Reload

Prevents duplicate listeners after mod reload:

```lua
-- 42.15/media/lua/shared/Starlit/LuaEvent.lua
local _reloadLuaFile = reloadLuaFile
reloadLuaFile = function(filename)
    for i = 1, #LuaEvent._list do
        local event = LuaEvent._list[i]
        for j = #event, 1, -1 do
            if getFilenameOfClosure(event[j]) == filename then
                table.remove(event, j)
            end
        end
    end
    _reloadLuaFile(filename)
end
```

**Evidence:** Wraps vanilla `reloadLuaFile` to remove listeners from the reloading file before re-executing.

### 9. Typed Table Creation

Performance optimization via `table.newarray()`:

```lua
-- Used throughout
local result = table.newarray()
local colour = table.newarray(r, g, b, a)
```

**Evidence:** Pre-allocates table with array storage for better performance vs regular table creation.

### 10. Namespace Documentation via Lua Comments

Extensive type annotations for IDE support:

```lua
-- 42.15/media/lua/shared/Starlit/utils/Colour.lua
---@namespace starlit

---0-1 RGBA
---@alias Starlit.Colour [number, number, number, number]

---@class LuaEvent<T...>
---@field [integer] fun(...:T...)
```

**Evidence:** Provides EmmyLua-style annotations for autocomplete and type checking in supported editors.

## Notable Engineering

### Comprehensive Utility Coverage
The library addresses nearly every common modding need:
- Inventory manipulation (transfer, equip, wear)
- Color operations (lerp, convert, predefined good/bad)
- Event handling (custom event system with positioning)
- File I/O (JSON, general file ops)
- Version management (comparison, user prompts)
- Debugging (in-game menu, logging, zombie inspection)

### Thoughtful Load Order Design
- `!!!!!!!starlit_load_first.lua` ensures bootstrap code runs earliest
- `modules.delayedRequire()` defers problematic requires until safe
- `OnInitGlobalModData` used as synchronization point for initialization

### Performance-Conscious Implementation
- Uses `table.newarray()` for pre-allocated arrays
- Reverse iteration (`for i = #self, 1, -1`) for safe removal during traversal
- Early returns to avoid unnecessary computation
- Predicate functions instead of inline lambdas to reduce allocations

### Robust Error Prevention
- Assertions on required parameters (`assert(type or predicate, ...)`)
- Nil guards throughout (`if not listener then return end`)
- Graceful degradation when optional features unavailable
- Metatable protection on uninitialized delayed requires

### Multiplayer-Aware Design
- Shared timed actions work on both client and server
- Clear separation between client-only UI and shared logic
- Server-authoritative patterns documented in dependent mods

### Developer Experience Focus
- Comprehensive type annotations for IDE support
- Consistent naming conventions across modules
- Modular structure enables selective imports
- Debug tools built-in for troubleshooting

## Weaknesses & Risks

### 1. Complex Metatable Magic May Confuse Users

**Location:** `42.15/media/lua/shared/Starlit/modules.lua`

```lua
local uninitialisedMetatable = {
    __index = function()
        error("tried to index delayedRequire module before initialisation")
    end
}
```

**Risk:** Developers unfamiliar with metatables may not understand why their requires fail. Error messages help but don't explain the underlying mechanism.

### 2. No Server-Side Counterparts for Client Operations

**Evidence:** Entire `media/lua/server/` directory is absent.

**Risk:** Mods needing server-side utilities (e.g., authoritative inventory checks) must implement their own or assume client-provided data is trustworthy. Could lead to security gaps if not careful.

### 3. Heavy Reliance on Global State

**Location:** Multiple modules

```lua
local CORE = getCore()
local TEXT_MANAGER = getTextManager()
```

**Risk:** Caching globals at module load time means changes during runtime (e.g., language swaps) won't be reflected. Should access dynamically if mutability matters.

### 4. Version Check Only Triggers on "Too Low"

**Location:** `42.15/media/lua/shared/Starlit/Version.lua`

```lua
if compareResult == "toolow" then
    -- shows popup
end
-- "toohigh" case is commented out with TODO
```

**Risk:** Users with newer game builds than supported won't see warnings. Comment indicates awareness but fix deferred.

### 5. Circular Dependency Potential

**Evidence:** Library provides `modules.delayedRequire()` specifically to solve circular deps, indicating they're a known issue.

**Risk:** If two mods both use delayedRequire on each other, initialization order becomes critical. `OnInitGlobalModData` timing could cause race conditions.

### 6. Debug Tools Exposed in Production

**Location:** `42.15/media/lua/client/Starlit/client/debug/`

```lua
-- DebugMenu.lua, ZombieDataDebugger.lua always loaded
```

**Risk:** Debug interfaces accessible in normal gameplay. Could confuse players or expose internal state unintentionally. Should be gated behind dev mode.

### 7. Limited Documentation Beyond Type Annotations

**Evidence:** Code has excellent EmmyLua comments but no external documentation.

**Risk:** New users must read source code to understand usage patterns. Wiki or examples would improve adoption.

### 8. Hardcoded Steam Workshop ID

**Location:** `42.15/media/lua/shared/Starlit/Version.lua`

```lua
local UPDATE_URL = STEAM_ENABLED and 
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3378285185"
    or "https://github.com/demiurgeQuantified/StarlitLibrary/releases/latest"
```

**Risk:** If mod moves to different workshop ID or platform, requires code change. Could be externalized to config.

## Lessons for Modders

### 1. Use Delayed Requires for Cross-Context Imports
When shared code needs client/server modules, use `modules.delayedRequire()` instead of direct `require()`. This prevents load-order crashes.

### 2. Build Reusable Utilities Early
Identify repeated patterns in your mods (item transfers, color interpolation) and extract them into shared utilities. Future you (and other modders) will benefit.

### 3. Implement Proper Event Listener Cleanup
Always remove listeners when reloading Lua files. Wrap `reloadLuaFile` to automatically clean up closures from the reloading file.

### 4. Provide Version Checking for Dependencies
If your mod is a dependency, include version checking with user-friendly update prompts. Don't let users run incompatible versions silently.

### 5. Use Predicates for Flexible Item Matching
Instead of hardcoding item types, pass predicate functions to search functions. This supports modded items and custom conditions.

### 6. Chain Timed Actions for Complex Sequences
Break multi-step interactions into separate timed actions queued in sequence. Provides natural interruption points and cleaner code.

### 7. Cache Globals at Module Level for Performance
Accessing `getCore()` once at module load is faster than calling it repeatedly. Trade-off: won't reflect runtime changes.

### 8. Annotate Code for IDE Support
EmmyLua annotations (`---@class`, `---@param`, `---@return`) provide autocomplete and type checking in supported editors. Improves development speed and reduces bugs.

### 9. Design for Both SP and MP from Day One
Even if you only test singleplayer, structure code with MP in mind. Use client-server commands for state changes, validate on server.

### 10. Include Debug Tools But Gate Them Appropriately
Debug menus and inspectors are invaluable during development. Consider hiding them behind console commands or config flags in production.

## Version Information

**Mod Version Analyzed:** 2.1.3 (Build 42.15+)  
**Previous Version:** 41-1.1.1 (Build 41.78.16+)  
**Analysis Date:** 2025-01-10  
**Game Build Target:** 42.15 minimum, compatible with 42.20  
**Dependent Mods:** RepairableWindows (2.0.1+), Excavation (0.2.12+)  

---

*Analysis based on code-only repository snapshot. Visual assets (textures, models, sounds) were stripped per project constraints.*
