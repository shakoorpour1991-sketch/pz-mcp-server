---
title: zombie.iso.IsoGridSquare
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoGridSquare

`public final class IsoGridSquare extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoGridSquare

## Fields

### public static final boolean USE_WALL_SHADER

### public static final boolean ADD_UNDERGROUND_BLOCKS

### public static final int WALL_TYPE_N

### public static final int WALL_TYPE_S

### public static final int WALL_TYPE_W

### public static final int WALL_TYPE_E

### public static final byte PCF_NONE

### public static final byte PCF_NORTH

### public static final byte PCF_WEST

### public final IsoGridSquare.ILighting[] lighting

### public static float rmod

### public static float gmod

### public static float bmod

### public static int idMax

### public static boolean useSlowCollision

### public BuildingDef associatedBuilding

### public int lightLevel

### public int collideMatrix

### public int pathMatrix

### public int visionMatrix

### public IsoRoom room

### public IsoGridSquare w

### public IsoGridSquare nw

### public IsoGridSquare sw

### public IsoGridSquare s

### public IsoGridSquare n

### public IsoGridSquare ne

### public IsoGridSquare se

### public IsoGridSquare e

### public IsoGridSquare u

### public IsoGridSquare d

### public boolean haveSheetRope

### public int objectsSyncCount

### public IsoBuilding roofHideBuilding

### public boolean flattenGrassEtc

### public static int gridSquareCacheEmptyTimer

### public static float recalcLightTime

### public boolean propertiesDirty

### public static boolean circleStencil

### public long hashCodeObjects

### public int FIRE_IMMUNE_THRESHOLD

### public static final String FLOORS_BURNT_SPRITE_PREFIX

### public static final IsoGridSquare.GetSquare cellGetSquare

### public int x

### public int y

### public int z

### public float cachedScreenX

### public float cachedScreenY

### public boolean solidFloorCached

### public boolean solidFloor

### public IsoChunk chunk

### public long roomId

### public Integer id

### public Zone zone

### public long hasTypes

### public boolean haveRoof

### public static final ConcurrentLinkedQueue<IsoGridSquare> isoGridSquareCache

### public static ArrayDeque<IsoGridSquare> loadGridSquareCache

### public static final ArrayList<String> ignoreBlockingSprites

### public static final ArrayList<IsoGridSquare> choices

### public boolean isSolidFloorCache

### public boolean isExteriorCache

### public boolean isVegitationCache

### public int hourLastSeen

### public static boolean isOnScreenLast

## Constructors

### public IsoGridSquare(IsoCell cell,
SliceY slice,
int x,
int y,
int z)

**Parameters:**
- `IsoCell` `cell`
- `SliceY` `slice`
- `int` `x`
- `int` `y`
- `int` `z`

## Methods

### public SquareCoord getCoords()

**Returns:** `SquareCoord`

### public static boolean getMatrixBit(int matrix,
int x,
int y,
int z)

**Parameters:**
- `int` `matrix`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public static boolean getMatrixBit(int matrix,
byte x,
byte y,
byte z)

**Parameters:**
- `int` `matrix`
- `byte` `x`
- `byte` `y`
- `byte` `z`

**Returns:** `boolean`

### public static int setMatrixBit(int matrix,
int x,
int y,
int z,
boolean val)

**Parameters:**
- `int` `matrix`
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `val`

**Returns:** `int`

### public static int setMatrixBit(int matrix,
byte x,
byte y,
byte z,
boolean val)

**Parameters:**
- `int` `matrix`
- `byte` `x`
- `byte` `y`
- `byte` `z`
- `boolean` `val`

**Returns:** `int`

### public int GetRLightLevel()

**Returns:** `int`

### public int GetGLightLevel()

**Returns:** `int`

### public int GetBLightLevel()

**Returns:** `int`

### public void SetRLightLevel(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public void SetGLightLevel(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public void SetBLightLevel(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public void setPlayerCutawayFlag(int playerIndex,
int flags,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `int` `flags`
- `long` `currentTimeMillis`

**Returns:** `void`

### public void addPlayerCutawayFlag(int playerIndex,
int flag,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `int` `flag`
- `long` `currentTimeMillis`

**Returns:** `void`

### public void clearPlayerCutawayFlag(int playerIndex,
int flag,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `int` `flag`
- `long` `currentTimeMillis`

**Returns:** `void`

### public int getPlayerCutawayFlag(int playerIndex,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `long` `currentTimeMillis`

**Returns:** `int`

### public void setIsDissolved(int playerIndex,
boolean bDissolved,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `boolean` `bDissolved`
- `long` `currentTimeMillis`

**Returns:** `void`

### public boolean getIsDissolved(int playerIndex,
long currentTimeMillis)

**Parameters:**
- `int` `playerIndex`
- `long` `currentTimeMillis`

**Returns:** `boolean`

### public boolean hasWater()

**Returns:** `boolean`

### public IsoWaterGeometry getWater()

**Returns:** `IsoWaterGeometry`

### public void clearWater()

**Returns:** `void`

### public IsoPuddlesGeometry getPuddles()

**Returns:** `IsoPuddlesGeometry`

### public void clearPuddles()

**Returns:** `void`

### public float getPuddlesInGround()

**Returns:** `float`

### public void removeUnderground()

**Returns:** `void`

### public boolean isInsideRectangle(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `boolean`

### public IsoGridSquare doGridNav(IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `IsoGridSquare`

### public IsoGridOcclusionData getOcclusionData()

**Returns:** `IsoGridOcclusionData`

### public IsoGridOcclusionData getOrCreateOcclusionData()

**Returns:** `IsoGridOcclusionData`

### public void softClear()

**Returns:** `void`

### public float getGridSneakModifier(boolean onlySolidTrans)

Check if there's any object on this grid that has a sneak modifier, we use this to check if we reduce the chance of being spotted while crouching

**Parameters:**
- `boolean` `onlySolidTrans`

**Returns:** `float`

### public boolean isSomethingTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public IsoObject getTransparentWallTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `IsoObject`

### public boolean isWallTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean isWallTo(IsoGridSquare other,
int depth)

**Parameters:**
- `IsoGridSquare` `other`
- `int` `depth`

**Returns:** `boolean`

### public boolean isWindowTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean haveDoor()

**Returns:** `boolean`

### public boolean hasDoorOnEdge(IsoDirections edge,
boolean ignoreOpen)

**Parameters:**
- `IsoDirections` `edge`
- `boolean` `ignoreOpen`

**Returns:** `boolean`

### public boolean hasClosedDoorOnEdge(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `boolean`

### public boolean hasOpenDoorOnEdge(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `boolean`

### public boolean isDoorTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean isBlockedTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean canReachTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean isWindowBlockedTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean hasBlockedWindow(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `boolean`

### public boolean isDoorBlockedTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean hasBlockedDoor(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `boolean`

### public IsoCurtain getCurtain(IsoObjectType curtainType)

**Parameters:**
- `IsoObjectType` `curtainType`

**Returns:** `IsoCurtain`

### public IsoObject getHoppable(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoObject`

### public IsoObject getHoppableTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public boolean isHoppableTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public IsoObject getBendable(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoObject`

### public IsoObject getBendableTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public void discard()

**Returns:** `void`

### public float DistTo(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `float`

### public float DistTo(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `float`

### public float DistToProper(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `float`

### public float DistToProper(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `float`

### public float DistTo(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `float`

### public float DistToProper(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `float`

### public boolean isSafeToSpawn()

**Returns:** `boolean`

### public void isSafeToSpawn(IsoGridSquare sq,
int depth)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `depth`

**Returns:** `void`

### public void DoCutawayShader(IsoObject obj,
IsoDirections dir,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE,
boolean bHasDoorN,
boolean bHasDoorW,
boolean bHasWindowN,
boolean bHasWindowW,
WallShaper texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`
- `boolean` `bHasDoorN`
- `boolean` `bHasDoorW`
- `boolean` `bHasWindowN`
- `boolean` `bHasWindowW`
- `WallShaper` `texdModifier`

**Returns:** `void`

### public void DoCutawayShaderSprite(IsoSprite sprite,
IsoDirections dir,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE)

**Parameters:**
- `IsoSprite` `sprite`
- `IsoDirections` `dir`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`

**Returns:** `void`

### public int DoWallLightingNW(IsoObject obj,
int stenciled,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE,
boolean bHasDoorN,
boolean bHasDoorW,
boolean bHasWindowN,
boolean bHasWindowW,
Shader wallRenderShader)

**Parameters:**
- `IsoObject` `obj`
- `int` `stenciled`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`
- `boolean` `bHasDoorN`
- `boolean` `bHasDoorW`
- `boolean` `bHasWindowN`
- `boolean` `bHasWindowW`
- `Shader` `wallRenderShader`

**Returns:** `int`

### public int DoWallLightingN(IsoObject obj,
int stenciled,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE,
boolean bHasDoorN,
boolean bHasWindowN,
Shader wallRenderShader)

**Parameters:**
- `IsoObject` `obj`
- `int` `stenciled`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`
- `boolean` `bHasDoorN`
- `boolean` `bHasWindowN`
- `Shader` `wallRenderShader`

**Returns:** `int`

### public int DoWallLightingW(IsoObject obj,
int stenciled,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE,
boolean bHasDoorW,
boolean bHasWindowW,
Shader wallRenderShader)

**Parameters:**
- `IsoObject` `obj`
- `int` `stenciled`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`
- `boolean` `bHasDoorW`
- `boolean` `bHasWindowW`
- `Shader` `wallRenderShader`

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTable getLuaMovingObjectList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean has(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public boolean has(IsoPropertyType flag)

**Parameters:**
- `IsoPropertyType` `flag`

**Returns:** `boolean`

### public boolean has(IsoPropertyType... flag)

**Parameters:**
- `IsoPropertyType...` `flag`

**Returns:** `boolean`

### public boolean has(String flag)

**Parameters:**
- `String` `flag`

**Returns:** `boolean`

### public boolean has(IsoObjectType type)

**Parameters:**
- `IsoObjectType` `type`

**Returns:** `boolean`

### public boolean has(int type)

**Parameters:**
- `int` `type`

**Returns:** `boolean`

### public void set(String tilePropertyKey)

**Parameters:**
- `String` `tilePropertyKey`

**Returns:** `void`

### public void unset(String tilePropertyKey)

**Parameters:**
- `String` `tilePropertyKey`

**Returns:** `void`

### public void DeleteTileObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getLuaTileObjectList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean HasStairs()

**Returns:** `boolean`

### public boolean HasStairsNorth()

**Returns:** `boolean`

### public boolean HasStairsWest()

**Returns:** `boolean`

### public boolean isStairBlockedTo(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public boolean HasStairTop()

**Returns:** `boolean`

### public boolean HasStairTopNorth()

**Returns:** `boolean`

### public boolean HasStairTopWest()

**Returns:** `boolean`

### public boolean HasStairsBelow()

**Returns:** `boolean`

### public IsoObject getStairPillar()

**Returns:** `IsoObject`

### public IsoGridSquare getFloorSquareBelow()

**Returns:** `IsoGridSquare`

### public boolean hasFloorBelow()

**Returns:** `boolean`

### public IsoObject getObjectWithSprite(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `IsoObject`

### public boolean hasFloorAtTopOfStairs()

**Returns:** `boolean`

### public IsoObjectType getStairs()

**Returns:** `IsoObjectType`

### public boolean HasElevatedFloor()

**Returns:** `boolean`

### public boolean isSameStaircase(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean hasRainBlockingTile()

**Returns:** `boolean`

### public boolean haveRoofFull()

**Returns:** `boolean`

### public boolean HasSlopedRoof()

**Returns:** `boolean`

### public boolean HasSlopedRoofWest()

**Returns:** `boolean`

### public boolean HasSlopedRoofNorth()

**Returns:** `boolean`

### public boolean HasEave()

**Returns:** `boolean`

### public boolean HasTree()

**Returns:** `boolean`

### public IsoTree getTree()

**Returns:** `IsoTree`

### public IsoObject getStump()

**Returns:** `IsoObject`

### public IsoObject getOre()

**Returns:** `IsoObject`

### public boolean hasBush()

**Returns:** `boolean`

### public IsoObject getBush()

**Returns:** `IsoObject`

### public List<IsoObject> getBushes()

**Returns:** `List<IsoObject>`

### public IsoObject getGrass()

**Returns:** `IsoObject`

### public boolean hasGrassLike()

**Returns:** `boolean`

### public List<IsoObject> getGrassLike()

**Returns:** `List<IsoObject>`

### public List<IsoObject> getOres()

**Returns:** `List<IsoObject>`

### public IsoObject getCountertopObject()

**Returns:** `IsoObject`

### public IsoObject getCountertopAttachObject()

**Returns:** `IsoObject`

### public boolean shouldSave()

**Returns:** `boolean`

### public void save(ByteBuffer output,
ObjectOutputStream outputObj)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `ObjectOutputStream` `outputObj`

**Returns:** `void`

### public void save(ByteBuffer output,
ObjectOutputStream outputObj,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `ObjectOutputStream` `outputObj`
- `boolean` `isDebugSave`

**Returns:** `void`

### public boolean isCommonGrass()

**Returns:** `boolean`

### public static boolean toBoolean(byte[] data)

**Parameters:**
- `byte[]` `data`

**Returns:** `boolean`

### public void removeCorpse(IsoDeadBody body,
boolean bRemote)

**Parameters:**
- `IsoDeadBody` `body`
- `boolean` `bRemote`

**Returns:** `void`

### public IsoDeadBody getDeadBody()

**Returns:** `IsoDeadBody`

### public List<IsoDeadBody> getDeadBodys()

**Returns:** `List<IsoDeadBody>`

### public void addCorpse(IsoDeadBody body,
boolean bRemote)

**Parameters:**
- `IsoDeadBody` `body`
- `boolean` `bRemote`

**Returns:** `void`

### public IsoBrokenGlass getBrokenGlass()

**Returns:** `IsoBrokenGlass`

### public IsoBrokenGlass addBrokenGlass()

**Returns:** `IsoBrokenGlass`

### public IsoFire getFire()

**Returns:** `IsoFire`

### public IsoObject getHiddenStash()

**Returns:** `IsoObject`

### public void load(ByteBuffer b,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `b`
- `int` `worldVersion`

**Returns:** `void`

### public void load(ByteBuffer b,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `b`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public float scoreAsWaypoint(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `float`

### public void InvalidateSpecialObjectPaths()

**Returns:** `void`

### public boolean isSolid()

**Returns:** `boolean`

### public boolean isSolidTrans()

**Returns:** `boolean`

### public boolean isFree(boolean bCountOtherCharacters)

**Parameters:**
- `boolean` `bCountOtherCharacters`

**Returns:** `boolean`

### public boolean isFreeOrMidair(boolean bCountOtherCharacters)

**Parameters:**
- `boolean` `bCountOtherCharacters`

**Returns:** `boolean`

### public boolean isFreeOrMidair(boolean bCountOtherCharacters,
boolean bDoZombie)

**Parameters:**
- `boolean` `bCountOtherCharacters`
- `boolean` `bDoZombie`

**Returns:** `boolean`

### public boolean connectedWithFloor()

Check if there's at least one solid floor around this tile, used to build wooden floor

**Returns:** `boolean`

### public boolean hasFloor(boolean north)

Check if a tile has a solid floor, used to build stuff at z level > 0
Also gonna check the tile "behind" the one winvalid input: '<'e're trying to build something has a floor (only one is required)

**Parameters:**
- `boolean` `north` — is the item we're trying to place facing north or not

**Returns:** `boolean`

### public boolean hasFloor()

**Returns:** `boolean`

### public boolean isNotBlocked(boolean bCountOtherCharacters)

**Parameters:**
- `boolean` `bCountOtherCharacters`

**Returns:** `boolean`

### public IsoObject getDoor(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoObject`

### public IsoDoor getIsoDoor()

**Returns:** `IsoDoor`

### public IsoObject getDoorTo(IsoGridSquare next)

Get the door between this grid and the next in parameter

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public IsoWindow getWindow(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoWindow`

### public IsoWindow getWindow()

**Returns:** `IsoWindow`

### public IsoWindow getWindowTo(IsoGridSquare next)

Get the IsoWindow window between this grid and the next in parameter

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoWindow`

### public boolean isAdjacentToWindow()

**Returns:** `boolean`

### public boolean isAdjacentToHoppable()

**Returns:** `boolean`

### public IsoThumpable getThumpableWindow(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoThumpable`

### public IsoThumpable getWindowThumpableTo(IsoGridSquare next)

Get the IsoThumpable window between this grid and the next in parameter

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoThumpable`

### public IsoThumpable getThumpable(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoThumpable`

### public IsoThumpable getHoppableThumpable(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoThumpable`

### public IsoThumpable getHoppableThumpableTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoThumpable`

### public IsoObject getWallHoppable(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoObject`

### public IsoObject getWallHoppableTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public IsoObject getBedTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public IsoWindowFrame getWindowFrame(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoWindowFrame`

### public IsoWindowFrame getWindowFrameTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoWindowFrame`

### public boolean hasWindowFrame()

**Returns:** `boolean`

### public boolean hasWindowOrWindowFrame()

**Returns:** `boolean`

### public IsoObject getSheetRope()

**Returns:** `IsoObject`

### public boolean damageSpriteSheetRopeFromBottom(IsoPlayer player,
boolean north)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `north`

**Returns:** `boolean`

### public boolean removeSheetRopeFromBottom(IsoPlayer player,
boolean north)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `north`

**Returns:** `boolean`

### public IsoObject testCollideSpecialObjects(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public IsoObject getDoorFrameTo(IsoGridSquare next)

**Parameters:**
- `IsoGridSquare` `next`

**Returns:** `IsoObject`

### public static void getSquaresForThread(ArrayDeque<IsoGridSquare> isoGridSquareCacheDest,
int count)

**Parameters:**
- `ArrayDeque<IsoGridSquare>` `isoGridSquareCacheDest`
- `int` `count`

**Returns:** `void`

### public static IsoGridSquare getNew(IsoCell cell,
SliceY slice,
int x,
int y,
int z)

**Parameters:**
- `IsoCell` `cell`
- `SliceY` `slice`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### public static IsoGridSquare getNew(ArrayDeque<IsoGridSquare> isoGridSquareCache,
IsoCell cell,
SliceY slice,
int x,
int y,
int z)

**Parameters:**
- `ArrayDeque<IsoGridSquare>` `isoGridSquareCache`
- `IsoCell` `cell`
- `SliceY` `slice`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### @Deprecated
public long getHashCodeObjects()

> ⚠️ **Deprecated**

**Returns:** `long`

### @Deprecated
public int getHashCodeObjectsInt()

> ⚠️ **Deprecated**

**Returns:** `int`

### @Deprecated
public void recalcHashCodeObjects()

> ⚠️ **Deprecated**

**Returns:** `void`

### @Deprecated
public int hashCodeNoOverride()

> ⚠️ **Deprecated**

**Returns:** `int`

### public IsoGridSquare getTileInDirection(IsoDirections directions)

**Parameters:**
- `IsoDirections` `directions`

**Returns:** `IsoGridSquare`

### public IsoObject getWall()

**Returns:** `IsoObject`

### public IsoObject getThumpableWall(boolean bNorth)

**Parameters:**
- `boolean` `bNorth`

**Returns:** `IsoObject`

### public IsoObject getHoppableWall(boolean bNorth)

**Parameters:**
- `boolean` `bNorth`

**Returns:** `IsoObject`

### public IsoObject getThumpableWallOrHoppable(boolean bNorth)

**Parameters:**
- `boolean` `bNorth`

**Returns:** `IsoObject`

### public Boolean getWallFull()

**Returns:** `Boolean`

### public boolean hasNonHoppableWall(boolean isNorth)

**Parameters:**
- `boolean` `isNorth`

**Returns:** `boolean`

### public boolean isPlayerAbleToHopWallTo(IsoDirections dir,
IsoGridSquare oppositeSq)

**Parameters:**
- `IsoDirections` `dir`
- `IsoGridSquare` `oppositeSq`

**Returns:** `boolean`

### public IsoObject getWallExcludingObject(boolean bNorth,
IsoObject exclude)

**Parameters:**
- `boolean` `bNorth`
- `IsoObject` `exclude`

**Returns:** `IsoObject`

### public IsoObject getWall(boolean bNorth)

**Parameters:**
- `boolean` `bNorth`

**Returns:** `IsoObject`

### public IsoObject getWallSE()

**Returns:** `IsoObject`

### public IsoObject getWallNW()

**Returns:** `IsoObject`

### public IsoObject getGarageDoor(boolean bNorth)

**Parameters:**
- `boolean` `bNorth`

**Returns:** `IsoObject`

### public IsoObject getFloor()

**Returns:** `IsoObject`

### public IsoObject getPlayerBuiltFloor()

**Returns:** `IsoObject`

### public IsoObject getWaterObject()

**Returns:** `IsoObject`

### public void interpolateLight(ColorInfo inf,
float x,
float y)

**Parameters:**
- `ColorInfo` `inf`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void EnsureSurroundNotNull()

**Returns:** `void`

### public void setSquareChanged()

**Returns:** `void`

### public IsoObject addFloor(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `IsoObject`

### public IsoObject addUndergroundBlock(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `IsoObject`

### public boolean isUndergroundBlock()

**Returns:** `boolean`

### public IsoThumpable AddStairs(boolean north,
int level,
String sprite,
String pillarSprite,
se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `boolean` `north`
- `int` `level`
- `String` `sprite`
- `String` `pillarSprite`
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `IsoThumpable`

### public boolean getOpenAir()

**Returns:** `boolean`

### public void RecalcAllWithNeighbours(boolean bDoReverse)

**Parameters:**
- `boolean` `bDoReverse`

**Returns:** `void`

### public void RecalcAllWithNeighbours(boolean bDoReverse,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `boolean` `bDoReverse`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `void`

### public void RecalcAllWithNeighboursMineOnly()

**Returns:** `void`

### public boolean hasSupport()

**Returns:** `boolean`

### public Integer getID()

**Returns:** `Integer`

### public void setID(int id)

**Parameters:**
- `int` `id` — the ID to set

**Returns:** `void`

### public void DirtySlice()

**Returns:** `void`

### public void setHourSeenToCurrent()

**Returns:** `void`

### public void splatBlood(int dist,
float alpha)

**Parameters:**
- `int` `dist`
- `float` `alpha`

**Returns:** `void`

### public boolean haveBlood()

**Returns:** `boolean`

### public boolean haveBloodWall()

**Returns:** `boolean`

### public boolean haveBloodFloor()

**Returns:** `boolean`

### public boolean haveGrime()

**Returns:** `boolean`

### public boolean haveGrimeWall()

**Returns:** `boolean`

### public boolean haveGrimeFloor()

**Returns:** `boolean`

### public boolean haveGraffiti()

**Returns:** `boolean`

### public IsoObject getGraffitiObject()

**Returns:** `IsoObject`

### public boolean haveStains()

**Returns:** `boolean`

### public void removeGrime()

**Returns:** `void`

### public void removeGraffiti()

**Returns:** `void`

### public void removeBlood(boolean remote,
boolean onlyWall)

**Parameters:**
- `boolean` `remote`
- `boolean` `onlyWall`

**Returns:** `void`

### public void DoSplat(String id,
boolean bFlip,
IsoFlagType prop,
float offX,
float offZ,
float alpha)

**Parameters:**
- `String` `id`
- `boolean` `bFlip`
- `IsoFlagType` `prop`
- `float` `offX`
- `float` `offZ`
- `float` `alpha`

**Returns:** `void`

### public void ClearTileObjects()

**Returns:** `void`

### public void ClearTileObjectsExceptFloor()

**Returns:** `void`

### public int RemoveTileObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `int`

### public int RemoveTileObject(IsoObject obj,
boolean safelyRemove)

**Parameters:**
- `IsoObject` `obj`
- `boolean` `safelyRemove`

**Returns:** `int`

### public int RemoveTileObjectErosionNoRecalc(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `int`

### public void AddSpecialObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void AddSpecialObject(IsoObject obj,
int index)

**Parameters:**
- `IsoObject` `obj`
- `int` `index`

**Returns:** `void`

### public void AddTileObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void AddTileObject(IsoObject obj,
int index)

**Parameters:**
- `IsoObject` `obj`
- `int` `index`

**Returns:** `void`

### public int placeWallAndDoorCheck(IsoObject obj,
int index)

**Parameters:**
- `IsoObject` `obj`
- `int` `index`

**Returns:** `int`

### public void transmitAddObjectToSquare(IsoObject obj,
int index)

**Parameters:**
- `IsoObject` `obj`
- `int` `index`

**Returns:** `void`

### public int transmitRemoveItemFromSquare(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `int`

### public int transmitRemoveItemFromSquare(IsoObject obj,
boolean safelyRemove)

**Parameters:**
- `IsoObject` `obj`
- `boolean` `safelyRemove`

**Returns:** `int`

### public void transmitRemoveItemFromSquareOnClients(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void transmitModdata()

**Returns:** `void`

### public void SpawnWorldInventoryItem(String itemType,
float x,
float y,
float height,
int nbr)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`
- `int` `nbr`

**Returns:** `void`

### public InventoryItem SpawnWorldInventoryItem(String itemType,
float x,
float y,
float height)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`

**Returns:** `InventoryItem`

### public InventoryItem SpawnWorldInventoryItem(String itemType,
float x,
float y,
float height,
boolean autoAge)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `autoAge`

**Returns:** `InventoryItem`

### public void AddWorldInventoryItem(String itemType,
float x,
float y,
float height,
int nbr)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`
- `int` `nbr`

**Returns:** `void`

### public InventoryItem AddWorldInventoryItem(ItemKey itemKey,
float x,
float y,
float height)

**Parameters:**
- `ItemKey` `itemKey`
- `float` `x`
- `float` `y`
- `float` `height`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(String itemType,
float x,
float y,
float height)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(ItemKey itemKey,
float x,
float y,
float height,
boolean autoAge)

**Parameters:**
- `ItemKey` `itemKey`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `autoAge`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(String itemType,
float x,
float y,
float height,
boolean autoAge)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `autoAge`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(String itemType,
float x,
float y,
float height,
boolean autoAge,
boolean synchSpawn)

**Parameters:**
- `String` `itemType`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `autoAge`
- `boolean` `synchSpawn`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(InventoryItem item,
float x,
float y,
float height)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`
- `float` `height`

**Returns:** `InventoryItem`

### public IsoDeadBody createAnimalCorpseFromItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `IsoDeadBody`

### public InventoryItem SpawnWorldInventoryItem(InventoryItem item,
float x,
float y,
float height,
boolean transmit)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `transmit`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(InventoryItem item,
float x,
float y,
float height,
boolean transmit)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `transmit`

**Returns:** `InventoryItem`

### public InventoryItem AddWorldInventoryItem(InventoryItem item,
float x,
float y,
float height,
boolean transmit,
boolean synchSpawn)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`
- `float` `height`
- `boolean` `transmit`
- `boolean` `synchSpawn`

**Returns:** `InventoryItem`

### public IsoDeadBody tryAddCorpseToWorld(InventoryItem item,
float x,
float y)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`

**Returns:** `IsoDeadBody`

### public @Nullable IsoDeadBody tryAddCorpseToWorld(InventoryItem item,
float x,
float y,
boolean isVisible)

**Parameters:**
- `InventoryItem` `item`
- `float` `x`
- `float` `y`
- `boolean` `isVisible`

**Returns:** `@Nullable IsoDeadBody`

### public void restackSheetRope()

**Returns:** `void`

### public void Burn()

**Returns:** `void`

### public void Burn(boolean explode)

**Parameters:**
- `boolean` `explode`

**Returns:** `void`

### public void BurnWalls(boolean explode,
boolean recursive)

**Parameters:**
- `boolean` `explode`
- `boolean` `recursive`

**Returns:** `void`

### public void BurnWallsTCOnly()

**Returns:** `void`

### public void BurnTick()

**Returns:** `void`

### public boolean CalculateCollide(IsoGridSquare gridSquare,
boolean bVision,
boolean bPathfind,
boolean bIgnoreSolidTrans)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `bVision`
- `boolean` `bPathfind`
- `boolean` `bIgnoreSolidTrans`

**Returns:** `boolean`

### public boolean CalculateCollide(IsoGridSquare gridSquare,
boolean bVision,
boolean bPathfind,
boolean bIgnoreSolidTrans,
boolean bIgnoreSolid)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `bVision`
- `boolean` `bPathfind`
- `boolean` `bIgnoreSolidTrans`
- `boolean` `bIgnoreSolid`

**Returns:** `boolean`

### public boolean CalculateCollide(IsoGridSquare gridSquare,
boolean bVision,
boolean bPathfind,
boolean bIgnoreSolidTrans,
boolean bIgnoreSolid,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `bVision`
- `boolean` `bPathfind`
- `boolean` `bIgnoreSolidTrans`
- `boolean` `bIgnoreSolid`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `boolean`

### public boolean CalculateVisionBlocked(IsoGridSquare gridSquare)

**Parameters:**
- `IsoGridSquare` `gridSquare`

**Returns:** `boolean`

### public boolean CalculateVisionBlocked(IsoGridSquare gridSquare,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `boolean`

### public IsoGameCharacter FindFriend(IsoGameCharacter g,
int range,
Stack<IsoGameCharacter> enemyList)

**Parameters:**
- `IsoGameCharacter` `g`
- `int` `range`
- `Stack<IsoGameCharacter>` `enemyList`

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter FindEnemy(IsoGameCharacter g,
int range,
ArrayList<IsoMovingObject> enemyList,
IsoGameCharacter rangeTest,
int testRangeMax)

**Parameters:**
- `IsoGameCharacter` `g`
- `int` `range`
- `ArrayList<IsoMovingObject>` `enemyList`
- `IsoGameCharacter` `rangeTest`
- `int` `testRangeMax`

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter FindEnemy(IsoGameCharacter g,
int range,
ArrayList<IsoMovingObject> enemyList)

**Parameters:**
- `IsoGameCharacter` `g`
- `int` `range`
- `ArrayList<IsoMovingObject>` `enemyList`

**Returns:** `IsoGameCharacter`

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public int getZ()

**Returns:** `int`

### public float getCenterX()

**Returns:** `float`

### public float getCenterY()

**Returns:** `float`

### public void RecalcProperties()

**Returns:** `void`

### public void RecalcPropertiesIfNeeded()

**Returns:** `void`

### public void ReCalculateCollide(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void ReCalculateCollide(IsoGridSquare square,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `void`

### public void ReCalculatePathFind(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void ReCalculatePathFind(IsoGridSquare square,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `void`

### public void ReCalculateVisionBlocked(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void ReCalculateVisionBlocked(IsoGridSquare square,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `void`

### public boolean testCollideAdjacent(IsoMovingObject collideObject,
int x,
int y,
int z)

**Parameters:**
- `IsoMovingObject` `collideObject`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean testCollideAdjacentAdvanced(int x,
int y,
int z,
boolean ignoreDoors)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `ignoreDoors`

**Returns:** `boolean`

### public static void setCollisionMode()

**Returns:** `void`

### public boolean testPathFindAdjacent(IsoMovingObject mover,
int x,
int y,
int z)

**Parameters:**
- `IsoMovingObject` `mover`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean testPathFindAdjacent(IsoMovingObject mover,
int x,
int y,
int z,
IsoGridSquare.GetSquare getter)

**Parameters:**
- `IsoMovingObject` `mover`
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoGridSquare.GetSquare` `getter`

**Returns:** `boolean`

### public LosUtil.TestResults testVisionAdjacent(int x,
int y,
int z,
boolean specialDiag,
boolean bIgnoreDoors)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `specialDiag`
- `boolean` `bIgnoreDoors`

**Returns:** `LosUtil.TestResults`

### public boolean TreatAsSolidFloor()

**Returns:** `boolean`

### public void AddSpecialTileObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public void renderCharacters(int maxZ,
boolean deadRender,
boolean doBlendFunc)

**Parameters:**
- `int` `maxZ`
- `boolean` `deadRender`
- `boolean` `doBlendFunc`

**Returns:** `void`

### public void renderDeferredCharacters(int maxZ)

**Parameters:**
- `int` `maxZ`

**Returns:** `void`

### public void switchLight(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public void removeGlassAttachments(IsoWindow window)

**Parameters:**
- `IsoWindow` `window`

**Returns:** `void`

### public boolean IsOnScreen()

**Returns:** `boolean`

### public boolean IsOnScreen(boolean halfTileBorder)

**Parameters:**
- `boolean` `halfTileBorder`

**Returns:** `boolean`

### public void startWaterSplash(boolean isBigSplash,
float dx,
float dy)

**Parameters:**
- `boolean` `isBigSplash`
- `float` `dx`
- `float` `dy`

**Returns:** `void`

### public void startWaterSplash(boolean isBigSplash)

**Parameters:**
- `boolean` `isBigSplash`

**Returns:** `void`

### public boolean shouldRenderFishSplash(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public ColorInfo getLightInfo(int playerNumber)

**Parameters:**
- `int` `playerNumber`

**Returns:** `ColorInfo`

### public void cacheLightInfo()

**Returns:** `void`

### public void setLightInfoServerGUIOnly(ColorInfo c)

**Parameters:**
- `ColorInfo` `c`

**Returns:** `void`

### public int renderFloor(Shader floorShader)

**Parameters:**
- `Shader` `floorShader`

**Returns:** `int`

### public void renderRainSplash(int playerIndex,
ColorInfo lightInfo)

**Parameters:**
- `int` `playerIndex`
- `ColorInfo` `lightInfo`

**Returns:** `void`

### public void renderRainSplash(int playerIndex,
ColorInfo lightInfo,
float splashFrame,
boolean bRandomXY)

**Parameters:**
- `int` `playerIndex`
- `ColorInfo` `lightInfo`
- `float` `splashFrame`
- `boolean` `bRandomXY`

**Returns:** `void`

### public void renderFishSplash(int playerIndex,
ColorInfo lightInfo)

**Parameters:**
- `int` `playerIndex`
- `ColorInfo` `lightInfo`

**Returns:** `void`

### public boolean isSpriteOnSouthOrEastWall(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public void RenderOpenDoorOnly()

**Returns:** `void`

### public boolean RenderMinusFloorFxMask(int maxZ,
boolean doSE,
boolean vegitationRender)

**Parameters:**
- `int` `maxZ`
- `boolean` `doSE`
- `boolean` `vegitationRender`

**Returns:** `boolean`

### public boolean isWindowOrWindowFrame(IsoObject obj,
boolean north)

**Parameters:**
- `IsoObject` `obj`
- `boolean` `north`

**Returns:** `boolean`

### public boolean renderMinusFloor(int maxZ,
boolean doSE,
boolean vegitationRender,
int cutawaySelf,
int cutawayN,
int cutawayS,
int cutawayW,
int cutawayE,
Shader wallRenderShader)

**Parameters:**
- `int` `maxZ`
- `boolean` `doSE`
- `boolean` `vegitationRender`
- `int` `cutawaySelf`
- `int` `cutawayN`
- `int` `cutawayS`
- `int` `cutawayW`
- `int` `cutawayE`
- `Shader` `wallRenderShader`

**Returns:** `boolean`

### public IsoObject getContainerItem(String type)

**Parameters:**
- `String` `type`

**Returns:** `IsoObject`

### @Deprecated
public void StartFire()

> ⚠️ **Deprecated**

**Returns:** `void`

### public int getHourLastSeen()

**Returns:** `int`

### public float getHoursSinceLastSeen()

**Returns:** `float`

### public void CalcVisibility(int playerIndex,
IsoGameCharacter isoGameCharacter,
VisibilityData visibilityData)

**Parameters:**
- `int` `playerIndex`
- `IsoGameCharacter` `isoGameCharacter`
- `VisibilityData` `visibilityData`

**Returns:** `void`

### public IsoZombie getZombie()

**Returns:** `IsoZombie`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public static float getDarkStep()

**Returns:** `float`

### public static void setDarkStep(float aDarkStep)

**Parameters:**
- `float` `aDarkStep` — the darkStep to set

**Returns:** `void`

### public static float getRecalcLightTime()

**Returns:** `float`

### public static void setRecalcLightTime(float aRecalcLightTime)

**Parameters:**
- `float` `aRecalcLightTime`

**Returns:** `void`

### public static int getLightcache()

**Returns:** `int`

### public static void setLightcache(int aLightcache)

**Parameters:**
- `int` `aLightcache` — the lightcache to set

**Returns:** `void`

### public boolean isCouldSee(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setCouldSee(int playerIndex,
boolean bCouldSee)

**Parameters:**
- `int` `playerIndex`
- `boolean` `bCouldSee` — the bCouldSee to set

**Returns:** `void`

### public boolean isCanSee(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setCanSee(int playerIndex,
boolean canSee)

**Parameters:**
- `int` `playerIndex`
- `boolean` `canSee` — the canSee to set

**Returns:** `void`

### public IsoCell getCell()

**Returns:** `IsoCell`

### public IsoGridSquare getE()

**Returns:** `IsoGridSquare`

### public void setE(IsoGridSquare e)

**Parameters:**
- `IsoGridSquare` `e` — the e to set

**Returns:** `void`

### public ArrayList<Float> getLightInfluenceB()

**Returns:** `ArrayList<Float>`

### public void setLightInfluenceB(ArrayList<Float> lightInfluenceB)

**Parameters:**
- `ArrayList<Float>` `lightInfluenceB` — the LightInfluenceB to set

**Returns:** `void`

### public ArrayList<Float> getLightInfluenceG()

**Returns:** `ArrayList<Float>`

### public void setLightInfluenceG(ArrayList<Float> lightInfluenceG)

**Parameters:**
- `ArrayList<Float>` `lightInfluenceG` — the LightInfluenceG to set

**Returns:** `void`

### public ArrayList<Float> getLightInfluenceR()

**Returns:** `ArrayList<Float>`

### public void setLightInfluenceR(ArrayList<Float> lightInfluenceR)

**Parameters:**
- `ArrayList<Float>` `lightInfluenceR` — the LightInfluenceR to set

**Returns:** `void`

### public ArrayList<IsoMovingObject> getStaticMovingObjects()

**Returns:** `ArrayList<IsoMovingObject>`

### public <ObjectType extends IsoMovingObject>
List<ObjectType> getStaticMovingObjects(Class<? extends ObjectType> objectType,
Predicate<ObjectType> objectFilter)

**Returns:** `List<ObjectType>`

### public <ObjectType extends IsoMovingObject>
List<ObjectType> getStaticMovingObjectsInNearbySquares(Class<? extends ObjectType> objectType,
BiPredicate<IsoGridSquare, IsoGridSquare> squareFilter,
Predicate<ObjectType> objectFilter)

**Returns:** `List<ObjectType>`

### public <Param, ObjectType extends IsoMovingObject>
Param visitStaticMovingObjects(Class<? extends ObjectType> objectType,
Param param,
Predicate<ObjectType> objectFilter,
BiConsumer<Param, ObjectType> objectVisitor)

**Returns:** `Param`

### public <Param, ObjectType extends IsoMovingObject>
Param visitStaticMovingObjectsInNearbySquares(Class<? extends ObjectType> objectType,
Param param,
BiPredicate<IsoGridSquare, IsoGridSquare> squareFilter,
Predicate<ObjectType> objectFilter,
BiConsumer<Param, ObjectType> objectVisitor)

**Returns:** `Param`

### public ArrayList<IsoMovingObject> getMovingObjects()

**Returns:** `ArrayList<IsoMovingObject>`

### public <Param> Param visitNearbySquares(Param param,
BiPredicate<IsoGridSquare, IsoGridSquare> squareFilter,
BiConsumer<Param, IsoGridSquare> squareVisitor)

**Returns:** `Param`

### public IsoGridSquare getN()

**Returns:** `IsoGridSquare`

### public void setN(IsoGridSquare n)

**Parameters:**
- `IsoGridSquare` `n` — the n to set

**Returns:** `void`

### public PZArrayList<IsoObject> getObjects()

**Returns:** `PZArrayList<IsoObject>`

### public PropertyContainer getProperties()

**Returns:** `PropertyContainer`

### public IsoRoom getRoom()

**Returns:** `IsoRoom`

### public void setRoom(IsoRoom room)

**Parameters:**
- `IsoRoom` `room` — the room to set

**Returns:** `void`

### public RoomDef getRoomDef()

**Returns:** `RoomDef`

### public IsoBuilding getBuilding()

**Returns:** `IsoBuilding`

### public BuildingDef getBuildingDef()

**Returns:** `BuildingDef`

### public IsoGridSquare getS()

**Returns:** `IsoGridSquare`

### public void setS(IsoGridSquare s)

**Parameters:**
- `IsoGridSquare` `s` — the s to set

**Returns:** `void`

### public ArrayList<IsoObject> getSpecialObjects()

**Returns:** `ArrayList<IsoObject>`

### public IsoGridSquare getW()

**Returns:** `IsoGridSquare`

### public void setW(IsoGridSquare w)

**Parameters:**
- `IsoGridSquare` `w` — the w to set

**Returns:** `void`

### public float getLampostTotalR()

**Returns:** `float`

### public void setLampostTotalR(float lampostTotalR)

**Parameters:**
- `float` `lampostTotalR` — the lampostTotalR to set

**Returns:** `void`

### public float getLampostTotalG()

**Returns:** `float`

### public void setLampostTotalG(float lampostTotalG)

**Parameters:**
- `float` `lampostTotalG` — the lampostTotalG to set

**Returns:** `void`

### public float getLampostTotalB()

**Returns:** `float`

### public void setLampostTotalB(float lampostTotalB)

**Parameters:**
- `float` `lampostTotalB` — the lampostTotalB to set

**Returns:** `void`

### public boolean isSeen(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setIsSeen(int playerIndex,
boolean bSeen)

**Parameters:**
- `int` `playerIndex`
- `boolean` `bSeen` — the bSeen to set

**Returns:** `void`

### public float getDarkMulti(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public void setDarkMulti(int playerIndex,
float darkMulti)

**Parameters:**
- `int` `playerIndex`
- `float` `darkMulti` — the darkMulti to set

**Returns:** `void`

### public float getTargetDarkMulti(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public void setTargetDarkMulti(int playerIndex,
float targetDarkMulti)

**Parameters:**
- `int` `playerIndex`
- `float` `targetDarkMulti` — the targetDarkMulti to set

**Returns:** `void`

### public void setX(int x)

**Parameters:**
- `int` `x` — the x to set

**Returns:** `void`

### public void setY(int y)

**Parameters:**
- `int` `y` — the y to set

**Returns:** `void`

### public void setZ(int z)

**Parameters:**
- `int` `z` — the z to set

**Returns:** `void`

### public ArrayList<IsoGameCharacter> getDeferedCharacters()

**Returns:** `ArrayList<IsoGameCharacter>`

### public void addDeferredCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public boolean isCacheIsFree()

**Returns:** `boolean`

### public void setCacheIsFree(boolean cacheIsFree)

**Parameters:**
- `boolean` `cacheIsFree` — the CacheIsFree to set

**Returns:** `void`

### public boolean isCachedIsFree()

**Returns:** `boolean`

### public void setCachedIsFree(boolean cachedIsFree)

**Parameters:**
- `boolean` `cachedIsFree` — the CachedIsFree to set

**Returns:** `void`

### public static boolean isbDoSlowPathfinding()

**Returns:** `boolean`

### public static void setbDoSlowPathfinding(boolean abDoSlowPathfinding)

**Parameters:**
- `boolean` `abDoSlowPathfinding` — the bDoSlowPathfinding to set

**Returns:** `void`

### public boolean isSolidFloorCached()

**Returns:** `boolean`

### public void setSolidFloorCached(boolean solidFloorCached)

**Parameters:**
- `boolean` `solidFloorCached` — the SolidFloorCached to set

**Returns:** `void`

### public boolean isSolidFloor()

**Returns:** `boolean`

### public void setSolidFloor(boolean solidFloor)

**Parameters:**
- `boolean` `solidFloor` — the SolidFloor to set

**Returns:** `void`

### public static ColorInfo getDefColorInfo()

**Returns:** `ColorInfo`

### public boolean isOutside()

**Returns:** `boolean`

### public boolean HasPushable()

**Returns:** `boolean`

### public void setRoomID(long roomId)

**Parameters:**
- `long` `roomId`

**Returns:** `void`

### public long getRoomID()

**Returns:** `long`

### public String getRoomIDString()

**Returns:** `String`

### public boolean getCanSee(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public boolean getSeen(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public IsoChunk getChunk()

**Returns:** `IsoChunk`

### public IsoObject getDoorOrWindow(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `IsoObject`

### public IsoObject getDoorOrWindowOrWindowFrame(IsoDirections dir,
boolean ignoreOpen)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `ignoreOpen`

**Returns:** `IsoObject`

### public IsoObject getOpenDoor(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `IsoObject`

### public void removeWorldObject(IsoWorldInventoryObject object)

**Parameters:**
- `IsoWorldInventoryObject` `object`

**Returns:** `void`

### public void removeAllWorldObjects()

**Returns:** `void`

### public ArrayList<IsoWorldInventoryObject> getWorldObjects()

**Returns:** `ArrayList<IsoWorldInventoryObject>`

### public int getNextNonItemObjectIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean hasModData()

**Returns:** `boolean`

### public void setVertLight(int i,
int col,
int playerIndex)

**Parameters:**
- `int` `i`
- `int` `col`
- `int` `playerIndex`

**Returns:** `void`

### public int getVertLight(int i,
int playerIndex)

**Parameters:**
- `int` `i`
- `int` `playerIndex`

**Returns:** `int`

### public void setRainDrop(IsoRaindrop drop)

**Parameters:**
- `IsoRaindrop` `drop`

**Returns:** `void`

### public IsoRaindrop getRainDrop()

**Returns:** `IsoRaindrop`

### public void setRainSplash(IsoRainSplash splash)

**Parameters:**
- `IsoRainSplash` `splash`

**Returns:** `void`

### public IsoRainSplash getRainSplash()

**Returns:** `IsoRainSplash`

### public Zone getZone()

**Returns:** `Zone`

### public String getZoneType()

**Returns:** `String`

### public boolean isOverlayDone()

**Returns:** `boolean`

### public void setOverlayDone(boolean overlayDone)

**Parameters:**
- `boolean` `overlayDone`

**Returns:** `void`

### public ErosionData.Square getErosionData()

**Returns:** `ErosionData.Square`

### public void disableErosion()

**Returns:** `void`

### public void removeErosionObject(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void syncIsoTrap(HandWeapon weapon,
IsoPlayer attacker)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoPlayer` `attacker`

**Returns:** `void`

### public int getTrapPositionX()

**Returns:** `int`

### public void setTrapPositionX(int trapPositionX)

**Parameters:**
- `int` `trapPositionX`

**Returns:** `void`

### public int getTrapPositionY()

**Returns:** `int`

### public void setTrapPositionY(int trapPositionY)

**Parameters:**
- `int` `trapPositionY`

**Returns:** `void`

### public int getTrapPositionZ()

**Returns:** `int`

### public void setTrapPositionZ(int trapPositionZ)

**Parameters:**
- `int` `trapPositionZ`

**Returns:** `void`

### public boolean haveElectricity()

**Returns:** `boolean`

### @Deprecated
public void setHaveElectricity(boolean haveElectricity)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `haveElectricity`

**Returns:** `void`

### public IsoGenerator getGenerator()

**Returns:** `IsoGenerator`

### public void stopFire()

**Returns:** `void`

### public void transmitStopFire()

**Returns:** `void`

### public long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playSoundLocal(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### @Deprecated
public long playSound(String file,
boolean doWorldSound)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `file`
- `boolean` `doWorldSound`

**Returns:** `long`

### public void FixStackableObjects()

**Returns:** `void`

### public void fixPlacedItemRenderOffsets()

**Returns:** `void`

### public BaseVehicle getVehicleContainer()

**Returns:** `BaseVehicle`

### public boolean isVehicleIntersecting()

**Returns:** `boolean`

### public boolean isVehicleIntersectingCrops()

**Returns:** `boolean`

### public DeviceData getDeviceData()

**Returns:** `DeviceData`

### public void checkForIntersectingCrops(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public IsoCompost getCompost()

**Returns:** `IsoCompost`

### public <T> PZArrayList<ItemContainer> getAllContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getAllContainersFromAdjacentSquare(IsoDirections dir,
T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getObjectContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public void setIsoWorldRegion(IsoWorldRegion mr)

**Parameters:**
- `IsoWorldRegion` `mr`

**Returns:** `void`

### public IWorldRegion getIsoWorldRegion()

**Returns:** `IWorldRegion`

### public void ResetIsoWorldRegion()

**Returns:** `void`

### public boolean isInARoom()

**Returns:** `boolean`

### public int getRoomSize()

**Returns:** `int`

### public int getWallType()

**Returns:** `int`

### public int getPuddlesDir()

**Returns:** `int`

### public boolean haveFire()

**Returns:** `boolean`

### public IsoBuilding getRoofHideBuilding()

**Returns:** `IsoBuilding`

### public IsoGridSquare getAdjacentSquare(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `IsoGridSquare`

### public void setAdjacentSquare(IsoDirections dir,
IsoGridSquare square)

**Parameters:**
- `IsoDirections` `dir`
- `IsoGridSquare` `square`

**Returns:** `void`

### public IsoGridSquare[] getSurroundingSquares()

**Returns:** `IsoGridSquare[]`

### public IsoGridSquare getSquareAbove()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getAdjacentPathSquare(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `IsoGridSquare`

### public float getApparentZ(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `float`

### public IsoDirections getStairsDirection()

**Returns:** `IsoDirections`

### public float getStairsHeightMax()

**Returns:** `float`

### public float getStairsHeightMin()

**Returns:** `float`

### public float getStairsHeight(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `float`

### public boolean isStairsEdgeBlocked(IsoDirections edge)

**Parameters:**
- `IsoDirections` `edge`

**Returns:** `boolean`

### public boolean hasSlopedSurface()

**Returns:** `boolean`

### public IsoDirections getSlopedSurfaceDirection()

**Returns:** `IsoDirections`

### public boolean hasIdenticalSlopedSurface(IsoGridSquare other)

**Parameters:**
- `IsoGridSquare` `other`

**Returns:** `boolean`

### public float getSlopedSurfaceHeightMin()

**Returns:** `float`

### public float getSlopedSurfaceHeightMax()

**Returns:** `float`

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

### public float getTotalWeightOfItemsOnFloor()

**Returns:** `float`

### public boolean getCollideMatrix(int dx,
int dy,
int dz)

**Parameters:**
- `int` `dx`
- `int` `dy`
- `int` `dz`

**Returns:** `boolean`

### public boolean getPathMatrix(int dx,
int dy,
int dz)

**Parameters:**
- `int` `dx`
- `int` `dy`
- `int` `dz`

**Returns:** `boolean`

### public boolean getVisionMatrix(int dx,
int dy,
int dz)

**Parameters:**
- `int` `dx`
- `int` `dy`
- `int` `dz`

**Returns:** `boolean`

### public void checkRoomSeen(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public boolean hasFlies()

**Returns:** `boolean`

### public void setHasFlies(boolean hasFlies)

**Parameters:**
- `boolean` `hasFlies`

**Returns:** `void`

### public float getLightLevel(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public float getLightLevel2()

**Returns:** `float`

### public ArrayList<IsoAnimal> getAnimals(ArrayList<IsoAnimal> result)

**Parameters:**
- `ArrayList<IsoAnimal>` `result`

**Returns:** `ArrayList<IsoAnimal>`

### public ArrayList<IsoAnimal> getAnimals()

**Returns:** `ArrayList<IsoAnimal>`

### public boolean checkHaveGrass()

**Returns:** `boolean`

### public boolean checkHaveDung()

**Returns:** `boolean`

### public ArrayList<InventoryItem> removeAllDung()

**Returns:** `ArrayList<InventoryItem>`

### public boolean removeGrass()

**Returns:** `boolean`

### public int getZombieCount()

**Returns:** `int`

### public String getSquareRegion()

**Returns:** `String`

### public boolean containsVegetation()

**Returns:** `boolean`

### public IsoAnimalTrack getAnimalTrack()

**Returns:** `IsoAnimalTrack`

### public boolean hasTrashReceptacle()

**Returns:** `boolean`

### public boolean hasTrash()

**Returns:** `boolean`

### public IsoObject getTrashReceptacle()

**Returns:** `IsoObject`

### public boolean isExtraFreeSquare()

**Returns:** `boolean`

### public IsoGridSquare getRandomAdjacentFreeSameRoom()

**Returns:** `IsoGridSquare`

### public String getZombiesType()

**Returns:** `String`

### public String getLootZone()

**Returns:** `String`

### public IsoObject addTileObject(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `IsoObject`

### public boolean hasSand()

**Returns:** `boolean`

### public boolean hasDirt()

**Returns:** `boolean`

### public boolean hasNaturalFloor()

**Returns:** `boolean`

### public void dirtStamp()

**Returns:** `void`

### public IsoGridSquare getRandomAdjacent()

**Returns:** `IsoGridSquare`

### public boolean isAdjacentTo(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public boolean hasFireObject()

**Returns:** `boolean`

### public boolean hasAdjacentFireObject()

**Returns:** `boolean`

### public void addGrindstone()

**Returns:** `void`

### public void addFreezer()

**Returns:** `void`

### public void addFloodLights()

**Returns:** `void`

### public void addSpinningWheel()

**Returns:** `void`

### public void addLoom()

**Returns:** `void`

### public void addHandPress()

**Returns:** `void`

### public IsoThumpable addWorkstationEntity(String scriptString,
String sprite)

**Parameters:**
- `String` `scriptString`
- `String` `sprite`

**Returns:** `IsoThumpable`

### public IsoThumpable addWorkstationEntity(GameEntityScript script,
String sprite)

**Parameters:**
- `GameEntityScript` `script`
- `String` `sprite`

**Returns:** `IsoThumpable`

### public void addWorkstationEntity(IsoThumpable thumpable,
GameEntityScript script)

**Parameters:**
- `IsoThumpable` `thumpable`
- `GameEntityScript` `script`

**Returns:** `void`

### public boolean isDoorSquare()

**Returns:** `boolean`

### public boolean isWallSquare()

**Returns:** `boolean`

### public boolean isWallSquareNW()

**Returns:** `boolean`

### public boolean isFreeWallSquare()

**Returns:** `boolean`

### public boolean isDoorOrWallSquare()

**Returns:** `boolean`

### public void spawnRandomRuralWorkstation()

**Returns:** `void`

### public void spawnRandomWorkstation()

**Returns:** `void`

### public boolean isRural()

**Returns:** `boolean`

### public boolean isRuralExtraFussy()

**Returns:** `boolean`

### public boolean isFreeWallPair(IsoDirections dir,
boolean both)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `both`

**Returns:** `boolean`

### public boolean isGoodSquare()

**Returns:** `boolean`

### public boolean isWaterSquare()

**Returns:** `boolean`

### public boolean isGoodOutsideSquare()

**Returns:** `boolean`

### public void addStump()

**Returns:** `void`

### public static void setBlendFunc()

**Returns:** `void`

### public void invalidateRenderChunkLevel(long dirtyFlags)

**Parameters:**
- `long` `dirtyFlags`

**Returns:** `void`

### public void invalidateVispolyChunkLevel()

**Returns:** `void`

### public ArrayList<IsoHutch> getHutchTiles(IsoHutch sourceHutch)

**Parameters:**
- `IsoHutch` `sourceHutch`

**Returns:** `ArrayList<IsoHutch>`

### public IsoHutch getHutch()

**Returns:** `IsoHutch`

### public String getSquareZombiesType()

**Returns:** `String`

### public boolean hasRoomDef()

**Returns:** `boolean`

### public void spawnRandomGenerator()

**Returns:** `void`

### public void spawnRandomNewGenerator()

**Returns:** `void`

### public boolean hasGrave()

**Returns:** `boolean`

### public boolean hasFarmingPlant()

**Returns:** `boolean`

### public GlobalObject getFarmingPlant()

**Returns:** `GlobalObject`

### public void destroyFarmingPlant()

**Returns:** `void`

### public boolean hasLitCampfire()

**Returns:** `boolean`

### public GlobalObject getCampfire()

**Returns:** `GlobalObject`

### public void putOutCampfire()

**Returns:** `void`

### public IsoGridSquareCollisionData getFirstBlocking(IsoGridSquareCollisionData isoGridSquareCollisionData,
int x,
int y,
int z,
boolean specialDiag,
boolean bIgnoreDoors)

**Parameters:**
- `IsoGridSquareCollisionData` `isoGridSquareCollisionData`
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `specialDiag`
- `boolean` `bIgnoreDoors`

**Returns:** `IsoGridSquareCollisionData`

### public boolean canSpawnVermin()

**Returns:** `boolean`

### public boolean isNoGas()

**Returns:** `boolean`

### public boolean isNoPower()

**Returns:** `boolean`

### public boolean isNoWater()

**Returns:** `boolean`

### public IsoButcherHook getButcherHook()

**Returns:** `IsoButcherHook`

### public boolean isShop()

**Returns:** `boolean`

### public boolean hasFireplace()

**Returns:** `boolean`

### public IsoDeadBody addCorpse()

**Returns:** `IsoDeadBody`

### public IsoDeadBody addCorpse(boolean isSkeleton)

**Parameters:**
- `boolean` `isSkeleton`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(boolean skeleton)

**Parameters:**
- `boolean` `skeleton`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(IsoZombie zombie,
boolean skeleton)

**Parameters:**
- `IsoZombie` `zombie`
- `boolean` `skeleton`

**Returns:** `IsoDeadBody`

### public IsoObject getBed()

**Returns:** `IsoObject`

### public IsoObject getPuddleFloor()

**Returns:** `IsoObject`

### public void flagForHotSave()

**Returns:** `void`

### public boolean hasGridPower()

**Returns:** `boolean`

### public boolean hasGridPower(int offset)

**Parameters:**
- `int` `offset`

**Returns:** `boolean`

### public boolean isDerelict()

**Returns:** `boolean`

### public boolean isUserDefinedRoom()

**Returns:** `boolean`

### public boolean isUserDefinedBuilding()

**Returns:** `boolean`

### public boolean shouldNotSpawnActivatedRadiosOrTvs()

**Returns:** `boolean`

### public boolean hasFence()

**Returns:** `boolean`

### public boolean hasFenceInVicinity()

**Returns:** `boolean`

### public boolean hasFloorOverWater()

**Returns:** `boolean`

### public List<IsoGridSquare> getRadius(int radius)

**Parameters:**
- `int` `radius`

**Returns:** `List<IsoGridSquare>`

### public IsoGridSquare getSquareBelow()

**Returns:** `IsoGridSquare`

### public boolean canStand()

**Returns:** `boolean`

### public boolean hasAdjacentCanStandSquare()

**Returns:** `boolean`

### public void addAshes()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoGridSquare.html`*
