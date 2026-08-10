---
title: zombie.entity.components.crafting.recipe.ItemDataList
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.crafting.recipe
---

# zombie.entity.components.crafting.recipe.ItemDataList

`public class ItemDataList extends Object`

**Kind:** class · **Package:** zombie.entity.components.crafting.recipe

## Inheritance
- java.lang.Object
- zombie.entity.components.crafting.recipe.ItemDataList

## Constructors

### public ItemDataList(int capacity)

**Parameters:**
- `int` `capacity`

## Methods

### public int size()

**Returns:** `int`

### public Item getItem(int index)

**Parameters:**
- `int` `index`

**Returns:** `Item`

### public InventoryItem getInventoryItem(int index)

**Parameters:**
- `int` `index`

**Returns:** `InventoryItem`

### public void setProcessed(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public boolean isProcessed(int index)

**Parameters:**
- `int` `index`

**Returns:** `boolean`

### public void getUnprocessed(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public void getUnprocessed(ArrayList<InventoryItem> items,
boolean includeExisting)

**Parameters:**
- `ArrayList<InventoryItem>` `items`
- `boolean` `includeExisting`

**Returns:** `void`

### public boolean hasUnprocessed()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void addItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `void`

### public void addItem(InventoryItem inventoryItem,
boolean existingItem)

**Parameters:**
- `InventoryItem` `inventoryItem`
- `boolean` `existingItem`

**Returns:** `void`

### public void addItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `void`

### public void addItem(Item item,
boolean existingItem)

**Parameters:**
- `Item` `item`
- `boolean` `existingItem`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\crafting\recipe\ItemDataList.html`*
