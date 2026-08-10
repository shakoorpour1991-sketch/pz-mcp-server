---
title: zombie.network.packets.hit.ZombieHitPlayerPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.ZombieHitPlayerPacket

`public class ZombieHitPlayerPacket extends ZombieHit implements AntiCheatHitShortDistance.IAntiCheat, AntiCheatTarget.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.ZombieHit
- zombie.network.packets.hit.ZombieHitPlayerPacket

## Fields

### public final Player target

## Constructors

### public ZombieHitPlayerPacket()

## Methods

### public void set(IsoZombie wielder,
IsoPlayer target,
boolean didDamage,
String hitReaction,
int bodyPart)

**Parameters:**
- `IsoZombie` `wielder`
- `IsoPlayer` `target`
- `boolean` `didDamage`
- `String` `hitReaction`
- `int` `bodyPart`

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

### public void process()

**Returns:** `void`

### public void postProcess()

**Returns:** `void`

### public void log(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void react()

**Returns:** `void`

### public float getFurthestHitDistance()

**Returns:** `float`

### public short getPlayerId()

**Returns:** `short`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\ZombieHitPlayerPacket.html`*
