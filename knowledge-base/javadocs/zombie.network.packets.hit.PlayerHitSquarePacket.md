---
title: zombie.network.packets.hit.PlayerHitSquarePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.PlayerHitSquarePacket

`public class PlayerHitSquarePacket extends PlayerHit implements AntiCheatHitLongDistance.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.PlayerHit
- zombie.network.packets.hit.PlayerHitSquarePacket

## Constructors

### public PlayerHitSquarePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer wielder,
HandWeapon weapon,
boolean isIgnoreDamage,
boolean isCriticalHit,
List<TracerInfo> tracers)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `boolean` `isIgnoreDamage`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`

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

### public float getDistance()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\PlayerHitSquarePacket.html`*
