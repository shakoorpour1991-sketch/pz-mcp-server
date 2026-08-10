---
title: zombie.network.ClientChunkRequest
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ClientChunkRequest

`public class ClientChunkRequest extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ClientChunkRequest

## Fields

### public final List<ClientChunkRequest.Chunk> chunks

### public static final ConcurrentLinkedQueue<ByteBuffer> freeBuffers

### public boolean largeArea

## Constructors

### public ClientChunkRequest()

## Methods

### public ClientChunkRequest.Chunk getChunk()

**Returns:** `ClientChunkRequest.Chunk`

### public ClientChunkRequest.Chunk getRetryChunk(ClientChunkRequest.Chunk originalChunk)

**Parameters:**
- `ClientChunkRequest.Chunk` `originalChunk`

**Returns:** `ClientChunkRequest.Chunk`

### public void releaseChunk(ClientChunkRequest.Chunk chunk)

**Parameters:**
- `ClientChunkRequest.Chunk` `chunk`

**Returns:** `void`

### public boolean isChunksFilled()

**Returns:** `boolean`

### public void getByteBuffer(ClientChunkRequest.Chunk chunk)

**Parameters:**
- `ClientChunkRequest.Chunk` `chunk`

**Returns:** `void`

### public void releaseBuffer(ClientChunkRequest.Chunk chunk)

**Parameters:**
- `ClientChunkRequest.Chunk` `chunk`

**Returns:** `void`

### public void releaseBuffers()

**Returns:** `void`

### public void unpack(ByteBuffer bb,
UdpConnection connection)

**Parameters:**
- `ByteBuffer` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public void unpackLargeArea(ByteBuffer bb,
UdpConnection connection)

**Parameters:**
- `ByteBuffer` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ClientChunkRequest.html`*
