---
title: zombie.worldMap.UIWorldMapV3
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.UIWorldMapV3

`public class UIWorldMapV3 extends UIWorldMapV2`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.UIWorldMapV1
- zombie.worldMap.UIWorldMapV2
- zombie.worldMap.UIWorldMapV3

## Constructors

### public UIWorldMapV3(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

## Methods

### public boolean isDataLoaded()

**Returns:** `boolean`

### public int getDataWidthInCells()

**Returns:** `int`

### public int getDataHeightInCells()

**Returns:** `int`

### public void addImagePyramid(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public void clearImages()

**Returns:** `void`

### public int getImagePyramidMinX(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public int getImagePyramidMinY(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public int getImagePyramidMaxX(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public int getImagePyramidMaxY(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public int getImagePyramidWidthInSquares(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public int getImagePyramidHeightInSquares(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public void setMaxZoom(float maxZoom)

**Parameters:**
- `float` `maxZoom`

**Returns:** `void`

### public float getMaxZoom()

**Returns:** `float`

### public void transitionTo(float worldX,
float worldY,
float zoomF)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `zoomF`

**Returns:** `void`

### public void setDisplayedArea(float worldX1,
float worldY1,
float worldX2,
float worldY2)

**Parameters:**
- `float` `worldX1`
- `float` `worldY1`
- `float` `worldX2`
- `float` `worldY2`

**Returns:** `void`

### public WorldMapStreetsV1 getStreetsAPI()

**Returns:** `WorldMapStreetsV1`

### public WorldMapStyleV1 getStyleAPI()

**Returns:** `WorldMapStyleV1`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\UIWorldMapV3.html`*
