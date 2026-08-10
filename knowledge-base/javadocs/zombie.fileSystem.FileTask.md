---
title: zombie.fileSystem.FileTask
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.fileSystem
---

# zombie.fileSystem.FileTask

`public abstract class FileTask extends Object implements Callable<Object>`

**Kind:** class · **Package:** zombie.fileSystem

## Inheritance
- java.lang.Object
- zombie.fileSystem.FileTask

## Constructors

### public FileTask(FileSystem fileSystem)

**Parameters:**
- `FileSystem` `fileSystem`

### public FileTask(FileSystem fileSystem,
IFileTaskCallback cb)

**Parameters:**
- `FileSystem` `fileSystem`
- `IFileTaskCallback` `cb`

## Methods

### public void handleResult(Object result)

**Parameters:**
- `Object` `result`

**Returns:** `void`

### public void setPriority(int priority)

**Parameters:**
- `int` `priority`

**Returns:** `void`

### public abstract void done()

**Returns:** `void`

### public String getErrorMessage()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\fileSystem\FileTask.html`*
