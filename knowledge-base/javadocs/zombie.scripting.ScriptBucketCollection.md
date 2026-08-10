---
title: zombie.scripting.ScriptBucketCollection
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting
---

# zombie.scripting.ScriptBucketCollection

`public abstract class ScriptBucketCollection<E extends BaseScriptObject> extends Object`

**Kind:** class · **Package:** zombie.scripting

## Inheritance
- java.lang.Object
- zombie.scripting.ScriptBucketCollection<E>

## Constructors

### public ScriptBucketCollection(ScriptManager scriptManager,
ScriptType scriptType)

**Parameters:**
- `ScriptManager` `scriptManager`
- `ScriptType` `scriptType`

## Methods

### public ScriptType getScriptType()

**Returns:** `ScriptType`

### public boolean isTemplate()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public boolean hasFullType(String type)

**Parameters:**
- `String` `type`

**Returns:** `boolean`

### public E getFullType(String type)

**Parameters:**
- `String` `type`

**Returns:** `E`

### public HashMap<String,E> getFullTypeToScriptMap()

**Returns:** `HashMap<String,E>`

### public void setReloadBuckets(boolean bReload)

**Parameters:**
- `boolean` `bReload`

**Returns:** `void`

### public void registerModule(ScriptModule module)

**Parameters:**
- `ScriptModule` `module`

**Returns:** `void`

### public abstract ScriptBucket<E> getBucketFromModule(ScriptModule arg0)

**Parameters:**
- `ScriptModule` `arg0`

**Returns:** `ScriptBucket<E>`

### public E getScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `E`

### public ArrayList<E> getAllScripts()

**Returns:** `ArrayList<E>`

### public void onSortAllScripts(ArrayList<E> scripts)

**Parameters:**
- `ArrayList<E>` `scripts`

**Returns:** `void`

### public void LoadScripts(ScriptLoadMode loadMode)

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void PreReloadScripts()
throws Exception

**Returns:** `void`

### public void PostLoadScripts(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public boolean hasLoadErrors()

**Returns:** `boolean`

### public boolean hasLoadErrors(boolean onlyCritical)

**Parameters:**
- `boolean` `onlyCritical`

**Returns:** `boolean`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void OnLoadedAfterLua()
throws Exception

**Returns:** `void`

### public void OnPostTileDefinitions()
throws Exception

**Returns:** `void`

### public void OnPostWorldDictionaryInit()
throws Exception

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ScriptBucketCollection.html`*
