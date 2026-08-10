---
title: zombie.ui.UIDebugConsole
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UIDebugConsole

`public final class UIDebugConsole extends NewWindow`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.NewWindow
- zombie.ui.UIDebugConsole

## Fields

### public static UIDebugConsole instance

### public UITextBox2 commandLine

### public int previousIndex

### public boolean debounceUp

### public boolean debounceDown

## Constructors

### public UIDebugConsole(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

## Methods

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onMouseUp(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void onMouseUpOutside(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `void`

### public Boolean onMouseMove(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `Boolean`

### public void render()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void ProcessCommand()

**Returns:** `void`

### public void onOtherKey(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public int levenshteinDistance(CharSequence lhs,
CharSequence rhs)

**Parameters:**
- `CharSequence` `lhs`
- `CharSequence` `rhs`

**Returns:** `int`

### public void addOutput(byte[] b,
int off,
int len)

**Parameters:**
- `byte[]` `b`
- `int` `off`
- `int` `len`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UIDebugConsole.html`*
