---
title: zombie.core.VBO.GLBufferObject15
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.VBO
---

# zombie.core.VBO.GLBufferObject15

`public final class GLBufferObject15 extends Object implements IGLBufferObject`

**Kind:** class · **Package:** zombie.core.VBO

## Inheritance
- java.lang.Object
- zombie.core.VBO.GLBufferObject15

## Constructors

### public GLBufferObject15()

## Methods

### public int GL_ARRAY_BUFFER()

**Returns:** `int`

### public int GL_ELEMENT_ARRAY_BUFFER()

**Returns:** `int`

### public int GL_STATIC_DRAW()

**Returns:** `int`

### public int GL_STREAM_DRAW()

**Returns:** `int`

### public int GL_BUFFER_SIZE()

**Returns:** `int`

### public int GL_WRITE_ONLY()

**Returns:** `int`

### public int glGenBuffers()

**Returns:** `int`

### public void glBindBuffer(int target,
int buffer)

**Parameters:**
- `int` `target`
- `int` `buffer`

**Returns:** `void`

### public void glDeleteBuffers(int buffers)

**Parameters:**
- `int` `buffers`

**Returns:** `void`

### public void glBufferData(int target,
ByteBuffer data,
int usage)

**Parameters:**
- `int` `target`
- `ByteBuffer` `data`
- `int` `usage`

**Returns:** `void`

### public void glBufferData(int target,
long dataSize,
int usage)

**Parameters:**
- `int` `target`
- `long` `dataSize`
- `int` `usage`

**Returns:** `void`

### public ByteBuffer glMapBuffer(int target,
int access,
long length,
ByteBuffer oldBuffer)

**Parameters:**
- `int` `target`
- `int` `access`
- `long` `length`
- `ByteBuffer` `oldBuffer`

**Returns:** `ByteBuffer`

### public boolean glUnmapBuffer(int target)

**Parameters:**
- `int` `target`

**Returns:** `boolean`

### public void glGetBufferParameter(int target,
int pname,
IntBuffer params)

**Parameters:**
- `int` `target`
- `int` `pname`
- `IntBuffer` `params`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\VBO\GLBufferObject15.html`*
