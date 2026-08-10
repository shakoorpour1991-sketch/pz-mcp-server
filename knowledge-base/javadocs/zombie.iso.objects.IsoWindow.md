---
title: zombie.iso.objects.IsoWindow
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoWindow

`public class IsoWindow extends IsoObject implements BarricadeAble, Thumpable`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoWindow

## Fields

### public static final float WeaponDoorDamageModifier

### public static final float NoWeaponDoorDamage

### public static final int SMASH_SOUND_RADIUS

## Constructors

### public IsoWindow(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoWindow(IsoCell cell,
IsoGridSquare gridSquare,
IsoSprite gid,
boolean north)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `IsoSprite` `gid`
- `boolean` `north`

## Methods

### public String getObjectName()

**Returns:** `String`

### public IsoCurtain HasCurtains()

**Returns:** `IsoCurtain`

### public IsoGridSquare getIndoorSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getAddSheetSquare(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public void AttackObject(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public IsoGridSquare getInsideSquare()

**Returns:** `IsoGridSquare`

### public IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### public boolean isExterior()

**Returns:** `boolean`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void smashWindow(boolean bRemote,
boolean doAlarm)

**Parameters:**
- `boolean` `bRemote`
- `boolean` `doAlarm`

**Returns:** `void`

### public void smashWindow(boolean bRemote)

**Parameters:**
- `boolean` `bRemote`

**Returns:** `void`

### public void smashWindow()

**Returns:** `void`

### public void addBrokenGlass(IsoMovingObject chr)

**Parameters:**
- `IsoMovingObject` `chr`

**Returns:** `void`

### public void addBrokenGlass(boolean onOppositeSquare)

**Parameters:**
- `boolean` `onOppositeSquare`

**Returns:** `void`

### public boolean isDestroyed()

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

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

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

### public void openCloseCurtain(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void removeSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void addSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void ToggleWindow(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public static boolean isTopOfSheetRopeHere(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public static boolean isTopOfSheetRopeHere(IsoGridSquare sq,
boolean north)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`

**Returns:** `boolean`

### public boolean haveSheetRope()

**Returns:** `boolean`

### public static boolean isSheetRopeHere(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public static boolean canClimbHere(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public static int countAddSheetRope(IsoGridSquare sq,
boolean north)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`

**Returns:** `int`

### public int countAddSheetRope()

**Returns:** `int`

### public static boolean canAddSheetRope(IsoGridSquare sq,
boolean north)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`

**Returns:** `boolean`

### public boolean canAddSheetRope()

**Returns:** `boolean`

### public boolean addSheetRope(IsoPlayer player,
String itemType)

**Parameters:**
- `IsoPlayer` `player`
- `String` `itemType`

**Returns:** `boolean`

### public static boolean addSheetRope(IsoPlayer player,
IsoGridSquare sq,
boolean north,
String itemType)

**Parameters:**
- `IsoPlayer` `player`
- `IsoGridSquare` `sq`
- `boolean` `north`
- `String` `itemType`

**Returns:** `boolean`

### public boolean removeSheetRope(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static boolean removeSheetRope(IsoPlayer player,
IsoGridSquare square,
boolean north)

**Parameters:**
- `IsoPlayer` `player`
- `IsoGridSquare` `square`
- `boolean` `north`

**Returns:** `boolean`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public boolean isLocked()

**Returns:** `boolean`

### public boolean isSmashed()

**Returns:** `boolean`

### public boolean isInvincible()

**Returns:** `boolean`

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

### public boolean getNorth()

**Returns:** `boolean`

### public Vector2 getFacingPosition(Vector2 pos)

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

### public void setSmashed(boolean destroyed)

**Parameters:**
- `boolean` `destroyed`

**Returns:** `void`

### public IsoSprite getSmashedSprite()

**Returns:** `IsoSprite`

### public void setSmashedSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void setPermaLocked(Boolean permaLock)

**Parameters:**
- `Boolean` `permaLock`

**Returns:** `void`

### public boolean isPermaLocked()

**Returns:** `boolean`

### public static boolean canClimbThroughHelper(IsoGameCharacter chr,
IsoGridSquare sq,
IsoGridSquare oppositeSq,
boolean north)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoGridSquare` `sq`
- `IsoGridSquare` `oppositeSq`
- `boolean` `north`

**Returns:** `boolean`

### public boolean canClimbThrough(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public IsoGameCharacter getFirstCharacterClimbingThrough()

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter getFirstCharacterClimbingThrough(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter getFirstCharacterClosing()

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter getFirstCharacterClosing(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `IsoGameCharacter`

### public boolean isGlassRemoved()

**Returns:** `boolean`

### public void setGlassRemoved(boolean removed)

**Parameters:**
- `boolean` `removed`

**Returns:** `void`

### public void removeBrokenGlass()

**Returns:** `void`

### public IsoBarricade addBarricadesDebug(int numPlanks,
boolean metal)

**Parameters:**
- `int` `numPlanks`
- `boolean` `metal`

**Returns:** `IsoBarricade`

### public void addRandomBarricades()

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public boolean IsOpen()

**Returns:** `boolean`

### public boolean isNorth()

**Returns:** `boolean`

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean canAttackBypassIsoBarricade(IsoGameCharacter isoGameCharacter,
HandWeapon handWeapon)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `handWeapon`

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public static void resetCurrentCellWindows()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoWindow.html`*
