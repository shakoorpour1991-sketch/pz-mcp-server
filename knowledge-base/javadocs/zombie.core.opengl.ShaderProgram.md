---
title: zombie.core.opengl.ShaderProgram
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.ShaderProgram

`public final class ShaderProgram extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.ShaderProgram

## Fields

### public final org.joml.Matrix4f modelView

### public final org.joml.Matrix4f projection

## Methods

### public String getName()

**Returns:** `String`

### public void addCompileListener(IShaderProgramListener listener)

**Parameters:**
- `IShaderProgramListener` `listener`

**Returns:** `void`

### public void removeCompileListener(IShaderProgramListener listener)

**Parameters:**
- `IShaderProgramListener` `listener`

**Returns:** `void`

### public void compile()

Compiles or re-compiles this program.

**Returns:** `void`

### public ShaderUnit addShader(String fileName,
ShaderUnit.Type unitType)

**Parameters:**
- `String` `fileName`
- `ShaderUnit.Type` `unitType`

**Returns:** `ShaderUnit`

### public static ShaderProgram createShaderProgram(String name,
boolean isStatic,
boolean isInstanced,
boolean compile)

**Parameters:**
- `String` `name`
- `boolean` `isStatic`
- `boolean` `isInstanced`
- `boolean` `compile`

**Returns:** `ShaderProgram`

### @Deprecated
public static int createVertShader(String fileName)

> ⚠️ **Deprecated**

Creates a vertex shader unit.
Deprecated: Use ShaderProgram.createShaderProgram instead.

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### @Deprecated
public static int createFragShader(String fileName)

> ⚠️ **Deprecated**

Creates a fragment shader unit.
Deprecated: Use ShaderProgram.createShaderProgram instead.

**Parameters:**
- `String` `fileName`

**Returns:** `int`

### public static void printLogInfo(int obj)

**Parameters:**
- `int` `obj`

**Returns:** `void`

### public static String getLogInfo(int obj)

**Parameters:**
- `int` `obj`

**Returns:** `String`

### public boolean isCompiled()

**Returns:** `boolean`

### public void destroy()

**Returns:** `void`

### public int getShaderID()

**Returns:** `int`

### public void Start()

**Returns:** `void`

### public void End()

**Returns:** `void`

### public void setSamplerUnit(String loc,
int textureUnit)

**Parameters:**
- `String` `loc`
- `int` `textureUnit`

**Returns:** `void`

### public void setValueColor(String loc,
int rgba)

**Parameters:**
- `String` `loc`
- `int` `rgba`

**Returns:** `void`

### public void setValueColorRGB(String loc,
int rgb)

**Parameters:**
- `String` `loc`
- `int` `rgb`

**Returns:** `void`

### public void setValue(String loc,
float val)

**Parameters:**
- `String` `loc`
- `float` `val`

**Returns:** `void`

### public void setValue(String loc,
int val)

**Parameters:**
- `String` `loc`
- `int` `val`

**Returns:** `void`

### public void setValue(String loc,
Vector3 val)

**Parameters:**
- `String` `loc`
- `Vector3` `val`

**Returns:** `void`

### public void setValue(String loc,
Vector2 val)

**Parameters:**
- `String` `loc`
- `Vector2` `val`

**Returns:** `void`

### public void setVector2(String loc,
float valX,
float valY)

**Parameters:**
- `String` `loc`
- `float` `valX`
- `float` `valY`

**Returns:** `void`

### public void setVector3(String loc,
float valX,
float valY,
float valZ)

**Parameters:**
- `String` `loc`
- `float` `valX`
- `float` `valY`
- `float` `valZ`

**Returns:** `void`

### public void setVector4(String loc,
float valX,
float valY,
float valZ,
float valW)

**Parameters:**
- `String` `loc`
- `float` `valX`
- `float` `valY`
- `float` `valZ`
- `float` `valW`

**Returns:** `void`

### public final ShaderProgram.Uniform getUniform(String loc,
int type)

**Parameters:**
- `String` `loc`
- `int` `type`

**Returns:** `ShaderProgram.Uniform`

### public ShaderProgram.Uniform getUniform(String loc,
int type,
boolean bWarn)

**Parameters:**
- `String` `loc`
- `int` `type`
- `boolean` `bWarn`

**Returns:** `ShaderProgram.Uniform`

### public void setValue(String loc,
org.lwjgl.util.vector.Matrix4f matrix4f)

**Parameters:**
- `String` `loc`
- `org.lwjgl.util.vector.Matrix4f` `matrix4f`

**Returns:** `void`

### public void setValue(String loc,
org.joml.Matrix4f matrix4f)

**Parameters:**
- `String` `loc`
- `org.joml.Matrix4f` `matrix4f`

**Returns:** `void`

### public void setValue(String loc,
Texture tex,
int samplerUnit)

**Parameters:**
- `String` `loc`
- `Texture` `tex`
- `int` `samplerUnit`

**Returns:** `void`

### public void setVector2(int id,
float x,
float y)

**Parameters:**
- `int` `id`
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void setVector3(int id,
float x,
float y,
float z)

**Parameters:**
- `int` `id`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setVector4(int id,
float x,
float y,
float z,
float w)

**Parameters:**
- `int` `id`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `w`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\ShaderProgram.html`*
