---
title: zombie.network.packets.hit.PlayerHitAnimalPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.PlayerHitAnimalPacket

`public class PlayerHitAnimalPacket extends PlayerHit implements AntiCheatHitDamage.IAntiCheat, AntiCheatHitLongDistance.IAntiCheat, AntiCheatHitWeapon.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.PlayerHit
- zombie.network.packets.hit.PlayerHitAnimalPacket

## Constructors

### public PlayerHitAnimalPacket()

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
IsoAnimal target,
float damage,
float range,
boolean hitHead)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `boolean` `isIgnoreDamage`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`
- `IsoAnimal` `target`
- `float` `damage`
- `float` `range`
- `boolean` `hitHead`

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

### public void attack()

**Returns:** `void`

### public float getDistance()

**Returns:** `float`

### public IsoPlayer getWielder()

**Returns:** `IsoPlayer`

### public Hit getHit()

**Returns:** `Hit`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\PlayerHitAnimalPacket.html`*
