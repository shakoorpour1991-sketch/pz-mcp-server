---
title: zombie.iso.fboRenderChunk.FBORenderTracerEffects
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderTracerEffects

`public final class FBORenderTracerEffects extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderTracerEffects

## Fields

### public final HashMap<IsoGameCharacter, org.joml.Matrix4f> playerWeaponTransform

## Methods

### public static FBORenderTracerEffects getInstance()

**Returns:** `FBORenderTracerEffects`

### public void releaseWeaponTransform(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void storeWeaponTransform(IsoGameCharacter chr,
org.joml.Matrix4f xfrm)

**Parameters:**
- `IsoGameCharacter` `chr`
- `org.joml.Matrix4f` `xfrm`

**Returns:** `void`

### public void addEffect(IsoGameCharacter chr,
float range)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `range`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public ConfigOption getOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public void save()

**Returns:** `void`

### public void load()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderTracerEffects.html`*
