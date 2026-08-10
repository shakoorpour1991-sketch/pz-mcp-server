---
title: zombie.tileDepth.TileDepthTextures
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileDepthTextures

`public final class TileDepthTextures extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileDepthTextures

## Constructors

### public TileDepthTextures(String modID,
String mediaAbsPath)

**Parameters:**
- `String` `modID`
- `String` `mediaAbsPath`

## Methods

### public void saveTileset(String tilesetName)
throws Exception

**Parameters:**
- `String` `tilesetName`

**Returns:** `void`

### public TileDepthTexture getTexture(String tilesetName,
int tileIndex)

**Parameters:**
- `String` `tilesetName`
- `int` `tileIndex`

**Returns:** `TileDepthTexture`

### public TileDepthTexture getTextureFromTileName(String tileName)

**Parameters:**
- `String` `tileName`

**Returns:** `TileDepthTexture`

### public TilesetDepthTexture getExistingTileset(String tilesetName)

**Parameters:**
- `String` `tilesetName`

**Returns:** `TilesetDepthTexture`

### public void loadDepthTextureImages()

**Returns:** `void`

### public void mergeTilesets(TileDepthTextures other)

**Parameters:**
- `TileDepthTextures` `other`

**Returns:** `void`

### public void mergeTileset(TilesetDepthTexture other)

**Parameters:**
- `TilesetDepthTexture` `other`

**Returns:** `void`

### public void initSprites()

**Returns:** `void`

### public void initSprites(String tilesetName)

**Parameters:**
- `String` `tilesetName`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileDepthTextures.html`*
