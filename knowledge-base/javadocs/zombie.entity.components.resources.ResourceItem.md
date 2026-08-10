---
title: zombie.entity.components.resources.ResourceItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.ResourceItem

`public class ResourceItem extends Resource`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.components.resources.Resource
- zombie.entity.components.resources.ResourceItem

## Methods

### public ItemFilter getItemFilter()

**Returns:** `ItemFilter`

### public int storedSize()

**Returns:** `int`

### public boolean isStackAnyItem()

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public boolean isFull()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public int getItemAmount()

**Returns:** `int`

### public int getItemAmount(Item itemType)

**Parameters:**
- `Item` `itemType`

**Returns:** `int`

### public float getItemUses(InputScript inputScript)

**Parameters:**
- `InputScript` `inputScript`

**Returns:** `float`

### public float getFluidAmount()

**Returns:** `float`

### public float getEnergyAmount()

**Returns:** `float`

### public float getItemUsesAmount()

**Returns:** `float`

### public int getItemCapacity()

**Returns:** `int`

### public float getFluidCapacity()

**Returns:** `float`

### public float getEnergyCapacity()

**Returns:** `float`

### public float getItemUsesCapacity()

**Returns:** `float`

### public int getFreeItemCapacity()

**Returns:** `int`

### public float getFreeFluidCapacity()

**Returns:** `float`

### public float getFreeEnergyCapacity()

**Returns:** `float`

### public float getFreeItemUsesCapacity()

**Returns:** `float`

### public boolean containsItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean acceptsItem(InventoryItem item,
boolean ignoreFilters)

**Parameters:**
- `InventoryItem` `item`
- `boolean` `ignoreFilters`

**Returns:** `boolean`

### public boolean canStackItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean canStackItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public InventoryItem offerItem(InventoryItem item,
boolean ignoreFilters)

**Parameters:**
- `InventoryItem` `item`
- `boolean` `ignoreFilters`

**Returns:** `InventoryItem`

### public InventoryItem offerItem(InventoryItem item,
boolean ignoreFilters,
boolean force,
boolean syncEntity)

**Parameters:**
- `InventoryItem` `item`
- `boolean` `ignoreFilters`
- `boolean` `force`
- `boolean` `syncEntity`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> offerItems(List<InventoryItem> items)

**Parameters:**
- `List<InventoryItem>` `items`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> offerItems(List<InventoryItem> items,
boolean ignoreFilters)

**Parameters:**
- `List<InventoryItem>` `items`
- `boolean` `ignoreFilters`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> removeAllItems(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> removeAllItems(ArrayList<InventoryItem> list,
Item itemType)

**Parameters:**
- `ArrayList<InventoryItem>` `list`
- `Item` `itemType`

**Returns:** `ArrayList<InventoryItem>`

### public InventoryItem pollItem()

**Returns:** `InventoryItem`

### public InventoryItem pollItem(boolean force,
boolean syncEntity)

**Parameters:**
- `boolean` `force`
- `boolean` `syncEntity`

**Returns:** `InventoryItem`

### public InventoryItem peekItem()

**Returns:** `InventoryItem`

### public InventoryItem getItemById(int id)

**Parameters:**
- `int` `id`

**Returns:** `InventoryItem`

### public InventoryItem removeItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public InventoryItem removeItemById(int id)

**Parameters:**
- `int` `id`

**Returns:** `InventoryItem`

### public InventoryItem peekItem(int offset)

**Parameters:**
- `int` `offset`

**Returns:** `InventoryItem`

### public ArrayList<InventoryItem> getStoredItems()

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getStoredItemsOfType(Item itemType)

**Parameters:**
- `Item` `itemType`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<Item> getUniqueItems()

**Returns:** `ArrayList<Item>`

### public void tryTransferTo(Resource target)

**Parameters:**
- `Resource` `target`

**Returns:** `void`

### public void tryTransferTo(Resource target,
float amount)

**Parameters:**
- `Resource` `target`
- `float` `amount`

**Returns:** `void`

### public void transferTo(ResourceItem target,
int transferAmount)

**Parameters:**
- `ResourceItem` `target`
- `int` `transferAmount`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void saveSync(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void loadSync(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean tryLoadSyncItems(ByteBuffer input,
int worldVersion,
int size,
String type,
boolean forceCreate)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `int` `size`
- `String` `type`
- `boolean` `forceCreate`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\ResourceItem.html`*
