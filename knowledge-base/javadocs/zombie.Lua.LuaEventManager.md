---
title: zombie.Lua.LuaEventManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.Lua
---

# zombie.Lua.LuaEventManager

`public final class LuaEventManager extends Object implements se.krka.kahlua.vm.JavaFunction`

**Kind:** class · **Package:** zombie.Lua

## Inheritance
- java.lang.Object
- zombie.Lua.LuaEventManager

## Fields

### public static final ArrayList<se.krka.kahlua.vm.LuaClosure> OnTickCallbacks

## Constructors

### public LuaEventManager()

## Methods

### public static void RunQueuedEvents()

**Returns:** `void`

### public static void triggerEvent(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param1)

**Parameters:**
- `String` `event`
- `Object` `param1`

**Returns:** `void`

### public static void triggerEventGarbage(String event,
Object param1)

**Parameters:**
- `String` `event`
- `Object` `param1`

**Returns:** `void`

### public static void triggerEventUnique(String event,
Object param1)

**Parameters:**
- `String` `event`
- `Object` `param1`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param1,
Object param2)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`

**Returns:** `void`

### public static void triggerEventGarbage(String event,
Object param1,
Object param2)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param1,
Object param2,
Object param3)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`

**Returns:** `void`

### public static void triggerEventGarbage(String event,
Object param1,
Object param2,
Object param3)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`

**Returns:** `void`

### public static void triggerEvent(String event,
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

**Returns:** `void`

### public static void triggerEventGarbage(String event,
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

**Returns:** `void`

### public static void triggerEvent(String event,
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

**Returns:** `void`

### public static void triggerEvent(String event,
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

**Returns:** `void`

### public static void triggerEvent(String event,
Object param1,
Object param2,
Object param3,
Object param4,
Object param5,
Object param6,
Object param7)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`
- `Object` `param5`
- `Object` `param6`
- `Object` `param7`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param1,
Object param2,
Object param3,
Object param4,
Object param5,
Object param6,
Object param7,
Object param8)

**Parameters:**
- `String` `event`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`
- `Object` `param5`
- `Object` `param6`
- `Object` `param7`
- `Object` `param8`

**Returns:** `void`

### public static Event AddEvent(String name)

**Parameters:**
- `String` `name`

**Returns:** `Event`

### public static void clear()

**Returns:** `void`

### public static void register(se.krka.kahlua.vm.Platform platform,
se.krka.kahlua.vm.KahluaTable environment)

**Parameters:**
- `se.krka.kahlua.vm.Platform` `platform`
- `se.krka.kahlua.vm.KahluaTable` `environment`

**Returns:** `void`

### public static void reroute(se.krka.kahlua.vm.Prototype prototype,
se.krka.kahlua.vm.LuaClosure luaClosure)

**Parameters:**
- `se.krka.kahlua.vm.Prototype` `prototype`
- `se.krka.kahlua.vm.LuaClosure` `luaClosure`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void getEvents(ArrayList<Event> eventList,
HashMap<String,Event> eventMap)

**Parameters:**
- `ArrayList<Event>` `eventList`
- `HashMap<String,Event>` `eventMap`

**Returns:** `void`

### public static void setEvents(ArrayList<Event> eventList,
HashMap<String,Event> eventMap)

**Parameters:**
- `ArrayList<Event>` `eventList`
- `HashMap<String,Event>` `eventMap`

**Returns:** `void`

### public static void ResetCallbacks()

**Returns:** `void`

### public int call(se.krka.kahlua.vm.LuaCallFrame callFrame,
int nArguments)

Description copied from interface: se.krka.kahlua.vm.JavaFunction

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `callFrame`
- `int` `nArguments`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\Lua\LuaEventManager.html`*
