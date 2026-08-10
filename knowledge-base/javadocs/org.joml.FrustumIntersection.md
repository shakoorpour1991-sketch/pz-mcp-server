---
title: org.joml.FrustumIntersection
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.FrustumIntersection

`public class FrustumIntersection extends Object`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.FrustumIntersection

## Fields

### public static final int PLANE_NX

### public static final int PLANE_PX

### public static final int PLANE_NY

### public static final int PLANE_PY

### public static final int PLANE_NZ

### public static final int PLANE_PZ

### public static final int INTERSECT

### public static final int INSIDE

### public static final int OUTSIDE

### public static final int PLANE_MASK_NX

### public static final int PLANE_MASK_PX

### public static final int PLANE_MASK_NY

### public static final int PLANE_MASK_PY

### public static final int PLANE_MASK_NZ

### public static final int PLANE_MASK_PZ

## Constructors

### public FrustumIntersection()

### public FrustumIntersection(Matrix4fc matrix4fc)

**Parameters:**
- `Matrix4fc` `matrix4fc`

### public FrustumIntersection(Matrix4fc matrix4fc,
boolean boolean0)

**Parameters:**
- `Matrix4fc` `matrix4fc`
- `boolean` `boolean0`

## Methods

### public FrustumIntersection set(Matrix4fc matrix4fc)

**Parameters:**
- `Matrix4fc` `matrix4fc`

**Returns:** `FrustumIntersection`

### public FrustumIntersection set(Matrix4fc matrix4fc,
boolean boolean0)

**Parameters:**
- `Matrix4fc` `matrix4fc`
- `boolean` `boolean0`

**Returns:** `FrustumIntersection`

### public boolean testPoint(Vector3fc vector3fc)

**Parameters:**
- `Vector3fc` `vector3fc`

**Returns:** `boolean`

### public boolean testPoint(float float2,
float float1,
float float0)

**Parameters:**
- `float` `float2`
- `float` `float1`
- `float` `float0`

**Returns:** `boolean`

### public boolean testSphere(Vector3fc vector3fc,
float float0)

**Parameters:**
- `Vector3fc` `vector3fc`
- `float` `float0`

**Returns:** `boolean`

### public boolean testSphere(float float3,
float float2,
float float1,
float float0)

**Parameters:**
- `float` `float3`
- `float` `float2`
- `float` `float1`
- `float` `float0`

**Returns:** `boolean`

### public int intersectSphere(Vector3fc vector3fc,
float float0)

**Parameters:**
- `Vector3fc` `vector3fc`
- `float` `float0`

**Returns:** `int`

### public int intersectSphere(float float3,
float float2,
float float1,
float float4)

**Parameters:**
- `float` `float3`
- `float` `float2`
- `float` `float1`
- `float` `float4`

**Returns:** `int`

### public boolean testAab(Vector3fc vector3fc1,
Vector3fc vector3fc0)

**Parameters:**
- `Vector3fc` `vector3fc1`
- `Vector3fc` `vector3fc0`

**Returns:** `boolean`

### public boolean testAab(float float4,
float float2,
float float0,
float float5,
float float3,
float float1)

**Parameters:**
- `float` `float4`
- `float` `float2`
- `float` `float0`
- `float` `float5`
- `float` `float3`
- `float` `float1`

**Returns:** `boolean`

### public boolean testPlaneXY(Vector2fc vector2fc1,
Vector2fc vector2fc0)

**Parameters:**
- `Vector2fc` `vector2fc1`
- `Vector2fc` `vector2fc0`

**Returns:** `boolean`

### public boolean testPlaneXY(float float2,
float float0,
float float3,
float float1)

**Parameters:**
- `float` `float2`
- `float` `float0`
- `float` `float3`
- `float` `float1`

**Returns:** `boolean`

### public boolean testPlaneXZ(float float2,
float float0,
float float3,
float float1)

**Parameters:**
- `float` `float2`
- `float` `float0`
- `float` `float3`
- `float` `float1`

**Returns:** `boolean`

### public int intersectAab(Vector3fc vector3fc1,
Vector3fc vector3fc0)

**Parameters:**
- `Vector3fc` `vector3fc1`
- `Vector3fc` `vector3fc0`

**Returns:** `int`

### public int intersectAab(float float4,
float float2,
float float0,
float float5,
float float3,
float float1)

**Parameters:**
- `float` `float4`
- `float` `float2`
- `float` `float0`
- `float` `float5`
- `float` `float3`
- `float` `float1`

**Returns:** `int`

### public float distanceToPlane(float float5,
float float3,
float float1,
float float4,
float float2,
float float0,
int int0)

**Parameters:**
- `float` `float5`
- `float` `float3`
- `float` `float1`
- `float` `float4`
- `float` `float2`
- `float` `float0`
- `int` `int0`

**Returns:** `float`

### public int intersectAab(Vector3fc vector3fc1,
Vector3fc vector3fc0,
int int0)

**Parameters:**
- `Vector3fc` `vector3fc1`
- `Vector3fc` `vector3fc0`
- `int` `int0`

**Returns:** `int`

### public int intersectAab(float float4,
float float2,
float float0,
float float5,
float float3,
float float1,
int int0)

**Parameters:**
- `float` `float4`
- `float` `float2`
- `float` `float0`
- `float` `float5`
- `float` `float3`
- `float` `float1`
- `int` `int0`

**Returns:** `int`

### public int intersectAab(Vector3fc vector3fc1,
Vector3fc vector3fc0,
int int0,
int int1)

**Parameters:**
- `Vector3fc` `vector3fc1`
- `Vector3fc` `vector3fc0`
- `int` `int0`
- `int` `int1`

**Returns:** `int`

### public int intersectAab(float float4,
float float2,
float float0,
float float5,
float float3,
float float1,
int int2,
int int1)

**Parameters:**
- `float` `float4`
- `float` `float2`
- `float` `float0`
- `float` `float5`
- `float` `float3`
- `float` `float1`
- `int` `int2`
- `int` `int1`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\FrustumIntersection.html`*
