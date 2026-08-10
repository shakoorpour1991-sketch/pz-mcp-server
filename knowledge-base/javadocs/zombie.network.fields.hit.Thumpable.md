---
title: zombie.network.fields.hit.Thumpable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.Thumpable

`public class Thumpable extends Square implements IPositional, INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.Position
- zombie.network.fields.Square
- zombie.network.fields.hit.Thumpable

## Constructors

### public Thumpable()

## Methods

### public void set(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public boolean isRelevant(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

### public IsoObject getIsoObject()

**Returns:** `IsoObject`

### public String getName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\Thumpable.html`*
