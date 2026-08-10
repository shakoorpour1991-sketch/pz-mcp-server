---
title: zombie.fileSystem.IFileDevice
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.fileSystem
---

# zombie.fileSystem.IFileDevice

`public interface IFileDevice`

**Kind:** interface · **Package:** zombie.fileSystem

## Methods

### IFile createFile(IFile child)

**Parameters:**
- `IFile` `child`

**Returns:** `IFile`

### void destroyFile(IFile file)

**Parameters:**
- `IFile` `file`

**Returns:** `void`

### InputStream createStream(String path,
InputStream child)
throws IOException

**Parameters:**
- `String` `path`
- `InputStream` `child`

**Returns:** `InputStream`

### void destroyStream(InputStream stream)

**Parameters:**
- `InputStream` `stream`

**Returns:** `void`

### String name()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\IFileDevice.html`*
