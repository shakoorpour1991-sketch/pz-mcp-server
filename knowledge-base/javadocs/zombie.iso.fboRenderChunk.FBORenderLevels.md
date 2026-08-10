---
title: zombie.iso.fboRenderChunk.FBORenderLevels
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderLevels

`public final class FBORenderLevels extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderLevels

## Fields

### public static boolean clearCachedSquares

### public final ArrayList<IsoGridSquare> treeSquares

### public final FBORenderSnow.ChunkLevel snowLevelZero

### public final FBORenderSnow.ChunkLevel snowLevelNotZero

### public int adjacentChunkLoadedCounter

### public IsoChunk seamChunkE

### public IsoChunk seamChunkSe

### public IsoChunk seamChunkS

### public int prevMinZ

### public int prevMaxZ

## Constructors

### public FBORenderLevels(int playerIndex,
IsoChunk chunk)

**Parameters:**
- `int` `playerIndex`
- `IsoChunk` `chunk`

## Methods

### public int getPlayerIndex()

**Returns:** `int`

### public IsoChunk getChunk()

**Returns:** `IsoChunk`

### public boolean calculateOnScreen(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public boolean calculateInStencilRect(int level,
IsoCell cell)

**Parameters:**
- `int` `level`
- `IsoCell` `cell`

**Returns:** `boolean`

### public void setOnScreen(int level,
boolean bOnScreen)

**Parameters:**
- `int` `level`
- `boolean` `bOnScreen`

**Returns:** `void`

### public boolean isOnScreen(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public FBORenderChunk getOrCreateFBOForLevel(int level,
float cameraZoom)

**Parameters:**
- `int` `level`
- `float` `cameraZoom`

**Returns:** `FBORenderChunk`

### public FBORenderChunk getFBOForLevel(int level,
float cameraZoom)

**Parameters:**
- `int` `level`
- `float` `cameraZoom`

**Returns:** `FBORenderChunk`

### public void clearCachedSquares(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public List<IsoGridSquare> getCachedSquares_AnimatedAttachments(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_Corpses(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_CutawayWindowFrames(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_Flies(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_Items(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_Puddles(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_TranslucentFloor(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_TranslucentNonFloor(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_Water(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_WaterShore(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public List<IsoGridSquare> getCachedSquares_WaterAttach(int level)

**Parameters:**
- `int` `level`

**Returns:** `List<IsoGridSquare>`

### public void setRenderedSquaresCount(int level,
int count)

**Parameters:**
- `int` `level`
- `int` `count`

**Returns:** `void`

### public int getRenderedSquaresCount(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public static int getTextureScale(float cameraZoom)

**Parameters:**
- `float` `cameraZoom`

**Returns:** `int`

### public static int calculateMinLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public int getMinLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public int getMaxLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public void invalidateLevel(int level,
long dirtyFlags)

**Parameters:**
- `int` `level`
- `long` `dirtyFlags`

**Returns:** `void`

### public void invalidateAll(long dirtyFlags)

**Parameters:**
- `long` `dirtyFlags`

**Returns:** `void`

### public boolean isDirty(int level,
float cameraZoom)

**Parameters:**
- `int` `level`
- `float` `cameraZoom`

**Returns:** `boolean`

### public boolean isDirty(int level,
long dirtyFlags,
float cameraZoom)

**Parameters:**
- `int` `level`
- `long` `dirtyFlags`
- `float` `cameraZoom`

**Returns:** `boolean`

### public void clearDirty(int level,
float cameraZoom)

**Parameters:**
- `int` `level`
- `float` `cameraZoom`

**Returns:** `void`

### public void clearDirty(int level,
long dirtyFlags,
float cameraZoom)

**Parameters:**
- `int` `level`
- `long` `dirtyFlags`
- `float` `cameraZoom`

**Returns:** `void`

### public void freeChunk()

**Returns:** `void`

### public void freeFBO(FBORenderChunk renderChunk)

**Parameters:**
- `FBORenderChunk` `renderChunk`

**Returns:** `void`

### public void freeFBOsForLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void handleDelayedLoading(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public boolean isDelayedLoading(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public void clearDelayedLoading(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public void clearCache()

**Returns:** `void`

### public static int calculateTextureWidthForLevels(int minLevel,
int maxLevel,
float cameraZoom)

**Parameters:**
- `int` `minLevel`
- `int` `maxLevel`
- `float` `cameraZoom`

**Returns:** `int`

### public static int calculateTextureHeightForLevels(int minLevel,
int maxLevel,
float cameraZoom)

**Parameters:**
- `int` `minLevel`
- `int` `maxLevel`
- `float` `cameraZoom`

**Returns:** `int`

### public static int extraHeightForJumboTrees(int minLevel,
int maxLevel)

**Parameters:**
- `int` `minLevel`
- `int` `maxLevel`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderLevels.html`*
