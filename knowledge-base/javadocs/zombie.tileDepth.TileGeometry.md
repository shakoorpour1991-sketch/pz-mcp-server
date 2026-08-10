---
title: zombie.tileDepth.TileGeometry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileGeometry

`public final class TileGeometry extends Object`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileGeometry

## Constructors

### public TileGeometry(String mediaAbsPath)

**Parameters:**
- `String` `mediaAbsPath`

## Methods

### public void init()

**Returns:** `void`

### public void write()

**Returns:** `void`

### public void setGeometry(String tilesetName,
int col,
int row,
ArrayList<TileGeometryFile.Geometry> geometry)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `ArrayList<TileGeometryFile.Geometry>` `geometry`

**Returns:** `void`

### public void copyGeometry(String tilesetName,
int col,
int row,
ArrayList<TileGeometryFile.Geometry> geometries)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`
- `ArrayList<TileGeometryFile.Geometry>` `geometries`

**Returns:** `void`

### public ArrayList<TileGeometryFile.Geometry> getGeometry(String tilesetName,
int col,
int row)

**Parameters:**
- `String` `tilesetName`
- `int` `col`
- `int` `row`

**Returns:** `ArrayList<TileGeometryFile.Geometry>`

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

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileGeometry.html`*
