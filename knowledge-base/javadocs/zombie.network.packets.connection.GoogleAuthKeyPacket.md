---
title: zombie.network.packets.connection.GoogleAuthKeyPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.connection
---

# zombie.network.packets.connection.GoogleAuthKeyPacket

`public class GoogleAuthKeyPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.connection

## Inheritance
- java.lang.Object
- zombie.network.packets.connection.GoogleAuthKeyPacket

## Constructors

### public GoogleAuthKeyPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\connection\GoogleAuthKeyPacket.html`*
