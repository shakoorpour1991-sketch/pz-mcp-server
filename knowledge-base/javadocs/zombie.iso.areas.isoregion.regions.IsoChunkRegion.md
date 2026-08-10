---
title: zombie.iso.areas.isoregion.regions.IsoChunkRegion
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.regions
---

# zombie.iso.areas.isoregion.regions.IsoChunkRegion

`public final class IsoChunkRegion extends Object implements IChunkRegion`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.regions

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.regions.IsoChunkRegion

## Description

TurboTuTone.

## Methods

### public int getID()

**Returns:** `int`

### public int getSquareSize()

**Returns:** `int`

### public Color getColor()

**Returns:** `Color`

### public int getzLayer()

**Returns:** `int`

### public IsoWorldRegion getIsoWorldRegion()

**Returns:** `IsoWorldRegion`

### public void setIsoWorldRegion(IsoWorldRegion mr)

**Parameters:**
- `IsoWorldRegion` `mr`

**Returns:** `void`

### public DataChunk getDataChunk()

**Returns:** `DataChunk`

### public IsoWorldRegion unlinkFromIsoWorldRegion()

**Returns:** `IsoWorldRegion`

### public int getRoofCnt()

**Returns:** `int`

### public void addRoof()

**Returns:** `void`

### public void resetRoofCnt()

**Returns:** `void`

### public void addSquareCount()

**Returns:** `void`

### public int getChunkBorderSquaresCnt()

**Returns:** `int`

### public void addChunkBorderSquaresCnt()

**Returns:** `void`

### public void setEnclosed(byte dir,
boolean b)

**Parameters:**
- `byte` `dir`
- `boolean` `b`

**Returns:** `void`

### public boolean getIsEnclosed()

**Returns:** `boolean`

### public List<IsoChunkRegion> getConnectedNeighbors()

**Returns:** `List<IsoChunkRegion>`

### public void addConnectedNeighbor(IsoChunkRegion neighbor)

**Parameters:**
- `IsoChunkRegion` `neighbor`

**Returns:** `void`

### public int getNeighborCount()

**Returns:** `int`

### public void addNeighbor(IsoChunkRegion neighbor)

**Parameters:**
- `IsoChunkRegion` `neighbor`

**Returns:** `void`

### public ArrayList<IsoChunkRegion> getDebugConnectedNeighborCopy()

**Returns:** `ArrayList<IsoChunkRegion>`

### public boolean containsConnectedNeighbor(IsoChunkRegion n)

**Parameters:**
- `IsoChunkRegion` `n`

**Returns:** `boolean`

### public boolean containsConnectedNeighborID(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public IsoChunkRegion getConnectedNeighborWithLargestIsoWorldRegion()

**Returns:** `IsoChunkRegion`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\regions\IsoChunkRegion.html`*
