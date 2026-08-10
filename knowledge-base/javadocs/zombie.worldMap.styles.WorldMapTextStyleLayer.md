---
title: zombie.worldMap.styles.WorldMapTextStyleLayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapTextStyleLayer

`public final class WorldMapTextStyleLayer extends WorldMapStyleLayer`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleLayer
- zombie.worldMap.styles.WorldMapTextStyleLayer

## Fields

### public UIFont font

### public int lineHeight

### public final ArrayList<WorldMapStyleLayer.ColorStop> fill

## Constructors

### public WorldMapTextStyleLayer(String id)

**Parameters:**
- `String` `id`

## Methods

### public String getTypeString()

**Returns:** `String`

### public boolean ignoreFeatures()

**Returns:** `boolean`

### public void render(WorldMapFeature feature,
WorldMapStyleLayer.RenderArgs args)

**Parameters:**
- `WorldMapFeature` `feature`
- `WorldMapStyleLayer.RenderArgs` `args`

**Returns:** `void`

### public void renderVisibleCells(WorldMapStyleLayer.RenderArgs renderArgs)

**Parameters:**
- `WorldMapStyleLayer.RenderArgs` `renderArgs`

**Returns:** `void`

### public UIFont getFont()

**Returns:** `UIFont`

### public float calculateScale(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public float calculateScale(WorldMapRenderer.Drawer drawer)

**Parameters:**
- `WorldMapRenderer.Drawer` `drawer`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapTextStyleLayer.html`*
