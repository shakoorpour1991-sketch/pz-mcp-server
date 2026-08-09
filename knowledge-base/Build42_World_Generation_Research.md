---
title: "PZ Build 42 World Generation Research"
build: "42.18"
tags: [pz, modding, build42, worldgen]
---

# Project Zomboid Build 42 — World Generation Research

## Table of Contents

1. [World/Map Generators](#1-worldmap-generators)
2. [Procedural Systems](#2-procedural-systems)
3. [Item/Loot Systems](#3-itemloot-systems)
4. [Vehicles & Zombies](#4-vehicles--zombies)
5. [Modding Hooks & Events](#5-modding-hooks--events)
6. [System Overview Diagrams](#6-system-overview-diagrams)
7. [Modding Potential Matrix](#7-modding-potential-matrix)
8. [Recommended Generator Mod Ideas](#8-recommended-generator-mod-ideas)

---

## 1. World/Map Generators

### 1.1 Terrain Generation (WorldGen System)

**Base File**: `media/lua/server/WorldGen/WorldGen.lua`

The WorldGen system is a **data-driven terrain and feature generator** that populates the world map with ground types, vegetation, trees, bushes, ores, and roads. It is organized as a global Lua table:

```lua
worldgen = {
    biomes = {},
    features = {},
    selection = {},
    prefabs = {},
    veins = {},
    roads = {},
    attachments = {},
    similar = {},
    priorities = {}
}
```

#### Components:

| Component | Description | Files |
|-----------|-------------|-------|
| **Biomes** | Named biome definitions (oak_forest, pine_forest, etc.) with feature probabilities and parameter ranges | `biomes/worldgen/*.lua` (16 biomes) |
| **Biome Map** | Pixel-value-to-biome mapping for the world map image | `biomes/map/*.lua` (19 map overlay files) |
| **Features** | Ground, plant, bush, tree, and ore feature definitions | `features/*.lua` (5 categories, ~50+ files) |
| **Selection** | Parameter range tables for landscape, plant, bush, temperature, hygrometry, ore levels | `Selection.lua` |
| **Veins** | Ore vein generation (iron, copper) with arm-based fractal spreading | `Veins.lua` |
| **Roads** | Road generation definitions (small_road only in vanilla) | `Roads.lua` |
| **Prefabs** | Schematic-based road tile patterns | `prefabs/*.lua` (2 files) |
| **Attachments/Priorities** | Rendering priority for ground tiles | `attachments/Priorities.lua` |

#### Biome Definition Example (oak_forest):

```lua
local oak_forest = {
    features = {
        GROUND = { { f = worldgen.features.GROUND.medium_grass, p = 1.0 } },
        PLANT = {
            { f = worldgen.features.PLANT.grass_medium, p = 0.3 },
            { f = worldgen.features.PLANT.grass_high, p = 0.3 },
            ...
        },
        TREE = {
            { f = worldgen.features.TREE.maple_jumbo, p = 0.10625 },
            ...
        }
    },
    params = {
        landscape = { "FOREST" },
        temperature = { "HOT" },
        hygrometry = { "DRY", "RAIN" },
        zombies = 0.001,
        generate = false
    }
}
```

Key parameters: `zombies` (spawn density multiplier for this biome), `generate` (whether this biome auto-generates new features), `parent` supports inheritance.

#### Biome Map Config:

**File**: `media/lua/server/metazones/BiomeMapConfig.lua`

Maps world map pixel values (0-255) to named biomes and zones:

```lua
biome_map_config = {
    { pixel = 0, zone = "Water" },
    { pixel = 96, biome = "$random", zone = "DeepForest" },
    { pixel = 115, biome = "townhouse", zone = "TownZone" },
    { pixel = 128, biome = "farmmix_forest", zone = "Farm" },
    ...
}
```

The `$random` biome keyword selects randomly from available biomes for that zone type.

#### Feature Categories:

| Category | Directory | Sub-types |
|----------|-----------|-----------|
| GROUND | `features/ground/` | water, sand, clay, dirt, dirt_grass, light_grass, medium_grass, dark_grass, burnt |
| PLANT | `features/plant/` | grass_low, grass_medium, grass_high, fern, flower_overlay, floor_leaves, generic_plant, boulderslow_prim, bush_dry |
| BUSH | `features/bush/` | bush_clean, bush_dry, bush_fat, bush_regular |
| TREE | `features/tree/` | 13 tree species × 3 sizes (normal, jumbo, sapling) + boulder variants + undergrowth + stumps |
| ORE | `features/ore/` | iron_ore, copper_ore, boulders, flint, limestone |

#### Prefab System:

Roads use a schematic-based prefab system:
```lua
local normal_road_WE_00 = {
    dimensions = { 1, 8 },
    zombies = 0.01,
    tiles = { "blends_street_01_86", ... },
    schematic = {
        Floor = { "1", "1", ... },
        FloorOverlay = { "0", "0", "3", "2", "0", ... }
    }
}
```

### 1.2 Map Zones (Metazone System)

**File**: `media/lua/server/metazones/metazoneHandler.lua`

Loaded at map initialization (`Events.OnLoadedMapZones`). Each map directory (`media/maps/<town>, KY/`) has an `objects.lua` and `regions.lua` defining zone types:

| Zone Type | Handler | Purpose |
|-----------|---------|---------|
| `Animal` | `handleAnimalZone` | Animal spawning zones |
| `Basement` | `handleBasementSpawnLocation` | Basement entry points |
| `Mannequin` | `handleMannequinZone` | Mannequin clothing display zones |
| `RoomTone` | `handleRoomTone` | Ambient sound zones |
| `SpawnOrigin` | `handleSpawnOrigin` | Player spawn points |
| `WaterFlow` | `handleWaterFlow` | River flow direction/speed |
| `WaterZone` | `handleWaterZone` | Water body zones |
| `Region`/`BuildingName` | `registerZone` | Named regions for loot distribution |
| `WorldGen` | `registerWorldGenZone` | Override terrain generation for specific areas |
| *(Vehicles)* | `registerVehiclesZone` | Vehicle spawn zones (tried first for all default zones) |

**Confirmed vanilla**: Map zones are loaded from `.lotheader` files and Lua definitions per town. Vehicle zones are checked first, then fall back to generic zones.

### 1.3 Building/Room Generation

**Directory**: `media/lua/server/BuildingRooms/`

The building/room generation system is lightly exposed in Lua:
- `ISBuildingRoomsEditor_ToolAddBuilding.lua` — Building editor tool
- `ISBuildingRoomsEditor_ToolAddRoom.lua` — Room editor tool  
- `ISBuildingRoomsEditor_ToolAddRect.lua` — Rectangle placement
- `ISBuildingRoomsEditor_ToolRemoveRect.lua` — Rectangle removal

**Important**: Building and room generation in Build 42 is **primarily Java-based**. The actual randomized building placement, room generation, window/door placement, and interior design happen in the Java game engine (`RandomizedWorldBase` class, accessed via `getWorld():getRandomizedWorldBase()`). Lua serves as a data configuration layer.

### 1.4 Random Building Interiors (StoryClutter)

**Directory**: `media/lua/server/RandomizedWorldContent/StoryClutter/`

**Files**:
- `StoryClutter_Definitions.lua` — 1540 lines, defines 50+ clutter tables
- `StoryClutter_Initialization.lua` — Populates Java-side arrays via `StoryTables.initClutterArray()`
- `StoryTable_Initialization.lua` — Utility functions for array setup

This is the **primary Lua modding hook for procedural interior generation**. It uses `getWorld():getRandomizedWorldBase()` Java API to populate clutter arrays that the randomized building system reads when generating interiors.

**Example clutter tables** (50+ defined):
- `BarnClutter` — Farm tools, animal supplies
- `BathroomSinkClutter` — Toiletries, cosmetics, medicine
- `BBQClutter` — Picnic/BBQ items
- `BeachPartyClutter` — Beach event items  
- `BedClutter` — Bedroom clutter
- `CafeClutter` — Cafe tables
- `CarpentryToolClutter` — Workshop tools
- `DeadEndClutter` — Alleyway trash
- `DormClutter` — Student dorm items
- `FootballNightDrinks` / `FootballNightSnacks` — Sports event food
- `GarageStorageClutter` — Garage junk
- `GigamartClutter` — Convenience store shelves
- `GroceryClutter` — Grocery items
- `HairSalonClutter` — Salon supplies
- `HenDoDrinks` / `HenDoSnacks` — Party food
- `HousePartyClutter` — House party items
- `JudgeClutter` — Office items
- `KidClutter` — Children's toys
- `KitchenCounterClutter` — Kitchen prep items
- `LaundryRoomClutter` — Laundry supplies
- `LivingroomClutter` — Living room decor
- `MedicalClutter` — Medical items
- `MurderSceneClutter` — Crime scene items
- `OfficePaperworkClutter` / `OfficePenClutter` — Office supplies
- `OvenFoodClutter` — Food in ovens
- `PokerNightClutter` — Poker/gambling items
- `RichJerkClutter` — Rich household items
- `SadCampsiteClutter` — Abandoned campsite
- `SurvivalistCampsiteClutter` — Survivalist camp
- `UtilityToolClutter` — Tool clutter
- `VanCampClutter` — Van camper interior
- `WoodcraftClutter` — Woodworking items

**Initialization hook**: `Events.OnLoadedMapZones.Add(StoryClutter.Init())`

---

## 2. Procedural Systems

### 2.1 Environmental/Destruction Generation (WorldFiller)

**File**: `media/lua/server/Items/WorldFiller.lua` (35,850 lines)

A massive auto-generated tile overlay map that maps furniture/container sprites to random junk/debris overlay sprites. This is what creates the "lived-in" look on pre-placed furniture.

**Structure**:
```lua
local overlayMap = {}
overlayMap.VERSION = 1
overlayMap["furniture_shelving_01_0"] = {
    { name = "other", tiles = {"books&misc_01_0", "books&misc_01_1"} },
    { name = "other", tiles = {"books&misc_02_0", "books&misc_02_1"} }
}
```

Also related overlay systems:
| File | Lines | Purpose |
|------|-------|---------|
| `TileOverlays.lua` | 55,752 | General sprite-to-overlay mapping |
| `FloorStreetOverlays.lua` | 19,617 | Street random debris |
| `WallsBrickOverlays.lua` | 35,850 | Brick wall damage overlays |
| `FloorWoodOverlays.lua` | 5,529 | Wood floor variation/damage |
| `FloorTileOverlays.lua` | 13,257 | Tile floor variation |
| `CounterOverlays.lua` | 5,449 | Counter surface overlays |
| `FurnitureOfficeOverlays.lua` | 2,702 | Office furniture overlays |
| `ApplianceOverlays.lua` | 4,992 | Appliance damage overlays |
| `FixturesOverlays.lua` | 2,630 | Fixture overlays |
| `SeatingOverlays.lua` | 9,807 | Chair/seat overlays |
| `StorageOverlays.lua` | 5,798 | Storage container overlays |
| `TileOverlaysSmooth.lua` | 2,668 | Smooth tile damage overlays |
| `BentFences.lua` | 93,087 | Bent/damaged fence overlays (extensive!) |
| `BrokenFences.lua` | 10,193 | Broken fence sprite definitions |

### 2.2 Story/Environment Generation (Placeholder)

The `$random` biome keyword and the `RandomizedWorldBase` Java class suggest there is a system for generating randomized environments (abandoned buildings, etc.) but the **actual generation logic is in Java**, not Lua.

**Lua hooks into this system**:
- StoryClutter data tables (item lists for each room type)
- `MapObjects.OnNewWithSprite()` — Converts specific sprites to functional objects on world load

### 2.3 Burnt/Smashed Vehicle Generation

**Files**: `media/scripts/generated/vehicles/burntAndSmashedVehicles/*.txt`

Build 42 has dedicated burnt and smashed vehicle variants:
- `burntvehicles.txt` — Burnt vehicle script models
- `vehicle_carmodern_smashed.txt` — Smashed modern car
- `vehicle_carluxury_smashed.txt` — Smashed luxury car
- `vehicle_carnormallight_smashed.txt` — Smashed light normal car

These are **entity script definitions**, not procedural generation code. The generation logic (which vehicles appear burnt/smashed and where) is handled by the **map zones and vehicle spawning Java code**.

---

## 3. Item/Loot Systems

### 3.1 Distributions System (Room-Based Loot)

**Files** (in `media/lua/server/Items/`):

| File | Lines | Purpose |
|------|-------|---------|
| `Distributions.lua` | 23,595 | Master room-based loot distribution table |
| `ProceduralDistributions.lua` | 52,723 | Item spawn tables for containers/zombies |
| `SuburbsDistributions.lua` | 7,909 | Room definitions linked to distribution tables |
| `Distribution_BagsAndContainers.lua` | 3,619 | Backpack/container pre-packed loot |
| `Distribution_BinJunk.lua` | 29,678 | Bin/trash junk items |
| `Distribution_ClosetJunk.lua` | 20,922 | Closet junk items (862 lines of weighted items) |
| `Distribution_CounterJunk.lua` | 859 | Counter junk |
| `Distribution_DeskJunk.lua` | 2,279 | Desk junk |
| `Distribution_ShelfJunk.lua` | 701 | Shelf junk |
| `Distribution_SideTableJunk.lua` | 958 | Side table junk |

#### Distributions.lua Structure:

Each room type has container types with either `procedural` (pulls from ProceduralDistributions) or inline `items`:

```lua
Distributions = Distributions or {}
local distributionTable = {
    aesthetic = {
        counter = {
            procedural = true,
            procList = {
                {name="StoreCounterCleaning", min=0, max=99, forceForTiles="..."},
                {name="SalonCounter", min=0, max=99, forceForTiles="..."},
            }
        },
        metal_shelves = {
            procedural = true,
            procList = {
                {name="SalonShelfTowels", min=0, max=99},
            }
        },
    },
    all = {
        bin = { rolls=4, ignoreZombieDensity=true, isTrash=true, items={...} },
        ...
    }
}
```

**Key features**:
- `procedural = true` — Uses ProceduralDistributions named tables
- `procList` — Array of procedural table references
- `forceForTiles` / `forceForZones` — Override selection for specific sprites or zones
- `ignoreZombieDensity = true` — Spawns loot regardless of zombie population
- `isTrash = true` — Marked as trash (lower condition items)

#### ProceduralDistributions.lua Structure:

Named tables for container filler items:
```lua
ProceduralDistributions.list = {
    AmbulanceDriverOutfit = {
        rolls = 3,
        items = {
            "Jacket_NavyBlue", 10,
            "Shirt_FormalWhite", 6,
            ...
        },
        junk = { rolls = 1, items = { ... } }
    },
    ...
}
```

The `ignoreZombieDensity = true` flag appears 10+ times across the file, showing this is a loot-during-world-gen feature.

### 3.2 Entity/CraftRecipe System

**Entity script location**: `media/scripts/generated/entities/` and `media/scripts/entities/`

Build 42 uses a new **entity-based crafting system** (separate from the old recipe system). Each buildable object is an entity with components:

**Components**:
- `UiConfig` — UI display (xuiSkin reference, icon, display name)
- `SpriteConfig` — Visual configuration (sprites per face, thumpable flag, callbacks)
- `CraftRecipe` — Build recipe (inputs, tools, time, skills, category)

**Example (from barricade research)**:
```
module Base {
    entity BarricadePlanks {
        component UiConfig { ... }
        component SpriteConfig {
            isThumpable = false,
            OnIsValid = BuildRecipeCode.barricade.OnIsValidPlanks,
            OnCreate = BuildRecipeCode.barricade.OnCreate,
            face W { layer { row = carpentry_01_8 } }
            ...
        }
        component CraftRecipe {
            timedAction = BuildWallHammer,
            time = 200,
            category = Barricades,
            Tags = AutoRotate,
            xpAward = Woodwork:10,
            inputs {
                item 1 tags[base:hammer] mode:keep flags[...],
                item 1 [Base.Plank],
                item 1 [Base.Nails] flags[DontRecordInput],
            }
        }
    }
}
```

**Item definitions**: `media/scripts/generated/items/*.txt`

Items are defined in categorized files (weapon.txt, normal.txt, drainable.txt, food.txt, clothing.txt, etc.).

### 3.3 Loot Generation Flow

1. **World map loads** → `.lotheader` files define room boundaries
2. **Room detection** → Java engine detects rooms from building data
3. **Distribution lookup** → Each container's room type mapped to `Distributions.lua` table
4. **Procedural fill** → If `procedural=true`, picks from `ProceduralDistributions.list`
5. **Junk fill** → Additional random junk per container type
6. **Story clutter** → OnLoadedMapZones triggers `StoryClutter.Init()`, populating randomized building interiors
7. **Overlay decoration** → WorldFiller and overlay systems apply cosmetic decorations

### 3.4 Containers and Bag Content

**File**: `Distribution_BagsAndContainers.lua` (3,619 lines)

Pre-defined bag/container contents (e.g., ALICE pack, First Aid Kit, Toolbox) that can spawn as loot items. Each bag definition has `rolls`, `items` (weighted), and `junk`.

---

## 4. Vehicles & Zombies

### 4.1 Vehicle Spawning System

#### Vehicle Definitions

**Scripts**: `media/scripts/generated/vehicles/*.txt`
- `models_vehicles.txt` — Vehicle model definitions
- Profession vehicles — Script variants per-town (pickup trucks, vans, step vans)
- Burnt/smashed variants in `burntAndSmashedVehicles/`

#### Profession Vehicle Spawning (Per-Region)

**File**: `media/lua/server/Vehicles/ProfessionVehicles.lua` (346 lines)

Lua-based spawning system triggered by `Events.OnCreateRegion`:

```lua
ProfessionVehicles.OnCreateRegion = function(region, square, direction)
    if region == "General" then return end
    local vList = ProfessionVehicles[region]
    local pick = vList[ZombRand(#vList)+1]
    -- Handles unique vehicles (can only spawn once globally)
    addVehicleDebug(pick, direction, nil, square)
end
```

**Per-town vehicle lists**:
| Town | Vehicles |
|------|----------|
| Louisville | StepVan_LouisvilleMotorShop, StepVan_Jorgensen, VanKerrHomes, etc. |
| March Ridge | VanTreyBaines, VanJonesFabrication, PickUpVanHeltonMetalWorking, etc. |
| Muldraugh | PickUpVanBrickingIt, PickUpVanWeldingbyCamille, VanJohnMcCoy, etc. |
| Riverside | PickUpTruckJPLandscaping, VanGardenGods, VanRiversideFabrication, etc. |
| Rosewood | VanRosewoodworking, VanSchwabSheetMetal, VanPlattAuto, etc. |
| West Point | PickUpVanYingsWood, StepVan_RandisPlants, VanBeckmans, etc. |

**Key API**: `addVehicleDebug(scriptName, direction, nil, square)` — This is the vehicle spawn function. The third parameter (set to nil) accepts a part condition table for damaged/burnt variants.

#### Vehicle Distributions (Inventory)

**File**: `media/lua/server/Vehicles/VehicleDistributions.lua` (11,888 lines)

Per-part loot tables:
- `VehicleDistributions.GloveBox` — Glove box contents
- `VehicleDistributions.TrunkStandard` — Standard trunk contents
- `VehicleDistributions.TrunkHeavy` — Heavy trunk contents
- `VehicleDistributions.TrunkSports` — Sports trunk contents
- `VehicleDistributions.EmptySeat` — Seat items
- `VehicleDistributions.DriverSeat` — Driver seat items

Plus junk tables:
- `VehicleDistribution_GloveBoxJunk.lua` (4,672 lines)
- `VehicleDistribution_SeatJunk.lua` (2,917 lines)
- `VehicleDistribution_TrunkJunk.lua` (1,247 lines)

### 4.2 Zombie Population Generation

**Dedicated file**: `media/lua/server/Zombies/VoronoiNoise.lua` (256 bytes)

```
zombie_voronoi = {
    {
        points = 1, closest = "SECOND_MINUS_FIRST",
        scale = 12.0, cutoff = 0.15,
    },
    {
        points = 1, closest = "SECOND_MINUS_FIRST",
        scale = 55.0, cutoff = 0.08,
    },
}
```

This is a **Voronoi noise configuration** for zombie population distribution. The Java engine uses this to determine zombie density at world coordinates. Two noise layers at different scales (12 and 55) produce the distribution.

**Zombie density is configured in**:
- WorldGen biome definitions (`zombies = 0.001` in biome params)
- Sandbox options (handled by Java, not exposed in Lua)
- `ignoreZombieDensity` flag in distribution tables

**Confirmed**: Zombie spawning/migration is **Java-based** (`SadisticAIDirector` class). The Lua directory `NPCs/SadisticAIDirector/` only contains `SadisticMusicDirector.lua` — music triggers, not population logic.

### 4.3 Zombie Loot

**File**: `ProceduralDistributions.lua` contains zombie outfit/tool definitions used for zombie inventories. The `ignoreZombieDensity` flag in distribution tables prevents loot from being suppressed in high-zombie areas.

---

## 5. Modding Hooks & Events

### Confirmed Lua Events (Server-Side)

| Event | Registered In | Purpose |
|-------|--------------|---------|
| `Events.OnLoadedMapZones` | `StoryClutter_Initialization.lua` | Populate randomized building clutter tables |
| `Events.OnCreateRegion` | `ProfessionVehicles.lua` | Spawn profession vehicles per town region |
| `Events.OnPostDistributionMerge` | *(referenced but commented out)* | Post-loot-distribution hook |
| `MapObjects.OnNewWithSprite` | `MOBarricade.lua` and similar | Replace map sprites with functional objects |

### Java API Accessed from Lua

| API Call | Found In | Purpose |
|----------|----------|---------|
| `getWorld():getRandomizedWorldBase()` | StoryClutter | Access randomized building clutter arrays |
| `getWorld():registerZone()` | metazoneHandler | Register named zones for loot/vehicle |
| `getWorld():registerVehiclesZone()` | metazoneHandler | Register vehicle-specific zones |
| `getWorld():registerAnimalZone()` | metazoneHandler | Register animal spawning zones |
| `getWorld():getMetaGrid():registerWorldGenZone()` | metazoneHandler | Override terrain generation |
| `addVehicleDebug()` | ProfessionVehicles | Spawn vehicles |
| `getWorld():registerSpawnOrigin()` | metazoneHandler | Player spawn points |
| `Basements.getAPIv1()` | metazoneHandler | Basement spawn system |
| `WorldGenUtils.INSTANCE` | WorldGen | File scanning for feature loading |

---

## 6. System Overview Diagrams

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  WORLD GENERATION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  World Map Image (biome_map_config.lua)
       │
       ▼
  Biome Selection (Selection.lua) ──► Terrain Features
       │                                    │
       ├── landscape                          ├── GROUND (9 types)
       ├── temperature                        ├── PLANT (9 types)  
       ├── hygrometry                         ├── BUSH (4 types)
       ├── ore_level                          ├── TREE (~50 types)
       │                                      └── ORE (5 types)
       ▼
  Biome Execution (biomes/worldgen/*.lua)
       │
       ├── Terrain placement (ground tiles)
       ├── Vegetation placement (plants/bushes)
       ├── Tree placement (with jumbo/sapling variants)
       ├── Ore vein generation (Veins.lua → fractal arms)
       └── Road placement (prefabs + Roads.lua)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  URBAN/BUILDING GENERATION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Map Data (.lotheader + objects.lua)
       │
       ▼
  Zone Registration (metazoneHandler.lua)
       │
       ├── Region/BuildingName zones
       ├── VehicleZones (try first) ──► ProfessionVehicles spawn
       ├── WorldGen zones (terrain override)
       ├── Basement spawn locations
       └── Mannequin zones
       │
       ▼
  Java RandomizedWorldBase
       │
       ├── Random building placement
       ├── Room generation
       ├── Window/door placement
       ├── Furniture selection
       └── StoryClutter item placement ← Lua data hook!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOOT DISTRIBUTION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Container placed in room
       │
       ▼
  Room type detected (Java)
       │
       ▼
  Distributions.lua lookup
       │
       ├── procedural=true ──► ProceduralDistributions.list[name]
       │                           └── Weighted item table
       ├── inline items
       └── junk table
       │
       ▼
  WorldFiller.lua overlay
       │
       └── Sprite-based decorative overlays (random junk/debris)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  VEHICLE SPAWNING FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Map Zone (objects.lua)
       │
       ├── ProfessionVehicles.OnCreateRegion
       │       └── ZombRand pick from town list → addVehicleDebug()
       │
       └── Vanilla vehicle spawning (Java)
               └── Vehicle type/density from zone properties
               └── Condition/damage from zone chance
               └── Burnt/smashed variant selection (Java)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ZOMBIE POPULATION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  VoronoiNoise.lua (2 scale layers)
       │
       ▼
  Java SadisticAIDirector
       │
       ├── Zombie population density per cell
       ├── Migration patterns
       ├── Respawn mechanics
       ├── Meta-game event triggers
       └── Music/director cues ← SadisticMusicDirector.lua
```

---

## 7. Modding Potential Matrix

### Legend
- ✅ **Confirmed** — Directly moddable via Lua/config
- ⚠️ **Partial** — Some Lua access but core logic in Java  
- ❌ **Impossible** — Engine-internal, no Lua hook

| System | Moddable | How |
|--------|----------|-----|
| Terrain biome definitions | ✅ | Add new `worldgen.biomes.*` entries, new feature types |
| Tree/plant/bush species | ✅ | New feature Lua files in features/ directories |
| Ore vein generation | ✅ | New vein definitions in Veins.lua |
| Road generation | ✅ | New road types + prefab schematics |
| WorldGen zone overrides | ✅ | WorldGen zone types in map objects.lua |
| Room clutter/loot tables | ✅ | StoryClutter definitions, ProceduralDistributions |
| Room distribution tables | ✅ | New rooms in Distributions.lua |
| Bag/container contents | ✅ | Distribution_BagsAndContainers.lua |
| Vehicle per-town spawning | ✅ | ProfessionVehicles.lua per-region tables |
| Vehicle inventory | ✅ | VehicleDistributions.lua per-part tables |
| Tile/overlay decorations | ✅ | WorldFiller/overlay Lua tables |
| New entity recipes | ✅ | Entity scripts + CraftRecipe + callbacks |
| New item definitions | ✅ | Script items .txt files |
| Map objects (sprite→functional) | ✅ | MapObjects.OnNewWithSprite |
| Zombie population density | ⚠️ | Voronoi noise config + biome `zombies` param; core logic is Java |
| Building/room generation | ⚠️ | Java engine; Lua provides clutter data only |
| Randomized building interiors | ⚠️ | StoryClutter feeds Java RandomizedWorldBase |
| Vehicle burnt/smashed state | ⚠️ | Script variants exist; spawn decision logic is Java |
| Meta zombie migration | ❌ | SadisticAIDirector is Java-only |
| World map image generation | ❌ | Hardcoded pixel map; no Lua generation |
| New biome mapping (pixel→biome) | ⚠️ | BiomeMapConfig.lua can add entries, but pixel values reference a fixed world map |
| Chunk loading/generation | ❌ | Java engine handles pooling/loading |
| Spawn point generation | ⚠️ | Map objects can define SpawnOrigin zones |

### Difficulty Levels

| Task | Difficulty | Description |
|------|------------|-------------|
| Add new clutter table | Easy | 10 lines in StoryClutter_Definitions + init |
| Add new procedural distribution | Easy | 20 lines in ProceduralDistributions |
| Add new room type with loot | Easy | ~50 lines in Distributions |
| Custom item definition | Easy | Entity/item script file (~20 lines) |
| Custom CraftRecipe entity | Medium | Entity + xuiSkin + optional Lua callbacks |
| New vehicle variant | Medium | Copy existing script, adjust parts/model |
| New tree/plant feature | Easy | Feature Lua + reference in biome definition |
| New biome definition | Medium | Feature definition + selection params + map pixel |
| New ore vein pattern | Medium | Vein params in Veins.lua |
| Custom overlay system | Medium | Understand WorldFiller format + tile sprite naming |
| New zombie behavior pattern | Hard | Need Java access or Lua event hooking |
| Custom building generation | Hard | Primarily Java; could use MapObjects post-processing |
| Custom world map | Hard | Must create .lotheader files + pixel map + zones |

---

## 8. Recommended Generator Mod Ideas

### Tier 1: Easy (Lua data only)

1. **Expanded Story Clutter Tables** — Add new room types with unique clutter (e.g., "MancaveClutter", "HomeGymClutter", "ArtStudioClutter", "HomeOfficeClutter")
2. **New Procedural Distributions** — Add new container filler tables for mod items
3. **Custom Biome Features** — Add new ground types, unique vegetation, or new tree species to existing biomes
4. **Expanded Vehicle Distributions** — Add new trunk/glove box content tables

### Tier 2: Medium (Data + Entity scripts + some logic)

5. **Environmental Story Generator** — Use `MapObjects.OnNewWithSprite` to replace specific sprites with random scene objects (e.g., crashed car + lootable corpse + scattered items)
6. **Custom Ore/Resource Generation** — Define new ore veins with unique distribution patterns and new CraftRecipe entities to process them
7. **Vehicle Wreck Diversity Mod** — New burnt/smashed vehicle variants with different loot tables
8. **Dynamic Biome Expansion** — Add new biomes to BiomeMapConfig for unused pixel values, creating unique regions with custom tree/ground combinations

### Tier 3: Challenging (Java interaction needed)

9. **Post-Generation Cleanup Mod** — After map loads, use `Events.OnLoadedMapZones` to scan and replace specific room types with themed variants (e.g., all laundromats become survivalist outposts)
10. **Custom Building Generator** — Create your own building prefab system using map objects and `IsoThumpable`/`IsoBarricade` creation APIs, implementing a simple schematic format in Lua
11. **Dynamic Road Network Mod** — Add new road prefabs with different widths and surface types, then hook into the road generation to place them
12. **Apocalypse Condition Variation** — Use overlay systems to procedurally apply damage/debris based on distance from town center, creating a natural "looted outskirts" gradient

### Tier 4: Experimental (Modding the engine)

13. **Custom World Map Generator** — Replace the pixel map with procedural world generation using Voronoi/Perlin noise (requires Java mod or WorldGen zones override)
14. **Resource-Driven Building Generator** — Create a system where buildings generate based on nearby resource availability (e.g., more construction equipment near warehouses, more medical supplies near clinics)
15. **Event-Based Generation** — Buildings remember the "evacuation story" with procedural clues (newspapers, dead NPCs, barricade patterns) telling what happened at each location

---

## Appendix: File Reference

### Key Lua Directories

```
media/lua/server/
├── WorldGen/                           — Terrain & feature generation
│   ├── WorldGen.lua                    — Entry point / table initialization
│   ├── Selection.lua                   — Parameter range tables
│   ├── Biomes.lua                      — Biome table container
│   ├── Features.lua                    — Feature category loader
│   ├── Roads.lua                       — Road generation config
│   ├── Veins.lua                       — Ore vein patterns (iron/copper)
│   ├── attachments/Priorities.lua      — Ground render priority
│   ├── biomes/
│   │   ├── map/*.lua                   — Pixel→biome mapping (19 files)
│   │   └── worldgen/*.lua              — Biome definitions (16 files)
│   ├── features/                       — Individual features
│   │   ├── ground/*.lua                — Ground tiles (9)
│   │   ├── plant/*.lua                 — Plant features (9)
│   │   ├── bush/*.lua                  — Bush types (4)
│   │   ├── tree/*.lua                  — Tree species (~50)
│   │   └── ore/*.lua                   — Ore/rock features (5)
│   └── prefabs/*.lua                   — Road schematics (2)
│
├── RandomizedWorldContent/             — Procedural interior decoration
│   ├── StoryClutter/
│   │   ├── StoryClutter_Definitions.lua    — 50+ clutter tables
│   │   └── StoryClutter_Initialization.lua — Hook to Java API
│   └── StoryTable_Initialization.lua       — Utility functions
│
├── metazones/
│   ├── metazoneHandler.lua             — Zone registration from map files
│   ├── BiomeMapConfig.lua              — Pixel→biome/zone mapping
│   └── AnimalsPathConfig.lua           — Animal navigation zones
│
├── Items/
│   ├── Distributions.lua                   — Room loot tables
│   ├── ProceduralDistributions.lua         — Item spawn tables
│   ├── SuburbsDistributions.lua            — Room→loot mapping
│   ├── Distribution_*.lua              — Junk/container tables (7 files)
│   ├── WorldFiller.lua                     — Auto-generated overlay map
│   ├── TileOverlays.lua                    — Sprite→overlay mapping
│   ├── *Overlays.lua                   — Decorative overlay files (10+)
│   ├── BentFences.lua / BrokenFences.lua   — Fence damage overlays
│   └── LootLog.lua                         — Loot tracking (debug)
│
├── Vehicles/
│   ├── Vehicles.lua                         — Vehicle mechanics
│   ├── ProfessionVehicles.lua               — Per-region vehicle spawning
│   ├── VehicleDistributions.lua             — Vehicle loot tables
│   └── VehicleDistribution_*.lua            — Junk tables (3 files)
│
├── Zombies/
│   └── VoronoiNoise.lua                     — Population noise config
│
└── NPCs/SadisticAIDirector/
    └── SadisticMusicDirector.lua            — Music triggers only
```

### Key Script Directories

```
media/scripts/
├── generated/
│   ├── entities/
│   │   ├── barricades/                 — Barricade entity definitions
│   │   ├── walls/                      — Wall/fence entities
│   │   ├── ...other types...
│   │   └── recipes*.txt                — Generated recipe files
│   ├── items/                          — Item definitions
│   │   ├── normal.txt                  — Materials, containers
│   │   ├── weapon.txt                  — Weapon items
│   │   ├── drainable.txt               — Fuel, tools
│   │   ├── food.txt                    — Food items
│   │   ├── clothing.txt                — Clothing/armor
│   │   └── ...other types...
│   ├── vehicles/                       — Vehicle script definitions
│   │   ├── models_vehicles.txt         — Base vehicle models
│   │   ├── professionVehicles/         — Per-region vehicle variants
│   │   └── burntAndSmashedVehicles/    — Damaged vehicle variants
│   └── sounds/                         — Sound definitions
└── entities/                           — Non-generated (manual) entities
    └── barricades/*_xuiSkin.txt        — XUI skin definitions
```

### Map Data

```
media/maps/<Town Name, KY>/
├── *.lotheader                         — Chunk header files (terrain + buildings)
├── objects.lua                         — Zone definitions (vehicles, regions, etc.)
├── regions.lua                         — Additional zone definitions
├── roomtones.lua                       — Ambient sound zones (optional)
└── spawnOrigins.lua                    — Player spawn points (optional)
```

---

*Research conducted against Project Zomboid Build 42.18 installation at D:\Games\ProjectZomboid-42.18*
