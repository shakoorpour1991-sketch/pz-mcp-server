---
title: zombie.core.utils.ByteBlock
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.utils
---

# zombie.core.utils.ByteBlock

`public class ByteBlock extends Object`

**Kind:** class · **Package:** zombie.core.utils

## Inheritance
- java.lang.Object
- zombie.core.utils.ByteBlock

## Methods

### public static ByteBlock Start(ByteBuffer bb,
ByteBlock.Mode mode)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `ByteBlock.Mode` `mode`

**Returns:** `ByteBlock`

### public static void SkipAndEnd(ByteBuffer bb,
ByteBlock block)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `ByteBlock` `block`

**Returns:** `void`

### public static void End(ByteBuffer bb,
ByteBlock block)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `ByteBlock` `block`

**Returns:** `void`

### public void safelyForceSkipOnEnd()

**Returns:** `void`

### public void safelyForceSkipOnEnd(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int length()
throws IOException

**Returns:** `int`

### public boolean verify(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\utils\ByteBlock.html`*
