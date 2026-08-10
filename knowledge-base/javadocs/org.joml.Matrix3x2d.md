---
title: org.joml.Matrix3x2d
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix3x2d

`public class Matrix3x2d extends Object implements Matrix3x2dc, Externalizable`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix3x2d

## Fields

### public double m00

### public double m01

### public double m10

### public double m11

### public double m20

### public double m21

## Constructors

### public Matrix3x2d()

### public Matrix3x2d(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

### public Matrix3x2d(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix3x2d(Matrix3x2dc arg0)

**Parameters:**
- `Matrix3x2dc` `arg0`

### public Matrix3x2d(double arg0,
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

### public Matrix3x2d(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

## Methods

### public double m00()

**Returns:** `double`

### public double m01()

**Returns:** `double`

### public double m10()

**Returns:** `double`

### public double m11()

**Returns:** `double`

### public double m20()

**Returns:** `double`

### public double m21()

**Returns:** `double`

### public Matrix3x2d set(Matrix3x2dc arg0)

**Parameters:**
- `Matrix3x2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d set(Matrix2dc arg0)

**Parameters:**
- `Matrix2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d mul(Matrix3x2dc arg0)

**Parameters:**
- `Matrix3x2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d mul(Matrix3x2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d mulLocal(Matrix3x2dc arg0)

**Parameters:**
- `Matrix3x2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d mulLocal(Matrix3x2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d set(double arg0,
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

**Returns:** `Matrix3x2d`

### public Matrix3x2d set(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `Matrix3x2d`

### public double determinant()

**Returns:** `double`

### public Matrix3x2d invert()

**Returns:** `Matrix3x2d`

### public Matrix3x2d invert(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translation(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translation(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d setTranslation(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d setTranslation(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translate(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translate(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translate(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translate(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translateLocal(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translateLocal(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translateLocal(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d translateLocal(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix3x2d get(Matrix3x2d arg0)

**Parameters:**
- `Matrix3x2d` `arg0`

**Returns:** `Matrix3x2d`

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

### public DoubleBuffer get3x3(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### public DoubleBuffer get3x3(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

### public ByteBuffer get3x3(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer get3x3(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public DoubleBuffer get4x4(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### public DoubleBuffer get4x4(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

### public ByteBuffer get4x4(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public ByteBuffer get4x4(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### public Matrix3x2dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2dc`

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

### public double[] get3x3(double[] doubles,
int int0)

**Parameters:**
- `double[]` `doubles`
- `int` `int0`

**Returns:** `double[]`

### public double[] get3x3(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `double[]`

### public double[] get4x4(double[] doubles,
int int0)

**Parameters:**
- `double[]` `doubles`
- `int` `int0`

**Returns:** `double[]`

### public double[] get4x4(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `double[]`

### public Matrix3x2d set(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d zero()

**Returns:** `Matrix3x2d`

### public Matrix3x2d identity()

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(Vector2dc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(Vector2fc arg0,
Matrix3x2d arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scale(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleLocal(double arg0,
double arg1,
Matrix3x2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleLocal(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleLocal(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleLocal(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAround(double arg0,
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

### public Matrix3x2d scaleAround(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAround(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAround(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAroundLocal(double arg0,
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

### public Matrix3x2d scaleAroundLocal(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAroundLocal(double arg0,
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

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaleAroundLocal(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaling(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d scaling(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotation(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

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

### public Vector2d transformPosition(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d transformPosition(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Vector2d transformPosition(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### public Vector2d transformDirection(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public Vector2d transformDirection(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### public Vector2d transformDirection(double arg0,
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

### public Matrix3x2d rotate(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotate(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateLocal(double arg0,
Matrix3x2d arg1)

**Parameters:**
- `double` `arg0`
- `Matrix3x2d` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateLocal(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateAbout(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateAbout(double arg0,
double arg1,
double arg2,
Matrix3x2d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Matrix3x2d` `arg3`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateTo(Vector2dc arg0,
Vector2dc arg1,
Matrix3x2d arg2)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`
- `Matrix3x2d` `arg2`

**Returns:** `Matrix3x2d`

### public Matrix3x2d rotateTo(Vector2dc arg0,
Vector2dc arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`

**Returns:** `Matrix3x2d`

### public Matrix3x2d view(double arg0,
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

### public Matrix3x2d view(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3x2d`

### public Matrix3x2d setView(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Matrix3x2d`

### public Vector2d origin(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### public double[] viewArea(double[] doubles)

**Parameters:**
- `double[]` `doubles`

**Returns:** `double[]`

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

### public Vector2d unproject(double double8,
double double10,
int[] ints,
Vector2d vector2d)

**Parameters:**
- `double` `double8`
- `double` `double10`
- `int[]` `ints`
- `Vector2d` `vector2d`

**Returns:** `Vector2d`

### public Vector2d unprojectInv(double double1,
double double3,
int[] ints,
Vector2d vector2d)

**Parameters:**
- `double` `double1`
- `double` `double3`
- `int[]` `ints`
- `Vector2d` `vector2d`

**Returns:** `Vector2d`

### public Matrix3x2d span(Vector2d arg0,
Vector2d arg1,
Vector2d arg2)

**Parameters:**
- `Vector2d` `arg0`
- `Vector2d` `arg1`
- `Vector2d` `arg2`

**Returns:** `Matrix3x2d`

### public boolean testPoint(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### public boolean testCircle(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `boolean`

### public boolean testAar(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix3x2dc arg0,
double arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### public boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3x2d.html`*
