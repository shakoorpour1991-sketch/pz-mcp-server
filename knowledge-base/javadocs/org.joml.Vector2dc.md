---
title: org.joml.Vector2dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Vector2dc

`public interface Vector2dc`

**Kind:** interface · **Package:** org.joml

## Methods

### double x()

**Returns:** `double`

### double y()

**Returns:** `double`

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

### DoubleBuffer get(DoubleBuffer arg0)

**Parameters:**
- `DoubleBuffer` `arg0`

**Returns:** `DoubleBuffer`

### DoubleBuffer get(int arg0,
DoubleBuffer arg1)

**Parameters:**
- `int` `arg0`
- `DoubleBuffer` `arg1`

**Returns:** `DoubleBuffer`

### Vector2dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Vector2dc`

### Vector2d sub(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d sub(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d sub(Vector2fc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mul(double arg0,
Vector2d arg1)

**Parameters:**
- `double` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mul(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d mul(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d div(double arg0,
Vector2d arg1)

**Parameters:**
- `double` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d div(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d div(Vector2fc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d div(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mul(Matrix2dc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mul(Matrix2fc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mulTranspose(Matrix2dc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mulTranspose(Matrix2fc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix2fc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mulPosition(Matrix3x2dc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d mulDirection(Matrix3x2dc arg0,
Vector2d arg1)

**Parameters:**
- `Matrix3x2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### double dot(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `double`

### double angle(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `double`

### double lengthSquared()

**Returns:** `double`

### double length()

**Returns:** `double`

### double distance(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `double`

### double distanceSquared(Vector2dc arg0)

**Parameters:**
- `Vector2dc` `arg0`

**Returns:** `double`

### double distance(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `double`

### double distanceSquared(Vector2fc arg0)

**Parameters:**
- `Vector2fc` `arg0`

**Returns:** `double`

### double distance(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `double`

### double distanceSquared(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `double`

### Vector2d normalize(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d normalize(double arg0,
Vector2d arg1)

**Parameters:**
- `double` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d add(double arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d add(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d add(Vector2fc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2fc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d negate(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d lerp(Vector2dc arg0,
double arg1,
Vector2d arg2)

**Parameters:**
- `Vector2dc` `arg0`
- `double` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d fma(Vector2dc arg0,
Vector2dc arg1,
Vector2d arg2)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2dc` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d fma(double arg0,
Vector2dc arg1,
Vector2d arg2)

**Parameters:**
- `double` `arg0`
- `Vector2dc` `arg1`
- `Vector2d` `arg2`

**Returns:** `Vector2d`

### Vector2d min(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### Vector2d max(Vector2dc arg0,
Vector2d arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `Vector2d` `arg1`

**Returns:** `Vector2d`

### int maxComponent()

**Returns:** `int`

### int minComponent()

**Returns:** `int`

### double get(int arg0)
throws IllegalArgumentException

**Parameters:**
- `int` `arg0`

**Returns:** `double`

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

### Vector2d floor(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d ceil(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### Vector2d round(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### boolean isFinite()

**Returns:** `boolean`

### Vector2d absolute(Vector2d arg0)

**Parameters:**
- `Vector2d` `arg0`

**Returns:** `Vector2d`

### boolean equals(Vector2dc arg0,
double arg1)

**Parameters:**
- `Vector2dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean equals(double arg0,
double arg1)

**Parameters:**
- `double` `arg0`
- `double` `arg1`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Vector2dc.html`*
