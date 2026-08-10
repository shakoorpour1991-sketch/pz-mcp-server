---
title: se.krka.kahlua.vm.KahluaThread
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.KahluaThread

`public class KahluaThread extends Object`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.KahluaThread

## Fields

### public static LuaCallFrame LastCallFrame

### public Coroutine currentCoroutine

### public Thread debugOwnerThread

### public boolean bStep

### public String currentfile

### public int currentLine

### public int lastLine

### public int lastCallFrame

### public boolean bReset

### public ArrayList<KahluaThread.Entry> profileEntries

### public HashMap<String,KahluaThread.Entry> profileEntryMap

### public static int m_error_count

### public static final ArrayList<String> m_errors_list

### public boolean bStepInto

## Constructors

### public KahluaThread(Platform arg0,
KahluaTable arg1)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`

### public KahluaThread(PrintStream arg0,
Platform arg1,
KahluaTable arg2)

**Parameters:**
- `PrintStream` `arg0`
- `Platform` `arg1`
- `KahluaTable` `arg2`

## Methods

### public Coroutine getCurrentCoroutine()

**Returns:** `Coroutine`

### public int call(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `int`

### public boolean isCurrent(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `boolean`

### public StringBuilder startErrorMessage()

**Returns:** `StringBuilder`

### public void flushErrorMessage()

**Returns:** `void`

### public void doStacktraceProper(LuaCallFrame arg0)

**Parameters:**
- `LuaCallFrame` `arg0`

**Returns:** `void`

### public void doStacktraceProper()

**Returns:** `void`

### public void debugException(Exception arg0)

**Parameters:**
- `Exception` `arg0`

**Returns:** `void`

### public Object call(Object arg0,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `Object`

### public Object call(Object object0,
Object[] objects)

**Parameters:**
- `Object` `object0`
- `Object[]` `objects`

**Returns:** `Object`

### public Object tableget(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `Object`

### public void tableSet(Object arg0,
Object arg1,
Object arg2)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `void`

### public void setmetatable(Object arg0,
KahluaTable arg1)

**Parameters:**
- `Object` `arg0`
- `KahluaTable` `arg1`

**Returns:** `void`

### public Object getmetatable(Object arg0,
boolean arg1)

**Parameters:**
- `Object` `arg0`
- `boolean` `arg1`

**Returns:** `Object`

### public Object[] pcall(Object object0,
Object[] objects)

**Parameters:**
- `Object` `object0`
- `Object[]` `objects`

**Returns:** `Object[]`

### public void pcallvoid(Object arg0,
Object[] arg1)

**Parameters:**
- `Object` `arg0`
- `Object[]` `arg1`

**Returns:** `void`

### public void pcallvoid(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public void pcallvoid(Object arg0,
Object arg1,
Object arg2)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `void`

### public void pcallvoid(Object arg0,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `void`

### public Boolean pcallBoolean(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `Boolean`

### public Boolean pcallBoolean(Object arg0,
Object arg1,
Object arg2)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `Boolean`

### public Boolean pcallBoolean(Object arg0,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `Boolean`

### public Boolean pcallBoolean(Object arg0,
Object[] arg1)

**Parameters:**
- `Object` `arg0`
- `Object[]` `arg1`

**Returns:** `Boolean`

### public Object[] pcall(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `Object[]`

### public int pcall(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `int`

### public KahluaTable getEnvironment()

**Returns:** `KahluaTable`

### public PrintStream getOut()

**Returns:** `PrintStream`

### public Platform getPlatform()

**Returns:** `Platform`

### public void breakpointToggle(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `void`

### public boolean hasBreakpoint(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `boolean`

### public void toggleBreakOnChange(KahluaTable arg0,
Object arg1)

**Parameters:**
- `KahluaTable` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public void toggleBreakOnRead(KahluaTable arg0,
Object arg1)

**Parameters:**
- `KahluaTable` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public boolean hasDataBreakpoint(KahluaTable arg0,
Object arg1)

**Parameters:**
- `KahluaTable` `arg0`
- `Object` `arg1`

**Returns:** `boolean`

### public boolean hasReadDataBreakpoint(KahluaTable arg0,
Object arg1)

**Parameters:**
- `KahluaTable` `arg0`
- `Object` `arg1`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\KahluaThread.html`*
