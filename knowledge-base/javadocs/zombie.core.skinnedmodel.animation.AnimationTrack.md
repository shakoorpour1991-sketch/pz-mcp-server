---
title: zombie.core.skinnedmodel.animation.AnimationTrack
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimationTrack

`public final class AnimationTrack extends PooledObject`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.animation.AnimationTrack

## Description

Created by LEMMYPC on 07/01/14.

## Fields

### public boolean isPlaying

### public boolean isPrimary

### public AnimationClip currentClip

### public int priority

### public float ragdollStartTime

### public float ragdollMaxTime

### public boolean syncTrackingEnabled

### public String trackTimeToVariable

### public boolean reverse

### public boolean looping

### public IInterpolator blendCurve

### public float earlyBlendOutTime

### public boolean triggerOnNonLoopedAnimFadeOutEvent

### public AnimLayer animLayer

### public boolean isInitialAdjustmentCalculated

### public final org.lwjgl.util.vector.Vector3f initialAdjustment

## Methods

### public static AnimationTrack alloc()

**Returns:** `AnimationTrack`

### public void get(int bone,
org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `int` `bone`
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void setBonePoseAdjustment(int bone,
org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `int` `bone`
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void removeListener(IAnimListener listener)

**Parameters:**
- `IAnimListener` `listener`

**Returns:** `void`

### public void Update(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public void UpdateKeyframes(float dt)

**Parameters:**
- `float` `dt`

**Returns:** `void`

### public org.lwjgl.util.vector.Vector3f getCurrentDeferredCounterPosition(org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public float getCurrentDeferredRotation()

**Returns:** `float`

### public org.lwjgl.util.vector.Vector3f getCurrentDeferredPosition(org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public int getDeferredMovementBoneIdx()

**Returns:** `int`

### public float getCurrentTrackTime()

**Returns:** `float`

### public float getPreviousTrackTime()

**Returns:** `float`

### public float getCurrentAnimationTime()

**Returns:** `float`

### public float getPreviousAnimationTime()

**Returns:** `float`

### public float getAccumulatedTimeValue()

**Returns:** `float`

### public float getDuration()

**Returns:** `float`

### public void onReleased()

onDestroyed
Called by AnimationPlayer's ObjectPool, when this track has been released.

Resets all internals, ready for reuse.

Notifies all listeners that this track is to be discarded.

**Returns:** `void`

### public Vector2 getDeferredMovementDiff(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public float getDeferredRotationDiff()

**Returns:** `float`

### public void addListener(IAnimListener listener)

**Parameters:**
- `IAnimListener` `listener`

**Returns:** `void`

### public void startClip(AnimationClip clip,
boolean loop,
float ragdollMaxTime)

**Parameters:**
- `AnimationClip` `clip`
- `boolean` `loop`
- `float` `ragdollMaxTime`

**Returns:** `void`

### public AnimationTrack reset()

**Returns:** `AnimationTrack`

### public void setBoneWeights(List<AnimBoneWeight> boneWeights)

**Parameters:**
- `List<AnimBoneWeight>` `boneWeights`

**Returns:** `void`

### public void initBoneWeights(SkinningData skinningData)

**Parameters:**
- `SkinningData` `skinningData`

**Returns:** `void`

### public float getBoneWeight(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `float`

### public float getDeferredBoneWeight()

**Returns:** `float`

### public int getLayerIdx()

**Returns:** `int`

### public boolean hasBoneMask()

**Returns:** `boolean`

### public boolean isLooping()

**Returns:** `boolean`

### public void setDeferredBone(SkinningBone bone,
BoneAxis axis)

**Parameters:**
- `SkinningBone` `bone`
- `BoneAxis` `axis`

**Returns:** `void`

### public void setUseDeferredMovement(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean getUseDeferredMovement()

**Returns:** `boolean`

### public void setUseDeferredRotation(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean getUseDeferredRotation()

**Returns:** `boolean`

### public void setDeferredRotationScale(float deferredRotationScale)

**Parameters:**
- `float` `deferredRotationScale`

**Returns:** `void`

### public float getDeferredRotationScale()

**Returns:** `float`

### public boolean isFinished()

**Returns:** `boolean`

### public float getCurrentTimeValue()

**Returns:** `float`

### public void setCurrentTimeValue(float currentTimeValue)

**Parameters:**
- `float` `currentTimeValue`

**Returns:** `void`

### public float getPreviousTimeValue()

**Returns:** `float`

### public void setPreviousTimeValue(float previousTimeValue)

**Parameters:**
- `float` `previousTimeValue`

**Returns:** `void`

### public void rewind(float rewindAmount)

**Parameters:**
- `float` `rewindAmount`

**Returns:** `void`

### public void scaledRewind(float rewindAmount)

**Parameters:**
- `float` `rewindAmount`

**Returns:** `void`

### public void scaledAdvance(float advanceAmount)

**Parameters:**
- `float` `advanceAmount`

**Returns:** `void`

### public void advance(float advanceAmount)

**Parameters:**
- `float` `advanceAmount`

**Returns:** `void`

### public void advanceFraction(float advanceFraction)

**Parameters:**
- `float` `advanceFraction`

**Returns:** `void`

### public void moveCurrentTimeValueTo(float target)

**Parameters:**
- `float` `target`

**Returns:** `void`

### public void moveCurrentTimeValueToFraction(float fraction)

**Parameters:**
- `float` `fraction`

**Returns:** `void`

### public float getCurrentTimeFraction()

**Returns:** `float`

### public boolean hasClip()

**Returns:** `boolean`

### public AnimationClip getClip()

**Returns:** `AnimationClip`

### public int getPriority()

**Returns:** `int`

### public boolean isGrappler()

**Returns:** `boolean`

### public static AnimationTrack createClone(AnimationTrack source,
Supplier<AnimationTrack> allocator)

**Parameters:**
- `AnimationTrack` `source`
- `Supplier<AnimationTrack>` `allocator`

**Returns:** `AnimationTrack`

### public String getMatchingGrappledAnimNode()

**Returns:** `String`

### public void setMatchingGrappledAnimNode(String matchingGrappledAnimNode)

**Parameters:**
- `String` `matchingGrappledAnimNode`

**Returns:** `void`

### public void setAnimLayer(AnimLayer animLayer)

**Parameters:**
- `AnimLayer` `animLayer`

**Returns:** `void`

### public boolean isRagdollFirstFrame()

**Returns:** `boolean`

### public void initRagdollTransform(int bone,
org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `int` `bone`
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public boolean isRagdoll()

**Returns:** `boolean`

### public boolean isRagdollSimulationActive()

**Returns:** `boolean`

### public void initRagdollTransforms(TwistableBoneTransform[] boneTransforms)

**Parameters:**
- `TwistableBoneTransform[]` `boneTransforms`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public float getSpeedDelta()

**Returns:** `float`

### public void setSpeedDelta(float speedDelta)

**Parameters:**
- `float` `speedDelta`

**Returns:** `void`

### public float getBlendWeight()

**Returns:** `float`

### public void setBlendWeight(float blendWeight)

**Parameters:**
- `float` `blendWeight`

**Returns:** `void`

### public float getBlendFieldWeight()

**Returns:** `float`

### public void setBlendFieldWeight(float blendFieldWeight)

**Parameters:**
- `float` `blendFieldWeight`

**Returns:** `void`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public int getId()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimationTrack.html`*
