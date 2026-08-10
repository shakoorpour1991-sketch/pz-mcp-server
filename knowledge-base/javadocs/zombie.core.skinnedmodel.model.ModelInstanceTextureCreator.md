---
title: zombie.core.skinnedmodel.model.ModelInstanceTextureCreator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.ModelInstanceTextureCreator

`public final class ModelInstanceTextureCreator extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.skinnedmodel.model.ModelInstanceTextureCreator

## Fields

### public int renderRefCount

### public int testNotReady

## Constructors

### public ModelInstanceTextureCreator()

## Methods

### public void init(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void init(BaseVisual baseVisual,
ItemVisuals itemVisuals,
ModelInstance chrModelInstance)

**Parameters:**
- `BaseVisual` `baseVisual`
- `ItemVisuals` `itemVisuals`
- `ModelInstance` `chrModelInstance`

**Returns:** `void`

### public void init(AnimalVisual animalVisual,
ModelInstance chrModelInstance)

**Parameters:**
- `AnimalVisual` `animalVisual`
- `ModelInstance` `chrModelInstance`

**Returns:** `void`

### public void init(HumanVisual humanVisual,
ItemVisuals itemVisuals,
ModelInstance chrModelInstance)

**Parameters:**
- `HumanVisual` `humanVisual`
- `ItemVisuals` `itemVisuals`
- `ModelInstance` `chrModelInstance`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void postRender()

**Returns:** `void`

### public boolean isRendered()

**Returns:** `boolean`

### public static ModelInstanceTextureCreator alloc()

**Returns:** `ModelInstanceTextureCreator`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\ModelInstanceTextureCreator.html`*
