---
title: zombie.iso.sprite.IsoDirectionFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.sprite
---

# zombie.iso.sprite.IsoDirectionFrame

`public final class IsoDirectionFrame extends Object`

**Kind:** class · **Package:** zombie.iso.sprite

## Inheritance
- java.lang.Object
- zombie.iso.sprite.IsoDirectionFrame

## Fields

### public final Texture[] directions

## Constructors

### public IsoDirectionFrame(Texture tex)

**Parameters:**
- `Texture` `tex`

### public IsoDirectionFrame()

### public IsoDirectionFrame(Texture nw,
Texture n,
Texture ne,
Texture e,
Texture se)

**Parameters:**
- `Texture` `nw`
- `Texture` `n`
- `Texture` `ne`
- `Texture` `e`
- `Texture` `se`

### public IsoDirectionFrame(Texture n,
Texture nw,
Texture w,
Texture sw,
Texture s,
Texture se,
Texture e,
Texture ne)

**Parameters:**
- `Texture` `n`
- `Texture` `nw`
- `Texture` `w`
- `Texture` `sw`
- `Texture` `s`
- `Texture` `se`
- `Texture` `e`
- `Texture` `ne`

### public IsoDirectionFrame(Texture n,
Texture s,
Texture e,
Texture w)

**Parameters:**
- `Texture` `n`
- `Texture` `s`
- `Texture` `e`
- `Texture` `w`

## Methods

### public Texture getTexture(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `Texture`

### public void SetAllDirections(Texture tex)

**Parameters:**
- `Texture` `tex`

**Returns:** `void`

### public void SetDirection(Texture tex,
IsoDirections dir)

**Parameters:**
- `Texture` `tex`
- `IsoDirections` `dir`

**Returns:** `void`

### public void render(float sx,
float sy,
IsoDirections dir,
ColorInfo info,
boolean flip,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `float` `sx`
- `float` `sy`
- `IsoDirections` `dir`
- `ColorInfo` `info`
- `boolean` `flip`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void renderexplicit(int sx,
int sy,
IsoDirections dir,
float scale)

**Parameters:**
- `int` `sx`
- `int` `sy`
- `IsoDirections` `dir`
- `float` `scale`

**Returns:** `void`

### public void renderexplicit(int sx,
int sy,
IsoDirections dir,
float scale,
ColorInfo color)

**Parameters:**
- `int` `sx`
- `int` `sy`
- `IsoDirections` `dir`
- `float` `scale`
- `ColorInfo` `color`

**Returns:** `void`

### public boolean hasNoTextures()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\sprite\IsoDirectionFrame.html`*
