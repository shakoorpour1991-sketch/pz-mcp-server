---
title: zombie.scripting.objects.ItemFilterScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.ItemFilterScript

`public class ItemFilterScript extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.ItemFilterScript

## Constructors

### public ItemFilterScript()

## Methods

### public String getName()

**Returns:** `String`

### public void PreReload()

**Returns:** `void`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void OnLoadedAfterLua()

**Returns:** `void`

### public void OnPostWorldDictionaryInit()

**Returns:** `void`

### public boolean allowsItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean allowsItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\ItemFilterScript.html`*
