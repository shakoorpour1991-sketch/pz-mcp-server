---
title: zombie.worldMap.symbols.WorldMapTextureSymbol
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapTextureSymbol

`public final class WorldMapTextureSymbol extends WorldMapBaseSymbol`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapBaseSymbol
- zombie.worldMap.symbols.WorldMapTextureSymbol

## Constructors

### public WorldMapTextureSymbol()

### public WorldMapTextureSymbol(WorldMapSymbols owner)

**Parameters:**
- `WorldMapSymbols` `owner`

## Methods

### public void setSymbolID(String symbolID)

**Parameters:**
- `String` `symbolID`

**Returns:** `void`

### public String getSymbolID()

**Returns:** `String`

### public void checkTexture()

**Returns:** `void`

### public WorldMapSymbols.WorldMapSymbolType getType()

**Returns:** `WorldMapSymbols.WorldMapSymbolType`

### public void layout(UIWorldMap ui,
WorldMapSymbolCollisions collisions,
float rox,
float roy,
SymbolLayout layout)

**Parameters:**
- `UIWorldMap` `ui`
- `WorldMapSymbolCollisions` `collisions`
- `float` `rox`
- `float` `roy`
- `SymbolLayout` `layout`

**Returns:** `void`

### public void save(ByteBuffer output,
SymbolSaveData saveData)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `SymbolSaveData` `saveData`

**Returns:** `void`

### public void load(ByteBuffer input,
SymbolSaveData saveData)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `SymbolSaveData` `saveData`

**Returns:** `void`

### public void render(WorldMapRenderer.Drawer drawer)

**Parameters:**
- `WorldMapRenderer.Drawer` `drawer`

**Returns:** `void`

### public WorldMapBaseSymbol createCopy()

**Returns:** `WorldMapBaseSymbol`

### public void release()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapTextureSymbol.html`*
