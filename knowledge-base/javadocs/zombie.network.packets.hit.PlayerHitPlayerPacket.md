---
title: zombie.network.packets.hit.PlayerHitPlayerPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.PlayerHitPlayerPacket

`public class PlayerHitPlayerPacket extends PlayerHit implements AntiCheatHitDamage.IAntiCheat, AntiCheatHitLongDistance.IAntiCheat, AntiCheatHitWeapon.IAntiCheat, AntiCheatSafety.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.PlayerHit
- zombie.network.packets.hit.PlayerHitPlayerPacket

## Fields

### public final Player target

## Constructors

### public PlayerHitPlayerPacket()

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
IsoPlayer target,
float damage,
float range,
boolean hitHead,
boolean hitLegs)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `boolean` `isIgnoreDamage`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`
- `IsoPlayer` `target`
- `float` `damage`
- `float` `range`
- `boolean` `hitHead`
- `boolean` `hitLegs`

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

### public void update()

**Returns:** `void`

### public void preProcess()

**Returns:** `void`

### public void process()

**Returns:** `void`

### public void postProcess()

**Returns:** `void`

### public void log(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void attack()

**Returns:** `void`

### public void react()

**Returns:** `void`

### public float getDistance()

**Returns:** `float`

### public Hit getHit()

**Returns:** `Hit`

### public IsoGameCharacter getTarget()

**Returns:** `IsoGameCharacter`

### public IsoPlayer getWielder()

**Returns:** `IsoPlayer`

### public boolean isMelee()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\PlayerHitPlayerPacket.html`*
