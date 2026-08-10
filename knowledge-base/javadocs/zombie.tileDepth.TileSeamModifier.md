---
title: zombie.tileDepth.TileSeamModifier
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileSeamModifier

`public class TileSeamModifier extends Object implements Consumer<TextureDraw>`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileSeamModifier

## Fields

### public static TileSeamModifier instance

## Constructors

### public TileSeamModifier()

## Methods

### public void accept(TextureDraw textureDraw)

**Parameters:**
- `TextureDraw` `textureDraw`

**Returns:** `void`

### public void setVertColors(int col0,
int col1,
int col2,
int col3)

**Parameters:**
- `int` `col0`
- `int` `col1`
- `int` `col2`
- `int` `col3`

**Returns:** `void`

### public void setAlpha4(float alpha)

**Parameters:**
- `float` `alpha`

**Returns:** `void`

### public void setShore(boolean isShore)

**Parameters:**
- `boolean` `isShore`

**Returns:** `void`

### public void setWaterDepth(float val0,
float val1,
float val2,
float val3)

**Parameters:**
- `float` `val0`
- `float` `val1`
- `float` `val2`
- `float` `val3`

**Returns:** `void`

### public void setTintColor(int tintABGR)

**Parameters:**
- `int` `tintABGR`

**Returns:** `void`

### public void setupFloorDepth(IsoSprite sprite,
TileSeamManager.Tiles tiles)

**Parameters:**
- `IsoSprite` `sprite`
- `TileSeamManager.Tiles` `tiles`

**Returns:** `void`

### public void setupFloorDepth(IsoSprite sprite,
TileSeamManager.Tiles tiles,
TileDepthTexture depthTexture)

**Parameters:**
- `IsoSprite` `sprite`
- `TileSeamManager.Tiles` `tiles`
- `TileDepthTexture` `depthTexture`

**Returns:** `void`

### public void setupWallDepth(IsoSprite sprite,
IsoDirections dir)

**Parameters:**
- `IsoSprite` `sprite`
- `IsoDirections` `dir`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileSeamModifier.html`*
