---
title: zombie.iso.LosUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.LosUtil

`public final class LosUtil extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.LosUtil

## Fields

### public static int sizeX

### public static int sizeY

### public static int sizeZ

### public static LosUtil.PerPlayerData[] cachedresults

### public static boolean[] cachecleared

## Constructors

### public LosUtil()

## Methods

### public static void init(int width,
int height)

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `void`

### public static LosUtil.TestResults lineClear(IsoCell cell,
int x0,
int y0,
int z0,
int x1,
int y1,
int z1,
boolean bIgnoreDoors)

**Parameters:**
- `IsoCell` `cell`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `boolean` `bIgnoreDoors`

**Returns:** `LosUtil.TestResults`

### public static LosUtil.TestResults lineClear(IsoCell cell,
int x0,
int y0,
int z0,
int x1,
int y1,
int z1,
boolean bIgnoreDoors,
int rangeTillWindows)

**Parameters:**
- `IsoCell` `cell`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `boolean` `bIgnoreDoors`
- `int` `rangeTillWindows`

**Returns:** `LosUtil.TestResults`

### public static boolean lineClearCollide(int x1,
int y1,
int z1,
int x0,
int y0,
int z0,
boolean bIgnoreDoors)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `boolean` `bIgnoreDoors`

**Returns:** `boolean`

### public static int lineClearCollideCount(IsoGameCharacter chr,
IsoCell cell,
int x1,
int y1,
int z1,
int x0,
int y0,
int z0)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoCell` `cell`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x0`
- `int` `y0`
- `int` `z0`

**Returns:** `int`

### public static LosUtil.TestResults lineClearCached(IsoCell cell,
int x1,
int y1,
int z1,
int x0,
int y0,
int z0,
boolean bIgnoreDoors,
int playerIndex)

**Parameters:**
- `IsoCell` `cell`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `boolean` `bIgnoreDoors`
- `int` `playerIndex`

**Returns:** `LosUtil.TestResults`

### public static IsoGridSquareCollisionData getFirstBlockingIsoGridSquare(IsoCell cell,
int x0,
int y0,
int z0,
int x1,
int y1,
int z1,
boolean bIgnoreDoors)

**Parameters:**
- `IsoCell` `cell`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `boolean` `bIgnoreDoors`

**Returns:** `IsoGridSquareCollisionData`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\LosUtil.html`*
