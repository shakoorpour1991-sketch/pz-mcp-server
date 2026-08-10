---
title: zombie.tileDepth.TileGeometryFile.Polygon
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileGeometryFile.Polygon

`public static final class TileGeometryFile.Polygon extends TileGeometryFile.Geometry`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileGeometryFile.Geometry
- zombie.tileDepth.TileGeometryFile.Polygon

## Fields

### public TileGeometryFile.Plane plane

### public final org.joml.Vector3f translate

### public final org.joml.Vector3f rotate

### public final gnu.trove.list.array.TFloatArrayList points

### public final gnu.trove.list.array.TFloatArrayList triangles

## Constructors

### public Polygon()

## Methods

### public Object clone()

**Returns:** `Object`

### public ScriptParser.Block toBlock(StringBuilder sb)

**Parameters:**
- `StringBuilder` `sb`

**Returns:** `ScriptParser.Block`

### public void offset(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `void`

### public boolean isPolygon()

**Returns:** `boolean`

### public void rasterize(Rasterize.ICallback consumer)

**Parameters:**
- `Rasterize.ICallback` `consumer`

**Returns:** `void`

### public float sceneToUIX(org.joml.Vector3f scenePos)

**Parameters:**
- `org.joml.Vector3f` `scenePos`

**Returns:** `float`

### public float sceneToUIY(org.joml.Vector3f scenePos)

**Parameters:**
- `org.joml.Vector3f` `scenePos`

**Returns:** `float`

### public float sceneToUIX(float sceneX,
float sceneY,
float sceneZ)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`

**Returns:** `float`

### public float sceneToUIY(float sceneX,
float sceneY,
float sceneZ)

**Parameters:**
- `float` `sceneX`
- `float` `sceneY`
- `float` `sceneZ`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileGeometryFile.Polygon.html`*
