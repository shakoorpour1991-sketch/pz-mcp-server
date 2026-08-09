---
title: "Project Zomboid Build 42 Loot Distributions Research"
build: "42.20"
tags: [pz, modding, build42, loot, distributions]
---

# Project Zomboid Build 42 — Loot Distributions Research

> **Scope:** Build 42.20 (stable). The container loot system: room/container mapping (`Distributions.lua`), weighted loot tables (`ProceduralDistributions.lua`), clutter/junk tables (`Distribution_*.lua`), and vehicle loot (`VehicleDistributions.lua`). All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [The Three-Tier Model](#3-the-three-tier-model)
4. [Distributions.lua — Rooms & Containers](#4-distributionslua--rooms--containers)
5. [ProceduralDistributions — Weighted Tables](#5-proceduraldistributions--weighted-tables)
6. [Clutter & Junk Tables](#6-clutter--junk-tables)
7. [Vehicle Distributions](#7-vehicle-distributions)
8. [Modding Opportunities](#8-modding-opportunities)

---

## 1. Overview

- Loot is configured **entirely in Lua** under `media/lua/server/Items/` — no script files involved.
- The system is three-tiered:
  1. **`Distributions.lua`** maps a *room type* + *container type* to one or more procedural lists (`procList`).
  2. **`ProceduralDistributions.lua`** defines the actual weighted item tables (`rolls` + `items = { "ItemId", weight, … }`).
  3. **`Distribution_*.lua`** junk files define reusable **ClutterTables** used for junk rolls and vehicle clutter.
- **`VehicleDistributions.lua`** (11,888 lines) covers vehicle part loot (glove box, trunk, seats).
- All tables are Lua tables — mods can extend/replace them in-place at server start with `table.insert`/overrides.

---

## 2. Core Files

| File | Lines | Purpose |
|------|:-----:|---------|
| `media/lua/server/Items/Distributions.lua` | 22,600 | Room → container → `procList` mapping (the master table) |
| `media/lua/server/Items/ProceduralDistributions.lua` | — | Weighted item tables (`ProceduralDistributions.list`) |
| `media/lua/server/Items/Distribution_BagsAndContainers.lua` | — | Bag/container junk + distribution extensions |
| `media/lua/server/Items/Distribution_BinJunk.lua` | — | `ClutterTables.BinJunk` |
| `media/lua/server/Items/Distribution_ClosetJunk.lua` | — | `ClutterTables.ClosetJunk` |
| `media/lua/server/Items/Distribution_CounterJunk.lua` | — | `ClutterTables.CounterItems`/`CounterJunk` |
| `media/lua/server/Items/Distribution_DeskJunk.lua` | — | Desk junk |
| `media/lua/server/Items/Distribution_ShelfJunk.lua` | — | Shelf junk |
| `media/lua/server/Items/Distribution_SideTableJunk.lua` | — | Side-table junk |
| `media/lua/server/Items/SuburbsDistributions.lua` | — | Residential suburbs distributions |
| `media/lua/server/Vehicles/VehicleDistributions.lua` | 11,888 | Vehicle part loot |
| `media/lua/server/Items/ItemPicker.lua`, `KeyNamer.lua`, `AcceptItemFunction.lua`, `LootLog.lua` | — | Loot runtime helpers |

---

## 3. The Three-Tier Model

```
room type + container type           Distributions.lua (distributionTable)
        └─> procList [{name=..., min, max, forceForTiles, weightChance}]
                └─> ProceduralDistributions.list["<Name>"]
                        ├─ items  { "ItemId", weight, ... }    (weighted rolls)
                        └─ junk   { rolls, items = <ClutterTable> }
```

- `Distributions.lua` decides *which* loot table a container gets (per room + container type, with tile overrides).
- `ProceduralDistributions` decides *what* items spawn and how often (weighted, with separate junk rolls).
- ClutterTables are shared weighted item lists reused across many distributions and vehicles.

---

## 4. Distributions.lua — Rooms & Containers

Verified structure (top of file):

```lua
local distributionTable = {
	-- Room List (A-Z)
	aesthetic = {
		counter = {
			procedural = true,
			procList = {
				{name="StoreCounterCleaning", min=0, max=99, forceForTiles="location_shop_accessories_01_0;..."},
				{name="SalonCounter", min=0, max=99, forceForTiles="fixtures_counters_01_32;..."},
				{name="SalonShelfHaircare", min=0, max=99, weightChance=100},
			}
		},
		metal_shelves = { procedural = true, procList = { {name="SalonShelfTowels", min=0, max=99} } },
		shelves = { ... },
		shelvesmag = { ... },
		sidetable = { ... },
		wardrobe = { ... },
		other = { procedural = true, procList = { {name="SalonShelfTowels", min=0, max=99, weightChance=20}, ... } },
	},
	...
}
```

Key fields:

| Field | Meaning |
|-------|---------|
| Room key | e.g. `aesthetic` — a room-type group |
| Container key | `counter`, `metal_shelves`, `shelves`, `shelvesmag`, `sidetable`, `wardrobe`, `other`, … |
| `procedural = true` | Use procedural (weighted) generation |
| `procList` | Ordered candidates; `{name=<ProceduralDistributions key>, min, max, forceForTiles, weightChance}` |
| `forceForTiles` | `;`-separated tile ids that pin this proc list to specific tiles |
| `weightChance` | Relative chance among competing proc entries |

---

## 5. ProceduralDistributions — Weighted Tables

`ProceduralDistributions.list` (verified):

```lua
ProceduralDistributions = {};
ProceduralDistributions.list = {
	AmbulanceDriverOutfit = {
		rolls = 3,
		items = {
			-- Clothing
			"Jacket_NavyBlue", 10,
			"Shirt_FormalWhite", 6,
			...
			-- Literature
			"BookFirstAid1", 6, "BookFirstAid2", 4, "BookFirstAid3", 2, "BookFirstAid4", 1, "BookFirstAid5", 0.5,
			-- Bags/Containers
			"Bag_MedicalBag", 0.5, "FirstAidKit", 2,
		},
		junk = {
			rolls = 1,
			items = { "HandTorch", 4, "Notepad", 10, "Pencil", 10, ... }
		}
	},
	...
}
```

Table anatomy:

| Field | Meaning |
|-------|---------|
| `rolls` | Number of times to roll an item |
| `items` | Flat list `"ItemId", weight` (weight = relative odds, decimals allowed) |
| `junk` | Secondary junk roll (own `rolls` + `items`) |

Count: `ProceduralDistributions.lua` contains **2,784 `items =`/roll lines**, i.e. thousands of weighted entries across the profession/room loot tables (medical, kitchen, tool, clothing, literature, etc.).

---

## 6. Clutter & Junk Tables

The `Distribution_*Junk.lua` files define `ClutterTables` (verified, `Distribution_CounterJunk.lua`):

```lua
ClutterTables = ClutterTables or {}

ClutterTables.CounterItems = {
	"BluePen", 8, "BusinessCard", 1, "Calculator", 4, "Clipboard", 8,
	"Doodle", 1, "Eraser", 8, "Glue", 2, "GreenPen", 4,
	"HolePuncher", 4, "MagazineCrossword", 2, "MagazineWordsearch", 2,
	"Magazine_Popular", 2, "MarkerBlack", 1, ..., "TissueBox", 0.5,
	"TVMagazine", 4, "Twine", 1,
}

ClutterTables.CounterJunk = {
	rolls = 1,
	ignoreZombieDensity = true,
	items = ClutterTables.CounterItems,
}
```

- Junk tables add low-value filler (`rolls = 1`, `ignoreZombieDensity`).
- Available tables (verified files): `BinJunk`, `ClosetJunk`, `CounterJunk` (+`CounterItems`), `DeskJunk`, `ShelfJunk`, `SideTableJunk`, `BagsAndContainers`.

---

## 7. Vehicle Distributions

`media/lua/server/Vehicles/VehicleDistributions.lua` (11,888 lines) — per-vehicle-part loot (verified):

```lua
VehicleDistributions = VehicleDistributions or {}

VehicleDistributions.GloveBox = {
	rolls = 1,
	items = {},
	junk = ClutterTables.GloveBoxJunk,
}

VehicleDistributions.TrunkStandard = {
	rolls = 1,
	items = { "NormalTire1", 0.5, },
	junk = ClutterTables.TrunkJunk,
}

VehicleDistributions.TrunkHeavy = {
	rolls = 1,
	items = { "Cooler_Beer", 0.1, "NormalTire2", 0.5, },
	junk = ClutterTables.TrunkJunk,
}

VehicleDistributions.TrunkSports = {
	rolls = 1,
	items = { "Cooler_Beer", 0.1, "HottieZ", 4, "NormalTire3", 0.5, "TrophyBronze", 1, "TrophyGold", 0.05, "TrophySilver", 0.1, },
	junk = ClutterTables.TrunkJunk,
}
```

- Vehicle part tables follow the same `rolls`/`items`/`junk` anatomy as ProceduralDistributions.
- `junk` references shared `ClutterTables` (e.g. `GloveBoxJunk`, `TrunkJunk`).
- Table keys = vehicle parts (`GloveBox`, `TrunkStandard`, `TrunkHeavy`, `TrunkSports`, `DriverSeat`, …); one table (`EmptySeat`) carries a "Pretty sure this is deprecated but need to check." comment in source.

---

## 8. Modding Opportunities

1. **Add loot to existing tables.** `table.insert(ProceduralDistributions.list["KitchenFood"].items, "MyItem", 4)` — extend weighted tables at server start (the standard mod pattern).
2. **New proc tables.** Define your own entry in `ProceduralDistributions.list`, then reference it from a `procList` in `Distributions.lua` (or from `forceForTiles` to pin it to specific tiles).
3. **Room/container mapping.** Add a new room key or container key to `distributionTable` to make your custom containers spawn loot.
4. **Custom junk.** Create `ClutterTables.MyJunk` and reference it from any distribution's `junk` field (including vehicle tables).
5. **Vehicle loot.** Add `VehicleDistributions.MyPart = { rolls, items, junk }` for modded vehicle parts.
6. **Overrides & tuning.** Because everything is plain Lua tables, server mods can adjust spawn rates by overriding `rolls`/weights, and can even gate loot behind conditions (the `LootLog.lua`/`ItemPicker.lua` helpers support diagnostics).

---
