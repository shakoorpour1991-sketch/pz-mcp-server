---
title: se.krka.kahlua.vm.KahluaArray
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.KahluaArray

`public class KahluaArray extends Object implements KahluaTable`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.KahluaArray

## Constructors

### public KahluaArray()

## Methods

### public String getString(String string)

**Parameters:**
- `String` `string`

**Returns:** `String`

### public int size()

**Returns:** `int`

### public int len()

**Returns:** `int`

### public KahluaTableIterator iterator()

**Returns:** `KahluaTableIterator`

### public boolean isEmpty()

**Returns:** `boolean`

### public void wipe()

**Returns:** `void`

### public Object rawget(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `Object`

### public void rawset(int int0,
Object object)

**Parameters:**
- `int` `int0`
- `Object` `object`

**Returns:** `void`

### public Object rawget(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `Object`

### public void rawset(Object object0,
Object object1)

**Parameters:**
- `Object` `object0`
- `Object` `object1`

**Returns:** `void`

### public Object next(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `Object`

### public KahluaTable getMetatable()

**Returns:** `KahluaTable`

### public void setMetatable(KahluaTable table)

**Parameters:**
- `KahluaTable` `table`

**Returns:** `void`

### public Class<?> getJavaClass()

**Returns:** `Class<?>`

### public void save(ByteBuffer var1)

**Parameters:**
- `ByteBuffer` `var1`

**Returns:** `void`

### public void load(ByteBuffer var1,
int var2)

**Parameters:**
- `ByteBuffer` `var1`
- `int` `var2`

**Returns:** `void`

### public void save(DataOutputStream var1)
throws IOException

**Parameters:**
- `DataOutputStream` `var1`

**Returns:** `void`

### public void load(DataInputStream var1,
int var2)
throws IOException

**Parameters:**
- `DataInputStream` `var1`
- `int` `var2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\KahluaArray.html`*
