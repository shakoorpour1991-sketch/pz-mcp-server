---
title: zombie.core.skinnedmodel.model.WorldItemModelDrawer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.WorldItemModelDrawer

`public final class WorldItemModelDrawer extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.skinnedmodel.model.WorldItemModelDrawer

## Fields

### public static final ImmutableColor ROTTEN_FOOD_COLOR

### public static final ImmutableColor HIGHLIGHT_COLOR

### public static final boolean NEW_WAY

### public static final float CARPET_DELTA_Z

## Constructors

### public WorldItemModelDrawer()

## Methods

### public static ItemModelRenderer.RenderStatus renderMain(InventoryItem item,
IsoGridSquare square,
IsoGridSquare renderSquare,
float x,
float y,
float z,
float flipAngle)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `square`
- `IsoGridSquare` `renderSquare`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `flipAngle`

**Returns:** `ItemModelRenderer.RenderStatus`

### public static ItemModelRenderer.RenderStatus renderMain(InventoryItem item,
IsoGridSquare square,
IsoGridSquare renderSquare,
float x,
float y,
float z,
float flipAngle,
float forcedRotation,
boolean bIgnoreItemsInChunkTexture)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `square`
- `IsoGridSquare` `renderSquare`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `flipAngle`
- `float` `forcedRotation`
- `boolean` `bIgnoreItemsInChunkTexture`

**Returns:** `ItemModelRenderer.RenderStatus`

### public void render()

**Returns:** `void`

### public void postRender()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\WorldItemModelDrawer.html`*
