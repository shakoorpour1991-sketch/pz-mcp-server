---
title: se.krka.kahlua.vm.KahluaTable
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.KahluaTable

`public interface KahluaTable`

**Kind:** interface · **Package:** se.krka.kahlua.vm

## Methods

### void setMetatable(KahluaTable var1)

**Parameters:**
- `KahluaTable` `var1`

**Returns:** `void`

### KahluaTable getMetatable()

**Returns:** `KahluaTable`

### void rawset(Object var1,
Object var2)

**Parameters:**
- `Object` `var1`
- `Object` `var2`

**Returns:** `void`

### Object rawget(Object var1)

**Parameters:**
- `Object` `var1`

**Returns:** `Object`

### void rawset(int var1,
Object var2)

**Parameters:**
- `int` `var1`
- `Object` `var2`

**Returns:** `void`

### Object rawget(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `Object`

### int len()

**Returns:** `int`

### KahluaTableIterator iterator()

**Returns:** `KahluaTableIterator`

### boolean isEmpty()

**Returns:** `boolean`

### void wipe()

**Returns:** `void`

### int size()

**Returns:** `int`

### void save(ByteBuffer var1)
throws IOException

**Parameters:**
- `ByteBuffer` `var1`

**Returns:** `void`

### void load(ByteBuffer var1,
int var2)
throws IOException

**Parameters:**
- `ByteBuffer` `var1`
- `int` `var2`

**Returns:** `void`

### void save(DataOutputStream var1)
throws IOException

**Parameters:**
- `DataOutputStream` `var1`

**Returns:** `void`

### void load(DataInputStream var1,
int var2)
throws IOException

**Parameters:**
- `DataInputStream` `var1`
- `int` `var2`

**Returns:** `void`

### String getString(String var1)

**Parameters:**
- `String` `var1`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\KahluaTable.html`*
