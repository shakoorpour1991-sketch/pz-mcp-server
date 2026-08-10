---
title: zombie.iso.fboRenderChunk.FBORenderChunkCamera
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.fboRenderChunk
---

# zombie.iso.fboRenderChunk.FBORenderChunkCamera

`public class FBORenderChunkCamera extends Object implements IModelCamera`

**Kind:** class · **Package:** zombie.iso.fboRenderChunk

## Inheritance
- java.lang.Object
- zombie.iso.fboRenderChunk.FBORenderChunkCamera

## Constructors

### public FBORenderChunkCamera()

## Methods

### public void set(FBORenderChunk renderChunk,
float x,
float y,
float z,
float angle)

**Parameters:**
- `FBORenderChunk` `renderChunk`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `angle`

**Returns:** `void`

### public void pushProjectionMatrix()

**Returns:** `void`

### public void pushModelViewMatrix(float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public void DoPushIsoStuff(float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public void DoPopIsoStuff()

**Returns:** `void`

### public void Begin()

**Returns:** `void`

### public void End()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\fboRenderChunk\FBORenderChunkCamera.html`*
