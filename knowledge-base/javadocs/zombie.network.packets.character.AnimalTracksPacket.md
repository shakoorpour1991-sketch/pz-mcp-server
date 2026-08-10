---
title: zombie.network.packets.character.AnimalTracksPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.AnimalTracksPacket

`public class AnimalTracksPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.AnimalTracksPacket

## Constructors

### public AnimalTracksPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

**Returns:** `void`

### public void set(IsoPlayer character)

**Parameters:**
- `IsoPlayer` `character`

**Returns:** `void`

### public void set(IsoPlayer character,
AnimalTracks tracks)

**Parameters:**
- `IsoPlayer` `character`
- `AnimalTracks` `tracks`

**Returns:** `void`

### public void set(IsoPlayer character,
AnimalTracks tracks,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `character`
- `AnimalTracks` `tracks`
- `InventoryItem` `item`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\AnimalTracksPacket.html`*
