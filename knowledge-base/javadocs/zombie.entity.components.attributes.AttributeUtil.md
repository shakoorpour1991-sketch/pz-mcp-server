---
title: zombie.entity.components.attributes.AttributeUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeUtil

`public class AttributeUtil extends Object`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.components.attributes.AttributeUtil

## Fields

### public static final String enum_prefix

## Constructors

### public AttributeUtil()

## Methods

### public static boolean isEnumString(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static <E extends Enum<E> & IOEnum> E enumValueFromScriptString(Class<E> enumClass,
String s)

**Returns:** `E`

### public static <E extends Enum<E> & IOEnum> E tryEnumValueFromScriptString(Class<E> enumClass,
String s)

**Returns:** `E`

### public static ArrayList<InventoryItem> allocItemList()

**Returns:** `ArrayList<InventoryItem>`

### public static void releaseItemList(ArrayList<InventoryItem> list)

**Parameters:**
- `ArrayList<InventoryItem>` `list`

**Returns:** `void`

### public static ArrayList<InventoryItem> getItemsFromList(String itemString,
ArrayList<InventoryItem> sources,
ArrayList<InventoryItem> outputlist)

**Parameters:**
- `String` `itemString`
- `ArrayList<InventoryItem>` `sources`
- `ArrayList<InventoryItem>` `outputlist`

**Returns:** `ArrayList<InventoryItem>`

### public static float getAttributeAverage(ArrayList<InventoryItem> items,
AttributeType attribute)

**Parameters:**
- `ArrayList<InventoryItem>` `items`
- `AttributeType` `attribute`

**Returns:** `float`

### public static float convertAttributeToUnit(InventoryItem item,
AttributeType attribute)

**Parameters:**
- `InventoryItem` `item`
- `AttributeType` `attribute`

**Returns:** `float`

### public static float convertAttribute(InventoryItem item,
AttributeType attribute,
AttributeType target)

**Parameters:**
- `InventoryItem` `item`
- `AttributeType` `attribute`
- `AttributeType` `target`

**Returns:** `float`

### public static float convertAttributeToRange(InventoryItem item,
AttributeType attribute,
float rangeMin,
float rangeMax)

**Parameters:**
- `InventoryItem` `item`
- `AttributeType` `attribute`
- `float` `rangeMin`
- `float` `rangeMax`

**Returns:** `float`

### public static ArrayList<Double> allocDoubleList()

**Returns:** `ArrayList<Double>`

### public static void releaseDoubleList(ArrayList<Double> list)

**Parameters:**
- `ArrayList<Double>` `list`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeUtil.html`*
