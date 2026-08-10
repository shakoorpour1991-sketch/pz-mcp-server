---
title: zombie.worldMap.WorldMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMap

`public final class WorldMap extends Object implements AssetStateObserver, IWorldMapStreetListener`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMap

## Fields

### public final ArrayList<WorldMapData> data

### public final ArrayList<WorldMapImages> images

### public final ArrayList<WorldMapStreets> streetData

### public final WorldMapStreets combinedStreets

### public int minDataX

### public int minDataY

### public int maxDataX

### public int maxDataY

### public int minX

### public int minY

### public int maxX

### public int maxY

### public final ArrayList<WorldMapData> lastDataInDirectory

## Constructors

### public WorldMap()

## Methods

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

### public void setBoundsFromData()

**Returns:** `void`

### public void setBoundsFromWorld()

**Returns:** `void`

### public void addData(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public int getDataCount()

**Returns:** `int`

### public WorldMapData getDataByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapData`

### public boolean isDataLoaded()

**Returns:** `boolean`

### public void clearData()

**Returns:** `void`

### public void endDirectoryData()

**Returns:** `void`

### public boolean isLastDataInDirectory(WorldMapData data)

**Parameters:**
- `WorldMapData` `data`

**Returns:** `boolean`

### public boolean hasData()

**Returns:** `boolean`

### public void addImages(String directory)

**Parameters:**
- `String` `directory`

**Returns:** `void`

### public void addImagePyramid(String absolutePath)

**Parameters:**
- `String` `absolutePath`

**Returns:** `void`

### public boolean hasImages()

**Returns:** `boolean`

### public int getImagesCount()

**Returns:** `int`

### public WorldMapImages getImagesByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapImages`

### public void clearImages()

**Returns:** `void`

### public WorldMapImages getWorldMapImagesByFileName(String absolutePath)

**Parameters:**
- `String` `absolutePath`

**Returns:** `WorldMapImages`

### public void addStreetData(String relativeFileName)

**Parameters:**
- `String` `relativeFileName`

**Returns:** `void`

### public int getStreetDataCount()

**Returns:** `int`

### public WorldMapStreets getStreetDataByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStreets`

### public WorldMapStreets getStreetDataByRelativeFileName(String relativeFileName)

**Parameters:**
- `String` `relativeFileName`

**Returns:** `WorldMapStreets`

### public void clearStreetData()

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

### public WorldMapCell getCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `WorldMapCell`

### public int getDataWidthInCells()

**Returns:** `int`

### public int getDataHeightInCells()

**Returns:** `int`

### public int getDataWidthInSquares()

**Returns:** `int`

### public int getDataHeightInSquares()

**Returns:** `int`

### public static void Reset()

**Returns:** `void`

### public void onStateChanged(Asset.State oldState,
Asset.State newState,
Asset asset)

**Parameters:**
- `Asset.State` `oldState`
- `Asset.State` `newState`
- `Asset` `asset`

**Returns:** `void`

### public void onAdd(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onBeforeRemove(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onAfterRemove(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onBeforeModifyStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onAfterModifyStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMap.html`*
