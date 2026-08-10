---
title: zombie.core.skinnedmodel.animation.SoftwareSkinnedModelAnim
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.SoftwareSkinnedModelAnim

`public final class SoftwareSkinnedModelAnim extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.SoftwareSkinnedModelAnim

## Fields

### public static org.lwjgl.util.vector.Matrix4f[] boneTransforms

### public static org.lwjgl.util.vector.Matrix4f[] worldTransforms

### public static org.lwjgl.util.vector.Matrix4f[] skinTransforms

### public HashMap<String,Integer> AnimationOffset

### public HashMap<String,Integer> AnimationLength

### public int vertCount

## Constructors

### public SoftwareSkinnedModelAnim(StaticAnimation[] staticAnimations,
SoftwareModelMesh softwareModelMesh,
SkinningData skinningData)

**Parameters:**
- `StaticAnimation[]` `staticAnimations`
- `SoftwareModelMesh` `softwareModelMesh`
- `SkinningData` `skinningData`

## Methods

### public void UpdateWorldTransforms(org.lwjgl.util.vector.Matrix4f var1,
float var2,
SkinningData skinningData)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `var1`
- `float` `var2`
- `SkinningData` `skinningData`

**Returns:** `void`

### public void UpdateSkinTransforms(SkinningData skinningData)

**Parameters:**
- `SkinningData` `skinningData`

**Returns:** `void`

### public VertexPositionNormalTangentTextureSkin updateSkin(org.lwjgl.util.vector.Matrix4f[] matrix4fs,
VertexPositionNormalTangentTextureSkin[] vertexPositionNormalTangentTextureSkins,
int int0)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f[]` `matrix4fs`
- `VertexPositionNormalTangentTextureSkin[]` `vertexPositionNormalTangentTextureSkins`
- `int` `int0`

**Returns:** `VertexPositionNormalTangentTextureSkin`

### public void Draw(int int0,
int int1,
String string)

**Parameters:**
- `int` `int0`
- `int` `int1`
- `String` `string`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\SoftwareSkinnedModelAnim.html`*
