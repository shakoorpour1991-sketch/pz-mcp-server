---
title: zombie.core.textures.TextureID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureID

`public final class TextureID extends Asset implements IDestroyable, Serializable`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.TextureID

## Fields

### public static long totalGraphicMemory

### public static boolean useFiltering

### public static boolean useCompression

### public static boolean useCompressionOption

### public static float totalMemUsed

### public TextureID.TextureIDAssetParams assetParams

### public static final IntBuffer deleteTextureIDS

### public static final AssetType ASSET_TYPE

## Constructors

### public TextureID(AssetPath path,
AssetManager manager,
TextureID.TextureIDAssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`
- `TextureID.TextureIDAssetParams` `params`

### public TextureID(int width,
int height,
int flags)

**Parameters:**
- `int` `width`
- `int` `height`
- `int` `flags`

### public TextureID(int width,
int height,
int flags,
int format,
int internalFormat)

**Parameters:**
- `int` `width`
- `int` `height`
- `int` `flags`
- `int` `format`
- `int` `internalFormat`

### public TextureID(int width,
int height,
int flags,
boolean defered)

**Parameters:**
- `int` `width`
- `int` `height`
- `int` `flags`
- `boolean` `defered`

### public TextureID(ImageData image)

**Parameters:**
- `ImageData` `image`

### public TextureID(String path,
int red,
int green,
int blue)
throws Exception

**Parameters:**
- `String` `path`
- `int` `red`
- `int` `green`
- `int` `blue`

### public TextureID(String path)
throws Exception

**Parameters:**
- `String` `path`

### public TextureID(BufferedInputStream b,
String path,
boolean bDoMask)
throws Exception

**Parameters:**
- `BufferedInputStream` `b`
- `String` `path`
- `boolean` `bDoMask`

## Methods

### public static TextureID createSteamAvatar(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `TextureID`

### public int getID()

**Returns:** `int`

### public boolean bind()

binds the current texture

**Returns:** `boolean`

### public boolean bindalways()

**Returns:** `boolean`

### public void destroy()

Description copied from interface: IDestroyable

**Returns:** `void`

### public void freeMemory()

free memory space

**Returns:** `void`

### public WrappedBuffer getData()

**Returns:** `WrappedBuffer`

### public void setData(ByteBuffer bdata)

if the data is null will be free the memory from the RAM but not from the VRAM

**Parameters:**
- `ByteBuffer` `bdata`

**Returns:** `void`

### public ImageData getImageData()

**Returns:** `ImageData`

### public void setImageData(ImageData data)

**Parameters:**
- `ImageData` `data`

**Returns:** `void`

### public String getPathFileName()

**Returns:** `String`

### public boolean isDestroyed()

Description copied from interface: IDestroyable

**Returns:** `boolean`

### public boolean isSolid()

**Returns:** `boolean`

### public void setMagFilter(int filter)

**Parameters:**
- `int` `filter`

**Returns:** `void`

### public void setMinFilter(int filter)

**Parameters:**
- `int` `filter`

**Returns:** `void`

### public boolean hasMipMaps()

**Returns:** `boolean`

### public void setAssetParams(AssetManager.AssetParams params)

**Parameters:**
- `AssetManager.AssetParams` `params`

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureID.html`*
