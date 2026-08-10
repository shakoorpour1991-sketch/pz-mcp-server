---
title: zombie.ui.AtomUITextEntry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.AtomUITextEntry

`public class AtomUITextEntry extends AtomUI implements UITextEntryInterface`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.AtomUI
- zombie.ui.AtomUITextEntry

## Constructors

### public AtomUITextEntry(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public void render()

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void setFont(UIFont font)

**Parameters:**
- `UIFont` `font`

**Returns:** `void`

### public void setText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public void setMask(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isMask()

**Returns:** `boolean`

### public void focus()

**Returns:** `void`

### public void unfocus()

**Returns:** `void`

### public void onOtherKey(int eventKey)

**Parameters:**
- `int` `eventKey`

**Returns:** `void`

### public void putCharacter(char eventChar)

**Parameters:**
- `char` `eventChar`

**Returns:** `void`

### public boolean onConsumeMouseButtonDown(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `boolean`

### public Boolean onConsumeMouseMove(double dx,
double dy,
double x,
double y)

**Parameters:**
- `double` `dx`
- `double` `dy`
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void onExtendMouseMoveOutside(double dx,
double dy,
double x,
double y)

**Parameters:**
- `double` `dx`
- `double` `dy`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public boolean onConsumeMouseButtonUp(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `boolean`

### public void onMouseButtonUpOutside(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public boolean isDoingTextEntry()

**Returns:** `boolean`

### public void setDoingTextEntry(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isEditable()

**Returns:** `boolean`

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

### public void resetBlink()

**Returns:** `void`

### public void onKeyUp()

**Returns:** `void`

### public void onKeyDown()

**Returns:** `void`

### public void onKeyLeft()

**Returns:** `void`

### public void onKeyRight()

**Returns:** `void`

### public void onKeyDelete()

**Returns:** `void`

### public void onKeyBack()

**Returns:** `void`

### public void pasteFromClipboard()

**Returns:** `void`

### public void copyToClipboard()

**Returns:** `void`

### public void cutToClipboard()

**Returns:** `void`

### public void selectAll()

**Returns:** `void`

### public boolean isTextLimit()

**Returns:** `boolean`

### public boolean isOnlyNumbers()

**Returns:** `boolean`

### public boolean isOnlyText()

**Returns:** `boolean`

### public void setOnlyNumbers(boolean onlyNumbers)

**Parameters:**
- `boolean` `onlyNumbers`

**Returns:** `void`

### public void setOnlyText(boolean onlyText)

**Parameters:**
- `boolean` `onlyText`

**Returns:** `void`

### public int getMaxTextLength()

**Returns:** `int`

### public void setMaxTextLength(int maxtextLength)

**Parameters:**
- `int` `maxtextLength`

**Returns:** `void`

### public boolean getForceUpperCase()

**Returns:** `boolean`

### public void setForceUpperCase(boolean forceUpperCase)

**Parameters:**
- `boolean` `forceUpperCase`

**Returns:** `void`

### public boolean isMultiline()

**Returns:** `boolean`

### public void setMultiline(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public String getText()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\AtomUITextEntry.html`*
