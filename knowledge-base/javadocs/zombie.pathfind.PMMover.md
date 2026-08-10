---
title: zombie.pathfind.PMMover
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.PMMover

`public final class PMMover extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.PMMover

## Fields

### public MoverType type

### public boolean canCrawl

### public boolean crawling

### public boolean ignoreCrawlCost

### public boolean canThump

### public boolean canClimbFences

### public boolean canClimbTallFences

### public int minLevel

### public int maxLevel

### public ArrayList<HLChunkLevel> allowedChunkLevels

### public ArrayList<HLLevelTransition> allowedLevelTransitions

## Constructors

### public PMMover()

## Methods

### public PMMover set(zombie.pathfind.PathFindRequest request)

**Parameters:**
- `zombie.pathfind.PathFindRequest` `request`

**Returns:** `PMMover`

### public PMMover set(PMMover other)

**Parameters:**
- `PMMover` `other`

**Returns:** `PMMover`

### public boolean isAnimal()

**Returns:** `boolean`

### public boolean isPlayer()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isAllowedChunkLevel(Square square)

**Parameters:**
- `Square` `square`

**Returns:** `boolean`

### public boolean isAllowedLevelTransition(IsoDirections dir,
Square square,
boolean bTopFloorSquare)

**Parameters:**
- `IsoDirections` `dir`
- `Square` `square`
- `boolean` `bTopFloorSquare`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\PMMover.html`*
