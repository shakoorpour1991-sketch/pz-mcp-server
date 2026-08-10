---
title: zombie.iso.MapFiles
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.MapFiles

`public final class MapFiles extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.MapFiles

## Fields

### public final String mapDirectoryName

### public final String mapDirectoryZfsPath

### public final String mapDirectoryAbsolutePath

### public final int priority

### public int minX

### public int minY

### public int maxX

### public int maxY

### public final HashMap<String, LotHeader> infoHeaders

### public final ArrayList<String> infoHeaderNames

### public final HashMap<String,String> infoFileNames

### public final HashMap<String, ChunkGenerationStatus> infoFileModded

### public BooleanGrid bgHasCell

### public int minCell300X

### public int minCell300Y

### public int maxCell300X

### public int maxCell300Y

### public BooleanGrid bgHasCell300

## Constructors

### public MapFiles(String mapDirectoryName,
String mapDirectoryZfsPath,
String mapDirectoryAbsolutePath,
int priority)

**Parameters:**
- `String` `mapDirectoryName`
- `String` `mapDirectoryZfsPath`
- `String` `mapDirectoryAbsolutePath`
- `int` `priority`

## Methods

### public int getWidthInCells()

**Returns:** `int`

### public int getHeightInCells()

**Returns:** `int`

### public boolean load()

**Returns:** `boolean`

### public void postLoad()

**Returns:** `void`

### public boolean isValidCellPos(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `boolean`

### public LotHeader getLotHeader(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `LotHeader`

### public boolean hasCell(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `boolean`

### public boolean hasCell300(int cell300X,
int cell300Y)

**Parameters:**
- `int` `cell300X`
- `int` `cell300Y`

**Returns:** `boolean`

### public void Dispose()

**Returns:** `void`

### public static ArrayList<MapFiles> getCurrentMapFiles()

**Returns:** `ArrayList<MapFiles>`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\MapFiles.html`*
