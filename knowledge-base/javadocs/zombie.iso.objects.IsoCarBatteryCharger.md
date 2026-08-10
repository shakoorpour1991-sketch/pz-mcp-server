---
title: zombie.iso.objects.IsoCarBatteryCharger
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoCarBatteryCharger

`public class IsoCarBatteryCharger extends IsoObject implements IItemProvider`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoCarBatteryCharger

## Constructors

### public IsoCarBatteryCharger(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoCarBatteryCharger(InventoryItem item,
IsoCell cell,
IsoGridSquare square)

**Parameters:**
- `InventoryItem` `item`
- `IsoCell` `cell`
- `IsoGridSquare` `square`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void load(ByteBuffer bb,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer bb,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void update()

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

### public void renderObjectPicker(float x,
float y,
float z,
ColorInfo lightInfo)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `lightInfo`

**Returns:** `void`

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

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public InventoryItem getItem()

**Returns:** `InventoryItem`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

### public InventoryItem getBattery()

**Returns:** `InventoryItem`

### public void setBattery(InventoryItem battery)

**Parameters:**
- `InventoryItem` `battery`

**Returns:** `void`

### public boolean isActivated()

**Returns:** `boolean`

### public void setActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public float getChargeRate()

**Returns:** `float`

### public void setChargeRate(float chargeRate)

**Parameters:**
- `float` `chargeRate`

**Returns:** `void`

### public Texture getTexture()

**Returns:** `Texture`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoCarBatteryCharger.html`*
