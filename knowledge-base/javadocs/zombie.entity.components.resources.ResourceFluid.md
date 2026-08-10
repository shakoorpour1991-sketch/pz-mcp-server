---
title: zombie.entity.components.resources.ResourceFluid
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.ResourceFluid

`public class ResourceFluid extends Resource`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.components.resources.Resource
- zombie.entity.components.resources.ResourceFluid

## Methods

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public FluidContainer getFluidContainer()

**Returns:** `FluidContainer`

### public boolean isFull()

**Returns:** `boolean`

### public boolean isEmpty()

**Returns:** `boolean`

### public float getFluidAmount()

**Returns:** `float`

### public float getFluidCapacity()

**Returns:** `float`

### public float getFreeFluidCapacity()

**Returns:** `float`

### public float getFluidRatio()

**Returns:** `float`

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

### public void transferTo(ResourceFluid target,
float transferAmount)

**Parameters:**
- `ResourceFluid` `target`
- `float` `transferAmount`

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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\ResourceFluid.html`*
