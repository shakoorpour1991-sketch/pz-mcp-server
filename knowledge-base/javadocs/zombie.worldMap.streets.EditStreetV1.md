---
title: zombie.worldMap.streets.EditStreetV1
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.streets
---

# zombie.worldMap.streets.EditStreetV1

`public final class EditStreetV1 extends PooledObject`

**Kind:** class · **Package:** zombie.worldMap.streets

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.worldMap.streets.EditStreetV1

## Constructors

### public EditStreetV1()

## Methods

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

### public void addPoint(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void insertPoint(float x,
float y)

**Parameters:**
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

### public String getTranslatedText()

**Returns:** `String`

### public void setTranslatedText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public int getWidth()

**Returns:** `int`

### public void setWidth(int width)

**Parameters:**
- `int` `width`

**Returns:** `void`

### public void reverseDirection()

**Returns:** `void`

### public int pickPoint(float uiX,
float uiY)

**Parameters:**
- `float` `uiX`
- `float` `uiY`

**Returns:** `int`

### public org.joml.Vector2f getAddPointLocation(float uiX,
float uiY,
org.joml.Vector2f closest)

**Parameters:**
- `float` `uiX`
- `float` `uiY`
- `org.joml.Vector2f` `closest`

**Returns:** `org.joml.Vector2f`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\streets\EditStreetV1.html`*
