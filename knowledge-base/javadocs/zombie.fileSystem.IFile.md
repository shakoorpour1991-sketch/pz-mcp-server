---
title: zombie.fileSystem.IFile
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.fileSystem
---

# zombie.fileSystem.IFile

`public interface IFile`

**Kind:** interface · **Package:** zombie.fileSystem

## Methods

### boolean open(String path,
int mode)

**Parameters:**
- `String` `path`
- `int` `mode`

**Returns:** `boolean`

### void close()

**Returns:** `void`

### boolean read(byte[] buffer,
long size)

**Parameters:**
- `byte[]` `buffer`
- `long` `size`

**Returns:** `boolean`

### boolean write(byte[] buffer,
long size)

**Parameters:**
- `byte[]` `buffer`
- `long` `size`

**Returns:** `boolean`

### byte[] getBuffer()

**Returns:** `byte[]`

### long size()

**Returns:** `long`

### boolean seek(FileSeekMode mode,
long pos)

**Parameters:**
- `FileSeekMode` `mode`
- `long` `pos`

**Returns:** `boolean`

### long pos()

**Returns:** `long`

### InputStream getInputStream()

**Returns:** `InputStream`

### IFileDevice getDevice()

**Returns:** `IFileDevice`

### void release()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\IFile.html`*
