---
title: zombie.core.textures.ImageData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.ImageData

`public final class ImageData extends Object implements Serializable`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.ImageData

## Fields

### public MipMapLevel data

the data of image

### public boolean alphaPaddingDone

### public boolean preserveTransparentColor

### public BooleanGrid mask

### public int id

### public static final int MIP_LEVEL_IDX_OFFSET

## Constructors

### public ImageData(TextureID texture,
WrappedBuffer bb)

**Parameters:**
- `TextureID` `texture`
- `WrappedBuffer` `bb`

### public ImageData(String path)
throws Exception

**Parameters:**
- `String` `path`

### public ImageData(int width,
int height)

creates a new empty imageData

**Parameters:**
- `int` `width` — the height of imageData
- `int` `height`

### public ImageData(int width,
int height,
WrappedBuffer data)

**Parameters:**
- `int` `width`
- `int` `height`
- `WrappedBuffer` `data`

### public ImageData(ImageDataFrame frame)

**Parameters:**
- `ImageDataFrame` `frame`

### public ImageData(InputStream b,
boolean bDoMask)
throws Exception

**Parameters:**
- `InputStream` `b`
- `boolean` `bDoMask`

## Methods

### public static ImageData createSteamAvatar(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `ImageData`

### public MipMapLevel getData()

**Returns:** `MipMapLevel`

### public void makeTransp(byte red,
byte green,
byte blue)

make the image transparent

**Parameters:**
- `byte` `red` — the red value (0-255)
- `byte` `green` — the green value (0-255)
- `byte` `blue` — the blue value (0-255)

**Returns:** `void`

### public void makeTransp(byte red,
byte green,
byte blue,
byte alpha)

make the image transparent

**Parameters:**
- `byte` `red` — the red value (0-255)
- `byte` `green` — the green value (0-255)
- `byte` `blue` — the blue value (0-255)
- `byte` `alpha` — the alpha value that will be setted (0-255)

**Returns:** `void`

### public void setData(BufferedImage image)

**Parameters:**
- `BufferedImage` `image`

**Returns:** `void`

### public void setData(Raster rasterData)

**Parameters:**
- `Raster` `rasterData`

**Returns:** `void`

### public int getHeight()

**Returns:** `int`

### public int getHeightHW()

**Returns:** `int`

### public boolean isSolid()

**Returns:** `boolean`

### public int getWidth()

**Returns:** `int`

### public int getWidthHW()

**Returns:** `int`

### public int getMipMapCount()

**Returns:** `int`

### public MipMapLevel getMipMapData(int idx)

**Parameters:**
- `int` `idx`

**Returns:** `MipMapLevel`

### public void initMipMaps()

**Returns:** `void`

### public void dispose()

**Returns:** `void`

### public static int calculateNumMips(int widthHW,
int heightHW)

**Parameters:**
- `int` `widthHW`
- `int` `heightHW`

**Returns:** `int`

### public static int getPixelDiscard(ByteBuffer dataBuff,
int width,
int height,
int x,
int y,
int[] result)

**Parameters:**
- `ByteBuffer` `dataBuff`
- `int` `width`
- `int` `height`
- `int` `x`
- `int` `y`
- `int[]` `result`

**Returns:** `int`

### public static int[] getPixelClamped(ByteBuffer dataBuff,
int width,
int height,
int x,
int y,
int[] result)

**Parameters:**
- `ByteBuffer` `dataBuff`
- `int` `width`
- `int` `height`
- `int` `x`
- `int` `y`
- `int[]` `result`

**Returns:** `int[]`

### public static void setPixel(ByteBuffer dataBuff,
int width,
int height,
int x,
int y,
int[] pixelRGBA)

**Parameters:**
- `ByteBuffer` `dataBuff`
- `int` `width`
- `int` `height`
- `int` `x`
- `int` `y`
- `int[]` `pixelRGBA`

**Returns:** `void`

### public static int getNextMipDimension(int dim)

**Parameters:**
- `int` `dim`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\ImageData.html`*
