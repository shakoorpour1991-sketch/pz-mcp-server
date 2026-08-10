---
title: zombie.network.packets.character.ZombieSynchronizationPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.ZombieSynchronizationPacket

`public class ZombieSynchronizationPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.ZombieSynchronizationPacket

## Fields

### public boolean hasNeighborPlayer

### public final ArrayDeque<IsoZombie> sendQueue

## Constructors

### public ZombieSynchronizationPacket()

## Methods

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\ZombieSynchronizationPacket.html`*
