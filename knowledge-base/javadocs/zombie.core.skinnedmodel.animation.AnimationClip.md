---
title: zombie.core.skinnedmodel.animation.AnimationClip
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimationClip

`public final class AnimationClip extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.AnimationClip

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public final String name

### public final boolean isRagdoll

### public final boolean keepLastFrame

## Constructors

### public AnimationClip(float duration,
List<Keyframe> keyframes,
String name,
boolean bKeepLastFrame)

**Parameters:**
- `float` `duration`
- `List<Keyframe>` `keyframes`
- `String` `name`
- `boolean` `bKeepLastFrame`

### public AnimationClip(float duration,
List<Keyframe> keyframes,
String name,
boolean bKeepLastFrame,
boolean isRagdoll)

**Parameters:**
- `float` `duration`
- `List<Keyframe>` `keyframes`
- `String` `name`
- `boolean` `bKeepLastFrame`
- `boolean` `isRagdoll`

## Methods

### public Keyframe getKeyframe(int keyframeIndex)

**Parameters:**
- `int` `keyframeIndex`

**Returns:** `Keyframe`

### public Keyframe[] getBoneFramesAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `Keyframe[]`

### public int getRootMotionFrameCount()

**Returns:** `int`

### public Keyframe getRootMotionFrameAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `Keyframe`

### public Keyframe[] getKeyframes()

**Returns:** `Keyframe[]`

### public float getDuration()

**Returns:** `float`

### public Keyframe[] getKeyframesForBone(int boneIdx,
Keyframe[] keyframesForBone)

**Parameters:**
- `int` `boneIdx`
- `Keyframe[]` `keyframesForBone`

**Returns:** `Keyframe[]`

### public boolean isRagdollSimulationActive()

**Returns:** `boolean`

### public void setRagdollSimulationActive(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public float getTranslationLength(String boneName,
BoneAxis deferredBoneAxis)

**Parameters:**
- `String` `boneName`
- `BoneAxis` `deferredBoneAxis`

**Returns:** `float`

### public void recalculateKeyframesByBoneIndex()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimationClip.html`*
