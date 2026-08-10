---
title: zombie.fileSystem.DiskFileDevice
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.DiskFileDevice

`public final class DiskFileDevice extends Object implements IFileDevice`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- zombie.fileSystem.DiskFileDevice

## Constructors

### public DiskFileDevice(String name)

**Parameters:**
- `String` `name`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\DiskFileDevice.html`*
