---
title: zombie.iso.worldgen.WorldGenUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.WorldGenUtils

`public class WorldGenUtils extends Object`

**Kind:** class · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- zombie.iso.worldgen.WorldGenUtils

## Fields

### public static final WorldGenUtils INSTANCE

## Methods

### public String generateSeed()

**Returns:** `String`

### public void getFiles(String basePath)

**Parameters:**
- `String` `basePath`

**Returns:** `void`

### public int getFilesNum()

**Returns:** `int`

### public String getFile(int i)

**Parameters:**
- `int` `i`

**Returns:** `String`

### public String displayTable(String tableName)

**Parameters:**
- `String` `tableName`

**Returns:** `String`

### public String displayTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `String`

### public boolean canPlace(List<String> placement,
String floorName)

**Parameters:**
- `List<String>` `placement`
- `String` `floorName`

**Returns:** `boolean`

### public @Nullable IsoObject doesFloorExit(IsoChunk chunk,
int tileX,
int tileY,
int z)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `tileX`
- `int` `tileY`
- `int` `z`

**Returns:** `@Nullable IsoObject`

### public @Nullable IsoObject doesFloorExit(IsoCell cell,
int tileX,
int tileY,
int z)

**Parameters:**
- `IsoCell` `cell`
- `int` `tileX`
- `int` `tileY`
- `int` `z`

**Returns:** `@Nullable IsoObject`

### public String methodName(StackTraceElement trace)

**Parameters:**
- `StackTraceElement` `trace`

**Returns:** `String`

### public String methodsCall(String header,
int depth,
String... args)

**Parameters:**
- `String` `header`
- `int` `depth`
- `String...` `args`

**Returns:** `String`

### public void showTimers(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public void showTimersTotal(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public void resetTimers(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public void getTimerKept(String clazzStr,
String fieldName)

**Parameters:**
- `String` `clazzStr`
- `String` `fieldName`

**Returns:** `void`

### public int getCornerOfGeneration(int b)

**Parameters:**
- `int` `b`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\WorldGenUtils.html`*
