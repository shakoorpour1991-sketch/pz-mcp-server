---
title: se.krka.kahlua.integration.LuaReturn
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration
---

# se.krka.kahlua.integration.LuaReturn

`public abstract class LuaReturn extends AbstractList<Object>`

**Kind:** class · **Package:** se.krka.kahlua.integration

## Inheritance
- java.lang.Object
- java.util.AbstractCollection<Object>
- java.util.AbstractList<Object>
- se.krka.kahlua.integration.LuaReturn

## Methods

### public abstract boolean isSuccess()

**Returns:** `boolean`

### public abstract Object getErrorObject()

**Returns:** `Object`

### public abstract String getErrorString()

**Returns:** `String`

### public abstract String getLuaStackTrace()

**Returns:** `String`

### public abstract RuntimeException getJavaException()

**Returns:** `RuntimeException`

### public Object getFirst()

**Returns:** `Object`

### public Object getSecond()

**Returns:** `Object`

### public Object getThird()

**Returns:** `Object`

### public Object get(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `Object`

### public int size()

**Returns:** `int`

### public static LuaReturn createReturn(Object[] objects)

**Parameters:**
- `Object[]` `objects`

**Returns:** `LuaReturn`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\LuaReturn.html`*
