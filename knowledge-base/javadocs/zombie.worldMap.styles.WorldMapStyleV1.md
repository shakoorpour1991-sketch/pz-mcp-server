---
title: zombie.worldMap.styles.WorldMapStyleV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapStyleV1

`public class WorldMapStyleV1 extends Object`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleV1

## Fields

### public UIWorldMap ui

### public UIWorldMapV1 api

### public WorldMapStyle style

### public final ArrayList<WorldMapStyleV1.WorldMapStyleLayerV1> layers

## Constructors

### public WorldMapStyleV1(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

## Methods

### public WorldMapStyleV1.WorldMapStyleLayerV1 newLineLayer(String id)
throws IllegalArgumentException

**Parameters:**
- `String` `id`

**Returns:** `WorldMapStyleV1.WorldMapStyleLayerV1`

### public WorldMapStyleV1.WorldMapStyleLayerV1 newPolygonLayer(String id)
throws IllegalArgumentException

**Parameters:**
- `String` `id`

**Returns:** `WorldMapStyleV1.WorldMapStyleLayerV1`

### public WorldMapStyleV1.WorldMapStyleLayerV1 newTextureLayer(String id)
throws IllegalArgumentException

**Parameters:**
- `String` `id`

**Returns:** `WorldMapStyleV1.WorldMapStyleLayerV1`

### public int getLayerCount()

**Returns:** `int`

### public WorldMapStyleV1.WorldMapStyleLayerV1 getLayerByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStyleV1.WorldMapStyleLayerV1`

### public WorldMapStyleV1.WorldMapStyleLayerV1 getLayerByName(String id)

**Parameters:**
- `String` `id`

**Returns:** `WorldMapStyleV1.WorldMapStyleLayerV1`

### public int indexOfLayer(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public void moveLayer(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void removeLayerById(String id)

**Parameters:**
- `String` `id`

**Returns:** `void`

### public void removeLayerByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapStyleV1.html`*
