---
title: se.krka.kahlua.stdlib.BaseLib
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.stdlib
---

# se.krka.kahlua.stdlib.BaseLib

`public final class BaseLib extends Object implements JavaFunction`

**Kind:** class · **Package:** se.krka.kahlua.stdlib

## Inheritance
- java.lang.Object
- se.krka.kahlua.stdlib.BaseLib

## Constructors

### public BaseLib(int int0)

**Parameters:**
- `int` `int0`

## Methods

### public static void register(KahluaTable table)

**Parameters:**
- `KahluaTable` `table`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public int call(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static int pcall(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static void setPrintCallback(Consumer<String> consumer)

**Parameters:**
- `Consumer<String>` `consumer`

**Returns:** `void`

### public static void setmetatable(KahluaThread kahluaThread,
Object object0,
KahluaTable table,
boolean boolean0)

**Parameters:**
- `KahluaThread` `kahluaThread`
- `Object` `object0`
- `KahluaTable` `table`
- `boolean` `boolean0`

**Returns:** `void`

### public static int collectgarbage(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static boolean luaEquals(Object object1,
Object object0)

**Parameters:**
- `Object` `object1`
- `Object` `object0`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\stdlib\BaseLib.html`*
