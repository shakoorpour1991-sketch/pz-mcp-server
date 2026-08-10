---
title: zombie.core.skinnedmodel.model.SkinningBoneHierarchy
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.SkinningBoneHierarchy

`public final class SkinningBoneHierarchy extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.SkinningBoneHierarchy

## Constructors

### public SkinningBoneHierarchy()

## Methods

### public boolean isValid()

**Returns:** `boolean`

### public void buildBoneHierarchy(SkinningData data)

**Parameters:**
- `SkinningData` `data`

**Returns:** `void`

### public int numRootBones()

**Returns:** `int`

### public SkinningBone getBoneAt(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `SkinningBone`

### public SkinningBone getBone(SkeletonBone bone)

**Parameters:**
- `SkeletonBone` `bone`

**Returns:** `SkinningBone`

### public SkinningBone getBone(String name)

**Parameters:**
- `String` `name`

**Returns:** `SkinningBone`

### public SkinningBone getBone(Predicate<SkinningBone> predicate)

**Parameters:**
- `Predicate<SkinningBone>` `predicate`

**Returns:** `SkinningBone`

### public SkinningBone getRootBoneAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `SkinningBone`

### public SkinningBoneHierarchy getSubHierarchy(String boneName)

**Parameters:**
- `String` `boneName`

**Returns:** `SkinningBoneHierarchy`

### public SkinningBoneHierarchy getSubHierarchy(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `SkinningBoneHierarchy`

### public static SkinningBoneHierarchy getSubHierarchy(SkinningBone rootBone)

**Parameters:**
- `SkinningBone` `rootBone`

**Returns:** `SkinningBoneHierarchy`

### public int numBones()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\SkinningBoneHierarchy.html`*
