---
title: zombie.network.packets.vehicle.VehicleSwitchSeatPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.vehicle
---

# zombie.network.packets.vehicle.VehicleSwitchSeatPacket

`public class VehicleSwitchSeatPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.vehicle

## Inheritance
- java.lang.Object
- zombie.network.packets.vehicle.VehicleSwitchSeatPacket

## Constructors

### public VehicleSwitchSeatPacket()

## Methods

### public void set(BaseVehicle vehicle,
IsoPlayer player,
int seatFrom,
int seatTo)

**Parameters:**
- `BaseVehicle` `vehicle`
- `IsoPlayer` `player`
- `int` `seatFrom`
- `int` `seatTo`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\vehicle\VehicleSwitchSeatPacket.html`*
