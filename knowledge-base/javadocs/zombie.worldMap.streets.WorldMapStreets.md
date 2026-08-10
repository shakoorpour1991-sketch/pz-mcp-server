---
title: zombie.worldMap.streets.WorldMapStreets
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.streets
---

# zombie.worldMap.streets.WorldMapStreets

`public final class WorldMapStreets extends Object`

**Kind:** class · **Package:** zombie.worldMap.streets

## Inheritance
- java.lang.Object
- zombie.worldMap.streets.WorldMapStreets

## Fields

### public static final HashMap<String, WorldMapStreets> s_fileNameToData

## Constructors

### public WorldMapStreets(String relativeFileName,
String absoluteFileName)

**Parameters:**
- `String` `relativeFileName`
- `String` `absoluteFileName`

## Methods

### public static WorldMapStreets getOrCreateData(String relativeFileName,
String absoluteFileName)

**Parameters:**
- `String` `relativeFileName`
- `String` `absoluteFileName`

**Returns:** `WorldMapStreets`

### public String getRelativeFileName()

**Returns:** `String`

### public String getAbsoluteFileName()

**Returns:** `String`

### public StreetLookup getLookup()

**Returns:** `StreetLookup`

### public List<WorldMapStreet> getStreets()

**Returns:** `List<WorldMapStreet>`

### public boolean read(String absoluteFileName)
throws PZXmlParserException

**Parameters:**
- `String` `absoluteFileName`

**Returns:** `boolean`

### public int getStreetCount()

**Returns:** `int`

### public WorldMapStreet getStreetByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapStreet`

### public void addStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void removeStreet(WorldMapStreet street)

**Parameters:**
- `WorldMapStreet` `street`

**Returns:** `void`

### public void setDirty(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isDirty()

**Returns:** `boolean`

### public WorldMapStreet splitStreet(WorldMapStreet street,
int index)

**Parameters:**
- `WorldMapStreet` `street`
- `int` `index`

**Returns:** `WorldMapStreet`

### public void renderStreetLines(UIWorldMap ui,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public boolean canPickStreet(UIWorldMap ui,
float uiX,
float uiY)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `uiX`
- `float` `uiY`

**Returns:** `boolean`

### public WorldMapStreet pickStreet(UIWorldMap ui,
float uiX,
float uiY,
float dist,
boolean bRender)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `uiX`
- `float` `uiY`
- `float` `dist`
- `boolean` `bRender`

**Returns:** `WorldMapStreet`

### public boolean checkForEdits()

**Returns:** `boolean`

### public void render(UIWorldMap ui,
StreetRenderData renderData)

**Parameters:**
- `UIWorldMap` `ui`
- `StreetRenderData` `renderData`

**Returns:** `void`

### public void addListener(IWorldMapStreetListener listener)

**Parameters:**
- `IWorldMapStreetListener` `listener`

**Returns:** `void`

### public void removeListener(IWorldMapStreetListener listener)

**Parameters:**
- `IWorldMapStreetListener` `listener`

**Returns:** `void`

### public void combine(WorldMapStreets other)

**Parameters:**
- `WorldMapStreets` `other`

**Returns:** `void`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\streets\WorldMapStreets.html`*
