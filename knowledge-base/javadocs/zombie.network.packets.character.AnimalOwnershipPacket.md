---
title: zombie.network.packets.character.AnimalOwnershipPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets.character
---

# zombie.network.packets.character.AnimalOwnershipPacket

`public class AnimalOwnershipPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets.character

## Inheritance
- java.lang.Object
- zombie.network.packets.character.AnimalOwnershipPacket

## Constructors

### public AnimalOwnershipPacket()

## Methods

### public HashSet<Short> getDeleted()

**Returns:** `HashSet<Short>`

### public HashSet<Short> getOwned()

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

### public void processClient(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\character\AnimalOwnershipPacket.html`*
