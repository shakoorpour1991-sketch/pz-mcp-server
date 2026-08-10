---
title: zombie.core.textures.GLFramebufferObjectEXT
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.GLFramebufferObjectEXT

`public final class GLFramebufferObjectEXT extends Object implements IGLFramebufferObject`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.GLFramebufferObjectEXT

## Constructors

### public GLFramebufferObjectEXT()

## Methods

### public int GL_FRAMEBUFFER()

**Returns:** `int`

### public int GL_RENDERBUFFER()

**Returns:** `int`

### public int GL_COLOR_ATTACHMENT0()

**Returns:** `int`

### public int GL_DEPTH_ATTACHMENT()

**Returns:** `int`

### public int GL_STENCIL_ATTACHMENT()

**Returns:** `int`

### public int GL_DEPTH_STENCIL()

**Returns:** `int`

### public int GL_DEPTH24_STENCIL8()

**Returns:** `int`

### public int GL_FRAMEBUFFER_COMPLETE()

**Returns:** `int`

### public int GL_FRAMEBUFFER_UNDEFINED()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_FORMATS()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER()

**Returns:** `int`

### public int GL_FRAMEBUFFER_UNSUPPORTED()

**Returns:** `int`

### public int GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE()

**Returns:** `int`

### public int glGenFramebuffers()

**Returns:** `int`

### public void glBindFramebuffer(int target,
int framebuffer)

**Parameters:**
- `int` `target`
- `int` `framebuffer`

**Returns:** `void`

### public void glFramebufferTexture2D(int target,
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

### public int glGenRenderbuffers()

**Returns:** `int`

### public void glBindRenderbuffer(int target,
int renderbuffer)

**Parameters:**
- `int` `target`
- `int` `renderbuffer`

**Returns:** `void`

### public void glRenderbufferStorage(int target,
int internalformat,
int width,
int height)

**Parameters:**
- `int` `target`
- `int` `internalformat`
- `int` `width`
- `int` `height`

**Returns:** `void`

### public void glFramebufferRenderbuffer(int target,
int attachment,
int renderbuffertarget,
int renderbuffer)

**Parameters:**
- `int` `target`
- `int` `attachment`
- `int` `renderbuffertarget`
- `int` `renderbuffer`

**Returns:** `void`

### public int glCheckFramebufferStatus(int target)

**Parameters:**
- `int` `target`

**Returns:** `int`

### public void glDeleteFramebuffers(int renderbuffer)

**Parameters:**
- `int` `renderbuffer`

**Returns:** `void`

### public void glDeleteRenderbuffers(int renderbuffer)

**Parameters:**
- `int` `renderbuffer`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\GLFramebufferObjectEXT.html`*
