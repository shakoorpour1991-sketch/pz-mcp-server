---
title: zombie.worldMap.symbols.WorldMapTextSymbol
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapTextSymbol

`public final class WorldMapTextSymbol extends WorldMapBaseSymbol`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapBaseSymbol
- zombie.worldMap.symbols.WorldMapTextSymbol

## Fields

### public static final String DEFAULT_LAYER

### public static final UIFont DEFAULT_FONT

### public static final float DEFAULT_FONT_LINEHEIGHT

### public static final boolean FORCE_SDF_SHADER

## Constructors

### public WorldMapTextSymbol()

### public WorldMapTextSymbol(WorldMapSymbols owner)

**Parameters:**
- `WorldMapSymbols` `owner`

## Methods

### public void setTranslatedText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public void setUntranslatedText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public String getTranslatedText()

**Returns:** `String`

### public String getUntranslatedText()

**Returns:** `String`

### public String getLayerID()

**Returns:** `String`

### public void setLayerID(String layerID)

**Parameters:**
- `String` `layerID`

**Returns:** `void`

### public WorldMapTextStyleLayer getStyleLayer(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `WorldMapTextStyleLayer`

### public UIFont getFont(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `UIFont`

### public WorldMapSymbols.WorldMapSymbolType getType()

**Returns:** `WorldMapSymbols.WorldMapSymbolType`

### public float getDisplayScale(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public float getDisplayScale(WorldMapRenderer.Drawer drawer)

**Parameters:**
- `WorldMapRenderer.Drawer` `drawer`

**Returns:** `float`

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

### public float widthScaled(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public float heightScaled(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public boolean isVisible(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `boolean`

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

### public static double getSdfThreshold(double cosA,
double sinA,
double scale)

**Parameters:**
- `double` `cosA`
- `double` `sinA`
- `double` `scale`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapTextSymbol.html`*
