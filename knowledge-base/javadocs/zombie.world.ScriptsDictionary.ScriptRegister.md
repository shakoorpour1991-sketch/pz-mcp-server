---
title: zombie.world.ScriptsDictionary.ScriptRegister
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.world
---

# zombie.world.ScriptsDictionary.ScriptRegister

`public static class ScriptsDictionary.ScriptRegister<T extends BaseScriptObject> extends Object`

**Kind:** class · **Package:** zombie.world

## Inheritance
- java.lang.Object
- zombie.world.ScriptsDictionary.ScriptRegister<T>

## Methods

### public void saveScript(ByteBuffer output,
T script)

**Parameters:**
- `ByteBuffer` `output`
- `T` `script`

**Returns:** `void`

### public T loadScript(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `T`

### public T get(String name)

**Parameters:**
- `String` `name`

**Returns:** `T`

### public T get(short id)

**Parameters:**
- `short` `id`

**Returns:** `T`

### public short getIdFor(String name)

**Parameters:**
- `String` `name`

**Returns:** `short`

### public boolean isRegistered(T script)

**Parameters:**
- `T` `script`

**Returns:** `boolean`

### public DictionaryScriptInfo<T> getInfoForName(String name)

**Parameters:**
- `String` `name`

**Returns:** `DictionaryScriptInfo<T>`

### public DictionaryScriptInfo<T> getInfoForID(short id)

**Parameters:**
- `short` `id`

**Returns:** `DictionaryScriptInfo<T>`

### public long getVersionHash(T script)
throws WorldDictionaryException

**Parameters:**
- `T` `script`

**Returns:** `long`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\world\ScriptsDictionary.ScriptRegister.html`*
