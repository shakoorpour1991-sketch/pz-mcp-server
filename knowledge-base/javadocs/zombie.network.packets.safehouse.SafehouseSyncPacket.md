---
title: zombie.network.packets.safehouse.SafehouseSyncPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.safehouse
---

# zombie.network.packets.safehouse.SafehouseSyncPacket

`public class SafehouseSyncPacket extends Group implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.safehouse

## Inheritance
- java.lang.Object
- zombie.network.fields.Group
- zombie.network.packets.safehouse.SafehouseSyncPacket

## Constructors

### public SafehouseSyncPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(SafeHouse safehouse)

**Parameters:**
- `SafeHouse` `safehouse`

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

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\safehouse\SafehouseSyncPacket.html`*
