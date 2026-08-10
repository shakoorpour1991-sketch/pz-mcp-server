---
title: zombie.core.skinnedmodel.population.Outfit
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.Outfit

`public class Outfit extends Object implements Cloneable`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.population.Outfit

## Fields

### public String name

### public boolean top

### public boolean pants

### public final ArrayList<String> topTextures

### public final ArrayList<String> pantsTextures

### public final ArrayList<ClothingItemReference> items

### public boolean allowPantsHue

### public boolean allowPantsTint

### public boolean allowTopTint

### public boolean allowTshirtDecal

### public String modId

### public boolean immutable

### public final Outfit.RandomData randomData

## Constructors

### public Outfit()

## Methods

### public void setModID(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `void`

### public void AddItem(ClothingItemReference item)

**Parameters:**
- `ClothingItemReference` `item`

**Returns:** `void`

### public void Randomize()

**Returns:** `void`

### public void randomizeItem(String itemGuid)

**Parameters:**
- `String` `itemGuid`

**Returns:** `void`

### public CharacterMask GetMask()

**Returns:** `CharacterMask`

### public boolean containsItemGuid(String itemGuid)

**Parameters:**
- `String` `itemGuid`

**Returns:** `boolean`

### public ClothingItemReference findItemByGUID(String itemGuid)

**Parameters:**
- `String` `itemGuid`

**Returns:** `ClothingItemReference`

### public Outfit clone()

**Returns:** `Outfit`

### public ClothingItemReference findHat()

**Returns:** `ClothingItemReference`

### public boolean isEmpty()

**Returns:** `boolean`

### public void loadItems()

**Returns:** `void`

### public String getName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\Outfit.html`*
