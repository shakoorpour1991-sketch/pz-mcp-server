---
title: zombie.iso.fboRenderChunk.FBORenderCell
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderCell

`public final class FBORenderCell extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderCell

## Fields

### public static final FBORenderCell instance

### public static final boolean OUTLINE_DOUBLEDOOR_FRAMES

### public static IsoObject lowestCutawayObjectW

### public static IsoObject lowestCutawayObjectN

### public IsoCell cell

### public final ArrayList<IsoGridSquare> waterSquares

### public final ArrayList<IsoGridSquare> waterAttachSquares

### public final ArrayList<IsoGridSquare> fishSplashSquares

### public final ArrayList<IsoMannequin> mannequinList

### public boolean renderAnimatedAttachments

### public boolean renderTranslucentOnly

### public boolean renderWindowFrameOutline

### public boolean renderDebugChunkState

### public static final PerformanceProfileProbe calculateRenderInfo

### public static final PerformanceProfileProbe cutaways

### public static final PerformanceProfileProbe fog

### public static final PerformanceProfileProbe puddles

### public static final PerformanceProfileProbe renderOneChunk

### public static final PerformanceProfileProbe renderOneChunkLevel

### public static final PerformanceProfileProbe renderOneChunkLevel2

### public static final PerformanceProfileProbe translucentFloor

### public static final PerformanceProfileProbe translucentNonFloor

### public static final PerformanceProfileProbe updateLighting

### public static final PerformanceProfileProbe water

### public static final PerformanceProfileProbe tilesProbe

### public static final PerformanceProfileProbe itemsProbe

### public static final PerformanceProfileProbe movingObjectsProbe

### public static final PerformanceProfileProbe shadowsProbe

### public static final PerformanceProfileProbe visibilityProbe

### public static final PerformanceProfileProbe translucentFloorObjectsProbe

### public static final PerformanceProfileProbe translucentObjectsProbe

### public static final boolean FIX_CORPSE_CLIPPING

### public static final boolean FIX_ITEM_CLIPPING

### public static final boolean FIX_JUMBO_CLIPPING

### public static float blackedOutRoomFadeBlackness

### public static long blackedOutRoomFadeDurationMs

## Methods

### public void renderInternal()

**Returns:** `void`

### public void RenderTiles(int minHeight,
int maxHeight)

**Parameters:**
- `int` `minHeight`
- `int` `maxHeight`

**Returns:** `void`

### public boolean isTreeRenderedEveryFrame(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public boolean isTranslucentTree(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public float calculateWindowTargetAlpha(int playerIndex,
IsoObject object,
IsoGridSquare oppositeSq,
boolean bNorth)

**Parameters:**
- `int` `playerIndex`
- `IsoObject` `object`
- `IsoGridSquare` `oppositeSq`
- `boolean` `bNorth`

**Returns:** `float`

### public void renderFloor(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void renderFloor(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void renderTranslucent(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void renderAnimatedAttachments(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void handleDelayedLoading(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void renderSeamFix1_Floor(IsoObject object,
float x,
float y,
float z,
ColorInfo stCol,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `object`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `stCol`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderSeamFix2_Floor(IsoObject object,
float x,
float y,
float z,
ColorInfo stCol,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `object`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `stCol`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderSeamFix1_Wall(IsoObject object,
float x,
float y,
float z,
ColorInfo stCol,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `object`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `stCol`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderSeamFix2_Wall(IsoObject object,
float x,
float y,
float z,
ColorInfo stCol,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `object`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `stCol`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public boolean shouldDarkenIndividualRooms()

**Returns:** `boolean`

### public boolean isBlackedOutBuildingSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public float getBlackedOutRoomFadeRatio(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `float`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderCell.html`*
