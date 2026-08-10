---
title: zombie.network.fields.vehicle.VehicleAuthorization
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.vehicle
---

# zombie.network.fields.vehicle.VehicleAuthorization

`public class VehicleAuthorization extends VehicleField implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.vehicle

## Inheritance
- java.lang.Object
- zombie.network.fields.vehicle.VehicleField
- zombie.network.fields.vehicle.VehicleAuthorization

## Constructors

### public VehicleAuthorization(VehicleID vehicleID)

**Parameters:**
- `VehicleID` `vehicleID`

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

### public BaseVehicle.Authorization getAuthorization()

**Returns:** `BaseVehicle.Authorization`

### public short getAuthorizationPlayer()

**Returns:** `short`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\vehicle\VehicleAuthorization.html`*
