---
title: zombie.iso.sprite.IsoSprite
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.sprite
---

# zombie.iso.sprite.IsoSprite

`public final class IsoSprite extends Object`

**Kind:** class · **Package:** zombie.iso.sprite

## Inheritance
- java.lang.Object
- zombie.iso.sprite.IsoSprite

## Fields

### public static int maxCount

### public static float alphaStep

### public static float globalOffsetX

### public static float globalOffsetY

### public int firerequirement

### public String burntTile

### public boolean forceAmbient

### public boolean solidfloor

### public boolean canBeRemoved

### public boolean attachedFloor

### public boolean cutW

### public boolean cutN

### public boolean solid

### public boolean solidTrans

### public boolean invisible

### public boolean alwaysDraw

### public boolean forceRender

### public boolean moveWithWind

### public boolean isBush

### public static final byte RL_DEFAULT

### public static final byte RL_FLOOR

### public byte renderLayer

### public int windType

### public Texture texture

### public boolean animate

### public IsoAnim currentAnim

### public boolean deleteWhenFinished

### public boolean loop

### public short soffX

### public short soffY

### public final PropertyContainer properties

### public final ColorInfo tintMod

### public HashMap<String,IsoAnim> animMap

### public ArrayList<IsoAnim> animStack

### public String name

### public String tilesetName

### public int tileSheetIndex

### public static final int DEFAULT_SPRITE_ID

### public int id

### public IsoSpriteInstance def

### public ModelManager.ModelSlot modelSlot

### public boolean treatAsWallOrder

### public SpriteModel spriteModel

### public TileDepthTexture depthTexture

### public int depthFlags

### public static final int SDF_USE_OBJECT_DEPTH_TEXTURE

### public static final int SDF_TRANSLUCENT

### public static final int SDF_OPAQUE_PIXELS_ONLY

### public static TileSeamManager.Tiles seamFix2

### public static boolean seamEast

### public static final boolean SEAM_SOUTH

## Constructors

### public IsoSprite()

### public IsoSprite(IsoSpriteManager manager)

**Parameters:**
- `IsoSpriteManager` `manager`

## Methods

### public void setHideForWaterRender()

**Returns:** `void`

### public static IsoSprite CreateSprite(IsoSpriteManager manager)

**Parameters:**
- `IsoSpriteManager` `manager`

**Returns:** `IsoSprite`

### public static IsoSprite CreateSpriteUsingCache(String objectName,
String animName,
int numFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `numFrames`

**Returns:** `IsoSprite`

### public static IsoSprite getSprite(IsoSpriteManager manager,
int id)

**Parameters:**
- `IsoSpriteManager` `manager`
- `int` `id`

**Returns:** `IsoSprite`

### public static void setSpriteID(IsoSpriteManager manager,
int id,
IsoSprite spr)

**Parameters:**
- `IsoSpriteManager` `manager`
- `int` `id`
- `IsoSprite` `spr`

**Returns:** `void`

### public static IsoSprite getSprite(IsoSpriteManager manager,
IsoSprite spr,
int offset)

**Parameters:**
- `IsoSpriteManager` `manager`
- `IsoSprite` `spr`
- `int` `offset`

**Returns:** `IsoSprite`

### public static IsoSprite getSprite(IsoSpriteManager manager,
String name,
int offset)

**Parameters:**
- `IsoSpriteManager` `manager`
- `String` `name`
- `int` `offset`

**Returns:** `IsoSprite`

### public static void DisposeAll()

**Returns:** `void`

### public static boolean HasCache(String string)

**Parameters:**
- `String` `string`

**Returns:** `boolean`

### public IsoSpriteInstance newInstance()

**Returns:** `IsoSpriteInstance`

### public PropertyContainer getProperties()

**Returns:** `PropertyContainer`

### public String getProperty(IsoPropertyType propertyType)

**Parameters:**
- `IsoPropertyType` `propertyType`

**Returns:** `String`

### public String getProperty(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public boolean hasProperty(IsoPropertyType propertyType)

**Parameters:**
- `IsoPropertyType` `propertyType`

**Returns:** `boolean`

### public boolean hasProperty(String propertyName)

**Parameters:**
- `String` `propertyName`

**Returns:** `boolean`

### public boolean hasProperty(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public String getParentObjectName()

**Returns:** `String`

### public void setParentObjectName(String val)

**Parameters:**
- `String` `val`

**Returns:** `void`

### public void save(DataOutputStream output)
throws IOException

**Parameters:**
- `DataOutputStream` `output`

**Returns:** `void`

### public void load(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `void`

### public void Dispose()

**Returns:** `void`

### public void disposeAnimation()

**Returns:** `void`

### public boolean isMaskClicked(IsoDirections dir,
int x,
int y)

**Parameters:**
- `IsoDirections` `dir`
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean isMaskClicked(IsoDirections dir,
int x,
int y,
boolean flip)

**Parameters:**
- `IsoDirections` `dir`
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `boolean`

### public float getMaskClickedY(IsoDirections dir,
int x,
int y,
boolean flip)

**Parameters:**
- `IsoDirections` `dir`
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `float`

### public Texture LoadSingleTexture(String textureName)

**Parameters:**
- `String` `textureName`

**Returns:** `Texture`

### public Texture LoadFrameExplicit(String objectName)

**Parameters:**
- `String` `objectName`

**Returns:** `Texture`

### public void LoadFrames(String objectName,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesReverseAltName(String objectName,
String animName,
String altName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `String` `altName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesNoDirPage(String objectName,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesNoDirPageDirect(String objectName,
String animName,
int nFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `nFrames`

**Returns:** `void`

### public void LoadFramesNoDirPageSimple(String objectName)

**Parameters:**
- `String` `objectName`

**Returns:** `void`

### public void ReplaceCurrentAnimFrames(String objectName)

**Parameters:**
- `String` `objectName`

**Returns:** `void`

### public void LoadFramesPageSimple(String nObjectName,
String sObjectName,
String eObjectName,
String wObjectName)

**Parameters:**
- `String` `nObjectName`
- `String` `sObjectName`
- `String` `eObjectName`
- `String` `wObjectName`

**Returns:** `void`

### public void PlayAnim(IsoAnim anim)

**Parameters:**
- `IsoAnim` `anim`

**Returns:** `void`

### public void PlayAnim(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void PlayAnimUnlooped(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void ChangeTintMod(ColorInfo newTintMod)

**Parameters:**
- `ColorInfo` `newTintMod`

**Returns:** `void`

### public void RenderGhostTile(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void RenderGhostTileRed(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void RenderGhostTileColor(int x,
int y,
int z,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void RenderGhostTileColor(int x,
int y,
int z,
float offsetX,
float offsetY,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `float` `offsetX`
- `float` `offsetY`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public boolean hasActiveModel()

**Returns:** `boolean`

### public void renderVehicle(IsoSpriteInstance inst,
IsoObject obj,
float x,
float y,
float z,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`

**Returns:** `void`

### public final void render(IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep)

**Parameters:**
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`

**Returns:** `void`

### public final void render(IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public final void renderDepth(IsoObject obj,
IsoDirections isoDirections,
boolean cutawayNW,
boolean cutawayNE,
boolean cutawaySW,
int cutawaySEX,
float x,
float y,
float z,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `isoDirections`
- `boolean` `cutawayNW`
- `boolean` `cutawayNE`
- `boolean` `cutawaySW`
- `int` `cutawaySEX`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public final void render(IsoSpriteInstance inst,
IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`

**Returns:** `void`

### public void renderWallSliceW(IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderWallSliceN(IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void render(IsoSpriteInstance inst,
IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderDepth(IsoSpriteInstance inst,
IsoObject obj,
IsoDirections isoDirections,
boolean cutawayNW,
boolean cutawayNE,
boolean cutawaySW,
int cutawaySEX,
float x,
float y,
float z,
float offsetX,
float offsetY,
ColorInfo info2,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `IsoDirections` `isoDirections`
- `boolean` `cutawayNW`
- `boolean` `cutawayNE`
- `boolean` `cutawaySW`
- `int` `cutawaySEX`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderCurrentAnim(IsoSpriteInstance inst,
IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo col,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `col`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderCurrentAnimDepth(IsoSpriteInstance inst,
IsoObject obj,
IsoDirections dir,
boolean cutawayNW,
boolean cutawayNE,
boolean cutawaySW,
int cutawaySEX,
float x,
float y,
float z,
float offsetX,
float offsetY,
ColorInfo col,
boolean bDoRenderPrep,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoSpriteInstance` `inst`
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `boolean` `cutawayNW`
- `boolean` `cutawayNE`
- `boolean` `cutawaySW`
- `int` `cutawaySEX`
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `col`
- `boolean` `bDoRenderPrep`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public static void renderTextureWithDepth(Texture texture,
float width,
float height,
float r,
float g,
float b,
float a,
float x,
float y,
float z)

**Parameters:**
- `Texture` `texture`
- `float` `width`
- `float` `height`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public boolean hasAnimation()

**Returns:** `boolean`

### public int getFrameCount()

**Returns:** `int`

### public boolean hasNoTextures()

**Returns:** `boolean`

### public static float calculateDepth(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public void renderActiveModel()

**Returns:** `void`

### public void renderBloodSplat(float x,
float y,
float z,
ColorInfo info2)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `info2`

**Returns:** `void`

### public void renderObjectPicker(IsoSpriteInstance def,
IsoObject obj,
IsoDirections dir)

**Parameters:**
- `IsoSpriteInstance` `def`
- `IsoObject` `obj`
- `IsoDirections` `dir`

**Returns:** `void`

### public IsoDirectionFrame getAnimFrame(int frame)

**Parameters:**
- `int` `frame`

**Returns:** `IsoDirectionFrame`

### public Texture getTextureForFrame(int frame,
IsoDirections dir,
boolean useSnowSprite)

**Parameters:**
- `int` `frame`
- `IsoDirections` `dir`
- `boolean` `useSnowSprite`

**Returns:** `Texture`

### public Texture getTextureForFrame(int frame,
IsoDirections dir)

**Parameters:**
- `int` `frame`
- `IsoDirections` `dir`

**Returns:** `Texture`

### public Texture getTextureForCurrentFrame(IsoDirections dir,
boolean useSnowSprite)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `useSnowSprite`

**Returns:** `Texture`

### public Texture getTextureForCurrentFrame(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `Texture`

### public Texture getTextureForCurrentFrame(IsoDirections dir,
IsoObject obj)

**Parameters:**
- `IsoDirections` `dir`
- `IsoObject` `obj`

**Returns:** `Texture`

### public void update()

**Returns:** `void`

### public void update(IsoSpriteInstance def)

**Parameters:**
- `IsoSpriteInstance` `def`

**Returns:** `void`

### public void CacheAnims(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public void LoadCache(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public IsoSprite setFromCache(String objectName,
String animName,
int numFrames)

**Parameters:**
- `String` `objectName`
- `String` `animName`
- `int` `numFrames`

**Returns:** `IsoSprite`

### public IsoObjectType getType()

**Returns:** `IsoObjectType`

### public void setType(IsoObjectType type)

**Parameters:**
- `IsoObjectType` `type`

**Returns:** `void`

### public IsoObjectType getTileType()

**Returns:** `IsoObjectType`

### public void setTileType(IsoObjectType type)

**Parameters:**
- `IsoObjectType` `type`

**Returns:** `void`

### public void AddProperties(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public int getItemHeight()

**Returns:** `int`

### public int getSurface()

**Returns:** `int`

### public int getStackReplaceTileOffset()

**Returns:** `int`

### public boolean isTable()

**Returns:** `boolean`

### public boolean isTableTop()

**Returns:** `boolean`

### public boolean isSurfaceOffset()

**Returns:** `boolean`

### public IsoDirections getSlopedSurfaceDirection()

**Returns:** `IsoDirections`

### public int getID()

**Returns:** `int`

### public String getName()

**Returns:** `String`

### public void setName(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public ColorInfo getTintMod()

**Returns:** `ColorInfo`

### public void setTintMod(ColorInfo info)

**Parameters:**
- `ColorInfo` `info`

**Returns:** `void`

### public void setAnimate(boolean animate)

**Parameters:**
- `boolean` `animate`

**Returns:** `void`

### public IsoSpriteGrid getSpriteGrid()

**Returns:** `IsoSpriteGrid`

### public void setSpriteGrid(IsoSpriteGrid sGrid)

**Parameters:**
- `IsoSpriteGrid` `sGrid`

**Returns:** `void`

### public boolean isMoveWithWind()

**Returns:** `boolean`

### public boolean is(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public boolean isWallSE()

**Returns:** `boolean`

### public int getSheetGridIdFromName()

**Returns:** `int`

### public static int getSheetGridIdFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public IsoDirections getFacing()

**Returns:** `IsoDirections`

### public RoofProperties getRoofProperties()

**Returns:** `RoofProperties`

### public void clearCurtainOffset()

**Returns:** `void`

### public void setCurtainOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public org.joml.Vector3f getCurtainOffset()

**Returns:** `org.joml.Vector3f`

### public boolean shouldHaveCollision()

**Returns:** `boolean`

### public void setSnowSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public IsoSprite getSnowSprite()

**Returns:** `IsoSprite`

### public void setFasciaEdge(FasciaEdge fasciaEdge)

**Parameters:**
- `FasciaEdge` `fasciaEdge`

**Returns:** `void`

### public FasciaEdge getFasciaEdge()

**Returns:** `FasciaEdge`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\sprite\IsoSprite.html`*
