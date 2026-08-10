---
title: zombie.vehicles.Clipper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.Clipper

`public class Clipper extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.Clipper

## Fields

### public static final int ctNoClip

### public static final int ctIntersection

### public static final int ctUnion

### public static final int ctDifference

### public static final int ctXor

### public static final int jtSquare

### public static final int jtBevel

### public static final int jtRound

### public static final int jtMiter

## Constructors

### public Clipper()

## Methods

### public static void init()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void addPath(int numPoints,
ByteBuffer points,
boolean bClip)

**Parameters:**
- `int` `numPoints`
- `ByteBuffer` `points`
- `boolean` `bClip`

**Returns:** `void`

### public void addPath(int arg0,
ByteBuffer arg1,
boolean arg2,
boolean arg3)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`
- `boolean` `arg2`
- `boolean` `arg3`

**Returns:** `void`

### public void addLine(float x1,
float y1,
float x2,
float y2)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`

**Returns:** `void`

### public void addAABB(float x1,
float y1,
float x2,
float y2)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`

**Returns:** `void`

### public void addAABBBevel(float x1,
float y1,
float x2,
float y2,
float radius)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `radius`

**Returns:** `void`

### public void addPolygon(float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`

**Returns:** `void`

### public void clipAABB(float x1,
float y1,
float x2,
float y2)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`

**Returns:** `void`

### public int generatePolygons()

**Returns:** `int`

### public int generatePolygons(int arg0,
double arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `int` `arg2`

**Returns:** `int`

### public int generatePolygons(double delta,
int joinType)

**Parameters:**
- `double` `delta`
- `int` `joinType`

**Returns:** `int`

### public int generatePolygons(double delta)

**Parameters:**
- `double` `delta`

**Returns:** `int`

### public int getPolygon(int index,
ByteBuffer vertices)

**Parameters:**
- `int` `index`
- `ByteBuffer` `vertices`

**Returns:** `int`

### public int generateTriangulatePolygons(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `int`

### public int triangulate(int index,
ByteBuffer vertices)

**Parameters:**
- `int` `index`
- `ByteBuffer` `vertices`

**Returns:** `int`

### public int triangulate2(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `int`

### public static void n_init()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\Clipper.html`*
