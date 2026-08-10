---
title: zombie.network.fields.NetObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields
---

# zombie.network.fields.NetObject

`public class NetObject extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields

## Inheritance
- java.lang.Object
- zombie.network.fields.NetObject

## Constructors

### public NetObject()

## Methods

### public NetObject setObject(IsoObject value)

**Parameters:**
- `IsoObject` `value`

**Returns:** `NetObject`

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

### public void write(ByteBuffer b)

**Parameters:**
- `ByteBuffer` `b`

**Returns:** `void`

### public int getPacketSizeBytes()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\NetObject.html`*
