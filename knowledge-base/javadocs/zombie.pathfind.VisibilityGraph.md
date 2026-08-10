---
title: zombie.pathfind.VisibilityGraph
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.VisibilityGraph

`public final class VisibilityGraph extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.VisibilityGraph

## Fields

### public VehicleCluster cluster

### public final ArrayList<Edge> edges

### public final ArrayList<Node> perimeterNodes

### public final ArrayList<Edge> perimeterEdges

## Constructors

### public VisibilityGraph()

## Methods

### public boolean isCreated()

**Returns:** `boolean`

### public zombie.pathfind.Intersection getIntersection(Edge edge1,
Edge edge2)

**Parameters:**
- `Edge` `edge1`
- `Edge` `edge2`

**Returns:** `zombie.pathfind.Intersection`

### public void addNode(Node node)

**Parameters:**
- `Node` `node`

**Returns:** `void`

### public void removeNode(Node node)

**Parameters:**
- `Node` `node`

**Returns:** `void`

### public boolean contains(Square square)

**Parameters:**
- `Square` `square`

**Returns:** `boolean`

### public boolean contains(Square square,
int expand)

**Parameters:**
- `Square` `square`
- `int` `expand`

**Returns:** `boolean`

### public boolean intersects(int squareMinX,
int squareMinY,
int squareMaxX,
int squareMaxY,
int expand)

**Parameters:**
- `int` `squareMinX`
- `int` `squareMinY`
- `int` `squareMaxX`
- `int` `squareMaxY`
- `int` `expand`

**Returns:** `boolean`

### public int getPointOutsideObstacles(float x,
float y,
float z,
AdjustStartEndNodeData adjust)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `AdjustStartEndNodeData` `adjust`

**Returns:** `int`

### public void create()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\VisibilityGraph.html`*
