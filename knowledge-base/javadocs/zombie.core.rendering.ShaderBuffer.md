---
title: zombie.core.rendering.ShaderBuffer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.ShaderBuffer

`public class ShaderBuffer extends Object`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.ShaderBuffer

## Constructors

### public ShaderBuffer(int size)

**Parameters:**
- `int` `size`

## Methods

### public int GetBufferID()

**Returns:** `int`

### public void Release()

**Returns:** `void`

### public void SetBinding(int location)

**Parameters:**
- `int` `location`

**Returns:** `void`

### public int GetBinding()

**Returns:** `int`

### public void UpdateData()

**Returns:** `void`

### public void Advance(int bytes)

**Parameters:**
- `int` `bytes`

**Returns:** `void`

### public void SetPosition(int position)

**Parameters:**
- `int` `position`

**Returns:** `void`

### public static void PushBool(ByteBuffer data,
boolean b)

**Parameters:**
- `ByteBuffer` `data`
- `boolean` `b`

**Returns:** `void`

### public static void PushInt(ByteBuffer data,
int i)

**Parameters:**
- `ByteBuffer` `data`
- `int` `i`

**Returns:** `void`

### public static void PushFloat(ByteBuffer data,
float f)

**Parameters:**
- `ByteBuffer` `data`
- `float` `f`

**Returns:** `void`

### public static void PushFloat2(ByteBuffer data,
float f1,
float f2)

**Parameters:**
- `ByteBuffer` `data`
- `float` `f1`
- `float` `f2`

**Returns:** `void`

### public static void PushFloat3(ByteBuffer data,
float f1,
float f2,
float f3)

**Parameters:**
- `ByteBuffer` `data`
- `float` `f1`
- `float` `f2`
- `float` `f3`

**Returns:** `void`

### public static void PushFloat4(ByteBuffer data,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `ByteBuffer` `data`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `void`

### public static void PushVector2(ByteBuffer data,
org.lwjgl.util.vector.Vector2f vec)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector2f` `vec`

**Returns:** `void`

### public static void PushVector3(ByteBuffer data,
org.lwjgl.util.vector.Vector3f vec)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector3f` `vec`

**Returns:** `void`

### public static void PushVector4(ByteBuffer data,
org.lwjgl.util.vector.Vector4f vec)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector4f` `vec`

**Returns:** `void`

### public static void PushColor(ByteBuffer data,
Color colour)

**Parameters:**
- `ByteBuffer` `data`
- `Color` `colour`

**Returns:** `void`

### public static void PushMatrix3(ByteBuffer data,
org.lwjgl.util.vector.Matrix3f matrix)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Matrix3f` `matrix`

**Returns:** `void`

### public static void PushMatrix4(ByteBuffer data,
org.lwjgl.util.vector.Matrix4f matrix)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Matrix4f` `matrix`

**Returns:** `void`

### public static void PushIntArray(ByteBuffer data,
int[] is)

**Parameters:**
- `ByteBuffer` `data`
- `int[]` `is`

**Returns:** `void`

### public static void PushFloatArray(ByteBuffer data,
float[] fs)

**Parameters:**
- `ByteBuffer` `data`
- `float[]` `fs`

**Returns:** `void`

### public static void PushVector2Array(ByteBuffer data,
org.lwjgl.util.vector.Vector2f[] vs)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector2f[]` `vs`

**Returns:** `void`

### public static void PushVector3Array(ByteBuffer data,
org.lwjgl.util.vector.Vector3f[] vs)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector3f[]` `vs`

**Returns:** `void`

### public static void PushVector4Array(ByteBuffer data,
org.lwjgl.util.vector.Vector4f[] vs)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Vector4f[]` `vs`

**Returns:** `void`

### public static void PushMatrix3Array(ByteBuffer data,
org.lwjgl.util.vector.Matrix3f[] ms)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Matrix3f[]` `ms`

**Returns:** `void`

### public static void PushMatrix4Array(ByteBuffer data,
org.lwjgl.util.vector.Matrix4f[] ms)

**Parameters:**
- `ByteBuffer` `data`
- `org.lwjgl.util.vector.Matrix4f[]` `ms`

**Returns:** `void`

### public static void PushTextureArray(ByteBuffer data,
int[] ts)

**Parameters:**
- `ByteBuffer` `data`
- `int[]` `ts`

**Returns:** `void`

### public static void PushColorArray(ByteBuffer data,
Color[] cs)

**Parameters:**
- `ByteBuffer` `data`
- `Color[]` `cs`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\ShaderBuffer.html`*
