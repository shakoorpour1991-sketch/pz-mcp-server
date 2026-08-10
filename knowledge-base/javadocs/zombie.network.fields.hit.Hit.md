---
title: zombie.network.fields.hit.Hit
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Hit

`public abstract class Hit extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Hit

## Constructors

### public Hit()

## Methods

### public void set(float damage,
float hitForce,
float hitDirectionX,
float hitDirectionY)

**Parameters:**
- `float` `damage`
- `float` `hitForce`
- `float` `hitDirectionX`
- `float` `hitDirectionY`

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

### public float getDamage()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Hit.html`*
