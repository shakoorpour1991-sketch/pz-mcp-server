---
title: zombie.iso.CellLoader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.CellLoader

`public final class CellLoader extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.CellLoader

## Fields

### public static final ObjectCache<IsoObject> isoObjectCache

### public static final ObjectCache<IsoTree> isoTreeCache

### public static final HashMap<IsoSprite, IsoSprite> glassRemovedWindowSpriteMap

### public static final HashMap<IsoSprite, IsoSprite> smashedWindowSpriteMap

## Constructors

### public CellLoader()

## Methods

### public static void DoTileObjectCreation(IsoSprite spr,
IsoObjectType type,
IsoGridSquare sq,
IsoCell cell,
int x,
int y,
int height,
String name)
throws NumberFormatException

**Parameters:**
- `IsoSprite` `spr`
- `IsoObjectType` `type`
- `IsoGridSquare` `sq`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `height`
- `String` `name`

**Returns:** `void`

### public static boolean LoadCellBinaryChunk(IsoCell cell,
int wx,
int wy,
IsoChunk chunk)

**Parameters:**
- `IsoCell` `cell`
- `int` `wx`
- `int` `wy`
- `IsoChunk` `chunk`

**Returns:** `boolean`

### public static IsoCell LoadCellBinaryChunk(IsoSpriteManager spr,
int wx,
int wy)
throws IOException

**Parameters:**
- `IsoSpriteManager` `spr`
- `int` `wx`
- `int` `wy`

**Returns:** `IsoCell`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\CellLoader.html`*
