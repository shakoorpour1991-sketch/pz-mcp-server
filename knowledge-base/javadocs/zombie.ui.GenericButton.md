---
title: zombie.ui.GenericButton
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.GenericButton

`public final class GenericButton extends UIElement`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.GenericButton

## Fields

### public boolean clicked

### public UIElement messageTarget

### public boolean mouseOver

### public String name

### public String text

## Constructors

### public GenericButton(UIElement messages,
float x,
float y,
float width,
float height,
String name,
String text,
Texture upTex,
Texture downTex)

**Parameters:**
- `UIElement` `messages`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `String` `name`
- `String` `text`
- `Texture` `upTex`
- `Texture` `downTex`

### public GenericButton(UIEventHandler messages,
float x,
float y,
float width,
float height,
String name,
String text,
Texture upTex,
Texture downTex)

**Parameters:**
- `UIEventHandler` `messages`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `String` `name`
- `String` `text`
- `Texture` `upTex`
- `Texture` `downTex`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\GenericButton.html`*
