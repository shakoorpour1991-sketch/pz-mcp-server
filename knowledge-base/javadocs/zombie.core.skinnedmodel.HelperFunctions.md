---
title: zombie.core.skinnedmodel.HelperFunctions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.HelperFunctions

`public final class HelperFunctions extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.HelperFunctions

## Constructors

### public HelperFunctions()

## Methods

### public static int ToRgba(Color color)

**Parameters:**
- `Color` `color`

**Returns:** `int`

### public static void returnMatrix(org.lwjgl.util.vector.Matrix4f mat)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `mat`

**Returns:** `void`

### public static org.lwjgl.util.vector.Matrix4f getMatrix()

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.lwjgl.util.vector.Matrix4f getMatrix(org.lwjgl.util.vector.Matrix4f copyFrom)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `copyFrom`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.lwjgl.util.vector.Vector3f allocVector3f(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static org.lwjgl.util.vector.Vector3f allocVector3f()

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static void releaseVector3f(org.lwjgl.util.vector.Vector3f v)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `v`

**Returns:** `void`

### public static org.lwjgl.util.vector.Quaternion allocQuaternion(float x,
float y,
float z,
float w)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static org.lwjgl.util.vector.Quaternion allocQuaternion()

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static void releaseQuaternion(org.lwjgl.util.vector.Quaternion q)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `q`

**Returns:** `void`

### public static org.lwjgl.util.vector.Matrix4f CreateFromQuaternion(org.lwjgl.util.vector.Quaternion q)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `q`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.lwjgl.util.vector.Matrix4f CreateFromQuaternion(org.lwjgl.util.vector.Quaternion q,
org.lwjgl.util.vector.Matrix4f result)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `q`
- `org.lwjgl.util.vector.Matrix4f` `result`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.lwjgl.util.vector.Matrix4f CreateFromQuaternionPositionScale(org.lwjgl.util.vector.Vector3f position,
org.lwjgl.util.vector.Quaternion rotation,
org.lwjgl.util.vector.Vector3f scale,
org.lwjgl.util.vector.Matrix4f result)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `position`
- `org.lwjgl.util.vector.Quaternion` `rotation`
- `org.lwjgl.util.vector.Vector3f` `scale`
- `org.lwjgl.util.vector.Matrix4f` `result`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static float getAngle(float v1x,
float v1y,
float v2x,
float v2y)

**Parameters:**
- `float` `v1x`
- `float` `v1y`
- `float` `v2x`
- `float` `v2y`

**Returns:** `float`

### public static void CreateFromQuaternionPositionScale(org.lwjgl.util.vector.Vector3f position,
org.lwjgl.util.vector.Quaternion rotation,
org.lwjgl.util.vector.Vector3f scale,
HelperFunctions.TransformResult_QPS transformResult)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `position`
- `org.lwjgl.util.vector.Quaternion` `rotation`
- `org.lwjgl.util.vector.Vector3f` `scale`
- `HelperFunctions.TransformResult_QPS` `transformResult`

**Returns:** `void`

### public static void TransformVertices(VertexPositionNormalTangentTextureSkin[] vertices,
List<org.lwjgl.util.vector.Matrix4f> boneTransforms)

**Parameters:**
- `VertexPositionNormalTangentTextureSkin[]` `vertices`
- `List<org.lwjgl.util.vector.Matrix4f>` `boneTransforms`

**Returns:** `void`

### public static void ApplyBlendBone(float weight,
org.lwjgl.util.vector.Matrix4f transform,
Vector3 vertPos,
Vector3 vertNorm,
Vector3 newPos,
Vector3 newNorm)

**Parameters:**
- `float` `weight`
- `org.lwjgl.util.vector.Matrix4f` `transform`
- `Vector3` `vertPos`
- `Vector3` `vertNorm`
- `Vector3` `newPos`
- `Vector3` `newNorm`

**Returns:** `void`

### public static org.lwjgl.util.vector.Vector3f getXAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static void setXAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `void`

### public static org.lwjgl.util.vector.Vector3f getYAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static void setYAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `void`

### public static org.lwjgl.util.vector.Vector3f getZAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static void setZAxis(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f axis)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `axis`

**Returns:** `void`

### public static org.lwjgl.util.vector.Vector3f getPosition(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f pos)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `pos`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static Vector3 getPosition(org.lwjgl.util.vector.Matrix4f matrix,
Vector3 pos)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `Vector3` `pos`

**Returns:** `Vector3`

### public static void setPosition(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f pos)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `pos`

**Returns:** `void`

### public static void setPosition(org.lwjgl.util.vector.Matrix4f matrix,
float x,
float y,
float z)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public static org.lwjgl.util.vector.Quaternion getRotation(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Quaternion rot)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Quaternion` `rot`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static org.lwjgl.util.vector.Vector3f transform(org.lwjgl.util.vector.Quaternion rotation,
org.lwjgl.util.vector.Vector3f vector,
org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rotation`
- `org.lwjgl.util.vector.Vector3f` `vector`
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static org.lwjgl.util.vector.Vector4f transform(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector4f vector,
org.lwjgl.util.vector.Vector4f result)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector4f` `vector`
- `org.lwjgl.util.vector.Vector4f` `result`

**Returns:** `org.lwjgl.util.vector.Vector4f`

### public static org.lwjgl.util.vector.Vector3f transformVector(org.lwjgl.util.vector.Matrix4f matrix,
org.lwjgl.util.vector.Vector3f vector,
org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`
- `org.lwjgl.util.vector.Vector3f` `vector`
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static float getRotationY(org.lwjgl.util.vector.Matrix4f matrix)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix`

**Returns:** `float`

### public static float getRotationY(org.lwjgl.util.vector.Quaternion rotation)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rotation`

**Returns:** `float`

### public static float getRotationZ(org.lwjgl.util.vector.Quaternion rotation)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rotation`

**Returns:** `float`

### public static org.lwjgl.util.vector.Vector3f ToEulerAngles(org.lwjgl.util.vector.Quaternion rot,
org.lwjgl.util.vector.Vector3f angles)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `rot`
- `org.lwjgl.util.vector.Vector3f` `angles`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static org.lwjgl.util.vector.Quaternion ToQuaternion(double roll,
double pitch,
double yaw,
org.lwjgl.util.vector.Quaternion result)

**Parameters:**
- `double` `roll`
- `double` `pitch`
- `double` `yaw`
- `org.lwjgl.util.vector.Quaternion` `result`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static org.lwjgl.util.vector.Vector3f getZero3()

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static org.lwjgl.util.vector.Quaternion getIdentityQ()

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static org.lwjgl.util.vector.Quaternion setFromAxisAngle(float axisX,
float axisY,
float axisZ,
float angleRads,
org.lwjgl.util.vector.Quaternion result)

**Parameters:**
- `float` `axisX`
- `float` `axisY`
- `float` `axisZ`
- `float` `angleRads`
- `org.lwjgl.util.vector.Quaternion` `result`

**Returns:** `org.lwjgl.util.vector.Quaternion`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\HelperFunctions.html`*
