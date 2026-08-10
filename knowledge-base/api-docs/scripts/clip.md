---
title: "clip"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# clip

Soft Override  
Unknown

Defines a clip to be used in a [sound
script](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/sound.html),
which is a single sound file with properties that determine how it is
played in the game.

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

- [sound](./sound.md)

## ID

This block should have no ID.

## Parameters

#### distanceMax

Type  
integer

[distanceMax](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/clip.html#distanceMax)
and
[distanceMin](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/clip.html#distanceMin)
respectively set the maximum and minimum distances between which the
sound will gradually decrease in volume.

#### distanceMin

Type  
integer

See parameter distanceMax.

#### event

Type  
string

Specifies an event that will trigger the playback of a specific sound.
Used for sounds from FMOD sound banks (vanilla sound files).

#### file

Type  
string

The path to the sound file to be played, relative to the folder above
the `media` folder. For the following file path:

``` 
📁 MyMod
  📁 media
    📁 sound
      📄 my_sound.ogg
```

This parameter will be:

``` cpp
file = media/sound/my_sound.ogg
```

A file can be both of file format `.ogg` or `.wav`, but `.ogg` is
recommended for its smaller file size and better compression.

#### pitch

Type  
float

The pitch of the sound.

#### reverbFactor

Type  
float

[reverbFactor](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/clip.html#reverbFactor)
sets the amount of reverb applied to the sound while
[reverbMaxRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/clip.html#reverbMaxRange)
sets the maximum distance at which the reverb will be applied.

#### reverbMaxRange

Type  
float

See parameter reverbFactor.

#### stopImmediate

Type  
Unknown

No description provided.

#### volume

Type  
float

Adjusts the volume of the sound. Preferably your sound file should be
properly normalized to a volume of 1.0.
