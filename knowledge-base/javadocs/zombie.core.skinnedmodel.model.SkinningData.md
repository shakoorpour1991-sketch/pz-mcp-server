---
title: zombie.core.skinnedmodel.model.SkinningData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.SkinningData

`public final class SkinningData extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.SkinningData

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public final SkinningData.Buffers buffers

### public HashMap<String, AnimationClip> animationClips

### public List<org.lwjgl.util.vector.Matrix4f> bindPose

### public List<org.lwjgl.util.vector.Matrix4f> inverseBindPose

### public List<org.lwjgl.util.vector.Matrix4f> boneOffset

### public List<Integer> skeletonHierarchy

### public HashMap<String,Integer> boneIndices

## Constructors

### public SkinningData(HashMap<String, AnimationClip> animationClips,
List<org.lwjgl.util.vector.Matrix4f> bindPose,
List<org.lwjgl.util.vector.Matrix4f> inverseBindPose,
List<org.lwjgl.util.vector.Matrix4f> skinOffset,
List<Integer> skeletonHierarchy,
HashMap<String,Integer> boneIndices)

**Parameters:**
- `HashMap<String, AnimationClip>` `animationClips`
- `List<org.lwjgl.util.vector.Matrix4f>` `bindPose`
- `List<org.lwjgl.util.vector.Matrix4f>` `inverseBindPose`
- `List<org.lwjgl.util.vector.Matrix4f>` `skinOffset`
- `List<Integer>` `skeletonHierarchy`
- `HashMap<String,Integer>` `boneIndices`

## Methods

### public int numBones()

**Returns:** `int`

### public int numRootBones()

**Returns:** `int`

### public int getParentBoneIdx(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `int`

### public SkinningBone getBoneAt(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `SkinningBone`

### public SkinningBone getBone(String boneName)

**Parameters:**
- `String` `boneName`

**Returns:** `SkinningBone`

### public SkinningBone getBone(SkeletonBone bone)

**Parameters:**
- `SkeletonBone` `bone`

**Returns:** `SkinningBone`

### public SkinningBone getRootBoneAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `SkinningBone`

### public SkinningBoneHierarchy getBoneHierarchy()

**Returns:** `SkinningBoneHierarchy`

### public SkinningBoneHierarchy getSkeletonBoneHierarchy()

**Returns:** `SkinningBoneHierarchy`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\SkinningData.html`*
