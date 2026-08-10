---
title: zombie.worldMap.streets.WorldMapStreet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.streets
---

# zombie.worldMap.streets.WorldMapStreet

`public final class WorldMapStreet extends Object`

**Kind:** class · **Package:** zombie.worldMap.streets

## Inheritance
- java.lang.Object
- zombie.worldMap.streets.WorldMapStreet

## Constructors

### public WorldMapStreet(WorldMapStreets owner,
String translatedText,
StreetPoints points)

**Parameters:**
- `WorldMapStreets` `owner`
- `String` `translatedText`
- `StreetPoints` `points`

## Methods

### public WorldMapStreets getOwner()

**Returns:** `WorldMapStreets`

### public float getMinX()

**Returns:** `float`

### public float getMinY()

**Returns:** `float`

### public float getMaxX()

**Returns:** `float`

### public float getMaxY()

**Returns:** `float`

### public int getNumPoints()

**Returns:** `int`

### public float getPointX(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public float getPointY(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public float getLength(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public float getLengthSquared(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `float`

### public StreetPoints getPoints()

**Returns:** `StreetPoints`

### public void addPoint(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void insertPoint(int index,
float x,
float y)

**Parameters:**
- `int` `index`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void removePoint(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void setPoint(int index,
float x,
float y)

**Parameters:**
- `int` `index`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void setWidth(int width)

**Parameters:**
- `int` `width`

**Returns:** `void`

### public int getWidth()

**Returns:** `int`

### public void reverseDirection()

**Returns:** `void`

### public String getTranslatedText()

**Returns:** `String`

### public void setTranslatedText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public UIFont getFont(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `UIFont`

### public double getFontScale(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `double`

### public ArrayList<Intersection> getIntersections()

**Returns:** `ArrayList<Intersection>`

### public void resetIntersectionRenderFlag()

**Returns:** `void`

### public boolean getPointOn(UIWorldMap ui,
float t,
PointOn pointOn)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `t`
- `PointOn` `pointOn`

**Returns:** `boolean`

### public void render(UIWorldMap ui,
StreetRenderData renderData)

**Parameters:**
- `UIWorldMap` `ui`
- `StreetRenderData` `renderData`

**Returns:** `void`

### public void renderLines(UIWorldMap ui,
float r,
float g,
float b,
float a,
int thickness,
StreetRenderData renderData)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`
- `StreetRenderData` `renderData`

**Returns:** `void`

### public void renderIntersections(UIWorldMap ui,
float r,
float g,
float b,
float a)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void clipToObscuredCells()

**Returns:** `void`

### public float getClosestPointOn(UIWorldMap ui,
float uiX,
float uiY,
ClosestPoint closestPoint)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `uiX`
- `float` `uiY`
- `ClosestPoint` `closestPoint`

**Returns:** `float`

### public float getClosestPointOn(float worldX,
float worldY,
ClosestPoint closestPoint)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `ClosestPoint` `closestPoint`

**Returns:** `float`

### public int pickPoint(UIWorldMap ui,
float uiX,
float uiY)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `uiX`
- `float` `uiY`

**Returns:** `int`

### public ClosestPoint getAddPointLocation(UIWorldMap ui,
float uiX,
float uiY,
ClosestPoint closestPoint)

**Parameters:**
- `UIWorldMap` `ui`
- `float` `uiX`
- `float` `uiY`
- `ClosestPoint` `closestPoint`

**Returns:** `ClosestPoint`

### public void createHighlightPolygons(gnu.trove.list.array.TFloatArrayList polygon,
gnu.trove.list.array.TFloatArrayList triangles)

**Parameters:**
- `gnu.trove.list.array.TFloatArrayList` `polygon`
- `gnu.trove.list.array.TFloatArrayList` `triangles`

**Returns:** `void`

### public void createPolygon(gnu.trove.list.array.TFloatArrayList points)

**Parameters:**
- `gnu.trove.list.array.TFloatArrayList` `points`

**Returns:** `void`

### public void triangulate(gnu.trove.list.array.TFloatArrayList polygon,
gnu.trove.list.array.TFloatArrayList triangles)

**Parameters:**
- `gnu.trove.list.array.TFloatArrayList` `polygon`
- `gnu.trove.list.array.TFloatArrayList` `triangles`

**Returns:** `void`

### public boolean isOnScreen(UIWorldMap ui)

**Parameters:**
- `UIWorldMap` `ui`

**Returns:** `boolean`

### public WorldMapStreet createCopy(WorldMapStreets owner)

**Parameters:**
- `WorldMapStreets` `owner`

**Returns:** `WorldMapStreet`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\streets\WorldMapStreet.html`*
