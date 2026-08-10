---
title: zombie.iso.fboRenderChunk.FBORenderCutaways
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderCutaways

`public final class FBORenderCutaways extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderCutaways

## Fields

### public static final byte CLDSF_NONE

### public static final byte CLDSF_SHOULD_RENDER

### public IsoCell cell

### public static final ObjectPool<FBORenderCutaways.CutawayWall> s_cutawayWallPool

### public static final ObjectPool<FBORenderCutaways.SlopedSurface> s_slopedSurfacePool

## Methods

### public static FBORenderCutaways getInstance()

**Returns:** `FBORenderCutaways`

### public boolean checkPlayerRoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public boolean checkExteriorWalls(ArrayList<IsoChunk> onScreenChunks)

**Parameters:**
- `ArrayList<IsoChunk>` `onScreenChunks`

**Returns:** `boolean`

### public boolean checkSlopedSurfaces(ArrayList<IsoChunk> onScreenChunks)

**Parameters:**
- `ArrayList<IsoChunk>` `onScreenChunks`

**Returns:** `boolean`

### public void squareChanged(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public boolean checkOccludedRooms(int playerIndex,
ArrayList<IsoChunk> onScreenChunks)

**Parameters:**
- `int` `playerIndex`
- `ArrayList<IsoChunk>` `onScreenChunks`

**Returns:** `boolean`

### public void doCutawayVisitSquares(int playerIndex,
ArrayList<IsoChunk> onScreenChunks)

**Parameters:**
- `int` `playerIndex`
- `ArrayList<IsoChunk>` `onScreenChunks`

**Returns:** `void`

### public boolean CalculateBuildingsToCollapse()

**Returns:** `boolean`

### public ArrayList<BuildingDef> getCollapsedBuildings()

**Returns:** `ArrayList<BuildingDef>`

### public boolean isAnyBuildingCollapsed()

**Returns:** `boolean`

### public boolean isBuildingCollapsed(BuildingDef buildingDef)

**Parameters:**
- `BuildingDef` `buildingDef`

**Returns:** `boolean`

### public boolean checkHiddenBuildingLevels()

**Returns:** `boolean`

### public boolean CanBuildingSquareOccludePlayer(IsoGridSquare square,
int playerIndex)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `playerIndex`

**Returns:** `boolean`

### public IsoObject getFirstMultiLevelObject(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoObject`

### public boolean isForceRenderSquare(int playerIndex,
IsoGridSquare square)

**Parameters:**
- `int` `playerIndex`
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean shouldHideElevatedFloor(int playerIndex,
IsoObject object)

**Parameters:**
- `int` `playerIndex`
- `IsoObject` `object`

**Returns:** `boolean`

### public boolean shouldRenderBuildingSquare(int playerIndex,
IsoGridSquare square)

**Parameters:**
- `int` `playerIndex`
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public void CalculatePointsOfInterest()

**Returns:** `void`

### public boolean isRoofRoomSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderCutaways.html`*
