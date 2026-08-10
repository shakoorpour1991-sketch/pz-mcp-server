---
title: zombie.iso.IsoMovingObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoMovingObject

`public class IsoMovingObject extends IsoObject implements Mover`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject

## Fields

### public static TreeSoundManager treeSoundMgr

### public static final int MAX_ZOMBIES_EATING

### public boolean noDamage

### public IsoGridSquare last

### public Vector2 reqMovement

### public IsoSpriteInstance def

## Constructors

### public IsoMovingObject()

### public IsoMovingObject(boolean bObjectListAdd)

**Parameters:**
- `boolean` `bObjectListAdd`

### public IsoMovingObject(IsoSprite spr,
boolean bObjectListAdd)

**Parameters:**
- `IsoSprite` `spr`
- `boolean` `bObjectListAdd`

## Methods

### public String toString()

**Returns:** `String`

### public static int getIDCount()

**Returns:** `int`

### public static void setIDCount(int aIDCount)

**Parameters:**
- `int` `aIDCount` — the IDCount to set

**Returns:** `void`

### public boolean isAnimationRecorderActive()

**Returns:** `boolean`

### public AnimationPlayerRecorder getAnimationRecorder()

**Returns:** `AnimationPlayerRecorder`

### public void closeAnimationRecorder()

**Returns:** `void`

### public void setAnimRecorderActive(boolean isActive,
boolean isExclusive)

**Parameters:**
- `boolean` `isActive`
- `boolean` `isExclusive`

**Returns:** `void`

### public boolean shouldAnimRecorderBeActive()

**Returns:** `boolean`

### public IsoBuilding getBuilding()

**Returns:** `IsoBuilding`

### public IWorldRegion getMasterRegion()

**Returns:** `IWorldRegion`

### public float getWeight()

**Returns:** `float`

### public void setWeight(float weight)

**Parameters:**
- `float` `weight` — the weight to set

**Returns:** `void`

### public float getWeight(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public void onMouseRightClick(int lx,
int ly)

**Parameters:**
- `int` `lx`
- `int` `ly`

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public void collideWith(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void doStairs()

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public String getUID()

**Returns:** `String`

### public int getPathFindIndex()

**Returns:** `int`

### public void setPathFindIndex(int pathFindIndex)

**Parameters:**
- `int` `pathFindIndex` — the PathFindIndex to set

**Returns:** `void`

### public float getScreenX()

**Returns:** `float`

### public float getScreenY()

**Returns:** `float`

### public Thumpable getThumpTarget()

**Returns:** `Thumpable`

### public void setThumpTarget(Thumpable thumpTarget)

**Parameters:**
- `Thumpable` `thumpTarget` — the thumpTarget to set

**Returns:** `void`

### public Vector2 getVectorFromDirection(Vector2 moveForwardVec)

**Parameters:**
- `Vector2` `moveForwardVec`

**Returns:** `Vector2`

### public static Vector2 getVectorFromDirection(Vector2 moveForwardVec,
IsoDirections dir)

**Parameters:**
- `Vector2` `moveForwardVec`
- `IsoDirections` `dir`

**Returns:** `Vector2`

### public Vector3 getPosition(Vector3 position)

Get the object's position. Stored in the supplied parameter.

**Parameters:**
- `Vector3` `position`

**Returns:** `Vector3`

### public org.lwjgl.util.vector.Vector3f getPosition(org.lwjgl.util.vector.Vector3f out)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `out`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public Vector2 getPosition(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### public void setPosition(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void setPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `void`

### public void setPosition(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public float getX()

**Returns:** `float`

### public float setX(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public void setForceX(float x)

**Parameters:**
- `float` `x`

**Returns:** `void`

### public float getY()

**Returns:** `float`

### public float setY(float y)

**Parameters:**
- `float` `y`

**Returns:** `float`

### public void setForceY(float y)

**Parameters:**
- `float` `y`

**Returns:** `void`

### public float getZ()

**Returns:** `float`

### public float setZ(float z)

**Parameters:**
- `float` `z`

**Returns:** `float`

### public IsoGridSquare getMovingSquare()

**Returns:** `IsoGridSquare`

### public void setMovingSquare(IsoGridSquare newMovingSquare)

**Parameters:**
- `IsoGridSquare` `newMovingSquare`

**Returns:** `void`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare findCurrentGridSquare()

**Returns:** `IsoGridSquare`

### public IsoBuilding getCurrentBuilding()

**Returns:** `IsoBuilding`

### public float Hit(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`

**Returns:** `float`

### public void moveUnmodded(float diffX,
float diffY)

**Parameters:**
- `float` `diffX`
- `float` `diffY`

**Returns:** `void`

### public boolean isCharacter()

**Returns:** `boolean`

### public float DistTo(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `float`

### public float DistTo(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `float`

### public float DistToProper(IsoObject other)

**Parameters:**
- `IsoObject` `other`

**Returns:** `float`

### public float DistToSquared(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `float`

### public float DistToSquared(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public boolean isWithinRange(IsoMovingObject object,
float minRange)

**Parameters:**
- `IsoMovingObject` `object`
- `float` `minRange`

**Returns:** `boolean`

### public final <ObjectType extends IsoMovingObject>
ObjectType getClosestObject(List<ObjectType> objects)

**Returns:** `ObjectType`

### public final <ObjectType extends IsoMovingObject>
ObjectType getClosestStaticMovingObjectInNearbySquares(Class<? extends ObjectType> objectType,
BiPredicate<IsoGridSquare, IsoGridSquare> squareFilter,
Predicate<ObjectType> objectFilter)

**Returns:** `ObjectType`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public String getDescription(String separatorStr)

**Parameters:**
- `String` `separatorStr`

**Returns:** `String`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void removeFromSquare()

**Returns:** `void`

### public IsoGridSquare getFuturWalkedSquare()

**Returns:** `IsoGridSquare`

### public float getGlobalMovementMod()

**Returns:** `float`

### public float getGlobalMovementMod(boolean bDoNoises)

**Parameters:**
- `boolean` `bDoNoises`

**Returns:** `float`

### public void postupdate()

**Returns:** `void`

### public boolean shouldSnapZToCurrentSquare()

**Returns:** `boolean`

### public void updateAnimation()

**Returns:** `void`

### public void ensureOnTile()

**Returns:** `void`

### public void preupdate()

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void spotted(IsoMovingObject other,
boolean bForced)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public int compareToY(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `int`

### public float distToNearestCamCharacter()

**Returns:** `float`

### public boolean isSolidForSeparate()

**Returns:** `boolean`

### public boolean isPushableForSeparate()

**Returns:** `boolean`

### public boolean isPushedByForSeparate(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public void separate()

Collision detection

**Returns:** `void`

### public String getBumpedType(IsoGameCharacter bumped)

**Parameters:**
- `IsoGameCharacter` `bumped`

**Returns:** `String`

### public float getLastX()

**Returns:** `float`

### public float setLastX(float lx)

**Parameters:**
- `float` `lx`

**Returns:** `float`

### public float getLastY()

**Returns:** `float`

### public float setLastY(float ly)

**Parameters:**
- `float` `ly`

**Returns:** `float`

### public float getLastZ()

**Returns:** `float`

### public float setLastZ(float lz)

**Parameters:**
- `float` `lz`

**Returns:** `float`

### public float getNextX()

**Returns:** `float`

### public final int getNextXi()

**Returns:** `int`

### public float setNextX(float nx)

**Parameters:**
- `float` `nx`

**Returns:** `float`

### public float getNextY()

**Returns:** `float`

### public final int getNextYi()

**Returns:** `int`

### public float setNextY(float ny)

**Parameters:**
- `float` `ny`

**Returns:** `float`

### public void slideAwayToCollisionPos(float collNewPosX,
float collNewPosY,
boolean instant)

**Parameters:**
- `float` `collNewPosX`
- `float` `collNewPosY`
- `boolean` `instant`

**Returns:** `void`

### public void setMovingSquareNow()

**Returns:** `void`

### public IsoGridSquare getFeelerTile(float dist)

**Parameters:**
- `float` `dist`

**Returns:** `IsoGridSquare`

### public void DoCollideNorS()

**Returns:** `void`

### public void DoCollideWorE()

**Returns:** `void`

### public int getTimeSinceZombieAttack()

**Returns:** `int`

### public void setTimeSinceZombieAttack(int timeSinceZombieAttack)

**Parameters:**
- `int` `timeSinceZombieAttack` — the TimeSinceZombieAttack to set

**Returns:** `void`

### public boolean isCollidedE()

**Returns:** `boolean`

### public void setCollidedE(boolean collidedE)

**Parameters:**
- `boolean` `collidedE` — the collidedE to set

**Returns:** `void`

### public boolean isCollidedN()

**Returns:** `boolean`

### public void setCollidedN(boolean collidedN)

**Parameters:**
- `boolean` `collidedN` — the collidedN to set

**Returns:** `void`

### public IsoObject getCollidedObject()

**Returns:** `IsoObject`

### public void setCollidedObject(IsoObject collidedObject)

**Parameters:**
- `IsoObject` `collidedObject` — the CollidedObject to set

**Returns:** `void`

### public boolean isCollidedS()

**Returns:** `boolean`

### public void setCollidedS(boolean collidedS)

**Parameters:**
- `boolean` `collidedS` — the collidedS to set

**Returns:** `void`

### public boolean isCollidedThisFrame()

**Returns:** `boolean`

### public void setCollidedThisFrame(boolean collidedThisFrame)

**Parameters:**
- `boolean` `collidedThisFrame` — the collidedThisFrame to set

**Returns:** `void`

### public boolean isCollidedW()

**Returns:** `boolean`

### public void setCollidedW(boolean collidedW)

**Parameters:**
- `boolean` `collidedW` — the collidedW to set

**Returns:** `void`

### public boolean isCollidedWithDoor()

**Returns:** `boolean`

### public void setCollidedWithDoor(boolean collidedWithDoor)

**Parameters:**
- `boolean` `collidedWithDoor` — the CollidedWithDoor to set

**Returns:** `void`

### public boolean isCollidedWithVehicle()

**Returns:** `boolean`

### public IsoGridSquare getCurrentSquare()

**Returns:** `IsoGridSquare`

### public Zone getCurrentZone()

**Returns:** `Zone`

### public void setCurrent(IsoGridSquare current)

**Parameters:**
- `IsoGridSquare` `current` — the current to set

**Returns:** `void`

### public void setCurrentSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void setCurrentSquareFromPosition()

**Returns:** `void`

### public void setCurrentSquareFromPosition(float x1,
float y1)

**Parameters:**
- `float` `x1`
- `float` `y1`

**Returns:** `void`

### public void setCurrentSquareFromPosition(float x1,
float y1,
float z1)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `z1`

**Returns:** `void`

### public boolean isDestroyed()

**Returns:** `boolean`

### public void setDestroyed(boolean destroyed)

**Parameters:**
- `boolean` `destroyed` — the destroyed to set

**Returns:** `void`

### public boolean isFirstUpdate()

**Returns:** `boolean`

### public void setFirstUpdate(boolean firstUpdate)

**Parameters:**
- `boolean` `firstUpdate` — the firstUpdate to set

**Returns:** `void`

### public Vector2 getHitDir()

**Returns:** `Vector2`

### public void setHitDir(Vector2 hitDir)

**Parameters:**
- `Vector2` `hitDir` — the hitDir to set

**Returns:** `void`

### public float getImpulsex()

**Returns:** `float`

### public void setImpulsex(float impulsex)

**Parameters:**
- `float` `impulsex` — the impulsex to set

**Returns:** `void`

### public float getImpulsey()

**Returns:** `float`

### public void setImpulsey(float impulsey)

**Parameters:**
- `float` `impulsey` — the impulsey to set

**Returns:** `void`

### public float getLimpulsex()

**Returns:** `float`

### public void setLimpulsex(float limpulsex)

**Parameters:**
- `float` `limpulsex` — the limpulsex to set

**Returns:** `void`

### public float getLimpulsey()

**Returns:** `float`

### public void setLimpulsey(float limpulsey)

**Parameters:**
- `float` `limpulsey` — the limpulsey to set

**Returns:** `void`

### public float getHitForce()

**Returns:** `float`

### public void setHitForce(float hitForce)

**Parameters:**
- `float` `hitForce` — the hitForce to set

**Returns:** `void`

### public float getHitFromAngle()

**Returns:** `float`

### public void setHitFromAngle(float hitFromAngle)

**Parameters:**
- `float` `hitFromAngle` — the hitFromAngle to set

**Returns:** `void`

### public IsoGridSquare getLastSquare()

**Returns:** `IsoGridSquare`

### public void setLast(IsoGridSquare last)

**Parameters:**
- `IsoGridSquare` `last` — the last to set

**Returns:** `void`

### public boolean getNoDamage()

**Returns:** `boolean`

### public void setNoDamage(boolean dmg)

**Parameters:**
- `boolean` `dmg` — whether the object should take damage.

**Returns:** `void`

### public boolean isSolid()

**Returns:** `boolean`

### public void setSolid(boolean solid)

**Parameters:**
- `boolean` `solid` — the solid to set

**Returns:** `void`

### public float getStateEventDelayTimer()

**Returns:** `float`

### public void setStateEventDelayTimer(float stateEventDelayTimer)

**Parameters:**
- `float` `stateEventDelayTimer` — the StateEventDelayTimer to set

**Returns:** `void`

### public float getWidth()

**Returns:** `float`

### public void setWidth(float width)

**Parameters:**
- `float` `width` — the width to set

**Returns:** `void`

### public boolean isbAltCollide()

**Returns:** `boolean`

### public void setbAltCollide(boolean altCollide)

**Parameters:**
- `boolean` `altCollide` — the bAltCollide to set

**Returns:** `void`

### public boolean isShootable()

**Returns:** `boolean`

### public void setShootable(boolean shootable)

**Parameters:**
- `boolean` `shootable` — the shootable to set

**Returns:** `void`

### public IsoZombie getLastTargettedBy()

**Returns:** `IsoZombie`

### public void setLastTargettedBy(IsoZombie lastTargettedBy)

**Parameters:**
- `IsoZombie` `lastTargettedBy` — the lastTargettedBy to set

**Returns:** `void`

### public boolean isCollidable()

**Returns:** `boolean`

### public void setCollidable(boolean collidable)

**Parameters:**
- `boolean` `collidable` — the Collidable to set

**Returns:** `void`

### public Vector2 getMovementLastFrame()

**Returns:** `Vector2`

### public void setMovementLastFrame(Vector2 movementLastFrame)

**Parameters:**
- `Vector2` `movementLastFrame` — the movementLastFrame to set

**Returns:** `void`

### public float getFeelersize()

**Returns:** `float`

### public void setFeelersize(float feelersize)

**Parameters:**
- `float` `feelersize` — the feelersize to set

**Returns:** `void`

### public boolean isOnFloor()

**Returns:** `boolean`

### public void setOnFloor(boolean onFloor)

**Parameters:**
- `boolean` `onFloor`

**Returns:** `void`

### public final boolean isStanding()

**Returns:** `boolean`

### public boolean isProne()

**Returns:** `boolean`

### public boolean isGettingUp()

**Returns:** `boolean`

### public boolean isCrawling()

**Returns:** `boolean`

### public void Despawn()

**Returns:** `void`

### public boolean isCloseKilled()

**Returns:** `boolean`

### public void setCloseKilled(boolean closeKilled)

**Parameters:**
- `boolean` `closeKilled`

**Returns:** `void`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public boolean isCollided()

**Returns:** `boolean`

### public String getCollideType()

**Returns:** `String`

### public void setCollideType(String collideType)

**Parameters:**
- `String` `collideType`

**Returns:** `void`

### public float getLastCollideTime()

**Returns:** `float`

### public void setLastCollideTime(float lastCollideTime)

**Parameters:**
- `float` `lastCollideTime`

**Returns:** `void`

### public ArrayList<IsoZombie> getEatingZombies()

**Returns:** `ArrayList<IsoZombie>`

### public void setEatingZombies(ArrayList<IsoZombie> zeds)

**Parameters:**
- `ArrayList<IsoZombie>` `zeds`

**Returns:** `void`

### public boolean isEatingOther(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public float getDistanceSq(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `float`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

### public void setCurrentSimulationLevel(UpdateSchedulerSimulationLevel simulationLevel)

**Parameters:**
- `UpdateSchedulerSimulationLevel` `simulationLevel`

**Returns:** `void`

### public UpdateSchedulerSimulationLevel getCurrentSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

### public boolean isExistInTheWorld()

**Returns:** `boolean`

### public boolean shouldIgnoreCollisionWithSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public int getSurroundingThumpers()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoMovingObject.html`*
