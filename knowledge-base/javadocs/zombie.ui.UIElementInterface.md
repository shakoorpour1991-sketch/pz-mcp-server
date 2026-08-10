---
title: zombie.ui.UIElementInterface
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.ui
---

# zombie.ui.UIElementInterface

`public interface UIElementInterface`

**Kind:** interface · **Package:** zombie.ui

## Methods

### Boolean isIgnoreLossControl()

**Returns:** `Boolean`

### Boolean isFollowGameWorld()

**Returns:** `Boolean`

### Boolean isDefaultDraw()

**Returns:** `Boolean`

### void render()

**Returns:** `void`

### Boolean isVisible()

**Returns:** `Boolean`

### Boolean isCapture()

**Returns:** `Boolean`

### boolean isModalVisible()

**Returns:** `boolean`

### Double getMaxDrawHeight()

**Returns:** `Double`

### Double getX()

**Returns:** `Double`

### Double getY()

**Returns:** `Double`

### Double getWidth()

**Returns:** `Double`

### Double getHeight()

**Returns:** `Double`

### boolean isOverElement(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### UIElementInterface getParent()

**Returns:** `UIElementInterface`

### boolean onConsumeMouseButtonDown(int arg0,
double arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `boolean`

### boolean onConsumeMouseButtonUp(int arg0,
double arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `boolean`

### void onMouseButtonDownOutside(int arg0,
double arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `void`

### void onMouseButtonUpOutside(int arg0,
double arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `void`

### Boolean onConsumeMouseWheel(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Boolean`

### Boolean isPointOver(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Boolean`

### Boolean onConsumeMouseMove(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Boolean`

### void onExtendMouseMoveOutside(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `void`

### void update()

**Returns:** `void`

### Boolean isMouseOver()

**Returns:** `Boolean`

### boolean isWantKeyEvents()

**Returns:** `boolean`

### boolean onConsumeKeyPress(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### boolean onConsumeKeyRepeat(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### boolean onConsumeKeyRelease(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### boolean isForceCursorVisible()

**Returns:** `boolean`

### int getRenderThisPlayerOnly()

**Returns:** `int`

### boolean isAlwaysOnTop()

**Returns:** `boolean`

### boolean isBackMost()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UIElementInterface.html`*
