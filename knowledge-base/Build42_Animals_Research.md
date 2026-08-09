# Build 42 — Animals & Husbandry System

> Research compiled from Project Zomboid Build 42.18 game files.
> Game root: `D:\Games\ProjectZomboid\ProjectZomboid\`
> All animal scripts/items/definitions live under `media/`

---

## Table of Contents

1. [Animal Types & Life Stages](#1-animal-types--life-stages)
2. [Breeds & Genetics](#2-breeds--genetics)
3. [Model System (models_animals.txt)](#3-model-system)
4. [AnimSets](#4-animsets)
5. [Items — Feeding & Tools](#5-items--feeding--tools)
6. [Animal Products](#6-animal-products)
7. [Husbandry Structures](#7-husbandry-structures)
8. [Animal Zones & Ranch Spawning](#8-animal-zones--ranch-spawning)
9. [Actions & Timed Actions](#9-actions--timed-actions)
10. [Butchering & Processing](#10-butchering--processing)
11. [Key Lua Files Reference](#11-key-lua-files-reference)

---

## 1. Animal Types & Life Stages

All definitions live in `media/lua/shared/Definitions/animal/`. Each animal type has a definitions file and is registered via `AnimalDefinitions`.

### 1.1 Chickens

**File:** `ChickenDefinitions.lua`

| Stage | Internal Name | Grows To | Time to Grow | Min → Max Weight |
|-------|--------------|----------|--------------|-----------------|
| Chick | `chick` | hen (F) / cockerel (M) | 18 weeks | 0.05 → 0.2 kg |
| Hen | `hen` | — (adult) | 12 months | — |
| Cockerel | `cockerel` | — (adult) | 12 months | — |

Key properties (hen):
- `bodyModel = "Chicken_Hen"` / `animset = "hen"`
- `eggsPerDay = 1` / `eggSize` gene
- `babyType = "chick"`
- `eatTypeTrough = "AnimalFeed,Grass,Hay,Vegetables,Fruits,Seeds,Nuts,Nut,Insect"`
- `hutches = "hutchhen,hutchturkey"` (enter at 20:00, exit at 07:00)
- `minEnclosureSize = 20`
- `canBePicked = true`, `canBeKilledWithoutWeapon = true`
- `dung = "Dung_Chicken"`
- `collidable = false`, `canThump = false`
- `trailerBaseSize = 20`

### 1.2 Sheep

**File:** `SheepDefinitions.lua`

| Stage | Internal Name | Grows To | Time to Grow | Min → Max Weight |
|-------|--------------|----------|--------------|-----------------|
| Lamb | `lamb` | ewe (F) / ram (M) | 6 months | 20 → 70 kg |
| Ewe | `ewe` | — | 12 months | 60 → 120 kg |
| Ram | `ram` | — | 12 months | — |

Key properties (ewe):
- `bodyModel = "Sheep_EweSheared"` / `bodyModelFleece = "Sheep_EweFleece"` (model swaps when wool regrows)
- `udder = true`, `canBeMilked = true`
- `minMilk = 5`, `maxMilk = 20`
- `maxWool = 20`
- `eatGrass = true`, `eatTypeTrough = "AnimalFeed,Grass,Hay,Vegetables,Fruits"`
- `milkAnimPreset = "Sheep"`
- `dung = "Dung_Sheep"`
- `corpseSize = 2.5`
- `pregnantPeriod = 147` days
- `minEnclosureSize = 40`
- `matingPeriodStart = 9` (September) / `matingPeriodEnd = 2` (February)
- `timeBeforeNextPregnancy = 3 * 4 * 7` (3 months)
- `canBeAttached = true` (tether with rope)
- `trailerBaseSize = 100`

### 1.3 Rabbits

**File:** `RabbitDefinitions.lua`

| Stage | Internal Name | Grows To | Time to Grow | Min → Max Weight |
|-------|--------------|----------|--------------|-----------------|
| Kitten | `rabkitten` | doe (F) / buck (M) | 4 months | 0.1 → 0.25 kg |
| Doe | `rabdoe` | — | 2 months | 0.25 → 0.5 kg |
| Buck | `rabbuck` | — | 2 months | 0.25 → 0.5 kg |

Key properties:
- `bodyModel = "RabKitten_Body"` / `animset = "rabkitten"`
- `canBePicked = true`, `canBeKilledWithoutWeapon = true`
- `eatFromMother = true` (kittens suckle)
- `dung = "Dung_Rabbit"`
- `wild = true` (rabbits can be wild)
- `luredPossibleItems`: HayTuft (30%), GrassTuft (50%), Carrots (70%)
- `trailerBaseSize = 50`
- `spottingDist = 9`

### 1.4 Other Animals

| Type | Files | Notes |
|------|-------|-------|
| Cow | `CowDefinitions.lua` | Angus, Simmental breeds; calf/steer stages |
| Bull | `CowDefinitions.lua` | Male adult; `bodyModel = "Bull_Body"` |
| Pig | `PigDefinitions.lua` | Boar/sow/piglet; `dung = "Dung_Pig"` |
| Turkey | `TurkeyDefinitions.lua` | Poult/hen/gobbler; `dung = "Dung_Turkey"` |
| Deer | `DeerDefinitions.lua` | Fawn/doe/stag (wild) |
| Rat | `RatDefinitions.lua` | Wild vermin |
| Mouse | `MouseDefinitions.lua` | Wild vermin |
| Raccoon | `RaccoonDefinitions.lua` | Wild |

---

## 2. Breeds & Genetics

### 2.1 Chicken Breeds (`ChickenDefinitions.lua`)

| Breed | Focus | Texture | featherItem |
|-------|-------|---------|-------------|
| `rhodeisland` | General | `chicken` / `cockerel` | `Base.ChickenFeather` |
| `leghorn` | Layers | `chicken_white` / `cockerel_white` | `Base.ChickenFeather` |

maxFeather = 100 for both.

### 2.2 Sheep Breeds (`SheepDefinitions.lua`)

| Breed | Focus | milkType | woolType | meatRatio | woolInc | maxWool | maxMilk |
|-------|-------|----------|----------|-----------|---------|---------|---------|
| `suffolk` | Meat | SheepMilk | WoolRaw | 0.75–0.95 | 0.2–0.5 | 0.2–0.5 | 0.05–0.2 |
| `rambouillet` | Wool | SheepMilk | WoolRaw | 0.3–0.6 | 0.6–0.85 | 0.7–0.85 | 0.05–0.2 |
| `friesian` | Dairy | SheepMilk | WoolRaw | 0.3–0.6 | 0.2–0.5 | 0.2–0.5 | 0.65–0.85 |

### 2.3 Rabbit Breeds (`RabbitDefinitions.lua`)

| Breed | Texture |
|-------|---------|
| `swamp` | `Rabbit_Swamp` |
| `appalachian` | `Rabbit_Appalachian` |
| `cottontail` | `Rabbit_Cottontail` (name field = "swamp" — likely bug) |

### 2.4 Genome System

Each species defines a set of genes (0.0–1.0 range) in `AnimalDefinitions.genome[species]`:

**Shared genes:** `maxSize`, `meatRatio`, `maxWeight`, `lifeExpectancy`, `resistance`, `strength`, `hungerResistance`, `thirstResistance`, `aggressiveness`, `ageToGrow`, `fertility`, `stress`

**Sheep-specific:** `maxMilk`, `milkInc`, `maxWool`, `woolInc`

**Chicken-specific:** `eggSize`

**Rabbit-specific:** `maxMilk`, `milkInc`

Breeds apply **forcedGenes** min/max constraints to inherited gene values.

---

## 3. Model System

**File:** `media/scripts/generated/models_animals.txt`

All animals use `shader = animalEffect` and skinned meshes:

| Model | Mesh | Animations Mesh | Key Attachments |
|-------|------|----------------|-----------------|
| `Chicken_Chick` | Skinned/Chicken_Chick | Chicken_Chick | head |
| `Chicken_Hen` | Skinned/Chicken_Hen | Chicken_Hen | head |
| `Chicken_Cockrel` | Skinned/Chicken_Cockrel | Chicken_Cockrel | head |
| `Sheep_Lamb` | Skinned/Sheep_Lamb | Sheep_Lamb | head |
| `Sheep_EweFleece` | Skinned/Sheep_EweFleece | Sheep_Ewe | **head, rightshear, leftshear, rightmilk, leftmilk**, head_hat, bowtie |
| `Sheep_EweSheared` | Skinned/Sheep_EweSheared | Sheep_Ewe | rightshear, leftshear, rightmilk, leftmilk, head, head_hat, bowtie |
| `Sheep_RamFleece` | Skinned/Sheep_RamFleece | Sheep_Ram | rightshear, leftshear, head, head_hat, bowtie |
| `Sheep_RamSheared` | Skinned/Sheep_RamSheared | Sheep_Ram | rightshear, leftshear, head, head_hat, bowtie |
| `RabKitten_Body` | Skinned/RabKitten_Body | Rabbit_Kitten | head |
| `Rab_Body` | Skinned/Rab_Body | Rabbit | head |
| `CowBody` | Skinned/CowBody | CowAndBull | rightmilk, leftmilk, head, head_hat, bowtie |
| `Bull_Body` | Skinned/Bull_Body | CowAndBull | head |
| `FarmPig_SowBody` | Skinned/FarmPig_SowBody | Pig_BoarAndSow | head, head_hat, bowtie |
| `FarmPig_BoarBody` | Skinned/FarmPig_BoarBody | Pig_BoarAndSow | head |
| `Turkey` / `Turkey_Poult` | Skinned/Turkey | Turkey | head, head_hat |
| `DeerStag` / `DeerDoe` / `DeerFawn` | Skinned/DeerStag etc. | Deer_Stag/Doe/Fawn | — |

Also defines **skeleton/headless variants** for carcass states: e.g. `Sheep_EweSkeleton`, `Chicken_Skeleton_NoHead`, `Rabbit_Skeleton`, etc.

---

## 4. AnimSets

AnimSet directories are named after the animal's internal `animset` field:

```
media/AnimSets/
├── chick/        — eating, hutch, idle, pathfind, walk, deadbody, etc.
├── hen/          — eating, hutch (default/idle1/dead), idle, walk, trailer, etc.
├── cockerel/     — attack, eating, hutch, idle, walk, etc.
├── ewe/          — eating, idle, walk, etc.
├── ram/          — eating, idle, walk, etc.
├── lamb/         — eating, feeding.xml, idle, walk, etc.
├── rabbit/       — idle, walk, etc.
├── rabkitten/    — (same structure)
├── cow/          — milking (milking.xml), eating, idle, walk
├── cowcalf/      — eating/feeding.xml
├── pig/          — eating, idle, walk
├── piglet/       — eating/feeding.xml
├── doe/ / buck/ / fawn/  — deer anims
├── mouse/ / rat/ — small animal anims
└── player/       — milkanimal/, shearanimal/, petanimal/ action groups
```

AnimSet XML structure (example `hen/hutch/default.xml`):
```xml
<animNode>
    <m_Name>default</m_Name>
    <m_AnimName>Chk_SatIdle01</m_AnimName>
    <m_BlendTime>0.20</m_BlendTime>
    <m_Conditions>
        <m_Name>HutchAnimation</m_Name>
        <m_Type>STRING</m_Type>
        <m_Value>sitting1</m_Value>
    </m_Conditions>
</animNode>
```

Animation condition nodes use STRING/BOOL/FLOAT types to drive state transitions.

---

## 5. Items — Feeding & Tools

### 5.1 Feed Items

| Item | File | Type | `AnimalFeedType` | Notes |
|------|------|------|-----------------|-------|
| `AnimalFeedBag` | `drainable.txt` | Drainable | `AnimalFeed` | Weight 4.0, UseDelta 0.01, replaces to EmptySandbag |
| `GrassBag` | `drainable.txt` | Drainable | `Grass` | Weight 2.0, UseDelta 0.2, replaces to EmptySandbag |
| `HayTuft` | `food.txt` | Food | `Grass` | Hunger -12, tags: isfirefuel, isfiretinder |
| `GrassTuft` | `food.txt` | Food | `Grass` | Hunger -7 |
| Seeds (various) | `food.txt` | Food | `Seeds` | Multiple crop seeds have AnimalFeedType = Seeds |

### 5.2 Tools

| Item | File | Type | Notes |
|------|------|------|-------|
| `SheepElectricShears` | `drainable.txt` | Drainable | Icon SheepShears_Electric; tags: shear, usesbattery; ConditionMax 20; UseDelta 0.002; |
| `AnimalMilkPowder` | `drainable.txt` | Drainable | For hand-feeding lambs/young |
| `Rope` | normal.txt | Normal | For tethering animals |

### 5.3 AnimalFeedType Enum

From `food.txt` entities: `AnimalFeedType` values seen:
- `AnimalFeed` — from AnimalFeedBag
- `Grass` — from HayTuft, GrassTuft, GrassBag
- `Seeds` — from crop seeds

### 5.4 Feeding through Troughs

The `eatTypeTrough` field on animal definitions controls what an animal will eat from a feeding trough:
- **Chickens:** `"AnimalFeed,Grass,Hay,Vegetables,Fruits,Seeds,Nuts,Nut,Insect"`
- **Sheep:** `"AnimalFeed,Grass,Hay,Vegetables,Fruits"`
- **Rabbits:** `"AnimalFeed,Grass,Hay,Vegetables,Fruits"` (commented-out in code)

---

## 6. Animal Products

### 6.1 Raw Products

| Product | Item ID | Source |
|---------|---------|--------|
| Raw Wool | `Base.WoolRaw` | Shearing sheep with SheepElectricShears |
| Sheep Milk | `fluid: SheepMilk` | Milking ewes (fluid system) |
| Cow Milk | `fluid: CowMilk` | Milking cows |
| Animal Milk | `fluid: AnimalMilk` | Generic milk fluid |
| Chicken Feather | `Base.ChickenFeather` | Butchering/plucking chickens |
| Turkey Feather | `Base.TurkeyFeather` | Butchering turkeys |
| Egg | `Base.Egg` | Hen laying (1/day base) |
| Turkey Egg | `Base.TurkeyEgg` | Turkey hen laying |
| Dung | `Base.Dung_Chicken/Sheep/Cow/...` | Animal manure, used as fertilizer |
| Blood | (fluid) | Gathered during butchering |

### 6.2 Processed Products

| Product | From | Recipe |
|---------|------|--------|
| Butter | CowMilk / SheepMilk | `churn_butter` (ChurnBucket, 500 time units) |
| Cheese | Milk | (various cooking recipes) |
| Yogurt | Milk | — |
| Thread | WoolRaw | `SpinThreadFromWool` (SpinningWheel, 300s) |
| Yarn | WoolRaw | `SpinYarnFromWool` (SpinningWheel, 300s) |
| Leather (Crude) | Animal hide | Butchering + tanning process |
| Tanned Leather | Crude leather | Tannin barrel → drying rack process |
| Leather Strips | Tanned leather | Cutting leather |
| Bone Items | AnimalBone/LargeAnimalBone | Carving recipes |

### 6.3 Butchering Parts

**AnimalPartsDefinitions** (`ButcheringUtil.lua` / `AnimalPartsDefinitions.lua`) maps each `[animaltype][breed]` to butchering loot tables.

Example — Hen (Rhode Island):
```
ChickenFoot × 2
ChickenWhole × 1
SmallAnimalBone × 4–6
ChickenFeather (max 100)
Chicken_Hen_Brown_Head × 1
Chicken_Hen_Skull × 1
```

Example — Ewe (Suffolk):
```
MuttonChop (min-max based on meatRatio & size)
AnimalBone/LargeAnimalBone
Sheepskin/Hide (for leather)
Sheep_Head (size-variant)
```

### 6.4 Leather Processing Pipeline

1. Butcher → `Leather_Crude_*` (S/M/L per animal size)
2. Tannin barrel → `Leather_Crude_*_Tan_Wet`
3. Drying rack → `Leather_Crude_*_Tan`
4. Softening beam → `CowLeather_*_Full` (or other species final leather)
5. Cut → `LeatherStrips` / `LeatherStripsBundle`

---

## 7. Husbandry Structures

### 7.1 Feeding Trough (`MOFeedingTrough` / `entity_feedingtrough.txt`)

Three variants:

| Entity | Style | Skill | Inputs |
|--------|-------|-------|--------|
| `FeedingTroughSimple` | ES_FeedingTroughSimple | Woodwork 1 | 2 Planks, 2 Nails |
| `FeedingTroughDouble` | ES_FeedingTroughDouble | Woodwork 3 | 4 Planks, 2 Nails |
| `FeedingTroughDoubleMetal` | ES_FeedingTroughDoubleMetal | MetalWelding 3 | 4 SheetMetal, 4 BlowTorch, 4 WeldingRods |

All use sprite sheet `location_farm_accesories_01_*`.
OnCreate = `BuildRecipeCode.feedingTrough.OnCreate`

### 7.2 Chicken Hutch (`MOHutch` / `entity_chickenhutch.txt`)

Two variants:

| Entity | Sprite | Skill | Inputs |
|--------|--------|-------|--------|
| `ChickenHutch` | 4 tiles (face W) | Woodwork 3 | 5 Planks, 5 Nails |
| `ChickenHutch2` | 4 tiles (face W) | Woodwork 3 | 5 Planks, 5 Nails |

**HutchDefinitions.lua** (`hutchhen`, `hutchturkey`):
- `maxAnimals = 20`
- `maxNestBox = 3` (0-indexed = 4 nest boxes)
- Requires `planks = 18`, `nails = 30`, `skill = 4`
- Configurable `enterSpotX/Y` (enter/exit tile)
- `extraSprites[]` — multi-tile rendering
- `eggHatchDoors[]` — egg collection hatches with open/closed sprites
- Base sprites: `location_farm_accesories_01_50` (hen) / `location_farm_accesories_01_66` (turkey)

TimedActions for huts: `ISToggleHutchDoor`, `ISToggleHutchEggHatchDoor`, `ISHutchGrabEgg`, `ISHutchCleanFloor`, `ISHutchCleanNest`, `ISHutchGrabAnimal`, `ISHutchGrabCorpseAction`, `ISPutAnimalInHutch`.

### 7.3 Butcher Hook (`entity_butcher_hook.txt`)

| Entity | Style | Skill | Inputs |
|--------|-------|-------|--------|
| `ButcherHook` | ES_ButcherHook | Woodwork 3 | 2 Planks, 2 Nails, 1 LargeHook |

- `uiEnabled = true` (has UI)
- Opens `ISButcherHookUI` via `ContextMenuCode.OnButcherHook`
- Built with `ISButcheringHook` cursor tool
- Holds animal carcasses for disassembly

### 7.4 Skull Pole Sheep

`entity_skull_polesheep.txt` / `entity_skull_polesheep_xuiSkin.txt` — decorative display.

### 7.5 Other Workshop Items

From `craftRecipes/`:
- **Spinning Wheel** — `recipes_spinning_wheel.txt`: SpinThreadFromWool, SpinYarnFromWool, SpinThreadFromFlax
- **Butter Churn** — `recipes_butter_churn.txt`: churn_butter (uses ChurnBucket, CowMilk or SheepMilk → Butter)

---

## 8. Animal Zones & Ranch Spawning

### 8.1 RanchZone Definitions

**File:** `RanchZoneDefinitions.lua`

Defines presets for map animal spawns as "ranches":

| Zone Type | Animals | Female:Male | Chance | Notes |
|-----------|---------|-------------|--------|-------|
| `chicken` | hen + cockerel | 4–10 : 1 | 20 | Standard ranch |
| `chickensmall` | hen only | 1–5 : 0 | 20 | Backyard coop |
| `chickenbig` | hen + cockerel | 10–20 : 1 | 20 | Large operation |
| `sheep` | ewe + ram | 1–3 : 1 | 7 | — |
| `sheepbig` | ewe + ram | 5–10 : 1 | 7 | — |
| `pig` / `pigsmall` / `piglarge` / `pigonlyone` | sow + boar | varies | 5/5/5/1 | — |

Each entry defines: `femaleType`, `maleType`, `min/maxFemaleNb`, `min/maxMaleNb`, `chanceForBaby` (%), `forcedBreed` (optional).

### 8.2 Map Zone Registration

**File:** `metazoneHandler.lua`

Map `objects.lua` entries with `type = "Animal"` are registered via `getWorld():registerAnimalZone()`. Simple zones use x/y/z/width/height; geometry zones use `v.geometry` + `v.points`.

### 8.3 Designation Zones (Player-Made)

**File:** `ISDesignationAnimalZoneUI.lua`, `ISAnimalZoneFirstInfo.lua`

Players can create animal zones to confine animals to a fenced area. The zone UI shows animals in the zone, lets players assign animals to zones, and tracks hutch assignments.

---

## 9. Actions & Timed Actions

### 9.1 Player ↔ Animal Actions

| TimedAction Lua | Purpose |
|----------------|---------|
| `ISPetAnimal` | Pet/stroke animal (reduces stress) |
| `ISMilkAnimal` | Milk cows/sheep (uses milkAnimPreset) |
| `ISShearAnimal` | Shear sheep wool (uses SheepElectricShears) |
| `ISFeedAnimalFromHand` | Hand-feed animals |
| `ISGiveWaterToAnimal` | Give water |
| `ISKillAnimal` / `ISKillAnimalInInventory` | Dispatch animals |
| `ISButcherAnimal` | Butcher on ground |
| `ISCutAnimalOnHook` | Butcher on hook |
| `ISRemoveMeatFromAnimal` | Remove meat parts |
| `ISRemoveLeatherFromAnimal` | Remove hide |
| `ISRemoveHeadFromAnimal` | Remove head |
| `ISGetAnimalBones` | Collect bones from skeleton |
| `ISGatherBloodFromAnimal` | Collect blood |
| `ISAttachAnimalToPlayer` | Tie rope to player (lead) |
| `ISAttachAnimalToTree` | Tie to tree |
| `ISLureAnimal` | Lure with food items |
| `ISInspectAnimalTrackAction` | Track/inspect animal tracks |
| `ISOpenAnimalInfo` | Open animal info panel |
| `ISCheckAnimalInsideTrailer` | Check trailer contents |
| `ISPickupDung` | Collect dung with rake |
| `ISScything` | Cut grass (for forage) |

### 9.2 Hutch Actions

| TimedAction | Purpose |
|-------------|---------|
| `ISToggleHutchDoor` | Open/close hutch door |
| `ISToggleHutchEggHatchDoor` | Open/close egg hatch |
| `ISHutchGrabEgg` | Collect eggs from nest box |
| `ISHutchCleanFloor` | Clean hutch floor |
| `ISHutchCleanNest` | Clean nest boxes |
| `ISHutchGrabAnimal` | Remove animal from hutch |
| `ISHutchGrabCorpseAction` | Remove dead animal from hutch |
| `ISPutAnimalInHutch` | Place animal in hutch |

### 9.3 Trailer Actions

| TimedAction | Purpose |
|-------------|---------|
| `ISAddAnimalInTrailer` | Load animal into vehicle trailer |
| `ISRemoveAnimalFromTrailer` | Unload animal from trailer |

### 9.4 Action Groups (Animation Overlays)

Player action groups for animal interactions:
- `petanimal/` — petting animations
- `milkanimal/` — milking (milkCowL/R, milkSheepL/R)
- `shearanimal/` — shearing animations

Found in `media/actiongroups/player/` under subdirs: `actions/`, `aim/`, `aim-sneak/`, `collide/`, `fishing/`, `fitness/`, `getup/`, `idle/`, `melee/`, `movement/`, `onbed/`, `openwindow/`, `ranged/`, `run/`, `shove/`, `sitonground/`, etc.

---

## 10. Butchering & Processing

### 10.1 Ground Butchering

`ISButcherAnimal.lua` + `ButcheringUtil.butcherAnimalFromGround()`:
1. Check carcass modData for available parts (`modData.parts`)
2. Iterate `AnimalPartsDefinitions[fullName].parts[]` spawning items
3. Apply `meatRatio`, `corpseSize`, Butchering skill multipliers
4. Collect leather, head, bones, feathers as applicable
5. Award Butchering XP (varies by animal: 3–15 per item)

### 10.2 Hook Butchering

`ISButcherHookUI.lua` — Full UI for disassembling hanging carcasses:
- Remove meat, leather, head, bones, organs, blood individually
- Each part removal is a separate timed action

### 10.3 Dung Collection

`ISPickDungCursor.lua` (server) — Area-rake dung from ground:
- Variable radius (default 3×3, max 3)
- Uses rake tool
- Produces dung items categorized by animal type

---

## 11. Key Lua Files Reference

| Path | Purpose |
|------|---------|
| `shared/Definitions/animal/ChickenDefinitions.lua` | Chicken stages, breeds, genome, animal defs |
| `shared/Definitions/animal/SheepDefinitions.lua` | Sheep stages, breeds (suffolk, rambouillet, friesian), genome |
| `shared/Definitions/animal/RabbitDefinitions.lua` | Rabbit stages, breeds (swamp, appalachian, cottontail) |
| `shared/Definitions/animal/CowDefinitions.lua` | Cow/bull/calf definitions |
| `shared/Definitions/animal/PigDefinitions.lua` | Pig definitions |
| `shared/Definitions/animal/TurkeyDefinitions.lua` | Turkey definitions |
| `shared/Definitions/animal/DeerDefinitions.lua` | Deer (wild) definitions |
| `shared/Definitions/animal/RatDefinitions.lua` | Rat (wild) definitions |
| `shared/Definitions/animal/MouseDefinitions.lua` | Mouse (wild) definitions |
| `shared/Definitions/animal/RaccoonDefinitions.lua` | Raccoon (wild) definitions |
| `shared/Definitions/animal/HutchDefinitions.lua` | Hutch construction & sprite defs |
| `shared/Definitions/animal/RanchZoneDefinitions.lua` | Ranch spawn presets |
| `shared/Definitions/animal/ButcheringUtil.lua` | Butchering logic & animal body data |
| `shared/Definitions/animal/AnimalPartsDefinitions.lua` | Butchering part loot tables |
| `shared/Definitions/animal/AnimalAvatarDefinition.lua` | UI avatar settings |
| `shared/Definitions/animal/AnimalGenomeDefinitions.lua` | Genome gene definitions |
| `shared/Definitions/animal/AnimalTracksDefinitions.lua` | Animal track definitions |
| `shared/Definitions/animal/MigrationGroupDefinitions.lua` | Migration group definitions (wild) |
| `shared/TimedActions/Animals/*.lua` | All animal interaction timed actions |
| `client/ISUI/Animal/ISAnimalUI.lua` | Animal info panel (type, breed, gender, age, health, weight, clutch, egg period, fertility) |
| `client/ISUI/Animal/ISAnimalContextMenu.lua` | Right-click context menu for animals |
| `client/ISUI/Animal/ISDesignationAnimalZoneUI.lua` | Zone management UI |
| `client/ISUI/Animal/ISButcherHookUI.lua` | Butcher hook disassembly UI |
| `client/ISUI/Animal/ISAnimalGenomeUI.lua` | Genome debug UI |
| `client/ISUI/Animal/ISAnimalTracksUI.lua` | Track inspection UI |
| `server/Animal/ISPickDungCursor.lua` | Dung rake cursor tool |
| `server/Animal/ISScytheGrassCursor.lua` | Grass scythe cursor tool |
| `server/BuildingObjects/ISHutch.lua` | Hutch building cursor |
| `server/BuildingObjects/ISButcheringHook.lua` | Butcher hook building cursor |
| `server/metazones/metazoneHandler.lua` | Animal zone registration from map files |

---

## Appendix: File Paths (generated scripts)

| File | Contents |
|------|----------|
| `generated/models_animals.txt` | All animal 3D model definitions |
| `generated/models_items_animals.txt` | Animal-related item models |
| `generated/items/animal.txt` | Base Animal item type |
| `generated/items/drainable.txt` | AnimalFeedBag, GrassBag, SheepElectricShears, AnimalMilkPowder |
| `generated/items/food.txt` | HayTuft, GrassTuft, Egg, Butter, Cheese, meat, dung, feathers, animal parts |
| `generated/items/normal.txt` | WoolRaw, Leather_* (crude/tan), LeatherStrips, Yarn |
| `generated/entities/animals/workstations/entity_feedingtrough.txt` | Feeding trough entities |
| `generated/entities/animals/workstations/entity_chickenhutch.txt` | Chicken hutch entities |
| `generated/entities/animals/workstations/entity_butcher_hook.txt` | Butcher hook entity |
| `generated/entities/animals/craftRecipes/recipes_spinning_wheel.txt` | Spinning wheel recipes |
| `generated/entities/animals/craftRecipes/recipes_butter_churn.txt` | Butter churn recipe |
| `generated/sounds/animals/` | Per-animal sound definitions |
| `generated/fluids.txt` | CowMilk, SheepMilk, AnimalMilk fluid definitions |

---

## Notes for Modders

1. **Adding a new breed**: Add to `AnimalDefinitions.breeds[species].breeds{}`, define `forcedGenes` ranges, set texture names and icons.
2. **Adding a new animal type**: New definitions file in `shared/Definitions/animal/`, register stages, breeds, genome, animal defs, and butchering parts.
3. **Custom models**: Add to `models_animals.txt` with `shader = animalEffect`, skinned mesh, and attachment points for head/shear/milk.
4. **Custom AnimSets**: Create directory under `media/AnimSets/` matching `animset` field, with XML animation state machines.
5. **Feeding**: Items need `AnimalFeedType` property matching the animal's `eatTypeTrough` string list.
6. **Husbandry structures**: Define new entities in `generated/entities/animals/workstations/`; add `BuildRecipeCode.OnCreate` handler; optionally add `HutchDefinitions.lua` entry.
