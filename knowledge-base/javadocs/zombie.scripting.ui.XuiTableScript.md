---
title: zombie.scripting.ui.XuiTableScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.ui
---

# zombie.scripting.ui.XuiTableScript

`public class XuiTableScript extends XuiScript`

**Kind:** class · **Package:** zombie.scripting.ui

## Inheritance
- java.lang.Object
- zombie.scripting.ui.XuiScript
- zombie.scripting.ui.XuiTableScript

## Constructors

### public XuiTableScript(String xuiLayoutName,
boolean readAltKeys,
XuiScriptType type)

**Parameters:**
- `String` `xuiLayoutName`
- `boolean` `readAltKeys`
- `XuiScriptType` `type`

## Methods

### public XuiScript.XuiString getCellStyle()

**Returns:** `XuiScript.XuiString`

### public XuiScript.XuiString getRowStyle()

**Returns:** `XuiScript.XuiString`

### public XuiScript.XuiString getColumnStyle()

**Returns:** `XuiScript.XuiString`

### public int getColumnCount()

**Returns:** `int`

### public int getRowCount()

**Returns:** `int`

### public XuiScript getColumn(int index)

**Parameters:**
- `int` `index`

**Returns:** `XuiScript`

### public XuiScript getRow(int index)

**Parameters:**
- `int` `index`

**Returns:** `XuiScript`

### public XuiScript getCell(int column,
int row)

**Parameters:**
- `int` `column`
- `int` `row`

**Returns:** `XuiScript`

### public <T extends XuiScript> void LoadColumnsRows(ScriptParser.Block block,
ArrayList<T> list)

**Returns:** `void`

### public void Load(ScriptParser.Block block)

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ui\XuiTableScript.html`*
