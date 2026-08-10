---
title: zombie.inventory.types.AnimalInventoryItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.AnimalInventoryItem

`public class AnimalInventoryItem extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.AnimalInventoryItem

## Constructors

### public AnimalInventoryItem(String module,
String name,
String type,
String tex)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

### public AnimalInventoryItem(String module,
String name,
String type,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `Item` `item`

## Methods

### public void update()

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

### public void initAnimalData()

**Returns:** `void`

### public IsoAnimal getAnimal()

**Returns:** `IsoAnimal`

### public void setAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

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

### public String getCategory()

**Returns:** `String`

### public boolean shouldUpdateInWorld()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\AnimalInventoryItem.html`*
