---
title: zombie.network.packets.service.RecipePacket
source: Unofficial PZ JavaDocs 42.19.0
version: 42.19.0
kind: class
package: zombie.network.packets.service
---

# zombie.network.packets.service.RecipePacket

`public class RecipePacket extends Object implements INetworkPacket, AntiCheatRecipe.IAntiCheat`

**Kind:** class · **Package:** zombie.network.packets.service

## Inheritance
- java.lang.Object
- zombie.network.packets.service.RecipePacket

## Constructors

### public RecipePacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

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

### public void processClientLoading(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

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

### public long getClientChecksum()

**Returns:** `long`

### public long getServerChecksum()

**Returns:** `long`

---
*Source: Unofficial PZ JavaDocs 42.19.0 (42.19.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\service\RecipePacket.html`*
