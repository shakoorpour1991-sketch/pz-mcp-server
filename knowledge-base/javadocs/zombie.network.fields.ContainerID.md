---
title: zombie.network.fields.ContainerID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.ContainerID

`public class ContainerID extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.ContainerID

## Fields

### public final PlayerID playerId

### public ContainerID.ContainerType containerType

### public int x

### public int y

### public byte z

### public int worldItemId

### public int[] floorXY

## Constructors

### public ContainerID()

## Methods

### public ContainerID.ContainerType getContainerType()

**Returns:** `ContainerID.ContainerType`

### public void set(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public void copy(ContainerID other)

**Parameters:**
- `ContainerID` `other`

**Returns:** `void`

### public void setFloor(ItemContainer container,
IsoGridSquare sq)

**Parameters:**
- `ItemContainer` `container`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void setObject(ItemContainer container,
IsoObject o,
IsoGridSquare sq)

**Parameters:**
- `ItemContainer` `container`
- `IsoObject` `o`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void setObjectInVehicle(ItemContainer container,
IsoObject o,
IsoGridSquare sq,
ItemContainer part)

**Parameters:**
- `ItemContainer` `container`
- `IsoObject` `o`
- `IsoGridSquare` `sq`
- `ItemContainer` `part`

**Returns:** `void`

### public void setInventoryContainer(ItemContainer container,
IsoPlayer player)

**Parameters:**
- `ItemContainer` `container`
- `IsoPlayer` `player`

**Returns:** `void`

### public void set(ItemContainer container,
IsoObject o)

**Parameters:**
- `ItemContainer` `container`
- `IsoObject` `o`

**Returns:** `void`

### public boolean isContainerTheSame(int itemId,
ItemContainer source)

**Parameters:**
- `int` `itemId`
- `ItemContainer` `source`

**Returns:** `boolean`

### public ItemContainer getContainer()

**Returns:** `ItemContainer`

### public IsoObject getObject()

**Returns:** `IsoObject`

### public VehiclePart getPart()

**Returns:** `VehiclePart`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void write(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void findObject()

**Returns:** `void`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\ContainerID.html`*
