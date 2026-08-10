---
title: zombie.core.rendering.ShaderParameter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.ShaderParameter

`public class ShaderParameter extends Object`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.ShaderParameter

## Fields

### public final String name

### public int offset

### public int length

## Constructors

### public ShaderParameter(ShaderParameter other)

**Parameters:**
- `ShaderParameter` `other`

### public ShaderParameter(String name,
boolean value)

**Parameters:**
- `String` `name`
- `boolean` `value`

### public ShaderParameter(String name,
int value)

**Parameters:**
- `String` `name`
- `int` `value`

### public ShaderParameter(String name,
int value,
boolean isTexture)

**Parameters:**
- `String` `name`
- `int` `value`
- `boolean` `isTexture`

### public ShaderParameter(String name,
float value)

**Parameters:**
- `String` `name`
- `float` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector2f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector2f` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector3f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector3f` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector4f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector4f` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Matrix3f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix3f` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Matrix4f value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix4f` `value`

### public ShaderParameter(String name,
int[] value,
boolean isTexture)

**Parameters:**
- `String` `name`
- `int[]` `value`
- `boolean` `isTexture`

### public ShaderParameter(String name,
float[] value)

**Parameters:**
- `String` `name`
- `float[]` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector2f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector2f[]` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector3f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector3f[]` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Vector4f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Vector4f[]` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Matrix3f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix3f[]` `value`

### public ShaderParameter(String name,
org.lwjgl.util.vector.Matrix4f[] value)

**Parameters:**
- `String` `name`
- `org.lwjgl.util.vector.Matrix4f[]` `value`

## Methods

### public String toString()

**Returns:** `String`

### public ShaderParameter.ParameterTypes GetType()

**Returns:** `ShaderParameter.ParameterTypes`

### public void Copy(ShaderParameter param,
boolean copyDefault,
boolean matchType)

**Parameters:**
- `ShaderParameter` `param`
- `boolean` `copyDefault`
- `boolean` `matchType`

**Returns:** `void`

### public void ResetValue()

**Returns:** `void`

### public int GetSize()

**Returns:** `int`

### public Object GetValue()

**Returns:** `Object`

### public Boolean GetBool()

**Returns:** `Boolean`

### public int GetInt()

**Returns:** `int`

### public float GetFloat()

**Returns:** `float`

### public org.lwjgl.util.vector.Vector2f GetVector2()

**Returns:** `org.lwjgl.util.vector.Vector2f`

### public org.lwjgl.util.vector.Vector3f GetVector3()

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public org.lwjgl.util.vector.Vector4f GetVector4()

**Returns:** `org.lwjgl.util.vector.Vector4f`

### public org.lwjgl.util.vector.Matrix3f GetMatrix3()

**Returns:** `org.lwjgl.util.vector.Matrix3f`

### public org.lwjgl.util.vector.Matrix4f GetMatrix4()

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public int GetTexture()

**Returns:** `int`

### public int[] GetIntArray()

**Returns:** `int[]`

### public float[] GetFloatArray()

**Returns:** `float[]`

### public org.lwjgl.util.vector.Vector2f[] GetVector2Array()

**Returns:** `org.lwjgl.util.vector.Vector2f[]`

### public org.lwjgl.util.vector.Vector3f[] GetVector3Array()

**Returns:** `org.lwjgl.util.vector.Vector3f[]`

### public org.lwjgl.util.vector.Vector4f[] GetVector4Array()

**Returns:** `org.lwjgl.util.vector.Vector4f[]`

### public org.lwjgl.util.vector.Matrix3f[] GetMatrix3Array()

**Returns:** `org.lwjgl.util.vector.Matrix3f[]`

### public org.lwjgl.util.vector.Matrix4f[] GetMatrix4Array()

**Returns:** `org.lwjgl.util.vector.Matrix4f[]`

### public int[] GetTextureArray()

**Returns:** `int[]`

### public FloatBuffer GetBuffer()

**Returns:** `FloatBuffer`

### public void SetBool(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public void SetInt(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void SetFloat(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public void SetVector2(org.lwjgl.util.vector.Vector2f vec)

**Parameters:**
- `org.lwjgl.util.vector.Vector2f` `vec`

**Returns:** `void`

### public void SetVector2(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void SetVector3(org.lwjgl.util.vector.Vector3f vec)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `vec`

**Returns:** `void`

### public void SetVector3(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void SetVector4(org.lwjgl.util.vector.Vector4f vec)

**Parameters:**
- `org.lwjgl.util.vector.Vector4f` `vec`

**Returns:** `void`

### public void SetVector4(float x,
float y,
float z,
float w)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`

**Returns:** `void`

### public void SetMatrix3(org.lwjgl.util.vector.Matrix3f mat)

**Parameters:**
- `org.lwjgl.util.vector.Matrix3f` `mat`

**Returns:** `void`

### public void SetMatrix4(org.lwjgl.util.vector.Matrix4f mat)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `mat`

**Returns:** `void`

### public void SetTexture(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void SetIntArray(int[] value)

**Parameters:**
- `int[]` `value`

**Returns:** `void`

### public void SetFloatArray(float[] value)

**Parameters:**
- `float[]` `value`

**Returns:** `void`

### public void SetVector2Array(org.lwjgl.util.vector.Vector2f[] value)

**Parameters:**
- `org.lwjgl.util.vector.Vector2f[]` `value`

**Returns:** `void`

### public void SetVector3Array(org.lwjgl.util.vector.Vector3f[] value)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f[]` `value`

**Returns:** `void`

### public void SetVector4Array(org.lwjgl.util.vector.Vector4f[] value)

**Parameters:**
- `org.lwjgl.util.vector.Vector4f[]` `value`

**Returns:** `void`

### public void SetMatrix3Array(org.lwjgl.util.vector.Matrix3f[] value)

**Parameters:**
- `org.lwjgl.util.vector.Matrix3f[]` `value`

**Returns:** `void`

### public void SetMatrix4Array(org.lwjgl.util.vector.Matrix4f[] value)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f[]` `value`

**Returns:** `void`

### public void SetTextureArray(int[] value)

**Parameters:**
- `int[]` `value`

**Returns:** `void`

### public void UpdateDefault()

**Returns:** `void`

### public void PushUniform()

**Returns:** `void`

### public void PullUniform(int program)

**Parameters:**
- `int` `program`

**Returns:** `void`

### public void PushInstanced(InstancedBuffer buffer,
int baseOffset)

**Parameters:**
- `InstancedBuffer` `buffer`
- `int` `baseOffset`

**Returns:** `void`

### public void WriteToBuffer(ByteBuffer buffer,
int baseOffset)

**Parameters:**
- `ByteBuffer` `buffer`
- `int` `baseOffset`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\ShaderParameter.html`*
