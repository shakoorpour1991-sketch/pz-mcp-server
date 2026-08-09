---
title: "PZ Build 42 Modder's Reference"
build: "42.18"
tags: [pz, modding, build42, reference]
---

# Project Zomboid Build 42 — Modder's Reference

This document is based on a complete analysis of `D:\Games\ProjectZomboid-42.18`.
Only information found directly in game files is included. No APIs were invented.

---

## Table of Contents

1. [Game Directory Overview](#1-game-directory-overview)
2. [Lua Modding System](#2-lua-modding-system)
3. [Build 42 Entity System](#3-build-42-entity-system)
4. [Items and Inventory](#4-items-and-inventory)
5. [Recipes and Crafting](#5-recipes-and-crafting)
6. [Construction Systems](#6-construction-systems)
7. [World Generation](#7-world-generation)
8. [Characters and Gameplay](#8-characters-and-gameplay)
9. [Combat and Weapons](#9-combat-and-weapons)
10. [Vehicles](#10-vehicles)
11. [Electricity and Power](#11-electricity-and-power)
12. [Assets: Sounds, Textures, Models](#12-assets-sounds-textures-models)
13. [Multiplayer Compatibility](#13-multiplayer-compatibility)
14. [Common Modding Patterns](#14-common-modding-patterns)
15. [Recommended Development Workflow](#15-recommended-development-workflow)
16. [Mod Structure and Deployment](#16-mod-structure-and-deployment)
17. [Startup Parameters](#17-startup-parameters)

---

## 1. Game Directory Overview

### Root Structure

```
ProjectZomboid-42.18/
├── projectzomboid.jar              ← Java game engine (63MB)
├── ProjectZomboid64.exe            ← Windows executable
├── ProjectZomboidServer.bat         ← Dedicated server launcher
├── media/                          ← All game data (scripts, assets, Lua)
├── mods/                            ← Mod installation directory (one subfolder per mod)
└── jre64/                           ← Bundled JRE
```

### Key Native Libraries

| File | Purpose |
|------|---------|
| `PZBullet64.dll` | Physics engine (bullet physics) |
| `PZPathFind64.dll` | Pathfinding for zombies/NPCs |
| `PZClipper64.dll` | Geometry clipping/holes |
| `PZPopMan64.dll` | Population management |
| `RakNet64.dll` | Multiplayer networking |
| `Lighting64.dll` | Lighting system |
| `fmodintegration64.dll` | FMOD sound engine |

### `media/` Directory Structure

| Directory | Size | Contents |
|-----------|------|----------|
| `media/lua/` | 1,351 files | All Lua scripts (client/server/shared) |
| `media/scripts/` | 1,004+ files | Item/recipe/entity/vehicle definitions (.txt) |
| `media/sound/` | ~500+ | OGG/WAV audio files |
| `media/textures/` | ~5,000+ | PNG textures (items, world, UI) |
| `media/maps/` | 13 towns + challenges | Pre-built map data per town |
| `media/models/` | ~500+ | 3D models (vehicle parts, objects) |
| `media/AnimSets/` | ~200+ XML files | Animation definitions per entity |
| `media/clothing/` | ~300+ | Clothing textures and layering data |
| `media/radio/` | ~100+ | Radio station data and broadcasts |

---

## 2. Lua Modding System

### 2.1 Three-Tier Structure

Build 42 Lua is split into three tiers:

| Tier | Directory | Executes On | Purpose |
|------|-----------|-------------|---------|
| **Client** | `media/lua/client/` | Each player's game client | UI, rendering, client-side timed actions, context menus, local logic |
| **Server** | `media/lua/server/` | Server (or host in singleplayer) | World generation, item distributions, map objects, game mechanics |
| **Shared** | `media/lua/shared/` | Both client and server | Timed actions (dual-purpose), definitions, sandbox configs |

**Critical**: Files in `server/` check `if isClient() then return end` at the top. Client files execute on the server in singleplayer but use `if isServer() then` guards for server-only code.

### 2.2 Event System

Events are registered via `Events.<EventName>.Add(function)` and triggered via `triggerEvent("<EventName>", ...)`. Found in both Lua and Java.

#### Complete Event List (found in game Lua files)

| Event | Where Defined | Purpose |
|-------|--------------|---------|
| `OnGameBoot` | shared/ | Game boot, before everything |
| `OnInitWorld` | server/ | World initialization, spawn setup |
| `OnNewGame` | shared/ | Fresh new game creation |
| `OnGameStart` | shared/ | Game fully loaded, players exist. Most common init hook |
| `OnGameTimeLoaded` | shared/ | After save game time is loaded |
| `OnCreatePlayer` | client/ | Each player created |
| `OnCreateSurvivor` | client/ | Survivor NPC creation |
| `OnPlayerDeath` | client/ | Player death |
| `OnPlayerUpdate` | client/ | Per-frame player tick |
| `OnPostSave` | client/ | After game state saved |
| `OnSave` / `OnLoad` | shared/ | Save/Load events |
| `OnResetLua` | shared/ | Lua state reset |
| `OnModsModified` | shared/ | Mod load order changed |
| `OnInitGlobalModData` | shared/ | Global mod data initialization |
| `OnSpawnRegionsLoaded` | shared/ | Spawn regions loaded |

**Tick / Render Loop:**
| Event | Purpose |
|-------|---------|
| `OnTick` | Every game tick — universal periodic callback |
| `OnRenderTick` | Every render frame |
| `OnPreUIDraw` / `OnPostUIDraw` | Before/After UI is drawn |
| `EveryDays` / `EveryHours` / `EveryOneMinute` / `EveryTenMinutes` | Periodic timers |
| `OnResolutionChange` | Screen resolution changed |
| `OnSleepingTick` | Sleep tick |
| `RenderOpaqueObjectsInWorld` | Custom world rendering hook |

**Input Events:**
| Event | Purpose |
|-------|---------|
| `OnKeyPressed` / `OnKeyStartPressed` / `OnKeyKeepPressed` | Keyboard |
| `OnMouseDown` / `OnMouseWheel` / `OnRightMouseDown` | Mouse |
| `OnObjectLeftMouseButtonDown` / `OnObjectLeftMouseButtonUp` | IsoObject click |
| `OnObjectRightMouseButtonDown` / `OnObjectRightMouseButtonUp` | IsoObject right-click |
| `OnJoypadActivate` / `OnJoypadActivateUI` / `OnJoypadBeforeDeactivate` / `OnJoypadBeforeReactivate` / `OnJoypadDeactivate` / `OnJoypadReactivate` / `OnJoypadRenderUI` | Gamepad lifecycle |
| `OnGamepadConnect` / `OnGamepadDisconnect` | Controller hot-plug |

**Context Menu Events (mod primary hook point):**
| Event | Signature | Purpose |
|-------|-----------|---------|
| `OnPreFillWorldObjectContextMenu` | `(player, context, worldobjects, test)` | Before main context menu logic |
| `OnFillWorldObjectContextMenu` | `(player, context, worldobjects, test)` | After main logic — **the mod hook** |
| `OnPreFillInventoryObjectContextMenu` | `(player, context, items)` | Before inventory item right-click menu |
| `OnFillInventoryObjectContextMenu` | `(player, context, items)` | After inventory item menu — mod hook |
| `OnPreFillInventoryContextMenuNoItems` | `(playerNum, context, isLoot)` | Empty inventory space, before |
| `OnFillInventoryContextMenuNoItems` | `(playerNum, context, isLoot)` | Empty inventory space, after |

**World / Map:**
| Event | Where | Purpose |
|-------|-------|---------|
| `OnLoadedMapZones` | server/ | After map zones loaded from .lotheader |
| `OnLoadMapZones` | server/ | Before map zones loaded |
| `OnCreateRegion` | server/Vehicles/ | Region created — vehicle spawning hook |
| `LoadGridsquare` | client/ | Grid square loaded |
| `OnObjectAdded` | shared/ | World object added |
| `OnObjectAboutToBeRemoved` | shared/ | Object about to be removed |
| `OnContainerUpdate` | shared/ | Container contents changed |
| `OnFillContainer` | server/Items/ | Container populated with loot |
| `OnDistributionMerge` / `OnPreDistributionMerge` / `OnPostDistributionMerge` | server/Items/ | Loot distribution merge phases |

**Clothing / Equipment:**
| Event | Purpose |
|-------|---------|
| `OnClothingUpdated` | Clothing changed |
| `OnEquipPrimary` / `OnEquipSecondary` | Weapon equipped |

**Vehicle Events:**
| Event | Where | Purpose |
|-------|-------|---------|
| `OnEnterVehicle` / `OnExitVehicle` | client/ | Vehicle entry/exit |
| `OnSwitchVehicleSeat` | client/ | Seat switch |
| `OnUseVehicle` | client/ | Using vehicle |
| `OnVehicleDamageTexture` | client/ | Damage texture update |
| `OnVehicleHorn` | client/ | Horn |
| `OnMechanicActionDone` | client/ | Mechanic action completed |
| `OnSpawnVehicleStart` | server/ | Vehicle spawning |

**Foraging / Search:**
| Event | Purpose |
|-------|---------|
| `preAddForageDefs` / `preAddSkillDefs` / `preAddCatDefs` / `preAddZoneDefs` / `preAddItemDefs` | Before forage definitions added |
| `onAddForageDefs` | Forage definitions added |
| `onUpdateIcon` | Icon update |
| `onEnableSearchMode` / `onDisableSearchMode` / `onToggleSearchMode` | Search mode toggled |
| `OnOverrideSearchManager` | Search manager override |
| `OnAnimalTracks` | Animal tracks found |

**Crafting / Building:**
| Event | Purpose |
|-------|---------|
| `SetDragItem` | Drag item set |
| `OnDynamicMovableRecipe` | Dynamic movable recipe |
| `OnDoTileBuilding2` / `OnDoTileBuilding3` | Tile building |
| `OnMakeItem` | Item crafted |

**Farming / Animals:**
| Event | Purpose |
|-------|---------|
| `OnClickedAnimalForContext` | Animal right-click |
| `OnMovingObjectCrop` | Moving crop object |

**Climate / Weather:**
| Event | Purpose |
|-------|---------|
| `OnClimateTickDebug` | Climate debug tick |
| `OnClimateManagerInit` | Climate manager init |
| `OnThunderEvent` | Thunder |
| `OnWeatherPeriodStart` / `OnWeatherPeriodStage` / `OnWeatherPeriodComplete` | Weather lifecycle |
| `OnChangeWeather` | Weather changed |
| `OnDusk` / `OnDawn` | Dusk/dawn notifications |
| `OnWaterAmountChange` | Water amount changed |
| `OnInitSeasons` | Seasons init |

**Combat:**
| Event | Purpose |
|-------|---------|
| `OnHitZombie` | Zombie hit (damage textures) |
| `OnPlayerAttackFinished` | Attack animation finished |
| `OnWeaponHitTree` | Weapon hit tree |
| `OnWeaponHitXp` | Weapon XP gained |
| `OnWeaponSwingHitPoint` | Weapon swing connects |
| `OnZombieDead` | Zombie killed |
| `OnDestroyIsoThumpable` | Thumpable destroyed |

**Chat / Social:**
| Event | Purpose |
|-------|---------|
| `OnAddMessage` / `OnAlertMessage` / `OnAdminMessage` | Chat messages |
| `OnChatWindowInit` | Chat window init |
| `OnTabAdded` / `OnTabRemoved` / `OnSetDefaultTab` | Chat tabs |
| `SwitchChatStream` | Chat stream switch |
| `OnConnectFailed` / `OnConnected` / `OnDisconnect` | Connection state |
| `OnCoopJoinFailed` / `OnCoopServerMessage` | Coop messages |
| `OnScoreboardUpdate` / `OnMiniScoreboardUpdate` | Scoreboard |

**Trading / Factions:**
| Event | Purpose |
|-------|---------|
| `RequestTrade` / `AcceptedTrade` / `TradingUIAddItem` / `TradingUIRemoveItem` / `TradingUIUpdateState` | Trading lifecycle |
| `OnAcceptInvite` / `AcceptedFactionInvite` / `AcceptedSafehouseInvite` | Invite accept |
| `ReceiveFactionInvite` / `ReceiveSafehouseInvite` | Invite receive |
| `OnSafehousesChanged` | Safehouse changes |
| `SyncFaction` | Faction sync |

**Admin / Server:**
| Event | Purpose |
|-------|---------|
| `OnRolesReceived` / `OnNetworkUsersReceived` | Admin panel |
| `OnServerCommand` / `OnClientCommand` | Networked commands |
| `OnServerStarted` / `OnServerStartSaving` / `OnServerFinishSaving` | Server lifecycle |
| `OnSteamWorkshopItemCreated` / `OnSteamWorkshopItemUpdated` | Workshop |

**Other Events:**
| Event | Purpose |
|-------|---------|
| `OnProcessAction` / `OnProcessTransaction` | Action processing |
| `OnDeviceText` | Radio/device text |
| `OnMainMenuEnter` | Main menu entered |
| `OnItemFound` | Item discovery |
| `OnTemplateTextInit` | Template text init |
| `OnInitRecordedMedia` | Recorded media init |
| `OnLoadSoundBanks` / `OnLoadRadioScripts` | Audio/radio loading |
| `PressRackButton` / `PressReloadButton` / `PressWalkTo` | UI action presses |
| `OnContextKey` | Context-sensitive key |
| `OnDesignationZoneUpdatedNetwork` | Designation zone network update |
| `AddXP` / `LevelPerk` | XP/perk events |
| `DoSpecialTooltip` | Special tooltips |
| `ServerPinged` | Server ping |

### 2.3 ISBaseTimedAction Pattern

Every timed player action extends `ISBaseTimedAction`. This is the primary way to add custom player interactions.

#### Complete Skeleton (from ISFixGenerator.lua)

```lua
require "TimedActions/ISBaseTimedAction"

ISFixGenerator = ISBaseTimedAction:derive("ISFixGenerator")

-- VALIDITY CHECK: called each frame to check if action is still valid
function ISFixGenerator:isValid()
    return self.generator:getObjectIndex() ~= -1 and
           not self.generator:isActivated() and
           self.generator:getCondition() < 100 and
           self.character:getInventory():containsTypeRecurse("ElectronicsScrap")
end

-- TURNING: return true while character is turning to face object
function ISFixGenerator:waitToStart()
    self.character:faceThisObject(self.generator)
    return self.character:shouldBeTurning()
end

-- UPDATE: called each frame during action
function ISFixGenerator:update()
    self.character:faceThisObject(self.generator)
    self.character:setMetabolicTarget(Metabolics.UsingTools)
end

-- START: called once when action begins
function ISFixGenerator:start()
    self:setActionAnim("Loot")
    self.character:SetVariable("LootPosition", "Low")
    self.character:reportEvent("EventLootItem")
    self.sound = self.character:playSound("GeneratorRepair")
end

-- STOP: called when action is interrupted
function ISFixGenerator:stop()
    self.character:stopOrTriggerSound(self.sound)
    ISBaseTimedAction.stop(self)
end

-- PERFORM: called on completion; must call ISBaseTimedAction.perform(self)
function ISFixGenerator:perform()
    self.character:stopOrTriggerSound(self.sound)
    if isClient() then
        self:continueFixing()  -- chain next action on client
    end
    ISBaseTimedAction.perform(self)
end

-- COMPLETE: execute the actual effect. Return true for success.
function ISFixGenerator:complete()
    local scrapItem = self.character:getInventory():getFirstTypeRecurse("ElectronicsScrap")
    if not scrapItem then return false end
    self.character:removeFromHands(scrapItem)
    self.character:getInventory():Remove(scrapItem)
    sendRemoveItemFromContainer(self.character:getInventory(), scrapItem)
    -- Apply effect with skill scaling
    self.generator:setCondition(self.generator:getCondition() + 4 +
        (1 * (self.character:getPerkLevel(Perks.Electricity)) / 2))
    addXp(self.character, Perks.Electricity, 5)
    return true
end

-- DURATION: in game ticks (100 ticks = 1 second)
function ISFixGenerator:getDuration()
    if self.character:isTimedActionInstant() then
        return 1
    end
    return 150 - (self.character:getPerkLevel(Perks.Electricity) * 3)
end

-- CONSTRUCTOR
function ISFixGenerator:new(character, generator)
    local o = ISBaseTimedAction.new(self, character)
    o.generator = generator
    o.maxTime = o:getDuration()
    o.caloriesModifier = 4
    return o
end
```

#### Required Methods Summary

| Method | Called | Purpose |
|--------|--------|---------|
| `new(character, ...)` | Construction | Create action, set `self.maxTime` |
| `isValid()` | Every tick | Return false to cancel action |
| `waitToStart()` | Before start | Return `self.character:shouldBeTurning()` while character faces target |
| `start()` | Once at start | Set animation, play sound |
| `update()` | Every tick | Face target, set metabolism, check client sync |
| `stop()` | On interruption | Clean up sounds/effects |
| `perform()` | On completion | Clean up, chain next actions, call `ISBaseTimedAction.perform(self)` |
| `complete()` | On completion | Execute actual game logic, return `true` |
| `getDuration()` | Per call | Return `self.maxTime` in ticks |

#### Metabolism Constants

```lua
Metabolics.UsingTools    -- Light work (repair, crafting)
Metabolics.HeavyDomestic -- Moderate work (refueling, farming)
Metabolics.HeavyWork     -- Heavy work (construction, taking generators)
```

### 2.4 Context Menu System

Context menus are built via the `OnFillWorldObjectContextMenu` event.

#### How It Works

1. Player right-clicks a world object
2. `ISWorldObjectContextMenu.createMenu()` is called (client/ISUI/ line 142)
3. `ISWorldObjectContextMenuLogic.fetch()` inspects the clicked object (Java)
4. If the object passes tests, `OnFillWorldObjectContextMenu` event fires
5. Registered handlers add menu options
6. Each option has a text label, a callback function, and optional sub-menu

#### Example Registration (from ISVehicleMenu.lua)

```lua
-- Entry point
Events.OnFillWorldObjectContextMenu.Add(ISVehicleMenu.OnFillWorldObjectContextMenu)

-- Handler pattern
function ISVehicleMenu.OnFillWorldObjectContextMenu(player, context, worldobjects, test)
    -- player: integer player index
    -- context: ISContextMenu to add options to
    -- worldobjects: list of clicked objects
    -- test: if true, just check if any options would exist (for controller)
    local playerObj = getSpecificPlayer(player)
end
```

#### Context Menu Option Types

```lua
-- Simple option
context:addOption("Text", worldobjects, callbackFunction)

-- Option with callback and additional args
context:addGetUpOption("Text", worldobjects, callbackFunction, arg1, arg2)

-- Submenu
local subMenu = ISContextMenu:getNew(context)
context:addSubMenu(parentOption, subMenu)
subMenu:addGetUpOption("SubOption", worldobjects, handlerFunction, ...)
```

### 2.5 MapObjects System

**Purpose**: Convert map sprites to functional `IsoObject` instances at world load.

**Server-only** (`if isClient() then return end`).

```lua
-- Registration (from MOGenerator.lua)
local PRIORITY = 5
MapObjects.OnNewWithSprite("appliances_misc_01_0", NewGenerator, PRIORITY)

-- Handler pattern
local function NewGenerator(object)
    local fuel = 0
    local condition = 100
    local item = instanceItem("Base.Generator")
    item:setCondition(condition)
    item:getModData().fuel = fuel
    square:transmitRemoveItemFromSquare(object)
    local javaObject = IsoGenerator.new(item, cell, square)
    javaObject:transmitCompleteItemToClients()
end
```

**Priority**: Same-priority handlers override each other. Higher priority handlers run first.

### All MapObjects Files Found (13 files)

| File | Objects Handled |
|------|-----------------|
| `MOGenerator.lua` | Generators (16 sprites, 4 variants) |
| `MOBarricade.lua` | Barricades (44 sprites: planks, metal sheets, metal bars) |
| `MOCampfire.lua` | Campfires (3 sprites) + OnLoadWithSprite |
| `MOCompost.lua` | Compost bins (2 sprites: empty, full) |
| `MOFarming.lua` | Farming (plowed land, destroyed plants, growing plants) |
| `MOFeedingTrough.lua` | Feeding troughs (32+ sprites) + OnLoadWithSprite |
| `MOHutch.lua` | Hutches (22 sprites) |
| `MOLampOnPillar.lua` | Lamp on pillar (4 sprites) |
| `MORainCollectorBarrel.lua` | Rain collector barrels (4 sprites) |
| `MORandomPottedPlant.lua` | Random potted plants (1 sprite) |
| `MOTent.lua` | Tents (commented out) |
| `MOTrap.lua` | Traps (dynamic sprite registration) |
| `MOWoodenWallFrame.lua` | Wooden wall frames (3 sprites) |

### 2.6 Common Lua APIs

| API Call | Purpose |
|----------|---------|
| `instanceItem(type)` | Create an item instance from full type string |
| `getSpecificPlayer(playerNum)` | Get the player object by index |
| `getWorld():getCell()` | Get current cell |
| `getCell():getGridSquare(x, y, z)` | Get a specific square |
| `luautils.walkAdj(player, square)` | Check if player can walk adjacent to square |
| `AdjacentFreeTileFinder.Find(square, player)` | Find free adjacent tile |
| `addXp(character, Perks.X, amount)` | Award XP |
| `ZombRand(limit)` | Random int 0..limit-1 |
| `isClient()` / `isServer()` | Client/server check |
| `instanceof(obj, "IsoGenerator")` | Java instanceof check |
| `sendRemoveItemFromContainer()` / `sendAddItemToContainer()` | Network-sync item operations |
| `getText("IGUI_KeyName")` | Translation lookup |
| `forceDropHeavyItems(character)` | Drop held items (for 2-handed pickup) |
| `createBuildAction(character, x, y, z, north, spriteName, item)` | Server-side build action creation |

### 2.7 Lua Optimization — Performance Best Practices

*Source: PZwiki Mod Optimization page — see `wiki/Mod-optimization.md` for full version*

#### Don't Run Code If You Don't Need To

The #1 optimization: check if work is needed before doing it. For per-entity per-tick code, a single guard check can cut function calls drastically.

```lua
-- BAD: calls setSkeleton every tick on every zombie
local function OnZombieUpdate(zombie)
    zombie:setSkeleton(true)
end

-- GOOD: skip if already a skeleton
local function OnZombieUpdate(zombie)
    if not zombie:isSkeleton() then
        zombie:setSkeleton(true)
    end
end
```

#### Use Local Variables, Never Global

Accessing a global variable is more costly than a local. Cache frequently-used globals:

```lua
-- BAD
myGlobal = "Hello"

-- GOOD
local myLocal = "Hello"

-- Caching vanilla globals at top of file
local ProceduralDistributions = ProceduralDistributions  -- cache global as local
```

#### Caching

Store values/objects once instead of retrieving them every frame:

```lua
-- Simple caching within a function
local function OnPlayerUpdate(player)
    local weapon = player:getPrimaryHandItem()  -- cached once
    if weapon and instanceof(weapon, "HandWeapon") and weapon:isRanged() then
        local maxBullets = weapon:getMaxAmmo()   -- cached once
        if weapon:getCurrentAmmoCount() ~= maxBullets then
            weapon:setCurrentAmmoCount(maxBullets)
        end
    end
end

-- File-level caching (objects that don't change per save)
local zombieList
Events.OnPostMapLoad.Add(function(cell)
    zombieList = cell:getZombieList()  -- store once
end)
Events.OnTick.Add(function()
    print(zombieList:size() .. " zombies loaded")  -- reuse
end)
```

#### Minimize Function Calls

Function calls in Kahlua are costly. Approximate math functions directly:

```lua
-- math.max
local res = value > maxvalue and value or maxvalue

-- math.min
local res = value < minvalue and value or minvalue

-- math.floor
local res = value - value % 1

-- math.abs
local res = value < 0 and -value or value

-- math.sqrt
local res = value ^ 0.5

-- math.pow
local res = value ^ exponent
```

#### Avoid Print Statements

`print()` is extremely costly. Remove all prints from production code. Debug-mode checks still waste cycles evaluating the condition — just delete prints entirely.

#### Use Proper Array Tables

Lua arrays should use `table.newarray()` for better performance:

```lua
-- BAD (fake array)
local arr = { "a", "b", "c" }

-- GOOD (proper array)
local arr = table.newarray("a", "b", "c")
```

**Note**: Proper arrays can't be used in mod data or network commands.

#### Use Numeric Loops Instead of `ipairs` / `pairs`

```lua
-- SLOW: ipairs
for i, v in ipairs(t) do print(v) end

-- FAST: numeric loop
for i = 1, #t do local v = t[i]; print(v) end

-- SLOW: pairs (key table)
for k, v in pairs(lookup) do print(v) end

-- FAST: separate key array
local keys = table.newarray("key1", "key2", "key3")
for i = 1, #keys do
    print(lookup[keys[i]])
end
```

#### Use `newrandom()` Instead of `ZombRand`

`ZombRand` generates high-quality randomness (costly). Use the lighter alternative:

```lua
local myRandom = newrandom()
local value = myRandom:random(min, max)
```

#### Load Balancing

Spread expensive operations across multiple ticks instead of running them all at once:

```lua
local zombieList
local currentIndex = 0

local function OnGameStart()
    zombieList = getPlayer():getCell():getZombieList()
end
Events.OnGameStart.Add(OnGameStart)

-- Process 1 zombie per tick
local function OnTick()
    if zombieList:size() > currentIndex then
        local zombie = zombieList:get(currentIndex)
        -- process zombie
    end
    currentIndex = currentIndex + 1
    if currentIndex >= zombieList:size() then
        currentIndex = 0
    end
end
Events.OnTick.Add(OnTick)
```

#### Benchmarking Code

Use `GameTime.getServerTime` (returns nanoseconds) to measure performance:

```lua
GameTime.setServerTimeShift(0)  -- required init
local getTime = GameTime.getServerTime

local start = getTime()
-- code to benchmark
local delta = getTime() - start
print("Took " .. delta .. " ns")
```

---

## 3. Build 42 Entity System

### 3.1 Overview

Build 42 introduces a new **entity-based crafting system** separate from the old script recipes. Entities define buildable objects with visual sprites, build requirements, and optional Lua callbacks.

**File location**:
- Generated: `media/scripts/generated/entities/<category>/entity_*.txt`
- Manual: `media/scripts/entities/<category>/entity_*_xuiSkin.txt`
- Category directories: `barricades/`, `walls/`, `furniture/`, `fences_low/`, `appliances/`, `agricultural/`, `animals/`, `blacksmith/`, `misc/`, `outdoors/`, `pottery/`, `stairs/`, `admin/`

### 3.2 Module/Entity/Component Format

All entities are defined inside a `module` block (typically `module Base`):

```
module Base
{
    entity EntityName
    {
        component ComponentName
        {
            -- Properties
        }
        component ComponentName2
        {
            -- Properties
        }
    }
}
```

### 3.3 Component Types

#### UiConfig Component

Wires up the xuiSkin for UI display:

```
component UiConfig
{
    xuiSkin = default,
    entityStyle = ES_EntityStyleName,
    uiEnabled = false,     -- false = auto-placed on ground, true = opens UI window
}
```

#### SpriteConfig Component

Defines visual appearance, behavior callbacks, and health:

```
component SpriteConfig
{
    -- Optional: World logic class reference
    LogicClass = WoodenWall,
    
    -- Optional: Health properties (walls, thumpables)
    health = 500,
    skillBaseHealth = 70,
    
    -- Optional: Callbacks (Lua function references)
    OnIsValid = ModNamespace.functionName,     -- Called to check if placement is valid
    OnCreate = ModNamespace.functionName,       -- Called when entity is created
    TimedActionOnIsValid = ModNamespace.func,   -- Called during timed action validation
    OnAddToMenu = LuaFunctionName,             -- Called when adding to build menu
    
    -- Flag: whether object is thumpable by zombies
    isThumpable = false,
    
    -- Sprite faces (directional)
    face W { layer { row = sprite_name, } }
    face N { layer { row = sprite_name, } }
    face E { layer { row = sprite_name, } }
    face S { layer { row = sprite_name, } }
    
    -- Corner sprite (walls)
    corner = sprite_name,
    
    -- Multiple rows per face
	
    face S { layer { row = sprite1 sprite2, } } -- multi-sprite row
    face E
    {
        layer { row = sprite1, }
        layer { row = sprite2, }   -- multiple layers
    }
}
```

#### CraftRecipe Component

Defines how the entity is built:

```
component CraftRecipe
{
    timedAction = BuildWallHammer,       -- Which timed action plays
    time = 200,                          -- Build time in ticks
    category = Furniture,                -- Build menu category
    SkillRequired = Woodwork:4,          -- Minimum skill level (optional)
    xpAward = Woodwork:40,              -- XP awarded on build
    Tags = Carpentry;Furniture,          -- Tags for filtering/sorting
    Tooltip = Tooltip_craft_bedDesc,    -- Tooltip text key
    OnCreate = RecipeCode.function,      -- Lua callback on creation (optional)
    
    -- Input items
    inputs
    {
        -- Tool with tags (kept after crafting)
        item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeVeryLight],
        
        -- Consumed items with full type
        item 6 [Base.Plank],             -- 6 planks consumed
        item 4 [Base.Nails],             -- 4 nails consumed
        item 1 [Base.Mattress],          -- 1 mattress consumed
        
        -- Items with flags
        item 1 tags[base:concrete] flags[DontRecordInput],
    }
}
```

#### Input Flags

| Flag | Purpose |
|------|---------|
| `Prop1` | Display slot 1 (tool animation) |
| `MayDegradeVeryLight` | Tool may degrade, very light chance |
| `MayDegradeLight` | Tool may degrade, light chance |
| `DontRecordInput` | Don't record in crafting log |
| `ItemCount` | Show item count in UI |
| `InheritUsesAndEmpty` | Inherit uses/empty state |
| `ResearchInput` | Research this input (magazine) |
| `IsNotWorn` | Item must not be worn |
| `AllowFavorite` | Allow favorite items |
| `NotEmpty` | Item must not be empty |
| `IsEmpty` | Item must be empty |
| `NoBrokenItems` | Item must not be broken |

#### Input Modes

| Mode | Behavior |
|------|----------|
| `mode:keep` | Item stays in inventory (tools) |
| `mode:destroy` | Item is consumed entirely |

### 3.4 xuiSkin Display System

Each entity needs a matching **xuiSkin entry** for its `entityStyle`:

File: `media/scripts/entities/<category>/entity_<name>_xuiSkin.txt`

```
module Base
{
    xuiSkin default
    {
        entity ES_EntityStyleName
        {
            LuaWindowClass = ISEntityWindow,    -- UI window class
            DisplayName = Human Readable Name,  -- Displayed in build menu
            Icon = Build_IconName,              -- Build menu icon
        }
    }
}
```

The `xuiSkin` (e.g., `default`) must match the `xuiSkin` property in `UiConfig`.

### 3.5 Complete Entity Examples

#### Simple Furniture (Bed)

Entity file — `entity_carpentry_bed.txt`:
```
module Base
{
    entity Wood_Bed
    {
        component UiConfig
        {
            xuiSkin = default,
            entityStyle = ES_Wood_Bed,
            uiEnabled = false,
        }
        component SpriteConfig
        {
            face S { layer { row = carpentry_02_72 carpentry_02_73, } }
            face E
            {
                layer { row = carpentry_02_75, }
                layer { row = carpentry_02_74, }
            }
        }
        component CraftRecipe
        {
            timedAction = BuildWallHammer,
            time = 50,
            SkillRequired = Woodwork:4,
            xpAward = Woodwork:40,
            category = Furniture,
            Tags = Carpentry;Furniture,
            Tooltip = Tooltip_craft_bedDesc,
            inputs
            {
                item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeVeryLight],
                item 6 [Base.Plank],
                item 4 [Base.Nails],
                item 1 [Base.Mattress],
            }
        }
    }
}
```

XUI Skin — `entity_carpentry_bed_xuiSkin.txt`:
```
module Base
{
    xuiSkin default
    {
        entity ES_Wood_Bed
        {
            LuaWindowClass = ISEntityWindow,
            DisplayName = Bed,
            Icon = Build_Bed,
        }
    }
}
```

#### Wall with Lua Callbacks (Barricade)

Entity file — `entity_barricade_planks.txt`:
```
module Base
{
    entity BarricadePlanks
    {
        component UiConfig
        {
            xuiSkin = default,
            entityStyle = ES_BarricadePlanks,
            uiEnabled = false,
        }
        component SpriteConfig
        {
            isThumpable = false,
            OnIsValid = BuildRecipeCode.barricade.OnIsValidPlanks,
            OnCreate = BuildRecipeCode.barricade.OnCreate,
            TimedActionOnIsValid = BuildRecipeCode.barricade.TimedActionOnIsValid,
            face W { layer { row = carpentry_01_8, } }
            face N { layer { row = carpentry_01_9, } }
            face E { layer { row = carpentry_01_0, } }
            face S { layer { row = carpentry_01_1, } }
        }
        component CraftRecipe
        {
            timedAction = BuildWallHammer,
            time = 200,
            category = Barricades,
            Tags = AutoRotate,
            xpAward = Woodwork:10,
            Tooltip = Tooltip_craft_BigMetalFenceDesc,
            inputs
            {
                item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeVeryLight;DontRecordInput],
                item 1 [Base.Plank],
                item 1 [Base.Nails] flags[DontRecordInput],
            }
        }
    }
}
```

#### Wall with Health and Corner

```lua
component SpriteConfig
{
    LogicClass = WoodenWall,        -- Uses Java logic class
    health = 500,                    -- Health points
    skillBaseHealth = 70,            -- Health added per skill level
    face W { layer { row = walls_exterior_house_01_20, } }
    face N { layer { row = walls_exterior_house_01_21, } }
    corner = walls_exterior_house_01_23,  -- Corner auto-fill
}
component CraftRecipe
{
    timedAction = BuildWallNoTool,
    time = 200,
    category = Masonry,
    SkillRequired = Masonry:2,
    xpAward = Masonry:20,
    Tooltip = Tooltip_craft_brickWallDesc,
    inputs
    {
        item 1 tags[base:masonstrowel] mode:keep flags[Prop1;MayDegradeLight],
        item 2 tags[base:concrete] flags[DontRecordInput],
        item 4 [Base.ClayBrick],
    }
}
```

### 3.6 Timed Actions Used by Entities

| timedAction | Behavior | Sound |
|-------------|----------|-------|
| `BuildWallHammer` | Standard build with hammer | Saw + Hammer alternating |
| `BuildWallNoTool` | Place without tool (masonry) | No hammer sound |
| Ref: `ISBuildAction.lua` in `client/BuildingObjects/TimedActions/` |

### 3.7 Tags System

Tags are used extensively for item filtering and entity inputs. Format: `base:tagname`.

Common tags found in item/entity definitions:
- `base:heavyitem` — Heavy two-handed items
- `base:generator` — Generator items
- `base:hasmetal` — Contains recoverable metal
- `base:hammer` — Hammer tools
- `base:screwdriver` — Screwdriver tools
- `base:saw` — Saw tools
- `base:petrol` — Petrol containers
- `base:miscelectronic` — Misc electronic items
- `base:showcondition` — Show condition bar in UI
- `base:ignorezombiedensity` — Spawn regardless of zombie density
- `base:flashlight` — Flashlight items
- `base:usesbattery` — Items that use batteries

---

## 4. Items and Inventory

### 4.1 Item Definition Format

Items are stored in `media/scripts/generated/items/*.txt` (16 files, ~96K lines total).
Each file is a `module Base { ... }` block containing item definitions.

```lua
item ItemName
{
    DisplayCategory = Electronics,          -- Category in inventory UI
    ItemType = base:normal,                 -- Type class (normal, weapon, food, clothing, container, drainable)
    Weight = 40.0,                          -- Weight in arbitrary units
    Icon = Generator,                       -- Icon texture name
    ConditionMax = 100,                     -- Maximum condition
    MetalValue = 500.0,                     -- Metal scrap value
    RequiresEquippedBothHands = true,       -- Must hold in both hands
    Tooltip = Tooltip_Generator,            -- Tooltip text key
    Tags = base:heavyitem;base:generator;base:hasmetal;base:ignorezombiedensity;base:showcondition,
    WorldObjectSprite = appliances_misc_01_0, -- Sprite when placed in world
    ConditionLowerChanceOneIn = 30,         -- 1 in N chance to degrade per use
    SoundRadius = 20,                       -- Sound radius when running (generators)
    SoundVolume = 1,                        -- Sound volume
}
```

### 4.2 All Item Files

| File | Line Count | Contains |
|------|-----------|----------|
| `clothing.txt` | 24,599 | Clothing items with BodyLocation, Protection, etc. |
| `container.txt` | 5,877 | Backpacks, bags, crates with Capacity, WeightReduction |
| `food.txt` | 15,521 | Food items with HungerChange, ThirstChange, etc. |
| `weapon.txt` | 19,747 | Weapon items with Damage, Range, MinAngle, etc. |
| `normal.txt` | 14,726 | Misc items: generators, electronics, materials, tools |
| `drainable.txt` | 2,420 | Drainable items: batteries, propane, cigarettes |
| `literature.txt` | 8,258 | Books, magazines, skill books |
| `moveable.txt` | 3,542 | Furniture/objects that can be picked up and moved |
| `radio.txt` | 459 | Radio items |
| `weaponpart.txt` | 214 | Weapon modification parts |
| `key.txt` | 78 | Key items |
| `map.txt` | 184 | Map items |
| `alarmclock.txt` | 27 | Alarm clock items |
| `alarmclockclothing.txt` | 306 | Alarm clock clothing items |
| `animal.txt` | 10 | Animal items |

### 4.3 Item Properties by Type

#### Normal Items (base:normal)

```
Weight, DisplayCategory, Icon, ConditionMax, MetalValue, Tooltip, Tags, WorldObjectSprite
```

#### Weapons (base:weapon)

Additional properties (from weapon.txt):
- `Damage`, `MaxDamage`, `MinDamage`
- `Range`, `MinRange`, `MaxRange`
- `SwingTime`, `AttackTime`, `RecoverTime`
- `ConditionLowerChance`, `ConditionMax`
- `TreeDamage` (for axes)
- `DoorDamage`, `WallDamage` (for sledgehammers)
- `KnockBack`, `KnockDown`
- `WeaponLength`, `WeaponWeight`
- `AmmoType`, `AmmoPerShoot`, `MaxAmmo`
- `ReloadTime`, `AimingModifier`, `HitChance`
- `DamageCategory` (Slash, Blunt, Bullet, Stab, etc.)
- `SwingAnim`, `OverrideMeleeAnim`

#### Food (base:food)

- `HungerChange`, `ThirstChange`, `BoredomChange`
- `UnhappyChange`, `StressChange`
- `Calories`, `Carbohydrates`, `Lipids`, `Proteins`
- `CustomColor` (for drink cans)
- `EatType` (Can, Bowl, Popcan, etc.)

#### Clothing (base:clothing)

- `BodyLocation` — Which body slot (e.g., Body, Legs, Head, Hands, etc.)
- `Protection` — Damage protection value
- `BiteDefense`, `ScratchDefense`, `BulletDefense`
- `Insulation`, `Windness`, `WaterResistance`
- `MakeUp`, `FabricType`
- `Attachments` (holsters, pouches, etc.)

#### Containers (base:container)

- `Capacity` — Item capacity (in weight units)
- `WeightReduction` — Percentage weight reduction
- `CanHaveAttachment` — Can attach items
- `OpenSounds`, `CloseSounds`

#### Drainable (base:drainable)

- `UseDelta` — Amount consumed per use
- `UseWhileEquipped` — Can use while equipped
- `MaxUses` — Maximum uses before empty
- `ReplaceOnDeplete` — Item to replace with when empty

### 4.4 DisplayCategory Values (from grep)

all the DisplayCategory values found across item files (partial list):
Electronics, ElectronicsScreen, SkillBook, RecipeResource, Food, Weapon, Clothing,
Bag, Container, VehicleMaintenance, Medical, Literature, Key, Map, Radio,
WaterContainer, FireSource, InstrumentWeapon, Junk, Material, Ammo, AmmoBox,
AmmoBullets, AmmoShells, AmmoMisc, Movable, Tool, Camping, Farming, Fishing,
Trapping, Sewing, Crafting, Smoker, Headwear, Eyewear, Mask, Neckwear,
Jacket, Shirt, Vest, Sweater, Tshirt, TankTop, Blouse, Dress, Skirt,
Shorts, Pants, Socks, Shoes, Belt, Holster, Bag_Weapon, Bag_Secondary,
RING, WATCH, HAT, GLASSES, GLASSES_HIPSTER, EAR, PIERCING_EAR, PIERCING_NOSE,
PIERCING_EYEBROW, PIERCING_LIP, PIERCING_TONGUE, MOUTH, NECK, HAND_LEFT,
HAND_RIGHT, HANDS, FULL_HAND, FULL_HAND_INSIDE, Torso, Legs, etc.

### 4.5 Tag List (Common)

```lua
Tags = base:heavyitem;base:generator;base:hasmetal;base:ignorezombiedensity;base:showcondition
Tags = base:petrol;base:hasmetal                          -- Fuel containers
Tags = base:hammer;base:hasmetal                          -- Hammers
Tags = base:screwdriver;base:hasmetal                     -- Screwdrivers
Tags = base:heavyitem;base:hasmetal;base:vehiclepart      -- Vehicle parts
Tags = base:miscelectronic;base:hasmetal                  -- Electronic items
Tags = base:flashlight;base:usesbattery                   -- Flashlights
Tags = base:campfire;base:firestart                       -- Camping
Tags = base:firstaid                                      -- Medical
Tags = base:weapon;base:blunt                             -- Blunt weapons
Tags = base:weapon;base:blade                             -- Blade weapons
Tags = base:isContainer                                   -- Containers
Tags = base:dismantle;base:saw                            -- Dismantle tools
```

### 4.6 WorldStaticModel

Many items use `WorldStaticModel = ModelName` for their 3D world appearance:
```lua
WorldStaticModel = GasCan_Ground,
WorldStaticModel = ElectronicsScrap,
WorldStaticModel = JerryCan,
WorldStaticModel = Parcel_Food_Small,    -- BatteryBox
WorldStaticModel = Microphone,
WorldStaticModel = PowerBar,
```

---

## 5. Recipes and Crafting

### 5.1 Old-Style Craft Recipes

Build 42 has **two recipe systems**:

| System | File Location | Format | Category |
|--------|--------------|--------|----------|
| Entity Recipes | `media/scripts/generated/entities/*/` | Entity + CraftRecipe component | New system (Build 42) |
| Old Craft Recipes | `media/scripts/generated/recipes/*.txt` | `craftRecipe` block | Legacy system |

### 5.2 Old Recipe Format

```lua
module Base
{
    craftRecipe RecipeName
    {
        timedAction = DismantleElectrical,          -- Timed action class
        time = 60,                                   -- Duration in ticks
        AllowBatchCraft = false,                     -- Allow batch crafting
        Tags = InHandCraft;CanBeDoneInDark,          -- Behavior tags
        category = Electrical,                       -- Recipe category
        xpAward = Electricity:2,                     -- XP awarded
        
        -- Lua callbacks
        OnCreate = RecipeCodeOnCreate.functionName,  -- Called on creation
        
        inputs
        {
            item 1 tags[base:screwdriver] mode:keep flags[NoBrokenItems],  -- Tool
            item 1 tags[base:camera;base:digital;base:miscelectronic;base:flashlight]
                 mode:destroy flags[IsNotWorn;ItemCount;ResearchInput],     -- Consumed
        }
        outputs
        {
            item 1 Base.ElectronicsScrap,            -- Output item(s)
        }
    }
}
```

### 5.3 Recipe Categories (~43 categories found)

```
Carpentry, Electrical, Cooking, Baking, Farming, Fishing, Trapping,
Medical, MetalWelding, Tailoring, Fixing, Camping, Survivalist,
Spears, Lightsources, Knapping, Pottery, Glassmaking, Carving,
Bone, Packing, Gasmasks, ImprovisedWeapons, Ammunition,
Assembly, Buckets, CannedFood, CardsAndDice, Disassembly,
Fluids, Tins, Sacks, SleepingBagsAndTents, Tobacco, Traps,
Radio, Jarring, MetalWelding_Armor, Tailoring_Armor,
Tailoring_GarbageTapeAndTarp, Tailoring_Knitting,
Tailoring_LeatherAndHide
```

### 5.4 Recipe Tags

```lua
Tags = InHandCraft;Electrical
Tags = InHandCraft;CanBeDoneInDark
Tags = InHandCraft;KeepAllTools;Uncraft
```

| Tag | Meaning |
|-----|---------|
| `InHandCraft` | Craftable from inventory (no workbench) |
| `CanBeDoneInDark` | No light required |
| `KeepAllTools` | Don't degrade tools |
| `Uncraft` | Reverse/uncraft recipe |
| `Electrical` | Category tag |

### 5.5 Lua Callbacks

Recipes reference Lua functions for custom logic:

```lua
OnCreate = RecipeCodeOnCreate.dismantleFlashlight,     -- Items/RecipeCodeOnCreate.lua
OnCreate = RecipeCodeOnCreate.dismantleMiscElectronics,
OnCreate = RecipeCodeOnCreate.torchBatteryInsert,
```

These functions are defined in `media/lua/server/CraftRecipeCode/RecipeCodeOnCreate.lua`.

### 5.6 Item Mapper

Recipes can use `ItemMapper` for dynamic outputs:

```lua
item 1 [Base.CDplayer;Base.HomeAlarm;Base.Remote;Base.Speaker]
    flags[ItemCount;ResearchInput] mappers[itemType] mode:destroy,

itemMapper itemType
{
    Base.Amplifier = Base.Speaker,
    Base.ElectronicsScrap = Base.CDplayer,
    Base.MotionSensor = Base.HomeAlarm,
    Base.Receiver = Base.Remote,
}
```

---

## 6. Construction Systems

### 6.1 Build Menu Entities (Build 42)

Buildable objects use the **Entity system** described in Section 3. The **ISBuildAction** timed action handles placement.

**Key file**: `media/lua/client/BuildingObjects/TimedActions/ISBuildAction.lua`

### 6.2 ISBuildingObject System

For more complex objects, Build 42 uses `ISBuildingObject` (server-side base class at `media/lua/server/BuildingObjects/ISBuildingObject.lua`):

```lua
ISBuildingObject = ISBaseObject:derive("ISBuildingObject")
```

Properties settable on building objects:
- `setNorthSprite(sprite)` / `setEastSprite(sprite)` / `setSouthSprite(sprite)` / `setSprite(sprite)`
- `setCanPassThrough(bool)` — Can players walk through
- `setDragNilAfterPlace(bool)` — Clear cursor drag after placement
- `noNeedHammer` — Skip hammer requirement
- `isWallLike` — Wall placement behavior
- `craftingBank` — Sound bank for crafting
- `completionSound` — Sound on completion

### 6.3 IsoThumpable System

Walls and destructible objects create `IsoThumpable` Java objects:

```lua
local obj = IsoThumpable.new(cell, sq, sprite, north, self)
obj:setMaxHealth(health)
obj:setBreakSound("BreakObject")
sq:AddSpecialObject(obj)
```

Properties:
- `setCanBarricade(true/false)`
- `setCorner(true/false)` — Corner fill piece
- `setName("Display Name")`
- `setMaxHealth(health)`
- `setHealth(value)`
- `setBreakSound("SoundName")`
- `setDoor(true/false)` — Is it a door

### 6.4 Barricade System (Build 42)

Barricades use the entity system with Lua callbacks.

**Lua callbacks** in `media/lua/server/BuildRecipeCode/buildRecipeCode.lua`:
- `BuildRecipeCode.barricade.OnIsValidPlanks` — Validation
- `BuildRecipeCode.barricade.OnCreate` — Create
- `BuildRecipeCode.barricade.TimedActionOnIsValid` — During placement

**Timed actions**:
- `ISBarricadeAction.lua` (shared/) — Placement logic
- `ISUnbarricadeAction.lua` (shared/) — Removal logic

---

## 7. World Generation

### 7.1 Terrain Generation (WorldGen)

**Key files**: `media/lua/server/WorldGen/`

| File | Purpose |
|------|---------|
| `WorldGen.lua` | Entry point — creates worldgen table |
| `Selection.lua` | Parameter ranges (landscape, temperature, etc.) |
| `Biomes.lua` | Biome table container |
| `Features.lua` | Feature category loader |
| `Roads.lua` | Road generation config |
| `Veins.lua` | Ore vein generation (iron_arm1, copper_arm) |
| `biomes/worldgen/*.lua` | 16 biome definitions |
| `biomes/map/*.lua` | 19 pixel→biome maps |
| `features/ground/*.lua` | 9 ground types |
| `features/plant/*.lua` | 9 plant types |
| `features/bush/*.lua` | 4 bush types |
| `features/tree/*.lua` | ~50 tree species × 3 sizes |
| `features/ore/*.lua` | 5 ore/rock types |

### 7.2 Biome Map Config

**File**: `media/lua/server/metazones/BiomeMapConfig.lua`

Maps world pixel values to zones/biomes:
```lua
biome_map_config = {
    { pixel = 0, zone = "Water" },
    { pixel = 115, biome = "townhouse", zone = "TownZone" },
    -- $random = random biome from zone
    { pixel = 96, biome = "$random", zone = "DeepForest" },
}
```

### 7.3 Metazone System

**File**: `media/lua/server/metazones/metazoneHandler.lua`

Loads zone definitions from map `.lotheader` files. Supports:
- `handleAnimalZone` — Animal spawning
- `handleBasementSpawnLocation` — Basement entry
- `handleMannequinZone` — Mannequin displays
- `handleRoomTone` — Ambient sounds
- `handleSpawnOrigin` — Player spawns
- `handleWaterFlow` / `handleWaterZone` — Water
- `registerZone` — Generic zone
- `registerWorldGenZone` — Terrain override
- `registerVehiclesZone` — Vehicle spawns

### 7.4 Randomized Building Content

**Files**: `media/lua/server/RandomizedWorldContent/StoryClutter/`

50+ clutter tables for procedural interior generation:
- `StoryClutter_Definitions.lua` — Data tables
- `StoryClutter_Initialization.lua` — Java API hook: `getWorld():getRandomizedWorldBase()`

Hooks into `Events.OnLoadedMapZones`.

### 7.5 Item Distributions

**Files** (server/Items/):

| File | Purpose |
|------|---------|
| `Distributions.lua` (23,595 lines) | Room→container loot tables |
| `ProceduralDistributions.lua` (52,723 lines) | Weighted item spawn tables |
| `SuburbsDistributions.lua` | Room type aliases |
| `Distribution_*.lua` (7 files) | Junk/container tables |
| `WorldFiller.lua` | Sprite overlay maps |
| `TileOverlays.lua` etc. (10+ files) | Damage/decor overlays |

Distribution structure:
```lua
Distributions = {
    roomname = {
        containerType = {
            procedural = true,
            procList = { {name="TableName", min=0, max=99} },
            rolls = 4,
            items = { "Item.Type", weight },
        }
    }
}
```

---

## 8. Characters and Gameplay

### 8.1 Perks/Skills

Reference via `Perks.PerkName`. Complete list (from `SashaScenario.lua`):

```
Agility, Cooking, Melee, Crafting, Fitness, Strength, Blunt, Axe,
Sprinting, Lightfoot, Nimble, Sneak, Woodwork, Aiming, Reloading,
Farming, Survivalist, Fishing, Trapping, Passiv, Firearm,
PlantScavenging, Doctor, Electricity, Blacksmith, MetalWelding,
Melting, Mechanics, Spear, Maintenance, SmallBlade, LongBlade,
SmallBlunt, Combat, Butchering, Carving, FlintKnapping, Glassmaking,
Husbandry, Masonry, Pottery, Tracking
```

API calls:
```lua
character:getPerkLevel(Perks.Electricity)   -- Get skill level
addXp(character, Perks.Electricity, 5)      -- Award XP
character:LevelPerk(Perks.Electricity)      -- Debug: directly level up
```

Skill book registration (`XpSystem/XPSystem_SkillBook.lua`):
```lua
SkillBook["Electricity"] = {}
SkillBook["Electricity"].perk = Perks.Electricity
SkillBook["Electricity"].maxMultiplier1 = 3
```

### 8.2 Professions

**File**: `media/lua/server/Professions/Professions.lua`

```lua
Professions = {
    PoliceOfficer = { rare = 1 },
    ParkRanger = { rare = 2 },
    ConstructionWorker = {},
    MilitarySoldier = { rare = 2 },
    MilitaryOfficer = { rare = 3 },
    SecurityGuard = {},
    FireOfficer = { rare = 1 },
    Salesperson = {},
    ITWorker = {},
    OfficeWorker = {},
    Unemployed = {},
    TruckDriver = {},
    Farmer = {},
    Cashier = {},
    ShopClerk = {},
    FastFoodCook = {},
    Cook = { rare = 2 },
    Chef = { rare = 3 },
    Burglar = { rare = 1 },
    Drugdealer = { rare = 1 },
    Nurse = { rare = 1 },
    Doctor = { rare = 2 },
    Veteran = { rare = 2 },
    Carpenter = {},
    Mechanics = {},
    Handy = {},
    MetalWorker = {},
    Electrician = {},
    Fisherman = {},
    FitnessInstructor = { rare = 2 },
    Repairman = { rare = 1 },
    -- ... more
}
```

`rare = 1` = somewhat rare, `rare = 3` = very rare, no `rare` = common.

### 8.3 Traits

Reference via `CharacterTrait.TRAITNAME`.
Found in `ISVehicleMenu.lua:98`:
```lua
playerObj:hasTrait(CharacterTrait.BURGLAR)
```

### 8.4 Clothing Recipes

**File**: `media/lua/shared/Definitions/ClothingRecipesDefinitions.lua`

```lua
ClothingRecipesDefinitions["FabricType"]["Cotton"] = {
    material = "Base.RippedSheets",
    materialDirty = "Base.RippedSheetsDirty"
}
ClothingRecipesDefinitions["FabricType"]["Denim"] = {
    material = "Base.DenimStrips",
    noSheetRope = true
}
ClothingRecipesDefinitions["FabricType"]["Leather"] = {
    material = "Base.LeatherStrips",
    noSheetRope = true
}
```

### 8.5 Health System

**File**: `media/lua/server/HealthSystem/HealthUpdate.lua`

Health events: `Events.OnPlayerDeath`, `Events.OnPlayerAttackFinished`

### 8.6 Attached Weapon Definitions

**File**: `media/lua/shared/Definitions/AttachedWeaponDefinitions.lua` (2,630 lines)

Defines weapons embedded in zombies. Format:
```lua
AttachedWeaponDefinitions.spearStomach = {
    chance = 5,                        -- Weighted chance
    weaponLocation = {"Stomach"},      -- Body attachment point
    bloodLocations = {"Torso_Lower","Back"},
    addHoles = true,                   -- Add blood holes
    daySurvived = 30,                  -- Days survived before appearing
    weapons = { "Base.SpearCrafted", "Base.SpearKnife", ... }
}
```

### 8.7 Damage Model Definitions

**File**: `media/lua/shared/Definitions/DamageModelDefinitions.lua`

Maps weapon damage categories to zombie visual damage textures:
```lua
DamageModelDefinitions.addDefinition("ZedDmg_HEAD_Slash", BodyPartType.Head, {"Slash"})
DamageModelDefinitions.OnHitZombie = function(zombie, wielder, bodyPart, weapon)
    -- Picks texture, adds visual damage, may add hole
end
```

---

## 9. Combat and Weapons

### 9.1 Weapon Properties

Weapons defined in `media/scripts/generated/items/weapon.txt` (19,747 lines).
Key properties:
- `Damage`, `MaxDamage`, `MinDamage`
- `DamageCategory` = "Blunt", "Slash", "Stab", "Bullet", "Firearm", "Axe"
- `SwingTime`, `AttackTime`, `RecoverTime`
- `Range`, `MinRange`, `MaxRange`
- `KnockBack`, `KnockDown`
- `SwingAnim`, `OverrideMeleeAnim`
- `TreeDamage`, `DoorDamage`, `WallDamage`
- `ConditionLowerChance`, `ConditionMax`
- `AmmoType`, `AmmoPerShoot`, `MaxAmmo`

### 9.2 Attack Events

```lua
Events.OnWeaponSwingHitPoint.Add(handler)    -- When swing connects
Events.OnPlayerAttackFinished.Add(handler)   -- When attack animation finishes
```

### 9.3 Combat Animation Script

**File**: `media/animscript/combat.xml`

Contains combat animation definitions and hitbox data.

### 9.4 Reload System

**File**: `media/lua/shared/TimedActions/ISReloadWeaponAction.lua`

Events:
```lua
Events.OnPressReloadButton.Add(handler)
Events.OnPressRackButton.Add(handler)
```

---

## 10. Vehicles

### 10.1 Vehicle Script System

Vehicle definitions are in `media/scripts/generated/vehicles/`.

**Structure per vehicle**:
1. A **model file** (`vehicle_<name>_model.txt`) — 3D model reference
2. A **template file** (`vehicle_<name>_template.txt`) — Part composition
3. Optional **script files** with additional configs

### 10.2 Vehicle Part Templates

Reusable part definitions:
```
template_battery.txt    template_brake.txt       template_door.txt
template_engine.txt     template_engine_door.txt template_gastank.txt
template_glovebox.txt   template_headlight.txt   template_heater.txt
template_lightbar.txt   template_muffler.txt     template_passenger.txt
template_radio.txt      template_seat.txt        template_suspension.txt
template_tire.txt       template_trunk.txt       template_window.txt
template_windshield.txt template_sounds_*.txt    template_*_collision.txt
```

### 10.3 Vehicle Spawning

**ProfessionVehicles**: `media/lua/server/Vehicles/ProfessionVehicles.lua`
- Per-region vehicle lists defined in `ProfessionVehicles.<TownName>` tables
- Spawned via `Events.OnCreateRegion`
- Uses `addVehicleDebug(scriptName, direction, nil, square)` API
- Third parameter is part condition table (for damaged/burnt variants)

**Vehicle Distributions**: `media/lua/server/Vehicles/VehicleDistributions.lua`
- Per-part loot tables: `GloveBox`, `TrunkStandard`, `TrunkHeavy`, `TrunkSports`, `EmptySeat`, `DriverSeat`
- Junk tables: `VehicleDistribution_GloveBoxJunk.lua`, `VehicleDistribution_SeatJunk.lua`, `VehicleDistribution_TrunkJunk.lua`

**Smashed Vehicles**: `media/lua/shared/Definitions/SmashedCarDefinitions.lua`
- Maps base car to smashed variants per direction
```lua
SmashedCarDefinitions.cars["Base.CarNormal"] = {
    front = "Base.CarNormalSmashedFront",
    rear = "Base.CarNormalSmashedRear",
    left = "Base.CarNormalSmashedLeft",
    right = "Base.CarNormalSmashedRight"
}
```

---

## 11. Electricity and Power

*(See also: D:\PZ-Modding\Documentation\Build42_Electrical_Generator_Research.md)*

### 11.1 IsoGenerator Java API

The `IsoGenerator` class is Java-based. Available methods (from Lua usage):

| Method | Returns | Use |
|--------|---------|-----|
| `IsoGenerator.new(item, cell, square)` | `IsoGenerator` | Constructor |
| `generator:isActivated()` | boolean | Is generator running |
| `generator:setActivated(bool)` | void | Start/stop |
| `generator:isConnected()` | boolean | Plugged into building |
| `generator:setConnected(bool)` | void | Plug/unplug |
| `generator:getFuel()` | float | Fuel units remaining |
| `generator:setFuel(float)` | void | Set fuel |
| `generator:getFuelPercentage()` | float | 0-100% |
| `generator:getMaxFuel()` | float | Max capacity |
| `generator:getCondition()` | int | 0-100 condition |
| `generator:setCondition(int)` | void | Set condition |
| `generator:getObjectIndex()` | int | World index (-1 if removed) |
| `generator:failToStart()` | void | Play fail sound |
| `generator:sync()` | void | Network sync |
| `generator:remove()` | void | Remove from world |
| `generator:getModData()` | table | Lua mod data |
| `generator:getItemsPowered()` | ArrayList | List of powered devices |
| `generator:getBasePowerConsumptionString()` | String | Generator power draw |
| `generator:getTotalPowerUsingString()` | String | Total load |
| `generator:getTextureName()` | String | UI texture |

### 11.2 Power Grid Check

```lua
square:haveElectricity()    -- Has grid power (before shutoff)
square:hasGridPower()       -- Generator-powered building
```

### 11.3 Generator Variants

4 generator items in `normal.txt`:
- `Generator` (40kg, sound 20, condition 1-in-30 degrade)
- `Generator_Yellow` (40kg, sound 20, 1-in-36)
- `Generator_Blue` (30kg, sound 23, 1-in-24)
- `Generator_Old` (40kg, sound 25, 1-in-25, random spawn condition)

### 11.4 CarBatteryCharger

Shares power check infrastructure:
```lua
-- ISVehicleMenu.lua:1088
carBatteryCharger:getSquare():haveElectricity()
or (carBatteryCharger:getSquare():hasGridPower() and carBatteryCharger:getSquare():getRoom())
```

### 11.5 Fuel Fluid System

- Fluid type: `Petrol` (accessed via `Fluid.Petrol`)
- Containers: `PetrolCan` (10u), `JerryCan` (20u)
- Container check: `item:getFluidContainer() and item:getFluidContainer():contains(Fluid.Petrol)`

---

## 12. Assets: Sounds, Textures, Models

### 12.1 Sound System

**Sound definition format** (`media/scripts/generated/sounds/`):
```
sound SoundName
{
    category = Object,           -- Object, Player, World, etc.
    clip
    {
        event = Object/Generator/Running,   -- FMOD event path
        distanceMax = 100,                  -- Max audible range (in cells)
    }
}
```

**Per-object sound banks**: `media/scripts/generated/sounds/objects/`
**Per-player sound banks**: `media/scripts/generated/sounds/player/`

**Sound Bank Lua**: `media/lua/shared/SoundBanks/SoundBanks.lua`

**Sound playback**:
```lua
self.character:playSound("SoundName")
self.character:getEmitter():playSound("SoundName")    -- Looping
self.character:stopOrTriggerSound(self.sound)          -- Stop/trigger
self.character:getEmitter():stopSound(self.sound)      -- Stop
```

**FMOD event path convention**:
```
Object/Generator/Running           -- Generator loop
Character/Survival/Electrical/Dismantle  -- Electrical work
World/Event/ElectricityShutdown    -- Grid shutdown
```

### 12.2 Sprite Naming Convention

Sprites follow pattern: `<category>_<type>_<id>`:
```
appliances_misc_01_0      -- Generator sprite
carpentry_01_8            -- Plank barricade (W)
carpentry_02_72           -- Bed sprite
walls_exterior_house_01_20  -- Brick wall
```

### 12.3 Animation System

**Location**: `media/AnimSets/`

Per-entity animation XML files:
```
AnimSets/
├── base.xml                      ← Main animation reference
├── player/actions/*.xml          ← Player action animations
│   ├── RemoveBarricade.xml
│   ├── RemoveBarricadeCrowbar.xml
│   ├── RemoveBarricadeCrowbarHigh.xml
│   └── ...
├── buck/                         ← Deer animations
├── chicken/                      ← Chicken animations
├── rabbit/                       ← Rabbit animations
├── animal-editor/                ← Animal editor runtime
└── ...
```

Animation scripts: `media/animscript/combat.xml`

### 12.4 3D Models

- `media/models/` — Standard models
- `media/models_X/` — Extended/skinned models
- Native DLL: `jassimp64.dll` (Assimp model importer)

### 12.5 Texture Packs

- `media/textures/` — Main texture directory
- `media/texturepacks/` — Alternative texture sets
- `media/ui/` — UI textures and atlases
- `media/items/` — Item world textures

---

## 13. Multiplayer Compatibility

### 13.1 Client/Server Separation Pattern

Build 42 uses explicit client/server separation in Lua:

```lua
-- Server-only code at top of file
if isClient() then return end

-- Client-only check
if isClient() then
    -- Client-specific logic
end

-- Server-only check
if not isClient() and not isServer() then
    -- Singleplayer host logic
end
```

### 13.2 Network Sync Patterns

```lua
-- Sync operations
square:transmitRemoveItemFromSquare(object)
javaObject:transmitCompleteItemToClients()
sendRemoveItemFromContainer(container, item)
sendAddItemToContainer(container, item)
sendEquip(character)
generator:sync()

-- Client action sync
if isClient() then
    self.action:setWaitForFinished(true)
    if isActionDone(self.transactionId) then
        self:forceComplete()
    elseif isActionRejected(self.transactionId) then
        self:forceStop()
    end
end

-- Create build action (server-side)
self.transactionId = createBuildAction(self.character, x, y, z, north, spriteName, item)
removeAction(self.transactionId, false)  -- cleanup after completion
```

### 13.3 Common Multiplayer Mistakes (from game code comments)

```lua
-- Lockstep timing
-- "Each drainable unit adds 10% to a generator. FIXME: A partial unit also adds 10%."

-- Client/server sound separation
-- "Players with the Deaf trait don't play sounds. In multiplayer, we mustn't send multiple sounds."

-- Action serialization
-- "The client completes the transfer after receiving packet ActionPacket from the server"
```

### 13.4 Server Commands

```lua
Events.OnServerCommand.Add(handler)
Events.OnClientCommand.Add(handler)
```

---

## 14. Common Modding Patterns

### 14.1 Adding a Custom Item

```lua
-- In a mod script file (.txt):
module Base
{
    item MyModItem
    {
        DisplayCategory = Electronics,
        ItemType = base:normal,
        Weight = 1.5,
        Icon = CustomIcon,
        ConditionMax = 10,
        Tags = base:mycustom;base:hasmetal,
    }
}
```

### 14.2 Adding a Custom Entity (Buildable Object)

1. Create entity script `media/<modname>/scripts/entities/<category>/entity_myobject.txt`:
```lua
module Base
{
    entity MyObject
    {
        component UiConfig
        {
            xuiSkin = default,
            entityStyle = ES_MyObject,
            uiEnabled = false,
        }
        component SpriteConfig
        {
            face S { layer { row = my_sprite_name, } }
        }
        component CraftRecipe
        {
            timedAction = BuildWallHammer,
            time = 100,
            category = Furniture,
            xpAward = Woodwork:10,
            inputs
            {
                item 1 tags[base:hammer] mode:keep,
                item 2 [Base.Plank],
                item 2 [Base.Nails],
            }
        }
    }
}
```

2. Create xuiSkin `media/<modname>/scripts/entities/<category>/entity_myobject_xuiSkin.txt`:
```lua
module Base
{
    xuiSkin default
    {
        entity ES_MyObject
        {
            LuaWindowClass = ISEntityWindow,
            DisplayName = My Custom Object,
            Icon = Build_SomeIcon,
        }
    }
}
```

### 14.3 Adding a Custom Timed Action

```lua
require "TimedActions/ISBaseTimedAction"

MyAction = ISBaseTimedAction:derive("MyAction")

function MyAction:isValid()
    return self.target:getObjectIndex() ~= -1
end

function MyAction:new(character, target)
    local o = ISBaseTimedAction.new(self, character)
    o.target = target
    o.maxTime = 100
    return o
end

-- Add all other required methods (see Section 2.3)
```

### 14.4 Adding Context Menu Options

```lua
local function MyMenuHandler(player, context, worldobjects, test)
    if test then return ISWorldObjectContextMenu.setTest() end
    context:addOption("My Option", worldobjects, function()
        -- handler
    end)
end
Events.OnFillWorldObjectContextMenu.Add(MyMenuHandler)
```

### 14.5 MapObject Sprite Conversion

```lua
if isClient() then return end

local function OnMySprite(spriteObject)
    local item = instanceItem("Base.MyItem")
    local cell = getWorld():getCell()
    local square = spriteObject:getSquare()
    square:transmitRemoveItemFromSquare(spriteObject)
    local javaObj = MyJavaObject.new(item, cell, square)
    javaObj:transmitCompleteItemToClients()
end

MapObjects.OnNewWithSprite("my_sprite_name", OnMySprite, 5)
```

---

## 15. Recommended Development Workflow

### 15.1 Mod Development Order (Recommended)

| Phase | Focus | Systems | Difficulty |
|-------|-------|---------|------------|
| 1 | Item/Recipe creation | Item scripts, recipe scripts, CraftRecipe | Easy |
| 2 | Buildable objects | Entity system, ISBuildingObject, xuiSkin | Easy-Medium |
| 3 | Player interactions | ISBaseTimedAction, context menus | Medium |
| 4 | World generation | StoryClutter, WorldGen, Distributions | Medium-Hard |
| 5 | UI | ISUI windows, ISCollapsableWindow | Medium-Hard |
| 6 | Server mechanics | Events, MapObjects, server Lua | Hard |
| 7 | Vehicles | Script templates, ProfessionVehicles | Hard |
| 8 | Engine changes | Java class modification or Lua workaround | Very Hard |

### 15.2 Essential Tools

| Tool | Purpose |
|------|---------|
| MCP Server (`pz-mcp-server`) | FTS5 search of vanilla game data via MCP tools |
| Game file inspection | Direct reading of Lua/script files |
| Debug context menu | `DebugUIs/DebugContextMenu.lua` — in-game debugging |
| LootLog | `Items/LootLog.lua` — container spawn logging |
| Tests | `client/Tests/TimedActionsTests.lua` — unit test examples |

### 15.3 Key Reference Files

| File | What to Learn |
|------|---------------|
| ISFixGenerator.lua | Complete timed action example |
| MOGenerator.lua | MapObjects registration pattern |
| entity_barricade_planks.txt | Full entity with Lua callbacks |
| entity_carpentry_bed.txt | Simple entity example |
| ISWorldObjectContextMenu.lua | Context menu handler pattern (lines 529-672) |
| Distributions.lua | Loot distribution structure |
| WorldGen.lua | Terrain generation pattern |
| ProfessionVehicles.lua | Vehicle spawning pattern |

### 15.4 Major Modding Limitations

**Confirmed impossible from Lua**:
1. **Zombie AI/Behavior** — SadisticAIDirector is Java-only; only `SadisticMusicDirector.lua` (music triggers) is exposed
2. **Generator fuel consumption rate** — Burn rate is in `IsoGenerator.update()` (Java)
3. **Power grid mechanics** — Building power assignment, connection radius are Java-internal
4. **Chunk/grid management** — World chunk loading/unloading is Java-internal
5. **World map image** — The biome pixel map is a fixed .png; cannot procedurally generate from Lua
6. **Building/room generation** — `RandomizedWorldBase` is Java; only StoryClutter data tables are Lua-hookable
7. **Zombie migration/respawn** — Handled by Java SadisticAIDirector
8. **Multi-building power sharing** — Generators power one building only

**⚠️ Partially accessible from Lua**:
1. **Randomized building interiors** — StoryClutter data feeds Java, but placement logic is Java
2. **Zombie population density** — Voronoi noise config + biome `zombies` param exist, but core distribution is Java
3. **Vehicle burnt/smashed state selection** — Script variants exist, selection logic is Java
4. **Electricity shutoff timing** — Config via sandbox vars; random timing is `randomElectricityShut()` Java

---

## 16. Mod Structure and Deployment

*Source: PZwiki Mod Structure page — see `wiki/Mod-structure.md` for full version*

### 16.1 Cache Folder: `mods/` vs `workshop/`

Local mods are recognized in two folders inside the game's cache folder (`%UserProfile%/Zomboid/`):

| Folder | Path | Purpose |
|--------|------|---------|
| `mods/` | `Zomboid/mods/` | Manual install, NOT recommended for development |
| `workshop/` | `Zomboid/workshop/` | Mod development + Steam Workshop upload |

**IMPORTANT**: `Zomboid/workshop/` (in cache folder) is NOT the same as `steamapps/common/ProjectZomboid/workshop/` (game install folder). Always use the cache folder version for modding.

**Critical rule**: Never be subscribed to your own mod on Steam Workshop while developing locally — duplicate versions clash and overwrite each other.

### 16.2 Workshop Folder Structure

```
~/Zomboid/Workshop/MyMod/
├── workshop.txt                    ← Auto-generated on upload
├── preview.png                     ← 256x256 Steam preview image
└── Contents/
    └── mods/
        ├── MyMod1/
        │   ├── mod.info
        │   ├── poster.png
        │   ├── icon.png
        │   ├── common/             ← MANDATORY (even if empty)
        │   │   └── media/
        │   │       ├── anims_X/
        │   │       ├── models_X/
        │   │       └── ...
        │   ├── 42/
        │   │   ├── media/
        │   │   │   ├── lua/client/
        │   │   │   ├── lua/server/
        │   │   │   ├── lua/shared/
        │   │   │   ├── scripts/
        │   │   │   └── ...
        │   │   └── mod.info        ← Per-version mod.info
        │   └── 42.1/               ← Optional extra version folder
        │       ├── media/
        │       └── mod.info
        └── MyMod2/                 ← Multiple mods in one upload
            ...
```

Folders at the same level as `Contents/` (like `.git`, `images/`, `.vscode/`) are NOT uploaded and not seen by the game — perfect for dev assets.

### 16.3 Build 42 Versioning Folders

Build 42 introduced **common** and **versioning** folders within each mod:

| Folder | Load Order | Content |
|--------|-----------|---------|
| `common/` | 1st (base) | Large files: models, textures, animations, sounds |
| `42/` (or `42.1/`, `42.12/`) | 2nd (overrides common) | Code files, mod.info, scripts (version-sensitive) |

**Version naming rules**:
```
42.1.5  → treated as 42.1    (minor version ignored)
42.12   → treated as 42.12
42.0.5  → treated as 42.0
```

**Loading order**: Common folder loads first, then the closest matching versioning folder overwrites files with the same relative path. At least one versioning OR common folder is MANDATORY for the mod to be detected.

### 16.4 Build 42 Media Subfolders

Mod assets go in `media/` subfolders matching the game's structure, but you only need the ones relevant to your mod:

| Modding Field | Subfolder(s) | File Types |
|---------------|-------------|------------|
| **Lua scripting** | `lua/client/`, `lua/server/`, `lua/shared/` | `.lua` |
| **Items/Recipes/Vehicles** | `scripts/` | `.txt` |
| **Animations** | `anims_X/`, `AnimSets/` | Animation files + XML triggers |
| **Models** | `models_X/` | `.x` (DirectX) or `.fbx` (Filmbox) |
| **Textures** | `textures/` | `.png` |
| **UI elements** | `ui/` | `.png` |
| **Sounds** | `sound/` | `.ogg` or `.wav` |
| **Clothing** | `clothing/` | XML files with GUID per item |
| **Mapping** | `maps/` | Map files and assets |
| **Translation** | `lua/shared/Translate/` | Translation files |

**Important notes**:
- Sound bank files (`.bank`) cannot be loaded from mods — FMOD banks are game-only
- Clothing items use XML files with unique GUIDs per item
- `clothing.xml` for the outfit manager — file name doesn't clash with other files named the same
- Model files can use DirectX (`.x`) or Filmbox (`.fbx`) format
- Files with the same relative path in `common/` vs version folder will be overwritten by the version folder

### 16.5 Mixing Build 41 and 42

It's possible to support both builds in one mod folder. The Build 42 structure is one folder deeper, so they don't clash:

```
Contents/mods/MyMod/
├── media/          ← Build 41 (flat structure)
│   ├── lua/
│   ├── scripts/
│   └── ...
├── common/         ← Build 42
│   └── media/
├── 42/             ← Build 42
│   └── media/
│       ├── lua/
│       ├── scripts/
│       └── mod.info
```

### 16.6 External Workshop Downloads

Subscribed mods go to `steamapps/workshop/content/108600/` (108600 = Project Zomboid's App ID). Each mod is stored in a folder named after its **Workshop ID**.

---

## 17. Startup Parameters

*Source: PZwiki Startup Parameters page — see `wiki/Startup-parameters.md` for full version*

Startup parameters override default launcher, JVM, and game options.

### 17.1 Usage

**From Steam**: Right-click game → Properties → Launch Options

```
-Xmx8192m -Xms8192m -- -debug
```

(JVM args first, `--` separator, then game args)

**From shortcut**: Add to `ProjectZomboid64.exe` target field

```
"C:\ProjectZomboid64.exe" -Xmx8192m -Xms8192m -- -debug
```

**From StartServer64.bat**: Edit the script (separate JVM and game sections, no `--` needed)

### 17.2 Common Use Cases

| Use Case | Arguments |
|----------|-----------|
| Allocate 8GB RAM | `-Xmx8192m -Xms8192m --` |
| Debug mode | `-debug` |
| Disable Steam | `-nosteam` |
| Custom cache dir | `-cachedir="C:\Zomboid"` |

### 17.3 Client Game Arguments

| Argument | Description |
|----------|-------------|
| `-debug` | Launch in debug mode |
| `-safemode` | Reduced resolution, textures, disables WeatherShader + FBO |
| `-nosound` | Disable audio |
| `-nosteam` | Disable Steam integration |
| `-novoip` | Disable voice chat |
| `-debuglog=All` | Enable all debug logging |
| `-debuglog=Network,-Sound` | Enable Network filter, disable Sound |
| `-modfolders workshop,steam,mods` | Control mod load order and sources |
| `-cachedir="C:\Path"` | Override cache directory |
| `+connect 127.0.0.1:16261` | Connect directly to server |
| `+password ServerPass` | Provide server password |
| `-imgui` | Debug mode + Imgui |
| `-debugtranslation` | Translation debug mode |
| `-console_dot_txt_size_kb=512000` | Max console.txt size |

### 17.4 Server Arguments

| Argument | Description |
|----------|-------------|
| `-coop` | Run coop server (not dedicated) |
| `-servername MyServer` | Internal server name (affects save folder) |
| `-adminpassword Pass123` | Set admin password |
| `-adminusername Bob` | Set admin username |
| `-ip 123.45.678.9` | Bind to specific IP |
| `-port 16261` | Override DefaultPort |
| `-udpport 16261` | Override UDPPort |
| `-steamvac true` | Enable Valve Anti-Cheat |
| `-statistic 10` | Enable MP statistics (period in seconds) |
| `-gui` | Launch server GUI (unfinished/neglected) |
| `-disablelog=All` | Disable log filters |

### 17.5 JVM Arguments

| Argument | Description |
|----------|-------------|
| `-Xmx8192m` | Max heap memory |
| `-Xms8192m` | Min heap memory |
| `-XX:+AlwaysPreTouch` | Touch all heap pages (recommended with ZGC) |
| `-Dzomboid.steam=1` | Disable Steam API |
| `-Dzomboid.ConsoleDotTxtSizeKB=512000` | Max console.txt size |
| `-Ddeployment.user.cachedir="C:\Zomboid"` | Cache directory (Linux) |
| `-Ddebug` | Debug mode via JVM |
| `-Dargs.server.connect="ip:port"` | Auto-connect (client) |
| `-Dargs.server.password="pass"` | Auto-password (client) |

### 17.6 Launcher Arguments

| Argument | Description |
|----------|-------------|
| `-pzexeconfig ProjectZomboid64Custom.json` | Override launcher config |
| `-pzexelog ProjectZomboid64.log` | Log launcher output |

---

*Research conducted against Project Zomboid Build 42.18 installation at D:\Games\ProjectZomboid-42.18*
*No APIs were invented. Every class, method, event, and file path is sourced from actual game files.*
