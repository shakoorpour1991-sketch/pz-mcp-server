---
title: zombie.core.textures.MultiTextureFBO2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.MultiTextureFBO2

`public final class MultiTextureFBO2 extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.MultiTextureFBO2

## Fields

### public TextureFBO current

### public volatile TextureFBO fboRendered

### public final boolean[] autoZoom

### public boolean zoomEnabled

## Constructors

### public MultiTextureFBO2()

## Methods

### public int getWidth(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public int getHeight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public void setZoom(int playerIndex,
float value)

**Parameters:**
- `int` `playerIndex`
- `float` `value`

**Returns:** `void`

### public void setZoomAndTargetZoom(int playerIndex,
float value)

**Parameters:**
- `int` `playerIndex`
- `float` `value`

**Returns:** `void`

### public float getZoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public float getTargetZoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public float getDisplayZoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public void setTargetZoom(int playerIndex,
float target)

**Parameters:**
- `int` `playerIndex`
- `float` `target`

**Returns:** `void`

### public ArrayList<Integer> getDefaultZoomLevels()

**Returns:** `ArrayList<Integer>`

### public void setZoomLevels(Double... zooms)

**Parameters:**
- `Double...` `zooms`

**Returns:** `void`

### public void setZoomLevelsFromOption(String levels)

**Parameters:**
- `String` `levels`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public void create(int xres,
int yres)
throws Exception

**Parameters:**
- `int` `xres`
- `int` `yres`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public TextureFBO getCurrent(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `TextureFBO`

### public Texture getTexture(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `Texture`

### public void doZoomScroll(int playerIndex,
int del)

**Parameters:**
- `int` `playerIndex`
- `int` `del`

**Returns:** `void`

### public float getNextZoom(int playerIndex,
int del)

**Parameters:**
- `int` `playerIndex`
- `int` `del`

**Returns:** `float`

### public float getMinZoom()

**Returns:** `float`

### public float getMaxZoom()

**Returns:** `float`

### public boolean test()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\MultiTextureFBO2.html`*
