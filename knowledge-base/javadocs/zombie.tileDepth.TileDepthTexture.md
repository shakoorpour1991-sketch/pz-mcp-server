---
title: zombie.tileDepth.TileDepthTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileDepthTexture

`public final class TileDepthTexture extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileDepthTexture

## Constructors

### public TileDepthTexture(TilesetDepthTexture tileset,
int tileIndex)

**Parameters:**
- `TilesetDepthTexture` `tileset`
- `int` `tileIndex`

## Methods

### public TilesetDepthTexture getTileset()

**Returns:** `TilesetDepthTexture`

### public int getIndex()

**Returns:** `int`

### public int getColumn()

**Returns:** `int`

### public int getRow()

**Returns:** `int`

### public String getName()

**Returns:** `String`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public float[] getPixels()

**Returns:** `float[]`

### public void setPixel(int x,
int y,
float pixel)

**Parameters:**
- `int` `x`
- `int` `y`
- `float` `pixel`

**Returns:** `void`

### public float getPixel(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `float`

### public void setMinPixel(int x,
int y,
float pixel)

**Parameters:**
- `int` `x`
- `int` `y`
- `float` `pixel`

**Returns:** `void`

### public void setPixels(int x,
int y,
int w,
int h,
float pixel)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `float` `pixel`

**Returns:** `void`

### public void replacePixels(int x,
int y,
int w,
int h,
float oldPixel,
float newPixel)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `float` `oldPixel`
- `float` `newPixel`

**Returns:** `void`

### public int index(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public void save()
throws Exception

**Returns:** `void`

### public boolean fileExists()

**Returns:** `boolean`

### public Texture getTexture()

**Returns:** `Texture`

### public void updateGPUTexture()

**Returns:** `void`

### public void reload()
throws Exception

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileDepthTexture.html`*
