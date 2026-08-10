---
title: org.joml.Matrix3dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix3dc

`public interface Matrix3dc`

**Kind:** interface · **Package:** org.joml

## Methods

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

### Matrix3d mul(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d mulLocal(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d mul(Matrix3fc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3fc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### double determinant()

**Returns:** `double`

### Matrix3d invert(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d transpose(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

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

### Matrix3dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3dc`

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

### Matrix3d scale(Vector3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d scale(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Matrix3d scale(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d scaleLocal(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Vector3d transform(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transform(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

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

### Vector3d transform(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3d transformTranspose(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformTranspose(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformTranspose(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Matrix3d rotateX(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateY(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateZ(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateXYZ(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Matrix3d rotateZYX(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Matrix3d rotateYXZ(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Matrix3d rotate(double arg0,
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

### Matrix3d rotateLocal(double arg0,
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

### Matrix3d rotateLocalX(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateLocalY(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateLocalZ(double arg0,
Matrix3d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateLocal(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotateLocal(Quaternionfc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotate(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotate(Quaternionfc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotate(AxisAngle4f arg0,
Matrix3d arg1)

**Parameters:**
- `AxisAngle4f` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotate(AxisAngle4d arg0,
Matrix3d arg1)

**Parameters:**
- `AxisAngle4d` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d rotate(double arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### Matrix3d rotate(double arg0,
Vector3fc arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `Vector3fc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### Vector3d getRow(int arg0,
Vector3d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

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

### Matrix3d normal(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d cofactor(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix3d lookAlong(Vector3dc arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### Matrix3d lookAlong(double arg0,
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

### Vector3d getScale(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

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

### Matrix3d add(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d sub(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d mulComponentWise(Matrix3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d lerp(Matrix3dc arg0,
double arg1,
Matrix3d arg2)

**Parameters:**
- `Matrix3dc` `arg0`
- `double` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### Matrix3d rotateTowards(Vector3dc arg0,
Vector3dc arg1,
Matrix3d arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### Matrix3d rotateTowards(double arg0,
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

### Vector3d getEulerAnglesZYX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Matrix3d obliqueZ(double arg0,
double arg1,
Matrix3d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3d` `arg2`

**Returns:** `Matrix3d`

### boolean equals(Matrix3dc arg0,
double arg1)

**Parameters:**
- `Matrix3dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### Matrix3d reflect(double arg0,
double arg1,
double arg2,
Matrix3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3d` `arg3`

**Returns:** `Matrix3d`

### Matrix3d reflect(Quaterniondc arg0,
Matrix3d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### Matrix3d reflect(Vector3dc arg0,
Matrix3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Matrix3d` `arg1`

**Returns:** `Matrix3d`

### boolean isFinite()

**Returns:** `boolean`

### double quadraticFormProduct(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `double`

### double quadraticFormProduct(Vector3dc arg0)

**Parameters:**
- `Vector3dc` `arg0`

**Returns:** `double`

### double quadraticFormProduct(Vector3fc arg0)

**Parameters:**
- `Vector3fc` `arg0`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3dc.html`*
