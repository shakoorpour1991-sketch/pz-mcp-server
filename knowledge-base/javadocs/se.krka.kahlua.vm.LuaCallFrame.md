---
title: se.krka.kahlua.vm.LuaCallFrame
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.LuaCallFrame

`public final class LuaCallFrame extends Object`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.LuaCallFrame

## Fields

### public final Coroutine coroutine

### public LuaClosure closure

### public JavaFunction javaFunction

### public int pc

### public int localBase

### public int nArguments

### public boolean canYield

### public int localsAssigned

### public final HashMap LocalVarToStackMap

### public final HashMap LocalStackToVarMap

### public final ArrayList<String> LocalVarNames

## Constructors

### public LuaCallFrame(Coroutine arg0)

**Parameters:**
- `Coroutine` `arg0`

## Methods

### public String getFilename()

**Returns:** `String`

### public final void set(int arg0,
Object arg1)

**Parameters:**
- `int` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public final Object get(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `Object`

### public int push(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `int`

### public int push(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `int`

### public int pushNil()

**Returns:** `int`

### public final void stackCopy(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `void`

### public void stackClear(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `void`

### public void clearFromIndex(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public final void setTop(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public void closeUpvalues(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public UpValue findUpvalue(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `UpValue`

### public int getTop()

**Returns:** `int`

### public void init()

**Returns:** `void`

### public void setPrototypeStacksize()

**Returns:** `void`

### public void pushVarargs(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `void`

### public KahluaTable getEnvironment()

**Returns:** `KahluaTable`

### public boolean isJava()

**Returns:** `boolean`

### public boolean isLua()

**Returns:** `boolean`

### public String toString2()

**Returns:** `String`

### public String toString()

**Returns:** `String`

### public Platform getPlatform()

**Returns:** `Platform`

### public KahluaThread getThread()

**Returns:** `KahluaThread`

### public LuaClosure getClosure()

**Returns:** `LuaClosure`

### public void setLocalVarToStack(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `void`

### public String getNameOfStack(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `String`

### public void printoutLocalVars()

**Returns:** `void`

### public int getLocalVarCount()

**Returns:** `int`

### public String getLocalVarName(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `String`

### public int getLocalVarStackIndex(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\LuaCallFrame.html`*
