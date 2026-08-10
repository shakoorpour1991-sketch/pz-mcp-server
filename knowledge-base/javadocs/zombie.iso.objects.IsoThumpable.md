---
title: zombie.iso.objects.IsoThumpable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoThumpable

`public class IsoThumpable extends IsoObject implements BarricadeAble, Thumpable, IHasHealth, ILockableDoor`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoThumpable

## Fields

### public static final int BREAK_SOUND_RADIUS

### public static final SoundKey DEFAULT_BREAK_SOUND

### public boolean locked

### public int health

### public int pushedMaxStrength

### public int pushedStrength

### public boolean north

### public boolean open

### public IsoSprite openSprite

### public boolean canPassThrough

### public int keyId

### public boolean lockedByPadlock

### public int lockedByCode

### public int oldNumPlanks

### public String thumpSound

### public static final Vector2 tempo

## Constructors

### public IsoThumpable(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoThumpable(IsoCell cell,
IsoGridSquare gridSquare,
String closedSprite,
String openSprite,
boolean north,
se.krka.kahlua.vm.KahluaTable table)

Create an object than can be interacted by you, survivor or zombie (destroy, barricade, etc.) This one have a closed/openSprite so it can be a
door for example

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `closedSprite`
- `String` `openSprite`
- `boolean` `north`
- `se.krka.kahlua.vm.KahluaTable` `table`

### public IsoThumpable(IsoCell cell,
IsoGridSquare gridSquare,
String sprite,
boolean north,
se.krka.kahlua.vm.KahluaTable table)

Create an object than can be interacted by you, survivor or zombie (destroy, barricade, etc.) This one can be a wall, a fence, etc.

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `sprite`
- `boolean` `north`
- `se.krka.kahlua.vm.KahluaTable` `table`

### public IsoThumpable(IsoCell cell,
IsoGridSquare gridSquare,
String sprite,
boolean north)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `sprite`
- `boolean` `north`

## Methods

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setModData(se.krka.kahlua.vm.KahluaTable modData)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `modData`

**Returns:** `void`

### public boolean hasModData()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getBuildMaterials()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public boolean hasBuildMaterials()

**Returns:** `boolean`

### public boolean isCanPassThrough()

Can you pass through the item, if false we gonna test the collide default to false (so it collide)

**Returns:** `boolean`

### public void setCanPassThrough(boolean pCanPassThrough)

**Parameters:**
- `boolean` `pCanPassThrough`

**Returns:** `void`

### public boolean isBlockAllTheSquare()

**Returns:** `boolean`

### public void setBlockAllTheSquare(boolean blockAllTheSquare)

**Parameters:**
- `boolean` `blockAllTheSquare`

**Returns:** `void`

### public void setIsDismantable(boolean dismantable)

**Parameters:**
- `boolean` `dismantable`

**Returns:** `void`

### public boolean isDismantable()

**Returns:** `boolean`

### public float getCrossSpeed()

**Returns:** `float`

### public void setCrossSpeed(float pCrossSpeed)

**Parameters:**
- `float` `pCrossSpeed`

**Returns:** `void`

### public void setIsFloor(boolean pIsFloor)

**Parameters:**
- `boolean` `pIsFloor`

**Returns:** `void`

### public boolean isCorner()

**Returns:** `boolean`

### public boolean isFloor()

**Returns:** `boolean`

### public void setIsContainer(boolean pIsContainer)

**Parameters:**
- `boolean` `pIsContainer`

**Returns:** `void`

### public void setIsStairs(boolean pStairs)

**Parameters:**
- `boolean` `pStairs`

**Returns:** `void`

### public boolean isStairs()

**Returns:** `boolean`

### public boolean isWindowN()

**Returns:** `boolean`

### public boolean isWindowW()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public void setCorner(boolean pCorner)

**Parameters:**
- `boolean` `pCorner`

**Returns:** `void`

### public void setCanBarricade(boolean pCanBarricade)

Can you barricade/unbarricade the item default true

**Parameters:**
- `boolean` `pCanBarricade`

**Returns:** `void`

### public boolean getCanBarricade()

Can you barricade/unbarricade the item

**Returns:** `boolean`

### public void setHealth(int health)

**Parameters:**
- `int` `health`

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public void setMaxHealth(int maxHealth)

**Parameters:**
- `int` `maxHealth`

**Returns:** `void`

### public int getMaxHealth()

**Returns:** `int`

### public void setThumpDmg(Integer pThumpDmg)

Numbers of zeds need to hurt the object default 8

**Parameters:**
- `Integer` `pThumpDmg`

**Returns:** `void`

### public int getThumpDmg()

**Returns:** `int`

### public void setBreakSound(String pBreakSound)

The sound that be played if this object is broken default "BreakDoor"

**Parameters:**
- `String` `pBreakSound`

**Returns:** `void`

### public String getBreakSound()

**Returns:** `String`

### public boolean isDoor()

**Returns:** `boolean`

### public boolean getNorth()

**Returns:** `boolean`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public boolean isDoorFrame()

**Returns:** `boolean`

### public void setIsDoor(boolean pIsDoor)

**Parameters:**
- `boolean` `pIsDoor`

**Returns:** `void`

### public void setIsDoorFrame(boolean pIsDoorFrame)

**Parameters:**
- `boolean` `pIsDoorFrame`

**Returns:** `void`

### public void setSprite(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `void`

### public void setSpriteFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setClosedSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void setOpenSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

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

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public boolean isDestroyed()

**Returns:** `boolean`

### public boolean IsOpen()

**Returns:** `boolean`

### public boolean IsStrengthenedByPushedItems()

**Returns:** `boolean`

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

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

### public void Thump(IsoMovingObject thumper,
int thumpEventCount)

**Parameters:**
- `IsoMovingObject` `thumper`
- `int` `thumpEventCount`

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

### public float getThumpCondition()

**Returns:** `float`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public IsoGridSquare getOtherSideOfDoor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public void changeSprite(IsoThumpable thumpable)

**Parameters:**
- `IsoThumpable` `thumpable`

**Returns:** `void`

### public boolean couldBeOpen(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void ToggleDoorActual(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void ToggleDoor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void ToggleDoorSilent()

**Returns:** `void`

### public boolean isObstructed()

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

### public void createLightSource(int radius,
int offsetX,
int offsetY,
int offsetZ,
int life,
String lightSourceFuel,
InventoryItem baseItem,
IsoGameCharacter chr)

**Parameters:**
- `int` `radius`
- `int` `offsetX`
- `int` `offsetY`
- `int` `offsetZ`
- `int` `life`
- `String` `lightSourceFuel`
- `InventoryItem` `baseItem`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public InventoryItem insertNewFuel(InventoryItem item,
IsoGameCharacter chr)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public InventoryItem removeCurrentFuel(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public void update()

**Returns:** `void`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public IsoBarricade getBarricadeOnSameSquare()

**Returns:** `IsoBarricade`

### public IsoBarricade getBarricadeOnOppositeSquare()

**Returns:** `IsoBarricade`

### public boolean isBarricaded()

**Returns:** `boolean`

### public boolean isBarricadeAllowed()

**Returns:** `boolean`

### public IsoBarricade getBarricadeForCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public IsoBarricade getBarricadeOppositeCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public void setIsDoor(Boolean pIsDoor)

**Parameters:**
- `Boolean` `pIsDoor`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table` — the table to set

**Returns:** `void`

### public boolean canBePlastered()

**Returns:** `boolean`

### public void setCanBePlastered(boolean canBePlastered)

**Parameters:**
- `boolean` `canBePlastered`

**Returns:** `void`

### public boolean isPaintable()

**Returns:** `boolean`

### public void setPaintable(boolean paintable)

**Parameters:**
- `boolean` `paintable`

**Returns:** `void`

### public boolean isLocked()

**Returns:** `boolean`

### public void setIsLocked(boolean lock)

**Parameters:**
- `boolean` `lock`

**Returns:** `void`

### public boolean isThumpable()

**Returns:** `boolean`

### public void setIsThumpable(boolean thumpable)

**Parameters:**
- `boolean` `thumpable`

**Returns:** `void`

### public void setIsHoppable(boolean isHoppable)

**Parameters:**
- `boolean` `isHoppable`

**Returns:** `void`

### public IsoSprite getOpenSprite()

**Returns:** `IsoSprite`

### public boolean isHoppable()

**Returns:** `boolean`

### public boolean isTallHoppable()

**Returns:** `boolean`

### public void setHoppable(boolean isHoppable)

**Parameters:**
- `boolean` `isHoppable`

**Returns:** `void`

### public int getLightSourceRadius()

**Returns:** `int`

### public void setLightSourceRadius(int lightSourceRadius)

**Parameters:**
- `int` `lightSourceRadius`

**Returns:** `void`

### public int getLightSourceXOffset()

**Returns:** `int`

### public void setLightSourceXOffset(int lightSourceXOffset)

**Parameters:**
- `int` `lightSourceXOffset`

**Returns:** `void`

### public int getLightSourceYOffset()

**Returns:** `int`

### public void setLightSourceYOffset(int lightSourceYOffset)

**Parameters:**
- `int` `lightSourceYOffset`

**Returns:** `void`

### public int getLightSourceLife()

**Returns:** `int`

### public void setLightSourceLife(int lightSourceLife)

**Parameters:**
- `int` `lightSourceLife`

**Returns:** `void`

### public boolean isLightSourceOn()

**Returns:** `boolean`

### public void setLightSourceOn(boolean lightSourceOn)

**Parameters:**
- `boolean` `lightSourceOn`

**Returns:** `void`

### public IsoLightSource getLightSource()

**Returns:** `IsoLightSource`

### public void setLightSource(IsoLightSource lightSource)

**Parameters:**
- `IsoLightSource` `lightSource`

**Returns:** `void`

### public void toggleLightSource(boolean toggle)

**Parameters:**
- `boolean` `toggle`

**Returns:** `void`

### public String getLightSourceFuel()

**Returns:** `String`

### public void setLightSourceFuel(String lightSourceFuel)

**Parameters:**
- `String` `lightSourceFuel`

**Returns:** `void`

### public float getLifeLeft()

**Returns:** `float`

### public void setLifeLeft(float lifeLeft)

**Parameters:**
- `float` `lifeLeft`

**Returns:** `void`

### public float getLifeDelta()

**Returns:** `float`

### public void setLifeDelta(float lifeDelta)

**Parameters:**
- `float` `lifeDelta`

**Returns:** `void`

### public boolean haveFuel()

**Returns:** `boolean`

### public void setHaveFuel(boolean haveFuel)

**Parameters:**
- `boolean` `haveFuel`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

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

### public IsoCurtain HasCurtains()

**Returns:** `IsoCurtain`

### public boolean canAddCurtain()

**Returns:** `boolean`

### public IsoGridSquare getInsideSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### public boolean isAdjacentToSquare(IsoGridSquare square2)

**Parameters:**
- `IsoGridSquare` `square2`

**Returns:** `boolean`

### public IsoGridSquare getAddSheetSquare(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public void addSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public IsoGridSquare getIndoorSquare()

**Returns:** `IsoGridSquare`

### public int getKeyId()

**Returns:** `int`

### public void setKeyId(int keyId,
boolean doNetwork)

**Parameters:**
- `int` `keyId`
- `boolean` `doNetwork`

**Returns:** `void`

### public void setKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `void`

### public boolean isLockedByKey()

**Returns:** `boolean`

### public void setLockedByKey(boolean lockedByKey)

**Parameters:**
- `boolean` `lockedByKey`

**Returns:** `void`

### public void setLockedByKey(boolean lockedByKey,
boolean doSync)

**Parameters:**
- `boolean` `lockedByKey`
- `boolean` `doSync`

**Returns:** `void`

### public boolean isLockedByPadlock()

**Returns:** `boolean`

### public void syncIsoThumpable()

**Returns:** `void`

### public void setLockedByPadlock(boolean lockedByPadlock)

**Parameters:**
- `boolean` `lockedByPadlock`

**Returns:** `void`

### public boolean canBeLockByPadlock()

**Returns:** `boolean`

### public void setCanBeLockByPadlock(boolean canBeLockByPadlock)

**Parameters:**
- `boolean` `canBeLockByPadlock`

**Returns:** `void`

### public int getLockedByCode()

**Returns:** `int`

### public void setLockedByCode(int lockedByCode)

**Parameters:**
- `int` `lockedByCode`

**Returns:** `void`

### public boolean isLockedToCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canClimbOver(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canClimbThrough(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public String getThumpSound()

**Returns:** `String`

### public void setThumpSound(String thumpSound)

**Parameters:**
- `String` `thumpSound`

**Returns:** `void`

### public IsoObject getRenderEffectMaster()

**Returns:** `IsoObject`

### public IsoDirections getSpriteEdge(boolean ignoreOpen)

**Parameters:**
- `boolean` `ignoreOpen`

**Returns:** `IsoDirections`

### public String getSoundPrefix()

**Returns:** `String`

### public static String GetBreakFurnitureSound(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `String`

### public static String GetBreakFurnitureSound(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `String`

### public void checkKeyHighlight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

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

### public SpriteModel getSpriteModel()

**Returns:** `SpriteModel`

### public void animalHit(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public String getClosedSpriteTextureName()

**Returns:** `String`

### public void afterRotated()

**Returns:** `void`

### public void forEachDoorObject(Consumer<IsoThumpable> consumer)

**Parameters:**
- `Consumer<IsoThumpable>` `consumer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoThumpable.html`*
