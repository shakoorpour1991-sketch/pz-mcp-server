---
title: zombie.network.packets.RequestZipListPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.RequestZipListPacket

`public class RequestZipListPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.RequestZipListPacket

## Constructors

### public RequestZipListPacket()

## Methods

### public void set(ArrayList<WorldStreamer.ChunkRequest> tempRequests)

**Parameters:**
- `ArrayList<WorldStreamer.ChunkRequest>` `tempRequests`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\RequestZipListPacket.html`*
