---
title: zombie.audio.BaseSoundEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.BaseSoundEmitter

`public abstract class BaseSoundEmitter extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.BaseSoundEmitter

## Constructors

### public BaseSoundEmitter()

## Methods

### public abstract void randomStart()

**Returns:** `void`

### public abstract void setPos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public abstract int stopSound(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### public abstract int stopSoundDelayRelease(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `int`

### public abstract void stopSoundLocal(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public abstract void stopOrTriggerSoundLocal(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### public abstract int stopSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public abstract void stopOrTriggerSound(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public abstract void stopOrTriggerSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public abstract void setVolume(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

**Returns:** `void`

### public abstract void setPitch(long handle,
float pitch)

**Parameters:**
- `long` `handle`
- `float` `pitch`

**Returns:** `void`

### public abstract boolean hasSustainPoints(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### public abstract void setParameterValue(long handle,
fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION parameterDescription,
float value)

**Parameters:**
- `long` `handle`
- `fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION` `parameterDescription`
- `float` `value`

**Returns:** `void`

### public abstract void setParameterValueByName(long arg0,
String arg1,
float arg2)

**Parameters:**
- `long` `arg0`
- `String` `arg1`
- `float` `arg2`

**Returns:** `void`

### public abstract boolean isUsingParameter(long arg0,
String arg1)

**Parameters:**
- `long` `arg0`
- `String` `arg1`

**Returns:** `boolean`

### public abstract void setTimelinePosition(long handle,
String positionName)

**Parameters:**
- `long` `handle`
- `String` `positionName`

**Returns:** `void`

### public abstract void triggerCue(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public abstract void setVolumeAll(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public abstract void stopAll()

**Returns:** `void`

### public abstract long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract long playSound(String file,
IsoGameCharacter character)

**Parameters:**
- `String` `file`
- `IsoGameCharacter` `character`

**Returns:** `long`

### public abstract long playSound(String file,
int x,
int y,
int z)

**Parameters:**
- `String` `file`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `long`

### public abstract long playSound(String file,
IsoGridSquare square)

**Parameters:**
- `String` `file`
- `IsoGridSquare` `square`

**Returns:** `long`

### public abstract long playSoundImpl(String file,
IsoGridSquare square)

**Parameters:**
- `String` `file`
- `IsoGridSquare` `square`

**Returns:** `long`

### @Deprecated
public abstract long playSound(String file,
boolean doWorldSound)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`

**Returns:** `long`

### @Deprecated
public abstract long playSoundImpl(String file,
boolean doWorldSound,
IsoObject parent)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`
- `IsoObject` `parent`

**Returns:** `long`

### public abstract long playSoundLooped(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract long playSoundLoopedImpl(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract long playSound(String file,
IsoObject parent)

**Parameters:**
- `String` `file`
- `IsoObject` `parent`

**Returns:** `long`

### public abstract long playSoundImpl(String file,
IsoObject parent)

**Parameters:**
- `String` `file`
- `IsoObject` `parent`

**Returns:** `long`

### public abstract long playClip(GameSoundClip clip,
IsoObject parent)

**Parameters:**
- `GameSoundClip` `clip`
- `IsoObject` `parent`

**Returns:** `long`

### public abstract long playAmbientSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `long`

### public abstract long playAmbientLoopedImpl(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract void set3D(long handle,
boolean is3D)

**Parameters:**
- `long` `handle`
- `boolean` `is3D`

**Returns:** `void`

### public abstract void tick()

**Returns:** `void`

### public abstract boolean hasSoundsToStart()

**Returns:** `boolean`

### public abstract boolean isEmpty()

**Returns:** `boolean`

### public abstract boolean isPlaying(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `boolean`

### public abstract boolean isPlaying(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `boolean`

### public abstract boolean restart(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### public abstract void setPlayRemoteEvents(boolean var1)

**Parameters:**
- `boolean` `var1`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\BaseSoundEmitter.html`*
