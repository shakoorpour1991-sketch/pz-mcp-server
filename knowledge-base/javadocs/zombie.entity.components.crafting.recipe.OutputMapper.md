---
title: zombie.entity.components.crafting.recipe.OutputMapper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.OutputMapper

`public class OutputMapper extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.OutputMapper

## Constructors

### public OutputMapper(String name)

**Parameters:**
- `String` `name`

## Methods

### public boolean isEmpty()

**Returns:** `boolean`

### public ArrayList<Item> getResultItems()

**Returns:** `ArrayList<Item>`

### public ArrayList<Item> getPatternForResult(Item result)

**Parameters:**
- `Item` `result`

**Returns:** `ArrayList<Item>`

### public void registerInputScript(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `void`

### public void setDefaultOutputEntree(String item)

**Parameters:**
- `String` `item`

**Returns:** `void`

### public void addOutputEntree(String result,
String[] items)

**Parameters:**
- `String` `result`
- `String[]` `items`

**Returns:** `void`

### public void addOutputEntree(String result,
ArrayList<String> items)

**Parameters:**
- `String` `result`
- `ArrayList<String>` `items`

**Returns:** `void`

### public void OnPostWorldDictionaryInit()
throws Exception

**Returns:** `void`

### public void OnPostWorldDictionaryInit(String recipe)
throws Exception

**Parameters:**
- `String` `recipe`

**Returns:** `void`

### public Item getOutputItem(CraftRecipeData recipeData)

**Parameters:**
- `CraftRecipeData` `recipeData`

**Returns:** `Item`

### public Item getOutputItem(CraftRecipeData recipeData,
boolean testManualInputs)

**Parameters:**
- `CraftRecipeData` `recipeData`
- `boolean` `testManualInputs`

**Returns:** `Item`

### public ArrayList<OutputMapper.OutputEntree> getEntrees()

**Returns:** `ArrayList<OutputMapper.OutputEntree>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\OutputMapper.html`*
