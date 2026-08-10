---
title: zombie.ui.NewWindow
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.NewWindow

`public class NewWindow extends UIElement`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.NewWindow

## Fields

### public int clickX

### public int clickY

### public int clientH

### public int clientW

### public boolean movable

### public boolean moving

### public int ncclientH

### public int ncclientW

### public Stack<org.lwjgl.util.Rectangle> nestedItems

### public boolean resizeToFitY

## Constructors

### public NewWindow(int x,
int y,
int width,
int height,
boolean bHasClose)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `boolean` `bHasClose`

## Methods

### public void Nest(UIElement el,
int t,
int r,
int b,
int l)

**Parameters:**
- `UIElement` `el`
- `int` `t`
- `int` `r`
- `int` `b`
- `int` `l`

**Returns:** `void`

### public void ButtonClicked(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void setMovable(boolean bMoveable)

**Parameters:**
- `boolean` `bMoveable`

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

### public void render()

**Returns:** `void`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\NewWindow.html`*
