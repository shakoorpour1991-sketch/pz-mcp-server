---
title: zombie.core.skinnedmodel.model.SkinningBone
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.SkinningBone

`public final class SkinningBone extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.SkinningBone

## Fields

### public SkinningBone parent

### public String name

### public int index

### public SkinningBone[] children

### public SkeletonBone skeletonBone

## Constructors

### public SkinningBone()

## Methods

### public void forEachDescendant(Consumer<SkinningBone> consumer)

**Parameters:**
- `Consumer<SkinningBone>` `consumer`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public int getParentBoneIndex()

**Returns:** `int`

### public SkeletonBone getParentSkeletonBone()

**Returns:** `SkeletonBone`

### public SkinningBone toRoot()

**Returns:** `SkinningBone`

### public boolean isRoot()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\SkinningBone.html`*
