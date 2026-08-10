---
title: zombie.core.skinnedmodel.model.VertexBufferObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.VertexBufferObject

`public final class VertexBufferObject extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.model.VertexBufferObject

## Description

Created by LEMMYATI on 03/01/14.

## Fields

### public static IGLBufferObject funcs

### public boolean isStatic

## Constructors

### public VertexBufferObject()

### @Deprecated
public VertexBufferObject(VertexPositionNormalTangentTexture[] vertices,
int[] elements)

> ⚠️ **Deprecated**

**Parameters:**
- `VertexPositionNormalTangentTexture[]` `vertices`
- `int[]` `elements`

### @Deprecated
public VertexBufferObject(VertexPositionNormalTangentTextureSkin[] vertices,
int[] elements,
boolean bReverse)

> ⚠️ **Deprecated**

**Parameters:**
- `VertexPositionNormalTangentTextureSkin[]` `vertices`
- `int[]` `elements`
- `boolean` `bReverse`

### public VertexBufferObject(VertexBufferObject.VertexArray vertices,
int[] elements)

**Parameters:**
- `VertexBufferObject.VertexArray` `vertices`
- `int[]` `elements`

### public VertexBufferObject(VertexBufferObject.VertexArray vertices,
int[] elements,
boolean bReverse)

**Parameters:**
- `VertexBufferObject.VertexArray` `vertices`
- `int[]` `elements`
- `boolean` `bReverse`

## Methods

### public VertexBufferObject.Vbo LoadSoftwareVBO(ByteBuffer vertices,
VertexBufferObject.Vbo vbo,
int[] elements)

**Parameters:**
- `ByteBuffer` `vertices`
- `VertexBufferObject.Vbo` `vbo`
- `int[]` `elements`

**Returns:** `VertexBufferObject.Vbo`

### public void clear()

**Returns:** `void`

### public int BeginInstancedDraw(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `int`

### public void FinishInstancedDraw(Shader shader,
boolean bBlendWeights)

**Parameters:**
- `Shader` `shader`
- `boolean` `bBlendWeights`

**Returns:** `void`

### public boolean BeginDraw(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `boolean`

### public void Draw(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public void DrawInstanced(Shader shader,
int instanceCount)

**Parameters:**
- `Shader` `shader`
- `int` `instanceCount`

**Returns:** `void`

### public void DrawStrip(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public void FinishDraw(Shader shader,
boolean bBlendWeights)

**Parameters:**
- `Shader` `shader`
- `boolean` `bBlendWeights`

**Returns:** `void`

### public static void FinishDraw(VertexBufferObject.VertexFormat vertexFormat,
Shader shader,
boolean bBlendWeights)

**Parameters:**
- `VertexBufferObject.VertexFormat` `vertexFormat`
- `Shader` `shader`
- `boolean` `bBlendWeights`

**Returns:** `void`

### public void PushDrawCall()

**Returns:** `void`

### public static void getModelViewProjection(org.joml.Matrix4f mvp)

**Parameters:**
- `org.joml.Matrix4f` `mvp`

**Returns:** `void`

### public static float getDepthValueAt(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static void setModelViewProjection(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public static void setModelViewProjection(ShaderProgram shaderProgram)

**Parameters:**
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\VertexBufferObject.html`*
