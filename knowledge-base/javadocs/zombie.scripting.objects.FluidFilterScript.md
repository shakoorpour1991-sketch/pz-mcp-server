---
title: zombie.scripting.objects.FluidFilterScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.FluidFilterScript

`public class FluidFilterScript extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.FluidFilterScript

## Constructors

### public FluidFilterScript()

## Methods

### public static FluidFilterScript GetAnonymous()

**Returns:** `FluidFilterScript`

### public static FluidFilterScript GetAnonymous(boolean isWhitelist)

**Parameters:**
- `boolean` `isWhitelist`

**Returns:** `FluidFilterScript`

### public FluidFilterScript copy()

**Returns:** `FluidFilterScript`

### public boolean isSingleFluid()

**Returns:** `boolean`

### public FluidFilter getFilter()

**Returns:** `FluidFilter`

### public FluidFilter createFilter()
throws Exception

**Returns:** `FluidFilter`

### public void getVersion(IVersionHash hash)

**Parameters:**
- `IVersionHash` `hash`

**Returns:** `void`

### public void PreReload()

**Returns:** `void`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void OnPostWorldDictionaryInit()
throws Exception

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public void LoadAnonymousFromBlock(ScriptParser.Block block)
throws Exception

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

### public void LoadAnonymousSingleFluid(String fluidName)
throws Exception

**Parameters:**
- `String` `fluidName`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\FluidFilterScript.html`*
