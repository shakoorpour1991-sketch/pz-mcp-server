---
title: zombie.ui.UITextBox2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UITextBox2

`public class UITextBox2 extends UIElement implements UITextEntryInterface`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.ui.UITextBox2

## Fields

### public Stack<String> lines

### public UINineGrid frame

### public String text

### public boolean doingTextEntry

### public int textEntryMaxLength

### public boolean isEditable

### public boolean multipleLine

### public String internalText

### public UIFont font

### public int numVisibleLines

### public int topLineIndex

### public boolean alwaysPaginate

### public boolean textChanged

## Constructors

### public UITextBox2(UIFont font,
int x,
int y,
int width,
int height,
String text,
boolean hasFrame)

**Parameters:**
- `UIFont` `font`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `String` `text`
- `boolean` `hasFrame`

## Methods

### public void setFont(UIFont font)

**Parameters:**
- `UIFont` `font`

**Returns:** `void`

### public void ClearHighlights()

**Returns:** `void`

### public void setMasked(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isMasked()

**Returns:** `boolean`

### public void onresize()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public float getFrameAlpha()

**Returns:** `float`

### public void setFrameAlpha(float alpha)

**Parameters:**
- `float` `alpha`

**Returns:** `void`

### public void setTextColor(ColorInfo newColor)

**Parameters:**
- `ColorInfo` `newColor`

**Returns:** `void`

### public void setTextRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public String getText()

**Returns:** `String`

### public String getInternalText()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public int getInset()

**Returns:** `int`

### public void setEditable(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isEditable()

**Returns:** `boolean`

### public void setSelectable(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isSelectable()

**Returns:** `boolean`

### public Boolean onMouseUp(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void onMouseUpOutside(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

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

### public void focus()

**Returns:** `void`

### public void unfocus()

**Returns:** `void`

### public void ignoreFirstInput()

**Returns:** `void`

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void updateText()

**Returns:** `void`

### public void SetText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public void setPlaceholderText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public String getPlaceholderText()

**Returns:** `String`

### public void setPlaceholderTextColor(ColorInfo color)

**Parameters:**
- `ColorInfo` `color`

**Returns:** `void`

### public void setPlaceholderTextRGBA(float r,
float g,
float b,
float a)

**Parameters:**
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void clearInput()

**Returns:** `void`

### public void onPressUp()

**Returns:** `void`

### public void onPressDown()

**Returns:** `void`

### public void onCommandEntered()

**Returns:** `void`

### public void onTextChange()

**Returns:** `void`

### public void onOtherKey(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public void onLostFocus()

**Returns:** `void`

### public int getMaxTextLength()

**Returns:** `int`

### public void setMaxTextLength(int maxTextLength)

**Parameters:**
- `int` `maxTextLength`

**Returns:** `void`

### public boolean getForceUpperCase()

**Returns:** `boolean`

### public void setForceUpperCase(boolean forceUpperCase)

**Parameters:**
- `boolean` `forceUpperCase`

**Returns:** `void`

### public boolean getHasFrame()

**Returns:** `boolean`

### public void setHasFrame(boolean hasFrame)

**Parameters:**
- `boolean` `hasFrame`

**Returns:** `void`

### public void setClearButton(boolean hasButton)

**Parameters:**
- `boolean` `hasButton`

**Returns:** `void`

### public boolean hasClearButton()

**Returns:** `boolean`

### public int toDisplayLine(int textOffset)

**Parameters:**
- `int` `textOffset`

**Returns:** `int`

### public void setMultipleLine(boolean multiple)

**Parameters:**
- `boolean` `multiple`

**Returns:** `void`

### public boolean isMultipleLine()

**Returns:** `boolean`

### public int getCursorLine()

**Returns:** `int`

### public void setCursorLine(int line)

**Parameters:**
- `int` `line`

**Returns:** `void`

### public int getCursorPos()

**Returns:** `int`

### public void setCursorPos(int charIndex)

**Parameters:**
- `int` `charIndex`

**Returns:** `void`

### public int getMaxLines()

**Returns:** `int`

### public void setMaxLines(int maxLines)

**Parameters:**
- `int` `maxLines`

**Returns:** `void`

### public boolean isFocused()

**Returns:** `boolean`

### public boolean isOnlyNumbers()

**Returns:** `boolean`

### public void setOnlyNumbers(boolean onlyNumbers)

**Parameters:**
- `boolean` `onlyNumbers`

**Returns:** `void`

### public boolean isOnlyText()

**Returns:** `boolean`

### public void setOnlyText(boolean onlyText)

**Parameters:**
- `boolean` `onlyText`

**Returns:** `void`

### public void resetBlink()

**Returns:** `void`

### public void selectAll()

**Returns:** `void`

### public boolean isDoingTextEntry()

**Returns:** `boolean`

### public void setDoingTextEntry(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public UINineGrid getFrame()

**Returns:** `UINineGrid`

### public boolean isIgnoreFirst()

**Returns:** `boolean`

### public void setIgnoreFirst(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public void setSelectingRange(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public Color getStandardFrameColour()

**Returns:** `Color`

### public void onKeyEnter()

**Returns:** `void`

### public void onKeyHome()

**Returns:** `void`

### public void onKeyEnd()

**Returns:** `void`

### public void onKeyUp()

**Returns:** `void`

### public void onKeyDown()

**Returns:** `void`

### public void onKeyLeft()

**Returns:** `void`

### public void onKeyRight()

**Returns:** `void`

### public void onKeyBack()

**Returns:** `void`

### public void onKeyDelete()

**Returns:** `void`

### public void pasteFromClipboard()

**Returns:** `void`

### public void cutToClipboard()

**Returns:** `void`

### public void copyToClipboard()

**Returns:** `void`

### public boolean isTextLimit()

**Returns:** `boolean`

### public void putCharacter(char eventChar)

**Parameters:**
- `char` `eventChar`

**Returns:** `void`

### public void setWrapLines(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setCentreVertically(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UITextBox2.html`*
