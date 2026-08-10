---
title: zombie.inventory.ItemFilter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.ItemFilter

`public class ItemFilter extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.ItemFilter

## Constructors

### public ItemFilter()

## Methods

### public void setFilterScript(String filterScriptName)

**Parameters:**
- `String` `filterScriptName`

**Returns:** `void`

### public ItemFilterScript getFilterScript()

**Returns:** `ItemFilterScript`

### public boolean isActive()

**Returns:** `boolean`

### public boolean allows(String fulltype)

**Parameters:**
- `String` `fulltype`

**Returns:** `boolean`

### public boolean allows(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean allows(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\ItemFilter.html`*
