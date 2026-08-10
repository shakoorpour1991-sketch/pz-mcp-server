---
title: zombie.core.textures.PNGDecoder
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.PNGDecoder

`public final class PNGDecoder extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.PNGDecoder

## Fields

### public static final int IDAT

### public static final int fdAT

### public int maskId

### public BooleanGrid mask

### public boolean doMask

### public long readTotal

## Constructors

### public PNGDecoder(InputStream input,
boolean doMask)
throws IOException

**Parameters:**
- `InputStream` `input`
- `boolean` `doMask`

## Methods

### public int getHeight()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public boolean hasAlphaChannel()

**Returns:** `boolean`

### public boolean hasAlpha()

**Returns:** `boolean`

### public boolean isRGB()

**Returns:** `boolean`

### public boolean isAnimated()

**Returns:** `boolean`

### public int getNumFrames()

**Returns:** `int`

### public int getNumPlays()

**Returns:** `int`

### public APNGFrame getCurrentFrame()

**Returns:** `APNGFrame`

### public void overwriteTRNS(byte r,
byte g,
byte b)

**Parameters:**
- `byte` `r`
- `byte` `g`
- `byte` `b`

**Returns:** `void`

### public PNGDecoder.Format decideTextureFormat(PNGDecoder.Format fmt)

**Parameters:**
- `PNGDecoder.Format` `fmt`

**Returns:** `PNGDecoder.Format`

### public void decode(ByteBuffer buffer,
int stride,
int inHeight,
PNGDecoder.Format fmt,
int inChunkType)
throws IOException

**Parameters:**
- `ByteBuffer` `buffer`
- `int` `stride`
- `int` `inHeight`
- `PNGDecoder.Format` `fmt`
- `int` `inChunkType`

**Returns:** `void`

### public void decodeFlipped(ByteBuffer buffer,
int stride,
int inHeight,
PNGDecoder.Format fmt,
int inChunkType)
throws IOException

**Parameters:**
- `ByteBuffer` `buffer`
- `int` `stride`
- `int` `inHeight`
- `PNGDecoder.Format` `fmt`
- `int` `inChunkType`

**Returns:** `void`

### public void decodeStartOfNextFrame()
throws IOException

**Returns:** `void`

### public void decodeFrame(MipMapLevel compositeBuffer,
ImageDataFrame frame,
ByteBuffer buffer,
int stride,
PNGDecoder.Format fmt)
throws IOException

**Parameters:**
- `MipMapLevel` `compositeBuffer`
- `ImageDataFrame` `frame`
- `ByteBuffer` `buffer`
- `int` `stride`
- `PNGDecoder.Format` `fmt`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\PNGDecoder.html`*
