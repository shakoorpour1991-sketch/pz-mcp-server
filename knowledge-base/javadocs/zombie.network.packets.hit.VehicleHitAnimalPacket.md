---
title: zombie.network.packets.hit.VehicleHitAnimalPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.VehicleHitAnimalPacket

`public class VehicleHitAnimalPacket extends VehicleHit implements AntiCheatHitDamage.IAntiCheat, AntiCheatHitShortDistance.IAntiCheat, AntiCheatSpeed.IAntiCheat, AntiCheatHitVehicle.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.VehicleHit
- zombie.network.packets.hit.VehicleHitAnimalPacket

## Constructors

### public VehicleHitAnimalPacket()

## Methods

### public void set(IsoPlayer wielder,
IsoAnimal target,
BaseVehicle vehicle,
float damage,
boolean isTargetHitFromBehind,
float vehicleSpeed)

**Parameters:**
- `IsoPlayer` `wielder`
- `IsoAnimal` `target`
- `BaseVehicle` `vehicle`
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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void process()

**Returns:** `void`

### public float getFurthestHitDistance()

**Returns:** `float`

### public Hit getHit()

**Returns:** `Hit`

### public IMovable getMovable(int index)

**Parameters:**
- `int` `index`

**Returns:** `IMovable`

### public int getMovableCount()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\VehicleHitAnimalPacket.html`*
