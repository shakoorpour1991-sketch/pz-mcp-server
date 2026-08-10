---
title: zombie.util.ByteBufferOutputStream
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.ByteBufferOutputStream

`public class ByteBufferOutputStream extends OutputStream`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- java.io.OutputStream
- zombie.util.ByteBufferOutputStream

## Constructors

### public ByteBufferOutputStream(ByteBuffer wrappedBuffer,
boolean autoEnlarge)

**Parameters:**
- `ByteBuffer` `wrappedBuffer`
- `boolean` `autoEnlarge`

## Methods

### public ByteBuffer toByteBuffer()

**Returns:** `ByteBuffer`

### public ByteBuffer getWrappedBuffer()

**Returns:** `ByteBuffer`

### public void clear()

**Returns:** `void`

### public void flip()

**Returns:** `void`

### public void write(int bty)

**Parameters:**
- `int` `bty`

**Returns:** `void`

### public void write(byte[] bytes)

**Parameters:**
- `byte[]` `bytes`

**Returns:** `void`

### public void write(byte[] bytes,
int off,
int len)

**Parameters:**
- `byte[]` `bytes`
- `int` `off`
- `int` `len`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\ByteBufferOutputStream.html`*
