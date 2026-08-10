---
title: org.joml.Matrix3f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix3f

`public class Matrix3f extends Object implements Externalizable, Matrix3fc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix3f

## Fields

### public float m00

### public float m01

### public float m02

### public float m10

### public float m11

### public float m12

### public float m20

### public float m21

### public float m22

## Constructors

### public Matrix3f()

### public Matrix3f(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix3f(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

### public Matrix3f(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

### public Matrix3f(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8)

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

### public Matrix3f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

### public Matrix3f(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`

## Methods

### public float m00()

**Returns:** `float`

### public float m01()

**Returns:** `float`

### public float m02()

**Returns:** `float`

### public float m10()

**Returns:** `float`

### public float m11()

**Returns:** `float`

### public float m12()

**Returns:** `float`

### public float m20()

**Returns:** `float`

### public float m21()

**Returns:** `float`

### public float m22()

**Returns:** `float`

### public Matrix3f m00(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m01(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m02(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m10(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m11(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m12(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m20(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m21(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f m22(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f setTransposed(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Matrix4x3fc arg0)

**Parameters:**
- `Matrix4x3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f mul(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f mul(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f mulLocal(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f mulLocal(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f set(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
float arg6,
float arg7,
float arg8)

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

**Returns:** `Matrix3f`

### public Matrix3f set(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `Matrix3f`

### public Matrix3f set(Vector3fc arg0,
Vector3fc arg1,
Vector3fc arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Vector3fc` `arg2`

**Returns:** `Matrix3f`

### public float determinant()

**Returns:** `float`

### public Matrix3f invert()

**Returns:** `Matrix3f`

### public Matrix3f invert(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f transpose()

**Returns:** `Matrix3f`

### public Matrix3f transpose(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### public AxisAngle4f getRotation(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `AxisAngle4f`

### public Quaternionf getUnnormalizedRotation(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf getNormalizedRotation(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaterniond getUnnormalizedRotation(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond getNormalizedRotation(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public FloatBuffer get(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public FloatBuffer get(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### public ByteBuffer get(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer get(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public FloatBuffer get3x4(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public FloatBuffer get3x4(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### public ByteBuffer get3x4(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer get3x4(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public FloatBuffer getTransposed(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public FloatBuffer getTransposed(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

### public ByteBuffer getTransposed(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer getTransposed(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public Matrix3fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3fc`

### public float[] get(float[] floats,
int int0)

**Parameters:**
- `float[]` `floats`
- `int` `int0`

**Returns:** `float[]`

### public float[] get(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `float[]`

### public Matrix3f set(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f zero()

**Returns:** `Matrix3f`

### public Matrix3f identity()

**Returns:** `Matrix3f`

### public Matrix3f scale(Vector3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f scale(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f scale(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f scale(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f scale(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f scale(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f scaleLocal(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f scaleLocal(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f scaling(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f scaling(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f scaling(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotation(float arg0,
Vector3fc arg1)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotation(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotation(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotationX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotationY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotationZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotationXYZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotationZYX(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotationYXZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotation(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transform(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transform(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformTranspose(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformTranspose(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transformTranspose(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public void writeExternal(ObjectOutput arg0)
throws IOException

**Parameters:**
- `ObjectOutput` `arg0`

**Returns:** `void`

### public void readExternal(ObjectInput arg0)
throws IOException

**Parameters:**
- `ObjectInput` `arg0`

**Returns:** `void`

### public Matrix3f rotateX(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateY(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateZ(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateXYZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateXYZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotateXYZ(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotateZYX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateZYX(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotateZYX(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotateYXZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateYXZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotateYXZ(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotate(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotate(float arg0,
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

### public Matrix3f rotateLocal(float arg0,
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

### public Matrix3f rotateLocal(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalX(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalY(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalZ(float arg0,
Matrix3f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocalZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotate(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotate(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocal(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateLocal(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotate(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f rotate(AxisAngle4f arg0,
Matrix3f arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotate(float arg0,
Vector3fc arg1)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotate(float arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f lookAlong(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f lookAlong(Vector3fc arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f lookAlong(float arg0,
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

### public Matrix3f lookAlong(float arg0,
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

**Returns:** `Matrix3f`

### public Matrix3f setLookAlong(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f setLookAlong(float arg0,
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

**Returns:** `Matrix3f`

### public Vector3f getRow(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Matrix3f setRow(int arg0,
Vector3fc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f setRow(int arg0,
float arg1,
float arg2,
float arg3)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3f`

### public Vector3f getColumn(int arg0,
Vector3f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Matrix3f setColumn(int arg0,
Vector3fc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f setColumn(int arg0,
float arg1,
float arg2,
float arg3)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3f`

### public float get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### public Matrix3f set(int arg0,
int arg1,
float arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public float getRowColumn(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### public Matrix3f setRowColumn(int arg0,
int arg1,
float arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f normal()

**Returns:** `Matrix3f`

### public Matrix3f normal(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f cofactor()

**Returns:** `Matrix3f`

### public Matrix3f cofactor(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Vector3f getScale(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f positiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f positiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f positiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix3fc arg0,
float arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### public Matrix3f swap(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f add(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f add(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f sub(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f sub(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f mulComponentWise(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f mulComponentWise(Matrix3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f setSkewSymmetric(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f lerp(Matrix3fc arg0,
float arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `float` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f lerp(Matrix3fc arg0,
float arg1,
Matrix3f arg2)

**Parameters:**
- `Matrix3fc` `arg0`
- `float` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotateTowards(Vector3fc arg0,
Vector3fc arg1,
Matrix3f arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f rotateTowards(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotateTowards(float arg0,
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

**Returns:** `Matrix3f`

### public Matrix3f rotateTowards(float arg0,
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

### public Matrix3f rotationTowards(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f rotationTowards(float arg0,
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

**Returns:** `Matrix3f`

### public Vector3f getEulerAnglesZYX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Matrix3f obliqueZ(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f obliqueZ(float arg0,
float arg1,
Matrix3f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3f` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f reflect(float arg0,
float arg1,
float arg2,
Matrix3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3f` `arg3`

**Returns:** `Matrix3f`

### public Matrix3f reflect(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f reflect(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f reflect(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f reflect(Quaternionfc arg0,
Matrix3f arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f reflect(Vector3fc arg0,
Matrix3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Matrix3f` `arg1`

**Returns:** `Matrix3f`

### public Matrix3f reflection(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3f`

### public Matrix3f reflection(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `Matrix3f`

### public Matrix3f reflection(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3f`

### public boolean isFinite()

**Returns:** `boolean`

### public float quadraticFormProduct(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `float`

### public float quadraticFormProduct(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3f.html`*
