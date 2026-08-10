---
title: zombie.network.id.ObjectID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.id
---

# zombie.network.id.ObjectID

`public abstract class ObjectID extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.id

## Inheritance
- java.lang.Object
- zombie.network.id.ObjectID

## Methods

### public long getObjectID()

**Returns:** `long`

### public IIdentifiable getObject()

**Returns:** `IIdentifiable`

### public void set(ObjectID other)

**Parameters:**
- `ObjectID` `other`

**Returns:** `void`

### public ObjectID clone()

**Returns:** `ObjectID`

### public void reset()

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

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

### public String toString()

**Returns:** `String`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\id\ObjectID.html`*
