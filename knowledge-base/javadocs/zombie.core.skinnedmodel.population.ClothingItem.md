---
title: zombie.core.skinnedmodel.population.ClothingItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.ClothingItem

`public final class ClothingItem extends Asset`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.skinnedmodel.population.ClothingItem

## Fields

### public String guid

### public String maleModel

### public String femaleModel

### public String altMaleModel

### public String altFemaleModel

### public boolean isStatic

### public ArrayList<String> baseTextures

### public String attachBone

### public ArrayList<Integer> masks

### public String masksFolder

### public String underlayMasksFolder

### public ArrayList<String> textureChoices

### public boolean allowRandomHue

### public boolean allowRandomTint

### public String decalGroup

### public String shader

### public String hatCategory

### public ArrayList<String> spawnWith

### public static final String s_masksFolderDefault

### public String mame

### public static final AssetType ASSET_TYPE

## Constructors

### public ClothingItem(AssetPath path,
AssetManager assetManager)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `assetManager`

## Methods

### public ArrayList<String> getBaseTextures()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getTextureChoices()

**Returns:** `ArrayList<String>`

### public String GetATexture()

**Returns:** `String`

### public ArrayList<String> getSpawnWith()

**Returns:** `ArrayList<String>`

### public boolean getAllowRandomHue()

**Returns:** `boolean`

### public boolean getAllowRandomTint()

**Returns:** `boolean`

### public String getDecalGroup()

**Returns:** `String`

### public boolean isHat()

**Returns:** `boolean`

### public boolean isMask()

**Returns:** `boolean`

### public void getCombinedMask(CharacterMask mask)

**Parameters:**
- `CharacterMask` `mask`

**Returns:** `void`

### public boolean hasModel()

**Returns:** `boolean`

### public String getModel(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `String`

### public String getAltModel(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `String`

### public String getFemaleModel()

**Returns:** `String`

### public String getMaleModel()

**Returns:** `String`

### public String getAltFemaleModel()

**Returns:** `String`

### public String getAltMaleModel()

**Returns:** `String`

### public String toString()

**Returns:** `String`

### public static void tryGetCombinedMask(ClothingItemReference itemRef,
CharacterMask mask)

**Parameters:**
- `ClothingItemReference` `itemRef`
- `CharacterMask` `mask`

**Returns:** `void`

### public static void tryGetCombinedMask(ClothingItem item,
CharacterMask mask)

**Parameters:**
- `ClothingItem` `item`
- `CharacterMask` `mask`

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\ClothingItem.html`*
