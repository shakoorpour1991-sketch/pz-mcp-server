---
title: zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelsData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelsData

`public static final class FBORenderCutaways.ChunkLevelsData extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelsData

## Fields

### public final IsoChunk chunk

### public final gnu.trove.map.hash.TIntObjectHashMap<FBORenderCutaways.ChunkLevelData> levelData

## Constructors

### public ChunkLevelsData(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

## Methods

### public FBORenderCutaways.ChunkLevelData getDataForLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `FBORenderCutaways.ChunkLevelData`

### public void recreateLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void recreateLevel_ExteriorWalls(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void recreateLevel_AllWalls(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void recreateLevel_SlopedSurfaces(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void invalidateOccludedSquaresMaskForSeenRooms(int playerIndex,
int level)

**Parameters:**
- `int` `playerIndex`
- `int` `level`

**Returns:** `void`

### public void invalidateAll()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void debugRender(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderCutaways.ChunkLevelsData.html`*
