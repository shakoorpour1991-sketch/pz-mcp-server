---
title: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.LiveAnimNode

`public class LiveAnimNode extends PooledObject implements IAnimListener`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.advancedanimation.LiveAnimNode

## Description

The Live version of an AnimNode
The AnimNode represents the data.
The LiveAnimNode represents the playback of said data, its blend weights, timing, transitions etc.

## Fields

### public boolean isBlendField

### public AnimationTrack runningRagdollTrack

## Methods

### public static LiveAnimNode alloc(AnimLayer animLayer,
AnimNode sourceNode)

**Parameters:**
- `AnimLayer` `animLayer`
- `AnimNode` `sourceNode`

**Returns:** `LiveAnimNode`

### public void onReleased()

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public int getId()

**Returns:** `int`

### public boolean isBlendingIn()

**Returns:** `boolean`

### public boolean isBlendingOut()

**Returns:** `boolean`

### public boolean isTransitioningIn()

**Returns:** `boolean`

### public void startTransitionIn(LiveAnimNode transitionFrom,
AnimTransition transitionIn,
AnimationTrack track)

**Parameters:**
- `LiveAnimNode` `transitionFrom`
- `AnimTransition` `transitionIn`
- `AnimationTrack` `track`

**Returns:** `void`

### public void startTransitionIn(AnimNode transitionFrom,
AnimTransition transitionIn,
AnimationTrack track)

**Parameters:**
- `AnimNode` `transitionFrom`
- `AnimTransition` `transitionIn`
- `AnimationTrack` `track`

**Returns:** `void`

### public void stopTransitionIn()

**Returns:** `void`

### public void removeAllTracks()

**Returns:** `void`

### public void setTransitionOut(AnimTransition transitionOut)

**Parameters:**
- `AnimTransition` `transitionOut`

**Returns:** `void`

### public float getTrackTimeToVariable(float defaultTime)

**Parameters:**
- `float` `defaultTime`

**Returns:** `float`

### public void update(float timeDelta)

**Parameters:**
- `float` `timeDelta`

**Returns:** `void`

### public void addMainTrack(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void setWeightsToZero()

**Returns:** `void`

### public void setWeightsToFull()

**Returns:** `void`

### public float getTransitionInBlendInTime()

**Returns:** `float`

### public float getMainInitialRewindTime()

**Returns:** `float`

### public float getTransitionInBlendOutTime()

**Returns:** `float`

### public float getBlendInTime()

**Returns:** `float`

### public float getBlendOutTime()

**Returns:** `float`

### public void onAnimStarted(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void onLoopedAnim(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void onNonLoopedAnimFadeOut(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void onNonLoopedAnimFinished(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void onTrackDestroyed(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `void`

### public void onNoAnimConditionsPass()

**Returns:** `void`

### public AnimNode getSourceNode()

**Returns:** `AnimNode`

### public boolean isIdleAnimActive()

Returns TRUE if this Live node is currently Active, and if the source AnimNode is an Idle animation.

**Returns:** `boolean`

### public boolean isActive()

**Returns:** `boolean`

### public void setActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public boolean isLooped()

**Returns:** `boolean`

### public float getWeight()

**Returns:** `float`

### public float getTransitionInWeight()

**Returns:** `float`

### public boolean wasActivated()

**Returns:** `boolean`

### public boolean wasDeactivated()

**Returns:** `boolean`

### public boolean isNew()

**Returns:** `boolean`

### public int getPlayingTrackCount()

**Returns:** `int`

### public AnimationTrack getPlayingTrackAt(int trackIdx)

**Parameters:**
- `int` `trackIdx`

**Returns:** `AnimationTrack`

### public boolean isMainAnimActive()

**Returns:** `boolean`

### public String getTransitionFrom()

**Returns:** `String`

### public void setTransitionInBlendDelta(float blendDelta)

**Parameters:**
- `float` `blendDelta`

**Returns:** `void`

### public AnimationTrack getTransitionInTrack()

**Returns:** `AnimationTrack`

### public int getTransitionLayerIdx()

**Returns:** `int`

### public int getTransitionTrackId()

**Returns:** `int`

### public int getLayerIdx()

**Returns:** `int`

### public int getPriority()

**Returns:** `int`

### public String getDeferredBoneName()

**Returns:** `String`

### public BoneAxis getDeferredBoneAxis()

**Returns:** `BoneAxis`

### public List<AnimBoneWeight> getSubStateBoneWeights()

**Returns:** `List<AnimBoneWeight>`

### public AnimTransition findTransitionTo(IAnimationVariableSource varSource,
AnimNode toNode)

**Parameters:**
- `IAnimationVariableSource` `varSource`
- `AnimNode` `toNode`

**Returns:** `AnimTransition`

### public float getSpeedScale(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `float`

### public boolean isGrappler()

**Returns:** `boolean`

### public String getMatchingGrappledAnimNode()

**Returns:** `String`

### public GrappleOffsetBehaviour getGrapplerOffsetBehaviour()

**Returns:** `GrappleOffsetBehaviour`

### public float getGrappleOffsetForward()

**Returns:** `float`

### public float getGrappledOffsetYaw()

**Returns:** `float`

### public String getAnimName()

**Returns:** `String`

### public void selectRandomAnim()

**Returns:** `void`

### public boolean isTweeningInGrapple()

**Returns:** `boolean`

### public void setTweeningInGrapple(boolean tweeningInGrapple)

**Parameters:**
- `boolean` `tweeningInGrapple`

**Returns:** `void`

### public boolean isTweeningInGrappleFinished()

**Returns:** `boolean`

### public void setTweeningInGrappleFinished(boolean tweeningInGrappleFinished)

**Parameters:**
- `boolean` `tweeningInGrappleFinished`

**Returns:** `void`

### public org.joml.Vector3f getGrappleTweenStartPos(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public void setGrappleTweenStartPos(org.joml.Vector3f pos)

**Parameters:**
- `org.joml.Vector3f` `pos`

**Returns:** `void`

### public Vector3 getGrappleTweenStartPos(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setGrappleTweenStartPos(Vector3 pos)

**Parameters:**
- `Vector3` `pos`

**Returns:** `void`

### public float getGrappleTweenInTime()

**Returns:** `float`

### public Iterable<AnimationTrack> getMainAnimationTracks()

**Returns:** `Iterable<AnimationTrack>`

### public int getMainAnimationTracksCount()

**Returns:** `int`

### public AnimationTrack getMainAnimationTrackAt(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `AnimationTrack`

### public boolean containsMainAnimationTrack(AnimationTrack track)

**Parameters:**
- `AnimationTrack` `track`

**Returns:** `boolean`

### public boolean hasMainAnimationTracks()

**Returns:** `boolean`

### public boolean incrementWhileAliveFlagOnce(AnimationVariableReference variableReference,
boolean whileAliveFlagValue)

**Parameters:**
- `AnimationVariableReference` `variableReference`
- `boolean` `whileAliveFlagValue`

**Returns:** `boolean`

### public ArrayList<LiveAnimNode.WhileAliveFlag> getWhileAliveFlags()

**Returns:** `ArrayList<LiveAnimNode.WhileAliveFlag>`

### public boolean getUseDeferredRotation()

**Returns:** `boolean`

### public boolean getUseDeferredMovement()

**Returns:** `boolean`

### public float getDeferredRotationScale()

**Returns:** `float`

### public void onTransferredToLayer(AnimLayer newParentLayer)

**Parameters:**
- `AnimLayer` `newParentLayer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\LiveAnimNode.html`*
