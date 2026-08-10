---
title: zombie.worldMap.WorldMapRenderer.Drawer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapRenderer.Drawer

`public static final class WorldMapRenderer.Drawer extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.worldMap.WorldMapRenderer.Drawer

## Fields

### public WorldMapRenderer renderer

### public final WorldMapStyle style

### public WorldMap worldMap

### public int x

### public int y

### public int width

### public int height

### public float zoomF

### public float worldScale

### public float worldOriginUiX

### public float worldOriginUiY

### public final SymbolsRenderData symbolsRenderData

### public final SymbolsLayoutData symbolsLayoutData

## Methods

### public int getAbsoluteX()

**Returns:** `int`

### public int getAbsoluteY()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public float getWorldScale()

**Returns:** `float`

### public float uiToWorldX(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `float`

### public float uiToWorldY(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `float`

### public float worldToUIX(float worldX,
float worldY)

**Parameters:**
- `float` `worldX`
- `float` `worldY`

**Returns:** `float`

### public float worldToUIY(float worldX,
float worldY)

**Parameters:**
- `float` `worldX`
- `float` `worldY`

**Returns:** `float`

### public float worldOriginUIX(float centerWorldX)

**Parameters:**
- `float` `centerWorldX`

**Returns:** `float`

### public float worldOriginUIY(float centerWorldY)

**Parameters:**
- `float` `centerWorldY`

**Returns:** `float`

### public void renderVisibleCells(WorldMapStyleLayer styleLayer)

**Parameters:**
- `WorldMapStyleLayer` `styleLayer`

**Returns:** `void`

### public void drawLineStringXXX(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color,
float lineWidth)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`
- `float` `lineWidth`

**Returns:** `void`

### public void drawLineStringYYY(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color,
float lineWidth)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`
- `float` `lineWidth`

**Returns:** `void`

### public void drawLineString(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color,
float lineWidth)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`
- `float` `lineWidth`

**Returns:** `void`

### public void drawLineStringTexture(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color,
float lineWidth,
Texture texture)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`
- `float` `lineWidth`
- `Texture` `texture`

**Returns:** `void`

### public void fillPolygon(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`

**Returns:** `void`

### public void fillPolygon(WorldMapStyleLayer.RenderArgs args,
WorldMapFeature feature,
WorldMapStyleLayer.RGBAf color,
Texture texture,
float textureScale,
WorldMapStyleLayer.TextureScaling scaling)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RGBAf` `color`
- `Texture` `texture`
- `float` `textureScale`
- `WorldMapStyleLayer.TextureScaling` `scaling`

**Returns:** `void`

### public void drawTexture(Texture texture,
WorldMapStyleLayer.RGBAf fill,
int worldX1,
int worldY1,
int worldX2,
int worldY2)

**Parameters:**
- `Texture` `texture`
- `WorldMapStyleLayer.RGBAf` `fill`
- `int` `worldX1`
- `int` `worldY1`
- `int` `worldX2`
- `int` `worldY2`

**Returns:** `void`

### public void drawTexture(Texture texture,
WorldMapStyleLayer.RGBAf fill,
int worldX1,
int worldY1,
int worldX2,
int worldY2,
int cellX,
int cellY)

**Parameters:**
- `Texture` `texture`
- `WorldMapStyleLayer.RGBAf` `fill`
- `int` `worldX1`
- `int` `worldY1`
- `int` `worldX2`
- `int` `worldY2`
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void drawTextureTiled(Texture texture,
WorldMapStyleLayer.RGBAf fill,
int worldX1,
int worldY1,
int worldX2,
int worldY2,
int cellX,
int cellY)

**Parameters:**
- `Texture` `texture`
- `WorldMapStyleLayer.RGBAf` `fill`
- `int` `worldX1`
- `int` `worldY1`
- `int` `worldX2`
- `int` `worldY2`
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void drawTextureTiled(Texture texture,
WorldMapStyleLayer.RGBAf fill,
int worldX1,
int worldY1,
int worldX2,
int worldY2)

**Parameters:**
- `Texture` `texture`
- `WorldMapStyleLayer.RGBAf` `fill`
- `int` `worldX1`
- `int` `worldY1`
- `int` `worldX2`
- `int` `worldY2`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void renderImagePyramid(WorldMapImages images)

**Parameters:**
- `WorldMapImages` `images`

**Returns:** `void`

### public void drawImagePyramid(int cellX,
int cellY,
String fileName,
WorldMapStyleLayer.RGBAf fill)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `String` `fileName`
- `WorldMapStyleLayer.RGBAf` `fill`

**Returns:** `void`

### public void drawImagePyramid(int cellX,
int cellY,
WorldMapImages images,
WorldMapStyleLayer.RGBAf fill)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `WorldMapImages` `images`
- `WorldMapStyleLayer.RGBAf` `fill`

**Returns:** `void`

### public void postRender()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapRenderer.Drawer.html`*
