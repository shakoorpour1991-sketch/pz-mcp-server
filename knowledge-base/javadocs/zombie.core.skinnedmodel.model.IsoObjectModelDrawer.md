---
title: zombie.core.skinnedmodel.model.IsoObjectModelDrawer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.model
---

# zombie.core.skinnedmodel.model.IsoObjectModelDrawer

`public final class IsoObjectModelDrawer extends TextureDraw.GenericDrawer`

**Kind:** class · **Package:** zombie.core.skinnedmodel.model

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureDraw.GenericDrawer
- zombie.core.skinnedmodel.model.IsoObjectModelDrawer

## Constructors

### public IsoObjectModelDrawer()

## Methods

### public static IsoObjectModelDrawer.RenderStatus renderMain(SpriteModel spriteModel,
float x,
float y,
float z,
ColorInfo colorInfo,
float renderYOffset)

**Parameters:**
- `SpriteModel` `spriteModel`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`
- `float` `renderYOffset`

**Returns:** `IsoObjectModelDrawer.RenderStatus`

### public static IsoObjectModelDrawer.RenderStatus renderMainOutline(SpriteModel spriteModel,
float x,
float y,
float z,
ColorInfo colorInfo,
float renderYOffset)

**Parameters:**
- `SpriteModel` `spriteModel`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`
- `float` `renderYOffset`

**Returns:** `IsoObjectModelDrawer.RenderStatus`

### public static IsoObjectModelDrawer.RenderStatus renderMain(SpriteModel spriteModel,
float x,
float y,
float z,
ColorInfo colorInfo,
float renderYOffset,
SpriteModel parentSpriteModel,
org.joml.Matrix4f attachmentWorldXfrm,
boolean bOutline,
boolean bApplySurfaceAlpha)

**Parameters:**
- `SpriteModel` `spriteModel`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`
- `float` `renderYOffset`
- `SpriteModel` `parentSpriteModel`
- `org.joml.Matrix4f` `attachmentWorldXfrm`
- `boolean` `bOutline`
- `boolean` `bApplySurfaceAlpha`

**Returns:** `IsoObjectModelDrawer.RenderStatus`

### public static IsoObjectModelDrawer.RenderStatus renderMain(SpriteModel spriteModel,
float x,
float y,
float z,
ColorInfo colorInfo,
float renderYOffset,
AnimationPlayer animationPlayer)

**Parameters:**
- `SpriteModel` `spriteModel`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `colorInfo`
- `float` `renderYOffset`
- `AnimationPlayer` `animationPlayer`

**Returns:** `IsoObjectModelDrawer.RenderStatus`

### public void render()

**Returns:** `void`

### public void postRender()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\model\IsoObjectModelDrawer.html`*
