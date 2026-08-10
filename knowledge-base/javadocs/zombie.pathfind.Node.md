---
title: zombie.pathfind.Node
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.Node

`public final class Node extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.Node

## Fields

### public float x

### public float y

### public int z

### public Square square

### public ArrayList<VisibilityGraph> graphs

### public final ArrayList<Edge> edges

### public final ArrayList<Connection> visible

## Methods

### public Node init(float x,
float y,
int z)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`

**Returns:** `Node`

### public boolean hasFlag(int flag)

**Parameters:**
- `int` `flag`

**Returns:** `boolean`

### public boolean isOnEdgeOfLoadedArea()

**Returns:** `boolean`

### public static Node alloc()

**Returns:** `Node`

### public void release()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\Node.html`*
