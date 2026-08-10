---
title: se.krka.kahlua.threading.VerifiedSingleKahluaThread
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.threading
---

# se.krka.kahlua.threading.VerifiedSingleKahluaThread

`public class VerifiedSingleKahluaThread extends KahluaThread`

**Kind:** class · **Package:** se.krka.kahlua.threading

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.KahluaThread
- se.krka.kahlua.threading.VerifiedSingleKahluaThread

## Constructors

### public VerifiedSingleKahluaThread(Platform platform,
KahluaTable table)

**Parameters:**
- `Platform` `platform`
- `KahluaTable` `table`

### public VerifiedSingleKahluaThread(PrintStream printStream,
Platform platform,
KahluaTable table)

**Parameters:**
- `PrintStream` `printStream`
- `Platform` `platform`
- `KahluaTable` `table`

## Methods

### public int call(int int1)

**Parameters:**
- `int` `int1`

**Returns:** `int`

### public int pcall(int int1)

**Parameters:**
- `int` `int1`

**Returns:** `int`

### public Object[] pcall(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `Object[]`

### public final Object[] pcall(Object object,
Object[] objects1)

**Parameters:**
- `Object` `object`
- `Object[]` `objects1`

**Returns:** `Object[]`

### public void setmetatable(Object object,
KahluaTable table)

**Parameters:**
- `Object` `object`
- `KahluaTable` `table`

**Returns:** `void`

### public Object call(Object object1,
Object object2,
Object object3,
Object object4)

**Parameters:**
- `Object` `object1`
- `Object` `object2`
- `Object` `object3`
- `Object` `object4`

**Returns:** `Object`

### public Object call(Object object1,
Object[] objects)

**Parameters:**
- `Object` `object1`
- `Object[]` `objects`

**Returns:** `Object`

### public KahluaTable getEnvironment()

**Returns:** `KahluaTable`

### public Object getMetaOp(Object object1,
String string)

**Parameters:**
- `Object` `object1`
- `String` `string`

**Returns:** `Object`

### public Object getmetatable(Object object1,
boolean boolean0)

**Parameters:**
- `Object` `object1`
- `boolean` `boolean0`

**Returns:** `Object`

### public Object tableget(Object object1,
Object object2)

**Parameters:**
- `Object` `object1`
- `Object` `object2`

**Returns:** `Object`

### public void tableSet(Object object0,
Object object1,
Object object2)

**Parameters:**
- `Object` `object0`
- `Object` `object1`
- `Object` `object2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\threading\VerifiedSingleKahluaThread.html`*
