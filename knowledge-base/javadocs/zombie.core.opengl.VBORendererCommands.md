---
title: zombie.core.opengl.VBORendererCommands
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.VBORendererCommands

`public final class VBORendererCommands extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.VBORendererCommands

## Fields

### public static final short COMMAND_StartRun

### public static final short COMMAND_RenderRun

### public static final short COMMAND_PushAndLoadMatrix

### public static final short COMMAND_PushAndMultMatrix

### public static final short COMMAND_PopMatrix

### public static final short COMMAND_UseProgram

### public static final short COMMAND_Shader1f

### public static final short COMMAND_Shader2f

### public static final short COMMAND_Shader3f

### public static final short COMMAND_Shader4f

## Methods

### public void adopt(VBORendererCommands rhs)

**Parameters:**
- `VBORendererCommands` `rhs`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public int position()

**Returns:** `int`

### public void putFloat(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public void putInt(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public void putMatrix4f(org.joml.Matrix4f m)

**Parameters:**
- `org.joml.Matrix4f` `m`

**Returns:** `void`

### public void putShort(short value)

**Parameters:**
- `short` `value`

**Returns:** `void`

### public void putObject(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `void`

### public float getFloat()

**Returns:** `float`

### public int getInt()

**Returns:** `int`

### public float getShort()

**Returns:** `float`

### public <C> C getObject(Class<C> clazz)

**Returns:** `C`

### public void invoke()

**Returns:** `void`

### public void cmdStartRun()

**Returns:** `void`

### public void cmdRenderRun()

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

### public void cmdShader1f(int uniform,
float f1)

**Parameters:**
- `int` `uniform`
- `float` `f1`

**Returns:** `void`

### public void cmdShader2f(int uniform,
float f1,
float f2)

**Parameters:**
- `int` `uniform`
- `float` `f1`
- `float` `f2`

**Returns:** `void`

### public void cmdShader3f(int uniform,
float f1,
float f2,
float f3)

**Parameters:**
- `int` `uniform`
- `float` `f1`
- `float` `f2`
- `float` `f3`

**Returns:** `void`

### public void cmdShader4f(int uniform,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `int` `uniform`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `void`

### public void cmdUseProgram(ShaderProgram shaderProgram)

**Parameters:**
- `ShaderProgram` `shaderProgram`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\VBORendererCommands.html`*
