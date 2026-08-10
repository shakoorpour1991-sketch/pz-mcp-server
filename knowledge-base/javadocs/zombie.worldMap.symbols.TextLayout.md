---
title: zombie.worldMap.symbols.TextLayout
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.symbols
---

# zombie.worldMap.symbols.TextLayout

`public final class TextLayout extends Object`

**Kind:** class · **Package:** zombie.worldMap.symbols

## Inheritance
- java.lang.Object
- zombie.worldMap.symbols.TextLayout

## Fields

### public String text

### public String textWithoutFormatting

### public short numLines

### public short[] lineStartEnd

### public WorldMapTextStyleLayer textLayer

### public short[] lineLength

### public int maxLineLength

## Constructors

### public TextLayout()

## Methods

### public TextLayout set(String text1,
WorldMapTextStyleLayer textLayer1)

**Parameters:**
- `String` `text1`
- `WorldMapTextStyleLayer` `textLayer1`

**Returns:** `TextLayout`

### public TextLayout set(TextLayout other)

**Parameters:**
- `TextLayout` `other`

**Returns:** `TextLayout`

### public TextLayout splitLines(String text1)

**Parameters:**
- `String` `text1`

**Returns:** `TextLayout`

### public void addLine(short start,
short end)

**Parameters:**
- `short` `start`
- `short` `end`

**Returns:** `void`

### public void calculateLineLengths(WorldMapTextStyleLayer textLayer1)

**Parameters:**
- `WorldMapTextStyleLayer` `textLayer1`

**Returns:** `void`

### public int getMaxLineLength()

**Returns:** `int`

### public int getLineLength(int lineIndex)

**Parameters:**
- `int` `lineIndex`

**Returns:** `int`

### public float getLineOffsetX(int lineIndex)

**Parameters:**
- `int` `lineIndex`

**Returns:** `float`

### public int getFirstChar(int lineIndex)

**Parameters:**
- `int` `lineIndex`

**Returns:** `int`

### public int getLastChar(int lineIndex)

**Parameters:**
- `int` `lineIndex`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\symbols\TextLayout.html`*
