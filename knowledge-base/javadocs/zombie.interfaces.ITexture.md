---
title: zombie.interfaces.ITexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.interfaces
---

# zombie.interfaces.ITexture

`public interface ITexture extends IDestroyable, IMaskerable`

**Kind:** interface · **Package:** zombie.interfaces

## Methods

### void bind()

bind the current texture in the VRAM

**Returns:** `void`

### void bind(int unit)

bind the current texture object in the specified texture unit

**Parameters:**
- `int` `unit`

**Returns:** `void`

### WrappedBuffer getData()

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
bb.get(); // alpha } } catch (Exception e) { }
setData(bb);

**Returns:** `WrappedBuffer`

### int getHeight()

returns the height of image

**Returns:** `int`

### int getHeightHW()

return the height hardware of image

**Returns:** `int`

### int getID()

returns the ID of image in the Vram

**Returns:** `int`

### int getWidth()

returns the width of image

**Returns:** `int`

### int getWidthHW()

return the width Hardware of image

**Returns:** `int`

### float getXEnd()

returns the end X-coordinate

**Returns:** `float`

### float getXStart()

returns the start X-coordinate

**Returns:** `float`

### float getYEnd()

returns the end Y-coordinate

**Returns:** `float`

### float getYStart()

returns the start Y-coordinate

**Returns:** `float`

### boolean isSolid()

indicates if the texture is solid or not.
a non solid texture is a texture that containe an alpha channel

**Returns:** `boolean`

### void makeTransp(int red,
int green,
int blue)

sets transparent each pixel that it's equal to the red, green blue value specified

**Parameters:**
- `int` `red`
- `int` `green`
- `int` `blue`

**Returns:** `void`

### void setAlphaForeach(int red,
int green,
int blue,
int alpha)

sets the specified alpha for each pixel that it's equal to the red, green blue value specified

**Parameters:**
- `int` `red`
- `int` `green`
- `int` `blue`
- `int` `alpha`

**Returns:** `void`

### void setData(ByteBuffer data)

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
bb.get(); // alpha } } catch (Exception e) { }
setData(bb);

**Parameters:**
- `ByteBuffer` `data`

**Returns:** `void`

### void setMask(Mask mask)

Pixel collision mask of texture

**Parameters:**
- `Mask` `mask`

**Returns:** `void`

### void setRegion(int x,
int y,
int width,
int height)

sets the region of the image

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\interfaces\ITexture.html`*
