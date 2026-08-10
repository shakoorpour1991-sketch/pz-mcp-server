---
title: zombie.scripting.objects.EvolvedRecipe
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.EvolvedRecipe

`public final class EvolvedRecipe extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.EvolvedRecipe

## Fields

### public String name

### public String displayName

### public int maxItems

### public final Map<String, ItemRecipe> itemsList

### public String resultItem

### public String baseItem

### public boolean cookable

### public boolean addIngredientIfCooked

### public boolean canAddSpicesEmpty

### public String addIngredientSound

### public boolean hidden

### public boolean allowFrozenItem

### public String template

### public Float minimumWater

## Constructors

### public EvolvedRecipe(String name)

**Parameters:**
- `String` `name`

## Methods

### public void Load(String name,
String token)
throws Exception

**Parameters:**
- `String` `name`
- `String` `token`

**Returns:** `void`

### public boolean needToBeCooked(InventoryItem itemTest)

**Parameters:**
- `InventoryItem` `itemTest`

**Returns:** `boolean`

### public ArrayList<InventoryItem> getItemsCanBeUse(IsoGameCharacter chr,
InventoryItem baseItem,
ArrayList<ItemContainer> containers)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `baseItem`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `ArrayList<InventoryItem>`

### public boolean isItemUsableInRecipe(IsoGameCharacter chr,
InventoryItem baseItem,
Integer id)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `baseItem`
- `Integer` `id`

**Returns:** `boolean`

### public InventoryItem addItem(InventoryItem baseItem,
InventoryItem usedItem,
IsoGameCharacter chr)

**Parameters:**
- `InventoryItem` `baseItem`
- `InventoryItem` `usedItem`
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public ItemRecipe getItemRecipe(InventoryItem usedItem)

**Parameters:**
- `InventoryItem` `usedItem`

**Returns:** `ItemRecipe`

### public String getName()

**Returns:** `String`

### public String getOriginalname()

**Returns:** `String`

### public String getUntranslatedName()

**Returns:** `String`

### public String getBaseItem()

**Returns:** `String`

### public float getMinimumWater()

**Returns:** `float`

### public boolean hasMinimumWater(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public Map<String, ItemRecipe> getItemsList()

**Returns:** `Map<String, ItemRecipe>`

### public ArrayList<ItemRecipe> getPossibleItems()

**Returns:** `ArrayList<ItemRecipe>`

### public String getResultItem()

**Returns:** `String`

### public String getFullResultItem()

**Returns:** `String`

### public boolean isCookable()

**Returns:** `boolean`

### public int getMaxItems()

**Returns:** `int`

### public boolean isResultItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isSpiceAdded(InventoryItem baseItem,
InventoryItem spiceItem)

**Parameters:**
- `InventoryItem` `baseItem`
- `InventoryItem` `spiceItem`

**Returns:** `boolean`

### public String getAddIngredientSound()

**Returns:** `String`

### public void setIsHidden(boolean hide)

**Parameters:**
- `boolean` `hide`

**Returns:** `void`

### public boolean isHidden()

**Returns:** `boolean`

### public boolean isAllowFrozenItem()

**Returns:** `boolean`

### public void setAllowFrozenItem(boolean allow)

**Parameters:**
- `boolean` `allow`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\EvolvedRecipe.html`*
