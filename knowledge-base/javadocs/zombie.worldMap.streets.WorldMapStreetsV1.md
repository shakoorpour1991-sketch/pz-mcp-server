---
title: zombie.worldMap.streets.WorldMapStreetsV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.streets
---

# zombie.worldMap.streets.WorldMapStreetsV1

`public class WorldMapStreetsV1 extends Object`

**Kind:** class · **Package:** zombie.worldMap.streets

## Inheritance
- java.lang.Object
- zombie.worldMap.streets.WorldMapStreetsV1

## Constructors

### public WorldMapStreetsV1(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

## Methods

### public void addStreetData(String relativeFileName)

**Parameters:**
- `String` `relativeFileName`

**Returns:** `void`

### public int getStreetDataCount()

**Returns:** `int`

### public WorldMapStreets getStreetDataByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStreets`

### public WorldMapStreets getStreetDataByRelativeFileName(String relativeFileName)

**Parameters:**
- `String` `relativeFileName`

**Returns:** `WorldMapStreets`

### public void clearStreetData()

**Returns:** `void`

### public void setMouseOverStreet(WorldMapStreetV1 streetV1,
float worldX,
float worldY)

**Parameters:**
- `WorldMapStreetV1` `streetV1`
- `float` `worldX`
- `float` `worldY`

**Returns:** `void`

### public boolean canPickStreet(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `boolean`

### public WorldMapStreetV1 pickStreet(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `WorldMapStreetV1`

### public WorldMapStreet getMouseOverStreet()

**Returns:** `WorldMapStreet`

### public float getMouseOverStreetWorldX()

**Returns:** `float`

### public float getMouseOverStreetWorldY()

**Returns:** `float`

### public EditStreetsV1 getEditorAPI()

**Returns:** `EditStreetsV1`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\streets\WorldMapStreetsV1.html`*
