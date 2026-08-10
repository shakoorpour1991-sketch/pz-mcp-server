---
title: zombie.core.fonts.AngelCodeFont.CharDef
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.fonts
---

# zombie.core.fonts.AngelCodeFont.CharDef

`public class AngelCodeFont.CharDef extends Object`

**Kind:** class · **Package:** zombie.core.fonts

## Inheritance
- java.lang.Object
- zombie.core.fonts.AngelCodeFont.CharDef

## Description

The definition of a single character as defined in the AngelCode file
format

## Fields

### public short dlIndex

The display list index for this character

### public short height

The height of the character image

### public int id

The id of the character

### public Texture image

The image containing the character

### public short[] kerningSecond

The kerning info for this character

### public short[] kerningAmount

### public short width

The width of the character image

### public short x

The x location on the sprite sheet

### public short xadvance

The amount to move the current position after drawing the character

### public short xoffset

The amount the x position should be offset when drawing the image

### public short y

The y location on the sprite sheet

### public short yoffset

The amount the y position should be offset when drawing the image

### public short page

The page number for fonts with multiple textures

## Constructors

### public CharDef()

## Methods

### public void draw(float x,
float y)

Draw this character embedded in a image draw

**Parameters:**
- `float` `x` — The x position at which to draw the text
- `float` `y` — The y position at which to draw the text

**Returns:** `void`

### public int getKerning(int otherCodePoint)

get the kerning offset between this character and the specified character.

**Parameters:**
- `int` `otherCodePoint` — The other code point

**Returns:** `int`

### public void init()

Initialise the image by cutting the right section from the map
produced by the AngelCode tool.

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\fonts\AngelCodeFont.CharDef.html`*
