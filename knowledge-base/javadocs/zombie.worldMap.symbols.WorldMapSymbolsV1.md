---
title: zombie.worldMap.symbols.WorldMapSymbolsV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapSymbolsV1

`public class WorldMapSymbolsV1 extends WorldMapSymbolsAPI`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapSymbolsAPI
- zombie.worldMap.symbols.WorldMapSymbolsV1

## Constructors

### public WorldMapSymbolsV1(UIWorldMap ui,
WorldMapSymbols symbols)

**Parameters:**
- `UIWorldMap` `ui`
- `WorldMapSymbols` `symbols`

## Methods

### public WorldMapSymbolsV1.WorldMapTextSymbolV1 addTranslatedText(String text,
UIFont font,
float x,
float y)

**Parameters:**
- `String` `text`
- `UIFont` `font`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV1.WorldMapTextSymbolV1`

### public WorldMapSymbolsV1.WorldMapTextSymbolV1 addUntranslatedText(String text,
UIFont font,
float x,
float y)

**Parameters:**
- `String` `text`
- `UIFont` `font`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV1.WorldMapTextSymbolV1`

### public WorldMapSymbolsV1.WorldMapTextureSymbolV1 addTexture(String symbolID,
float x,
float y)

**Parameters:**
- `String` `symbolID`
- `float` `x`
- `float` `y`

**Returns:** `WorldMapSymbolsV1.WorldMapTextureSymbolV1`

### public int hitTest(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `int`

### public int getSymbolCount()

**Returns:** `int`

### public zombie.worldMap.symbols.WorldMapSymbolsV1.WorldMapBaseSymbolV1 getSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `zombie.worldMap.symbols.WorldMapSymbolsV1.WorldMapBaseSymbolV1`

### public void removeSymbolByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapSymbolsV1.html`*
