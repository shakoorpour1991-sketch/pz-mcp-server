---
title: zombie.util.io.BitHeader.BitHeaderBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.io
---

# zombie.util.io.BitHeader.BitHeaderBase

`public abstract static class BitHeader.BitHeaderBase extends Object implements BitHeaderRead, BitHeaderWrite`

**Kind:** class · **Package:** zombie.util.io

## Inheritance
- java.lang.Object
- zombie.util.io.BitHeader.BitHeaderBase

## Constructors

### public BitHeaderBase()

## Methods

### public int getStartPosition()

**Returns:** `int`

### public abstract int getLen()

**Returns:** `int`

### public abstract void release()

**Returns:** `void`

### public void create()

**Returns:** `void`

### public void write()

**Returns:** `void`

### public void read()

**Returns:** `void`

### public void addFlags(int flags)

**Parameters:**
- `int` `flags`

**Returns:** `void`

### public void addFlags(long flags)

**Parameters:**
- `long` `flags`

**Returns:** `void`

### public boolean hasFlags(int flags)

**Parameters:**
- `int` `flags`

**Returns:** `boolean`

### public boolean hasFlags(long flags)

**Parameters:**
- `long` `flags`

**Returns:** `boolean`

### public boolean equals(int flags)

**Parameters:**
- `int` `flags`

**Returns:** `boolean`

### public boolean equals(long flags)

**Parameters:**
- `long` `flags`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\io\BitHeader.BitHeaderBase.html`*
