---
title: org.joml.Matrix3d
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix3d

`public class Matrix3d extends Object implements Externalizable, Matrix3dc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix3d

## Fields

### public double m00

### public double m01

### public double m02

### public double m10

### public double m11

### public double m12

### public double m20

### public double m21

### public double m22

## Constructors

### public Matrix3d()

### public Matrix3d(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

### public Matrix3d(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix3d(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

### public Matrix3d(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

### public Matrix3d(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

### public Matrix3d(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

### public Matrix3d(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8)

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

### public Matrix3d(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

### public Matrix3d(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`

## Methods

### public double m00()

**Returns:** `double`

### public double m01()

**Returns:** `double`

### public double m02()

**Returns:** `double`

### public double m10()

**Returns:** `double`

### public double m11()

**Returns:** `double`

### public double m12()

**Returns:** `double`

### public double m20()

**Returns:** `double`

### public double m21()

**Returns:** `double`

### public double m22()

**Returns:** `double`

### public Matrix3d m00(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m01(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m02(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m10(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m11(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m12(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m20(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m21(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d m22(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d setTransposed(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d setTransposed(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix4x3dc arg0)

**Parameters:**
- `Matrix4x3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d mul(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d mul(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d mulLocal(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d mulLocal(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d mul(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d mul(Matrix3fc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d set(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
double arg6,
double arg7,
double arg8)

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

**Returns:** `Matrix3d`

### public Matrix3d set(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `Matrix3d`

### public Matrix3d set(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `Matrix3d`

### public double determinant()

**Returns:** `double`

### public Matrix3d invert()

**Returns:** `Matrix3d`

### public Matrix3d invert(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d transpose()

**Returns:** `Matrix3d`

### public Matrix3d transpose(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

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

### public DoubleBuffer get(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### public DoubleBuffer get(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### public ByteBuffer getFloats(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer getFloats(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public Matrix3dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3dc`

### public double[] get(double[] doubles,
int int0)

**Parameters:**
- `double[]` `doubles`
- `int` `int0`

**Returns:** `double[]`

### public double[] get(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `double[]`

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

### public Matrix3d set(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d setFloats(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d set(Vector3dc arg0,
Vector3dc arg1,
Vector3dc arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Vector3dc` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d zero()

**Returns:** `Matrix3d`

### public Matrix3d identity()

**Returns:** `Matrix3d`

### public Matrix3d scaling(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d scaling(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d scaling(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d scale(Vector3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d scale(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d scale(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d scale(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d scale(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d scale(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d scaleLocal(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d scaleLocal(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotation(double arg0,
Vector3dc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotation(double arg0,
Vector3fc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotation(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotation(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotation(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotationX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotationY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotationZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotationXYZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotationZYX(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotationYXZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotation(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotation(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3d`

### public Vector3d transform(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transform(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

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

### public Vector3d transform(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformTranspose(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformTranspose(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Vector3d transformTranspose(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

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

### public Matrix3d rotateX(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateY(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateZ(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateXYZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotateXYZ(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotateZYX(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotateZYX(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotateYXZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateYXZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotateYXZ(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
double arg1,
double arg2,
double arg3,
Matrix3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix3d` `arg4`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(double arg0,
double arg1,
double arg2,
double arg3,
Matrix3d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix3d` `arg4`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalX(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalY(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalZ(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocalZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(Quaternionfc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateLocal(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotate(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotate(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotate(Quaternionfc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotate(AxisAngle4f arg0,
Matrix3d arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d rotate(AxisAngle4d arg0,
Matrix3d arg1)

**Parameters:**
- `AxisAngle4d` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
Vector3dc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
Vector3fc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotate(double arg0,
Vector3fc arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Vector3d getRow(int arg0,
Vector3d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Matrix3d setRow(int arg0,
Vector3dc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d setRow(int arg0,
double arg1,
double arg2,
double arg3)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3d`

### public Vector3d getColumn(int arg0,
Vector3d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Matrix3d setColumn(int arg0,
Vector3dc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d setColumn(int arg0,
double arg1,
double arg2,
double arg3)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3d`

### public double get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### public Matrix3d set(int arg0,
int arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public double getRowColumn(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### public Matrix3d setRowColumn(int arg0,
int arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d normal()

**Returns:** `Matrix3d`

### public Matrix3d normal(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d cofactor()

**Returns:** `Matrix3d`

### public Matrix3d cofactor(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d lookAlong(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d lookAlong(Vector3dc arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d lookAlong(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix3d` `arg6`

**Returns:** `Matrix3d`

### public Matrix3d lookAlong(double arg0,
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

**Returns:** `Matrix3d`

### public Matrix3d setLookAlong(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d setLookAlong(double arg0,
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

**Returns:** `Matrix3d`

### public Vector3d getScale(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d positiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d positiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d positiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix3dc arg0,
double arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### public Matrix3d swap(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d add(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d add(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d sub(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d sub(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d mulComponentWise(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d mulComponentWise(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d setSkewSymmetric(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d lerp(Matrix3dc arg0,
double arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `double` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d lerp(Matrix3dc arg0,
double arg1,
Matrix3d arg2)

**Parameters:**
- `Matrix3dc` `arg0`
- `double` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotateTowards(Vector3dc arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d rotateTowards(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotateTowards(double arg0,
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

**Returns:** `Matrix3d`

### public Matrix3d rotateTowards(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Matrix3d arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Matrix3d` `arg6`

**Returns:** `Matrix3d`

### public Matrix3d rotationTowards(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d rotationTowards(double arg0,
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

**Returns:** `Matrix3d`

### public Vector3d getEulerAnglesZYX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Matrix3d obliqueZ(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d obliqueZ(double arg0,
double arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d reflect(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### public Matrix3d reflect(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d reflect(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d reflect(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d reflect(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d reflect(Vector3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### public Matrix3d reflection(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3d`

### public Matrix3d reflection(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `Matrix3d`

### public Matrix3d reflection(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Matrix3d`

### public boolean isFinite()

**Returns:** `boolean`

### public double quadraticFormProduct(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `double`

### public double quadraticFormProduct(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `double`

### public double quadraticFormProduct(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3d.html`*
