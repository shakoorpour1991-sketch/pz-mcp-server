---
title: zombie.core.skinnedmodel.animation.ModelTransformSampler
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.ModelTransformSampler

`public class ModelTransformSampler extends PooledObject implements AnimTrackSampler`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.animation.ModelTransformSampler

## Constructors

### public ModelTransformSampler()

## Methods

### public static ModelTransformSampler alloc(AnimationPlayer animationPlayer,
AnimationTrack animTrack)

**Parameters:**
- `AnimationPlayer` `animationPlayer`
- `AnimationTrack` `animTrack`

**Returns:** `ModelTransformSampler`

### public void onReleased()

**Returns:** `void`

### public float getTotalTime()

**Returns:** `float`

### public boolean isLooped()

**Returns:** `boolean`

### public void moveToTime(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public float getCurrentTime()

**Returns:** `float`

### public void getBoneMatrix(int boneIdx,
org.lwjgl.util.vector.Matrix4f matrix)

**Parameters:**
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `matrix`

**Returns:** `void`

### public int getNumBones()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\ModelTransformSampler.html`*
