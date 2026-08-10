---
title: zombie.core.skinnedmodel.Matrix4
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.Matrix4

`public class Matrix4 extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.Matrix4

## Fields

### public static Matrix4 identity

## Constructors

### public Matrix4()

### public Matrix4(float[] m)

**Parameters:**
- `float[]` `m`

### public Matrix4(Matrix4 m)

**Parameters:**
- `Matrix4` `m`

## Methods

### public Matrix4 clear()

**Returns:** `Matrix4`

### public Matrix4 clearToIdentity()

**Returns:** `Matrix4`

### public Matrix4 clearToOrtho(float left,
float right,
float bottom,
float top,
float near,
float far)

**Parameters:**
- `float` `left`
- `float` `right`
- `float` `bottom`
- `float` `top`
- `float` `near`
- `float` `far`

**Returns:** `Matrix4`

### public Matrix4 clearToPerspective(float fovRad,
float width,
float height,
float near,
float far)

**Parameters:**
- `float` `fovRad`
- `float` `width`
- `float` `height`
- `float` `near`
- `float` `far`

**Returns:** `Matrix4`

### public float get(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public Matrix4 put(int index,
float f)

**Parameters:**
- `int` `index`
- `float` `f`

**Returns:** `Matrix4`

### public Matrix4 put(int index,
Vector3 v,
float w)

**Parameters:**
- `int` `index`
- `Vector3` `v`
- `float` `w`

**Returns:** `Matrix4`

### public Matrix4 put(float[] m)

**Parameters:**
- `float[]` `m`

**Returns:** `Matrix4`

### public Matrix4 put(Matrix4 m)

**Parameters:**
- `Matrix4` `m`

**Returns:** `Matrix4`

### public Matrix4 mult(float[] m)

**Parameters:**
- `float[]` `m`

**Returns:** `Matrix4`

### public Matrix4 mult(Matrix4 m)

**Parameters:**
- `Matrix4` `m`

**Returns:** `Matrix4`

### public Matrix4 transpose()

**Returns:** `Matrix4`

### public Matrix4 translate(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `Matrix4`

### public Matrix4 translate(Vector3 vec)

**Parameters:**
- `Vector3` `vec`

**Returns:** `Matrix4`

### public Matrix4 scale(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `Matrix4`

### public Matrix4 scale(Vector3 vec)

**Parameters:**
- `Vector3` `vec`

**Returns:** `Matrix4`

### public Matrix4 rotate(float angle,
float x,
float y,
float z)

**Parameters:**
- `float` `angle`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `Matrix4`

### public Matrix4 rotate(float angle,
Vector3 vec)

**Parameters:**
- `float` `angle`
- `Vector3` `vec`

**Returns:** `Matrix4`

### public FloatBuffer getBuffer()

**Returns:** `FloatBuffer`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\Matrix4.html`*
