---
title: zombie.inventory.InventoryItemFactory
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.InventoryItemFactory

`public final class InventoryItemFactory extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.InventoryItemFactory

## Constructors

### public InventoryItemFactory()

## Methods

### public static <T extends InventoryItem> T CreateItem(ItemKey key)

**Returns:** `T`

### public static <T extends InventoryItem> T CreateItem(String itemType)

**Returns:** `T`

### public static <T extends InventoryItem> T CreateItem(AmmoType ammoType)

**Returns:** `T`

### public static InventoryItem CreateItem(String itemType,
Food food)

**Parameters:**
- `String` `itemType`
- `Food` `food`

**Returns:** `InventoryItem`

### public static InventoryItem CreateItem(String itemType,
float useDelta)

**Parameters:**
- `String` `itemType`
- `float` `useDelta`

**Returns:** `InventoryItem`

### public static Item getItem(String itemType,
boolean moduleDefaultsToBase)

**Parameters:**
- `String` `itemType`
- `boolean` `moduleDefaultsToBase`

**Returns:** `Item`

### public static InventoryItem CreateItem(String itemType,
float useDelta,
boolean moduleDefaultsToBase)

**Parameters:**
- `String` `itemType`
- `float` `useDelta`
- `boolean` `moduleDefaultsToBase`

**Returns:** `InventoryItem`

### @Deprecated
public static InventoryItem CreateItem(String itemType,
float useDelta,
String param)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `itemType`
- `float` `useDelta`
- `String` `param`

**Returns:** `InventoryItem`

### @Deprecated
public static InventoryItem CreateItem(String module,
String name,
String type,
String tex)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

**Returns:** `InventoryItem`

### public static InventoryItem CreateItem(short registryID)

**Parameters:**
- `short` `registryID`

**Returns:** `InventoryItem`

### public static InventoryItem CreateItem(InventoryItem item,
String itemType)

**Parameters:**
- `InventoryItem` `item`
- `String` `itemType`

**Returns:** `InventoryItem`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\InventoryItemFactory.html`*
