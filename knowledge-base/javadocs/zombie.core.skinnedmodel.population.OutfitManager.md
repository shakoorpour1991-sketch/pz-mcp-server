---
title: zombie.core.skinnedmodel.population.OutfitManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.OutfitManager

`public class OutfitManager extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.population.OutfitManager

## Fields

### public ArrayList<Outfit> maleOutfits

### public ArrayList<Outfit> femaleOutfits

### public static OutfitManager instance

## Constructors

### public OutfitManager()

## Methods

### public static void init()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void Reload()

**Returns:** `void`

### public void addClothingItemListener(IClothingItemListener listener)

**Parameters:**
- `IClothingItemListener` `listener`

**Returns:** `void`

### public void removeClothingItemListener(IClothingItemListener listener)

**Parameters:**
- `IClothingItemListener` `listener`

**Returns:** `void`

### public Outfit GetRandomOutfit(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `Outfit`

### public Outfit GetRandomNonSillyOutfit(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `Outfit`

### public Outfit GetRandomNonProfessionalOutfit(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `Outfit`

### public Outfit GetSpecificOutfit(boolean female,
String outfitName)

**Parameters:**
- `boolean` `female`
- `String` `outfitName`

**Returns:** `Outfit`

### public Outfit FindMaleOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `Outfit`

### public Outfit FindFemaleOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `Outfit`

### public ClothingItem getClothingItem(String itemGUID)

**Parameters:**
- `String` `itemGUID`

**Returns:** `ClothingItem`

### public void onClothingItemStateChanged(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `void`

### public void loadAllClothingItems()

**Returns:** `void`

### public boolean isLoadingClothingItems()

**Returns:** `boolean`

### public void debugOutfits()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\OutfitManager.html`*
