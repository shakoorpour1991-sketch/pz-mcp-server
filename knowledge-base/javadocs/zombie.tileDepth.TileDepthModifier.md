---
title: zombie.tileDepth.TileDepthModifier
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.tileDepth
---

# zombie.tileDepth.TileDepthModifier

`public final class TileDepthModifier extends Object implements Consumer<TextureDraw>`

**Kind:** class · **Package:** zombie.tileDepth

## Inheritance
- java.lang.Object
- zombie.tileDepth.TileDepthModifier

## Fields

### public static final TileDepthModifier instance

## Constructors

### public TileDepthModifier()

## Methods

### public void accept(TextureDraw textureDraw)

**Parameters:**
- `TextureDraw` `textureDraw`

**Returns:** `void`

### public void setupFloorDepth(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `void`

### public void setupWallDepth(IsoSprite sprite,
IsoDirections dir)

**Parameters:**
- `IsoSprite` `sprite`
- `IsoDirections` `dir`

**Returns:** `void`

### public void setupTileDepthTexture(IsoSprite sprite,
TileDepthTexture depthTexture)

**Parameters:**
- `IsoSprite` `sprite`
- `TileDepthTexture` `depthTexture`

**Returns:** `void`

### public void setSpriteScale(float scaleX,
float scaleY)

**Parameters:**
- `float` `scaleX`
- `float` `scaleY`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\tileDepth\TileDepthModifier.html`*
