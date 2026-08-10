---
title: zombie.IndieGL
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.IndieGL

`public final class IndieGL extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.IndieGL

## Fields

### public static int nCount

## Constructors

### public IndieGL()

## Methods

### public static void glBlendFunc(int a,
int b)

**Parameters:**
- `int` `a`
- `int` `b`

**Returns:** `void`

### public static void glBlendFuncSeparate(int a,
int b,
int c,
int d)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `void`

### public static void restoreMainThreadValue_glBlendFuncSeparate()

**Returns:** `void`

### public static void glDefaultBlendFunc()

**Returns:** `void`

### public static void glDefaultBlendFuncA()

**Returns:** `void`

### public static void glDepthFunc(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glDepthMask(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static void StartShader(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public static void StartShader(Shader shader,
int playerIndex)

**Parameters:**
- `Shader` `shader`
- `int` `playerIndex`

**Returns:** `void`

### public static void StartShader(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public static void StartShader(int id,
int playerIndex)

**Parameters:**
- `int` `id`
- `int` `playerIndex`

**Returns:** `void`

### public static void StartShader(Shader shader,
ShaderUniformSetter uniforms)

**Parameters:**
- `Shader` `shader`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void StartShader(Shader shader,
int playerIndex,
ShaderUniformSetter uniforms)

**Parameters:**
- `Shader` `shader`
- `int` `playerIndex`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void StartShader(int id,
ShaderUniformSetter uniforms)

**Parameters:**
- `int` `id`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void StartShader(int id,
int playerIndex,
ShaderUniformSetter uniforms)

**Parameters:**
- `int` `id`
- `int` `playerIndex`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void EndShader()

**Returns:** `void`

### public static void pushShader(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public static void pushShader(Shader shader,
ShaderUniformSetter uniforms)

**Parameters:**
- `Shader` `shader`
- `ShaderUniformSetter` `uniforms`

**Returns:** `void`

### public static void popShader(Shader shader)

**Parameters:**
- `Shader` `shader`

**Returns:** `void`

### public static void bindShader(Shader shader,
Runnable invoke)

**Parameters:**
- `Shader` `shader`
- `Runnable` `invoke`

**Returns:** `void`

### public static <T1> void bindShader(Shader shader,
T1 val1,
Invokers.Params1.ICallback<T1> invoker)

**Returns:** `void`

### public static <T1,T2> void bindShader(Shader shader,
T1 val1,
T2 val2,
Invokers.Params2.ICallback<T1,T2> invoker)

**Returns:** `void`

### public static <T1,T2,T3> void bindShader(Shader shader,
T1 val1,
T2 val2,
T3 val3,
Invokers.Params3.ICallback<T1,T2,T3> invoker)

**Returns:** `void`

### public static <T1,T2,T3,T4> void bindShader(Shader shader,
T1 val1,
T2 val2,
T3 val3,
T4 val4,
Invokers.Params4.ICallback<T1,T2,T3,T4> invoker)

**Returns:** `void`

### public static void shaderSetSamplerUnit(Shader shader,
String loc,
int textureUnit)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `int` `textureUnit`

**Returns:** `void`

### public static void shaderSetValue(Shader shader,
String loc,
float val)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `float` `val`

**Returns:** `void`

### public static void shaderSetValue(Shader shader,
String loc,
int val)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `int` `val`

**Returns:** `void`

### public static void shaderSetValue(Shader shader,
String loc,
Vector2 val)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `Vector2` `val`

**Returns:** `void`

### public static void shaderSetValue(Shader shader,
String loc,
Vector3 val)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `Vector3` `val`

**Returns:** `void`

### public static void shaderSetVector2(Shader shader,
String loc,
float valX,
float valY)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `float` `valX`
- `float` `valY`

**Returns:** `void`

### public static void shaderSetVector3(Shader shader,
String loc,
float valX,
float valY,
float valZ)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `float` `valX`
- `float` `valY`
- `float` `valZ`

**Returns:** `void`

### public static void shaderSetVector4(Shader shader,
String loc,
float valX,
float valY,
float valZ,
float valW)

**Parameters:**
- `Shader` `shader`
- `String` `loc`
- `float` `valX`
- `float` `valY`
- `float` `valZ`
- `float` `valW`

**Returns:** `void`

### public static void ShaderUpdate1i(int shaderID,
int uniform,
int uniformValue)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `int` `uniformValue`

**Returns:** `void`

### public static void ShaderUpdate1f(int shaderID,
int uniform,
float uniformValue)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `uniformValue`

**Returns:** `void`

### public static void ShaderUpdate2f(int shaderID,
int uniform,
float value1,
float value2)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`

**Returns:** `void`

### public static void ShaderUpdate3f(int shaderID,
int uniform,
float value1,
float value2,
float value3)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`

**Returns:** `void`

### public static void ShaderUpdate4f(int shaderID,
int uniform,
float value1,
float value2,
float value3,
float value4)

**Parameters:**
- `int` `shaderID`
- `int` `uniform`
- `float` `value1`
- `float` `value2`
- `float` `value3`
- `float` `value4`

**Returns:** `void`

### public static void glBlendFuncA(int a,
int b)

**Parameters:**
- `int` `a`
- `int` `b`

**Returns:** `void`

### public static void glEnable(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glDoStartFrame(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public static void glDoStartFrame(int w,
int h,
float zoom,
int player,
boolean isTextFrame)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`
- `boolean` `isTextFrame`

**Returns:** `void`

### public static void glDoEndFrame()

**Returns:** `void`

### public static void glColorMask(boolean bln,
boolean bln1,
boolean bln2,
boolean bln3)

**Parameters:**
- `boolean` `bln`
- `boolean` `bln1`
- `boolean` `bln2`
- `boolean` `bln3`

**Returns:** `void`

### public static void glColorMaskA(boolean bln,
boolean bln1,
boolean bln2,
boolean bln3)

**Parameters:**
- `boolean` `bln`
- `boolean` `bln1`
- `boolean` `bln2`
- `boolean` `bln3`

**Returns:** `void`

### public static void glEnableA(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glAlphaFunc(int a,
float b)

**Parameters:**
- `int` `a`
- `float` `b`

**Returns:** `void`

### public static void glAlphaFuncA(int a,
float b)

**Parameters:**
- `int` `a`
- `float` `b`

**Returns:** `void`

### public static void glStencilFunc(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glStencilFuncA(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glStencilOp(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glStencilOpA(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glTexParameteri(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `void`

### public static void glTexParameteriActual(int glTexture2d,
int glTextureMagFilter,
int glLinear)

**Parameters:**
- `int` `glTexture2d`
- `int` `glTextureMagFilter`
- `int` `glLinear`

**Returns:** `void`

### public static void glStencilMask(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glStencilMaskA(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glDisable(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glClear(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glClearA(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glDisableA(int a)

**Parameters:**
- `int` `a`

**Returns:** `void`

### public static void glLoadIdentity()

**Returns:** `void`

### public static void glBind(Texture offscreenTexture)

**Parameters:**
- `Texture` `offscreenTexture`

**Returns:** `void`

### public static void enableAlphaTest()

**Returns:** `void`

### public static void disableAlphaTest()

**Returns:** `void`

### public static void enableBlend()

**Returns:** `void`

### public static void disableBlend()

**Returns:** `void`

### public static void enableDepthTest()

**Returns:** `void`

### public static void disableDepthTest()

**Returns:** `void`

### public static void enableScissorTest()

**Returns:** `void`

### public static void disableScissorTest()

**Returns:** `void`

### public static void enableStencilTest()

**Returns:** `void`

### public static void disableStencilTest()

**Returns:** `void`

### public static boolean isMaxZoomLevel()

**Returns:** `boolean`

### public static boolean isMinZoomLevel()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\IndieGL.html`*
