---
title: org.joml.Vector4dc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Vector4dc

`public interface Vector4dc`

**Kind:** interface · **Package:** org.joml

## Methods

### double x()

**Returns:** `double`

### double y()

**Returns:** `double`

### double z()

**Returns:** `double`

### double w()

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

### ByteBuffer getf(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### ByteBuffer getf(int arg0,
ByteBuffer arg1)

**Parameters:**
- `int` `arg0`
- `ByteBuffer` `arg1`

**Returns:** `ByteBuffer`

### Vector4dc getToAddress(long arg0)

**Parameters:**
- `long` `arg0`

**Returns:** `Vector4dc`

### Vector4d sub(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d sub(Vector4fc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d sub(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d add(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d add(Vector4fc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d add(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d fma(Vector4dc arg0,
Vector4dc arg1,
Vector4d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4dc` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### Vector4d fma(double arg0,
Vector4dc arg1,
Vector4d arg2)

**Parameters:**
- `double` `arg0`
- `Vector4dc` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### Vector4d mul(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mul(Vector4fc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d div(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mul(Matrix4dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mul(Matrix4x3dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4x3dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mul(Matrix4x3fc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4x3fc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mul(Matrix4fc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4fc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mulTranspose(Matrix4dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mulAffine(Matrix4dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mulAffineTranspose(Matrix4dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d mulProject(Matrix4dc arg0,
Vector4d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector3d mulProject(Matrix4dc arg0,
Vector3d arg1)

**Parameters:**
- `Matrix4dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector4d mulAdd(Vector4dc arg0,
Vector4dc arg1,
Vector4d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4dc` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### Vector4d mulAdd(double arg0,
Vector4dc arg1,
Vector4d arg2)

**Parameters:**
- `double` `arg0`
- `Vector4dc` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### Vector4d mul(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d div(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d rotate(Quaterniondc arg0,
Vector4d arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d rotateAxis(double arg0,
double arg1,
double arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d rotateX(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d rotateY(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d rotateZ(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### double lengthSquared()

**Returns:** `double`

### double length()

**Returns:** `double`

### Vector4d normalize(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d normalize(double arg0,
Vector4d arg1)

**Parameters:**
- `double` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d normalize3(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### double distance(Vector4dc arg0)

**Parameters:**
- `Vector4dc` `arg0`

**Returns:** `double`

### double distance(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `double`

### double distanceSquared(Vector4dc arg0)

**Parameters:**
- `Vector4dc` `arg0`

**Returns:** `double`

### double distanceSquared(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `double`

### double dot(Vector4dc arg0)

**Parameters:**
- `Vector4dc` `arg0`

**Returns:** `double`

### double dot(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `double`

### double angleCos(Vector4dc arg0)

**Parameters:**
- `Vector4dc` `arg0`

**Returns:** `double`

### double angle(Vector4dc arg0)

**Parameters:**
- `Vector4dc` `arg0`

**Returns:** `double`

### Vector4d negate(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d min(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d max(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d smoothStep(Vector4dc arg0,
double arg1,
Vector4d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `double` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### Vector4d hermite(Vector4dc arg0,
Vector4dc arg1,
Vector4dc arg2,
double arg3,
Vector4d arg4)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4dc` `arg1`
- `Vector4dc` `arg2`
- `double` `arg3`
- `Vector4d` `arg4`

**Returns:** `Vector4d`

### Vector4d lerp(Vector4dc arg0,
double arg1,
Vector4d arg2)

**Parameters:**
- `Vector4dc` `arg0`
- `double` `arg1`
- `Vector4d` `arg2`

**Returns:** `Vector4d`

### double get(int arg0)
throws IllegalArgumentException

**Parameters:**
- `int` `arg0`

**Returns:** `double`

### Vector4i get(int arg0,
Vector4i arg1)

**Parameters:**
- `int` `arg0`
- `Vector4i` `arg1`

**Returns:** `Vector4i`

### Vector4f get(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4d get(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### int maxComponent()

**Returns:** `int`

### int minComponent()

**Returns:** `int`

### Vector4d floor(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d ceil(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d round(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### boolean isFinite()

**Returns:** `boolean`

### Vector4d absolute(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### boolean equals(Vector4dc arg0,
double arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### boolean equals(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Vector4dc.html`*
