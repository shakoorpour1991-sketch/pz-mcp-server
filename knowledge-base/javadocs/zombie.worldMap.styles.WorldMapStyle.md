---
title: zombie.worldMap.styles.WorldMapStyle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapStyle

`public final class WorldMapStyle extends Object`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyle

## Constructors

### public WorldMapStyle()

## Methods

### public int getLayerCount()

**Returns:** `int`

### public WorldMapStyleLayer getLayerByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStyleLayer`

### public WorldMapStyleLayer getLayerByID(String id)

**Parameters:**
- `String` `id`

**Returns:** `WorldMapStyleLayer`

### public WorldMapTextStyleLayer getDefaultTextLayer()

**Returns:** `WorldMapTextStyleLayer`

### public WorldMapTextStyleLayer getTextStyleLayerOrDefault(String layerID)

**Parameters:**
- `String` `layerID`

**Returns:** `WorldMapTextStyleLayer`

### public void addLayer(WorldMapStyleLayer layer)

**Parameters:**
- `WorldMapStyleLayer` `layer`

**Returns:** `void`

### public void insertLayer(int index,
WorldMapStyleLayer layer)

**Parameters:**
- `int` `index`
- `WorldMapStyleLayer` `layer`

**Returns:** `void`

### public void removeLayer(WorldMapStyleLayer layer)

**Parameters:**
- `WorldMapStyleLayer` `layer`

**Returns:** `void`

### public WorldMapStyleLayer removeAt(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStyleLayer`

### public void moveLayer(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void setLayerID(WorldMapStyleLayer layer,
String id)

**Parameters:**
- `WorldMapStyleLayer` `layer`
- `String` `id`

**Returns:** `void`

### public int indexOf(WorldMapStyleLayer layer)

**Parameters:**
- `WorldMapStyleLayer` `layer`

**Returns:** `int`

### public void copyFrom(WorldMapStyle other)

**Parameters:**
- `WorldMapStyle` `other`

**Returns:** `void`

### public void addListener(IWorldMapStyleListener listener)

**Parameters:**
- `IWorldMapStyleListener` `listener`

**Returns:** `void`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapStyle.html`*
