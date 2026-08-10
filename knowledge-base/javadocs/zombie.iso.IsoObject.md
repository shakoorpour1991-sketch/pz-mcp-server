---
title: zombie.iso.IsoObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoObject

`public class IsoObject extends GameEntity implements Serializable, ILuaIsoObject, Thumpable, IsoRenderable, ECSEntity`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject

## Fields

### public static final int MAX_WALL_SPLATS

### public static final float THUMP_STRESS_THUMPABLE

### public static final float THUMP_STRESS_DEFAULT

### public static final float THUMP_STRESS_FENCES

### public static final float THUMP_STRESS_TRANSPARENT_FENCES

### public static IsoObject lastRendered

### public static IsoObject lastRenderedRendered

### public static float rmod

### public static float gmod

### public static float bmod

### public static boolean lowLightingQualityHack

### public static final ColorInfo fireColor

### public byte ppfHighlighted

### public byte ppfHighlightRenderOnce

### public byte ppfBlink

### public boolean satChair

### public int keyId

### public BaseSoundEmitter emitter

### public float sheetRopeHealth

### public boolean sheetRope

### public boolean neverDoneAlpha

### public boolean alphaForced

### public ArrayList<IsoSpriteInstance> attachedAnimSprite

### public ArrayList<IsoWallBloodSplat> wallBloodSplats

### public ItemContainer container

### public short damage

### public float partialThumpDmg

### public boolean noPicking

### public float offsetX

### public float offsetY

### public boolean outlineOnMouseover

### public IsoObject rerouteMask

### public IsoSprite sprite

### public IsoSprite overlaySprite

### public ColorInfo overlaySpriteColor

### public IsoGridSquare square

### public float[] alpha

### public IsoObject rerouteCollide

### public se.krka.kahlua.vm.KahluaTable table

### public String name

### public float tintr

### public float tintg

### public float tintb

### public String spriteName

### public float sx

### public float sy

### public boolean doNotSync

### public IsoGridSquare renderSquareOverride

### public IsoGridSquare renderSquareOverride2

### public float renderDepthAdjust

## Constructors

### public IsoObject(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoObject()

### public IsoObject(IsoCell cell,
IsoGridSquare square,
IsoSprite spr)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `square`
- `IsoSprite` `spr`

### public IsoObject(IsoCell cell,
IsoGridSquare square,
String gid)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `square`
- `String` `gid`

### public IsoObject(IsoGridSquare square,
String tile,
String name)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `tile`
- `String` `name`

### public IsoObject(IsoGridSquare square,
String tile,
String name,
boolean bShareTilesWithMap)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `tile`
- `String` `name`
- `boolean` `bShareTilesWithMap`

### public IsoObject(IsoGridSquare square,
String tile,
boolean bShareTilesWithMap)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `tile`
- `boolean` `bShareTilesWithMap`

### public IsoObject(IsoGridSquare square,
String tile)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `tile`

## Methods

### public boolean isFloor()

**Returns:** `boolean`

### public static IsoObject getNew(IsoGridSquare sq,
String spriteName,
String name,
boolean bShareTilesWithMap)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `spriteName`
- `String` `name`
- `boolean` `bShareTilesWithMap`

**Returns:** `IsoObject`

### public static IsoObject getLastRendered()

**Returns:** `IsoObject`

### public static void setLastRendered(IsoObject aLastRendered)

**Parameters:**
- `IsoObject` `aLastRendered` — the lastRendered to set

**Returns:** `void`

### public static IsoObject getLastRenderedRendered()

**Returns:** `IsoObject`

### public static void setLastRenderedRendered(IsoObject aLastRenderedRendered)

**Parameters:**
- `IsoObject` `aLastRenderedRendered` — the lastRenderedRendered to set

**Returns:** `void`

### public static IsoObject getNew()

**Returns:** `IsoObject`

### public HashMap<Class<? extends ECSComponent>, ECSComponent> getECSComponentMap()

**Returns:** `HashMap<Class<? extends ECSComponent>, ECSComponent>`

### public static IsoObject.IsoObjectFactory getFactoryVehicle()

**Returns:** `IsoObject.IsoObjectFactory`

### public static byte factoryGetClassID(String name)

**Parameters:**
- `String` `name`

**Returns:** `byte`

### public static IsoObject factoryFromFileInput(IsoCell cell,
byte classID)

**Parameters:**
- `IsoCell` `cell`
- `byte` `classID`

**Returns:** `IsoObject`

### @Deprecated
public static IsoObject factoryFromFileInput_OLD(IsoCell cell,
int classID)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoCell` `cell`
- `int` `classID`

**Returns:** `IsoObject`

### @Deprecated
public static Class<?> factoryClassFromFileInput(IsoCell cell,
int classID)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoCell` `cell`
- `int` `classID`

**Returns:** `Class<?>`

### public static IsoObject factoryFromFileInput(IsoCell cell,
ByteBuffer b)

**Parameters:**
- `IsoCell` `cell`
- `ByteBuffer` `b`

**Returns:** `IsoObject`

### public void sync()

**Returns:** `void`

### public void sync(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source,
ByteBufferReader bb)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void syncFluidContainerReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void syncFluidContainerSend(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public String getTextureName()

**Returns:** `String`

### public boolean Serialize()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setModData(se.krka.kahlua.vm.KahluaTable newDatas)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `newDatas`

**Returns:** `void`

### public boolean hasModData()

**Returns:** `boolean`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public void setSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square` — the square to set

**Returns:** `void`

### public IsoChunk getChunk()

**Returns:** `IsoChunk`

### public void update()

**Returns:** `void`

### public void DirtySlice()

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public final void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public final void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void saveState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void loadState(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void softReset()

**Returns:** `void`

### public void AttackObject(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void onMouseRightClick(int lx,
int ly)

**Parameters:**
- `int` `lx`
- `int` `ly`

**Returns:** `void`

### public void onMouseRightReleased()

**Returns:** `void`

### public void Hit(Vector2 collision,
IsoObject obj,
float damage)

**Parameters:**
- `Vector2` `collision`
- `IsoObject` `obj`
- `float` `damage`

**Returns:** `void`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void HitByVehicle(BaseVehicle vehicle,
float amount)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `amount`

**Returns:** `void`

### public void Collision(Vector2 collision,
IsoObject object)

**Parameters:**
- `Vector2` `collision`
- `IsoObject` `object`

**Returns:** `void`

### public void UnCollision(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public float GetVehicleSlowFactor(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `float`

### public IsoObject getRerouteCollide()

**Returns:** `IsoObject`

### public void setRerouteCollide(IsoObject rerouteCollide)

**Parameters:**
- `IsoObject` `rerouteCollide` — the rerouteCollide to set

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table` — the table to set

**Returns:** `void`

### public void setAlpha(float alpha)

**Parameters:**
- `float` `alpha` — the alpha to set

**Returns:** `void`

### public void setAlpha(int playerIndex,
float alpha)

**Parameters:**
- `int` `playerIndex`
- `float` `alpha` — the alpha to set

**Returns:** `void`

### public void setAlphaToTarget(int playerIndex)

**Parameters:**
- `int` `playerIndex` — The playerIndex to use

**Returns:** `void`

### public void setAlphaAndTarget(float alpha)

**Parameters:**
- `float` `alpha` — the alpha to set

**Returns:** `void`

### public void setAlphaAndTarget(int playerIndex,
float alpha)

**Parameters:**
- `int` `playerIndex` — The playerIndex to use
- `float` `alpha`

**Returns:** `void`

### public float getAlpha()

**Returns:** `float`

### public float getAlpha(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public ArrayList<IsoSpriteInstance> getAttachedAnimSprite()

**Returns:** `ArrayList<IsoSpriteInstance>`

### public void setAttachedAnimSprite(ArrayList<IsoSpriteInstance> attachedAnimSprite)

**Parameters:**
- `ArrayList<IsoSpriteInstance>` `attachedAnimSprite` — the AttachedAnimSprite to set

**Returns:** `void`

### public int getAttachedAnimSpriteCount()

**Returns:** `int`

### public boolean hasAttachedAnimSprites()

**Returns:** `boolean`

### public void addAttachedAnimSpriteInstance(IsoSpriteInstance inst)

**Parameters:**
- `IsoSpriteInstance` `inst`

**Returns:** `void`

### public void addAttachedAnimSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void addAttachedAnimSpriteByName(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `void`

### public boolean isAttachedAnimSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `boolean`

### public boolean isAttachedOrOverlaySprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `boolean`

### public IsoCell getCell()

**Returns:** `IsoCell`

### public ArrayList<IsoSpriteInstance> getChildSprites()

**Returns:** `ArrayList<IsoSpriteInstance>`

### public void setChildSprites(ArrayList<IsoSpriteInstance> attachedAnimSprite)

**Parameters:**
- `ArrayList<IsoSpriteInstance>` `attachedAnimSprite` — the AttachedAnimSprite to set

**Returns:** `void`

### public void clearAttachedAnimSprite()

**Returns:** `void`

### public ItemContainer getContainer()

**Returns:** `ItemContainer`

### public void setContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container` — the container to set

**Returns:** `void`

### public <T> PZArrayList<ItemContainer> getContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public ItemContainer getContainerClickedOn(int screenX,
int screenY)

**Parameters:**
- `int` `screenX`
- `int` `screenY`

**Returns:** `ItemContainer`

### public IsoDirections getDir()

**Returns:** `IsoDirections`

### public void setDir(int dir)

**Parameters:**
- `int` `dir` — the dir to set

**Returns:** `void`

### public void setForwardIsoDirection(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public void setForwardIsoDirection(int dir)

**Parameters:**
- `int` `dir`

**Returns:** `void`

### public IsoDirections getForwardIsoDirection()

**Returns:** `IsoDirections`

### public IsoDirections getForwardMovementIsoDirection()

**Returns:** `IsoDirections`

### public short getDamage()

**Returns:** `short`

### public void setDamage(short damage)

**Parameters:**
- `short` `damage` — the Damage to set

**Returns:** `void`

### public boolean isNoPicking()

**Returns:** `boolean`

### public void setNoPicking(boolean noPicking)

**Parameters:**
- `boolean` `noPicking` — the NoPicking to set

**Returns:** `void`

### public boolean isOutlineOnMouseover()

**Returns:** `boolean`

### public void setOutlineOnMouseover(boolean outlineOnMouseover)

**Parameters:**
- `boolean` `outlineOnMouseover` — the OutlineOnMouseover to set

**Returns:** `void`

### public IsoObject getRerouteMask()

**Returns:** `IsoObject`

### public void setRerouteMask(IsoObject rerouteMask)

**Parameters:**
- `IsoObject` `rerouteMask` — the rerouteMask to set

**Returns:** `void`

### public IsoSprite getSprite()

**Returns:** `IsoSprite`

### public void setSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite` — the sprite to set

**Returns:** `void`

### public void setSprite(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setSpriteFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public IsoSpriteGrid getSpriteGrid()

**Returns:** `IsoSpriteGrid`

### public boolean hasSpriteGrid()

**Returns:** `boolean`

### public float getTargetAlpha()

**Returns:** `float`

### public void setTargetAlpha(float targetAlpha)

**Parameters:**
- `float` `targetAlpha` — the targetAlpha to set

**Returns:** `void`

### public void setTargetAlpha(int playerIndex,
float targetAlpha)

**Parameters:**
- `int` `playerIndex`
- `float` `targetAlpha` — the targetAlpha to set

**Returns:** `void`

### public float getTargetAlpha(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public boolean isAlphaAndTargetZero()

Returns TRUE if both Alpha nad TargetAlpha are transparent, or near-zero.

**Returns:** `boolean`

### public boolean isAlphaAndTargetZero(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public boolean isAlphaZero()

Returns TRUE if Alpha is transparent, or near-zero.

**Returns:** `boolean`

### public boolean isAlphaZero(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public boolean isTargetAlphaZero(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public IsoObjectType getType()

**Returns:** `IsoObjectType`

### public void setType(IsoObjectType type)

**Parameters:**
- `IsoObjectType` `type`

**Returns:** `void`

### public void addChild(IsoObject child)

**Parameters:**
- `IsoObject` `child`

**Returns:** `void`

### public void debugPrintout()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public long customHashCode()

**Returns:** `long`

### public void SetName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name` — the name to set

**Returns:** `void`

### public String getSpriteName()

**Returns:** `String`

### public String getTile()

**Returns:** `String`

### public void setTile(String tile)

**Parameters:**
- `String` `tile`

**Returns:** `void`

### public boolean isCharacter()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public String getScriptName()

**Returns:** `String`

### public IsoSpriteInstance AttachAnim(String objectName,
String animName,
int numFrames,
float frameIncrease,
int offsetX,
int offsetY,
boolean looping,
int finishHoldFrameIndex,
boolean deleteWhenFinished,
float zBias,
ColorInfo tintMod)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `numFrames`
- `float` `frameIncrease`
- `int` `offsetX`
- `int` `offsetY`
- `boolean` `looping`
- `int` `finishHoldFrameIndex`
- `boolean` `deleteWhenFinished`
- `float` `zBias`
- `ColorInfo` `tintMod`

**Returns:** `IsoSpriteInstance`

### public IsoSpriteInstance AttachAnim(String objectName,
String animName,
int numFrames,
float frameIncrease,
int offsetX,
int offsetY,
boolean looping,
int finishHoldFrameIndex,
boolean deleteWhenFinished,
float zBias,
ColorInfo tintMod,
boolean randomFrame)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `numFrames`
- `float` `frameIncrease`
- `int` `offsetX`
- `int` `offsetY`
- `boolean` `looping`
- `int` `finishHoldFrameIndex`
- `boolean` `deleteWhenFinished`
- `float` `zBias`
- `ColorInfo` `tintMod`
- `boolean` `randomFrame`

**Returns:** `IsoSpriteInstance`

### public void AttachExistingAnim(IsoSprite spr,
int offsetX,
int offsetY,
boolean looping,
int finishHoldFrameIndex,
boolean deleteWhenFinished,
float zBias,
ColorInfo tintMod)

**Parameters:**
- `IsoSprite` `spr`
- `int` `offsetX`
- `int` `offsetY`
- `boolean` `looping`
- `int` `finishHoldFrameIndex`
- `boolean` `deleteWhenFinished`
- `float` `zBias`
- `ColorInfo` `tintMod`

**Returns:** `void`

### public void AttachExistingAnim(IsoSprite spr,
int offsetX,
int offsetY,
boolean looping,
int finishHoldFrameIndex,
boolean deleteWhenFinished,
float zBias)

**Parameters:**
- `IsoSprite` `spr`
- `int` `offsetX`
- `int` `offsetY`
- `boolean` `looping`
- `int` `finishHoldFrameIndex`
- `boolean` `deleteWhenFinished`
- `float` `zBias`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void DoSpecialTooltip(ObjectTooltip tooltipUI,
IsoGridSquare square)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `IsoGridSquare` `square`

**Returns:** `void`

### public ItemContainer getItemContainer()

**Returns:** `ItemContainer`

### public float getOffsetX()

**Returns:** `float`

### public void setOffsetX(float offsetX)

**Parameters:**
- `float` `offsetX` — the offsetX to set

**Returns:** `void`

### public float getOffsetY()

**Returns:** `float`

### public void setOffsetY(float offsetY)

**Parameters:**
- `float` `offsetY` — the offsetY to set

**Returns:** `void`

### public IsoObject getRerouteMaskObject()

**Returns:** `IsoObject`

### public boolean HasTooltip()

**Returns:** `boolean`

### public boolean getUsesExternalWaterSource()

**Returns:** `boolean`

### public void setUsesExternalWaterSource(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean hasExternalWaterSource()

**Returns:** `boolean`

### public void doFindExternalWaterSource()

**Returns:** `void`

### public IsoObject FindExternalWaterSource()

**Returns:** `IsoObject`

### public static IsoObject FindExternalWaterSource(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoObject`

### public static IsoObject FindExternalWaterSource(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoObject`

### public static IsoObject FindWaterSourceOnSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoObject`

### public int getPipedFuelAmount()

**Returns:** `int`

### public void setPipedFuelAmount(int units)

**Parameters:**
- `int` `units`

**Returns:** `void`

### public float getFluidAmount()

**Returns:** `float`

### public void emptyFluid()

**Returns:** `void`

### public float getFluidCapacity()

**Returns:** `float`

### public float useFluid(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `float`

### public void addFluid(FluidType fluidType,
float amount)

**Parameters:**
- `FluidType` `fluidType`
- `float` `amount`

**Returns:** `void`

### public boolean canTransferFluidFrom(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `boolean`

### public boolean canTransferFluidTo(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `boolean`

### public float transferFluidTo(FluidContainer target,
float amount)

**Parameters:**
- `FluidContainer` `target`
- `float` `amount`

**Returns:** `float`

### public float transferFluidFrom(FluidContainer source,
float amount)

**Parameters:**
- `FluidContainer` `source`
- `float` `amount`

**Returns:** `float`

### public FluidContainer moveFluidToTemporaryContainer(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `FluidContainer`

### public Fluid getPrimaryFluid()

**Returns:** `Fluid`

### public String getFluidUiName()

**Returns:** `String`

### public boolean hasFluid()

**Returns:** `boolean`

### public boolean hasWater()

**Returns:** `boolean`

### public boolean isFluidInputLocked()

**Returns:** `boolean`

### public boolean isTaintedWater()

**Returns:** `boolean`

### public InventoryItem replaceItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### @Deprecated
public void useItemOn(InventoryItem item)

> ⚠️ **Deprecated**

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean isCanPath()

**Returns:** `boolean`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public Vector3 getPosition(Vector3 out)

**Parameters:**
- `Vector3` `out`

**Returns:** `Vector3`

### public org.lwjgl.util.vector.Vector3f getPosition(org.lwjgl.util.vector.Vector3f out)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `out`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public PropertyContainer getProperties()

**Returns:** `PropertyContainer`

### public boolean hasProperty(IsoPropertyType p)

**Parameters:**
- `IsoPropertyType` `p`

**Returns:** `boolean`

### public boolean hasProperty(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public boolean hasProperty(String p)

**Parameters:**
- `String` `p`

**Returns:** `boolean`

### public String getProperty(IsoPropertyType p)

**Parameters:**
- `IsoPropertyType` `p`

**Returns:** `String`

### public String getProperty(String p)

**Parameters:**
- `String` `p`

**Returns:** `String`

### public boolean propertyEquals(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `boolean`

### public boolean propertyEqualsIgnoreCase(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `boolean`

### public void RemoveAttachedAnims()

**Returns:** `void`

### public void RemoveAttachedAnim(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void afterRotated()

**Returns:** `void`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public Vector2 getFacingPositionAlt(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public float getRenderYOffset()

**Returns:** `float`

### public void setRenderYOffset(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public boolean isTableSurface()

**Returns:** `boolean`

### public boolean isTableTopObject()

**Returns:** `boolean`

### public boolean getIsSurfaceNormalOffset()

**Returns:** `boolean`

### public float getSurfaceNormalOffset()

**Returns:** `float`

### public float getSurfaceOffsetNoTable()

**Returns:** `float`

### public float getSurfaceOffset()

**Returns:** `float`

### public boolean isStairsNorth()

**Returns:** `boolean`

### public boolean isStairsWest()

**Returns:** `boolean`

### public boolean isStairsObject()

**Returns:** `boolean`

### public boolean isHoppable()

**Returns:** `boolean`

### public boolean isTallHoppable()

**Returns:** `boolean`

### public boolean isNorthHoppable()

**Returns:** `boolean`

### public boolean isWall()

**Returns:** `boolean`

### public boolean isWallN()

**Returns:** `boolean`

### public boolean isWallW()

**Returns:** `boolean`

### public boolean isWallSE()

**Returns:** `boolean`

### public boolean haveSheetRope()

**Returns:** `boolean`

### public int countAddSheetRope()

**Returns:** `int`

### public boolean canAddSheetRope()

**Returns:** `boolean`

### public boolean addSheetRope(IsoPlayer player,
String itemType)

**Parameters:**
- `IsoPlayer` `player`
- `String` `itemType`

**Returns:** `boolean`

### public boolean removeSheetRope(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void setDoRender(boolean doRender)

**Parameters:**
- `boolean` `doRender`

**Returns:** `void`

### public boolean getDoRender()

**Returns:** `boolean`

### public boolean isSceneCulled()

**Returns:** `boolean`

### public void setSceneCulled(boolean isCulled)

**Parameters:**
- `boolean` `isCulled`

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void renderFloorTile(float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader,
Consumer<TextureDraw> texdModifier,
Consumer<TextureDraw> attachedAndOverlayModifier)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`
- `Consumer<TextureDraw>` `texdModifier`
- `Consumer<TextureDraw>` `attachedAndOverlayModifier`

**Returns:** `void`

### public void renderWallTile(IsoDirections dir,
float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoDirections` `dir`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderWallTileDepth(IsoDirections dir,
boolean cutawaySelf,
boolean cutawayE,
boolean cutawayS,
int cutawaySEX,
float x,
float y,
float z,
ColorInfo col,
Shader shader,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `cutawaySelf`
- `boolean` `cutawayE`
- `boolean` `cutawayS`
- `int` `cutawaySEX`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `Shader` `shader`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderWallTileOnly(IsoDirections dir,
float x,
float y,
float z,
ColorInfo col,
Shader shader,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoDirections` `dir`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `Shader` `shader`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderAttachedAndOverlaySprites(IsoDirections dir,
float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoDirections` `dir`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public boolean isSpriteInvisible()

**Returns:** `boolean`

### public void renderFxMask(float x,
float y,
float z,
boolean bDoAttached)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `bDoAttached`

**Returns:** `void`

### public void renderObjectPicker(float x,
float y,
float z,
ColorInfo lightInfo)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `lightInfo`

**Returns:** `void`

### public boolean TestPathfindCollide(IsoMovingObject obj,
IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoMovingObject` `obj`
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `boolean`

### public boolean TestCollide(IsoMovingObject obj,
IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoMovingObject` `obj`
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `boolean`

### public IsoObject.VisionResult TestVision(IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `IsoObject.VisionResult`

### public Texture getCurrentFrameTex()

**Returns:** `Texture`

### public boolean isMaskClicked(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean isMaskClicked(int x,
int y,
boolean flip)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `boolean`

### public float getMaskClickedY(int x,
int y,
boolean flip)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `float`

### public ColorInfo getCustomColor()

**Returns:** `ColorInfo`

### public void setCustomColor(ColorInfo col)

**Parameters:**
- `ColorInfo` `col`

**Returns:** `void`

### public void setCustomColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void loadFromRemoteBuffer(ByteBufferReader b)

**Parameters:**
- `ByteBufferReader` `b`

**Returns:** `void`

### public void loadFromRemoteBuffer(ByteBufferReader b,
boolean addToObjects)

**Parameters:**
- `ByteBufferReader` `b`
- `boolean` `addToObjects`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public final void removeFromWorldToMeta()

**Returns:** `void`

### public void reuseGridSquare()

**Returns:** `void`

### public void removeFromSquare()

**Returns:** `void`

### public void transmitCustomColorToClients()

**Returns:** `void`

### public void transmitCompleteItemToClients()

**Returns:** `void`

### public void transmitUpdatedSpriteToClients(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void transmitUpdatedSpriteToClients()

**Returns:** `void`

### public void transmitUpdatedSprite()

**Returns:** `void`

### public void sendObjectChange(IsoObjectChange change)

**Parameters:**
- `IsoObjectChange` `change`

**Returns:** `void`

### public void sendObjectChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`

**Returns:** `void`

### public void sendObjectChange(IsoObjectChange change,
Object... args)

**Parameters:**
- `IsoObjectChange` `change`
- `Object...` `args`

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter bb)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### @Deprecated
public void transmitUpdatedSpriteToServer()

> ⚠️ **Deprecated**

**Returns:** `void`

### public void transmitModData()

**Returns:** `void`

### public void writeToRemoteBuffer(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public int getObjectIndex()

**Returns:** `int`

### public int getMovingObjectIndex()

**Returns:** `int`

### public int getSpecialObjectIndex()

**Returns:** `int`

### public int getStaticMovingObjectIndex()

**Returns:** `int`

### public int getWorldObjectIndex()

**Returns:** `int`

### public IsoSprite getOverlaySprite()

**Returns:** `IsoSprite`

### public void setOverlaySprite(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `void`

### public void setOverlaySprite(String spriteName,
boolean bTransmit)

**Parameters:**
- `String` `spriteName`
- `boolean` `bTransmit`

**Returns:** `void`

### public void setOverlaySpriteColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public ColorInfo getOverlaySpriteColor()

**Returns:** `ColorInfo`

### public void setOverlaySprite(String spriteName,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `spriteName`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public boolean setOverlaySprite(String spriteName,
float r,
float g,
float b,
float a,
boolean bTransmit)

**Parameters:**
- `String` `spriteName`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `bTransmit`

**Returns:** `boolean`

### public boolean hasOverlaySprite()

**Returns:** `boolean`

### public boolean haveSpecialTooltip()

**Returns:** `boolean`

### public void setSpecialTooltip(boolean specialTooltip)

**Parameters:**
- `boolean` `specialTooltip`

**Returns:** `void`

### public int getKeyId()

**Returns:** `int`

### public void setKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `void`

### public boolean isHighlighted()

**Returns:** `boolean`

### public void setHighlighted(boolean highlight)

**Parameters:**
- `boolean` `highlight`

**Returns:** `void`

### public void setHighlighted(boolean highlight,
boolean renderOnce)

**Parameters:**
- `boolean` `highlight`
- `boolean` `renderOnce`

**Returns:** `void`

### public boolean isHighlightRenderOnce()

**Returns:** `boolean`

### public void setHighlightRenderOnce(boolean highlight)

**Parameters:**
- `boolean` `highlight`

**Returns:** `void`

### public boolean isHighlighted(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setHighlighted(int playerIndex,
boolean highlight)

**Parameters:**
- `int` `playerIndex`
- `boolean` `highlight`

**Returns:** `void`

### public void setHighlighted(int playerIndex,
boolean highlight,
boolean renderOnce)

**Parameters:**
- `int` `playerIndex`
- `boolean` `highlight`
- `boolean` `renderOnce`

**Returns:** `void`

### public boolean isHighlightRenderOnce(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setHighlightRenderOnce(int playerIndex,
boolean highlight)

**Parameters:**
- `int` `playerIndex`
- `boolean` `highlight`

**Returns:** `void`

### public ColorInfo getHighlightColor()

**Returns:** `ColorInfo`

### public void setHighlightColor(ColorInfo highlightColor)

**Parameters:**
- `ColorInfo` `highlightColor`

**Returns:** `void`

### public void setHighlightColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public ColorInfo getHighlightColor(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `ColorInfo`

### public void setHighlightColor(int playerIndex,
ColorInfo highlightColor)

**Parameters:**
- `int` `playerIndex`
- `ColorInfo` `highlightColor`

**Returns:** `void`

### public void setHighlightColor(int playerIndex,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `playerIndex`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public boolean isBlink()

**Returns:** `boolean`

### public void setBlink(boolean blink)

**Parameters:**
- `boolean` `blink`

**Returns:** `void`

### public boolean isBlink(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setBlink(int playerIndex,
boolean blink)

**Parameters:**
- `int` `playerIndex`
- `boolean` `blink`

**Returns:** `void`

### public boolean isSatChair()

**Returns:** `boolean`

### public void setSatChair(boolean satChair)

**Parameters:**
- `boolean` `satChair`

**Returns:** `void`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

### public void checkHaveElectricity()

**Returns:** `void`

### public void checkAmbientSound()

**Returns:** `void`

### public int getContainerCount()

**Returns:** `int`

### public ItemContainer getContainerByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ItemContainer`

### public ItemContainer getContainerByType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ItemContainer`

### public ItemContainer getContainerByEitherType(String type1,
String type2)

**Parameters:**
- `String` `type1`
- `String` `type2`

**Returns:** `ItemContainer`

### public void addSecondaryContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public int getContainerIndex(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `int`

### public void removeAllContainers()

**Returns:** `void`

### public void createFluidContainersFromSpriteProperties()

**Returns:** `void`

### public void createContainersFromSpriteProperties()

**Returns:** `void`

### public boolean isItemAllowedInContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isRemoveItemAllowedFromContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public void cleanWallBlood()

**Returns:** `void`

### public ObjectRenderEffects getWindRenderEffects()

**Returns:** `ObjectRenderEffects`

### public ObjectRenderEffects getObjectRenderEffects()

**Returns:** `ObjectRenderEffects`

### public void setRenderEffect(RenderEffectType type)

**Parameters:**
- `RenderEffectType` `type`

**Returns:** `void`

### public IsoObject getRenderEffectMaster()

**Returns:** `IsoObject`

### public int getRenderEffectObjectCount()

**Returns:** `int`

### public IsoObject getRenderEffectObjectByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `IsoObject`

### public void setRenderEffect(RenderEffectType type,
boolean reuseEqualType)

**Parameters:**
- `RenderEffectType` `type`
- `boolean` `reuseEqualType`

**Returns:** `void`

### public void removeRenderEffect(ObjectRenderEffects o)

**Parameters:**
- `ObjectRenderEffects` `o`

**Returns:** `void`

### public ObjectRenderEffects getObjectRenderEffectsToApply()

**Returns:** `ObjectRenderEffects`

### public void destroyFence(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public ArrayList<IsoObject> getSpriteGridObjects(ArrayList<IsoObject> result)

**Parameters:**
- `ArrayList<IsoObject>` `result`

**Returns:** `ArrayList<IsoObject>`

### public ArrayList<IsoObject> getSpriteGridObjectsExcludingSelf(ArrayList<IsoObject> result)

**Parameters:**
- `ArrayList<IsoObject>` `result`

**Returns:** `ArrayList<IsoObject>`

### public ArrayList<IsoObject> getSpriteGridObjectsIncludingSelf(ArrayList<IsoObject> result)

**Parameters:**
- `ArrayList<IsoObject>` `result`

**Returns:** `ArrayList<IsoObject>`

### public ArrayList<IsoObject> getSpriteGridObjects(ArrayList<IsoObject> result,
boolean bAddSelf)

**Parameters:**
- `ArrayList<IsoObject>` `result`
- `boolean` `bAddSelf`

**Returns:** `ArrayList<IsoObject>`

### public boolean isConnectedSpriteGridObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public IsoObject getClosestSpriteGridObject(float toX,
float toY)

**Parameters:**
- `float` `toX`
- `float` `toY`

**Returns:** `IsoObject`

### public boolean isOnScreen()

**Returns:** `boolean`

### public final void setOutlineHighlightCol(ColorInfo outlineHighlightCol)

**Parameters:**
- `ColorInfo` `outlineHighlightCol`

**Returns:** `void`

### public final int getOutlineHighlightCol(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public final void setOutlineHighlightCol(int playerIndex,
ColorInfo outlineHighlightCol)

**Parameters:**
- `int` `playerIndex`
- `ColorInfo` `outlineHighlightCol`

**Returns:** `void`

### public final void setOutlineHighlightCol(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public final void setOutlineHighlightCol(int playerIndex,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `playerIndex`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public final boolean isOutlineHighlight()

**Returns:** `boolean`

### public final boolean isOutlineHighlight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public final void setOutlineHighlight(boolean isOutlineHighlight)

**Parameters:**
- `boolean` `isOutlineHighlight`

**Returns:** `void`

### public final void setOutlineHighlight(int playerIndex,
boolean isOutlineHighlight)

**Parameters:**
- `int` `playerIndex`
- `boolean` `isOutlineHighlight`

**Returns:** `void`

### public final boolean isOutlineHlAttached()

**Returns:** `boolean`

### public final boolean isOutlineHlAttached(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setOutlineHlAttached(boolean isOutlineHlAttached)

**Parameters:**
- `boolean` `isOutlineHlAttached`

**Returns:** `void`

### public final void setOutlineHlAttached(int playerIndex,
boolean isOutlineHlAttached)

**Parameters:**
- `int` `playerIndex`
- `boolean` `isOutlineHlAttached`

**Returns:** `void`

### public boolean isOutlineHlBlink()

**Returns:** `boolean`

### public final boolean isOutlineHlBlink(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setOutlineHlBlink(boolean isOutlineHlBlink)

**Parameters:**
- `boolean` `isOutlineHlBlink`

**Returns:** `void`

### public final void setOutlineHlBlink(int playerIndex,
boolean isOutlineHlBlink)

**Parameters:**
- `int` `playerIndex`
- `boolean` `isOutlineHlBlink`

**Returns:** `void`

### public void unsetOutlineHighlight()

**Returns:** `void`

### public float getOutlineThickness()

**Returns:** `float`

### public void setOutlineThickness(float outlineThickness)

**Parameters:**
- `float` `outlineThickness`

**Returns:** `void`

### public boolean isDestroyed()

**Returns:** `boolean`

### public float getStressModFromThumping()

**Returns:** `float`

### public void Thump(IsoMovingObject thumper,
int thumpEventCount)

**Parameters:**
- `IsoMovingObject` `thumper`
- `int` `thumpEventCount`

**Returns:** `void`

### public void setMovedThumpable(boolean movedThumpable)

**Parameters:**
- `boolean` `movedThumpable`

**Returns:** `void`

### public boolean isMovedThumpable()

**Returns:** `boolean`

### public void WeaponHit(IsoGameCharacter chr,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `chr`
- `HandWeapon` `weapon`

**Returns:** `void`

### public Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### public Thumpable getThumpableFor(IsoGameCharacter chr,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `chr`
- `HandWeapon` `weapon`

**Returns:** `Thumpable`

### public boolean isExistInTheWorld()

**Returns:** `boolean`

### public float getThumpCondition()

**Returns:** `float`

### public String toString()

**Returns:** `String`

### public GameEntityType getGameEntityType()

**Returns:** `GameEntityType`

### public long getEntityNetID()

**Returns:** `long`

### public boolean isEntityValid()

**Returns:** `boolean`

### public IsoObject getMasterObject()

**Returns:** `IsoObject`

### public boolean isTent()

**Returns:** `boolean`

### public IsoDirections getFacing()

**Returns:** `IsoDirections`

### public String getTileName()

**Returns:** `String`

### public InventoryItem spawnItemToObjectSurface(String item)

**Parameters:**
- `String` `item`

**Returns:** `InventoryItem`

### public InventoryItem spawnItemToObjectSurface(String item,
boolean randomRotation)

**Parameters:**
- `String` `item`
- `boolean` `randomRotation`

**Returns:** `InventoryItem`

### public InventoryItem spawnItemToObjectSurface(String item,
boolean randomRotation,
boolean checkForAdjacentCanStandSquare)

**Parameters:**
- `String` `item`
- `boolean` `randomRotation`
- `boolean` `checkForAdjacentCanStandSquare`

**Returns:** `InventoryItem`

### public InventoryItem addItemToObjectSurface(String item)

**Parameters:**
- `String` `item`

**Returns:** `InventoryItem`

### public InventoryItem addItemToObjectSurface(String item,
boolean randomRotation)

**Parameters:**
- `String` `item`
- `boolean` `randomRotation`

**Returns:** `InventoryItem`

### public InventoryItem addItemToObjectSurface(String item,
boolean randomRotation,
boolean spawnChecks)

**Parameters:**
- `String` `item`
- `boolean` `randomRotation`
- `boolean` `spawnChecks`

**Returns:** `InventoryItem`

### public ObjectRenderInfo getRenderInfo(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `ObjectRenderInfo`

### public void invalidateRenderChunkLevel(long dirtyFlags)

**Parameters:**
- `long` `dirtyFlags`

**Returns:** `void`

### public void invalidateVispolyChunkLevel()

**Returns:** `void`

### public boolean hasAnimatedAttachments()

**Returns:** `boolean`

### public void renderAnimatedAttachments(float x,
float y,
float z,
ColorInfo col)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`

**Returns:** `void`

### public IsoGridSquare getRenderSquare()

**Returns:** `IsoGridSquare`

### public void setSpriteModelName(String spriteModelName)

**Parameters:**
- `String` `spriteModelName`

**Returns:** `void`

### public SpriteModel getSpriteModel()

**Returns:** `SpriteModel`

### public boolean isAnimating()

**Returns:** `boolean`

### public void setAnimating(boolean bAnimating)

**Parameters:**
- `boolean` `bAnimating`

**Returns:** `void`

### public void onAnimationFinished()

**Returns:** `void`

### public boolean isGrave()

**Returns:** `boolean`

### public IsoSpriteInstance getOnOverlay()

**Returns:** `IsoSpriteInstance`

### public void setOnOverlay(IsoSpriteInstance inst)

**Parameters:**
- `IsoSpriteInstance` `inst`

**Returns:** `void`

### public void clearOnOverlay()

**Returns:** `void`

### public boolean shouldShowOnOverlay()

**Returns:** `boolean`

### public IsoLightSource getLightSource()

**Returns:** `IsoLightSource`

### public void setLightSource(IsoLightSource lightSource)

**Parameters:**
- `IsoLightSource` `lightSource`

**Returns:** `void`

### public void checkLightSourceActive()

**Returns:** `void`

### public boolean isGenericCraftingSurface()

**Returns:** `boolean`

### public boolean isBush()

**Returns:** `boolean`

### public boolean isGrass()

**Returns:** `boolean`

### public boolean isGrassLike()

**Returns:** `boolean`

### public boolean isOres()

**Returns:** `boolean`

### public boolean isFascia()

**Returns:** `boolean`

### public IsoGridSquare getFasciaAttachedSquare()

**Returns:** `IsoGridSquare`

### public void setExplored(boolean isExplored)

**Parameters:**
- `boolean` `isExplored`

**Returns:** `void`

### public void flagForHotSave()

**Returns:** `void`

### public boolean hasGridPower()

**Returns:** `boolean`

### public boolean isObjectNoContainerOrEmpty()

**Returns:** `boolean`

### public void dumpContentsInSquare()

**Returns:** `void`

### public boolean isPropaneBBQ()

**Returns:** `boolean`

### public boolean hasPropaneTank()

**Returns:** `boolean`

### public boolean isFireInteractionObject()

**Returns:** `boolean`

### public void setLit(boolean lit)

**Parameters:**
- `boolean` `lit`

**Returns:** `void`

### public boolean isLit()

**Returns:** `boolean`

### public void turnOn()

**Returns:** `void`

### public boolean checkObjectPowered()

**Returns:** `boolean`

### public boolean isStump()

**Returns:** `boolean`

### public boolean isOre()

**Returns:** `boolean`

### public boolean hasAdjacentCanStandSquare()

**Returns:** `boolean`

### public boolean isWindow()

**Returns:** `boolean`

### public boolean isNorthBlocked()

**Returns:** `boolean`

### public boolean isUseSnowSprite()

**Returns:** `boolean`

### public void handleBurning()

**Returns:** `void`

### public boolean isFurnitureOccupied(IsoGameCharacter localCharacter)

**Parameters:**
- `IsoGameCharacter` `localCharacter`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoObject.html`*
