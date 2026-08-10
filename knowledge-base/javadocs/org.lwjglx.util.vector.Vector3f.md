---
title: org.lwjglx.util.vector.Vector3f
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.vector
---

# org.lwjglx.util.vector.Vector3f

`public final class Vector3f extends Vector implements Serializable, ReadableVector3f, WritableVector3f`

**Kind:** class · **Package:** org.lwjglx.util.vector

## Inheritance
- java.lang.Object
- org.lwjglx.util.vector.Vector
- org.lwjglx.util.vector.Vector3f

## Fields

### public float x

### public float y

### public float z

## Constructors

### public Vector3f()

### public Vector3f(ReadableVector3f readableVector3f)

**Parameters:**
- `ReadableVector3f` `readableVector3f`

### public Vector3f(float float0,
float float1,
float float2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`

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

### public Vector3f set(ReadableVector3f readableVector3f)

**Parameters:**
- `ReadableVector3f` `readableVector3f`

**Returns:** `Vector3f`

### public float lengthSquared()

**Returns:** `float`

### public Vector3f translate(float float0,
float float1,
float float2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `Vector3f`

### public static Vector3f add(Vector3f vector3f2,
Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f2`
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

**Returns:** `Vector3f`

### public static Vector3f sub(Vector3f vector3f2,
Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f2`
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

**Returns:** `Vector3f`

### public static Vector3f cross(Vector3f vector3f2,
Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f2`
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

**Returns:** `Vector3f`

### public Vector negate()

**Returns:** `Vector`

### public Vector3f negate(Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f0`

**Returns:** `Vector3f`

### public Vector3f normalise(Vector3f vector3f1)

**Parameters:**
- `Vector3f` `vector3f1`

**Returns:** `Vector3f`

### public static float dot(Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

**Returns:** `float`

### public static float angle(Vector3f vector3f1,
Vector3f vector3f0)

**Parameters:**
- `Vector3f` `vector3f1`
- `Vector3f` `vector3f0`

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

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\vector\Vector3f.html`*
