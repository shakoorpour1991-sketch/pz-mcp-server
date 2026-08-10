---
title: zombie.core.utils.BooleanGrid
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.utils
---

# zombie.core.utils.BooleanGrid

`public class BooleanGrid extends Object implements Serializable, Cloneable`

**Kind:** class · **Package:** zombie.core.utils

## Inheritance
- java.lang.Object
- zombie.core.utils.BooleanGrid

## Description

Boolean grid

## Constructors

### public BooleanGrid(int width,
int height)

C'tor

**Parameters:**
- `int` `width`
- `int` `height`

## Methods

### public BooleanGrid clone()
throws CloneNotSupportedException

**Returns:** `BooleanGrid`

### public void copy(BooleanGrid src)

**Parameters:**
- `BooleanGrid` `src`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void fill()

**Returns:** `void`

### public boolean getValue(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public void setValue(int x,
int y,
boolean newValue)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `newValue`

**Returns:** `void`

### public final int getWidth()

**Returns:** `int`

### public final int getHeight()

**Returns:** `int`

### public String toString()

**Returns:** `String`

### public void LoadFromByteBuffer(ByteBuffer cache)

**Parameters:**
- `ByteBuffer` `cache`

**Returns:** `void`

### public void PutToByteBuffer(ByteBuffer cache)

**Parameters:**
- `ByteBuffer` `cache`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\utils\BooleanGrid.html`*
