---
title: zombie.fileSystem.TexturePackDevice
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.TexturePackDevice

`public final class TexturePackDevice extends Object implements IFileDevice`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- zombie.fileSystem.TexturePackDevice

## Constructors

### public TexturePackDevice(String name,
int flags)

**Parameters:**
- `String` `name`
- `int` `flags`

## Methods

### public IFile createFile(IFile child)

**Parameters:**
- `IFile` `child`

**Returns:** `IFile`

### public void destroyFile(IFile file)

**Parameters:**
- `IFile` `file`

**Returns:** `void`

### public InputStream createStream(String path,
InputStream child)
throws IOException

**Parameters:**
- `String` `path`
- `InputStream` `child`

**Returns:** `InputStream`

### public void destroyStream(InputStream stream)

**Parameters:**
- `InputStream` `stream`

**Returns:** `void`

### public String name()

**Returns:** `String`

### public void getSubTextureInfo(FileSystem.TexturePackTextures result)
throws IOException

**Parameters:**
- `FileSystem.TexturePackTextures` `result`

**Returns:** `void`

### public boolean isAlpha(String page)

**Parameters:**
- `String` `page`

**Returns:** `boolean`

### public int getTextureFlags()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\TexturePackDevice.html`*
