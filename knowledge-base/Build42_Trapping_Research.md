---
title: "Project Zomboid Build 42 Trapping Research"
build: "42.20"
tags: [pz, modding, build42, trapping]
---

# Project Zomboid Build 42 — Trapping Research

> **Scope:** Build 42.20 (stable). The trapping system: trap items, trap definitions (`Traps` table), catchable animals (`TrapAnimals`), baits, trapping recipes, and the Lua runtime (`STrapSystem`, `MOTrap`). All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Trap Items](#3-trap-items)
4. [Trap Definitions](#4-trap-definitions)
5. [Trap Animals & Bait](#5-trap-animals--bait)
6. [Trapping Recipes](#6-trapping-recipes)
7. [Trap System Lua](#7-trap-system-lua)
8. [Modding Opportunities](#8-modding-opportunities)

---

## 1. Overview

- Trapping is **fully data-driven in Lua**: `media/lua/server/Traps/TrapDefinition.lua` defines every trap (`Traps` table) and every catchable animal (`TrapAnimals` table) with per-zone, per-trap, and per-bait chances.
- Trap **items** (`TrapBox`, `TrapCage`, `TrapCrate`, `TrapMouse`, `TrapSnare`, `TrapStick`) are crafted by recipes in `recipes_trapping.txt`, then placed in the world as `IsoThumpable` objects by `MOTrap.lua`.
- The runtime is `STrapSystem` (server) + `TrapSystem` (shared); players bait traps with food items, and after a period the trap either catches an animal (species depends on zone/trap/bait weights) or breaks (`destroyItem` drops).
- Note: `recipes_traps.txt` (17 recipes) is the **electrical booby-trap** recipe file (remote controllers, triggers, timers) — a separate mechanic from animal trapping.

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/lua/server/Traps/TrapDefinition.lua` | `Traps` + `TrapAnimals` definition tables (337 lines) |
| `media/lua/server/Traps/STrapSystem.lua` | Server-side trap lifecycle/simulation |
| `media/lua/server/Traps/STrapGlobalObject.lua` | Global object integration |
| `media/lua/server/Traps/trappingCommands.lua` | Chat/admin commands |
| `media/lua/server/Traps/TrapRecipeCode.lua` | Recipe callbacks (placing traps) |
| `media/lua/server/Traps/BuildingObjects/` | Trap building objects |
| `media/lua/server/Traps/ISUI/` | Trap UI |
| `media/lua/shared/Traps/TrapSystem.lua` | Shared trap logic |
| `media/lua/shared/Traps/TimedActions/` | Trap timed actions |
| `media/lua/server/Map/MapObjects/MOTrap.lua` | Spawns trap `IsoThumpable` objects from sprites |
| `media/scripts/generated/recipes/recipes_trapping.txt` | 5 trap-crafting recipes |
| `media/scripts/generated/recipes/recipes_traps.txt` | 17 electrical booby-trap recipes |
| `media/scripts/generated/items/normal.txt` | Trap items (lines 11658–11705) |

---

## 3. Trap Items

Verified in `media/scripts/generated/items/normal.txt`:

| Item | Line | |
|------|:----:|-|
| `TrapBox` | 11658 | |
| `TrapCage` | 11667 | |
| `TrapCrate` | 11677 | |
| `TrapMouse` | 11686 | |
| `TrapSnare` | 11696 | |
| `TrapStick` | 11705 | |

Each trap item is matched to a definition in the `Traps` table by its full id (`Base.TrapCrate`, …).

---

## 4. Trap Definitions

`media/lua/server/Traps/TrapDefinition.lua` — the `Traps` table (verified):

```lua
Traps = {};
local crateTrap = {};
crateTrap.type = "Base.TrapCrate";
crateTrap.sprite = "constructedobjects_01_3";
crateTrap.closedSprite = "constructedobjects_01_2";
crateTrap.trapStrength = 15;
crateTrap.destroyItem = { "Base.UnusableWood", "Base.Nails" };
table.insert(Traps, crateTrap);
```

| Field | Meaning |
|-------|---------|
| `type` | Trap item id (`Base.TrapX`) |
| `sprite` / `closedSprite` | Open/closed world sprites |
| `northSprite` / `northClosedSprite` | North-facing variants (optional) |
| `trapStrength` | Durability vs. animal escape |
| `destroyItem` | Items dropped when the trap breaks (string or list) |

Complete trap table (verified):

| Trap | type | sprites | trapStrength | destroyItem |
|------|------|---------|:------------:|-------------|
| TrapCrate | `Base.TrapCrate` | `constructedobjects_01_3` / `01_2` | 15 | UnusableWood, Nails |
| TrapBox | `Base.TrapBox` | `01_4` / `01_5` (+north `01_7`/`01_6`) | 15 | UnusableWood, Nails, Nails |
| TrapCage | `Base.TrapCage` | `01_8` / `01_9` (+north `01_11`/`01_10`) | 20 | Wire |
| TrapSnare | `Base.TrapSnare` | `01_16` / `01_17` | 10 | UnusableWood, Twine, Twine |
| TrapStick | `Base.TrapStick` | `01_13` / `01_12` | 15 | UnusableWood, Twine |
| TrapMouse | `Base.TrapMouse` | `01_18` / `01_19` | 50 | UnusableWood |

---

## 5. Trap Animals & Bait

The `TrapAnimals` table models each catchable species (verified — rabbit):

```lua
TrapAnimals = TrapAnimals or {};
local rabbit = {};
rabbit.type = "rabbit";
rabbit.strength = 24;            -- hours before the animal escapes/breaks the trap
rabbit.item = "Base.DeadRabbit"; -- item dropped on catch
rabbit.minHour = 19;             -- active window (night)
rabbit.maxHour = 5;
rabbit.minSize = 30;             -- hunger-reduction size range
rabbit.maxSize = 100;
rabbit.canBeAlive = true;
rabbit.aliveAnimals = { "rabbuck", "rabdoe", "rabkitten" };  -- living animals (B42 animals system)
rabbit.aliveBreed  = { "swamp", "appalachian", "cottontail" };
rabbit.zone = { TownZone=2, TrailerPark=2, Vegitation=10, Forest=12, DeepForest=15,
                BirchForest=12, BirchMixForest=12, FarmForest=12, FarmMixForest=12,
                PRForest=12, PHForest=12, PHMixForest=12, OrganicForest=15 };
rabbit.traps = { ["Base.TrapCage"]=40, ["Base.TrapSnare"]=30, ["Base.TrapBox"]=30, ["Base.TrapCrate"]=30 };
rabbit.baits = { Carrots=45, Apple=35, Lettuce=40, BellPepper=40, Cabbage=40,
                 Corn=35, Banana=35, Potato=35, Tomato=35, Peach=35 };
table.insert(TrapAnimals, rabbit);
```

Animal field reference:

| Field | Meaning |
|-------|---------|
| `type` | Animal key (`rabbit`, `squirrel`, …) |
| `strength` | Escape timer (hours) |
| `item` | Dead-animal item (`Base.DeadRabbit`, `Base.DeadSquirrel`) |
| `minHour`/`maxHour` | Active hours (night hunters: 19–5) |
| `minSize`/`maxSize` | Size range (hunger value) |
| `canBeAlive` + `aliveAnimals`/`aliveBreed` | Integrates with the B42 Animals system (living catch) |
| `zone` | Chance per forage/vegetation zone |
| `traps` | Chance per trap type |
| `baits` | Attract chance per bait item |

Squirrel (verified) is the light counterpart: `strength = 20`, `item = Base.DeadSquirrel`, `minSize 10/maxSize 60`, same night window, zones as rabbit, `traps: Box 25, Cage 40, …`.

---

## 6. Trapping Recipes

`recipes_trapping.txt` — 5 recipes (verified):

| Recipe | Timed action | Time | Requirements | Output |
|--------|--------------|:----:|--------------|--------|
| `MakeWoodenBoxTrap` | `SawLogs` | 120 | `AutoLearnAny = Trapping:4`; saw + hammer + 3 Plank + 5 Nails | `Base.TrapCrate` |
| `MakeStickTrap` | `SharpenStakeWood` | 120 | `AutoLearnAny = Trapping:2`; 4 WoodenStick2 + Twine | `Base.TrapStick` |
| `MakeSnareTrap` | `SharpenStakeWood` | 130 | `SkillRequired = Trapping:1`, `AutoLearnAny = Trapping:6`; saw + Plank + 2 Twine | `Base.TrapSnare` |
| `MakeTrapBox` | `SawLogs` | 150 | `SkillRequired = Woodwork:1;Trapping:2`, `AutoLearnAny = Trapping:8`; saw + hammer + 4 Plank + 7 Nails | `Base.TrapBox` |
| `MakeCageTrap` | `Making` | 180 | `SkillRequired = Trapping:3`, `AutoLearnAny = Trapping:5`; 5 Wire + pliers | `Base.TrapCage` |

Key fields:

- **`SkillRequired = Trapping:1`** — hard skill requirement (note: this differs from the `ResearchSkillLevel` field used in other recipe files).
- **`AutoLearnAny = Trapping:N`** — recipe auto-learns at the given Trapping level.
- **`Tags = InHandCraft;Trapper`** — the `Trapper` tag groups trap recipes in the crafting UI.
- Example:

```txt
craftRecipe MakeSnareTrap
{
    timedAction = SharpenStakeWood,
    time = 130,
    NeedToBeLearn = true,
    SkillRequired = Trapping:1,
    Tags = InHandCraft,
    category = Miscellaneous,
    AutoLearnAny = Trapping:6,
    xpAward = Woodwork:5,
    inputs
    {
        item 1 tags[base:saw;base:smallsaw;base:crudesaw] mode:keep flags[MayDegradeLight;Prop1],
        item 1 [Base.Plank] flags[Prop2],
        item 2 [Base.Twine],
    }
    outputs
    {
        item 1 Base.TrapSnare,
    }
}
```

`recipes_traps.txt` (17 recipes) instead covers electrical booby traps: `MakeRemoteControllerV1/V2/V3`, `MakeRemoteTrigger`, `MakeTimer`, etc. (`SkillRequired = Electricity:N`, `AutoLearnAny = Electricity:N`, `category = Electrical`).

---

## 7. Trap System Lua

### `MOTrap.lua` (`media/lua/server/Map/MapObjects/MOTrap.lua`)

- Server-only (`if isClient() then return end`).
- `CreateTrap(sq, spriteName)` spawns the trap as an **`IsoThumpable`** (`IsoThumpable.new(cell, sq, spriteName, north, modData)`).
- Snare traps (`constructedobjects_01_16`) get `setCanPassThrough(true)` / `setBlockAllTheSquare(false)` — walk-through physics.
- Sprite ↔ definition mapping via `getTrapDefForSprite` (checks `sprite`, `closedSprite`, `northSprite`, `northClosedSprite`).

### `STrapSystem.lua` + shared `TrapSystem.lua`

- Server system tracks placed traps, bait, and the catch/break cycle (per-animal `strength` hour counters, zone/trap/bait chance resolution).
- Shared `TrapSystem` (`media/lua/shared/Traps/`) + `TimedActions/` handle the placement/baiting timed actions.

### Supporting files

- `TrapRecipeCode.lua` — recipe callbacks that create the world trap object.
- `trappingCommands.lua` — server commands.
- `STrapGlobalObject.lua`, `BuildingObjects/`, `ISUI/` — global object sync and UI.

---

## 8. Modding Opportunities

1. **New trap type.** Insert into `Traps`: `{ type="Base.MyTrap", sprite, closedSprite, trapStrength, destroyItem }` + craft it via a `recipes_trapping.txt`-style recipe (`Tags = ...;Trapper`, `AutoLearnAny = Trapping:N`).
2. **New animal.** Add to `TrapAnimals`: set `item` (dead body), `strength`, active hours, `zone`/`traps`/`baits` chance tables, and (optionally) `canBeAlive` + `aliveAnimals`/`aliveBreed` to link with the Animals system.
3. **Bait tuning.** Extend `baits` per animal — or add bait via the item tag system so any food can lure specific species.
4. **Zone balance.** Adjust per-zone chances (`TownZone` 2 → `DeepForest` 15) to rebalance urban vs. forest trapping.
5. **Electrical traps.** The `recipes_traps.txt` pattern (`RemoteController`, `RemoteTrigger`, `Electricity` skill gates) is the template for new remote/booby-trap content.
6. **Trap visuals.** New sprites + `MOTrap` `getTrapDefForSprite` mapping give custom traps their own world appearance and physics (walk-through for snares).

---
