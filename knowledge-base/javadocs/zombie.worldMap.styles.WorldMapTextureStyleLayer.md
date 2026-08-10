---
title: zombie.worldMap.styles.WorldMapTextureStyleLayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapTextureStyleLayer

`public class WorldMapTextureStyleLayer extends WorldMapStyleLayer`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleLayer
- zombie.worldMap.styles.WorldMapTextureStyleLayer

## Fields

### public int worldX1

### public int worldY1

### public int worldX2

### public int worldY2

### public boolean useWorldBounds

### public final ArrayList<WorldMapStyleLayer.ColorStop> fill

### public final ArrayList<WorldMapStyleLayer.TextureStop> texture

### public boolean tile

## Constructors

### public WorldMapTextureStyleLayer(String id)

**Parameters:**
- `String` `id`

## Methods

### public String getTypeString()

**Returns:** `String`

### public boolean ignoreFeatures()

**Returns:** `boolean`

### public boolean filter(WorldMapFeature feature,
WorldMapStyleLayer.FilterArgs args)

**Parameters:**
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.FilterArgs` `args`

**Returns:** `boolean`

### public void render(WorldMapFeature feature,
WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

### public void renderCell(WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

### public void renderVisibleCells(WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapTextureStyleLayer.html`*
