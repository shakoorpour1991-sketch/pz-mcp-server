---
title: zombie.core.skinnedmodel.visual.HumanVisual
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.visual
---

# zombie.core.skinnedmodel.visual.HumanVisual

`public class HumanVisual extends BaseVisual`

**Kind:** class · **Package:** zombie.core.skinnedmodel.visual

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.visual.BaseVisual
- zombie.core.skinnedmodel.visual.HumanVisual

## Fields

### public int zombieRotStage

## Constructors

### public HumanVisual(IHumanVisual owner)

**Parameters:**
- `IHumanVisual` `owner`

## Methods

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void setSkinColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

**Returns:** `void`

### public ImmutableColor getSkinColor()

**Returns:** `ImmutableColor`

### public void setBodyHairIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getBodyHairIndex()

**Returns:** `int`

### public void setSkinTextureIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getSkinTextureIndex()

**Returns:** `int`

### public void setSkinTextureName(String textureName)

**Parameters:**
- `String` `textureName`

**Returns:** `void`

### public float lerp(float start,
float end,
float delta)

**Parameters:**
- `float` `start`
- `float` `end`
- `float` `delta`

**Returns:** `float`

### public int pickRandomZombieRotStage()

**Returns:** `int`

### public String getSkinTexture()

**Returns:** `String`

### public void setHairColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

**Returns:** `void`

### public ImmutableColor getHairColor()

**Returns:** `ImmutableColor`

### public void setBeardColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

**Returns:** `void`

### public ImmutableColor getBeardColor()

**Returns:** `ImmutableColor`

### public void setNaturalHairColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

**Returns:** `void`

### public ImmutableColor getNaturalHairColor()

**Returns:** `ImmutableColor`

### public void setNaturalBeardColor(ImmutableColor color)

**Parameters:**
- `ImmutableColor` `color`

**Returns:** `void`

### public ImmutableColor getNaturalBeardColor()

**Returns:** `ImmutableColor`

### public void setHairModel(String model)

**Parameters:**
- `String` `model`

**Returns:** `void`

### public String getHairModel()

**Returns:** `String`

### public void setBeardModel(String model)

**Parameters:**
- `String` `model`

**Returns:** `void`

### public String getBeardModel()

**Returns:** `String`

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

### public void setDirt(BloodBodyPartType bodyPartType,
float amount)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`
- `float` `amount`

**Returns:** `void`

### public float getDirt(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void setHole(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `void`

### public float getHole(BloodBodyPartType bodyPartType)

**Parameters:**
- `BloodBodyPartType` `bodyPartType`

**Returns:** `float`

### public void removeBlood()

**Returns:** `void`

### public void removeDirt()

**Returns:** `void`

### public void randomBlood()

**Returns:** `void`

### public void randomDirt()

**Returns:** `void`

### public float getTotalBlood()

**Returns:** `float`

### public void clear()

**Returns:** `void`

### public void copyFrom(BaseVisual baseVisual)

**Parameters:**
- `BaseVisual` `baseVisual`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldversion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldversion`

**Returns:** `void`

### public Model getModel()

**Returns:** `Model`

### public ModelScript getModelScript()

**Returns:** `ModelScript`

### public static CharacterMask GetMask(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `CharacterMask`

### public void synchWithOutfit(Outfit outfit)

**Parameters:**
- `Outfit` `outfit`

**Returns:** `void`

### public void dressInNamedOutfit(String outfitName,
ItemVisuals itemVisuals)

**Parameters:**
- `String` `outfitName`
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void dressInNamedOutfit(String outfitName,
ItemVisuals itemVisuals,
boolean clear)

**Parameters:**
- `String` `outfitName`
- `ItemVisuals` `itemVisuals`
- `boolean` `clear`

**Returns:** `void`

### public void dressInClothingItem(String itemGUID,
ItemVisuals itemVisuals)

**Parameters:**
- `String` `itemGUID`
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void dressInClothingItem(String itemGUID,
ItemVisuals itemVisuals,
boolean clearCurrentVisuals)

**Parameters:**
- `String` `itemGUID`
- `ItemVisuals` `itemVisuals`
- `boolean` `clearCurrentVisuals`

**Returns:** `void`

### public ItemVisuals getBodyVisuals()

**Returns:** `ItemVisuals`

### public ItemVisual addBodyVisual(String clothingItemName)

**Parameters:**
- `String` `clothingItemName`

**Returns:** `ItemVisual`

### public ItemVisual addBodyVisualFromItemType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `ItemVisual`

### public ItemVisual addBodyVisualFromClothingItemName(String clothingItemName)

**Parameters:**
- `String` `clothingItemName`

**Returns:** `ItemVisual`

### public ItemVisual removeBodyVisualFromItemType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `ItemVisual`

### public boolean hasBodyVisualFromItemType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `boolean`

### public ItemVisual addClothingItem(ItemVisuals itemVisuals,
Item scriptItem)

**Parameters:**
- `ItemVisuals` `itemVisuals`
- `Item` `scriptItem`

**Returns:** `ItemVisual`

### public ItemVisual addClothingItem(ItemVisuals itemVisuals,
ClothingItem clothingItem)

**Parameters:**
- `ItemVisuals` `itemVisuals`
- `ClothingItem` `clothingItem`

**Returns:** `ItemVisual`

### public Outfit getOutfit()

**Returns:** `Outfit`

### public void setOutfit(Outfit outfit)

**Parameters:**
- `Outfit` `outfit`

**Returns:** `void`

### public String getNonAttachedHair()

**Returns:** `String`

### public void setNonAttachedHair(String nonAttachedHair)

**Parameters:**
- `String` `nonAttachedHair`

**Returns:** `void`

### public void setForceModel(Model model)

**Parameters:**
- `Model` `model`

**Returns:** `void`

### public void setForceModelScript(String modelScript)

**Parameters:**
- `String` `modelScript`

**Returns:** `void`

### public String getLastStandString()

**Returns:** `String`

### public boolean loadLastStandString(String saveStr)

**Parameters:**
- `String` `saveStr`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\visual\HumanVisual.html`*
