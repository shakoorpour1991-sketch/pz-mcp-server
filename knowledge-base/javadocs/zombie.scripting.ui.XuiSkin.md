---
title: zombie.scripting.ui.XuiSkin
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.ui
---

# zombie.scripting.ui.XuiSkin

`public class XuiSkin extends Object`

**Kind:** class · **Package:** zombie.scripting.ui

## Inheritance
- java.lang.Object
- zombie.scripting.ui.XuiSkin

## Constructors

### public XuiSkin(String name,
XuiSkinScript script)

**Parameters:**
- `String` `name`
- `XuiSkinScript` `script`

## Methods

### public static XuiSkin Default()

**Returns:** `XuiSkin`

### public static String getDefaultSkinName()

**Returns:** `String`

### public boolean isInvalidated()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public String getEntityDisplayName(String entityAlias)

**Parameters:**
- `String` `entityAlias`

**Returns:** `String`

### public XuiSkin.EntityUiStyle getEntityUiStyle(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `XuiSkin.EntityUiStyle`

### public XuiSkin.ComponentUiStyle getComponentUiStyle(String entityAlias,
ComponentType componentType)

**Parameters:**
- `String` `entityAlias`
- `ComponentType` `componentType`

**Returns:** `XuiSkin.ComponentUiStyle`

### public Color color(String alias)

**Parameters:**
- `String` `alias`

**Returns:** `Color`

### public XuiLuaStyle getDefault(String luaClass)

**Parameters:**
- `String` `luaClass`

**Returns:** `XuiLuaStyle`

### public XuiLuaStyle get(String luaClass,
String alias)

**Parameters:**
- `String` `luaClass`
- `String` `alias`

**Returns:** `XuiLuaStyle`

### public void debugPrint()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ui\XuiSkin.html`*
