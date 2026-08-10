---
title: zombie.worldMap.WorldMapGeometry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapGeometry

`public final class WorldMapGeometry extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapGeometry

## Fields

### public WorldMapCell cell

### public WorldMapGeometry.Type type

### public final ArrayList<WorldMapPoints> points

### public int minX

### public int minY

### public int maxX

### public int maxY

### public int firstIndex

### public short indexCount

### public ArrayList<WorldMapGeometry.TrianglesPerZoom> trianglesPerZoom

### public boolean failedToTriangulate

### public int vboIndex1

### public int vboIndex2

### public int vboIndex3

### public int vboIndex4

## Constructors

### public WorldMapGeometry(WorldMapCell cell)

**Parameters:**
- `WorldMapCell` `cell`

## Methods

### public void calculateBounds()

**Returns:** `void`

### public boolean containsPoint(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public void triangulate(WorldMapCell cell,
double[] delta)

**Parameters:**
- `WorldMapCell` `cell`
- `double[]` `delta`

**Returns:** `void`

### public void clearTriangles()

**Returns:** `void`

### public void dispose()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapGeometry.html`*
