---
title: zombie.entity.components.crafting.CraftRecipeMonitor
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting
---

# zombie.entity.components.crafting.CraftRecipeMonitor

`public class CraftRecipeMonitor extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.CraftRecipeMonitor

## Methods

### public static CraftRecipeMonitor Create()

**Returns:** `CraftRecipeMonitor`

### public void setPrintToConsole(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void setRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `void`

### public CraftRecipe getRecipe()

**Returns:** `CraftRecipe`

### public ArrayList<String> GetLines()

**Returns:** `ArrayList<String>`

### public CraftRecipeMonitor seal()

**Returns:** `CraftRecipeMonitor`

### public void open()

**Returns:** `void`

### public void close()

**Returns:** `void`

### public boolean canLog()

**Returns:** `boolean`

### public void warn(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public void success(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public void log(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public <T> void logList(String tag,
ArrayList<T> list)

**Returns:** `void`

### public void logCraftLogic(CraftLogic logic)

**Parameters:**
- `CraftLogic` `logic`

**Returns:** `void`

### public void logFurnaceLogic(FurnaceLogic logic)

**Parameters:**
- `FurnaceLogic` `logic`

**Returns:** `void`

### public void logDryingLogic(DryingLogic logic)

**Parameters:**
- `DryingLogic` `logic`

**Returns:** `void`

### public void logMashingLogic(MashingLogic logic)

**Parameters:**
- `MashingLogic` `logic`

**Returns:** `void`

### public void logResources(List<Resource> inputs,
List<Resource> outputs)

**Parameters:**
- `List<Resource>` `inputs`
- `List<Resource>` `outputs`

**Returns:** `void`

### public void logResourcesList(String tag,
List<Resource> resources)

**Parameters:**
- `String` `tag`
- `List<Resource>` `resources`

**Returns:** `void`

### public void logRecipe(CraftRecipe recipe,
boolean doInputsOutputs)

**Parameters:**
- `CraftRecipe` `recipe`
- `boolean` `doInputsOutputs`

**Returns:** `void`

### public void logInputScript(InputScript input)

**Parameters:**
- `InputScript` `input`

**Returns:** `void`

### public void logOutputScript(OutputScript output)

**Parameters:**
- `OutputScript` `output`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\CraftRecipeMonitor.html`*
