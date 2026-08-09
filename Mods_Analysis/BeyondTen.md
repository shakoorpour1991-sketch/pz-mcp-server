---
title: "Beyond Ten — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "BeyondTen"
mod_author: "Patryk"
mod_version: "1.2.0"
date_analyzed: "2026-08-09"
tags: [pz, mod-analysis, beyondten, skills, mastery]
---

# Beyond Ten — Mod Analysis

## Overview

**Beyond Ten** extends Project Zomboid's skill system beyond the vanilla level 10 cap, allowing players to train skills up to level 15 with a mastery XP system. It features a native-looking 15-slot Skills panel, continued bonuses past level 10, and full multiplayer support with server-authoritative XP tracking.

**Why it's notable:** This is a sophisticated systems mod that deeply hooks into PZ's XP/perk architecture while maintaining compatibility with other UI mods. It demonstrates advanced techniques in event handling, MP synchronization, and UI patching without modifying vanilla files.

## What it Adds

| Category | Details |
|----------|---------|
| **Mastery System** | Levels 11-15 for all trainable perks with escalating XP costs |
| **UI Extension** | 15-cell skill progress bar (vs. vanilla 10) with mastery-colored cells |
| **Server Authority** | GlobalModData-based XP storage for dedicated server integrity |
| **Compatibility Layer** | Optional integration with Detailed Skill Tooltips mod |
| **Bonus Providers** | API for custom perk bonus calculations |
| **Translations** | EN texts for mastery level-up notifications and tooltips |

**Note:** Code-only repo — describes script-defined systems only; no visual assets analyzed.

## Structure & Architecture

```
temp_mod_research/BeyondTen/
├── 42/
│   ├── mod.info                          # Build 42 metadata (v1.2.0, min 42.19)
│   └── media/lua/
│       ├── client/BeyondTen/
│       │   ├── Client.lua                # Client-side XP handling, UI patches
│       │   ├── SkillUI.lua               # 15-cell progress bar rendering
│       │   └── DetailedSkillTooltipsCompat.lua  # DST integration
│       ├── server/BeyondTen/
│       │   └── Server.lua                # Server-authoritative XP storage
│       └── shared/BeyondTen/
│           ├── Shared.lua                # Core API, data structures
│           └── SkillRecoveryJournal.lua  # (present but not examined in detail)
└── media/lua/shared/Translate/EN/
    └── IG_UI_EN.txt                      # Mastery text strings
```

**Key architectural choices:**
- Three-layer split: `shared/` (core API), `client/` (UI/local XP mirror), `server/` (authority)
- Uses `GlobalModData` for persistent server-side XP storage
- Event-driven design with extensive hooking of vanilla XP systems
- Optional compatibility module for third-party UI mods

## Key Techniques

### 1. Reservoir XP Pattern

The mod keeps mastery XP separate from vanilla level 10 by storing overflow in character ModData:

```lua
-- Shared.lua (lines 104-113)
function BT.GetPerkRecord(character, perkOrId, create)
    local perk = BT.ResolvePerk(perkOrId)
    if not perk then return nil end
    local data = BT.GetData(character, create)
    if not data then return nil end

    local id = perk:getId()
    local record = data.perks[id]
    -- ... initializes record.xp for mastery storage
    return record
end
```

When a player reaches level 10, their visible XP is set to level 9's total ("reservoir"), and mastery XP accumulates separately.

### 2. Server-Authoritative XP Storage (MP)

Dedicated servers store mastery XP in GlobalModData, not character ModData:

```lua
-- Server.lua (lines 127-138)
BT._storedXPReader = readCanonicalXP
BT._storedXPWriter = writeCanonicalXP
BT._storedXPExporter = exportCanonicalXP
BT._storedXPClearer = clearCanonicalXP
```

These functions are assigned in the shared module's function pointers, allowing the same API to work in SP (ModData) and MP (GlobalModData).

### 3. UI Patching Without File Modification

The mod wraps vanilla UI functions at runtime:

```lua
-- SkillUI.lua (lines 56-63)
function ISSkillProgressBar:new(x, y, width, height, playerNum, perk, parent)
    local progressBar = originalNew(self, x, y, width, height, playerNum, perk, parent)
    progressBar:setWidth(BAR_WIDTH)  -- Extended for 15 cells
    progressBar:setHeight(CELL_SIZE)
    progressBar.level = BT.GetEffectiveLevel(progressBar.char, perk)
    -- ...
    return progressBar
end
```

It stores original functions (`originalNew`, `originalUpdateTooltip`, etc.) and calls them as fallbacks.

### 4. Event Hooks Used

| Event | File | Purpose |
|-------|------|---------|
| `Events.OnCreatePlayer` | `Client.lua:172` | Initialize player mastery state |
| `Events.OnGameStart` | `Client.lua:173` | Reset catalog, install protections |
| `Events.OnPlayerUpdate` | `Client.lua:146` | Poll active perks every 60 ticks |
| `Events.AddXP` | `Client.lua:153` | Capture XP awards for mastery conversion |
| `Events.OnSave` | `Client.lua:125` | Temporarily restore level 10 for save compatibility |
| `Events.OnServerCommand` / `OnClientCommand` | Both | Sync mastery XP between server/clients |
| `Events.OnInitGlobalModData` | `Server.lua:370` | Rebind after GlobalModData reload |

### 5. Overflow Capture Pattern

When XP would exceed level 10, the mod captures the delta:

```lua
-- Client.lua (lines 68-77)
local function captureMasteryDelta(player, perk, state, id, amount)
    local applied = addMasteryXP(player, perk, amount)
    local overflow = (tonumber(amount) or 0) - applied
    if overflow < -0.0001 then
        state.active[id] = nil
        state.applyingNative[id] = true
        applyNativeOverflow(player, perk, overflow)  -- Apply negative remainder
        state.applyingNative[id] = nil
        return false
    end
    setRawXP(player, perk, BT.RESERVOIR_LEVEL)
    return true
end
```

### 6. Compatibility with Detailed Skill Tooltips

The mod detects and wraps DST's tooltip system:

```lua
-- DetailedSkillTooltipsCompat.lua (lines 176-186)
Compat._tooltipWrapper = function(progressBar, selectedLevel)
    selectedLevel = math.floor(tonumber(selectedLevel) or 0)
    base(progressBar, selectedLevel)  -- Call DST's wrapper
    appendMasteryDetails(progressBar, selectedLevel)  -- Add mastery info
end
ISSkillProgressBar.updateTooltip = Compat._tooltipWrapper
```

## Notable Engineering

1. **Function pointer injection** — Uses `BT._storedXPReader` pattern to swap implementations based on environment (SP vs MP)
2. **Defensive event handling** — Guards against double-triggering with `state.applyingNative` flags
3. **Save compatibility** — Temporarily restores level 10 XP before saves so characters remain usable without the mod
4. **Stable base protection** — Protects DST's `updateTooltip_base` from being overwritten during Reload Lua
5. **Identity-based player keys** — Uses hash of username+slot instead of raw names for GlobalModData keys (Server.lua lines 43-54)
6. **Bounded canonical tables** — Limits stored perks to 256 entries, prioritizing currently-loaded skills

## Weaknesses & Risks

1. **Heavy reliance on specific event order** — If another mod fires `AddXP` before BeyondTen's handler is installed, XP may be lost
2. **Fragile UI patching** — Any mod that replaces `ISSkillProgressBar.new` after BeyondTen will break the 15-cell layout
3. **Global variable usage** — `BeyondTen`, `BeyondTenClient`, `BeyondTenServer` are global tables (acceptable for this scope)
4. **Complex save migration** — One-time migration from old ModData schema could fail silently if GlobalModData is corrupted
5. **Hardcoded mastery costs** — XP costs use formula `xp10 + step * (level - 10)` which may not balance well for all perk types
6. **No sandbox options** — Max level (15) and XP scaling are hardcoded, not user-configurable

## Lessons for Modders

1. **Use function pointers for environment-specific logic** — Assign implementation functions (`BT._storedXPReader`) based on whether running on server/client
2. **Store originals before wrapping** — Always save `originalFunction = Module.function` before replacing, and call it as fallback
3. **Guard against re-entry** — Use flags like `state.applyingNative` to prevent infinite loops when your code triggers the same event
4. **Make saves portable** — Temporarily restore vanilla-compatible state before `OnSave` so players can uninstall without breaking their save
5. **Detect optional dependencies at runtime** — Check for `rawget(_G, "DST")` existence instead of requiring it
6. **Use identity hashes for persistent keys** — Don't rely on usernames alone; combine multiple stable identifiers

## Version Footer

**Mod version analyzed:** 1.2.0  
**Build compatibility:** 42.19+ (tested on 42.20)  
**Date analyzed:** 2026-08-09  
**Source path:** `temp_mod_research/BeyondTen/`
