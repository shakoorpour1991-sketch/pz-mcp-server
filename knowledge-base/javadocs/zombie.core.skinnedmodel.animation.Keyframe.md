---
title: zombie.core.skinnedmodel.animation.Keyframe
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation
---

# zombie.core.skinnedmodel.animation.Keyframe

`public final class Keyframe extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.Keyframe

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public org.lwjgl.util.vector.Quaternion rotation

### public org.lwjgl.util.vector.Vector3f position

### public org.lwjgl.util.vector.Vector3f scale

### public int bone

### public String boneName

### public float time

## Constructors

### public Keyframe()

### public Keyframe(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rotation,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rotation`
- `org.lwjgl.util.vector.Vector3f` `scale`

## Methods

### public void set(Keyframe keyframe)

**Parameters:**
- `Keyframe` `keyframe`

**Returns:** `void`

### public void set(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void get(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void setScale(org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public void setRotation(org.lwjgl.util.vector.Quaternion rot)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rot`

**Returns:** `void`

### public void setPosition(org.lwjgl.util.vector.Vector3f pos)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void setIdentity()

**Returns:** `void`

### public static void setIdentity(org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

### public static Keyframe lerp(Keyframe a,
Keyframe b,
float time,
Keyframe result)

**Parameters:**
- `Keyframe` `a`
- `Keyframe` `b`
- `float` `time`
- `Keyframe` `result`

**Returns:** `Keyframe`

### public static void setIfNotNull(org.lwjgl.util.vector.Vector3f to,
org.lwjgl.util.vector.Vector3f val,
float defaultX,
float defaultY,
float defaultZ)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `to`
- `org.lwjgl.util.vector.Vector3f` `val`
- `float` `defaultX`
- `float` `defaultY`
- `float` `defaultZ`

**Returns:** `void`

### public static void setIfNotNull(org.lwjgl.util.vector.Vector3f to,
float x,
float y,
float z)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `to`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public static void setIfNotNull(org.lwjgl.util.vector.Quaternion to,
org.lwjgl.util.vector.Quaternion val)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `to`
- `org.lwjgl.util.vector.Quaternion` `val`

**Returns:** `void`

### public static void setIdentityIfNotNull(org.lwjgl.util.vector.Quaternion to)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `to`

**Returns:** `void`

### public static void lerp(Keyframe a,
Keyframe b,
float time,
org.lwjgl.util.vector.Vector3f pos,
org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f scale)

**Parameters:**
- `Keyframe` `a`
- `Keyframe` `b`
- `float` `time`
- `org.lwjgl.util.vector.Vector3f` `pos`
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `scale`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\Keyframe.html`*
