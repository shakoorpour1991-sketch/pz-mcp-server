---
title: zombie.world.StringDictionary.StringRegister
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.world
---

# zombie.world.StringDictionary.StringRegister

`public static class StringDictionary.StringRegister extends Object`

**Kind:** class · **Package:** zombie.world

## Inheritance
- java.lang.Object
- zombie.world.StringDictionary.StringRegister

## Methods

### public void saveString(ByteBuffer output,
String string)

**Parameters:**
- `ByteBuffer` `output`
- `String` `string`

**Returns:** `void`

### public String loadString(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `String`

### public String get(short id)

**Parameters:**
- `short` `id`

**Returns:** `String`

### public short getIdFor(String name)

**Parameters:**
- `String` `name`

**Returns:** `short`

### public boolean isRegistered(String string)

**Parameters:**
- `String` `string`

**Returns:** `boolean`

### public DictionaryStringInfo getInfoForName(String name)

**Parameters:**
- `String` `name`

**Returns:** `DictionaryStringInfo`

### public DictionaryStringInfo getInfoForID(short id)

**Parameters:**
- `short` `id`

**Returns:** `DictionaryStringInfo`

### public void register(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\world\StringDictionary.StringRegister.html`*
