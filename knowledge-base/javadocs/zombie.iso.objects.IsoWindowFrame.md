---
title: zombie.iso.objects.IsoWindowFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoWindowFrame

`public class IsoWindowFrame extends IsoObject implements BarricadeAble`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoWindowFrame

## Constructors

### public IsoWindowFrame(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoWindowFrame(IsoCell cell,
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

### public Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### public boolean isBarricaded()

**Returns:** `boolean`

### public boolean isBarricadeAllowed()

**Returns:** `boolean`

### public IsoBarricade getBarricadeOnSameSquare()

**Returns:** `IsoBarricade`

### public IsoBarricade getBarricadeOnOppositeSquare()

**Returns:** `IsoBarricade`

### public IsoBarricade getBarricadeForCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public IsoBarricade getBarricadeOppositeCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### public boolean getNorth()

**Returns:** `boolean`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

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

### public IsoWindow getWindow()

**Returns:** `IsoWindow`

### public boolean hasWindow()

**Returns:** `boolean`

### public boolean canClimbThrough(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public IsoCurtain getCurtain()

**Returns:** `IsoCurtain`

### public IsoCurtain HasCurtains()

**Returns:** `IsoCurtain`

### public IsoGridSquare getAddSheetSquare(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public void addSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public static boolean isWindowFrame(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `boolean`

### public static boolean isWindowFrame(IsoObject o,
boolean north)

**Parameters:**
- `IsoObject` `o`
- `boolean` `north`

**Returns:** `boolean`

### public static int countAddSheetRope(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `int`

### public static boolean canAddSheetRope(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `boolean`

### public static boolean haveSheetRope(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `boolean`

### public static boolean addSheetRope(IsoObject o,
IsoPlayer player,
String itemType)

**Parameters:**
- `IsoObject` `o`
- `IsoPlayer` `player`
- `String` `itemType`

**Returns:** `boolean`

### public static boolean removeSheetRope(IsoObject o,
IsoPlayer player)

**Parameters:**
- `IsoObject` `o`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static IsoGridSquare getOppositeSquare(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `IsoGridSquare`

### public static IsoGridSquare getIndoorSquare(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `IsoGridSquare`

### public static IsoCurtain getCurtain(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `IsoCurtain`

### public static IsoGridSquare getAddSheetSquare(IsoObject o,
IsoGameCharacter chr)

**Parameters:**
- `IsoObject` `o`
- `IsoGameCharacter` `chr`

**Returns:** `IsoGridSquare`

### public static void addSheet(IsoObject o,
IsoGameCharacter chr)

**Parameters:**
- `IsoObject` `o`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public static boolean canClimbThrough(IsoObject o,
IsoGameCharacter chr)

**Parameters:**
- `IsoObject` `o`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoWindowFrame.html`*
