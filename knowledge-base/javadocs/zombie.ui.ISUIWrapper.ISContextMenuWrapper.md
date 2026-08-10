---
title: zombie.ui.ISUIWrapper.ISContextMenuWrapper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui.ISUIWrapper
---

# zombie.ui.ISUIWrapper.ISContextMenuWrapper

`public class ISContextMenuWrapper extends ISPanelWrapper`

**Kind:** class · **Package:** zombie.ui.ISUIWrapper

## Inheritance
- java.lang.Object
- zombie.ui.ISUIWrapper.ISUIElementWrapper
- zombie.ui.ISUIWrapper.ISPanelWrapper
- zombie.ui.ISUIWrapper.ISContextMenuWrapper

## Constructors

### public ISContextMenuWrapper(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

### public ISContextMenuWrapper(double x,
double y,
double width,
double height,
double zoom)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `zoom`

## Methods

### public Double getNumOptions()

**Returns:** `Double`

### public void addSubMenu(se.krka.kahlua.vm.KahluaTable option,
se.krka.kahlua.vm.KahluaTable menu)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `option`
- `se.krka.kahlua.vm.KahluaTable` `menu`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable addOption(String name,
Object target,
Object onSelect,
Object... params)

**Parameters:**
- `String` `name`
- `Object` `target`
- `Object` `onSelect`
- `Object...` `params`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable addDebugOption(String name,
Object target,
Object onSelect,
Object... params)

**Parameters:**
- `String` `name`
- `Object` `target`
- `Object` `onSelect`
- `Object...` `params`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable addGetUpOption(String name,
Object target,
Object onSelect,
Object... params)

**Parameters:**
- `String` `name`
- `Object` `target`
- `Object` `onSelect`
- `Object...` `params`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getOptionFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void removeLastOption()

**Returns:** `void`

### public static ISContextMenuWrapper getNew(ISUIElementWrapper parentContext)

**Parameters:**
- `ISUIElementWrapper` `parentContext`

**Returns:** `ISContextMenuWrapper`

### public se.krka.kahlua.vm.KahluaTable addActionsOption(String text,
Object getActionsFunction,
Object... args)

**Parameters:**
- `String` `text`
- `Object` `getActionsFunction`
- `Object...` `args`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getContextFromOption(String optionName)

**Parameters:**
- `String` `optionName`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\ISUIWrapper\ISContextMenuWrapper.html`*
