---
title: zombie.characters.animals.pathfind.Mesh
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals.pathfind
---

# zombie.characters.animals.pathfind.Mesh

`public final class Mesh extends Object`

**Kind:** class · **Package:** zombie.characters.animals.pathfind

## Inheritance
- java.lang.Object
- zombie.characters.animals.pathfind.Mesh

## Fields

### public MeshList meshList

### public final ArrayList<org.joml.Vector2f> polygon

### public final ArrayList<org.joml.Vector2f> triangles

### public float centroidX

### public float centroidY

### public final gnu.trove.list.array.TIntArrayList adjacentTriangles

### public final gnu.trove.list.array.TShortArrayList trianglesOnBoundaries

### public final gnu.trove.list.array.TShortArrayList edgesOnBoundaries

### public Zone zone

## Constructors

### public Mesh()

## Methods

### public org.joml.Vector2f pickRandomPoint(org.joml.Vector2f out)

**Parameters:**
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

### public org.joml.Vector2f pickRandomPointInTriangle(int triangleIndex,
org.joml.Vector2f out)

**Parameters:**
- `int` `triangleIndex`
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

### public static boolean testPointInTriangle(float pX,
float pY,
float pZ,
float v0X,
float v0Y,
float v0Z,
float v1X,
float v1Y,
float v1Z,
float v2X,
float v2Y,
float v2Z)

**Parameters:**
- `float` `pX`
- `float` `pY`
- `float` `pZ`
- `float` `v0X`
- `float` `v0Y`
- `float` `v0Z`
- `float` `v1X`
- `float` `v1Y`
- `float` `v1Z`
- `float` `v2X`
- `float` `v2Y`
- `float` `v2Z`

**Returns:** `boolean`

### public float getEdgeMidPointX(int triangleIdx,
int edgeIdx)

**Parameters:**
- `int` `triangleIdx`
- `int` `edgeIdx`

**Returns:** `float`

### public float getEdgeMidPointY(int triangleIdx,
int edgeIdx)

**Parameters:**
- `int` `triangleIdx`
- `int` `edgeIdx`

**Returns:** `float`

### public void renderOutline(IPathRenderer renderer,
float r,
float g,
float b,
float a)

**Parameters:**
- `IPathRenderer` `renderer`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderPoints(IPathRenderer renderer,
float r,
float g,
float b,
float a)

**Parameters:**
- `IPathRenderer` `renderer`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderTriangles(IPathRenderer renderer,
float r,
float g,
float b,
float a)

**Parameters:**
- `IPathRenderer` `renderer`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderOffMeshConnections(IPathRenderer renderer,
float r,
float g,
float b,
float a)

**Parameters:**
- `IPathRenderer` `renderer`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\pathfind\Mesh.html`*
