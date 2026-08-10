---
title: se.krka.kahlua.vm.Prototype
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.Prototype

`public final class Prototype extends Object`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.Prototype

## Fields

### public int[] code

### public Object[] constants

### public Prototype[] prototypes

### public int numParams

### public boolean isVararg

### public String name

### public int[] lines

### public int numUpvalues

### public int maxStacksize

### public String file

### public String filename

### public String[] locvars

### public int[] locvarlines

## Constructors

### public Prototype()

### public Prototype(DataInputStream arg0,
boolean arg1,
String arg2,
int arg3)
throws IOException

**Parameters:**
- `DataInputStream` `arg0`
- `boolean` `arg1`
- `String` `arg2`
- `int` `arg3`

## Methods

### public String toString()

**Returns:** `String`

### public static int rev(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `int`

### public static long rev(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `long`

### public static int toInt(int arg0,
boolean arg1)

**Parameters:**
- `int` `arg0`
- `boolean` `arg1`

**Returns:** `int`

### public static long toLong(long arg0,
boolean arg1)

**Parameters:**
- `long` `arg0`
- `boolean` `arg1`

**Returns:** `long`

### public static LuaClosure loadByteCode(DataInputStream arg0,
KahluaTable arg1)
throws IOException

**Parameters:**
- `DataInputStream` `arg0`
- `KahluaTable` `arg1`

**Returns:** `LuaClosure`

### public static LuaClosure loadByteCode(InputStream arg0,
KahluaTable arg1)
throws IOException

**Parameters:**
- `InputStream` `arg0`
- `KahluaTable` `arg1`

**Returns:** `LuaClosure`

### public void dump(OutputStream arg0)
throws IOException

**Parameters:**
- `OutputStream` `arg0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\Prototype.html`*
