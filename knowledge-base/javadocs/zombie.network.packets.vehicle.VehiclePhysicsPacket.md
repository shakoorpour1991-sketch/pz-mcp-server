---
title: zombie.network.packets.vehicle.VehiclePhysicsPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.vehicle
---

# zombie.network.packets.vehicle.VehiclePhysicsPacket

`public class VehiclePhysicsPacket extends VehicleInterpolationData implements INetworkPacket, AntiCheatSpeed.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.vehicle

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleInterpolationData
- zombie.network.packets.vehicle.VehiclePhysicsPacket

## Constructors

### public VehiclePhysicsPacket()

## Methods

### public void set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

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

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public IMovable getMovable(int index)

**Parameters:**
- `int` `index`

**Returns:** `IMovable`

### public int getMovableCount()

**Returns:** `int`

### public void resetMovable()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\vehicle\VehiclePhysicsPacket.html`*
