---
title: org.lwjglx.util.vector.Vector4f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Vector4f

`public class Vector4f extends Vector implements Serializable, ReadableVector4f, WritableVector4f`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Vector
- org.lwjglx.util.vector.Vector4f

## Fields

### public float x

### public float y

### public float z

### public float w

## Constructors

### public Vector4f()

### public Vector4f(ReadableVector4f readableVector4f)

**Parameters:**
- `ReadableVector4f` `readableVector4f`

### public Vector4f(float float0,
float float1,
float float2,
float float3)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`

## Methods

### public void set(float float0,
float float1)

**Parameters:**
- `float` `float0`
- `float` `float1`

**Returns:** `void`

### public void set(float float0,
float float1,
float float2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `void`

### public void set(float float0,
float float1,
float float2,
float float3)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`

**Returns:** `void`

### public Vector4f set(ReadableVector4f readableVector4f)

**Parameters:**
- `ReadableVector4f` `readableVector4f`

**Returns:** `Vector4f`

### public float lengthSquared()

**Returns:** `float`

### public Vector4f translate(float float0,
float float1,
float float2,
float float3)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`

**Returns:** `Vector4f`

### public static Vector4f add(Vector4f vector4f2,
Vector4f vector4f1,
Vector4f vector4f0)

**Parameters:**
- `Vector4f` `vector4f2`
- `Vector4f` `vector4f1`
- `Vector4f` `vector4f0`

**Returns:** `Vector4f`

### public static Vector4f sub(Vector4f vector4f2,
Vector4f vector4f1,
Vector4f vector4f0)

**Parameters:**
- `Vector4f` `vector4f2`
- `Vector4f` `vector4f1`
- `Vector4f` `vector4f0`

**Returns:** `Vector4f`

### public Vector negate()

**Returns:** `Vector`

### public Vector4f negate(Vector4f vector4f0)

**Parameters:**
- `Vector4f` `vector4f0`

**Returns:** `Vector4f`

### public Vector4f normalise(Vector4f vector4f1)

**Parameters:**
- `Vector4f` `vector4f1`

**Returns:** `Vector4f`

### public static float dot(Vector4f vector4f1,
Vector4f vector4f0)

**Parameters:**
- `Vector4f` `vector4f1`
- `Vector4f` `vector4f0`

**Returns:** `float`

### public static float angle(Vector4f vector4f1,
Vector4f vector4f0)

**Parameters:**
- `Vector4f` `vector4f1`
- `Vector4f` `vector4f0`

**Returns:** `float`

### public Vector load(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Vector`

### public Vector scale(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `Vector`

### public Vector store(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Vector`

### public String toString()

**Returns:** `String`

### public final float getX()

**Returns:** `float`

### public final float getY()

**Returns:** `float`

### public final void setX(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `void`

### public final void setY(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `void`

### public void setZ(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `void`

### public float getZ()

**Returns:** `float`

### public void setW(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `void`

### public float getW()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Vector4f.html`*
