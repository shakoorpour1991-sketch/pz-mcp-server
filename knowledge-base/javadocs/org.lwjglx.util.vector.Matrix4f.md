---
title: org.lwjglx.util.vector.Matrix4f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Matrix4f

`public final class Matrix4f extends Matrix implements Serializable`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Matrix
- org.lwjglx.util.vector.Matrix4f

## Fields

### public float m00

### public float m01

### public float m02

### public float m03

### public float m10

### public float m11

### public float m12

### public float m13

### public float m20

### public float m21

### public float m22

### public float m23

### public float m30

### public float m31

### public float m32

### public float m33

## Constructors

### public Matrix4f()

### public Matrix4f(Matrix4f matrix4f1)

**Parameters:**
- `Matrix4f` `matrix4f1`

## Methods

### public String toString()

**Returns:** `String`

### public Matrix setIdentity()

**Returns:** `Matrix`

### public static Matrix4f setIdentity(Matrix4f matrix4f)

**Parameters:**
- `Matrix4f` `matrix4f`

**Returns:** `Matrix4f`

### public Matrix setZero()

**Returns:** `Matrix`

### public static Matrix4f setZero(Matrix4f matrix4f)

**Parameters:**
- `Matrix4f` `matrix4f`

**Returns:** `Matrix4f`

### public Matrix4f load(Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public static Matrix4f load(Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public Matrix load(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Matrix`

### public Matrix loadTranspose(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Matrix`

### public Matrix store(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Matrix`

### public Matrix storeTranspose(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Matrix`

### public Matrix store3f(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Matrix`

### public static Matrix4f add(Matrix4f matrix4f2,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f2`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public static Matrix4f sub(Matrix4f matrix4f2,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f2`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public static Matrix4f mul(Matrix4f matrix4f2,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f2`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public static Vector4f transform(Matrix4f matrix4f,
Vector4f vector4f1,
Vector4f vector4f0)

**Parameters:**
- `Matrix4f` `matrix4f`
- `Vector4f` `vector4f1`
- `Vector4f` `vector4f0`

**Returns:** `Vector4f`

### public Matrix transpose()

**Returns:** `Matrix`

### public Matrix4f translate(Vector2f vector2f)

**Parameters:**
- `Vector2f` `vector2f`

**Returns:** `Matrix4f`

### public Matrix4f translate(Vector3f vector3f)

**Parameters:**
- `Vector3f` `vector3f`

**Returns:** `Matrix4f`

### public Matrix4f scale(Vector3f vector3f)

**Parameters:**
- `Vector3f` `vector3f`

**Returns:** `Matrix4f`

### public static Matrix4f scale(Vector3f vector3f,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Vector3f` `vector3f`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public Matrix4f rotate(float float0,
Vector3f vector3f)

**Parameters:**
- `float` `float0`
- `Vector3f` `vector3f`

**Returns:** `Matrix4f`

### public Matrix4f rotate(float float0,
Vector3f vector3f,
Matrix4f matrix4f1)

**Parameters:**
- `float` `float0`
- `Vector3f` `vector3f`
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public static Matrix4f rotate(float float1,
Vector3f vector3f,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `float` `float1`
- `Vector3f` `vector3f`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public Matrix4f translate(Vector3f vector3f,
Matrix4f matrix4f1)

**Parameters:**
- `Vector3f` `vector3f`
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public static Matrix4f translate(Vector3f vector3f,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Vector3f` `vector3f`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public Matrix4f translate(Vector2f vector2f,
Matrix4f matrix4f1)

**Parameters:**
- `Vector2f` `vector2f`
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public static Matrix4f translate(Vector2f vector2f,
Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Vector2f` `vector2f`
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public Matrix4f transpose(Matrix4f matrix4f1)

**Parameters:**
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public static Matrix4f transpose(Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

### public float determinant()

**Returns:** `float`

### public Matrix invert()

**Returns:** `Matrix`

### public static Matrix4f invert(Matrix4f matrix4f0,
Matrix4f matrix4f1)

**Parameters:**
- `Matrix4f` `matrix4f0`
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public Matrix negate()

**Returns:** `Matrix`

### public Matrix4f negate(Matrix4f matrix4f1)

**Parameters:**
- `Matrix4f` `matrix4f1`

**Returns:** `Matrix4f`

### public static Matrix4f negate(Matrix4f matrix4f1,
Matrix4f matrix4f0)

**Parameters:**
- `Matrix4f` `matrix4f1`
- `Matrix4f` `matrix4f0`

**Returns:** `Matrix4f`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Matrix4f.html`*
