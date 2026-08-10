---
title: se.krka.kahlua.vm.KahluaUtil
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.vm
---

# se.krka.kahlua.vm.KahluaUtil

`public class KahluaUtil extends Object`

**Kind:** class · **Package:** se.krka.kahlua.vm

## Inheritance
- java.lang.Object
- se.krka.kahlua.vm.KahluaUtil

## Constructors

### public KahluaUtil()

## Methods

### public static double fromDouble(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `double`

### public static Double toDouble(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Double`

### public static Double toDouble(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Double`

### public static Boolean toBoolean(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `Boolean`

### public static boolean boolEval(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### @Null
public static LuaClosure loadByteCodeFromFile(File arg0,
KahluaTable arg1)

**Parameters:**
- `File` `arg0`
- `KahluaTable` `arg1`

**Returns:** `LuaClosure`

### @Null
public static LuaClosure loadByteCodeFromResource(String arg0,
KahluaTable arg1)

**Parameters:**
- `String` `arg0`
- `KahluaTable` `arg1`

**Returns:** `LuaClosure`

### public static void luaAssert(boolean arg0,
String arg1)

**Parameters:**
- `boolean` `arg0`
- `String` `arg1`

**Returns:** `void`

### public static void fail(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### public static double round(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `double`

### public static long ipow(long arg0,
int arg1)

**Parameters:**
- `long` `arg0`
- `int` `arg1`

**Returns:** `long`

### public static boolean isNegative(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `boolean`

### public static KahluaTable getClassMetatables(Platform arg0,
KahluaTable arg1)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`

**Returns:** `KahluaTable`

### public static KahluaThread getWorkerThread(Platform arg0,
KahluaTable arg1)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`

**Returns:** `KahluaThread`

### public static void setWorkerThread(KahluaTable arg0,
KahluaThread arg1)

**Parameters:**
- `KahluaTable` `arg0`
- `KahluaThread` `arg1`

**Returns:** `void`

### public static KahluaTable getOrCreateTable(Platform arg0,
KahluaTable arg1,
String arg2)

**Parameters:**
- `Platform` `arg0`
- `KahluaTable` `arg1`
- `String` `arg2`

**Returns:** `KahluaTable`

### public static void setupLibrary(KahluaTable arg0,
KahluaThread arg1,
File arg2)

**Parameters:**
- `KahluaTable` `arg0`
- `KahluaThread` `arg1`
- `File` `arg2`

**Returns:** `void`

### public static void setupLibraryText(KahluaTable table,
KahluaThread kahluaThread,
File file)

**Parameters:**
- `KahluaTable` `table`
- `KahluaThread` `kahluaThread`
- `File` `file`

**Returns:** `void`

### public static String numberToString(Double arg0)

**Parameters:**
- `Double` `arg0`

**Returns:** `String`

### public static String type(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `String`

### public static String tostring(Object arg0,
KahluaThread arg1)

**Parameters:**
- `Object` `arg0`
- `KahluaThread` `arg1`

**Returns:** `String`

### public static Double tonumber(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `Double`

### public static Double tonumber(String arg0,
int arg1)

**Parameters:**
- `String` `arg0`
- `int` `arg1`

**Returns:** `Double`

### public static String rawTostring(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `String`

### public static String rawTostring2(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `String`

### public static Double rawTonumber(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `Double`

### public static String getStringArg(LuaCallFrame arg0,
int arg1,
String arg2)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`
- `String` `arg2`

**Returns:** `String`

### public static String getOptionalStringArg(LuaCallFrame arg0,
int arg1)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`

**Returns:** `String`

### public static Double getNumberArg(LuaCallFrame arg0,
int arg1,
String arg2)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`
- `String` `arg2`

**Returns:** `Double`

### public static Double getOptionalNumberArg(LuaCallFrame arg0,
int arg1)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`

**Returns:** `Double`

### public static void assertArgNotNull(Object arg0,
int arg1,
String arg2,
String arg3)

**Parameters:**
- `Object` `arg0`
- `int` `arg1`
- `String` `arg2`
- `String` `arg3`

**Returns:** `void`

### public static Object getOptionalArg(LuaCallFrame arg0,
int arg1)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`

**Returns:** `Object`

### public static Object getArg(LuaCallFrame arg0,
int arg1,
String arg2)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`
- `String` `arg2`

**Returns:** `Object`

### public static int len(KahluaTable arg0,
int arg1,
int arg2)

**Parameters:**
- `KahluaTable` `arg0`
- `int` `arg1`
- `int` `arg2`

**Returns:** `int`

### public static double getDoubleArg(LuaCallFrame arg0,
int arg1,
String arg2)

**Parameters:**
- `LuaCallFrame` `arg0`
- `int` `arg1`
- `String` `arg2`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\vm\KahluaUtil.html`*
