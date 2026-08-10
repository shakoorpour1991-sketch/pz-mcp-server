---
title: zombie.seating.SeatingManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.seating
---

# zombie.seating.SeatingManager

`public final class SeatingManager extends Object`

**Kind:** class · **Package:** zombie.seating

## Inheritance
- java.lang.Object
- zombie.seating.SeatingManager

## Methods

### public static SeatingManager getInstance()

**Returns:** `SeatingManager`

### public void init()

**Returns:** `void`

### public void initGameData()

**Returns:** `void`

### public void initModData(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public void mergeAfterEditing()

**Returns:** `void`

### public ArrayList<String> getModIDs()

**Returns:** `ArrayList<String>`

### public int addTilePosition(String modID,
String tilesetName,
int col,
int row,
String id)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `id`

**Returns:** `int`

### public void removeTilePosition(String modID,
String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `void`

### public int getTilePositionCount(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `int`

### public int getTilePositionCount(String tilesetName,
int col,
int row)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `int`

### public int getTilePositionCount(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

**Returns:** `int`

### public String getTilePositionID(String modID,
String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `String`

### public boolean hasTilePositionWithID(String modID,
String tilesetName,
int col,
int row,
String id)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `id`

**Returns:** `boolean`

### public org.joml.Vector3f getTilePositionTranslate(String modID,
String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `org.joml.Vector3f`

### public String getTilePositionProperty(String modID,
String tilesetName,
int col,
int row,
int index,
String key)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`
- `String` `key`

**Returns:** `String`

### public void setTilePositionProperty(String modID,
String tilesetName,
int col,
int row,
int index,
String key,
String value)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`
- `String` `key`
- `String` `value`

**Returns:** `void`

### public String getTileProperty(String tilesetName,
int col,
int row,
String key)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `key`

**Returns:** `String`

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

### public zombie.seating.SeatingFile.Tile getTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `zombie.seating.SeatingFile.Tile`

### public zombie.seating.SeatingFile.Tile getOrCreateTile(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `zombie.seating.SeatingFile.Tile`

### public org.joml.Vector3f getTranslation(String modID,
IsoSprite sprite,
String sitDirection,
org.joml.Vector3f xln)

**Parameters:**
- `String` `modID`
- `IsoSprite` `sprite`
- `String` `sitDirection`
- `org.joml.Vector3f` `xln`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTranslation(String modID,
String tilesetName,
int tileSheetIndex,
String sitDirection,
org.joml.Vector3f xln)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `tileSheetIndex`
- `String` `sitDirection`
- `org.joml.Vector3f` `xln`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTranslation(String tilesetName,
int tileSheetIndex,
String sitDirection,
org.joml.Vector3f xln)

**Parameters:**
- `String` `tilesetName`
- `int` `tileSheetIndex`
- `String` `sitDirection`
- `org.joml.Vector3f` `xln`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTranslation(IsoSprite sprite,
String sitDirection,
org.joml.Vector3f xln)

**Parameters:**
- `IsoSprite` `sprite`
- `String` `sitDirection`
- `org.joml.Vector3f` `xln`

**Returns:** `org.joml.Vector3f`

### public boolean getAdjacentPosition(IsoGameCharacter character,
IsoObject isoObject,
String sitDirection,
String side,
String animStateName,
String animNodeName,
org.joml.Vector3f worldPos)

**Parameters:**
- `IsoGameCharacter` `character`
- `IsoObject` `isoObject`
- `String` `sitDirection`
- `String` `side`
- `String` `animStateName`
- `String` `animNodeName`
- `org.joml.Vector3f` `worldPos`

**Returns:** `boolean`

### public boolean getAdjacentPosition(String modID,
IsoSprite sprite,
String sitDirectionStr,
String sideStr,
Model model,
String animSetName,
String animStateName,
String animNodeName,
org.joml.Vector2f worldPos)

**Parameters:**
- `String` `modID`
- `IsoSprite` `sprite`
- `String` `sitDirectionStr`
- `String` `sideStr`
- `Model` `model`
- `String` `animSetName`
- `String` `animStateName`
- `String` `animNodeName`
- `org.joml.Vector2f` `worldPos`

**Returns:** `boolean`

### public String getFacingDirection(String modID,
String tilesetName,
int col,
int row)

**Parameters:**
- `String` `modID`
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `String`

### public String getFacingDirection(String tilesetName,
int col,
int row)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `String`

### public String getFacingDirection(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `String`

### public String getFacingDirection(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `String`

### public Vector2 getDeferredMovement(BoneAxis boneAxis,
org.lwjgl.util.vector.Vector3f bonePos,
Vector2 deferredPos)

**Parameters:**
- `BoneAxis` `boneAxis`
- `org.lwjgl.util.vector.Vector3f` `bonePos`
- `Vector2` `deferredPos`

**Returns:** `Vector2`

### public float getAnimationTrackFraction(IsoGameCharacter character,
String animNodeName)

**Parameters:**
- `IsoGameCharacter` `character`
- `String` `animNodeName`

**Returns:** `float`

### public void write(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void fixDefaultPositions()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\seating\SeatingManager.html`*
