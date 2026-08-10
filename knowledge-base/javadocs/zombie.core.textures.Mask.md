---
title: zombie.core.textures.Mask
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.Mask

`public final class Mask extends Object implements Serializable, Cloneable`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.Mask

## Constructors

### public Mask(int width,
int height)

Creates a new instance of Mask.
The Mask will be maked fully

**Parameters:**
- `int` `width` — height of mask
- `int` `height`

### public Mask(Texture from,
Texture texture,
int x,
int y,
int width,
int height)

Creates a new instance of Mask from a texture

**Parameters:**
- `Texture` `from` — the source texture
- `Texture` `texture`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

### public Mask(Mask other,
int x,
int y,
int width,
int height)

**Parameters:**
- `Mask` `other`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

### public Mask(boolean[] mask1,
int maskW,
int maskH,
int x,
int y,
int width,
int height)

**Parameters:**
- `boolean[]` `mask1`
- `int` `maskW`
- `int` `maskH`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

### public Mask(BooleanGrid mask1,
int x,
int y,
int width,
int height)

**Parameters:**
- `BooleanGrid` `mask1`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

### public Mask(ITexture texture,
boolean[] mask)

**Parameters:**
- `ITexture` `texture`
- `boolean[]` `mask`

### public Mask(ITexture texture,
BooleanGrid mask)

**Parameters:**
- `ITexture` `texture`
- `BooleanGrid` `mask`

### public Mask(ITexture texture)

**Parameters:**
- `ITexture` `texture`

### public Mask(Mask obj)

**Parameters:**
- `Mask` `obj`

## Methods

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public boolean isSubMask()

**Returns:** `boolean`

### public int getOffsetX()

**Returns:** `int`

### public int getOffsetY()

**Returns:** `int`

### public Object clone()

**Returns:** `Object`

### public void full()

creates a full-rectangular mask

**Returns:** `void`

### public void set(int x,
int y,
boolean val)

changes the x,y value of the mask

**Parameters:**
- `int` `x` — coordinate
- `int` `y` — coordinate
- `boolean` `val` — new value

**Returns:** `void`

### public boolean get(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public void save(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\Mask.html`*
