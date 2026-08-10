---
title: zombie.network.packets.connection.ServerCustomizationPacket
source: Unofficial PZ JavaDocs 42.16.0
version: 42.16.0
kind: class
package: zombie.network.packets.connection
---

# zombie.network.packets.connection.ServerCustomizationPacket

`public class ServerCustomizationPacket extends Object implements INetworkPacket, AntiCheatServerCustomizationDDOS.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.connection

## Inheritance
- java.lang.Object
- zombie.network.packets.connection.ServerCustomizationPacket

## Constructors

### public ServerCustomizationPacket()

## Methods

### public long getLastConnect()

**Returns:** `long`

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

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.16.0 (42.16.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\connection\ServerCustomizationPacket.html`*
