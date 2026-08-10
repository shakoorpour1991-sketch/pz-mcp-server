---
title: zombie.seating.SeatingData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.seating
---

# zombie.seating.SeatingData

`public final class SeatingData extends Object`

**Kind:** class · **Package:** zombie.seating

## Inheritance
- java.lang.Object
- zombie.seating.SeatingData

## Constructors

### public SeatingData(String mediaAbsPath)

**Parameters:**
- `String` `mediaAbsPath`

## Methods

### public void init()

**Returns:** `void`

### public void initMerged()

**Returns:** `void`

### public void write()

**Returns:** `void`

### public void setProperty(String tilesetName,
int col,
int row,
String key,
String value)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `key`
- `String` `value`

**Returns:** `void`

### public String getProperty(String tilesetName,
int col,
int row,
String key)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `key`

**Returns:** `String`

### public int addPosition(String tilesetName,
int col,
int row,
String id)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `id`

**Returns:** `int`

### public void removePosition(String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `void`

### public int getPositionCount(String tilesetName,
int col,
int row)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `int`

### public zombie.seating.SeatingFile.Position getPositionByIndex(String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `zombie.seating.SeatingFile.Position`

### public String getPositionID(String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `String`

### public zombie.seating.SeatingFile.Position getPositionWithID(String tilesetName,
int col,
int row,
String id)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `id`

**Returns:** `zombie.seating.SeatingFile.Position`

### public boolean hasPositionWithID(String tilesetName,
int col,
int row,
String id)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `String` `id`

**Returns:** `boolean`

### public org.joml.Vector3f getPositionTranslate(String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `org.joml.Vector3f`

### public HashMap<String,String> getPositionProperties(String tilesetName,
int col,
int row,
int index)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`

**Returns:** `HashMap<String,String>`

### public String getPositionProperty(String tilesetName,
int col,
int row,
int index,
String key)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `int` `index`
- `String` `key`

**Returns:** `String`

### public void Reset()

**Returns:** `void`

### public void fixDefaultPositions()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\seating\SeatingData.html`*
