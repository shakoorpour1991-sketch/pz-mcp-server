---
title: zombie.core.skinnedmodel.advancedanimation.AnimLayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimLayer

`public final class AnimLayer extends PooledObject implements IAnimListener`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.advancedanimation.AnimLayer

## Methods

### public static AnimLayer alloc(IAnimatable character,
AdvancedAnimator parentAnimator)

**Parameters:**
- `IAnimatable` `character`
- `AdvancedAnimator` `parentAnimator`

**Returns:** `AnimLayer`

### public static AnimLayer alloc(AnimLayer parentLayer,
IAnimatable character,
AdvancedAnimator parentAnimator)

**Parameters:**
- `AnimLayer` `parentLayer`
- `IAnimatable` `character`
- `AdvancedAnimator` `parentAnimator`

**Returns:** `AnimLayer`

### public void onReleased()

**Returns:** `void`

### public String getCurrentStateName()

**Returns:** `String`

### public static String getCurrentStateName(AnimLayer sender)

**Parameters:**
- `AnimLayer` `sender`

**Returns:** `String`

### public boolean hasState()

**Returns:** `boolean`

### public boolean isStateless()

**Returns:** `boolean`

### public boolean isSubLayer()

**Returns:** `boolean`

### public boolean isCurrentState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `boolean`

### public boolean isCurrentState(AnimState state)

**Parameters:**
- `AnimState` `state`

**Returns:** `boolean`

### public void setParentLayer(AnimLayer parentLayer)

**Parameters:**
- `AnimLayer` `parentLayer`

**Returns:** `void`

### public AnimLayer getParentLayer()

**Returns:** `AnimLayer`

### public AnimationMultiTrack getAnimationTrack()

**Returns:** `AnimationMultiTrack`

### public IAnimationVariableSource getVariableSource()

**Returns:** `IAnimationVariableSource`

### public LiveAnimNode getCurrentSyncNode()

**Returns:** `LiveAnimNode`

### public AnimationTrack getCurrentSyncTrack()

**Returns:** `AnimationTrack`

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

### public void decrementWhileAliveFlags(LiveAnimNode animNode)

**Parameters:**
- `LiveAnimNode` `animNode`

**Returns:** `void`

### public String GetDebugString()

**Returns:** `String`

### public void reset()

**Returns:** `void`

### public boolean transitionTo(AnimState newState)

**Parameters:**
- `AnimState` `newState`

**Returns:** `boolean`

### public boolean transitionTo(AnimState newState,
boolean force)

**Parameters:**
- `AnimState` `newState`
- `boolean` `force`

**Returns:** `boolean`

### public void updateLiveAnimNodes()

**Returns:** `void`

### public void Update(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public SkinningData getSkinningData()

**Returns:** `SkinningData`

### public float getMaximumTwist(IAnimationVariableSlot maxTwistVar)

**Parameters:**
- `IAnimationVariableSlot` `maxTwistVar`

**Returns:** `float`

### public void updateNodeActiveFlags()

**Returns:** `void`

### public void FindTransitioningLiveAnimNode(TransitionNodeProxy liveAnimNodeProxy,
boolean isRootLayer)

**Parameters:**
- `TransitionNodeProxy` `liveAnimNodeProxy`
- `boolean` `isRootLayer`

**Returns:** `void`

### public AnimationTrack startTransitionAnimation(TransitionNodeProxy.TransitionNodeProxyData transitionData)

**Parameters:**
- `TransitionNodeProxy.TransitionNodeProxyData` `transitionData`

**Returns:** `AnimationTrack`

### public void removeFadedOutNodes()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public int getDepth()

The layer's depth, how many layer ancestors (parent, grandparent, great-grandparent, etc) does this layer have.

**Returns:** `int`

### public static int getDepth(AnimLayer layer)

**Parameters:**
- `AnimLayer` `layer`

**Returns:** `int`

### public String getDebugNodeName()

**Returns:** `String`

### public List<LiveAnimNode> getLiveAnimNodes()

**Returns:** `List<LiveAnimNode>`

### public boolean isRecording()

**Returns:** `boolean`

### public boolean isBlendingIn()

**Returns:** `boolean`

### public boolean isBlendingOut()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimLayer.html`*
