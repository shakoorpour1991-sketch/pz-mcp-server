---
title: zombie.inventory.types.InventoryContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.InventoryContainer

`public final class InventoryContainer extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.InventoryContainer

## Constructors

### public InventoryContainer(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

## Methods

### public boolean IsInventoryContainer()

**Returns:** `boolean`

### public String getCategory()

**Returns:** `String`

### public ItemContainer getInventory()

**Returns:** `ItemContainer`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public int getCapacity()

**Returns:** `int`

### public void setCapacity(int capacity)

**Parameters:**
- `int` `capacity`

**Returns:** `void`

### public float getMaxItemSize()

**Returns:** `float`

### public float getInventoryWeight()

**Returns:** `float`

### public int getEffectiveCapacity(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public int getWeightReduction()

**Returns:** `int`

### public void setWeightReduction(int weightReduction)

**Parameters:**
- `int` `weightReduction`

**Returns:** `void`

### public void updateAge()

**Returns:** `void`

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

### public void setBloodLevel(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public float getBloodLevel()

**Returns:** `float`

### public float getDirtiness()

**Returns:** `float`

### public void setCanBeEquipped(ItemBodyLocation canBeEquipped)

**Parameters:**
- `ItemBodyLocation` `canBeEquipped`

**Returns:** `void`

### public ItemBodyLocation canBeEquipped()

**Returns:** `ItemBodyLocation`

### public ItemContainer getItemContainer()

**Returns:** `ItemContainer`

### public void setItemContainer(ItemContainer cont)

**Parameters:**
- `ItemContainer` `cont`

**Returns:** `void`

### public float getContentsWeight()

**Returns:** `float`

### public float getEquippedWeight()

**Returns:** `float`

### public String getClothingExtraSubmenu()

**Returns:** `String`

### public void reset()

**Returns:** `void`

### public boolean isEmpty()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\InventoryContainer.html`*
