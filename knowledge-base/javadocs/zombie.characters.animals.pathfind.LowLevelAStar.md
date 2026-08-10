---
title: zombie.characters.animals.pathfind.LowLevelAStar
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals.pathfind
---

# zombie.characters.animals.pathfind.LowLevelAStar

`public final class LowLevelAStar extends astar.AStar`

**Kind:** class · **Package:** zombie.characters.animals.pathfind

## Inheritance
- java.lang.Object
- astar.AStar
- zombie.characters.animals.pathfind.LowLevelAStar

## Constructors

### public LowLevelAStar(MeshList meshList)

**Parameters:**
- `MeshList` `meshList`

## Methods

### public void setMeshList(MeshList meshList)

**Parameters:**
- `MeshList` `meshList`

**Returns:** `void`

### public long makeKey(int meshIdx,
int tri)

**Parameters:**
- `int` `meshIdx`
- `int` `tri`

**Returns:** `long`

### public int triFromKey(int key)

**Parameters:**
- `int` `key`

**Returns:** `int`

### public int edgeFromKey(int key)

**Parameters:**
- `int` `key`

**Returns:** `int`

### public void getSuccessors(LowLevelSearchNode searchNode,
ArrayList<astar.ISearchNode> successors)

**Parameters:**
- `LowLevelSearchNode` `searchNode`
- `ArrayList<astar.ISearchNode>` `successors`

**Returns:** `void`

### public ArrayList<org.joml.Vector3f> stringPull(ArrayList<astar.ISearchNode> nodes)

**Parameters:**
- `ArrayList<astar.ISearchNode>` `nodes`

**Returns:** `ArrayList<org.joml.Vector3f>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\pathfind\LowLevelAStar.html`*
