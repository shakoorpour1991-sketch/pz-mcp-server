---
title: zombie.characters.WornItems.BodyLocationGroup
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.WornItems
---

# zombie.characters.WornItems.BodyLocationGroup

`public class BodyLocationGroup extends Object`

**Kind:** class · **Package:** zombie.characters.WornItems

## Inheritance
- java.lang.Object
- zombie.characters.WornItems.BodyLocationGroup

## Constructors

### public BodyLocationGroup(String id)

**Parameters:**
- `String` `id`

## Methods

### public String getId()

**Returns:** `String`

### public BodyLocation getLocation(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `BodyLocation`

### public BodyLocation getOrCreateLocation(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `BodyLocation`

### public BodyLocation getLocationByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `BodyLocation`

### public void moveLocationToIndex(ItemBodyLocation itemBodyLocation,
int index)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`
- `int` `index`

**Returns:** `void`

### public int size()

**Returns:** `int`

### public void setExclusive(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `void`

### public boolean isExclusive(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `boolean`

### public void setHideModel(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `void`

### public boolean isHideModel(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `boolean`

### public void setAltModel(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `void`

### public boolean isAltModel(ItemBodyLocation firstId,
ItemBodyLocation secondId)

**Parameters:**
- `ItemBodyLocation` `firstId`
- `ItemBodyLocation` `secondId`

**Returns:** `boolean`

### public int indexOf(ItemBodyLocation locationId)

**Parameters:**
- `ItemBodyLocation` `locationId`

**Returns:** `int`

### public void setMultiItem(ItemBodyLocation locationId,
boolean bMultiItem)

**Parameters:**
- `ItemBodyLocation` `locationId`
- `boolean` `bMultiItem`

**Returns:** `void`

### public boolean isMultiItem(ItemBodyLocation locationId)

**Parameters:**
- `ItemBodyLocation` `locationId`

**Returns:** `boolean`

### public List<BodyLocation> getAllLocations()

**Returns:** `List<BodyLocation>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\WornItems\BodyLocationGroup.html`*
