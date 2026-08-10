---
title: org.joml.Matrix4x3fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix4x3fc

`public interface Matrix4x3fc`

**Kind:** interface · **Package:** org.joml

## Fields

### static final int PLANE_NX

### static final int PLANE_PX

### static final int PLANE_NY

### static final int PLANE_PY

### static final int PLANE_NZ

### static final int PLANE_PZ

### static final byte PROPERTY_IDENTITY

### static final byte PROPERTY_TRANSLATION

### static final byte PROPERTY_ORTHONORMAL

## Methods

### int properties()

**Returns:** `int`

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

### float m30()

**Returns:** `float`

### float m31()

**Returns:** `float`

### float m32()

**Returns:** `float`

### Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4x3f mul(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f mulTranslation(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f mulOrtho(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f fma(Matrix4x3fc arg0,
float arg1,
Matrix4x3f arg2)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `float` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f add(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f sub(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f mulComponentWise(Matrix4x3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### float determinant()

**Returns:** `float`

### Matrix4x3f invert(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4f invert(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4x3f invertOrtho(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4x3f transpose3x3(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix3f transpose3x3(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Vector3f getTranslation(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f getScale(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix4x3f get(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4x3d get(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### AxisAngle4f getRotation(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `AxisAngle4f`

### AxisAngle4d getRotation(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `AxisAngle4d`

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

### Matrix4x3fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix4x3fc`

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

### float[] get4x4(float[] var1,
int var2)

**Parameters:**
- `float[]` `var1`
- `int` `var2`

**Returns:** `float[]`

### float[] get4x4(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

### FloatBuffer get4x4(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get4x4(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer get4x4(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get4x4(int arg0,
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

### float[] getTransposed(float[] var1,
int var2)

**Parameters:**
- `float[]` `var1`
- `int` `var2`

**Returns:** `float[]`

### float[] getTransposed(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

### Vector4f transform(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transform(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector3f transformPosition(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformPosition(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformDirection(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformDirection(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Matrix4x3f scale(Vector3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f scale(float arg0,
Matrix4x3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f scaleXY(float arg0,
float arg1,
Matrix4x3f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f scale(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f scaleLocal(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateX(float arg0,
Matrix4x3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateY(float arg0,
Matrix4x3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateZ(float arg0,
Matrix4x3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateXYZ(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateZYX(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateYXZ(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotate(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateTranslation(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateAround(Quaternionfc arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateLocal(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f translate(Vector3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f translate(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f translateLocal(Vector3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f translateLocal(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f ortho(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4x3f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4x3f` `arg7`

**Returns:** `Matrix4x3f`

### Matrix4x3f ortho(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4x3f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4x3f` `arg7`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoSymmetric(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4x3f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4x3f` `arg5`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoSymmetric(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoSymmetricLH(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4x3f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4x3f` `arg5`

**Returns:** `Matrix4x3f`

### Matrix4x3f orthoSymmetricLH(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f ortho2D(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f ortho2DLH(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAlong(Vector3fc arg0,
Vector3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAlong(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAt(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2,
Matrix4x3f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAt(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4x3f arg9)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `float` `arg6`
- `float` `arg7`
- `float` `arg8`
- `Matrix4x3f` `arg9`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAtLH(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2,
Matrix4x3f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f lookAtLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4x3f arg9)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `float` `arg6`
- `float` `arg7`
- `float` `arg8`
- `Matrix4x3f` `arg9`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotate(Quaternionfc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateTranslation(Quaternionfc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateLocal(Quaternionfc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotate(AxisAngle4f arg0,
Matrix4x3f arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotate(float arg0,
Vector3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f reflect(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f reflect(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Matrix4x3f reflect(Quaternionfc arg0,
Vector3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f reflect(Vector3fc arg0,
Vector3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Vector4f getRow(int arg0,
Vector4f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector3f getColumn(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Matrix4x3f normal(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix3f normal(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3f cofactor3x3(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix4x3f cofactor3x3(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4x3f normalize3x3(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix3f normalize3x3(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Vector4f frustumPlane(int arg0,
Vector4f arg1)

**Parameters:**
- `int` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

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

### Vector3f origin(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix4x3f shadow(Vector4fc arg0,
float arg1,
float arg2,
float arg3,
float arg4,
Matrix4x3f arg5)

**Parameters:**
- `Vector4fc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `Matrix4x3f` `arg5`

**Returns:** `Matrix4x3f`

### Matrix4x3f shadow(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
Matrix4x3f arg8)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `float` `arg6`
- `float` `arg7`
- `Matrix4x3f` `arg8`

**Returns:** `Matrix4x3f`

### Matrix4x3f shadow(Vector4fc arg0,
Matrix4x3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `Vector4fc` `arg0`
- `Matrix4x3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f shadow(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4x3fc arg4,
Matrix4x3f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3fc` `arg4`
- `Matrix4x3f` `arg5`

**Returns:** `Matrix4x3f`

### Matrix4x3f pick(float var1,
float var2,
float var3,
float var4,
int[] var5,
Matrix4x3f var6)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `int[]` `var5`
- `Matrix4x3f` `var6`

**Returns:** `Matrix4x3f`

### Matrix4x3f arcball(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Matrix4x3f arcball(float arg0,
Vector3fc arg1,
float arg2,
float arg3,
Matrix4x3f arg4)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4x3f` `arg4`

**Returns:** `Matrix4x3f`

### Matrix4x3f transformAab(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Vector3f arg6,
Vector3f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Vector3f` `arg6`
- `Vector3f` `arg7`

**Returns:** `Matrix4x3f`

### Matrix4x3f transformAab(Vector3fc arg0,
Vector3fc arg1,
Vector3f arg2,
Vector3f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`
- `Vector3f` `arg3`

**Returns:** `Matrix4x3f`

### Matrix4x3f lerp(Matrix4x3fc arg0,
float arg1,
Matrix4x3f arg2)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `float` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateTowards(Vector3fc arg0,
Vector3fc arg1,
Matrix4x3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f rotateTowards(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4x3f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4x3f` `arg6`

**Returns:** `Matrix4x3f`

### Vector3f getEulerAnglesZYX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix4x3f obliqueZ(float arg0,
float arg1,
Matrix4x3f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4x3f` `arg2`

**Returns:** `Matrix4x3f`

### Matrix4x3f withLookAtUp(Vector3fc arg0,
Matrix4x3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3f` `arg1`

**Returns:** `Matrix4x3f`

### Matrix4x3f withLookAtUp(float arg0,
float arg1,
float arg2,
Matrix4x3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4x3f` `arg3`

**Returns:** `Matrix4x3f`

### boolean equals(Matrix4x3fc arg0,
float arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix4x3fc.html`*
