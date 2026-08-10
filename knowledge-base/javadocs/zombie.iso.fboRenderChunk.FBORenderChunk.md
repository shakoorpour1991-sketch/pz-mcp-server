---
title: zombie.iso.fboRenderChunk.FBORenderChunk
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderChunk

`public final class FBORenderChunk extends Object`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderChunk

## Fields

### public static final int PIXELS_PER_LEVEL

### public static final int FLOOR_WIDTH

### public static final int FLOOR_HEIGHT

### public static final int JUMBO_L_WIDTH

### public static final int JUMBO_L_HEIGHT

### public static final int JUMBO_XL_WIDTH

### public static final int JUMBO_XL_HEIGHT

### public static final int JUMBO_XXL_WIDTH

### public static final int JUMBO_XXL_HEIGHT

### public static final int TEXTURE_HEIGHT

### public static final int LEVELS_PER_TEXTURE

### public static final long DIRTY_NONE

### public static final long DIRTY_BLOOD

### public static final long DIRTY_CORPSE

### public static final long DIRTY_ITEM_ADD

### public static final long DIRTY_ITEM_REMOVE

### public static final long DIRTY_ITEM_MODIFY

### public static final long DIRTY_LIGHTING

### public static final long DIRTY_OBJECT_ADD

### public static final long DIRTY_OBJECT_REMOVE

### public static final long DIRTY_OBJECT_MODIFY

### public static final long DIRTY_CREATE

### public static final long DIRTY_REDRAW

### public static final long DIRTY_CUTAWAYS

### public static final long DIRTY_TREES

### public static final long DIRTY_OBSCURING

### public static final long DIRTY_REDO_CUTAWAYS

### public int index

### public TextureFBO fbo

### public boolean submitted

### public boolean isInit

### public Texture tex

### public Texture depth

### public int w

### public int h

### public IsoChunk chunk

### public boolean highRes

### public int minLevel

### public float renderX

### public float renderY

### public float renderW

### public float renderH

## Constructors

### public FBORenderChunk()

## Methods

### public void setRenderLevels(FBORenderLevels renderLevels)

**Parameters:**
- `FBORenderLevels` `renderLevels`

**Returns:** `void`

### public FBORenderLevels getRenderLevels()

**Returns:** `FBORenderLevels`

### public int getTextureWidth(float cameraZoom)

**Parameters:**
- `float` `cameraZoom`

**Returns:** `int`

### public int getTextureHeight(float cameraZoom)

**Parameters:**
- `float` `cameraZoom`

**Returns:** `int`

### public int getMinLevel()

**Returns:** `int`

### public int getTopLevel()

**Returns:** `int`

### public boolean isTopLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public void preInit()

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void beginMainThread(boolean bClear)

**Parameters:**
- `boolean` `bClear`

**Returns:** `void`

### public void endMainThread()

**Returns:** `void`

### public void beginRenderThread(boolean bClear)

**Parameters:**
- `boolean` `bClear`

**Returns:** `void`

### public void endRenderThread()

**Returns:** `void`

### public Texture getTexture()

**Returns:** `Texture`

### public void renderInWorldMainThread()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderChunk.html`*
