---
title: zombie.tileDepth.TileDepthTextureManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileDepthTextureManager

`public final class TileDepthTextureManager extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileDepthTextureManager

## Fields

### public static final boolean DELAYED_LOADING

## Methods

### public static TileDepthTextureManager getInstance()

**Returns:** `TileDepthTextureManager`

### public void init()

**Returns:** `void`

### public void initGameData()

**Returns:** `void`

### public void initModData(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public void mergeAfterEditing(String tilesetName)

**Parameters:**
- `String` `tilesetName`

**Returns:** `void`

### public void reloadTileset(String modID,
String tilesetName)
throws Exception

**Parameters:**
- `String` `modID`
- `String` `tilesetName`

**Returns:** `void`

### public void loadTilesetPixelsIfNeeded(String modID,
String tilesetName)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`

**Returns:** `void`

### public void saveTileset(String modID,
String tilesetName)
throws Exception

**Parameters:**
- `String` `modID`
- `String` `tilesetName`

**Returns:** `void`

### public TileDepthTexture getTexture(String modID,
String tilesetName,
int tileIndex)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `tileIndex`

**Returns:** `TileDepthTexture`

### public TileDepthTexture getTextureFromTileName(String modID,
String tileName)

**Parameters:**
- `String` `modID`
- `String` `tileName`

**Returns:** `TileDepthTexture`

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

### public TileDepthTexture getDefaultDepthTexture()

**Returns:** `TileDepthTexture`

### public TileDepthTexture getBillboardDepthTexture()

**Returns:** `TileDepthTexture`

### public TilesetDepthTexture getPresetTilesetDepthTexture()

**Returns:** `TilesetDepthTexture`

### public TileDepthTexture getPresetDepthTexture(int col,
int row)

**Parameters:**
- `int` `col`
- `int` `row`

**Returns:** `TileDepthTexture`

### public void initSprites()

**Returns:** `void`

### public void initSprites(String tilesetName)

**Parameters:**
- `String` `tilesetName`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

### public void addedLoadTask()

**Returns:** `void`

### public void finishedLoadTask()

**Returns:** `void`

### public void loadedTileDefinitions()

**Returns:** `void`

### public boolean isLoadingFinished()

**Returns:** `boolean`

### public Texture getEmptyDepthTexture(int width,
int height)

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `Texture`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileDepthTextureManager.html`*
