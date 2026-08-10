---
title: zombie.worldMap.ImagePyramid
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.ImagePyramid

`public final class ImagePyramid extends Object`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.worldMap.ImagePyramid

## Constructors

### public ImagePyramid()

## Methods

### public void setDirectory(String directory)

**Parameters:**
- `String` `directory`

**Returns:** `void`

### public void setZipFile(String zipFile)

**Parameters:**
- `String` `zipFile`

**Returns:** `void`

### public boolean isValidTile(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public Texture getImage(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Texture`

### public ImagePyramid.PyramidTexture getTexture(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ImagePyramid.PyramidTexture`

### public void checkCalledQueue()

**Returns:** `void`

### public void checkCancelQueue()

**Returns:** `void`

### public void checkLoadingQueue()

**Returns:** `void`

### public ImagePyramid.PyramidTexture getReadyTexture(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ImagePyramid.PyramidTexture`

### public ImagePyramid.PyramidTexture getLowerResTexture(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ImagePyramid.PyramidTexture`

### public int getMinFilter()

**Returns:** `int`

### public int getMagFilter()

**Returns:** `int`

### public int getClampS()

**Returns:** `int`

### public int getClampT()

**Returns:** `int`

### public void generateFiles(String imageFile,
String outputDirectory)
throws Exception

**Parameters:**
- `String` `imageFile`
- `String` `outputDirectory`

**Returns:** `void`

### public FileSystem openZipFile()

**Returns:** `FileSystem`

### public void generateZip(String imageFile,
String zipFile)
throws Exception

**Parameters:**
- `String` `imageFile`
- `String` `zipFile`

**Returns:** `void`

### public boolean isDestroyed()

**Returns:** `boolean`

### public void destroy()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\ImagePyramid.html`*
