---
title: zombie.iso.objects.interfaces.IClothingWasherDryerLogic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.iso.objects.interfaces
---

# zombie.iso.objects.interfaces.IClothingWasherDryerLogic

`public interface IClothingWasherDryerLogic`

**Kind:** interface · **Package:** zombie.iso.objects.interfaces

## Methods

### void update()

**Returns:** `void`

### void saveChange(IsoObjectChange var1,
se.krka.kahlua.vm.KahluaTable var2,
ByteBufferWriter var3)

**Parameters:**
- `IsoObjectChange` `var1`
- `se.krka.kahlua.vm.KahluaTable` `var2`
- `ByteBufferWriter` `var3`

**Returns:** `void`

### void loadChange(IsoObjectChange var1,
ByteBufferReader var2)

**Parameters:**
- `IsoObjectChange` `var1`
- `ByteBufferReader` `var2`

**Returns:** `void`

### ItemContainer getContainer()

**Returns:** `ItemContainer`

### boolean isItemAllowedInContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isRemoveItemAllowedFromContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### boolean isActivated()

**Returns:** `boolean`

### void setActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### void switchModeOn()

**Returns:** `void`

### void switchModeOff()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\interfaces\IClothingWasherDryerLogic.html`*
