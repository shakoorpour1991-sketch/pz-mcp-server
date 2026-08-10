---
title: org.lwjglx.util.vector.Matrix3f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Matrix3f

`public class Matrix3f extends Matrix implements Serializable`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Matrix
- org.lwjglx.util.vector.Matrix3f

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

## Methods

### public Matrix3f load(Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public static Matrix3f load(Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

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

### public static Matrix3f add(Matrix3f matrix3f2,
Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f2`
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public static Matrix3f sub(Matrix3f matrix3f2,
Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f2`
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public static Matrix3f mul(Matrix3f matrix3f2,
Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f2`
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public static Vector3f transform(Matrix3f matrix3f,
Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Matrix3f` `matrix3f`
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

**Returns:** `Vector3f`

### public Matrix transpose()

**Returns:** `Matrix`

### public Matrix3f transpose(Matrix3f matrix3f1)

**Parameters:**
- `Matrix3f` `matrix3f1`

**Returns:** `Matrix3f`

### public static Matrix3f transpose(Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public float determinant()

**Returns:** `float`

### public String toString()

**Returns:** `String`

### public Matrix invert()

**Returns:** `Matrix`

### public static Matrix3f invert(Matrix3f matrix3f0,
Matrix3f matrix3f1)

**Parameters:**
- `Matrix3f` `matrix3f0`
- `Matrix3f` `matrix3f1`

**Returns:** `Matrix3f`

### public Matrix negate()

**Returns:** `Matrix`

### public Matrix3f negate(Matrix3f matrix3f1)

**Parameters:**
- `Matrix3f` `matrix3f1`

**Returns:** `Matrix3f`

### public static Matrix3f negate(Matrix3f matrix3f1,
Matrix3f matrix3f0)

**Parameters:**
- `Matrix3f` `matrix3f1`
- `Matrix3f` `matrix3f0`

**Returns:** `Matrix3f`

### public Matrix setIdentity()

**Returns:** `Matrix`

### public static Matrix3f setIdentity(Matrix3f matrix3f)

**Parameters:**
- `Matrix3f` `matrix3f`

**Returns:** `Matrix3f`

### public Matrix setZero()

**Returns:** `Matrix`

### public static Matrix3f setZero(Matrix3f matrix3f)

**Parameters:**
- `Matrix3f` `matrix3f`

**Returns:** `Matrix3f`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Matrix3f.html`*
