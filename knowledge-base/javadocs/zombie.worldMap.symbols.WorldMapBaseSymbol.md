---
title: zombie.worldMap.symbols.WorldMapBaseSymbol
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.WorldMapBaseSymbol

`public abstract class WorldMapBaseSymbol extends Object`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.WorldMapBaseSymbol

## Fields

### public static final float DEFAULT_SCALE

### public static final float DEFAULT_MIN_ZOOM

### public static final float DEFAULT_MAX_ZOOM

## Constructors

### public WorldMapBaseSymbol()

### public WorldMapBaseSymbol(WorldMapSymbols owner)

**Parameters:**
- `WorldMapSymbols` `owner`

## Methods

### public abstract WorldMapSymbols.WorldMapSymbolType getType()

**Returns:** `WorldMapSymbols.WorldMapSymbolType`

### public void setNetworkInfo(WorldMapSymbolNetworkInfo info)

**Parameters:**
- `WorldMapSymbolNetworkInfo` `info`

**Returns:** `void`

### public WorldMapSymbolNetworkInfo getNetworkInfo()

**Returns:** `WorldMapSymbolNetworkInfo`

### public void setPrivate()

**Returns:** `void`

### public boolean isShared()

**Returns:** `boolean`

### public boolean isPrivate()

**Returns:** `boolean`

### public boolean isAuthorLocalPlayer()

**Returns:** `boolean`

### public boolean isUserDefined()

**Returns:** `boolean`

### public void setUserDefined(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setAnchor(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public float getAnchorX()

**Returns:** `float`

### public float getAnchorY()

**Returns:** `float`

### public void setPosition(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public float getRotation()

**Returns:** `float`

### public void setRotation(float degrees)

**Parameters:**
- `float` `degrees`

**Returns:** `void`

### public double getCosA()

**Returns:** `double`

### public double getSinA()

**Returns:** `double`

### public boolean isMatchPerspective()

**Returns:** `boolean`

### public void setMatchPerspective(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isApplyZoom()

**Returns:** `boolean`

### public void setApplyZoom(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public float getMinZoom()

**Returns:** `float`

### public void setMinZoom(float zoomF)

**Parameters:**
- `float` `zoomF`

**Returns:** `void`

### public float getMaxZoom()

**Returns:** `float`

### public void setMaxZoom(float zoomF)

**Parameters:**
- `float` `zoomF`

**Returns:** `void`

### public void setCollide(boolean collide)

**Parameters:**
- `boolean` `collide`

**Returns:** `void`

### public void setRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setScale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

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

### public float widthScaled(WorldMapRenderer.Drawer drawer)

**Parameters:**
- `WorldMapRenderer.Drawer` `drawer`

**Returns:** `float`

### public float heightScaled(WorldMapRenderer.Drawer drawer)

**Parameters:**
- `WorldMapRenderer.Drawer` `drawer`

**Returns:** `float`

### public void setVisible(boolean visible)

**Parameters:**
- `boolean` `visible`

**Returns:** `void`

### public boolean isVisible(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `boolean`

### public boolean isOnScreen(UIWorldMap ui)

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

### public abstract void render(WorldMapRenderer.Drawer arg0)

**Parameters:**
- `WorldMapRenderer.Drawer` `arg0`

**Returns:** `void`

### public abstract void release()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\WorldMapBaseSymbol.html`*
