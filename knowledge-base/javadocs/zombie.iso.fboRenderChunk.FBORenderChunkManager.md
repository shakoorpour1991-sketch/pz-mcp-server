---
title: zombie.iso.fboRenderChunk.FBORenderChunkManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderChunkManager

`public final class FBORenderChunkManager extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderChunkManager

## Fields

### public static FBORenderChunkManager instance

### public final HashSet<IsoChunk> chunkFullMap

### public final HashMap<Integer, FBORenderChunk> chunks

### public final ArrayList<FBORenderChunk> toRenderThisFrame

### public FBORenderChunk renderThreadCurrent

### public FBORenderChunk renderChunk

### public Texture combinedTexture

### public Texture combinedDepthTexture

## Constructors

### public FBORenderChunkManager()

## Methods

### public float getYOffset()

**Returns:** `float`

### public float getXOffset()

**Returns:** `float`

### public void gameLoaded()

**Returns:** `void`

### public void recycle()

**Returns:** `void`

### public boolean endCaching()

**Returns:** `boolean`

### public void submitCachesForFrame()

**Returns:** `void`

### public boolean beginRenderChunkLevel(IsoChunk chunk,
int level,
float cameraZoom,
boolean canRender,
boolean canClear)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `level`
- `float` `cameraZoom`
- `boolean` `canRender`
- `boolean` `canClear`

**Returns:** `boolean`

### public void endRenderChunkLevel(IsoChunk chunk,
int level,
float cameraZoom,
boolean clearDirty)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `level`
- `float` `cameraZoom`
- `boolean` `clearDirty`

**Returns:** `void`

### public void clearCache()

**Returns:** `void`

### public void freeChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public FBORenderChunk getFullRenderChunk(IsoChunk c,
int w,
int h)

**Parameters:**
- `IsoChunk` `c`
- `int` `w`
- `int` `h`

**Returns:** `FBORenderChunk`

### public boolean isCaching()

**Returns:** `boolean`

### public void renderThreadChunkEnd()

**Returns:** `void`

### public void renderThreadChunkStart(int index,
boolean bClear)

**Parameters:**
- `int` `index`
- `boolean` `bClear`

**Returns:** `void`

### public void startFrame()

**Returns:** `void`

### public void endFrame()

**Returns:** `void`

### public void startDrawingCombined()

**Returns:** `void`

### public void endDrawingCombined()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderChunkManager.html`*
