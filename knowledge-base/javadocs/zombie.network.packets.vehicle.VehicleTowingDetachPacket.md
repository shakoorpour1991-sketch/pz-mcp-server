---
title: zombie.network.packets.vehicle.VehicleTowingDetachPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.vehicle
---

# zombie.network.packets.vehicle.VehicleTowingDetachPacket

`public class VehicleTowingDetachPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.vehicle

## Inheritance
- java.lang.Object
- zombie.network.packets.vehicle.VehicleTowingDetachPacket

## Constructors

### public VehicleTowingDetachPacket()

## Methods

### public void set(BaseVehicle vehicleA,
BaseVehicle vehicleB)

**Parameters:**
- `BaseVehicle` `vehicleA`
- `BaseVehicle` `vehicleB`

**Returns:** `void`

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

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

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\vehicle\VehicleTowingDetachPacket.html`*
