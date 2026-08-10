---
title: zombie.worldMap.WorldMapVisited
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapVisited

`public class WorldMapVisited extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapVisited

## Constructors

### public WorldMapVisited()

## Methods

### public void setBounds(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public int getMinX()

**Returns:** `int`

### public int getMinY()

**Returns:** `int`

### public static int getVisitedLength()

**Returns:** `int`

### public void setKnownInCells(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void clearKnownInCells(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void setVisitedInCells(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void clearVisitedInCells(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public static void setKnownInSquares(int minX,
int minY,
int maxX,
int maxY,
byte[] visited)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`
- `byte[]` `visited`

**Returns:** `void`

### public void setKnownInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void clearKnownInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void setVisitedInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void clearVisitedInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public void renderMain()

**Returns:** `void`

### public void render(float renderX,
float renderY,
int minX,
int minY,
int maxX,
int maxY,
float worldScale,
boolean blur)

**Parameters:**
- `float` `renderX`
- `float` `renderY`
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`
- `float` `worldScale`
- `boolean` `blur`

**Returns:** `void`

### public void renderGrid(float renderX,
float renderY,
int minX,
int minY,
int maxX,
int maxY,
float worldScale,
float zoomF)

**Parameters:**
- `float` `renderX`
- `float` `renderY`
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`
- `float` `worldScale`
- `float` `zoomF`

**Returns:** `void`

### public void save()
throws IOException

**Returns:** `void`

### public void saveToBufferMap(SaveBufferMap bufferMap)

**Parameters:**
- `SaveBufferMap` `bufferMap`

**Returns:** `void`

### public void load()
throws IOException

**Returns:** `void`

### public void processDataChunk(int pos,
byte[] chunk)

**Parameters:**
- `int` `pos`
- `byte[]` `chunk`

**Returns:** `void`

### public boolean isKnown(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean isKnown(int x1,
int y1,
int x2,
int y2)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`

**Returns:** `boolean`

### public boolean isVisited(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean isVisited(int x,
int y,
int x2,
int y2)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `x2`
- `int` `y2`

**Returns:** `boolean`

### public static WorldMapVisited getInstance()

**Returns:** `WorldMapVisited`

### public static WorldMapVisited getInstance(boolean isLoadingNeeded)

**Parameters:**
- `boolean` `isLoadingNeeded`

**Returns:** `WorldMapVisited`

### public static void update()

**Returns:** `void`

### public static void updatePlayer(IsoPlayer player,
byte[] visited)

**Parameters:**
- `IsoPlayer` `player`
- `byte[]` `visited`

**Returns:** `void`

### public void forget()

**Returns:** `void`

### public static void SaveAll()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapVisited.html`*
