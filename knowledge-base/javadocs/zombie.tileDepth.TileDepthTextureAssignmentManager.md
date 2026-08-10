---
title: zombie.tileDepth.TileDepthTextureAssignmentManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileDepthTextureAssignmentManager

`public final class TileDepthTextureAssignmentManager extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileDepthTextureAssignmentManager

## Methods

### public static TileDepthTextureAssignmentManager getInstance()

**Returns:** `TileDepthTextureAssignmentManager`

### public void init()

**Returns:** `void`

### public void initGameData()

**Returns:** `void`

### public void initModData(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `void`

### public void save(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void initSprites()

**Returns:** `void`

### public void assignTileName(String modID,
String assignTo,
String otherTile)

**Parameters:**
- `String` `modID`
- `String` `assignTo`
- `String` `otherTile`

**Returns:** `void`

### public String getAssignedTileName(String modID,
String tileName)

**Parameters:**
- `String` `modID`
- `String` `tileName`

**Returns:** `String`

### public void clearAssignedTileName(String modID,
String assignTo)

**Parameters:**
- `String` `modID`
- `String` `assignTo`

**Returns:** `void`

### public void assignDepthTextureToSprite(String modID,
String tileName)

**Parameters:**
- `String` `modID`
- `String` `tileName`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileDepthTextureAssignmentManager.html`*
