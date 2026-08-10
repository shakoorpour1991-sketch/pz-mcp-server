---
title: zombie.seams.SeamManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.seams
---

# zombie.seams.SeamManager

`public final class SeamManager extends Object`

**Kind:** class · **Package:** zombie.seams

## Inheritance
- java.lang.Object
- zombie.seams.SeamManager

## Methods

### public static SeamManager getInstance()

**Returns:** `SeamManager`

### public void init()

**Returns:** `void`

### public void initGameData()

**Returns:** `void`

### public void initModData(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public ArrayList<String> getModIDs()

**Returns:** `ArrayList<String>`

### public SeamFile.Tile getHighestPriorityTile(String tilesetName,
int col,
int row)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `SeamFile.Tile`

### public SeamFile.Tile getHighestPriorityTileFromName(String tileName)

**Parameters:**
- `String` `tileName`

**Returns:** `SeamFile.Tile`

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

### public ArrayList<String> getTileJoinE(String modID,
String tilesetName,
int col,
int row,
boolean bAllocate)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `boolean` `bAllocate`

**Returns:** `ArrayList<String>`

### public ArrayList<String> getTileJoinS(String modID,
String tilesetName,
int col,
int row,
boolean bAllocate)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `boolean` `bAllocate`

**Returns:** `ArrayList<String>`

### public ArrayList<String> getTileJoinBelowE(String modID,
String tilesetName,
int col,
int row,
boolean bAllocate)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `boolean` `bAllocate`

**Returns:** `ArrayList<String>`

### public ArrayList<String> getTileJoinBelowS(String modID,
String tilesetName,
int col,
int row,
boolean bAllocate)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `boolean` `bAllocate`

**Returns:** `ArrayList<String>`

### public SeamFile.Tile getTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `SeamFile.Tile`

### public SeamFile.Tile getTileFromName(String modID,
String tileName)

**Parameters:**
- `String` `modID`
- `String` `tileName`

**Returns:** `SeamFile.Tile`

### public SeamFile.Tile getOrCreateTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `SeamFile.Tile`

### public boolean isMasterTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `boolean`

### public String getMasterTileName(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `String`

### public void write(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\seams\SeamManager.html`*
