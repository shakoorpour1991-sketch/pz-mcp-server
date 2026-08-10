---
title: zombie.network.packets.character.AnimalCommandPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.AnimalCommandPacket

`public class AnimalCommandPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.AnimalCommandPacket

## Fields

### public AnimalCommandPacket.Type type

### public byte flags

### public AnimalID animalId

### public PlayerID playerId

### public VehicleID vehicleId

### public NetObject objectId

### public int x

### public int y

### public int z

### public InventoryItem item

## Constructors

### public AnimalCommandPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoGridSquare sq)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoPlayer player,
BaseVehicle vehicle,
InventoryItem item)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`
- `InventoryItem` `item`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoDeadBody deadBody,
IsoPlayer player,
BaseVehicle vehicle,
InventoryItem item)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoDeadBody` `deadBody`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`
- `InventoryItem` `item`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoPlayer player,
IsoObject object,
boolean remove)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoObject` `object`
- `boolean` `remove`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoObject object,
boolean remove)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoObject` `object`
- `boolean` `remove`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoPlayer player,
InventoryItem item)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `InventoryItem` `item`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoDeadBody body,
InventoryItem item)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoDeadBody` `body`
- `InventoryItem` `item`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoPlayer player,
IsoObject object,
InventoryItem item)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoObject` `object`
- `InventoryItem` `item`

**Returns:** `void`

### public void set(AnimalCommandPacket.Type operation,
IsoAnimal animal,
IsoPlayer player,
IsoHutch hutch)

**Parameters:**
- `AnimalCommandPacket.Type` `operation`
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoHutch` `hutch`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\AnimalCommandPacket.html`*
