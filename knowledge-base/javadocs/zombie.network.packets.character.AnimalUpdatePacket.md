---
title: zombie.network.packets.character.AnimalUpdatePacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.AnimalUpdatePacket

`public class AnimalUpdatePacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.AnimalUpdatePacket

## Constructors

### public AnimalUpdatePacket()

## Methods

### public HashSet<Short> getRequested()

**Returns:** `HashSet<Short>`

### public HashSet<Short> getUpdated()

**Returns:** `HashSet<Short>`

### public HashSet<Short> getDeleted()

**Returns:** `HashSet<Short>`

### public HashSet<Short> getPending()

**Returns:** `HashSet<Short>`

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

### public void processServer(PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\AnimalUpdatePacket.html`*
