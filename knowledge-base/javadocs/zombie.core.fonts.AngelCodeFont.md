---
title: zombie.core.fonts.AngelCodeFont
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.fonts
---

# zombie.core.fonts.AngelCodeFont

`public final class AngelCodeFont extends Object implements Font, AssetStateObserver`

**Kind:** class · **Package:** zombie.core.fonts

## Inheritance
- java.lang.Object
- zombie.core.fonts.AngelCodeFont

## Description

A font implementation that will parse BMFont format font files. The font files can be output
by Hiero, which is included with Slick, and also the AngelCode font tool available at:

http://www.angelcode.com/products/bmfont/

This implementation copes with both the font display and kerning information
allowing nicer looking paragraphs of text. Note that this utility only
supports the text BMFont format definition file.

## Fields

### public AngelCodeFont.CharDef[] chars

The characters building up the font

### public static int xoff

### public static int yoff

### public static Color curCol

### public static float curR

### public static float curG

### public static float curB

### public static float curA

## Constructors

### public AngelCodeFont(String fntFile,
Texture image)
throws FileNotFoundException

Create a new font based on a font definition from AngelCode's tool and
the font image generated from the tool.

**Parameters:**
- `String` `fntFile` — The image to use for the font
- `Texture` `image`

### public AngelCodeFont(String fntFile,
String imgFile)
throws FileNotFoundException

Create a new font based on a font definition from AngelCode's tool and
the font image generated from the tool.

**Parameters:**
- `String` `fntFile` — The location of the font image
- `String` `imgFile`

## Methods

### public void drawString(float x,
float y,
String text)

Description copied from interface: Font

**Parameters:**
- `float` `x` — The x location at which to draw the string
- `float` `y` — The y location at which to draw the string
- `String` `text` — The text to be displayed

**Returns:** `void`

### public void drawString(float x,
float y,
String text,
Color col)

Description copied from interface: Font

**Parameters:**
- `float` `x` — The x location at which to draw the string
- `float` `y` — The y location at which to draw the string
- `String` `text` — The text to be displayed
- `Color` `col` — The colour to draw with

**Returns:** `void`

### public void drawString(float x,
float y,
String text,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `text`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void drawString(float x,
float y,
float scale,
String text,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `scale`
- `String` `text`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void drawString(float x,
float y,
String text,
Color col,
int startIndex,
int endIndex)

Description copied from interface: Font

**Parameters:**
- `float` `x` — The x location at which to draw the string
- `float` `y` — The y location at which to draw the string
- `String` `text` — The text to be displayed
- `Color` `col` — The colour to draw with
- `int` `startIndex` — The index of the first character to draw
- `int` `endIndex` — The index of the last character from the string to draw

**Returns:** `void`

### public void drawString(float x,
float y,
String text,
float r,
float g,
float b,
float a,
int startIndex,
int endIndex)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `text`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `startIndex`
- `int` `endIndex`

**Returns:** `void`

### public void drawString(float x,
float y,
float scale,
String text,
float r,
float g,
float b,
float a,
int startIndex,
int endIndex)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `scale`
- `String` `text`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `startIndex`
- `int` `endIndex`

**Returns:** `void`

### public int getHeight(String text)

Description copied from interface: Font

**Parameters:**
- `String` `text` — The string to obtain the rendered with of

**Returns:** `int`

### public int getHeight(String text,
boolean returnActualHeight,
boolean returnOffset)

**Parameters:**
- `String` `text`
- `boolean` `returnActualHeight`
- `boolean` `returnOffset`

**Returns:** `int`

### public int getLineHeight()

Description copied from interface: Font

**Returns:** `int`

### public int getWidth(String text)

Description copied from interface: Font

**Parameters:**
- `String` `text` — The string to obtain the rendered with of

**Returns:** `int`

### public int getWidth(String text,
boolean xAdvance)

**Parameters:**
- `String` `text`
- `boolean` `xAdvance`

**Returns:** `int`

### public int getWidth(String text,
int start,
int end)

**Parameters:**
- `String` `text`
- `int` `start`
- `int` `end`

**Returns:** `int`

### public int getWidth(String text,
int start,
int end,
boolean xadvance)

**Parameters:**
- `String` `text`
- `int` `start`
- `int` `end`
- `boolean` `xadvance`

**Returns:** `int`

### public int getYOffset(String text)

Returns the distance from the y drawing location to the top most pixel of the specified text.

**Parameters:**
- `String` `text` — The text that is to be tested

**Returns:** `int`

### public void onStateChanged(Asset.State oldState,
Asset.State newState,
Asset asset)

**Parameters:**
- `Asset.State` `oldState`
- `Asset.State` `newState`
- `Asset` `asset`

**Returns:** `void`

### public boolean isLoading()

**Returns:** `boolean`

### public boolean isSdf()

**Returns:** `boolean`

### public void setSdf(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\fonts\AngelCodeFont.html`*
