---
title: zombie.core.skinnedmodel.visual.ItemVisual
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.visual
---

# zombie.core.skinnedmodel.visual.ItemVisual

`public final class ItemVisual extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.visual

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.visual.ItemVisual

## Fields

### public static final float NULL_HUE

### public float hue

### public ImmutableColor tint

### public int baseTexture

### public int textureChoice

### public String decal

## Constructors

### public ItemVisual()

### public ItemVisual(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

## Methods

### public void setItemType(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `void`

### public String getItemType()

**Returns:** `String`

### public void setAlternateModelName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getAlternateModelName()

**Returns:** `String`

### public String toString()

**Returns:** `String`

### public String getClothingItemName()

**Returns:** `String`

### public void setClothingItemName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public Item getScriptItem()

**Returns:** `Item`

### public ClothingItem getClothingItem()

**Returns:** `ClothingItem`

### public void getClothingItemCombinedMask(CharacterMask mask)

**Parameters:**
- `CharacterMask` `mask`

**Returns:** `void`

### public void copyVisualFrom(ItemVisual visual)

**Parameters:**
- `ItemVisual` `visual`

**Returns:** `void`

### public void setHue(float hue)

**Parameters:**
- `float` `hue`

**Returns:** `void`

### public float getHue()

**Returns:** `float`

### public float getHue(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `float`

### public void setTint(ImmutableColor tint)

**Parameters:**
- `ImmutableColor` `tint`

**Returns:** `void`

### public ImmutableColor getTint(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `ImmutableColor`

### public ImmutableColor getTint()

**Returns:** `ImmutableColor`

### public String getBaseTexture(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `String`

### public String getTextureChoice(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `String`

### public void setDecal(String decalName)

**Parameters:**
- `String` `decalName`

**Returns:** `void`

### public String getDecal(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `String`

### public void pickUninitializedValues(ClothingItem clothingItem)

**Parameters:**
- `ClothingItem` `clothingItem`

**Returns:** `void`

### public void synchWithOutfit(ClothingItemReference itemRef)

**Parameters:**
- `ClothingItemReference` `itemRef`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void copyFrom(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void setDenimPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `void`

### public float getDenimPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void setLeatherPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `void`

### public float getLeatherPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void setBasicPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `void`

### public float getBasicPatch(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public int getBasicPatchesNumber()

**Returns:** `int`

### public void setHole(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `void`

### public float getHole(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public int getHolesNumber()

**Returns:** `int`

### public void setBlood(BloodBodyPartType bodyPartType,
float amount)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`
- `float` `amount`

**Returns:** `void`

### public float getBlood(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public float getDirt(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void setDirt(BloodBodyPartType bodyPartType,
float amount)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`
- `float` `amount`

**Returns:** `void`

### public void copyBlood(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

**Returns:** `void`

### public void copyDirt(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

**Returns:** `void`

### public void copyHoles(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

**Returns:** `void`

### public void copyPatches(ItemVisual other)

**Parameters:**
- `ItemVisual` `other`

**Returns:** `void`

### public void removeHole(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `void`

### public void removePatch(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `void`

### public void removeBlood()

**Returns:** `void`

### public void removeDirt()

**Returns:** `void`

### public float getTotalBlood()

**Returns:** `float`

### public InventoryItem getInventoryItem()

**Returns:** `InventoryItem`

### public void setInventoryItem(InventoryItem inventoryItem)

**Parameters:**
- `InventoryItem` `inventoryItem`

**Returns:** `void`

### public void setBaseTexture(int baseTexture)

**Parameters:**
- `int` `baseTexture`

**Returns:** `void`

### public int getBaseTexture()

**Returns:** `int`

### public void setTextureChoice(int textureChoice)

**Parameters:**
- `int` `textureChoice`

**Returns:** `void`

### public int getTextureChoice()

**Returns:** `int`

### public String getLastStandString()

**Returns:** `String`

### public static InventoryItem createLastStandItem(String saveStr)

**Parameters:**
- `String` `saveStr`

**Returns:** `InventoryItem`

### public String getDescription()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\visual\ItemVisual.html`*
