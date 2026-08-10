---
title: zombie.core.skinnedmodel.model.ItemModelRenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ItemModelRenderer

`public final class ItemModelRenderer extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.ItemModelRenderer

## Fields

### public float x

### public float y

### public float z

### public final org.joml.Vector3f angle

## Constructors

### public ItemModelRenderer()

## Methods

### public static boolean itemHasModel(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public ItemModelRenderer.RenderStatus renderMain(InventoryItem item,
IsoGridSquare square,
IsoGridSquare renderSquare,
float x,
float y,
float z,
float flipAngle,
float forcedRotation,
boolean bRenderToChunkTexture)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `square`
- `IsoGridSquare` `renderSquare`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `flipAngle`
- `float` `forcedRotation`
- `boolean` `bRenderToChunkTexture`

**Returns:** `ItemModelRenderer.RenderStatus`

### public boolean isRendered()

**Returns:** `boolean`

### public void DoRenderToWorld(float x,
float y,
float z,
org.joml.Vector3f rotate)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `org.joml.Vector3f` `rotate`

**Returns:** `void`

### public void DoRender(IModelCamera camera,
boolean bChunkTexture,
boolean bHighRes)

**Parameters:**
- `IModelCamera` `camera`
- `boolean` `bChunkTexture`
- `boolean` `bHighRes`

**Returns:** `void`

### public float calculateMinModelZ()

**Returns:** `float`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ItemModelRenderer.html`*
