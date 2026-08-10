---
title: zombie.ui.HUDButton
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.HUDButton

`public class HUDButton extends UIElement`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.HUDButton

## Fields

### public float notclickedAlpha

### public float clickedalpha

## Constructors

### public HUDButton(String name,
double x,
double y,
String texture,
String highlight,
UIElement display)

**Parameters:**
- `String` `name`
- `double` `x`
- `double` `y`
- `String` `texture`
- `String` `highlight`
- `UIElement` `display`

### public HUDButton(String name,
float x,
float y,
String texture,
String highlight,
UIEventHandler handler)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`
- `String` `texture`
- `String` `highlight`
- `UIEventHandler` `handler`

### public HUDButton(String name,
float x,
float y,
String texture,
String highlight,
String overicon,
UIElement display)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`
- `String` `texture`
- `String` `highlight`
- `String` `overicon`
- `UIElement` `display`

### public HUDButton(String name,
float x,
float y,
String texture,
String highlight,
String overicon,
UIEventHandler handler)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`
- `String` `texture`
- `String` `highlight`
- `String` `overicon`
- `UIEventHandler` `handler`

## Methods

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\HUDButton.html`*
