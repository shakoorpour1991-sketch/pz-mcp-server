---
title: zombie.core.skinnedmodel.animation.AnimationMultiTrack
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimationMultiTrack

`public final class AnimationMultiTrack extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.AnimationMultiTrack

## Description

Created by LEMMYMAIN on 28/02/2015.

## Constructors

### public AnimationMultiTrack()

## Methods

### public void addTrack(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void removeTrack(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void removeTracks(List<AnimationTrack> tracks)

**Parameters:**
- `List<AnimationTrack>` `tracks`

**Returns:** `void`

### public void removeTrackAt(int indexOf)

**Parameters:**
- `int` `indexOf`

**Returns:** `void`

### public int getIndexOfTrack(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `int`

### public void Update(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public float getDuration()

**Returns:** `float`

### public void reset()

**Returns:** `void`

### public List<AnimationTrack> getTracks()

**Returns:** `List<AnimationTrack>`

### public int getTrackCount()

**Returns:** `int`

### public AnimationTrack getTrackAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `AnimationTrack`

### public boolean containsAnyRagdollTracks()

**Returns:** `boolean`

### public boolean anyRagdollFirstFrame()

**Returns:** `boolean`

### public void initRagdollTransforms(TwistableBoneTransform[] boneTransforms,
boolean bForce)

**Parameters:**
- `TwistableBoneTransform[]` `boneTransforms`
- `boolean` `bForce`

**Returns:** `void`

### public AnimationTrack getActiveRagdollTrack()

**Returns:** `AnimationTrack`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimationMultiTrack.html`*
