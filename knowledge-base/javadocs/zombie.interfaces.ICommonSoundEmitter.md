---
title: zombie.interfaces.ICommonSoundEmitter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.interfaces
---

# zombie.interfaces.ICommonSoundEmitter

`public interface ICommonSoundEmitter`

**Kind:** interface · **Package:** zombie.interfaces

## Description

TurboTuTone.

## Methods

### void setPos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### @Deprecated
long playSound(String file,
boolean doWorldSound)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`

**Returns:** `long`

### void tick()

**Returns:** `void`

### boolean isEmpty()

**Returns:** `boolean`

### void setPitch(long handle,
float pitch)

**Parameters:**
- `long` `handle`
- `float` `pitch`

**Returns:** `void`

### void setVolume(long handle,
float volume)

**Parameters:**
- `long` `handle`
- `float` `volume`

**Returns:** `void`

### boolean hasSustainPoints(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### void triggerCue(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### int stopSound(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### void stopOrTriggerSound(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `void`

### void stopOrTriggerSoundLocal(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `void`

### void stopOrTriggerSoundByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### boolean isPlaying(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `boolean`

### boolean isPlaying(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\interfaces\ICommonSoundEmitter.html`*
