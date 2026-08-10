---
title: zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelData

`public static final class FBORenderCutaways.ChunkLevelData extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderCutaways.ChunkLevelData

## Fields

### public FBORenderCutaways.ChunkLevelsData levelsData

### public final int level

### public int adjacentChunkLoadedCounter

### public final ArrayList<FBORenderCutaways.CutawayWall> exteriorWalls

### public final ArrayList<FBORenderCutaways.CutawayWall> allWalls

### public final FBORenderCutaways.OrphanStructures orphanStructures

### public final ArrayList<FBORenderCutaways.SlopedSurface> slopedSurfaces

### public final byte[][] squareFlags

### public boolean hasCutawayNorthWallsOnWestEdge

### public boolean hasCutawayNorthWallsOnEastEdge

### public boolean hasCutawayWestWallsOnNorthEdge

### public boolean hasCutawayWestWallsOnSouthEdge

### public final long[] occludingSquares

## Methods

### public boolean shouldRenderSquare(int playerIndex,
IsoGridSquare square)

**Parameters:**
- `int` `playerIndex`
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean calculateOccludingSquares(int playerIndex,
int occludedX1,
int occludedY1,
int occludedX2,
int occludedY2,
int[] occludedGrid)

**Parameters:**
- `int` `playerIndex`
- `int` `occludedX1`
- `int` `occludedY1`
- `int` `occludedX2`
- `int` `occludedY2`
- `int[]` `occludedGrid`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderCutaways.ChunkLevelData.html`*
