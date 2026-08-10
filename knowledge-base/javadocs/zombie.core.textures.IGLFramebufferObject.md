---
title: zombie.core.textures.IGLFramebufferObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.textures
---

# zombie.core.textures.IGLFramebufferObject

`public interface IGLFramebufferObject`

**Kind:** interface · **Package:** zombie.core.textures

## Methods

### int GL_FRAMEBUFFER()

**Returns:** `int`

### int GL_RENDERBUFFER()

**Returns:** `int`

### int GL_COLOR_ATTACHMENT0()

**Returns:** `int`

### int GL_DEPTH_ATTACHMENT()

**Returns:** `int`

### int GL_STENCIL_ATTACHMENT()

**Returns:** `int`

### int GL_DEPTH_STENCIL()

**Returns:** `int`

### int GL_DEPTH24_STENCIL8()

**Returns:** `int`

### int GL_FRAMEBUFFER_COMPLETE()

**Returns:** `int`

### int GL_FRAMEBUFFER_UNDEFINED()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_FORMATS()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER()

**Returns:** `int`

### int GL_FRAMEBUFFER_UNSUPPORTED()

**Returns:** `int`

### int GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE()

**Returns:** `int`

### int glGenFramebuffers()

**Returns:** `int`

### void glBindFramebuffer(int target,
int framebuffer)

**Parameters:**
- `int` `target`
- `int` `framebuffer`

**Returns:** `void`

### void glFramebufferTexture2D(int target,
int attachment,
int textarget,
int texture,
int level)

**Parameters:**
- `int` `target`
- `int` `attachment`
- `int` `textarget`
- `int` `texture`
- `int` `level`

**Returns:** `void`

### int glGenRenderbuffers()

**Returns:** `int`

### void glBindRenderbuffer(int target,
int renderbuffer)

**Parameters:**
- `int` `target`
- `int` `renderbuffer`

**Returns:** `void`

### void glRenderbufferStorage(int target,
int internalformat,
int width,
int height)

**Parameters:**
- `int` `target`
- `int` `internalformat`
- `int` `width`
- `int` `height`

**Returns:** `void`

### void glFramebufferRenderbuffer(int target,
int attachment,
int renderbuffertarget,
int renderbuffer)

**Parameters:**
- `int` `target`
- `int` `attachment`
- `int` `renderbuffertarget`
- `int` `renderbuffer`

**Returns:** `void`

### int glCheckFramebufferStatus(int target)

**Parameters:**
- `int` `target`

**Returns:** `int`

### void glDeleteFramebuffers(int renderbuffer)

**Parameters:**
- `int` `renderbuffer`

**Returns:** `void`

### void glDeleteRenderbuffers(int renderbuffer)

**Parameters:**
- `int` `renderbuffer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\IGLFramebufferObject.html`*
