---
title: org.joml.Matrix3x2f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Matrix3x2f

`public class Matrix3x2f extends Object implements Matrix3x2fc, Externalizable`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Matrix3x2f

## Fields

### public float m00

### public float m01

### public float m10

### public float m11

### public float m20

### public float m21

## Constructors

### public Matrix3x2f()

### public Matrix3x2f(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

### public Matrix3x2f(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

### public Matrix3x2f(float arg0,
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

### public Matrix3x2f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

## Methods

### public float m00()

**Returns:** `float`

### public float m01()

**Returns:** `float`

### public float m10()

**Returns:** `float`

### public float m11()

**Returns:** `float`

### public float m20()

**Returns:** `float`

### public float m21()

**Returns:** `float`

### public Matrix3x2f set(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f set(Matrix2fc arg0)

**Parameters:**
- `Matrix2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f mul(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f mul(Matrix3x2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f mulLocal(Matrix3x2fc arg0)

**Parameters:**
- `Matrix3x2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f mulLocal(Matrix3x2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f set(float arg0,
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

**Returns:** `Matrix3x2f`

### public Matrix3x2f set(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `Matrix3x2f`

### public float determinant()

**Returns:** `float`

### public Matrix3x2f invert()

**Returns:** `Matrix3x2f`

### public Matrix3x2f invert(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translation(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translation(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f setTranslation(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f setTranslation(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translate(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translate(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translate(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translate(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translateLocal(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translateLocal(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translateLocal(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f translateLocal(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public Matrix3x2f get(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

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

### public FloatBuffer get3x3(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public FloatBuffer get3x3(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

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

### public FloatBuffer get4x4(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public FloatBuffer get4x4(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

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

### public Matrix3x2fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2fc`

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

### public float[] get3x3(float[] floats,
int int0)

**Parameters:**
- `float[]` `floats`
- `int` `int0`

**Returns:** `float[]`

### public float[] get3x3(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `float[]`

### public float[] get4x4(float[] floats,
int int0)

**Parameters:**
- `float[]` `floats`
- `int` `int0`

**Returns:** `float[]`

### public float[] get4x4(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `float[]`

### public Matrix3x2f set(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f set(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f setFromAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f zero()

**Returns:** `Matrix3x2f`

### public Matrix3x2f identity()

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scale(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleLocal(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleLocal(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleLocal(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleLocal(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAround(float arg0,
float arg1,
float arg2,
float arg3,
Matrix3x2f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix3x2f` `arg4`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAround(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAround(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAround(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAroundLocal(float arg0,
float arg1,
float arg2,
float arg3,
Matrix3x2f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix3x2f` `arg4`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAroundLocal(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAroundLocal(float arg0,
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

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaleAroundLocal(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaling(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f scaling(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotation(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transform(Vector3f arg0,
Vector3f arg1)

**Parameters:**
- `Vector3f` `arg0`
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

### public Vector2f transformPosition(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f transformPosition(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Vector2f transformPosition(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### public Vector2f transformDirection(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public Vector2f transformDirection(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### public Vector2f transformDirection(float arg0,
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

### public Matrix3x2f rotate(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotate(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateLocal(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateLocal(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateAbout(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateAbout(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateTo(Vector2fc arg0,
Vector2fc arg1,
Matrix3x2f arg2)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### public Matrix3x2f rotateTo(Vector2fc arg0,
Vector2fc arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f view(float arg0,
float arg1,
float arg2,
float arg3,
Matrix3x2f arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Matrix3x2f` `arg4`

**Returns:** `Matrix3x2f`

### public Matrix3x2f view(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3x2f`

### public Matrix3x2f setView(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Matrix3x2f`

### public Vector2f origin(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### public float[] viewArea(float[] floats)

**Parameters:**
- `float[]` `floats`

**Returns:** `float[]`

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

### public Vector2f unproject(float float8,
float float10,
int[] ints,
Vector2f vector2f)

**Parameters:**
- `float` `float8`
- `float` `float10`
- `int[]` `ints`
- `Vector2f` `vector2f`

**Returns:** `Vector2f`

### public Vector2f unprojectInv(float float1,
float float3,
int[] ints,
Vector2f vector2f)

**Parameters:**
- `float` `float1`
- `float` `float3`
- `int[]` `ints`
- `Vector2f` `vector2f`

**Returns:** `Vector2f`

### public Matrix3x2f shearX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f shearX(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f shearY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Matrix3x2f`

### public Matrix3x2f shearY(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### public Matrix3x2f span(Vector2f arg0,
Vector2f arg1,
Vector2f arg2)

**Parameters:**
- `Vector2f` `arg0`
- `Vector2f` `arg1`
- `Vector2f` `arg2`

**Returns:** `Matrix3x2f`

### public boolean testPoint(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### public boolean testCircle(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `boolean`

### public boolean testAar(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `boolean`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public boolean equals(Matrix3x2fc arg0,
float arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### public boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3x2f.html`*
