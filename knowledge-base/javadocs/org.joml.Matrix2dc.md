---
title: org.joml.Matrix2dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix2dc

`public interface Matrix2dc`

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

### Matrix2d mul(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d mul(Matrix2fc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d mulLocal(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### double determinant()

**Returns:** `double`

### Matrix2d invert(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### Matrix2d transpose(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### Matrix2d get(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### Matrix3x2d get(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

### Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### double getRotation()

**Returns:** `double`

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

### Matrix2dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2dc`

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

### Matrix2d scale(Vector2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d scale(double arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### Matrix2d scale(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d scaleLocal(double arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### Vector2d transform(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d transform(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d transform(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d transformTranspose(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d transformTranspose(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d transformTranspose(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Matrix2d rotate(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d rotateLocal(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Vector2d getRow(int arg0,
Vector2d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d getColumn(int arg0,
Vector2d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### double get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### Matrix2d normal(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### Vector2d getScale(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

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

### Matrix2d add(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d sub(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d mulComponentWise(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### Matrix2d lerp(Matrix2dc arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `Matrix2dc` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### boolean equals(Matrix2dc arg0,
double arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix2dc.html`*
