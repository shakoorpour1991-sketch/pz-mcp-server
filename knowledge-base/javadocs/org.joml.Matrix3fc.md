---
title: org.joml.Matrix3fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix3fc

`public interface Matrix3fc`

**Kind:** interface · **Package:** org.joml

## Methods

### float m00()

**Returns:** `float`

### float m01()

**Returns:** `float`

### float m02()

**Returns:** `float`

### float m10()

**Returns:** `float`

### float m11()

**Returns:** `float`

### float m12()

**Returns:** `float`

### float m20()

**Returns:** `float`

### float m21()

**Returns:** `float`

### float m22()

**Returns:** `float`

### Matrix3f mul(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f mulLocal(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### float determinant()

**Returns:** `float`

### Matrix3f invert(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3f transpose(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### AxisAngle4f getRotation(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `AxisAngle4f`

### Quaternionf getUnnormalizedRotation(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### Quaternionf getNormalizedRotation(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### Quaterniond getUnnormalizedRotation(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### Quaterniond getNormalizedRotation(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

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

### FloatBuffer get3x4(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get3x4(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer get3x4(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get3x4(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### FloatBuffer getTransposed(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer getTransposed(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer getTransposed(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer getTransposed(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### Matrix3fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3fc`

### float[] get(float[] var1,
int var2)

**Parameters:**
- `float[]` `var1`
- `int` `var2`

**Returns:** `float[]`

### float[] get(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

### Matrix3f scale(Vector3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f scale(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Matrix3f scale(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f scaleLocal(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transform(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transform(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f transformTranspose(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformTranspose(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformTranspose(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Matrix3f rotateX(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateY(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateZ(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateXYZ(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Matrix3f rotateZYX(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Matrix3f rotateYXZ(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Matrix3f rotate(float arg0,
float arg1,
float arg2,
float arg3,
Matrix3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix3f` `arg4`

**Returns:** `Matrix3f`

### Matrix3f rotateLocal(float arg0,
float arg1,
float arg2,
float arg3,
Matrix3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix3f` `arg4`

**Returns:** `Matrix3f`

### Matrix3f rotateLocalX(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateLocalY(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateLocalZ(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotate(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotateLocal(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotate(AxisAngle4f arg0,
Matrix3f arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f rotate(float arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### Matrix3f lookAlong(Vector3fc arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### Matrix3f lookAlong(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix3f` `arg6`

**Returns:** `Matrix3f`

### Vector3f getRow(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f getColumn(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### float get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### float getRowColumn(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### Matrix3f normal(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3f cofactor(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Vector3f getScale(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f positiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f positiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f positiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix3f add(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f sub(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f mulComponentWise(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f lerp(Matrix3fc arg0,
float arg1,
Matrix3f arg2)

**Parameters:**
- `Matrix3fc` `arg0`
- `float` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### Matrix3f rotateTowards(Vector3fc arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### Matrix3f rotateTowards(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix3f` `arg6`

**Returns:** `Matrix3f`

### Vector3f getEulerAnglesZYX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix3f obliqueZ(float arg0,
float arg1,
Matrix3f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### boolean equals(Matrix3fc arg0,
float arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### Matrix3f reflect(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### Matrix3f reflect(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### Matrix3f reflect(Vector3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### boolean isFinite()

**Returns:** `boolean`

### float quadraticFormProduct(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `float`

### float quadraticFormProduct(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3fc.html`*
