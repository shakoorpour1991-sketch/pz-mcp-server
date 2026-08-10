---
title: zombie.iso.NewMapBinaryFile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.NewMapBinaryFile

`public class NewMapBinaryFile extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.NewMapBinaryFile

## Fields

### public final boolean pot

### public final int chunkDim

### public final int chunksPerCell

### public final int cellDim

## Constructors

### public NewMapBinaryFile(boolean pot)

**Parameters:**
- `boolean` `pot`

## Methods

### public static void SpawnBasement(String name,
int x,
int y)
throws IOException

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static void SpawnBasementInChunk(IsoChunk chunk,
String name,
int x,
int y,
int bottomZ)
throws IOException

**Parameters:**
- `IsoChunk` `chunk`
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `bottomZ`

**Returns:** `void`

### public NewMapBinaryFile.Header loadHeader(String fileName)
throws IOException

**Parameters:**
- `String` `fileName`

**Returns:** `NewMapBinaryFile.Header`

### public NewMapBinaryFile.ChunkData loadChunk(NewMapBinaryFile.Header header,
int chunkX,
int chunkY)
throws IOException

**Parameters:**
- `NewMapBinaryFile.Header` `header`
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `NewMapBinaryFile.ChunkData`

### public void setChunkInWorldArb(NewMapBinaryFile.ChunkData chunkData,
int sx,
int sy,
int sz,
int tx,
int ty,
int tz)

**Parameters:**
- `NewMapBinaryFile.ChunkData` `chunkData`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `int` `tx`
- `int` `ty`
- `int` `tz`

**Returns:** `void`

### public void setChunkInWorld(NewMapBinaryFile.ChunkData chunkData,
int sx,
int sy,
int sz,
IsoChunk ch,
int wx,
int wy)

**Parameters:**
- `NewMapBinaryFile.ChunkData` `chunkData`
- `int` `sx`
- `int` `sy`
- `int` `sz`
- `IsoChunk` `ch`
- `int` `wx`
- `int` `wy`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\NewMapBinaryFile.html`*
