---
title: zombie.core.skinnedmodel.animation.AnimTrackSampler
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.AnimTrackSampler

`public interface AnimTrackSampler`

**Kind:** interface · **Package:** zombie.core.skinnedmodel.animation

## Methods

### float getTotalTime()

**Returns:** `float`

### boolean isLooped()

**Returns:** `boolean`

### void moveToTime(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### float getCurrentTime()

**Returns:** `float`

### void getBoneMatrix(int boneIdx,
org.lwjgl.util.vector.Matrix4f out_matrix)

**Parameters:**
- `int` `boneIdx`
- `org.lwjgl.util.vector.Matrix4f` `out_matrix`

**Returns:** `void`

### int getNumBones()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\AnimTrackSampler.html`*
