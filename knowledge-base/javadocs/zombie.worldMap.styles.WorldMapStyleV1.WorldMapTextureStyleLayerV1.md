---
title: zombie.worldMap.styles.WorldMapStyleV1.WorldMapTextureStyleLayerV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapStyleV1.WorldMapTextureStyleLayerV1

`public static class WorldMapStyleV1.WorldMapTextureStyleLayerV1 extends WorldMapStyleV1.WorldMapStyleLayerV1`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleV1.WorldMapStyleLayerV1
- zombie.worldMap.styles.WorldMapStyleV1.WorldMapTextureStyleLayerV1

## Methods

### public void addFill(float zoom,
int r,
int g,
int b,
int a)

**Parameters:**
- `float` `zoom`
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void addTexture(float zoom,
String texturePath)

**Parameters:**
- `float` `zoom`
- `String` `texturePath`

**Returns:** `void`

### public void removeFill(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void removeAllFill()

**Returns:** `void`

### public void removeTexture(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void removeAllTexture()

**Returns:** `void`

### public void moveFill(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void moveTexture(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void setBoundsInSquares(int minX,
int minY,
int maxX,
int maxY)

**Parameters:**
- `int` `minX`
- `int` `minY`
- `int` `maxX`
- `int` `maxY`

**Returns:** `void`

### public int getMinXInSquares()

**Returns:** `int`

### public int getMinYInSquares()

**Returns:** `int`

### public int getMaxXInSquares()

**Returns:** `int`

### public int getMaxYInSquares()

**Returns:** `int`

### public int getWidthInSquares()

**Returns:** `int`

### public int getHeightInSquares()

**Returns:** `int`

### public void setTile(boolean tile)

**Parameters:**
- `boolean` `tile`

**Returns:** `void`

### public boolean isTile()

**Returns:** `boolean`

### public void setUseWorldBounds(boolean useWorldBounds)

**Parameters:**
- `boolean` `useWorldBounds`

**Returns:** `void`

### public boolean isUseWorldBounds()

**Returns:** `boolean`

### public int getFillStops()

**Returns:** `int`

### public void setFillRGBA(int index,
int r,
int g,
int b,
int a)

**Parameters:**
- `int` `index`
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void setFillZoom(int index,
float zoom)

**Parameters:**
- `int` `index`
- `float` `zoom`

**Returns:** `void`

### public float getFillZoom(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public int getFillRed(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillGreen(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillBlue(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillAlpha(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getTextureStops()

**Returns:** `int`

### public void setTextureZoom(int index,
float zoom)

**Parameters:**
- `int` `index`
- `float` `zoom`

**Returns:** `void`

### public float getTextureZoom(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public void setTexturePath(int index,
String texturePath)

**Parameters:**
- `int` `index`
- `String` `texturePath`

**Returns:** `void`

### public String getTexturePath(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public Texture getTexture(int index)

**Parameters:**
- `int` `index`

**Returns:** `Texture`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapStyleV1.WorldMapTextureStyleLayerV1.html`*
