---
title: zombie.core.physics.FileTask_LoadPhysicsShape
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.FileTask_LoadPhysicsShape

`public class FileTask_LoadPhysicsShape extends FileTask_AbstractLoadModel`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.fileSystem.FileTask
- zombie.core.skinnedmodel.model.FileTask_AbstractLoadModel
- zombie.core.physics.FileTask_LoadPhysicsShape

## Constructors

### public FileTask_LoadPhysicsShape(PhysicsShape mesh,
FileSystem fileSystem,
IFileTaskCallback cb)

**Parameters:**
- `PhysicsShape` `mesh`
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
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\FileTask_LoadPhysicsShape.html`*
