---
title: zombie.network.packets.SentChunkPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.SentChunkPacket

`public class SentChunkPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.SentChunkPacket

## Constructors

### public SentChunkPacket()

## Methods

### public void setChunk(ClientChunkRequest.Chunk chunk,
int fileSize,
byte[] inMemoryZip)

**Parameters:**
- `ClientChunkRequest.Chunk` `chunk`
- `int` `fileSize`
- `byte[]` `inMemoryZip`

**Returns:** `void`

### public boolean hasData()

**Returns:** `boolean`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\SentChunkPacket.html`*
