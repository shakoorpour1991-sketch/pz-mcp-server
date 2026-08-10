---
title: zombie.characters.AttachedItems.AttachedItems
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.AttachedItems
---

# zombie.characters.AttachedItems.AttachedItems

`public final class AttachedItems extends Object`

**Kind:** class · **Package:** zombie.characters.AttachedItems

## Inheritance
- java.lang.Object
- zombie.characters.AttachedItems.AttachedItems

## Constructors

### public AttachedItems(AttachedLocationGroup group)

**Parameters:**
- `AttachedLocationGroup` `group`

### public AttachedItems(AttachedItems other)

**Parameters:**
- `AttachedItems` `other`

## Methods

### public void copyFrom(AttachedItems other)

**Parameters:**
- `AttachedItems` `other`

**Returns:** `void`

### public AttachedLocationGroup getGroup()

**Returns:** `AttachedLocationGroup`

### public AttachedItem get(int index)

**Parameters:**
- `int` `index`

**Returns:** `AttachedItem`

### public void setItem(String location,
InventoryItem item)

**Parameters:**
- `String` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getItem(String location)

**Parameters:**
- `String` `location`

**Returns:** `InventoryItem`

### public InventoryItem getItemByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `InventoryItem`

### public void remove(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public String getLocation(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `String`

### public boolean contains(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public void forEach(Consumer<AttachedItem> c)

**Parameters:**
- `Consumer<AttachedItem>` `c`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\AttachedItems\AttachedItems.html`*
