---
title: zombie.characters.WornItems.WornItems
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.WornItems
---

# zombie.characters.WornItems.WornItems

`public final class WornItems extends Object`

**Kind:** class · **Package:** zombie.characters.WornItems

## Inheritance
- java.lang.Object
- zombie.characters.WornItems.WornItems

## Constructors

### public WornItems(BodyLocationGroup group)

**Parameters:**
- `BodyLocationGroup` `group`

### public WornItems(WornItems other)

**Parameters:**
- `WornItems` `other`

## Methods

### public void copyFrom(WornItems other)

**Parameters:**
- `WornItems` `other`

**Returns:** `void`

### public BodyLocationGroup getBodyLocationGroup()

**Returns:** `BodyLocationGroup`

### public WornItem get(int index)

**Parameters:**
- `int` `index`

**Returns:** `WornItem`

### public void setItem(ItemBodyLocation location,
InventoryItem item)

**Parameters:**
- `ItemBodyLocation` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getItem(ItemBodyLocation location)

**Parameters:**
- `ItemBodyLocation` `location`

**Returns:** `InventoryItem`

### public InventoryItem getItemById(int id)

**Parameters:**
- `int` `id`

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

### public ItemBodyLocation getLocation(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `ItemBodyLocation`

### public boolean contains(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public int size()

**Returns:** `int`

### public boolean isEmpty()

**Returns:** `boolean`

### public void forEach(Consumer<WornItem> c)

**Parameters:**
- `Consumer<WornItem>` `c`

**Returns:** `void`

### public void setFromItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void addItemsToItemContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

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

### public List<WornItem> getItems()

**Returns:** `List<WornItem>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\WornItems\WornItems.html`*
