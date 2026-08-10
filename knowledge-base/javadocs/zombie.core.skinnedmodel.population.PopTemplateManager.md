---
title: zombie.core.skinnedmodel.population.PopTemplateManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.PopTemplateManager

`public class PopTemplateManager extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.population.PopTemplateManager

## Fields

### public static final PopTemplateManager instance

### public final ArrayList<String> maleSkins

### public final ArrayList<String> femaleSkins

### public final ArrayList<String> maleSkinsZombie1

### public final ArrayList<String> femaleSkinsZombie1

### public final ArrayList<String> maleSkinsZombie2

### public final ArrayList<String> femaleSkinsZombie2

### public final ArrayList<String> maleSkinsZombie3

### public final ArrayList<String> femaleSkinsZombie3

### public ArrayList<String> cowSkins

### public ArrayList<String> ratSkins

### public final ArrayList<String> skeletonMaleSkinsZombie

### public final ArrayList<String> skeletonFemaleSkinsZombie

### public static final int SKELETON_BURNED_SKIN_INDEX

### public static final int SKELETON_NORMAL_SKIN_INDEX

### public static final int SKELETON_MUSCLE_SKIN_INDEX

## Constructors

### public PopTemplateManager()

## Methods

### public void init()

**Returns:** `void`

### public ModelInstance addClothingItem(IsoGameCharacter chr,
ModelManager.ModelSlot modelSlot,
ItemVisual itemVisual,
ClothingItem clothingItem)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ModelManager.ModelSlot` `modelSlot`
- `ItemVisual` `itemVisual`
- `ClothingItem` `clothingItem`

**Returns:** `ModelInstance`

### public ModelInstance addClothingItem(IsoGameCharacter chr,
ModelManager.ModelSlot modelSlot,
ItemVisual itemVisual,
ClothingItem clothingItem,
boolean alt)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ModelManager.ModelSlot` `modelSlot`
- `ItemVisual` `itemVisual`
- `ClothingItem` `clothingItem`
- `boolean` `alt`

**Returns:** `ModelInstance`

### public void populateCharacterModelSlot(IsoGameCharacter chr,
ModelManager.ModelSlot modelSlot)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ModelManager.ModelSlot` `modelSlot`

**Returns:** `void`

### public boolean isItemModelHidden(BodyLocationGroup bodyLocationGroup,
ItemVisuals visuals,
ItemVisual visual)

**Parameters:**
- `BodyLocationGroup` `bodyLocationGroup`
- `ItemVisuals` `visuals`
- `ItemVisual` `visual`

**Returns:** `boolean`

### public boolean isItemModelHidden(ItemVisuals visuals,
ItemBodyLocation bodyLocation)

**Parameters:**
- `ItemVisuals` `visuals`
- `ItemBodyLocation` `bodyLocation`

**Returns:** `boolean`

### public boolean isItemModelAlt(BodyLocationGroup bodyLocationGroup,
ItemVisuals visuals,
ItemVisual visual)

**Parameters:**
- `BodyLocationGroup` `bodyLocationGroup`
- `ItemVisuals` `visuals`
- `ItemVisual` `visual`

**Returns:** `boolean`

### public boolean isItemModelAlt(ItemVisuals visuals,
ItemBodyLocation bodyLocation)

**Parameters:**
- `ItemVisuals` `visuals`
- `ItemBodyLocation` `bodyLocation`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\PopTemplateManager.html`*
