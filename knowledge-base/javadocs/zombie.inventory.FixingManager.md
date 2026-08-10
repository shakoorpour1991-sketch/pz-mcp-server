---
title: zombie.inventory.FixingManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory
---

# zombie.inventory.FixingManager

`public final class FixingManager extends Object`

**Kind:** class · **Package:** zombie.inventory

## Inheritance
- java.lang.Object
- zombie.inventory.FixingManager

## Constructors

### public FixingManager()

## Methods

### public static ArrayList<Fixing> getFixes(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `ArrayList<Fixing>`

### public static InventoryItem fixItem(InventoryItem brokenItem,
IsoGameCharacter chr,
Fixing fixing,
Fixing.Fixer fixer)

**Parameters:**
- `InventoryItem` `brokenItem`
- `IsoGameCharacter` `chr`
- `Fixing` `fixing`
- `Fixing.Fixer` `fixer`

**Returns:** `InventoryItem`

### public static void useFixer(IsoGameCharacter chr,
Fixing.Fixer fixer,
InventoryItem brokenItem)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Fixing.Fixer` `fixer`
- `InventoryItem` `brokenItem`

**Returns:** `void`

### public static double getChanceOfFail(InventoryItem brokenItem,
IsoGameCharacter chr,
Fixing fixing,
Fixing.Fixer fixer)

**Parameters:**
- `InventoryItem` `brokenItem`
- `IsoGameCharacter` `chr`
- `Fixing` `fixing`
- `Fixing.Fixer` `fixer`

**Returns:** `double`

### public static double getCondRepaired(InventoryItem brokenItem,
IsoGameCharacter chr,
Fixing fixing,
Fixing.Fixer fixer)

**Parameters:**
- `InventoryItem` `brokenItem`
- `IsoGameCharacter` `chr`
- `Fixing` `fixing`
- `Fixing.Fixer` `fixer`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\FixingManager.html`*
