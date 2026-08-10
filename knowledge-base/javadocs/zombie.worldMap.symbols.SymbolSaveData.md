---
title: zombie.worldMap.symbols.SymbolSaveData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.SymbolSaveData

`public final class SymbolSaveData extends Object`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.SymbolSaveData

## Fields

### public int worldVersion

### public int symbolsVersion

### public final HashMap<String,Integer> fontNameToIndex

### public final HashMap<Integer,String> indexToFontName

## Constructors

### public SymbolSaveData(int worldVersion,
int symbolsVersion)

**Parameters:**
- `int` `worldVersion`
- `int` `symbolsVersion`

## Methods

### public void load(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void save(ByteBuffer output,
WorldMapSymbols symbols)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `WorldMapSymbols` `symbols`

**Returns:** `void`

### public void save(ByteBuffer output,
WorldMapBaseSymbol symbol)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `WorldMapBaseSymbol` `symbol`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\SymbolSaveData.html`*
