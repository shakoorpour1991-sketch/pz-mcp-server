---
title: zombie.iso.WorldStreamer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.WorldStreamer

`public final class WorldStreamer extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.WorldStreamer

## Fields

### public static final int CRF_CANCEL_SENT

### public static WorldStreamer instance

### public Thread worldStreamer

### public boolean finished

## Constructors

### public WorldStreamer()

## Methods

### public void updateMain()

**Returns:** `void`

### public void create()

**Returns:** `void`

### public void addJob(IsoChunk chunk,
int wx,
int wy,
boolean bDoServerRequest)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `wx`
- `int` `wy`
- `boolean` `bDoServerRequest`

**Returns:** `void`

### public void DoChunk(IsoChunk chunk,
ByteBuffer fromServer)

**Parameters:**
- `IsoChunk` `chunk`
- `ByteBuffer` `fromServer`

**Returns:** `void`

### public void DoChunkAlways(IsoChunk chunk,
ByteBuffer fromServer)

**Parameters:**
- `IsoChunk` `chunk`
- `ByteBuffer` `fromServer`

**Returns:** `void`

### public void addJobInstant(IsoChunk chunk,
int x,
int y,
int wx,
int wy)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `x`
- `int` `y`
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public void addJobConvert(IsoChunk chunk,
int x,
int y,
int wx,
int wy)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `x`
- `int` `y`
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public void addJobWipe(IsoChunk chunk,
int x,
int y,
int wx,
int wy)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `x`
- `int` `y`
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public boolean isBusy()

**Returns:** `boolean`

### public void stop()

**Returns:** `void`

### public void quit()

**Returns:** `void`

### public void requestLargeAreaZip(int wx,
int wy,
int range)
throws IOException

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `range`

**Returns:** `void`

### public void receiveChunkPart(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void receiveNotRequired(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\WorldStreamer.html`*
