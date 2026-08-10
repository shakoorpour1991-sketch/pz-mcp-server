---
title: zombie.core.utils.ImageUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.utils
---

# zombie.core.utils.ImageUtils

`public class ImageUtils extends Object`

**Kind:** class · **Package:** zombie.core.utils

## Inheritance
- java.lang.Object
- zombie.core.utils.ImageUtils

## Fields

### public static boolean useMipmap

## Methods

### public static void depureTexture(Texture texture,
float limit)

**Parameters:**
- `Texture` `texture`
- `float` `limit`

**Returns:** `void`

### public static int getNextPowerOfTwo(int fold)

**Parameters:**
- `int` `fold`

**Returns:** `int`

### public static int getNextPowerOfTwoHW(int fold)

**Parameters:**
- `int` `fold`

**Returns:** `int`

### public static Texture getScreenShot()

**Returns:** `Texture`

### public static ByteBuffer makeTransp(ByteBuffer data,
int red,
int green,
int blue,
int widthHW,
int heightHW)

**Parameters:**
- `ByteBuffer` `data`
- `int` `red`
- `int` `green`
- `int` `blue`
- `int` `widthHW`
- `int` `heightHW`

**Returns:** `ByteBuffer`

### public static ByteBuffer makeTransp(ByteBuffer data,
int red,
int green,
int blue,
int alpha,
int widthHW,
int heightHW)

**Parameters:**
- `ByteBuffer` `data`
- `int` `red`
- `int` `green`
- `int` `blue`
- `int` `alpha`
- `int` `widthHW`
- `int` `heightHW`

**Returns:** `ByteBuffer`

### public static void saveBmpImage(Texture texture,
String path)

**Parameters:**
- `Texture` `texture`
- `String` `path`

**Returns:** `void`

### public static void saveImage(Texture texture,
String path,
String format)

**Parameters:**
- `Texture` `texture`
- `String` `path`
- `String` `format`

**Returns:** `void`

### public static void saveJpgImage(Texture texture,
String path)

**Parameters:**
- `Texture` `texture`
- `String` `path`

**Returns:** `void`

### public static void savePngImage(Texture texture,
String path)

**Parameters:**
- `Texture` `texture`
- `String` `path`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\utils\ImageUtils.html`*
