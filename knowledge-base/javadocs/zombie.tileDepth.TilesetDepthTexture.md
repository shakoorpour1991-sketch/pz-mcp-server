---
title: zombie.tileDepth.TilesetDepthTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TilesetDepthTexture

`public final class TilesetDepthTexture extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TilesetDepthTexture

## Constructors

### public TilesetDepthTexture(TileDepthTextures owner,
String name,
int columns,
int rows,
boolean b2x)

**Parameters:**
- `TileDepthTextures` `owner`
- `String` `name`
- `int` `columns`
- `int` `rows`
- `boolean` `b2x`

## Methods

### public int getColumns()

**Returns:** `int`

### public int getRows()

**Returns:** `int`

### public boolean is2x()

**Returns:** `boolean`

### public void setKeepPixels(boolean bKeepPixels)

**Parameters:**
- `boolean` `bKeepPixels`

**Returns:** `void`

### public boolean isKeepPixels()

**Returns:** `boolean`

### public TileDepthTexture getOrCreateTile(int index)

**Parameters:**
- `int` `index`

**Returns:** `TileDepthTexture`

### public TileDepthTexture getOrCreateTile(int col,
int row)

**Parameters:**
- `int` `col`
- `int` `row`

**Returns:** `TileDepthTexture`

### public String getName()

**Returns:** `String`

### public int getTileWidth()

**Returns:** `int`

### public int getTileHeight()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public int getTileCount()

**Returns:** `int`

### public String getRelativeFileName()

**Returns:** `String`

### public String getAbsoluteFileName()

**Returns:** `String`

### public void load()
throws Exception

**Returns:** `void`

### public void save()
throws Exception

**Returns:** `void`

### public boolean fileExists()

**Returns:** `boolean`

### public void removeFile()

**Returns:** `void`

### public Texture getTexture()

**Returns:** `Texture`

### public void reload()
throws Exception

**Returns:** `void`

### public void mergeTileset(TilesetDepthTexture other)

**Parameters:**
- `TilesetDepthTexture` `other`

**Returns:** `void`

### public void initSprites()

**Returns:** `void`

### public void recalculateShadowDepth()

**Returns:** `void`

### public void clearTiles()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TilesetDepthTexture.html`*
