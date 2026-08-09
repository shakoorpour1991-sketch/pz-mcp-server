---
title: "Repairable Windows — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "RepairableWindows"
mod_author: "albion"
mod_version: "2.0.1"
date_analyzed: "2025-01-10"
tags: [pz, mod-analysis, repairablewindows, starlit-ecosystem]
---

# Repairable Windows — Mod Analysis

## Overview

Repairable Windows is a quality-of-life mod that allows players to remove glass from windows without destroying them completely, and later reinstall glass panes. This fills a gap in vanilla Project Zomboid where smashing windows always destroys the glass permanently. The mod is notable for its clean multiplayer-safe architecture using client-server command patterns, and its dependency on StarlitLibrary for utility functions.

**Why it's notable:** Demonstrates proper MP-safe window manipulation through server-authoritative state changes, integrates seamlessly with vanilla context menus, and includes a full crafting chain for producing glass panes from raw materials.

## What It Adds

### Items (defined in `42.13/media/scripts/RepairableWindows/items.txt`)
- **LargeGlassPane** — Weight: 0.8, tagged as `Glass`, uses `GlassPanel` model
- **ClayLargeSheetMoldUnfired** — Unfired clay mold for glassmaking
- **ClayLargeSheetMold** — Fired clay mold ready for glass production

### Recipes (defined in `42.13/media/scripts/RepairableWindows/recipes.txt`)
- **MakeLargeSheetMold** — Pottery bench recipe: 12 Clay + clay tool → unfired mold (Pottery XP: 15)
- **FireClayLargeSheetMold** — Kiln recipe: unfired mold + fire starter + fuel → fired mold
- **MakeLargeGlassPane** — Glassmaking recipe: fired mold + 4 CeramicCrucibleWithGlass → LargeGlassPane (Glassmaking XP: 25)

### Systems
- Window removal via crowbar (Woodwork skill-gated)
- Window installation from inventory
- Break chance calculation based on Woodwork perk level
- Sandbox option for break chance difficulty (None/Low/High)

### UI Integration
- Context menu options under the "Window" submenu
- Tooltips showing skill requirements and break chance percentages
- Color-coded feedback (green/red) for success likelihood

## Structure & Architecture

### Folder Layout (Build 42.13)
```
RepairableWindows/
├── 42.13/
│   ├── mod.info
│   ├── media/
│   │   ├── sandbox-options.txt
│   │   ├── scripts/RepairableWindows/
│   │   │   ├── items.txt
│   │   │   └── recipes.txt
│   │   └── lua/
│   │       ├── client/RepairableWindows/
│   │       │   ├── ensureVersion.lua
│   │       │   └── ContextMenu.lua
│   │       ├── shared/RepairableWindows/
│   │       │   ├── AddWindowAction.lua
│   │       │   └── RemoveWindowAction.lua
│   │       └── server/RepairableWindows/
│   │           └── ClientCommands.lua
├── common/
│   └── media/lua/shared/Translate/
│       └── [EN/RU/ES/IT/TR]/
│           ├── ItemName_*.txt
│           ├── Sandbox_*.txt
│           ├── Tooltip_*.txt
│           ├── IG_UI_*.txt
│           └── Recipes_*.txt
└── media/
    ├── lua/
    │   ├── client/RepairableWindows/
    │   │   ├── ServerCommands.lua
    │   │   ├── AddWindowAction.lua (legacy)
    │   │   ├── RemoveWindowAction.lua (legacy)
    │   │   └── ContextMenu.lua (legacy)
    │   ├── server/RepairableWindows/
    │   │   └── ClientCommands.lua
    │   └── shared/RepairableWindows/
    │       ├── Log.lua (empty)
    │       └── WindowUtils.lua
    └── scripts/RepairableWindows/
        ├── items.txt
        └── models.txt
```

### Code Organization
- **Client-only**: Context menu handling, version checking, server command receivers
- **Server-only**: Client command handlers (authoritative window state changes)
- **Shared**: Timed action definitions (used by both sides for prediction/validation)

### Dependencies
- **StarlitLibrary** (required in mod.info) — Provides:
  - `Starlit/timedActions/TimedActionUtils` — Item transfer helpers
  - `Starlit/utils/Colour` — Color interpolation for UI feedback
  - `Starlit/utils/Utils` — `getWorldObject()` helper

## Key Techniques

### 1. Client-Server Command Pattern for MP Safety

The mod uses explicit client-server commands rather than direct object manipulation to ensure authoritative state management:

```lua
-- 42.13/media/lua/server/RepairableWindows/ClientCommands.lua
ClientCommands.handleAddWindow = function(player, window, item)
    if not window:isSmashed() or not window:isGlassRemoved() then
        log("Attempt to add window... failed: window is not broken", "debug", ...)
        return
    end
    window:setGlassRemoved(false)
    window:setSmashed(false)
    player:sendObjectChange("removeItemID", {id = item:getID(), type = item:getFullType()})
    sendServerCommand("RepairableWindows", "updateWindowState",
        {x = window:getX(), y = window:getY(), z = window:getZ(),
         i = window:getObjectIndex(), state = "glass"})
end
```

**Evidence:** Server validates preconditions before allowing state changes, then broadcasts via `sendServerCommand()` to sync clients.

### 2. Timed Action Queue Chaining

Actions are queued in sequence: walk → transfer item → equip tool → perform action:

```lua
-- 42.13/media/lua/shared/RepairableWindows/RemoveWindowAction.lua
RemoveWindowAction.queueNew = function(character, window)
    local square = AdjacentFreeTileFinder.FindWindowOrDoor(...)
    local crowbar = character:getInventory():getFirstTagEvalRecurse(ItemTag.CROWBAR, predicateNotBroken)
    
    ISTimedActionQueue.add(ISWalkToTimedAction:new(character, square))
    TimedActionUtils.transferAndEquip(character, crowbar, "primary")
    ISTimedActionQueue.add(RemoveWindowAction:new(character, window))
end
```

**Evidence:** Uses Starlit's `TimedActionUtils.transferAndEquip()` to handle inventory transfers and equipment atomically.

### 3. Skill-Based Validation with Visual Feedback

Context menu shows Woodwork skill level and break chance with color coding:

```lua
-- 42.13/media/lua/client/RepairableWindows/ContextMenu.lua
local skillLevel = character:getPerkLevel(Perks.Woodwork)
if RemoveWindowAction.canPerform(character) then
    skillColour = GOOD_COLOUR
else
    option.notAvailable = true
    skillColour = BAD_COLOUR
end

local breakChance = RemoveWindowAction.getWindowBreakChance(character)
local colour = Colour.lerpColour(GOOD_COLOUR, BAD_COLOUR, breakChance / 100)
option.toolTip.description = string.format(
    "%s: <PUSHRGB:%f,%f,%f> %s %d/2\n%s: <RGB:%f,%f,%f> %d",
    getText("IGUI_Skill"), skillColour[1], skillColour[2], skillColour[3], 
    Perks.Woodwork:getName(), skillLevel,
    getText("IGUI_ChanceToBreak"), colour[1], colour[2], colour[3], breakChance)
```

**Evidence:** Uses `Colour.lerpColour()` from StarlitLibrary to interpolate between green and red based on risk percentage.

### 4. Item Tag-Based Tool Detection

Tools are identified by tags rather than hardcoded item types:

```lua
-- 42.13/media/lua/shared/RepairableWindows/RemoveWindowAction.lua
local primaryHandItem = self.character:getPrimaryHandItem()
if not primaryHandItem or not primaryHandItem:hasTag(ItemTag.CROWBAR) or primaryHandItem:isBroken() then
    return false
end
```

**Evidence:** Allows any crowbar-tagged item (including modded crowbars) to work automatically.

### 5. Window State Synchronization

Custom state tracking via `setGlassRemoved()` and `sync()`:

```lua
-- 42.13/media/lua/shared/RepairableWindows/AddWindowAction.lua
function AddWindowAction:complete()
    self.window:setGlassRemoved(false)
    self.window:setSmashed(false)
    self.window:sync()
    
    local glass = inventory:getFirstType("RepairableWindows.LargeGlassPane")
    inventory:Remove(glass)
    sendRemoveItemFromContainer(inventory, glass)
end
```

**Evidence:** Calls `window:sync()` to propagate state changes to all clients in multiplayer.

### 6. Predicate Functions for Item Filtering

Reusable predicate pattern for checking item conditions:

```lua
-- 42.13/media/lua/shared/RepairableWindows/RemoveWindowAction.lua
local function predicateNotBroken(item)
    return not item:isBroken()
end

local crowbar = character:getInventory():getFirstTagEvalRecurse(ItemTag.CROWBAR, predicateNotBroken)
```

**Evidence:** Separates condition logic from retrieval, enabling reuse across multiple contexts.

### 7. Sandbox Option Integration

Configurable break chance through sandbox settings:

```txt
-- 42.13/media/sandbox-options.txt
option RepairableWindows.BreakChance {
    type = enum,
    numValues = 3,
    default = 1,
    page = RepairableWindows,
    translation = RepairableWindows_BreakChance,
    valueTranslation = RepairableWindows_BreakChance,
}
```

**Evidence:** Three difficulty levels (0=None, 1=Low, 2=High) affect break chance calculations.

### 8. Translation File Organization

Comprehensive localization support across 5 languages:

```
common/media/lua/shared/Translate/
├── EN/  (English)
├── RU/  (Russian)
├── ES/  (Spanish)
├── IT/  (Italian)
└── TR/  (Turkish)
```

**Evidence:** Separate files for ItemName, Tooltip, IG_UI, Sandbox, and Recipes per language.

### 9. Version Checking via StarlitLibrary

Ensures compatible StarlitLibrary version before loading:

```lua
-- 42.13/media/lua/client/RepairableWindows/ensureVersion.lua
require("Starlit/Version").ensureVersion(2, 0, 0)
```

**Evidence:** Shows popup directing users to update if version is incompatible.

### 10. Legacy Build Support

Maintains separate code paths for older 42.x builds:

**Evidence:** Root `media/` folder contains legacy implementations while `42.13/` has updated versions with improved MP handling.

## Notable Engineering

### Clean Separation of Concerns
- **Shared code** defines timed actions used by both client and server
- **Client code** handles UI, input, and visual feedback
- **Server code** performs authoritative validation and state broadcasting
- No cross-contamination between responsibility domains

### Robust Error Handling
- All timed actions implement `isValid()` checks that run throughout execution
- Actions abort gracefully if conditions change mid-action (e.g., window already smashed)
- Server-side validation prevents client exploitation

### Thoughtful UX Design
- Context menu integrates into vanilla "Window" submenu rather than creating clutter
- Tooltips provide actionable information (skill level, break chance) before committing
- Color coding gives instant visual feedback on success likelihood

### Efficient Item Management
- Uses `getFirstTagEvalRecurse()` for O(n) search with early exit
- Predicate functions avoid lambda allocations in tight loops
- Item transfers batched through Starlit utilities

### Modular Utility Usage
- Leverages StarlitLibrary's battle-tested utilities instead of reinventing
- `TimedActionUtils.transferAndEquip()` handles complex inventory logic
- `Colour.lerpColour()` provides consistent UI color scheme

## Weaknesses & Risks

### 1. Incomplete Validation in Timed Actions

**Location:** `42.13/media/lua/shared/RepairableWindows/AddWindowAction.lua:32`

```lua
function AddWindowAction:isValid()
    -- TODO: check way more stuff here for security
    return self.window:getSquare() and self.window:isSmashed()
end
```

**Risk:** The TODO comment acknowledges insufficient validation. Malicious clients could potentially exploit this in MP by queuing actions on invalid windows.

### 2. Empty Logging Module

**Location:** `media/lua/shared/RepairableWindows/Log.lua`

```lua
-- File is completely empty (0 bytes)
```

**Risk:** Other files require this module but it exports nothing. Works only because Lua treats empty returns as nil silently. Should export a no-op function at minimum.

### 3. Hardcoded Item Type Strings

**Location:** Multiple files

```lua
inventory:containsTypeRecurse("RepairableWindows.LargeGlassPane")
```

**Risk:** String literals scattered throughout codebase. If module ID changes, requires manual updates in multiple locations. Better to define constants in a shared config file.

### 4. Duplicate Code Between Builds

**Evidence:** Both `media/` and `42.13/media/` contain similar implementations of AddWindowAction, RemoveWindowAction, and ContextMenu.

**Risk:** Maintenance burden increases with duplication. Bug fixes must be applied to both versions. Consider conditional logic within single files based on game version detection.

### 5. No Throttling on Context Menu Population

**Location:** `42.13/media/lua/client/RepairableWindows/ContextMenu.lua:100`

```lua
Events.OnFillWorldObjectContextMenu.Add(fillContextMenu)
```

**Risk:** Handler runs every frame when context menu is open. While individual operations are cheap, cumulative impact with many mods could cause stutter during menu population.

### 6. Missing Null Checks in Server Commands

**Location:** `media/lua/server/RepairableWindows/ClientCommands.lua:17`

```lua
ClientCommands.handleAddWindow = function(player, window, item)
    if not window:isSmashed() or not window:isGlassRemoved() then
        return
    end
    -- ... proceeds to use item without nil check
```

**Risk:** If `item` is nil (network desync, lag), subsequent calls to `item:getID()` will crash. Should validate all parameters upfront.

### 7. Reliance on StarlitLibrary Stability

**Evidence:** Entire mod depends on StarlitLibrary for core functionality (timed actions, color utilities, world object lookup).

**Risk:** Breaking changes in StarlitLibrary API could break this mod. Version pinning helps but creates coupling. Any bugs in Starlit propagate here.

## Lessons for Modders

### 1. Use Client-Server Commands for Multiplayer Safety
Never directly modify world state from client code in MP-compatible mods. Always route changes through server-authoritative commands using `sendServerCommand()` and `Events.OnClientCommand`.

### 2. Chain Timed Actions for Complex Interactions
Break multi-step interactions (walk → grab tool → equip → act) into separate timed actions queued in sequence. This provides natural interruption points and better UX.

### 3. Provide Visual Feedback Before Commitment
Show skill requirements, success chances, and resource needs in context menu tooltips before the player commits. Use color coding (green/red) for quick comprehension.

### 4. Identify Tools by Tags, Not Types
Use `ItemTag.CROWBAR` instead of hardcoding `"Base.Crowbar"`. This automatically supports modded tools with the same tag and future-proofs against item ID changes.

### 5. Separate Shared, Client, and Server Code Clearly
Put timed action definitions in `shared/` since both sides need them. Keep UI logic in `client/` and authoritative state changes in `server/`. This prevents accidental client-side authority.

### 6. Implement Comprehensive isValid() Checks
Timed actions can take several seconds. Validate preconditions in `isValid()` which runs continuously, not just `isValidStart()` which runs once. Abort cleanly if conditions change.

### 7. Leverage Established Libraries
Don't reinvent inventory transfer logic, color interpolation, or world object lookup. Use StarlitLibrary's tested utilities to reduce bugs and development time.

### 8. Support Multiple Languages Early
Structure translation files from day one. Even if you only provide English initially, having the folder structure makes community contributions easier later.

### 9. Use Sandbox Options for Difficulty Tuning
Let players configure risky mechanics (like break chance) through sandbox settings. This accommodates different playstyles without requiring mod configuration files.

### 10. Document Known Limitations with TODOs
The mod explicitly marks incomplete validation with TODO comments. This is honest documentation for future maintainers and reviewers, better than silent gaps.

## Version Information

**Mod Version Analyzed:** 2.0.1 (Build 42.13+)  
**Previous Version:** 1.0.4 (Build 41.78.16+)  
**Analysis Date:** 2025-01-10  
**Game Build Target:** 42.13 minimum, compatible with 42.20  
**StarlitLibrary Dependency:** Version 2.0.0+ required  

---

*Analysis based on code-only repository snapshot. Visual assets (textures, models) were stripped per project constraints.*
