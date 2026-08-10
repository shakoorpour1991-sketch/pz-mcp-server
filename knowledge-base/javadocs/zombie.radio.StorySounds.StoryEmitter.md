---
title: zombie.radio.StorySounds.StoryEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.StorySounds
---

# zombie.radio.StorySounds.StoryEmitter

`public final class StoryEmitter extends Object`

**Kind:** class · **Package:** zombie.radio.StorySounds

## Inheritance
- java.lang.Object
- zombie.radio.StorySounds.StoryEmitter

## Fields

### public int max

### public float volumeMod

### public boolean coordinate3d

### public Stack<StoryEmitter.Sound> soundStack

### public ArrayList<StoryEmitter.Sound> instances

### public ArrayList<StoryEmitter.Sound> toStart

## Constructors

### public StoryEmitter()

## Methods

### public int stopSound(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### public long playSound(String file,
float baseVolume,
float x,
float y,
float z,
float minRange,
float maxRange)

**Parameters:**
- `String` `file`
- `float` `baseVolume`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `minRange`
- `float` `maxRange`

**Returns:** `long`

### public void tick()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\StorySounds\StoryEmitter.html`*
