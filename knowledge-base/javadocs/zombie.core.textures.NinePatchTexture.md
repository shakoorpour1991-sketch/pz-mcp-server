---
title: zombie.core.textures.NinePatchTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.NinePatchTexture

`public class NinePatchTexture extends Asset`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.NinePatchTexture

## Fields

### public static final AssetType ASSET_TYPE

### public static final int TOP_LEFT

### public static final int TOP_MIDDLE

### public static final int TOP_RIGHT

### public static final int MIDDLE_LEFT

### public static final int MIDDLE_CENTER

### public static final int MIDDLE_RIGHT

### public static final int BOTTOM_LEFT

### public static final int BOTTOM_MIDDLE

### public static final int BOTTOM_RIGHT

## Methods

### public static NinePatchTexture getSharedTexture(String path)

**Parameters:**
- `String` `path`

**Returns:** `NinePatchTexture`

### public static void onTexturePacksChanged()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

### public int getColumnWidth(int column)

**Parameters:**
- `int` `column`

**Returns:** `int`

### public int getRowHeight(int row)

**Parameters:**
- `int` `row`

**Returns:** `int`

### public int getMinWidth()

**Returns:** `int`

### public int getMinHeight()

**Returns:** `int`

### public boolean hasTopRow()

**Returns:** `boolean`

### public boolean hasBottomRow()

**Returns:** `boolean`

### public boolean hasLeftColumn()

**Returns:** `boolean`

### public boolean hasRightColumn()

**Returns:** `boolean`

### public boolean is9x9()

**Returns:** `boolean`

### public boolean is3x1()

**Returns:** `boolean`

### public boolean is1x3()

**Returns:** `boolean`

### public void render(float x,
float y,
float width,
float height)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`

**Returns:** `void`

### public void render(float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setImageData(ImageData imageData)

**Parameters:**
- `ImageData` `imageData`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\NinePatchTexture.html`*
