---
title: zombie.network.fields.vehicle.VehicleID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.vehicle
---

# zombie.network.fields.vehicle.VehicleID

`public class VehicleID extends IDShort implements IPositional, INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.vehicle

## Inheritance
- java.lang.Object
- zombie.network.fields.IDShort
- zombie.network.fields.vehicle.VehicleID

## Constructors

### public VehicleID()

## Methods

### public void set(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

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

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\vehicle\VehicleID.html`*
