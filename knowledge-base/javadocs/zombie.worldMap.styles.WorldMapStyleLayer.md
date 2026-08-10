---
title: zombie.worldMap.styles.WorldMapStyleLayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapStyleLayer

`public abstract class WorldMapStyleLayer extends Object`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleLayer

## Fields

### public String id

### public float minZoom

### public WorldMapStyleLayer.IWorldMapStyleFilter filter

### public String filterKey

### public String filterValue

## Constructors

### public WorldMapStyleLayer(String id)

**Parameters:**
- `String` `id`

## Methods

### public abstract String getTypeString()

**Returns:** `String`

### public boolean ignoreFeatures()

**Returns:** `boolean`

### public WorldMapStyleLayer.RGBAf evalColor(float zoom,
ArrayList<WorldMapStyleLayer.ColorStop> stops)

**Parameters:**
- `float` `zoom`
- `ArrayList<WorldMapStyleLayer.ColorStop>` `stops`

**Returns:** `WorldMapStyleLayer.RGBAf`

### public boolean filter(WorldMapFeature feature,
WorldMapStyleLayer.FilterArgs args)

**Parameters:**
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.FilterArgs` `args`

**Returns:** `boolean`

### public abstract void render(WorldMapFeature feature,
WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

### public void renderCell(WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

### public abstract void renderVisibleCells(WorldMapStyleLayer.RenderArgs arg0)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `arg0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapStyleLayer.html`*
