---
title: se.krka.kahlua.j2se.KahluaTableImpl
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.j2se
---

# se.krka.kahlua.j2se.KahluaTableImpl

`public final class KahluaTableImpl extends Object implements KahluaTable`

**Kind:** class · **Package:** se.krka.kahlua.j2se

## Inheritance
- java.lang.Object
- se.krka.kahlua.j2se.KahluaTableImpl

## Fields

### public final Map<Object,Object> delegate

## Constructors

### public KahluaTableImpl(Map<Object,Object> map)

**Parameters:**
- `Map<Object,Object>` `map`

## Methods

### public void setMetatable(KahluaTable arg0)

**Parameters:**
- `KahluaTable` `arg0`

**Returns:** `void`

### public KahluaTable getMetatable()

**Returns:** `KahluaTable`

### public int size()

**Returns:** `int`

### public void rawset(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public Object rawget(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `Object`

### public void rawset(int arg0,
Object arg1)

**Parameters:**
- `int` `arg0`
- `Object` `arg1`

**Returns:** `void`

### public String rawgetStr(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `String`

### public KahluaTableImpl rawgetTable(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `KahluaTableImpl`

### public int rawgetInt(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `int`

### public boolean rawgetBool(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public float rawgetFloat(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `float`

### public float tryGetFloat(Object object,
float float0)

**Parameters:**
- `Object` `object`
- `float` `float0`

**Returns:** `float`

### public Object rawget(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `Object`

### public int len()

**Returns:** `int`

### public KahluaTableIterator iterator()

**Returns:** `KahluaTableIterator`

### public boolean isEmpty()

**Returns:** `boolean`

### public void wipe()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public void save(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `void`

### public void save(DataOutputStream arg0)
throws IOException

**Parameters:**
- `DataOutputStream` `arg0`

**Returns:** `void`

### public void load(ByteBuffer arg0,
int arg1)

**Parameters:**
- `ByteBuffer` `arg0`
- `int` `arg1`

**Returns:** `void`

### public Object load(ByteBuffer arg0,
int arg1,
byte arg2)
throws RuntimeException

**Parameters:**
- `ByteBuffer` `arg0`
- `int` `arg1`
- `byte` `arg2`

**Returns:** `Object`

### public void load(DataInputStream arg0,
int arg1)
throws IOException

**Parameters:**
- `DataInputStream` `arg0`
- `int` `arg1`

**Returns:** `void`

### public Object load(DataInputStream arg0,
int arg1,
byte arg2)
throws IOException,
RuntimeException

**Parameters:**
- `DataInputStream` `arg0`
- `int` `arg1`
- `byte` `arg2`

**Returns:** `Object`

### public String getString(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `String`

### public KahluaTableImpl getRewriteTable()

**Returns:** `KahluaTableImpl`

### public void setRewriteTable(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `void`

### public static boolean canSave(Object arg0,
Object arg1)

**Parameters:**
- `Object` `arg0`
- `Object` `arg1`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\j2se\KahluaTableImpl.html`*
