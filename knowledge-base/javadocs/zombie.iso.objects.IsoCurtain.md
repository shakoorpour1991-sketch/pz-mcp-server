---
title: zombie.iso.objects.IsoCurtain
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoCurtain

`public class IsoCurtain extends IsoObject implements ICurtain`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoCurtain

## Fields

### public boolean barricaded

### public Integer barricadeMaxStrength

### public Integer barricadeStrength

### public Integer health

### public boolean locked

### public Integer maxHealth

### public Integer pushedMaxStrength

### public Integer pushedStrength

### public boolean north

### public boolean open

## Constructors

### public IsoCurtain(IsoCell cell,
IsoGridSquare gridSquare,
IsoSprite gid,
boolean north,
boolean spriteclosed)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `IsoSprite` `gid`
- `boolean` `north`
- `boolean` `spriteclosed`

### public IsoCurtain(IsoCell cell,
IsoGridSquare gridSquare,
String gid,
boolean north)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `String` `gid`
- `boolean` `north`

### public IsoCurtain(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public void removeSheet(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

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

### public boolean getNorth()

**Returns:** `boolean`

### public boolean IsOpen()

**Returns:** `boolean`

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean canInteractWith(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public IsoGridSquare getOppositeSquare()

**Returns:** `IsoGridSquare`

### public boolean isAdjacentToSquare(IsoGridSquare square1,
IsoGridSquare square2)

**Parameters:**
- `IsoGridSquare` `square1`
- `IsoGridSquare` `square2`

**Returns:** `boolean`

### public boolean isAdjacentToSquare(IsoGridSquare square2)

**Parameters:**
- `IsoGridSquare` `square2`

**Returns:** `boolean`

### public IsoObject.VisionResult TestVision(IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `IsoObject.VisionResult`

### public void ToggleDoor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void ToggleDoorSilent()

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

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`

**Returns:** `void`

### public IsoObject getObjectAttachedTo()

**Returns:** `IsoObject`

### public String getSoundPrefix()

**Returns:** `String`

### public static boolean isSheet(IsoObject curtain)

**Parameters:**
- `IsoObject` `curtain`

**Returns:** `boolean`

### public boolean isCurtainOpen()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoCurtain.html`*
