---
title: org.joml.Matrix4fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix4fc

`public interface Matrix4fc`

**Kind:** interface · **Package:** org.joml

## Fields

### static final int PLANE_NX

### static final int PLANE_PX

### static final int PLANE_NY

### static final int PLANE_PY

### static final int PLANE_NZ

### static final int PLANE_PZ

### static final int CORNER_NXNYNZ

### static final int CORNER_PXNYNZ

### static final int CORNER_PXPYNZ

### static final int CORNER_NXPYNZ

### static final int CORNER_PXNYPZ

### static final int CORNER_NXNYPZ

### static final int CORNER_NXPYPZ

### static final int CORNER_PXPYPZ

### static final byte PROPERTY_PERSPECTIVE

### static final byte PROPERTY_AFFINE

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

### float m03()

**Returns:** `float`

### float m10()

**Returns:** `float`

### float m11()

**Returns:** `float`

### float m12()

**Returns:** `float`

### float m13()

**Returns:** `float`

### float m20()

**Returns:** `float`

### float m21()

**Returns:** `float`

### float m22()

**Returns:** `float`

### float m23()

**Returns:** `float`

### float m30()

**Returns:** `float`

### float m31()

**Returns:** `float`

### float m32()

**Returns:** `float`

### float m33()

**Returns:** `float`

### Matrix4f mul(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mul0(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mul(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
float arg9,
float arg10,
float arg11,
float arg12,
float arg13,
float arg14,
float arg15,
Matrix4f arg16)

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
- `float` `arg9`
- `float` `arg10`
- `float` `arg11`
- `float` `arg12`
- `float` `arg13`
- `float` `arg14`
- `float` `arg15`
- `Matrix4f` `arg16`

**Returns:** `Matrix4f`

### Matrix4f mul3x3(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4f arg9)

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
- `Matrix4f` `arg9`

**Returns:** `Matrix4f`

### Matrix4f mulLocal(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulLocalAffine(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mul(Matrix3x2fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mul(Matrix4x3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulPerspectiveAffine(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulPerspectiveAffine(Matrix4x3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulAffineR(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulAffine(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulTranslationAffine(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulOrthoAffine(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f fma4x3(Matrix4fc arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `Matrix4fc` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f add(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f sub(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mulComponentWise(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f add4x3(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f sub4x3(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f mul4x3ComponentWise(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### float determinant()

**Returns:** `float`

### float determinant3x3()

**Returns:** `float`

### float determinantAffine()

**Returns:** `float`

### Matrix4f invert(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f invertPerspective(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f invertFrustum(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f invertOrtho(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f invertPerspectiveView(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f invertPerspectiveView(Matrix4x3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f invertAffine(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f transpose(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f transpose3x3(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

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

### Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4x3f get4x3(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix3f get3x3(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3d get3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

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

### FloatBuffer get4x3(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get4x3(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer get4x3(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get4x3(int arg0,
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

### FloatBuffer get4x3Transposed(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get4x3Transposed(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### ByteBuffer get4x3Transposed(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get4x3Transposed(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### Matrix4fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix4fc`

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

### Vector4f transform(float arg0,
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

### Vector4f transformTranspose(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformTranspose(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformTranspose(float arg0,
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

### Vector4f transformProject(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformProject(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformProject(float arg0,
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

### Vector3f transformProject(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformProject(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformProject(Vector4fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformProject(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3f transformProject(float arg0,
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

### Vector3f transformPosition(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

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

### Vector3f transformDirection(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector4f transformAffine(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformAffine(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformAffine(float arg0,
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

### Matrix4f scale(Vector3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f scale(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f scaleXY(float arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f scale(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f scaleAround(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f scaleAround(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f scaleLocal(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f scaleLocal(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f scaleAroundLocal(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f scaleAroundLocal(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateX(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateY(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateZ(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateTowardsXY(float arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f rotateXYZ(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotateAffineXYZ(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotateZYX(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotateAffineZYX(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotateYXZ(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotateAffineYXZ(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f rotate(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateTranslation(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateAffine(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateLocal(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateLocalX(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateLocalY(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateLocalZ(float arg0,
Matrix4f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f translate(Vector3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f translate(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f translateLocal(Vector3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f translateLocal(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f ortho(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4f` `arg7`

**Returns:** `Matrix4f`

### Matrix4f ortho(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f orthoLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4f` `arg7`

**Returns:** `Matrix4f`

### Matrix4f orthoLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f orthoSymmetric(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f orthoSymmetric(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f orthoSymmetricLH(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f orthoSymmetricLH(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f ortho2D(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f ortho2DLH(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f lookAlong(Vector3fc arg0,
Vector3fc arg1,
Matrix4f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f lookAlong(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f lookAt(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2,
Matrix4f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f lookAt(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4f arg9)

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
- `Matrix4f` `arg9`

**Returns:** `Matrix4f`

### Matrix4f lookAtPerspective(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4f arg9)

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
- `Matrix4f` `arg9`

**Returns:** `Matrix4f`

### Matrix4f lookAtLH(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2,
Matrix4f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f lookAtLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4f arg9)

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
- `Matrix4f` `arg9`

**Returns:** `Matrix4f`

### Matrix4f lookAtPerspectiveLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8,
Matrix4f arg9)

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
- `Matrix4f` `arg9`

**Returns:** `Matrix4f`

### Matrix4f perspective(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f perspective(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f perspectiveRect(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f perspectiveRect(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f perspectiveRect(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`

**Returns:** `Matrix4f`

### Matrix4f perspectiveRect(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix4f`

### Matrix4f perspectiveOffCenter(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4f` `arg7`

**Returns:** `Matrix4f`

### Matrix4f perspectiveOffCenter(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f perspectiveOffCenter(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`

**Returns:** `Matrix4f`

### Matrix4f perspectiveOffCenter(float arg0,
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

**Returns:** `Matrix4f`

### Matrix4f perspectiveLH(float arg0,
float arg1,
float arg2,
float arg3,
boolean arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `boolean` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f perspectiveLH(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f frustum(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4f` `arg7`

**Returns:** `Matrix4f`

### Matrix4f frustum(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f frustumLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
boolean arg6,
Matrix4f arg7)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `boolean` `arg6`
- `Matrix4f` `arg7`

**Returns:** `Matrix4f`

### Matrix4f frustumLH(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f rotate(Quaternionfc arg0,
Matrix4f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateAffine(Quaternionfc arg0,
Matrix4f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateTranslation(Quaternionfc arg0,
Matrix4f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateAroundAffine(Quaternionfc arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateAround(Quaternionfc arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotateLocal(Quaternionfc arg0,
Matrix4f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotateAroundLocal(Quaternionfc arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f rotate(AxisAngle4f arg0,
Matrix4f arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f rotate(float arg0,
Vector3fc arg1,
Matrix4f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Vector4f unproject(float var1,
float var2,
float var3,
int[] var4,
Vector4f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector4f` `var5`

**Returns:** `Vector4f`

### Vector3f unproject(float var1,
float var2,
float var3,
int[] var4,
Vector3f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector3f` `var5`

**Returns:** `Vector3f`

### Vector4f unproject(Vector3fc var1,
int[] var2,
Vector4f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector4f` `var3`

**Returns:** `Vector4f`

### Vector3f unproject(Vector3fc var1,
int[] var2,
Vector3f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector3f` `var3`

**Returns:** `Vector3f`

### Matrix4f unprojectRay(float var1,
float var2,
int[] var3,
Vector3f var4,
Vector3f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `int[]` `var3`
- `Vector3f` `var4`
- `Vector3f` `var5`

**Returns:** `Matrix4f`

### Matrix4f unprojectRay(Vector2fc var1,
int[] var2,
Vector3f var3,
Vector3f var4)

**Parameters:**
- `Vector2fc` `var1`
- `int[]` `var2`
- `Vector3f` `var3`
- `Vector3f` `var4`

**Returns:** `Matrix4f`

### Vector4f unprojectInv(Vector3fc var1,
int[] var2,
Vector4f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector4f` `var3`

**Returns:** `Vector4f`

### Vector4f unprojectInv(float var1,
float var2,
float var3,
int[] var4,
Vector4f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector4f` `var5`

**Returns:** `Vector4f`

### Matrix4f unprojectInvRay(Vector2fc var1,
int[] var2,
Vector3f var3,
Vector3f var4)

**Parameters:**
- `Vector2fc` `var1`
- `int[]` `var2`
- `Vector3f` `var3`
- `Vector3f` `var4`

**Returns:** `Matrix4f`

### Matrix4f unprojectInvRay(float var1,
float var2,
int[] var3,
Vector3f var4,
Vector3f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `int[]` `var3`
- `Vector3f` `var4`
- `Vector3f` `var5`

**Returns:** `Matrix4f`

### Vector3f unprojectInv(Vector3fc var1,
int[] var2,
Vector3f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector3f` `var3`

**Returns:** `Vector3f`

### Vector3f unprojectInv(float var1,
float var2,
float var3,
int[] var4,
Vector3f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector3f` `var5`

**Returns:** `Vector3f`

### Vector4f project(float var1,
float var2,
float var3,
int[] var4,
Vector4f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector4f` `var5`

**Returns:** `Vector4f`

### Vector3f project(float var1,
float var2,
float var3,
int[] var4,
Vector3f var5)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int[]` `var4`
- `Vector3f` `var5`

**Returns:** `Vector3f`

### Vector4f project(Vector3fc var1,
int[] var2,
Vector4f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector4f` `var3`

**Returns:** `Vector4f`

### Vector3f project(Vector3fc var1,
int[] var2,
Vector3f var3)

**Parameters:**
- `Vector3fc` `var1`
- `int[]` `var2`
- `Vector3f` `var3`

**Returns:** `Vector3f`

### Matrix4f reflect(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f reflect(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f reflect(Quaternionfc arg0,
Vector3fc arg1,
Matrix4f arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f reflect(Vector3fc arg0,
Vector3fc arg1,
Matrix4f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Vector4f getRow(int arg0,
Vector4f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector3f getRow(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector4f getColumn(int arg0,
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

### Matrix4f normal(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix3f normal(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3f cofactor3x3(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix4f cofactor3x3(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4f normalize3x3(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

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

### Vector3f frustumCorner(int arg0,
Vector3f arg1)

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f perspectiveOrigin(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f perspectiveInvOrigin(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### float perspectiveFov()

**Returns:** `float`

### float perspectiveNear()

**Returns:** `float`

### float perspectiveFar()

**Returns:** `float`

### Vector3f frustumRayDir(float arg0,
float arg1,
Vector3f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector3f` `arg2`

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

### Vector3f originAffine(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f origin(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Matrix4f shadow(Vector4f arg0,
float arg1,
float arg2,
float arg3,
float arg4,
Matrix4f arg5)

**Parameters:**
- `Vector4f` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f shadow(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
Matrix4f arg8)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `float` `arg6`
- `float` `arg7`
- `Matrix4f` `arg8`

**Returns:** `Matrix4f`

### Matrix4f shadow(Vector4f arg0,
Matrix4fc arg1,
Matrix4f arg2)

**Parameters:**
- `Vector4f` `arg0`
- `Matrix4fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f shadow(float arg0,
float arg1,
float arg2,
float arg3,
Matrix4fc arg4,
Matrix4f arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4fc` `arg4`
- `Matrix4f` `arg5`

**Returns:** `Matrix4f`

### Matrix4f pick(float var1,
float var2,
float var3,
float var4,
int[] var5,
Matrix4f var6)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `int[]` `var5`
- `Matrix4f` `var6`

**Returns:** `Matrix4f`

### boolean isAffine()

**Returns:** `boolean`

### Matrix4f arcball(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Matrix4f arcball(float arg0,
Vector3fc arg1,
float arg2,
float arg3,
Matrix4f arg4)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix4f` `arg4`

**Returns:** `Matrix4f`

### Matrix4f frustumAabb(Vector3f arg0,
Vector3f arg1)

**Parameters:**
- `Vector3f` `arg0`
- `Vector3f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f projectedGridRange(Matrix4fc arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `Matrix4fc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f perspectiveFrustumSlice(float arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f orthoCrop(Matrix4fc arg0,
Matrix4f arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f transformAab(float arg0,
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

**Returns:** `Matrix4f`

### Matrix4f transformAab(Vector3fc arg0,
Vector3fc arg1,
Vector3f arg2,
Vector3f arg3)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3f` `arg2`
- `Vector3f` `arg3`

**Returns:** `Matrix4f`

### Matrix4f lerp(Matrix4fc arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `Matrix4fc` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f rotateTowards(Vector3fc arg0,
Vector3fc arg1,
Matrix4f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f rotateTowards(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Matrix4f arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Matrix4f` `arg6`

**Returns:** `Matrix4f`

### Vector3f getEulerAnglesZYX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### boolean testPoint(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `boolean`

### boolean testSphere(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `boolean`

### boolean testAab(float arg0,
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

**Returns:** `boolean`

### Matrix4f obliqueZ(float arg0,
float arg1,
Matrix4f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix4f` `arg2`

**Returns:** `Matrix4f`

### Matrix4f withLookAtUp(Vector3fc arg0,
Matrix4f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4f` `arg1`

**Returns:** `Matrix4f`

### Matrix4f withLookAtUp(float arg0,
float arg1,
float arg2,
Matrix4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix4f` `arg3`

**Returns:** `Matrix4f`

### boolean equals(Matrix4fc arg0,
float arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix4fc.html`*
