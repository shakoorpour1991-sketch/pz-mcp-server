---
title: zombie.scripting.entity.GameEntityScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.entity
---

# zombie.scripting.entity.GameEntityScript

`public class GameEntityScript extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.entity

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.entity.GameEntityScript

## Constructors

### public GameEntityScript()

## Methods

### public String getName()

**Returns:** `String`

### public String getDisplayNameDebug()

**Returns:** `String`

### public String getModuleName()

**Returns:** `String`

### public String getFullName()

**Returns:** `String`

### public void PreReload()

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

### public ArrayList<ComponentScript> getComponentScripts()

**Returns:** `ArrayList<ComponentScript>`

### public boolean hasComponents()

**Returns:** `boolean`

### public boolean containsComponent(ComponentType componentType)

**Parameters:**
- `ComponentType` `componentType`

**Returns:** `boolean`

### public <T extends ComponentScript> T getComponentScriptFor(ComponentType componentType)

**Returns:** `T`

### public void copyFrom(GameEntityScript other)

**Parameters:**
- `GameEntityScript` `other`

**Returns:** `void`

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void Load(String name,
String body)
throws Exception

**Parameters:**
- `String` `name`
- `String` `body`

**Returns:** `void`

### public boolean LoadAttribute(String k,
String v)

**Parameters:**
- `String` `k`
- `String` `v`

**Returns:** `boolean`

### public void LoadComponentBlock(ScriptParser.Block block)
throws Exception

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

### public short getRegistry_id()

**Returns:** `short`

### public void setRegistry_id(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

### public String getModID()

**Returns:** `String`

### public boolean getExistsAsVanilla()

**Returns:** `boolean`

### public String getFileAbsPath()

**Returns:** `String`

### public void setModID(String modid)

**Parameters:**
- `String` `modid`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\entity\GameEntityScript.html`*
