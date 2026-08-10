---
title: org.lwjglx.util.vector.Matrix2f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Matrix2f

`public class Matrix2f extends Matrix implements Serializable`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Matrix
- org.lwjglx.util.vector.Matrix2f

## Fields

### public float m00

### public float m01

### public float m10

### public float m11

## Constructors

### public Matrix2f()

### public Matrix2f(Matrix2f matrix2f1)

**Parameters:**
- `Matrix2f` `matrix2f1`

## Methods

### public Matrix2f load(Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public static Matrix2f load(Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

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

### public static Matrix2f add(Matrix2f matrix2f2,
Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f2`
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public static Matrix2f sub(Matrix2f matrix2f2,
Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f2`
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public static Matrix2f mul(Matrix2f matrix2f2,
Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f2`
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public static Vector2f transform(Matrix2f matrix2f,
Vector2f vector2f1,
Vector2f vector2f0)

**Parameters:**
- `Matrix2f` `matrix2f`
- `Vector2f` `vector2f1`
- `Vector2f` `vector2f0`

**Returns:** `Vector2f`

### public Matrix transpose()

**Returns:** `Matrix`

### public Matrix2f transpose(Matrix2f matrix2f1)

**Parameters:**
- `Matrix2f` `matrix2f1`

**Returns:** `Matrix2f`

### public static Matrix2f transpose(Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public Matrix invert()

**Returns:** `Matrix`

### public static Matrix2f invert(Matrix2f matrix2f0,
Matrix2f matrix2f1)

**Parameters:**
- `Matrix2f` `matrix2f0`
- `Matrix2f` `matrix2f1`

**Returns:** `Matrix2f`

### public String toString()

**Returns:** `String`

### public Matrix negate()

**Returns:** `Matrix`

### public Matrix2f negate(Matrix2f matrix2f1)

**Parameters:**
- `Matrix2f` `matrix2f1`

**Returns:** `Matrix2f`

### public static Matrix2f negate(Matrix2f matrix2f1,
Matrix2f matrix2f0)

**Parameters:**
- `Matrix2f` `matrix2f1`
- `Matrix2f` `matrix2f0`

**Returns:** `Matrix2f`

### public Matrix setIdentity()

**Returns:** `Matrix`

### public static Matrix2f setIdentity(Matrix2f matrix2f)

**Parameters:**
- `Matrix2f` `matrix2f`

**Returns:** `Matrix2f`

### public Matrix setZero()

**Returns:** `Matrix`

### public static Matrix2f setZero(Matrix2f matrix2f)

**Parameters:**
- `Matrix2f` `matrix2f`

**Returns:** `Matrix2f`

### public float determinant()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Matrix2f.html`*
