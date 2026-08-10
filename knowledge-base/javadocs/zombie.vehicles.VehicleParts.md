---
title: zombie.vehicles.VehicleParts
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleParts

`public final class VehicleParts extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleParts

## Constructors

### public VehicleParts()

## Methods

### public void setOwner(VehiclePartOwner owner)

**Parameters:**
- `VehiclePartOwner` `owner`

**Returns:** `void`

### public VehiclePartOwner getOwner()

**Returns:** `VehiclePartOwner`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public VehicleScript getScript()

**Returns:** `VehicleScript`

### public void clear()

**Returns:** `void`

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean contains(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `boolean`

### public int indexOf(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `int`

### public void add(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public VehiclePart get(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehiclePart`

### public int getPartCount()

**Returns:** `int`

### public VehiclePart getPartByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehiclePart`

### public VehiclePart getPartByPartId(VehiclePart id)

**Parameters:**
- `VehiclePart` `id`

**Returns:** `VehiclePart`

### public VehiclePart getPartById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehiclePart`

### public int getPartIndex(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public int getNumberOfPartsWithContainers()

**Returns:** `int`

### public VehiclePart getBattery()

**Returns:** `VehiclePart`

### public float getBatteryCharge()

**Returns:** `float`

### public VehiclePart getEngine()

**Returns:** `VehiclePart`

### public int getEngineCondition()

**Returns:** `int`

### public boolean isEngineWorking()

**Returns:** `boolean`

### public VehiclePart getTrunkDoorPart()

**Returns:** `VehiclePart`

### public VehiclePart getTrunkPart()

**Returns:** `VehiclePart`

### public VehiclePart getTrailerTrunkPart()

**Returns:** `VehiclePart`

### public VehiclePart getPartForSeatContainer(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `VehiclePart`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public void createParts()

**Returns:** `void`

### public void initParts()

**Returns:** `void`

### public void setScript(VehicleScript script)

**Parameters:**
- `VehicleScript` `script`

**Returns:** `void`

### public boolean updatePart(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `boolean`

### public boolean update()

**Returns:** `boolean`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleParts.html`*
