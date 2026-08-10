---
title: zombie.network.packets.hit.AnimalHitPlayerPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.hit
---

# zombie.network.packets.hit.AnimalHitPlayerPacket

`public class AnimalHitPlayerPacket extends AnimalHit`

**Kind:** class · **Package:** zombie.network.packets.hit

## Inheritance
- java.lang.Object
- zombie.network.packets.hit.AnimalHit
- zombie.network.packets.hit.AnimalHitPlayerPacket

## Constructors

### public AnimalHitPlayerPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoAnimal wielder,
IsoPlayer target,
boolean ignore,
float damage)

**Parameters:**
- `IsoAnimal` `wielder`
- `IsoPlayer` `target`
- `boolean` `ignore`
- `float` `damage`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\hit\AnimalHitPlayerPacket.html`*
