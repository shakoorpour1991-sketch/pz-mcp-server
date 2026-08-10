---
title: zombie.network.fields.hit.Damage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Damage

`public class Damage extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Damage

## Constructors

### public Damage()

## Methods

### public void set(boolean ignore,
float damage)

**Parameters:**
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

### public void processAnimal(IsoAnimal wielder,
IsoAnimal target)

**Parameters:**
- `IsoAnimal` `wielder`
- `IsoAnimal` `target`

**Returns:** `void`

### public void processPlayer(IsoAnimal wielder,
IsoPlayer target)

**Parameters:**
- `IsoAnimal` `wielder`
- `IsoPlayer` `target`

**Returns:** `void`

### public float getDamage()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Damage.html`*
