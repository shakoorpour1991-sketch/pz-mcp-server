---
title: zombie.network.packets.hit.VehicleHitPlayerPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.VehicleHitPlayerPacket

`public class VehicleHitPlayerPacket extends VehicleHit implements AntiCheatHitDamage.IAntiCheat, AntiCheatHitShortDistance.IAntiCheat, AntiCheatSafety.IAntiCheat, AntiCheatSpeed.IAntiCheat, AntiCheatHitVehicle.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.VehicleHit
- zombie.network.packets.hit.VehicleHitPlayerPacket

## Constructors

### public VehicleHitPlayerPacket()

## Methods

### public void set(IsoPlayer wielder,
IsoPlayer target,
BaseVehicle vehicle,
float damage,
boolean isTargetHitFromBehind,
float vehicleSpeed)

**Parameters:**
- `IsoPlayer` `wielder`
- `IsoPlayer` `target`
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

### public void preProcess()

**Returns:** `void`

### public void process()

**Returns:** `void`

### public void postProcess()

**Returns:** `void`

### public void react()

**Returns:** `void`

### public void postpone()

**Returns:** `void`

### public void log(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

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

### public IsoGameCharacter getTarget()

**Returns:** `IsoGameCharacter`

### public IsoPlayer getWielder()

**Returns:** `IsoPlayer`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\VehicleHitPlayerPacket.html`*
