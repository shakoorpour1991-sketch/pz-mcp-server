---
title: zombie.audio.GameSound
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.GameSound

`public final class GameSound extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.GameSound

## Fields

### public String name

### public String category

### public boolean loop

### public boolean is3d

### public final ArrayList<GameSoundClip> clips

### public GameSound.MasterVolume master

### public int maxInstancesPerEmitter

### public short reloadEpoch

## Constructors

### public GameSound()

## Methods

### public String getName()

**Returns:** `String`

### public String getCategory()

**Returns:** `String`

### public boolean isLooped()

**Returns:** `boolean`

### public void setUserVolume(float gain)

**Parameters:**
- `float` `gain`

**Returns:** `void`

### public float getUserVolume()

**Returns:** `float`

### public GameSoundClip getRandomClip()

**Returns:** `GameSoundClip`

### public float getMaxDistanceOfClips()

**Returns:** `float`

### public String getMasterName()

**Returns:** `String`

### public int numClipsUsingParameter(boolean remote,
String parameterName)

**Parameters:**
- `boolean` `remote`
- `String` `parameterName`

**Returns:** `int`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\GameSound.html`*
