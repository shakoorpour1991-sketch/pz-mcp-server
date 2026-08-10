---
title: zombie.entity.components.resources.Resource
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.Resource

`public abstract class Resource extends Object`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.components.resources.Resource

## Methods

### public boolean isDirty()

**Returns:** `boolean`

### public void setDirty()

**Returns:** `void`

### public Resources getResourcesComponent()

**Returns:** `Resources`

### public GameEntity getGameEntity()

**Returns:** `GameEntity`

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

### public String getId()

**Returns:** `String`

### public ResourceType getType()

**Returns:** `ResourceType`

### public ResourceIO getIO()

**Returns:** `ResourceIO`

### public ResourceChannel getChannel()

**Returns:** `ResourceChannel`

### public boolean isAutoDecay()

**Returns:** `boolean`

### public boolean isTemporary()

**Returns:** `boolean`

### public boolean hasFlag(ResourceFlag flag)

**Parameters:**
- `ResourceFlag` `flag`

**Returns:** `boolean`

### public String getDebugFlagsString()

**Returns:** `String`

### public String getFilterName()

**Returns:** `String`

### public void setProgress(double progress)

**Parameters:**
- `double` `progress`

**Returns:** `void`

### public double getProgress()

**Returns:** `double`

### public boolean isLocked()

**Returns:** `boolean`

### public void setLocked(boolean locked)

**Parameters:**
- `boolean` `locked`

**Returns:** `void`

### public abstract boolean isFull()

**Returns:** `boolean`

### public abstract boolean isEmpty()

**Returns:** `boolean`

### public int getItemAmount()

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

### public boolean canMoveItemsToOutput()

**Returns:** `boolean`

### public boolean containsItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public final boolean acceptsItem(InventoryItem item)

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

### public final InventoryItem offerItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `InventoryItem`

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

### public InventoryItem peekItem(int offset)

**Parameters:**
- `int` `offset`

**Returns:** `InventoryItem`

### public boolean canDrainToItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean drainToItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean canDrainFromItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean drainFromItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

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

### public abstract void clear()

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

### public void sync()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\Resource.html`*
