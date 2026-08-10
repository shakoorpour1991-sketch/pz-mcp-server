---
title: zombie.iso.IsoUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoUtils

`public final class IsoUtils extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoUtils

## Constructors

### public IsoUtils()

## Methods

### public static float clamp(float x,
float minVal,
float maxVal)

**Parameters:**
- `float` `x`
- `float` `minVal`
- `float` `maxVal`

**Returns:** `float`

### public static float lerp(float val,
float min,
float max)

**Parameters:**
- `float` `val`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static float smoothstep(float edge0,
float edge1,
float x)

**Parameters:**
- `float` `edge0`
- `float` `edge1`
- `float` `x`

**Returns:** `float`

### public static float DistanceTo(float fromX,
float fromY,
float toX,
float toY)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`

**Returns:** `float`

### public static float DistanceTo2D(float fromX,
float fromY,
float toX,
float toY)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`

**Returns:** `float`

### public static float DistanceTo(float fromX,
float fromY,
float fromZ,
float toX,
float toY,
float toZ)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `fromZ`
- `float` `toX`
- `float` `toY`
- `float` `toZ`

**Returns:** `float`

### public static float DistanceToSquared(float fromX,
float fromY,
float fromZ,
float toX,
float toY,
float toZ)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `fromZ`
- `float` `toX`
- `float` `toY`
- `float` `toZ`

**Returns:** `float`

### public static float DistanceToSquared(float fromX,
float fromY,
float toX,
float toY)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`

**Returns:** `float`

### public static float DistanceManhatten(float fromX,
float fromY,
float toX,
float toY)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`

**Returns:** `float`

### public static float DistanceManhatten(float fromX,
float fromY,
float toX,
float toY,
float fromZ,
float toZ)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `float` `fromZ`
- `float` `toZ`

**Returns:** `float`

### public static float DistanceManhattenSquare(float fromX,
float fromY,
float toX,
float toY)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`

**Returns:** `float`

### public static float XToIso(float screenX,
float screenY,
float floor)

**Parameters:**
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public static float XToIso(int playerIndex,
float screenX,
float screenY,
float floor)

**Parameters:**
- `int` `playerIndex`
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public static float XToIsoTrue(float screenX,
float screenY,
int floor)

**Parameters:**
- `float` `screenX`
- `float` `screenY`
- `int` `floor`

**Returns:** `float`

### public static float XToScreen(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static float XToScreenInt(int objectX,
int objectY,
int objectZ,
int screenZ)

**Parameters:**
- `int` `objectX`
- `int` `objectY`
- `int` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static float YToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static float XToScreenExact(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static float YToIso(float screenX,
float screenY,
float floor)

**Parameters:**
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public static float YToIso(int playerIndex,
float screenX,
float screenY,
float floor)

**Parameters:**
- `int` `playerIndex`
- `float` `screenX`
- `float` `screenY`
- `float` `floor`

**Returns:** `float`

### public static float YToScreen(float objectX,
float objectY,
float objectZ,
int screenZ)

**Parameters:**
- `float` `objectX`
- `float` `objectY`
- `float` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static float YToScreenInt(int objectX,
int objectY,
int objectZ,
int screenZ)

**Parameters:**
- `int` `objectX`
- `int` `objectY`
- `int` `objectZ`
- `int` `screenZ`

**Returns:** `float`

### public static boolean isSimilarDirection(IsoGameCharacter chr,
float xA,
float yA,
float xB,
float yB,
float similar)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `xA`
- `float` `yA`
- `float` `xB`
- `float` `yB`
- `float` `similar`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoUtils.html`*
