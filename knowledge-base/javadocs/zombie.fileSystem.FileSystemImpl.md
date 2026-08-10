---
title: zombie.fileSystem.FileSystemImpl
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.FileSystemImpl

`public final class FileSystemImpl extends FileSystem`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- zombie.fileSystem.FileSystem
- zombie.fileSystem.FileSystemImpl

## Fields

### public static final HashMap<String,Boolean> TexturePackCompression

## Constructors

### public FileSystemImpl()

## Methods

### public boolean mount(IFileDevice device)

**Parameters:**
- `IFileDevice` `device`

**Returns:** `boolean`

### public boolean unMount(IFileDevice device)

**Parameters:**
- `IFileDevice` `device`

**Returns:** `boolean`

### public IFile open(DeviceList deviceList,
String path,
int mode)

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`
- `int` `mode`

**Returns:** `IFile`

### public void close(IFile file)

**Parameters:**
- `IFile` `file`

**Returns:** `void`

### public int openAsync(DeviceList deviceList,
String path,
int mode,
IFileTask2Callback cb)

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`
- `int` `mode`
- `IFileTask2Callback` `cb`

**Returns:** `int`

### public void closeAsync(IFile file,
IFileTask2Callback cb)

**Parameters:**
- `IFile` `file`
- `IFileTask2Callback` `cb`

**Returns:** `void`

### public void cancelAsync(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public InputStream openStream(DeviceList deviceList,
String path)
throws IOException

**Parameters:**
- `DeviceList` `deviceList`
- `String` `path`

**Returns:** `InputStream`

### public void closeStream(InputStream stream)

**Parameters:**
- `InputStream` `stream`

**Returns:** `void`

### public int runAsync(FileTask fileTask)

**Parameters:**
- `FileTask` `fileTask`

**Returns:** `int`

### public void updateAsyncTransactions()

**Returns:** `void`

### public boolean hasWork()

**Returns:** `boolean`

### public DeviceList getDefaultDevice()

**Returns:** `DeviceList`

### public void mountTexturePack(String name,
FileSystem.TexturePackTextures subTextures,
int flags)

**Parameters:**
- `String` `name`
- `FileSystem.TexturePackTextures` `subTextures`
- `int` `flags`

**Returns:** `void`

### public DeviceList getTexturePackDevice(String name)

**Parameters:**
- `String` `name`

**Returns:** `DeviceList`

### public int getTexturePackFlags(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public boolean getTexturePackAlpha(String name,
String page)

**Parameters:**
- `String` `name`
- `String` `page`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\FileSystemImpl.html`*
