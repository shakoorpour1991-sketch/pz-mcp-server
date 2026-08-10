---
title: zombie.vehicleNetworkSound.AddVehiclePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicleNetworkSound
---

# zombie.vehicleNetworkSound.AddVehiclePacket

`public final class AddVehiclePacket extends SharedVehicleState implements INetworkPacket`

**Kind:** class · **Package:** zombie.vehicleNetworkSound

## Inheritance
- java.lang.Object
- zombie.vehicleNetworkSound.SharedVehicleState
- zombie.vehicleNetworkSound.AddVehiclePacket

## Constructors

### public AddVehiclePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void parse(ByteBufferReader bb,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `bb`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicleNetworkSound\AddVehiclePacket.html`*
