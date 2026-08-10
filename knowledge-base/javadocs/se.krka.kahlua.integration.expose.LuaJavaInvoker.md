---
title: se.krka.kahlua.integration.expose.LuaJavaInvoker
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration.expose
---

# se.krka.kahlua.integration.expose.LuaJavaInvoker

`public class LuaJavaInvoker extends Object implements JavaFunction`

**Kind:** class · **Package:** se.krka.kahlua.integration.expose

## Inheritance
- java.lang.Object
- se.krka.kahlua.integration.expose.LuaJavaInvoker

## Constructors

### public LuaJavaInvoker(LuaJavaClassExposer luaJavaClassExposer,
KahluaConverterManager kahluaConverterManager,
Class<?> clazzx,
String string,
Caller callerx)

**Parameters:**
- `LuaJavaClassExposer` `luaJavaClassExposer`
- `KahluaConverterManager` `kahluaConverterManager`
- `Class<?>` `clazzx`
- `String` `string`
- `Caller` `callerx`

## Methods

### public MethodArguments prepareCall(LuaCallFrame luaCallFrame,
int int3)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int3`

**Returns:** `MethodArguments`

### public int call(LuaCallFrame luaCallFrame,
int int0)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int0`

**Returns:** `int`

### public int call(MethodArguments methodArguments)

**Parameters:**
- `MethodArguments` `methodArguments`

**Returns:** `int`

### public MethodDebugInformation getMethodDebugData()

**Returns:** `MethodDebugInformation`

### public String toString()

**Returns:** `String`

### public int getNumMethodParams()

**Returns:** `int`

### public boolean equals(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public boolean matchesArgumentTypes(LuaCallFrame luaCallFrame,
int int1)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int1`

**Returns:** `boolean`

### public boolean matchesArgumentTypesOrPrimitives(LuaCallFrame luaCallFrame,
int int1)

**Parameters:**
- `LuaCallFrame` `luaCallFrame`
- `int` `int1`

**Returns:** `boolean`

### public boolean isAllInt()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\expose\LuaJavaInvoker.html`*
