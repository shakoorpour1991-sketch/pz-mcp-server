---
title: zombie.ui.ISUIWrapper.LuaHelpers
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui.ISUIWrapper
---

# zombie.ui.ISUIWrapper.LuaHelpers

`public class LuaHelpers extends Object`

**Kind:** class · **Package:** zombie.ui.ISUIWrapper

## Inheritance
- java.lang.Object
- zombie.ui.ISUIWrapper.LuaHelpers

## Constructors

### public LuaHelpers()

## Methods

### public static Object callLuaClass(String type,
String function,
se.krka.kahlua.vm.KahluaTable context,
Object... args)

**Parameters:**
- `String` `type`
- `String` `function`
- `se.krka.kahlua.vm.KahluaTable` `context`
- `Object...` `args`

**Returns:** `Object`

### public static Object[] callLuaClassReturnMultiple(String type,
String function,
se.krka.kahlua.vm.KahluaTable context,
Object... args)

**Parameters:**
- `String` `type`
- `String` `function`
- `se.krka.kahlua.vm.KahluaTable` `context`
- `Object...` `args`

**Returns:** `Object[]`

### public static se.krka.kahlua.vm.KahluaTable getJoypadState(double playerNum)

**Parameters:**
- `double` `playerNum`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean castBoolean(Object luaObject)

**Parameters:**
- `Object` `luaObject`

**Returns:** `boolean`

### public static Double castDouble(Object luaObject)

**Parameters:**
- `Object` `luaObject`

**Returns:** `Double`

### public static String castString(Object luaObject)

**Parameters:**
- `Object` `luaObject`

**Returns:** `String`

### public static boolean tableContainsKey(se.krka.kahlua.vm.KahluaTable table,
Object value)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `value`

**Returns:** `boolean`

### public static boolean tableContainsValue(se.krka.kahlua.vm.KahluaTable table,
Object value)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `value`

**Returns:** `boolean`

### public static void tableSort(se.krka.kahlua.vm.KahluaTable table,
Comparator<Map.Entry<Object,Object>> comparator)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Comparator<Map.Entry<Object,Object>>` `comparator`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getPlayerContextMenu(double id)

**Parameters:**
- `double` `id`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getPlayerData(double id)

**Parameters:**
- `double` `id`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\ISUIWrapper\LuaHelpers.html`*
