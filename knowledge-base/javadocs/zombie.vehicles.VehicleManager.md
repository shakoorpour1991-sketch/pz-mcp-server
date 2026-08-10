---
title: zombie.vehicles.VehicleManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleManager

`public final class VehicleManager extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleManager

## Fields

### public static VehicleManager instance

### public final gnu.trove.map.hash.TShortShortHashMap towedVehicleMap

### public final UdpConnection[] connected

## Constructors

### public VehicleManager()

## Methods

### public void removeVehicles(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void registerVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void unregisterVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public BaseVehicle getVehicleByID(short id)

**Parameters:**
- `short` `id`

**Returns:** `BaseVehicle`

### public ArrayList<BaseVehicle> getVehicles()

**Returns:** `ArrayList<BaseVehicle>`

### public void removeFromWorld(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void serverUpdate()

**Returns:** `void`

### public void clientUpdate()

**Returns:** `void`

### public void clientUpdateVehiclePos(BaseVehicle vehicle,
float x,
float y,
float z,
IsoGridSquare sq)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void sendVehicleRequest(short vehicleId,
short flag)

**Parameters:**
- `short` `vehicleId`
- `short` `flag`

**Returns:** `void`

### public void attachTowing(BaseVehicle vehicleA,
BaseVehicle vehicleB,
String attachmentA,
String attachmentB)

**Parameters:**
- `BaseVehicle` `vehicleA`
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`

**Returns:** `void`

### public void detachTowing(BaseVehicle vehicleTowing,
BaseVehicle vehicleTowedBy)

**Parameters:**
- `BaseVehicle` `vehicleTowing`
- `BaseVehicle` `vehicleTowedBy`

**Returns:** `void`

### public short getTowedVehicleID(short towingID)

**Parameters:**
- `short` `towingID`

**Returns:** `short`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleManager.html`*
