---
title: zombie.fileSystem.FileSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.FileSystem

`public abstract class FileSystem extends Object`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- zombie.fileSystem.FileSystem

## Fields

### public static final int INVALID_ASYNC

## Constructors

### public FileSystem()

## Methods

### public abstract boolean mount(IFileDevice device)

**Parameters:**
- `IFileDevice` `device`

**Returns:** `boolean`

### public abstract boolean unMount(IFileDevice device)

**Parameters:**
- `IFileDevice` `device`

**Returns:** `boolean`

### public abstract IFile open(DeviceList deviceList,
String path,
int mode)

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`
- `int` `mode`

**Returns:** `IFile`

### public abstract void close(IFile file)

**Parameters:**
- `IFile` `file`

**Returns:** `void`

### public abstract int openAsync(DeviceList deviceList,
String path,
int mode,
IFileTask2Callback cb)

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`
- `int` `mode`
- `IFileTask2Callback` `cb`

**Returns:** `int`

### public abstract void closeAsync(IFile file,
IFileTask2Callback cb)

**Parameters:**
- `IFile` `file`
- `IFileTask2Callback` `cb`

**Returns:** `void`

### public abstract void cancelAsync(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public abstract InputStream openStream(DeviceList deviceList,
String path)
throws IOException

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`

**Returns:** `InputStream`

### public abstract void closeStream(InputStream stream)

**Parameters:**
- `InputStream` `stream`

**Returns:** `void`

### public abstract int runAsync(FileTask task)

**Parameters:**
- `FileTask` `task`

**Returns:** `int`

### public abstract void updateAsyncTransactions()

**Returns:** `void`

### public abstract boolean hasWork()

**Returns:** `boolean`

### public abstract DeviceList getDefaultDevice()

**Returns:** `DeviceList`

### public abstract void mountTexturePack(String name,
FileSystem.TexturePackTextures subTextures,
int flags)

**Parameters:**
- `String` `name`
- `FileSystem.TexturePackTextures` `subTextures`
- `int` `flags`

**Returns:** `void`

### public abstract DeviceList getTexturePackDevice(String name)

**Parameters:**
- `String` `name`

**Returns:** `DeviceList`

### public abstract int getTexturePackFlags(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public abstract boolean getTexturePackAlpha(String name,
String page)

**Parameters:**
- `String` `name`
- `String` `page`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\FileSystem.html`*
