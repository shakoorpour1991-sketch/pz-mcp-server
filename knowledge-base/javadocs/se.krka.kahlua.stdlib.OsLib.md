---
title: se.krka.kahlua.stdlib.OsLib
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.stdlib
---

# se.krka.kahlua.stdlib.OsLib

`public class OsLib extends Object implements JavaFunction`

**Kind:** class · **Package:** se.krka.kahlua.stdlib

## Inheritance
- java.lang.Object
- se.krka.kahlua.stdlib.OsLib

## Fields

### public static final int TIME_DIVIDEND

### public static final double TIME_DIVIDEND_INVERTED

## Methods

### public static void register(Platform platform,
KahluaTable table1)

**Parameters:**
- `Platform` `platform`
- `KahluaTable` `table1`

**Returns:** `void`

### public int call(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static Object getdate(String string,
Platform platform)

**Parameters:**
- `String` `string`
- `Platform` `platform`

**Returns:** `Object`

### public static Object getdate(String string,
long long0,
Platform platform)

**Parameters:**
- `String` `string`
- `long` `long0`
- `Platform` `platform`

**Returns:** `Object`

### public static String formatTime(String string,
Calendar calendar)

**Parameters:**
- `String` `string`
- `Calendar` `calendar`

**Returns:** `String`

### public static KahluaTable getTableFromDate(Calendar calendar,
Platform platform)

**Parameters:**
- `Calendar` `calendar`
- `Platform` `platform`

**Returns:** `KahluaTable`

### public static Date getDateFromTable(KahluaTable table)

**Parameters:**
- `KahluaTable` `table`

**Returns:** `Date`

### public static int getDayOfYear(Calendar calendar1)

**Parameters:**
- `Calendar` `calendar1`

**Returns:** `int`

### public static int getWeekOfYear(Calendar calendar1,
boolean boolean0,
boolean boolean1)

**Parameters:**
- `Calendar` `calendar1`
- `boolean` `boolean0`
- `boolean` `boolean1`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\stdlib\OsLib.html`*
