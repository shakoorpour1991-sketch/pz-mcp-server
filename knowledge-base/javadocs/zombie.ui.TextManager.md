---
title: zombie.ui.TextManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.TextManager

`public final class TextManager extends Object`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.TextManager

## Fields

### public AngelCodeFont font

### public AngelCodeFont font2

### public AngelCodeFont font3

### public AngelCodeFont font4

### public AngelCodeFont main1

### public AngelCodeFont main2

### public AngelCodeFont zombiefontcredits1

### public AngelCodeFont zombiefontcredits2

### public AngelCodeFont zombienew1

### public AngelCodeFont zombienew2

### public AngelCodeFont zombienew3

### public AngelCodeFont zomboidDialogue

### public AngelCodeFont codetext

### public AngelCodeFont codeSmall

### public AngelCodeFont codeMedium

### public AngelCodeFont codeLarge

### public AngelCodeFont debugConsole

### public AngelCodeFont intro

### public AngelCodeFont handwritten

### public final AngelCodeFont[] normal

### public final AngelCodeFont[] enumToFont

### public static SDFShader sdfShader

### public UIFont currentCodeFont

### public static final TextManager instance

### public ArrayList<TextManager.DeferedTextDraw> todoTextList

## Constructors

### public TextManager()

## Methods

### public void DrawString(double x,
double y,
String str)

**Parameters:**
- `double` `x`
- `double` `y`
- `String` `str`

**Returns:** `void`

### public void DrawString(double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawString(UIFont font,
double x,
double y,
double zoom,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `double` `zoom`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawString(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawStringUntrimmed(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawStringCentre(double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawStringCentre(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawStringCentre(AngelCodeFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `AngelCodeFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawStringCentreDefered(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextFromGameWorld()

**Returns:** `void`

### public void DrawStringRight(double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public TextDrawObject GetDrawTextObject(String str,
int maxLineWidth,
boolean restrictImages)

**Parameters:**
- `String` `str`
- `int` `maxLineWidth`
- `boolean` `restrictImages`

**Returns:** `TextDrawObject`

### public void DrawTextObject(double x,
double y,
TextDrawObject td)

**Parameters:**
- `double` `x`
- `double` `y`
- `TextDrawObject` `td`

**Returns:** `void`

### public void DrawStringBBcode(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public AngelCodeFont getNormalFromFontSize(int points)

**Parameters:**
- `int` `points`

**Returns:** `AngelCodeFont`

### public AngelCodeFont getFontFromEnum(UIFont font)

**Parameters:**
- `UIFont` `font`

**Returns:** `AngelCodeFont`

### public int getFontHeight(UIFont fontID)

**Parameters:**
- `UIFont` `fontID`

**Returns:** `int`

### public boolean isSdf(UIFont font)

**Parameters:**
- `UIFont` `font`

**Returns:** `boolean`

### public ArrayList<UIFont> getAllFonts(ArrayList<UIFont> result)

**Parameters:**
- `ArrayList<UIFont>` `result`

**Returns:** `ArrayList<UIFont>`

### public void DrawStringRight(UIFont font,
double x,
double y,
String str,
double r,
double g,
double b,
double a)

**Parameters:**
- `UIFont` `font`
- `double` `x`
- `double` `y`
- `String` `str`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void Init()
throws FileNotFoundException

**Returns:** `void`

### public boolean isAnyFontLoading()

**Returns:** `boolean`

### public boolean isUsingNonEnglishFonts()

**Returns:** `boolean`

### public int MeasureStringX(UIFont font,
String str)

**Parameters:**
- `UIFont` `font`
- `String` `str`

**Returns:** `int`

### public int CentreStringYOffset(UIFont font,
String str)

**Parameters:**
- `UIFont` `font`
- `String` `str`

**Returns:** `int`

### public int MeasureStringY(UIFont font,
String str)

**Parameters:**
- `UIFont` `font`
- `String` `str`

**Returns:** `int`

### public int MeasureStringYReal(UIFont font,
String str)

**Parameters:**
- `UIFont` `font`
- `String` `str`

**Returns:** `int`

### public int MeasureStringYOffset(UIFont font,
String str)

**Parameters:**
- `UIFont` `font`
- `String` `str`

**Returns:** `int`

### public int MeasureStringY(UIFont font,
String str,
boolean returnActualHeight,
boolean returnOffset)

**Parameters:**
- `UIFont` `font`
- `String` `str`
- `boolean` `returnActualHeight`
- `boolean` `returnOffset`

**Returns:** `int`

### public int MeasureFont(UIFont font)

**Parameters:**
- `UIFont` `font`

**Returns:** `int`

### public String WrapText(UIFont font,
String str,
int maxWidth)

**Parameters:**
- `UIFont` `font`
- `String` `str`
- `int` `maxWidth`

**Returns:** `String`

### public String WrapText(UIFont font,
String str,
int maxWidth,
int maxLines,
String maxLinesSuffix)

**Parameters:**
- `UIFont` `font`
- `String` `str`
- `int` `maxWidth`
- `int` `maxLines`
- `String` `maxLinesSuffix`

**Returns:** `String`

### public UIFont getCurrentCodeFont()

**Returns:** `UIFont`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\TextManager.html`*
