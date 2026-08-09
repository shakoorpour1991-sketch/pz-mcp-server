---
title: "Project Zomboid Build 42 Map Objects (Zones) Research"
build: "42.20"
tags: [pz, modding, build42, map, zones]
---

# Project Zomboid Build 42 — Map Objects (Zones) Research

> **Scope:** Build 42.20 (stable). This document covers the map-zone data format (`objects.lua`), every zone type that ships in the vanilla files, the runtime loader (`metazoneHandler.lua`), per-town file layout, and how mods add zones. NPC/story zones (ZoneStory *content*, quest scripts, story mode spawns) are covered elsewhere — this doc focuses on the map/zone mechanics themselves. Every claim was verified against the game files on disk. All paths are relative to the Project Zomboid install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [The Zone Table Format](#3-the-zone-table-format)
4. [Zone Type Inventory](#4-zone-type-inventory)
5. [The Six Gameplay Zone Types](#5-the-six-gameplay-zone-types)
6. [Per-Town Examples](#6-per-town-examples)
7. [How Zones Are Loaded](#7-how-zones-are-loaded)
8. [Pitfalls](#8-pitfalls)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

The world map is split into **cells** (256×256) and **chunks** (8×8) — see `media/maps/Muldraugh, KY/map.info`: `Chunk size is 8x8, Cell size is 256x256`. Each map folder on disk may declare **zones** — rectangular gameplay areas (spawn points, loot tables, zombie population profiles, mannequins, room tones, water) — in a Lua file named `objects.lua`.

Key architectural facts (all verified on disk):

- **`objects.lua` is an optional per-map file.** Only **3** ship with B42.20: `Muldraugh, KY/objects.lua` (the full-world zone set, ~14,100+ lines), `challengemaps/Kingsmouth/objects.lua` (893 lines), and `challengemaps/Studio/objects.lua` (379 lines). The other ten town folders contain **no `objects.lua`**.
- **`objects.lua` is a Lua data file, not a script.** It assigns a global table named `objects` (a list of zone records); the loader re-runs the file and iterates that table.
- **Towns without `objects.lua` still have zones** — their placement data is baked into the cell archives (`chunkdata_*.bin` / `world_*.lotpack`). The Lua loader only sees zones from files that exist.
- **The world's cell data lives in the "Muldraugh, KY" folder.** On this install that folder holds ~10,000 `chunkdata_*_*.bin` / `world_*_*.lotpack` files spanning the whole map; every other town folder contains only `map.info`, `spawnpoints.lua`, and `thumb.png`.
- **Zones are rectangles with a name, type, position and size** — there is no polygon format in the shipped files (the loader supports a `geometry` key for arbitrary shapes, but no vanilla file uses it).
- **`Muldraugh, KY/objects.lua` contains 21 zone types** — a long tail of environmental/navigation types (ParkingStall, Vegitation, Nav, Forest…) plus the gameplay types covered in §5.
- **Zone loading is a server-side, event-driven process** (`media/lua/server/metazones/metazoneHandler.lua`) hooked to `Events.OnLoadMapZones`.

## 2. Core Files

### Map folders (`media/maps/`)

| Entry | Contents (verified) |
|-------|---------------------|
| `Brandenburg, KY/`, `Echo Creek, KY/`, `Ekron, KY/`, `Fallas Lake, KY/`, `Irvington, KY/`, `March Ridge, KY/`, `Riverside, KY/`, `Rosewood, KY/`, `Valley Station, KY/`, `West Point, KY/` | `map.info`, `spawnpoints.lua`, `thumb.png` only |
| `Muldraugh, KY/` | `objects.lua`, `basements.lua`, `spawnpoints.lua`, `map.info`, `WorldGenOverride.lua`, `worldmap.png/.xml/.xml.bin`, `worldmap-annotations.lua`, `worldmap-forest.xml`, plus the global `chunkdata_*.bin` and `world_*.lotpack` cell archives |
| `challengemaps/Kingsmouth/` | `objects.lua` (893 lines), plus cell data for the challenge map |
| `challengemaps/Studio/` | `objects.lua` (379 lines), plus cell data for the challenge map |

### `map.info` format (from `Muldraugh, KY/map.info`)

```
title=Muldraugh P.O.T
fixed2x=true
description=Chunk size is 8x8, Cell size is 256x256
zoomX=11181
zoomY=9725
zoomS=13.5
demoVideo=Muldraugh.bik
```

### Runtime loader

| File | Purpose |
|------|---------|
| `media/lua/server/metazones/metazoneHandler.lua` | Loads every map's `objects.lua`, routes each zone to a handler, hooks `Events.OnLoadMapZones` |
| `media/maps/<Town>/spawnpoints.lua` | Profession-keyed player spawn points (see §6) |

## 3. The Zone Table Format

`objects.lua` is a single global table assignment. File 1–2 and final lines of `Muldraugh, KY/objects.lua`:

```lua
objects = {
  { name = "", type = "Nav", x = 12592, y = 966, z = 0, width = 8, height = 234 },
  { name = "", type = "TownZone", x = 12541, y = 1090, z = 0, width = 32, height = 58 },
  ...
  { name = "", type = "WaterFlow", x = 8701, y = 15600, z = 0, width = 299, height = 300 }
}
```

Every record has the same core fields; `properties` is optional:

- `name` — a free-form string; **frequently empty** (`""`). When non-empty it is the *zone's identity* for the relevant type (population profile, loot distribution, story name). Case is significant.
- `type` — the zone type string (case-sensitive, §4).
- `x, y, z` — origin position. `z` is the floor index (0 = ground). Challenge maps use their own coordinate space (Kingsmouth zones sit around `x≈30259, y≈30259, z=5`).
- `width, height` — size in tiles. Some types are point-like (`width = 1, height = 1`).
- `properties` — a nested table of type-specific key/values.

Records may span multiple lines when `properties` is present, e.g. a `Mannequin`:

```lua
  { name = "", type = "Mannequin", x = 13550, y = 1370, z = 0, width = 1, height = 1,
    properties = {
      Direction = "N",
      Script = "MannequinScarecrow01"
    }
  },
```

The loader (`metazoneHandler.doMapZones`) does `objects = {}` then `reloadLuaFile(file)` then iterates `ipairs(objects)`, so **the table must be assigned to the global `objects`** or nothing loads.

## 4. Zone Type Inventory

### Full inventory — `Muldraugh, KY/objects.lua` (counts per `type`)

| Type | Count | Notes |
|------|------:|-------|
| `ParkingStall` | 9,693 | Nav-time parking slots |
| `Vegitation` | 9,310 | Vegetation placement areas (skipped by the metazone handler) |
| `Nav` | 5,801 | Navigation areas |
| `TownZone` | 2,714 | Town boundaries (skipped by the metazone handler) |
| `Forest` | 2,482 | Forest zones (skipped by the metazone handler) |
| `ZombiesType` | 1,552 | Zombie population profile areas |
| `FarmLand` | 1,540 | Farmland (skipped by the metazone handler) |
| `DeepForest` | 1,105 | Deep forest (skipped by the metazone handler) |
| `WaterFlow` | 840 | River flow cells with direction/speed |
| `Basement` | 455 | Basement spawn/stair areas |
| `WorldGen` | 391 | World-gen placement zones |
| `Ranch` | 353 | Ranch areas |
| `SpawnPoint` | 332 | Player spawn points (profession-gated) |
| `ZoneStory` | 171 | Story-zone anchors (see §5) |
| `Farm` | 157 | Farm areas (skipped by the metazone handler) |
| `Mannequin` | 133 | Mannequin/scarecrow placements |
| `Animal` | 121 | Animal zones |
| `RoomTone` | 100 | Interior audio ambience zones |
| `WaterZone` | 49 | Water surface zones |
| `TrailerPark` | 48 | Trailer-park areas (skipped by the metazone handler) |
| `LootZone` | 23 | Loot-distribution areas |
| `""` (empty) | 19 | Records with no `type` (no-op) |

### Challenge maps reuse the same vocabulary

`challengemaps/Studio/objects.lua`: `Forest` 115, `ParkingStall` 80, `Vegitation` 71, `TownZone` 45, `ZombiesType` 38, `WaterZone` 11, `WaterFlow` 9, `TrailerPark` 7. No gameplay-only types beyond the vanilla set.

## 5. The Six Gameplay Zone Types

### 5.1 `ZombiesType` — population profiles (1,552 in Muldraugh)

`name` selects a population profile; the same profile name is reused across many areas, and profiles can tile (e.g. a `Rich` band along a street). Example:

```lua
  { name = "Swimmer", type = "ZombiesType", x = 6626, y = 5300, z = 0, width = 13, height = 17 },
```

Distinct names in Muldraugh (78): `Army, Athletic(s), Bank, Bar, Baseball, BaseballFan, Beach, Bowling, Boxing, Butcher, Cafe, CarRepair, church, Church, Coffeeshop/CoffeeShop/CoffeShop, ConstructionSite, cornmaze, CountryClub, Cowboy, Cultists, Dinner, Doctor, Factory, FancyHotel, FancyRestaurant, Farm, Farmer, FarmingStore, FireDept, Football, Fossoil, Gas2Go, Gigamart, HotelRich, Jays, LaserTag, McCoys, Mob, MusicFest, Nightclub, NursingHome, Office(s), Pharmacist, PileOCrepe, PizzaWhirled, Police, Pony, Prison, Restaurant, Rich, Rocker, School, Seahorse/SeaHorse(s), SecretBase, SecretLab, Shelter, shootingrange, Spa, Spiffo, StreetPoor, StreetRich, StreetSport(s), Stripclub, Survivalist, Swimmer, SwimmingPool, Tennis, Theatre, ThunderGas, TrailerPark, University, VariousFoodMarket, Wedding, Young`.

### 5.2 `LootZone` — loot distribution (23 in Muldraugh)

`name` selects the loot distribution. Muldraugh's only LootZone name is `Rich`:

```lua
  { name = "Rich", type = "LootZone", x = 6742, y = 5360, z = 0, width = 35, height = 40 },
  { name = "Rich", type = "LootZone", x = 2017, y = 5675, z = 0, width = 59, height = 25 },
```

### 5.3 `SpawnPoint` — player spawns (332 in Muldraugh)

`properties.Professions` gates who can spawn there. Values verified: `"all"`, `"electrician"`, `"mechanic"`, `"unemployed"`:

```lua
  { name = "", type = "SpawnPoint", x = 12714, y = 1640, z = 0, width = 1, height = 1, properties = { Professions = "all" } },
  { name = "", type = "SpawnPoint", x = 5831, y = 5270, z = 0, width = 1, height = 1, properties = { Professions = "unemployed" } },
```

### 5.4 `Mannequin` — placed mannequins (133 in Muldraugh)

`properties.Direction` (e.g. `"N"`) and `properties.Script` (the item script, e.g. `"MannequinScarecrow01"`):

```lua
  { name = "", type = "Mannequin", x = 13550, y = 1370, z = 0, width = 1, height = 1,
    properties = { Direction = "N", Script = "MannequinScarecrow01" } },
```

### 5.5 `RoomTone` — interior ambience (100 in Muldraugh)

`name` is the tone. Full value set in Muldraugh: `Barn, Church, Factory, Generic, Mall, Office, Warehouse`.

**Note:** in `metazoneHandler.lua` the `RoomTone` branch is **commented out** (`-- handleRoomTone(file, v)`), so on this build RoomTone zones are *not* actively processed by that loader (see §7).

### 5.6 `ZoneStory` — story anchors (171 in Muldraugh)

`name` identifies the story area (the story *content* itself is covered in the NPC/story research doc). Verified names: `FrankHemingway, KirstyCormick, NewsStory, MusicFest, MusicFestStage, SirTwiggy, nolans, Baseball, Beach, forest, Forest, Lake`.

## 6. Per-Town Examples

### Muldraugh, KY — the only full `objects.lua`

Coordinates are absolute world coords on `z=0`; the largest observed bounds are `width/height = 299×300` (Vegitation) and `y` up to ~15,653 (WaterFlow near the river). Zone records include all 21 types from §4, mixed together in one table.

### West Point, KY — `spawnpoints.lua` (no `objects.lua`)

Spawns are declared as a Lua function returning a **profession → spawn-list** map. Real format from `West Point, KY/spawnpoints.lua`:

```lua
function SpawnPoints()
    local poor_houses = {
        { posX = 11308, posY = 6671, posZ = 0 },
        { posX = 11218, posY = 6796, posZ = 0 },
    }
    ...
return {
    chef = mergeTable(poor_houses, medium_houses, rich_houses),
    constructionworker = poor_houses,
    doctor = mergeTable(medium_houses, rich_houses, doctor_houses),
    fireofficer = mergeTable(poor_houses, fire_station),
    policeofficer = mergeTable(poor_houses, medium_houses),
    unemployed = poor_houses,
    ...
}
end
```

Notes: keys are **`posX/posY/posZ`** (not `x/y/z`), and `mergeTable(...)` concatenates tier lists. Houses are grouped into tiers (`poor_houses`, `medium_houses`, `rich_houses`) plus special lists (`doctor_houses`, `fire_station`). Every other town folder uses this same layout.

### Kingsmouth (challenge) — `objects.lua` in its own coordinate space

`challengemaps/Kingsmouth/objects.lua` uses the same `objects = { ... }` format but with a distinct origin (zones around `x≈30259, y≈30259`, `z=5`):

```lua
objects = {
  { name = "", type = "Forest", x = 30259, y = 30259, z = 5, width = 56, height = 53 },
  ...
}
```

### Studio (challenge) — compact town map

379 lines, dominated by `Forest`/`ParkingStall`/`Vegitation`/`TownZone` + `ZombiesType` (38) — same mechanics as the main map.

## 7. How Zones Are Loaded

`media/lua/server/metazones/metazoneHandler.lua` is the loader. Flow of `doMapZones()` (verified, lines ~82–120+):

1. `local dirs = getLotDirectories()` — every map folder.
2. For each dir, builds `'media/maps/'..dirName..'/objects.lua'`; `if fileExists(file)` then:
   - `getWorld():removeZonesForLotDirectory(dirName)` — clear previous zones for that map (reload-safe).
   - `objects = {}` then `reloadLuaFile(file)` — re-execute the Lua file.
   - iterate `for k,v in ipairs(objects)` and route by `v.type`:
     - **Skipped entirely:** `Vegitation, DeepForest, Forest, TownZone, Farm, FarmLand, TrailerPark` (used by other systems).
     - `Animal` → `handleAnimalZone(file, v)`
     - `Basement` → `handleBasementSpawnLocation(dirName, v)`
     - `Mannequin` → `handleMannequinZone(file, v)`
     - `RoomTone` → **commented out** on this build
     - `SpawnOrigin` → `handleSpawnOrigin(file, v)`
     - `WaterFlow` → `handleWaterFlow(file, v)`
     - `WaterZone` → `handleWaterZone(file, v)`
     - `Region` / `BuildingName` → `getWorld():registerZone(name, type, x, y, z, width, height)`
     - `geometry ~= nil` → `getWorld():getMetaGrid():registerGeometryZone(name, type, z, geometry, points, properties)` (a `lineWidth` number is folded into `properties.LineWidth` before registration)
     - `WorldGen` → `getWorld():getMetaGrid():registerWorldGenZone(name, type, x, y, z, width, height, properties)`
     - **everything else** (incl. `ZombiesType`, `LootZone`, `SpawnPoint`, `ZoneStory`) → `getWorld():registerVehiclesZone(name, type, x, y, z, width, height, properties)`
3. `getWorld():checkVehiclesZones()` runs after zone processing.
4. The loader hooks `Events.OnLoadMapZones.Add(doMapZones)` and `Events.OnLoadMapZones.Add(doSpawnOrigins)`.

Zones are also looked up at runtime by name in client code, e.g. `DesignationZoneAnimal.getZoneByName(name)` in `media/lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI.lua` (checks for duplicate names when creating zones via the designation UI).

## 8. Pitfalls

- **Don't assume every town folder has an `objects.lua`** — only `Muldraugh, KY` and the two challenge maps ship one. Towns without it get no Lua-side zones from `metazoneHandler`; their data is baked into the `*.lotpack`/`chunkdata_*.bin` cell archives.
- **The global table must be named `objects`.** The loader resets `objects = {}` and re-runs the file; a differently-named table loads nothing.
- **`name = ""` is normal.** Anonymous zones are the default for `Nav`, `TownZone`, `Vegitation`, `SpawnPoint`, `Mannequin`, etc. Don't treat empty names as malformed data.
- **`type` is case-sensitive** (`Vegitation` — note the spelling — is the vanilla spelling; `WaterZone` vs `WaterFlow` are distinct types with distinct handlers and `properties`).
- **`properties` keys are per-type.** `Professions` (SpawnPoint), `Direction`/`Script` (Mannequin), `StairDirection`/`StairX`/`StairY` (Basement), `WaterDirection`/`WaterSpeed` (WaterFlow), `WaterShore`/`WaterGround` (WaterZone). A `properties` table only makes sense for the matching type.
- **Challenge maps use their own coordinate space** (Kingsmouth at ~30,000, `z=5`); don't compare those coordinates to main-map ones.
- **`RoomTone` zones are inert at runtime on this build** — the handler branch is commented out.
- **Several high-count types are ignored by the loader** (`Vegitation`, `Forest`, `DeepForest`, `TownZone`, `Farm`, `FarmLand`, `TrailerPark`, plus records with empty `type`) — they are consumed by other systems (nav, vegetation, world-gen), so "present in objects.lua" does not mean "handled by metazoneHandler".
- **`spawnpoints.lua` uses `posX/posY/posZ`**, while `objects.lua` uses `x/y/z` + `width/height` — two different coordinate conventions in the same map folder.
- **`map.info` sizes matter for coordinate math** — chunk 8×8, cell 256×256 (per `Muldraugh, KY/map.info`).

## 9. Modding Opportunities

All hooks below are verified extension points in B42.20.

1. **Ship your own `objects.lua`.** Put a `media/maps/<YourMap>/objects.lua` in your mod with the `objects = { ... }` table format — `metazoneHandler` discovers it automatically via `getLotDirectories()` on `OnLoadMapZones` (reload-safe thanks to `removeZonesForLotDirectory`).
2. **Tune zombie population** — add `ZombiesType` zones reusing vanilla profile names (`Rich`, `Factory`, `Swimmer`, …), or new names, over the areas you control.
3. **Define loot districts** — `LootZone` + `name` (e.g. `Rich`) marks areas for the loot-distribution system; pair with the recipes/loot content systems in the other docs.
4. **Profession-gated spawns** — `SpawnPoint` records with `properties.Professions = "all"` (or a profession string) plus `spawnpoints.lua`'s profession→`{posX,posY,posZ}` map.
5. **Place mannequins** — `Mannequin` with `Direction` and a `Script` such as `MannequinScarecrow01`.
6. **Rivers and water** — `WaterFlow` cells with `WaterDirection` (degrees, e.g. `90`, `315`) and `WaterSpeed` (e.g. `0.7`), `WaterZone` with `WaterShore`/`WaterGround`.
7. **Basements** — `Basement` with `StairDirection`/`StairX`/`StairY` so `handleBasementSpawnLocation` can place the stair connection.
8. **Runtime registration** — from Lua, register zones directly with the world API used by the handler: `getWorld():registerZone(...)`, `getWorld():registerVehiclesZone(...)`, `getWorld():getMetaGrid():registerGeometryZone(...)` / `registerWorldGenZone(...)` — including polygonal zones via the `geometry`/`points` keys.
9. **Use `WorldGenOverride.lua`** (present in `Muldraugh, KY/`) alongside `WorldGen` zones for generated-world placement overrides.

---
