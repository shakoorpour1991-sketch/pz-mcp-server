---
title: zombie.audio.GameSoundClip
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.GameSoundClip

`public final class GameSoundClip extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.GameSoundClip

## Fields

### public static final short INIT_FLAG_DISTANCE_MIN

### public static final short INIT_FLAG_DISTANCE_MAX

### public static final short INIT_FLAG_STOP_IMMEDIATE

### public final GameSound gameSound

### public String event

### public fmod.fmod.FMOD_STUDIO_EVENT_DESCRIPTION eventDescription

### public fmod.fmod.FMOD_STUDIO_EVENT_DESCRIPTION eventDescriptionMp

### public String file

### public float volume

### public float pitch

### public float distanceMin

### public float distanceMax

### public float reverbMaxRange

### public float reverbFactor

### public int priority

### public short initFlags

### public short reloadEpoch

## Constructors

### public GameSoundClip(GameSound gameSound)

**Parameters:**
- `GameSound` `gameSound`

## Methods

### public String getEvent()

**Returns:** `String`

### public String getFile()

**Returns:** `String`

### public float getVolume()

**Returns:** `float`

### public float getPitch()

**Returns:** `float`

### public boolean hasMinDistance()

**Returns:** `boolean`

### public boolean hasMaxDistance()

**Returns:** `boolean`

### public float getMinDistance()

**Returns:** `float`

### public float getMaxDistance()

**Returns:** `float`

### public boolean isStopImmediate()

**Returns:** `boolean`

### public float getEffectiveVolume()

**Returns:** `float`

### public float getEffectiveVolumeInMenu()

**Returns:** `float`

### public GameSoundClip checkReloaded()

**Returns:** `GameSoundClip`

### public fmod.fmod.FMOD_STUDIO_EVENT_DESCRIPTION getEventDescription(boolean remote)

**Parameters:**
- `boolean` `remote`

**Returns:** `fmod.fmod.FMOD_STUDIO_EVENT_DESCRIPTION`

### public boolean hasSustainPoints(boolean remote)

**Parameters:**
- `boolean` `remote`

**Returns:** `boolean`

### public boolean hasParameter(boolean remote,
fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION parameterDescription)

**Parameters:**
- `boolean` `remote`
- `fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION` `parameterDescription`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\GameSoundClip.html`*
