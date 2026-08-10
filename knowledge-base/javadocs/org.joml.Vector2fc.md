---
title: org.joml.Vector2fc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Vector2fc

`public interface Vector2fc`

**Kind:** interface · **Package:** org.joml

## Methods

### float x()

**Returns:** `float`

### float y()

**Returns:** `float`

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

### Vector2fc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Vector2fc`

### Vector2f sub(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f sub(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### float dot(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `float`

### float angle(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `float`

### float lengthSquared()

**Returns:** `float`

### float length()

**Returns:** `float`

### float distance(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `float`

### float distanceSquared(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `float`

### float distance(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `float`

### float distanceSquared(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `float`

### Vector2f normalize(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f normalize(float arg0,
Vector2f arg1)

**Parameters:**
- `float` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f add(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f add(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f negate(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f mul(float arg0,
Vector2f arg1)

**Parameters:**
- `float` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f mul(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f mul(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f div(float arg0,
Vector2f arg1)

**Parameters:**
- `float` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f div(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f div(float arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f mul(Matrix2fc arg0,
Vector2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f mul(Matrix2dc arg0,
Vector2f arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f mulTranspose(Matrix2fc arg0,
Vector2f arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f mulPosition(Matrix3x2fc arg0,
Vector2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f mulDirection(Matrix3x2fc arg0,
Vector2f arg1)

**Parameters:**
- `Matrix3x2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f lerp(Vector2fc arg0,
float arg1,
Vector2f arg2)

**Parameters:**
- `Vector2fc` `arg0`
- `float` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f fma(Vector2fc arg0,
Vector2fc arg1,
Vector2f arg2)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2fc` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f fma(float arg0,
Vector2fc arg1,
Vector2f arg2)

**Parameters:**
- `float` `arg0`
- `Vector2fc` `arg1`
- `Vector2f` `arg2`

**Returns:** `Vector2f`

### Vector2f min(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### Vector2f max(Vector2fc arg0,
Vector2f arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2f` `arg1`

**Returns:** `Vector2f`

### int maxComponent()

**Returns:** `int`

### int minComponent()

**Returns:** `int`

### float get(int arg0)
throws IllegalArgumentException

**Parameters:**
- `int` `arg0`

**Returns:** `float`

### Vector2i get(int arg0,
Vector2i arg1)

**Parameters:**
- `int` `arg0`
- `Vector2i` `arg1`

**Returns:** `Vector2i`

### Vector2f get(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2d get(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2f floor(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f ceil(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### Vector2f round(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### boolean isFinite()

**Returns:** `boolean`

### Vector2f absolute(Vector2f arg0)

**Parameters:**
- `Vector2f` `arg0`

**Returns:** `Vector2f`

### boolean equals(Vector2fc arg0,
float arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean equals(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Vector2fc.html`*
