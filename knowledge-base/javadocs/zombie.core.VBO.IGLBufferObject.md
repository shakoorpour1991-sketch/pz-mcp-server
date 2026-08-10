---
title: zombie.core.VBO.IGLBufferObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.VBO
---

# zombie.core.VBO.IGLBufferObject

`public interface IGLBufferObject`

**Kind:** interface · **Package:** zombie.core.VBO

## Methods

### int GL_ARRAY_BUFFER()

**Returns:** `int`

### int GL_ELEMENT_ARRAY_BUFFER()

**Returns:** `int`

### int GL_STATIC_DRAW()

**Returns:** `int`

### int GL_STREAM_DRAW()

**Returns:** `int`

### int GL_BUFFER_SIZE()

**Returns:** `int`

### int GL_WRITE_ONLY()

**Returns:** `int`

### int glGenBuffers()

**Returns:** `int`

### void glBindBuffer(int target,
int buffer)

**Parameters:**
- `int` `target`
- `int` `buffer`

**Returns:** `void`

### void glDeleteBuffers(int buffers)

**Parameters:**
- `int` `buffers`

**Returns:** `void`

### void glBufferData(int target,
ByteBuffer data,
int usage)

**Parameters:**
- `int` `target`
- `ByteBuffer` `data`
- `int` `usage`

**Returns:** `void`

### void glBufferData(int target,
long data_size,
int usage)

**Parameters:**
- `int` `target`
- `long` `data_size`
- `int` `usage`

**Returns:** `void`

### ByteBuffer glMapBuffer(int target,
int access,
long length,
ByteBuffer old_buffer)

**Parameters:**
- `int` `target`
- `int` `access`
- `long` `length`
- `ByteBuffer` `old_buffer`

**Returns:** `ByteBuffer`

### boolean glUnmapBuffer(int target)

**Parameters:**
- `int` `target`

**Returns:** `boolean`

### void glGetBufferParameter(int target,
int pname,
IntBuffer params)

**Parameters:**
- `int` `target`
- `int` `pname`
- `IntBuffer` `params`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\VBO\IGLBufferObject.html`*
