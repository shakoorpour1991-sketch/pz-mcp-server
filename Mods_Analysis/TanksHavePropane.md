---
title: "Tanks Have Propane (B42) — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "TanksHavePropane42"
mod_author: "Azexor"
mod_version: "1.2.0"
date_analyzed: "2026-08-09"
tags: [pz, mod-analysis, tankshavepropane, build42]
---

# Tanks Have Propane (B42) — Mod Analysis

## Overview

**Tanks Have Propane** is a focused utility mod that enables players to refill propane tanks and blowtorches at propane storage tanks found at Fossoil and Gas2Go gas stations. It's a Build 42 port/adaptation of the original "Pumps Have Propane" mod, updated to work with B42's object and fluid systems.

**Why it's notable:** This mod demonstrates clean multiplayer-safe timed action implementation, proper client-server command synchronization, and minimal-but-complete context menu integration without overriding vanilla systems.

## What It Adds

### Items Affected
- **PropaneTank** items (any item with "propanetank" in the full type name)
- **Blowtorch** items (any item with "blowtorch" in the full type name)

Both item types are detected dynamically via string matching on `item:getFullType()`, not hardcoded item IDs.

### New Systems
- **Context menu option**: "Fill Propane Tank from Storage Tank" (or "Fill Torch" for blowtorches)
- **Timed action**: Progressive fill animation with visual progress bar
- **Sandbox options**: Configurable behavior (see below)

### Sandbox Options (`media/sandbox-options.txt`)
```lua
option TanksHavePropane.AllowGasPumps
{type = boolean, default = false, page = TanksHavePropane, translation = TanksHavePropane_AllowGasPumps}

option TanksHavePropane.AllowSmallIndustrialTanks
{type = boolean, default = false, page = TanksHavePropane, translation = TanksHavePropane_AllowSmallIndustrialTanks}

option TanksHavePropane.SearchRadius
{type = integer, min = 1, max = 10, default = 2, page = TanksHavePropane, translation = TanksHavePropane_SearchRadius}
```

### Translation Files
Complete localization support in 8 languages: EN, FR, DE, ES, PT, IT, UA, RU
- Context menu labels: `ContextMenu_FillTorchFromStorageTank`, `ContextMenu_TakePropaneFromStorageTank`
- Sandbox option labels and tooltips

## Structure & Architecture

### Folder Layout
```
TanksHavePropane/
├── 42/
│   └── mod.info                          # Build 42-specific metadata
└── common/
    ├── media/
    │   ├── AnimSets/player/actions/
    │   │   └── FillPropaneTank.xml       # Custom animation definition
    │   ├── lua/
    │   │   ├── client/
    │   │   │   └── TanksHavePropane_Menu.lua
    │   │   ├── server/
    │   │   │   └── TanksHavePropane_Server.lua
    │   │   └── shared/
    │   │       ├── TimedActions/
    │   │       │   └── TanksHavePropane_Action.lua
    │   │       └── Translate/[EN|FR|DE|ES|PT|IT|UA|RU]/
    │   └── sandbox-options.txt
```

### Code Organization
- **Client-side** (`TanksHavePropane_Menu.lua`): Context menu hooks, propane source detection, menu option rendering
- **Server-side** (`TanksHavePropane_Server.lua`): Authoritative item state updates, MP synchronization
- **Shared** (`TanksHavePropane_Action.lua`): Timed action logic (runs on both client and server)
- **Animation** (`FillPropaneTank.xml`): Reuses vanilla `Bob_Duffelbag_Loot` animation with custom conditions

### Dependencies
- **None** — fully standalone mod
- Uses vanilla `ISBaseTimedAction` framework
- No library dependencies (not part of Starlit or Neat ecosystems)

## Key Techniques

### 1. Sprite-Based Object Detection

The mod identifies propane tanks by sprite name rather than item type, allowing it to work with world objects that aren't interactable items:

```lua
-- TanksHavePropane_Menu.lua (lines 8-43)
TanksHavePropaneMenu.PropaneTankSprites = {
    ["industry_02_66"] = true,
    ["industry_02_67"] = true,
}

TanksHavePropaneMenu.SmallIndustrialTankSprites = {
    ["industry_03_6"] = true,
    ["industry_03_7"] = true,
    -- ... 27 more sprite names
}
```

This approach is robust against vanilla changes and doesn't require hardcoding object references.

### 2. Dual Item State Handling (UsedDelta vs CurrentUses)

Build 42 items can track fuel via `UsedDelta` (0.0–1.0) or `CurrentUses`/`MaxUses` (integer counts). The mod handles both:

```lua
-- TanksHavePropane_Action.lua (lines 115-124)
local newDelta = self.startDelta + (1.0 - self.startDelta) * progress
if self.item.setUsedDelta then
    self.item:setUsedDelta(newDelta)
end
local newUses = nil
if self.item.setCurrentUses and self.item.getMaxUses then
    newUses = math.floor(newDelta * self.item:getMaxUses())
    self.item:setCurrentUses(newUses)
end
```

This ensures compatibility with any propane/blowtorch item regardless of which fuel system it uses.

### 3. Multiplayer-Safe Timed Action Sync

The mod implements incremental synchronization during the timed action, not just at completion:

```lua
-- TanksHavePropane_Action.lua (lines 126-133)
if isClient() then
    local step = math.floor(progress * 5)
    if step > (self.lastSyncStep or 0) then
        self.lastSyncStep = step
        self:syncToServer(newDelta, newUses)
    end
end
```

This sends updates at 20% intervals (steps 1-5), preventing desync if the action is interrupted.

### 4. Client Command Pattern

Server-authoritative state changes use the `sendClientCommand` → `Events.OnClientCommand` pattern:

```lua
-- TanksHavePropane_Action.lua (line 38)
sendClientCommand(self.character, "TanksHavePropane", "fillItem", args)

-- TanksHavePropane_Server.lua (lines 45-56)
TanksHavePropane_Server.onClientCommand = function(module, command, player, args)
    if module ~= "TanksHavePropane" then return end
    if command == "fillItem" then
        TanksHavePropane_Server.handleFillItem(player, args)
    end
end
Events.OnClientCommand.Add(TanksHavePropane_Server.onClientCommand)
```

This is the canonical B42 pattern for client-to-server communication (documented in `Build42_Modders_Reference.md` §2.2).

### 5. Fallback Item Location Search

The server searches both ground inventory and player inventory to handle race conditions:

```lua
-- TanksHavePropane_Server.lua (lines 96-122)
-- 1) Search on ground
local square = getCell():getGridSquare(x, y, z)
if square then
    local objects = square:getObjects()
    for i = 0, objects:size() - 1 do
        local obj = objects:get(i)
        if instanceof(obj, "IsoWorldInventoryObject") then
            local item = obj:getItem()
            if item and item:getID() == itemID then
                applyFillToItem(item, newDelta, newUses)
                return
            end
        end
    end
end

-- 2) Fallback: search in player inventory
if player then
    local item = player:getInventory():getItemById(itemID)
    if item then
        applyFillToItem(item, newDelta, newUses)
        return
    end
end
```

This handles the case where a player picks up the item before the server sync arrives.

### 6. Dynamic Action Duration

The fill time scales based on how empty the tank is:

```lua
-- TanksHavePropane_Action.lua (lines 149-151)
local fillRatio = 1.0 - self.startDelta
local maxDuration = self.isTorch and 80 or 150
self.maxTime = math.max(10, math.floor(maxDuration * fillRatio))
```

An empty tank takes the full duration; a half-full tank takes half the time.

### 7. Context Menu Event Hooks

Uses two separate context menu events for world items and inventory items:

```lua
-- TanksHavePropane_Menu.lua (lines 293-294)
Events.OnFillWorldObjectContextMenu.Add(TanksHavePropaneMenu.OnWorldContextMenu)
Events.OnPreFillInventoryObjectContextMenu.Add(TanksHavePropaneMenu.OnInventoryContextMenu)
```

This ensures the fill option appears whether the item is on the ground or in a loot container.

## Notable Engineering

### ✅ Clean Separation of Concerns
- Client handles UI, pathfinding, and visual feedback
- Server handles authoritative state changes and MP sync
- Shared code contains only the timed action logic

### ✅ Robust Error Handling
Every critical operation is wrapped with validation:
- Coordinates validation before search
- Item ID validation before modification
- Range checks on `newDelta` (0.0–1.0)
- Nil checks on all object references

### ✅ Proper MP Safety
- All state changes go through server commands
- Incremental sync prevents total loss on disconnect
- `transmitModData()` and `sendItemStats()` ensure client visualization

### ✅ Animation Integration
The mod includes a proper `AnimSets` XML file that reuses a vanilla animation (`Bob_Duffelbag_Loot`) with a custom condition:

```xml
<!-- FillPropaneTank.xml (lines 8-11) -->
<m_Conditions x_name="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
    <m_Name>PerformingAction</m_Name>
    <m_Type>STRING</m_Type>
    <m_Value>FillPropaneTank</m_Value>
</m_Conditions>
```

### ✅ Translation Completeness
All user-facing strings are localized in 8 languages using both `.json` and `.txt` formats (B42 supports both).

## Weaknesses & Risks

### ⚠️ Hardcoded Sprite Names
The propane tank detection relies on specific sprite names like `"industry_02_66"`. If The Indie Stone changes these sprites in a future update, the mod will silently fail to detect tanks. **Mitigation:** The mod logs all detections, making failures easy to diagnose.

### ⚠️ String-Based Item Detection
Using `string.find(typeLower, "propanetank")` could match unintended items if a mod creates something like `"MyCustomPropaneTankHolder"`. More robust would be checking specific item types or script properties.

### ⚠️ No Rate Limiting
The client can spam `sendClientCommand` calls if the timed action bugs out. The server validates but doesn't rate-limit. In extreme cases, this could be exploited.

### ⚠️ Fixed Search Radius Logic
The `isValid()` check uses a hardcoded radius of 10 for tank distance, independent of the sandbox option:

```lua
-- TanksHavePropane_Action.lua (line 64)
local radius = 10
if SandboxVars.TanksHavePropane and SandboxVars.TanksHavePropane.SearchRadius then
    radius = SandboxVars.TanksHavePropane.SearchRadius
end
```

This is correct but inconsistent with the menu code which reads the sandbox var directly.

### ⚠️ No Validation of Propane Source
The mod assumes the propane tank object has infinite fuel. There's no check to deplete the source tank or verify it has remaining capacity.

### ⚠️ Potential Race Condition in MP
If two players try to fill items at the same tank simultaneously, both will succeed. The server doesn't track tank usage state.

## Lessons for Modders

### 1. Use the Client-Command Pattern for MP Safety
When you need the client to request a state change, always use:
```lua
sendClientCommand(character, "ModuleName", "commandName", args)
```
Then handle it server-side with `Events.OnClientCommand`. Never let clients modify item state directly in multiplayer.

### 2. Handle Both Fuel Systems
Build 42 items may use `UsedDelta` (fluid system) or `CurrentUses`/`MaxUses` (charges). Always check for both methods:
```lua
if item.setUsedDelta then item:setUsedDelta(value) end
if item.setCurrentUses then item:setCurrentUses(value) end
```

### 3. Incremental Sync Prevents Desync
For long timed actions, send periodic updates instead of waiting until `perform()`:
```lua
local step = math.floor(progress * 5)  -- 5 steps = 20% intervals
if step > lastSyncStep then
    syncToServer(...)
    lastSyncStep = step
end
```

### 4. Detect World Objects by Sprite, Not Position
Hardcoding coordinates breaks when maps change. Sprite names are stable identifiers:
```lua
local sprite = obj:getSprite()
local spriteName = sprite:getName()
if knownSprites[spriteName] then return true end
```

### 5. Provide Fallback Searches
In MP, items can move between ground and inventory. Always search both locations:
```lua
local item = square:getItemOnGround()
if not item and player then
    item = player:getInventory():getItemById(itemID)
end
```

### 6. Scale Action Duration Dynamically
Don't use fixed durations for variable tasks. Calculate based on the work needed:
```lua
local fillRatio = 1.0 - startDelta
maxTime = math.max(10, math.floor(baseDuration * fillRatio))
```

## Version Information

- **Mod Version Analyzed:** 1.2.0
- **Build 42 Version:** 42.20 (mod.info specifies `pzversion=42`)
- **Minimum Game Version:** Not specified (assumes 42.x)
- **Date Analyzed:** 2026-08-09
- **Files Analyzed:** 27 files (8 Lua scripts, 1 XML, 18 translation files, 1 mod.info)

---

*Analysis generated from code-only mod repository. Visual assets (textures, models, sounds) were not present for inspection.*
