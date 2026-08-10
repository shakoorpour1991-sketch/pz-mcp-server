---
title: zombie.worldMap.styles.WorldMapStyleV1.WorldMapPolygonStyleLayerV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.styles
---

# zombie.worldMap.styles.WorldMapStyleV1.WorldMapPolygonStyleLayerV1

`public static class WorldMapStyleV1.WorldMapPolygonStyleLayerV1 extends WorldMapStyleV1.WorldMapStyleLayerV1`

**Kind:** class · **Package:** zombie.worldMap.styles

## Inheritance
- java.lang.Object
- zombie.worldMap.styles.WorldMapStyleV1.WorldMapStyleLayerV1
- zombie.worldMap.styles.WorldMapStyleV1.WorldMapPolygonStyleLayerV1

## Methods

### public void setFilter(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `void`

### public String getFilterKey()

**Returns:** `String`

### public String getFilterValue()

**Returns:** `String`

### public void addFill(float zoom,
int r,
int g,
int b,
int a)

**Parameters:**
- `float` `zoom`
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void addScale(float zoom,
float scale)

**Parameters:**
- `float` `zoom`
- `float` `scale`

**Returns:** `void`

### public void addTexture(float zoom,
String texturePath)

**Parameters:**
- `float` `zoom`
- `String` `texturePath`

**Returns:** `void`

### public void addTexture(float zoom,
String texturePath,
String scalingStr)

**Parameters:**
- `float` `zoom`
- `String` `texturePath`
- `String` `scalingStr`

**Returns:** `void`

### public void removeFill(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void removeScale(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void removeTexture(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void moveFill(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void moveScale(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public void moveTexture(int indexFrom,
int indexTo)

**Parameters:**
- `int` `indexFrom`
- `int` `indexTo`

**Returns:** `void`

### public int getFillStops()

**Returns:** `int`

### public void setFillRGBA(int index,
int r,
int g,
int b,
int a)

**Parameters:**
- `int` `index`
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void setFillZoom(int index,
float zoom)

**Parameters:**
- `int` `index`
- `float` `zoom`

**Returns:** `void`

### public float getFillZoom(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public int getFillRed(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillGreen(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillBlue(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getFillAlpha(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public int getScaleStops()

**Returns:** `int`

### public void setScaleZoom(int index,
float zoom)

**Parameters:**
- `int` `index`
- `float` `zoom`

**Returns:** `void`

### public void setScaleValue(int index,
int scale)

**Parameters:**
- `int` `index`
- `int` `scale`

**Returns:** `void`

### public int getTextureStops()

**Returns:** `int`

### public void setTextureZoom(int index,
float zoom)

**Parameters:**
- `int` `index`
- `float` `zoom`

**Returns:** `void`

### public float getTextureZoom(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public void setTexturePath(int index,
String texturePath)

**Parameters:**
- `int` `index`
- `String` `texturePath`

**Returns:** `void`

### public String getTexturePath(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public Texture getTexture(int index)

**Parameters:**
- `int` `index`

**Returns:** `Texture`

### public void setTextureScaling(int index,
String scalingStr)

**Parameters:**
- `int` `index`
- `String` `scalingStr`

**Returns:** `void`

### public String getTextureScaling(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\styles\WorldMapStyleV1.WorldMapPolygonStyleLayerV1.html`*
