---
title: zombie.network.packets.hit.PlayerHitObjectPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.PlayerHitObjectPacket

`public class PlayerHitObjectPacket extends PlayerHit implements AntiCheatHitLongDistance.IAntiCheat, AntiCheatHitWeapon.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.PlayerHit
- zombie.network.packets.hit.PlayerHitObjectPacket

## Constructors

### public PlayerHitObjectPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer wielder,
HandWeapon weapon,
boolean isIgnoreDamage,
boolean isCriticalHit,
List<TracerInfo> tracers,
IsoObject obj)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `boolean` `isIgnoreDamage`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`
- `IsoObject` `obj`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void process()

**Returns:** `void`

### public void attack()

**Returns:** `void`

### public IsoPlayer getWielder()

**Returns:** `IsoPlayer`

### public float getDistance()

**Returns:** `float`

### public void log(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\PlayerHitObjectPacket.html`*
