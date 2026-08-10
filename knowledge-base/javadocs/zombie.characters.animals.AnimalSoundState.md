---
title: zombie.characters.animals.AnimalSoundState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalSoundState

`public final class AnimalSoundState extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalSoundState

## Constructors

### public AnimalSoundState(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

## Methods

### public IsoAnimal getAnimal()

**Returns:** `IsoAnimal`

### public long getEventInstance()

**Returns:** `long`

### public long getLastPlayedTimeMS(String id)

**Parameters:**
- `String` `id`

**Returns:** `long`

### public int getPriority()

**Returns:** `int`

### public void setDesiredSoundPriority(int priority)

**Parameters:**
- `int` `priority`

**Returns:** `void`

### public int getDesiredSoundPriority()

**Returns:** `int`

### public boolean shouldPlay()

**Returns:** `boolean`

### public void setDesiredSoundName(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `void`

### public String getDesiredSoundName()

**Returns:** `String`

### public void setIntervalExpireTime(String id,
long ms)

**Parameters:**
- `String` `id`
- `long` `ms`

**Returns:** `void`

### public long getIntervalExpireTime(String id)

**Parameters:**
- `String` `id`

**Returns:** `long`

### public long start(String soundName,
int priority)

**Parameters:**
- `String` `soundName`
- `int` `priority`

**Returns:** `long`

### public void stop()

**Returns:** `void`

### public boolean isPlaying()

**Returns:** `boolean`

### public boolean isPlayingDesiredSound()

**Returns:** `boolean`

### public boolean isPlaying(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalSoundState.html`*
