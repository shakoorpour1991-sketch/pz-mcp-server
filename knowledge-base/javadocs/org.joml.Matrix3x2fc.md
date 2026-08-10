---
title: org.joml.Matrix3x2fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Matrix3x2fc

`public interface Matrix3x2fc`

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

### float m20()

**Returns:** `float`

### float m21()

**Returns:** `float`

### Matrix3x2f mul(Matrix3x2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f mulLocal(Matrix3x2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### float determinant()

**Returns:** `float`

### Matrix3x2f invert(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

### Matrix3x2f translate(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### Matrix3x2f translate(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f translateLocal(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f translateLocal(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### Matrix3x2f get(Matrix3x2f arg0)

**Parameters:**
- `Matrix3x2f` `arg0`

**Returns:** `Matrix3x2f`

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

### FloatBuffer get3x3(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get3x3(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

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

### FloatBuffer get4x4(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### FloatBuffer get4x4(int arg0,
FloatBuffer arg1)

**Parameters:**
- `int` `arg0`
- `FloatBuffer` `arg1`

**Returns:** `FloatBuffer`

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

### Matrix3x2fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Matrix3x2fc`

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

### float[] get3x3(float[] var1,
int var2)

**Parameters:**
- `float[]` `var1`
- `int` `var2`

**Returns:** `float[]`

### float[] get3x3(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

### float[] get4x4(float[] var1,
int var2)

**Parameters:**
- `float[]` `var1`
- `int` `var2`

**Returns:** `float[]`

### float[] get4x4(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

### Matrix3x2f scale(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### Matrix3x2f scale(Vector2fc arg0,
Matrix3x2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f scaleAroundLocal(float arg0,
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

### Matrix3x2f scaleAroundLocal(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### Matrix3x2f scale(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f scaleLocal(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f scaleLocal(float arg0,
float arg1,
Matrix3x2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### Matrix3x2f scaleAround(float arg0,
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

### Matrix3x2f scaleAround(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transform(Vector3f arg0,
Vector3f arg1)

**Parameters:**
- `Vector3f` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transform(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector2f transformPosition(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f transformPosition(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f transformPosition(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f transformDirection(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f transformDirection(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f transformDirection(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Matrix3x2f rotate(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f rotateLocal(float arg0,
Matrix3x2f arg1)

**Parameters:**
- `float` `arg0`
- `Matrix3x2f` `arg1`

**Returns:** `Matrix3x2f`

### Matrix3x2f rotateAbout(float arg0,
float arg1,
float arg2,
Matrix3x2f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Matrix3x2f` `arg3`

**Returns:** `Matrix3x2f`

### Matrix3x2f rotateTo(Vector2fc arg0,
Vector2fc arg1,
Matrix3x2f arg2)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`
- `Matrix3x2f` `arg2`

**Returns:** `Matrix3x2f`

### Matrix3x2f view(float arg0,
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

### Vector2f origin(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### float[] viewArea(float[] var1)

**Parameters:**
- `float[]` `var1`

**Returns:** `float[]`

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

### Vector2f unproject(float var1,
float var2,
int[] var3,
Vector2f var4)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `int[]` `var3`
- `Vector2f` `var4`

**Returns:** `Vector2f`

### Vector2f unprojectInv(float var1,
float var2,
int[] var3,
Vector2f var4)

**Parameters:**
- `float` `var1`
- `float` `var2`
- `int[]` `var3`
- `Vector2f` `var4`

**Returns:** `Vector2f`

### boolean testPoint(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean testCircle(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `boolean`

### boolean testAar(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `boolean`

### boolean equals(Matrix3x2fc arg0,
float arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean isFinite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Matrix3x2fc.html`*
