---
title: zombie.iso.IsoDepthHelper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoDepthHelper

`public class IsoDepthHelper extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoDepthHelper

## Fields

### public static final float CHUNK_DEPTH

### public static final float SQUARE_DEPTH

### public static final float LEVEL_DEPTH

### public static final int CHUNK_WIDTH_OF_DEPTH_BUFFER

## Constructors

### public IsoDepthHelper()

## Methods

### public static IsoDepthHelper.Results getChunkDepthData(int centreWX,
int centreWY,
int wx,
int wy,
int level)

**Parameters:**
- `int` `centreWX`
- `int` `centreWY`
- `int` `wx`
- `int` `wy`
- `int` `level`

**Returns:** `IsoDepthHelper.Results`

### public static IsoDepthHelper.Results getDepthSize()

**Returns:** `IsoDepthHelper.Results`

### public static float calculateDepth(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static IsoDepthHelper.Results getSquareDepthData(int centreX,
int centreY,
float x,
float y,
float z)

**Parameters:**
- `int` `centreX`
- `int` `centreY`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `IsoDepthHelper.Results`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoDepthHelper.html`*
