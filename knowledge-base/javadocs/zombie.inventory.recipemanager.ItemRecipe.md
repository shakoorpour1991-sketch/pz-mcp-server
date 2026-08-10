---
title: zombie.inventory.recipemanager.ItemRecipe
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.recipemanager
---

# zombie.inventory.recipemanager.ItemRecipe

`public class ItemRecipe extends Object`

**Kind:** class · **Package:** zombie.inventory.recipemanager

## Inheritance
- java.lang.Object
- zombie.inventory.recipemanager.ItemRecipe

## Fields

### public static final String FLUID_PREFIX

## Methods

### public static int getNumberOfTimesRecipeCanBeDone(Recipe recipe,
IsoGameCharacter chr,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`

**Returns:** `int`

### public static ItemRecipe Alloc(Recipe recipe,
IsoGameCharacter character,
ArrayList<ItemContainer> containers,
InventoryItem selectedItem,
ArrayList<InventoryItem> ignoreItems,
boolean allItems)

**Parameters:**
- `Recipe` `recipe`
- `IsoGameCharacter` `character`
- `ArrayList<ItemContainer>` `containers`
- `InventoryItem` `selectedItem`
- `ArrayList<InventoryItem>` `ignoreItems`
- `boolean` `allItems`

**Returns:** `ItemRecipe`

### public static void Release(ItemRecipe o)

**Parameters:**
- `ItemRecipe` `o`

**Returns:** `void`

### public ArrayList<InventoryItem> perform()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSourceItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getSourceItems(int sourceIndex)

**Parameters:**
- `int` `sourceIndex`

**Returns:** `ArrayList<InventoryItem>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\recipemanager\ItemRecipe.html`*
