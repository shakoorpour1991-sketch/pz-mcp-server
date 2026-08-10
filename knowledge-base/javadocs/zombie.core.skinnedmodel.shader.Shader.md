---
title: zombie.core.skinnedmodel.shader.Shader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.shader
---

# zombie.core.skinnedmodel.shader.Shader

`public final class Shader extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.shader

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.shader.Shader

## Fields

### public int boneIndicesAttrib

### public int boneWeightsAttrib

### public int instancedDataAttrib

### public static final int INSTANCE_MAX

### public InstancedBuffer instancedData

## Constructors

### public Shader(String name,
boolean isStatic,
boolean instanced)

**Parameters:**
- `String` `name`
- `boolean` `isStatic`
- `boolean` `instanced`

## Methods

### public ShaderBufferData GetBufferData()

**Returns:** `ShaderBufferData`

### public boolean isStatic()

**Returns:** `boolean`

### public boolean isInstanced()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public ShaderProgram getShaderProgram()

**Returns:** `ShaderProgram`

### public void setTexture(Texture tex,
String unitName,
int textureUnit)

**Parameters:**
- `Texture` `tex`
- `String` `unitName`
- `int` `textureUnit`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public void Start()

**Returns:** `void`

### public void End()

**Returns:** `void`

### public void startCharacter(ModelSlotRenderData slotData,
ModelInstanceRenderData instData)

**Parameters:**
- `ModelSlotRenderData` `slotData`
- `ModelInstanceRenderData` `instData`

**Returns:** `void`

### public void updateAlpha(IsoGameCharacter chr,
int playerIndex)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `playerIndex`

**Returns:** `void`

### public void setAlpha(float alpha)

**Parameters:**
- `float` `alpha`

**Returns:** `void`

### public void setScale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public void updateParams()

**Returns:** `void`

### public void setMatrixPalette(org.lwjgl.util.vector.Matrix4f[] skin)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f[]` `skin`

**Returns:** `void`

### public void setMatrixPalette(FloatBuffer matrixPalette)

**Parameters:**
- `FloatBuffer` `matrixPalette`

**Returns:** `void`

### public void setMatrixPalette(FloatBuffer matrixPalette,
boolean transpose)

**Parameters:**
- `FloatBuffer` `matrixPalette`
- `boolean` `transpose`

**Returns:** `void`

### public void setMatrixPalette(org.joml.Matrix4f[] skin)

**Parameters:**
- `org.joml.Matrix4f[]` `skin`

**Returns:** `void`

### public void setTint(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setTextureRustA(float a)

**Parameters:**
- `float` `a`

**Returns:** `void`

### public void setTexturePainColor(float x,
float y,
float z,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `a`

**Returns:** `void`

### public void setTexturePainColor(org.joml.Vector3f vec,
float a)

**Parameters:**
- `org.joml.Vector3f` `vec`
- `float` `a`

**Returns:** `void`

### public void setTexturePainColor(org.joml.Vector4f vec)

**Parameters:**
- `org.joml.Vector4f` `vec`

**Returns:** `void`

### public void setReflectionParam(float timesOfDay,
float refWindows,
float refBody)

**Parameters:**
- `float` `timesOfDay`
- `float` `refWindows`
- `float` `refBody`

**Returns:** `void`

### public void setTextureUninstall1(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureUninstall2(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureLightsEnables1(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureLightsEnables2(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureDamage1Enables1(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureDamage1Enables2(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureDamage2Enables1(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setTextureDamage2Enables2(float[] matrix4f)

**Parameters:**
- `float[]` `matrix4f`

**Returns:** `void`

### public void setMatrixBlood1(float[] matrix1,
float[] matrix2)

**Parameters:**
- `float[]` `matrix1`
- `float[]` `matrix2`

**Returns:** `void`

### public void setMatrixBlood2(float[] matrix1,
float[] matrix2)

**Parameters:**
- `float[]` `matrix1`
- `float[]` `matrix2`

**Returns:** `void`

### public void setShaderAlpha(float a)

**Parameters:**
- `float` `a`

**Returns:** `void`

### public void setLight(int index,
float x,
float y,
float z,
float r,
float g,
float b,
float rad,
float animPlayerAngle,
ModelInstance inst)

**Parameters:**
- `int` `index`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `rad`
- `float` `animPlayerAngle`
- `ModelInstance` `inst`

**Returns:** `void`

### public void setLight(int index,
float x,
float y,
float z,
float r,
float g,
float b,
float rad,
float animPlayerAngle,
float offsetX,
float offsetY,
float offsetZ,
IsoMovingObject instObject)

**Parameters:**
- `int` `index`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `rad`
- `float` `animPlayerAngle`
- `float` `offsetX`
- `float` `offsetY`
- `float` `offsetZ`
- `IsoMovingObject` `instObject`

**Returns:** `void`

### public void setLightInst(int index,
float x,
float y,
float z,
float r,
float g,
float b,
float rad,
float animPlayerAngle,
float offsetX,
float offsetY,
float offsetZ,
ShaderPropertyBlock properties)

**Parameters:**
- `int` `index`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `rad`
- `float` `animPlayerAngle`
- `float` `offsetX`
- `float` `offsetY`
- `float` `offsetZ`
- `ShaderPropertyBlock` `properties`

**Returns:** `void`

### public void setHueShift(float hue)

**Parameters:**
- `float` `hue`

**Returns:** `void`

### public void setLightingAmount(float lighting)

**Parameters:**
- `float` `lighting`

**Returns:** `void`

### public void setTargetDepth(float targetDepth)

**Parameters:**
- `float` `targetDepth`

**Returns:** `void`

### public void setDepthBias(float bias)

**Parameters:**
- `float` `bias`

**Returns:** `void`

### public void setAmbient(float amb)

**Parameters:**
- `float` `amb`

**Returns:** `void`

### public void setAmbient(float ambr,
float ambg,
float ambb)

**Parameters:**
- `float` `ambr`
- `float` `ambg`
- `float` `ambb`

**Returns:** `void`

### public void setTransformMatrix(org.lwjgl.util.vector.Matrix4f matrix4f,
boolean transpose)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `matrix4f`
- `boolean` `transpose`

**Returns:** `void`

### public void StoreMatrix(org.joml.Matrix4f matrix4f)

**Parameters:**
- `org.joml.Matrix4f` `matrix4f`

**Returns:** `void`

### public void setTransformMatrix(org.joml.Matrix4f matrix4f,
boolean transpose)

**Parameters:**
- `org.joml.Matrix4f` `matrix4f`
- `boolean` `transpose`

**Returns:** `void`

### public void setMatrix(int location,
org.joml.Matrix4f matrix4f)

**Parameters:**
- `int` `location`
- `org.joml.Matrix4f` `matrix4f`

**Returns:** `void`

### public void setMatrix(int location,
float[] matrix4f)

**Parameters:**
- `int` `location`
- `float[]` `matrix4f`

**Returns:** `void`

### public boolean isVehicleShader()

**Returns:** `boolean`

### public void setHighResDepthMultiplier(float m)

**Parameters:**
- `float` `m`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\shader\Shader.html`*
