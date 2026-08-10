---
title: zombie.ui.ObjectTooltip
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.ObjectTooltip

`public final class ObjectTooltip extends UIElement`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.ObjectTooltip

## Fields

### public static float alphaStep

### public boolean isItem

### public InventoryItem item

### public IsoObject object

### public int padLeft

### public int padTop

### public int padRight

### public int padBottom

## Constructors

### public ObjectTooltip()

## Methods

### public static void checkFont()

**Returns:** `void`

### public UIFont getFont()

**Returns:** `UIFont`

### public int getLineSpacing()

**Returns:** `int`

### public void DrawText(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextCentre(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextRight(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawValueRight(int value,
int x,
int y,
boolean highGood)

**Parameters:**
- `int` `value`
- `int` `x`
- `int` `y`
- `boolean` `highGood`

**Returns:** `void`

### public void DrawValueRightNoPlus(int value,
int x,
int y)

**Parameters:**
- `int` `value`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void DrawValueRightNoPlus(float value,
int x,
int y)

**Parameters:**
- `float` `value`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void DrawTextureScaled(Texture tex,
double x,
double y,
double width,
double height,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledAspect(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawProgressBar(int x,
int y,
int w,
int h,
float f,
double r,
double g,
double b,
double a)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `float` `f`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public Boolean onMouseMove(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `Boolean`

### public void onMouseMoveOutside(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void show(IsoObject obj,
double x,
double y)

**Parameters:**
- `IsoObject` `obj`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public void hide()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void adjustWidth(int textX,
String text)

**Parameters:**
- `int` `textX`
- `String` `text`

**Returns:** `void`

### public ObjectTooltip.Layout beginLayout()

**Returns:** `ObjectTooltip.Layout`

### public void endLayout(ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public Texture getTexture()

**Returns:** `Texture`

### public void setCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void setMeasureOnly(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isMeasureOnly()

**Returns:** `boolean`

### public float getWeightOfStack()

**Returns:** `float`

### public void setWeightOfStack(float weight)

**Parameters:**
- `float` `weight`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\ObjectTooltip.html`*
