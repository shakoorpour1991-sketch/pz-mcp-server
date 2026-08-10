---
title: org.joml.Matrix4dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix4dc

`public interface Matrix4dc`

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

### double m00()

**Returns:** `double`

### double m01()

**Returns:** `double`

### double m02()

**Returns:** `double`

### double m03()

**Returns:** `double`

### double m10()

**Returns:** `double`

### double m11()

**Returns:** `double`

### double m12()

**Returns:** `double`

### double m13()

**Returns:** `double`

### double m20()

**Returns:** `double`

### double m21()

**Returns:** `double`

### double m22()

**Returns:** `double`

### double m23()

**Returns:** `double`

### double m30()

**Returns:** `double`

### double m31()

**Returns:** `double`

### double m32()

**Returns:** `double`

### double m33()

**Returns:** `double`

### Matrix4d mul(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul0(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
double arg9,
double arg10,
double arg11,
double arg12,
double arg13,
double arg14,
double arg15,
Matrix4d arg16)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `double` `arg9`
- `double` `arg10`
- `double` `arg11`
- `double` `arg12`
- `double` `arg13`
- `double` `arg14`
- `double` `arg15`
- `Matrix4d` `arg16`

**Returns:** `Matrix4d`

### Matrix4d mul3x3(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4d arg9)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `Matrix4d` `arg9`

**Returns:** `Matrix4d`

### Matrix4d mulLocal(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulLocalAffine(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(Matrix3x2dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(Matrix3x2fc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(Matrix4x3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(Matrix4x3fc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul(Matrix4fc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulPerspectiveAffine(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulPerspectiveAffine(Matrix4x3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulAffineR(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulAffine(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulTranslationAffine(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulOrthoAffine(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d fma4x3(Matrix4dc arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `Matrix4dc` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d add(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d sub(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mulComponentWise(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d add4x3(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d add4x3(Matrix4fc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d sub4x3(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d mul4x3ComponentWise(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### double determinant()

**Returns:** `double`

### double determinant3x3()

**Returns:** `double`

### double determinantAffine()

**Returns:** `double`

### Matrix4d invert(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d invertPerspective(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d invertFrustum(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d invertOrtho(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d invertPerspectiveView(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d invertPerspectiveView(Matrix4x3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d invertAffine(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d transpose(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d transpose3x3(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix3d transpose3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Vector3d getTranslation(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d getScale(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4x3d get4x3(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix3d get3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

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

### DoubleBuffer get(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer get(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### Matrix4dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix4dc`

### ByteBuffer getFloats(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer getFloats(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### double[] get(double[] var1,
int var2)

**Parameters:**
- `double[]` `var1`
- `int` `var2`

**Returns:** `double[]`

### double[] get(double[] var1)

**Parameters:**
- `double[]` `var1`

**Returns:** `double[]`

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

### DoubleBuffer getTransposed(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer getTransposed(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### DoubleBuffer get4x3Transposed(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer get4x3Transposed(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### Vector4d transform(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transform(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transform(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d transformTranspose(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transformTranspose(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transformTranspose(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d transformProject(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transformProject(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector3d transformProject(Vector4dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector4d transformProject(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector3d transformProject(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformProject(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformProject(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3d transformProject(double arg0,
double arg1,
double arg2,
double arg3,
Vector3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector3d` `arg4`

**Returns:** `Vector3d`

### Vector3d transformPosition(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformPosition(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformPosition(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3d transformDirection(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformDirection(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

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

### Vector3d transformDirection(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3f transformDirection(double arg0,
double arg1,
double arg2,
Vector3f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector4d transformAffine(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transformAffine(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transformAffine(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Matrix4d scale(Vector3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d scale(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d scale(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d scaleXY(double arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d scaleAround(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d scaleAround(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d scaleLocal(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d scaleLocal(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d scaleAroundLocal(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d scaleAroundLocal(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotate(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateTranslation(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateAffine(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateAroundAffine(Quaterniondc arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateAround(Quaterniondc arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateLocal(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d rotateLocalX(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateLocalY(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateLocalZ(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateAroundLocal(Quaterniondc arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d translate(Vector3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d translate(Vector3fc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d translate(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d translateLocal(Vector3fc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d translateLocal(Vector3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d translateLocal(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateX(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateY(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateZ(double arg0,
Matrix4d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateTowardsXY(double arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d rotateXYZ(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateAffineXYZ(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateZYX(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateAffineZYX(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateYXZ(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotateAffineYXZ(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d rotate(Quaterniondc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotate(Quaternionfc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateAffine(Quaterniondc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateTranslation(Quaterniondc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateTranslation(Quaternionfc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateLocal(Quaterniondc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateAffine(Quaternionfc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotateLocal(Quaternionfc arg0,
Matrix4d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotate(AxisAngle4f arg0,
Matrix4d arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotate(AxisAngle4d arg0,
Matrix4d arg1)

**Parameters:**
- `AxisAngle4d` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d rotate(double arg0,
Vector3dc arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d rotate(double arg0,
Vector3fc arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Vector4d getRow(int arg0,
Vector4d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector3d getRow(int arg0,
Vector3d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector4d getColumn(int arg0,
Vector4d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector3d getColumn(int arg0,
Vector3d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### double get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### double getRowColumn(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### Matrix4d normal(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix3d normal(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d cofactor3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix4d cofactor3x3(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4d normalize3x3(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix3d normalize3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Vector4d unproject(double var1,
double var3,
double var5,
int[] var7,
Vector4d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector4d` `var8`

**Returns:** `Vector4d`

### Vector3d unproject(double var1,
double var3,
double var5,
int[] var7,
Vector3d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector3d` `var8`

**Returns:** `Vector3d`

### Vector4d unproject(Vector3dc var1,
int[] var2,
Vector4d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector4d` `var3`

**Returns:** `Vector4d`

### Vector3d unproject(Vector3dc var1,
int[] var2,
Vector3d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector3d` `var3`

**Returns:** `Vector3d`

### Matrix4d unprojectRay(double var1,
double var3,
int[] var5,
Vector3d var6,
Vector3d var7)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `int[]` `var5`
- `Vector3d` `var6`
- `Vector3d` `var7`

**Returns:** `Matrix4d`

### Matrix4d unprojectRay(Vector2dc var1,
int[] var2,
Vector3d var3,
Vector3d var4)

**Parameters:**
- `Vector2dc` `var1`
- `int[]` `var2`
- `Vector3d` `var3`
- `Vector3d` `var4`

**Returns:** `Matrix4d`

### Vector4d unprojectInv(Vector3dc var1,
int[] var2,
Vector4d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector4d` `var3`

**Returns:** `Vector4d`

### Vector4d unprojectInv(double var1,
double var3,
double var5,
int[] var7,
Vector4d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector4d` `var8`

**Returns:** `Vector4d`

### Vector3d unprojectInv(Vector3dc var1,
int[] var2,
Vector3d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector3d` `var3`

**Returns:** `Vector3d`

### Vector3d unprojectInv(double var1,
double var3,
double var5,
int[] var7,
Vector3d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector3d` `var8`

**Returns:** `Vector3d`

### Matrix4d unprojectInvRay(Vector2dc var1,
int[] var2,
Vector3d var3,
Vector3d var4)

**Parameters:**
- `Vector2dc` `var1`
- `int[]` `var2`
- `Vector3d` `var3`
- `Vector3d` `var4`

**Returns:** `Matrix4d`

### Matrix4d unprojectInvRay(double var1,
double var3,
int[] var5,
Vector3d var6,
Vector3d var7)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `int[]` `var5`
- `Vector3d` `var6`
- `Vector3d` `var7`

**Returns:** `Matrix4d`

### Vector4d project(double var1,
double var3,
double var5,
int[] var7,
Vector4d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector4d` `var8`

**Returns:** `Vector4d`

### Vector3d project(double var1,
double var3,
double var5,
int[] var7,
Vector3d var8)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `int[]` `var7`
- `Vector3d` `var8`

**Returns:** `Vector3d`

### Vector4d project(Vector3dc var1,
int[] var2,
Vector4d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector4d` `var3`

**Returns:** `Vector4d`

### Vector3d project(Vector3dc var1,
int[] var2,
Vector3d var3)

**Parameters:**
- `Vector3dc` `var1`
- `int[]` `var2`
- `Vector3d` `var3`

**Returns:** `Vector3d`

### Matrix4d reflect(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d reflect(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d reflect(Quaterniondc arg0,
Vector3dc arg1,
Matrix4d arg2)

**Parameters:**
- `Quaterniondc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d reflect(Vector3dc arg0,
Vector3dc arg1,
Matrix4d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d ortho(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d ortho(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d orthoLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d orthoLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d orthoSymmetric(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d orthoSymmetric(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d orthoSymmetricLH(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d orthoSymmetricLH(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d ortho2D(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d ortho2DLH(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d lookAlong(Vector3dc arg0,
Vector3dc arg1,
Matrix4d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d lookAlong(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d lookAt(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2,
Matrix4d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d lookAt(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4d arg9)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `Matrix4d` `arg9`

**Returns:** `Matrix4d`

### Matrix4d lookAtPerspective(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4d arg9)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `Matrix4d` `arg9`

**Returns:** `Matrix4d`

### Matrix4d lookAtLH(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2,
Matrix4d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d lookAtLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4d arg9)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `Matrix4d` `arg9`

**Returns:** `Matrix4d`

### Matrix4d lookAtPerspectiveLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4d arg9)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `double` `arg8`
- `Matrix4d` `arg9`

**Returns:** `Matrix4d`

### Matrix4d perspective(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d perspective(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d perspectiveRect(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d perspectiveRect(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d perspectiveRect(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`

**Returns:** `Matrix4d`

### Matrix4d perspectiveRect(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix4d`

### Matrix4d perspectiveOffCenter(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d perspectiveOffCenter(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d perspectiveOffCenter(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`

**Returns:** `Matrix4d`

### Matrix4d perspectiveOffCenter(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`

**Returns:** `Matrix4d`

### Matrix4d perspectiveLH(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d perspectiveLH(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d frustum(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d frustum(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d frustumLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d frustumLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Vector4d frustumPlane(int arg0,
Vector4d arg1)

**Parameters:**
- `int` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector3d frustumCorner(int arg0,
Vector3d arg1)

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d perspectiveOrigin(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d perspectiveInvOrigin(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### double perspectiveFov()

**Returns:** `double`

### double perspectiveNear()

**Returns:** `double`

### double perspectiveFar()

**Returns:** `double`

### Vector3d frustumRayDir(double arg0,
double arg1,
Vector3d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector3d` `arg2`

**Returns:** `Vector3d`

### Vector3d positiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d normalizedPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d positiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d normalizedPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d positiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d normalizedPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d originAffine(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d origin(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Matrix4d shadow(Vector4dc arg0,
double arg1,
double arg2,
double arg3,
double arg4,
Matrix4d arg5)

**Parameters:**
- `Vector4dc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d shadow(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
Matrix4d arg8)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `Matrix4d` `arg8`

**Returns:** `Matrix4d`

### Matrix4d shadow(Vector4dc arg0,
Matrix4dc arg1,
Matrix4d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `Matrix4dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d shadow(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4dc arg4,
Matrix4d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4dc` `arg4`
- `Matrix4d` `arg5`

**Returns:** `Matrix4d`

### Matrix4d pick(double var1,
double var3,
double var5,
double var7,
int[] var9,
Matrix4d var10)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `double` `var7`
- `int[]` `var9`
- `Matrix4d` `var10`

**Returns:** `Matrix4d`

### boolean isAffine()

**Returns:** `boolean`

### Matrix4d arcball(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Matrix4d arcball(double arg0,
Vector3dc arg1,
double arg2,
double arg3,
Matrix4d arg4)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4d` `arg4`

**Returns:** `Matrix4d`

### Matrix4d projectedGridRange(Matrix4dc arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `Matrix4dc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d perspectiveFrustumSlice(double arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d orthoCrop(Matrix4dc arg0,
Matrix4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d transformAab(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Vector3d arg6,
Vector3d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Vector3d` `arg6`
- `Vector3d` `arg7`

**Returns:** `Matrix4d`

### Matrix4d transformAab(Vector3dc arg0,
Vector3dc arg1,
Vector3d arg2,
Vector3d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3d` `arg2`
- `Vector3d` `arg3`

**Returns:** `Matrix4d`

### Matrix4d lerp(Matrix4dc arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `Matrix4dc` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d rotateTowards(Vector3dc arg0,
Vector3dc arg1,
Matrix4d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d rotateTowards(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4d` `arg6`

**Returns:** `Matrix4d`

### Vector3d getEulerAnglesZYX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### boolean testPoint(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `boolean`

### boolean testSphere(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `boolean`

### boolean testAab(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`

**Returns:** `boolean`

### Matrix4d obliqueZ(double arg0,
double arg1,
Matrix4d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4d` `arg2`

**Returns:** `Matrix4d`

### Matrix4d withLookAtUp(Vector3dc arg0,
Matrix4d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4d` `arg1`

**Returns:** `Matrix4d`

### Matrix4d withLookAtUp(double arg0,
double arg1,
double arg2,
Matrix4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4d` `arg3`

**Returns:** `Matrix4d`

### boolean equals(Matrix4dc arg0,
double arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix4dc.html`*
