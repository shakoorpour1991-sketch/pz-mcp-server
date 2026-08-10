---
title: zombie.scripting.objects.BaseScriptObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.BaseScriptObject

`public abstract class BaseScriptObject extends Object`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject

## Methods

### public final String debugString()

**Returns:** `String`

### @Deprecated
public void getVersion(IVersionHash hash)

> ⚠️ **Deprecated**

**Parameters:**
- `IVersionHash` `hash`

**Returns:** `void`

### public long getScriptVersion()

**Returns:** `long`

### public void calculateScriptVersion()

**Returns:** `void`

### public ScriptModule getModule()

**Returns:** `ScriptModule`

### public void setModule(ScriptModule module)

**Parameters:**
- `ScriptModule` `module`

**Returns:** `void`

### public final boolean isEnabled()

**Returns:** `boolean`

### public final boolean isDebugOnly()

**Returns:** `boolean`

### public final void setParent(BaseScriptObject parent)

**Parameters:**
- `BaseScriptObject` `parent`

**Returns:** `void`

### public final BaseScriptObject getParent()

**Returns:** `BaseScriptObject`

### public final ScriptType getScriptObjectType()

**Returns:** `ScriptType`

### public final String getScriptObjectName()

**Returns:** `String`

### public final String getScriptObjectFullType()

**Returns:** `String`

### public final void resetLoadedScriptBodies()

**Returns:** `void`

### public final void addLoadedScriptBody(String modId,
String body)

**Parameters:**
- `String` `modId`
- `String` `body`

**Returns:** `void`

### public final ArrayList<String> getLoadedScriptBodies()

**Returns:** `ArrayList<String>`

### public final int getLoadedScriptBodyCount()

**Returns:** `int`

### public boolean getObsolete()

**Returns:** `boolean`

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public final void LoadCommonBlock(String body)
throws Exception

**Parameters:**
- `String` `body`

**Returns:** `void`

### public final void LoadCommonBlock(ScriptParser.Block block)
throws Exception

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

### public void Load(String name,
String body)
throws Exception

**Parameters:**
- `String` `name`
- `String` `body`

**Returns:** `void`

### public void PreReload()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void OnLoadedAfterLua()
throws Exception

**Returns:** `void`

### public void OnPostWorldDictionaryInit()
throws Exception

**Returns:** `void`

### public ArrayList<String> getScriptLines()

**Returns:** `ArrayList<String>`

### public final ArrayList<String> getAllScriptLines(ArrayList<String> list)

**Parameters:**
- `ArrayList<String>` `list`

**Returns:** `ArrayList<String>`

### public final ArrayList<String> getBodyScriptLines(int bodyIndex,
ArrayList<String> list)

**Parameters:**
- `int` `bodyIndex`
- `ArrayList<String>` `list`

**Returns:** `ArrayList<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\BaseScriptObject.html`*
