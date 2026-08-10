---
title: org.joml.Matrix2d
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix2d

`public class Matrix2d extends Object implements Externalizable, Matrix2dc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix2d

## Fields

### public double m00

### public double m01

### public double m10

### public double m11

## Constructors

### public Matrix2d()

### public Matrix2d(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

### public Matrix2d(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix2d(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

### public Matrix2d(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

### public Matrix2d(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

### public Matrix2d(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

### public Matrix2d(Vector2dc arg0,
Vector2dc arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`

## Methods

### public double m00()

**Returns:** `double`

### public double m01()

**Returns:** `double`

### public double m10()

**Returns:** `double`

### public double m11()

**Returns:** `double`

### public Matrix2d m00(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d m01(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d m10(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d m11(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix3x2dc arg0)

**Parameters:**
- `Matrix3x2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d mul(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d mul(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d mul(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d mul(Matrix2fc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d mulLocal(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d mulLocal(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d set(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix2d`

### public Matrix2d set(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `Matrix2d`

### public Matrix2d set(Vector2dc arg0,
Vector2dc arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`

**Returns:** `Matrix2d`

### public double determinant()

**Returns:** `double`

### public Matrix2d invert()

**Returns:** `Matrix2d`

### public Matrix2d invert(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d transpose()

**Returns:** `Matrix2d`

### public Matrix2d transpose(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix2d get(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### public Matrix3x2d get(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public double getRotation()

**Returns:** `double`

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

### public DoubleBuffer getTransposed(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### public DoubleBuffer getTransposed(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

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

### public Matrix2dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2dc`

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

### public Matrix2d set(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d zero()

**Returns:** `Matrix2d`

### public Matrix2d identity()

**Returns:** `Matrix2d`

### public Matrix2d scale(Vector2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d scale(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d scale(double arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### public Matrix2d scale(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d scale(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d scale(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d scaleLocal(double arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### public Matrix2d scaleLocal(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d scaling(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d scaling(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d scaling(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d rotation(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Vector2d transform(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d transform(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Vector2d transform(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### public Vector2d transformTranspose(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d transformTranspose(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Vector2d transformTranspose(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

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

### public Matrix2d rotate(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d rotate(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d rotateLocal(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d rotateLocal(double arg0,
Matrix2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Vector2d getRow(int arg0,
Vector2d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Matrix2d setRow(int arg0,
Vector2dc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2dc` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d setRow(int arg0,
double arg1,
double arg2)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix2d`

### public Vector2d getColumn(int arg0,
Vector2d arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Matrix2d setColumn(int arg0,
Vector2dc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2dc` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d setColumn(int arg0,
double arg1,
double arg2)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix2d`

### public double get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `double`

### public Matrix2d set(int arg0,
int arg1,
double arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `double` `arg2`

**Returns:** `Matrix2d`

### public Matrix2d normal()

**Returns:** `Matrix2d`

### public Matrix2d normal(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### public Vector2d getScale(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d positiveX(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d normalizedPositiveX(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d positiveY(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d normalizedPositiveY(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix2dc arg0,
double arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### public Matrix2d swap(Matrix2d arg0)

**Parameters:**
- `Matrix2d` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d add(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d add(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d sub(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d sub(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d mulComponentWise(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix2d`

### public Matrix2d mulComponentWise(Matrix2dc arg0,
Matrix2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Matrix2d` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d lerp(Matrix2dc arg0,
double arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `double` `arg1`

**Returns:** `Matrix2d`

### public Matrix2d lerp(Matrix2dc arg0,
double arg1,
Matrix2d arg2)

**Parameters:**
- `Matrix2dc` `arg0`
- `double` `arg1`
- `Matrix2d` `arg2`

**Returns:** `Matrix2d`

### public boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix2d.html`*
