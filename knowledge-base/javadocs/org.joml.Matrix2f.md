---
title: org.joml.Matrix2f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix2f

`public class Matrix2f extends Object implements Externalizable, Matrix2fc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix2f

## Fields

### public float m00

### public float m01

### public float m10

### public float m11

## Constructors

### public Matrix2f()

### public Matrix2f(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix2f(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

### public Matrix2f(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

### public Matrix2f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

### public Matrix2f(Vector2fc arg0,
Vector2fc arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`

## Methods

### public float m00()

**Returns:** `float`

### public float m01()

**Returns:** `float`

### public float m10()

**Returns:** `float`

### public float m11()

**Returns:** `float`

### public Matrix2f m00(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f m01(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f m10(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f m11(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f set(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f set(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f mul(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f mul(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f mulLocal(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f mulLocal(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f set(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix2f`

### public Matrix2f set(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `Matrix2f`

### public Matrix2f set(Vector2fc arg0,
Vector2fc arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`

**Returns:** `Matrix2f`

### public float determinant()

**Returns:** `float`

### public Matrix2f invert()

**Returns:** `Matrix2f`

### public Matrix2f invert(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f transpose()

**Returns:** `Matrix2f`

### public Matrix2f transpose(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix2f get(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### public Matrix3x2f get(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public float getRotation()

**Returns:** `float`

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

### public Matrix2fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2fc`

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

### public Matrix2f set(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f zero()

**Returns:** `Matrix2f`

### public Matrix2f identity()

**Returns:** `Matrix2f`

### public Matrix2f scale(Vector2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f scale(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f scale(float arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### public Matrix2f scale(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f scale(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f scale(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f scaleLocal(float arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### public Matrix2f scaleLocal(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f scaling(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f scaling(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f scaling(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f rotation(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Vector2f transform(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f transform(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Vector2f transform(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### public Vector2f transformTranspose(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f transformTranspose(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Vector2f transformTranspose(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

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

### public Matrix2f rotate(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f rotate(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f rotateLocal(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f rotateLocal(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Vector2f getRow(int arg0,
Vector2f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Matrix2f setRow(int arg0,
Vector2fc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2fc` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f setRow(int arg0,
float arg1,
float arg2)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix2f`

### public Vector2f getColumn(int arg0,
Vector2f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Matrix2f setColumn(int arg0,
Vector2fc arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2fc` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f setColumn(int arg0,
float arg1,
float arg2)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix2f`

### public float get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### public Matrix2f set(int arg0,
int arg1,
float arg2)

**Parameters:**
- `int` `arg0`
- `int` `arg1`
- `float` `arg2`

**Returns:** `Matrix2f`

### public Matrix2f normal()

**Returns:** `Matrix2f`

### public Matrix2f normal(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### public Vector2f getScale(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f positiveX(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f normalizedPositiveX(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f positiveY(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f normalizedPositiveY(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix2fc arg0,
float arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### public Matrix2f swap(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f add(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f add(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f sub(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f sub(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f mulComponentWise(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix2f`

### public Matrix2f mulComponentWise(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f lerp(Matrix2fc arg0,
float arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `float` `arg1`

**Returns:** `Matrix2f`

### public Matrix2f lerp(Matrix2fc arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `Matrix2fc` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### public boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix2f.html`*
