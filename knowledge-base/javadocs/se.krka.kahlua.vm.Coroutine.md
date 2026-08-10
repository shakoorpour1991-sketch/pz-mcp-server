---
title: se.krka.kahlua.vm.Coroutine
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.Coroutine

`public final class Coroutine extends Object`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.Coroutine

## Fields

### public KahluaTable environment

### public String stackTrace

### public Object[] objectStack

## Constructors

### public Coroutine()

### public Coroutine(Platform arg0,
KahluaTable arg1,
KahluaThread arg2)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`
- `KahluaThread` `arg2`

### public Coroutine(Platform arg0,
KahluaTable arg1)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`

## Methods

### public Coroutine getParent()

**Returns:** `Coroutine`

### public LuaCallFrame pushNewCallFrame(LuaClosure arg0,
JavaFunction arg1,
int arg2,
int arg3,
int arg4,
boolean arg5,
boolean arg6)

**Parameters:**
- `LuaClosure` `arg0`
- `JavaFunction` `arg1`
- `int` `arg2`
- `int` `arg3`
- `int` `arg4`
- `boolean` `arg5`
- `boolean` `arg6`

**Returns:** `LuaCallFrame`

### public void popCallFrame()

**Returns:** `void`

### public void setCallFrameStackTop(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public void setTop(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public void stackCopy(int arg0,
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

### public void closeUpvalues(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `void`

### public UpValue findUpvalue(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `UpValue`

### public Object getObjectFromStack(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `Object`

### public int getObjectStackSize()

**Returns:** `int`

### public LuaCallFrame getParentCallframe()

**Returns:** `LuaCallFrame`

### public LuaCallFrame currentCallFrame()

**Returns:** `LuaCallFrame`

### public int getTop()

**Returns:** `int`

### public LuaCallFrame getParent(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `LuaCallFrame`

### public LuaCallFrame getParentNoAssert(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `LuaCallFrame`

### public String getCurrentStackTrace(int arg0,
int arg1,
int arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `String`

### public void cleanCallFrames(LuaCallFrame arg0)

**Parameters:**
- `LuaCallFrame` `arg0`

**Returns:** `void`

### public void addStackTrace(LuaCallFrame arg0)

**Parameters:**
- `LuaCallFrame` `arg0`

**Returns:** `void`

### public boolean isDead()

**Returns:** `boolean`

### public Platform getPlatform()

**Returns:** `Platform`

### public String getStatus()

**Returns:** `String`

### public boolean atBottom()

**Returns:** `boolean`

### public int getCallframeTop()

**Returns:** `int`

### public LuaCallFrame[] getCallframeStack()

**Returns:** `LuaCallFrame[]`

### public LuaCallFrame getCallFrame(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `LuaCallFrame`

### public static void yieldHelper(LuaCallFrame arg0,
LuaCallFrame arg1,
int arg2)

**Parameters:**
- `LuaCallFrame` `arg0`
- `LuaCallFrame` `arg1`
- `int` `arg2`

**Returns:** `void`

### public void resume(Coroutine arg0)

**Parameters:**
- `Coroutine` `arg0`

**Returns:** `void`

### public KahluaThread getThread()

**Returns:** `KahluaThread`

### public void destroy()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\Coroutine.html`*
