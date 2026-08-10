---
title: "sound"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# sound

Soft Override  
Unknown

Makes one or more sound clips available for use in the game. Multiple
clips can be added to a sound script, and the game will randomly select
one of them to play when the sound is triggered.

``` cpp
module yourModule {
  sound yourSound {
    category = Animal,
    loop = true,
    is3D = true,
    clip {
      file = media/sound/RideOfTheValkyries.ogg,
      distanceMin = 20,
      distanceMax = 650,
      reverbFactor = 0.1,
      volume = 0.7,
    }
  }
}
```

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)
- [vehicle](./vehicle.md)
- [template](./template.md)

This block can have the following child blocks:

- [clip](./clip.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

No ID for parents  
[template](./template.md) \| [vehicle](./vehicle.md)

## Parameters

#### alarm

Type  
array (array of string, separator: ' ')

No description provided.

#### alarmLoop

Type  
Unknown

No description provided.

#### backSignal

Type  
string

No description provided.

#### category

Type  
string

Unclear what this parameter is for.

#### engine

Type  
string

No description provided.

#### engineStart

Type  
string

No description provided.

#### engineTurnOff

Type  
string

No description provided.

#### handBrake

Type  
string

No description provided.

#### horn

Type  
string

No description provided.

#### ignitionFail

Type  
Unknown

No description provided.

#### ignitionFailNoPower

Type  
string

No description provided.

#### is3D

Type  
boolean

Whenever this is set to `false`, the distance to the sound will not
impact its volume. This parameter doesn't impact the sound
directionality.

#### loop

Type  
boolean

Whether the sound should loop or not. The sound plays until turned off
manually via Lua code or the emitter is destroyed.

#### master

Type  
string

Default  
`Primary`

Allowed values  
`Ambient` \| `Music` \| `Primary` \| `VehicleEngine`

Links the sound to a sound handling setting, which controls the volume
of all sounds linked to it. This doesn't seems to be working properly,
as some methods that call sounds will simply not take into account the
current sound settings. You can find a relevant request about this issue
on the \#mod_portal channel of the official Discord
[here](https://discord.com/channels/136501320340209664/1476602902607954043/1505634480939860119).

#### maxInstancesPerEmitter

Type  
integer

Specifies how many of this sound the sound emitter can play at the same
time.
