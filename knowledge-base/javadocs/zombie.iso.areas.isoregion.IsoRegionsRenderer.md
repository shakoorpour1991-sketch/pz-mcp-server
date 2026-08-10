---
title: zombie.iso.areas.isoregion.IsoRegionsRenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion
---

# zombie.iso.areas.isoregion.IsoRegionsRenderer

`public class IsoRegionsRenderer extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.IsoRegionsRenderer

## Description

TurboTuTone.
Base functionality copied from ZombiePopulationRenderer

## Constructors

### public IsoRegionsRenderer()

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

### public void renderStringUI(float x,
float y,
String str,
Color c)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `str`
- `Color` `c`

**Returns:** `void`

### public void renderStringUI(float x,
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

### public void renderSquare(float x,
float y,
float r,
float g,
float b,
float alpha)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `alpha`

**Returns:** `void`

### public void renderEntity(float size,
float x,
float y,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `size`
- `float` `x`
- `float` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

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

### public void recalcSurroundings()

**Returns:** `void`

### public boolean hasChunkRegion(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public IsoChunkRegion getChunkRegion(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoChunkRegion`

### public void setSelected(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void setSelectedWorld(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void unsetSelected()

**Returns:** `void`

### public boolean isHasSelected()

**Returns:** `boolean`

### public void setEditSquareCoord(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public String getActiveEditKind()

**Returns:** `String`

### public boolean isEditingEnabled()

**Returns:** `boolean`

### public void editRotate()

**Returns:** `void`

### public ConfigOption getEditOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getEditOptionCount()

**Returns:** `int`

### public ConfigOption getEditOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setEditOption(int index,
boolean b)

**Parameters:**
- `int` `index`
- `boolean` `b`

**Returns:** `void`

### public int getZLevel()

**Returns:** `int`

### public ConfigOption getZLevelOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getZLevelOptionCount()

**Returns:** `int`

### public ConfigOption getZLevelOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setZLevelOption(int index,
boolean b)

**Parameters:**
- `int` `index`
- `boolean` `b`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\IsoRegionsRenderer.html`*
