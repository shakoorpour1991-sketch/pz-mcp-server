---
title: zombie.iso.sprite.IsoSpriteInstance
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.sprite
---

# zombie.iso.sprite.IsoSpriteInstance

`public final class IsoSpriteInstance extends Object`

**Kind:** class · **Package:** zombie.iso.sprite

## Inheritance
- java.lang.Object
- zombie.iso.sprite.IsoSpriteInstance

## Fields

### public static final ObjectPool<IsoSpriteInstance> pool

### public IsoSprite parentSprite

### public float tintb

### public float tintg

### public float tintr

### public float frame

### public float alpha

### public float targetAlpha

### public boolean copyTargetAlpha

### public boolean multiplyObjectAlpha

### public boolean flip

### public float offZ

### public float offX

### public float offY

### public float animFrameIncrease

### public boolean looped

### public boolean finished

### public boolean nextFrame

### public float scaleX

### public float scaleY

## Constructors

### public IsoSpriteInstance()

### public IsoSpriteInstance(IsoSprite spr)

**Parameters:**
- `IsoSprite` `spr`

## Methods

### public static IsoSpriteInstance get(IsoSprite spr)

**Parameters:**
- `IsoSprite` `spr`

**Returns:** `IsoSpriteInstance`

### public void setFrameSpeedPerFrame(float perSecond)

**Parameters:**
- `float` `perSecond`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public String getName()

**Returns:** `String`

### public IsoSprite getParentSprite()

**Returns:** `IsoSprite`

### public float getTintR()

**Returns:** `float`

### public float getTintG()

**Returns:** `float`

### public float getTintB()

**Returns:** `float`

### public float getAlpha()

**Returns:** `float`

### public float getTargetAlpha()

**Returns:** `float`

### public boolean isCopyTargetAlpha()

**Returns:** `boolean`

### public boolean isMultiplyObjectAlpha()

**Returns:** `boolean`

### public void render(IsoObject obj,
float x,
float y,
float z,
IsoDirections dir,
float offsetX,
float offsetY,
ColorInfo info2)

**Parameters:**
- `IsoObject` `obj`
- `float` `x`
- `float` `y`
- `float` `z`
- `IsoDirections` `dir`
- `float` `offsetX`
- `float` `offsetY`
- `ColorInfo` `info2`

**Returns:** `void`

### public void render(IsoObject obj,
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

### public void render(IsoObject obj,
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

### public void SetAlpha(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void SetTargetAlpha(float targetAlpha)

**Parameters:**
- `float` `targetAlpha`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public float getFrame()

**Returns:** `float`

### public boolean isFinished()

**Returns:** `boolean`

### public void Dispose()

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

### public void setScale(float scaleX,
float scaleY)

**Parameters:**
- `float` `scaleX`
- `float` `scaleY`

**Returns:** `void`

### public float getScaleX()

**Returns:** `float`

### public float getScaleY()

**Returns:** `float`

### public void scaleAspect(float texW,
float texH,
float width,
float height)

**Parameters:**
- `float` `texW`
- `float` `texH`
- `float` `width`
- `float` `height`

**Returns:** `void`

### public static void add(IsoSpriteInstance isoSpriteInstance)

**Parameters:**
- `IsoSpriteInstance` `isoSpriteInstance`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\sprite\IsoSpriteInstance.html`*
