---
title: zombie.iso.objects.IsoFireplace
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoFireplace

`public class IsoFireplace extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoFireplace

## Constructors

### public IsoFireplace(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoFireplace(IsoCell cell,
IsoGridSquare sq,
IsoSprite gid)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `gid`

## Methods

### public String getObjectName()

**Returns:** `String`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void setFuelAmount(int units)

**Parameters:**
- `int` `units`

**Returns:** `void`

### public int getFuelAmount()

**Returns:** `int`

### public void addFuel(int units)

**Parameters:**
- `int` `units`

**Returns:** `void`

### public int useFuel(int amount)

**Parameters:**
- `int` `amount`

**Returns:** `int`

### public boolean hasFuel()

**Returns:** `boolean`

### public void turnOn()

**Returns:** `void`

### public void setLit(boolean lit)

**Parameters:**
- `boolean` `lit`

**Returns:** `void`

### public boolean isLit()

**Returns:** `boolean`

### public boolean isSmouldering()

**Returns:** `boolean`

### public void extinguish()

**Returns:** `void`

### public float getTemperature()

**Returns:** `float`

### public boolean isTemperatureChanging()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoChild,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoChild`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter bb)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public boolean isFireSpriteUsingOurDepthTexture()

**Returns:** `boolean`

### public boolean hasAnimatedAttachments()

**Returns:** `boolean`

### public void renderAnimatedAttachments(float x,
float y,
float z,
ColorInfo col)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`

**Returns:** `void`

### public void afterRotated()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoFireplace.html`*
