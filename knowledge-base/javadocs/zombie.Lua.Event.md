---
title: zombie.Lua.Event
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.Lua
---

# zombie.Lua.Event

`public final class Event extends Object`

**Kind:** class · **Package:** zombie.Lua

## Inheritance
- java.lang.Object
- zombie.Lua.Event

## Fields

### public static final int ADD

### public static final int NUM_FUNCTIONS

### public final ArrayList<se.krka.kahlua.vm.LuaClosure> callbacks

### public String name

## Constructors

### public Event(String name,
int index)

**Parameters:**
- `String` `name`
- `int` `index`

## Methods

### public boolean trigger(se.krka.kahlua.vm.KahluaTable env,
se.krka.kahlua.integration.LuaCaller caller,
Object[] params)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `env`
- `se.krka.kahlua.integration.LuaCaller` `caller`
- `Object[]` `params`

**Returns:** `boolean`

### public void register(se.krka.kahlua.vm.Platform platform,
se.krka.kahlua.vm.KahluaTable environment)

**Parameters:**
- `se.krka.kahlua.vm.Platform` `platform`
- `se.krka.kahlua.vm.KahluaTable` `environment`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\Lua\Event.html`*
