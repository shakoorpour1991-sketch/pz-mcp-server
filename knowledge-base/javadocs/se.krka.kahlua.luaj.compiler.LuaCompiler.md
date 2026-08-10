---
title: se.krka.kahlua.luaj.compiler.LuaCompiler
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.luaj.compiler
---

# se.krka.kahlua.luaj.compiler.LuaCompiler

`public class LuaCompiler extends Object implements JavaFunction`

**Kind:** class · **Package:** se.krka.kahlua.luaj.compiler

## Inheritance
- java.lang.Object
- se.krka.kahlua.luaj.compiler.LuaCompiler

## Fields

### public static boolean rewriteEvents

## Methods

### public static void register(KahluaTable table)

**Parameters:**
- `KahluaTable` `table`

**Returns:** `void`

### public int call(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static int loadstream(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public static LuaClosure loadis(InputStream inputStream,
String string,
KahluaTable table)
throws IOException

**Parameters:**
- `InputStream` `inputStream`
- `String` `string`
- `KahluaTable` `table`

**Returns:** `LuaClosure`

### public static LuaClosure loadis(Reader reader,
String string,
KahluaTable table)
throws IOException

**Parameters:**
- `Reader` `reader`
- `String` `string`
- `KahluaTable` `table`

**Returns:** `LuaClosure`

### public static LuaClosure loadstring(String string1,
String string0,
KahluaTable table)
throws IOException

**Parameters:**
- `String` `string1`
- `String` `string0`
- `KahluaTable` `table`

**Returns:** `LuaClosure`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\luaj\compiler\LuaCompiler.html`*
