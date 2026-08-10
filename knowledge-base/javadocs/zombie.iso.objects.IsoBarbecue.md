---
title: zombie.iso.objects.IsoBarbecue
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoBarbecue

`public class IsoBarbecue extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoBarbecue

## Constructors

### public IsoBarbecue(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoBarbecue(IsoCell cell,
IsoGridSquare isoGridSquare,
IsoSprite isoSprite)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `isoGridSquare`
- `IsoSprite` `isoSprite`

## Methods

### public String getObjectName()

**Returns:** `String`

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

### public void setFuelAmount(int fuelAmount)

**Parameters:**
- `int` `fuelAmount`

**Returns:** `void`

### public int getFuelAmount()

**Returns:** `int`

### public void addFuel(int fuelAmount)

**Parameters:**
- `int` `fuelAmount`

**Returns:** `void`

### public int useFuel(int amount)

**Parameters:**
- `int` `amount`

**Returns:** `int`

### public boolean hasFuel()

**Returns:** `boolean`

### public boolean hasPropaneTank()

**Returns:** `boolean`

### public boolean isPropaneBBQ()

**Returns:** `boolean`

### public static boolean isSpriteWithPropaneTank(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `boolean`

### public static boolean isSpriteWithoutPropaneTank(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `boolean`

### public void setPropaneTank(InventoryItem tank)

**Parameters:**
- `InventoryItem` `tank`

**Returns:** `void`

### public InventoryItem removePropaneTank()

**Returns:** `InventoryItem`

### public void setLit(boolean lit)

**Parameters:**
- `boolean` `lit`

**Returns:** `void`

### public boolean isLit()

**Returns:** `boolean`

### public boolean isSmouldering()

**Returns:** `boolean`

### public void turnOn()

**Returns:** `void`

### public void turnOff()

**Returns:** `void`

### public void toggle()

**Returns:** `void`

### public void extinguish()

**Returns:** `void`

### public float getTemperature()

**Returns:** `float`

### public boolean isTemperatureChanging()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void setSprite(IsoSprite isoSprite)

**Parameters:**
- `IsoSprite` `isoSprite` — the sprite to set

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo colorInfo,
boolean doChild,
boolean wallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`
- `boolean` `doChild`
- `boolean` `wallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable kahluaTable,
ByteBufferWriter byteBuffer)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `kahluaTable`
- `ByteBufferWriter` `byteBuffer`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader byteBuffer)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `byteBuffer`

**Returns:** `void`

### public boolean hasAnimatedAttachments()

**Returns:** `boolean`

### public void renderAnimatedAttachments(float x,
float y,
float z,
ColorInfo colorInfo)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoBarbecue.html`*
