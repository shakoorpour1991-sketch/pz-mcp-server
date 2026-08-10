---
title: zombie.pathfind.highLevel.HLAStar
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind.highLevel
---

# zombie.pathfind.highLevel.HLAStar

`public class HLAStar extends astar.AStar`

**Kind:** class · **Package:** zombie.pathfind.highLevel

## Inheritance
- java.lang.Object
- astar.AStar
- zombie.pathfind.highLevel.HLAStar

## Fields

### public static int modificationCount

### public static final PerformanceProfileProbe PerfFindPath

### public static final PerformanceProfileProbe PerfGetSuccessors

### public static final PerformanceProfileProbe PerfGetSuccessors_OnSameChunk

### public static final PerformanceProfileProbe PerfGetSuccessors_OnAdjacentChunks

### public static final PerformanceProfileProbe PerfGetSuccessors_VisibilityGraphs

### public static final PerformanceProfileProbe PerfInitStairs

## Constructors

### public HLAStar()

## Methods

### public void findPath(PMMover mover,
float x1,
float y1,
int z1,
float x2,
float y2,
int z2,
ArrayList<HLLevelTransition> levelTransitionList,
ArrayList<HLChunkLevel> chunkList,
ArrayList<Boolean> bottomOfLevelTransition,
boolean bRender)

**Parameters:**
- `PMMover` `mover`
- `float` `x1`
- `float` `y1`
- `int` `z1`
- `float` `x2`
- `float` `y2`
- `int` `z2`
- `ArrayList<HLLevelTransition>` `levelTransitionList`
- `ArrayList<HLChunkLevel>` `chunkList`
- `ArrayList<Boolean>` `bottomOfLevelTransition`
- `boolean` `bRender`

**Returns:** `void`

### public HLLevelTransition getLevelTransitionAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `HLLevelTransition`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\highLevel\HLAStar.html`*
