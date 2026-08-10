---
title: zombie.worldMap.symbols.WorldMapSymbolsV2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapSymbolsV2

`public final class WorldMapSymbolsV2 extends WorldMapSymbolsAPI`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapSymbolsAPI
- zombie.worldMap.symbols.WorldMapSymbolsV2

## Constructors

### public WorldMapSymbolsV2(UIWorldMap ui,
WorldMapSymbols symbols)

**Parameters:**
- `UIWorldMap` `ui`
- `WorldMapSymbols` `symbols`

## Methods

### public WorldMapSymbolsV2.WorldMapTextSymbolV2 addTranslatedText(String text,
UIFont font,
float x,
float y)

**Parameters:**
- `String` `text`
- `UIFont` `font`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV2.WorldMapTextSymbolV2`

### public WorldMapSymbolsV2.WorldMapTextSymbolV2 addUntranslatedText(String text,
UIFont font,
float x,
float y)

**Parameters:**
- `String` `text`
- `UIFont` `font`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV2.WorldMapTextSymbolV2`

### public WorldMapSymbolsV2.WorldMapTextSymbolV2 addTranslatedText(String text,
String layerID,
float x,
float y)

**Parameters:**
- `String` `text`
- `String` `layerID`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV2.WorldMapTextSymbolV2`

### public WorldMapSymbolsV2.WorldMapTextSymbolV2 addUntranslatedText(String text,
String layerID,
float x,
float y)

**Parameters:**
- `String` `text`
- `String` `layerID`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV2.WorldMapTextSymbolV2`

### public WorldMapSymbolsV2.WorldMapTextureSymbolV2 addTexture(String symbolID,
float x,
float y)

**Parameters:**
- `String` `symbolID`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV2.WorldMapTextureSymbolV2`

### public int hitTest(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `int`

### public int getSymbolCount()

**Returns:** `int`

### public zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 getSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2`

### public void removeSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void removeSymbol(zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 symbol)

**Parameters:**
- `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2` `symbol`

**Returns:** `void`

### public String getDefaultLayerID()

**Returns:** `String`

### public float getDisplayScale(String layerID,
float scale,
boolean bApplyZoom)

**Parameters:**
- `String` `layerID`
- `float` `scale`
- `boolean` `bApplyZoom`

**Returns:** `float`

### public int getTextLayoutWidth(String text,
String layerID)

**Parameters:**
- `String` `text`
- `String` `layerID`

**Returns:** `int`

### public int getTextLayoutHeight(String text,
String layerID)

**Parameters:**
- `String` `text`
- `String` `layerID`

**Returns:** `int`

### public boolean isUserEditing()

**Returns:** `boolean`

### public void setUserEditing(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setAuthorHidden(String userName,
boolean hidden)

**Parameters:**
- `String` `userName`
- `boolean` `hidden`

**Returns:** `void`

### public boolean isAuthorHidden(String userName)

**Parameters:**
- `String` `userName`

**Returns:** `boolean`

### public String getDefaultTextLayerID()

**Returns:** `String`

### public void clear()

**Returns:** `void`

### public void reinitDefaultAnnotations()

**Returns:** `void`

### public void initDefaultAnnotations()

**Returns:** `void`

### public void clearUserAnnotations()

**Returns:** `void`

### public void sendShareSymbol(zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 symbolV2,
WorldMapSymbolNetworkInfo networkInfo)

**Parameters:**
- `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2` `symbolV2`
- `WorldMapSymbolNetworkInfo` `networkInfo`

**Returns:** `void`

### public void sendRemoveSymbol(zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 symbolV2)

**Parameters:**
- `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2` `symbolV2`

**Returns:** `void`

### public void sendModifySymbol(zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 symbolV2)

**Parameters:**
- `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2` `symbolV2`

**Returns:** `void`

### public void sendSetPrivateSymbol(zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2 symbolV2)

**Parameters:**
- `zombie.worldMap.symbols.WorldMapSymbolsV2.WorldMapBaseSymbolV2` `symbolV2`

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapSymbolsV2.html`*
