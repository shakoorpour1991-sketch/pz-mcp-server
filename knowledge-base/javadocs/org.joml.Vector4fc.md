---
title: org.joml.Vector4fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Vector4fc

`public interface Vector4fc`

**Kind:** interface · **Package:** org.joml

## Methods

### float x()

**Returns:** `float`

### float y()

**Returns:** `float`

### float z()

**Returns:** `float`

### float w()

**Returns:** `float`

### FloatBuffer get(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer get(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### Vector4fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Vector4fc`

### Vector4f sub(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f sub(float arg0,
float arg1,
float arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### Vector4f add(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f add(float arg0,
float arg1,
float arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### Vector4f fma(Vector4fc arg0,
Vector4fc arg1,
Vector4f arg2)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4fc` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f fma(float arg0,
Vector4fc arg1,
Vector4f arg2)

**Parameters:**
- `float` `arg0`
- `Vector4fc` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f mulAdd(Vector4fc arg0,
Vector4fc arg1,
Vector4f arg2)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4fc` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f mulAdd(float arg0,
Vector4fc arg1,
Vector4f arg2)

**Parameters:**
- `float` `arg0`
- `Vector4fc` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f mul(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f div(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mul(Matrix4fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mulTranspose(Matrix4fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mulAffine(Matrix4fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mulAffineTranspose(Matrix4fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mul(Matrix4x3fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mulProject(Matrix4fc arg0,
Vector4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector3f mulProject(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector4f mul(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f mul(float arg0,
float arg1,
float arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### Vector4f div(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f div(float arg0,
float arg1,
float arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### Vector4f rotate(Quaternionfc arg0,
Vector4f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f rotateAxis(float arg0,
float arg1,
float arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### Vector4f rotateX(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f rotateY(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f rotateZ(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### float lengthSquared()

**Returns:** `float`

### float length()

**Returns:** `float`

### Vector4f normalize(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f normalize(float arg0,
Vector4f arg1)

**Parameters:**
- `float` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f normalize3(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### float distance(Vector4fc arg0)

**Parameters:**
- `Vector4fc` `arg0`

**Returns:** `float`

### float distance(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `float`

### float distanceSquared(Vector4fc arg0)

**Parameters:**
- `Vector4fc` `arg0`

**Returns:** `float`

### float distanceSquared(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `float`

### float dot(Vector4fc arg0)

**Parameters:**
- `Vector4fc` `arg0`

**Returns:** `float`

### float dot(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `float`

### float angleCos(Vector4fc arg0)

**Parameters:**
- `Vector4fc` `arg0`

**Returns:** `float`

### float angle(Vector4fc arg0)

**Parameters:**
- `Vector4fc` `arg0`

**Returns:** `float`

### Vector4f negate(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f min(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f max(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f lerp(Vector4fc arg0,
float arg1,
Vector4f arg2)

**Parameters:**
- `Vector4fc` `arg0`
- `float` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f smoothStep(Vector4fc arg0,
float arg1,
Vector4f arg2)

**Parameters:**
- `Vector4fc` `arg0`
- `float` `arg1`
- `Vector4f` `arg2`

**Returns:** `Vector4f`

### Vector4f hermite(Vector4fc arg0,
Vector4fc arg1,
Vector4fc arg2,
float arg3,
Vector4f arg4)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4fc` `arg1`
- `Vector4fc` `arg2`
- `float` `arg3`
- `Vector4f` `arg4`

**Returns:** `Vector4f`

### float get(int arg0)
throws IllegalArgumentException

**Parameters:**
- `int` `arg0`

**Returns:** `float`

### Vector4i get(int arg0,
Vector4i arg1)

**Parameters:**
- `int` `arg0`
- `Vector4i` `arg1`

**Returns:** `Vector4i`

### Vector4f get(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4d get(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### int maxComponent()

**Returns:** `int`

### int minComponent()

**Returns:** `int`

### Vector4f floor(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f ceil(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f round(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### boolean isFinite()

**Returns:** `boolean`

### Vector4f absolute(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### boolean equals(Vector4fc arg0,
float arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean equals(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Vector4fc.html`*
