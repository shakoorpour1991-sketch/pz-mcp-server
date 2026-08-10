---
title: org.lwjglx.util.vector.Quaternion
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Quaternion

`public final class Quaternion extends Vector implements ReadableVector4f`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Vector
- org.lwjglx.util.vector.Quaternion

## Fields

### public float x

### public float y

### public float z

### public float w

## Constructors

### public Quaternion()

### public Quaternion(ReadableVector4f readableVector4f)

**Parameters:**
- `ReadableVector4f` `readableVector4f`

### public Quaternion(float float0,
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

### public Quaternion set(ReadableVector4f readableVector4f)

**Parameters:**
- `ReadableVector4f` `readableVector4f`

**Returns:** `Quaternion`

### public Quaternion setIdentity()

**Returns:** `Quaternion`

### public static Quaternion setIdentity(Quaternion quaternion)

**Parameters:**
- `Quaternion` `quaternion`

**Returns:** `Quaternion`

### public float lengthSquared()

**Returns:** `float`

### public static Quaternion normalise(Quaternion quaternion0,
Quaternion quaternion1)

**Parameters:**
- `Quaternion` `quaternion0`
- `Quaternion` `quaternion1`

**Returns:** `Quaternion`

### public Quaternion normalise(Quaternion quaternion1)

**Parameters:**
- `Quaternion` `quaternion1`

**Returns:** `Quaternion`

### public static float dot(Quaternion quaternion1,
Quaternion quaternion0)

**Parameters:**
- `Quaternion` `quaternion1`
- `Quaternion` `quaternion0`

**Returns:** `float`

### public Quaternion negate(Quaternion quaternion1)

**Parameters:**
- `Quaternion` `quaternion1`

**Returns:** `Quaternion`

### public static Quaternion negate(Quaternion quaternion1,
Quaternion quaternion0)

**Parameters:**
- `Quaternion` `quaternion1`
- `Quaternion` `quaternion0`

**Returns:** `Quaternion`

### public Vector negate()

**Returns:** `Vector`

### public Vector load(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Vector`

### public Vector scale(float float0)

**Parameters:**
- `float` `float0`

**Returns:** `Vector`

### public static Quaternion scale(float float0,
Quaternion quaternion1,
Quaternion quaternion0)

**Parameters:**
- `float` `float0`
- `Quaternion` `quaternion1`
- `Quaternion` `quaternion0`

**Returns:** `Quaternion`

### public Vector store(FloatBuffer floatBuffer)

**Parameters:**
- `FloatBuffer` `floatBuffer`

**Returns:** `Vector`

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

### public String toString()

**Returns:** `String`

### public static Quaternion mul(Quaternion quaternion2,
Quaternion quaternion1,
Quaternion quaternion0)

**Parameters:**
- `Quaternion` `quaternion2`
- `Quaternion` `quaternion1`
- `Quaternion` `quaternion0`

**Returns:** `Quaternion`

### public static Quaternion mulInverse(Quaternion quaternion2,
Quaternion quaternion0,
Quaternion quaternion1)

**Parameters:**
- `Quaternion` `quaternion2`
- `Quaternion` `quaternion0`
- `Quaternion` `quaternion1`

**Returns:** `Quaternion`

### public final void setFromAxisAngle(Vector4f vector4f)

**Parameters:**
- `Vector4f` `vector4f`

**Returns:** `void`

### public final Quaternion setFromMatrix(Matrix4f matrix4f)

**Parameters:**
- `Matrix4f` `matrix4f`

**Returns:** `Quaternion`

### public static Quaternion setFromMatrix(Matrix4f matrix4f,
Quaternion quaternion)

**Parameters:**
- `Matrix4f` `matrix4f`
- `Quaternion` `quaternion`

**Returns:** `Quaternion`

### public final Quaternion setFromMatrix(Matrix3f matrix3f)

**Parameters:**
- `Matrix3f` `matrix3f`

**Returns:** `Quaternion`

### public static Quaternion setFromMatrix(Matrix3f matrix3f,
Quaternion quaternion)

**Parameters:**
- `Matrix3f` `matrix3f`
- `Quaternion` `quaternion`

**Returns:** `Quaternion`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Quaternion.html`*
