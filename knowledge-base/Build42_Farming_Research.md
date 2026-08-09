# Build 42 Farming System Research

> Source: Project Zomboid v42.20.0 game files, media/lua/server/Farming/, media/scripts/generated/
> Last updated: 2026-07-30

## 1. Architecture Overview

The farming system re-uses the **SGlobalObjectSystem** (persistent world object tracking) across two layers:

| Layer | File | Role |
|-------|------|------|
| **Server** | `server/Farming/SFarmingSystem.lua` | Game logic, tick, XP, health, disease, harvest |
| **Client** | `client/Farming/CFarmingSystem.lua` | UI data, rendering, XP queries |
| **Config** | `server/Farming/farming_vegetableconf.lua` | Shared constants, yield formulas, growth calc, sprite lookup |
| **Crops** | `server/Farming/farming_vegetableconf_vegetables.lua` | 36 vegetable/grain definitions |
| **Herbs** | `server/Farming/farming_vegetableconf_herbs.lua` | 25+ herb/flower definitions |
| **MapObjects** | `server/Map/MapObjects/MOFarming.lua` | World-gen sprite→IsoObject converter |
| **Commands** | `server/Farming/farmingCommands.lua` | RPC commands for client→server actions |
| **Compost** | `server/BuildingObjects/ISCompost.lua`, `server/Map/MapObjects/MOCompost.lua` | Compost bin logic and world placement |

**Timed Actions** (shared/Farming/TimedActions/):

| File | Action | Duration |
|------|--------|----------|
| `ISPlowAction.lua` | Plow soil with trowel/shovel | 80 ticks |
| `ISSeedActionNew.lua` | Plant seeds | 40 ticks |
| `ISWaterPlantAction.lua` | Water plants | variable |
| `ISFertilizeAction.lua` | Apply fertilizer/compost | 40 ticks |
| `ISCurePlantAction.lua` | Apply mildew/aphids/flies/slugs cure | 40 ticks |
| `ISHarvestPlantAction.lua` | Harvest mature crops | 60 ticks |
| `ISShovelAction.lua` | Remove plant/destroy | 60 ticks |

---

## 2. Crop Types (~56 total)

### Vegetables & Grains (farming_vegetableconf_vegetables.lua)

| Crop | seedName | timeToGrow | Harvest Lvl | Yield (min-max) | Best Sow Month | Bad Months | Special |
|------|----------|------------|-------------|-----------------|----------------|------------|---------|
| Barley | BarleySeed | 432h | 6 | 2-4 | Sep | Jun-Jul | scytheHarvest, coldHardy |
| BellPepper | BellPepperSeed | 292h | 5 | 2-4 | May | Oct-Mar | — |
| Broccoli | BroccoliSeed | 292h | 5 | 2-4 | Mar, Jun | Sep-Jan | mothFood, rotTime=248 |
| Cabbages | CabbageSeed | 292h | 5 | 2-4 | Mar, May | Oct-Jan | coldHardy, mothFood |
| Carrots | CarrotSeed | 432h | 5 | 3-6 | Feb, Jun | Jan, Oct-Dec | badMonthHardyLevel=4 |
| Cauliflower | CauliflowerSeed | 292h | 5 | 2-4 | Mar | Sep-Jan | mothFood, rotTime=248 |
| Corn | CornSeed | 432h | 5 | 2-4 | Apr | Aug-Feb | harvestPosition=High |
| Cucumber | CucumberSeed | 432h | 5 | 2-4 | Apr | Aug-Feb | — |
| Flax | FlaxSeed | 432h | 6 | 2-4 | Sep | Jun-Jul | scytheHarvest, coldHardy |
| Garlic | GarlicSeed | 1152h | 5 | 2-4 | Aug | Jun | coldHardy, aphidsBane, slugsProof, mothBane, rabbitBane |
| Greenpeas | GreenpeasSeed | 292h | 5 | 2-4 | Mar | Oct-Jan | slugsProof, mothFood |
| Hemp | HempSeed | 960h | 6 | 2-4 | Sep | Jun-Jul | — |
| Hops | HopsSeed | 960h | 6 | 3-4 | Sep | Jun-Jul | — |
| Kale | KaleSeed | 292h | 5 | 2-4 | Mar, Jul | Nov-Jan | growBack=2, coldHardy, mothFood |
| Lettuce | LettuceSeed | 292h | 5 | 2-4 | Mar, Jul | Oct-Jan | — |
| Onion | OnionSeed | 432h | 5 | 2-4 | Feb | Jul-Jan | aphidsBane, slugsProof, fliesBane, rabbitBane, mothFood |
| Potatoes | PotatoSeed | 432h | 5 | 3-4 | Mar | Aug-Jan | slugsProof, mothFood |
| Pumpkin | PumpkinSeed | 432h | 5 | 2-4 | Apr | Aug-Feb | — |
| Radishes | RedRadishSeed | 144h | 5 | 4-9 | Mar, Jul | Sep-Jan | slugsProof, mothFood, fastest grow |
| Rye | RyeSeed | 432h | 6 | 2-4 | Sep | Jun-Jul | scytheHarvest, coldHardy |
| Soybeans | SoybeansSeed | 432h | 5 | 2-4 | Apr | Aug-Feb | — |
| Spinach | SpinachSeed | 292h | 5 | 2-4 | Mar, Jun | Sep-Jan | mothFood |
| Strawberries | StrewberrieSeed | 360h | 6 | 4-6 | Mar | Jul-Jan | **growBack=2** (perennial!) |
| SugarBeets | SugarBeetSeed | 292h | 5 | 4-9 | Mar, Jun | Sep-Jan | mothFood |
| Sunflower | SunflowerSeeds | 432h | 5 | 2-4 | Apr | Aug-Feb | harvestPosition=High |
| SweetPotato | SweetPotatoSeed | 432h | 5 | 3-4 | Jun | Oct-Feb | — |
| Tobacco | TobaccoSeed | 866h | 5 | 2-4 | Mar | Sep-Feb | mothFood |
| Tomato | TomatoSeed | 360h | 6 | 4-5 | May | Oct-Mar | slugsProof, mothFood |
| Turnip | TurnipSeed | 292h | 5 | 3-4 | Jun, Sep | Nov-Feb | — |
| Watermelon | WatermelonSeed | 432h | 5 | 2-4 | Apr | Oct-Feb | — |
| Wheat | WheatSeed | 432h | 6 | 2-4 | Sep | Jun-Jul | scytheHarvest, coldHardy |
| Zucchini | ZucchiniSeed | 432h | 5 | 2-4 | Apr | Aug-Feb | — |

### Herbs & Flowers (farming_vegetableconf_herbs.lua)

Basil, BlackSage, BroadleafPlantain, Chamomile, Chives, Cilantro, Comfrey, CommonMallow, Habanero, Jalapeno, Lavender, Leek, LemonGrass, Marigold, Mint, Oregano, Parsley, Poppies, Rosemary, Roses, Sage, Thyme, WildGarlic

**Herb pattern**: timeToGrow=484h, harvestLevel=3, fullGrown=4, many with `growBack=2` (perennial harvest). Many have companion planting properties.

---

## 3. Seeds System

### Seed Item Types
- **Bulk seeds** (e.g., `Base.CarrotSeed`) — individual seeds, Weight ~0.1
- **Seed packets** (e.g., `Base.CarrotBagSeed2`) — contain 5 seeds via `PutSeedsInPacket` recipe
- **Vegetable-as-seed**: Potatoes, SweetPotatoes, Garlic, Onions can be planted directly from the vegetable item
- **seedTypes field**: Some crops accept multiple seed sources (e.g., Corn accepts both `CornSeed` and `Corn`, Potatoes accept `PotatoSeed` and `Potato`)

### Seed Packets Recipe
- **PutSeedsInPacket**: 5 seeds → 1 filled packet, timedAction=PutSeedsInPacket, time=10
- **OpenPacketOfSeeds**: 1 filled packet → 5 seeds + 1 empty packet, time=20
- Supports 50+ seed types via item mappers

### Seed Yield on Harvest
- `seedPerVeg` = 0.5 (default) — harvest gives 1 seed per 2 vegetables
- Plants that reach the `fullGrown` stage produce seeds (`hasSeed = true`)

---

## 4. Tools

| Tool | Item ID | Purpose |
|------|---------|---------|
| **Wooden Trowel** | `MasonsTrowel_Wood` | Plowing (DigType=Trowel), ConditionMax=3, tags=digplow/masonstrowel |
| **Plaster Trowel** | `PlasterTrowel` | Metal variant, tags=plastertrowel |
| **Watering Can** | `WateredCan` | 8.0 fluid capacity, PourType=wateringcan, RainFactor=0.2 |
| **Gardening Spray (Empty)** | `GardeningSprayEmpty` | Base for disease cures |
| **Gardening Spray (Milk)** | `GardeningSprayMilk` | Mildew cure (cow/sheep/animal milk) |
| **Gardening Spray (Aphids)** | `GardeningSprayAphids` | Aphids cure (water + rubbing alcohol) |
| **Gardening Spray (Cigarettes)** | `GardeningSprayCigarettes` | Flies cure (water + tobacco) |
| **Fertilizer** | `Fertilizer` | NPK fertilizer, UseDelta=0.125, Weight=5.0 |
| **Compost Bag** | `CompostBag` | Compost, UseDelta=0.25, ReplacesOnDeplete→EmptySandbag |
| **HandShovel** | `HandShovel` | Alternative plowing tool |
| **Shovel** | `Shovel` | Alternative plowing tool |

---

## 5. Fertilizer & Compost

### Fertilizer (Base.Fertilizer)
- `ItemType = base:drainable`, Weight=5.0, UseDelta=0.125 (8 uses)
- Tags: `base:fertilizer`
- Applied via `ISFertilizeAction.lua` (40 ticks)
- Each tick, `fertilizer` counter decrements by 1 if ≥ 1
- Provides `bonusYield` flag for double-roll on harvest quantity

### Compost (Base.CompostBag)
- `ItemType = base:drainable`, Weight=5.0, UseDelta=0.25 (4 uses)
- Tags: `base:compost`
- Compost bins: `buildingObjects/ISCompost.lua` + `MapObjects/MOCompost.lua`
- Compost bags hold 10 compost units per bag, each use adds ~2.5 units
- `ISAddCompost.lua`: 150 ticks to empty a bag into bin

---

## 6. Farming System (Server) — SFarmingSystem.lua

### Tick System
- Hooked to: `Events.EveryTenMinutes`
- **Hour tracking**: `hoursElapsed` increments each game hour
- **Water depletion**: Every `hourForWater` hours (depends on PlantResilience sandbox):
  - Very High=12h, High=8h, Normal=3h, Low=3h, Very Low=2h
- **Health change**: Every 2 hours
- **Weed check**: On each health tick, checks square for vegetation/trees

### Plant Health
- Range: 0-100. Health < 25 → dying sprite, < 50 → unhealthy sprite
- Initial health depends on **moon phase** at planting:
  - Ascending moon (days 4-17): health 47-53
  - **Full moon (days 18-21)**: health 57-64 (best)
  - Descending moon (rest): health 37-44 (worst)
- Farming skill grants +health at seed time: `health = getHealth() + skill`
- Sunny weather outdoors: +1 health/tick
- Sunny indoors (greenhouse/houseplant): +0.25 health/tick

### Growth Stages
- `nbOfGrow` increments from 0 → fullGrown (typically 5-6)
- Stage names: Plowed → Seedling (1-2) → Young (3-4) → Ready to Harvest (mature) → Seed-bearing (fullGrown) → Rotten
- Growth time determined by `timeToGrow` + water modifiers + disease modifiers

### Watering
- `waterNeeded` (min) and `waterNeededMax` (cap per crop)
- Water deficiency levels:
  - waterLvl ≥ waterNeeded → normal growth
  - waterLvl ≥ waterNeeded/1.10 → growth + (waterNeeded - waterLvl) bonus hours
  - waterLvl ≥ waterNeeded/1.30 → no growth, +30h delay
  - waterLvl < waterNeeded/1.30 → plant death

### XP System (Perks.Farming)
- **XP per harvest**: `health / 2` base XP
- Good care bonus: +25 XP if `badCare == false`
- Bad care penalty: -15 XP if `badCare == true`
- Clamped: 1-100 XP per harvest
- **Skill level caps**: Max farming level is 10
- XP books: BookFarming1-5 (1-2,3-4,5-6,7-8,9-10)

### Diseases
| Disease | Cure Item | Caused by | Effect |
|---------|-----------|-----------|--------|
| Mildew | `GardeningSprayMilk` (cow/sheep milk) | Moisture | Delays growth, kills at >60 |
| Aphids | `GardeningSprayAphids` (water + alcohol) | Spread from neighbors | Reduces yield |
| Flies | `GardeningSprayCigarettes` (water + tobacco) | Spread | Visible on square |
| Slugs | `SlugRepellent` (distribution item) | Moisture | Reduces yield |

**Disease thresholds**: <10 = safe, 10-30 = +diseaseLvl hours to grow, 30-60 = no growth, >60 = plant dead.

**Companion Planting** (disease reduction):
- `aphidsBane`: Garlic, Onion, Leek, Chives, Marigold, Rosemary, LemonGrass
- `slugsProof`: Garlic, Greenpeas, Onion, Potatoes, Cilantro, Chives, Oregano, Parsley, Radishes, Tomatoes
- `fliesBane`: Onion, Basil, Marigold, Rosemary
- `mothBane`: Garlic, LemonGrass, Oregano, Rosemary
- `rabbitBane`: Garlic, Onion, Leek, LemonGrass
- `deerBane`: Oregano, LemonGrass
- Companion benefit: plants with nbOfGrow ≥ 3 share protection to adjacent plants

### Season System
- `PlantGrowingSeasons` sandbox option (true on Apocalypse)
- **badMonth**: Months when crops struggle — triggers `cursed = true` → badMultiplier ×2
- **badMonthHardyLevel**: Some crops (Carrots=4, Kale=3) mitigate bad months partially
- **Winter**: Plants not `coldHardy` get cursed automatically in winter
- **bestMonth**: Optimal planting month for max yield
- **riskMonth**: Moderate risk planting window
- **sowMonth**: Allowed planting window

### Weather Integration
- `getClimateManager():getSeasonName()` — Winter kills non-coldHardy outdoor plants
- Sunny weather: health boost
- Rain: fills rain collectors, waters outdoor plants passively
- Greenhouses (rooms named "greenhouse"): treated as outdoors for sunlight but protected from seasons

---

## 7. Farming Recipes (recipes_farming.txt)

| Recipe | Category | Time | AutoLearn | Inputs | Output |
|--------|----------|------|-----------|--------|--------|
| MakeMildewCure | Farming | 40 | Farming:6 | GardeningSprayEmpty + milk (cow/sheep/animal) | GardeningSprayMilk |
| MakeAphidsCure | Farming | 40 | Farming:6 | GardeningSprayEmpty + water + rubbing alcohol | GardeningSprayAphids |
| MakeFliesCure (3 variants) | Farming | 40 | Farming:6 | GardeningSprayEmpty + water + cigarettes/tobacco | GardeningSprayCigarettes |
| PutSeedsInPacket | Farming | 10 | none (always available) | 5 seeds + empty packet | 1 filled seed packet |
| OpenPacketOfSeeds | Farming | 20 | always available | 1 filled packet | 5 seeds + empty packet |
| MakeScarecrow | Farming | 150 | Farming:6 | 2 long sticks + long johns + ripped sheets + hay | Mov_Scarecrow |
| CollectSeeds | Farming | 50 | — | knife/tweezers + whole veggie (bellpepper/cucumber/tomato etc.) | 1 seed per veggie |
| CollectSunflowerSeeds | Farming | 50 | — | 1 SunflowerHeadDried | 10 SunflowerSeeds |
| CollectPoppySeeds | Farming | 50 | — | 1 PoppyPodsDried | 1 PoppySeed |
| ShredTobacco | Farming | 300 | — | TobaccoDried + scissors/knife | TobaccoLoose |
| ThreshGrain | Farming | 50 | — | BarleySheafDried/RyeSheafDried/WheatSheafDried | Seeds |

---

## 8. Farming Skill Books (5 volumes)

| Item | Skill Lvl Range | Pages | Weight | Model |
|------|----------------|-------|--------|-------|
| BookFarming1 | 1-2 | 220 | 1.0 | BookLightGreen |
| BookFarming2 | 3-4 | 260 | 1.0 | BookLightGreen |
| BookFarming3 | 5-6 | 300 | 1.0 | BookLightGreen |
| BookFarming4 | 7-8 | 340 | 1.0 | BookLightGreen |
| BookFarming5 | 9-10 | 380 | 1.0 | BookLightGreen |

---

## 9. Farming Magazines (9 issues)

| Issue | Teaches Recipes | Icon |
|-------|----------------|------|
| FarmingMag1 | MakeMildewCure | Magazine_Farming7 |
| FarmingMag2 | MakeFliesCure (3 variants), MakeAphidsCure | Magazine_Farming8 |
| FarmingMag3 | Chamomile, Marigold, Sunflower, Rose, Poppy, Lavender seasons | Magazine_Gardening1 |
| FarmingMag4 | MakeScarecrow, MakeBarbedWire | Magazine_Farming9 |
| FarmingMag5 | MakeJar (canning) | MagazineFarming5 |
| FarmingMag6 | Grain/cash crop seasons (Barley, Corn, Flax, Rye, Soybean, SugarBeet, Tobacco, Wheat) | MagazineFarming1 |
| FarmingMag7 | ALL vegetable/fruit seasons (bell pepper through zucchini) | Magazine_Farming6 |
| FarmingMag8 | Herb/spice seasons (Basil through Thyme + Hops) | Magazine_Farming10 |
| FarmingMag9 | Medicinal herb seasons (BlackSage, BroadleafPlantain, Comfrey, CommonMallow, WildGarlic) | Magazine_Herbal1 |

**Note**: Season recipes allow planting crops outside the `sowMonth` window. At Farming skill ≥ 6, all season recipes are auto-known.

---

## 10. Farmer Profession

**Defined in**: `media/scripts/generated/characters/character_professions.txt`

```
character_profession_definition base:farmer
{
    CharacterProfession = base:farmer,
    Cost = 0,
    UIName = UI_prof_Farmer,
    XPBoosts = Farming=4; Husbandry=1; Strength=1,
    GrantedRecipes = <ALL season recipes + MakeMildewCure + MakeFliesCure + MakeAphidsCure + MakeScarecrow + MakeBarbedWire + MakeJar>
}
```

**Key**: Farmers start with **Farming x4 XP multiplier**, all 50+ season recipes, and all three disease cure recipes + scarecrow + canning.

**Zombie outfit**: `ZombiesZoneDefinition.Farmer` (10% base chance, 80% in Farmer zones, beard styles available).

**Zombie outdoor loot** (`Distributions.lua`):
- `FarmerTools`: SeedBag, WateredCan, HandShovel, GardeningSprayEmpty, GardenFork, GardenHoe, HandScythe, Scythe, Rake, LeafRake, Bag_GardenBasket, Toolbox_Gardening
- `FarmerOutfit`: Skill books (Farming 1-5, Husbandry 1-5, Butchering 1-5), farming magazines
- Bag type: `SeedBag` (20-slot dedicated seed bag)

---

## 11. Loot Distributions

| Distribution | Context | Key Items |
|-------------|---------|-----------|
| `CrateFarming` | Warehouses, storage | Seed packets, tools, magazines |
| `CrateGardening` | Garden stores | Pots, soil, gardening tools |
| `GigamartFarming` | Gigamart shelves | Seeds, fertilizer, compost |
| `BookstoreFarming` | Bookstores | Farming skill books (1-5), magazines (1-9) |
| `ToolStoreFarming` | Tool stores | Shovels, trowels, watering cans |
| `ToolCabinetFarming` | Garages/sheds | Hand tools |
| `Farmer` (zombie) | Outdoor zombie loot | Seed bag, skill books, magazines, tools (70% container chance) |

---

## 12. Watering System (ISWaterPlantAction.lua)

- Uses `WateredCan` (capacity 8.0) — fills from taps, rain barrels, wells, open water
- `PourType = wateringcan` enables targeting plants
- Rain fills the watering can passively (RainFactor=0.5 on the fluid container)
- Water level decreases every `hourForWater` ticks (sandbox-dependent)
- Water needs vary per crop (waterNeeded: 70-80 most crops, waterLvl sustained: 30-80)

---

## 13. Sandbox Options Affecting Farming

| Option | Type | Apocalypse Default | Effect |
|--------|------|--------------------|--------|
| `FarmingSpeedNew` | float (0.1-10) | 1.0 | Growth speed multiplier |
| `FarmingAmountNew` | float (0.1-10) | 1.0 | Harvest yield multiplier |
| `PlantResilience` | enum 1-5 | 3 (normal) | Water depletion rate (1=12h, 5=2h) |
| `PlantGrowingSeasons` | bool | true | Enable/disable season restrictions |
| `KillInsideCrops` | bool | true | Non-greenhouse indoor crops die |
| `FarmingLootNew` | float | 0.6 | Multiplier for farming loot spawns |

---

## 14. MOFarming.lua (MapObjects)

**Function**: Converts world-gen farming sprites to functional IsoObjects.

**Registered sprites**:
- `vegetation_farming_01_13`, `_14` → Destroyed plants
- All `sprite/unhealthySprite/dyingSprite/deadSprite` arrays for every crop type → NewPlant/NewLoad handlers

**World-gen plants**: receive initial water `ZombRand(waterNeeded, waterNeededMax)` and health based on sprite tier (healthy: 50-100, unhealthy: 25-49, dying: 1-24, dead: 0).

**Houseplant flag**: `isHouseplant` crops get `IsMoveAble=true` on their IsoObject.

---

## 15. Key Modding Points

- **Crop definitions** live in `farming_vegetableconf.props[typeName]` — add entries to add new crops
- **All crop sprites** must be registered in `farming_vegetableconf.sprite/unhealthySprite/dyingSprite/deadSprite/trampledSprite` arrays
- **New seasons** need a recipe entry, a FarmingMagazine, and optionally `AutoLearnAny = Farming:6`
- **Companion planting** is controlled by boolean flags on the prop table (aphidsBane, slugsProof, etc.)
- **Skill bonuses**: Farming skill affects seed health, yield quantity, cure effectiveness, and unlocks season recipes at level 6
- **The farming system is SGlobalObjectSystem-based**, not simple ISO objects — data persists via `gos_farming.bin`
- **Cannot grow indoors** without greenhouse room flag unless `KillInsideCrops` sandbox is disabled

### Files to touch for a new crop:
1. `farming_vegetableconf_vegetables.lua` or `_herbs.lua` — prop definition
2. `farming_vegetableconf_sprites.lua` — sprite arrays for each growth stage
3. Item scripts — seed item + vegetable item
4. `recipes_farming.txt` — season recipe + seed packet mapping
5. `literature.txt` — optional magazine entry if not auto-learned
6. Farming translation JSON for display names
