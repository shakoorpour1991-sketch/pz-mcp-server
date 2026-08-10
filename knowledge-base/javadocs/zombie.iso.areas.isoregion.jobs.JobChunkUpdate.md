---
title: zombie.iso.areas.isoregion.jobs.JobChunkUpdate
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.jobs
---

# zombie.iso.areas.isoregion.jobs.JobChunkUpdate

`public class JobChunkUpdate extends RegionJob`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.jobs

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.jobs.RegionJob
- zombie.iso.areas.isoregion.jobs.JobChunkUpdate

## Description

TurboTuTone.

## Methods

### public UdpConnection getTargetConn()

**Returns:** `UdpConnection`

### public void setTargetConn(UdpConnection conn)

**Parameters:**
- `UdpConnection` `conn`

**Returns:** `void`

### public int getChunkCount()

**Returns:** `int`

### public ByteBuffer getBuffer()

**Returns:** `ByteBuffer`

### public long getNetTimeStamp()

**Returns:** `long`

### public void setNetTimeStamp(long netTimeStamp)

**Parameters:**
- `long` `netTimeStamp`

**Returns:** `void`

### public boolean readChunksPacket(DataRoot root,
List<Integer> knownChunks)

**Parameters:**
- `DataRoot` `root`
- `List<Integer>` `knownChunks`

**Returns:** `boolean`

### public boolean saveChunksToDisk()

**Returns:** `boolean`

### public boolean saveChunksToNetBuffer(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `boolean`

### public boolean readChunksFromNetBuffer(ByteBufferReader bb,
long serverTimeStamp)

**Parameters:**
- `ByteBufferReader` `bb`
- `long` `serverTimeStamp`

**Returns:** `boolean`

### public boolean canAddChunk()

**Returns:** `boolean`

### public boolean addChunkFromDataChunk(DataChunk chunk)

**Parameters:**
- `DataChunk` `chunk`

**Returns:** `boolean`

### public boolean addChunkFromIsoChunk(IsoChunk isoChunk)

**Parameters:**
- `IsoChunk` `isoChunk`

**Returns:** `boolean`

### public boolean addChunkFromFile(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\jobs\JobChunkUpdate.html`*
