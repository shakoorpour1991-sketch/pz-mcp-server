---
title: zombie.gameStates.DebugChunkState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.gameStates
---

# zombie.gameStates.DebugChunkState

`public final class DebugChunkState extends GameState`

**Kind:** class · **Package:** zombie.gameStates

## Inheritance
- java.lang.Object
- zombie.gameStates.GameState
- zombie.gameStates.DebugChunkState

## Fields

### public static DebugChunkState instance

### public int z

### public float gridXf

### public float gridYf

## Constructors

### public DebugChunkState()

## Methods

### public void enter()

**Returns:** `void`

### public void yield()

**Returns:** `void`

### public void reenter()

**Returns:** `void`

### public void exit()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public GameStateMachine.StateAction update()

**Returns:** `GameStateMachine.StateAction`

### public static DebugChunkState checkInstance()

**Returns:** `DebugChunkState`

### public void renderScene()

**Returns:** `void`

### public void setTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public GameStateMachine.StateAction updateScene()

**Returns:** `GameStateMachine.StateAction`

### public Object fromLua0(String func)

**Parameters:**
- `String` `func`

**Returns:** `Object`

### public Object fromLua1(String func,
Object arg0)

**Parameters:**
- `String` `func`
- `Object` `arg0`

**Returns:** `Object`

### public Object fromLua2(String func,
Object arg0,
Object arg1)

**Parameters:**
- `String` `func`
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `Object`

### public void drawObjectAtCursor()

**Returns:** `void`

### public LosUtil.TestResults lineClearCached(IsoCell cell,
int x1,
int y1,
int z1,
int x0,
int y0,
int z0,
boolean bIgnoreDoors)

**Parameters:**
- `IsoCell` `cell`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x0`
- `int` `y0`
- `int` `z0`
- `boolean` `bIgnoreDoors`

**Returns:** `LosUtil.TestResults`

### public float getObjectAtCursorScale()

**Returns:** `float`

### public ConfigOption getOptionByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `ConfigOption`

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public void setBoolean(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

**Returns:** `void`

### public boolean getBoolean(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void save()

**Returns:** `void`

### public void load()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\gameStates\DebugChunkState.html`*
