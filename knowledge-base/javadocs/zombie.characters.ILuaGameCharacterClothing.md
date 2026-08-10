---
title: zombie.characters.ILuaGameCharacterClothing
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.characters
---

# zombie.characters.ILuaGameCharacterClothing

`public interface ILuaGameCharacterClothing`

**Kind:** interface · **Package:** zombie.characters

## Description

ILuaGameCharacterClothing
Provides the functions expected by LUA when dealing with objects of this type.

## Methods

### void dressInNamedOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### void dressInPersistentOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### void dressInPersistentOutfitID(int outfitID)

**Parameters:**
- `int` `outfitID`

**Returns:** `void`

### String getOutfitName()

**Returns:** `String`

### WornItems getWornItems()

**Returns:** `WornItems`

### void setWornItems(WornItems other)

**Parameters:**
- `WornItems` `other`

**Returns:** `void`

### InventoryItem getWornItem(ItemBodyLocation var1)

**Parameters:**
- `ItemBodyLocation` `var1`

**Returns:** `InventoryItem`

### void setWornItem(ItemBodyLocation var1,
InventoryItem var2)

**Parameters:**
- `ItemBodyLocation` `var1`
- `InventoryItem` `var2`

**Returns:** `void`

### void removeWornItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void removeWornItem(InventoryItem var1,
boolean var2)

**Parameters:**
- `InventoryItem` `var1`
- `boolean` `var2`

**Returns:** `void`

### void clearWornItems()

**Returns:** `void`

### BodyLocationGroup getBodyLocationGroup()

**Returns:** `BodyLocationGroup`

### void setClothingItem_Head(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void setClothingItem_Torso(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void setClothingItem_Back(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void setClothingItem_Hands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void setClothingItem_Legs(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void setClothingItem_Feet(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### void Dressup(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ILuaGameCharacterClothing.html`*
