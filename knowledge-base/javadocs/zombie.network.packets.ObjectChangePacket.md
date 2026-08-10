---
title: zombie.network.packets.ObjectChangePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.ObjectChangePacket

`public class ObjectChangePacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.ObjectChangePacket

## Constructors

### public ObjectChangePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public static IsoObject parseObjectChange(IsoObject o,
ByteBufferReader b,
IConnection connection)
throws ObjectChangePacket.IsoObjectChangeTargetNotFoundException

**Parameters:**
- `IsoObject` `o`
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `IsoObject`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\ObjectChangePacket.html`*
