---
title: org.joml.Matrix4x3dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix4x3dc

`public interface Matrix4x3dc`

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

### double m00()

**Returns:** `double`

### double m01()

**Returns:** `double`

### double m02()

**Returns:** `double`

### double m10()

**Returns:** `double`

### double m11()

**Returns:** `double`

### double m12()

**Returns:** `double`

### double m20()

**Returns:** `double`

### double m21()

**Returns:** `double`

### double m22()

**Returns:** `double`

### double m30()

**Returns:** `double`

### double m31()

**Returns:** `double`

### double m32()

**Returns:** `double`

### Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4x3d mul(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d mul(Matrix4x3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d mulTranslation(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d mulTranslation(Matrix4x3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d mulOrtho(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d fma(Matrix4x3dc arg0,
double arg1,
Matrix4x3d arg2)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `double` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d fma(Matrix4x3fc arg0,
double arg1,
Matrix4x3d arg2)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `double` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d add(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d add(Matrix4x3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d sub(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d sub(Matrix4x3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d mulComponentWise(Matrix4x3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### double determinant()

**Returns:** `double`

### Matrix4x3d invert(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix4x3d invertOrtho(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix4x3d transpose3x3(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

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

### Matrix4x3d get(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

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

### Matrix4x3dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix4x3dc`

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

### double[] get4x4(double[] var1,
int var2)

**Parameters:**
- `double[]` `var1`
- `int` `var2`

**Returns:** `double[]`

### double[] get4x4(double[] var1)

**Parameters:**
- `double[]` `var1`

**Returns:** `double[]`

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

### DoubleBuffer get4x4(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer get4x4(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### ByteBuffer getTransposedFloats(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer getTransposedFloats(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### double[] getTransposed(double[] var1,
int var2)

**Parameters:**
- `double[]` `var1`
- `int` `var2`

**Returns:** `double[]`

### double[] getTransposed(double[] var1)

**Parameters:**
- `double[]` `var1`

**Returns:** `double[]`

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

### Matrix4x3d scale(Vector3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d scale(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d scale(double arg0,
Matrix4x3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d scaleXY(double arg0,
double arg1,
Matrix4x3d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d scaleLocal(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateTranslation(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateAround(Quaterniondc arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateLocal(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d translate(Vector3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d translate(Vector3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d translate(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d translateLocal(Vector3fc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d translateLocal(Vector3dc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d translateLocal(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateX(double arg0,
Matrix4x3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateY(double arg0,
Matrix4x3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateZ(double arg0,
Matrix4x3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateXYZ(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateZYX(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateYXZ(double arg0,
double arg1,
double arg2,
Matrix4x3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(Quaterniondc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(Quaternionfc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateTranslation(Quaterniondc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateTranslation(Quaternionfc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateLocal(Quaterniondc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateLocal(Quaternionfc arg0,
Matrix4x3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(AxisAngle4f arg0,
Matrix4x3d arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(AxisAngle4d arg0,
Matrix4x3d arg1)

**Parameters:**
- `AxisAngle4d` `arg0`
- `Matrix4x3d` `arg1`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(double arg0,
Vector3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotate(double arg0,
Vector3fc arg1,
Matrix4x3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Vector4d getRow(int arg0,
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

### Matrix4x3d normal(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix3d normal(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d cofactor3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix4x3d cofactor3x3(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix4x3d normalize3x3(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### Matrix3d normalize3x3(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix4x3d reflect(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d reflect(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Matrix4x3d reflect(Quaterniondc arg0,
Vector3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `Quaterniondc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d reflect(Vector3dc arg0,
Vector3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d ortho(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4x3d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4x3d` `arg7`

**Returns:** `Matrix4x3d`

### Matrix4x3d ortho(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
boolean arg6,
Matrix4x3d arg7)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `boolean` `arg6`
- `Matrix4x3d` `arg7`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoSymmetric(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4x3d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4x3d` `arg5`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoSymmetric(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoSymmetricLH(double arg0,
double arg1,
double arg2,
double arg3,
boolean arg4,
Matrix4x3d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `boolean` `arg4`
- `Matrix4x3d` `arg5`

**Returns:** `Matrix4x3d`

### Matrix4x3d orthoSymmetricLH(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d ortho2D(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d ortho2DLH(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAlong(Vector3dc arg0,
Vector3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAlong(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAt(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2,
Matrix4x3d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAt(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4x3d arg9)

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
- `Matrix4x3d` `arg9`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAtLH(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2,
Matrix4x3d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`
- `Matrix4x3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d lookAtLH(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8,
Matrix4x3d arg9)

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
- `Matrix4x3d` `arg9`

**Returns:** `Matrix4x3d`

### Vector4d frustumPlane(int arg0,
Vector4d arg1)

**Parameters:**
- `int` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

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

### Vector3d origin(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Matrix4x3d shadow(Vector4dc arg0,
double arg1,
double arg2,
double arg3,
double arg4,
Matrix4x3d arg5)

**Parameters:**
- `Vector4dc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `Matrix4x3d` `arg5`

**Returns:** `Matrix4x3d`

### Matrix4x3d shadow(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
Matrix4x3d arg8)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `double` `arg6`
- `double` `arg7`
- `Matrix4x3d` `arg8`

**Returns:** `Matrix4x3d`

### Matrix4x3d shadow(Vector4dc arg0,
Matrix4x3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `Matrix4x3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d shadow(double arg0,
double arg1,
double arg2,
double arg3,
Matrix4x3dc arg4,
Matrix4x3d arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3dc` `arg4`
- `Matrix4x3d` `arg5`

**Returns:** `Matrix4x3d`

### Matrix4x3d pick(double var1,
double var3,
double var5,
double var7,
int[] var9,
Matrix4x3d var10)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`
- `double` `var7`
- `int[]` `var9`
- `Matrix4x3d` `var10`

**Returns:** `Matrix4x3d`

### Matrix4x3d arcball(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Matrix4x3d arcball(double arg0,
Vector3dc arg1,
double arg2,
double arg3,
Matrix4x3d arg4)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix4x3d` `arg4`

**Returns:** `Matrix4x3d`

### Matrix4x3d transformAab(double arg0,
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

**Returns:** `Matrix4x3d`

### Matrix4x3d transformAab(Vector3dc arg0,
Vector3dc arg1,
Vector3d arg2,
Vector3d arg3)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3d` `arg2`
- `Vector3d` `arg3`

**Returns:** `Matrix4x3d`

### Matrix4x3d lerp(Matrix4x3dc arg0,
double arg1,
Matrix4x3d arg2)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `double` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateTowards(Vector3dc arg0,
Vector3dc arg1,
Matrix4x3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### Matrix4x3d rotateTowards(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix4x3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix4x3d` `arg6`

**Returns:** `Matrix4x3d`

### Vector3d getEulerAnglesZYX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Matrix4x3d obliqueZ(double arg0,
double arg1,
Matrix4x3d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix4x3d` `arg2`

**Returns:** `Matrix4x3d`

### boolean equals(Matrix4x3dc arg0,
double arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix4x3dc.html`*
