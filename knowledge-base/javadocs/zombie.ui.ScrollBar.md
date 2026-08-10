---
title: zombie.ui.ScrollBar
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.ScrollBar

`public final class ScrollBar extends UIElement`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.ScrollBar

## Fields

### public final Color backgroundColour

### public final Color buttonColour

### public final Color buttonHighlightColour

### public boolean isVerticle

## Constructors

### public ScrollBar(String name,
UIEventHandler messages,
int xPos,
int yPos,
int length,
boolean isVertical)

**Parameters:**
- `String` `name`
- `UIEventHandler` `messages`
- `int` `xPos`
- `int` `yPos`
- `int` `length`
- `boolean` `isVertical`

## Methods

### public void SetParentTextBox(UITextBox2 parent)

**Parameters:**
- `UITextBox2` `parent`

**Returns:** `void`

### public void setHeight(double height)

**Parameters:**
- `double` `height` — the height to set

**Returns:** `void`

### public void render()

**Returns:** `void`

### public Boolean onMouseMove(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `Boolean`

### public void onMouseMoveOutside(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `void`

### public Boolean onMouseUp(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public boolean isBeingDragged()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void scrollToBottom()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\ScrollBar.html`*
