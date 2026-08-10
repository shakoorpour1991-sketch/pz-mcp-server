---
title: org.joml.Matrix2fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix2fc

`public interface Matrix2fc`

**Kind:** interface · **Package:** org.joml

## Methods

### float m00()

**Returns:** `float`

### float m01()

**Returns:** `float`

### float m10()

**Returns:** `float`

### float m11()

**Returns:** `float`

### Matrix2f mul(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f mulLocal(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### float determinant()

**Returns:** `float`

### Matrix2f invert(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### Matrix2f transpose(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### Matrix2f get(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### Matrix3x2f get(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

### Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### float getRotation()

**Returns:** `float`

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

### FloatBuffer getTransposed(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer getTransposed(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

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

### Matrix2fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix2fc`

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

### Matrix2f scale(Vector2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f scale(float arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### Matrix2f scale(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f scaleLocal(float arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### Vector2f transform(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f transform(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f transform(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f transformTranspose(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f transformTranspose(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f transformTranspose(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Matrix2f rotate(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f rotateLocal(float arg0,
Matrix2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Vector2f getRow(int arg0,
Vector2f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f getColumn(int arg0,
Vector2f arg1)
throws IndexOutOfBoundsException

**Parameters:**
- `int` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### float get(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `float`

### Matrix2f normal(Matrix2f arg0)

**Parameters:**
- `Matrix2f` `arg0`

**Returns:** `Matrix2f`

### Vector2f getScale(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f positiveX(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f normalizedPositiveX(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f positiveY(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f normalizedPositiveY(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Matrix2f add(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f sub(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f mulComponentWise(Matrix2fc arg0,
Matrix2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Matrix2f` `arg1`

**Returns:** `Matrix2f`

### Matrix2f lerp(Matrix2fc arg0,
float arg1,
Matrix2f arg2)

**Parameters:**
- `Matrix2fc` `arg0`
- `float` `arg1`
- `Matrix2f` `arg2`

**Returns:** `Matrix2f`

### boolean equals(Matrix2fc arg0,
float arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix2fc.html`*
