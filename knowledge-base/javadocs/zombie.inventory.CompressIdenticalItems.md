---
title: zombie.inventory.CompressIdenticalItems
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.CompressIdenticalItems

`public final class CompressIdenticalItems extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.CompressIdenticalItems

## Constructors

### public CompressIdenticalItems()

## Methods

### public static ArrayList<InventoryItem> save(ByteBuffer output,
ArrayList<InventoryItem> items,
IsoGameCharacter noCompress)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `ArrayList<InventoryItem>` `items`
- `IsoGameCharacter` `noCompress`

**Returns:** `ArrayList<InventoryItem>`

### public static ArrayList<InventoryItem> load(ByteBuffer input,
int worldVersion,
ArrayList<InventoryItem> items,
ArrayList<InventoryItem> includingObsoleteItems)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `ArrayList<InventoryItem>` `items`
- `ArrayList<InventoryItem>` `includingObsoleteItems`

**Returns:** `ArrayList<InventoryItem>`

### public static void save(ByteBuffer output,
InventoryItem item)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `InventoryItem` `item`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\CompressIdenticalItems.html`*
