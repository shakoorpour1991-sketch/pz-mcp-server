---
title: zombie.network.fields.hit.Fall
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Fall

`public class Fall extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Fall

## Fields

### public float dropDirection

## Constructors

### public Fall()

## Methods

### public void set(HitReactionNetworkAI hitReaction)

**Parameters:**
- `HitReactionNetworkAI` `hitReaction`

**Returns:** `void`

### public void set(float dropPositionX,
float dropPositionY,
byte dropPositionZ,
float dropDirection)

**Parameters:**
- `float` `dropPositionX`
- `float` `dropPositionY`
- `byte` `dropPositionZ`
- `float` `dropDirection`

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

### public void process(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Fall.html`*
