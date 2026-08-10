---
title: zombie.core.skinnedmodel.advancedanimation.AnimatedModel.AnimatedModelInstanceRenderData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimatedModel.AnimatedModelInstanceRenderData

`public static class AnimatedModel.AnimatedModelInstanceRenderData extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimatedModel.AnimatedModelInstanceRenderData

## Fields

### public Model model

### public Texture tex

### public ModelInstance modelInstance

### public FloatBuffer matrixPalette

### public final org.joml.Matrix4f xfrm

### public boolean ignoreLighting

### public final ShaderPropertyBlock properties

### public AnimatedModel.AnimatedModelInstanceRenderData parent

## Constructors

### public AnimatedModelInstanceRenderData()

## Methods

### public void initMatrixPalette()

**Returns:** `void`

### public AnimatedModel.AnimatedModelInstanceRenderData init()

**Returns:** `AnimatedModel.AnimatedModelInstanceRenderData`

### public void initModel(ModelInstance modelInstance,
AnimatedModel.AnimatedModelInstanceRenderData parentData)

**Parameters:**
- `ModelInstance` `modelInstance`
- `AnimatedModel.AnimatedModelInstanceRenderData` `parentData`

**Returns:** `void`

### public void UpdateCharacter(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public AnimatedModel.AnimatedModelInstanceRenderData transformToParent(AnimatedModel.AnimatedModelInstanceRenderData parentData)

**Parameters:**
- `AnimatedModel.AnimatedModelInstanceRenderData` `parentData`

**Returns:** `AnimatedModel.AnimatedModelInstanceRenderData`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimatedModel.AnimatedModelInstanceRenderData.html`*
