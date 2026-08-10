---
title: zombie.core.textures.Texture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.Texture

`public class Texture extends Asset implements IDestroyable, ITexture, Serializable`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.Texture

## Fields

### public static final HashSet<String> nullTextures

### public static final AssetType ASSET_TYPE

### public static int bindCount

### public static boolean doingQuad

### public static float lr

### public static float lg

### public static float lb

### public static float la

### public static int lastlastTextureID

### public static int totalTextureID

### public static int lastTextureID

### public static boolean warnFailFindTexture

### public boolean flip

### public float offsetX

### public float offsetY

### public boolean bindAlways

### public float xEnd

internal texture coordinates
it's used to get the max border of texture...

### public float yEnd

internal texture coordinates
it's used to get the max border of texture...

### public float xStart

internal texture coordinates
it's used to get the max border of texture...

### public float yStart

internal texture coordinates
it's used to get the max border of texture...

### public Texture.TextureAssetParams assetParams

## Constructors

### public Texture(AssetPath path,
AssetManager manager,
Texture.TextureAssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`
- `Texture.TextureAssetParams` `params`

### public Texture(TextureID data,
String name)

**Parameters:**
- `TextureID` `data`
- `String` `name`

### public Texture(TextureID data,
String name,
int splitX,
int splitY,
int splitW,
int splitH)

**Parameters:**
- `TextureID` `data`
- `String` `name`
- `int` `splitX`
- `int` `splitY`
- `int` `splitW`
- `int` `splitH`

### public Texture(String file)
throws Exception

LOADS and crete a texture from a file

**Parameters:**
- `String` `file`

### public Texture(String name,
BufferedInputStream b,
boolean bDoMask)
throws Exception

**Parameters:**
- `String` `name`
- `BufferedInputStream` `b`
- `boolean` `bDoMask`

### public Texture(String file,
boolean bDelete,
boolean bUseAlpha)
throws Exception

**Parameters:**
- `String` `file`
- `boolean` `bDelete`
- `boolean` `bUseAlpha`

### public Texture(String file,
boolean useAlphaChannel)
throws Exception

LOADS and crete a texture from a file

**Parameters:**
- `String` `file` — indicates if the image should use or not the alpha channel
- `boolean` `useAlphaChannel`

### public Texture(int width,
int height,
String name,
int flags)

create a new empty texture.

**Parameters:**
- `int` `width` — size of texture
- `int` `height`
- `String` `name`
- `int` `flags`

### public Texture(int width,
int height,
int flags)

create a new empty texture.

**Parameters:**
- `int` `width` — size of texture
- `int` `height`
- `int` `flags`

### public Texture(int width,
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

### public Texture(int width,
int height,
int flags,
boolean deferCreation)

**Parameters:**
- `int` `width`
- `int` `height`
- `int` `flags`
- `boolean` `deferCreation`

### public Texture(String file,
int red,
int green,
int blue)
throws Exception

loads and create a texture from a file and cretes as trasparent the section that have the color equal to the
RGB valued
spefied

**Parameters:**
- `String` `file` — red value to compare
- `int` `red` — green value to compare
- `int` `green` — blue value to compare
- `int` `blue`

### public Texture(Texture t)

creates a copy of an existent texture

**Parameters:**
- `Texture` `t`

### public Texture()

creates an emptiy texture and adds it to the game engine's texture list

## Methods

### public void TexDeferedCreation(int w,
int h,
int flags,
int format,
int internalFormat)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `flags`
- `int` `format`
- `int` `internalFormat`

**Returns:** `void`

### public void TexDeferedCreation(int w,
int h,
int flags)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `flags`

**Returns:** `void`

### public static String processFilePath(String filePath)

**Parameters:**
- `String` `filePath`

**Returns:** `String`

### public static void bindNone()

**Returns:** `void`

### public static Texture getWhite()

**Returns:** `Texture`

### public static Texture getErrorTexture()

**Returns:** `Texture`

### public static Texture getEngineMipmapTexture()

**Returns:** `Texture`

### public static void clearTextures()

**Returns:** `void`

### public static Texture getSharedTexture(String name)

**Parameters:**
- `String` `name`

**Returns:** `Texture`

### public static Texture getSharedTexture(String name,
int flags)

**Parameters:**
- `String` `name`
- `int` `flags`

**Returns:** `Texture`

### public static Texture trygetTexture(String name)

**Parameters:**
- `String` `name`

**Returns:** `Texture`

### public static void onTexturePacksChanged()

**Returns:** `void`

### public static Texture getTexture(String name)

gets a texture from it's name; If the texture isn't already loaded this method will load it.

**Parameters:**
- `String` `name` — the name of texture

**Returns:** `Texture`

### public static Texture getSteamAvatar(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `Texture`

### public static void steamAvatarChanged(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `void`

### public static void forgetTexture(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void reload(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static int[] flipPixels(int[] imgPixels,
int imgw,
int imgh)

**Parameters:**
- `int[]` `imgPixels`
- `int` `imgw`
- `int` `imgh`

**Returns:** `int[]`

### public void reloadFromFile(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void bind()

Blinds the image

**Returns:** `void`

### public void bind(int unit)

Description copied from interface: ITexture

**Parameters:**
- `int` `unit` — the texture unit in witch the current TextureObject will be binded

**Returns:** `void`

### public void copyMaskRegion(Texture from,
int x,
int y,
int width,
int height)

**Parameters:**
- `Texture` `from`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `void`

### public void createMask()

creates the mask of collisions

**Returns:** `void`

### public void createMask(boolean[] mask)

**Parameters:**
- `boolean[]` `mask`

**Returns:** `void`

### public void createMask(BooleanGrid mask)

**Parameters:**
- `BooleanGrid` `mask`

**Returns:** `void`

### public void createMask(WrappedBuffer buf)

**Parameters:**
- `WrappedBuffer` `buf`

**Returns:** `void`

### public void destroy()

destroys the image and release all resources

**Returns:** `void`

### public boolean equals(Texture other)

**Parameters:**
- `Texture` `other`

**Returns:** `boolean`

### public WrappedBuffer getData()

returns the texture's pixel in a ByteBuffer

EXAMPLE:
ByteBuffer bb = getData();
byte r, g, b;
bb.rewind(); //invalid input: '<'-- IMPORTANT!!
try {
while (true) {
bb.mark();
r = bb.get();
g = bb.get();
b = bb.get();
bb.reset();
bb.put((byte)(r+red));
bb.put((byte)(g+green));
bb.put((byte)(b+blue));
bb.get(); // alpha

catch (Exception e) {

setData(bb);

**Returns:** `WrappedBuffer`

### public void setData(ByteBuffer data)

sets the texture's pixel from a ByteBuffer

EXAMPLE:
ByteBuffer bb = getData();
byte r, g, b;
bb.rewind(); //invalid input: '<'-- IMPORTANT!!
try {
while (true) {
bb.mark();
r = bb.get();
g = bb.get();
b = bb.get();
bb.reset();
bb.put((byte)(r+red));
bb.put((byte)(g+green));
bb.put((byte)(b+blue));
bb.get(); // alpha

catch (Exception e) {

setData(bb);

**Parameters:**
- `ByteBuffer` `data` — texture's pixel data

**Returns:** `void`

### public int getHeight()

Description copied from interface: ITexture

**Returns:** `int`

### public void setHeight(int height)

**Parameters:**
- `int` `height`

**Returns:** `void`

### public int getHeightHW()

Description copied from interface: ITexture

**Returns:** `int`

### public int getHeightOrig()

**Returns:** `int`

### public int getID()

Description copied from interface: ITexture

**Returns:** `int`

### public Mask getMask()

returns the mask of collisions

**Returns:** `Mask`

### public void setMask(Mask mask)

sets the mask of collisions

**Parameters:**
- `Mask` `mask` — the mask of collisions to set

**Returns:** `void`

### public boolean isMaskSet(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public TextureID getTextureId()

**Returns:** `TextureID`

### public boolean getUseAlphaChannel()

indicates if the image will use the alpha channel or note

**Returns:** `boolean`

### public void setUseAlphaChannel(boolean value)

indicates if the texture contains the alpha channel or not

**Parameters:**
- `boolean` `value` — if true, the image will use the alpha channel

**Returns:** `void`

### public int getX()

**Returns:** `int`

### public int getY()

**Returns:** `int`

### public int getWidth()

Description copied from interface: ITexture

**Returns:** `int`

### public void setWidth(int width)

**Parameters:**
- `int` `width`

**Returns:** `void`

### public int getWidthHW()

Description copied from interface: ITexture

**Returns:** `int`

### public int getWidthOrig()

**Returns:** `int`

### public float getXEnd()

Description copied from interface: ITexture

**Returns:** `float`

### public float getXStart()

Description copied from interface: ITexture

**Returns:** `float`

### public float getYEnd()

Description copied from interface: ITexture

**Returns:** `float`

### public float getYStart()

Description copied from interface: ITexture

**Returns:** `float`

### public float getOffsetX()

**Returns:** `float`

### public void setOffsetX(int offset)

**Parameters:**
- `int` `offset`

**Returns:** `void`

### public float getOffsetY()

**Returns:** `float`

### public void setOffsetY(int offset)

**Parameters:**
- `int` `offset`

**Returns:** `void`

### public boolean isCollisionable()

indicates if the texture has a mask of collisions or not

**Returns:** `boolean`

### public boolean isDestroyed()

returns if the texture is destroyed or not

**Returns:** `boolean`

### public boolean isSolid()

Description copied from interface: ITexture

**Returns:** `boolean`

### public boolean isValid()

**Returns:** `boolean`

### public void makeTransp(int red,
int green,
int blue)

Description copied from interface: ITexture

**Parameters:**
- `int` `red` — color used in the test
- `int` `green` — color used in the test
- `int` `blue` — color used in the test

**Returns:** `void`

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
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void render(float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void render(ObjectRenderEffects dr,
float x,
float y,
float width,
float height,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `ObjectRenderEffects` `dr`
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void rendershader2(float x,
float y,
float width,
float height,
int texx,
int texy,
int texWidth,
int texHeight,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `texx`
- `int` `texy`
- `int` `texWidth`
- `int` `texHeight`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void renderdiamond(float x,
float y,
float width,
float height,
int l,
int u,
int r,
int d)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `l`
- `int` `u`
- `int` `r`
- `int` `d`

**Returns:** `void`

### public void renderwallnw(float x,
float y,
float width,
float height,
int u,
int d,
int u2,
int d2,
int r,
int r2)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `u`
- `int` `d`
- `int` `u2`
- `int` `d2`
- `int` `r`
- `int` `r2`

**Returns:** `void`

### public void renderwallw(float x,
float y,
float width,
float height,
int u,
int d,
int u2,
int d2)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `u`
- `int` `d`
- `int` `u2`
- `int` `d2`

**Returns:** `void`

### public void renderwalln(float x,
float y,
float width,
float height,
int u,
int d,
int u2,
int d2)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `width`
- `float` `height`
- `int` `u`
- `int` `d`
- `int` `u2`
- `int` `d2`

**Returns:** `void`

### public void renderstrip(int x,
int y,
int width,
int height,
float r,
float g,
float b,
float a,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void setAlphaForeach(int red,
int green,
int blue,
int alpha)

Description copied from interface: ITexture

**Parameters:**
- `int` `red` — color used in the test
- `int` `green` — color used in the test
- `int` `blue` — color used in the test
- `int` `alpha` — the alpha color that will be setted to the pixel that pass the test

**Returns:** `void`

### public void setCustomizedTexture()

**Returns:** `void`

### public void setNameOnly(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setRegion(int x,
int y,
int width,
int height)

Description copied from interface: ITexture

**Parameters:**
- `int` `x` — xstart position
- `int` `y` — ystart position
- `int` `width` — width of the region
- `int` `height` — height of the region

**Returns:** `void`

### public Texture splitIcon()

**Returns:** `Texture`

### public Texture split(int xOffset,
int yOffset,
int width,
int height)

**Parameters:**
- `int` `xOffset`
- `int` `yOffset`
- `int` `width`
- `int` `height`

**Returns:** `Texture`

### public Texture split(String name,
int xOffset,
int yOffset,
int width,
int height)

**Parameters:**
- `String` `name`
- `int` `xOffset`
- `int` `yOffset`
- `int` `width`
- `int` `height`

**Returns:** `Texture`

### public Texture[] split(int xOffset,
int yOffset,
int row,
int coloumn,
int width,
int height,
int spaceX,
int spaceY)

**Parameters:**
- `int` `xOffset`
- `int` `yOffset`
- `int` `row`
- `int` `coloumn`
- `int` `width`
- `int` `height`
- `int` `spaceX`
- `int` `spaceY`

**Returns:** `Texture[]`

### public Texture[][] split2D(int[] xstep,
int[] ystep)

**Parameters:**
- `int[]` `xstep`
- `int[]` `ystep`

**Returns:** `Texture[][]`

### public String toString()

**Returns:** `String`

### public void saveMask(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void saveToZomboidDirectory(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public void saveToCurrentSavefileDirectory(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public void saveOnRenderThread(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public void loadMaskRegion(ByteBuffer cache)

**Parameters:**
- `ByteBuffer` `cache`

**Returns:** `void`

### public void saveMaskRegion(ByteBuffer cache)

**Parameters:**
- `ByteBuffer` `cache`

**Returns:** `void`

### public int getRealWidth()

**Returns:** `int`

### public void setRealWidth(int realWidth)

**Parameters:**
- `int` `realWidth`

**Returns:** `void`

### public int getRealHeight()

**Returns:** `int`

### public void setRealHeight(int realHeight)

**Parameters:**
- `int` `realHeight`

**Returns:** `void`

### public Vector2 getUVScale(Vector2 uvScale)

**Parameters:**
- `Vector2` `uvScale`

**Returns:** `Vector2`

### public AssetType getType()

**Returns:** `AssetType`

### public void onBeforeReady()

**Returns:** `void`

### public static void collectAllIcons(HashMap<String,String> map,
HashMap<String,String> mapFull)

**Parameters:**
- `HashMap<String,String>` `map`
- `HashMap<String,String>` `mapFull`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\Texture.html`*
