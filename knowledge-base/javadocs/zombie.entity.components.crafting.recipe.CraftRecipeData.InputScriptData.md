---
title: zombie.entity.components.crafting.recipe.CraftRecipeData.InputScriptData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.CraftRecipeData.InputScriptData

`public static class CraftRecipeData.InputScriptData extends CraftRecipeData.CacheData`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.CraftRecipeData.CacheData
- zombie.entity.components.crafting.recipe.CraftRecipeData.InputScriptData

## Constructors

### public InputScriptData()

## Methods

### public InputScript getInputScript()

**Returns:** `InputScript`

### public boolean isCachedCanConsume()

**Returns:** `boolean`

### public void getManualInputItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `void`

### public int getInputItemCount()

**Returns:** `int`

### public int getInputItemUses()

**Returns:** `int`

### public float getInputItemFluidUses()

**Returns:** `float`

### public InventoryItem getFirstInputItem()

**Returns:** `InventoryItem`

### public InventoryItem getLastInputItem()

**Returns:** `InventoryItem`

### public boolean isInputItemsSatisfied()

**Returns:** `boolean`

### public boolean isInputItemsSatisifiedToMaximum()

**Returns:** `boolean`

### public boolean acceptsInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean addInputItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `boolean`

### public boolean removeInputItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public void verifyInputItems(ArrayList<InventoryItem> playerItems)

**Parameters:**
- `ArrayList<InventoryItem>` `playerItems`

**Returns:** `void`

### public boolean isDestroy()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\CraftRecipeData.InputScriptData.html`*
