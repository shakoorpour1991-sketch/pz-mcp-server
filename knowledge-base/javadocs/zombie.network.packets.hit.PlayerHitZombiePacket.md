---
title: zombie.network.packets.hit.PlayerHitZombiePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.PlayerHitZombiePacket

`public class PlayerHitZombiePacket extends PlayerHit implements AntiCheatHitDamage.IAntiCheat, AntiCheatHitLongDistance.IAntiCheat, AntiCheatHitWeapon.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.PlayerHit
- zombie.network.packets.hit.PlayerHitZombiePacket

## Constructors

### public PlayerHitZombiePacket()

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
IsoZombie target,
float damage,
float range,
boolean helmetFall,
boolean hitHead,
boolean hitLegs,
boolean removeKnife)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `boolean` `isIgnoreDamage`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`
- `IsoZombie` `target`
- `float` `damage`
- `float` `range`
- `boolean` `helmetFall`
- `boolean` `hitHead`
- `boolean` `hitLegs`
- `boolean` `removeKnife`

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

### public void logInconsistentPacket(IConnection connection,
PacketTypes.PacketType packetType)

**Parameters:**
- `IConnection` `connection`
- `PacketTypes.PacketType` `packetType`

**Returns:** `void`

### public void preProcess()

**Returns:** `void`

### public void process()

**Returns:** `void`

### public void postProcess()

**Returns:** `void`

### public void react()

**Returns:** `void`

### public float getDistance()

**Returns:** `float`

### public IsoPlayer getWielder()

**Returns:** `IsoPlayer`

### public Hit getHit()

**Returns:** `Hit`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\PlayerHitZombiePacket.html`*
