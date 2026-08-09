---
title: "Tanks Have Propane — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "TanksHavePropane42"
mod_author: "Azexor"
mod_version: "1.2.0"
date_analyzed: "2026-08-09"
tags: [pz, mod-analysis, tankshavepropane]
---

# Tanks Have Propane — Mod Analysis

## Overview

**Tanks Have Propane** is a focused utility mod that enables players to refill propane tanks and blowtorches at propane storage tanks found at Fossoil and Gas2Go gas stations. It's a Build 42 adaptation of an earlier mod ("Pumps Have Propane"), streamlined to work with B42's propane tank system.

**Why it's notable:** This mod demonstrates clean multiplayer-safe timed action implementation, proper server-authoritative state synchronization, and sprite-based object detection without requiring new items or recipes.

## What it Adds

| Category | Details |
|----------|---------|
| **Timed Action** | `TanksHavePropane_Action` — fills propane tanks/blowtorches over time |
| **Context Menu** | Right-click options on ground/inventory items near propane sources |
| **Sandbox Options** | 3 configurable settings (gas pump refilling, small industrial tanks, search radius) |
| **Animation** | Custom `FillPropaneTank` anim node (reuses `Bob_Duffelbag_Loot`) |
| **Translations** | EN, DE, FR, UA, RU, IT, ES, PT for context menu and sandbox options |

**Note:** Code-only repo — no textures, models, or sounds were analyzed. The mod references `media/textures/propane_fill.png` for the menu icon.

## Structure & Architecture

```
temp_mod_research/TanksHavePropane/
├── 42/
│   └── mod.info                          # Build 42 mod metadata
└── common/
    ├── media/
    │   ├── AnimSets/player/actions/
    │   │   └── FillPropaneTank.xml       # Animation definition
    │   ├── lua/
    │   │   ├── client/
    │   │   │   └── TanksHavePropane_Menu.lua    # Context menu handlers
    │   │   ├── server/
    │   │   │   └── TanksHavePropane_Server.lua  # MP sync handler
    │   │   └── shared/
    │   │       ├── TimedActions/
    │   │       │   └── TanksHavePropane_Action.lua
    │   │       └── Translate/
    │   │           └── [EN|DE|FR|UA|RU|IT|ES|PT]/
    │   └── sandbox-options.txt
```

**Key architectural choices:**
- Uses `common/` folder for shared client/server code (standard B42 pattern)
- Single build folder (`42/`) containing only `mod.info`
- Client-server split: menu logic on client, fill validation on server
- No library dependencies — standalone mod

## Key Techniques

### 1. Sprite-Based Object Detection

The mod identifies propane storage tanks by their sprite names rather than adding new objects:

```lua
-- TanksHavePropane_Menu.lua (lines 8-11)
TanksHavePropaneMenu.PropaneTankSprites = {
    ["industry_02_66"] = true,
    ["industry_02_67"] = true,
}
```

This technique leverages vanilla gas station props (`industry_02_66`, `industry_02_67`) as interaction points, avoiding the need for custom map objects.

### 2. Multiplayer-Safe Timed Action Sync

The timed action sends incremental progress updates to the server every 20%:

```lua
-- TanksHavePropane_Action.lua (lines 127-133)
if isClient() then
    local step = math.floor(progress * 5)
    if step > (self.lastSyncStep or 0) then
        self.lastSyncStep = step
        self:syncToServer(newDelta, newUses)
    end
end
```

Server applies the fill and broadcasts to all clients:

```lua
-- TanksHavePropane_Server.lua (lines 32-37)
ok, err = pcall(function()
    if item.transmitModData then
        item:transmitModData()
    end
    sendItemStats(item)
end)
```

### 3. Sandbox Options Integration

Three configurable options via `sandbox-options.txt`:

```
-- sandbox-options.txt (lines 3-10)
option TanksHavePropane.AllowGasPumps
{type = boolean, default = false, page = TanksHavePropane, translation = TanksHavePropane_AllowGasPumps,}

option TanksHavePropane.AllowSmallIndustrialTanks
{type = boolean, default = false, page = TanksHavePropane, translation = TanksHavePropane_AllowSmallIndustrialTanks,}

option TanksHavePropane.SearchRadius
{type = integer, min = 1, max = 10, default = 2, page = TanksHavePropane, translation = TanksHavePropane_SearchRadius,}
```

These are read via `SandboxVars.TanksHavePropane` in Lua scripts.

### 4. Event Hooks Used

| Event | File | Purpose |
|-------|------|---------|
| `Events.OnFillWorldObjectContextMenu` | `TanksHavePropane_Menu.lua:293` | World right-click menu |
| `Events.OnPreFillInventoryObjectContextMenu` | `TanksHavePropane_Menu.lua:294` | Inventory right-click menu |
| `Events.OnClientCommand` | `TanksHavePropane_Server.lua:127` | Server receives fill requests |

### 5. Dual Fill System (UsedDelta + CurrentUses)

Handles both propane tanks (liquid delta) and blowtorches (uses counter):

```lua
-- TanksHavePropane_Action.lua (lines 116-124)
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

## Notable Engineering

1. **Robust MP synchronization** — Incremental sync every 20% prevents desync without flooding the network
2. **Defensive validation** — `isValid()` checks tank proximity, player distance, item type, and fill status before allowing action
3. **Graceful fallback** — Server searches ground first, then player inventory if item was picked up during sync lag
4. **Dynamic action duration** — Fill time scales with remaining capacity (`maxTime = math.max(10, math.floor(maxDuration * fillRatio))`)
5. **Clean separation of concerns** — Client handles UI/pathfinding, server handles authority, shared holds timed action logic

## Weaknesses & Risks

1. **Hardcoded sprite names** — If vanilla changes `industry_02_*` sprites, the mod breaks without warning
2. **No error handling for missing translations** — Falls back to empty strings if translation keys are missing
3. **Global namespace pollution** — `TanksHavePropaneMenu`, `TanksHavePropane_Server`, `TanksHavePropane_Action` all use global tables (acceptable for small mods, but not scalable)
4. **Fixed search radius loop** — Nested `for dx = -radius, radius` loops could be optimized with `getCell():getAdjacentGridSquare()` APIs
5. **Animation reuse** — `Bob_Duffelbag_Loot` may not visually match filling a propane tank (minor immersion issue)

## Lessons for Modders

1. **Use sprite detection for vanilla integration** — Detect existing objects by sprite name instead of adding new entities when possible
2. **Sync timed actions incrementally** — Send progress updates at intervals (e.g., every 20%) rather than every frame or only at completion
3. **Support both delta and uses systems** — Many items use `setUsedDelta()`, but some (like blowtorches) use `setCurrentUses()` — handle both
4. **Leverage sandbox options** — Use `sandbox-options.txt` for user-configurable behavior instead of hardcoded values
5. **Validate in `isValid()`** — The timed action's `isValid()` method is called every tick; use it to catch edge cases (item moved, player walked away, etc.)

## Version Footer

**Mod version analyzed:** 1.2.0  
**Build compatibility:** 42.20  
**Date analyzed:** 2026-08-09  
**Source path:** `temp_mod_research/TanksHavePropane/`
