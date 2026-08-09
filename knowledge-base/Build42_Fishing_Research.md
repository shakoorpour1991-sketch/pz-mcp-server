---
title: "Project Zomboid Build 42 Fishing System Research"
description: "Comprehensive technical documentation for the fishing mechanics, items, and systems in Project Zomboid Build 42"
author: "Research Team"
date: "2026-07-30"
version: "42.18"
game-version: "Build 42.18"
---

# Project Zomboid Build 42 - Fishing System Research

> **Note:** This document covers Build 42.18 of Project Zomboid. Fishing mechanics may vary across different build versions.

## Table of Contents

1. [Overview](#overview)
2. [Fishing Rods](#fishing-rods)
3. [Tackle & Bait](#tackle--bait)
4. [Fish Species](#fish-species)
5. [Fishing Recipes](#fishing-recipes)
6. [Fishing Skill](#fishing-skill)
7. [Foraging Integration](#foraging-integration)
8. [Spawn Distributions](#spawn-distributions)
9. [Fishing Net Mechanics](#fishing-net-mechanics)
10. [Body of Water Mechanics](#body-of-water-mechanics)
11. [Magazines & Literature](#magazines--literature)
12. [Related Items](#related-items)
13. [Technical Implementation](#technical-implementation)

---

## Overview

The fishing system in Project Zomboid Build 42 is a comprehensive survival mechanic that allows players to catch fish for food, craft fishing equipment, and build fishing traps. The system integrates with the game's skills (Fishing, Cooking, Butchering), foraging system, and item distributions.

### Key Components

- **Fishing Rods**: 3 types (FishingRod, CraftedFishingRod, FishingRodBreak)
- **Tackle Items**: Hooks, lines, lures, bobbers
- **Bait Types**: Worms, insects, fish, artificial lures
- **Fish Species**: 20+ species across rivers and lakes
- **Fishing Nets**: Placeable trap systems
- **Skill System**: Fishing skill affects catch rates, fish size, and trophy chances

---

## Fishing Rods

### Item Definitions

```txt
# From media/scripts/generated/items/weapon.txt

item FishingRod
{
    DisplayCategory = FishingWeapon,
    ItemType = base:weapon,
    Weight = 1.0,
    Icon = FishingRod,
    WeaponSprite = FishingRod_Modern,
    Tags = base:fishingrod,
    OnCreate = Fishing.onCreateFishingRod,
    Researchablerecipes = MakeFishingRod,
    TwoHandWeapon = true,
    SurvivalGear = true,
}

item CraftedFishingRod
{
    DisplayCategory = FishingWeapon,
    ItemType = base:weapon,
    Weight = 1.0,
    Icon = FishingRod_crafted,
    WeaponSprite = FishingRod_Crafted,
    Tags = base:fishingrod;base:isfirefuel,
    OnCreate = Fishing.onCreateFishingRod,
    TwoHandWeapon = true,
}

item FishingRodBreak
{
    DisplayCategory = FishingWeapon,
    ItemType = base:weapon,
    Weight = 1.0,
    Icon = FishingRodBreak,
    # Broken rod for repair recipes
}
```

### Rod Coefficients

From `media/lua/shared/Fishing/fishing_properties.lua`:

```lua
Fishing.rods = Fishing.rods or {}
Fishing.rods["Base.CraftedFishingRod"] = 0.8  -- Better cast distance
Fishing.rods["Base.FishingRod"] = 1.0          -- Base coefficient

Fishing.breakRodReplacement = {}
Fishing.breakRodReplacement["Base.CraftedFishingRod"] = "Base.WoodenStick"
Fishing.breakRodReplacement["Base.FishingRod"] = "Base.FishingRodBreak"
```

### Line Types

```txt
# From media/scripts/generated/items/drainable.txt

item FishingLine
{
    DisplayCategory = Fishing,
    ItemType = base:drainable,
    Weight = 0.3,
    Icon = FishingLine,
    UseDelta = 0.1,
    Tags = base:fishingline;base:thread,
}

item PremiumFishingLine
{
    DisplayCategory = Fishing,
    ItemType = base:drainable,
    Weight = 0.1,
    Icon = FishingLinePremium,
    UseDelta = 0.25,  -- Lasts longer
    Tags = base:fishingline;base:thread;base:heavythread,
}

item Twine
{
    DisplayCategory = Material,
    ItemType = base:drainable,
    Weight = 0.5,
    Icon = Twine,
    # Can be used as makeshift fishing line
}
```

### Line Durability

From `fishing_properties.lua`:

```lua
Fishing.line = {}
Fishing.line["Base.Twine"] = 0.3 / 15.0           -- Breaks faster
Fishing.line["Base.FishingLine"] = 0.2 / 15.0     -- Standard
Fishing.line["Base.PremiumFishingLine"] = 0.1 / 15.0  -- Most durable
```

---

## Tackle & Bait

### Hooks

```txt
# From media/scripts/generated/items/normal.txt

item FishingHook
{
    DisplayCategory = Fishing,
    Weight = 0.05,
    Icon = FishHook,
    Tags = base:fishinghook;base:fitswallet,
    Researchablerecipes = MakeBoneFishingHook;Forge_Fishing_Hooks,
}

item FishingHookBox
{
    DisplayCategory = Fishing,
    Weight = 0.3,
    Icon = FishHookBox,
    DoubleClickRecipe = OpenBoxOfFishingHooks,
}

item FishingHook_Bone
{
    DisplayCategory = Fishing,
    Weight = 0.05,
    Icon = FishingHook_Bone,
    Tags = base:fishinghook;base:fitswallet,
}

item FishingHook_Forged
{
    DisplayCategory = Fishing,
    Weight = 0.05,
    Icon = FishingHook_Forged,
    # Crafted via blacksmithing
}
```

### Hook Coefficients

```lua
Fishing.hook = {}
Fishing.hook["Base.Paperclip"] = 0.8        -- Improvised
Fishing.hook["Base.Nails"] = 1.0            -- Standard
Fishing.hook["Base.FishingHook"] = 1.2      -- Better
Fishing.hook["Base.FishingHook_Forged"] = 1.2
Fishing.hook["Base.FishingHook_Bone"] = 1.2
```

### Lures & Artificial Bait

```txt
item JigLure
{
    DisplayCategory = Fishing,
    Weight = 0.1,
    Icon = jiglure1,
    FishingLure = true,
    SurvivalGear = true,
    Tooltip = Tooltip_FishingTackle,
}

item MinnowLure
{
    DisplayCategory = Fishing,
    Weight = 0.1,
    Icon = FishingTackle,
    FishingLure = true,
    SurvivalGear = true,
    Tooltip = Tooltip_FishingTackle,
}

item Bobber
{
    Weight = 0.1,
    ItemType = base:normal,
    DisplayCategory = Fishing,
    Icon = bobber,
    StaticModel = BobberModel,
}
```

### Natural Bait

```txt
item Worm
{
    DisplayCategory = Food,
    ItemType = base:food,
    Weight = 0.01,
    Icon = Worm,
    EvolvedRecipe = AddBaitToChum:1,
}

item BaitFish
{
    DisplayCategory = Food,
    ItemType = base:food,
    Weight = 0.1,
    Icon = FishMinnow,
    BadCold = true,
    EvolvedRecipe = AddBaitToChum:5,
}

item Cricket
{
    DisplayCategory = Food,
    ItemType = base:food,
    Weight = 0.1,
    Icon = Cricket,
    IsCookable = true,
}
```

### Bait Categories (from fishing_properties.lua)

```lua
Fishing.lure.Insect = {
    "Base.Cricket", "Base.Grasshopper", "Base.AmericanLadyCaterpillar",
    "Base.BandedWoolyBearCaterpillar", "Base.Centipede", "Base.Centipede2",
    "Base.Millipede", "Base.Millipede2", "Base.MonarchCaterpillar",
    "Base.Pillbug", "Base.SawflyLarva", "Base.SilkMothCaterpillar",
    "Base.Cockroach", "Base.SwallowtailCaterpillar", "Base.Termites",
}

Fishing.lure.Minnows = { "Base.BaitFish", "Base.Tadpole" }
Fishing.lure.Leeches = { "Base.Leech", "Base.Snail", "Base.Slug", "Base.Slug2" }
Fishing.lure.Worms = { "Base.Worm", "Base.Maggots" }
Fishing.lure.Flesh = { "Base.Crayfish", "Base.Shrimp", "Base.DogfoodOpen", 
                       "Base.FishFillet", "Base.Smallanimalmeat", "Base.Smallbirdmeat",
                       "Base.MeatPatty", "Base.FrogMeat", "Base.Steak" }
Fishing.lure.Plant = { "Base.Cheese", "Base.CannedCornOpen", "Base.Dough", 
                       "Base.Bread", "Base.BreadDough", "Base.BaguetteDough", "Base.Baguette" }
Fishing.lure.ArtificalLure = { "Base.JigLure", "Base.MinnowLure" }
```

---

## Fish Species

### Complete Fish List

All fish support both river and lake environments unless noted otherwise.

| Fish Species | Max Length (cm) | Max Weight (kg) | Trophy Length | Notes |
|--------------|-----------------|-----------------|---------------|-------|
| Largemouth Bass | 51 | 2.8 | 75cm | Predator |
| Smallmouth Bass | 41 | 2.3 | 55cm | |
| White Bass | 38 | 1.5 | 40cm | |
| Spotted Bass | 38 | 1.8 | 45cm | |
| Striped Bass | 76 | 9 | 90cm | Predator |
| Bluegill | 20 | 1.4 | 35cm | |
| White Crappie | 30 | 1.0 | 24cm | |
| Black Crappie | 25 | 1.0 | 28cm | |
| Redear Sunfish | 20 | 1.4 | 24cm | |
| Yellow Perch | 30 | 1.0 | 30cm | |
| Sauger | 45 | 1.9 | 50cm | |
| Green Sunfish | 20 | 1.4 | 20cm | |
| Walleye | 80 | 9 | 88cm | Predator |
| Freshwater Drum | 76 | 4.5 | 95cm | |
| Blue Catfish | 117 | 32 | 165cm | Predator, largest |
| Channel Catfish | 30 | 2.3 | 80cm | |
| Flathead Catfish | 140 | 27 | 147cm | Predator |
| Muskellunge | 101 | 18 | 127cm | Predator |
| Alligator Gar | 180 | 45 | 243cm | Predator, largest |
| Paddlefish | 150 | 27 | 220cm | |
| BaitFish | 10 | 0.05 | N/A | For catch bait |

### Fish Definition Example

From `fishing_properties.lua`:

```lua
local LargemouthBass = Fishing.FishConfig:new("Base.LargemouthBass")
LargemouthBass:setLocation(true, true)    -- River, Lake
LargemouthBass:setMaxLength(51)           -- CM
LargemouthBass:setTrophyLength(75)        -- CM
LargemouthBass:setMaxWeight(2.8)          -- KG
LargemouthBass:setTrophyWeight(10)        -- KG
LargemouthBass:setWeightFactor(2)
LargemouthBass:initFishSizeData()

LargemouthBass:addLures(Fishing.lure.Insect, 0.3)
LargemouthBass:addLures(Fishing.lure.Minnows, 0.7)
LargemouthBass:addLures(Fishing.lure.Leeches, 0.5)
LargemouthBass:addLures(Fishing.lure.Worms, 0.7)
LargemouthBass:addLures(Fishing.lure.Flesh, 0.1)
LargemouthBass:addLures(Fishing.lure.Plant, 0.0)
LargemouthBass.lure["Base.JigLure"] = 0.5
LargemouthBass.lure["Base.MinnowLure"] = 0.5
LargemouthBass.lure["Base.Maggots"] = 0.9

table.insert(Fishing.fishes, LargemouthBass)
```

### Trash Items (bycatch)

```lua
Fishing.trashItems = {
    "Base.Seaweed",
    "Base.RippedSheetsDirty",
    "Base.BrokenFishingNet",
    "Base.TinCanEmpty",
    "Base.WaterBottleEmpty",
}
```

---

## Fishing Recipes

### Crafting Recipes

From `media/scripts/generated/recipes/recipes_fishing.txt`:

```txt
craftRecipe MakeFishingRod
{
    timedAction = SharpenStakeWood,
    time = 80,
    NeedToBeLearn = true,
    OnCreate = RecipeCodeOnCreate.fixFishingRope,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    AutoLearnAny = Fishing:4;Carving:4,
    xpAward = Carving:5,
    inputs
    {
        item 1 tags[base:sharpknife;base:meatcleaver] mode:keep flags[MayDegradeLight;IsNotDull],
        item 1 [Base.WoodenStick2],
        item 2 tags[base:fishingline],
        item 1 [Base.Paperclip;Base.Nails;Base.FishingHook;Base.FishingHook_Forged;Base.FishingHook_Bone],
    }
    outputs
    {
        item 1 Base.CraftedFishingRod,
    }
}

craftRecipe FixFishingRod
{
    timedAction = Making,
    time = 80,
    NeedToBeLearn = true,
    OnCreate = RecipeCodeOnCreate.fixFishingRope,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    AutoLearnAny = Fishing:4,
    inputs
    {
        item 1 [Base.FishingRodBreak],
        item 1 tags[base:fishingline],
        item 1 [Base.Paperclip;Base.Nails;Base.FishingHook;Base.FishingHook_Forged;Base.FishingHook_Bone],
    }
    outputs
    {
        item 1 Base.FishingRod,
    }
}

craftRecipe MakeFishingNet
{
    timedAction = Making,
    time = 150,
    NeedToBeLearn = true,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    AutoLearnAny = Fishing:6,
    inputs
    {
        item 10 [Base.Twine],
        item 5 [Base.Wire],
    }
    outputs
    {
        item 1 Base.FishingNet,
    }
}

craftRecipe GetWireBack
{
    timedAction = Making,
    time = 100,
    OnCreate = RecipeCodeOnCreate.dismantleFishingNet,
    NeedToBeLearn = true,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    AutoLearnAny = Fishing:7,
    inputs
    {
        item 1 [Base.BrokenFishingNet],
    }
    outputs
    {
        item 1 Base.Wire,
    }
}

craftRecipe MakeChum
{
    timedAction = MakeChum,
    time = 120,
    NeedToBeLearn = true,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    AutoLearnAny = Fishing:5,
    inputs
    {
        item 1 [Base.Sandbag],
    }
    outputs
    {
        item 1 Base.Chum,
    }
}

craftRecipe HarvestRoe
{
    timedAction = MixingBowl,
    time = 120,
    Tags = InHandCraft;Fishing,
    category = Fishing,
    xpAward = Fishing:10,
    inputs
    {
        item 1 tags[base:bowl] mode:keep flags[ItemCount],
        -fluid 0.3 [Water],
        item 1 [Base.FishRoeSac] flags[ItemCount;InheritFood],
    }
    outputs
    {
        item 1 Base.FishRoe,
    }
}
```

### Fish Processing

```txt
craftRecipe SliceFish
{
    timedAction = SliceFish,
    time = 50,
    OnCreate = RecipeCodeOnCreate.cutFish,
    OnTest = RecipeCodeOnTest.cutFish,
    Tags = InHandCraft;CanBeDoneFromFloor;Cooking,
    category = Cooking,
    xpAward = Butchering:10,
    inputs
    {
        item 1 tags[base:sharpknife;base:meatcleaver] mode:keep flags[IsNotDull;SharpnessCheck],
        item 1 tags[base:uncutfish] flags[InheritFoodAge;ItemCount],
    }
    outputs
    {
        item 2 Base.FishFillet,
    }
}
```

---

## Fishing Skill

### Skill Books

| Book | Levels | Starting Level | Pages |
|------|--------|----------------|-------|
| BookFishing1 | 2 | 1 | 220 |
| BookFishing2 | 2 | 3 | 260 |
| BookFishing3 | 2 | 5 | 300 |
| BookFishing4 | 2 | 7 | 340 |
| BookFishing5 | 2 | 9 | 380 |

All books use `SkillTrained = Fishing` and `DisplayCategory = SkillBook`.

### Skill Effects

From `FishingUtils.lua`:

```lua
-- Skill-based size limits (max weight in kg)
Fishing.Utils.skillSizeLimit = {
    [0] = 1.4,  [1] = 1.5,  [2] = 1.9,  [3] = 2.2,  [4] = 2.3,
    [5] = 2.8,  [6] = 4.5,  [7] = 9,    [8] = 27,   [9] = 32,
    [10] = 45
}

-- Fish size chances by skill level (Small%, Medium%, Big%)
Fishing.Utils.fishSizeChancesBySkillLevel = {
    [0] = { 95, 5, 0 },
    [1] = { 85, 15, 0 },
    [2] = { 75, 24, 1 },
    [3] = { 70, 25, 5 },
    [4] = { 60, 30, 10 },
    [5] = { 48, 40, 12 },
    [6] = { 35, 45, 20 },
    [7] = { 25, 45, 30 },
    [8] = { 20, 40, 40 },
    [9] = { 15, 40, 45 },
    [10] = { 10, 40, 50 },
}
```

### Skill Level Effects

1. **Level 0-4**: Mostly small fish, limited species access
2. **Level 5+**: Trash catch reduced by 20%, medium fish more common
3. **Level 7+**: Trash catch reduced by 40%
4. **Level 8+**: Trophy fish possible (1 in 20 chance for "Legendary" size)
5. **Level 9+**: Trash catch reduced by 80%
6. **Strength Skill**: Increases reeling speed coefficient

### XP Gains

From `ISPickupFishAction.lua`:

```lua
function ISPickupFishAction:serverStart()
    local fishSize = self.item:getModData().fishing_FishSize
    if fishSize == nil then
        addXp(self.character, Perks.Fishing, 1)
    else
        addXp(self.character, Perks.Fishing, 2 * fishSize)
    end
end
```

---

## Foraging Integration

### Bait Items Found While Foraging

From `media/lua/shared/Foraging/Categories/Animals.lua`:

```lua
Worm = {
    type = "Base.Worm",
    minCount = 1,
    maxCount = 2,
    skill = 0,
    xp = 10,
    rainChance = 100,
    snowChance = -100,
    dayChance = -50,
    nightChance = 50,
    categories = { "FishBait" },
    zones = {
        BirchForest  = 1,
        DeepForest  = 5,
        Farm        = 10,
        FarmLand    = 10,
        ForagingNav = 5,
        Forest      = 5,
        OrganicForest = 10,
        TownZone    = 5,
        TrailerPark = 5,
        Vegitation  = 10,
    },
    months = { 3, 4, 5, 6, 7, 8, 9, 10, 11 },
    malusMonths = { 3, 4 },
}
```

### Other Forageable Bait

The game also includes Slug, Snail, and other animals that can be used as fishing bait through the `Fishing.lure` system.

---

## Spawn Distributions

### Fishing Stores

From `ProceduralDistributions.lua`:

```lua
FishingStoreBait = {
    isShop = true,
    rolls = 4,
    items = {
        "BaitFish", 50,
        "BaitFish", 20,
        "BaitFish", 20,
        "BaitFish", 10,
        "BaitFish", 10,
    },
}

FishingStoreGear = {
    isShop = true,
    rolls = 4,
    items = {
        -- Keys/Keyrings
        "KeyRing_Bass", 4,
        "KeyRing_PineTree", 4,
        -- Tools
        "FishingNet", 4,
        "FishingRod", 4,
        "KnifeFillet", 6,
        -- Accessories
        "Bobber", 10,
        "FishingHook", 10,
        "FishingHookBox", 2,
        "FishingLine", 8,
        "JigLure", 6,
        "PremiumFishingLine", 4,
        -- Clothing
        "Hat_BucketHatFishing", 8,
        -- Literature
        "BookFishing1", 10,
        "BookFishing2", 8,
        "BookFishing3", 6,
        "BookFishing4", 4,
        "BookFishing5", 2,
        "FishingMag1", 4,
        "FishingMag2", 4,
        -- Bags
        "Bag_FishingBasket", 4,
    },
}
```

### Other Spawn Locations

- **Warehouses**: FishingLine, FishingNet, FishingRod
- **CrateSeaweed**: Seaweed spawns
- **Garage**: Fishing hooks, lines
- **Hunting Stores**: Fishing gear, magazines
- **Fishing locations**: BaitFish, FishingNet, FishingRod

### Magazines in Loot

```
BookFishing1: 10 (bookstore), 6 (hunting store), 2 (general)
BookFishing2: 8 (bookstore), 4 (hunting store), 1 (general)
BookFishing3: 6 (bookstore), 2 (hunting store), 0.5 (general)
BookFishing4: 4 (bookstore), 1 (hunting store), 0.1 (general)
BookFishing5: 2 (bookstore), 0.5 (hunting store), 0.05 (general)
FishingMag1: 2 (various), 4 (fishing store)
FishingMag2: 2 (various), 4 (fishing store)
```

---

## Fishing Net Mechanics

### Fishing Net Items

```txt
item FishingNet
{
    DisplayCategory = Fishing,
    ItemType = base:normal,
    Weight = 1.0,
    Icon = FishTrap,
    SurvivalGear = true,
    WorldStaticModel = FishingNet,
    Tags = base:fishingnet,
}

item BrokenFishingNet
{
    DisplayCategory = Fishing,
    ItemType = base:normal,
    Weight = 1.0,
    Icon = FishTrapBroken,
    WorldStaticModel = BrokenFishingNet,
}
```

### Net Trapping Mechanics

From `media/lua/server/Fishing/BuildingObjects/FishingNet.lua`:

```lua
fishingNet.checkTrap = function(player, trap, hours)
    -- After 15 hours: 1 in 5 chance net breaks
    if hours > 15 and ZombRand(5) == 0 then
        -- Net breaks
    end
    
    -- Base catch: 1 in 8 chance per hour
    for i=1,hours do
        if ZombRand(8) == 0 then
            -- Catch random item from fishNet
        end
    end
    
    -- Baited catch: higher chance with chum
    if isBait then
        baitChance = 4 + (200 - baitAmount) / 25
        for i=1,hours do
            if ZombRand(baitChance) == 0 then
                -- Catch fish (catfish species when baited)
            end
        end
    end
end
```

### Net Catch Items

```lua
Fishing.fishNet = {
    "Base.BaitFish", "Base.Frog", "Base.Mussels", "Base.Seaweed",
    "Base.Crayfish", "Base.Tadpole"
}

Fishing.fishNetWithBait = {
    "Base.BaitFish", "Base.Tadpole", "Base.Crayfish",
    "Base.BlueCatfish", "Base.ChannelCatfish", "Base.FlatheadCatfish"
}
```

---

## Body of Water Mechanics

### River Zones

From `FishingZones.lua`:

```lua
Fishing.RiverZones = {
    {x1 = 0, y1 = 4639, x2 = 8055, y2 = 5775},
    {x1 = 7222, y1 = 4720, x2 = 9320, y2 = 7609},
    {x1 = 9320, y1 = 6025, x2 = 12685, y2 = 6634},
    {x1 = 11841, y1 = 4740, x2 = 14705, y2 = 7583},
    {x1 = 11378, y1 = 849, x2 = 12605, y2 = 4837},
    {x1 = 12493, y1 = 0, x2 = 19744, y2 = 1256},
}
```

### No-Fish Zones

```lua
Fishing.NoFishZones = {
    {x1 = 6351, y1 = 5243, x2 = 6363, y2 = 5258},
    {x1 = 12868, y1 = 1705, x2 = 12888, y2 = 1722},
    {x1 = 13701, y1 = 2761, x2 = 13717, y2 = 2781},
    {x1 = 13221, y1 = 3517, x2 = 13233, y2 = 3534},
    {x1 = 12756, y1 = 1252, x2 = 12768, y2 = 1270},
    -- Additional zones for various map areas
}
```

### Environmental Factors

From `FishingUtils.lua`:

```lua
-- Temperature effects
function Fishing.Utils.getTemperatureParams(player)
    local temperature = getClimateManager():getAirTemperatureForCharacter(player, false)
    if temperature >= 30 and temperature < 40 or temperature >= 0 and temperature < 15 then
        temperatureCoeff = 0.75  -- Reduced activity
    elseif temperature >= 40 or temperature > -10 and temperature < 0 then
        temperatureCoeff = 0.5   -- Very low activity
    elseif temperature <= -10 then
        temperatureCoeff = 0.25  -- Minimal activity
    end
end

-- Weather effects
function Fishing.Utils.getWeatherParams()
    if isFog or isWind then
        weatherCoeff = 0.8   -- Reduced
    elseif isRain then
        weatherCoeff = 1.2   -- Increased
    end
end

-- Time of day effects
function Fishing.Utils.getTimeParams()
    if (currentHour >= 4 and currentHour <= 6) or (currentHour >= 18 and currentHour <= 20) then
        timeCoeff = 1.2  -- Dawn/dusk: best fishing
    end
end
```

---

## Magazines & Literature

### Fishing Magazines

```txt
item FishingMag1
{
    DisplayCategory = RecipeResource,
    ItemType = base:literature,
    Weight = 0.5,
    Icon = MagazineFish,
    BoredomChange = -20,
    StressChange = -15,
    LearnedRecipes = MakeFishingRod;FixFishingRod;MakeChum,
}

item FishingMag2
{
    DisplayCategory = RecipeResource,
    ItemType = base:literature,
    Weight = 0.5,
    Icon = MagazineFish2,
    BoredomChange = -20,
    StressChange = -15,
    LearnedRecipes = MakeFishingNet;GetWireBack,
}
```

### Skill Books (see Fishing Skill section above)

---

## Related Items

### Clothing

```txt
item Hat_BucketHatFishing
{
    DisplayCategory = Memento,
    ItemType = base:clothing,
    Weight = 0.5,
    Icon = Hat_Fisherman,
    BodyLocation = base:hat,
}
```

### Containers

```txt
item Bag_FishingBasket
{
    DisplayCategory = Bag,
    ItemType = base:container,
    Weight = 1.5,
    Icon = FishingBasket,
    CanBeEquipped = base:back,
    Capacity = 6,
}

item Bag_Satchel_Fishing
{
    DisplayCategory = Memento,
    ItemType = base:container,
    Weight = 1.0,
    Icon = Satchel_Fishing,
    CanBeEquipped = base:satchel,
    Capacity = 12,
}
```

### Tools

```txt
item KnifeFillet
{
    DisplayCategory = CookingWeapon,
    ItemType = base:weapon,
    Weight = 0.7,
    Icon = KnifeFillet,
    AttachmentType = Knife,
    -- Used for slicing fish
}
```

### Fish Products

```txt
item FishFillet
{
    DisplayCategory = Food,
    ItemType = base:food,
    Weight = 0.2,
    Icon = FishFillet,
    BadInMicrowave = true,
}

item FishRoe
{
    DisplayCategory = Food,
    ItemType = base:food,
    Weight = 0.1,
    Icon = FishRoe,
    EvolvedRecipe = Salad:2;Sandwich:2;Soup:2;Toast:2,
}

item FishRoeSac
{
    DisplayCategory = Fishing,
    ItemType = base:food,
    Weight = 0.1,
    Icon = Fish_EggSack,
    IsCookable = false,
}

item Chum
{
    DisplayCategory = Fishing,
    ItemType = base:food,
    Weight = 0.5,
    Icon = chumball,
    UnhappyChange = 20,
}
```

---

## Technical Implementation

### Core Lua Files

| File | Purpose |
|------|---------|
| `media/lua/shared/Fishing/Fish.lua` | Fish catch logic, size calculations |
| `media/lua/shared/Fishing/FishingRod.lua` | Rod mechanics, tension, reeling |
| `media/lua/shared/Fishing/Bobber.lua` | Bobber behavior, fish attraction |
| `media/lua/shared/Fishing/FishingZones.lua` | River/no-fish zone definitions |
| `media/lua/shared/Fishing/FishingUtils.lua` | Utility functions, skill effects |
| `media/lua/shared/Fishing/fishing_properties.lua` | Fish configs, lure tables, coefficients |
| `media/lua/client/Fishing/FishingHandler.lua` | Client fishing state management |
| `media/lua/client/Fishing/FishingManager.lua` | Fishing UI and state machine |
| `media/lua/client/Fishing/FishingStates.lua` | Fishing states (Idle, Cast, Wait, Reel) |
| `media/lua/server/Fishing/BuildingObjects/FishingNet.lua` | Fishing net trap logic |

### Fishing States

1. **None** - Not fishing
2. **Idle** - Rod equipped, aiming at water
3. **Cast** - Casting line
4. **Wait** - Waiting for bite
5. **ReelIn** - Reeling in line
6. **ReelOut** - Releasing line
7. **PickupFish** - Collecting caught fish

### Key Timed Actions

- `ISPickupFishAction` - Picking up caught fish
- `ISChangeFishingRodEquip` - Changing line/hook
- `AIAttachLureAction` - Attaching bait/lure
- `ISPlaceFishingNetAction` - Placing fishing net
- `ISCheckFishingNetAction` - Checking net contents
- `AddChumToWaterAction` - Adding chum to attract fish

---

## File References

### Item Definitions
- `media/scripts/generated/items/weapon.txt` - FishingRod, CraftedFishingRod, KnifeFillet
- `media/scripts/generated/items/normal.txt` - Hooks, lures, nets, bobbers
- `media/scripts/generated/items/drainable.txt` - FishingLine, PremiumFishingLine, Twine
- `media/scripts/generated/items/food.txt` - Fish species, FishFillet, BaitFish
- `media/scripts/generated/items/container.txt` - Bag_FishingBasket, Bag_Satchel_Fishing
- `media/scripts/generated/items/literature.txt` - FishingMag1/2, BookFishing1-5

### Recipes
- `media/scripts/generated/recipes/recipes_fishing.txt` - Rod, net, chum recipes
- `media/scripts/generated/recipes/recipes_cooking.txt` - SliceFish recipe

### Distributions
- `media/lua/server/Items/ProceduralDistributions.lua` - Spawn tables

### Foraging
- `media/lua/shared/Foraging/Categories/Animals.lua` - Worm spawns

### Lua Scripts
- All files in `media/lua/shared/Fishing/`
- All files in `media/lua/client/Fishing/`
- All files in `media/lua/shared/TimedActions/Fishing/`

---

*Document generated from Project Zomboid Build 42.18 game files.*
*Last updated: July 2026*