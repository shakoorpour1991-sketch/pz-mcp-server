---
title: zombie.network.packets.service.ChecksumPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.service
---

# zombie.network.packets.service.ChecksumPacket

`public class ChecksumPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.service

## Inheritance
- java.lang.Object
- zombie.network.packets.service.ChecksumPacket

## Constructors

### public ChecksumPacket()

## Methods

### public void setPacketTotalChecksum()

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

### public void parseServer(ByteBufferReader b,
UdpConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendTotalChecksum()

**Returns:** `void`

### public static void sendError(UdpConnection connection,
String error)

**Parameters:**
- `UdpConnection` `connection`
- `String` `error`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\service\ChecksumPacket.html`*
