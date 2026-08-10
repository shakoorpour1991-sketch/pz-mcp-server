---
title: zombie.scripting.itemConfig.ItemConfig
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.itemConfig
---

# zombie.scripting.itemConfig.ItemConfig

`public class ItemConfig extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.itemConfig

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.itemConfig.ItemConfig

## Fields

### public static String errorLine

### public static String errorBucket

### public static String errorRoot

### public static String errorItemConfig

### public static final String VARIABLE_PREFIX

## Constructors

### public ItemConfig()

## Methods

### public String getName()

**Returns:** `String`

### public boolean isValid()

**Returns:** `boolean`

### public void ConfigureEntitySpawned(GameEntity entity,
ItemPickInfo pickInfo)

**Parameters:**
- `GameEntity` `entity`
- `ItemPickInfo` `pickInfo`

**Returns:** `void`

### public void ConfigureEntityOnCreate(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws ItemConfig.ItemConfigException

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public void PreReload()

**Returns:** `void`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void BuildBuckets()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\itemConfig\ItemConfig.html`*
