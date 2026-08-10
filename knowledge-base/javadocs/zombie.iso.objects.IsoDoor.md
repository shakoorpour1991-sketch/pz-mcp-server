---
title: zombie.iso.objects.IsoDoor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoDoor

`public class IsoDoor extends IsoObject implements BarricadeAble, Thumpable, IHasHealth, ILockableDoor, ICurtain`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoDoor

## Fields

### public static final int BREAK_SOUND_RADIUS

### public int health

### public boolean lockedByKey

### public boolean locked

### public int maxHealth

### public int pushedMaxStrength

### public int pushedStrength

### public IsoDoor.DoorType type

### public boolean north

### public static final Vector2 tempo

## Constructors

### public IsoDoor(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoDoor(IsoCell cell,
IsoGridSquare gridSquare,
IsoSprite gid,
boolean north)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `IsoSprite` `gid`
- `boolean` `north`

### public IsoDoor(IsoCell cell,
IsoGridSquare gridSquare,
String gid,
boolean north)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `gid`
- `boolean` `north`

### public IsoDoor(IsoCell cell,
IsoGridSquare gridSquare,
String gid,
boolean north,
se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `gid`
- `boolean` `north`
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public String getObjectName()

**Returns:** `String`

### public boolean isOpen()

**Returns:** `boolean`

### public void setOpen(boolean open)

**Parameters:**
- `boolean` `open`

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo info,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `info`
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

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void checkKeyHighlight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public IsoDirections getSpriteEdge(boolean ignoreOpen)

**Parameters:**
- `boolean` `ignoreOpen`

**Returns:** `IsoDirections`

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

### public float getThumpCondition()

**Returns:** `float`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public IsoGridSquare getOtherSideOfDoor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### @Deprecated
public boolean isExteriorDoor(IsoGameCharacter chr)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isExterior()

**Returns:** `boolean`

### public boolean isHoppable()

**Returns:** `boolean`

### public boolean canClimbOver(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean couldBeOpen(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void ToggleDoorActual(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

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

### public void ToggleDoor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void ToggleDoorSilent()

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

### public boolean isLocked()

**Returns:** `boolean`

### public void setLocked(boolean bLocked)

**Parameters:**
- `boolean` `bLocked`

**Returns:** `void`

### public boolean getNorth()

**Returns:** `boolean`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public Vector2 getFacingPositionAlt(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public void setIsLocked(boolean lock)

**Parameters:**
- `boolean` `lock`

**Returns:** `void`

### public IsoSprite getOpenSprite()

**Returns:** `IsoSprite`

### public void setOpenSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public int getKeyId()

**Returns:** `int`

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

### public boolean haveKey()

**Returns:** `boolean`

### public void setHaveKey(boolean haveKey)

**Parameters:**
- `boolean` `haveKey`

**Returns:** `void`

### public IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### public boolean isAdjacentToSquare(IsoGridSquare square2)

**Parameters:**
- `IsoGridSquare` `square2`

**Returns:** `boolean`

### public int checkKeyId()

**Returns:** `int`

### public void setHealth(int health)

**Parameters:**
- `int` `health`

**Returns:** `void`

### public boolean canAddCurtain()

**Returns:** `boolean`

### public IsoDoor HasCurtains()

**Returns:** `IsoDoor`

### public boolean isCurtainOpen()

**Returns:** `boolean`

### public void setCurtainOpen(boolean open)

**Parameters:**
- `boolean` `open`

**Returns:** `void`

### public void transmitSetCurtainOpen(boolean open)

**Parameters:**
- `boolean` `open`

**Returns:** `void`

### public void toggleCurtain()

**Returns:** `void`

### public void addSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void addSheet(boolean inside,
IsoGameCharacter chr)

**Parameters:**
- `boolean` `inside`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void removeSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public IsoGridSquare getAddSheetSquare(IsoGameCharacter chr)

Returns the square the player should stand on to add a sheet.

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getSheetSquare()

Returns the square the player should stand on to open/close/remove a sheet.

**Returns:** `IsoGridSquare`

### public int getHealth()

**Returns:** `int`

### public int getMaxHealth()

**Returns:** `int`

### public boolean isFacingSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

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

### public void addRandomBarricades()

**Returns:** `void`

### public boolean isObstructed()

**Returns:** `boolean`

### public static boolean isDoorObstructed(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public static void toggleDoubleDoor(IsoObject oneOfFour,
boolean doSync)

**Parameters:**
- `IsoObject` `oneOfFour`
- `boolean` `doSync`

**Returns:** `void`

### public static int getDoubleDoorIndex(IsoObject oneOfFour)

**Parameters:**
- `IsoObject` `oneOfFour`

**Returns:** `int`

### public static IsoObject getDoubleDoorObject(IsoObject oneOfFour,
int index)

**Parameters:**
- `IsoObject` `oneOfFour`
- `int` `index`

**Returns:** `IsoObject`

### public static int getDoubleDoorPartnerIndex(int ddIndex)

**Parameters:**
- `int` `ddIndex`

**Returns:** `int`

### public static boolean isDoubleDoorObstructed(IsoObject oneOfFour)

**Parameters:**
- `IsoObject` `oneOfFour`

**Returns:** `boolean`

### public static boolean destroyDoubleDoor(IsoObject oneOfFour)

**Parameters:**
- `IsoObject` `oneOfFour`

**Returns:** `boolean`

### public static int getGarageDoorIndex(IsoObject oneOfThree)

**Parameters:**
- `IsoObject` `oneOfThree`

**Returns:** `int`

### public static IsoObject getGarageDoorPrev(IsoObject oneOfThree)

**Parameters:**
- `IsoObject` `oneOfThree`

**Returns:** `IsoObject`

### public static IsoObject getGarageDoorNext(IsoObject oneOfThree)

**Parameters:**
- `IsoObject` `oneOfThree`

**Returns:** `IsoObject`

### public static IsoObject getGarageDoorFirst(IsoObject oneOfThree)

**Parameters:**
- `IsoObject` `oneOfThree`

**Returns:** `IsoObject`

### public void changeSprite(IsoDoor door)

**Parameters:**
- `IsoDoor` `door`

**Returns:** `void`

### public static void toggleGarageDoor(IsoObject oneOfThree,
boolean doSync)

**Parameters:**
- `IsoObject` `oneOfThree`
- `boolean` `doSync`

**Returns:** `void`

### public static boolean destroyGarageDoor(IsoObject oneOfThree)

**Parameters:**
- `IsoObject` `oneOfThree`

**Returns:** `boolean`

### public IsoObject getRenderEffectMaster()

**Returns:** `IsoObject`

### public int getRenderEffectObjectCount()

**Returns:** `int`

### public IsoObject getRenderEffectObjectByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `IsoObject`

### public String getThumpSound()

**Returns:** `String`

### public String getSoundPrefix()

**Returns:** `String`

### public SpriteModel getSpriteModel()

**Returns:** `SpriteModel`

### public void forEachDoorObject(Consumer<IsoDoor> consumer)

**Parameters:**
- `Consumer<IsoDoor>` `consumer`

**Returns:** `void`

### public static void forEachDoorObject(IsoObject object,
Consumer<IsoObject> consumer)

**Parameters:**
- `IsoObject` `object`
- `Consumer<IsoObject>` `consumer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoDoor.html`*
