---
title: zombie.network.CustomizationManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.CustomizationManager

`public class CustomizationManager extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.CustomizationManager

## Constructors

### public CustomizationManager()

## Methods

### public static CustomizationManager getInstance()

**Returns:** `CustomizationManager`

### public void load()

**Returns:** `void`

### public Texture getClientCustomBackground()

**Returns:** `Texture`

### public static ByteBuffer loadCompressAndResizeInstance(BufferedImage image,
int dimensionW,
int dimensionH)

**Parameters:**
- `BufferedImage` `image`
- `int` `dimensionW`
- `int` `dimensionH`

**Returns:** `ByteBuffer`

### public static ByteBuffer loadAndResizeInstance(BufferedImage image,
int dimensionW,
int dimensionH)

**Parameters:**
- `BufferedImage` `image`
- `int` `dimensionW`
- `int` `dimensionH`

**Returns:** `ByteBuffer`

### public static double getIconRatio(BufferedImage src,
BufferedImage icon)

**Parameters:**
- `BufferedImage` `src`
- `BufferedImage` `icon`

**Returns:** `double`

### public static ByteBuffer convertToByteBuffer(BufferedImage image)

**Parameters:**
- `BufferedImage` `image`

**Returns:** `ByteBuffer`

### public static ByteBuffer compressToByteBuffer(BufferedImage image,
String formatName)

**Parameters:**
- `BufferedImage` `image`
- `String` `formatName`

**Returns:** `ByteBuffer`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\CustomizationManager.html`*
