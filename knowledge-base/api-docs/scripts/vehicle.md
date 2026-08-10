---
title: "vehicle"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# vehicle

Soft Override  
Unknown

Defines a vehicle.

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

This block can have the following child blocks:

- [physics](./physics.md)
- [attachment](./attachment.md)
- [part](./part.md)
- [passenger](./passenger.md)
- [wheel](./wheel.md)
- [model](./model.md)
- [lightbar](./lightbar.md)
- [sound](./sound.md)
- [area](./area.md)
- [skin](./skin.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### animalTrailerSize

Type  
float

Sets the maximum total encumbrance from animals in the animal trailer.
The horsebox and livestock trailers both use 500.

#### brakingForce

Type  
Unknown

No description provided.

#### carMechanicsOverlay

Type  
string

No description provided.

#### carModelName

Type  
string

Set the [translation](https://pzwiki.net/wiki/Translation) key for the
car name. The translation entry needs to be stored inside the
[IG_UI](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#ig-ui)
translation file and have `IGUI_VehicleName` as a prefix. For example:

``` cpp
carModelName = YourCar,
```

With the translation entry inside `IG_UI.json`:

``` json
{
  "IGUI_VehicleNameYourCar": "Your car model"
}
```

#### centerOfMassOffset

Type  
array (array of float, separator: ' ')

No description provided.

#### engineForce

Type  
float

Default  
`3000`

`engineForce` is 10x what is displayed in the mechanics menu for
horsepower.

#### engineIdleSpeed

Type  
float

Default  
`750.0`

No description provided.

#### engineLoudness

Type  
integer

Default  
`100`

No description provided.

#### engineQuality

Type  
integer

Default  
`100`

No description provided.

#### engineRepairLevel

Type  
integer

Required [mechanics skill](https://pzwiki.net/wiki/Mechanics) level for
repearing the vehicle's engine.

#### engineRPMType

Type  
string

Default  
`jeep`

Sets the engine to a RPM type ([See vehicleEngineRPM
block](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicleenginerpm.html)).

#### extents

Type  
array (array of float, separator: ' ')

No description provided.

#### extentsOffset

Type  
array (array of float, separator: ' ')

No description provided.

#### forcedColor

Type  
array (array of float, separator: ' ')

Default  
`-1 -1 -1`

Sets a forced HSV color on the vehicle. The value needs to be of format
`hue sat val`.

#### frontEndDurability

Type  
integer

Default  
`100`

It is unclear what that parameter does but as of 42.16.3, the game uses
`frontEndHealth` which is a mistake.

#### frontEndHealth

Type  
Unknown

Deprecated  
{'description': 'While that parameter is present in vanilla scripts as
of 42.16.3, it actually does nothing because it is not parsed as
<span class="title-ref">frontEndHealth</span> but as
<span class="title-ref">frontEndDurability</span>.', 'replacedBy':
'frontEndDurability'}

No description provided.

#### gearRatio1

Type  
float

Default  
`6.44`

See parameter gearRatioCount.

#### gearRatio2

Type  
Unknown

Default  
`4.1`

See parameter gearRatioCount.

#### gearRatio3

Type  
Unknown

Default  
`2.29`

See parameter gearRatioCount.

#### gearRatio4

Type  
Unknown

Default  
`1.47`

See parameter gearRatioCount.

#### gearRatio5

Type  
Unknown

Default  
`1.0`

See parameter gearRatioCount.

#### gearRatio6

Type  
Unknown

See parameter gearRatioCount.

#### gearRatio7

Type  
Unknown

See parameter gearRatioCount.

#### gearRatio8

Type  
Unknown

See parameter gearRatioCount.

#### gearRatioCount

Type  
integer

Default  
`4`

[gearRatioCount](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratiocount)
will set the number of gear ratios the car can have. The vanilla cars
use 4, while sport cars use 5.

A maximum of 9 ratios can be set with the parameters:

- [gearRatioR](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratiocount)
  (the reverse gear ratio)
- [gearRatio1](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio1)
- [gearRatio2](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio2)
- [gearRatio3](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio3)
- [gearRatio4](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio4)
- [gearRatio5](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio5)
- [gearRatio6](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio6)
- [gearRatio7](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio7)
- [gearRatio8](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-gearratio8)

#### gearRatioR

Type  
float

Default  
`7.09`

See parameter gearRatioCount.

#### hasLighter

Type  
boolean

Default  
`True`

Sets whenever this car has a lighter to light a cigarette.

#### hasSiren

Type  
boolean

Is useless  
True

This is unused by the game.

#### isSmallVehicle

Type  
boolean

Default  
`True`

If the vehicle a small vehicle, the zombies will bang on the windows
differently. If set to false they will thump by banging while if set to
true, they will thump with their shoulder.

#### mass

Type  
float

Default  
`800`

Sets the mass of the vehicle which will notably be used for various
physic calculations.

By default is equal to 800. As a reference, cars have a mass of around
800, pickup trucks have around 1100, a simple trailer around 200, a
burnt vehicle 400 or 500. See the game scripts for more examples. Values
in excess of 1400 can cause vehicle wheels to start sinking into the
ground and be unable to move.

#### maxSpeed

Type  
float

Default  
`20.0`

No description provided.

#### maxSpeedReverse

Type  
float

Default  
`40.0`

No description provided.

#### maxSuspensionTravelCm

Type  
float

Default  
`500.0`

No description provided.

#### mechanicType

Type  
integer

Allowed values  
`1` \| `2` \| `3`

Defines what class the vehicle is, that is 1 for standard, 2 for
heavy-duty and 3 for performance.

#### neverSpawnKey

Type  
boolean

Sets whenever this vehicle will never have a key spawning in buildings
or on zombies spawning around the vehicle.

#### notKillCrops

Type  
boolean

Sets whenever the vehicle will destroy crops it is driving on.

#### offRoadEfficiency

Type  
float

Default  
`1.0`

Affects horsepower reduction when offroad (Higher = less horsepower
reduction when offroad.)

#### physicsChassisShape

Type  
array (array of float, separator: ' ')

Defines the hitbox of the vehicle. The value should be three numbers
defining the dimensions of a box:

``` 
physicsChassisShape = height width length,
```

For example:

``` 
physicsChassisShape = height width length,
```

When setting
[useChassisPhysicsCollision](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-usechassisphysicscollision)
to `false`, it will instead use
[physics](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/physics.html)
for the hitbox of the vehicle.

#### playerDamageProtection

Type  
float

Multiplier applied to the amount of damage the player takes when
crashing in the car. A value of 1 doesn't change the damage, but a lower
value reduces it and a higher value increases it.

#### rearEndDurability

Type  
integer

Default  
`100`

It is unclear what that parameter does but as of 42.16.3, the game uses
`rearEndHealth` which is a mistake.

#### rearEndHealth

Type  
Unknown

Deprecated  
{'description': 'While that parameter is present in vanilla scripts as
of 42.16.3, it actually does nothing because it is not parsed as
<span class="title-ref">rearEndHealth</span> but as
<span class="title-ref">rearEndDurability</span>.', 'replacedBy':
'rearEndDurability'}

No description provided.

#### rollInfluence

Type  
float

Default  
`0.1`

No description provided.

#### seats

Type  
integer

Default  
`2`

Sets the number of seats this vehicle can have. A seat
[part](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/part.html)
needs to be created which will hold a
[container](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/container.html#container)
block with a parameter
[seat](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/container.html#container-seat).

#### shadowExtents

Type  
array (array of float, separator: ' ')

No description provided.

#### shadowOffset

Type  
array (array of float, separator: ' ')

No description provided.

#### specialKeyRing

Type  
array (array of string, separator: ';')

[specialKeyRing](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-specialkeyring)
needs to reference a keyring item to spawn.
[specialKeyRingChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-specialkeyringchance)
is used to set the chance to spawn this keyring.

#### specialKeyRingChance

Type  
integer

See parameter specialKeyRing.

#### specialLootChance

Type  
integer

Default  
`8`

No description provided.

#### steeringClamp

Type  
float

Default  
`0.4`

Maximum angle you can turn the front wheels left/right

#### steeringIncrement

Type  
float

Default  
`0.04`

No description provided.

#### stoppingMovementForce

Type  
float

Default  
`1.0`

A drag factor applied to the vehicle at all times

#### storageCapacity

Type  
integer

Is useless  
True

Default  
`100`

No description provided.

#### suspensionCompression

Type  
float

Default  
`4.4`

No description provided.

#### suspensionDamping

Type  
float

Default  
`2.3`

No description provided.

#### suspensionRestLength

Type  
float

Default  
`0.6`

No description provided.

#### suspensionStiffness

Type  
float

Default  
`20.0`

No description provided.

#### template

Type  
Unknown

Uses a template script data for this vehicle.

#### template!

Type  
Unknown

See parameter template.

#### textureDamage1Overlay

Type  
string

No description provided.

#### textureDamage1Shell

Type  
string

No description provided.

#### textureDamage2Overlay

Type  
string

No description provided.

#### textureDamage2Shell

Type  
string

No description provided.

#### textureLights

Type  
string

No description provided.

#### textureMask

Type  
string

No description provided.

#### textureMaskEnable

Type  
boolean

Is useless  
True

No description provided.

#### textureRust

Type  
string

No description provided.

#### textureShadow

Type  
string

No description provided.

#### useChassisPhysicsCollision

Type  
boolean

Default  
`True`

By default `true` which makes the vehicle use the
[physicsChassisShape](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/vehicle.html#vehicle-physicschassisshape)
for its hitbox. If set to false, it will instead use the
[physics](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/physics.html)
blocks as the hitbox of the vehicle.

#### wheelFriction

Type  
float

Default  
`800.0`

It is 1.2 to 1.9 for all vanilla vehicles and controls turning and
stopping (but not acceleration) tire friction limits, with 1.4 being the
most common. Values over 1.8 can cause vehicles to flip in sharp turns.
(Likely depends somewhat on center of mass).

#### zombieType

Type  
array (array of string, separator: ';')

Used to chose what zombie may spawn around the vehicle and is likely to
have the key of the vehicle.
