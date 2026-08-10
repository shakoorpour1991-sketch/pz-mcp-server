---
title: zombie.pathfind.PathFindBehavior2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.PathFindBehavior2

`public final class PathFindBehavior2 extends Object implements IPathfinder`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.PathFindBehavior2

## Fields

### public boolean pathNextIsSet

### public float pathNextX

### public float pathNextY

### public boolean stopping

### public final WalkingOnTheSpot walkingOnTheSpot

## Constructors

### public PathFindBehavior2(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public boolean isGoalNone()

**Returns:** `boolean`

### public boolean isGoalCharacter()

**Returns:** `boolean`

### public boolean isGoalLocation()

**Returns:** `boolean`

### public boolean isGoalSound()

**Returns:** `boolean`

### public boolean isGoalSitOnFurniture()

**Returns:** `boolean`

### public IsoObject getGoalSitOnFurnitureObject()

**Returns:** `IsoObject`

### public boolean isGoalVehicleAdjacent()

**Returns:** `boolean`

### public boolean isGoalVehicleArea()

**Returns:** `boolean`

### public boolean isGoalVehicleSeat()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public void pathToCharacter(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `void`

### public void pathToLocation(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void pathToLocationF(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void pathToSound(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void pathToNearest(gnu.trove.list.array.TFloatArrayList locations)

**Parameters:**
- `gnu.trove.list.array.TFloatArrayList` `locations`

**Returns:** `void`

### public void pathToNearestTable(se.krka.kahlua.vm.KahluaTable locationsTable)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `locationsTable`

**Returns:** `void`

### public void pathToSitOnFurniture(IsoObject furniture,
boolean bAnySpriteGridObject)

**Parameters:**
- `IsoObject` `furniture`
- `boolean` `bAnySpriteGridObject`

**Returns:** `void`

### public boolean shouldIgnoreCollisionWithSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public void pathToVehicleAdjacent(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void pathToVehicleArea(BaseVehicle vehicle,
String areaId)

**Parameters:**
- `BaseVehicle` `vehicle`
- `String` `areaId`

**Returns:** `void`

### public void pathToVehicleSeat(BaseVehicle vehicle,
int seat)

**Parameters:**
- `BaseVehicle` `vehicle`
- `int` `seat`

**Returns:** `void`

### public void pathToGrabCorpse(IsoDeadBody targetBody)

**Parameters:**
- `IsoDeadBody` `targetBody`

**Returns:** `void`

### public void cancel()

**Returns:** `void`

### public boolean getIsCancelled()

**Returns:** `boolean`

### public void setData(float targetX,
float targetY,
float targetZ)

**Parameters:**
- `float` `targetX`
- `float` `targetY`
- `float` `targetZ`

**Returns:** `void`

### public float getTargetX()

**Returns:** `float`

### public float getTargetY()

**Returns:** `float`

### public float getTargetZ()

**Returns:** `float`

### public float getPathLength()

**Returns:** `float`

### public IsoGameCharacter getTargetChar()

**Returns:** `IsoGameCharacter`

### public boolean isTargetLocation(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `boolean`

### public PathFindBehavior2.BehaviorResult update()

**Returns:** `PathFindBehavior2.BehaviorResult`

### public void moveToPoint(float x,
float y,
float speedMul)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `speedMul`

**Returns:** `void`

### public void moveToDir(IsoMovingObject target,
float speedMul)

**Parameters:**
- `IsoMovingObject` `target`
- `float` `speedMul`

**Returns:** `void`

### public boolean shouldGetUpFromCrawl()

**Returns:** `boolean`

### public boolean shouldBeMoving()

**Returns:** `boolean`

### public boolean hasStartedMoving()

**Returns:** `boolean`

### public boolean allowTurnAnimation()

**Returns:** `boolean`

### public boolean isTurningToObstacle()

**Returns:** `boolean`

### public boolean isStrafing()

**Returns:** `boolean`

### public static void closestPointOnPath(float x3,
float y3,
float z,
IsoMovingObject mover,
Path path,
PathFindBehavior2.PointOnPath pop)

**Parameters:**
- `float` `x3`
- `float` `y3`
- `float` `z`
- `IsoMovingObject` `mover`
- `Path` `path`
- `PathFindBehavior2.PointOnPath` `pop`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void Succeeded(Path path,
Mover mover)

**Parameters:**
- `Path` `path`
- `Mover` `mover`

**Returns:** `void`

### public void Failed(Mover mover)

**Parameters:**
- `Mover` `mover`

**Returns:** `void`

### public boolean isMovingUsingPathFind()

**Returns:** `boolean`

### public boolean isGoodChairAdjacentSquare(IsoGridSquare targetSquare,
IsoGridSquare adjacentSquare)

**Parameters:**
- `IsoGridSquare` `targetSquare`
- `IsoGridSquare` `adjacentSquare`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\PathFindBehavior2.html`*
