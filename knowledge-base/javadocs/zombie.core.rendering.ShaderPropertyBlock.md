---
title: zombie.core.rendering.ShaderPropertyBlock
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.ShaderPropertyBlock

`public class ShaderPropertyBlock extends Object`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.ShaderPropertyBlock

## Constructors

### public ShaderPropertyBlock()

## Methods

### public void SetShader(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public void StoreProperties()

**Returns:** `void`

### public void CopyToInstanced(InstancedBuffer target)

**Parameters:**
- `InstancedBuffer` `target`

**Returns:** `void`

### public ShaderParameter GetParameter(String name)

**Parameters:**
- `String` `name`

**Returns:** `ShaderParameter`

### public void CopyParameters(ShaderPropertyBlock from)

**Parameters:**
- `ShaderPropertyBlock` `from`

**Returns:** `void`

### public void SetInt(String name,
int value)

**Parameters:**
- `String` `name`
- `int` `value`

**Returns:** `void`

### public void SetFloat(String name,
float value)

**Parameters:**
- `String` `name`
- `float` `value`

**Returns:** `void`

### public void SetVector2(String name,
org.lwjgl.util.vector.Vector2f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector2f` `value`

**Returns:** `void`

### public void SetVector2(String name,
float x,
float y)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void SetVector3(String name,
org.lwjgl.util.vector.Vector3f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector3f` `value`

**Returns:** `void`

### public void SetVector3(String name,
float x,
float y,
float z)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void SetVector4(String name,
org.lwjgl.util.vector.Vector4f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector4f` `value`

**Returns:** `void`

### public void SetVector4(String name,
float x,
float y,
float z,
float w)

**Parameters:**
- `String` `name`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`

**Returns:** `void`

### public void SetMatrix3(String name,
org.lwjgl.util.vector.Matrix3f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix3f` `value`

**Returns:** `void`

### public org.lwjgl.util.vector.Matrix4f SetMatrix4(String name,
org.lwjgl.util.vector.Matrix4f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix4f` `value`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public org.lwjgl.util.vector.Matrix4f SetMatrix4(String name,
org.joml.Matrix4f value)

**Parameters:**
- `String` `name`
- `org.joml.Matrix4f` `value`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public org.lwjgl.util.vector.Matrix4f SetMatrix4(String name,
FloatBuffer value)

**Parameters:**
- `String` `name`
- `FloatBuffer` `value`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public void SetFloatArray(String name,
float[] value)

**Parameters:**
- `String` `name`
- `float[]` `value`

**Returns:** `void`

### public void SetVector2Array(String name,
org.lwjgl.util.vector.Vector2f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector2f[]` `value`

**Returns:** `void`

### public void SetVector3Array(String name,
org.lwjgl.util.vector.Vector3f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector3f[]` `value`

**Returns:** `void`

### public void SetVector4Array(String name,
org.lwjgl.util.vector.Vector4f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector4f[]` `value`

**Returns:** `void`

### public void SetMatrix3Array(String name,
org.lwjgl.util.vector.Matrix3f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix3f[]` `value`

**Returns:** `void`

### public void SetMatrix4Array(String name,
org.lwjgl.util.vector.Matrix4f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix4f[]` `value`

**Returns:** `void`

### public void SetMatrix4Array(String name,
FloatBuffer value)

**Parameters:**
- `String` `name`
- `FloatBuffer` `value`

**Returns:** `void`

### public void SetFloatArrayElement(String name,
int index,
float value)

**Parameters:**
- `String` `name`
- `int` `index`
- `float` `value`

**Returns:** `void`

### public void SetVector2ArrayElement(String name,
int index,
org.lwjgl.util.vector.Vector2f value)

**Parameters:**
- `String` `name`
- `int` `index`
- `org.lwjgl.util.vector.Vector2f` `value`

**Returns:** `void`

### public void SetVector2ArrayElement(String name,
int index,
float x,
float y)

**Parameters:**
- `String` `name`
- `int` `index`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void SetVector3ArrayElement(String name,
int index,
org.lwjgl.util.vector.Vector3f value)

**Parameters:**
- `String` `name`
- `int` `index`
- `org.lwjgl.util.vector.Vector3f` `value`

**Returns:** `void`

### public void SetVector3ArrayElement(String name,
int index,
float x,
float y,
float z)

**Parameters:**
- `String` `name`
- `int` `index`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void SetVector4ArrayElement(String name,
int index,
org.lwjgl.util.vector.Vector4f value)

**Parameters:**
- `String` `name`
- `int` `index`
- `org.lwjgl.util.vector.Vector4f` `value`

**Returns:** `void`

### public void SetVector4ArrayElement(String name,
int index,
float x,
float y,
float z,
float w)

**Parameters:**
- `String` `name`
- `int` `index`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`

**Returns:** `void`

### public void SetMatrix3ArrayElement(String name,
int index,
org.lwjgl.util.vector.Matrix3f value)

**Parameters:**
- `String` `name`
- `int` `index`
- `org.lwjgl.util.vector.Matrix3f` `value`

**Returns:** `void`

### public void SetMatrix4ArrayElement(String name,
int index,
org.lwjgl.util.vector.Matrix4f value)

**Parameters:**
- `String` `name`
- `int` `index`
- `org.lwjgl.util.vector.Matrix4f` `value`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\ShaderPropertyBlock.html`*
