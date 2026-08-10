---
title: zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.animation.debug
---

# zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame

`public abstract class GenericNameValueRecordingFrame extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.animation.debug

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.animation.debug.GenericNameValueRecordingFrame

## Constructors

### public GenericNameValueRecordingFrame(String fileKey,
String valuesFileNameSuffix)

**Parameters:**
- `String` `fileKey`
- `String` `valuesFileNameSuffix`

## Methods

### public int getOrCreateColumn(String nodeName)

**Parameters:**
- `String` `nodeName`

**Returns:** `int`

### public void setFrameNumber(int frameNumber)

**Parameters:**
- `int` `frameNumber`

**Returns:** `void`

### public int getColumnCount()

**Returns:** `int`

### public String getNameAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `String`

### public abstract String getValueAt(int i)

**Parameters:**
- `int` `i`

**Returns:** `String`

### public void writeLine()

**Returns:** `void`

### public void close()

**Returns:** `void`

### public void closeAndDiscard()

**Returns:** `void`

### public abstract void reset()

**Returns:** `void`

### public static StringBuilder appendCell(StringBuilder logLine)

Append empty cell

**Parameters:**
- `StringBuilder` `logLine`

**Returns:** `StringBuilder`

### public static StringBuilder appendCell(StringBuilder logLine,
String cell)

Append text cell, no quotes

**Parameters:**
- `StringBuilder` `logLine`
- `String` `cell`

**Returns:** `StringBuilder`

### public static StringBuilder appendCell(StringBuilder logLine,
float cell)

Append numeric cell

**Parameters:**
- `StringBuilder` `logLine`
- `float` `cell`

**Returns:** `StringBuilder`

### public static StringBuilder appendCell(StringBuilder logLine,
int cell)

Append numeric cell

**Parameters:**
- `StringBuilder` `logLine`
- `int` `cell`

**Returns:** `StringBuilder`

### public static StringBuilder appendCell(StringBuilder logLine,
long cell)

Append numeric cell

**Parameters:**
- `StringBuilder` `logLine`
- `long` `cell`

**Returns:** `StringBuilder`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\animation\debug\GenericNameValueRecordingFrame.html`*
