---
title: zombie.popman.ZombiePopulationRenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.ZombiePopulationRenderer

`public final class ZombiePopulationRenderer extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.ZombiePopulationRenderer

## Constructors

### public ZombiePopulationRenderer()

## Methods

### public float worldToScreenX(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public float worldToScreenY(float y)

**Parameters:**
- `float` `y`

**Returns:** `float`

### public float uiToWorldX(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public float uiToWorldY(float y)

**Parameters:**
- `float` `y`

**Returns:** `float`

### public void renderString(float x,
float y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void renderRect(float x,
float y,
float w,
float h,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderLine(float x1,
float y1,
float x2,
float y2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderCircle(float x,
float y,
float radius,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `radius`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderZombie(float x,
float y,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void renderVehicle(int sqlid,
float x,
float y,
float r,
float g,
float b)

**Parameters:**
- `int` `sqlid`
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void outlineRect(float x,
float y,
float w,
float h,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `w`
- `float` `h`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderCellInfo(int cellX,
int cellY,
int effectivePopulation,
int targetPopulation,
float lastRepopTime)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `int` `effectivePopulation`
- `int` `targetPopulation`
- `float` `lastRepopTime`

**Returns:** `void`

### public void render(UIElement ui,
float zoom,
float xPos,
float yPos)

**Parameters:**
- `UIElement` `ui`
- `float` `zoom`
- `float` `xPos`
- `float` `yPos`

**Returns:** `void`

### public void setWallFollowerStart(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void setWallFollowerEnd(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void wallFollowerMouseMove(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public ConfigOption getOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setBoolean(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public boolean getBoolean(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void save()

**Returns:** `void`

### public void load()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\ZombiePopulationRenderer.html`*
