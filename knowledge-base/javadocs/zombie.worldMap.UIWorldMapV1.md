---
title: zombie.worldMap.UIWorldMapV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.UIWorldMapV1

`public class UIWorldMapV1 extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.UIWorldMapV1

## Constructors

### public UIWorldMapV1(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

## Methods

### public void setMapItem(MapItem mapItem)

**Parameters:**
- `MapItem` `mapItem`

**Returns:** `void`

### public WorldMapRenderer getRenderer()

**Returns:** `WorldMapRenderer`

### public WorldMapMarkers getMarkers()

**Returns:** `WorldMapMarkers`

### public WorldMapStyle getStyle()

**Returns:** `WorldMapStyle`

### public WorldMapMarkersV1 getMarkersAPI()

**Returns:** `WorldMapMarkersV1`

### public WorldMapStyleV1 getStyleAPI()

**Returns:** `WorldMapStyleV1`

### public WorldMapSymbolsAPI getSymbolsAPI()

**Returns:** `WorldMapSymbolsAPI`

### public void addData(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public int getDataCount()

**Returns:** `int`

### public String getDataFileByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public void clearData()

**Returns:** `void`

### public void endDirectoryData()

**Returns:** `void`

### public void addImages(String directory)

**Parameters:**
- `String` `directory`

**Returns:** `void`

### public int getImagesCount()

**Returns:** `int`

### public void setBoundsInCells(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void setBoundsInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void setBoundsFromWorld()

**Returns:** `void`

### public void setBoundsFromData()

**Returns:** `void`

### public int getMinXInCells()

**Returns:** `int`

### public int getMinYInCells()

**Returns:** `int`

### public int getMaxXInCells()

**Returns:** `int`

### public int getMaxYInCells()

**Returns:** `int`

### public int getWidthInCells()

**Returns:** `int`

### public int getHeightInCells()

**Returns:** `int`

### public int getMinXInSquares()

**Returns:** `int`

### public int getMinYInSquares()

**Returns:** `int`

### public int getMaxXInSquares()

**Returns:** `int`

### public int getMaxYInSquares()

**Returns:** `int`

### public int getWidthInSquares()

**Returns:** `int`

### public int getHeightInSquares()

**Returns:** `int`

### public float uiToWorldX(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`

**Returns:** `float`

### public float uiToWorldY(float uiX,
float uiY,
float zoomF,
float centerWorldX,
float centerWorldY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `zoomF`
- `float` `centerWorldX`
- `float` `centerWorldY`

**Returns:** `float`

### public float worldOriginX()

**Returns:** `float`

### public float worldOriginY()

**Returns:** `float`

### public float getBaseZoom()

**Returns:** `float`

### public float getZoomF()

**Returns:** `float`

### public float getWorldScale()

**Returns:** `float`

### public float getCenterWorldX()

**Returns:** `float`

### public float getCenterWorldY()

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

### public void centerOn(float worldX,
float worldY)

**Parameters:**
- `float` `worldX`
- `float` `worldY`

**Returns:** `void`

### public void moveView(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `void`

### public void zoomAt(float uiX,
float uiY,
float delta)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `float` `delta`

**Returns:** `void`

### public void setZoom(float zoom)

**Parameters:**
- `float` `zoom`

**Returns:** `void`

### public void resetView()

**Returns:** `void`

### public float mouseToWorldX()

**Returns:** `float`

### public float mouseToWorldY()

**Returns:** `float`

### public void setBackgroundRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setDropShadowWidth(int width)

**Parameters:**
- `int` `width`

**Returns:** `void`

### public void setUnvisitedRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setUnvisitedGridRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setBoolean(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public boolean getBoolean(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void setDouble(String name,
double value)

**Parameters:**
- `String` `name`
- `double` `value`

**Returns:** `void`

### public double getDouble(String name,
double defaultValue)

**Parameters:**
- `String` `name`
- `double` `defaultValue`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\UIWorldMapV1.html`*
