---
title: zombie.entity.components.resources.ResourceEnergy
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.ResourceEnergy

`public class ResourceEnergy extends Resource`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.components.resources.Resource
- zombie.entity.components.resources.ResourceEnergy

## Methods

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

### public Energy getEnergy()

**Returns:** `Energy`

### public float getEnergyAmount()

**Returns:** `float`

### public float getEnergyCapacity()

**Returns:** `float`

### public float getFreeEnergyCapacity()

**Returns:** `float`

### public float getEnergyRatio()

**Returns:** `float`

### public boolean setEnergyAmount(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `boolean`

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

### public void transferTo(ResourceEnergy target,
float transferAmount)

**Parameters:**
- `ResourceEnergy` `target`
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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\ResourceEnergy.html`*
