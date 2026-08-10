---
title: zombie.network.packets.connection.ConnectedPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.connection
---

# zombie.network.packets.connection.ConnectedPacket

`public class ConnectedPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.connection

## Inheritance
- java.lang.Object
- zombie.network.packets.connection.ConnectedPacket

## Constructors

### public ConnectedPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public void parse(ByteBufferReader bb,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `bb`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\connection\ConnectedPacket.html`*
