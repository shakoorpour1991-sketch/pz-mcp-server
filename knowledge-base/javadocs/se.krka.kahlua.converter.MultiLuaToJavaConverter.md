---
title: se.krka.kahlua.converter.MultiLuaToJavaConverter
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.converter
---

# se.krka.kahlua.converter.MultiLuaToJavaConverter

`public class MultiLuaToJavaConverter<LuaType,JavaType> extends Object implements LuaToJavaConverter<LuaType,JavaType>`

**Kind:** class · **Package:** se.krka.kahlua.converter

## Inheritance
- java.lang.Object
- se.krka.kahlua.converter.MultiLuaToJavaConverter<LuaType,JavaType>

## Constructors

### public MultiLuaToJavaConverter(Class<LuaType> clazz0,
Class<JavaType> clazz1)

**Parameters:**
- `Class<LuaType>` `clazz0`
- `Class<JavaType>` `clazz1`

## Methods

### public Class<LuaType> getLuaType()

**Returns:** `Class<LuaType>`

### public Class<JavaType> getJavaType()

**Returns:** `Class<JavaType>`

### public JavaType fromLuaToJava(LuaType object1,
Class<JavaType> clazz)

**Parameters:**
- `LuaType` `object1`
- `Class<JavaType>` `clazz`

**Returns:** `JavaType`

### public void add(LuaToJavaConverter<LuaType,JavaType> luaToJavaConverter)

**Parameters:**
- `LuaToJavaConverter<LuaType,JavaType>` `luaToJavaConverter`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\converter\MultiLuaToJavaConverter.html`*
