---
title: zombie.fileSystem.TexturePackDevice.PositionInputStream
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.TexturePackDevice.PositionInputStream

`public final class TexturePackDevice.PositionInputStream extends FilterInputStream`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- java.io.InputStream
- java.io.FilterInputStream
- zombie.fileSystem.TexturePackDevice.PositionInputStream

## Constructors

### public PositionInputStream(InputStream in)

**Parameters:**
- `InputStream` `in`

## Methods

### public long getPosition()

**Returns:** `long`

### public int read()
throws IOException

**Returns:** `int`

### public int read(byte[] b,
int off,
int len)
throws IOException

**Parameters:**
- `byte[]` `b`
- `int` `off`
- `int` `len`

**Returns:** `int`

### public long skip(long skip)
throws IOException

**Parameters:**
- `long` `skip`

**Returns:** `long`

### public void mark(int readlimit)

**Parameters:**
- `int` `readlimit`

**Returns:** `void`

### public void reset()
throws IOException

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\TexturePackDevice.PositionInputStream.html`*
