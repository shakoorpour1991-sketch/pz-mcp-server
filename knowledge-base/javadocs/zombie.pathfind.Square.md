---
title: zombie.pathfind.Square
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.Square

`public final class Square extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.Square

## Methods

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public int getZ()

**Returns:** `int`

### public boolean has(int bit)

**Parameters:**
- `int` `bit`

**Returns:** `boolean`

### public boolean TreatAsSolidFloor()

**Returns:** `boolean`

### public boolean isReallySolid()

**Returns:** `boolean`

### public boolean isUnblockedWindowN()

**Returns:** `boolean`

### public boolean isUnblockedWindowW()

**Returns:** `boolean`

### public Square getAdjacentSquare(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `Square`

### public boolean isInside(int x1,
int y1,
int x2,
int y2)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`

**Returns:** `boolean`

### public boolean testPathFindAdjacent(PMMover mover,
int dx,
int dy,
int dz)

**Parameters:**
- `PMMover` `mover`
- `int` `dx`
- `int` `dy`
- `int` `dz`

**Returns:** `boolean`

### public boolean hasTransitionToLevelAbove(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `boolean`

### public boolean hasSlopedSurface()

**Returns:** `boolean`

### public IsoDirections getSlopedSurfaceDirection()

**Returns:** `IsoDirections`

### public float getSlopedSurfaceHeightMin()

**Returns:** `float`

### public float getSlopedSurfaceHeightMax()

**Returns:** `float`

### public boolean hasIdenticalSlopedSurface(Square other)

**Parameters:**
- `Square` `other`

**Returns:** `boolean`

### public boolean isSlopedSurfaceDirectionVertical()

**Returns:** `boolean`

### public boolean isSlopedSurfaceDirectionHorizontal()

**Returns:** `boolean`

### public float getSlopedSurfaceHeight(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `float`

### public float getSlopedSurfaceHeight(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `float`

### public boolean isSlopedSurfaceEdgeBlocked(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `boolean`

### public boolean hasSlopedSurfaceToLevelAbove(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean hasSlopedSurfaceBottom(IsoDirections slopeDir)

**Parameters:**
- `IsoDirections` `slopeDir`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\Square.html`*
