---
title: zombie.iso.weather.fx.WeatherFxMask
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather.fx
---

# zombie.iso.weather.fx.WeatherFxMask

`public class WeatherFxMask extends Object`

**Kind:** class · **Package:** zombie.iso.weather.fx

## Inheritance
- java.lang.Object
- zombie.iso.weather.fx.WeatherFxMask

## Fields

### public static IsoSprite floorSprite

### public static IsoSprite wallNSprite

### public static IsoSprite wallWSprite

### public static IsoSprite wallNWSprite

### public static IsoSprite wallSESprite

### public static final int BIT_FLOOR

### public static final int BIT_WALLN

### public static final int BIT_WALLW

### public static final int BIT_IS_CUT

### public static final int BIT_CHARS

### public static final int BIT_OBJECTS

### public static final int BIT_WALL_SE

### public static final int BIT_DOOR

### public static float offsetX

### public static float offsetY

### public static ColorInfo defColorInfo

### public int x

### public int y

### public int z

### public int flags

### public IsoGridSquare gs

### public boolean enabled

### public static boolean maskingEnabled

## Constructors

### public WeatherFxMask()

## Methods

### public static TextureFBO getFboMask()

**Returns:** `TextureFBO`

### public static TextureFBO getFboParticles()

**Returns:** `TextureFBO`

### public static boolean isRenderingMask()

**Returns:** `boolean`

### public static void init()
throws Exception

**Returns:** `void`

### public static boolean checkFbos()

**Returns:** `boolean`

### public static void destroy()

**Returns:** `void`

### public static void initMask()

**Returns:** `void`

### public boolean isLoc(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public static boolean playerHasMaskToDraw(int plrIndex)

**Parameters:**
- `int` `plrIndex`

**Returns:** `boolean`

### public static void setDiamondIterDone(int plrIndex)

**Parameters:**
- `int` `plrIndex`

**Returns:** `void`

### public static void forceMaskUpdate(int plrIndex)

**Parameters:**
- `int` `plrIndex`

**Returns:** `void`

### public static void forceMaskUpdateAll()

**Returns:** `void`

### public static void addMaskLocation(IsoGridSquare gs,
int x,
int y,
int z)

**Parameters:**
- `IsoGridSquare` `gs`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public static boolean checkVisibleSquares(int playerIndex,
int z)

**Parameters:**
- `int` `playerIndex`
- `int` `z`

**Returns:** `boolean`

### public static void renderFxMask(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\fx\WeatherFxMask.html`*
