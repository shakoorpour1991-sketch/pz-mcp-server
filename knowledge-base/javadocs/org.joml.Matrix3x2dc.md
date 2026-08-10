---
title: org.joml.Matrix3x2dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix3x2dc

`public interface Matrix3x2dc`

**Kind:** interface · **Package:** org.joml

## Methods

### double m00()

**Returns:** `double`

### double m01()

**Returns:** `double`

### double m10()

**Returns:** `double`

### double m11()

**Returns:** `double`

### double m20()

**Returns:** `double`

### double m21()

**Returns:** `double`

### Matrix3x2d mul(Matrix3x2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d mulLocal(Matrix3x2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### double determinant()

**Returns:** `double`

### Matrix3x2d invert(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

### Matrix3x2d translate(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### Matrix3x2d translate(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d translateLocal(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d translateLocal(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### Matrix3x2d get(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

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

### DoubleBuffer get3x3(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer get3x3(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

### ByteBuffer get3x3(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer get3x3(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

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

### Matrix3x2dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2dc`

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

### double[] get3x3(double[] var1,
int var2)

**Parameters:**
- `double[]` `var1`
- `int` `var2`

**Returns:** `double[]`

### double[] get3x3(double[] var1)

**Parameters:**
- `double[]` `var1`

**Returns:** `double[]`

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

### Matrix3x2d scale(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### Matrix3x2d scale(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d scale(Vector2fc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleLocal(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleLocal(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleAroundLocal(double arg0,
double arg1,
double arg2,
double arg3,
Matrix3x2d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix3x2d` `arg4`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleAroundLocal(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

### Matrix3x2d scale(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleAround(double arg0,
double arg1,
double arg2,
double arg3,
Matrix3x2d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix3x2d` `arg4`

**Returns:** `Matrix3x2d`

### Matrix3x2d scaleAround(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

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

### Vector2d transformPosition(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d transformPosition(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d transformPosition(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d transformDirection(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d transformDirection(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d transformDirection(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Matrix3x2d rotate(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d rotateLocal(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### Matrix3x2d rotateAbout(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

### Matrix3x2d rotateTo(Vector2dc arg0,
Vector2dc arg1,
Matrix3x2d arg2)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### Matrix3x2d view(double arg0,
double arg1,
double arg2,
double arg3,
Matrix3x2d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Matrix3x2d` `arg4`

**Returns:** `Matrix3x2d`

### Vector2d origin(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### double[] viewArea(double[] var1)

**Parameters:**
- `double[]` `var1`

**Returns:** `double[]`

### Vector2d positiveX(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d normalizedPositiveX(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d positiveY(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d normalizedPositiveY(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d unproject(double var1,
double var3,
int[] var5,
Vector2d var6)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `int[]` `var5`
- `Vector2d` `var6`

**Returns:** `Vector2d`

### Vector2d unprojectInv(double var1,
double var3,
int[] var5,
Vector2d var6)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `int[]` `var5`
- `Vector2d` `var6`

**Returns:** `Vector2d`

### boolean testPoint(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean testCircle(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `boolean`

### boolean testAar(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `boolean`

### boolean equals(Matrix3x2dc arg0,
double arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3x2dc.html`*
