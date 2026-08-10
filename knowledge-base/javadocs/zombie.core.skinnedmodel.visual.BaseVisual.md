---
title: zombie.core.skinnedmodel.visual.BaseVisual
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.visual
---

# zombie.core.skinnedmodel.visual.BaseVisual

`public abstract class BaseVisual extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.visual

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.visual.BaseVisual

## Constructors

### public BaseVisual()

## Methods

### public abstract void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public abstract void load(ByteBuffer input,
int WorldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `WorldVersion`

**Returns:** `void`

### public abstract Model getModel()

**Returns:** `Model`

### public abstract ModelScript getModelScript()

**Returns:** `ModelScript`

### public abstract void clear()

**Returns:** `void`

### public abstract void copyFrom(BaseVisual other)

**Parameters:**
- `BaseVisual` `other`

**Returns:** `void`

### public abstract void dressInNamedOutfit(String outfitName,
ItemVisuals itemVisuals)

**Parameters:**
- `String` `outfitName`
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\visual\BaseVisual.html`*
