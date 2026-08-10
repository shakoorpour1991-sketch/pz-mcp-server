---
title: fmod.fmod.FMODSoundEmitter
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: fmod.fmod
---

# fmod.fmod.FMODSoundEmitter

`public final class FMODSoundEmitter extends BaseSoundEmitter`

**Kind:** class · **Package:** fmod.fmod

## Inheritance
- java.lang.Object
- zombie.audio.BaseSoundEmitter
- fmod.fmod.FMODSoundEmitter

## Fields

### public float x

### public float y

### public float z

### public EmitterType emitterType

### public IsoObject parent

### public IFMODParameterUpdater parameterUpdater

## Constructors

### public FMODSoundEmitter()

## Methods

### public void randomStart()

**Returns:** `void`

### public void setPos(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `void`

### public int stopSound(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `int`

### public void stopSoundLocal(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### public void stopOrTriggerSoundLocal(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### public int stopSoundByName(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `int`

### public void stopOrTriggerSound(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### public void stopOrTriggerSoundByName(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### public void setVolume(long arg0,
float arg1)

**Parameters:**
- `long` `arg0`
- `float` `arg1`

**Returns:** `void`

### public void setPitch(long arg0,
float arg1)

**Parameters:**
- `long` `arg0`
- `float` `arg1`

**Returns:** `void`

### public boolean hasSustainPoints(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `boolean`

### public void triggerCue(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### public void setVolumeAll(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `void`

### public void stopAll()

**Returns:** `void`

### public long playSound(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `long`

### public long playSound(String arg0,
IsoGameCharacter arg1)

**Parameters:**
- `String` `arg0`
- `IsoGameCharacter` `arg1`

**Returns:** `long`

### public long playSound(String arg0,
int arg1,
int arg2,
int arg3)

**Parameters:**
- `String` `arg0`
- `int` `arg1`
- `int` `arg2`
- `int` `arg3`

**Returns:** `long`

### public long playSound(String arg0,
IsoGridSquare arg1)

**Parameters:**
- `String` `arg0`
- `IsoGridSquare` `arg1`

**Returns:** `long`

### public long playSoundImpl(String arg0,
IsoGridSquare arg1)

**Parameters:**
- `String` `arg0`
- `IsoGridSquare` `arg1`

**Returns:** `long`

### public long playSound(String arg0,
boolean arg1)

**Parameters:**
- `String` `arg0`
- `boolean` `arg1`

**Returns:** `long`

### public long playSoundImpl(String arg0,
boolean arg1,
IsoObject arg2)

**Parameters:**
- `String` `arg0`
- `boolean` `arg1`
- `IsoObject` `arg2`

**Returns:** `long`

### public long playSoundLooped(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `long`

### public long playSoundLoopedImpl(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `long`

### public long playSound(String arg0,
IsoObject arg1)

**Parameters:**
- `String` `arg0`
- `IsoObject` `arg1`

**Returns:** `long`

### public long playSoundImpl(String arg0,
IsoObject arg1)

**Parameters:**
- `String` `arg0`
- `IsoObject` `arg1`

**Returns:** `long`

### public long playClip(GameSoundClip arg0,
IsoObject arg1)

**Parameters:**
- `GameSoundClip` `arg0`
- `IsoObject` `arg1`

**Returns:** `long`

### public long playAmbientSound(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `long`

### public long playAmbientLoopedImpl(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `long`

### public void set3D(long arg0,
boolean arg1)

**Parameters:**
- `long` `arg0`
- `boolean` `arg1`

**Returns:** `void`

### public void tick()

**Returns:** `void`

### public boolean hasSoundsToStart()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isPlaying(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `boolean`

### public boolean isPlaying(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `boolean`

### public boolean restart(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `boolean`

### public void addParameter(FMODParameter arg0)

**Parameters:**
- `FMODParameter` `arg0`

**Returns:** `void`

### public void setParameterValue(long arg0,
FMOD_STUDIO_PARAMETER_DESCRIPTION arg1,
float arg2)

**Parameters:**
- `long` `arg0`
- `FMOD_STUDIO_PARAMETER_DESCRIPTION` `arg1`
- `float` `arg2`

**Returns:** `void`

### public void setParameterValueByName(long arg0,
String arg1,
float arg2)

**Parameters:**
- `long` `arg0`
- `String` `arg1`
- `float` `arg2`

**Returns:** `void`

### public boolean isUsingParameter(long arg0,
String arg1)

**Parameters:**
- `long` `arg0`
- `String` `arg1`

**Returns:** `boolean`

### public void setTimelinePosition(long arg0,
String arg1)

**Parameters:**
- `long` `arg0`
- `String` `arg1`

**Returns:** `void`

### public void clearParameters()

**Returns:** `void`

### public static void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\fmod\fmod\FMODSoundEmitter.html`*
