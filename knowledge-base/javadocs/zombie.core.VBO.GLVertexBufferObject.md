---
title: zombie.core.VBO.GLVertexBufferObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.VBO
---

# zombie.core.VBO.GLVertexBufferObject

`public class GLVertexBufferObject extends Object`

**Kind:** class · **Package:** zombie.core.VBO

## Inheritance
- java.lang.Object
- zombie.core.VBO.GLVertexBufferObject

## Description

Vertex buffer object wrapper

## Fields

### public static IGLBufferObject funcs

## Constructors

### public GLVertexBufferObject(long size,
int type,
int usage)

C'tor

**Parameters:**
- `long` `size`
- `int` `type`
- `int` `usage`

### public GLVertexBufferObject(int type,
int usage)

C'tor

**Parameters:**
- `int` `type`
- `int` `usage`

## Methods

### public static void init()

**Returns:** `void`

### public void create()

**Returns:** `void`

### public void clear()

Tells the driver we don't care about the data in our buffer any more (may improve performance before mapping)

**Returns:** `void`

### public ByteBuffer map(int size)

**Parameters:**
- `int` `size`

**Returns:** `ByteBuffer`

### public ByteBuffer map()

**Returns:** `ByteBuffer`

### public void orphan()

**Returns:** `void`

### public boolean unmap()

**Returns:** `boolean`

### public boolean isMapped()

**Returns:** `boolean`

### public void bufferData(ByteBuffer data)

**Parameters:**
- `ByteBuffer` `data`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public void bind()

**Returns:** `void`

### public void bindNone()

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public void enableVertexAttribArray(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void disableVertexAttribArray()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\VBO\GLVertexBufferObject.html`*
