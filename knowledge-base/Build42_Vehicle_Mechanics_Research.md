---
title: "Build 42 Vehicle Mechanics — Full Research"
build: "42.20"
source: "Project Zomboid Build 42 (v42.20.0) media/scripts/generated/vehicles/ and media/lua/Vehicles/"
tags: [pz, modding, build42, vehicles, mechanics]
---

# Build 42 Vehicle Mechanics — Full Research

> **Game:** Project Zomboid Build 42 (v42.20.0)
> **Source:** `D:\Games\ProjectZomboid\ProjectZomboid\media\scripts\generated\vehicles\`, `media\lua\server\Vehicles\`, `media\lua\shared\Vehicles\`, `media\lua\client\Vehicles\`
> **Date:** 2026-07-30

---

## 1. Vehicle Part Templates

All vehicle parts are defined in `.txt` script files under `media/scripts/generated/vehicles/`. Templates use a Lua-style syntax within `module Base { }` blocks.

### 1.1 Template: `Engine` (`template_engine.txt`)

```
template vehicle Engine
    part Engine
        mechanicArea = Engine
        area = Engine
        category = engine
        mechanicRequireKey = true     # requires key to access
        durability = 10              # base condition scaling
        lua create  = Vehicles.Create.Engine
        lua update  = Vehicles.Update.Engine
        lua checkEngine = Vehicles.CheckEngine.Engine
```

- **No `table install` / `table uninstall`** — the engine cannot be removed by the player (permanent part).
- `durability = 10` is a base scaling factor, not in-game condition points.
- Engine quality, loudness, and power are set via `vehicle:setEngineFeature()` on creation.

### 1.2 Template: `Battery` (`template_battery.txt`)

```
part Battery
    mechanicArea = Engine, area = Engine
    itemType = Base.CarBattery
    mechanicRequireKey = true
    category = engine
    durability = 2
    table install
        items: screwdriver (kept, equip primary)
        time = 100 (ticks)
        test = Vehicles.InstallTest.Default
        door = EngineDoor                     # engine hood must be opened
    table uninstall
        items: screwdriver
        time = 100
        test = Vehicles.UninstallTest.Battery
    lua create  = Vehicles.Create.Battery
    lua update  = Vehicles.Update.Battery
```

- Charged by the running engine: `charge += elapsedMinutes * 0.001` (per minute).
- Initial charge depends on `VehicleEasyUse` sandbox and world age.
- Single battery type (`Base.CarBattery`).

### 1.3 Template: `Tire` (`template_tire.txt`)

4 part slots: `TireFrontLeft`, `TireFrontRight`, `TireRearLeft`, `TireRearRight`.

```
part Tire*  (applies to all 4 via wildcard)
    category = tire
    itemType = Base.OldTire;Base.NormalTire;Base.ModernTire
    durability = 2
    container
        test = Vehicles.ContainerAccess.Tire
        contentType = Air                        # tire pressure storage
    table install
        requireInstalled = Brake*;Suspension*    # brakes+shocks must be on first
        items: Jack + LugWrench (both kept)
        time = 400
        skills = Mechanics:1
        complete = Vehicles.InstallComplete.Tire
    table uninstall
        items: Jack + LugWrench
        time = 400
        skills = Mechanics:1
        complete = Vehicles.UninstallComplete.Tire
    lua:
        create = Vehicles.Create.Tire
        init = Vehicles.Init.Tire
        checkOperate = Vehicles.CheckOperate.Tire (always returns true)
        update = Vehicles.Update.Tire
```

- Tire pressure `Air` container — loses air over time, can go flat.
- Blowouts happen when pressure < 5 or condition < 15.
- 3 item tiers: `OldTire`, `NormalTire`, `ModernTire`.

### 1.4 Template: `Brake` (`template_brake.txt`)

4 slots: `BrakeFrontLeft`, `BrakeFrontRight`, `BrakeRearLeft`, `BrakeRearRight`.

```
part Brake*
    category = brakes
    itemType = Base.OldBrake;Base.NormalBrake;Base.ModernBrake
    durability = 3
    table install/uninstall
        requireUninstalled = Tire*     # must remove tire first
        items: Jack + Wrench
        time = 300
        skills = Mechanics:3
        recipes = Basic Mechanics
    lua update = Vehicles.Update.Brakes
```

- Brake condition degrades during braking: `speedMod = min(80, speed)/20`, chance to drop by 1 per brake event.
- 3 item tiers: `OldBrake`, `NormalBrake`, `ModernBrake`.

### 1.5 Template: `Suspension` (`template_suspension.txt`)

4 slots: `SuspensionFrontLeft`, `SuspensionFrontRight`, `SuspensionRearLeft`, `SuspensionRearRight`.

```
part Suspension*
    category = suspension
    itemType = Base.NormalSuspension;Base.ModernSuspension
    durability = 5
    table install/uninstall
        requireUninstalled = Tire*
        items: Jack + Wrench
        time = 300
        skills = Mechanics:3
        recipes = Basic Mechanics
    lua update = Vehicles.Update.Suspension
```

- Condition degradation via `Vehicles.LowerCondition()` — depends on speed, steering, offroad state.
- 2 tiers: `NormalSuspension`, `ModernSuspension`.

### 1.6 Template: `Muffler` (`template_muffler.txt`)

```
part Muffler
    mechanicArea = Under, area = TruckBed
    itemType = OldCarMuffler;NormalCarMuffler;ModernCarMuffler
    category = engine
    durability = 3
    table install/uninstall
        items: Wrench
        time = 500
        skills = Mechanics:5
        recipes = Basic Mechanics
        door = EngineDoor
    lua update = Vehicles.Update.Muffler
```

- Condition degrades via `Vehicles.LowerCondition()`.
- Highest skill requirement (Mechanics 5) among installable parts.
- 3 tiers: `OldCarMuffler`, `NormalCarMuffler`, `ModernCarMuffler`.

### 1.7 Template: `Door` (`template_door.txt`)

Multiple named slots: `DoorFrontLeft`, `DoorFrontRight`, `DoorMiddleLeft`, `DoorMiddleRight`, `DoorRearLeft`, `DoorRearRight`, `DoorRear`.

```
part Door*
    category = door
    durability = 5
    mechanicRequireKey = true
    door { }                               # door physics component
    itemType = FrontCarDoor / RearCarDoor / RearCarDoorDouble
    table install/uninstall
        items: Wrench
        time = 300
        skills = Mechanics:4
        recipes = Basic Mechanics
    lua create = Vehicles.Create.Door
    lua init  = Vehicles.Init.Door
    lua use   = Vehicles.Use.Door
```

- Windows must be uninstalled before doors can be uninstalled (`requireUninstalled = Window*`).
- `DoorRear` uses `Vehicles.Create.TrunkDoor` / `Vehicles.Update.TrunkDoor` / `Vehicles.Use.TrunkDoor`.
- Lock state set in `Vehicles.Create.Door` based on `SandboxVars.LockedCar` chance table (0–80%).

### 1.8 Template: `Seat` (`template_seat.txt`)

Named slots: `SeatFrontLeft`, `SeatFrontRight`, `SeatMiddleLeft`, `SeatMiddleRight`, `SeatRearLeft`, `SeatRearRight`.

```
part Seat*
    category = seat
    itemType = Base.NormalCarSeat
    mechanicRequireKey = true
    durability = 3
    container
        test = Vehicles.ContainerAccess.Seat
        soundMap = ContainerPut/ContainerTake VehicleCarseatTransferItem
    table install/uninstall
        items: Screwdriver
        time = 300
        skills = Mechanics:1
        recipes = Basic Mechanics
        requireEmpty = true (uninstall)
```

### 1.9 Other Templates

| Template | Item Types | Skills | Time | Notes |
|----------|-----------|--------|------|-------|
| `template_window.txt` | CarWindow | — | — | Windscreen/window glass |
| `template_windshield.txt` | CarWindshield | — | — | Front/rear windshield |
| `template_gastank.txt` | SmallGasTank / NormalGasTank / BigGasTank | Varies by vehicle | Varies | Fuel storage container |
| `template_headlight.txt` | CarHeadlight | — | — | Headlight bulbs |
| `template_radio.txt` | Radio | — | — | Standard car radio |
| `template_radio_HAM.txt` | HAMRadio | — | — | Two-way radio |
| `template_heater.txt` | CarHeater (no item) | — | — | Heater/AC |
| `template_glovebox.txt` | GloveBox | — | — | Small storage compartment |
| `template_lightbar.txt` | Lightbar | — | — | Emergency lights/siren |
| `template_trunk.txt` / `template_trunk_door.txt` | Small/Normal/BigTrunk, TrunkDoor | — | — | Cargo storage |
| `template_passenger.txt` / `template_passenger_compartment.txt` | — | — | — | Passenger area (temperature) |

---

## 2. Vehicle Templates (Complete Vehicles)

Each vehicle type has a `_template.txt` that defines its complete configuration. Templates use `template! = Name` to reference a type base, then define all parts and physics.

### 2.1 `CarNormal` (`vehicle_car_normal_template.txt`)

| Property | Value |
|----------|-------|
| `mechanicType` | 1 (standard) |
| `engineRepairLevel` | 4 |
| `playerDamageProtection` | 1.0 |
| `mass` | 800 |
| `engineForce` | 4000 |
| `maxSpeed` | 90.0 |
| `engineLoudness` | 80 |
| `engineQuality` | 70 |
| `brakingForce` | 90 |
| `gearRatioCount` | 4 (ratios: 3.6, 2.2, 1.3, 1.0, R: 4.7) |
| `suspensionStiffness` | 40.0 |
| `wheelFriction` | 1.4 |
| `frontEndHealth` / `rearEndHealth` | 150 / 150 |
| `seats` | 4 |
| Parts | Engine, Battery, Muffler, Tires(4), Brakes(4), Suspension(4), Door(4), Window(4), Windshield(2), GasTank, Seats(4), GloveBox, Radio, Heater, EngineDoor, Headlights, PassengerCompartment |
| Trunk | NormalTrunk, capacity = 40 |

### 2.2 `CarLuxury` (`vehicle_car_luxury_template.txt`)

| Property | Value |
|----------|-------|
| `mechanicType` | 1 |
| `engineRepairLevel` | 4 |
| `mass` | 750 |
| `engineForce` | 4200 |
| `maxSpeed` | 95.0 |
| `engineLoudness` | 70 |
| `engineQuality` | 80 |
| `brakingForce` | 100 |
| `seats` | 2 (PassengerSeat2 template) |
| `wheelFriction` | 1.3 |
| `specialKeyRing` | `Base.KeyRing_WestMaple` |

### 2.3 `OffRoad`/Jeep (`vehicle_offroad_template.txt`)

| Property | Value |
|----------|-------|
| `mechanicType` | 1 |
| `engineRepairLevel` | 4 |
| `playerDamageProtection` | 0.8 (less protection) |
| `offRoadEfficiency` | 1.3 (bonus offroad) |
| `mass` | 900 |
| `engineForce` | 4400 |
| `maxSpeed` | 90.0 |
| `engineLoudness` | 90 (louder) |
| `engineQuality` | 70 |
| `brakingForce` | 90 |
| `seats` | 2 |
| `wheelFriction` | 1.6 (better grip) |
| `suspensionStiffness` | 30.0 (softer) |
| `stoppingMovementForce` | 2.0 |
| Uses `SoundsJeep` template |

### 2.4 `StepVan` (`vehicle_stepvan_template.txt`)

| Property | Value |
|----------|-------|
| `mechanicType` | 2 (heavy) |
| `engineRepairLevel` | 5 |
| `playerDamageProtection` | 1.1 |
| `mass` | 1160 (heaviest common vehicle) |
| `engineForce` | 3700 |
| `maxSpeed` | 70.0 (slow) |
| `engineLoudness` | 100 (very loud) |
| `engineQuality` | 70 |
| `brakingForce` | 60 (poor brakes) |
| `seats` | 2 |
| `wheelFriction` | 1.8 |
| `isSmallVehicle` = false |
| Trunk: **BigTrunk, capacity = 160** (largest standard storage) |
| Requires **Intermediate Mechanics** for many parts |
| GasTank install requires **Mechanics 7** |

### 2.5 `Trailer` (`vehicle_trailer.txt`)

| Property | Value |
|----------|-------|
| `neverSpawnKey` = true |
| `mechanicType` = 1 |
| `offRoadEfficiency` = 0.8 |
| `engineRepairLevel` = 4 |
| `specialLootChance` = 100 |
| `mass` = 200 |
| `engineForce` = 3600 (towed, not self-powered) |
| `maxSpeed` = 70.0 |
| `wheelFriction` = 4.0 (high grip) |
| Parts: TrailerTrunk (trunk container), Tires(2), Suspension(2) |

### 2.6 Other Vehicle Templates

| Template | Key Trait | Mass | Engine Force | Max Speed |
|----------|-----------|------|-------------|-----------|
| `CarSmall` | Compact/light | 700 | 3800 | 85.0 |
| `CarModern` | Modern sedan | 800 | 4100 | 92.0 |
| `CarSports` | High speed | 650 | 4800 | 120.0 |
| `CarStationWagon` | Family wagon | 850 | 3900 | 85.0 |
| `PickupTruck` | Utility | 900 | 4200 | 85.0 |
| `PickupVan` | Light van | 950 | 4000 | 80.0 |
| `SUV` | Sport utility | 1000 | 4300 | 88.0 |
| `Van` | Heavy van | 1050 | 3600 | 75.0 |

---

## 3. The Mechanics Skill

### Skill Levels

| Level | Unlocks |
|-------|---------|
| 1 | Tire install/uninstall |
| 2 | Seat install/uninstall (most vehicles), General repairs |
| 3 | Brake install/uninstall, Suspension install/uninstall, Hotwiring (with Electricity 1) |
| 4 | Door install/uninstall, Engine repair (CarNormal) |
| 5 | Muffler install/uninstall, Engine repair (StepVan) |
| 7 | GasTank install/uninstall (StepVan) |

### Install/Uninstall Success Calculation

From `ISInstallVehiclePart:complete()`:
```lua
local success, failure = VehicleUtils.calculateInstallationSuccess(perks, character, perksTable)
if ZombRand(100) < success then
    -- install succeeds, part is placed
elseif ZombRand(100) < failure then
    -- failure: item loses 5-10 condition, makes metal snap sound
else
    -- neutral: item returned to inventory, no damage
end
```

- `perks` is the `skills` table from the part's install definition (e.g. `Mechanics:3`).
- `perksTable` maps skill names to `character:getPerkLevel()`.
- On success, XP is granted.
- `character:addMechanicsItem(...)` prevents multiple XP grants per vehicle session.

### Time Reduction

Install/uninstall time is reduced by skill:
```lua
time = time - (playerObj:getPerkLevel(Perks.Mechanics) * (time/15))
```

---

## 4. Key Timed Actions

### 4.1 `ISInstallVehiclePart`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISInstallVehiclePart.lua`
- **Animation:** `VehicleWorkOnTire` (wheels/brakes) or `VehicleWorkOnMid` (other parts)
- **Checks:** `vehicle:canInstallPart()`, inventory contains the item
- **On complete:** Removes item from inventory, calls `calculateInstallationSuccess()`, sets part to installed item if successful, calls `install.complete` Lua callback if defined, transmits to server.

### 4.2 `ISFixVehiclePartAction`

- **File:** `media/lua/shared/TimedActions/ISFixVehiclePartAction.lua`
- **Duration:** 60 ticks (fixed)
- **On complete:** Calls `FixingManager.fixItem()`, syncs condition back to vehicle part, transmits.
- The actual repair logic is driven by the `fixing` script tables in `vehiclesfixing.txt`.

### 4.3 `ISRepairEngine`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISRepairEngine.lua`
- **Animation:** `VehicleWorkOnMid`
- **Requirements:** Wrench, Mechanics >= `engineRepairLevel`, EngineParts in inventory
- **Formula:**
  - `skill = playerMechanics - vehicle:getScript():getEngineRepairLevel()`
  - `condPerPart = max(1 + skill/2, 5)` (capped at 5 per part)
  - Each `EngineParts` consumed restores `condPerPart` condition
  - XP = number of parts consumed (one-time per vehicle)
- **Duration:** Variable (`maxTime`)

### 4.4 `ISTakeEngineParts`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISTakeEngineParts.lua`
- **Purpose:** Salvage engine for parts (reduces engine condition to 0)
- **Formula:**
  - `skill = playerMechanics - engineRepairLevel`
  - `condForPart = max(20 - skill, 5)`, randomized by `/3` to full value
  - `numParts = floor(engineCondition / condForPart)`
  - Creates `Base.EngineParts` items equal to `numParts`
- **Requirements:** Wrench, Mechanics >= engineRepairLevel, Engine condition > 10

### 4.5 `ISAddGasolineToVehicle`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISAddGasolineToVehicle.lua`
- **Duration:** `take * 25` (ticks per litre)
- Uses fluid containers, animated with `refuelgascan` animation.
- Chains through multiple containers automatically.

### 4.6 `ISTakeGasolineFromVehicle` (Siphon)

- **File:** `media/lua/shared/Vehicles/TimedActions/ISTakeGasolineFromVehicle.lua`
- **Requirements:** Empty or partially-full container + siphon hose (`ItemTag.SIPHON_GAS`)
- **Duration:** `take * 50` (ticks per litre — slower than filling)
- Transfer rate respects inventory capacity (`ZomboidGlobals.EquippedOrWornEncumbranceMultiplier`).

### 4.7 `ISHotwireVehicle`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISHotwireVehicle.lua`
- **Requirements:** Electricity 1 + Mechanics 2 (or Burglar trait), or Electricity 2 + Mechanics 3 for the menu option

### 4.8 `ISSmashVehicleWindow`

- **File:** `media/lua/shared/Vehicles/TimedActions/ISSmashVehicleWindow.lua`
- Destroys the window part, removes it — allows access to interior/locked doors.

---

## 5. Vehicle Distributions (Loot)

**File:** `media/lua/server/Vehicles/VehicleDistributions.lua`

### Distribution Types

| Table Name | Contents |
|-----------|----------|
| `GloveBox` | Junk items only (ClutterTables.GloveBoxJunk) |
| `TrunkStandard` | 1 roll + NormalTire1 (50%) + junk |
| `TrunkHeavy` | 1 roll + Cooler_Beer (10%), NormalTire2 (50%) + junk |
| `TrunkSports` | 1 roll + Cooler (10%), HottieZ (4), NormalTire3 (50%), trophies + junk |
| `DriverSeat` | 1 roll + 1% corpse spawn + junk |
| `Seat` | 1 roll + junk (ClutterTables.SeatFrontJunk) |
| `SeatRear` | 1 roll + junk (ClutterTables.SeatRearJunk) |
| `LuxuryGloveBox` | 1 roll — rich items: money, stocks, credit cards, expensive gadgets, pistol |
| `LuxuryTruckBed` | 4 rolls — golf bag, saxophone, violin, wine, whiskey, NormalTire3 |
| `LuxurySeat` | 1 roll — flute/sax/trumpet cases, cigars, book_rich |

### Vehicle-Level Mappings

```
NormalStandard:
    TruckBed → TrunkStandard
    GloveBox → GloveBox
    SeatFrontLeft → DriverSeat
    SeatFrontLeft → Seat
    SeatRearLeft → SeatRear
    SeatRearRight → SeatRear
```

Additional junk distribution files:
- `VehicleDistribution_GloveBoxJunk.lua`
- `VehicleDistribution_SeatJunk.lua`
- `VehicleDistribution_TrunkJunk.lua`

---

## 6. Fuel System

### Gas Tank Creation (`Vehicles.Create.GasTank`)

- **ChanceHasGas:** 45% default, 20% (low), 95% (high)
- **InitialGas (if gas present):**
  - Low: 1 to `capacity/5`
  - Medium: 1 to `capacity/4`
  - High: `capacity/2` to full
- **Good cars** (pre-apocalypse): `capacity/1.5` to full

### Fuel Consumption (`Vehicles.Update.GasTank`)

```lua
gasMultiplier = 90000
-- Heater reduces multiplier by 5000 (more consumption)
qualityMultiplier = ((100 - engineQuality) / 200) + 1
massMultiplier = ((abs(1000 - mass)) / 300) + 1
speedMultiplier = f(gearRatio, currentSpeed)
newAmount = (speedMultiplier / gasMultiplier) * SandboxVars.CarGasConsumption
           * (engineSpeed / 2500.0)
```

- Idling: speedMultiplier = 300
- Moving: speedMultiplier scales with RPM proximity to shift point
- Bad gas tank (< 70 condition): random fuel loss (1/140 chance per tick)
- Fuel is **Petrol** fluid type

### Gas Can Constants

`Vehicles.JerryCanLitres = 10` (default canister size)

---

## 7. Vehicle Damage & Condition System

### Condition Degradation

The core function `Vehicles.LowerCondition()` is used by tires, suspension, and muffler:

```lua
local chance = part:getInventoryItem():getConditionLowerNormal() * 4
if vehicle:isDoingOffroad() then
    chance = chance * getConditionLowerOffroad() * 4 / offRoadEfficiency
end
chance = chance + (speed / 200)
chance = chance + abs(steering / 2)
```

### Tire Blowouts

- **Low pressure (< 5 units):** `(maxCapacity - currentAir) / 350` chance per tick
- **Low condition (< 15):** `(100 - condition) / 350` chance per tick
- On blowout: tire item ejected to world, tire removed from vehicle
- Driver gets `VehicleTireExplode` music event

### Brake Wear

- Only degrades when braking (speed > 0 between updates)
- `speedMod = min(80, speed) / 20` percent chance to lose 1 condition per brake event

### Trunk Cargo Loss

- Speed > 20 + no trunk door or condition < 60
- Chance based on steering angle + trunk door condition
- Random item ejected from container onto the ground

### Engine Temperature (`Vehicles.Update.Engine`)

- Idle temp increment: `ZombRand(0,3)` per elapsed minute
- Max normal temp: 100
- **Missing engine door = max temp 200** (severe overheating)
- Damaged engine door: `100 + (100 - condition)/3`
- Cooling: -2 per minute when engine off
- High temp causes **engine damage** indirectly

### Heater

- When active + engine running + engine temp > 30:
  - Raises/lowers passenger compartment temperature toward target
  - Drains battery: `-0.000035 * elapsedMinutes`
  - Increases fuel consumption

### Fixing Items (Repair Recipes)

File: `vehiclesfixing.txt`

| Fix Recipe | Requirements | Materials | Skill Req |
|-----------|-------------|-----------|-----------|
| Fix Gas Tank Welding | Small/Normal/BigGasTank1-3 | BlowTorch (2), SheetMetal | MetalWelding 3, Mechanics 2 |
| Fix Trunk Welding | Small/Normal/BigTrunk1-3 | BlowTorch (2), SheetMetal | MetalWelding 3, Mechanics 2 |
| Fix Hood Welding | EngineDoor1-3 | BlowTorch (2), SheetMetal | MetalWelding 1, Mechanics 2 |
| Fix Hood | EngineDoor1-3 | Screws (8), SheetMetal | Mechanics 2 |
| Fix Trunk Lid Welding | TrunkDoor1-3 | BlowTorch (2), SheetMetal | MetalWelding 1, Mechanics 2 |
| Fix Trunk Lid | TrunkDoor1-3 | Screws (8), SheetMetal | Mechanics 2 |
| Fix Door Welding | Front/RearCarDoor1-3 | BlowTorch (2), SheetMetal | MetalWelding 3, Mechanics 2 |
| Fix Glove Box | GloveBox1-3 | DuctTape (2) or Glue (2) | Mechanics 1 |
| Fix Car Seat | NormalCarSeat1-3 | DuctTape (2) or Glue (2) | Mechanics 1 |

Parts have numbered condition tiers (1 = worst, 3 = best/appear in name suffix).

---

## 8. Mechanic Areas

Each part has a `mechanicArea` that determines which side of the vehicle the player must stand at:

| Area | Parts |
|------|-------|
| `Engine` | Engine, Battery, EngineDoor |
| `Left` | DoorFrontLeft, DoorRearLeft, WindowFrontLeft, TireFrontLeft, TireRearLeft, BrakeFrontLeft, BrakeRearLeft, SuspensionFrontLeft, SuspensionRearLeft |
| `Right` | DoorFrontRight, DoorRearRight, WindowFrontRight, TireFrontRight, TireRearRight, BrakeFrontRight, BrakeRearRight, SuspensionFrontRight, SuspensionRearRight |
| `Interior` | SeatFrontLeft, SeatFrontRight, SeatRearLeft, SeatRearRight, SeatMiddleLeft, SeatMiddleRight |
| `Under` | Muffler |
| `Back` | DoorRear (trunk/tailgate) |

---

## 9. Engine State & Check Engine Light

The vehicle's "check engine" light is computed from part Lua functions:

- `Vehicles.CheckEngine.Engine`: returns `condition > 0`
- `Vehicles.CheckEngine.GasTank`: returns `item present AND content > 0`

The overall check engine state is aggregated in `ISVehicleMechanics:checkEngineFull()` which iterates all parts and calls their `checkEngine` Lua function. If any returns false, the check engine light is on.

---

## 10. Vehicle Creation & Quality

### Engine Quality (`Vehicles.Create.Engine`)

```lua
baseQuality = script:getEngineQuality() * type:getBaseVehicleQuality()
engineQuality = ZombRand(baseQuality - 10, baseQuality + 10)
engineQuality = ZombRand(engineQuality - 5, engineQuality + 5)  -- double randomization

qualityBoosted = min(engineQuality * 1.6, 100)
qualityModifier = max(0.6, qualityBoosted / 100)
enginePower = script:getEngineForce() * qualityModifier

vehicle:setEngineFeature(engineQuality, engineLoudness, enginePower)
```

### Vehicle Type Quality System

From `VehicleType.getTypeFromName()` — base vehicle quality multiplier affects all vehicle attributes. Each vehicle type has a `baseVehicleQuality` value.

---

## 11. Part Categories (Display)

Parts are categorized for the mechanics UI:

| Category | Examples |
|----------|---------|
| `engine` | Engine, Battery, Muffler, Heater |
| `tire` | TireFrontLeft/Right, TireRearLeft/Right |
| `brakes` | BrakeFrontLeft/Right, BrakeRearLeft/Right |
| `suspension` | SuspensionFrontLeft/Right, SuspensionRearLeft/Right |
| `door` | DoorFrontLeft/Right, DoorRear, DoorMiddle* |
| `seat` | SeatFrontLeft/Right, SeatRear* |
| `window` | WindowFrontLeft/Right, WindowRear*, Windshield* |
| `headlight` | HeadlightLeft, HeadlightRight |
| `radio` | Radio |
| `glovebox` | GloveBox |
| `nodisplay` | PassengerCompartment (hidden in UI) |

---

## 12. Hotwiring & Keys

From `ISVehicleMenu:showRadialMenu()`:

| Scenario | Action |
|----------|--------|
| Has key in inventory | Start engine normally |
| Key in ignition | Start engine normally |
| Electricity 1 + Mechanics 2 (or Burglar) | Can hotwire |
| Electricity 2 + Mechanics 3 (for menu to appear) | Hotwire available in radial |
| Vehicle already hotwired | Start engine normally |

---

## 13. Container Access Rules

| Container | Rule |
|-----------|------|
| `TruckBed` | Must be outside vehicle, in area, trunk door open (if exists) |
| `TruckBedOpen` | Must be outside, in area (always accessible — pickup beds) |
| `TruckBedOpenInside` | Can access from rear seats inside, or from outside with door open |
| `Seat` | Can access from adjacent seat or from outside with door open |
| `GloveBox` | Can access from front seats, or from outside with passenger door open |
| `GasTank` | Must be outside, in area |
| `Tire` | Air container only — tire pressure |

---

## 14. Part Dependency Graph (Install Order)

```
Suspension → Tire
Brake → Tire
Tire → (requires both Brake AND Suspension installed)

Door ← Window must be uninstalled before Door can be uninstalled
(Reverse: Door must be installed before Window)

EngineDoor → allows access to Engine, Battery, Muffler area
(door component = EngineDoor for install/uninstall tables)
```

---

## 15. Key Constants & Sandbox Variables

| Constant | Default | Effect |
|----------|---------|--------|
| `Vehicles.JerryCanLitres` | 10 | Litres in a Jerry Can |
| `Vehicles.newSystemConditionLowerMult` | 4 | Multiplier on condition degradation |
| `SandboxVars.VehicleEasyUse` | false | Skip degradation, always full battery/gas |
| `SandboxVars.CarGasConsumption` | 1.0 | Fuel consumption multiplier |
| `SandboxVars.ChanceHasGas` | 2 (normal) | % of cars with gas (1=low, 2=normal, 3=high) |
| `SandboxVars.InitialGas` | 3 (normal) | How much gas cars start with |
| `SandboxVars.LockedCar` | 3 (normal) | % chance doors are locked |
| `SandboxVars.ZombieAttractionMultiplier` | 1.0 | Engine noise multiplier |
| `SandboxVars.SleepAllowed` | true | Can sleep in vehicles |
