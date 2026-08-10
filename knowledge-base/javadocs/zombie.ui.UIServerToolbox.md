---
title: zombie.ui.UIServerToolbox
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UIServerToolbox

`public final class UIServerToolbox extends NewWindow implements ICoopServerMessageListener, UIEventHandler`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.NewWindow
- zombie.ui.UIServerToolbox

## Fields

### public static UIServerToolbox instance

### public boolean autoAccept

## Constructors

### public UIServerToolbox(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

## Methods

### public void render()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void OnCoopServerMessage(String tag,
String cookie,
String payload)

**Parameters:**
- `String` `tag`
- `String` `cookie`
- `String` `payload`

**Returns:** `void`

### public void shutdown()

**Returns:** `void`

### public void DoubleClick(String name,
int x,
int y)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void ModalClick(String name,
String chosen)

**Parameters:**
- `String` `name`
- `String` `chosen`

**Returns:** `void`

### public void Selected(String name,
int selected,
int lastSelected)

**Parameters:**
- `String` `name`
- `int` `selected`
- `int` `lastSelected`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UIServerToolbox.html`*
