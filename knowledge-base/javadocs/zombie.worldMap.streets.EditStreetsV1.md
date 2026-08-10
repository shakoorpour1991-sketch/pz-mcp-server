---
title: zombie.worldMap.streets.EditStreetsV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.streets
---

# zombie.worldMap.streets.EditStreetsV1

`public final class EditStreetsV1 extends Object implements IWorldMapStreetListener`

**Kind:** class · **Package:** zombie.worldMap.streets

## Inheritance
- java.lang.Object
- zombie.worldMap.streets.EditStreetsV1

## Constructors

### public EditStreetsV1(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

## Methods

### public void onAdd(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onBeforeRemove(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onAfterRemove(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onBeforeModifyStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void onAfterModifyStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void setStreetData(String relativeFileName)

**Parameters:**
- `String` `relativeFileName`

**Returns:** `void`

### public int getStreetCount()

**Returns:** `int`

### public EditStreetV1 getStreetByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `EditStreetV1`

### public boolean canPickStreet(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `boolean`

### public EditStreetV1 pickStreet(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `EditStreetV1`

### public EditStreetV1 createEditorStreet()

**Returns:** `EditStreetV1`

### public void forgetEditorStreet()

**Returns:** `void`

### public void freeEditorStreet(EditStreetV1 streetV1)

**Parameters:**
- `EditStreetV1` `streetV1`

**Returns:** `void`

### public void addStreet(EditStreetV1 streetV1)

**Parameters:**
- `EditStreetV1` `streetV1`

**Returns:** `void`

### public void removeStreet(EditStreetV1 streetV1)

**Parameters:**
- `EditStreetV1` `streetV1`

**Returns:** `void`

### public EditStreetV1 splitStreet(EditStreetV1 streetV1,
int index)

**Parameters:**
- `EditStreetV1` `streetV1`
- `int` `index`

**Returns:** `EditStreetV1`

### public void setMouseOverStreet(EditStreetV1 streetV1,
float worldX,
float worldY)

**Parameters:**
- `EditStreetV1` `streetV1`
- `float` `worldX`
- `float` `worldY`

**Returns:** `void`

### public void renderStreetLines(float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public void save()

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\streets\EditStreetsV1.html`*
