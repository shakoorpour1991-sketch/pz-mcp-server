---
title: zombie.network.fields.MovingObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.MovingObject

`public class MovingObject extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.MovingObject

## Constructors

### public MovingObject()

## Methods

### public void set(IsoObject value)

**Parameters:**
- `IsoObject` `value`

**Returns:** `void`

### public IsoObject getObject()

**Returns:** `IsoObject`

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

### public int getPacketSizeBytes()

**Returns:** `int`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\MovingObject.html`*
