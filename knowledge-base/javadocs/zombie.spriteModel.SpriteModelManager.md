---
title: zombie.spriteModel.SpriteModelManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.spriteModel
---

# zombie.spriteModel.SpriteModelManager

`public final class SpriteModelManager extends Object`

**Kind:** class · **Package:** zombie.spriteModel

## Inheritance
- java.lang.Object
- zombie.spriteModel.SpriteModelManager

## Constructors

### public SpriteModelManager()

## Methods

### public static SpriteModelManager getInstance()

**Returns:** `SpriteModelManager`

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

### public void setTileProperties(String modID,
String tilesetName,
int col,
int row,
SpriteModel spriteModel)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `SpriteModel` `spriteModel`

**Returns:** `void`

### public SpriteModel getTileProperties(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `SpriteModel`

### public void clearTileProperties(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `void`

### public SpriteModelsFile.Tileset findTileset(String modID,
String tilesetName)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`

**Returns:** `SpriteModelsFile.Tileset`

### public void toScriptManager(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void toScriptManager()

**Returns:** `void`

### public void loadedTileDefinitions()

**Returns:** `void`

### public void initSprites()

**Returns:** `void`

### public void write(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\spriteModel\SpriteModelManager.html`*
