---
title: zombie.core.skinnedmodel.animation.BoneTransform
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.BoneTransform

`public class BoneTransform extends PooledObject`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.skinnedmodel.animation.BoneTransform

## Methods

### public void onReleased()

**Returns:** `void`

### public void setIdentity()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void set(BoneTransform rhs)

**Parameters:**
- `BoneTransform` `rhs`

**Returns:** `void`

### public void set(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void set(org.lwjgl.util.vector.Matrix4f matrix)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`

**Returns:** `void`

### public void mul(org.lwjgl.util.vector.Matrix4f a,
org.lwjgl.util.vector.Matrix4f b)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `a`
- `org.lwjgl.util.vector.Matrix4f` `b`

**Returns:** `void`

### public void getMatrix(org.lwjgl.util.vector.Matrix4f result)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `result`

**Returns:** `void`

### public void getPRS(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void setPosition(org.lwjgl.util.vector.Vector3f position)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `position`

**Returns:** `void`

### public void getPosition(org.lwjgl.util.vector.Vector3f pos)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`

**Returns:** `void`

### public void getRotation(org.lwjgl.util.vector.Quaternion rot)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rot`

**Returns:** `void`

### public static void mul(BoneTransform a,
org.lwjgl.util.vector.Matrix4f b,
org.lwjgl.util.vector.Matrix4f result)

**Parameters:**
- `BoneTransform` `a`
- `org.lwjgl.util.vector.Matrix4f` `b`
- `org.lwjgl.util.vector.Matrix4f` `result`

**Returns:** `void`

### public static void mul(BoneTransform a,
org.lwjgl.util.vector.Matrix4f b,
BoneTransform result)

**Parameters:**
- `BoneTransform` `a`
- `org.lwjgl.util.vector.Matrix4f` `b`
- `BoneTransform` `result`

**Returns:** `void`

### public static void mul(BoneTransform a,
BoneTransform b,
BoneTransform result)

**Parameters:**
- `BoneTransform` `a`
- `BoneTransform` `b`
- `BoneTransform` `result`

**Returns:** `void`

### public static void mul(org.lwjgl.util.vector.Matrix4f a,
BoneTransform b,
BoneTransform result)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `a`
- `BoneTransform` `b`
- `BoneTransform` `result`

**Returns:** `void`

### public static BoneTransform alloc()

**Returns:** `BoneTransform`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\BoneTransform.html`*
