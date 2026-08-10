---
title: zombie.characters.DummyCharacterSoundEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.DummyCharacterSoundEmitter

`public final class DummyCharacterSoundEmitter extends BaseCharacterSoundEmitter`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.BaseCharacterSoundEmitter
- zombie.characters.DummyCharacterSoundEmitter

## Fields

### public float x

### public float y

### public float z

## Constructors

### public DummyCharacterSoundEmitter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public void register()

**Returns:** `void`

### public void unregister()

**Returns:** `void`

### public long playVocals(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public void playFootsteps(String file,
float volume)

**Parameters:**
- `String` `file`
- `float` `volume`

**Returns:** `void`

### public long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playSound(String file,
IsoObject proxy)

**Parameters:**
- `String` `file`
- `IsoObject` `proxy`

**Returns:** `long`

### public long playSoundImpl(String file,
IsoObject proxy)

**Parameters:**
- `String` `file`
- `IsoObject` `proxy`

**Returns:** `long`

### public void tick()

**Returns:** `void`

### public void set(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public boolean isClear()

**Returns:** `boolean`

### public void setPitch(long handle,
float pitch)

**Parameters:**
- `long` `handle`
- `float` `pitch`

**Returns:** `void`

### public void setVolume(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

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

### public void stopOrTriggerSound(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### public void stopOrTriggerSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void stopAll()

**Returns:** `void`

### public int stopSoundByName(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `int`

### public boolean hasSoundsToStart()

**Returns:** `boolean`

### public boolean isPlaying(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `boolean`

### public boolean isPlaying(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `boolean`

### public void setParameterValue(long soundRef,
fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION parameterDescription,
float value)

**Parameters:**
- `long` `soundRef`
- `fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION` `parameterDescription`
- `float` `value`

**Returns:** `void`

### public void setParameterValueByName(long soundRef,
String parameterName,
float value)

**Parameters:**
- `long` `soundRef`
- `String` `parameterName`
- `float` `value`

**Returns:** `void`

### public boolean hasSustainPoints(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\DummyCharacterSoundEmitter.html`*
