---
title: zombie.audio.DummySoundEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.DummySoundEmitter

`public class DummySoundEmitter extends BaseSoundEmitter`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.BaseSoundEmitter
- zombie.audio.DummySoundEmitter

## Constructors

### public DummySoundEmitter()

## Methods

### public void randomStart()

**Returns:** `void`

### public void setPos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public int stopSound(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### public int stopSoundDelayRelease(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### public void stopSoundLocal(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public void stopOrTriggerSoundLocal(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public int stopSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public void stopOrTriggerSound(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public void stopOrTriggerSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setVolume(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

**Returns:** `void`

### public void setPitch(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

**Returns:** `void`

### public boolean hasSustainPoints(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### public void setParameterValue(long handle,
fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION parameterDescription,
float value)

**Parameters:**
- `long` `handle`
- `fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION` `parameterDescription`
- `float` `value`

**Returns:** `void`

### public void setParameterValueByName(long handle,
String parameterName,
float value)

**Parameters:**
- `long` `handle`
- `String` `parameterName`
- `float` `value`

**Returns:** `void`

### public boolean isUsingParameter(long handle,
String parameterName)

**Parameters:**
- `long` `handle`
- `String` `parameterName`

**Returns:** `boolean`

### public void setTimelinePosition(long handle,
String positionName)

**Parameters:**
- `long` `handle`
- `String` `positionName`

**Returns:** `void`

### public void triggerCue(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public void set3D(long handle,
boolean is3D)

**Parameters:**
- `long` `handle`
- `boolean` `is3D`

**Returns:** `void`

### public void setVolumeAll(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public void stopAll()

**Returns:** `void`

### public long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playSound(String file,
IsoGameCharacter character)

**Parameters:**
- `String` `file`
- `IsoGameCharacter` `character`

**Returns:** `long`

### public long playSound(String file,
int x,
int y,
int z)

**Parameters:**
- `String` `file`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `long`

### public long playSound(String file,
IsoGridSquare square)

**Parameters:**
- `String` `file`
- `IsoGridSquare` `square`

**Returns:** `long`

### public long playSoundImpl(String file,
IsoGridSquare square)

**Parameters:**
- `String` `file`
- `IsoGridSquare` `square`

**Returns:** `long`

### public long playSound(String file,
boolean doWorldSound)

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`

**Returns:** `long`

### public long playSoundImpl(String file,
boolean doWorldSound,
IsoObject parent)

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`
- `IsoObject` `parent`

**Returns:** `long`

### public long playSound(String file,
IsoObject parent)

**Parameters:**
- `String` `file`
- `IsoObject` `parent`

**Returns:** `long`

### public long playSoundImpl(String file,
IsoObject parent)

**Parameters:**
- `String` `file`
- `IsoObject` `parent`

**Returns:** `long`

### public long playClip(GameSoundClip clip,
IsoObject parent)

**Parameters:**
- `GameSoundClip` `clip`
- `IsoObject` `parent`

**Returns:** `long`

### public long playAmbientSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `long`

### public void tick()

**Returns:** `void`

### public boolean hasSoundsToStart()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isPlaying(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `boolean`

### public boolean isPlaying(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `boolean`

### public boolean restart(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### public void setPlayRemoteEvents(boolean remote)

**Parameters:**
- `boolean` `remote`

**Returns:** `void`

### public long playSoundLooped(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playSoundLoopedImpl(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playAmbientLoopedImpl(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\DummySoundEmitter.html`*
