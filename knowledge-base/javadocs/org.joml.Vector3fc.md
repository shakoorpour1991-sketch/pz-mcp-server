---
title: org.joml.Vector3fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Vector3fc

`public interface Vector3fc`

**Kind:** interface · **Package:** org.joml

## Methods

### float x()

**Returns:** `float`

### float y()

**Returns:** `float`

### float z()

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

### Vector3fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Vector3fc`

### Vector3f sub(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f sub(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f add(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f add(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f fma(Vector3fc arg0,
Vector3fc arg1,
Vector3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f fma(float arg0,
Vector3fc arg1,
Vector3f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f mulAdd(Vector3fc arg0,
Vector3fc arg1,
Vector3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f mulAdd(float arg0,
Vector3fc arg1,
Vector3f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f mul(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f div(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulProject(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulProject(Matrix4fc arg0,
float arg1,
Vector3f arg2)

**Parameters:**
- `Matrix4fc` `arg0`
- `float` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f mul(Matrix3fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mul(Matrix3dc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mul(Matrix3x2fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulTranspose(Matrix3fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulPosition(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulPosition(Matrix4x3fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulTransposePosition(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### float mulPositionW(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `float`

### Vector3f mulDirection(Matrix4dc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulDirection(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulDirection(Matrix4x3fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mulTransposeDirection(Matrix4fc arg0,
Vector3f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mul(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f mul(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f div(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f div(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f rotate(Quaternionfc arg0,
Vector3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Quaternionf rotationTo(Vector3fc arg0,
Quaternionf arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotationTo(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### Vector3f rotateAxis(float arg0,
float arg1,
float arg2,
float arg3,
Vector3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Vector3f` `arg4`

**Returns:** `Vector3f`

### Vector3f rotateX(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f rotateY(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f rotateZ(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### float lengthSquared()

**Returns:** `float`

### float length()

**Returns:** `float`

### Vector3f normalize(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalize(float arg0,
Vector3f arg1)

**Parameters:**
- `float` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f cross(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f cross(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### float distance(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

### float distance(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `float`

### float distanceSquared(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

### float distanceSquared(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `float`

### float dot(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

### float dot(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `float`

### float angleCos(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

### float angle(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

### float angleSigned(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `float`

### float angleSigned(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`

**Returns:** `float`

### Vector3f min(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f max(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f negate(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f absolute(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f reflect(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f reflect(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f half(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f half(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f smoothStep(Vector3fc arg0,
float arg1,
Vector3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `float` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### Vector3f hermite(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2,
float arg3,
Vector3f arg4)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`
- `float` `arg3`
- `Vector3f` `arg4`

**Returns:** `Vector3f`

### Vector3f lerp(Vector3fc arg0,
float arg1,
Vector3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `float` `arg1`
- `Vector3f` `arg2`

**Returns:** `Vector3f`

### float get(int arg0)
throws IllegalArgumentException

**Parameters:**
- `int` `arg0`

**Returns:** `float`

### Vector3i get(int arg0,
Vector3i arg1)

**Parameters:**
- `int` `arg0`
- `Vector3i` `arg1`

**Returns:** `Vector3i`

### Vector3f get(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3d get(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### int maxComponent()

**Returns:** `int`

### int minComponent()

**Returns:** `int`

### Vector3f orthogonalize(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f orthogonalizeUnit(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f floor(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f ceil(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f round(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### boolean isFinite()

**Returns:** `boolean`

### boolean equals(Vector3fc arg0,
float arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean equals(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Vector3fc.html`*
