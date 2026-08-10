---
title: zombie.iso.WorldMarkers
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.WorldMarkers

`public final class WorldMarkers extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.WorldMarkers

## Description

TurboTuTone.

## Fields

### public static final WorldMarkers instance

## Methods

### public void init()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public WorldMarkers.PlayerHomingPoint getHomingPoint(int id)

**Parameters:**
- `int` `id`

**Returns:** `WorldMarkers.PlayerHomingPoint`

### public WorldMarkers.PlayerHomingPoint addPlayerHomingPoint(IsoPlayer player,
int x,
int y)

**Parameters:**
- `IsoPlayer` `player`
- `int` `x`
- `int` `y`

**Returns:** `WorldMarkers.PlayerHomingPoint`

### public WorldMarkers.PlayerHomingPoint addPlayerHomingPoint(IsoPlayer player,
int x,
int y,
float r,
float g,
float b,
float a)

**Parameters:**
- `IsoPlayer` `player`
- `int` `x`
- `int` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMarkers.PlayerHomingPoint`

### public WorldMarkers.PlayerHomingPoint addPlayerHomingPoint(IsoPlayer player,
int x,
int y,
String texname,
float r,
float g,
float b,
float a,
boolean homeOnTarget,
int homeOnDist)

**Parameters:**
- `IsoPlayer` `player`
- `int` `x`
- `int` `y`
- `String` `texname`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `homeOnTarget`
- `int` `homeOnDist`

**Returns:** `WorldMarkers.PlayerHomingPoint`

### public boolean removeHomingPoint(WorldMarkers.PlayerHomingPoint point)

**Parameters:**
- `WorldMarkers.PlayerHomingPoint` `point`

**Returns:** `boolean`

### public boolean removeHomingPoint(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean removePlayerHomingPoint(IsoPlayer player,
WorldMarkers.PlayerHomingPoint point)

**Parameters:**
- `IsoPlayer` `player`
- `WorldMarkers.PlayerHomingPoint` `point`

**Returns:** `boolean`

### public boolean removePlayerHomingPoint(IsoPlayer player,
int id)

**Parameters:**
- `IsoPlayer` `player`
- `int` `id`

**Returns:** `boolean`

### public void removeAllHomingPoints(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public WorldMarkers.DirectionArrow getDirectionArrow(int id)

**Parameters:**
- `int` `id`

**Returns:** `WorldMarkers.DirectionArrow`

### public WorldMarkers.DirectionArrow addDirectionArrow(IsoPlayer player,
int x,
int y,
int z,
String texname,
float r,
float g,
float b,
float a)

**Parameters:**
- `IsoPlayer` `player`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `texname`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMarkers.DirectionArrow`

### public boolean removeDirectionArrow(WorldMarkers.DirectionArrow arrow)

**Parameters:**
- `WorldMarkers.DirectionArrow` `arrow`

**Returns:** `boolean`

### public boolean removeDirectionArrow(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean removePlayerDirectionArrow(IsoPlayer player,
WorldMarkers.DirectionArrow arrow)

**Parameters:**
- `IsoPlayer` `player`
- `WorldMarkers.DirectionArrow` `arrow`

**Returns:** `boolean`

### public boolean removePlayerDirectionArrow(IsoPlayer player,
int id)

**Parameters:**
- `IsoPlayer` `player`
- `int` `id`

**Returns:** `boolean`

### public void removeAllDirectionArrows(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean removeGridSquareMarker(WorldMarkers.GridSquareMarker marker)

**Parameters:**
- `WorldMarkers.GridSquareMarker` `marker`

**Returns:** `boolean`

### public boolean removeGridSquareMarker(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public WorldMarkers.GridSquareMarker getGridSquareMarker(int id)

**Parameters:**
- `int` `id`

**Returns:** `WorldMarkers.GridSquareMarker`

### public WorldMarkers.GridSquareMarker addGridSquareMarker(IsoGridSquare gs,
float r,
float g,
float b,
boolean doAlpha,
float size)

**Parameters:**
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `boolean` `doAlpha`
- `float` `size`

**Returns:** `WorldMarkers.GridSquareMarker`

### public WorldMarkers.GridSquareMarker addGridSquareMarker(String texid,
String overlay,
IsoGridSquare gs,
float r,
float g,
float b,
boolean doAlpha,
float size)

**Parameters:**
- `String` `texid`
- `String` `overlay`
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `boolean` `doAlpha`
- `float` `size`

**Returns:** `WorldMarkers.GridSquareMarker`

### public WorldMarkers.GridSquareMarker addGridSquareMarker(String texid,
String overlay,
IsoGridSquare gs,
float r,
float g,
float b,
boolean doAlpha,
float size,
float fadeSpeed,
float fadeMin,
float fadeMax)

**Parameters:**
- `String` `texid`
- `String` `overlay`
- `IsoGridSquare` `gs`
- `float` `r`
- `float` `g`
- `float` `b`
- `boolean` `doAlpha`
- `float` `size`
- `float` `fadeSpeed`
- `float` `fadeMin`
- `float` `fadeMax`

**Returns:** `WorldMarkers.GridSquareMarker`

### public void renderGridSquareMarkers(IsoCell.PerPlayerRender perPlayerRender,
int zLayer,
int playerIndex)

**Parameters:**
- `IsoCell.PerPlayerRender` `perPlayerRender`
- `int` `zLayer`
- `int` `playerIndex`

**Returns:** `void`

### public void renderGridSquareMarkers(int z)

**Parameters:**
- `int` `z`

**Returns:** `void`

### public void debugRender()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void renderHomingPoint()

**Returns:** `void`

### public void renderDirectionArrow(boolean worldDraw)

**Parameters:**
- `boolean` `worldDraw`

**Returns:** `void`

### public static boolean intersectLineSegments(zombie.iso.WorldMarkers.Line l1,
zombie.iso.WorldMarkers.Line l2,
zombie.iso.WorldMarkers.Point intersection)

**Parameters:**
- `zombie.iso.WorldMarkers.Line` `l1`
- `zombie.iso.WorldMarkers.Line` `l2`
- `zombie.iso.WorldMarkers.Point` `intersection`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\WorldMarkers.html`*
