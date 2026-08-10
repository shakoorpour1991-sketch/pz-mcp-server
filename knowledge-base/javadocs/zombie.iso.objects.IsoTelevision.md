---
title: zombie.iso.objects.IsoTelevision
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoTelevision

`public class IsoTelevision extends IsoWaveSignal`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoWaveSignal
- zombie.iso.objects.IsoTelevision

## Constructors

### public IsoTelevision(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoTelevision(IsoCell cell,
IsoGridSquare sq,
IsoSprite spr)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `spr`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void addTvScreenSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void clearTvScreenSprites()

**Returns:** `void`

### public void removeTvScreenSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

### public boolean isFacing(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoTelevision.html`*
