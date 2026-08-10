---
title: zombie.util.io.BitHeader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.io
---

# zombie.util.io.BitHeader

`public final class BitHeader extends Object`

**Kind:** class · **Package:** zombie.util.io

## Inheritance
- java.lang.Object
- zombie.util.io.BitHeader

## Fields

### public static final boolean DEBUG

## Methods

### public static void debug_print()

**Returns:** `void`

### public static BitHeaderWrite allocWrite(BitHeader.HeaderSize size,
ByteBuffer buffer)

**Parameters:**
- `BitHeader.HeaderSize` `size`
- `ByteBuffer` `buffer`

**Returns:** `BitHeaderWrite`

### public static BitHeaderWrite allocWrite(BitHeader.HeaderSize size,
ByteBuffer buffer,
boolean allocOnly)

**Parameters:**
- `BitHeader.HeaderSize` `size`
- `ByteBuffer` `buffer`
- `boolean` `allocOnly`

**Returns:** `BitHeaderWrite`

### public static BitHeaderRead allocRead(BitHeader.HeaderSize size,
ByteBuffer buffer)

**Parameters:**
- `BitHeader.HeaderSize` `size`
- `ByteBuffer` `buffer`

**Returns:** `BitHeaderRead`

### public static BitHeaderRead allocRead(BitHeader.HeaderSize size,
ByteBuffer buffer,
boolean allocOnly)

**Parameters:**
- `BitHeader.HeaderSize` `size`
- `ByteBuffer` `buffer`
- `boolean` `allocOnly`

**Returns:** `BitHeaderRead`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\io\BitHeader.html`*
