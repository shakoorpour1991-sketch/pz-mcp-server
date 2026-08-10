---
title: zombie.core.opengl.VBORenderer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.VBORenderer

`public final class VBORenderer extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.VBORenderer

## Fields

### public final VertexBufferObject.VertexFormat formatPositionColor

### public final VertexBufferObject.VertexFormat formatPositionColorUv

### public final VertexBufferObject.VertexFormat formatPositionColorUvDepth

### public final VertexBufferObject.VertexFormat formatPositionNormalColor

### public final VertexBufferObject.VertexFormat formatPositionNormalColorUv

## Constructors

### public VBORenderer()

## Methods

### public static VBORenderer getInstance()

**Returns:** `VBORenderer`

### public void setOffset(float dx,
float dy,
float dz)

**Parameters:**
- `float` `dx`
- `float` `dy`
- `float` `dz`

**Returns:** `void`

### public VBORenderer addElement()

**Returns:** `VBORenderer`

### public VBORenderer putByte(byte value)

**Parameters:**
- `byte` `value`

**Returns:** `VBORenderer`

### public VBORenderer putFloat(float value)

**Parameters:**
- `float` `value`

**Returns:** `VBORenderer`

### public VBORenderer putInt(int value)

**Parameters:**
- `int` `value`

**Returns:** `VBORenderer`

### public VBORenderer putShort(short value)

**Parameters:**
- `short` `value`

**Returns:** `VBORenderer`

### public void setFloats1(int byteOffset,
float f1)

**Parameters:**
- `int` `byteOffset`
- `float` `f1`

**Returns:** `void`

### public void setFloats2(int byteOffset,
float f1,
float f2)

**Parameters:**
- `int` `byteOffset`
- `float` `f1`
- `float` `f2`

**Returns:** `void`

### public void setFloats3(int byteOffset,
float f1,
float f2,
float f3)

**Parameters:**
- `int` `byteOffset`
- `float` `f1`
- `float` `f2`
- `float` `f3`

**Returns:** `void`

### public void setFloats4(int byteOffset,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `int` `byteOffset`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `void`

### public void setVertex(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setNormal(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setColor(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setUV1(float u,
float v)

**Parameters:**
- `float` `u`
- `float` `v`

**Returns:** `void`

### public void setUV2(float u,
float v)

**Parameters:**
- `float` `u`
- `float` `v`

**Returns:** `void`

### public void setDepth(float depth)

**Parameters:**
- `float` `depth`

**Returns:** `void`

### public void addElement(float x,
float y,
float z,
float u,
float v,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `u`
- `float` `v`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addElementDepth(float x,
float y,
float z,
float u,
float v,
float depth,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `u`
- `float` `v`
- `float` `depth`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addElement(float x,
float y,
float z,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addLine(float x0,
float y0,
float z0,
float x1,
float y1,
float z1,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addLine(float x0,
float y0,
float z0,
float x1,
float y1,
float z1,
float r0,
float g0,
float b0,
float a0,
float r1,
float g1,
float b1,
float a1)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `r0`
- `float` `g0`
- `float` `b0`
- `float` `a0`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`

**Returns:** `void`

### public void addRectOutline(float x0,
float y0,
float x1,
float y1,
float z,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addLineWithThickness(float x0,
float y0,
float z0,
float x1,
float y1,
float z1,
float thickness,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `thickness`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addTriangle(float x0,
float y0,
float z0,
float u0,
float v0,
float x1,
float y1,
float z1,
float u1,
float v1,
float x2,
float y2,
float z2,
float u2,
float v2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `u0`
- `float` `v0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `u1`
- `float` `v1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `u2`
- `float` `v2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addTriangleDepth(float x0,
float y0,
float z0,
float u0,
float v0,
float depth0,
float x1,
float y1,
float z1,
float u1,
float v1,
float depth1,
float x2,
float y2,
float z2,
float u2,
float v2,
float depth2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `u0`
- `float` `v0`
- `float` `depth0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `u1`
- `float` `v1`
- `float` `depth1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `u2`
- `float` `v2`
- `float` `depth2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addTriangleDepth(float x0,
float y0,
float z0,
float u0,
float v0,
float depth0,
float alpha0,
float x1,
float y1,
float z1,
float u1,
float v1,
float depth1,
float alpha1,
float x2,
float y2,
float z2,
float u2,
float v2,
float depth2,
float alpha2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `u0`
- `float` `v0`
- `float` `depth0`
- `float` `alpha0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `u1`
- `float` `v1`
- `float` `depth1`
- `float` `alpha1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `u2`
- `float` `v2`
- `float` `depth2`
- `float` `alpha2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addTriangle(float x0,
float y0,
float z0,
float x1,
float y1,
float z1,
float x2,
float y2,
float z2,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addQuad(float x0,
float y0,
float x1,
float y1,
float z,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addQuad(float x0,
float y0,
float u0,
float v0,
float x1,
float y1,
float u1,
float v1,
float z,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `u0`
- `float` `v0`
- `float` `x1`
- `float` `y1`
- `float` `u1`
- `float` `v1`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addQuad(float x0,
float y0,
float u0,
float v0,
float x1,
float y1,
float u1,
float v1,
float x2,
float y2,
float u2,
float v2,
float x3,
float y3,
float u3,
float v3,
float z,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `u0`
- `float` `v0`
- `float` `x1`
- `float` `y1`
- `float` `u1`
- `float` `v1`
- `float` `x2`
- `float` `y2`
- `float` `u2`
- `float` `v2`
- `float` `x3`
- `float` `y3`
- `float` `u3`
- `float` `v3`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addQuad(float x0,
float y0,
float z0,
float u0,
float v0,
float x1,
float y1,
float z1,
float u1,
float v1,
float x2,
float y2,
float z2,
float u2,
float v2,
float x3,
float y3,
float z3,
float u3,
float v3,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `u0`
- `float` `v0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `u1`
- `float` `v1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `u2`
- `float` `v2`
- `float` `x3`
- `float` `y3`
- `float` `z3`
- `float` `u3`
- `float` `v3`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addQuadDepth(float x0,
float y0,
float z0,
float u0,
float v0,
float depth0,
float x1,
float y1,
float z1,
float u1,
float v1,
float depth1,
float x2,
float y2,
float z2,
float u2,
float v2,
float depth2,
float x3,
float y3,
float z3,
float u3,
float v3,
float depth3,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `z0`
- `float` `u0`
- `float` `v0`
- `float` `depth0`
- `float` `x1`
- `float` `y1`
- `float` `z1`
- `float` `u1`
- `float` `v1`
- `float` `depth1`
- `float` `x2`
- `float` `y2`
- `float` `z2`
- `float` `u2`
- `float` `v2`
- `float` `depth2`
- `float` `x3`
- `float` `y3`
- `float` `z3`
- `float` `u3`
- `float` `v3`
- `float` `depth3`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void addAABB(float x,
float y,
float z,
float xMin,
float yMin,
float zMin,
float xMax,
float yMax,
float zMax,
float r,
float g,
float b,
float a,
boolean bQuads)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `xMin`
- `float` `yMin`
- `float` `zMin`
- `float` `xMax`
- `float` `yMax`
- `float` `zMax`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `bQuads`

**Returns:** `void`

### public void addAABB(float x,
float y,
float z,
float width,
float height,
float length,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `width`
- `float` `height`
- `float` `length`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addAABB(float x,
float y,
float z,
org.joml.Vector3f min,
org.joml.Vector3f max,
float r,
float g,
float b)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `org.joml.Vector3f` `min`
- `org.joml.Vector3f` `max`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void reserve(int numElements)

**Parameters:**
- `int` `numElements`

**Returns:** `void`

### public void flush()

**Returns:** `void`

### public void setDepthTest(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public void setDepthTestForAllRuns(Boolean enable)

**Parameters:**
- `Boolean` `enable`

**Returns:** `void`

### public void setUserDepthForAllRuns(Float depth)

**Parameters:**
- `Float` `depth`

**Returns:** `void`

### public void setUserDepth(float depth)

**Parameters:**
- `float` `depth`

**Returns:** `void`

### public void setLineWidth(float width)

**Parameters:**
- `float` `width`

**Returns:** `void`

### public void setMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setShaderProgram(ShaderProgram shaderProgram)

**Parameters:**
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void setTextureID(TextureID textureID)

**Parameters:**
- `TextureID` `textureID`

**Returns:** `void`

### public void setMinMagFilters(int minFilter,
int magFilter)

**Parameters:**
- `int` `minFilter`
- `int` `magFilter`

**Returns:** `void`

### public void setClampST(int s,
int t)

**Parameters:**
- `int` `s`
- `int` `t`

**Returns:** `void`

### public void startRun(VertexBufferObject.VertexFormat format)

**Parameters:**
- `VertexBufferObject.VertexFormat` `format`

**Returns:** `void`

### public void endRun()

**Returns:** `void`

### public void cmdPushAndLoadMatrix(int mode,
org.joml.Matrix4f m)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `m`

**Returns:** `void`

### public void cmdPushAndMultMatrix(int mode,
org.joml.Matrix4f m)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `m`

**Returns:** `void`

### public void cmdPopMatrix(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void cmdShader1f(String loc,
float f1)

**Parameters:**
- `String` `loc`
- `float` `f1`

**Returns:** `void`

### public void cmdShader2f(String loc,
float f1,
float f2)

**Parameters:**
- `String` `loc`
- `float` `f1`
- `float` `f2`

**Returns:** `void`

### public void cmdShader2f(int loc,
float f1,
float f2)

**Parameters:**
- `int` `loc`
- `float` `f1`
- `float` `f2`

**Returns:** `void`

### public void cmdShader3f(String loc,
float f1,
float f2,
float f3)

**Parameters:**
- `String` `loc`
- `float` `f1`
- `float` `f2`
- `float` `f3`

**Returns:** `void`

### public void cmdShader1f(int loc,
float f1)

**Parameters:**
- `int` `loc`
- `float` `f1`

**Returns:** `void`

### public void cmdShader4f(String loc,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `String` `loc`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `void`

### public void cmdShader4f(int loc,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `int` `loc`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `void`

### public void cmdUseProgram(ShaderProgram shaderProgram)

**Parameters:**
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void addBox(float width,
float height,
float length,
float r,
float g,
float b,
float a,
ShaderProgram shaderProgram)

**Parameters:**
- `float` `width`
- `float` `height`
- `float` `length`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void addCylinder_Fill(float baseRadius,
float topRadius,
float height,
int slices,
int stacks,
float r1,
float g1,
float b1,
float a1)

**Parameters:**
- `float` `baseRadius`
- `float` `topRadius`
- `float` `height`
- `int` `slices`
- `int` `stacks`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`

**Returns:** `void`

### public void addCylinder_Line(float baseRadius,
float topRadius,
float height,
int slices,
int stacks,
float r1,
float g1,
float b1,
float a1)

**Parameters:**
- `float` `baseRadius`
- `float` `topRadius`
- `float` `height`
- `int` `slices`
- `int` `stacks`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`

**Returns:** `void`

### public void addCylinder_Fill(float baseRadius,
float topRadius,
float height,
int slices,
int stacks,
float r1,
float g1,
float b1,
float a1,
ShaderProgram shaderProgram)

**Parameters:**
- `float` `baseRadius`
- `float` `topRadius`
- `float` `height`
- `int` `slices`
- `int` `stacks`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void addCylinder_Line(float baseRadius,
float topRadius,
float height,
int slices,
int stacks,
float r1,
float g1,
float b1,
float a1,
ShaderProgram shaderProgram)

**Parameters:**
- `float` `baseRadius`
- `float` `topRadius`
- `float` `height`
- `int` `slices`
- `int` `stacks`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void addCylinder(int drawStyle,
int orientation,
float baseRadius,
float topRadius,
float height,
int slices,
int stacks,
float r1,
float g1,
float b1,
float a1,
ShaderProgram shaderProgram)

**Parameters:**
- `int` `drawStyle`
- `int` `orientation`
- `float` `baseRadius`
- `float` `topRadius`
- `float` `height`
- `int` `slices`
- `int` `stacks`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `float` `a1`
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

### public void addDisk_Fill(float innerRadius,
float outerRadius,
int slices,
int loops,
TextureID textureID,
float red,
float green,
float blue,
float alpha)

**Parameters:**
- `float` `innerRadius`
- `float` `outerRadius`
- `int` `slices`
- `int` `loops`
- `TextureID` `textureID`
- `float` `red`
- `float` `green`
- `float` `blue`
- `float` `alpha`

**Returns:** `void`

### public void addDisk(int drawStyle,
int orientation,
float innerRadius,
float outerRadius,
int slices,
int loops,
TextureID textureID,
float red,
float green,
float blue,
float alpha)

**Parameters:**
- `int` `drawStyle`
- `int` `orientation`
- `float` `innerRadius`
- `float` `outerRadius`
- `int` `slices`
- `int` `loops`
- `TextureID` `textureID`
- `float` `red`
- `float` `green`
- `float` `blue`
- `float` `alpha`

**Returns:** `void`

### public void addTorus(double r,
double c,
int rSeg,
int cSeg,
float r1,
float g1,
float b1,
UI3DScene.Ray cameraRay)

**Parameters:**
- `double` `r`
- `double` `c`
- `int` `rSeg`
- `int` `cSeg`
- `float` `r1`
- `float` `g1`
- `float` `b1`
- `UI3DScene.Ray` `cameraRay`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\VBORenderer.html`*
