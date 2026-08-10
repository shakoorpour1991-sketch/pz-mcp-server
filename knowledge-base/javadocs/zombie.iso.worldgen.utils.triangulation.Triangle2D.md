---
title: zombie.iso.worldgen.utils.triangulation.Triangle2D
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen.utils.triangulation
---

# zombie.iso.worldgen.utils.triangulation.Triangle2D

`public class Triangle2D extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen.utils.triangulation

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.utils.triangulation.Triangle2D

## Fields

### public Vector2D a

### public Vector2D b

### public Vector2D c

## Constructors

### public Triangle2D(Vector2D a,
Vector2D b,
Vector2D c)

**Parameters:**
- `Vector2D` `a`
- `Vector2D` `b`
- `Vector2D` `c`

## Methods

### public boolean contains(Vector2D point)

**Parameters:**
- `Vector2D` `point`

**Returns:** `boolean`

### public boolean isPointInCircumcircle(Vector2D point)

**Parameters:**
- `Vector2D` `point`

**Returns:** `boolean`

### public boolean isOrientedCCW()

**Returns:** `boolean`

### public boolean isNeighbour(Edge2D edge)

**Parameters:**
- `Edge2D` `edge`

**Returns:** `boolean`

### public Vector2D getNoneEdgeVertex(Edge2D edge)

**Parameters:**
- `Edge2D` `edge`

**Returns:** `Vector2D`

### public boolean hasVertex(Vector2D vertex)

**Parameters:**
- `Vector2D` `vertex`

**Returns:** `boolean`

### public EdgeDistancePack findNearestEdge(Vector2D point)

**Parameters:**
- `Vector2D` `point`

**Returns:** `EdgeDistancePack`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\utils\triangulation\Triangle2D.html`*
