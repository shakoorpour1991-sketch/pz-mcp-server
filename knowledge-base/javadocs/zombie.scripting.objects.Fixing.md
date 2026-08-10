---
title: zombie.scripting.objects.Fixing
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.Fixing

`public final class Fixing extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.Fixing

## Constructors

### public Fixing()

## Methods

### public void Load(String name,
String body)

**Parameters:**
- `String` `name`
- `String` `body`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public ArrayList<String> getRequiredItem()

**Returns:** `ArrayList<String>`

### public void addRequiredItem(String require)

**Parameters:**
- `String` `require`

**Returns:** `void`

### public LinkedList<Fixing.Fixer> getFixers()

**Returns:** `LinkedList<Fixing.Fixer>`

### public Fixing.Fixer usedInFixer(InventoryItem itemType,
IsoGameCharacter chr)

**Parameters:**
- `InventoryItem` `itemType`
- `IsoGameCharacter` `chr`

**Returns:** `Fixing.Fixer`

### public InventoryItem haveGlobalItem(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public InventoryItem haveThisFixer(IsoGameCharacter chr,
Fixing.Fixer fixer,
InventoryItem brokenObject)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Fixing.Fixer` `fixer`
- `InventoryItem` `brokenObject`

**Returns:** `InventoryItem`

### public int countUses(IsoGameCharacter chr,
Fixing.Fixer fixer,
InventoryItem brokenObject)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Fixing.Fixer` `fixer`
- `InventoryItem` `brokenObject`

**Returns:** `int`

### public ArrayList<InventoryItem> getRequiredFixerItems(IsoGameCharacter chr,
Fixing.Fixer fixer,
InventoryItem brokenItem,
ArrayList<InventoryItem> items)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Fixing.Fixer` `fixer`
- `InventoryItem` `brokenItem`
- `ArrayList<InventoryItem>` `items`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<InventoryItem> getRequiredItems(IsoGameCharacter chr,
Fixing.Fixer fixer,
InventoryItem brokenItem)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Fixing.Fixer` `fixer`
- `InventoryItem` `brokenItem`

**Returns:** `ArrayList<InventoryItem>`

### public Fixing.Fixer getGlobalItem()

**Returns:** `Fixing.Fixer`

### public void setGlobalItem(Fixing.Fixer globalItem)

**Parameters:**
- `Fixing.Fixer` `globalItem`

**Returns:** `void`

### public float getConditionModifier()

**Returns:** `float`

### public void setConditionModifier(float conditionModifier)

**Parameters:**
- `float` `conditionModifier`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\Fixing.html`*
