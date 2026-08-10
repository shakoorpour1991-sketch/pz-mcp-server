---
title: zombie.scripting.ui.XuiManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.ui
---

# zombie.scripting.ui.XuiManager

`public class XuiManager extends Object`

**Kind:** class · **Package:** zombie.scripting.ui

## Inheritance
- java.lang.Object
- zombie.scripting.ui.XuiManager

## Fields

### public static final EnumSet<ScriptType> XUI_SCRIPT_TYPES

## Constructors

### public XuiManager()

## Methods

### public static String getDefaultSkinName()

**Returns:** `String`

### public static ArrayList<XuiScript> GetCombinedScripts()

**Returns:** `ArrayList<XuiScript>`

### public static ArrayList<XuiScript> GetAllLayouts()

**Returns:** `ArrayList<XuiScript>`

### public static ArrayList<XuiScript> GetAllStyles()

**Returns:** `ArrayList<XuiScript>`

### public static ArrayList<XuiScript> GetAllDefaultStyles()

**Returns:** `ArrayList<XuiScript>`

### public static XuiLayoutScript GetLayoutScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public static XuiLayoutScript GetStyleScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public static XuiLayoutScript GetDefaultStyleScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public static XuiScript GetLayout(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiScript`

### public static XuiScript GetStyle(String style)

**Parameters:**
- `String` `style`

**Returns:** `XuiScript`

### public static XuiScript GetDefaultStyle(String luaClass)

**Parameters:**
- `String` `luaClass`

**Returns:** `XuiScript`

### public static XuiSkin GetDefaultSkin()

**Returns:** `XuiSkin`

### public static XuiSkin GetSkin(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiSkin`

### public static void setParseOnce(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static void ParseScripts()
throws Exception

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ui\XuiManager.html`*
