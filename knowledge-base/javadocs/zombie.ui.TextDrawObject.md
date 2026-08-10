---
title: zombie.ui.TextDrawObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.TextDrawObject

`public final class TextDrawObject extends Object`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.TextDrawObject

## Constructors

### public TextDrawObject()

### public TextDrawObject(int r,
int g,
int b,
boolean allowBbcode)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `boolean` `allowBbcode`

### public TextDrawObject(int r,
int g,
int b,
boolean allowBbcode,
boolean allowImages,
boolean allowChatIcons,
boolean allowColors,
boolean allowFonts,
boolean equalizeLineHeights)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `boolean` `allowBbcode`
- `boolean` `allowImages`
- `boolean` `allowChatIcons`
- `boolean` `allowColors`
- `boolean` `allowFonts`
- `boolean` `equalizeLineHeights`

## Methods

### public void setEnabled(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public boolean getEnabled()

**Returns:** `boolean`

### public void setVisibleRadius(int radius)

**Parameters:**
- `int` `radius`

**Returns:** `void`

### public int getVisibleRadius()

**Returns:** `int`

### public void setDrawBackground(boolean draw)

**Parameters:**
- `boolean` `draw`

**Returns:** `void`

### public void setAllowImages(boolean allowImages)

**Parameters:**
- `boolean` `allowImages`

**Returns:** `void`

### public void setAllowChatIcons(boolean allowChatIcons)

**Parameters:**
- `boolean` `allowChatIcons`

**Returns:** `void`

### public void setAllowColors(boolean allowColors)

**Parameters:**
- `boolean` `allowColors`

**Returns:** `void`

### public void setAllowFonts(boolean allowFonts)

**Parameters:**
- `boolean` `allowFonts`

**Returns:** `void`

### public void setAllowBBcode(boolean allowBbcode)

**Parameters:**
- `boolean` `allowBbcode`

**Returns:** `void`

### public void setAllowAnyImage(boolean allowAnyImage)

**Parameters:**
- `boolean` `allowAnyImage`

**Returns:** `void`

### public void setAllowLineBreaks(boolean allowLineBreaks)

**Parameters:**
- `boolean` `allowLineBreaks`

**Returns:** `void`

### public void setEqualizeLineHeights(boolean equalizeLineHeights)

**Parameters:**
- `boolean` `equalizeLineHeights`

**Returns:** `void`

### public void setSettings(boolean allowBBcode,
boolean allowImages,
boolean allowChatIcons,
boolean allowColors,
boolean allowFonts,
boolean equalizeLineHeights)

**Parameters:**
- `boolean` `allowBBcode`
- `boolean` `allowImages`
- `boolean` `allowChatIcons`
- `boolean` `allowColors`
- `boolean` `allowFonts`
- `boolean` `equalizeLineHeights`

**Returns:** `void`

### public void setCustomTag(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

### public String getCustomTag()

**Returns:** `String`

### public void setValidImages(String[] list)

**Parameters:**
- `String[]` `list`

**Returns:** `void`

### public void setValidFonts(String[] list)

**Parameters:**
- `String[]` `list`

**Returns:** `void`

### public void setMaxCharsPerLine(int charsperline)

**Parameters:**
- `int` `charsperline`

**Returns:** `void`

### public void setCustomImageMaxDimensions(int dim)

**Parameters:**
- `int` `dim`

**Returns:** `void`

### public void setOutlineColors(int r,
int g,
int b)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`

**Returns:** `void`

### public void setOutlineColors(int r,
int g,
int b,
int a)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void setOutlineColors(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void setOutlineColors(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setDefaultColors(int r,
int g,
int b)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`

**Returns:** `void`

### public void setDefaultColors(int r,
int g,
int b,
int a)

**Parameters:**
- `int` `r`
- `int` `g`
- `int` `b`
- `int` `a`

**Returns:** `void`

### public void setDefaultColors(float r,
float g,
float b)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void setDefaultColors(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void setHorizontalAlign(String horz)

**Parameters:**
- `String` `horz`

**Returns:** `void`

### public void setHorizontalAlign(TextDrawHorizontal horz)

**Parameters:**
- `TextDrawHorizontal` `horz`

**Returns:** `void`

### public TextDrawHorizontal getHorizontalAlign()

**Returns:** `TextDrawHorizontal`

### public String getOriginal()

**Returns:** `String`

### public String getUnformatted()

**Returns:** `String`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public UIFont getDefaultFontEnum()

**Returns:** `UIFont`

### public boolean isNullOrZeroLength()

**Returns:** `boolean`

### public float getInternalClock()

**Returns:** `float`

### public void setInternalTickClock(float ticks)

**Parameters:**
- `float` `ticks`

**Returns:** `void`

### public float updateInternalTickClock()

**Returns:** `float`

### public float updateInternalTickClock(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `float`

### public void setScrambleVal(float value)

**Parameters:**
- `float` `value`

**Returns:** `void`

### public float getScrambleVal()

**Returns:** `float`

### public void setHearRange(int range)

**Parameters:**
- `int` `range`

**Returns:** `void`

### public int getHearRange()

**Returns:** `int`

### public void Clear()

**Returns:** `void`

### public void setDefaultFont(UIFont f)

**Parameters:**
- `UIFont` `f`

**Returns:** `void`

### public void ReadString(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void ReadString(String str,
int maxLineWidth)

**Parameters:**
- `String` `str`
- `int` `maxLineWidth`

**Returns:** `void`

### public void ReadString(UIFont font,
String str,
int maxLineWidth)

**Parameters:**
- `UIFont` `font`
- `String` `str`
- `int` `maxLineWidth`

**Returns:** `void`

### public void calculateDimensions()

**Returns:** `void`

### public void Draw(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `void`

### public void Draw(double x,
double y,
boolean drawOutlines)

**Parameters:**
- `double` `x`
- `double` `y`
- `boolean` `drawOutlines`

**Returns:** `void`

### public void Draw(double x,
double y,
boolean drawOutlines,
float alpha)

**Parameters:**
- `double` `x`
- `double` `y`
- `boolean` `drawOutlines`
- `float` `alpha`

**Returns:** `void`

### public void Draw(double x,
double y,
double r,
double g,
double b,
double a,
boolean drawOutlines)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`
- `boolean` `drawOutlines`

**Returns:** `void`

### public void Draw(TextDrawHorizontal horz,
double x,
double y,
double r,
double g,
double b,
double a,
boolean drawOutlines)

**Parameters:**
- `TextDrawHorizontal` `horz`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`
- `boolean` `drawOutlines`

**Returns:** `void`

### public void AddBatchedDraw(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `void`

### public void AddBatchedDraw(double x,
double y,
boolean drawOutlines)

**Parameters:**
- `double` `x`
- `double` `y`
- `boolean` `drawOutlines`

**Returns:** `void`

### public void AddBatchedDraw(double x,
double y,
boolean drawOutlines,
float alpha)

**Parameters:**
- `double` `x`
- `double` `y`
- `boolean` `drawOutlines`
- `float` `alpha`

**Returns:** `void`

### public void AddBatchedDraw(double x,
double y,
double r,
double g,
double b,
double a,
boolean drawOutlines)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`
- `boolean` `drawOutlines`

**Returns:** `void`

### public void AddBatchedDraw(TextDrawHorizontal horz,
double x,
double y,
double r,
double g,
double b,
double a,
boolean drawOutlines)

**Parameters:**
- `TextDrawHorizontal` `horz`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`
- `boolean` `drawOutlines`

**Returns:** `void`

### public static void RenderBatch(int playerNum)

**Parameters:**
- `int` `playerNum`

**Returns:** `void`

### public static void NoRender(int playerNum)

**Parameters:**
- `int` `playerNum`

**Returns:** `void`

### public void DrawRaw(TextDrawHorizontal horz,
double x,
double y,
float r,
float g,
float b,
float a,
boolean drawOutlines)

**Parameters:**
- `TextDrawHorizontal` `horz`
- `double` `x`
- `double` `y`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `boolean` `drawOutlines`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\TextDrawObject.html`*
