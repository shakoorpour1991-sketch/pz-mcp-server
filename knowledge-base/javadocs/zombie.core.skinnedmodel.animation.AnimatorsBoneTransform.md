---
title: zombie.core.skinnedmodel.animation.AnimatorsBoneTransform
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimatorsBoneTransform

`public class AnimatorsBoneTransform extends TwistableBoneTransform`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.animation.BoneTransform
- zombie.core.skinnedmodel.animation.TwistableBoneTransform
- zombie.core.skinnedmodel.animation.AnimatorsBoneTransform

## Constructors

### public AnimatorsBoneTransform()

## Methods

### public void set(BoneTransform rhs)

**Parameters:**
- `BoneTransform` `rhs`

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public <T extends BoneTransform> T getPreviousTransform(T result)

**Returns:** `T`

### public float getTimeDelta()

**Returns:** `float`

### public void nextFrame(float timeDelta)

**Parameters:**
- `float` `timeDelta`

**Returns:** `void`

### public static AnimatorsBoneTransform alloc()

**Returns:** `AnimatorsBoneTransform`

### public static TwistableBoneTransform[] allocArray(int count)

**Parameters:**
- `int` `count`

**Returns:** `TwistableBoneTransform[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimatorsBoneTransform.html`*
