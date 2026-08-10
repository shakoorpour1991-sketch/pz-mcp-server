---
title: zombie.erosion.obj.ErosionObj
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion.obj
---

# zombie.erosion.obj.ErosionObj

`public final class ErosionObj extends Object`

**Kind:** class · **Package:** zombie.erosion.obj

## Inheritance
- java.lang.Object
- zombie.erosion.obj.ErosionObj

## Fields

### public String name

### public int stages

### public boolean hasSnow

### public boolean hasFlower

### public boolean hasChildSprite

### public float bloomStart

### public float bloomEnd

### public boolean noSeasonBase

### public int cycleTime

## Constructors

### public ErosionObj(ErosionObjSprites sprites,
int cycleTime,
float bloomstart,
float bloomend,
boolean noSeasonBase)

**Parameters:**
- `ErosionObjSprites` `sprites`
- `int` `cycleTime`
- `float` `bloomstart`
- `float` `bloomend`
- `boolean` `noSeasonBase`

## Methods

### public IsoObject getObject(IsoGridSquare square,
boolean remove)

**Parameters:**
- `IsoGridSquare` `square`
- `boolean` `remove`

**Returns:** `IsoObject`

### public IsoObject createObject(IsoGridSquare square,
int stage,
boolean tree,
int season)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `stage`
- `boolean` `tree`
- `int` `season`

**Returns:** `IsoObject`

### public boolean placeObject(IsoGridSquare square,
int stage,
boolean tree,
int season,
boolean bloom)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `stage`
- `boolean` `tree`
- `int` `season`
- `boolean` `bloom`

**Returns:** `boolean`

### public boolean setStageObject(int stage,
IsoObject obj,
int season,
boolean bloom)

**Parameters:**
- `int` `stage`
- `IsoObject` `obj`
- `int` `season`
- `boolean` `bloom`

**Returns:** `boolean`

### public boolean setStage(IsoGridSquare square,
int stage,
int season,
boolean bloom)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `stage`
- `int` `season`
- `boolean` `bloom`

**Returns:** `boolean`

### public IsoObject removeObject(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoObject`

### public ErosionObjSprites.Entry getEntry(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `ErosionObjSprites.Entry`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\obj\ErosionObj.html`*
