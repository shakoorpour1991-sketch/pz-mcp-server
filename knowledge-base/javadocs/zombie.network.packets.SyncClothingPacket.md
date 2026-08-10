---
title: zombie.network.packets.SyncClothingPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.SyncClothingPacket

`public class SyncClothingPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.SyncClothingPacket

## Constructors

### public SyncClothingPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

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

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\SyncClothingPacket.html`*
