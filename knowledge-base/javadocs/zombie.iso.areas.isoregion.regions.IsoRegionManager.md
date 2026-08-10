---
title: zombie.iso.areas.isoregion.regions.IsoRegionManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.regions
---

# zombie.iso.areas.isoregion.regions.IsoRegionManager

`public final class IsoRegionManager extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.regions

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.regions.IsoRegionManager

## Description

TurboTuTone.

## Constructors

### public IsoRegionManager(DataRoot dataRoot)

**Parameters:**
- `DataRoot` `dataRoot`

## Methods

### public IsoWorldRegion allocIsoWorldRegion()

**Returns:** `IsoWorldRegion`

### public void releaseIsoWorldRegion(IsoWorldRegion worldRegion)

**Parameters:**
- `IsoWorldRegion` `worldRegion`

**Returns:** `void`

### public IsoChunkRegion allocIsoChunkRegion(DataChunk dataChunk,
int zLayer)

**Parameters:**
- `DataChunk` `dataChunk`
- `int` `zLayer`

**Returns:** `IsoChunkRegion`

### public void releaseIsoChunkRegion(IsoChunkRegion chunkRegion)

**Parameters:**
- `IsoChunkRegion` `chunkRegion`

**Returns:** `void`

### public Color getColor()

**Returns:** `Color`

### public int getWorldRegionCount()

**Returns:** `int`

### public int getChunkRegionCount()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\regions\IsoRegionManager.html`*
