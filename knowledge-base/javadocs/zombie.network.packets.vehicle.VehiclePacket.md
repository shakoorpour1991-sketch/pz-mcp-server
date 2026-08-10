---
title: zombie.network.packets.vehicle.VehiclePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.vehicle
---

# zombie.network.packets.vehicle.VehiclePacket

`public abstract class VehiclePacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.vehicle

## Inheritance
- java.lang.Object
- zombie.network.packets.vehicle.VehiclePacket

## Constructors

### public VehiclePacket()

## Methods

### public void set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\vehicle\VehiclePacket.html`*
