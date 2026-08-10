---
title: zombie.worldMap.symbols.WorldMapSymbols
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapSymbols

`public class WorldMapSymbols extends Object`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapSymbols

## Fields

### public static final int SAVEFILE_VERSION1

### public static final int SAVEFILE_VERSION2

### public static final int SAVEFILE_VERSION

### public static final float MIN_VISIBLE_ZOOM

### public static final float COLLAPSED_RADIUS

## Constructors

### public WorldMapSymbols()

## Methods

### public static String getDefaultTextLayerID()

**Returns:** `String`

### public long getModificationCount()

**Returns:** `long`

### public WorldMapTextSymbol addTranslatedText(String text,
String layerID,
float x,
float y,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `text`
- `String` `layerID`
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMapTextSymbol`

### public WorldMapTextSymbol addUntranslatedText(String text,
String layerID,
float x,
float y,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `text`
- `String` `layerID`
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMapTextSymbol`

### public WorldMapTextSymbol addText(String text,
boolean translated,
String layerID,
float x,
float y,
float anchorX,
float anchorY,
float scale,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `text`
- `boolean` `translated`
- `String` `layerID`
- `float` `x`
- `float` `y`
- `float` `anchorX`
- `float` `anchorY`
- `float` `scale`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMapTextSymbol`

### public WorldMapTextureSymbol addTexture(String symbolID,
float x,
float y,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `symbolID`
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMapTextureSymbol`

### public WorldMapTextureSymbol addTexture(String symbolID,
float x,
float y,
float anchorX,
float anchorY,
float scale,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `symbolID`
- `float` `x`
- `float` `y`
- `float` `anchorX`
- `float` `anchorY`
- `float` `scale`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `WorldMapTextureSymbol`

### public void addSymbol(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public int indexOf(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `int`

### public void removeSymbol(WorldMapBaseSymbol symbol)

**Parameters:**
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

### public void removeSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public boolean isUserEditing()

**Returns:** `boolean`

### public void setUserEditing(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isEditingSharedSymbolSettings(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public void clearDefaultAnnotations()

**Returns:** `void`

### public void clearUserAnnotations()

**Returns:** `void`

### public void invalidateLayout()

**Returns:** `void`

### public int getSymbolCount()

**Returns:** `int`

### public WorldMapBaseSymbol getSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `WorldMapBaseSymbol`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void addListener(IWorldMapSymbolListener listener)

**Parameters:**
- `IWorldMapSymbolListener` `listener`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapSymbols.html`*
