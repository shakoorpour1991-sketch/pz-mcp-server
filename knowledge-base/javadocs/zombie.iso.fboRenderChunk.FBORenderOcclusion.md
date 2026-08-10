---
title: zombie.iso.fboRenderChunk.FBORenderOcclusion
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderOcclusion

`public final class FBORenderOcclusion extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderOcclusion

## Methods

### public static FBORenderOcclusion getInstance()

**Returns:** `FBORenderOcclusion`

### public void init()

**Returns:** `void`

### public void invalidateOverlappedChunkLevels(int playerIndex,
IsoChunk chunk,
int level)

**Parameters:**
- `int` `playerIndex`
- `IsoChunk` `chunk`
- `int` `level`

**Returns:** `void`

### public void setFloorOccluded(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void setNorthWallOccluded(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void setWestWallOccluded(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public boolean isOccluded(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void removeChunkFromWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderOcclusion.html`*
