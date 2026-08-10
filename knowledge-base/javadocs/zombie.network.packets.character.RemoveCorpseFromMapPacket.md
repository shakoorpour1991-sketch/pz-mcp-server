---
title: zombie.network.packets.character.RemoveCorpseFromMapPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.RemoveCorpseFromMapPacket

`public class RemoveCorpseFromMapPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.RemoveCorpseFromMapPacket

## Constructors

### public RemoveCorpseFromMapPacket()

## Methods

### public void set(IsoDeadBody deadBody)

**Parameters:**
- `IsoDeadBody` `deadBody`

**Returns:** `void`

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

### public String getDescription()

**Returns:** `String`

### public boolean isConsistent(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `boolean`

### public boolean isRelevant(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

### public void postpone()

**Returns:** `void`

### public boolean isPostponed()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\RemoveCorpseFromMapPacket.html`*
