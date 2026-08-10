---
title: zombie.network.packets.hit.VehicleHit
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.VehicleHit

`public abstract class VehicleHit extends Object implements HitCharacter`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.VehicleHit

## Fields

### public final VehicleHitField vehicleHit

## Constructors

### public VehicleHit()

## Methods

### public void set(IsoPlayer wielder,
IsoGameCharacter character,
BaseVehicle vehicle,
boolean isCriticalHit,
float damage,
boolean isTargetHitFromBehind,
float vehicleSpeed)

**Parameters:**
- `IsoPlayer` `wielder`
- `IsoGameCharacter` `character`
- `BaseVehicle` `vehicle`
- `boolean` `isCriticalHit`
- `float` `damage`
- `boolean` `isTargetHitFromBehind`
- `float` `vehicleSpeed`

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

### public boolean isRelevant(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void preProcess()

**Returns:** `void`

### public void postProcess()

**Returns:** `void`

### public boolean isPostponed()

**Returns:** `boolean`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\VehicleHit.html`*
