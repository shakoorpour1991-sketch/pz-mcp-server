---
title: zombie.ui.ObjectTooltip.LayoutItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.ObjectTooltip.LayoutItem

`public static class ObjectTooltip.LayoutItem extends Object`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.ObjectTooltip.LayoutItem

## Fields

### public String label

### public float r0

### public float g0

### public float b0

### public float a0

### public boolean hasValue

### public boolean couldHaveValue

### public String value

### public boolean rightJustify

### public float r1

### public float g1

### public float b1

### public float a1

### public float progressFraction

### public int labelWidth

### public int valueWidth

### public int valueWidthRight

### public int progressWidth

### public int height

## Constructors

### public LayoutItem()

## Methods

### public void reset()

**Returns:** `void`

### public void setLabel(String label,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `label`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setValue(String label,
float r,
float g,
float b,
float a)

**Parameters:**
- `String` `label`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setValueRight(int value,
boolean highGood)

**Parameters:**
- `int` `value`
- `boolean` `highGood`

**Returns:** `void`

### public void setValueRightNoPlus(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public void setValueRightNoPlus(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void setProgress(float fraction,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `fraction`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void calcSizes()

**Returns:** `void`

### public void render(int x,
int y,
int mid,
int right,
ObjectTooltip ui)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `mid`
- `int` `right`
- `ObjectTooltip` `ui`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\ObjectTooltip.LayoutItem.html`*
