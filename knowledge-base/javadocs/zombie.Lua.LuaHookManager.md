---
title: zombie.Lua.LuaHookManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.Lua
---

# zombie.Lua.LuaHookManager

`public final class LuaHookManager extends Object implements se.krka.kahlua.vm.JavaFunction`

**Kind:** class · **Package:** zombie.Lua

## Inheritance
- java.lang.Object
- zombie.Lua.LuaHookManager

## Fields

### public static final ArrayList<se.krka.kahlua.vm.LuaClosure> OnTickCallbacks

## Constructors

### public LuaHookManager()

## Methods

### public static boolean TriggerHook(String event)

**Parameters:**
- `String` `event`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1)

**Parameters:**
- `String` `event`
- `Object` `param1`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1,
Object param2)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1,
Object param2,
Object param3)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1,
Object param2,
Object param3,
Object param4)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1,
Object param2,
Object param3,
Object param4,
Object param5)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`
- `Object` `param5`

**Returns:** `boolean`

### public static boolean TriggerHook(String event,
Object param1,
Object param2,
Object param3,
Object param4,
Object param5,
Object param6)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`
- `Object` `param5`
- `Object` `param6`

**Returns:** `boolean`

### public static void AddEvent(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void clear()

**Returns:** `void`

### public static void register(se.krka.kahlua.vm.Platform platform,
se.krka.kahlua.vm.KahluaTable environment)

**Parameters:**
- `se.krka.kahlua.vm.Platform` `platform`
- `se.krka.kahlua.vm.KahluaTable` `environment`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public int call(se.krka.kahlua.vm.LuaCallFrame callFrame,
int nArguments)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `callFrame`
- `int` `nArguments`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\Lua\LuaHookManager.html`*
