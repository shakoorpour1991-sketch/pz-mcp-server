---
title: zombie.iso.areas.isoregion.data.DataRoot
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.data
---

# zombie.iso.areas.isoregion.data.DataRoot

`public final class DataRoot extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.data

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.data.DataRoot

## Description

TurboTuTone.

## Fields

### public final DataRoot.SelectInfo select

### public final IsoRegionManager regionManager

## Constructors

### public DataRoot()

## Methods

### public void getAllChunks(List<DataChunk> list)

**Parameters:**
- `List<DataChunk>` `list`

**Returns:** `void`

### public DataChunk getDataChunk(int chunkx,
int chunky)

**Parameters:**
- `int` `chunkx`
- `int` `chunky`

**Returns:** `DataChunk`

### public IsoWorldRegion getIsoWorldRegion(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoWorldRegion`

### public ArrayList<IsoWorldRegion> getIsoWorldRegionsInCell(int cellX,
int cellY,
ArrayList<IsoWorldRegion> worldRegions)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `ArrayList<IsoWorldRegion>` `worldRegions`

**Returns:** `ArrayList<IsoWorldRegion>`

### public byte getSquareFlags(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `byte`

### public IsoChunkRegion getIsoChunkRegion(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoChunkRegion`

### public void resetAllData()

**Returns:** `void`

### public void EnqueueDirtyDataChunk(DataChunk chunk)

**Parameters:**
- `DataChunk` `chunk`

**Returns:** `void`

### public void EnqueueDirtyIsoWorldRegion(IsoWorldRegion mr)

**Parameters:**
- `IsoWorldRegion` `mr`

**Returns:** `void`

### public void DequeueDirtyIsoWorldRegion(IsoWorldRegion mr)

**Parameters:**
- `IsoWorldRegion` `mr`

**Returns:** `void`

### public void updateExistingSquare(int x,
int y,
int z,
byte flags)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `byte` `flags`

**Returns:** `void`

### public void processDirtyChunks()

**Returns:** `void`

### public void clientProcessBuildings()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\data\DataRoot.html`*
