---
title: "Beyond Ten - Level 15 Skills — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "BeyondTen"
mod_author: "Patryk"
mod_version: "1.2.0"
date_analyzed: "2026-08-09"
tags: [pz, mod-analysis, beyondten, build42, skills, mastery]
---

# Beyond Ten - Level 15 Skills — Mod Analysis

## Overview

**Beyond Ten** is a comprehensive skill extension mod that raises the maximum trainable skill level from 10 to 15, introducing a "mastery" system for levels 11-15. It preserves vanilla balance up to level 10 while adding meaningful progression for experienced players who have maxed all skills.

**Why it's notable:** This mod demonstrates advanced B42 engineering including XP reservoir manipulation, timed action speed bonuses, weapon damage scaling, maintenance protection, and optional compatibility layers—all while maintaining strict multiplayer safety through server-authoritative state management.

## What It Adds

### Core Systems
- **Mastery Levels 11-15**: Five additional skill ranks beyond vanilla cap
- **Mastery XP System**: Separate XP pool tracked in `character:getModData()["BeyondTen"].perks`
- **Extended Skill Panel**: 15-slot UI replacing vanilla's 10-slot display
- **Progressive Bonuses**: Each mastery rank provides stacking benefits

### Skill Bonuses (by category)

**Combat Perks:**
- **Axe, Blunt, SmallBlunt, LongBlade, SmallBlade, Spear**: +3% damage per mastery rank
- **Aiming**: +3% ranged damage per rank, improved reload speed

**Crafting Perks:**
- **Cooking, Doctor, Electricity, Tailoring, MetalWelding, Woodwork**: Faster timed actions (-2.5% per rank)
- **Farming, Fishing, Trapping**: Reduced action times, improved success rates

**Utility Perks:**
- **Reloading**: Extended base reload speed formula
- **Maintenance**: 6% chance per rank to restore weapon condition on hit
- **Mechanics**: Vehicle repair bonuses
- **PlantScavenging**: Foraging improvements

### Items Added
- **SkillRecoveryBoundJournal**: Special item that stores mastery XP for recovery after death (optional feature)

### UI Additions
- **15-cell skill bar**: Extends `ISSkillProgressBar` to show all 15 levels
- **Mastery tooltips**: Integration with "Detailed Skill Tooltips" mod (optional compat)
- **Level-up notifications**: Halo text + sound effect when reaching levels 11-15

### Sandbox Options
None—this mod is designed to be always-on balance change.

## Structure & Architecture

### Folder Layout
```
BeyondTen/
├── mod.info                              # Root metadata (legacy?)
├── 42/
│   ├── mod.info                          # Build 42-specific (v1.2.0, min 42.19)
│   └── media/lua/
│       ├── client/BeyondTen/
│       │   ├── Client.lua                # Client-side XP handling, UI hooks
│       │   ├── SkillUI.lua               # 15-slot skill panel extension
│       │   └── DetailedSkillTooltipsCompat.lua  # Optional DST integration
│       ├── server/BeyondTen/
│       │   └── Server.lua                # Server-authoritative XP storage
│       └── shared/BeyondTen/
│           ├── Shared.lua                # Core API, XP math, perk catalog
│           ├── Bonuses.lua               # All bonus implementations
│           └── SkillRecoveryJournal.lua  # Journal item logic
├── common/media/lua/shared/Translate/EN/
│   └── IG_UI.json                        # Localization strings
└── media/                                # Legacy B41 files (ignored in B42)
```

### Code Organization
- **Shared** (~900 lines): Core API (`BeyondTen` table), XP calculations, bonus registration
- **Client** (~450 lines): UI extensions, local player state, visual feedback
- **Server** (~150 lines): Authoritative XP storage, MP command handling
- **Bonuses** (~577 lines): Timed action wrappers, weapon scaling, maintenance system

### Dependencies
- **None required**—fully standalone
- **Optional compatibility**: "Detailed Skill Tooltips" (Workshop 3572846242)

## Key Techniques

### 1. XP Reservoir Pattern

The mod keeps vanilla XP at level 9 ("reservoir") while storing excess XP separately:

```lua
-- BeyondTen/Shared.lua (lines 12, 253-256)
BT.RESERVOIR_LEVEL = 9

function BT.GetReservoirXP(perkOrId)
    local perk = BT.ResolvePerk(perkOrId)
    return perk and (tonumber(perk:getTotalXpForLevel(BT.RESERVOIR_LEVEL)) or 0) or 0
end
```

This prevents the vanilla XP system from interfering with mastery calculations while keeping the character visually at level 9 until mastery levels are earned.

### 2. Perk Catalog Refresh System

Dynamically rebuilds the list of trainable perks by analyzing parent-child relationships:

```lua
-- BeyondTen/Shared.lua (lines 49-78)
function BT.RefreshPerkCatalog(force)
    local size = PerkFactory.PerkList:size()
    if not force and BT._catalog.size == size then return BT._catalog end

    local all = {}
    local hasChildren = {}
    for index = 0, size - 1 do
        local perk = PerkFactory.PerkList:get(index)
        -- ... collect perks and track parent relationships
        local parent = perk:getParent()
        if parent and parent ~= Perks.None then
            hasChildren[parent:getId()] = true
        end
    end

    -- Only include perks without children (leaf nodes) or explicitly overridden
    local trainable = {}
    for _, perk in ipairs(all) do
        local id = perk:getId()
        if (not hasChildren[id] or BT._trainableOverrides[id]) 
           and (tonumber(perk:getXp10()) or 0) > 0 then
            trainable[#trainable + 1] = perk
        end
    end
    BT._catalog = { size = size, trainable = trainable, byId = byId }
    return BT._catalog
end
```

This ensures custom perks from other mods can be included automatically.

### 3. Timed Action Speed Bonus Wrapper

Intercepts `ISBaseTimedAction.adjustMaxTime` to apply mastery-based speed increases:

```lua
-- BeyondTen/Bonuses.lua (lines 122-139)
BT._timedActionBonusWrapperB42 = function(action, maxTime)
    local adjusted = originalAdjustMaxTime(action, maxTime)
    if adjusted <= 0 or not action.character then return adjusted end
    
    local perk = BT.ResolveActionPerk(action)
    local ranks = perk and BT.GetMasteryRanks(action.character, perk) or 0
    if ranks <= 0 then return adjusted end
    
    return math.max(1, adjusted * (1 - 0.025 * ranks))
end
ISBaseTimedAction.adjustMaxTime = BT._timedActionBonusWrapperB42
```

Each mastery rank reduces action time by 2.5%, stacking multiplicatively with other modifiers.

### 4. Action-to-Perk Resolution System

Intelligently maps timed actions to their corresponding perks using multiple strategies:

```lua
-- BeyondTen/Bonuses.lua (lines 14-53, 85-120)
local EXACT_ACTION_PERKS = {
    ISAddItemInRecipe = Perks.Cooking,
    ISApplyBandage = Perks.Doctor,
    ISFixGenerator = Perks.Electricity,
    ISRepairClothing = Perks.Tailoring,
    ISForageAction = Perks.PlantScavenging,
    -- ... 30+ more mappings
}

function BT.ResolveActionPerk(action)
    -- 1) Check explicit override on action
    local explicit = BT.ResolvePerk(action.BeyondTenPerk)
    if explicit then return explicit end

    -- 2) Check registered action type
    local registered = BT._actionPerks[actionTypeOf(action)]
    if registered then return registered end

    -- 3) Handle dynamic barricade material detection
    if actionType == "ISBarricadeAction" then
        if action.isMetal or action.isMetalBar then return Perks.MetalWelding end
        return Perks.Woodwork
    end

    -- 4) Exact action type match
    if EXACT_ACTION_PERKS[actionType] then return EXACT_ACTION_PERKS[actionType] end

    -- 5) Recipe-based perk inference
    local fromRecipe = recipePerk(action)
    if fromRecipe then return fromRecipe end

    -- 6) Pattern matching for vehicle/mechanic actions
    if string.find(actionType, "VehiclePart", 1, true) then return Perks.Mechanics end
    if string.find(actionType, "Weld", 1, true) then return Perks.MetalWelding end
    
    return nil
end
```

This multi-fallback approach handles vanilla actions, custom mod actions, and dynamic scenarios like metal vs wood barricades.

### 5. Weapon Damage Scaling

Hooks into weapon equip/unequip to scale damage based on mastery:

```lua
-- BeyondTen/Bonuses.lua (lines 296-304)
local function restoreScaledWeapons()
    for weapon, original in pairs(BT._scaledWeaponsB42) do
        if weapon and original then
            weapon:setMinDamage(original.minDamage)
            weapon:setMaxDamage(original.maxDamage)
        end
        BT._scaledWeaponsB42[weapon] = nil
    end
end
```

The mod stores original damage values in a weak table, applies scaled values on equip, and restores originals on unequip to prevent stacking bugs.

### 6. Maintenance Protection System

Tracks weapon condition loss and provides chance to restore based on Maintenance mastery:

```lua
-- BeyondTen/Bonuses.lua (lines 306-342)
local function processServerMaintenanceLoss(weapon, record)
    local current = maintenanceCondition(weapon)
    local previous = math.max(0, math.floor(tonumber(record.condition) or current))
    local lost = math.max(0, previous - current)
    if lost <= 0 then return end

    local ranks = math.max(0, math.floor(tonumber(record.ranks) or 0))
    local chance = math.min(30, ranks * 6)  -- Max 30% at rank 5
    local restored = 0
    for _index = 1, lost do
        if chance > 0 and ZombRand(100) < chance then 
            restored = restored + 1 
        end
    end

    if restored > 0 then
        weapon:setCondition(math.min(weapon:getConditionMax(), current + restored))
        weapon:syncItemFields()
    end
    record.condition = current
end
```

Each Maintenance rank gives 6% restoration chance per point of durability lost, capped at 30%.

### 7. Server-Authoritative XP Storage

Dedicated server uses `GlobalModData` while clients mirror via `ModData`:

```lua
-- BeyondTen/Server.lua (paraphrased from pattern)
if isServer() then
    local globalStore = getModData()["BeyondTenXP"] or {}
    getModData()["BeyondTenXP"] = globalStore
    
    -- Store XP per username/SteamID for persistence
    globalStore[playerUsername] = BT.ExportXP(player)
end
```

This prevents clients from cheating by modifying their local XP values.

### 8. UI Extension Without Override

Extends `ISSkillProgressBar` by wrapping methods instead of replacing the class:

```lua
-- BeyondTen/SkillUI.lua (lines 19-27)
local originalNew = ISSkillProgressBar.new
local originalOnMouseUp = ISSkillProgressBar.onMouseUp
local originalUpdateTooltip = ISSkillProgressBar.updateTooltip
-- ... save all methods we need to wrap

function ISSkillProgressBar:new(x, y, width, height, playerNum, perk, parent)
    local progressBar = originalNew(self, x, y, width, height, playerNum, perk, parent)
    progressBar:setWidth(BAR_WIDTH)  -- 15 cells instead of 10
    progressBar.level = BT.GetEffectiveLevel(progressBar.char, perk)
    return progressBar
end
```

This maintains compatibility with other UI mods that might also wrap these methods.

### 9. Dynamic Character Info Panel Sizing

Automatically expands the skill panel width to accommodate 15 cells:

```lua
-- BeyondTen/SkillUI.lua (lines 45-70)
local function getDesiredCharacterInfoWidth(characterInfo)
    local scrollBarWidth = getScrollBarWidth(characterInfo)
    local progressBarsRight = getProgressBarsRight(characterInfo)
    if progressBarsRight > 0 then
        return progressBarsRight + UI_BORDER_SPACING + scrollBarWidth
    end

    local left = UI_BORDER_SPACING * 2 + BUTTON_HGT + 1
    local progressBarX = left + UI_BORDER_SPACING * 3 + (characterInfo.txtLen or 0)
    return progressBarX + BAR_WIDTH + UI_BORDER_SPACING + scrollBarWidth
end

local function syncCharacterInfoLayout(characterInfo)
    local desiredWidth = getDesiredCharacterInfoWidth(characterInfo)
    if characterInfo.width < desiredWidth then
        characterInfo:setWidthAndParentWidth(desiredWidth)
    end
    -- Move scrollbar immediately to prevent rendering overlap
    characterInfo.vscroll:setX(characterInfo.width - scrollBarWidth + 1)
end
```

### 10. Optional Compatibility Layer

Provides tooltip integration with "Detailed Skill Tooltips" mod without modifying its files:

```lua
-- BeyondTen/DetailedSkillTooltipsCompat.lua (lines 1-15)
-- DST replaces updateTooltip and keeps its predecessor in DST.updateTooltip_base.
-- Keep DST's base anchored to the pre-DST function and install our own
-- final, idempotent wrapper. No files from DST are changed.

function Compat.GetMasteryTooltipLines(perk, targetLevel)
    if targetLevel <= BT.NATIVE_MAX_LEVEL then return {} end
    
    local ranks = masteryRank(targetLevel)
    local id = perkId(perk)
    
    if id == "Aiming" then
        return { text("IGUI_BeyondTen_Tooltip_RangedDamage", 
                      "Ranged weapon damage: +3%% per rank (+%1%%)", 
                      numberText(ranks * 3)) }
    elseif MELEE_PERKS[id] then
        -- ... melee damage bonuses
    end
    return {}
end
```

## Notable Engineering

### ✅ Comprehensive Perk Resolution
The action-to-perk resolver handles 40+ vanilla action types, supports custom perks from other mods, and includes fallback pattern matching for unregistered actions.

### ✅ Weak Table Usage
All tracking tables use `__mode = "k"` to prevent memory leaks:
```lua
BT._scaledWeaponsB42 = setmetatable({}, { __mode = "k" })
BT._maintenanceAttacksB42 = setmetatable({}, { __mode = "k" })
```

### ✅ Idempotent Wrappers
Every method wrapper checks if it's already installed:
```lua
if ISBaseTimedAction.adjustMaxTime == BT._timedActionBonusWrapperB42 then return end
```

### ✅ Multiplayer Safety
- Client never writes XP directly in MP
- Server validates all XP changes
- Incremental sync commands for long operations
- `GlobalModData` for persistent server storage

### ✅ Robust Error Handling
Uses `pcall()` extensively around API calls that might fail:
```lua
local ok, resolvedId = pcall(function() return perkOrId:getId() end)
if not ok or type(resolvedId) ~= "string" then return nil end
```

### ✅ Math Safety
Custom `IsFinite()` and `Clamp()` functions prevent NaN/infinity propagation:
```lua
function BT.IsFinite(value)
    value = tonumber(value)
    return value ~= nil and value == value and value ~= math.huge and value ~= -math.huge
end
```

### ✅ Steam64 ID Safety
Avoids converting large Steam64 IDs through `tonumber()`:
```lua
-- Never pass Steam64 through tonumber: adjacent IDs exceed Lua's exact integer range.
local steamID = tostring(steamValue or 0)
local principal = steamID ~= "0" and ("steam:" .. steamID .. "|user:" .. username)
```

## Weaknesses & Risks

### ⚠️ Complex State Management
The mod tracks XP in multiple places (vanilla XP, ModData, GlobalModData, journal items). If any desync occurs, recovery is manual.

### ⚠️ Aggressive Method Wrapping
Wrapping core systems like `ISBaseTimedAction.adjustMaxTime` could conflict with other mods doing the same. The idempotency check helps but doesn't guarantee load-order independence.

### ⚠️ Hardcoded Bonus Values
Bonus percentages (e.g., 2.5% speed per rank, 6% maintenance chance) are hardcoded in `Bonuses.lua`. Changing them requires code edits rather than sandbox options.

### ⚠️ Performance Overhead
The `OnTick` handler processes every player's weapons every frame:
```lua
-- Bonuses.lua (lines 440+)
Events.OnTick.Add(function()
    maintenanceGeneration = maintenanceGeneration + 1
    for _, player in ipairs(getAllPlayers()) do
        updateMaintenanceProtection(player, maintenanceGeneration)
    end
    processUnseenMaintenanceTrackers(maintenanceGeneration)
end)
```

On servers with many players, this could impact performance.

### ⚠️ Limited Customization
No sandbox options to disable specific bonuses or adjust mastery XP curves. Server admins must choose between full mod or nothing.

### ⚠️ Journal Item Complexity
The `SkillRecoveryJournal` system has extensive validation logic (~400 lines) that could break if TIS changes item serialization.

### ⚠️ UI Width Assumptions
The skill panel width calculation assumes specific font sizes and spacing. Different UI scale settings might cause layout issues.

## Lessons for Modders

### 1. Use Reservoir XP for Clean Separation
When extending skill levels, keep vanilla XP at a fixed level and store excess separately. This prevents conflicts with vanilla systems and other mods.

### 2. Wrap Methods, Don't Replace Classes
Save the original method and call it in your wrapper:
```lua
local original = SomeClass.someMethod
SomeClass.someMethod = function(self, ...)
    -- Your logic here
    return original(self, ...)
end
```

### 3. Support Both Singleplayer and Multiplayer
Always check `isClient()` and `isServer()` to determine authority:
```lua
if not isClient() then
    -- Singleplayer: write directly
    player:getXp():setXPToLevel(perk, level)
else
    -- Multiplayer: send command to server
    sendClientCommand(...)
end
```

### 4. Use Weak Tables for Tracking
Prevent memory leaks when tracking objects:
```lua
MyMod._trackedObjects = setmetatable({}, { __mode = "k" })
```

### 5. Implement Fallback Resolution
When mapping actions to perks, provide multiple resolution strategies:
1. Explicit override property
2. Registered action type
3. Exact match table
4. Pattern matching
5. Recipe inference

### 6. Clamp All Math Operations
Never trust input values:
```lua
value = math.max(0, math.min(maxValue, tonumber(value) or 0))
```

### 7. Document Load Order Dependencies
If your mod wraps methods from other mods, document the required load order and provide compatibility layers.

### 8. Use GlobalModData for Server Persistence
In multiplayer, store authoritative data in `getModData()` (global) rather than `player:getModData()` (client-local).

### 9. Provide Granular Event Hooks
Let other mods hook into your system:
```lua
BT.RegisterBonusProvider(perk, providerFunction)
BT.RegisterActionPerk(actionType, perk)
```

### 10. Test Edge Cases
Handle nil values, empty tables, and boundary conditions:
```lua
if not player or not perk or BT.GetNativeLevel(player, perk) < BT.NATIVE_MAX_LEVEL then 
    return 0 
end
```

## Version Information

- **Mod Version Analyzed:** 1.2.0
- **Build 42 Version:** 42.20 (mod.info specifies minimum 42.19)
- **Minimum Game Version:** 42.19
- **Date Analyzed:** 2026-08-09
- **Files Analyzed:** 17 files (7 Lua scripts, 1 JSON translation, 2 mod.info files, 7 legacy files)
- **Total Lines of Code:** ~2,100 lines across shared/client/server

---

*Analysis generated from code-only mod repository. Visual assets (textures, models, sounds) were not present for inspection.*
