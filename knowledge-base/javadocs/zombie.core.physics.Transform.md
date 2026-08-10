---
title: zombie.core.physics.Transform
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.Transform

`public final class Transform extends Object`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.physics.Transform

## Description

Transform represents translation and rotation (rigid transform). Scaling and
shearing is not supported.

You can use local shape scaling or UniformScalingShape for static rescaling
of collision objects.

## Fields

### public final org.joml.Matrix3f basis

Rotation matrix of this Transform.

### public final org.joml.Vector3f origin

Translation vector of this Transform.

## Constructors

### public Transform()

### public Transform(org.joml.Matrix3f mat)

**Parameters:**
- `org.joml.Matrix3f` `mat`

### public Transform(org.joml.Matrix4f mat)

**Parameters:**
- `org.joml.Matrix4f` `mat`

### public Transform(Transform tr)

**Parameters:**
- `Transform` `tr`

## Methods

### public void set(Transform tr)

**Parameters:**
- `Transform` `tr`

**Returns:** `void`

### public void set(org.joml.Matrix3f mat)

**Parameters:**
- `org.joml.Matrix3f` `mat`

**Returns:** `void`

### public void set(org.joml.Matrix4f mat)

**Parameters:**
- `org.joml.Matrix4f` `mat`

**Returns:** `void`

### public void transform(org.joml.Vector3f v)

**Parameters:**
- `org.joml.Vector3f` `v`

**Returns:** `void`

### public void setIdentity()

**Returns:** `void`

### public void inverse()

**Returns:** `void`

### public void inverse(Transform tr)

**Parameters:**
- `Transform` `tr`

**Returns:** `void`

### public org.joml.Quaternionf getRotation(org.joml.Quaternionf out)

**Parameters:**
- `org.joml.Quaternionf` `out`

**Returns:** `org.joml.Quaternionf`

### public void setRotation(org.joml.Quaternionf q)

**Parameters:**
- `org.joml.Quaternionf` `q`

**Returns:** `void`

### public org.joml.Matrix4f getMatrix(org.joml.Matrix4f out)

**Parameters:**
- `org.joml.Matrix4f` `out`

**Returns:** `org.joml.Matrix4f`

### public boolean equals(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public org.joml.Vector3f getOrigin()

**Returns:** `org.joml.Vector3f`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\Transform.html`*
