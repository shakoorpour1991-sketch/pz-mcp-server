---
title: zombie.characters.BaseCharacterSoundEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.BaseCharacterSoundEmitter

`public abstract class BaseCharacterSoundEmitter extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.BaseCharacterSoundEmitter

## Constructors

### public BaseCharacterSoundEmitter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public abstract void register()

**Returns:** `void`

### public abstract void unregister()

**Returns:** `void`

### public abstract long playVocals(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract void playFootsteps(String file,
float volume)

**Parameters:**
- `String` `file`
- `float` `volume`

**Returns:** `void`

### public abstract long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public abstract long playSound(String file,
IsoObject proxy)

**Parameters:**
- `String` `file`
- `IsoObject` `proxy`

**Returns:** `long`

### public abstract long playSoundImpl(String file,
IsoObject proxy)

**Parameters:**
- `String` `file`
- `IsoObject` `proxy`

**Returns:** `long`

### public abstract void tick()

**Returns:** `void`

### public abstract void set(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public abstract boolean isClear()

**Returns:** `boolean`

### public abstract void setPitch(long handle,
float pitch)

**Parameters:**
- `long` `handle`
- `float` `pitch`

**Returns:** `void`

### public abstract void setVolume(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

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

### public abstract int stopSoundByName(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `int`

### public abstract void stopOrTriggerSound(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public abstract void stopOrTriggerSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public abstract void stopAll()

**Returns:** `void`

### public abstract boolean hasSoundsToStart()

**Returns:** `boolean`

### public abstract boolean isPlaying(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `boolean`

### public abstract boolean isPlaying(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `boolean`

### public abstract void setParameterValue(long soundRef,
fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION parameterDescription,
float value)

**Parameters:**
- `long` `soundRef`
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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BaseCharacterSoundEmitter.html`*
