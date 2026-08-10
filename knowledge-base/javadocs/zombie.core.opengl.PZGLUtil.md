---
title: zombie.core.opengl.PZGLUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.PZGLUtil

`public class PZGLUtil extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.PZGLUtil

## Constructors

### public PZGLUtil()

## Methods

### public static void checkGLErrorThrow(String format,
Object... args)
throws org.lwjglx.opengl.OpenGLException

**Parameters:**
- `String` `format`
- `Object...` `args`

**Returns:** `void`

### public static void checkGLErrorThrowTexture(String format,
Object... args)
throws org.lwjglx.opengl.OpenGLException

**Parameters:**
- `String` `format`
- `Object...` `args`

**Returns:** `void`

### public static boolean checkGLError(boolean stackTrace)

**Parameters:**
- `boolean` `stackTrace`

**Returns:** `boolean`

### public static void InitGLDebugging()

**Returns:** `void`

### public static void printGLState(DebugType out)

**Parameters:**
- `DebugType` `out`

**Returns:** `void`

### public static void printGLState(PrintStream out)

**Parameters:**
- `PrintStream` `out`

**Returns:** `void`

### public static void loadMatrix(org.joml.Matrix4f matrix)

**Parameters:**
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void multMatrix(org.joml.Matrix4f matrix)

**Parameters:**
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void loadMatrix(int mode,
org.joml.Matrix4f matrix)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void multMatrix(int mode,
org.joml.Matrix4f matrix)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void pushAndLoadMatrix(int mode,
org.joml.Matrix4f matrix)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void pushAndMultMatrix(int mode,
org.joml.Matrix4f matrix)

**Parameters:**
- `int` `mode`
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public static void popMatrix(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\PZGLUtil.html`*
