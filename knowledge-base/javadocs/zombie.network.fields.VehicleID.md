---
title: zombie.network.fields.VehicleID
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.VehicleID

`public class VehicleID extends IDShort implements IPositional, INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.VehicleID

## Constructors

### public VehicleID()

## Methods

### public void set(BaseVehicle vehiclex)

**Parameters:**
- `BaseVehicle` `vehiclex`

**Returns:** `void`

### public void parse(ByteBuffer byteBuffer,
UdpConnection udpConnection)

**Parameters:**
- `ByteBuffer` `byteBuffer`
- `UdpConnection` `udpConnection`

**Returns:** `void`

### public void write(ByteBufferWriter byteBufferWriter)

**Parameters:**
- `ByteBufferWriter` `byteBufferWriter`

**Returns:** `void`

### public boolean isConsistent(UdpConnection udpConnection)

**Parameters:**
- `UdpConnection` `udpConnection`

**Returns:** `boolean`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\VehicleID.html`*
