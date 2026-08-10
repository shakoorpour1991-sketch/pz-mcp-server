---
title: zombie.network.packets.service.PlayerTimeoutPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.service
---

# zombie.network.packets.service.PlayerTimeoutPacket

`public class PlayerTimeoutPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.service

## Inheritance
- java.lang.Object
- zombie.network.packets.service.PlayerTimeoutPacket

## Constructors

### public PlayerTimeoutPacket()

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

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\service\PlayerTimeoutPacket.html`*
