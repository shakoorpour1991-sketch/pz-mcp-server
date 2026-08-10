---
title: zombie.pathfind.CollideWithObstaclesPoly
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.CollideWithObstaclesPoly

`public class CollideWithObstaclesPoly extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.CollideWithObstaclesPoly

## Constructors

### public CollideWithObstaclesPoly()

## Methods

### public org.joml.Vector2f resolveCollision(IsoGameCharacter chr,
float nx,
float ny,
org.joml.Vector2f finalPos)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `nx`
- `float` `ny`
- `org.joml.Vector2f` `finalPos`

**Returns:** `org.joml.Vector2f`

### public boolean canStandAt(float x,
float y,
float z,
BaseVehicle ignoreVehicle,
int flags)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `BaseVehicle` `ignoreVehicle`
- `int` `flags`

**Returns:** `boolean`

### public boolean isNotClear(float x0,
float y0,
float x1,
float y1,
int z,
boolean render,
BaseVehicle ignoreVehicle,
boolean ignoreDoors,
boolean closeToWalls)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `int` `z`
- `boolean` `render`
- `BaseVehicle` `ignoreVehicle`
- `boolean` `ignoreDoors`
- `boolean` `closeToWalls`

**Returns:** `boolean`

### public void vehicleMoved(VehiclePoly oldPolyPlusRadius,
VehiclePoly newPolyPlusRadius)

**Parameters:**
- `VehiclePoly` `oldPolyPlusRadius`
- `VehiclePoly` `newPolyPlusRadius`

**Returns:** `void`

### public void render()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\CollideWithObstaclesPoly.html`*
