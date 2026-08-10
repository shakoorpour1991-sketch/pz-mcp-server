---
title: zombie.tileDepth.TileGeometryManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileGeometryManager

`public final class TileGeometryManager extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileGeometryManager

## Fields

### public static final boolean ONE_PIXEL_OFFSET

## Methods

### public static TileGeometryManager getInstance()

**Returns:** `TileGeometryManager`

### public void init()

**Returns:** `void`

### public void initGameData()

**Returns:** `void`

### public void initModData(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public void loadedTileDefinitions()

**Returns:** `void`

### public void initSpriteProperties()

**Returns:** `void`

### public ArrayList<String> getModIDs()

**Returns:** `ArrayList<String>`

### public void setGeometry(String modID,
String tilesetName,
int col,
int row,
ArrayList<TileGeometryFile.Geometry> geometry)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `ArrayList<TileGeometryFile.Geometry>` `geometry`

**Returns:** `void`

### public void copyGeometry(String modID,
String tilesetName,
int col,
int row,
ArrayList<TileGeometryFile.Geometry> geometries)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `ArrayList<TileGeometryFile.Geometry>` `geometries`

**Returns:** `void`

### public ArrayList<TileGeometryFile.Geometry> getGeometry(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `ArrayList<TileGeometryFile.Geometry>`

### public String getTileProperty(String modID,
String tilesetName,
int col,
int row,
String key)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `key`

**Returns:** `String`

### public void setTileProperty(String modID,
String tilesetName,
int col,
int row,
String key,
String value)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `key`
- `String` `value`

**Returns:** `void`

### public zombie.tileDepth.TileGeometryFile.Tile getTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `zombie.tileDepth.TileGeometryFile.Tile`

### public zombie.tileDepth.TileGeometryFile.Tile getOrCreateTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `zombie.tileDepth.TileGeometryFile.Tile`

### public void write(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileGeometryManager.html`*
