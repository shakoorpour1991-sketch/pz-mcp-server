---
title: zombie.core.rendering.ShaderBufferData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.rendering
---

# zombie.core.rendering.ShaderBufferData

`public class ShaderBufferData extends Object`

**Kind:** class · **Package:** zombie.core.rendering

## Inheritance
- java.lang.Object
- zombie.core.rendering.ShaderBufferData

## Fields

### public HashMap<String, ShaderParameter> parameters

## Constructors

### public ShaderBufferData(Shader shader)

**Parameters:**
- `Shader` `shader`

## Methods

### public void ResetParameters()

**Returns:** `void`

### public void ResetUniforms()

**Returns:** `void`

### public void ResetInstanced()

**Returns:** `void`

### public void CopyParameters(ShaderPropertyBlock props)

**Parameters:**
- `ShaderPropertyBlock` `props`

**Returns:** `void`

### public void CopyUniforms(ShaderPropertyBlock props)

**Parameters:**
- `ShaderPropertyBlock` `props`

**Returns:** `void`

### public void CopyInstanced(ShaderPropertyBlock props)

**Parameters:**
- `ShaderPropertyBlock` `props`

**Returns:** `void`

### public int GetSize()

**Returns:** `int`

### public int GetCurrentInstance()

**Returns:** `int`

### public void PushParameters(InstancedBuffer buffer)

**Parameters:**
- `InstancedBuffer` `buffer`

**Returns:** `void`

### public void PushUniforms()

**Returns:** `void`

### public void PushInstanced(InstancedBuffer buffer)

**Parameters:**
- `InstancedBuffer` `buffer`

**Returns:** `void`

### public void PushInstanced(InstancedBuffer buffer,
ShaderPropertyBlock block)

**Parameters:**
- `InstancedBuffer` `buffer`
- `ShaderPropertyBlock` `block`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\rendering\ShaderBufferData.html`*
