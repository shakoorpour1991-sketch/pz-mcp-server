---
title: zombie.scripting.ui.XuiLuaStyle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.ui
---

# zombie.scripting.ui.XuiLuaStyle

`public class XuiLuaStyle extends Object`

**Kind:** class · **Package:** zombie.scripting.ui

## Inheritance
- java.lang.Object
- zombie.scripting.ui.XuiLuaStyle

## Fields

### public static final EnumSet<XuiVarType> ALLOWED_VAR_TYPES

## Methods

### public static void ReadConfigs(ArrayList<XuiConfigScript> configs)
throws Exception

**Parameters:**
- `ArrayList<XuiConfigScript>` `configs`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public String getXuiLuaClass()

**Returns:** `String`

### public String getXuiStyleName()

**Returns:** `String`

### public XuiLuaStyle.XuiVar<?,?> getVar(String key)

**Parameters:**
- `String` `key`

**Returns:** `XuiLuaStyle.XuiVar<?,?>`

### public ArrayList<XuiLuaStyle.XuiVar<?,?>> getVars()

**Returns:** `ArrayList<XuiLuaStyle.XuiVar<?,?>>`

### public boolean loadVar(String key,
String val)
throws Exception

**Parameters:**
- `String` `key`
- `String` `val`

**Returns:** `boolean`

### public void copyVarsFrom(XuiLuaStyle other)

**Parameters:**
- `XuiLuaStyle` `other`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ui\XuiLuaStyle.html`*
