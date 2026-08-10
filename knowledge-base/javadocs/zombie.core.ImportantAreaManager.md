---
title: zombie.core.ImportantAreaManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.ImportantAreaManager

`public class ImportantAreaManager extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.ImportantAreaManager

## Fields

### public static final int importantAreasMaximum

### public static final int importantAreasTimeout

### public static final LinkedList<ImportantArea> ImportantAreas

### public static final LinkedList<ImportantArea> ImportantAreasForDelete

## Constructors

### public ImportantAreaManager()

## Methods

### public static ImportantAreaManager getInstance()

**Returns:** `ImportantAreaManager`

### public final void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public final void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void saveDataFile()

**Returns:** `void`

### public ImportantArea updateOrAdd(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `ImportantArea`

### public void process(boolean serverPaused)

**Parameters:**
- `boolean` `serverPaused`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\ImportantAreaManager.html`*
