---
title: zombie.globalObjects.CGlobalObjectSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.CGlobalObjectSystem

`public final class CGlobalObjectSystem extends GlobalObjectSystem`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.GlobalObjectSystem
- zombie.globalObjects.CGlobalObjectSystem

## Constructors

### public CGlobalObjectSystem(String name)

**Parameters:**
- `String` `name`

## Methods

### public void sendCommand(String command,
IsoPlayer player,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `command`
- `IsoPlayer` `player`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void receiveServerCommand(String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void receiveNewLuaObjectAt(int x,
int y,
int z,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void receiveRemoveLuaObjectAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void receiveUpdateLuaObjectAt(int x,
int y,
int z,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\CGlobalObjectSystem.html`*
