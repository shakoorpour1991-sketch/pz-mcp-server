---
title: zombie.core.skinnedmodel.visual.AnimalVisual
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.visual
---

# zombie.core.skinnedmodel.visual.AnimalVisual

`public class AnimalVisual extends BaseVisual`

**Kind:** class · **Package:** zombie.core.skinnedmodel.visual

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.visual.BaseVisual
- zombie.core.skinnedmodel.visual.AnimalVisual

## Fields

### public int animalRotStage

## Constructors

### public AnimalVisual(IAnimalVisual owner)

**Parameters:**
- `IAnimalVisual` `owner`

## Methods

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

### public Model getModel()

**Returns:** `Model`

### public Model getModelTest(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `Model`

### public ModelScript getModelScript()

**Returns:** `ModelScript`

### public void dressInNamedOutfit(String outfitName,
ItemVisuals itemVisuals)

**Parameters:**
- `String` `outfitName`
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public String getAnimalType()

**Returns:** `String`

### public float getAnimalSize()

**Returns:** `float`

### public IsoAnimal getIsoAnimal()

**Returns:** `IsoAnimal`

### public String getSkinTexture()

**Returns:** `String`

### public void setSkinTextureName(String textureName)

**Parameters:**
- `String` `textureName`

**Returns:** `void`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

### public void copyFrom(BaseVisual baseVisual)

**Parameters:**
- `BaseVisual` `baseVisual`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\visual\AnimalVisual.html`*
