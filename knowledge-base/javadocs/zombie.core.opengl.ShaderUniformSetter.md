---
title: zombie.core.opengl.ShaderUniformSetter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.ShaderUniformSetter

`public final class ShaderUniformSetter extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.opengl.ShaderUniformSetter

## Constructors

### public ShaderUniformSetter()

## Methods

### public ShaderUniformSetter setNext(ShaderUniformSetter next)

**Parameters:**
- `ShaderUniformSetter` `next`

**Returns:** `ShaderUniformSetter`

### public void render()

**Returns:** `void`

### public void postRender()

**Returns:** `void`

### public void invokeAll()

**Returns:** `void`

### public static ShaderUniformSetter uniform1f(int location,
float f1)

**Parameters:**
- `int` `location`
- `float` `f1`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform2f(int location,
float f1,
float f2)

**Parameters:**
- `int` `location`
- `float` `f1`
- `float` `f2`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform3f(int location,
float f1,
float f2,
float f3)

**Parameters:**
- `int` `location`
- `float` `f1`
- `float` `f2`
- `float` `f3`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform4f(int location,
float f1,
float f2,
float f3,
float f4)

**Parameters:**
- `int` `location`
- `float` `f1`
- `float` `f2`
- `float` `f3`
- `float` `f4`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform1f(Shader shader,
String location,
float f1)

**Parameters:**
- `Shader` `shader`
- `String` `location`
- `float` `f1`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform1i(int location,
int i1)

**Parameters:**
- `int` `location`
- `int` `i1`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform2i(int location,
int i1,
int i2)

**Parameters:**
- `int` `location`
- `int` `i1`
- `int` `i2`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform3i(int location,
int i1,
int i2,
int i3)

**Parameters:**
- `int` `location`
- `int` `i1`
- `int` `i2`
- `int` `i3`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform4i(int location,
int i1,
int i2,
int i3,
int i4)

**Parameters:**
- `int` `location`
- `int` `i1`
- `int` `i2`
- `int` `i3`
- `int` `i4`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter uniform1i(Shader shader,
String location,
int i1)

**Parameters:**
- `Shader` `shader`
- `String` `location`
- `int` `i1`

**Returns:** `ShaderUniformSetter`

### public static ShaderUniformSetter alloc()

**Returns:** `ShaderUniformSetter`

### public static void release(ShaderUniformSetter e)

**Parameters:**
- `ShaderUniformSetter` `e`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\ShaderUniformSetter.html`*
