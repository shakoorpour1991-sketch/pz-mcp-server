---
title: zombie.core.fonts.Font
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.fonts
---

# zombie.core.fonts.Font

`public interface Font`

**Kind:** interface · **Package:** zombie.core.fonts

## Methods

### void drawString(float x,
float y,
String text)

Draw a string to the screen

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `text`

**Returns:** `void`

### void drawString(float x,
float y,
String text,
Color col)

Draw a string to the screen

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `text`
- `Color` `col`

**Returns:** `void`

### void drawString(float x,
float y,
String text,
Color col,
int startIndex,
int endIndex)

Draw part of a string to the screen. Note that this will
still position the text as though it's part of the bigger string.

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `text`
- `Color` `col`
- `int` `startIndex`
- `int` `endIndex`

**Returns:** `void`

### int getHeight(String str)

get the height of the given string

**Parameters:**
- `String` `str`

**Returns:** `int`

### int getWidth(String str)

get the width of the given string

**Parameters:**
- `String` `str`

**Returns:** `int`

### int getWidth(String str,
boolean xAdvance)

**Parameters:**
- `String` `str`
- `boolean` `xAdvance`

**Returns:** `int`

### int getWidth(String str,
int startIndex,
int endIndex)

**Parameters:**
- `String` `str`
- `int` `startIndex`
- `int` `endIndex`

**Returns:** `int`

### int getWidth(String str,
int startIndex,
int endIndex,
boolean xAdvance)

**Parameters:**
- `String` `str`
- `int` `startIndex`
- `int` `endIndex`
- `boolean` `xAdvance`

**Returns:** `int`

### int getLineHeight()

get the maximum height of any line drawn by this font

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\fonts\Font.html`*
