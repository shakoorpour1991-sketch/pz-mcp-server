---
title: zombie.iso.objects.IsoStackedWasherDryer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoStackedWasherDryer

`public class IsoStackedWasherDryer extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoStackedWasherDryer

## Constructors

### public IsoStackedWasherDryer(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoStackedWasherDryer(IsoCell cell,
IsoGridSquare sq,
IsoSprite gid)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `gid`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void createContainersFromSpriteProperties()

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

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void addToWorld()

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

### public boolean isItemAllowedInContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isRemoveItemAllowedFromContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

### public boolean isWasherActivated()

**Returns:** `boolean`

### public void setWasherActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public boolean isDryerActivated()

**Returns:** `boolean`

### public void setDryerActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoStackedWasherDryer.html`*
