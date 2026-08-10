---
title: zombie.worldMap.WorldMapCell
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapCell

`public final class WorldMapCell extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.WorldMapCell

## Fields

### public int x

### public int y

### public final ArrayList<WorldMapFeature> features

### public int priority

### public int[] clipHigherPriorityCells

### public ShortBuffer pointBuffer

### public ShortBuffer indexBuffer

### public FloatBuffer triangleBuffer

## Constructors

### public WorldMapCell()

## Methods

### public void hitTest(float x,
float y,
ArrayList<WorldMapFeature> features)

**Parameters:**
- `float` `x`
- `float` `y`
- `ArrayList<WorldMapFeature>` `features`

**Returns:** `void`

### public ShortBuffer getPointBuffer(int addPoints)

**Parameters:**
- `int` `addPoints`

**Returns:** `ShortBuffer`

### public ShortBuffer getIndexBuffer(int count)

**Parameters:**
- `int` `count`

**Returns:** `ShortBuffer`

### public FloatBuffer getTriangleBuffer(int count)

**Parameters:**
- `int` `count`

**Returns:** `FloatBuffer`

### public void clearTriangles()

**Returns:** `void`

### public void dispose()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapCell.html`*
