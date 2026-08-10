---
title: zombie.core.skinnedmodel.model.FileTask_LoadMesh
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.FileTask_LoadMesh

`public class FileTask_LoadMesh extends FileTask_AbstractLoadModel`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.fileSystem.FileTask
- zombie.core.skinnedmodel.model.FileTask_AbstractLoadModel
- zombie.core.skinnedmodel.model.FileTask_LoadMesh

## Constructors

### public FileTask_LoadMesh(ModelMesh mesh,
FileSystem fileSystem,
IFileTaskCallback cb)

**Parameters:**
- `ModelMesh` `mesh`
- `FileSystem` `fileSystem`
- `IFileTaskCallback` `cb`

## Methods

### public String getErrorMessage()

**Returns:** `String`

### public void done()

**Returns:** `void`

### public String getRawFileName()

**Returns:** `String`

### public ProcessedAiScene loadX()
throws IOException

**Returns:** `ProcessedAiScene`

### public ProcessedAiScene loadFBX()
throws IOException

**Returns:** `ProcessedAiScene`

### public ProcessedAiScene loadGLTF()
throws IOException

**Returns:** `ProcessedAiScene`

### public ModelTxt loadTxt()
throws IOException

**Returns:** `ModelTxt`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\FileTask_LoadMesh.html`*
