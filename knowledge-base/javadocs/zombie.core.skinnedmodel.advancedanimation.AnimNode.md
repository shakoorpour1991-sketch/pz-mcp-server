---
title: zombie.core.skinnedmodel.advancedanimation.AnimNode
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimNode

`public final class AnimNode extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimNode

## Fields

### public String name

### public int priority

### public int conditionPriority

### public String animName

### public List<String> alternateAnims

### public String matchingGrappledAnimNode

### public float grappleOffsetForward

### public float grappleOffsetYaw

### public float grappleTweenInTime

### public GrappleOffsetBehaviour grapplerOffsetBehaviour

### public boolean isRagdoll

### public float chanceToRagdoll

### public float ragdollStartTimeMin

### public float ragdollStartTimeMax

### public float ragdollMaxTime

### public String deferredBoneName

### public BoneAxis deferredBoneAxis

### public boolean useDeferedRotation

### public boolean useDeferredMovement

### public float deferredRotationScale

### public boolean isLooped

### public float blendTime

### public float blendOutTime

### public InterpolatorSlot blendCurve

### public boolean stopAnimOnExit

### public boolean earlyTransitionOut

### public String speedScale

### public String speedScaleVariable

### public float speedScaleRandomMultiplierMin

### public float speedScaleRandomMultiplierMax

### public float randomAdvanceFraction

### public float maxTorsoTwist

### public String scalar

### public String scalar2

### public boolean isAnimReverse

### public boolean syncTrackingEnabled

### public String trackTimeToVariable

### public List<Anim2DBlend> blends2d

### public AnimCondition[] conditions

### public List<AnimEvent> events

### public List<Anim2DBlendTriangle> blendTris

### public List<AnimTransition> transitions

### public List<AnimBoneWeight> subStateBoneWeights

### public Anim2DBlendPicker blend2dPicker

### public AnimState parentState

## Constructors

### public AnimNode()

## Methods

### public static AnimNode Parse(String source)

Loads an AnimNode from the specified source.
The source can either be a file path, or a File GUID.

**Parameters:**
- `String` `source`

**Returns:** `AnimNode`

### public boolean checkConditions(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `boolean`

### public float getSpeedScale(IAnimationVariableSource varSource)

**Parameters:**
- `IAnimationVariableSource` `varSource`

**Returns:** `float`

### public IInterpolator getBlendCurve()

**Returns:** `IInterpolator`

### public boolean isIdleAnim()

Returns TRUE if this AnimNode represents an Idle animation.
TODO: Make this a flag in the AnimNode, instead of relying on the name

**Returns:** `boolean`

### public AnimTransition findTransitionTo(IAnimationVariableSource varSource,
AnimNode toNode)

**Parameters:**
- `IAnimationVariableSource` `varSource`
- `AnimNode` `toNode`

**Returns:** `AnimTransition`

### public String toString()

**Returns:** `String`

### public String getConditionsString()

**Returns:** `String`

### public boolean isAbstract()

**Returns:** `boolean`

### public float getBlendOutTime()

**Returns:** `float`

### public String getDeferredBoneName()

**Returns:** `String`

### public BoneAxis getDeferredBoneAxis()

**Returns:** `BoneAxis`

### public int getPriority()

**Returns:** `int`

### public int compareSelectionConditions(AnimNode node)

**Parameters:**
- `AnimNode` `node`

**Returns:** `int`

### public static int compareSelectionConditions(AnimNode a,
AnimNode b)

**Parameters:**
- `AnimNode` `a`
- `AnimNode` `b`

**Returns:** `int`

### public String getMatchingGrappledAnimNode()

**Returns:** `String`

### public boolean isGrappler()

**Returns:** `boolean`

### public boolean isRagdoll()

**Returns:** `boolean`

### public float getRagdollMaxTime()

**Returns:** `float`

### public String getRandomAnim()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimNode.html`*
