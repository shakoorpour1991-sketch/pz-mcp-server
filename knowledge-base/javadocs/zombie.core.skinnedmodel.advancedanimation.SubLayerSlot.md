---
title: zombie.core.skinnedmodel.advancedanimation.SubLayerSlot
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.SubLayerSlot

`public class SubLayerSlot extends PooledObject`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.advancedanimation.SubLayerSlot

## Fields

### public boolean shouldBeActive

### public int desiredLayer

### public AnimLayer animLayer

## Methods

### public static SubLayerSlot alloc(IAnimatable character,
AdvancedAnimator parentAnimator)

**Parameters:**
- `IAnimatable` `character`
- `AdvancedAnimator` `parentAnimator`

**Returns:** `SubLayerSlot`

### public void reset()

**Returns:** `void`

### public void onReleased()

**Returns:** `void`

### public void update(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void clearShouldBeActiveFlag()

**Returns:** `void`

### public void applyNextTransition()

**Returns:** `void`

### public void setParentLayer(AnimLayer parentLayer)

**Parameters:**
- `AnimLayer` `parentLayer`

**Returns:** `void`

### public void setParentSlot(SubLayerSlot parentSlot)

**Parameters:**
- `SubLayerSlot` `parentSlot`

**Returns:** `void`

### public boolean hasRunningAnims()

**Returns:** `boolean`

### public void setNextTransitionTo(AnimState nextState)

**Parameters:**
- `AnimState` `nextState`

**Returns:** `void`

### public boolean isNextOrCurrentState(AnimState state)

**Parameters:**
- `AnimState` `state`

**Returns:** `boolean`

### public static int compare(SubLayerSlot a,
SubLayerSlot b)

**Parameters:**
- `SubLayerSlot` `a`
- `SubLayerSlot` `b`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\SubLayerSlot.html`*
