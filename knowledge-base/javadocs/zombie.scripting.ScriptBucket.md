---
title: zombie.scripting.ScriptBucket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting
---

# zombie.scripting.ScriptBucket

`public abstract class ScriptBucket<E extends BaseScriptObject> extends Object`

**Kind:** class · **Package:** zombie.scripting

## Inheritance
- java.lang.Object
- zombie.scripting.ScriptBucket<E>

## Constructors

### public ScriptBucket(ScriptModule module,
ScriptType scriptType)

**Parameters:**
- `ScriptModule` `module`
- `ScriptType` `scriptType`

### public ScriptBucket(ScriptModule module,
ScriptType scriptType,
Map<String,E> customMap)

**Parameters:**
- `ScriptModule` `module`
- `ScriptType` `scriptType`
- `Map<String,E>` `customMap`

## Methods

### public static final String getCurrentScriptObject()

**Returns:** `String`

### public ScriptType getScriptType()

**Returns:** `ScriptType`

### public boolean isVerbose()

**Returns:** `boolean`

### public void setVerbose(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isHasLoadErrors()

**Returns:** `boolean`

### public ArrayList<E> getScriptList()

**Returns:** `ArrayList<E>`

### public Map<String,E> getScriptMap()

**Returns:** `Map<String,E>`

### public void reset()

**Returns:** `void`

### public abstract E createInstance(ScriptModule var1,
String var2,
String var3)

**Parameters:**
- `ScriptModule` `var1`
- `String` `var2`
- `String` `var3`

**Returns:** `E`

### public boolean CreateFromTokenPP(ScriptLoadMode loadMode,
String type,
String token)

**Parameters:**
- `ScriptLoadMode` `loadMode`
- `String` `type`
- `String` `token`

**Returns:** `boolean`

### public void LoadScripts(ScriptLoadMode loadMode)

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public E get(String name)

**Parameters:**
- `String` `name`

**Returns:** `E`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ScriptBucket.html`*
