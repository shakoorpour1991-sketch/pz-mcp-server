---
title: zombie.iso.areas.isoregion.regions.IsoWorldRegion
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.regions
---

# zombie.iso.areas.isoregion.regions.IsoWorldRegion

`public final class IsoWorldRegion extends Object implements IWorldRegion`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.regions

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.regions.IsoWorldRegion

## Description

TurboTuTone.

## Methods

### public int getID()

**Returns:** `int`

### public Color getColor()

**Returns:** `Color`

### public int size()

**Returns:** `int`

### public int getSquareSize()

**Returns:** `int`

### public void unlinkNeighbors()

**Returns:** `void`

### public void linkNeighbors()

**Returns:** `void`

### public ArrayList<IsoWorldRegion> getNeighbors()

**Returns:** `ArrayList<IsoWorldRegion>`

### public ArrayList<IsoWorldRegion> getDebugConnectedNeighborCopy()

**Returns:** `ArrayList<IsoWorldRegion>`

### public boolean isFogMask()

**Returns:** `boolean`

### public boolean isPlayerRoom()

**Returns:** `boolean`

### public boolean isFullyRoofed()

**Returns:** `boolean`

### public float getRoofedPercentage()

**Returns:** `float`

### public int getRoofCnt()

**Returns:** `int`

### public void addIsoChunkRegion(IsoChunkRegion region)

**Parameters:**
- `IsoChunkRegion` `region`

**Returns:** `void`

### public boolean containsIsoChunkRegion(IsoChunkRegion region)

**Parameters:**
- `IsoChunkRegion` `region`

**Returns:** `boolean`

### public ArrayList<IsoChunkRegion> swapIsoChunkRegions(ArrayList<IsoChunkRegion> newlist)

**Parameters:**
- `ArrayList<IsoChunkRegion>` `newlist`

**Returns:** `ArrayList<IsoChunkRegion>`

### public boolean isEnclosed()

**Returns:** `boolean`

### public void merge(IsoWorldRegion other)

**Parameters:**
- `IsoWorldRegion` `other`

**Returns:** `void`

### public ArrayList<IsoChunkRegion> getDebugIsoChunkRegionCopy()

**Returns:** `ArrayList<IsoChunkRegion>`

### public int getCellX()

**Returns:** `int`

### public int getCellY()

**Returns:** `int`

### public void setBuildingDef(BuildingDef buildingDef)

**Parameters:**
- `BuildingDef` `buildingDef`

**Returns:** `void`

### public BuildingDef getBuildingDef()

**Returns:** `BuildingDef`

### public void clearBuildingDef(ArrayList<IsoGameCharacter.Location> changedCells)

**Parameters:**
- `ArrayList<IsoGameCharacter.Location>` `changedCells`

**Returns:** `void`

### public List<IsoChunkRegion> getChunkRegions()

**Returns:** `List<IsoChunkRegion>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\regions\IsoWorldRegion.html`*
