---
title: se.krka.kahlua.integration.expose.LuaJavaClassExposer
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration.expose
---

# se.krka.kahlua.integration.expose.LuaJavaClassExposer

`public class LuaJavaClassExposer extends Object`

**Kind:** class · **Package:** se.krka.kahlua.integration.expose

## Inheritance
- java.lang.Object
- se.krka.kahlua.integration.expose.LuaJavaClassExposer

## Fields

### public final HashMap<String,Class<?>> TypeMap

## Constructors

### public LuaJavaClassExposer(KahluaConverterManager kahluaConverterManager,
Platform platformx,
KahluaTable table)

**Parameters:**
- `KahluaConverterManager` `kahluaConverterManager`
- `Platform` `platformx`
- `KahluaTable` `table`

### public LuaJavaClassExposer(KahluaConverterManager kahluaConverterManager,
Platform platformx,
KahluaTable table0,
KahluaTable table1)

**Parameters:**
- `KahluaConverterManager` `kahluaConverterManager`
- `Platform` `platformx`
- `KahluaTable` `table0`
- `KahluaTable` `table1`

## Methods

### public Map<Class<?>,ClassDebugInformation> getClassDebugInformation()

**Returns:** `Map<Class<?>,ClassDebugInformation>`

### public void exposeGlobalObjectFunction(KahluaTable table,
Object object,
Method method)

**Parameters:**
- `KahluaTable` `table`
- `Object` `object`
- `Method` `method`

**Returns:** `void`

### public void exposeGlobalObjectFunction(KahluaTable table,
Object object,
Method method,
String string)

**Parameters:**
- `KahluaTable` `table`
- `Object` `object`
- `Method` `method`
- `String` `string`

**Returns:** `void`

### public void exposeGlobalClassFunction(KahluaTable table,
Class<?> clazz,
Constructor<?> constructor,
String string)

**Parameters:**
- `KahluaTable` `table`
- `Class<?>` `clazz`
- `Constructor<?>` `constructor`
- `String` `string`

**Returns:** `void`

### public void exposeGlobalClassFunction(KahluaTable table,
Class<?> clazz,
Method method,
String string)

**Parameters:**
- `KahluaTable` `table`
- `Class<?>` `clazz`
- `Method` `method`
- `String` `string`

**Returns:** `void`

### public void exposeMethod(Class<?> clazz,
Method method,
KahluaTable table)

**Parameters:**
- `Class<?>` `clazz`
- `Method` `method`
- `KahluaTable` `table`

**Returns:** `void`

### public void exposeMethod(Class<?> clazz,
Method method,
String string,
KahluaTable table0)

**Parameters:**
- `Class<?>` `clazz`
- `Method` `method`
- `String` `string`
- `KahluaTable` `table0`

**Returns:** `void`

### public boolean shouldExpose(Class<?> clazz0)

**Parameters:**
- `Class<?>` `clazz0`

**Returns:** `boolean`

### public void exposeGlobalFunctions(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `void`

### public void exposeLikeJava(Class clazz)

**Parameters:**
- `Class` `clazz`

**Returns:** `void`

### public void exposeLikeJava(Class clazz,
KahluaTable table)

**Parameters:**
- `Class` `clazz`
- `KahluaTable` `table`

**Returns:** `void`

### public boolean isExposed(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `boolean`

### public String getDefinition(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `String`

### public void exposeLikeJavaRecursively(Type type)

**Parameters:**
- `Type` `type`

**Returns:** `void`

### public void exposeLikeJavaRecursively(Type type,
KahluaTable table)

**Parameters:**
- `Type` `type`
- `KahluaTable` `table`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\expose\LuaJavaClassExposer.html`*
