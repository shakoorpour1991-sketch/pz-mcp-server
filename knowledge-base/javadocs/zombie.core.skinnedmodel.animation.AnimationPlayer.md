---
title: zombie.core.skinnedmodel.animation.AnimationPlayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimationPlayer

`public final class AnimationPlayer extends PooledObject`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.animation.AnimationPlayer

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public AnimatorsBoneTransform[] boneTransforms

### public float angleStepDelta

### public float angleTwistDelta

### public boolean doBlending

### public boolean updateBones

### public final ArrayList<Integer> dismembered

### public AnimationPlayer parentPlayer

## Methods

### public static AnimationPlayer alloc(Model model)

**Parameters:**
- `Model` `model`

**Returns:** `AnimationPlayer`

### public AnimationClip getAnimationClip()

**Returns:** `AnimationClip`

### public static float lerpBlendWeight(float from,
float to,
float fadeTimeTo1)

**Parameters:**
- `float` `from`
- `float` `to`
- `float` `fadeTimeTo1` — The time to go from 0

**Returns:** `float`

### public void setModel(Model model)

**Parameters:**
- `Model` `model`

**Returns:** `void`

### public Model getModel()

**Returns:** `Model`

### public int getNumBones()

**Returns:** `int`

### public AnimatorsBoneTransform getBoneTransformAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `AnimatorsBoneTransform`

### public <T extends BoneTransform> T getBoneTransformAt(int i,
T result)

**Returns:** `T`

### public boolean isReady()

**Returns:** `boolean`

### public boolean hasSkinningData()

**Returns:** `boolean`

### public void addBoneReparent(String boneName,
String newParentBone)

**Parameters:**
- `String` `boneName`
- `String` `newParentBone`

**Returns:** `void`

### public void setTwistBones(String... bones)

**Parameters:**
- `String...` `bones`

**Returns:** `void`

### public int getNumTwistBones()

**Returns:** `int`

### public AnimatorsBoneTransform getTwistBoneAt(int twistBoneIdx)

**Parameters:**
- `int` `twistBoneIdx`

**Returns:** `AnimatorsBoneTransform`

### public String getTwistBoneNameAt(int twistBoneIdx)

**Parameters:**
- `int` `twistBoneIdx`

**Returns:** `String`

### public void setCounterRotationBone(String boneName)

**Parameters:**
- `String` `boneName`

**Returns:** `void`

### public AnimationBoneBinding getCounterRotationBone()

**Returns:** `AnimationBoneBinding`

### public void reset()

**Returns:** `void`

### public void onReleased()

**Returns:** `void`

### public SkinningData getSkinningData()

**Returns:** `SkinningData`

### public HashMap<String,Integer> getSkinningBoneIndices()

**Returns:** `HashMap<String,Integer>`

### public int getSkinningBoneIndex(String boneName,
int defaultVal)

**Parameters:**
- `String` `boneName`
- `int` `defaultVal`

**Returns:** `int`

### public org.lwjgl.util.vector.Matrix4f GetPropBoneMatrix(int bone)

**Parameters:**
- `int` `bone`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public AnimationTrack startClip(AnimationClip clip,
boolean loop,
float ragdollMaxTime)

**Parameters:**
- `AnimationClip` `clip`
- `boolean` `loop`
- `float` `ragdollMaxTime`

**Returns:** `AnimationTrack`

### public static void releaseTracks(List<AnimationTrack> tracks)

**Parameters:**
- `List<AnimationTrack>` `tracks`

**Returns:** `void`

### public AnimationTrack play(String animName,
boolean looped)

**Parameters:**
- `String` `animName`
- `boolean` `looped`

**Returns:** `AnimationTrack`

### public AnimationTrack play(String animName,
boolean looped,
boolean isRagdoll,
float ragdollMaxTime)

**Parameters:**
- `String` `animName`
- `boolean` `looped`
- `boolean` `isRagdoll`
- `float` `ragdollMaxTime`

**Returns:** `AnimationTrack`

### public AnimationTrack play(StartAnimTrackParameters params,
AnimLayer animLayer)

**Parameters:**
- `StartAnimTrackParameters` `params`
- `AnimLayer` `animLayer`

**Returns:** `AnimationTrack`

### public AnimationClip getOrCreateRagdollAnimationClip()

**Returns:** `AnimationClip`

### public SkinningBoneHierarchy getSkeletonBoneHierarchy()

**Returns:** `SkinningBoneHierarchy`

### public void Update()

**Returns:** `void`

### public void Update(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void setSharedAnimRepo(SharedSkeleAnimationRepository repo)

**Parameters:**
- `SharedSkeleAnimationRepository` `repo`

**Returns:** `void`

### public static float calculateAnimPlayerAngle(float dirX,
float dirY)

**Parameters:**
- `float` `dirX`
- `float` `dirY`

**Returns:** `float`

### public void setTargetDirection(float dirX,
float dirY)

**Parameters:**
- `float` `dirX`
- `float` `dirY`

**Returns:** `void`

### public void setTargetAndCurrentDirection(Vector2 dir)

**Parameters:**
- `Vector2` `dir`

**Returns:** `void`

### public void setTargetAndCurrentDirection(float dirX,
float dirY)

**Parameters:**
- `float` `dirX`
- `float` `dirY`

**Returns:** `void`

### public void updateForwardDirection(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void updateVerticalAimAngle(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void DoAngles(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void resetBoneModelTransforms()

**Returns:** `void`

### public boolean isBoneTransformsNeedFirstFrame()

**Returns:** `boolean`

### public boolean isBoneReparented(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `boolean`

### public boolean isRagdolling()

**Returns:** `boolean`

### public RagdollController getRagdollController()

**Returns:** `RagdollController`

### public boolean canRagdoll()

**Returns:** `boolean`

### public void stopAll()

**Returns:** `void`

### public void releaseRagdollController()

**Returns:** `void`

### public AnimationClip getRagdollSimulationAnimationClip()

**Returns:** `AnimationClip`

### public void setIsoGameCharacter(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public IsoGameCharacter getIsoGameCharacter()

**Returns:** `IsoGameCharacter`

### public int getModelTransformsCount()

**Returns:** `int`

### public org.lwjgl.util.vector.Matrix4f getModelTransformAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public float getBoneTransformsTimeDelta()

**Returns:** `float`

### public boolean isRagdollSimulationActive()

**Returns:** `boolean`

### public boolean isFullyRagdolling()

**Returns:** `boolean`

### public void updateMultiTrackBoneTransforms_DeferredMovementOnly()

**Returns:** `void`

### public boolean isRecording()

**Returns:** `boolean`

### public void setRecorder(AnimationPlayerRecorder recorder)

**Parameters:**
- `AnimationPlayerRecorder` `recorder`

**Returns:** `void`

### public AnimationPlayerRecorder getRecorder()

**Returns:** `AnimationPlayerRecorder`

### public void dismember(int bone)

**Parameters:**
- `int` `bone`

**Returns:** `void`

### public void transformRootChildBones(String boneName,
org.lwjgl.util.vector.Quaternion rotation)

**Parameters:**
- `String` `boneName`
- `org.lwjgl.util.vector.Quaternion` `rotation`

**Returns:** `void`

### public org.lwjgl.util.vector.Matrix4f getBoneModelTransform(int boneIdx,
org.lwjgl.util.vector.Matrix4f modelTransform)

Get the bone's transform, in the model space.
That is, relative to the model's origin.

**Parameters:**
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `modelTransform`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public org.lwjgl.util.vector.Vector3f getBoneWorldPosition(SkeletonBone bone,
org.lwjgl.util.vector.Vector3f pos)

**Parameters:**
- `SkeletonBone` `bone`
- `org.lwjgl.util.vector.Vector3f` `pos`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public org.lwjgl.util.vector.Matrix4f getBindPoseBoneModelTransform(int boneIdx,
org.lwjgl.util.vector.Matrix4f modelTransform)

**Parameters:**
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `modelTransform`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public org.lwjgl.util.vector.Matrix4f getBoneTransform(int boneIdx,
org.lwjgl.util.vector.Matrix4f boneTransform)

Get the bone's transform, in its local space.
That is, relative to its parent bone.

**Parameters:**
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `boneTransform`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public TwistableBoneTransform getBone(int boneIdx)

**Parameters:**
- `int` `boneIdx`

**Returns:** `TwistableBoneTransform`

### public org.lwjgl.util.vector.Matrix4f getUnweightedModelTransform(AnimationTrack track,
int boneIdx,
org.lwjgl.util.vector.Matrix4f modelTransform)

**Parameters:**
- `AnimationTrack` `track`
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `modelTransform`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.lwjgl.util.vector.Matrix4f getUnweightedBoneTransform(AnimationTrack track,
int boneIdx,
org.lwjgl.util.vector.Matrix4f boneTransform)

**Parameters:**
- `AnimationTrack` `track`
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `boneTransform`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public void UpdateSkinTransforms()

**Returns:** `void`

### public org.lwjgl.util.vector.Matrix4f[] getSkinTransforms(SkinningData skinnedTo)

**Parameters:**
- `SkinningData` `skinnedTo`

**Returns:** `org.lwjgl.util.vector.Matrix4f[]`

### public Vector2 getDeferredMovement(Vector2 result,
boolean reset)

**Parameters:**
- `Vector2` `result`
- `boolean` `reset`

**Returns:** `Vector2`

### public void resetDeferredMovementAccum()

**Returns:** `void`

### public Vector3 getDeferredMovementFromRagdoll(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public float getDeferredAngleDelta()

**Returns:** `float`

### public float getDeferredRotationWeight()

**Returns:** `float`

### public org.joml.Vector3f getTargetGrapplePos(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public Vector3 getTargetGrapplePos(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setTargetGrapplePos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setTargetGrappleRotation(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public Vector2 getTargetGrappleRotation(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public org.joml.Vector3f getGrappleOffset(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public Vector3 getGrappleOffset(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setGrappleOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public AnimationMultiTrack getMultiTrack()

**Returns:** `AnimationMultiTrack`

### public void setRecording(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void discardRecording()

**Returns:** `void`

### public float getRenderedAngle()

**Returns:** `float`

### public float getAngle()

**Returns:** `float`

### public void setAngle(float angle)

**Parameters:**
- `float` `angle`

**Returns:** `void`

### public void setAngleToTarget()

**Returns:** `void`

### public void setTargetToAngle()

**Returns:** `void`

### public float getTargetAngle()

**Returns:** `float`

### public void setTargetAngle(float targetAngle)

**Parameters:**
- `float` `targetAngle`

**Returns:** `void`

### public float getMaxTwistAngle()

Returns the maximum twist angle, in radians.

**Returns:** `float`

### public void setMaxTwistAngle(float radians)

Set the maximum twist angle, in radians

**Parameters:**
- `float` `radians`

**Returns:** `void`

### public float getExcessTwistAngle()

**Returns:** `float`

### public float getTwistAngle()

**Returns:** `float`

### public float getShoulderTwistAngle()

**Returns:** `float`

### public float getTargetTwistAngle()

The lookAt bearing, in radians. The difference between angle and targetAngle.
The twist target, not clamped at all.
All twists aim for this target, and are clamped by maxTwist.

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimationPlayer.html`*
