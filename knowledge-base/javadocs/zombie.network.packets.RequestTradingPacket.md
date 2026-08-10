---
title: zombie.network.packets.RequestTradingPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.RequestTradingPacket

`public class RequestTradingPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.RequestTradingPacket

## Constructors

### public RequestTradingPacket()

## Methods

### public void ask(IsoPlayer player,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `player`
- `IsoPlayer` `other`

**Returns:** `void`

### public void accept(IsoPlayer player,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `player`
- `IsoPlayer` `other`

**Returns:** `void`

### public void reject(IsoPlayer player,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `player`
- `IsoPlayer` `other`

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

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\RequestTradingPacket.html`*
