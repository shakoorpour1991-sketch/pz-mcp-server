---
title: zombie.network.fields.hit.Bite
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Bite

`public class Bite extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Bite

## Constructors

### public Bite()

## Methods

### public void set(IsoZombie wielder,
boolean didDamage,
String hitReaction,
int bodyPart)

**Parameters:**
- `IsoZombie` `wielder`
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

### public String getDescription()

**Returns:** `String`

### public void process(IsoZombie wielder,
IsoGameCharacter target)

**Parameters:**
- `IsoZombie` `wielder`
- `IsoGameCharacter` `target`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Bite.html`*
