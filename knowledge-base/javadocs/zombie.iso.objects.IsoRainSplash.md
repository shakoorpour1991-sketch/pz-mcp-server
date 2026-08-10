---
title: zombie.iso.objects.IsoRainSplash
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoRainSplash

`public class IsoRainSplash extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoRainSplash

## Fields

### public int age

## Constructors

### public IsoRainSplash(IsoCell cell,
IsoGridSquare gridSquare)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`

## Methods

### public boolean Serialize()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public boolean TestCollide(IsoMovingObject obj,
IsoGridSquare passedObjectSquare)

**Parameters:**
- `IsoMovingObject` `obj`
- `IsoGridSquare` `passedObjectSquare`

**Returns:** `boolean`

### public IsoObject.VisionResult TestVision(IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `IsoObject.VisionResult`

### public void ChangeTintMod(ColorInfo newTintMod)

**Parameters:**
- `ColorInfo` `newTintMod`

**Returns:** `void`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoRainSplash.html`*
